(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f14c23b"],{"71ab":function(t,e,a){"use strict";a("8b4b")},"8b4b":function(t,e,a){},d4fe:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:13}},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingFlag,expression:"loadingFlag"}],attrs:{"element-loading-text":t.loadingText}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("场景信息")]),t._v(" "),t.isRun?t._e():a("el-tooltip",{attrs:{content:"运行中"}},[a("i",{staticClass:"el-icon-loading",staticStyle:{color:"#20a0ff"}})]),t._v(" "),t.isRun?a("el-tooltip",{attrs:{content:"未启动"}},[a("i",{staticClass:"fa fa-stop",attrs:{"aria-hidden":"true"}})]):t._e()],1),t._v(" "),a("div",[a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  环境名称：\n                ")]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v("\n                  "+t._s(t.layout.name)+"\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  环境描述：\n                ")]),t._v(" "),a("el-col",{staticStyle:{"font-size":"15px"},attrs:{span:19}},[t._v("\n                  "+t._s(t.layout.desc)+"\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  访问地址：\n                ")]),t._v(" "),a("el-col",{staticStyle:{"font-size":"15px"},attrs:{span:19}},t._l(t.open,(function(e,s){return a("p",[t._v("\n                      "+t._s(e)+"\n                  ")])})),0)],1)],1),t._v(" "),a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  当前分数：\n                ")]),t._v(" "),a("el-col",{attrs:{span:10}},[t._v("\n                  "+t._s(t.currentScore)+"\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  当前进度：\n                ")]),t._v(" "),a("el-col",{attrs:{span:19}},[a("el-progress",{staticStyle:{width:"90%",color:"#5ed275"},attrs:{"text-inside":!0,"stroke-width":20,color:"#5ed275",percentage:t.currentProgress,status:"success"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"text item"},[a("el-row",[a("el-col",{staticClass:"filter-tag",attrs:{span:5}},[t._v("\n                  当前排名：\n                ")]),t._v(" "),a("el-col",{attrs:{span:10}},[0===t.currentRank?a("span",[t._v("\n                    未上榜\n                  ")]):t.currentRank>0?a("span",[t._v("\n                    "+t._s(t.currentRank)+"\n                  ")]):t._e()])],1)],1),t._v(" "),a("el-form",[a("el-form-item",{attrs:{label:"Flag"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{disabled:t.isRun,size:"small",placeholder:"请输入Flag：格式flag-{xxxxxxxx}"},model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",disabled:t.isRun,type:"primary"},on:{click:t.handleFlag}},[t._v("提交")]),t._v(" "),!0===t.isAdmin&&t.isRun?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleRun}},[t._v("启动")]):t._e(),t._v(" "),!0!==t.isAdmin||t.isRun?t._e():a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleStop}},[t._v("停止")])],1)],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("排名")])]),t._v(" "),a("div",[a("el-table",{attrs:{data:t.rankList}},[a("el-table-column",{attrs:{label:"序号",type:"index",index:t.computeTableIndex,width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username","show-overflow-tooltip":!0,label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"score",label:"积分",width:"180"}})],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.handleRank}})],1)])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}})],1)},n=[],l=(a("7f7f"),a("db72")),i=a("2f62"),r=a("b775");function o(t){return Object(r["a"])({url:"/layout/"+t+"/get/",method:"get"})}function c(t){return Object(r["a"])({url:"/layout/"+t+"/start/",method:"get"})}function u(t){return Object(r["a"])({url:"/layout/"+t+"/stop/",method:"get"})}function d(t,e){return Object(r["a"])({url:"/layout/"+t+"/flag/?flag="+e,method:"get"})}function g(t,e){return(void 0===e||null===e||e<1)&&(e=1),Object(r["a"])({url:"/layout/"+t+"/rank/?page="+e,method:"get"})}var p={name:"index.vue",data:function(){return{layout:{id:"",name:"",desc:""},loadingFlag:!0,loadingText:"环境启动中",flag:"",isAdmin:!1,page:{total:0,size:20,page:1},isRun:!1,currentProgress:"",currentRank:0,currentScore:0,open:[],rankList:[]}},computed:Object(l["a"])({},Object(i["b"])(["name","avatar","roles","rank"])),created:function(){this.roles.length>0&&"admin"===this.roles[0]&&(this.isAdmin=!0),this.initModelInfo(),this.handleRank(1)},methods:{initModelInfo:function(){var t=this;this.loadingText="模式信息初始化中",this.loadingFlag=!0;var e=this.$route.query.layout_id;void 0!==e&&null!=e&&""!==e||(this.$message({message:"参数不能为空",type:"error"}),this.$router.push({path:"/scene/list"})),this.layout.id=e,o(e).then((function(e){t.loadingFlag=!1;var a=e.data,s=a.status,n=a.msg;200===s?(t.layout.name=a.data["layout"]["name"],t.layout.desc=a.data["layout"]["desc"],t.open=a.data["open"],a.data["is_run"]||(t.isRun=!0)):t.$message({message:n,type:"error"})})).catch((function(e){t.loadingFlag=!1,t.$message({message:"服务器内部错误",type:"error"}),t.$router.push({path:"/scene/list"})}))},handleRun:function(){var t=this;this.loadingFlag=!0,this.loadingText="模式启动中";var e=this.layout.id;void 0!==e&&null!=e&&""!==e||(this.$message({message:"参数不能为空",type:"error"}),this.$router.push({path:"/scene/list"})),c(e).then((function(e){t.loadingFlag=!1;var a=e.data,s=a.status,n=a.msg;200===s?(t.layout.name=a.data["layout"]["name"],t.layout.desc=a.data["layout"]["desc"],t.open=a.data["open"],void 0===a.data["is_run"]&&(a.data["is_run"]=!0),t.isRun=!a.data["is_run"],t.$message({message:"启动成功",type:"success"})):t.$message({message:n,type:"error"})})).catch((function(e){t.loadingFlag=!1,t.$message({message:"服务器内部错误",type:"error"}),t.$router.push({path:"/scene/list"})}))},handleStop:function(){var t=this;this.loadingFlag=!0,this.loadingText="模式停止中";var e=this.layout.id;void 0!==e&&null!=e&&""!==e||(this.$message({message:"参数不能为空",type:"error"}),this.$router.push({path:"/scene/list"})),u(e).then((function(e){t.loadingFlag=!1;var a=e.data,s=a.status,n=a.msg;200===s?(t.$message({message:"关闭成功",type:"success"}),t.initModelInfo()):t.$message({message:n,type:"error"})})).catch((function(e){t.loadingFlag=!1,t.$message({message:"服务器内部错误",type:"error"})}))},handleFlag:function(){var t=this,e=this.flag;this.loadingFlag=!0,this.loadingText="Flag 提交中",""!==e&&null!==e?d(this.layout.id,e).then((function(e){t.loadingFlag=!1;var a=e.data,s=a.status;200===s?(t.$message({message:"恭喜！通过",type:"success"}),t.flag="",t.handleRank(1)):t.$message({message:a.msg,type:"error"})})).catch((function(e){t.loadingFlag=!1,t.$message({message:"服务器内部错误",type:"error"})})):this.$message({message:"flag 不能为空",type:"error"})},handleRank:function(t){var e=this;this.loadingFlag=!0,this.loadingText="排行初始化中",this.page.page=t,g(this.layout.id,t).then((function(t){e.loadingFlag=!1;var a=t.data;e.page.total=a.count,e.rankList=a.result,e.currentProgress=a.progress,e.currentRank=a.current,e.currentScore=a.score})).catch((function(t){e.loadingFlag=!1,e.$message({message:"服务器内部错误",type:"error"})}))},computeTableIndex:function(t){return(this.page.page-1)*this.page.size+t+1}}},h=p,m=(a("71ab"),a("2877")),v=Object(m["a"])(h,s,n,!1,null,"55145d48",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-6f14c23b.e167e0d9.js.map