var Xr=Object.defineProperty;var tn=Object.getOwnPropertySymbols;var Kr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable;var nn=(A,w,z)=>w in A?Xr(A,w,{enumerable:!0,configurable:!0,writable:!0,value:z}):A[w]=z,an=(A,w)=>{for(var z in w||(w={}))Kr.call(w,z)&&nn(A,z,w[z]);if(tn)for(var z of tn(w))qr.call(w,z)&&nn(A,z,w[z]);return A};(function(A,w){typeof exports=="object"&&typeof module!="undefined"?w(exports):typeof define=="function"&&define.amd?define(["exports"],w):(A=typeof globalThis!="undefined"?globalThis:A||self,w(A.UploadField={}))})(this,function(A){"use strict";/*! *****************************************************************************
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
  ***************************************************************************** */var w=function(){return w=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},w.apply(this,arguments)};function z(e){return e.toLowerCase()}var rn=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],on=/[^A-Z0-9]+/gi;function sn(e,t){t===void 0&&(t={});for(var n=t.splitRegexp,a=n===void 0?rn:n,r=t.stripRegexp,o=r===void 0?on:r,i=t.transform,s=i===void 0?z:i,l=t.delimiter,m=l===void 0?" ":l,f=We(We(e,a,"$1\0$2"),o,"\0"),c=0,v=f.length;f.charAt(c)==="\0";)c++;for(;f.charAt(v-1)==="\0";)v--;return f.slice(c,v).split("\0").map(s).join(m)}function We(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(a,r){return a.replace(r,n)},e)}function ln(e,t){return t===void 0&&(t={}),sn(e,w({delimiter:"."},t))}function fn(e,t){return t===void 0&&(t={}),ln(e,w({delimiter:"-"},t))}var cn={props:{size:String,sizePrefix:{type:String,default(){return this.$options.name}}},computed:{sizeableClassPrefix(){return this.sizePrefix&&fn(this.sizePrefix)},sizeableClass(){return!this.size||!this.sizeableClassPrefix?"":`${this.sizeableClassPrefix}-${this.size}`}}},Ge={props:{variant:String,variantPrefix:{type:String,default(){return this.$options.name&&this.$options.name.toLowerCase()}}},computed:{variantClassPrefix(){return this.variantPrefix},variantClass(){return!this.variant||!this.variantClassPrefix?"":`${this.variantClassPrefix}-${this.variant}`}}},un=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.to?n("router-link",{class:e.classes,attrs:{to:e.to,disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):e.href?n("a",{class:e.classes,attrs:{href:e.href,disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):e.label?n("label",{class:e.classes,attrs:{disabled:e.disabled,role:"button"},on:{click:e.onClick}},[e._t("default")],2):n("button",{class:e.classes,attrs:{type:e.type,disabled:e.disabled},on:{click:e.onClick}},[e._t("default")],2)},mn=[];function X(e,t,n,a,r,o,i,s){var l=typeof e=="function"?e.options:e;t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o);var m;if(i?(m=function(v){v=v||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!v&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(v=__VUE_SSR_CONTEXT__),r&&r.call(this,v),v&&v._registeredComponents&&v._registeredComponents.add(i)},l._ssrRegister=m):r&&(m=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),m)if(l.functional){l._injectStyles=m;var f=l.render;l.render=function(h,y){return m.call(y),f(h,y)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,m):[m]}return{exports:e,options:l}}const dn={name:"Btn",mixins:[cn,Ge],props:{active:Boolean,block:Boolean,disabled:Boolean,href:String,label:Boolean,outline:Boolean,to:[Object,String],type:String},computed:{variantClassPrefix(){return this.variantPrefix+(this.outline?"-outline":"")},classes(){return["btn",this.variantClass,this.sizeableClass,this.block?"btn-block":"",this.active?"active":""]}},methods:{onClick(e){this.disabled?e.preventDefault():this.$emit("click",e)}}},Xe={};var vn=X(dn,un,mn,!1,pn,null,null,null);function pn(e){for(let t in Xe)this[t]=Xe[t]}var gn=function(){return vn.exports}(),hn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropzone",class:{"is-dragging":e.isDragging},on:{drop:e.onDrop,dragover:e.onDragover,dragenter:e.onDragenter,dragleave:e.onDragleave}},[e._t("placeholder",function(){return[n("div",{staticClass:"dropzone-placeholder text-center"},[e._t("content",function(){return[n("div",{staticClass:"dropzone-placeholder-content"},[e._t("icon",function(){return[e.icon?n("svg",{staticClass:"dropzone-placeholder-icon",attrs:{fill:"none",height:"56",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"56",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}}),n("rect",{attrs:{height:"12",rx:"2",width:"12",x:"8",y:"8"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"8",x2:"8",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"12",x2:"12",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"16",x2:"16",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"8",y2:"8.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"12",y2:"12.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"16",y2:"16.01"}})]):e._e()]},{isDragging:e.isDragging}),e._t("text",function(){return[e._m(0)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging}),n("div",[e._t("default")],2)],2)},bn=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"dropzone-title"},[e._v(" Drag & Drop ")]),n("p",{staticClass:"dropzone-text"},[e._v(" Drag and drop your files here to upload them! ")])])}],Zr="";const yn={name:"Dropzone",props:{icon:{type:Boolean,default:!0}},data(){return{isDragging:!1}},methods:{onDrop(e){this.isDragging=!1,this.$emit("drop",e)},onDragover(e){this.isDragging=!0,this.$emit("dragover",e)},onDragenter(e){this.isDragging=!0,this.$emit("dragenter",e),this.onDragover(e)},onDragleave(e){this.isDragging=!1,this.$emit("dragleave",e)}}},Ke={};var xn=X(yn,hn,bn,!1,wn,null,null,null);function wn(e){for(let t in Ke)this[t]=Ke[t]}var kn=function(){return xn.exports}();const Cn={"file-archive":{extensions:["7z","bz","bz2","gz","zip"]},"file-audio":{extensions:["aac","mid","midi","mp3","oga","opus","wav","weba"],validate:e=>!!e&&e.match(/^audio/)},"file-code":{extensions:["htm","html","jar","js","json","php","py","rb","vue","xml"]},"file-excel":{extensions:["xls","xlsx"]},"file-image":{extensions:["bmp","gif","jpeg","jpg","png","svg","tif","tiff","webp"],validate:e=>e&&e.match(/^image/)},"file-pdf":{extensions:["pdf"]},"file-powerpoint":{extensions:["ppt","pptx"]},"file-video":{extensions:["3gp","avi","mpeg","ogv","ts","webm"],validate:e=>!!e&&e.match(/^video/)},"file-word":["doc","docx"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qe(Object(n),!0).forEach(function(a){Sn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ne(e){return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ne(e)}function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ze(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function An(e,t,n){return t&&Ze(e.prototype,t),n&&Ze(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e,t){return zn(e)||Pn(e,t)||Qe(e,t)||Ln()}function ae(e){return On(e)||En(e)||Qe(e)||Mn()}function On(e){if(Array.isArray(e))return he(e)}function zn(e){if(Array.isArray(e))return e}function En(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pn(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Qe(e,t){if(!!e){if(typeof e=="string")return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(e,t)}}function he(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Je=function(){},be={},et={},tt=null,nt={mark:Je,measure:Je};try{typeof window!="undefined"&&(be=window),typeof document!="undefined"&&(et=document),typeof MutationObserver!="undefined"&&(tt=MutationObserver),typeof performance!="undefined"&&(nt=performance)}catch{}var Nn=be.navigator||{},at=Nn.userAgent,rt=at===void 0?"":at,F=be,x=et,it=tt,re=nt;F.document;var L=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ot=~rt.indexOf("MSIE")||~rt.indexOf("Trident/"),N="___FONT_AWESOME___",ye=16,st="fa",lt="svg-inline--fa",$="data-fa-i2svg",xe="data-fa-pseudo-element",In="data-fa-pseudo-element-pending",we="data-prefix",ke="data-icon",ft="fontawesome-i2svg",Tn="async",Dn=["HTML","HEAD","STYLE","SCRIPT"],ct=function(){try{return!0}catch{return!1}}(),Ce={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ie={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ut={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Fn={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Rn=/fa[srltdbk\-\ ]/,mt="fa-layers-text",Hn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,$n={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},dt=[1,2,3,4,5,6,7,8,9,10],jn=dt.concat([11,12,13,14,15,16,17,18,19,20]),Vn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bn=[].concat(ae(Object.keys(ie)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(dt.map(function(e){return"".concat(e,"x")})).concat(jn.map(function(e){return"w-".concat(e)})),vt=F.FontAwesomeConfig||{};function Yn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Un(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Wn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wn.forEach(function(e){var t=ge(e,2),n=t[0],a=t[1],r=Un(Yn(n));r!=null&&(vt[a]=r)})}var Gn={familyPrefix:st,styleDefault:"solid",replacementClass:lt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K=u(u({},Gn),vt);K.autoReplaceSvg||(K.observeMutations=!1);var p={};Object.keys(K).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){K[e]=n,oe.forEach(function(a){return a(p)})},get:function(){return K[e]}})}),F.FontAwesomeConfig=p;var oe=[];function Xn(e){return oe.push(e),function(){oe.splice(oe.indexOf(e),1)}}var R=ye,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kn(e){if(!(!e||!L)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return x.head.insertBefore(t,a),e}}var qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){for(var e=12,t="";e-- >0;)t+=qn[Math.random()*62|0];return t}function B(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _e(e){return e.classList?B(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(pt(e[n]),'" ')},"").trim()}function se(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ae(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function Qn(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:m}}function Jn(e){var t=e.transform,n=e.width,a=n===void 0?ye:n,r=e.height,o=r===void 0?ye:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&ot?l+="translate(".concat(t.x/R-a/2,"em, ").concat(t.y/R-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):l+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),l+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ea=`:root, :host {
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
}`;function gt(){var e=st,t=lt,n=p.familyPrefix,a=p.replacementClass,r=ea;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ht=!1;function Se(){p.autoAddCss&&!ht&&(Kn(gt()),ht=!0)}var ta={mixout:function(){return{dom:{css:gt,insertCss:Se}}},hooks:function(){return{beforeDOMElementCreation:function(){Se()},beforeI2svg:function(){Se()}}}},I=F||{};I[N]||(I[N]={}),I[N].styles||(I[N].styles={}),I[N].hooks||(I[N].hooks={}),I[N].shims||(I[N].shims=[]);var E=I[N],bt=[],na=function e(){x.removeEventListener("DOMContentLoaded",e),le=1,bt.map(function(t){return t()})},le=!1;L&&(le=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),le||x.addEventListener("DOMContentLoaded",na));function aa(e){!L||(le?setTimeout(e,0):bt.push(e))}function Z(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?pt(e):"<".concat(t," ").concat(Zn(a),">").concat(o.map(Z).join(""),"</").concat(t,">")}function yt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ra=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Oe=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?ra(n,r):n,l,m,f;for(a===void 0?(l=1,f=t[o[0]]):(l=0,f=a);l<i;l++)m=o[l],f=s(f,t[m],m,t);return f};function ia(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ze(e){var t=ia(e);return t.length===1?t[0].toString(16):null}function oa(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ee(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=xt(t);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(e,xt(t)):E.styles[e]=u(u({},E.styles[e]||{}),o),e==="fas"&&Ee("fa",t)}var Q=E.styles,sa=E.shims,la=Object.values(ut),Pe=null,wt={},kt={},Ct={},_t={},At={},fa=Object.keys(Ce);function ca(e){return~Bn.indexOf(e)}function ua(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ca(r)?r:null}var St=function(){var t=function(o){return Oe(Q,function(i,s,l){return i[l]=Oe(s,o,{}),i},{})};wt=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),kt=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),At=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in Q||p.autoFetchSvg,a=Oe(sa,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Ct=a.names,_t=a.unicodes,Pe=fe(p.styleDefault)};Xn(function(e){Pe=fe(e.styleDefault)}),St();function Me(e,t){return(wt[e]||{})[t]}function ma(e,t){return(kt[e]||{})[t]}function Y(e,t){return(At[e]||{})[t]}function Ot(e){return Ct[e]||{prefix:null,iconName:null}}function da(e){var t=_t[e],n=Me("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Pe}var Le=function(){return{prefix:null,iconName:null,rest:[]}};function fe(e){var t=Ce[e],n=ie[e]||ie[t],a=e in E.styles?e:null;return n||a||null}function ce(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,a=n===void 0?!1:n,r=null,o=e.reduce(function(i,s){var l=ua(p.familyPrefix,s);if(Q[s]?(s=la.includes(s)?Fn[s]:s,r=s,i.prefix=s):fa.indexOf(s)>-1?(r=s,i.prefix=fe(s)):l?i.iconName=l:s!==p.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var m=r==="fa"?Ot(i.iconName):{},f=Y(i.prefix,i.iconName);m.prefix&&(r=null),i.iconName=m.iconName||f||i.iconName,i.prefix=m.prefix||i.prefix,i.prefix==="far"&&!Q.far&&Q.fas&&!p.autoFetchSvg&&(i.prefix="fas")}return i},Le());return(o.prefix==="fa"||r==="fa")&&(o.prefix=H()||"fas"),o}var va=function(){function e(){_n(this,e),this.definitions={}}return An(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),i[s]),Ee(s,i[s]);var l=ut[s];l&&Ee(l,i[s]),St()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,m=i.icon,f=m[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[s][c]=m)}),n[s][l]=m}),n}}]),e}(),zt=[],U={},W={},pa=Object.keys(W);function ga(e,t){var n=t.mixoutsTo;return zt=e,U={},Object.keys(W).forEach(function(a){pa.indexOf(a)===-1&&delete W[a]}),zt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),ne(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){U[i]||(U[i]=[]),U[i].push(o[i])})}a.provides&&a.provides(W)}),n}function Ne(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=U[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=U[e]||[];r.forEach(function(o){o.apply(null,n)})}function T(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function Ie(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||H();if(!!t)return t=Y(n,t)||t,yt(Et.definitions,n,t)||yt(E.styles,n,t)}var Et=new va,ha=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,V("noAuto")},ba={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(V("beforeI2svg",t),T("pseudoElements2svg",t),T("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,aa(function(){xa({autoReplaceSvgRoot:n}),V("watch",t)})}},ya={icon:function(t){if(t===null)return null;if(ne(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=fe(t[0]);return{prefix:a,iconName:Y(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.familyPrefix,"-"))>-1||t.match(Rn))){var r=ce(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=H();return{prefix:o,iconName:Y(o,t)||t}}}},O={noAuto:ha,config:p,dom:ba,parse:ya,library:Et,findIconDefinition:Ie,toHtml:Z},xa=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(E.styles).length>0||p.autoFetchSvg)&&L&&p.autoReplaceSvg&&O.dom.i2svg({node:a})};function ue(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Z(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!L){var a=x.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function wa(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Ae(i)&&n.found&&!a.found){var s=n.width,l=n.height,m={x:s/l/2,y:.5};r.style=se(u(u({},o),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ka(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(p.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function Te(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,m=e.maskId,f=e.titleId,c=e.extra,v=e.watchable,h=v===void 0?!1:v,y=a.found?a:n,k=y.width,S=y.height,d=r==="fak",g=[p.replacementClass,o?"".concat(p.familyPrefix,"-").concat(o):""].filter(function(G){return c.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(c.classes).join(" "),b={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":r,"data-icon":o,class:g,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(S)})},_=d&&!~c.classes.indexOf("fa-fw")?{width:"".concat(k/S*16*.0625,"em")}:{};h&&(b.attributes[$]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||q())},children:[l]}),delete b.attributes.title);var C=u(u({},b),{},{prefix:r,iconName:o,main:n,mask:a,maskId:m,transform:i,symbol:s,styles:u(u({},_),c.styles)}),P=a.found&&n.found?T("generateAbstractMask",C)||{children:[],attributes:{}}:T("generateAbstractIcon",C)||{children:[],attributes:{}},D=P.children,te=P.attributes;return C.children=D,C.attributes=te,s?ka(C):wa(C)}function Pt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,m=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(m[$]="");var f=u({},i.styles);Ae(r)&&(f.transform=Jn({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var c=se(f);c.length>0&&(m.style=c);var v=[];return v.push({tag:"span",attributes:m,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Ca(e){var t=e.content,n=e.title,a=e.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=se(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var De=E.styles;function Fe(e){var t=e[0],n=e[1],a=e.slice(4),r=ge(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(p.familyPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var _a={found:!1,width:512,height:512};function Aa(e,t){!ct&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Re(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=H()),new Promise(function(a,r){if(T("missingIconAbstract"),n==="fa"){var o=Ot(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&De[t]&&De[t][e]){var i=De[t][e];return a(Fe(i))}Aa(e,t),a(u(u({},_a),{},{icon:p.showMissingIcons&&e?T("missingIconAbstract")||{}:{}}))})}var Mt=function(){},He=p.measurePerformance&&re&&re.mark&&re.measure?re:{mark:Mt,measure:Mt},J='FA "6.1.1"',Sa=function(t){return He.mark("".concat(J," ").concat(t," begins")),function(){return Lt(t)}},Lt=function(t){He.mark("".concat(J," ").concat(t," ends")),He.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},$e={begin:Sa,end:Lt},me=function(){};function Nt(e){var t=e.getAttribute?e.getAttribute($):null;return typeof t=="string"}function Oa(e){var t=e.getAttribute?e.getAttribute(we):null,n=e.getAttribute?e.getAttribute(ke):null;return t&&n}function za(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Ea(){if(p.autoReplaceSvg===!0)return de.replace;var e=de[p.autoReplaceSvg];return e||de.replace}function Pa(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Ma(e){return x.createElement(e)}function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Pa:Ma:n;if(typeof e=="string")return x.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(It(i,{ceFn:a}))}),r}function La(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var de={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(It(r),n)}),n.getAttribute($)===null&&p.keepOriginalSource){var a=x.createComment(La(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~_e(n).indexOf(p.replacementClass))return de.replace(t);var r=new RegExp("".concat(p.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return Z(s)}).join(`
`);n.setAttribute($,""),n.innerHTML=i}};function Tt(e){e()}function Dt(e,t){var n=typeof t=="function"?t:me;if(e.length===0)n();else{var a=Tt;p.mutateApproach===Tn&&(a=F.requestAnimationFrame||Tt),a(function(){var r=Ea(),o=$e.begin("mutate");e.map(r),o(),n()})}}var je=!1;function Ft(){je=!0}function Ve(){je=!1}var ve=null;function Rt(e){if(!!it&&!!p.observeMutations){var t=e.treeCallback,n=t===void 0?me:t,a=e.nodeCallback,r=a===void 0?me:a,o=e.pseudoElementsCallback,i=o===void 0?me:o,s=e.observeMutationsRoot,l=s===void 0?x:s;ve=new it(function(m){if(!je){var f=H();B(m).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Nt(c.addedNodes[0])&&(p.searchPseudoElements&&i(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&p.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&Nt(c.target)&&~Vn.indexOf(c.attributeName))if(c.attributeName==="class"&&Oa(c.target)){var v=ce(_e(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(we,h||f),y&&c.target.setAttribute(ke,y)}else za(c.target)&&r(c.target)})}}),L&&ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Na(){!ve||ve.disconnect()}function Ia(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Ta(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=ce(_e(e));return r.prefix||(r.prefix=H()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=ma(r.prefix,e.innerText)||Me(r.prefix,ze(e.innerText))),r}function Da(e){var t=B(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||q()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ta(e),a=n.iconName,r=n.prefix,o=n.rest,i=Da(e),s=Ne("parseNodeAttributes",{},e),l=t.styleParser?Ia(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Ra=E.styles;function $t(e){var t=p.autoReplaceSvg==="nest"?Ht(e,{styleParser:!1}):Ht(e);return~t.extra.classes.indexOf(mt)?T("generateLayersText",e,t):T("generateSvgReplacementMutation",e,t)}function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var n=x.documentElement.classList,a=function(c){return n.add("".concat(ft,"-").concat(c))},r=function(c){return n.remove("".concat(ft,"-").concat(c))},o=p.autoFetchSvg?Object.keys(Ce):Object.keys(Ra),i=[".".concat(mt,":not([").concat($,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat($,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=B(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=$e.begin("onTree"),m=s.reduce(function(f,c){try{var v=$t(c);v&&f.push(v)}catch(h){ct||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,c){Promise.all(m).then(function(v){Dt(v,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(v){l(),c(v)})})}function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$t(e).then(function(n){n&&Dt([n],t)})}function $a(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Ie(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ie(r||{})),e(a,u(u({},n),{},{mask:r}))}}var ja=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,m=n.maskId,f=m===void 0?null:m,c=n.title,v=c===void 0?null:c,h=n.titleId,y=h===void 0?null:h,k=n.classes,S=k===void 0?[]:k,d=n.attributes,g=d===void 0?{}:d,b=n.styles,_=b===void 0?{}:b;if(!!t){var C=t.prefix,P=t.iconName,D=t.icon;return ue(u({type:"icon"},t),function(){return V("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(v?g["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(y||q()):(g["aria-hidden"]="true",g.focusable="false")),Te({icons:{main:Fe(D),mask:l?Fe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:P,transform:u(u({},M),r),symbol:i,title:v,maskId:f,titleId:y,extra:{attributes:g,styles:_,classes:S}})})}},Va={mixout:function(){return{icon:$a(ja)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=jt,n.nodeCallback=Ha,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?x:a,o=n.callback,i=o===void 0?function(){}:o;return jt(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,m=a.symbol,f=a.mask,c=a.maskId,v=a.extra;return new Promise(function(h,y){Promise.all([Re(r,s),f.iconName?Re(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var S=ge(k,2),d=S[0],g=S[1];h([n,Te({icons:{main:d,mask:g},prefix:s,iconName:r,transform:l,symbol:m,maskId:c,title:o,titleId:i,extra:v,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=se(s);l.length>0&&(r.style=l);var m;return Ae(i)&&(m=T("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(m||o.icon),{children:a,attributes:r}}}},Ba={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return ue({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.familyPrefix,"-layers")].concat(ae(o)).join(" ")},children:i}]})}}}},Ya={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,m=l===void 0?{}:l,f=a.styles,c=f===void 0?{}:f;return ue({type:"counter",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Ca({content:n.toString(),title:o,extra:{attributes:m,styles:c,classes:["".concat(p.familyPrefix,"-layers-counter")].concat(ae(s))}})})}}}},Ua={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?M:r,i=a.title,s=i===void 0?null:i,l=a.classes,m=l===void 0?[]:l,f=a.attributes,c=f===void 0?{}:f,v=a.styles,h=v===void 0?{}:v;return ue({type:"text",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Pt({content:n,transform:u(u({},M),o),title:s,extra:{attributes:c,styles:h,classes:["".concat(p.familyPrefix,"-layers-text")].concat(ae(m))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(ot){var m=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/m,l=f.height/m}return p.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Pt({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Wa=new RegExp('"',"ug"),Vt=[1105920,1112319];function Ga(e){var t=e.replace(Wa,""),n=oa(t,0),a=n>=Vt[0]&&n<=Vt[1],r=t.length===2?t[0]===t[1]:!1;return{value:ze(r?t[0]:t),isSecondary:a||r}}function Bt(e,t){var n="".concat(In).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=B(e.children),i=o.filter(function(P){return P.getAttribute(xe)===t})[0],s=F.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Hn),m=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&f!=="none"&&f!==""){var c=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ie[l[2].toLowerCase()]:$n[m],h=Ga(c),y=h.value,k=h.isSecondary,S=l[0].startsWith("FontAwesome"),d=Me(v,y),g=d;if(S){var b=da(y);b.iconName&&b.prefix&&(d=b.iconName,v=b.prefix)}if(d&&!k&&(!i||i.getAttribute(we)!==v||i.getAttribute(ke)!==g)){e.setAttribute(n,g),i&&e.removeChild(i);var _=Fa(),C=_.extra;C.attributes[xe]=t,Re(d,v).then(function(P){var D=Te(u(u({},_),{},{icons:{main:P,mask:Le()},prefix:v,iconName:g,extra:C,watchable:!0})),te=x.createElement("svg");t==="::before"?e.insertBefore(te,e.firstChild):e.appendChild(te),te.outerHTML=D.map(function(G){return Z(G)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Xa(e){return Promise.all([Bt(e,"::before"),Bt(e,"::after")])}function Ka(e){return e.parentNode!==document.head&&!~Dn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yt(e){if(!!L)return new Promise(function(t,n){var a=B(e.querySelectorAll("*")).filter(Ka).map(Xa),r=$e.begin("searchPseudoElements");Ft(),Promise.all(a).then(function(){r(),Ve(),t()}).catch(function(){r(),Ve(),n()})})}var qa={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;p.searchPseudoElements&&Yt(r)}}},Ut=!1,Za={mixout:function(){return{dom:{unwatch:function(){Ft(),Ut=!0}}}},hooks:function(){return{bootstrap:function(){Rt(Ne("mutationObserverCallbacks",{}))},noAuto:function(){Na()},watch:function(n){var a=n.observeMutationsRoot;Ut?Ve():Rt(Ne("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Qa={mixout:function(){return{parse:{transform:function(n){return Wt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Wt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(m," ").concat(f)},v={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),h.path)}]}]}}}},Be={x:0,y:0,width:"100%",height:"100%"};function Gt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ja(e){return e.tag==="g"?e.children:[e]}var er={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?ce(r.split(" ").map(function(i){return i.trim()})):Le();return o.prefix||(o.prefix=H()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,m=o.width,f=o.icon,c=i.width,v=i.icon,h=Qn({transform:l,containerWidth:c,iconWidth:m}),y={tag:"rect",attributes:u(u({},Be),{},{fill:"white"})},k=f.children?{children:f.children.map(Gt)}:{},S={tag:"g",attributes:u({},h.inner),children:[Gt(u({tag:f.tag,attributes:u(u({},f.attributes),h.path)},k))]},d={tag:"g",attributes:u({},h.outer),children:[S]},g="mask-".concat(s||q()),b="clip-".concat(s||q()),_={tag:"mask",attributes:u(u({},Be),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,d]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Ja(v)},_]};return a.push(C,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Be)}),{children:a,attributes:r}}}},tr={provides:function(t){var n=!1;F.matchMedia&&(n=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},nr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},ar=[ta,Va,Ba,Ya,Ua,qa,Za,Qa,er,tr,nr];ga(ar,{mixoutsTo:O}),O.noAuto,O.config;var rr=O.library;O.dom;var Ye=O.parse;O.findIconDefinition,O.toHtml;var ir=O.icon;O.layer,O.text,O.counter;var or=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function sr(e,t){return t={exports:{}},e(t,t.exports),t.exports}var lr=sr(function(e){(function(t){var n=function(d,g,b){if(!m(g)||c(g)||v(g)||h(g)||l(g))return g;var _,C=0,P=0;if(f(g))for(_=[],P=g.length;C<P;C++)_.push(n(d,g[C],b));else{_={};for(var D in g)Object.prototype.hasOwnProperty.call(g,D)&&(_[d(D,b)]=n(d,g[D],b))}return _},a=function(d,g){g=g||{};var b=g.separator||"_",_=g.split||/(?=[A-Z])/;return d.split(_).join(b)},r=function(d){return y(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(g,b){return b?b.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},o=function(d){var g=r(d);return g.substr(0,1).toUpperCase()+g.substr(1)},i=function(d,g){return a(d,g).toLowerCase()},s=Object.prototype.toString,l=function(d){return typeof d=="function"},m=function(d){return d===Object(d)},f=function(d){return s.call(d)=="[object Array]"},c=function(d){return s.call(d)=="[object Date]"},v=function(d){return s.call(d)=="[object RegExp]"},h=function(d){return s.call(d)=="[object Boolean]"},y=function(d){return d=d-0,d===d},k=function(d,g){var b=g&&"process"in g?g.process:g;return typeof b!="function"?d:function(_,C){return b(_,d,C)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(d,g){return n(k(r,g),d)},decamelizeKeys:function(d,g){return n(k(i,g),d,g)},pascalizeKeys:function(d,g){return n(k(o,g),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(or)}),Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fr=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||!Object.prototype.hasOwnProperty.call(e,a)||(n[a]=e[a]);return n};function cr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=lr.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return t[r]=o,t},{})}function ur(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function mr(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(a,r){return Array.isArray(r)?a=a.concat(r):a.push(r),a},[])}function Kt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},r=(t.children||[]).map(Kt.bind(null,e)),o=Object.keys(t.attributes||{}).reduce(function(h,y){var k=t.attributes[y];switch(y){case"class":h.class=ur(k);break;case"style":h.style=cr(k);break;default:h.attrs[y]=k}return h},{class:{},style:{},attrs:{}}),i=a.class,s=i===void 0?{}:i,l=a.style,m=l===void 0?{}:l,f=a.attrs,c=f===void 0?{}:f,v=fr(a,["class","style","attrs"]);return typeof t=="string"?t:e(t.tag,pe({class:mr(o.class,s),style:pe({},o.style,m),attrs:pe({},o.attrs,c)},v,{props:n}),r)}var qt=!1;try{qt=!0}catch{}function dr(){if(!qt&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ue(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ee({},e,t):{}}function vr(e){var t,n=(t={"fa-spin":e.spin,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse,"fa-pulse":e.pulse,"fa-beat":e.beat,"fa-fade":e.fade,"fa-flash":e.flash,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ee(t,"fa-"+e.size,e.size!==null),ee(t,"fa-rotate-"+e.rotation,e.rotation!==null),ee(t,"fa-pull-"+e.pull,e.pull!==null),ee(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Zt(e){if(e&&(typeof e=="undefined"?"undefined":Xt(e))==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ye.icon)return Ye.icon(e);if(e===null)return null;if((typeof e=="undefined"?"undefined":Xt(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pr={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,n){var a=n.props,r=a.icon,o=a.mask,i=a.symbol,s=a.title,l=Zt(r),m=Ue("classes",vr(a)),f=Ue("transform",typeof a.transform=="string"?Ye.transform(a.transform):a.transform),c=Ue("mask",Zt(o)),v=ir(l,pe({},m,f,c,{symbol:i,title:s}));if(!v)return dr("Could not find one or more icon(s)",l,c);var h=v.abstract,y=Kt.bind(null,t);return y(h[0],{},n.data)}},gr=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{height:e.height}},[n("div",{staticClass:"progress-bar",class:e.classes,style:e.styles,attrs:{role:"progressbar","aria-valuenow":e.offsetValue,"aria-valuemin":e.min,"aria-valuemax":e.max}},[e.label?n("span",[e.label!==!0?[e._v(" "+e._s(e.label)+" ")]:e._e(),e._v(" "+e._s(e.offsetValue)+"% ")],2):n("span",[e._t("default")],2)])])},hr=[],Qr="";const br={name:"ProgressBar",mixins:[Ge],props:{color:String,value:{type:Number,required:!0},height:String,label:[String,Boolean],striped:Boolean,animated:Boolean,min:{type:Number,default:0},max:{type:Number,default:100},variant:{type:String,default:"primary"}},computed:{classes(){return an({[this.variantClass]:!!this.variant},this.progressClasses)},variantClassPrefix(){return"bg"},offsetValue(){return this.value/this.max*100},progressClasses(){return{"progress-bar-striped":this.striped,"progress-bar-animated":this.animated}},styles(){return{width:`${this.offsetValue}%`,background:`${this.color} !important`}}}},Qt={};var yr=X(br,gr,hr,!1,xr,null,null,null);function xr(e){for(let t in Qt)this[t]=Qt[t]}var wr=function(){return yr.exports}();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var kr={prefix:"far",iconName:"file-audio",icon:[384,512,[],"f1c7","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM171.5 259.5L136 296H92C85.38 296 80 301.4 80 308v56C80 370.7 85.38 376 92 376H136l35.5 36.5C179.1 420 192 414.8 192 404v-136C192 257.3 179.1 251.9 171.5 259.5zM235.1 260.7c-6.25 6.25-6.25 16.38 0 22.62C235.3 283.5 256 305.1 256 336c0 30.94-20.77 52.53-20.91 52.69c-6.25 6.25-6.25 16.38 0 22.62C238.2 414.4 242.3 416 246.4 416s8.188-1.562 11.31-4.688C258.1 410.1 288 380.5 288 336s-29.05-74.06-30.28-75.31C251.5 254.4 241.3 254.4 235.1 260.7z"]},Cr={prefix:"far",iconName:"file-code",icon:[384,512,[],"f1c9","M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84C169.1 278.3 169.1 265.7 162.1 257.8zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z"]},_r={prefix:"far",iconName:"file-excel",icon:[384,512,[],"f1c3","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM229.1 233.3L192 280.9L154.9 233.3C146.8 222.8 131.8 220.9 121.3 229.1C110.8 237.2 108.9 252.3 117.1 262.8L161.6 320l-44.53 57.25c-8.156 10.47-6.25 25.56 4.188 33.69C125.7 414.3 130.8 416 135.1 416c7.156 0 14.25-3.188 18.97-9.25L192 359.1l37.06 47.65C233.8 412.8 240.9 416 248 416c5.125 0 10.31-1.656 14.72-5.062c10.44-8.125 12.34-23.22 4.188-33.69L222.4 320l44.53-57.25c8.156-10.47 6.25-25.56-4.188-33.69C252.2 220.9 237.2 222.8 229.1 233.3z"]},Ar={prefix:"far",iconName:"file-image",icon:[384,512,[128443],"f1c5","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM215.3 292c-4.68 0-9.051 2.34-11.65 6.234L164 357.8l-11.68-17.53C149.7 336.3 145.3 334 140.7 334c-4.682 0-9.053 2.34-11.65 6.234l-46.67 70c-2.865 4.297-3.131 9.82-.6953 14.37C84.09 429.2 88.84 432 93.1 432h196c5.163 0 9.907-2.844 12.34-7.395c2.436-4.551 2.17-10.07-.6953-14.37l-74.67-112C224.4 294.3 220 292 215.3 292zM128 288c17.67 0 32-14.33 32-32S145.7 224 128 224S96 238.3 96 256S110.3 288 128 288z"]},Sr={prefix:"far",iconName:"file-lines",icon:[384,512,[128462,61686,128441,"file-alt","file-text"],"f15c","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z"]},Or=Sr,zr={prefix:"far",iconName:"file-pdf",icon:[384,512,[],"f1c1","M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"]},Er={prefix:"far",iconName:"file-powerpoint",icon:[384,512,[],"f1c4","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM200 224H128C119.2 224 112 231.2 112 240v168c0 13.25 10.75 24 24 24S160 421.3 160 408v-32h44c44.21 0 79.73-37.95 75.69-82.98C276.1 253.2 240 224 200 224zM204 328H160V272h44c15.44 0 28 12.56 28 28S219.4 328 204 328z"]},Pr={prefix:"far",iconName:"file-video",icon:[384,512,[],"f1c8","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z"]},Mr={prefix:"far",iconName:"file-word",icon:[384,512,[],"f1c2","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"]},Lr={prefix:"far",iconName:"file-zipper",icon:[384,512,["file-archive"],"f1c6","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h48V64h64V48.13h48.01L224 128c0 17.67 14.33 32 32 32h79.1V448zM176 96h-64v32h64V96zM176 160h-64v32h64V160zM176 224h-64l-30.56 116.5C73.51 379.5 103.7 416 144.3 416c40.26 0 70.45-36.3 62.68-75.15L176 224zM160 368H128c-8.836 0-16-7.164-16-16s7.164-16 16-16h32c8.836 0 16 7.164 16 16S168.8 368 160 368z"]},Nr=Lr,Ir={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},Tr=Ir,Dr=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-preview",class:{"has-image":!!e.data}},[n("div",{staticClass:"file-preview-inner"},[e.closeable?n("a",{staticClass:"file-preview-close",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.$emit("close",a,e.file)}}},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1):e._e(),e._t("icon",function(){return[e.url||e.data&&e.isImage?n("div",{staticClass:"file-preview-image"},[n("img",{staticClass:"file-preview-thumbnail",attrs:{src:e.url||e.data}})]):n("div",{staticClass:"file-preview-icon"},[n("font-awesome-icon",{attrs:{icon:["far",e.computedIcon]}})],1)]},null,this),e._t("progress",function(){return[typeof e.percentLoaded=="number"?n("div",{staticClass:"file-preview-progress"},[n("progress-bar",{attrs:{variant:"primary",height:"10px",value:e.percentLoaded}})],1):e._e()]},null,this),e._t("default"),n("div",{staticClass:"file-preview-filename",domProps:{innerHTML:e._s(e.computedName)}}),n("div",{staticClass:"file-preview-filesize"},[e._v(" ("+e._s(e.computedSize)+") ")])],2)])},Fr=[],Jr="";rr.add(Or,Nr,kr,Cr,_r,Ar,zr,Er,Pr,Mr,Tr);const Rr={name:"FilePreview",components:{ProgressBar:wr,FontAwesomeIcon:pr},directives:{ready:{inserted(e,t,n){typeof t.value=="function"&&n.context.$nextTick(t.value)}}},props:{closeable:{type:Boolean,default:!0},extension:String,file:Blob,mime:String,filename:String,preview:{type:Boolean,default:!0},size:Number,url:String},data(){return{data:null,loading:!1,percentLoaded:null}},computed:{computedExtension(){return this.file instanceof Blob?this.file.name.split(".").pop().toLowerCase():this.extension},computedIcon(){const e=this.icon();return e||"file-alt"},computedMime(){return this.file instanceof Blob?this.file.type:this.mime},computedName(){return this.file instanceof Blob?this.file.name:this.filename},computedSize(){return this.bytesToSize(this.file?this.file.size:this.size||0)},computedSrc(){if(!(this.file instanceof Blob))return this.url},isImage(){return this.file&&this.file.type.match(/^image/)}},mounted(){this.file&&this.readFile(this.file)},methods:{readFile(e){return new Promise((t,n)=>{this.data=null,this.loading=!0,this.percentLoaded=0;const a=new Date,r=new FileReader;r.onprogress=o=>this.onProgress(o),r.onload=o=>{setTimeout(()=>{t(o.target.result)},666-(new Date().getTime()-a.getTime())/1e3)},r.onerror=o=>n(o),r.readAsDataURL(e)}).then(t=>(this.$emit("read",t),this.percentLoaded=null,this.data=t),t=>{this.$emit("error",t)})},bytesToSize(e){var t=["Bytes","KB","MB","GB","TB"];if(e===0)return"0 Byte";var n=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,n),2)+" "+t[n]},icon(){for(let[e,{extensions:t,validate:n}]of Object.entries(Cn))if(n&&n(this.computedMime)||t&&t.indexOf(this.computedExtension)>-1)return e},onProgress(e){const t=parseInt(e.loaded/e.total*100,10);this.$emit("progress",t),this.percentLoaded=t}}},Jt={};var Hr=X(Rr,Dr,Fr,!1,$r,null,null,null);function $r(e){for(let t in Jt)this[t]=Jt[t]}var jr=function(){return Hr.exports}(),Vr=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-field",class:{"is-dragging":e.isDragging,multiple:e.multiple}},[n("dropzone",{staticClass:"upload-field-dropzone",on:{drop:e.onDrop,dragover:e.onDragOver,dragenter:e.onDragEnter,dragleave:e.onDragLeave}},[n("input",{ref:"input",attrs:{type:"file",multiple:e.multiple,hidden:""},on:{change:e.onFileChange}}),e._t("button",function(){return[n("btn",{attrs:{type:"button",variant:"primary"},on:{click:e.onClickUpload}},[e._v(" "+e._s(e.label)+" ")])]},null,{onClickUpload:e.onClickUpload})],2),e._t("files",function(){return[e.files.length?n("div",{staticClass:"upload-field-files"},e._l(e.files,function(a){return n("file-preview",{key:a.name,attrs:{file:a},on:{close:e.onClickClose}})}),1):e._e()]},{files:e.files})],2)},Br=[],ei="";const Yr={components:{Btn:gn,Dropzone:kn,FilePreview:jr},model:{prop:"files"},props:{dropzone:{type:Boolean,default:!0},label:{type:String,default:"Upload Files"},multiple:Boolean,value:[String,Array,Object]},data(){return{isDragging:!1,files:this.value?this.multiple?Array.from(this.value):[this.value]:[]}},computed:{showDropElement(){return this.isDragging}},watch:{files(e){this.$emit("input",this.multiple?e:e&&e.length?e[0]:null)}},methods:{hasExceededLimit(){return!!this.maxUploads&&this.maxUploads>this.files.length},indexOf(e){return e.name,e.lastModified,e.lastModifiedDate,e.size,e.type,this.files.indexOf(e)},removeFile(e){this.files.splice(this.indexOf(e),1)},addFile(e){this.multiple?!this.hasExceededLimit()&&this.indexOf(e)===-1&&this.files.push(e):this.files=[e]},addFiles(e){Array.from(e).forEach(t=>{this.addFile(t)})},onClickClose(e){this.files.splice(e,1)},onFileChange(e){this.addFiles(e.target.files)},onClickUpload(e){this.$emit("click",e),e.defaultPrevented||this.$refs.input.click()},onDragOver(e){this.isDragging=!0,this.$emit("dragover",e)},onDragEnter(e){this.isDragging=!0,this.$emit("dragenter",e)},onDragLeave(e){this.isDragging=!1,this.$emit("dragleave",e)},onDrop(e){console.log(e.defaultPrevented),e.defaultPrevented||this.addFiles(e.dataTransfer.files)}}},en={};var Ur=X(Yr,Vr,Br,!1,Wr,null,null,null);function Wr(e){for(let t in en)this[t]=en[t]}var Gr=function(){return Ur.exports}();A.UploadField=Gr,Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
