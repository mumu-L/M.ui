<template>
    <div id="addContent" class="container-pull">
        <div class="row">
            <div class="col-lg-12">
                 <label>名称</label>
                 <input type="text" name="" id="name" v-model="name">
            </div>
            <div class="col-lg-12">
                 <label>标识</label>
                 <input type="text" name="" id="Identification" v-model="identification">
            </div>
        </div>
        <mavon-editor v-model="value" @save="save" style="height:700px;"/>
    </div>    
</template>
<script>
    import Vue from 'vue'
    import $ from "jquery"
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import axios from 'axios'
    Vue.use(mavonEditor)
    export default {
        data(){
            return {
                subfield: true,
                code_style: 'solarized-dark',
                externalLink: {
                        markdown_css: function() {
                            // 这是你的markdown css文件路径
                            return '/markdown/github-markdown.min.css'
                        },
                        hljs_js: function() {
                            // 这是你的hljs文件路径
                            return '/highlightjs/highlight.min.js'
                        },
                        hljs_css: function(css) {
                            // 这是你的代码高亮配色文件路径
                            return '/highlightjs/styles/' + css + '.min.css'
                        },
                        hljs_lang: function(lang) {
                            // 这是你的代码高亮语言解析路径
                            return '/highlightjs/languages/' + lang + '.min.js'
                        },
                        katex_css: function() {
                            // 这是你的katex配色方案路径路径
                            return '/katex/katex.min.css'
                        },
                        katex_js: function() {
                            // 这是你的katex.js路径
                            return '/katex/katex.min.js'
                        }
                        
                    },
                    value:'',
                    name:'',
                    identification:''
                  }
                },
                mounted(){
                    let _this=this
                },
                methods:{
                    save(value,render){
                        let _this=this
                        axios.post('/addcontent',{
                                identification:_this.identification,
                                name:_this.name,
                                content:render
                        })
                    }
        }
        
    }
</script>

