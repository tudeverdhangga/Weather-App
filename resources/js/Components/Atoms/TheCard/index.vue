<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	}
});
</script>

<template>
	<div class="the-card">
		<div class="the-card__title">
			{{ title }}
		</div>

		<slot />
	</div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
