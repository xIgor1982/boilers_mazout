<template>
	<div>
		<!-- <h1>Incidents</h1> -->
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
					:items="incident"
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
		</v-container>
	</div>
</template>

<script>
import { ENDPOINT_SERVER } from '../config-server'
import { dateParsing } from '../services/services'

export default {
	name: 'Incidents',
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			headers: [
				{ text: 'id', value: 'id_ev' },
				{ text: 'Имя', value: 'kot_name' },
				{ text: 'Дата события', value: 'dt' },
				{ text: 'счетчик', value: 'cnt_name' },
				{ text: 'Тип сообщения', value: 'msgtext' },
				{ text: 'Отправлено', value: 'is_sent' },
				{ text: 'Сообщение отправлено', value: 'dt_sent' },
			],
			incident: [],
			loading: true,
		}
	},
	methods: {
		fetchDate() {
			fetch(`${ENDPOINT_SERVER}/api/incident`)
				.then(res => res.json())
				.then(res => {
					// console.log('res =', res)

					const resArray = []
					res.forEach(
						({ id_ev, kot_name, dt, cnt_name, msgtext, is_sent, dt_sent }) => {
							const dp = dateParsing(dt)

							resArray.push({
								id_ev,
								kot_name,
								dt: `${dp.date},\t в ${dp.time}`,
								cnt_name,
								msgtext,
								is_sent,
								dt_sent: `${dp.date}, в ${dp.time}`,
							})
						}
					)
					console.log('res', res)
					this.incident = resArray
					// this.incident = res
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

<style></style>
