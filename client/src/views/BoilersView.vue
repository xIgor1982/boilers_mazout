<template>
	<div>
		<boilers></boilers>

		<!-- <status-boilers></status-boilers> -->

		<v-container>			
			<v-alert
				v-if="isMessage == 'error'"
				outlined
				type="error"
				prominent
				border="left"
			>
				Внимание! Не поступают данные с котельных.
			</v-alert>
			<v-alert
				v-else-if="isMessage == 'success'"
				outlined
				type="success"
				prominent
				border="left"
			>
				Данные с котельных поступают в штатном режиме.
			</v-alert>
			<v-alert
				v-else-if="isMessage == 'warning'"
				outlined
				type="warning"
				prominent
				border="left"
			>
				Внимание некорректные данные! Чередующиеся данные или другие
				некорректные данные.
			</v-alert>

			<error-work v-if="isMessage == 'error'" />
			<warning-work v-if="isMessage == 'warning'" />

			<br />
			<br />
			<hr />
			<h5>
				Тестовые переключатели для проверки работы сообщений о работе котельных.
			</h5>
			<v-radio-group v-model="radioGroup" row>
				<v-radio
					v-for="n in ['success', 'error', 'warning']"
					:key="n"
					:label="`${n}`"
					:value="n"
				></v-radio>
			</v-radio-group>
			<hr />
		</v-container>
	</div>
</template>

<script>
import Boilers from '../components/Boilers.vue'
import ErrorWork from '../components/ErrorWork.vue'
import WarningWork from '../components/WarningWork.vue'
import StatusBoilers from '../components/StatusBoilers.vue'

export default {
	components: { Boilers, ErrorWork, WarningWork, StatusBoilers },
	name: 'BoilersView',
	data() {
		return {
			radioGroup: 'success',
		}
	},
	computed: {
		isMessage() {
			return this.radioGroup
		},
	},
	methods: {},
}
</script>

<style>
.error-worker {
	padding: 12px;
}
</style>
