<template>
    <div id="addContent" class="container">
        <mavon-editor v-model="value"/>
    </div>    
</template>
<script>
    import Vue from 'vue'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    Vue.use(mavonEditor)
    export default {
        data(){
            return {
                value:''
            }
        },
        mounted(){
            let _this=this
            console.log(mavonEditor.markdownIt)
        }
        
    }
</script>

