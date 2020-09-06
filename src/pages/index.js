import Layout from 'src/components/layout'
import Landing from 'src/components/home/landing'
import HowItWorks from 'src/components/home/howItWorks/index'
import Questions from 'src/components/home/questions'

function Home() {
  return (
    <>
      <Landing />
      <HowItWorks />
      <Questions />
    </>
  )
}

Home.layout = Layout

export default Home
