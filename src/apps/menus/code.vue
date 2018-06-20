<template>
<div id="codes" class="container">
</div>
    
</template>
<style lang="scss">
 .mui-code{
	 width:100%;
	 height:500px;
	overflow-x:scroll;
 }
</style>
<script>

import $ from "jquery"
import axios from 'axios'
import 'mavon-editor/dist/css/index.css'
export default {
	data(){
		return {
			
			code:''
		}
	},
	created(){
		let id=this.$route.params.id,
			url='/getcode/'+id,
			_this=this

		axios.get(url).then(result=>{
			
			$("#codes").append(result.data.democode)
		})
	}
}
</script>
