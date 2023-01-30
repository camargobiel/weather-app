import '../styles/weatherComponent.scss'
import { ToggleMode } from './ToggleMode';

function WeatherComponent({data, currentCondition, image}: any) {
  return (
    <div className='day-container'>
      <div className='day-container__toggle'>
        <ToggleMode />
      </div>
      <div className='day-container__header'>
        <small>{data.location.name}, </small>
        <small>{data.location.region}</small>
      </div>
      <h3>Today's report</h3>
      <div className='day-container__yellow-blur'></div>
      <div className='day-container__blue-blur'></div>
      <div className='day-container__image'>
        <img src={image} />
      </div>
      <h3>{currentCondition}</h3>
      <h2>{data.current.temp_c}°C</h2>
      <div className='day-container__blue-blur'></div>
    </div>
  )
}

export default WeatherComponent
