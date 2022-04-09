<template>
	<div>
		<div class="wrapper-apexchart">
			<apexchart
				outlined
				tile
				width="100%"
				height="100%"
				type="bar"
				:options="options"
				:series="series"
			>
			</apexchart>
		</div>
	</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	name: 'ChartReports',
	components: { VueApexCharts },
	data: () => ({
		options: {
			chart: {
				id: 'vuechart-example',
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
			},
			fill: {
				colors: ['#F44336'],
			},
		},
		series: [
			{
				name: 'series-1',
				data: [30, 40, 45, 50, 49, 60, 70, 91],
			},
		],
	}),
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
