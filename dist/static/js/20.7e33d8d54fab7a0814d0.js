webpackJsonp([20],{"4mrK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),o=n.n(i),r=n("DAYN"),a={name:"DndList",components:{draggable:n.n(r).a},computed:{filterList2:function(){var t=this;return this.list2.filter(function(e){return!!t.isNotInList1(e)&&e})}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(e){return t.id!==e.id})},isNotInList2:function(t){return this.list2.every(function(e){return t.id!==e.id})},deleteEle:function(t){var e=!0,n=!1,i=void 0;try{for(var r,a=o()(this.list1);!(e=(r=a.next()).done);e=!0){var s=r.value;if(s.id===t.id){var l=this.list1.indexOf(s);this.list1.splice(l,1);break}}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){this.list1.push(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dndList"},[n("div",{staticClass:"dndList-list",style:{width:t.width1}},[n("h3",[t._v(t._s(t.list1Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(e){return n("div",{key:e.id,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle"},[t._v("["+t._s(e.author)+"] "+t._s(e.title))]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"0px"}},[n("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(n){t.deleteEle(e)}}},[n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),n("div",{staticClass:"dndList-list",style:{width:t.width2}},[n("h3",[t._v(t._s(t.list2Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.filterList2,options:{group:"article"}}},t._l(t.filterList2,function(e){return n("div",{key:e.id,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle2",on:{click:function(n){t.pushEle(e)}}},[t._v(" ["+t._s(e.author)+"] "+t._s(e.title))])])}))],1)])},staticRenderFns:[]};var l=n("VU/8")(a,s,!1,function(t){n("Q6A+")},"data-v-2e25029f",null).exports,c=n("viA7"),d={name:"dndList-demo",components:{DndList:l},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(c.c)().then(function(e){t.list1=e.data.items.splice(0,5),t.list2=e.data.items})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components-container"},[this._m(0),this._v(" "),e("div",{staticClass:"editor-container"},[e("dnd-list",{attrs:{list1:this.list1,list2:this.list2,list1Title:"List",list2Title:"Article pool"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[this._v("drag-list base on\n    "),e("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[this._v("Vue.Draggable")])])}]},h=n("VU/8")(d,u,!1,null,null,null);e.default=h.exports},DAYN:function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var a=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(a,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null}},data:function(){return{transitionMode:!1,componentMode:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var i=e,r=this.$slots.footer;return r&&(i=e?[].concat(o(e),o(r)):[].concat(o(r))),t(this.element,null,i)},mounted:function(){var e=this;if(this.componentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.componentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};a.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=r.bind(e,t)});var o=i({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in o)&&(o.draggable=">*"),this._sortable=new t(this.rootContainer,o),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.componentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map(function(t){return t.elm}),r=[].concat(o(e)).map(function(t){return i.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(o(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,o=this.getUnderlyingPotencialDraggableComponent(e);if(!o)return{component:o};var r=o.realList,a={list:r,component:o};if(e!==n&&r&&o.getUnderlyingVm){var s=o.getUnderlyingVm(n);if(s)return i(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(o(e.to.children)).filter(function(t){return"none"!==t.style.display}),i=n.indexOf(e.related),r=t.component.getVmIndex(i);return-1!=n.indexOf(c)||!e.willInsertAfter?r:r+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var o=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(o,t);return i(r,{futureIndex:a}),i(t,{relatedContext:o,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("Lokx");t.exports=e(r)}()},Lokx:function(t,e,n){var i,o;!function(r){"use strict";void 0===(o="function"==typeof(i=r)?i.call(e,n,e,t):i)||(t.exports=o)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,o,r,a,s,l,c,d,u,h,f,p,g,v,m,_,b,y,D={},x=/\s+/g,w=/left|right|inline/,C="Sortable"+(new Date).getTime(),T=window,S=T.document,E=T.parseInt,L=T.setTimeout,I=T.jQuery||T.Zepto,k=T.Polymer,A=!1,N="draggable"in S.createElement("div"),O=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=S.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),M=!1,P=Math.abs,B=Math.min,R=[],Y=[],$=it(function(t,e,n){if(n&&e.scroll){var i,o,r,a,d,u,h=n[C],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,v=t.clientY,m=window.innerWidth,_=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(i=s,o=s.getBoundingClientRect(),r=(P(o.right-g)<=f)-(P(o.left-g)<=f),a=(P(o.bottom-v)<=f)-(P(o.top-v)<=f)),r||a||(a=(_-v<=f)-(v<=f),((r=(m-g<=f)-(g<=f))||a)&&(i=T)),D.vx===r&&D.vy===a&&D.el===i||(D.el=i,D.vx=r,D.vy=a,clearInterval(D.pid),i&&(D.pid=setInterval(function(){if(u=a?a*p:0,d=r?r*p:0,"function"==typeof c)return c.call(h,d,u,t);i===T?T.scrollTo(T.pageXOffset+d,T.pageYOffset+u):(i.scrollTop+=u,i.scrollLeft+=d)},24)))}},30),X=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){A={capture:!1,passive:!1}}}))}catch(t){}function F(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=ot({},e),t[C]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==F.supportPointer};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var o in X(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&N,H(t,"mousedown",this._onTapStart),H(t,"touchstart",this._onTapStart),e.supportPointer&&H(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(t,"dragover",this),H(t,"dragenter",this)),Y.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function U(e,n){"clone"!==e.lastPullMode&&(n=!0),i&&i.state!==n&&(q(i,"display",n?"none":""),n||i.state&&(e.options.group.revertClone?(o.insertBefore(i,r),e._animate(t,i)):o.insertBefore(i,t)),i.state=n)}function V(t,e,n){if(t){n=n||S;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=j(t))}return null}function j(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function H(t,e,n){t.addEventListener(e,n,A)}function W(t,e,n){t.removeEventListener(e,n,A)}function Q(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(x," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(x," ")}}function q(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return S.defaultView&&S.defaultView.getComputedStyle?n=S.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function z(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function G(t,e,n,o,r,a,s,l){t=t||e[C];var c=S.createEvent("Event"),d=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||e,c.from=a||e,c.item=o||e,c.clone=i,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),d[u]&&d[u].call(t,c)}function J(t,e,n,i,o,r,a,s){var l,c,d=t[C],u=d.options.onMove;return(l=S.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function Z(t){t.draggable=!1}function K(){M=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function it(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,L(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function ot(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return k&&k.dom?k.dom(t).cloneNode(!0):I?I(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return L(t,0)}function st(t){return clearTimeout(t)}return F.prototype={constructor:F,_onTapStart:function(e){var n,i=this,o=this.el,r=this.options,s=r.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],d=(c||e).target,u=e.target.shadowRoot&&e.path&&e.path[0]||d,h=r.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&R.push(i)}}(o),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||r.disabled)&&!u.isContentEditable&&(d=V(d,r.draggable,o))&&a!==d){if(n=et(d,r.draggable),"function"==typeof h){if(h.call(this,e,d,this))return G(i,u,"filter",d,o,o,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=V(u,t.trim(),o))return G(i,t,"filter",d,o,o,n),!0})))return void(s&&e.preventDefault());r.handle&&!V(u,r.handle,o)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,i,s,l){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;s&&!t&&s.parentNode===u&&(m=n,o=u,e=(t=s).parentNode,r=t.nextSibling,a=s,g=h.group,f=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,Q(t,h.chosenClass,!0),d._triggerDragStart(n,i),G(d,o,"choose",t,o,o,f)},h.ignore.split(",").forEach(function(e){z(t,e.trim(),Z)}),H(p,"mouseup",d._onDrop),H(p,"touchend",d._onDrop),H(p,"touchcancel",d._onDrop),H(p,"selectstart",d),h.supportPointer&&H(p,"pointercancel",d._onDrop),h.delay?(H(p,"mouseup",d._disableDelayedDrag),H(p,"touchend",d._disableDelayedDrag),H(p,"touchcancel",d._disableDelayedDrag),H(p,"mousemove",d._disableDelayedDrag),H(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=L(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),W(t,"mouseup",this._disableDelayedDrag),W(t,"touchend",this._disableDelayedDrag),W(t,"touchcancel",this._disableDelayedDrag),W(t,"mousemove",this._disableDelayedDrag),W(t,"touchmove",this._disableDelayedDrag),W(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(m={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(H(t,"dragend",this),H(o,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{S.selection?at(function(){S.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(o&&t){var e=this.options;Q(t,e.ghostClass,!0),Q(t,e.dragClass,!1),F.active=this,G(this,o,"start",t,o,o,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,O||q(n,"display","none");var t=S.elementFromPoint(_.clientX,_.clientY),e=t,i=Y.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(_.clientX,_.clientY)),e)do{if(e[C]){for(;i--;)Y[i]({clientX:_.clientX,clientY:_.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);O||q(n,"display","")}},_onTouchMove:function(t){if(m){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-m.clientX+o.x,s=r.clientY-m.clientY+o.y,l=t.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!F.active){if(i&&B(P(r.clientX-this._lastX),P(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),b=!0,_=r,q(n,"webkitTransform",l),q(n,"mozTransform",l),q(n,"msTransform",l),q(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),r=q(t),a=this.options;Q(n=t.cloneNode(!0),a.ghostClass,!1),Q(n,a.fallbackClass,!0),Q(n,a.dragClass,!0),q(n,"top",i.top-E(r.marginTop,10)),q(n,"left",i.left-E(r.marginLeft,10)),q(n,"width",i.width),q(n,"height",i.height),q(n,"opacity","0.8"),q(n,"position","fixed"),q(n,"zIndex","100000"),q(n,"pointerEvents","none"),a.fallbackOnBody&&S.body.appendChild(n)||o.appendChild(n),e=n.getBoundingClientRect(),q(n,"width",2*i.width-e.width),q(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,s=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((i=rt(t)).draggable=!1,i.style["will-change"]="",q(i,"display","none"),Q(i,r.options.chosenClass,!1),r._cloneId=at(function(){o.insertBefore(i,t),G(r,o,"clone",t)})),Q(t,s.dragClass,!0),n?("touch"===n?(H(S,"touchmove",r._onTouchMove),H(S,"touchend",r._onDrop),H(S,"touchcancel",r._onDrop),s.supportPointer&&(H(S,"pointermove",r._onTouchMove),H(S,"pointerup",r._onDrop))):(H(S,"mousemove",r._onTouchMove),H(S,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",s.setData&&s.setData.call(r,a,t)),H(S,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var s,l,c,f,p=this.el,m=this.options,_=m.group,y=F.active,D=g===_,x=!1,T=m.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!m.dragoverBubble&&a.stopPropagation()),!t.animated&&(b=!0,y&&!m.disabled&&(D?T||(f=!o.contains(t)):v===this||(y.lastPullMode=g.checkPull(this,y,t,a))&&_.checkPut(this,y,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if($(a,m,this.el),M)return;if(s=V(a.target,m.draggable,p),l=t.getBoundingClientRect(),v!==this&&(v=this,x=!0),f)return U(y,!0),e=o,void(i||r?o.insertBefore(t,i||r):T||o.appendChild(t));if(0===p.children.length||p.children[0]===n||p===a.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}U(y,D),!1!==J(o,p,t,l,s,c,a)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[C]){d!==s&&(d=s,u=q(s),h=q(s.parentNode));var S=(c=s.getBoundingClientRect()).right-c.left,E=c.bottom-c.top,I=w.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),k=s.offsetWidth>t.offsetWidth,A=s.offsetHeight>t.offsetHeight,N=(I?(a.clientX-c.left)/S:(a.clientY-c.top)/E)>.5,O=s.nextElementSibling,P=!1;if(I){var B=t.offsetTop,R=s.offsetTop;P=B===R?s.previousElementSibling===t&&!k||N&&k:s.previousElementSibling===t||t.previousElementSibling===s?(a.clientY-c.top)/E>.5:R>B}else x||(P=O!==t&&!A||N&&A);var Y=J(o,p,t,l,s,c,a,P);!1!==Y&&(1!==Y&&-1!==Y||(P=1===Y),M=!0,L(K,30),U(y,D),t.contains(p)||(P&&!O?p.appendChild(t):s.parentNode.insertBefore(t,P?O:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),q(e,"transition","none"),q(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,q(e,"transition","all "+n+"ms"),q(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=L(function(){q(e,"transition",""),q(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;W(S,"touchmove",this._onTouchMove),W(S,"pointermove",this._onTouchMove),W(t,"mouseup",this._onDrop),W(t,"touchend",this._onDrop),W(t,"pointerup",this._onDrop),W(t,"touchcancel",this._onDrop),W(t,"pointercancel",this._onDrop),W(t,"selectstart",this)},_onDrop:function(a){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(D.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),W(S,"mouseover",this),W(S,"mousemove",this._onTouchMove),this.nativeDraggable&&(W(S,"drop",this),W(s,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(b&&(a.preventDefault(),!l.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==e&&"clone"===F.active.lastPullMode||i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&W(t,"dragend",this),Z(t),t.style["will-change"]="",Q(t,this.options.ghostClass,!1),Q(t,this.options.chosenClass,!1),G(this,o,"unchoose",t,e,o,f),o!==e?(p=et(t,l.draggable))>=0&&(G(null,e,"add",t,e,o,f,p),G(this,o,"remove",t,e,o,f,p),G(null,e,"sort",t,e,o,f,p),G(this,o,"sort",t,e,o,f,p)):t.nextSibling!==r&&(p=et(t,l.draggable))>=0&&(G(this,o,"update",t,e,o,f,p),G(this,o,"sort",t,e,o,f,p)),F.active&&(null!=p&&-1!==p||(p=f),G(this,o,"end",t,e,o,f,p),this.save()))),this._nulling()},_nulling:function(){o=t=e=n=r=i=a=s=l=m=_=b=p=d=u=v=g=F.active=null,R.forEach(function(t){t.checked=!0}),R.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)V(t=n[i],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,i){var o=n.children[i];V(o,this.options.draggable,n)&&(e[t]=o)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return V(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&X(n)},destroy:function(){var t=this.el;t[C]=null,W(t,"mousedown",this._onTapStart),W(t,"touchstart",this._onTapStart),W(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(W(t,"dragover",this),W(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),Y.splice(Y.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},H(S,"touchmove",function(t){F.active&&t.preventDefault()}),F.utils={on:H,off:W,css:q,find:z,is:function(t,e){return!!V(t,e,t)},extend:ot,throttle:it,closest:V,toggleClass:Q,clone:rt,index:et,nextTick:at,cancelNextTick:st},F.create=function(t,e){return new F(t,e)},F.version="1.7.0",F})},PwAQ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.dndList[data-v-2e25029f] {\n  background: #fff;\n  padding-bottom: 40px;\n}\n.dndList[data-v-2e25029f]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n.dndList .dndList-list[data-v-2e25029f] {\n    float: left;\n    padding-bottom: 30px;\n}\n.dndList .dndList-list[data-v-2e25029f]:first-of-type {\n      margin-right: 2%;\n}\n.dndList .dndList-list .dragArea[data-v-2e25029f] {\n      margin-top: 15px;\n      min-height: 50px;\n      padding-bottom: 30px;\n}\n.list-complete-item[data-v-2e25029f] {\n  cursor: pointer;\n  position: relative;\n  font-size: 14px;\n  padding: 5px 12px;\n  margin-top: 4px;\n  border: 1px solid #bfcbd9;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.list-complete-item-handle[data-v-2e25029f] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n}\n.list-complete-item-handle2[data-v-2e25029f] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.list-complete-item.sortable-chosen[data-v-2e25029f] {\n  background: #4AB7BD;\n}\n.list-complete-item.sortable-ghost[data-v-2e25029f] {\n  background: #30B08F;\n}\n.list-complete-enter[data-v-2e25029f],\n.list-complete-leave-active[data-v-2e25029f] {\n  opacity: 0;\n}\n',""])},"Q6A+":function(t,e,n){var i=n("PwAQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("9e5e7610",i,!0)}});