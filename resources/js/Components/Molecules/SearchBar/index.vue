<script setup>
import debounce from 'lodash/debounce'

import useFetchWeather from '@composables/useFetchWeather'

const { fetchAPI } = useFetchWeather()

const onSearch = debounce((event) => {
	fetchAPI(event.target.value)
}, 2000)
</script>

<template>
	<div class="search-bar">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for cities"
      class="search-input"
			@change="onSearch"
			@input="onSearch"
    />
  </div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
