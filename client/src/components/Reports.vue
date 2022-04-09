<template>
	<v-row>
		<v-col cols="12" sm="4" md="4">
			<h5 class="text-center">Котельные</h5>
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
		</v-col>
		<v-col cols="12" sm="4" md="4">
			<h5 class="text-center">Дата с</h5>
			<v-menu
				ref="menu"
				v-model="menu"
				:close-on-content-click="false"
				:return-value.sync="date"
				transition="scale-transition"
				offset-y
				min-width="auto"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-text-field
						v-model="date"
						label=""
						prepend-icon="mdi-calendar"
						readonly
						v-bind="attrs"
						v-on="on"
					></v-text-field>
				</template>
				<v-date-picker v-model="date" no-title scrollable>
					<v-spacer></v-spacer>
					<v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
					<v-btn text color="primary" @click="$refs.menu.save(date)">
						OK
					</v-btn>
				</v-date-picker>
			</v-menu>
		</v-col>
		<v-spacer></v-spacer>
		<v-col cols="12" sm="4" md="4">
			<h5 class="text-center">Дата по</h5>
			<v-menu
				ref="menu2"
				v-model="menu2"
				:close-on-content-click="false"
				:return-value.sync="date2"
				transition="scale-transition"
				offset-y
				min-width="auto"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-text-field
						v-model="date2"
						label=""
						prepend-icon="mdi-calendar"
						readonly
						v-bind="attrs"
						v-on="on"
					></v-text-field>
				</template>
				<v-date-picker v-model="date2" no-title scrollable>
					<v-spacer></v-spacer>
					<v-btn text color="primary" @click="menu2 = false"> Cancel </v-btn>
					<v-btn text color="primary" @click="$refs.menu2.save(date2)">
						OK
					</v-btn>
				</v-date-picker>
			</v-menu>
		</v-col>
		<v-spacer></v-spacer>
	</v-row>
</template>

<script>
export default {
	name: 'Reports',
	data: () => ({
		date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
			.toISOString()
			.substr(0, 10),
		date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
			.toISOString()
			.substr(0, 10),
		menu: false,
		menu2: false,
		select: {},
		items: [],
		items2: [],
	}),
	methods: {
		fetchDate() {
			let arr = []
			fetch(
				'https://raw.githubusercontent.com/xIgor1982/online-store-api/main/responses/kotelnaya_all.json'
			)
				.then(res => res.json())
				.then(res => {
					res.forEach(item => arr.push(item))
				})
				.then(() => {
					arr.forEach(item => {
						let state = item.kot_name
						let abbr = `id: ${item.id_kotelnaya}, адрес: ${item.kot_adress}, ip: ${item.kot_ip}`
						this.items.push({ state, abbr })
					})
					this.select = this.items[0]
				})

			let count = []
			fetch(
				'https://raw.githubusercontent.com/xIgor1982/online-store-api/main/responses/counter_all.json'
			)
				.then(res => res.json())
				.then(res => {
					res.forEach(item => count.push(item))
				})
				.then(() => {
					count.forEach(item => {
						// console.log(item)
						let state = item.cnt_name
						let abbr = `id: ${item.id_counter}, тип: ${item.cnt_type}, id котельной: ${item.id_kotelnaya_Kotelnaya}`
						this.items2.push({ state, abbr })
					})
					// console.log('this.items2', this.items2)

				})
		},
	},
	mounted() {
		this.fetchDate()
	},
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
</style>
