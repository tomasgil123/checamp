import React, { useState } from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import styled from 'styled-components'
import { space, colors } from 'src/tokens'
import PropTypes from 'prop-types'

import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { textLocal, openUploadWidget } from './cloudinaryService'

const ContainerButton = styled.div`
  margin-top: ${space.s6};
  button {
    margin: auto;
  }
`

const NumberUploadedImages = styled.div`
  font-size: ${space.s4};
  font-weight: 400;
  color: ${colors.text.secondary};
  width: 100%;
`

const ErrorMessage = styled.div`
  padding-top: ${space.s4};
  padding-bottom: ${space.s4};
  color: ${colors.text.error};
`
// We had to use a global variable because doing setImages() when event === success wasnt working
// in the case the user uploaded more than one photo. It was only saving the last one
global.imagesToUpload = []

function Images({ imagesLinks, addImages, goToNextStep }) {
  const [images, setImages] = useState(imagesLinks.images)
  const [uploadImageError, setUploadImageError] = useState(false)
  const [loadingWidget, setLoadingWidget] = useState(false)

  const beginUpload = () => {
    setLoadingWidget(true)
    global.imagesToUpload = []

    const uploadOptions = {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      text: textLocal,
      sources: ['local', 'camera', 'facebook', 'instagram'],
    }

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          global.imagesToUpload.push(photos.info.secure_url)
          setUploadImageError(false)
        }
        if (photos.event === 'close') {
          setImages([...images, ...global.imagesToUpload])
        }
        setLoadingWidget(false)
      } else {
        setUploadImageError(true)
        setLoadingWidget(false)
      }
    })
  }

  const onGoToNextStep = () => {
    addImages(images)
    goToNextStep()
  }
  const uploadImagesText =
    images.length > 1 ? `Cargaste ${images.length} imagenes` : `Cargaste 1 imagen`
  const uploadedImagesView =
    images.length > 0 ? <NumberUploadedImages>{uploadImagesText}</NumberUploadedImages> : null

  const uploadImageErrorView = uploadImageError ? (
    <ErrorMessage>Ha ocurrido un error al cargar la imagen</ErrorMessage>
  ) : (
    <ErrorMessage />
  )

  return (
    <CloudinaryContext cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}>
      <ContainerButton>
        <MainButton
          isLoading={loadingWidget}
          text="Cargar imagen"
          onClickButton={beginUpload}
          secondary
          type="button"
        />
      </ContainerButton>
      {uploadImageErrorView}
      {uploadedImagesView}
      <WrapperSubmitSection />
      <ContainerSubmitButton>
        <MainButton text="Continuar" onClickButton={onGoToNextStep} type="button" />
      </ContainerSubmitButton>
    </CloudinaryContext>
  )
}

Images.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  imagesLinks: PropTypes.object,
  addImages: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default Images
