<template>
	<div>
		<v-card>
			<!-- <v-toolbar flat color="rgb(244, 67, 54)" dark>
				<v-toolbar-title>Система управления</v-toolbar-title>
			</v-toolbar> -->
			<v-tabs vertical>
				<v-tab>
					<v-icon left> mdi-account </v-icon>
					Оповещение
				</v-tab>
				<v-tab>
					<v-icon left> mdi-lock </v-icon>
					Настройки
				</v-tab>

				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<events-notice />
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<options-notice />
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</div>
</template>

<script>
import OptionsNotice from './OptionsNotice.vue'
import EventsNotice from './EventsNotice.vue'

export default {
	name: 'SystemMonitoring',
	components: { OptionsNotice, EventsNotice },
	data: () => ({
		tab: 'option-1',
	}),
}
</script>

<style></style>
