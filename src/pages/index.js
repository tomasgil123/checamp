import Header from 'src/components/header'
import Landing from 'src/components/home/landing'
import HowItWorks from 'src/components/home/howItWorks/index'
import ValueProp from 'src/components/home/valueProp'

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <HowItWorks />
      <ValueProp />
    </div>
  )
}
