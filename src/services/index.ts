import { Vehicle as VehicleCard } from 'src/types/vehicleCard'
import { Vehicle as VehicleProfile } from 'src/types/vehicleProfile'

const fetchRequest = (url: string, method: string): Promise<any> => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: method,
  })
}

interface ResponseAllRvs {
  data: VehicleCard[] | null
  error: string | null
  status: number
}

export const getAllRvs = async (): Promise<ResponseAllRvs> => {
  const response = await fetchRequest(`/api/getAllRvs`, 'GET')
  const responseData = await response.json()
  let data = null
  let error = null
  if (responseData.message) {
    error = responseData.message
  } else {
    data = responseData
  }

  return { status: response.status, data: data.data, error: error }
}

interface ResponseAllRvIds {
  data: { id: number }[] | null
  error: string | null
  status: number
}

export const getAllRvIds = async (): Promise<ResponseAllRvIds> => {
  const response = await fetchRequest(`/api/getAllRvIds`, 'GET')
  const responseData = await response.json()
  let data = null
  let error = null
  if (responseData.message) {
    error = responseData.message
  } else {
    data = responseData
  }

  return { status: response.status, data: data.data, error: error }
}

interface ResponseRv {
  data: VehicleProfile[] | null
  error: string | null
  status: number
}

export const getRv = async (id: string): Promise<ResponseRv> => {
  const response = await fetchRequest(`/api/getRv?id=${id}`, 'GET')
  const responseData = await response.json()
  let data = null
  let error = null
  if (responseData.message) {
    error = responseData.message
  } else {
    data = responseData
  }

  return { status: response.status, data: data.data, error: error }
}

interface ResponseAllCities {
  data: string[] | null
  error: string | null
  status: number
}

export const getAllCities = async (): Promise<ResponseAllCities> => {
  const response = await fetchRequest(`/api/getAllCities`, 'GET')
  const responseData = await response.json()
  let data = null
  let error = null
  if (responseData.message) {
    error = responseData.message
  } else {
    data = responseData
  }

  return { status: response.status, data: data.data, error: error }
}
