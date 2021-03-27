import React, { FC } from 'react'

import Layout from 'src/components/layout'

import PageWithLayout from 'src/types/pageWithLayout'

const RVRental: FC = () => {
  return <div>Rv rental</div>
}

;(RVRental as PageWithLayout).layout = Layout

export default RVRental
