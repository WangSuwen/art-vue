webpackJsonp([51],{oz0I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("viA7"),a=n("0xDb"),i={name:"exportExcel",data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(l.c)().then(function(t){e.list=t.data.items,e.listLoading=!1})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e(2),n.e(60)]).then(n.bind(null,"zWO4")).then(function(t){var n=e.list,l=e.formatJson(["id","title","author","pageviews","display_time"],n);t.export_json_to_excel(["Id","Title","Author","Readings","Date"],l,e.filename),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(a.c)(t[e]):t[e]})})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:e.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),e._v(" "),n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document",loading:e.downloadLoading},on:{click:e.handleDownload}},[e._v(e._s(e.$t("excel.export"))+" excel")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n         "+e._s(t.$index)+"\n       ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n         "+e._s(t.row.title)+"\n       ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n         "+e._s(t.row.pageviews)+"\n       ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);t.default=r.exports}});