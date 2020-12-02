'use strict'

import { NativeModules } from 'react-native'
const RNSimData = NativeModules.RNSimDataModule

export default {
  getSimInfo() {
    return RNSimData
  },
  getTelephoneNumber() {
    return RNSimData.phoneNumber0
  },
  getCarrierName() {
    return RNSimData.carrierName0
  },
  getCountryCode() {
    return RNSimData.countryCode0
  }
}
