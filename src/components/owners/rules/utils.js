import * as Yup from 'yup'
// eslint-disable-next-line import/prefer-default-export
export const initialValues = (rules) => {
  return {
    pets: rules.pets ? rules.pets : false,
    tailgating: rules.tailgating ? rules.tailgating : false,
    festivals: rules.festivals ? rules.festivals : false,
    smoking: rules.smoking ? rules.smoking : false,
  }
}

export const validationSchema = {
  pets: Yup.boolean(),
  tailgating: Yup.boolean(),
  festivals: Yup.boolean(),
  smoking: Yup.boolean(),
}

export const listRules = [
  { name: 'pets', label: 'Mascotas', subLabel: '¿Pueden los huéspedes llevar mascotas?' },
  {
    name: 'tailgating',
    label: 'Remolque',
    subLabel: '¿Pueden los huéspedes usar tu vehículo para hacer remolque?',
  },
  {
    name: 'festivals',
    label: 'Festivales o eventos',
    subLabel: '¿Pueden los huéspedes usar tu vehículo para ir a festivales o eventos?',
  },
  {
    name: 'smoking',
    label: 'Fumar',
    subLabel: '¿Pueden los huéspedes fumar dentro del vehículo?',
  },
]
