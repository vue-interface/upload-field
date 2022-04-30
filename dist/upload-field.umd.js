var li=Object.defineProperty;var fn=Object.getOwnPropertySymbols;var fi=Object.prototype.hasOwnProperty,ci=Object.prototype.propertyIsEnumerable;var cn=(A,w,O)=>w in A?li(A,w,{enumerable:!0,configurable:!0,writable:!0,value:O}):A[w]=O,un=(A,w)=>{for(var O in w||(w={}))fi.call(w,O)&&cn(A,O,w[O]);if(fn)for(var O of fn(w))ci.call(w,O)&&cn(A,O,w[O]);return A};(function(A,w){typeof exports=="object"&&typeof module!="undefined"?w(exports):typeof define=="function"&&define.amd?define(["exports"],w):(A=typeof globalThis!="undefined"?globalThis:A||self,w(A.UploadField={}))})(this,function(A){"use strict";/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var w=function(){return w=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},w.apply(this,arguments)};function O(e){return e.toLowerCase()}var dn=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],mn=/[^A-Z0-9]+/gi;function vn(e,t){t===void 0&&(t={});for(var n=t.splitRegexp,a=n===void 0?dn:n,r=t.stripRegexp,o=r===void 0?mn:r,i=t.transform,s=i===void 0?O:i,l=t.delimiter,d=l===void 0?" ":l,f=qe(qe(e,a,"$1\0$2"),o,"\0"),c=0,m=f.length;f.charAt(c)==="\0";)c++;for(;f.charAt(m-1)==="\0";)m--;return f.slice(c,m).split("\0").map(s).join(d)}function qe(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(a,r){return a.replace(r,n)},e)}function pn(e,t){return t===void 0&&(t={}),vn(e,w({delimiter:"."},t))}function hn(e,t){return t===void 0&&(t={}),pn(e,w({delimiter:"-"},t))}var gn={props:{size:String,sizePrefix:{type:String,default(){return this.$options.name}}},computed:{sizeableClassPrefix(){return this.sizePrefix&&hn(this.sizePrefix)},sizeableClass(){return!this.size||!this.sizeableClassPrefix?"":`${this.sizeableClassPrefix}-${this.size}`}}},Ze={props:{variant:String,variantPrefix:{type:String,default(){return this.$options.name&&this.$options.name.toLowerCase()}}},computed:{variantClassPrefix(){return this.variantPrefix},variantClass(){return!this.variant||!this.variantClassPrefix?"":`${this.variantClassPrefix}-${this.variant}`}}},bn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.to?n("router-link",{class:e.classes,attrs:{to:e.to,disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):e.href?n("a",{class:e.classes,attrs:{href:e.href,disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):e.label?n("label",{class:e.classes,attrs:{disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):n("button",{class:e.classes,attrs:{type:e.type,disabled:e.disabled},on:{click:e.onClick}},[e._t("default")],2)},yn=[];function K(e,t,n,a,r,o,i,s){var l=typeof e=="function"?e.options:e;t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o);var d;if(i?(d=function(m){m=m||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!m&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(m=__VUE_SSR_CONTEXT__),r&&r.call(this,m),m&&m._registeredComponents&&m._registeredComponents.add(i)},l._ssrRegister=d):r&&(d=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),d)if(l.functional){l._injectStyles=d;var f=l.render;l.render=function(g,y){return d.call(y),f(g,y)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,d):[d]}return{exports:e,options:l}}const xn={name:"Btn",mixins:[gn,Ze],props:{active:Boolean,block:Boolean,disabled:Boolean,href:String,label:Boolean,outline:Boolean,to:[Object,String],type:String},computed:{variantClassPrefix(){return this.variantPrefix+(this.outline?"-outline":"")},classes(){return["btn",this.variantClass,this.sizeableClass,this.block?"btn-block":"",this.active?"active":""]}},methods:{onClick(e){this.disabled?e.preventDefault():this.$emit("click",e)}}},Qe={};var wn=K(xn,bn,yn,!1,kn,null,null,null);function kn(e){for(let t in Qe)this[t]=Qe[t]}var Cn=function(){return wn.exports}(),_n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropzone",class:{"is-dragging":e.isDragging},on:{drop:e.onDrop,dragover:e.onDragover,dragenter:e.onDragenter,dragleave:e.onDragleave}},[e._t("placeholder",function(){return[n("div",{staticClass:"dropzone-placeholder text-center"},[e._t("content",function(){return[n("div",{staticClass:"dropzone-placeholder-content"},[e._t("icon",function(){return[e.icon?n("svg",{staticClass:"dropzone-placeholder-icon",attrs:{fill:"none",height:"56",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"56",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}}),n("rect",{attrs:{height:"12",rx:"2",width:"12",x:"8",y:"8"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"8",x2:"8",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"12",x2:"12",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"16",x2:"16",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"8",y2:"8.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"12",y2:"12.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"16",y2:"16.01"}})]):e._e()]},{isDragging:e.isDragging}),e._t("text",function(){return[e._m(0)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging}),n("div",[e._t("default")],2)],2)},An=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"dropzone-title"},[e._v(" Drag & Drop ")]),n("p",{staticClass:"dropzone-text"},[e._v(" Drag and drop your files here to upload them! ")])])}],ui="";const Sn={name:"Dropzone",props:{icon:{type:Boolean,default:!0}},data(){return{isDragging:!1}},methods:{onDrop(e){this.isDragging=!1,this.$emit("drop",e)},onDragover(e){this.isDragging=!0,this.$emit("dragover",e)},onDragenter(e){this.isDragging=!0,this.$emit("dragenter",e),this.onDragover(e)},onDragleave(e){this.isDragging=!1,this.$emit("dragleave",e)}}},Je={};var En=K(Sn,_n,An,!1,On,null,null,null);function On(e){for(let t in Je)this[t]=Je[t]}var zn=function(){return En.exports}();const Pn={"file-archive":{extensions:["7z","bz","bz2","gz","zip"]},"file-audio":{extensions:["aac","mid","midi","mp3","oga","opus","wav","weba"],validate:e=>!!e&&e.match(/^audio/)},"file-code":{extensions:["htm","html","jar","js","json","php","py","rb","vue","xml"]},"file-excel":{extensions:["xls","xlsx"]},"file-image":{extensions:["bmp","gif","jpeg","jpg","png","svg","tif","tiff","webp"],validate:e=>e&&e.match(/^image/)},"file-pdf":{extensions:["pdf"]},"file-powerpoint":{extensions:["ppt","pptx"]},"file-video":{extensions:["3gp","avi","mpeg","ogv","ts","webm"],validate:e=>!!e&&e.match(/^video/)},"file-word":["doc","docx"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(a){Nn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function re(e){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Mn(e,t,n){return t&&tt(e.prototype,t),n&&tt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){return In(e)||Dn(e,t)||nt(e,t)||Rn()}function ie(e){return Tn(e)||Fn(e)||nt(e)||$n()}function Tn(e){if(Array.isArray(e))return xe(e)}function In(e){if(Array.isArray(e))return e}function Fn(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dn(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function nt(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(e,t)}}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function $n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var at=function(){},we={},rt={},it=null,ot={mark:at,measure:at};try{typeof window!="undefined"&&(we=window),typeof document!="undefined"&&(rt=document),typeof MutationObserver!="undefined"&&(it=MutationObserver),typeof performance!="undefined"&&(ot=performance)}catch{}var jn=we.navigator||{},st=jn.userAgent,lt=st===void 0?"":st,D=we,x=rt,ft=it,oe=ot;D.document;var M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ct=~lt.indexOf("MSIE")||~lt.indexOf("Trident/"),N="___FONT_AWESOME___",ke=16,ut="fa",dt="svg-inline--fa",j="data-fa-i2svg",Ce="data-fa-pseudo-element",Hn="data-fa-pseudo-element-pending",_e="data-prefix",Ae="data-icon",mt="fontawesome-i2svg",Bn="async",Vn=["HTML","HEAD","STYLE","SCRIPT"],vt=function(){try{return!0}catch{return!1}}(),Se={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},se={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},pt={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Un={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Yn=/fa[srltdbk\-\ ]/,ht="fa-layers-text",Wn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Gn={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},gt=[1,2,3,4,5,6,7,8,9,10],Xn=gt.concat([11,12,13,14,15,16,17,18,19,20]),Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qn=[].concat(ie(Object.keys(se)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(gt.map(function(e){return"".concat(e,"x")})).concat(Xn.map(function(e){return"w-".concat(e)})),bt=D.FontAwesomeConfig||{};function Zn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Jn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jn.forEach(function(e){var t=ye(e,2),n=t[0],a=t[1],r=Qn(Zn(n));r!=null&&(bt[a]=r)})}var ea={familyPrefix:ut,styleDefault:"solid",replacementClass:dt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=u(u({},ea),bt);q.autoReplaceSvg||(q.observeMutations=!1);var p={};Object.keys(q).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){q[e]=n,le.forEach(function(a){return a(p)})},get:function(){return q[e]}})}),D.FontAwesomeConfig=p;var le=[];function ta(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var $=ke,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(e){if(!(!e||!M)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return x.head.insertBefore(t,a),e}}var aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){for(var e=12,t="";e-- >0;)t+=aa[Math.random()*62|0];return t}function V(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ee(e){return e.classList?V(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function yt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(yt(e[n]),'" ')},"").trim()}function fe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Oe(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function ia(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:d}}function oa(e){var t=e.transform,n=e.width,a=n===void 0?ke:n,r=e.height,o=r===void 0?ke:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&ct?l+="translate(".concat(t.x/$-a/2,"em, ").concat(t.y/$-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):l+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),l+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xt(){var e=ut,t=dt,n=p.familyPrefix,a=p.replacementClass,r=sa;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var wt=!1;function ze(){p.autoAddCss&&!wt&&(na(xt()),wt=!0)}var la={mixout:function(){return{dom:{css:xt,insertCss:ze}}},hooks:function(){return{beforeDOMElementCreation:function(){ze()},beforeI2svg:function(){ze()}}}},T=D||{};T[N]||(T[N]={}),T[N].styles||(T[N].styles={}),T[N].hooks||(T[N].hooks={}),T[N].shims||(T[N].shims=[]);var z=T[N],kt=[],fa=function e(){x.removeEventListener("DOMContentLoaded",e),ce=1,kt.map(function(t){return t()})},ce=!1;M&&(ce=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ce||x.addEventListener("DOMContentLoaded",fa));function ca(e){!M||(ce?setTimeout(e,0):kt.push(e))}function Q(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?yt(e):"<".concat(t," ").concat(ra(a),">").concat(o.map(Q).join(""),"</").concat(t,">")}function Ct(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ua=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Pe=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?ua(n,r):n,l,d,f;for(a===void 0?(l=1,f=t[o[0]]):(l=0,f=a);l<i;l++)d=o[l],f=s(f,t[d],d,t);return f};function da(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Le(e){var t=da(e);return t.length===1?t[0].toString(16):null}function ma(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function _t(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Me(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=_t(t);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(e,_t(t)):z.styles[e]=u(u({},z.styles[e]||{}),o),e==="fas"&&Me("fa",t)}var J=z.styles,va=z.shims,pa=Object.values(pt),Ne=null,At={},St={},Et={},Ot={},zt={},ha=Object.keys(Se);function ga(e){return~qn.indexOf(e)}function ba(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ga(r)?r:null}var Pt=function(){var t=function(o){return Pe(J,function(i,s,l){return i[l]=Pe(s,o,{}),i},{})};At=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),St=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),zt=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in J||p.autoFetchSvg,a=Pe(va,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Et=a.names,Ot=a.unicodes,Ne=ue(p.styleDefault)};ta(function(e){Ne=ue(e.styleDefault)}),Pt();function Te(e,t){return(At[e]||{})[t]}function ya(e,t){return(St[e]||{})[t]}function U(e,t){return(zt[e]||{})[t]}function Lt(e){return Et[e]||{prefix:null,iconName:null}}function xa(e){var t=Ot[e],n=Te("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Ne}var Ie=function(){return{prefix:null,iconName:null,rest:[]}};function ue(e){var t=Se[e],n=se[e]||se[t],a=e in z.styles?e:null;return n||a||null}function de(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,a=n===void 0?!1:n,r=null,o=e.reduce(function(i,s){var l=ba(p.familyPrefix,s);if(J[s]?(s=pa.includes(s)?Un[s]:s,r=s,i.prefix=s):ha.indexOf(s)>-1?(r=s,i.prefix=ue(s)):l?i.iconName=l:s!==p.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var d=r==="fa"?Lt(i.iconName):{},f=U(i.prefix,i.iconName);d.prefix&&(r=null),i.iconName=d.iconName||f||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!J.far&&J.fas&&!p.autoFetchSvg&&(i.prefix="fas")}return i},Ie());return(o.prefix==="fa"||r==="fa")&&(o.prefix=R()||"fas"),o}var wa=function(){function e(){Ln(this,e),this.definitions={}}return Mn(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),i[s]),Me(s,i[s]);var l=pt[s];l&&Me(l,i[s]),Pt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,d=i.icon,f=d[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[s][c]=d)}),n[s][l]=d}),n}}]),e}(),Mt=[],Y={},W={},ka=Object.keys(W);function Ca(e,t){var n=t.mixoutsTo;return Mt=e,Y={},Object.keys(W).forEach(function(a){ka.indexOf(a)===-1&&delete W[a]}),Mt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),re(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){Y[i]||(Y[i]=[]),Y[i].push(o[i])})}a.provides&&a.provides(W)}),n}function Fe(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=Y[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Y[e]||[];r.forEach(function(o){o.apply(null,n)})}function I(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||R();if(!!t)return t=U(n,t)||t,Ct(Nt.definitions,n,t)||Ct(z.styles,n,t)}var Nt=new wa,_a=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,B("noAuto")},Aa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(B("beforeI2svg",t),I("pseudoElements2svg",t),I("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ca(function(){Ea({autoReplaceSvgRoot:n}),B("watch",t)})}},Sa={icon:function(t){if(t===null)return null;if(re(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ue(t[0]);return{prefix:a,iconName:U(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.familyPrefix,"-"))>-1||t.match(Yn))){var r=de(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=R();return{prefix:o,iconName:U(o,t)||t}}}},E={noAuto:_a,config:p,dom:Aa,parse:Sa,library:Nt,findIconDefinition:De,toHtml:Q},Ea=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(z.styles).length>0||p.autoFetchSvg)&&M&&p.autoReplaceSvg&&E.dom.i2svg({node:a})};function me(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Q(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!M){var a=x.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Oa(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Oe(i)&&n.found&&!a.found){var s=n.width,l=n.height,d={x:s/l/2,y:.5};r.style=fe(u(u({},o),{},{"transform-origin":"".concat(d.x+i.x/16,"em ").concat(d.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function za(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(p.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function $e(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,d=e.maskId,f=e.titleId,c=e.extra,m=e.watchable,g=m===void 0?!1:m,y=a.found?a:n,k=y.width,S=y.height,v=r==="fak",h=[p.replacementClass,o?"".concat(p.familyPrefix,"-").concat(o):""].filter(function(X){return c.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(c.classes).join(" "),b={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":r,"data-icon":o,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(S)})},_=v&&!~c.classes.indexOf("fa-fw")?{width:"".concat(k/S*16*.0625,"em")}:{};g&&(b.attributes[j]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||Z())},children:[l]}),delete b.attributes.title);var C=u(u({},b),{},{prefix:r,iconName:o,main:n,mask:a,maskId:d,transform:i,symbol:s,styles:u(u({},_),c.styles)}),P=a.found&&n.found?I("generateAbstractMask",C)||{children:[],attributes:{}}:I("generateAbstractIcon",C)||{children:[],attributes:{}},F=P.children,ae=P.attributes;return C.children=F,C.attributes=ae,s?za(C):Oa(C)}function Tt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,d=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(d[j]="");var f=u({},i.styles);Oe(r)&&(f.transform=oa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var c=fe(f);c.length>0&&(d.style=c);var m=[];return m.push({tag:"span",attributes:d,children:[t]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Pa(e){var t=e.content,n=e.title,a=e.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=fe(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Re=z.styles;function je(e){var t=e[0],n=e[1],a=e.slice(4),r=ye(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(p.familyPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var La={found:!1,width:512,height:512};function Ma(e,t){!vt&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function He(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=R()),new Promise(function(a,r){if(I("missingIconAbstract"),n==="fa"){var o=Lt(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Re[t]&&Re[t][e]){var i=Re[t][e];return a(je(i))}Ma(e,t),a(u(u({},La),{},{icon:p.showMissingIcons&&e?I("missingIconAbstract")||{}:{}}))})}var It=function(){},Be=p.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:It,measure:It},ee='FA "6.1.1"',Na=function(t){return Be.mark("".concat(ee," ").concat(t," begins")),function(){return Ft(t)}},Ft=function(t){Be.mark("".concat(ee," ").concat(t," ends")),Be.measure("".concat(ee," ").concat(t),"".concat(ee," ").concat(t," begins"),"".concat(ee," ").concat(t," ends"))},Ve={begin:Na,end:Ft},ve=function(){};function Dt(e){var t=e.getAttribute?e.getAttribute(j):null;return typeof t=="string"}function Ta(e){var t=e.getAttribute?e.getAttribute(_e):null,n=e.getAttribute?e.getAttribute(Ae):null;return t&&n}function Ia(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Fa(){if(p.autoReplaceSvg===!0)return pe.replace;var e=pe[p.autoReplaceSvg];return e||pe.replace}function Da(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function $a(e){return x.createElement(e)}function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Da:$a:n;if(typeof e=="string")return x.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild($t(i,{ceFn:a}))}),r}function Ra(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore($t(r),n)}),n.getAttribute(j)===null&&p.keepOriginalSource){var a=x.createComment(Ra(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Ee(n).indexOf(p.replacementClass))return pe.replace(t);var r=new RegExp("".concat(p.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return Q(s)}).join(`
`);n.setAttribute(j,""),n.innerHTML=i}};function Rt(e){e()}function jt(e,t){var n=typeof t=="function"?t:ve;if(e.length===0)n();else{var a=Rt;p.mutateApproach===Bn&&(a=D.requestAnimationFrame||Rt),a(function(){var r=Fa(),o=Ve.begin("mutate");e.map(r),o(),n()})}}var Ue=!1;function Ht(){Ue=!0}function Ye(){Ue=!1}var he=null;function Bt(e){if(!!ft&&!!p.observeMutations){var t=e.treeCallback,n=t===void 0?ve:t,a=e.nodeCallback,r=a===void 0?ve:a,o=e.pseudoElementsCallback,i=o===void 0?ve:o,s=e.observeMutationsRoot,l=s===void 0?x:s;he=new ft(function(d){if(!Ue){var f=R();V(d).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Dt(c.addedNodes[0])&&(p.searchPseudoElements&&i(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&p.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&Dt(c.target)&&~Kn.indexOf(c.attributeName))if(c.attributeName==="class"&&Ta(c.target)){var m=de(Ee(c.target)),g=m.prefix,y=m.iconName;c.target.setAttribute(_e,g||f),y&&c.target.setAttribute(Ae,y)}else Ia(c.target)&&r(c.target)})}}),M&&he.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ja(){!he||he.disconnect()}function Ha(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Ba(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=de(Ee(e));return r.prefix||(r.prefix=R()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,e.innerText)||Te(r.prefix,Le(e.innerText))),r}function Va(e){var t=V(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||Z()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ba(e),a=n.iconName,r=n.prefix,o=n.rest,i=Va(e),s=Fe("parseNodeAttributes",{},e),l=t.styleParser?Ha(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Ya=z.styles;function Ut(e){var t=p.autoReplaceSvg==="nest"?Vt(e,{styleParser:!1}):Vt(e);return~t.extra.classes.indexOf(ht)?I("generateLayersText",e,t):I("generateSvgReplacementMutation",e,t)}function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var n=x.documentElement.classList,a=function(c){return n.add("".concat(mt,"-").concat(c))},r=function(c){return n.remove("".concat(mt,"-").concat(c))},o=p.autoFetchSvg?Object.keys(Se):Object.keys(Ya),i=[".".concat(ht,":not([").concat(j,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(j,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Ve.begin("onTree"),d=s.reduce(function(f,c){try{var m=Ut(c);m&&f.push(m)}catch(g){vt||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,c){Promise.all(d).then(function(m){jt(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(m){l(),c(m)})})}function Wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ut(e).then(function(n){n&&jt([n],t)})}function Ga(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:De(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:De(r||{})),e(a,u(u({},n),{},{mask:r}))}}var Xa=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,d=n.maskId,f=d===void 0?null:d,c=n.title,m=c===void 0?null:c,g=n.titleId,y=g===void 0?null:g,k=n.classes,S=k===void 0?[]:k,v=n.attributes,h=v===void 0?{}:v,b=n.styles,_=b===void 0?{}:b;if(!!t){var C=t.prefix,P=t.iconName,F=t.icon;return me(u({type:"icon"},t),function(){return B("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(m?h["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(y||Z()):(h["aria-hidden"]="true",h.focusable="false")),$e({icons:{main:je(F),mask:l?je(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:P,transform:u(u({},L),r),symbol:i,title:m,maskId:f,titleId:y,extra:{attributes:h,styles:_,classes:S}})})}},Ka={mixout:function(){return{icon:Ga(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Yt,n.nodeCallback=Wa,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?x:a,o=n.callback,i=o===void 0?function(){}:o;return Yt(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,d=a.symbol,f=a.mask,c=a.maskId,m=a.extra;return new Promise(function(g,y){Promise.all([He(r,s),f.iconName?He(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var S=ye(k,2),v=S[0],h=S[1];g([n,$e({icons:{main:v,mask:h},prefix:s,iconName:r,transform:l,symbol:d,maskId:c,title:o,titleId:i,extra:m,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=fe(s);l.length>0&&(r.style=l);var d;return Oe(i)&&(d=I("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(d||o.icon),{children:a,attributes:r}}}},qa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return me({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.familyPrefix,"-layers")].concat(ie(o)).join(" ")},children:i}]})}}}},Za={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,d=l===void 0?{}:l,f=a.styles,c=f===void 0?{}:f;return me({type:"counter",content:n},function(){return B("beforeDOMElementCreation",{content:n,params:a}),Pa({content:n.toString(),title:o,extra:{attributes:d,styles:c,classes:["".concat(p.familyPrefix,"-layers-counter")].concat(ie(s))}})})}}}},Qa={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?L:r,i=a.title,s=i===void 0?null:i,l=a.classes,d=l===void 0?[]:l,f=a.attributes,c=f===void 0?{}:f,m=a.styles,g=m===void 0?{}:m;return me({type:"text",content:n},function(){return B("beforeDOMElementCreation",{content:n,params:a}),Tt({content:n,transform:u(u({},L),o),title:s,extra:{attributes:c,styles:g,classes:["".concat(p.familyPrefix,"-layers-text")].concat(ie(d))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(ct){var d=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/d,l=f.height/d}return p.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Tt({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Ja=new RegExp('"',"ug"),Wt=[1105920,1112319];function er(e){var t=e.replace(Ja,""),n=ma(t,0),a=n>=Wt[0]&&n<=Wt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Le(r?t[0]:t),isSecondary:a||r}}function Gt(e,t){var n="".concat(Hn).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=V(e.children),i=o.filter(function(P){return P.getAttribute(Ce)===t})[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Wn),d=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&f!=="none"&&f!==""){var c=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?se[l[2].toLowerCase()]:Gn[d],g=er(c),y=g.value,k=g.isSecondary,S=l[0].startsWith("FontAwesome"),v=Te(m,y),h=v;if(S){var b=xa(y);b.iconName&&b.prefix&&(v=b.iconName,m=b.prefix)}if(v&&!k&&(!i||i.getAttribute(_e)!==m||i.getAttribute(Ae)!==h)){e.setAttribute(n,h),i&&e.removeChild(i);var _=Ua(),C=_.extra;C.attributes[Ce]=t,He(v,m).then(function(P){var F=$e(u(u({},_),{},{icons:{main:P,mask:Ie()},prefix:m,iconName:h,extra:C,watchable:!0})),ae=x.createElement("svg");t==="::before"?e.insertBefore(ae,e.firstChild):e.appendChild(ae),ae.outerHTML=F.map(function(X){return Q(X)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function tr(e){return Promise.all([Gt(e,"::before"),Gt(e,"::after")])}function nr(e){return e.parentNode!==document.head&&!~Vn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ce)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xt(e){if(!!M)return new Promise(function(t,n){var a=V(e.querySelectorAll("*")).filter(nr).map(tr),r=Ve.begin("searchPseudoElements");Ht(),Promise.all(a).then(function(){r(),Ye(),t()}).catch(function(){r(),Ye(),n()})})}var ar={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;p.searchPseudoElements&&Xt(r)}}},Kt=!1,rr={mixout:function(){return{dom:{unwatch:function(){Ht(),Kt=!0}}}},hooks:function(){return{bootstrap:function(){Bt(Fe("mutationObserverCallbacks",{}))},noAuto:function(){ja()},watch:function(n){var a=n.observeMutationsRoot;Kt?Ye():Bt(Fe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},qt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ir={mixout:function(){return{parse:{transform:function(n){return qt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=qt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(d," ").concat(f)},m={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:c,path:m};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},We={x:0,y:0,width:"100%",height:"100%"};function Zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function or(e){return e.tag==="g"?e.children:[e]}var sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?de(r.split(" ").map(function(i){return i.trim()})):Ie();return o.prefix||(o.prefix=R()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,d=o.width,f=o.icon,c=i.width,m=i.icon,g=ia({transform:l,containerWidth:c,iconWidth:d}),y={tag:"rect",attributes:u(u({},We),{},{fill:"white"})},k=f.children?{children:f.children.map(Zt)}:{},S={tag:"g",attributes:u({},g.inner),children:[Zt(u({tag:f.tag,attributes:u(u({},f.attributes),g.path)},k))]},v={tag:"g",attributes:u({},g.outer),children:[S]},h="mask-".concat(s||Z()),b="clip-".concat(s||Z()),_={tag:"mask",attributes:u(u({},We),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:or(m)},_]};return a.push(C,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(h,")")},We)}),{children:a,attributes:r}}}},lr={provides:function(t){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},fr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},cr=[la,Ka,qa,Za,Qa,ar,rr,ir,sr,lr,fr];Ca(cr,{mixoutsTo:E}),E.noAuto,E.config;var ur=E.library;E.dom;var Ge=E.parse;E.findIconDefinition,E.toHtml;var dr=E.icon;E.layer,E.text,E.counter;var mr=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function vr(e,t){return t={exports:{}},e(t,t.exports),t.exports}var pr=vr(function(e){(function(t){var n=function(v,h,b){if(!d(h)||c(h)||m(h)||g(h)||l(h))return h;var _,C=0,P=0;if(f(h))for(_=[],P=h.length;C<P;C++)_.push(n(v,h[C],b));else{_={};for(var F in h)Object.prototype.hasOwnProperty.call(h,F)&&(_[v(F,b)]=n(v,h[F],b))}return _},a=function(v,h){h=h||{};var b=h.separator||"_",_=h.split||/(?=[A-Z])/;return v.split(_).join(b)},r=function(v){return y(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(h,b){return b?b.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},o=function(v){var h=r(v);return h.substr(0,1).toUpperCase()+h.substr(1)},i=function(v,h){return a(v,h).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},d=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},c=function(v){return s.call(v)=="[object Date]"},m=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},y=function(v){return v=v-0,v===v},k=function(v,h){var b=h&&"process"in h?h.process:h;return typeof b!="function"?v:function(_,C){return b(_,v,C)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(v,h){return n(k(r,h),v)},decamelizeKeys:function(v,h){return n(k(i,h),v,h)},pascalizeKeys:function(v,h){return n(k(o,h),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(mr)}),Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},hr=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||!Object.prototype.hasOwnProperty.call(e,a)||(n[a]=e[a]);return n};function gr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=pr.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return t[r]=o,t},{})}function br(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yr(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(a,r){return Array.isArray(r)?a=a.concat(r):a.push(r),a},[])}function Jt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},r=(t.children||[]).map(Jt.bind(null,e)),o=Object.keys(t.attributes||{}).reduce(function(g,y){var k=t.attributes[y];switch(y){case"class":g.class=br(k);break;case"style":g.style=gr(k);break;default:g.attrs[y]=k}return g},{class:{},style:{},attrs:{}}),i=a.class,s=i===void 0?{}:i,l=a.style,d=l===void 0?{}:l,f=a.attrs,c=f===void 0?{}:f,m=hr(a,["class","style","attrs"]);return typeof t=="string"?t:e(t.tag,ge({class:yr(o.class,s),style:ge({},o.style,d),attrs:ge({},o.attrs,c)},m,{props:n}),r)}var en=!1;try{en=!0}catch{}function xr(){if(!en&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}function wr(e){var t,n=(t={"fa-spin":e.spin,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse,"fa-pulse":e.pulse,"fa-beat":e.beat,"fa-fade":e.fade,"fa-flash":e.flash,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},te(t,"fa-"+e.size,e.size!==null),te(t,"fa-rotate-"+e.rotation,e.rotation!==null),te(t,"fa-pull-"+e.pull,e.pull!==null),te(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function tn(e){if(e&&(typeof e=="undefined"?"undefined":Qt(e))==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ge.icon)return Ge.icon(e);if(e===null)return null;if((typeof e=="undefined"?"undefined":Qt(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kr={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,n){var a=n.props,r=a.icon,o=a.mask,i=a.symbol,s=a.title,l=tn(r),d=Xe("classes",wr(a)),f=Xe("transform",typeof a.transform=="string"?Ge.transform(a.transform):a.transform),c=Xe("mask",tn(o)),m=dr(l,ge({},d,f,c,{symbol:i,title:s}));if(!m)return xr("Could not find one or more icon(s)",l,c);var g=m.abstract,y=Jt.bind(null,t);return y(g[0],{},n.data)}},Cr=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{height:e.height}},[n("div",{staticClass:"progress-bar",class:e.classes,style:e.styles,attrs:{role:"progressbar","aria-valuenow":e.offsetValue,"aria-valuemin":e.min,"aria-valuemax":e.max}},[e.label?n("span",[e.label!==!0?[e._v(" "+e._s(e.label)+" ")]:e._e(),e._v(" "+e._s(e.offsetValue)+"% ")],2):n("span",[e._t("default")],2)])])},_r=[],di="";const Ar={name:"ProgressBar",mixins:[Ze],props:{color:String,value:{type:Number,required:!0},height:String,label:[String,Boolean],striped:Boolean,animated:Boolean,min:{type:Number,default:0},max:{type:Number,default:100},variant:{type:String,default:"primary"}},computed:{classes(){return un({[this.variantClass]:!!this.variant},this.progressClasses)},variantClassPrefix(){return"bg"},offsetValue(){return this.value/this.max*100},progressClasses(){return{"progress-bar-striped":this.striped,"progress-bar-animated":this.animated}},styles(){return{width:`${this.offsetValue}%`,background:`${this.color} !important`}}}},nn={};var Sr=K(Ar,Cr,_r,!1,Er,null,null,null);function Er(e){for(let t in nn)this[t]=nn[t]}var Or=function(){return Sr.exports}();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zr={prefix:"far",iconName:"file-audio",icon:[384,512,[],"f1c7","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM171.5 259.5L136 296H92C85.38 296 80 301.4 80 308v56C80 370.7 85.38 376 92 376H136l35.5 36.5C179.1 420 192 414.8 192 404v-136C192 257.3 179.1 251.9 171.5 259.5zM235.1 260.7c-6.25 6.25-6.25 16.38 0 22.62C235.3 283.5 256 305.1 256 336c0 30.94-20.77 52.53-20.91 52.69c-6.25 6.25-6.25 16.38 0 22.62C238.2 414.4 242.3 416 246.4 416s8.188-1.562 11.31-4.688C258.1 410.1 288 380.5 288 336s-29.05-74.06-30.28-75.31C251.5 254.4 241.3 254.4 235.1 260.7z"]},Pr={prefix:"far",iconName:"file-code",icon:[384,512,[],"f1c9","M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84C169.1 278.3 169.1 265.7 162.1 257.8zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z"]},Lr={prefix:"far",iconName:"file-excel",icon:[384,512,[],"f1c3","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM229.1 233.3L192 280.9L154.9 233.3C146.8 222.8 131.8 220.9 121.3 229.1C110.8 237.2 108.9 252.3 117.1 262.8L161.6 320l-44.53 57.25c-8.156 10.47-6.25 25.56 4.188 33.69C125.7 414.3 130.8 416 135.1 416c7.156 0 14.25-3.188 18.97-9.25L192 359.1l37.06 47.65C233.8 412.8 240.9 416 248 416c5.125 0 10.31-1.656 14.72-5.062c10.44-8.125 12.34-23.22 4.188-33.69L222.4 320l44.53-57.25c8.156-10.47 6.25-25.56-4.188-33.69C252.2 220.9 237.2 222.8 229.1 233.3z"]},Mr={prefix:"far",iconName:"file-image",icon:[384,512,[128443],"f1c5","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM215.3 292c-4.68 0-9.051 2.34-11.65 6.234L164 357.8l-11.68-17.53C149.7 336.3 145.3 334 140.7 334c-4.682 0-9.053 2.34-11.65 6.234l-46.67 70c-2.865 4.297-3.131 9.82-.6953 14.37C84.09 429.2 88.84 432 93.1 432h196c5.163 0 9.907-2.844 12.34-7.395c2.436-4.551 2.17-10.07-.6953-14.37l-74.67-112C224.4 294.3 220 292 215.3 292zM128 288c17.67 0 32-14.33 32-32S145.7 224 128 224S96 238.3 96 256S110.3 288 128 288z"]},Nr={prefix:"far",iconName:"file-lines",icon:[384,512,[128462,61686,128441,"file-alt","file-text"],"f15c","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z"]},Tr=Nr,Ir={prefix:"far",iconName:"file-pdf",icon:[384,512,[],"f1c1","M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"]},Fr={prefix:"far",iconName:"file-powerpoint",icon:[384,512,[],"f1c4","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM200 224H128C119.2 224 112 231.2 112 240v168c0 13.25 10.75 24 24 24S160 421.3 160 408v-32h44c44.21 0 79.73-37.95 75.69-82.98C276.1 253.2 240 224 200 224zM204 328H160V272h44c15.44 0 28 12.56 28 28S219.4 328 204 328z"]},Dr={prefix:"far",iconName:"file-video",icon:[384,512,[],"f1c8","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z"]},$r={prefix:"far",iconName:"file-word",icon:[384,512,[],"f1c2","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"]},Rr={prefix:"far",iconName:"file-zipper",icon:[384,512,["file-archive"],"f1c6","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h48V64h64V48.13h48.01L224 128c0 17.67 14.33 32 32 32h79.1V448zM176 96h-64v32h64V96zM176 160h-64v32h64V160zM176 224h-64l-30.56 116.5C73.51 379.5 103.7 416 144.3 416c40.26 0 70.45-36.3 62.68-75.15L176 224zM160 368H128c-8.836 0-16-7.164-16-16s7.164-16 16-16h32c8.836 0 16 7.164 16 16S168.8 368 160 368z"]},jr=Rr,Hr={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},Br=Hr,Vr=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-preview",class:{"has-image":!!e.data}},[n("div",{staticClass:"file-preview-inner"},[e.closeable?n("a",{staticClass:"file-preview-close",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.$emit("close",a,e.file)}}},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1):e._e(),e._t("icon",function(){return[e.url||e.data&&e.isImage?n("div",{staticClass:"file-preview-image"},[n("img",{staticClass:"file-preview-thumbnail",attrs:{src:e.url||e.data}})]):n("div",{staticClass:"file-preview-icon"},[n("font-awesome-icon",{attrs:{icon:["far",e.computedIcon]}})],1)]},null,this),e._t("progress",function(){return[typeof e.percentLoaded=="number"?n("div",{staticClass:"file-preview-progress"},[n("progress-bar",{attrs:{variant:"primary",height:"10px",value:e.percentLoaded}})],1):e._e()]},null,this),e._t("default"),n("div",{staticClass:"file-preview-filename",domProps:{innerHTML:e._s(e.computedName)}}),n("div",{staticClass:"file-preview-filesize"},[e._v(" ("+e._s(e.computedSize)+") ")])],2)])},Ur=[],mi="";ur.add(Tr,jr,zr,Pr,Lr,Mr,Ir,Fr,Dr,$r,Br);const Yr={name:"FilePreview",components:{ProgressBar:Or,FontAwesomeIcon:kr},directives:{ready:{inserted(e,t,n){typeof t.value=="function"&&n.context.$nextTick(t.value)}}},props:{closeable:{type:Boolean,default:!0},extension:String,file:Blob,mime:String,filename:String,preview:{type:Boolean,default:!0},size:Number,url:String},data(){return{data:null,loading:!1,percentLoaded:null}},computed:{computedExtension(){return this.file instanceof Blob?this.file.name.split(".").pop().toLowerCase():this.extension},computedIcon(){const e=this.icon();return e||"file-alt"},computedMime(){return this.file instanceof Blob?this.file.type:this.mime},computedName(){return this.file instanceof Blob?this.file.name:this.filename},computedSize(){return this.bytesToSize(this.file?this.file.size:this.size||0)},computedSrc(){if(!(this.file instanceof Blob))return this.url},isImage(){return this.file&&this.file.type.match(/^image/)}},mounted(){this.file&&this.readFile(this.file)},methods:{readFile(e){return new Promise((t,n)=>{this.data=null,this.loading=!0,this.percentLoaded=0;const a=new Date,r=new FileReader;r.onprogress=o=>this.onProgress(o),r.onload=o=>{setTimeout(()=>{t(o.target.result)},666-(new Date().getTime()-a.getTime())/1e3)},r.onerror=o=>n(o),r.readAsDataURL(e)}).then(t=>(this.$emit("read",t),this.percentLoaded=null,this.data=t),t=>{this.$emit("error",t)})},bytesToSize(e){var t=["Bytes","KB","MB","GB","TB"];if(e===0)return"0 Byte";var n=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,n),2)+" "+t[n]},icon(){for(let[e,{extensions:t,validate:n}]of Object.entries(Pn))if(n&&n(this.computedMime)||t&&t.indexOf(this.computedExtension)>-1)return e},onProgress(e){const t=parseInt(e.loaded/e.total*100,10);this.$emit("progress",t),this.percentLoaded=t}}},an={};var Wr=K(Yr,Vr,Ur,!1,Gr,null,null,null);function Gr(e){for(let t in an)this[t]=an[t]}var Xr=function(){return Wr.exports}(),Kr={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const e=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,t=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${e}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${t}`]:!!this.shadow}}}},be=function(){return be=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},be.apply(this,arguments)};function qr(e){return e.toLowerCase()}var Zr=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],Qr=/[^A-Z0-9]+/gi;function Jr(e,t){t===void 0&&(t={});for(var n=t.splitRegexp,a=n===void 0?Zr:n,r=t.stripRegexp,o=r===void 0?Qr:r,i=t.transform,s=i===void 0?qr:i,l=t.delimiter,d=l===void 0?" ":l,f=rn(rn(e,a,"$1\0$2"),o,"\0"),c=0,m=f.length;f.charAt(c)==="\0";)c++;for(;f.charAt(m-1)==="\0";)m--;return f.slice(c,m).split("\0").map(s).join(d)}function rn(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(a,r){return a.replace(r,n)},e)}function ei(e,t){return t===void 0&&(t={}),Jr(e,be({delimiter:"."},t))}function on(e,t){return t===void 0&&(t={}),ei(e,be({delimiter:"-"},t))}const ne={};function G(...e){if(!e.length)return ne;const[t,n]=e;return typeof t=="string"?typeof ne[t]!="undefined"?ne[t]:n:Array.isArray(t)?t.reduce((a,r)=>Object.assign(a,{[r]:ne[r]}),{}):Object.assign(ne,...e)}function Ke(e,t,n="-"){const a=t.toString().replace(new RegExp(`^${e}${n}?`),"");return[on(a),e].filter(r=>!!r).join(n)}function sn(e){return!Array.isArray(e)&&typeof e=="object"}var ti={directives:{bindEvents:{bind(e,t,n){if(e.addEventListener("focus",()=>{n.context.hasFocus=!0}),e.addEventListener("blur",()=>{n.context.hasFocus=!1}),e.addEventListener(e.tagName==="SELECT"?"change":"input",a=>{n.context.isEmpty=!e.value,n.context.currentValue=e.value}),n.context.hasChanged=!!e.value,n.context.bindEvents.forEach(a=>{e.addEventListener(a,r=>{n.context.$emit(a,r)})}),e.tagName==="SELECT"){const a=e.querySelector('[value=""]');a&&a.value===e.value&&(n.context.defaultEmpty=!0)}}}},mixins:[Kr],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>G("animated",!1)},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},componentName:{type:String,default(){return this.$options.name}},defaultControlClass:{type:String,default:()=>G("defaultControlClass","form-control")},defaultValue:{default:()=>G("defaultValue",null)},error:[String,Array,Boolean],errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:()=>G("group",!0)},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:()=>G("indicator","spinner")},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:()=>G("labelClass","form-label")},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((e,t)=>(Array.isArray(t)?e[t[0]]=t[1]:e[t]=this[t]||this.$attrs[t],e),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return Ke(this.size,this.controlClass)},formGroupClasses(){return{[on(this.componentName)]:!!this.componentName,[this.size&&Ke(this.size,this.componentName)]:!!this.size,animated:this.animated,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&Ke(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback)}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error==="")return null;if(this.error)return this.error;const e=this.getFieldErrors();return Array.isArray(e)?e.filter(t=>t&&typeof t=="string").join("<br>"):e},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.shouldChangeOnFocus()&&(this.hasChanged=!0)},value(e){this.currentValue=e},currentValue(){this.hasChanged=!0},defaultEmpty(){this.hasChanged=!0}},mounted(){this.value===null&&this.defaultValue!==null&&this.$emit("input",this.defaultValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let e=this.error||this.errors;return this.errors&&sn(this.errors)&&(e=this.errors[this.$attrs.name||this.$attrs.id]),!e||Array.isArray(e)||sn(e)?e:[e]},shouldChangeOnFocus(){return!this.getInputField().readOnly},onInput(e){this.$emit("input",e.target.value),this.$emit("update:value",e.target.value)}}},ni=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-field",class:Object.assign({},{"is-dragging":e.isDragging,multiple:e.multiple},e.formGroupClasses)},[n("dropzone",{staticClass:"upload-field-dropzone",on:{drop:function(a){return a.preventDefault(),e.onDrop.apply(null,arguments)},dragover:function(a){return a.preventDefault(),e.onDragOver.apply(null,arguments)},dragenter:function(a){return a.preventDefault(),e.onDragEnter.apply(null,arguments)},dragleave:function(a){return a.preventDefault(),e.onDragLeave.apply(null,arguments)}}},[n("input",{ref:"input",attrs:{type:"file",multiple:e.multiple,hidden:""},on:{change:e.onFileChange}}),e._t("button",function(){return[n("btn",{attrs:{type:"button",variant:e.invalid||e.invalidFeedback?"danger":"primary"},on:{click:e.onClickUpload}},[e._v(" "+e._s(e.label)+" ")])]},null,{onClickUpload:e.onClickUpload})],2),e._t("files",function(){return[e.files.length?n("div",{staticClass:"upload-field-files"},[e._t("file",function(){return e._l(e.files,function(a){return n("file-preview",{key:a.name,attrs:{file:a},on:{close:e.onClickClose}})})},null,{file:e.file,onClickClose:e.onClickClose})],2):e._e()]},null,{files:e.files,onClickClose:e.onClickClose}),e._t("feedback",function(){return[e.invalidFeedback?n("div",{staticClass:"invalid-feedback",attrs:{invalid:""},domProps:{innerHTML:e._s(e.invalidFeedback)}}):e.validFeedback?n("div",{staticClass:"valid-feedback",attrs:{valid:""},domProps:{innerHTML:e._s(e.validFeedback)}}):e._e()]}),e._t("help",function(){return[e.helpText?n("small",{ref:"help"},[e._v(" "+e._s(e.helpText)+" ")]):e._e()]})],2)},ai=[],vi="";const ri={name:"UploadField",components:{Btn:Cn,Dropzone:zn,FilePreview:Xr},mixins:[ti],model:{prop:"files"},props:{dropzone:{type:Boolean,default:!0},label:{type:String,default:"Upload Files"},multiple:Boolean,value:[String,Array,Object]},data(){return{isDragging:!1,files:this.value?this.multiple?Array.from(this.value):[this.value]:[]}},computed:{showDropElement(){return this.isDragging}},watch:{files(e){this.$emit("input",this.multiple?e:e&&e.length?e[0]:null)}},methods:{hasExceededLimit(){return!!this.maxUploads&&this.maxUploads>this.files.length},indexOf(e){return e.name,e.lastModified,e.lastModifiedDate,e.size,e.type,this.files.indexOf(e)},removeFile(e){this.files.splice(this.indexOf(e),1)},addFile(e){this.multiple?!this.hasExceededLimit()&&this.indexOf(e)===-1&&this.files.push(e):this.files=[e]},addFiles(e){Array.from(e).forEach(t=>{this.addFile(t)})},onClickClose(e){this.files.splice(e,1)},onFileChange(e){this.addFiles(e.target.files)},onClickUpload(e){this.$emit("click",e),this.$refs.input.click()},onDragOver(e){this.isDragging=!0,this.$emit("dragover",e)},onDragEnter(e){this.isDragging=!0,this.$emit("dragenter",e)},onDragLeave(e){this.isDragging=!1,this.$emit("dragleave",e)},onDrop(e){this.isDragging=!1,this.$emit("drop",e),this.addFiles(e.dataTransfer.files)}}},ln={};var ii=K(ri,ni,ai,!1,oi,null,null,null);function oi(e){for(let t in ln)this[t]=ln[t]}var si=function(){return ii.exports}();A.UploadField=si,Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
