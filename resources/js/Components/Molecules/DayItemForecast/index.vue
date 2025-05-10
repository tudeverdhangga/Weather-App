<script setup>
defineProps({
	day: {
		type: String,
		default: '',
	},
	icon: {
		type: String,
		default: '',
	},
	weather: {
		type: String,
		default: '',
	},
	tempMax: {
		type: String,
		default: '',
	},
	tempMin: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<div class="day-item-forecast">
		<div class="day-item-forecast__day">
			{{ day }}
		</div>
		<div class="day-item-forecast__weather">
			<div class="weather-icon">
				<img :src="icon" alt="Weather Hour Icon">
			</div>
			<div class="weather-label">{{ weather }}</div>
		</div>
		<div class="day-item-forecast__temp">
			<div class="temp-max">{{ tempMax }}</div>
			<div class="temp-min">/{{ tempMin }}</div>
		</div>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
