import Vue from 'vue'
import '../static/bootstrap/css/bootstrap.min.css'
import '../style/style.scss'
import template from './apps/common/layout.html'
import MenuTree from './apps/common/menutree.vue'
import { router } from './router/index.es6'
import $ from 'jquery'
new Vue({
	el:'#app',
	template,
	router,
	components:{
		MenuTree
	},
	mounted(){
//        this.$router.push('/bar')
	}
})