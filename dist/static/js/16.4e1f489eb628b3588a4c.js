webpackJsonp([16],{"/qCe":function(t,e,a){var s=a("5xly");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("17b8b367",s,!1)},"5xly":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.mixin-components-container[data-v-9feaa67c] {\n  background-color: #f0f2f5;\n  padding: 30px;\n  min-height: calc(100vh - 84px);\n}\n.component-item[data-v-9feaa67c]{\n  min-height: 100px;\n}\n",""])},cAgV:function(t,e,a){"use strict";var s=a("woOf"),n=a.n(s),o=(a("ctMr"),{bind:function(t,e){t.addEventListener("click",function(a){var s=n()({},e.value),o=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var r=i.getBoundingClientRect(),l=i.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",i.appendChild(l)),o.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=a.pageY-r.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=a.pageX-r.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}},!1)}}),i=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(i)),o.install=i;e.a=o},ctMr:function(t,e,a){var s=a("z4F4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("a7c9def6",s,!1)},ypWw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("kCe2"),n=a("+mJe"),o=a("Weyc"),i=a("40lt"),r=a("cAgV"),l={name:"componentMixin-demo",components:{PanThumb:s.a,MdInput:n.a,Mallki:o.a,DropdownMenu:i.a},directives:{waves:r.a},data:function(){return{demo:{title:""},demoRules:{title:[{required:!0,trigger:"change",validator:function(t,e,a){6!==e.length?a(new Error("请输入六个字符")):a()}}]},articleList:[{title:"基础篇",href:"https://segmentfault.com/a/1190000009275424"},{title:"登录权限篇",href:"https://segmentfault.com/a/1190000009506097"},{title:"实战篇",href:"https://segmentfault.com/a/1190000009762198"},{title:"vueAdmin-template 篇",href:"https://segmentfault.com/a/1190000010043013"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"},{title:"优雅的使用 icon",href:"https://segmentfault.com/a/https://segmentfault.com/a/1190000012213278"}]}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mixin-components-container"},[a("el-row",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Buttons")])]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn blue-btn",attrs:{to:"/components/index"}},[t._v("Components")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn light-blue-btn",attrs:{to:"/charts/index"}},[t._v("Charts")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn pink-btn",attrs:{to:"/excel/download"}},[t._v("Excel")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn green-btn",attrs:{to:"/example/table/complex-table"}},[t._v("Table")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn tiffany-btn",attrs:{to:"/form/edit-form"}},[t._v("Form")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn yellow-btn",attrs:{to:"/theme/index"}},[t._v("Theme")])],1)],1)])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Material Design 的input")])]),t._v(" "),a("div",{staticStyle:{height:"100px"}},[a("el-form",{attrs:{model:t.demo,rules:t.demoRules}},[a("el-form-item",{attrs:{prop:"title"}},[a("md-input",{attrs:{icon:"search",name:"title",placeholder:"输入标题"},model:{value:t.demo.title,callback:function(e){t.$set(t.demo,"title",e)},expression:"demo.title"}},[t._v("标题")])],1)],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("图片hover效果")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("pan-thumb",{attrs:{width:"100px",height:"100px",image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},[t._v("\n            vue-element-admin\n          ")])],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("水波纹 waves v-directive")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"}},[t._v("水波纹效果")])],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("hover text")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("mallki",{attrs:{className:"mallki-text",text:"vue-element-admin"}})],1)])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Share")])]),t._v(" "),a("div",{staticClass:"component-item",staticStyle:{height:"420px"}},[a("dropdown-menu",{staticStyle:{margin:"0 auto"},attrs:{title:"系列文章",items:t.articleList}})],1)])],1)],1)],1)};c._withStripped=!0;var p={render:c,staticRenderFns:[]},d=p;var m=!1;var u=a("VU/8")(l,d,!1,function(t){m||a("/qCe")},"data-v-9feaa67c",null);u.options.__file="src/views/components-demo/mixin.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");e.default=u.exports},z4F4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".waves-ripple {\n    position: absolute;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.15);\n    background-clip: padding-box;\n    pointer-events: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 1;\n}\n\n.waves-ripple.z-active {\n    opacity: 0;\n    -webkit-transform: scale(2);\n    transform: scale(2);\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\n}",""])}});