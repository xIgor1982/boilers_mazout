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
				:footer-props="{ 'items-per-page-options': opts }"
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
			headers2: "",			
			boilers: [],
			loading: true,
		};
	},
	methods: {
		// fetchDate() {
		// 	fetch(
		// 		"https://raw.githubusercontent.com/xIgor1982/online-store-api/main/responses/table-boiler.json"
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			res.forEach((item) => this.boilers.push(item));
		// 		});
		// },

		fetchDate() {
			const kotelnaya = [];
			const counter = [];
			const allKotelnaya = [];
			const addKotelnaya = (id, count) => {
				return {
					id,
					count,
				};
			};

			fetch('/api/kotelnaya')
				.then((res) => res.json())
				.then((res) => {
					res.forEach((item, index) => {
						kotelnaya.push(item);
					});
					kotelnaya.forEach((item) =>
						allKotelnaya.push(addKotelnaya(item['id_kotelnaya'], 0))
					);
				});

			fetch('/api/counter')
				.then((res) => res.json())
				.then((res) => {
					res.forEach((item) => {
						counter.push(item);
					});
					counter.forEach((count) => {
						allKotelnaya.forEach((item) => {
							if (item.id == count['id_kotelnaya_Kotelnaya']) {
								item.count++;
							}
						});
					});
					kotelnaya.forEach((kot) => {
						allKotelnaya.forEach((count) => {
							if (count.id == kot['id_kotelnaya']) {
								kot['all_cnt'] = count.count;
							}
						});
					});
				})
				.then(() => {
					// console.log('counter', counter);
					// console.log('kotelnaya', kotelnaya);
					// console.log('allKotelnaya', allKotelnaya);
					this.boilers = kotelnaya;
					this.loading = false;
				});
		},
	},
	mounted() {
		this.fetchDate();
	},
	watch: {
		$route(to, from) {
			this.fetchDate();
		},
	},
};
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
