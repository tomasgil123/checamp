import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const saveDataInSpreadsheet = async (data, typeUser) => {
  const response = await axios.post('/api/database', { data, typeUser })
  return response
}
