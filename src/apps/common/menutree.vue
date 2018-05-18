<template>
  <div id="menu">
  	<ul class="list-group">
 	   <div v-for="item in menuArr">
			<li class="list-group-item"  v-text="item.name"></li>
	        <div v-for="ite in item.children">
	        	<router-link :to="ite.path">
			        <li class="list-group-item"  v-text="ite.name"></li>
		       </router-link>
	        </div>
	  </div>
   </ul>
  </div>
   
</template>
<style lang="scss">
	#menu{
		height:100%;
		background-color:#363636;
		ul{
			a{
			   li{
				   width:100%;
				   height:35px;
				   border: none;
				   background-color:#363636;
				   color: #fff;
				   &:hover{
					  background-color: #000;
				   }
	            }
			}
			a.router-link-exact-active{
				li{
				  background-color: black;	
				}
				
			}
		}
		
        
	}
</style>
<script>
import { menuArr } from '../../router/index.es6'
export default{
   data(){
	   return {
		   menuArr:menuArr
	   }
   },
	mounted(){
		console.log(this.menuArr)
	},
	methods:{
		clickMenu(e){
			console.log(e)
		}
	}
}
</script>