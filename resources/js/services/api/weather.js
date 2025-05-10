import methods from '../methods'

const END_POINT = 'api'

const fetchWeather = (city) => methods.GET_API(`${END_POINT}/weather?${city}`)
const fetchForecast = (city) => methods.GET_API(`${END_POINT}/forecast?${city}`)

export default {
  fetchWeather,
  fetchForecast
}
