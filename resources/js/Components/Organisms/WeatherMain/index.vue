<script setup>
import TheSkeleton from '@atoms/TheSkeleton'

import useFetchWeather from '@composables/useFetchWeather'

const {
	weather,
	getIconUrl
} = useFetchWeather()

</script>

<template>
	<div class="weather-main">
		<div class="weather-main__info">
			<div class="info-city">
				<div class="info-city__name">
					<TheSkeleton v-if="weather.isLoading" width="150px" height="45px" />
					<template v-else>
						{{ weather?.data?.name ?? 'City' }}
					</template>
				</div>
				<div class="info-city__desc">
					<TheSkeleton v-if="weather.isLoading" width="150px" height="15px" />
					<template v-else>
						{{ weather?.data?.weather[0]?.description ?? 'Description' }}
					</template>
				</div>
			</div>
			<div class="info-temp">
				<TheSkeleton v-if="weather.isLoading" width="100px" height="100px" />
				<template v-else>
					{{ weather?.data?.main?.temp ?? '-' }}°
				</template>
			</div>
		</div>
		<div class="weather-main__icon">
			<TheSkeleton v-if="weather.isLoading" width="150px" height="150px" />
			<template v-else>
				<img :src="getIconUrl(weather?.data?.weather[0]?.icon ?? '01n')" alt="Weather Icon">
			</template>
		</div>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
