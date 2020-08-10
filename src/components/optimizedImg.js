/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'

const BlurImage = styled.div`
  & > img {
    filter: blur(20px);
    display: ${(props) => props.visibility};
    transition: display 0ms ease 400ms;
  }
`

const ContainerNormalImage = styled.div`
  img {
    opacity: ${(props) => props.opacity};
    transition: opacity 400ms ease 0ms;
  }
`

function OptimizedImg({ srcImg }) {
  const [isLoaded, setIsLoaded] = useState(true)

  return (
    <>
      <BlurImage visibility={isLoaded ? 'none' : 'inherit'}>
        <img src={require(`images/${srcImg}?lqip`)} alt="" />
      </BlurImage>
      <ContainerNormalImage opacity={isLoaded ? '1' : '0'}>
        <img
          onLoad={() => {
            setIsLoaded(true)
          }}
          src={require(`images/${srcImg}?webp`)}
          alt=""
        />
      </ContainerNormalImage>
    </>
  )
}

OptimizedImg.propTypes = {
  srcImg: PropTypes.string,
}

export default OptimizedImg
