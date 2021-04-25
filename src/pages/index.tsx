import { FC } from 'react'

// * Components *
import Layout from 'src/components/layout'
import Landing from 'src/components/home/landing'
import HowItWorks from 'src/components/home/howItWorks/index'
import Questions from 'src/components/home/questions'
import Search from 'src/components/home/search'

// * Types *
import { GetStaticProps } from 'next'
import { Vehicle } from 'src/types/vehicleCard'
import PageWithLayout from 'src/types/pageWithLayout'

// * Requests *
import { getGroupOfRvs } from 'src/services/rvs'

interface HomeProps {
  rvsShowcase: Vehicle[] | null
}

const Home: FC<HomeProps> = ({ rvsShowcase }) => {
  return (
    <>
      <Landing />
      <div className="pt-12">
        <HowItWorks />
      </div>
      {rvsShowcase && <Search rvsShowcase={rvsShowcase} />}
      <Questions />
    </>
  )
}

;(Home as PageWithLayout<HomeProps>).layout = Layout

export const getStaticProps: GetStaticProps = async () => {
  const rvIds = process.env.ITEMS_TO_SHOWCASE_HOME
  let rvs = null
  if (rvIds) {
    const response = await getGroupOfRvs(rvIds.split(','))
    rvs = response.data
  }

  return {
    props: { rvsShowcase: rvs },
  }
}

export default Home
