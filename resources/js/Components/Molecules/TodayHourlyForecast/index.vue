<script setup>
defineProps({
	time: {
		type: String,
		default: '',
	},
	icon: {
		type: String,
		default: '',
	},
	temp: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<div class="today-hourly-forecast">
		<div class="today-hourly-forecast__time">
			{{ time }}
		</div>
		<div class="today-hourly-forecast__icon">
			<img :src="icon" alt="Weather Hour Icon">
		</div>
		<div class="today-hourly-forecast__temp">
			{{ temp }}°
		</div>
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
