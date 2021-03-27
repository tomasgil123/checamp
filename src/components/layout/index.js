import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { useRef, useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const containerPage = useRef()
  const [addPositionAbsolute, setAddPositionAbsolute] = useState(false)
  useEffect(() => {
    if (containerPage && typeof window !== 'undefined') {
      setAddPositionAbsolute(containerPage.current.clientHeight === window.innerHeight)
    }
  }, [])

  return (
    <div ref={containerPage} style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      {children}
      <Footer addPositionAbsolute={addPositionAbsolute} />
    </div>
  )
}
