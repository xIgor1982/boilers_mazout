<template>
	<div>
		<h2 class="text-center mb-2">События</h2>
		<v-card>
			<v-card-title>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Поиск"
					single-line
					hide-details
					sort-by="lastOperDt"
					multi-sort
					:loading="loading"
				>
				</v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="eventNotice"
				:items-per-page="3"
				item-key="ordNumber"
				:footer-props="{
					'items-per-page-options': opts,
					'items-per-page-text': 'Количество отображаемых страниц!',
				}"
				class="elevation-1"
				:search="search"
			>
				<template v-slot:item.actions="{ item }">
					<router-link
						:to="{ name: 'counter', params: { id: item.id_kotelnaya } }"
						class="btn-link"
					>
						<v-btn
							block
							depressed
							class="white--text"
							color="rgba(244, 67, 54, 0.85)"
						>
							Параметры
						</v-btn>
					</router-link>
				</template>
			</v-data-table>
		</v-card>
	</div>
</template>

<script>
import { ENDPOINT_SERVER } from '../config-server'

export default {
	name: 'EventsNotice',
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			headers: [
				{ text: 'ID', value: 'id_not' },
				{ text: 'Тип сообщения', value: 'msqtype' },
				{ text: 'email', value: 'email' },
				{ text: 'Дата', value: 'dt' },
				{ text: 'Активно', value: 'active' },
			],
			eventNotice: [],
			loading: true,
		}
	},
	methods: {
		fetchDate() {
			fetch(`${ENDPOINT_SERVER}/api/status`)
				.then(res => {
					console.log('Первые данные res =', res)
					return res.json()
				})
				.then(res => {
					console.log('res ===', res)
					this.eventNotice = res
					this.loading = false
				})
		},		
	},
	mounted() {
		this.fetchDate()
	},
	watch: {
		$route(to, from) {
			this.fetchDate()
		},
	},
}
</script>

<style lang="scss" scoped>
a.btn-link {
	text-decoration: none;
}

table th:last-child {
	width: 80px;
}

table td:last-child {
	width: 80px;
}

.mb-2 {
	margin-bottom: 2rem;
}
</style>
