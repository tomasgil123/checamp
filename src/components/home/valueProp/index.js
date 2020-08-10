import styled from 'styled-components'
import { space } from 'src/tokens'
import Item from './item'

const Container = styled.div`
  margin-left: ${space.s4};
  margin-right: ${space.s4};
`

function ValueProp() {
  return (
    <Container>
      <Item text="Texto" srcImg="checamp-1.jpg" rowDirection="row" />
      <Item text="Texto" srcImg="checamp-2.jpg" rowDirection="row-reverse" />
    </Container>
  )
}

export default ValueProp
