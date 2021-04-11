export interface Vehicle {
  id: number
  titleListing: string
  RVManufactureDate: string
  RVBrand: string
  RVModel: string
  city: string
  pricePerDay: string | null
  spaceForSleepers: number
  spaceForPassengers: number
  mainImages: string[]
}
