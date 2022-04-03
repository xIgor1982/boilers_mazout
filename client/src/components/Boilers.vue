<template>
	<v-container>
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
				:items="boilers"
				:items-per-page="3"
				item-key="ordNumber"
				:footer-props="{ 
					'items-per-page-options': opts, 
					'items-per-page-text': 'Количество отображаемых страниц'
					}"
				class="elevation-1"
				:search="search"
			>
				<template v-slot:item.actions="{ item }">
					<router-link
						:to="{ name: 'counter', params: { id: item.id_kotelnaya } }"
						class="btn"
					>
						Параметры
					</router-link>
				</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'Boilers',
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			headers: [
				{ text: 'ID', value: 'id_kotelnaya' },
				{ text: 'Имя', value: 'kot_name' },
				{ text: 'Адрес', value: 'kot_adress' },
				{ text: 'IP', value: 'kot_ip' },
				{ text: 'Port', value: 'kot_port' },
				{ text: 'Счетчики', value: 'all_cnt' },
				{ text: '', value: 'actions', sortable: false },
			],
			headers2: '',
			boilers: [],
			loading: true,
		}
	},
	methods: {
		fetchDate() {
			fetch('/api/kotelnaya')
				.then(res => res.json())
				.then(res => {
					this.boilers = this.checkForNull(res)
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
a.btn {
	border: 1px solid red;
	padding: 5px 15px;
	border-radius: 5px;
	color: red;
	text-decoration: none;
	transition: all 0.5s;

	&:hover {
		background: red;
		color: white;
	}
}
</style>
