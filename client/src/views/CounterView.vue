<template>
	<div>
		<counter :id="id" />
	</div>
</template>

<script>
import Counter from '../components/Counter.vue';

export default {
	props: ['id'],
	components: { Counter },
	NAME: 'CounterView',
};
</script>

<style lang="scss" scoped></style>
