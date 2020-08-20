import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const saveDataInSpreadsheet = async (ownerData) => {
  const response = await axios.post('/api/database', ownerData)
  return response
}
