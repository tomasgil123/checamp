import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { useRef } from 'react'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const containerPage = useRef()

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <div className="pb-12" ref={containerPage}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
