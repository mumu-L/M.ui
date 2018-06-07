import Vue from 'vue'
import '@/static/bootstrap/css/bootstrap.min.css'
import '@/style/style.scss'
import '@/static/font-awesome-4.7.0/css/font-awesome.min.css'
import template from './apps/common/layout.html'
import MenuTree from './apps/common/menutree.vue'
import { router } from './router/index.es6'
import $ from 'jquery'


new Vue({
	el:'#app',
	template,
	router,
	data(){
		return {
			
		}
	},
	watch:{
	},
	components:{
		MenuTree
	},
	mounted(){
	   
	//    let routepath=this.$route.path,
	// 	   prtt=/\//
	//    this.pathArr=routepath.split(prtt)
	}
})
Vue.component('MenuTree')