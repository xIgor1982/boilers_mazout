<template>
	<v-app>
		<headers></headers>

		<v-main>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app class="justify-center" color="rgb(244, 67, 54)">
			<div class="caption white--text">&copy; {{ date }}</div>
		</v-footer>
	</v-app>
</template>

<script>
import Headers from './components/Header.vue'

export default {
	components: { Headers },
	name: 'App',
	data: () => ({
		date: new Date().getFullYear(),
	}),
	mounted() {},
	methods: {},
}
</script>

<style scoped></style>
