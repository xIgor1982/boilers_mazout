<template>
	<v-container>
		<router-link to="/boilers">Вернуться</router-link>

		<table>
			<tr>
				<td>Номер котельной:</td>
				<td>{{ current.Kot_num }}</td>
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
		</table>
		<br />
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
			></v-data-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "Counter",
	props: ["id"],
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: "",
			boilers: [],
			current: "",
			counter: [],
			headers: [
				{
					text: "ID",
					value: "id_counter",
				},
				{ text: "Название", value: "cnt_name" },
				{ text: "Тип", value: "cnt_type" },
			],
		};
	},
	methods: {
		fetchDate() {
			fetch(
				"https://raw.githubusercontent.com/xIgor1982/online-store-api/main/responses/table-boiler.json"
			)
				.then((res) => res.json())
				.then((res) => {
					res.forEach((item) => this.boilers.push(item));
				})
				.then(() => {
					this.current = this.boilers.filter(
						(item) => item.Kot_num == this.id
					)[0];
					this.counter = this.current.Counter;

					if (!this.current.kot_port) this.current.kot_port = "---";
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
</style>
