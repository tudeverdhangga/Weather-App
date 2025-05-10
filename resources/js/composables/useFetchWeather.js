import qs from 'qs'

import { useWeatherStore } from '@store/weather'
import { computed } from 'vue'

export default function useFetchWeather() {
  const weatherStore = useWeatherStore()

  const weather = computed(() => weatherStore?.state?.weather)
  const forecast = computed(() => weatherStore?.state?.forecast)

  const fetchWeather = (city = 'Denpasar') => {
    const params = qs.stringify({ city })
    weatherStore.getWeather(params)
  }
  const fetchForecast = (city = 'Denpasar') => {
    const params = qs.stringify({ city })
    weatherStore.getForecast(params)
  }
  const fetchAPI = (city = 'Denpasar') => {
    fetchWeather(city)
    fetchForecast(city)
  }
  const getIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`
  }

  return {
    weather,
    forecast,
    fetchAPI,
    fetchWeather,
    getIconUrl
  }
}
