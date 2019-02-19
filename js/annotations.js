var e;try{new Event("!"),e=Event}catch(t){try{new CustomEvent("!"),e=CustomEvent}catch(t){e=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}}var t,n=e;try{t=(new WeakSet).constructor}catch(e){try{(e=(t=new WeakMap&&function(){this.$=new WeakMap}).prototype).add=function(e){return this.$.set(e,0),this},e.has=function(e){return this.$.has(e)},e.delete=function(e){return this.$.delete(e)}}catch(e){var r=0;(e=(t=function(){this.$=["__",Math.random(),r++,"__"].join("ws")}).prototype).add=function(e){return this.has(e)||Object.defineProperty(e,this.$,{value:!0,configurable:!0}),this},e.has=function(e){return this.hasOwnProperty.call(e,this.$)},e.delete=function(e){return delete e[this.$]}}}var o=t,i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n]||{})t.hasOwnProperty(r)&&(e[r]=t[r]);return e},a=document.contains||function(e){for(;e&&e!==this;)e=e.parentNode;return this===e},s=[].indexOf,c="matches"in document.documentElement?function(e,t){return e.matches(t)}:function(e,t){return(e.matchesSelector||e.webkitMatchesSelector||e.khtmlMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<s.call(t.querySelectorAll(e),this)}).call(e,t)};var l=!0,d=[],u=[],h={},f={},m={Event:n,WeakSet:o,assign:i,document:document,define:function(e,t){l&&(l=!1,function(e){try{new MutationObserver(g).observe(e,{subtree:!0,childList:!0})}catch(t){e.addEventListener("DOMNodeInserted",function(e){g([{addedNodes:[e.target]}])},!1)}"complete"!==e.readyState&&e.addEventListener("DOMContentLoaded",b,{once:!0})}(m.document));var n=typeof e;if("string"===n){if(-1<d.indexOf(e))throw new Error("duplicated: "+e);d.push(e),u.push(t||{}),b(),e in h&&(h[e](u[u.length-1]),delete h[e])}else{if("object"!==n||1!==e.nodeType)throw new Error("undefinable: "+e);E(e,t||{})}},get:function(e){var t=d.indexOf(e);return t<0?null:i({},u[t])},whenDefined:function(e){return Promise.resolve(m.get(e)||new Promise(function(t){h[e]=t}))}},p=function(e){var t="connected",n="dis"+t,r=e.Event,o=e.WeakSet,i=!0,a=new o;return function(e){return i&&(i=!i,function(e){var i=null;try{new MutationObserver(d).observe(e,{subtree:!0,childList:!0})}catch(t){var s=0,c=[],l=function(e){c.push(e),clearTimeout(s),s=setTimeout(function(){d(c.splice(s=0,c.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){l({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){l({addedNodes:[e.target],removedNodes:[]})},!0)}function d(e){i=new f;for(var r,o=e.length,a=0;a<o;a++)u((r=e[a]).removedNodes,n,t),u(r.addedNodes,t,n);i=null}function u(e,t,n){for(var o,i=new r(t),a=e.length,s=0;s<a;1===(o=e[s++]).nodeType&&h(o,i,t,n));}function h(e,t,n,r){a.has(e)&&!i[n].has(e)&&(i[r].delete(e),i[n].add(e),e.dispatchEvent(t));for(var o=e.children,s=o.length,c=0;c<s;h(o[c++],t,n,r));}function f(){this[t]=new o,this[n]=new o}}(e.ownerDocument)),a.add(e),e}}(m),v={attributechanged:function(e){var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},a=t instanceof Array&&t.length;a&&(r.attributeFilter=t.slice(0));try{new MutationObserver(o).observe(e,r)}catch(t){r.handleEvent=a?i:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var o=new t("attributechanged");o.attributeName=n,o.oldValue=r,o.newValue=e.getAttribute(n),e.dispatchEvent(o)}function o(e){for(var t,n=0,o=e.length;n<o;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function i(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(m),connected:p,disconnected:p};function g(e){for(var t=0,n=e.length;t<n;t++)y(e[t].addedNodes,!1)}function b(){d.length&&y(m.document.querySelectorAll(d),!0)}function w(e){y(e.querySelectorAll(d),!0);for(var t,n,r=0,i=d.length;r<i;r++)n=d[r],!(t=f[n]||(f[n]=new o)).has(e)&&c(e,d[r])&&(t.add(e),E(e,u[r]))}function y(e,t){for(var n,r=0,o=e.length;r<o;r++)n=e[r],(t||1===n.nodeType)&&w(n)}function N(e,t,r,o){var i=t["on"+r];i&&(v[r](e,t.attributeFilter).addEventListener(r,i,!1),o&&a.call(m.document,e)&&e.dispatchEvent(new n(r)))}function E(e,t){N(e,t,"attributechanged",!1),N(e,t,"disconnected",!1),N(e,t,"connected",!0)}var x=Object.create,k=x(m,{define:{value:function(e,t){var n=new o,r={onconnected:i};function i(e){var r=e.currentTarget,o=e.type;r.removeEventListener(o,i),n.has(r)||(n.add(r),function(e,t,n,r){var o=x(e),i=!1;for(var a in e)"on"===a.slice(0,2)&&(n.addEventListener(a.slice(2),o,!1),a===r&&(i=!i));o.init(t),i&&o.handleEvent(t)}(t,e,r,"on"+o))}"ondisconnected"in t&&(r.ondisconnected=i),"onattributechanged"in t&&(r.onattributechanged=i,r.attributeFilter=t.attributeFilter||[]),C(t,"init",S),C(t,"handleEvent",L),m.define(e,r)}}});function C(e,t,n){t in e||(e[t]=n)}function L(e){var t="on"+e.type;t in this&&this[t](e)}function S(e){this.el=e.currentTarget}var M=function(e,t){var n=[];t=t||T;do{n.push(e),e=e.parentNode}while(e&&e.tagName&&t(e));return n.slice(1)};function T(e){return!0}var $,A,O=function(e,t,n){n=n||0;if(null==e)return-1;var r=e.length,o=n<0?r+n:n;if(o>=e.length)return-1;for(;o<r;){if(e[o]===t)return o;o++}return-1},R=(function(e,t){t.__esModule=!0,t.default=function(e,t){if(e.whatToShow!==s)throw new Error(i);var o=0,l=e.referenceNode,d=null;if(h=t,!isNaN(parseInt(h))&&isFinite(h))d={forward:function(){return o<t},backward:function(){return o>t}};else{if(!function(e){return e.nodeType===c}(t))throw new Error(a);var u=function(e,t){if(e===t)return!1;var o=null,i=[e].concat((0,n.default)(e)).reverse(),a=[t].concat((0,n.default)(t)).reverse();for(;i[0]===a[0];)o=i.shift(),a.shift();i=i[0],a=a[0];var s=(0,r.default)(o.childNodes,i),c=(0,r.default)(o.childNodes,a);return s>c}(l,t)?function(){return!1}:function(){return l!==t};d={forward:u,backward:function(){return l!=t||!e.pointerBeforeReferenceNode}}}var h;for(;d.forward()&&null!==(l=e.nextNode());)o+=l.nodeValue.length;for(;d.backward()&&null!==(l=e.previousNode());)o-=l.nodeValue.length;return o};var n=o(M),r=o(O);function o(e){return e&&e.__esModule?e:{default:e}}var i="Argument 1 of seek must use filter NodeFilter.SHOW_TEXT.",a="Argument 2 of seek must be a number or a Text Node.",s=4,c=3}($={exports:{}},$.exports),$.exports);(A=R)&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")&&A.default;var B=R.default;let q=0;function _(e,t){const n=document.body.textContent.indexOf(e),r=e.length,o=document.createNodeIterator(document.body,window.NodeFilter.SHOW_TEXT);function i(e){const t=B(o,e);return t!==e&&(o.referenceNode.splitText(e-t),B(o,e-t)),o.referenceNode}i(n);const a=i(r),s=document.createNodeIterator(document.body,window.NodeFilter.SHOW_TEXT);B(s,n);for(var c=[];s.referenceNode!==a;)c.push(s.nextNode());for(var l=0;l<c.length;l++){const e=c[l];if(!e.parentElement.closest("[data-reader]")){const n=document.createElement("reader-highlight");n.dataset.reader=!0,n.dataset.rangeId=t,n.classList.add("Highlight"),e.parentNode.replaceChild(n,e),n.appendChild(e)}}}k.define("reader-highlight",{onconnected(e){this.element=e.currentTarget,this.el.addEventListener("click",this)},onclick(e){const t=this.element.dataset.rangeId,n=this.element.classList.contains("Highlight--selected");t&&!n?(document.querySelectorAll(`[data-range-id="${t}"]`).forEach(e=>e.classList.add("Highlight--selected")),document.body.dispatchEvent(new window.CustomEvent("reader:highlight-selected",{detail:{rangeId:t}}))):n&&(document.querySelectorAll(`[data-range-id="${t}"]`).forEach(e=>e.classList.remove("Highlight--selected")),document.body.dispatchEvent(new window.CustomEvent("reader:highlight-deselected",{detail:{rangeId:t}})))}}),k.define('[is="remove-highlight-button"]',{onconnected(e){this.element=e.currentTarget,this.element.addEventListener("click",this),document.body.addEventListener("reader:highlight-selected",this),document.body.addEventListener("reader:highlight-deselected",this),this.element.disabled=!0},onclick(e){document.querySelectorAll(`reader-highlight[data-range-id="${this.element.dataset.rangeId}"]`).forEach(e=>{const t=document.createRange();t.setStartBefore(e.firstChild),t.setEndAfter(e.lastChild);const n=t.extractContents();e.parentElement.replaceChild(n,e)})},"onreader:highlight-selected":function(e){console.log(e),this.element.disabled=!1,this.element.dataset.rangeId=e.detail.rangeId},"onreader:highlight-deselected":function(e){console.log(e),this.element.disabled=!0,this.element.dataset.rangeId=null}}),k.define('[is="highlight-button"]',{onconnected(e){this.el=e.currentTarget,this.el.addEventListener("click",this)},onclick(e){const t=window.getSelection();if(t.isCollapsed)return null;let n;if(t.rangeCount>1){const e=t.getRangeAt(t.rangeCount-1);(n=t.getRangeAt(0)).setEnd(e.endContainer,e.endOffset)}else n=t.getRangeAt(0);const r=function(e){const t=e.endContainer,n=e.startContainer,r=document.createNodeIterator(document.getElementById("chapter"),window.NodeFilter.SHOW_ALL);for(;r.referenceNode!==n;)r.nextNode();const o=[];let i=document.createRange();i.setStart(e.startContainer,e.startOffset);for(;r.referenceNode!==t;){const e=r.referenceNode;i&&e.matches&&e.matches("[data-reader]")?(i.setEndBefore(e),o.push(i),i=void 0,r.nextNode()):e.parentElement.closest("[data-reader]")?r.nextNode():i?r.nextNode():((i=document.createRange()).setStartBefore(e),r.nextNode())}i&&(i.setEnd(t,e.endOffset),o.push(i));return o.map(e=>e.toString())}(n);r.forEach(e=>_(e,q)),q+=1,console.log(r),t.collapseToStart()}}),window.highlightString=_,k.define(".Marker-textarea",{onconnected(e){this.el=e.currentTarget,this.parent=this.el.closest(".Marker"),this.el.addEventListener("change",this)},onchange(e){this.parent.classList.add("Marker--hasContent")}}),k.define('[is="marker-note"]',{init(e){const t=this.el=e.currentTarget,n=this.el.querySelector(".MarkerNote-textarea");this.quill=new window.Quill(n,{modules:{toolbar:[["bold","italic","underline"],["image","code-block"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}],["clean"]]},theme:"snow"}),this.toolbar=this.el.querySelector(".ql-toolbar");const r=this.onfocus,o=this.onblur;this.quill.on("selection-change",function(e,n,i){e?r(t):o(t)}),this.quill.on("text-change",function(){t.parentElement.classList.add("Marker--hasContent")});const i=document.createElement("button");i.textContent="Delete",i.classList.add("TextButton"),i.classList.add("TextButton--noteDelete"),i.addEventListener("click",e=>{this.el.parentElement.removeChild(this.el)}),i.dataset.noteDelete="true",this.el.appendChild(i)},onfocus(e){e.classList.add("MarkerNote--hasFocus")},onblur(e){e.classList.remove("MarkerNote--hasFocus")}}),function(e,t,n){n=n||window;var r=!1;n.addEventListener(e,function(){r||(r=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(t)),r=!1}))})}("resize","optimizedResize"),k.define("#sidebar",{onconnected(e){this.element=e.currentTarget,this.setSize(),window.addEventListener("optimizedResize",this)},onoptimizedResize(){this.setSize()},setSize(){const e=this.element.offsetWidth;document.body.style.setProperty("--sidebar-width",e+"px"),e<200?document.body.classList.add("Layout--reader-no-sidebar"):document.body.classList.remove("Layout--reader-no-sidebar")}});var D={};try{D.WeakMap=WeakMap}catch(e){D.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=i.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(a,this)}function a(e){this.set(e[0],e[1])}}(Math.random(),Object)}var F=D.WeakMap,j=function(){var e="object"!=typeof document,t=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var o={};t=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)}}else e=!0;return n(r)};return n;function n(n){return e?n:t(n)}}();function I(e){for(var t=arguments.length,n=[j(e)],r=1;r<t;)n.push(arguments[r++]);return n}var z=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,i=r.length;o<i;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:H}=Array,W=z.prototype.nodeType;var V=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),i=o("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var s=RegExp.$1;i.innerHTML="<table>"+e+"</table>",a=i.querySelectorAll(s)}else i.innerHTML=e,a=i.childNodes;return r(n,a),n};return function(e,i){return("svg"===i?function(e){var n=o(t),i=o("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),P={};try{P.Map=Map}catch(e){P.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var i=r(o);return i&&(t.splice(e,1),n.splice(e,1)),i},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,i){return n[r(o)?e:t.push(o)-1]=i,this}};function r(n){return-1<(e=t.indexOf(n))}}}var G=P.Map;const Z=(e,t,n,r,o,i)=>{if(o-r<2)t.insertBefore(e(n[r],1),i);else{const a=t.ownerDocument.createDocumentFragment();for(;r<o;)a.appendChild(e(n[r++],1));t.insertBefore(a,i)}},X=(e,t)=>e==t,Q=e=>e,J=(e,t,n,r,o,i,a)=>{const s=i-o;if(s<1)return-1;for(;n-t>=s;){let s=t,c=o;for(;s<n&&c<i&&a(e[s],r[c]);)s++,c++;if(c===i)return t;t=s+1}return-1},K=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,U=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const i=t.ownerDocument.createRange();i.setStartBefore(e(n[r],-1)),i.setEndAfter(e(n[o-1],-1)),i.deleteContents()}},Y=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},ee=(e,t,n,r,o,i,a,s,c,l,d,u,h)=>{((e,t,n,r,o,i,a,s,c)=>{const l=new G,d=e.length;let u=a,h=0;for(;h<d;)switch(e[h++]){case 0:o++,u++;break;case 1:l.set(r[o],1),Z(t,n,r,o++,o,u<s?t(i[u],0):c);break;case-1:u++}for(h=0;h<d;)switch(e[h++]){case 0:a++;break;case-1:l.has(i[a])?a++:U(t,n,i,a++,a)}})(((e,t,n,r,o,i,a)=>{const s=n+i,c=[];let l,d,u,h,f,m,p;e:for(l=0;l<=s;l++){if(l>50)return null;for(p=l-1,f=l?c[l-1]:[0,0],m=c[l]=[],d=-l;d<=l;d+=2){for(u=(h=d===-l||d!==l&&f[p+d-1]<f[p+d+1]?f[p+d+1]:f[p+d-1]+1)-d;h<i&&u<n&&a(r[o+h],e[t+u]);)h++,u++;if(h===i&&u===n)break e;m[l+d]=h}}const v=Array(l/2+s/2);let g=v.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&u>0&&a(r[o+h-1],e[t+u-1]);)v[g--]=0,h--,u--;if(!l)break;p=l-1,f=l?c[l-1]:[0,0],(d=h-u)==-l||d!==l&&f[p+d-1]<f[p+d+1]?(u--,v[g--]=1):(h--,v[g--]=-1)}return v})(n,r,i,a,s,l,u)||((e,t,n,r,o,i,a,s)=>{let c=0,l=r<s?r:s;const d=Array(l++),u=Array(l);u[0]=-1;for(let e=1;e<l;e++)u[e]=a;const h=new G;for(let e=i;e<a;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(c=Y(u,l,t))&&(u[c]=t,d[c]={newi:r,oldi:t,prev:d[c-1]})}for(c=--l,--a;u[c]>a;)--c;l=s+r-c;const f=Array(l);let m=d[c];for(--n;m;){const{newi:e,oldi:t}=m;for(;n>e;)f[--l]=1,--n;for(;a>t;)f[--l]=-1,--a;f[--l]=0,--n,--a,m=m.prev}for(;n>=t;)f[--l]=1,--n;for(;a>=i;)f[--l]=-1,--a;return f})(n,r,o,i,a,s,c,l),e,t,n,r,a,s,d,h)},te=(e,t,n,r)=>{r||(r={});const o=r.compare||X,i=r.node||Q,a=null==r.before?null:i(r.before,0),s=t.length;let c=s,l=0,d=n.length,u=0;for(;l<c&&u<d&&o(t[l],n[u]);)l++,u++;for(;l<c&&u<d&&o(t[c-1],n[d-1]);)c--,d--;const h=l===c,f=u===d;if(h&&f)return n;if(h&&u<d)return Z(i,e,n,u,d,K(i,t,l,s,a)),n;if(f&&l<c)return U(i,e,t,l,c),n;const m=c-l,p=d-u;let v=-1;if(m<p){if(-1<(v=J(n,u,d,t,l,c,o)))return Z(i,e,n,u,v,i(t[l],0)),Z(i,e,n,v+m,d,K(i,t,c,s,a)),n}else if(p<m&&-1<(v=J(t,l,c,n,u,d,o)))return U(i,e,t,l,v),U(i,e,t,v+p,c),n;return m<2||p<2?(Z(i,e,n,u,d,i(t[l],0)),U(i,e,t,l,c),n):m===p&&((e,t,n,r,o,i)=>{for(;r<o&&i(n[r],e[t-1]);)r++,t--;return 0===t})(n,d,t,l,c,o)?(Z(i,e,n,u,d,K(i,t,c,s,a)),n):(ee(i,e,n,u,d,p,t,l,c,m,s,o,a),n)};var ne,re=function(e,t,n,r,o){var i="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(i?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],i=o.length,a=0;n&&a<i;a++)r.appendChild(e(o[a],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),oe="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ie="-"+Math.random().toFixed(6)+"%";"content"in(ne=document.createElement("template"))&&(ne.innerHTML='<p tabindex="'+ie+'"></p>',ne.content.childNodes[0].getAttribute("tabindex")==ie)||(ie="_dt: "+ie.slice(1,-1)+";");var ae="\x3c!--"+ie+"--\x3e",se=8,ce=1,le=3,de=/^(?:style|textarea)$/i,ue=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var he=" \\f\\n\\r\\t",fe="[ "+he+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",me="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",pe="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",ve=new RegExp(me+fe+pe+"+)([ "+he+"]*/?>)","g"),ge=new RegExp(me+fe+pe+"*)([ "+he+"]*/>)","g"),be=new RegExp("("+fe+"\\s*=\\s*)(['\"]?)"+ae+"\\2","gi");function we(e,t,n,r){return"<"+t+n.replace(be,ye)+r}function ye(e,t,n){return t+(n||'"')+ie+(n||'"')}function Ne(e,t,n){return ue.test(t)?e:"<"+t+n+"></"+t+">"}function Ee(e,t,n,r){return{name:r,node:t,path:n,type:e}}function xe(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ke(e,t,n,r){for(var o=new G,i=e.attributes,a=[],s=a.slice.call(i,0),c=s.length,l=0;l<c;){var d=s[l++];if(d.value===ie){var u=d.name;if(!o.has(u)){var h=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),f=i[h]||i[h.toLowerCase()];o.set(u,f),t.push(Ee("attr",f,r,h))}a.push(d)}}for(c=a.length,l=0;l<c;){var m=a[l++];/^id$/i.test(m.name)?e.removeAttribute(m.name):e.removeAttributeNode(m)}var p=e.nodeName;if(/^script$/i.test(p)){var v=document.createElement(p);for(c=i.length,l=0;l<c;)v.setAttributeNode(i[l++].cloneNode(!0));v.textContent=e.textContent,e.parentNode.replaceChild(v,e)}}var Ce=new F,Le=new F;function Se(e,t){var n=function(e){return e.join(ae).replace(ge,Ne).replace(ve,we)}(t),r=e.transform;r&&(n=r(n));var o=V(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===oe.call(r.textContent).length&&e.removeChild(r)}}(o);var i=[];!function e(t,n,r,o){for(var i=t.childNodes,a=i.length,s=0;s<a;){var c=i[s];switch(c.nodeType){case ce:var l=o.concat(s);ke(c,n,r,l),e(c,n,r,l);break;case se:c.textContent===ie&&(r.shift(),n.push(de.test(t.nodeName)?Ee("text",t,o):Ee("any",c,o.concat(s))));break;case le:de.test(t.nodeName)&&oe.call(c.textContent)===ae&&(r.shift(),n.push(Ee("text",t,o)))}s++}}(o,i,t.slice(0),[]);var a={content:o,updates:function(n){for(var r=[],o=i.length,a=0;a<o;){var s=i[a++],c=xe(n,s.path);switch(s.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,s.name,s.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,i=e-1,a=1;if(o!==i)throw new Error(i+" values instead of "+o+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return Ce.set(t,a),a}function Me(e){return function(t){var n=Le.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=Ce.get(t)||Se(e,t),r=re.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return Le.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var Te=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var i,a;return function(s){var c,l,d,u;switch(typeof s){case"object":if(s){if("object"===i){if(!o&&a!==s)for(l in a)l in s||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,s)d="number"!=typeof(u=s[l])||e.test(l)?u:u+"px",!o&&/^--/.test(l)?c.setProperty(l,d):c[l]=d;i="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=c):a=s;break}default:a!=s&&(i="string",a=s,o?r.value=s||"":r.cssText=s||"")}}}}();const $e=(e,t)=>e.nodeType===W?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,Ae=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(e[t]=r,null==r&&e.removeAttribute(t)))}},Oe=/^(?:form|list)$/i,Re=[].slice,Be=(e,t)=>e.ownerDocument.createTextNode(t);function qe(e){return this.type=e,Me(this)}function _e(e){return e(this)}qe.prototype={attribute(e,t,n){switch(t){case"class":t="className";case"data":case"props":return Ae(e,t);case"style":return Te(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||Oe.test(t))?Ae(e,t):((e,t)=>{let n,r=!1;return o=>{n!==o&&(n=o,t.value!==o&&(null==o?(r&&(r=!1,e.removeAttributeNode(t)),t.value=o):(t.value=o,r||(r=!0,e.setAttributeNode(t)))))}})(e,n.cloneNode(!0))}},any(e,t){const n={node:$e,before:e},r="ownerSVGElement"in e?"svg":"html";let o,i=!1;const a=s=>{switch(typeof s){case"string":case"number":case"boolean":i?o!==s&&(o=s,t[0].textContent=s):(i=!0,o=s,t=te(e.parentNode,t,[Be(e,s)],n));break;case"function":a(s(e));break;case"object":case"undefined":if(null==s){i=!1,t=te(e.parentNode,t,[],n);break}default:if(i=!1,o=s,H(s))if(0===s.length)t.length&&(t=te(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":a(String(s));break;case"function":a(s.map(_e,e));break;case"object":H(s[0])&&(s=s.concat.apply([],s));default:t=te(e.parentNode,t,s,n)}else(e=>"ELEMENT_NODE"in e)(s)?t=te(e.parentNode,t,11===s.nodeType?Re.call(s.childNodes):[s],n):"text"in s?a(String(s.text)):"any"in s?a(s.any):"html"in s?t=te(e.parentNode,t,Re.call(V([].concat(s.html).join(""),r).childNodes),n):"length"in s&&a(Re.call(s))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Re.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};new F,new F;let De=null;const Fe=je("html");je("svg");function je(e){const t=new F;return n.for=((n,r)=>{const o=t.get(n)||function(e){const n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){let r=null;const o=new qe(e);return t[n]=function(){const e=o.apply(null,I.apply(null,arguments));return r||(r=function(e){const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new z(t):e}(e))}}(o,r)}),n;function n(){const t=I.apply(null,arguments);return De?new Ie(e,t):new qe(e).apply(null,t)}}function Ie(e,t){this.type=e,this.args=t}function ze(e,t){return Fe`<button class="Button Button--marker" aria-label="${`Add '${t}' sidebar marker`}" is="add-marker-button" data-description="${t}">${e}</button>`}k.define('[is="add-marker-button"]',{onconnected(e){this.el=e.currentTarget,this.el.addEventListener("click",this)},onclick(e){const t=function(e){const t=e.dataset.description,n=e.textContent;return Fe`<button class="Button Button--marker" aria-label="${`Remove '${t}' sidebar marker`}" is="marker-button" data-description="${t}">${n}</button>`}(this.el),n=this.el.closest(".Marker"),r=n.querySelector(".MenuButton"),o=this.el.dataset.description,i=n.querySelector(`[is="marker-button"][data-description="${o}"]`);i?n.removeChild(i):n.insertBefore(t,r)},ondisconnected(e){this.el.removeEventListener("click",this)}}),k.define('[is="marker-button"]',{onconnected(e){this.el=e.currentTarget,this.el.addEventListener("click",this)},onclick(e){this.el.parentElement.removeChild(this.el)},ondisconnected(e){this.el.removeEventListener("click",this)}});const He=new window.IntersectionObserver(function(e){e.forEach(e=>{e.intersectionRatio>0&&(He.unobserve(e.target),function(e){const t=e.dataset.xpath;if(!e.querySelector(".NoteButton")){const n=Fe`<button class="Button Button--marker NoteButton" data-component="note-button" aria-label="Add note" data-for="${t}"><svg viewBox="0 0 10 10" fill="currentColor" stroke="transparent" width="15" height="15">
    <path d="m1 4h8v2h-8zm3-3h2v8h-2z"></path>
  </svg></button>`;e.appendChild(n)}const n=e.querySelector(".Marker");if(n){const e=Fe`<details class="MenuButton MenuButton--marker">
  <summary class="MenuButton-summary" aria-label="Add marker to sidebar"><svg viewBox="0 0 10 10" fill="currentColor" stroke="transparent" width="15" height="15">
  <path d="m1 4h8v2h-8zm3-3h2v8h-2z"></path>
</svg></summary>
<marker-menu class="MenuButton-body MenuButton-body--right MarkerMenu">
  <dl>
    <dt>Markers</dt>
  <dd>
    <ol>
    <li>${ze("✓","agree")}</li>
    <li>${ze("x","disagree")}</li>
    <li>${ze("~","interesting")}</li>
    <li>${ze("*","important")}</li>
    </ol>
  </dd>
    <dt>Hands</dt>
  <dd>
    <ol>
    <li>${ze("👍","thumbs up")}</li>
    <li>${ze("👎","thumbs down")}</li>
    <li>${ze("✋","open hand")}</li>
    <li>${ze("👏","clapping")}</li>
    </ol>
  </dd>
  <dt>Smileys</dt>
  <dd>
    <ol>
    <li>${ze("🙂","slightly smiling face")}</li>
    <li>${ze("🤨","face with raised eyebrows")}</li>
    <li>${ze("😍","smiling face with heart-shaped eyes")}</li>
    <li>${ze("😱","face screaming in fear")}</li>
    <li>${ze("😐","neutral face")}</li>
    <li>${ze("🙄","face with rolling eyes")}</li>
    </ol>
  </dd>
</dl></div>
  </details>`;n.appendChild(e)}}(e.target))})},{rootMargin:"50px 0px"}),We=new window.IntersectionObserver(function(e){const t=e.reduce((e,t)=>t.intersectionRatio>e.intersectionRatio&&1===t.intersectionRatio?t:e);Pe?t.intersectionRatio>=Pe.intersectionRatio&&(Pe=t):Pe=t;document.getElementById("chapter").dataset.currentPosition=Pe.target.dataset.xpath},{threshold:1,rootMargin:"0px 0px -50% 0px"}),Ve=new window.IntersectionObserver(function(e){e.forEach(e=>{if(e.intersectionRatio>0){Ve.unobserve(e.target);const t=e.target.cloneNode(!0);t.querySelector(".ql-container").innerHTML=t.querySelector(".ql-editor").innerHTML,t.dataset.component="reader-note",e.target.parentElement.replaceChild(t,e.target)}})},{rootMargin:"50px 0px"});let Pe;k.define(".ReaderNote--preRendered",{init:function(e){Ve.observe(e.currentTarget)},onconnected(e){},ondisconnected(e){}}),k.define("[data-xpath]",{init:function(e){He.observe(e.currentTarget),We.observe(e.currentTarget)},onconnected(e){},ondisconnected(e){}}),k.define('[data-component="note-button"]',{init(e){this.element=e.currentTarget.closest("[data-xpath]"),e.currentTarget.addEventListener("click",this),e.currentTarget.dataset.reader=!0},onclick(e){const{element:t}=this,n=document.getElementById(function(e){return"ReaderNote-"+e.dataset.xpath}(t));if(n)n.querySelector(".ql-editor").focus();else{const e=function(e){const t=e.dataset.xpath,n=document.createElement("form");n.dataset.component="reader-note",n.dataset.for=t,n.dataset.reader="true",n.classList.add("ReaderNote"),n.id="ReaderNote-"+t;const r="ReaderNote-text-"+t;n.dataset.newNote="true",n.innerHTML=`<div class="ReaderNote-textarea" id="${r}" data-reader="true" aria-label="Sidebar note"></div>`;const o=document.createElement("button");return o.textContent="Cancel",o.classList.add("TextButton"),o.classList.add("TextButton--noteButton"),o.addEventListener("click",e=>{n.parentElement.removeChild(n)}),o.dataset.noteCancel="true",n.appendChild(o),n}(t);t.parentElement.insertBefore(e,t.nextSibling),window.requestAnimationFrame(function(){e.querySelector(".ql-editor").focus()})}}}),k.define('[data-component="reader-note"]',{init(e){const t=this.el=e.currentTarget,n=this.el.querySelector(".ReaderNote-textarea");this.quill=new window.Quill(n,{modules:{toolbar:[["bold","italic","underline"],["image","code-block"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}],["clean"]]},theme:"snow"}),this.toolbar=this.el.querySelector(".ql-toolbar");const r=this.onfocus,o=this.onblur;this.el.classList.remove("ReaderNote--preRendered"),this.quill.on("selection-change",function(e,n,i){e?r(t):o(t)}),this.quill.on("text-change",function(){t.classList.add("ReaderNote--hasContent")});const i=document.createElement("button");i.textContent="Delete",i.classList.add("TextButton"),i.classList.add("TextButton--noteDelete"),i.addEventListener("click",e=>{this.el.parentElement.removeChild(this.el)}),i.dataset.noteDelete="true",this.el.appendChild(i)},onfocus(e){e.classList.add("ReaderNote--hasFocus")},onblur(e){e.classList.remove("ReaderNote--hasFocus")}});
//# sourceMappingURL=annotations.js.map