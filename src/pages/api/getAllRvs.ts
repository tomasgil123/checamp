import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_API_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (req, res): Promise<any> => {
  //TODO: handle pagination
  const { data: Rvs, error } = await supabase
    .from('Rvs')
    .select(
      'id, titleListing, RVManufactureDate, RVBrand, RVModel, city, pricePerDay, spaceForSleepers, spaceForPassengers, mainImages'
    )
    .range(0, 9)

  if (error) {
    res.statusCode = 400
    res.json({ message: error.message })
  }
  res.statusCode = 200
  res.json({ data: Rvs })
}
