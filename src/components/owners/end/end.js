import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import MainButton from 'src/components/primitives/mainButton'
import { Subtitle, ContainerButton, ContainerLoader } from 'src/components/owners/general'
import Loader from 'src/components/primitives/loader'

function End({ ownerData, saveOwnerDataInit, resultRequest, isLoading }) {
  const router = useRouter()

  useEffect(() => {
    saveOwnerDataInit(ownerData)
  }, [])

  const retryDataSent = () => {
    saveOwnerDataInit(ownerData)
  }

  const goBackHome = () => {
    router.push({
      pathname: `/`,
    })
  }

  if (isLoading) {
    return (
      <ContainerLoader>
        <Subtitle>Estamos guardando tus datos. Espera unos segundos</Subtitle>
        <Loader secondary />
      </ContainerLoader>
    )
  }

  return (
    <div>
      {resultRequest ? (
        <div>
          <h2>¡Excelente! Tu Casa Rodante ya es parte de la red de Checamp</h2>
          <Subtitle>
            En cuanto tengamos un arrendatario interesado para tu Casa Rodante nos estaremos
            contactando con vos.
          </Subtitle>
          <Subtitle>
            Ante cualquier duda o consulta no dudes en escribirnos por whatsapp a cualquiera de
            nuestros representantes de atención al cliente
          </Subtitle>
          <ContainerButton>
            <MainButton text="Volver a la pagina principal" onClickButton={goBackHome} />
          </ContainerButton>
        </div>
      ) : (
        <div>
          <h2>Ups... parece que hubo un problema con el envio de tus datos</h2>
          <Subtitle>
            Por favor, reintenta enviarlos y si el problema persiste no dudes en escribirnos por
            whatsapp al número 11-5621-7620{' '}
          </Subtitle>
          <ContainerButton>
            <MainButton text="Reenviar datos" secondary onClickButton={retryDataSent} />
          </ContainerButton>
        </div>
      )}
    </div>
  )
}

End.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ownerData: PropTypes.object,
  saveOwnerDataInit: PropTypes.func,
  resultRequest: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default End
