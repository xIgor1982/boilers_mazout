<template>
	<v-container>
		<router-link to="/" class="btn-link">
			<v-btn color="rgba(244, 67, 54, 0.85)" class="white--text">
				Вернуться
			</v-btn>
		</router-link>
		<h2 class="text-center">Параметры котельной</h2>

		<table class="table">
			<tbody>
				<tr>
					<td>ID котельной:</td>
					<td>{{ current.id_kotelnaya }}</td>
				</tr>
				<tr>
					<td>Имя котельной:</td>
					<td>{{ current.kot_name }}</td>
				</tr>
				<tr>
					<td>Адрес котельной:</td>
					<td>{{ current.kot_adress }}</td>
				</tr>
				<tr>
					<td>IP котельной:</td>
					<td>{{ current.kot_ip }}</td>
				</tr>
				<tr>
					<td>PORT котельной:</td>
					<td>{{ current.kot_port }}</td>
				</tr>
			</tbody>
		</table>

		<br />
		<h2 class="text-center">Счетчики котельной</h2>
		<v-card>
			<v-card-title>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Поиск"
					single-line
					hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="counter"
				:search="search"
				:footer-props="{
					'items-per-page-options': opts,
					'items-per-page-text': 'Количество отображаемых страниц',
				}"
				:loading="loading"
			></v-data-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'Counter',
	props: ['id'],
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			current: '',
			counter: [],
			headers: [
				{ text: 'Название', value: 'cnt_name' },
				{ text: 'Тип', value: 'cnt_type' },
			],
			loading: true,
		}
	},
	methods: {
		fetchDate() {
			fetch(`http://192.168.1.70:3001/api/kotelnaya/${this.id}`)
				.then(res => res.json())
				.then(res => {
					res = res[0]
					if (!res['kot_port']) res['kot_port'] = '---'
					this.current = res
				})

			fetch(`http://192.168.1.70:3001/api/counter/${this.id}`)
				.then(res => res.json())
				.then(res => {
					this.counter = res
					this.loading = false
				})
		},
	},
	mounted() {
		this.fetchDate()
	},
}
</script>

<style lang="scss" scoped>
.decor {
	font-size: 1.5rem;
	margin-bottom: 5px;

	&-span {
		display: inline-block;
		border: 1px solid black;
		background-color: rgba(180, 180, 180, 0.5);
		padding: 0 20px;
		border-radius: 5px;
	}
}

.table {
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;
}
.table td:first-child {
	width: 30%;
}

.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}

a.btn-link {
	text-decoration: none;
}
</style>
