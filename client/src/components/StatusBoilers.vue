<template>
	<v-container>
		<h2 class="text-center mb-2">Состояние котельных</h2>
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
				:items="statusBoilers"
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
							Перейти
						</v-btn>
					</router-link>
				</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
import { ENDPOINT_SERVER } from '../config-server'

export default {
	name: 'StatusBoilers',
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			// headers: [
			// 	{ text: 'ID', value: 'id_kotelnaya' },
			// 	{ text: 'Имя', value: 'kot_name' },
			// 	{ text: 'Адрес', value: 'kot_adress' },
			// 	{ text: 'IP', value: 'kot_ip' },
			// 	{ text: 'Port', value: 'kot_port' },
			// 	{ text: 'Счетчики', value: 'all_cnt' },
			// 	{ text: '', value: 'actions', sortable: false, width: '150px' },
			// ],
			headers: [
				{ text: 'ID', value: 'id' },
				{ text: 'Имя', value: 'name' },
				{ text: 'Дата', value: 'date' },
				{ text: 'Время', value: 'time' },
				{ text: 'Отсутствие показаний', value: 'indication' },
				{ text: 'Количество счетчиков онлайн', value: 'count' },
				{ text: '', value: 'actions', sortable: false, width: '150px' },
			],
			statusBoilers: [],
			status: [],
			loading: true,
		}
	},
	methods: {
		addZero(txt) {
			return `0${txt}`.slice(-2)
		},
		fetchDate() {
			fetch(`${ENDPOINT_SERVER}/api/kotelnaya`)
				.then(res => res.json())
				.then(res => {
					this.statusBoilers = this.checkForNull(res)
					this.loading = false
				})
		},
		checkForNull(arr) {
			arr.forEach(item => {
				for (let key in item) {
					if (!item[key]) item[key] = '---'
				}
			})
			return arr
		},
		fetchStatus(id) {
			fetch(`${ENDPOINT_SERVER}/api/status/${id}`)
				.then(res => res.json())
				.then(res => {
					const tmpArray = []

					res.forEach(item => {
						const dt = new Date(item.dt)
						const date = `${this.addZero(dt.getDay())}.${this.addZero(
							dt.getMonth()
						)}.${dt.getFullYear()}`
						const time = `${dt.getHours()}:${this.addZero(
							dt.getMinutes()
						)}:${this.addZero(dt.getSeconds())}`
						const idReg = item.id_reg_Registers
						const value = item.value

						tmpArray.push({
							date,
							time,
							value,
							idReg,
						})
					})

					this.status = tmpArray
					this.loadingWorking = false
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
</style>
