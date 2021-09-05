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
import LayoutForm from 'src/components/layout/layoutForm'
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
        <h2>Imágenes de tu motorhome</h2>
        <Subtitle>
          Compartinos algunas imágenes de tu motorhome para que los potenciales huéspedes puedan
          darse una mejor idea de cómo es
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Images goToNextStep={goToNextStep} />
      </ContainerFeatures>
      <ContainerHelpCard>
        <HelpCard title="Consejo">
          <span>
            Si ahora no tenés a mano las imágenes, no te preocupes. Podés completar el proceso de
            registro y cargarlas en otro momento
          </span>
        </HelpCard>
      </ContainerHelpCard>
    </Container>
  )
}

ImagesRV.layout = LayoutForm

export default ImagesRV
