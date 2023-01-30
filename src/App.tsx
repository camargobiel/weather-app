import { useEffect, useState } from 'react';
import request from './utils/requestToWeatherApi';
import showCurrentWeatherImage from './utils/showCurrentWeatherImage';
import './styles/app.scss'
import Day from './components/Day';

function App() {
  const [data, setData]: [any, any] = useState([])

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
    <Day data={data} currentCondition={currentCondition} image={image} />
  )
}



export default App
