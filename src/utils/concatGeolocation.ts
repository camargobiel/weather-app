export function concatGeoLocation(latitude: number, longitude: number) {
  return `http://api.weatherapi.com/v1/current.json?key=b58bfe5406084d93a54194208232701&q=${latitude},${longitude}&aqi=no`
}
