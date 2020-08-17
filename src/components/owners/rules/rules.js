import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import styled from 'styled-components'
import { colors, space } from 'src/tokens/index'

import { Formik } from 'formik'
import ToggleSliderInput from 'src/components/forms/toggleSliderInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { initialValues, validationSchema, listRules } from './utils'

const Divider = styled.hr`
  height: 1px;
  background: ${colors.base.borders};
  margin-top: ${space.s4};
  margin-bottom: ${space.s4};
  border: none;
`

const Rules = ({ rules, addRules, goToNextStep }) => {
  return (
    <>
      <Formik
        initialValues={initialValues(rules.rules)}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={(values) => {
          addRules(values)
          goToNextStep()
        }}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            {listRules.map((rule) => (
              <React.Fragment key={rule.name}>
                <ToggleSliderInput
                  key={rule.name}
                  name={rule.name}
                  title={rule.label}
                  subtitle={rule.subLabel}
                  value={formProps.values[rule.name]}
                  handleChange={formProps.handleChange}
                />
                <Divider />
              </React.Fragment>
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

Rules.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rules: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  addRules: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default Rules
