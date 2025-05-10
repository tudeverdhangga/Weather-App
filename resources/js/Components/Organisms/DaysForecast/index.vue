<script setup>
import TheCard from '@atoms/TheCard'
import TheSkeleton from '@atoms/TheSkeleton'
import DayItemForecast from '@molecules/DayItemForecast'

import useFetchWeather from '@composables/useFetchWeather'

const { forecast } = useFetchWeather()
</script>

<template>
	<div class="days-forecast">
		<TheCard :title="`${forecast?.days?.length ?? 6}-DAY FORECAST`">
			<div class="days-forecast__content">
				<template v-if="forecast.isLoading">
					<TheSkeleton
						v-for="index in [1, 2, 3, 4, 5]"
						:key="index"
						height="20%"
					/>
				</template>
				<template v-else>
					<div
						v-for="(item) in forecast.days"
						:key="item.day"
						class="content-item"
						:style="`height: calc(100%/${forecast.days.length});`"
					>
						<DayItemForecast
							:day="item.day"
							:icon="item.icon"
							:weather="item.weather"
							:temp-max="item.tempMax"
							:temp-min="item.tempMin"
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
