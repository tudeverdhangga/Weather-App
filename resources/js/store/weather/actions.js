import API_URL from '@services'

import useFetchWeather from '@composables/useFetchWeather'

export default function useActions({ state }) {
  const { getIconUrl } = useFetchWeather()

  const getWeather = async (city) => {
    state.weather.isLoading = true

    try {
      const res = await API_URL.weather.fetchWeather(city)

      state.weather.data = res
      state.weather.isLoading = false
    } catch (error) {
      const status = error?.response?.status
      const message = error?.response?.data?.error
      console.error(`Error ${status}: ${message}`)
    } finally {
      state.weather.isLoading = false
    }
  }
  const getForecast = async (city) => {
    state.forecast.isLoading = true

    try {
      const res = await API_URL.weather.fetchForecast(city)
      const today = new Date().toLocaleDateString('en-CA')

      state.forecast.data = res.city

      // Today's hourly forecast
      state.forecast.today = res.list
        .filter((data) => data.dt_txt.startsWith(today))
        .map((data) => ({
          time: new Date(data.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          temp: Math.round(data.main.temp),
          icon: getIconUrl(data.weather[0].icon),
          rainChance: data.pop
        }))

      // 5-day forecast grouping per date
      const dailyMap = []
      res.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0]

        if (date < today) return

        let existing = dailyMap.find((d) => d.date === date)

        if (!existing) {
          existing = { date, data: [] }
          dailyMap.push(existing)
        }

        existing.data.push(item)
      })
      // Mapping each date
      const forecastDays = dailyMap.map(({ date, data }) => {
        const day = date === today ? 'Today' : new Date(date).toLocaleDateString('en-US', { weekday: 'long' })
        const weatherIcons = data.map((e) => e.weather[0].icon)
        const icon = getIconUrl(weatherIcons[Math.floor(data.length / 2)]) // Get the middle day icon
        const weatherDescriptions = data.map((e) => e.weather[0].main)
        const temps = data.map((e) => e.main.temp)

        return {
          day,
          icon,
          weather: weatherDescriptions[Math.floor(data.length / 2)], // Get the middle day weather
          tempMax: Math.round(Math.max(...temps)),
          tempMin: Math.round(Math.min(...temps)),
        }
      })
      state.forecast.days = forecastDays

      state.forecast.isLoading = false
    } catch (error) {
      const status = error?.response?.status
      const message = error?.response?.data?.error
      console.error(`Error ${status}: ${message}`)
    } finally {
      state.forecast.isLoading = false
    }
  }

  return {
    getWeather,
    getForecast,
  }
}
