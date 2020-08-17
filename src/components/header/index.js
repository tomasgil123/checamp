import { useState } from 'react'
import { useRouter } from 'next/router'
import { navigation } from 'src/utils/index'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  HeaderWrapper,
  Container,
  MenuLeft,
  MenuRight,
  Logo,
  ContainerTabs,
  Tab,
  ContainerImageLogo,
  FormTabs,
} from './headerComponents'
import { MenuDrawer, GrayOverlay } from './menuDrawer'

function Header({ isInForm }) {
  const [showMenuDrawer, setShowMenuDrawer] = useState('-500%')
  const router = useRouter()

  const onOpenMenuDrawer = () => {
    setShowMenuDrawer('-0%')
  }

  const onCloseMenuDrawer = () => {
    setShowMenuDrawer('-500%')
  }

  const onGoHome = () => {
    router.push({
      pathname: '/',
    })
  }

  const TabsHeader = isInForm ? (
    <FormTabs />
  ) : (
    <>
      {navigation.pages.map((page) => (
        <Tab>
          <Link href={`/${page.link}`}>
            <a>{page.name}</a>
          </Link>
        </Tab>
      ))}
    </>
  )

  return (
    <HeaderWrapper isInForm={isInForm}>
      <Container>
        <GrayOverlay showOverlay={showMenuDrawer} onClose={onCloseMenuDrawer} />
        <MenuDrawer
          translate={showMenuDrawer}
          onClose={onCloseMenuDrawer}
          pages={navigation.pages}
          isInForm={isInForm}
        />
        <MenuLeft onClick={onOpenMenuDrawer}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#272727"
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </MenuLeft>
        <Logo>
          <ContainerImageLogo onClick={onGoHome}>
            <img
              src="https://d1o5877uy6tsnd.cloudfront.net/application-layout/outdoorsy-logo.svg"
              alt="cheCamp"
            />
          </ContainerImageLogo>
        </Logo>
        <MenuRight />
        <ContainerTabs>{TabsHeader}</ContainerTabs>
      </Container>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  isInForm: PropTypes.bool,
}

export default Header
