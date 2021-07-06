export interface Vehicle {
  id: number
  RvType: string
  RVBrand: string
  RVModel: string
  RVManufactureDate: string
  RVLength: number
  spaceForSleepers: number
  spaceForPassengers: number
  refrigerator: boolean
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
  towHitch: boolean
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
  cityGoogleMap: string
  titleListing: string
  descriptionListing: string
  pricePerDay: string | null
  priceExtra: string | null
  mainImages: string[]
  images?: string[] | null
  onPreview: boolean
  DriverMinimumAge: string
}

export type OverviewSection = Pick<
  Vehicle,
  | 'titleListing'
  | 'descriptionListing'
  | 'RvType'
  | 'RVBrand'
  | 'RVModel'
  | 'RVManufactureDate'
  | 'spaceForPassengers'
  | 'spaceForSleepers'
  | 'city'
  | 'DriverMinimumAge'
>

export type DetailsSpace = Pick<Vehicle, 'spaceForPassengers' | 'spaceForSleepers'>

export type Amenities = {
  amenities: Pick<
    Vehicle,
    | 'refrigerator'
    | 'kitchenSink'
    | 'diningTable'
    | 'microwave'
    | 'stoveRange'
    | 'oven'
    | 'airConditioner'
    | 'heater'
    | 'insideShower'
    | 'toilet'
    | 'satellite'
    | 'ceilingFan'
    | 'awning'
    | 'generator'
    | 'outsideShower'
    | 'towHitch'
    | 'bikeRack'
    | 'solar'
    | 'backupCamera'
    | 'extraStorage'
    | 'washerDryer'
    | 'inverter'
    | 'handicapAccesible'
    | 'tvDvd'
    | 'audioInputs'
    | 'radio'
    | 'wifi'
  >
}

export type OwnerRules = Pick<Vehicle, 'pets' | 'tailgating' | 'festivals' | 'smoking'>
