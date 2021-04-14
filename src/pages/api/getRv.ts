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

// * types *
import { Vehicle } from 'src/types/vehicleProfile'

export default async (req, res): Promise<any> => {
  const { id } = req.query
  const { data: VehicleData, error } = await supabase.from<Vehicle>('Rvs').select('*').eq('id', id)

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
    res.statusCode = 400
    res.json({ message: error.message })
  }
  res.statusCode = 200
  res.json({ data: VehicleData })
}
