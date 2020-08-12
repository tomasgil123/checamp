import Layout from 'src/components/layout'
import Landing from 'src/components/home/landing'
import HowItWorks from 'src/components/home/howItWorks/index'
import ValueProp from 'src/components/home/valueProp'

function Home() {
  return (
    <>
      <Landing />
      <HowItWorks />
      <ValueProp />
    </>
  )
}

Home.layout = Layout

export default Home
