<script setup>
import { onMounted } from 'vue'

import SearchBar from '@molecules/SearchBar'
import WeatherMain from '@organisms/WeatherMain'
import TodayForecast from '@organisms/TodayForecast'
import AirCondition from '@organisms/AirCondition'
import DaysForecast from '@organisms/DaysForecast'

import useFetchWeather from '@composables/useFetchWeather'

const { fetchAPI } = useFetchWeather()

onMounted(() => {
	fetchAPI()
})
</script>

<template>
	<div class="weather">
		<SearchBar />
		<div class="weather__content">
			<div class="content-left">
				<WeatherMain />
				<TodayForecast />
				<AirCondition />
			</div>
			<div class="content-right">
				<DaysForecast />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
