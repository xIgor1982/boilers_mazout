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
				>
				</v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="boilers"
				:items-per-page="3"
				item-key="ordNumber"
				:footer-props="{ 'items-per-page-options': opts }"
				class="elevation-1"
				:search="search"
			>
			<template v-slot:item.actions="{ item }">
        <router-link
					:to="{name: 'counter', params: {id: item.Kot_num}}"
					class="btn"
        >
          Перейти
        </router-link>
      </template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "Boilers",
	data() {
		return {
			opts: [5, 7, 9, 11, 13, -1],
			search: "",
			headers: [
				{ text: "Номер", value: "Kot_num" },
				{ text: "Имя", value: "kot_name" },
				{ text: "Адрес", value: "kot_adress" },
				{ text: "IP", value: "kot_ip" },
				{ text: "Port", value: "kot_port" },
				{ text: "Счетчики", value: "Counter.length" },
				{ text: '', value: 'actions', sortable: false },
			],
			boilers: [],
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
				});
		},
	},
	mounted() {
		this.fetchDate();
	},
};
</script>

<style lang="scss" scoped>

a.btn  {
	border: 1px solid red;
	padding: 5px 15px;
	border-radius: 5px;
	color: red;
	text-decoration: none;
	transition: all 0.5s;

	&:hover{
		background: red;
		color: white;
	}
}
</style>
