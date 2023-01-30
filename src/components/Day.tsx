import '../styles/day.scss'

function Day({data, currentCondition, image}: any) {
  return (
    <div className='day-container'>
      <div className='day-container__location'>
        <small>{data.location.name},  </small>
        <small>{data.location.region}</small>
      </div>
      <h3>Clima de hoje</h3>
      <div className='day-container__yellow-blur'></div>
      <div className='day-container__image'>
        <img src={image} />
      </div>
      <h3>{currentCondition}</h3>
      <h2>{data.current.temp_c}°</h2>
    </div>
  )
}

export default Day
