<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 content" v-for="list in contentObj">
				<!--<div id="menu">
					<ul class="list-group">
					<div v-for="item in menuArr">
							<router-link :to="item.path" v-if="item.children.length==0" >
								<li class="list-group-item"  v-text="item.name" >	
								</li>
							</router-link>
							<li class="list-group-item"  :class="menuListStyle(item)" v-if="item.children.length>0" @click="toggle(item)">
							<span v-text="item.name"></span>
							</li> 
							<div v-for="ite in item.children" v-if="item.expanded">
								<router-link :to="ite.path"  v-if="!ite.hidden">
									<li class="list-group-item"  v-text="ite.name" >
									</li>
							    </router-link>
							</div>
					</div>
				</ul>
            </div>	-->
				<h4>{{list.name}}</h4>
				<router-link :to="'/menus/code/'+list.id">
                    <button>查看代码</button>
				</router-link>
				
			</div>
			<div class="col-lg-4">
				<img src="" alt="">
				<h4>黑色简约风格左侧菜单</h4>
				<p>html代码</p>
				<p>css代码</p>
				<p>js代码</p>
			</div>
			<div class="col-lg-4">
				<img src="" alt="">
				<h4>黑色简约风格左侧菜单</h4>
				<p>html代码</p>
				<p>css代码</p>
				<p>js代码</p>
			</div>
		</div>
	</div>
</template>
<script>
   import $ from 'jquery'
   import axios from 'axios'
   
   export default{
	   data(){
		   return {
			   menuArr:[
				  { 
					  path:'/',
					  name:'根目录',
					  expanded:true,
					  children:[
						  {
							path:'child1',
							name:'子目录1',
							expanded:false
						  },
						  {
							path:'child2',
							name:'子目录2',
							expanded:false
						  },
						  {
							path:'child3',
							name:'子目录3',
							expanded:false
						  }
						]
				  }
			   ],
			   contentObj:[]
		   }
	   },
	  mounted(){
		  let _this=this
			axios.get('/getaddcontent').then(params=>{
				_this.contentObj=params.data
			})
	  },
	  methods:{
			menuListStyle(item){
				
			if(item.expanded){
				return "fa mui-caret-d-after open"
			}else{
				return "fa mui-caret-r-after"
			}
		},
			toggle(item){
				item.expanded=!item.expanded
			}
	  }

   }
</script>
<style lang="scss" scoped>
.content{
	height:400px;
}
#menu{
	    width: 50%;
		height:200px;
		background-color:#363636;
		ul{
			   li{
				   width:100%;
				   height:35px;
				   border: none;
				   background-color:#363636;
				   color: #fff;
				   border-radius: 0%;
				   &:hover{
					  background-color: #000;
				   }
				   span{
					   display: inline-block;
					   width: 95%;
				   }
				   &.open{
					   background-color: #4A4A4A;
				   }    
	            }

			a.router-link-exact-active{
				li{
				  background-color: #000;	
				}
				
			}
		}
		
        
	}
	.mui-caret-d-after:after{
					   content:"\f0d7";
				   }
	.mui-caret-r-after:after{
					   content:"\f0da";
				   }
</style>


