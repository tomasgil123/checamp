import { connect } from 'react-redux'
import { addImages } from 'src/actions/owners'
import { getImages } from 'src/reducers/owners'
import Images from './images'

const mapStateToProps = (state) => {
  return {
    imagesLinks: getImages(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addImages: (details) => dispatch(addImages(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Images)
