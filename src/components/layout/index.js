import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { useRef, useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const containerPage = useRef()
  const [addPositionAbsolute, setAddPositionAbsolute] = useState(false)
  useEffect(() => {
    if (containerPage && typeof window !== 'undefined') {
      //we add 150 because that is aproximately the footers height
      setAddPositionAbsolute(containerPage.current.clientHeight + 150 < window.innerHeight)
    }
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <div ref={containerPage}>{children}</div>
      <Footer addPositionAbsolute={addPositionAbsolute} />
    </div>
  )
}
