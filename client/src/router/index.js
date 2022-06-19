import Vue from 'vue';
import VueRouter from 'vue-router';
import BoilersView from '../views/BoilersView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: BoilersView,
	},
	{
		path: '/counter/:id',
		name: 'counter',
		props: true,
		component: () => import('../views/CounterView.vue'),
	},
	{
		path: '/reports',
		name: 'reports',
		component: () => import('../views/ReportsView.vue'),
	},
	{
		path: '/status',
		name: 'status',
		component: () => import('../views/StatusView.vue'),
	},

	// {
	// 	path: "/about",
	// 	name: "about",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	// },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
