/* eslint-disable global-require */
/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { support } from 'src/utils'
import { space, colors } from 'src/tokens'

const ContainerMenuDrawer = styled.ul`
  top: 0px;
  left: 50px;
  position: absolute;
  z-index: 100;
  width: 250px;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: 0px 0 0 -50px;
  background-color: #f5f6fa;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(${(props) => props.translate}, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  padding-left: 0px;
`

const ContainerNavigation = styled.ul`
  padding-top: ${space.s6};
  padding-left: ${space.s6};
  padding-right: ${space.s6};
  li {
    list-style-type: none;
    padding: 10px 0;
    transition-delay: 2s;
  }
`

const GrayOverlayElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.showOverlay === '-0%' ? 'inherit' : 'none')};
`

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.base.borders};
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
`

const Logo = styled.div`
  img {
    height: auto;
    width: ${space.s48};
  }
`

const GrayOverlay = ({ showOverlay, onClose }) => {
  return <GrayOverlayElement showOverlay={showOverlay} onClick={onClose} />
}

GrayOverlay.propTypes = {
  showOverlay: PropTypes.string,
  onClose: PropTypes.func,
}

const TextLeftNumber = styled.span`
  padding-right: ${space.s2};
`

const NavigationOptionsInForm = () => {
  return (
    <>
      <li>
        <TextLeftNumber>¿Tenes una consulta? Escribinos por whatsapp al </TextLeftNumber>
        <a href={`https://wa.me/${support.supportNumberComplete}`} target="_blank">
          {support.supportNumber}
        </a>
      </li>
      <li>
        <Link href="/">
          <a>Salir</a>
        </Link>
      </li>
    </>
  )
}

const ImportantOption = styled.li`
  border-radius: 4px;
  background-color: ${colors.base.primaryGreen};
  text-align: center;
  color: ${colors.base.white};
  padding: ${space.s2} !important;
`

const Option = styled.li`
  text-align: center;
  padding: ${space.s2} !important;
`

const MenuDrawer = ({ translate, pages, isInForm }) => {
  const navigationOptions = isInForm ? (
    <NavigationOptionsInForm />
  ) : (
    <>
      {pages.map((page) => (
        <>
          {page.link === 'propietarios/tipo-de-vehiculo' ? (
            <ImportantOption key={page.name}>
              <Link href={`/${page.link}`}>
                <a>{page.name}</a>
              </Link>
            </ImportantOption>
          ) : (
            <Option key={page.name}>
              <Link href={`/${page.link}`}>
                <a>{page.name}</a>
              </Link>
            </Option>
          )}
        </>
      ))}
    </>
  )

  return (
    <ContainerMenuDrawer translate={translate}>
      <ContainerLogo>
        <Logo>
          <img src={require(`images/checamp_logo_horizontal.png`)} alt="Checamp" />
        </Logo>
      </ContainerLogo>
      <ContainerNavigation>
        <div style={{ position: 'relative' }}>{navigationOptions}</div>
      </ContainerNavigation>
    </ContainerMenuDrawer>
  )
}

MenuDrawer.propTypes = {
  translate: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  pages: PropTypes.array,
  isInForm: PropTypes.bool,
}

export { MenuDrawer, GrayOverlay }
