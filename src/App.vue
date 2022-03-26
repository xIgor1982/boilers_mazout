<template>
	<v-app>
		<v-app-bar app color="red white--text">
			<v-container fluid>
					<router-link
						to="/"
						class="text--router-link"
					>
						АСУ «Мазут»            
					</router-link>
					<router-link
						to="/boilers"
						class="text--router-link"
					>
						Котельные            
					</router-link>
			</v-container>
		</v-app-bar>

		<!-- Размер вашего контента зависит от компонентов приложения -->
		<v-main>
			<!-- Обеспечивает приложению proper gutter -->
			<v-container>
				<!-- При использовании vue-маршрутизатора -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app> footer </v-footer>
	</v-app>
</template>

<script>
export default {
	name: "App",
	data: () => ({}),
};
</script>

<style scoped>
.text--router-link{
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

</style>
