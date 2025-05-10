import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useActions from './actions'

export const useWeatherStore = defineStore('weather', () => {
  const state = reactive({
    weather: {
      data: null,
      isLoading: false
    },
    forecast: {
      data: null,
      today: [],
      days: [],
      isLoading: false
    },
  })

  const actions = useActions({ state })

  return {
    state,
    ...actions
  }
})
