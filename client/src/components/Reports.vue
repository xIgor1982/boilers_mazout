<template>
	<v-container>
		<v-select
			v-model="select"
			:hint="`${select.state}, ${select.abbr}`"
			:items="items"
			item-text="state"
			item-value="abbr"
			label="Select"
			persistent-hint
			return-object
			single-line
		></v-select>

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
					:loading="loadingWorking"
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
				<!-- <template v-slot:item.actions="{ item }">
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
				</template> -->
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
import { ENDPOINT_SERVER } from '../config-server'

export default {
	name: 'Reports',
	data: () => ({
		boilers: [],
		select: {},
		items: [],
		opts: [5, 7, 9, 11, 13, -1],
		search: '',
		headers: [
			{ text: 'ID датчика', value: 'id_consum' },
			{ text: 'Дата и время передачи', value: 'dt' },
			{ text: 'Значение', value: 'value' },
			{ text: 'ID регистра', value: 'id_reg_Registers' },
			{ text: '', value: 'actions', sortable: false, width: '150px' },
		],
		working: [],
		loadingWorking: true,
	}),
	methods: {
		fetchDate() {
			fetch(`${ENDPOINT_SERVER}/api/kotelnaya`)
				.then(res => res.json())
				.then(res => {
					res.forEach((elem, idx) => {
						this.items.push({
							state: elem['kot_name'],
							abbr: [
								`Адрес: ${elem['kot_adress']}`,
								`id: ${elem['id_kotelnaya']}`,
							],
						})
					})
					this.select = this.items[0]

					console.log('this.items =', this.items)
					// console.log('this.select.abbr[1] =', this.select.abbr[1].split(' ')[1])
					this.fetchWorking(this.currentId)
				})
		},
		fetchWorking(id) {
			// let id = this.select.abbr[1].split(' ')[1]
			// let id = this.select.abbr[1].split(' ')[1]
			console.log('working this.currentId =', id)
			fetch(`${ENDPOINT_SERVER}/api/working/${id}`)
				.then(res => res.json())
				.then(res => {
					console.log('this.items =', res)
					this.working = res

					this.loadingWorking = false
				})
				.then(() => {
					console.log('this.working =', this.working)
				})
		},
	},
	mounted() {
		this.fetchDate()
	},
	watch: {
		select(val) {
			console.log('val select =', val.abbr[1])
			// console.log('val select =', JSON.parse(val))
			this.fetchWorking(this.currentId)
		},
	},
	computed: {
		currentId() {
			return this.select.abbr[1].split(' ')[1]
		}
	}
}
</script>

<style lang="scss">
.red-my-block {
	background-color: red;
	color: white;
	padding: 5px 15px;
	display: inline-block;
}

.h1-title,
.text-center {
	text-align: center;
}

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
