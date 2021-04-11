import React, { FC } from 'react'

// * Components *
import Layout from 'src/components/layout'
import ImageGrid from 'src/components/vehicleProfile/imageGrid'

// * Types *
import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleProfile'
import { GetStaticProps, GetStaticPaths } from 'next'

// * Utils *
import { getAllRvIds, getRv } from 'src/services/index'

interface RVProps {
  rv: Vehicle
}

const RV: FC<RVProps> = ({ rv }) => {
  const { images } = rv
  return (
    <div>
      <ImageGrid images={images} />
    </div>
  )
}

;(RV as PageWithLayout<RVProps>).layout = Layout

export default RV

// we have to convert id to a string because otherwise we got a typescript error
// https://github.com/vercel/next.js/discussions/16522

export const getStaticPaths: GetStaticPaths = async () => {
  const result = getAllRvIds()
  const rvIds = (await result).data.map((id) => {
    return { params: { id: id.id.toString() } }
  })
  return {
    paths: rvIds,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const rv = await getRv(params.id as string)

  return {
    props: {
      rv: rv.data[0],
    },
  }
}
