webpackJsonp([38],{"3z4a":function(e,t,n){var i=n("UywB");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("501567bd",i,!1)},Fx1r:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"tinymce-demo",components:{Tinymce:n("5aCZ").a},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>\n        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n      </ul>'}}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"components-container"},[n("code",[e._v("\n    "+e._s(e.$t("components.tinymceTips"))+"\n    "),n("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"}},[e._v(" "+e._s(e.$t("components.documentation")))])]),e._v(" "),n("div",[n("tinymce",{attrs:{height:300},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),n("div",{staticClass:"editor-content",domProps:{innerHTML:e._s(e.content)}})])};o._withStripped=!0;var c={render:o,staticRenderFns:[]},r=c;var s=!1;var a=n("VU/8")(i,r,!1,function(e){s||n("3z4a")},"data-v-2fc2cc69",null);a.options.__file="src\\views\\components-demo\\tinymce.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");t.default=a.exports},UywB:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.editor-content[data-v-2fc2cc69]{\r\n  margin-top: 20px;\n}\r\n",""])}});