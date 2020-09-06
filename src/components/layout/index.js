import Header from 'src/components/header'
import Footer from 'src/components/footer'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
