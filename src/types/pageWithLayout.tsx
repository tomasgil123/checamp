import { NextPage } from 'next'
import MainLayout from 'src/components/layout'

type PageWithMainLayout = NextPage & { layout: typeof MainLayout }

type PageWithLayout = PageWithMainLayout

export default PageWithLayout
