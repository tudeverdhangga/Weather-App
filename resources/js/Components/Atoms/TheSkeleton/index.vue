<script setup>
defineProps({
	width: {
		type: String,
		default: '100%',
	},
	height: {
		type: String,
		default: '100%',
	},
	customStyle: {
		type: String,
		default: '',
	},
});
</script>

<template>
  <div
		class="the-skeleton"
    :style="[{ width, height }, customStyle]"
  />
</template>

<style lang="scss">
  @import './styles.scss';
</style>


