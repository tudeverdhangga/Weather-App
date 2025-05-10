<script setup>
import TheCard from '@atoms/TheCard'
import TheSkeleton from '@atoms/TheSkeleton'
import TodayHourlyForecast from '@molecules/TodayHourlyForecast'

import useFetchWeather from '@composables/useFetchWeather'

const { forecast } = useFetchWeather()
</script>

<template>
	<div class="today-forecast">
		<TheCard title="TODAY'S FORECAST">
			<div class="today-forecast__content">
				<template v-if="forecast.isLoading">
					<TheSkeleton
						v-for="index in [1, 2, 3, 4, 5, 6, 7, 8]"
						:key="index"
						custom-style="width: calc(100%/8);"
					/>
				</template>
				<template v-else>
					<div
						v-for="(item) in forecast.today"
						:key="item.time"
						class="content-item"
						:style="`width: calc(100%/${forecast.today.length});`"
					>
						<TodayHourlyForecast
							:time="item.time"
							:icon="item.icon"
							:temp="item.temp"
						/>
					</div>
				</template>
			</div>
		</TheCard>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
