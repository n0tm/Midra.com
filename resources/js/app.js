/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vuetify from "vuetify";
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Vuetify);
Vue.use(VueRouter)

import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
]


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const router = new VueRouter({ routes })
const app = new Vue({ router }).$mount('#app')
