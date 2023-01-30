import axios from 'axios'
import { concatGeoLocation } from './concatGeolocation'

async function request({latitude, longitude}: any) {
  const apiUrl = concatGeoLocation(latitude, longitude)
  return await axios.get(apiUrl)
}

export default request