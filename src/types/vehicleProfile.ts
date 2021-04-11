export interface Vehicle {
  id: number
  RvType: string
  RVBrand: string
  RVModel: string
  RVManufactureDate: string
  RVLength: number
  spaceForSleepers: number
  spaceForPassengers: number
  refrigerator: true
  kitchenSink: boolean
  diningTable: boolean
  microwave: boolean
  stoveRange: boolean
  oven: boolean
  airConditioner: boolean
  heater: boolean
  insideShower: boolean
  toilet: boolean
  satellite: boolean
  ceilingFan: boolean
  awning: boolean
  generator: boolean
  outsideShower: boolean
  towHitch: true
  bikeRack: boolean
  solar: boolean
  backupCamera: boolean
  extraStorage: boolean
  washerDryer: boolean
  inverter: boolean
  handicapAccesible: boolean
  tvDvd: boolean
  audioInputs: boolean
  radio: boolean
  wifi: boolean
  pets: boolean
  tailgating: boolean
  festivals: boolean
  smoking: boolean
  pickupAddress: string
  city: string
  titleListing: string
  descriptionListing: string
  pricePerDay: string | null
  priceExtra: string | null
  mainImages: string[]
  images?: string[] | null
}
