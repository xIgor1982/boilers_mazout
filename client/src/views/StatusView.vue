<template>
	<div>
		<h1 class="text-center">Система мониторинга</h1>
		<system-monitoring></system-monitoring>
	</div>
</template>

<script>
import SystemMonitoring from '../components/SystemMonitoring.vue'

export default {
	name: 'StatusVue',
	components: { SystemMonitoring },
}
</script>

<style>
.exact-active-class {
    color: rgb(244, 67, 54) !important;
    caret-color: rgb(244, 67, 54) !important;
}
</style>
