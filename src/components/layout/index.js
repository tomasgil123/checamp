import Header from 'src/components/header'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
