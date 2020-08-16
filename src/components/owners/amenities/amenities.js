import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, breakpoints, space } from 'src/tokens/index'
import * as Yup from 'yup'

import { Formik } from 'formik'
import MinusPlusInput from 'src/components/forms/minusPlusInput'
import CheckboxInput from 'src/components/forms/checkboxInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { initialValues, validationSchema, listAmenities } from './utils'

const Divider = styled.hr`
  height: 1px;
  background: ${colors.base.borders};
  margin-top: ${space.s6};
  margin-bottom: ${space.s6};
  border: none;
`

const TypeAmenity = styled.div`
  font-size: ${space.s4};
  font-weight: 600;
  color: ${colors.text.primary};
  padding-bottom: ${space.s2};
`
const ContainerAmenities = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

const Column = styled.div`
  @media (min-width: ${breakpoints.md}) {
    flex: 1;
    max-width: 234px;
  }
`

const Amenities = ({ spaceRV, amenities, addSpace, addAmenities }) => {
  return (
    <>
      <h2>Espacio del vehiculo</h2>
      <Formik
        initialValues={initialValues(spaceRV, amenities)}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={(values) => {
          const { sleepers, passengers, ...allAmenities } = values
          addSpace(sleepers, passengers)
          addAmenities(allAmenities)
        }}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <MinusPlusInput
              key="sleepers"
              name="sleepers"
              title="Overnight guests"
              subtitle="How many people sleep comfortably in your rig"
              value={formProps.values.sleepers}
              handleChange={formProps.setFieldValue}
              formProps={formProps}
            />
            <MinusPlusInput
              key="passengers"
              name="passengers"
              title="Passangers"
              subtitle="Number of seats with seatbelts"
              value={formProps.values.passengers}
              handleChange={formProps.setFieldValue}
            />
            <Divider />
            <h2>Amenities</h2>
            {listAmenities.map((typeAmenity) => (
              <>
                <TypeAmenity>{typeAmenity.typeAmenity}</TypeAmenity>
                <ContainerAmenities>
                  <Column>
                    {typeAmenity.columns[0].items.map((amenityItem) => (
                      <CheckboxInput
                        key={amenityItem.name}
                        type="checkbox"
                        name={amenityItem.name}
                        label={amenityItem.label}
                        handleChange={formProps.handleChange}
                        handleBlur={formProps.handleBlur}
                        value={formProps.values[amenityItem.name]}
                        checked={amenityItem.checked}
                        unchecked={amenityItem.unchecked}
                      />
                    ))}
                  </Column>
                  <Column>
                    {typeAmenity.columns[1].items.map((amenityItem) => (
                      <CheckboxInput
                        key={amenityItem.name}
                        type="checkbox"
                        name={amenityItem.name}
                        label={amenityItem.label}
                        handleChange={formProps.handleChange}
                        handleBlur={formProps.handleBlur}
                        value={formProps.values[amenityItem.name]}
                        checked={amenityItem.checked}
                        unchecked={amenityItem.unchecked}
                      />
                    ))}
                  </Column>
                </ContainerAmenities>
              </>
            ))}
            <WrapperSubmitSection />
            <ContainerSubmitButton>
              <MainButton text="Continuar" onClickButton={undefined} type="submit" />
            </ContainerSubmitButton>
          </form>
        )}
      </Formik>
    </>
  )
}

Amenities.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spaceRV: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  amenities: PropTypes.object,
  addSpace: PropTypes.func,
  addAmenities: PropTypes.func,
}

export default Amenities
