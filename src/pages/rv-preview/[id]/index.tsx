import RV from '../../rv/[id]/index'

// * Types *
import { GetStaticProps, GetStaticPaths } from 'next'

// * Utils *
import { getRv } from 'src/services/rvs/index'

export default RV

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const rv = await getRv(params.id as string)

  if (!rv.data[0].onPreview) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      rv: rv.data[0],
    },
  }
}
