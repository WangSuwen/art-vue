webpackJsonp([34],{"282n":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"\n.chart-container[data-v-72411a05]{\r\n  position: relative;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height:85vh;\n}\r\n",""])},P2bu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("XLwt"),i=r.n(a),o={mixins:[r("0W7K").a],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=i.a.init(document.getElementById(this.id));var t=function(){for(var t=[],e=1;e<13;e++)t.push(e+"month");return t}();this.chart.setOption({backgroundColor:"#344b58",title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["female","male","average"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"female",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"male",type:"bar",stack:"total",itemStyle:{normal:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})}}},n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})};n._withStripped=!0;var s={render:n,staticRenderFns:[]},l=s;var c=r("VU/8")(o,l,!1,null,null,null);c.options.__file="src\\components\\Charts\\mixChart.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");var h={name:"mixChart",components:{Chart:c.exports}},d=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chart-container"},[e("chart",{attrs:{height:"100%",width:"100%"}})],1)};d._withStripped=!0;var u={render:d,staticRenderFns:[]},p=u;var f=!1;var m=r("VU/8")(h,p,!1,function(t){f||r("QGBD")},"data-v-72411a05",null);m.options.__file="src\\views\\charts\\mixChart.vue",m.esModule&&Object.keys(m.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");e.default=m.exports},QGBD:function(t,e,r){var a=r("282n");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("72f7dbed",a,!1)}});