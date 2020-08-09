import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { space, colors } from 'src/tokens'

const ContainerMenuDrawer = styled.ul`
  top: 0px;
  left: 50px;
  position: absolute;
  z-index: 100;
  width: 250px;
  height: 110vh;
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
  padding-top: ${space.s12};
  padding-left: ${space.s12};
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
`

const Logo = styled.div`
  img {
    height: ${space.s16};
    width: ${space.s32};
  }
`

const GrayOverlay = ({ showOverlay, onClose }) => {
  return <GrayOverlayElement showOverlay={showOverlay} onClick={onClose} />
}

GrayOverlay.propTypes = {
  showOverlay: PropTypes.string,
  onClose: PropTypes.func,
}

const MenuDrawer = ({ translate, pages }) => {
  return (
    <ContainerMenuDrawer translate={translate}>
      <ContainerLogo>
        <Logo>
          <img
            src="https://d1o5877uy6tsnd.cloudfront.net/application-layout/outdoorsy-logo.svg"
            alt="cheCamp"
          />
        </Logo>
      </ContainerLogo>
      <ContainerNavigation>
        <div style={{ position: 'relative' }}>
          {pages.map((page) => (
            <li key={page.name}>
              <Link href={`/${page.link}`}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
        </div>
      </ContainerNavigation>
    </ContainerMenuDrawer>
  )
}

MenuDrawer.propTypes = {
  translate: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  pages: PropTypes.array,
}

export { MenuDrawer, GrayOverlay }