import snowSVG from '../assets/images/snow.svg'
import lightningSVG from '../assets/images/lightning.svg'
import cloudsSVG from '../assets/images/clouds.svg'
import sunSVG from '../assets/images/sun.svg'
import sunCloudsSVG from '../assets/images/sun-clouds.svg'
import rainSVG from '../assets/images/sun-clouds-rain.svg'

function showCurrentWeatherImage(condition: string) {
  condition = condition.toLowerCase();

  if (condition.includes('rain')) { return rainSVG }
  if (condition.includes('snow')) { return snowSVG }
  if (condition.includes('thunder')) { return lightningSVG }
  if (condition.includes('sunny')) { return sunSVG }
  if (condition.includes('cloudy')) { return cloudsSVG }
  if (condition.includes('partly cloudy')) { return sunCloudsSVG }
}

export default showCurrentWeatherImage