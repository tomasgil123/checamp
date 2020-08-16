import * as Yup from 'yup'
// eslint-disable-next-line import/prefer-default-export
export const initialValues = (rules) => {
  return {
    pets: rules.pets ? rules.pets : true,
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
  { name: 'pets', label: 'Mascotas', subLabel: 'Pueden los huespedes llevar mascotas?' },
  {
    name: 'tailgating',
    label: 'Tailgating',
    subLabel: 'Pueden los huespedes usar tu vehiculo para hacer tailgating?',
  },
  {
    name: 'festivals',
    label: 'Festivales o eventos',
    subLabel: 'Pueden los huespedes usar tu vehiculo para ir a festivales o eventos?',
  },
  {
    name: 'smoking',
    label: 'Smoking',
    subLabel: 'Pueden los huespedes fumar dentro del vehiculo?',
  },
]
