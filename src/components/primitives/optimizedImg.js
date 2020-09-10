/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

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
  const [isChrome, setIsChrome] = useState(true)

  const multipleSizes = require(`images/${srcImg}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=2048`)

  useEffect(() => {
    // it seems only chrome support webp images. Firefox and safari wont sohw the image
    const isChromium = window.chrome
    const winNav = window.navigator
    const vendorName = winNav.vendor
    const isOpera = typeof window.opr !== 'undefined'
    const isIEedge = winNav.userAgent.indexOf('Edge') > -1
    const isIOSChrome = winNav.userAgent.match('CriOS')

    if (isIOSChrome) {
      // is Google Chrome on IOS
      setIsChrome(false)
    } else if (
      isChromium !== null &&
      typeof isChromium !== 'undefined' &&
      vendorName === 'Google Inc.' &&
      isOpera === false &&
      isIEedge === false
    ) {
      // is Google Chrome
      setIsChrome(false)
    } else {
      // not Google Chrome
      setIsChrome(false)
    }
  }, [])

  return (
    <>
      <BlurImage visibility={isLoaded ? 'none' : 'inherit'}>
        <img src={require(`images/${srcImg}?lqip`)} alt="" />
      </BlurImage>
      <ContainerNormalImage opacity={isLoaded ? '1' : '0'}>
        {isChrome ? (
          <img
            onLoad={() => {
              setIsLoaded(true)
            }}
            src={require(`images/${srcImg}?webp`)}
            alt=""
          />
        ) : (
          <img
            onLoad={() => {
              setIsLoaded(true)
            }}
            srcSet={multipleSizes.srcSet}
            src={multipleSizes.src}
            alt=""
          />
        )}
      </ContainerNormalImage>
    </>
  )
}

OptimizedImg.propTypes = {
  srcImg: PropTypes.string,
}

export default OptimizedImg
