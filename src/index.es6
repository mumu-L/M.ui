import Vue from 'vue'
import '../static/bootstrap/css/bootstrap.min.css'
import '../style/style.scss'
import template from './index.html'
import MenuTree from './apps/common/menutree.vue'
import $ from 'jquery'
new Vue({
	el:'#app',
	template,
	components:{
		MenuTree
	},
	mounted(){
		console.log(45)
	}
})