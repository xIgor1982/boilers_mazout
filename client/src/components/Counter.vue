<template>
	<v-container>
		<router-link to="/" class="btn">Вернуться</router-link>
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

		<template>
			<v-data-table
				:headers="headers2"
				:items="current"
				hide-default-header
				hide-default-footer
				class="elevation-1"
			></v-data-table>
		</template>
		<br />
		<h2 class="text-center">Счетчики котельной</h2>
		<v-card>
			<v-card-title>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="counter"
				:search="search"
				:footer-props="{ 'items-per-page-options': opts }"
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
				{
					text: 'ID',
					value: 'id_counter',
				},
				{ text: 'Название', value: 'cnt_name' },
				{ text: 'Тип', value: 'cnt_type' },
			],
			loading: true,
		};
	},
	methods: {
		// fetchDate() {
		// 	fetch(
		// 		'https://raw.githubusercontent.com/xIgor1982/online-store-api/main/responses/table-boiler.json'
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			res.forEach((item) => this.boilers.push(item));
		// 		})
		// 		.then(() => {
		// 			this.current = this.boilers.filter(
		// 				(item) => item.Kot_num == this.id
		// 			)[0];
		// 			this.counter = this.current.Counter;

		// 			if (!this.current.kot_port) this.current.kot_port = '---';
		// 		});
		// },

		fetchDate() {
			console.log('id =>', this.id);
			console.log(`/api/kotelnaya/${this.id}`);
			fetch(`/api/kotelnaya/${this.id}`)
				.then((res) => res.json())
				.then((res) => {
					res = res[0];
					if (!res['kot_port']) res['kot_port'] = '---';
					this.current = res;
				});

			fetch(`/api/counter/${this.id}`)
				.then((res) => res.json())
				.then((res) => {
					this.counter = res;
					this.loading = false;
				});
		},
	},
	mounted() {
		this.fetchDate();
	},
};
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
