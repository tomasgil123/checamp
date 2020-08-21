import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerHelpCard,
  ContainerLoader,
} from 'src/components/owners/general'
// import LayoutForm from 'src/components/layout/layoutForm'
import Layout from 'src/components/layout'
import Head from 'next/head'
import Images from 'src/components/owners/images'
import HelpCard from 'src/components/forms/helpCard'
import Loader from 'src/components/primitives/loader'

function ImagesRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return (
      <Container>
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      </Container>
    )
  }
  return (
    <Container>
      <Head>
        <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" />
      </Head>
      <ContainerTitle>
        <h2>Imagenes de tu vehiculo</h2>
        <Subtitle>
          Compartinos algunas imagenes de tu motor home para que los potenciales huespedes puedan
          darse una mejor idea de como es
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Images goToNextStep={goToNextStep} />
      </ContainerFeatures>
      <ContainerHelpCard>
        <HelpCard
          title="Consejo"
          body="Si no tenes a mano las imagenes como para cargarlas ahora lo podes hacer despues"
        />
      </ContainerHelpCard>
    </Container>
  )
}

ImagesRV.layout = Layout

export default ImagesRV
