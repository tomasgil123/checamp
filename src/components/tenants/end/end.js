/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { support } from 'src/utils'

import MainButton from 'src/components/primitives/mainButton'
import {
  Subtitle,
  ContainerButton,
  ContainerLoader,
  SupportNumber,
} from 'src/components/owners/general'
import Loader from 'src/components/primitives/loader'
import { motion } from 'framer-motion'

function End({ tenantData, saveTenantDataInit, resultRequest, isLoading }) {
  const router = useRouter()

  useEffect(() => {
    saveTenantDataInit(tenantData)
  }, [])

  const retryDataSent = () => {
    saveTenantDataInit(tenantData)
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, transition: { duration: 1.5 } },
        visible: { opacity: 1, transition: { duration: 1.5 } },
      }}
    >
      {resultRequest ? (
        <div>
          <h2>¡Excelente! Nos estaremos contactando con vos</h2>
          <Subtitle>
            Ante cualquier duda o consulta no dudes en escribirnos por whatsapp a cualquiera de
            nuestros representantes de atención al cliente
          </Subtitle>
          {support.allSupportNumbers.map((info) => (
            <SupportNumber
              name={info.name}
              number={info.number}
              numberComplete={info.numberComplete}
            />
          ))}
          <ContainerButton>
            <MainButton text="Volver a la página principal" onClickButton={goBackHome} />
          </ContainerButton>
        </div>
      ) : (
        <div>
          <h2>Ups... parece que hubo un problema con el envio de tus datos</h2>
          <Subtitle>
            Por favor, reintenta enviarlos y si el problema persiste no dudes en escribirnos por
            whatsapp al número{' '}
            <a href={`https://wa.me/${support.supportNumberComplete}`} target="_blank">
              {support.supportNumber}
            </a>
          </Subtitle>
          <ContainerButton>
            <MainButton text="Reenviar datos" secondary onClickButton={retryDataSent} />
          </ContainerButton>
        </div>
      )}
    </motion.div>
  )
}

End.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tenantData: PropTypes.object,
  saveTenantDataInit: PropTypes.func,
  resultRequest: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default End
