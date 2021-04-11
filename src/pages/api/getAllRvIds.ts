import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_API_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (req, res): Promise<any> => {
  //TODO: find a way to get the most relevant rv to create static pages
  const { data: Rvs, error } = await supabase.from('Rvs').select('id')

  if (error) {
    res.statusCode = 400
    res.json({ message: error.message })
  }
  res.statusCode = 200
  res.json({ data: Rvs })
}
