/* eslint-disable @typescript-eslint/no-var-requires */
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_API_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// * Types *
import { Vehicle as VehicleCard } from 'src/types/vehicleCard'
import { Vehicle as VehicleProfile } from 'src/types/vehicleProfile'

type ResponseAllRvs = { data: VehicleCard[] | null; message: string | null }

export const getAllRvs = async (): Promise<ResponseAllRvs> => {
  const { data: Rvs, error } = await supabase
    .from('Rvs')
    .select(
      'id, titleListing, RVManufactureDate, RVBrand, RVModel, city, pricePerDay, spaceForSleepers, spaceForPassengers, mainImages, RvType'
    )

  if (error) {
    return { data: null, message: error.message }
  }
  return { data: Rvs, message: null }
}

interface ResponseRv {
  data: VehicleProfile[] | null
  message: string | null
}

export const getRv = async (id: string): Promise<ResponseRv> => {
  const { data: VehicleData, error } = await supabase
    .from<VehicleProfile>('Rvs')
    .select('*')
    .eq('id', id)

  let rvImages: string[] = []
  try {
    const result = await cloudinary.search
      .expression(`resource_type:image AND folder:${process.env.NODE_ENV}/rvs/${id}/*`)
      .max_results(30)
      .execute()
    rvImages = result.resources.map((resource) => resource.secure_url)
  } catch (err) {
    //TODO: log the error somewhere
  }
  //we reorder the array of images in order to show the mainImages first
  if (rvImages.length > 0) {
    VehicleData[0].mainImages.forEach((mainImage) => {
      const indexMainImage = rvImages.indexOf(mainImage)
      rvImages.splice(indexMainImage, 1)
    })
    VehicleData[0].images = [...VehicleData[0].mainImages, ...rvImages]
  }

  if (error) {
    return { data: null, message: error.message }
  }
  return { data: VehicleData, message: null }
}

interface ResponseAllRvIds {
  data: { id: number }[] | null
  message: string | null
}

export const getAllRvIds = async (): Promise<ResponseAllRvIds> => {
  //TODO: find a way to get the most relevant rv to create static pages
  const { data: Rvs, error } = await supabase.from('Rvs').select('id')

  if (error) {
    return { data: null, message: error.message }
  }
  return { data: Rvs, message: null }
}
