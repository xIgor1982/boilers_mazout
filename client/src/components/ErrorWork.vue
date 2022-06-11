<template>
	<v-card class='border-red'>
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
			:items="working"
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
</template>

<!-- <template>
	<div>
		<h1>Error</h1>
	</div>
</template> -->

<script>
import { ENDPOINT_SERVER } from '../config-server'

export default {
	name: 'ErrorWorker',
	data() {
		return {
			isWork: false,
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			headers: [
				{ text: 'ID', value: 'id_kotelnaya' },
				{ text: 'Имя', value: 'kot_name' },
				{ text: 'Адрес', value: 'kot_adress' },
				{ text: 'Error', value: '' },
				{ text: '', value: 'actions', sortable: false, width: '150px' },
			],
			working: [],
			loading: true,
		}
	},
	methods: {
		errorWorking() {
			console.log('errorWorking')
			fetch(`${ENDPOINT_SERVER}/api/kotelnaya`)
				.then(res => res.json())
				.then(res => {
					this.working = res
					this.loading = false
				})

			fetch(`${ENDPOINT_SERVER}/api/working/2`)
			.then(res => res.json())
				.then(res => {
					console.log('res', res)
				})
		},
	},
	mounted() {
		this.errorWorking()
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

</style>
