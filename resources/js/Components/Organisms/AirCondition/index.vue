<script setup>
import TheCard from '@atoms/TheCard'
import TheSkeleton from '@atoms/TheSkeleton'

import useFetchWeather from '@composables/useFetchWeather'

const { weather, forecast } = useFetchWeather()
</script>

<template>
	<div class="air-condition">
		<TheCard title="AIR CONDITION">
			<div class="air-condition__container">
				<div class="container-row">
					<div class="container-column">
						<div class="container-column__content">
							<div class="content-icon">
								<i class="fa fa-thermometer-half" />
							</div>
							<div class="content-label">
								<div class="content-label__name">Real Feel</div>
								<div class="content-label__temp">
									<TheSkeleton
										v-if="weather.isLoading"
										height="50px"
										width="80px"
									/>
									<template v-else>{{ weather?.data?.main?.feels_like }}°</template>
								</div>
							</div>
						</div>
					</div>
					<div class="container-column">
						<div class="container-column__content">
							<div class="content-icon">
								<i class="fas fa-tint" />
							</div>
							<div class="content-label">
								<div class="content-label__name">Chance of Rain</div>
								<div class="content-label__temp">
									<TheSkeleton
										v-if="forecast.isLoading"
										height="50px"
										width="80px"
									/>
									<template v-else>
										{{ Math.round(Math.max(...forecast.today.map(i => i.rainChance)) * 100) }}%
									</template>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container-row">
					<div class="container-column">
						<div class="container-column__content">
							<div class="content-icon">
								<i class="fas fa-wind" />
							</div>
							<div class="content-label">
								<div class="content-label__name">Wind</div>
								<div class="content-label__temp">
									<TheSkeleton
										v-if="weather.isLoading"
										height="50px"
										width="80px"
									/>
									<template v-else>{{ weather?.data?.wind?.speed }} km/h</template>
								</div>
							</div>
						</div>
					</div>
					<div class="container-column">
						<div class="container-column__content">
							<div class="content-icon">
								<i class="fas fa-cloud"></i>
							</div>
							<div class="content-label">
								<div class="content-label__name">Cloudiness</div>
								<div class="content-label__temp">
									<TheSkeleton
										v-if="weather.isLoading"
										height="50px"
										width="80px"
									/>
									<template v-else>{{ weather?.data?.clouds?.all }}%</template>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TheCard>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
