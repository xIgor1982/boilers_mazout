<template>
	<v-app-bar app color="rgb(244, 67, 54)" class="white--text" height="100px">
		<v-container>
			<h1 class="main-h1">АСУ «Мазут»</h1>
			<router-link to="/" class="text--router-link" :class="activeClass">
				Котельные
			</router-link>
			<router-link to="/reports" class="text--router-link">
				Отчеты
			</router-link>
			<router-link to="/status" class="text--router-link">
				Состояние
			</router-link>
		</v-container>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Headers',
	data: () => ({
		activeClass: '',
		date: new Date().getFullYear(),
	}),
	watch: {
		$route(to, from) {
			this.activeClass = this.$route.path.includes('/counter/')
				? 'router-link-exact-active'
				: ''
		},
	},
}
</script>

<style scoped>
.text--router-link {
	font-size: 1.5rem;
	text-decoration: none;
	padding: 2px 10px;
	color: white;
	border-top: 4px solid transparent;
	border-bottom: 4px solid transparent;
}

.text--router-link.router-link-exact-active {
	border-bottom: 4px solid white;
}

.main-h1 {
	display: block;
	width: 100%;
	text-align: center;
}
</style>
