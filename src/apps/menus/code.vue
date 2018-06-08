<template>
<div id="codes" class="container">
   <!-- <pre class="mui-code" id="code"> -->
					<!-- <code > 
&lt;ul class="list-group"&gt;</br>
	&lt;div v-for="item in menuArr"&gt;</br>  
		&lt;router-link :to="item.path" v-if="item.children.length==0"&gt;
		   &lt;li class="list-group-item"  v-text="item.name" @click="links(item.path)"&gt;&lt;/li&gt;</br>  
		&lt;/router-link&gt;</br>  
		&lt;li class="list-group-item"  :class="menuListStyle(item)" v-if="item.children.length&gt;0" @click="toggle(item)"&gt;
		    &lt;span v-text="item.name"&gt;&lt;/span&gt;</br>  
		&lt;/li&gt;</br>   
		&lt;div v-for="ite in item.children" v-if="item.expanded"&gt;</br>  
			&lt;router-link :to="ite.path"&gt;</br>  
				&lt;li class="list-group-item"  v-text="ite.name" @click="links(ite.path)"&gt;&lt;/li&gt;</br>  
		    &lt;/router-link&gt;</br>  
	    &lt;/div&gt;</br>  
	&lt;/div&gt;</br>  
&lt;/ul&gt;</br>
					</code> -->
				<!-- </pre> -->
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
			$("#codes").append(result.data.content)
		})
	}
}
</script>
