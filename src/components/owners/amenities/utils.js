import * as Yup from 'yup'
// eslint-disable-next-line import/prefer-default-export
export const initialValues = (space, amenities) => {
  return {
    sleepers: space.sleepers,
    passengers: space.passengers,
    refrigerator: amenities.refrigerator ? amenities.refrigerator : false,
    kitchenSink: amenities.kitchenSink ? amenities.kitchenSink : false,
    diningTable: amenities.diningTable ? amenities.diningTable : false,
    microwave: amenities.microwave ? amenities.microwave : false,
    stoveRange: amenities.stoveRange ? amenities.stoveRange : false,
    oven: amenities.oven ? amenities.oven : false,
    airConditioner: amenities.airConditioner ? amenities.airConditioner : false,
    heater: amenities.heater ? amenities.heater : false,
    insideShower: amenities.insideShower ? amenities.insideShower : false,
    toilet: amenities.toilet ? amenities.toilet : false,
    satellite: amenities.satellite ? amenities.satellite : false,
    ceilingFan: amenities.ceilingFan ? amenities.ceilingFan : false,
    awning: amenities.awning ? amenities.awning : false,
    generator: amenities.generator ? amenities.generator : false,
    outsideShower: amenities.outsideShower ? amenities.outsideShower : false,
    towHitch: amenities.towHitch ? amenities.towHitch : false,
    bikeRack: amenities.bikeRack ? amenities.bikeRack : false,
    solar: amenities.solar ? amenities.solar : false,
    backupCamera: amenities.backupCamera ? amenities.backupCamera : false,
    extraStorage: amenities.extraStorage ? amenities.extraStorage : false,
    washerDryer: amenities.washerDryer ? amenities.washerDryer : false,
    inverter: amenities.inverter ? amenities.inverter : false,
    handicapAccesible: amenities.handicapAccesible ? amenities.handicapAccesible : false,
    tvDvd: amenities.tvDvd ? amenities.tvDvd : false,
    audioInputs: amenities.audioInputs ? amenities.audioInputs : false,
    radio: amenities.radio ? amenities.radio : false,
    wifi: amenities.wifi ? amenities.wifi : false,
  }
}

export const validationSchema = {
  sleepers: Yup.number(),
  passengers: Yup.number(),
  refrigerator: Yup.boolean(),
  kitchenSink: Yup.boolean(),
  diningTable: Yup.boolean(),
  microwave: Yup.boolean(),
  stoveRange: Yup.boolean(),
  oven: Yup.boolean(),
  airConditioner: Yup.boolean(),
  heater: Yup.boolean(),
  insideShower: Yup.boolean(),
  toilet: Yup.boolean(),
  satellite: Yup.boolean(),
  ceilingFan: Yup.boolean(),
  awning: Yup.boolean(),
  generator: Yup.boolean(),
  outsideShower: Yup.boolean(),
  towHitch: Yup.boolean(),
  bikeRack: Yup.boolean(),
  solar: Yup.boolean(),
  backupCamera: Yup.boolean(),
  extraStorage: Yup.boolean(),
  washerDryer: Yup.boolean(),
  inverter: Yup.boolean(),
  handicapAccesible: Yup.boolean(),
  tvDvd: Yup.boolean(),
  audioInputs: Yup.boolean(),
  radio: Yup.boolean(),
  wifi: Yup.boolean(),
}

export const listAmenities = [
  {
    typeAmenity: 'Cocina',
    columns: [
      {
        items: [
          {
            label: 'Heladera',
            name: 'refrigerator',
            checked: '0 -384px',
            unchecked: '-24px -384px',
          },
          {
            label: 'Pileta lavaplatos',
            name: 'kitchenSink',
            checked: '0 -408px',
            unchecked: '-24px -408px',
          },
          {
            label: 'Mesa comedor',
            name: 'diningTable',
            checked: '0 -480px',
            unchecked: '-24px -480px',
          },
        ],
      },
      {
        items: [
          {
            label: 'Microhondas',
            name: 'microwave',
            checked: '0 -288px',
            unchecked: '-24px -288px',
          },
          {
            label: 'Hornallas',
            name: 'stoveRange',
            checked: '0 -456px',
            unchecked: '-24px -456px',
          },
          {
            label: 'Horno',
            name: 'oven',
            checked: '0 -336px',
            unchecked: '-24px -336px',
          },
        ],
      },
    ],
  },
  {
    typeAmenity: 'General',
    columns: [
      {
        items: [
          {
            label: 'Aireacondicionado',
            name: 'airConditioner',
            checked: '0px 0px',
            unchecked: '-24px 0px',
          },
          {
            label: 'Calefacción',
            name: 'heater',
            checked: '0 -216px',
            unchecked: '-24px -216px',
          },
          {
            label: 'Ducha interna',
            name: 'insideShower',
            checked: '0 -240px',
            unchecked: '-24px -240px',
          },
          {
            label: 'Baño',
            name: 'toilet',
            checked: '0 -528px',
            unchecked: '-24px -528px',
          },
          {
            label: 'Satelite',
            name: 'satellite',
            checked: '0 -648px',
            unchecked: '-24px -648px',
          },
          {
            label: 'Ventilador',
            name: 'ceilingFan',
            checked: '0 -624px',
            unchecked: '-24px -624px',
          },
          {
            label: 'Toldo',
            name: 'awning',
            checked: '0 -48px',
            unchecked: '-24px -48px',
          },
          {
            label: 'Generador',
            name: 'generator',
            checked: '0 -168px',
            unchecked: '-24px -168px',
          },
          {
            label: 'Ducha externa',
            name: 'outsideShower',
            checked: '0 -312px',
            unchecked: '-24px -312px',
          },
        ],
      },
      {
        items: [
          {
            label: 'Gancho remolque',
            name: 'towHitch',
            checked: '0 -552px',
            unchecked: '-24px -552px',
          },
          {
            label: 'Bicicletero',
            name: 'bikeRack',
            checked: '0 -96px',
            unchecked: '-24px -96px',
          },
          {
            label: 'Energia solar',
            name: 'solar',
            checked: '0 -432px',
            unchecked: '-24px -432px',
          },
          {
            label: 'Cámara marcha atrás',
            name: 'backupCamera',
            checked: '0 -72px',
            unchecked: '-24px -72px',
          },
          {
            label: 'Porta equipaje',
            name: 'extraStorage',
            checked: '0 -144px',
            unchecked: '-24px -144px',
          },
          {
            label: 'Lavarropas/secadora',
            name: 'washerDryer',
            checked: '0 -576px',
            unchecked: '-24px -576px',
          },
          {
            label: 'Convertidor de corriente',
            name: 'inverter',
            checked: '0 -264px',
            unchecked: '-24px -264px',
          },
          {
            label: 'Apta personas con discapacidad',
            name: 'handicapAccesible',
            checked: '0 -192px',
            unchecked: '-24px -192px',
          },
        ],
      },
    ],
  },
  {
    typeAmenity: 'Entretenimiento',
    columns: [
      {
        items: [
          {
            label: 'TV',
            name: 'tvDvd',
            checked: '0 -504px',
            unchecked: '-24px -504px',
          },
          {
            label: 'Audio',
            name: 'audioInputs',
            checked: '0 -24px',
            unchecked: '-24px -24px',
          },
        ],
      },
      {
        items: [
          {
            label: 'Radio',
            name: 'radio',
            checked: '0 -360px',
            unchecked: '-24px -360px',
          },
          {
            label: 'Wifi',
            name: 'wifi',
            checked: '0 -600px',
            unchecked: '-24px -600px',
          },
        ],
      },
    ],
  },
]
