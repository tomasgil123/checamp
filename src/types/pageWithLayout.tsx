import { NextPage } from 'next'
import MainLayout from 'src/components/layout'

type PageWithMainLayout<PropTypes> = NextPage<PropTypes> & { layout: typeof MainLayout }

type PageWithLayout<PropTypes> = PageWithMainLayout<PropTypes>

export default PageWithLayout
