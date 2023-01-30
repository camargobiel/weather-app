import { useEffect, useState } from 'react';
import request from './utils/requestToWeatherApi';
import showCurrentWeatherImage from './utils/showCurrentWeatherImage';
import './styles/app.scss'
import WeatherComponent from './components/WeatherComponent';
import { Data } from './interfaces/data.interface';
import { defaultDataValue } from './constraints/defaultDataValue';

function App() {
  const [data, setData]: [Data, Function] = useState(defaultDataValue)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({coords}) => {
      const response = await request(coords);
      setData(response.data)
    })
  }, [])

  if (!data?.location?.name) { return }

  const currentCondition = data.current.condition.text;
  const image = showCurrentWeatherImage(currentCondition);

  return (
    <div>
      <WeatherComponent data={data} currentCondition={currentCondition} image={image} />
    </div>
  )
}



export default App
