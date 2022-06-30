<template>
	<div>
		<h1 class="text-center">Связь с котельной</h1>
		<reports></reports>
		<!-- <chart-reports></chart-reports> -->
	</div>
</template>

<script>
import Reports from '../components/Reports.vue'
import ChartReports from '../components/ChartReports.vue'

export default {
	components: { Reports, ChartReports },
	data: () => ({}),
	methods: {},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.wrapper-apexchart {
	border: 1px solid rgba(0, 0, 0, 0.42);
	width: 100%;
	height: 500px;
	margin-top: 25px;
	padding: 10px;
	border-radius: 5px;
}
</style>
