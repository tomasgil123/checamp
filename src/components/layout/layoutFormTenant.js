import { useRouter } from 'next/router'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { PageNavigationContext } from 'src/context'
import { boxShadow } from 'src/tokens'

import Header from 'src/components/header'

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: ${(props) => (`${props.overflowHidden}` ? `hidden` : `inherit`)};
`

const ContainerHeader = styled.div`
  & > div {
    box-shadow: ${boxShadow.shadow} !important;
  }
`

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const router = useRouter()

  // For some reason useState only works here if React is undefined
  // if we import React it breaks

  // eslint-disable-next-line no-undef
  const [showContent, setShowContent] = React.useState(true)
  // eslint-disable-next-line no-undef

  const goToNextStep = () => {
    setShowContent(false)
    setTimeout(function () {
      router.push({
        pathname: `/propietarios/fin`,
      })
    }, 500)
  }

  return (
    <Container>
      <ContainerHeader>
        <Header isInForm />
      </ContainerHeader>
      <AnimatePresence>
        {showContent && (
          <motion.div
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            exit={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PageNavigationContext.Provider value={{ goToNextStep }}>
              {children}
            </PageNavigationContext.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}
