<template>
	<v-data-table
		:headers="headers"
		:items="boilers"
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
</template>

<script>
export default {
	name: 'ErrorWorker',
	data() {
		return {
			isWork: false,
			opts: [5, 7, 9, 11, 13, -1],
			search: '',
			headers: [
				{ text: 'ID', value: 'id_kotelnaya' },
				{ text: 'Имя', value: 'kot_name' },
				{ text: 'Адрес', value: 'kot_adress' },
				{ text: 'IP', value: 'kot_ip' },
				{ text: 'Warning', value: '' },
				{ text: '', value: 'actions', sortable: false, width: '150px' },
			],
			headers2: '',
			boilers: [],
			loading: true,
		}
	},
}
</script>
<style></style>
