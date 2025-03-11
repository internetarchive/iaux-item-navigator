(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const vi=new URLSearchParams(location.search.slice(1));vi.get("view")==="theater"&&document.querySelector("body").classList.toggle("fullscreen");function a(o,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(r<3?n(s):r>3?n(e,t,s):n(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function wt(o,e,t,i){function r(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function d(u){try{c(i.next(u))}catch(m){n(m)}}function l(u){try{c(i.throw(u))}catch(m){n(m)}}function c(u){u.done?s(u.value):r(u.value).then(d,l)}c((i=i.apply(o,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=window,ut=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),yt=new WeakMap;let bi=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ut&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=yt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yt.set(t,e))}return e}toString(){return this.cssText}};const wi=o=>new bi(typeof o=="string"?o:o+"",void 0,Qt),yi=(o,e)=>{ut?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=$e.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},$t=ut?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wi(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const xe=window,_t=xe.trustedTypes,$i=_t?_t.emptyScript:"",xt=xe.reactiveElementPolyfillSupport,Je={toAttribute(o,e){switch(e){case Boolean:o=o?$i:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ei=(o,e)=>e!==o&&(e==e||o==o),He={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:ei},Ge="finalized";let ae=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=He){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||He}static finalize(){if(this.hasOwnProperty(Ge))return!1;this[Ge]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift($t(r))}else e!==void 0&&t.push($t(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return yi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=He){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Je).toAttribute(t,i.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Je;this._$El=s,this[s]=d.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ei)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ae[Ge]=!0,ae.elementProperties=new Map,ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},xt==null||xt({ReactiveElement:ae}),((Oe=xe.reactiveElementVersions)!==null&&Oe!==void 0?Oe:xe.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const Ae=window,Y=Ae.trustedTypes,At=Y?Y.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ye="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,ti="?"+D,_i=`<${ti}>`,K=document,ke=()=>K.createComment(""),ue=o=>o===null||typeof o!="object"&&typeof o!="function",ii=Array.isArray,xi=o=>ii(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,St=/>/g,V=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Ct=/"/g,ri=/^(?:script|style|textarea|title)$/i,Q=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Et=new WeakMap,j=K.createTreeWalker(K,129,null,!1);function oi(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(e):e}const Ai=(o,e)=>{const t=o.length-1,i=[];let r,s=e===2?"<svg>":"",n=le;for(let d=0;d<t;d++){const l=o[d];let c,u,m=-1,g=0;for(;g<l.length&&(n.lastIndex=g,u=n.exec(l),u!==null);)g=n.lastIndex,n===le?u[1]==="!--"?n=kt:u[1]!==void 0?n=St:u[2]!==void 0?(ri.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=V):u[3]!==void 0&&(n=V):n===V?u[0]===">"?(n=r??le,m=-1):u[1]===void 0?m=-2:(m=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?V:u[3]==='"'?Ct:Mt):n===Ct||n===Mt?n=V:n===kt||n===St?n=le:(n=V,r=void 0);const w=n===V&&o[d+1].startsWith("/>")?" ":"";s+=n===le?l+_i:m>=0?(i.push(c),l.slice(0,m)+Ye+l.slice(m)+D+w):l+D+(m===-2?(i.push(void 0),d):w)}return[oi(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};let Qe=class si{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const d=e.length-1,l=this.parts,[c,u]=Ai(e,t);if(this.el=si.createElement(c,i),j.currentNode=this.el.content,t===2){const m=this.el.content,g=m.firstChild;g.remove(),m.append(...g.childNodes)}for(;(r=j.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const m=[];for(const g of r.getAttributeNames())if(g.endsWith(Ye)||g.startsWith(D)){const w=u[n++];if(m.push(g),w!==void 0){const _=r.getAttribute(w.toLowerCase()+Ye).split(D),$=/([.?@])?(.*)/.exec(w);l.push({type:1,index:s,name:$[2],strings:_,ctor:$[1]==="."?Si:$[1]==="?"?Ci:$[1]==="@"?Ei:Te})}else l.push({type:6,index:s})}for(const g of m)r.removeAttribute(g)}if(ri.test(r.tagName)){const m=r.textContent.split(D),g=m.length-1;if(g>0){r.textContent=Y?Y.emptyScript:"";for(let w=0;w<g;w++)r.append(m[w],ke()),j.nextNode(),l.push({type:2,index:++s});r.append(m[g],ke())}}}else if(r.nodeType===8)if(r.data===ti)l.push({type:2,index:s});else{let m=-1;for(;(m=r.data.indexOf(D,m+1))!==-1;)l.push({type:7,index:s}),m+=D.length-1}s++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}};function ee(o,e,t=o,i){var r,s,n,d;if(e===Q)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=ue(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,t,i)),i!==void 0?((n=(d=t)._$Co)!==null&&n!==void 0?n:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=ee(o,l._$AS(o,e.values),l,i)),e}let ki=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(i,!0);j.currentNode=s;let n=j.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let u;c.type===2?u=new pt(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new Li(n,this,e)),this._$AV.push(u),c=r[++l]}d!==(c==null?void 0:c.index)&&(n=j.nextNode(),d++)}return j.currentNode=K,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},pt=class ni{constructor(e,t,i,r){var s;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),ue(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(K.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Qe.createElement(oi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const n=new ki(s,this),d=n.u(this.options);n.v(i),this.$(d),this._$AH=n}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new Qe(e)),t}T(e){ii(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ni(this.k(ke()),this.k(ke()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Te=class{constructor(e,t,i,r,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=ee(this,e,t,0),n=!ue(e)||e!==this._$AH&&e!==Q,n&&(this._$AH=e);else{const d=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=ee(this,d[i+l],t,l),c===Q&&(c=this._$AH[l]),n||(n=!ue(c)||c!==this._$AH[l]),c===k?e=k:e!==k&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Si=class extends Te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}};const Mi=Y?Y.emptyScript:"";let Ci=class extends Te{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,Mi):this.element.removeAttribute(this.name)}},Ei=class extends Te{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=ee(this,e,t,0))!==null&&i!==void 0?i:k)===Q)return;const r=this._$AH,s=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==k&&(r===k||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Li=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}};const Ti={I:pt},Lt=Ae.litHtmlPolyfillSupport;Lt==null||Lt(Qe,pt),((De=Ae.litHtmlVersions)!==null&&De!==void 0?De:Ae.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window,ft=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Tt=new WeakMap;let ai=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ft&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Tt.set(t,e))}return e}toString(){return this.cssText}};const Ii=o=>new ai(typeof o=="string"?o:o+"",void 0,mt),b=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new ai(t,o,mt)},Bi=(o,e)=>{ft?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=_e.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},It=ft?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ii(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const Se=window,Bt=Se.trustedTypes,zi=Bt?Bt.emptyScript:"",zt=Se.reactiveElementPolyfillSupport,et={toAttribute(o,e){switch(e){case Boolean:o=o?zi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},li=(o,e)=>e!==o&&(e==e||o==o),Fe={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:li},tt="finalized";let G=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Fe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fe}static finalize(){if(this.hasOwnProperty(tt))return!1;this[tt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(It(r))}else e!==void 0&&t.push(It(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Bi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Fe){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:et).toAttribute(t,i.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:et;this._$El=s,this[s]=d.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||li)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};G[tt]=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},zt==null||zt({ReactiveElement:G}),((Ue=Se.reactiveElementVersions)!==null&&Ue!==void 0?Ue:Se.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ve;const Me=window,te=Me.trustedTypes,Ot=te?te.createPolicy("lit-html",{createHTML:o=>o}):void 0,it="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,di="?"+P,Oi=`<${di}>`,X=document,pe=()=>X.createComment(""),fe=o=>o===null||typeof o!="object"&&typeof o!="function",ci=Array.isArray,Hi=o=>ci(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ne=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Dt=/>/g,N=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,Ut=/"/g,hi=/^(?:script|style|textarea|title)$/i,ui=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),h=ui(1),Ft=ui(2),ie=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Vt=new WeakMap,W=X.createTreeWalker(X,129,null,!1);function pi(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(e):e}const Di=(o,e)=>{const t=o.length-1,i=[];let r,s=e===2?"<svg>":"",n=de;for(let d=0;d<t;d++){const l=o[d];let c,u,m=-1,g=0;for(;g<l.length&&(n.lastIndex=g,u=n.exec(l),u!==null);)g=n.lastIndex,n===de?u[1]==="!--"?n=Ht:u[1]!==void 0?n=Dt:u[2]!==void 0?(hi.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=N):u[3]!==void 0&&(n=N):n===N?u[0]===">"?(n=r??de,m=-1):u[1]===void 0?m=-2:(m=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?N:u[3]==='"'?Ut:Pt):n===Ut||n===Pt?n=N:n===Ht||n===Dt?n=de:(n=N,r=void 0);const w=n===N&&o[d+1].startsWith("/>")?" ":"";s+=n===de?l+Oi:m>=0?(i.push(c),l.slice(0,m)+it+l.slice(m)+P+w):l+P+(m===-2?(i.push(void 0),d):w)}return[pi(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class me{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const d=e.length-1,l=this.parts,[c,u]=Di(e,t);if(this.el=me.createElement(c,i),W.currentNode=this.el.content,t===2){const m=this.el.content,g=m.firstChild;g.remove(),m.append(...g.childNodes)}for(;(r=W.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const m=[];for(const g of r.getAttributeNames())if(g.endsWith(it)||g.startsWith(P)){const w=u[n++];if(m.push(g),w!==void 0){const _=r.getAttribute(w.toLowerCase()+it).split(P),$=/([.?@])?(.*)/.exec(w);l.push({type:1,index:s,name:$[2],strings:_,ctor:$[1]==="."?Ui:$[1]==="?"?Vi:$[1]==="@"?Ni:Ie})}else l.push({type:6,index:s})}for(const g of m)r.removeAttribute(g)}if(hi.test(r.tagName)){const m=r.textContent.split(P),g=m.length-1;if(g>0){r.textContent=te?te.emptyScript:"";for(let w=0;w<g;w++)r.append(m[w],pe()),W.nextNode(),l.push({type:2,index:++s});r.append(m[g],pe())}}}else if(r.nodeType===8)if(r.data===di)l.push({type:2,index:s});else{let m=-1;for(;(m=r.data.indexOf(P,m+1))!==-1;)l.push({type:7,index:s}),m+=P.length-1}s++}}static createElement(e,t){const i=X.createElement("template");return i.innerHTML=e,i}}function re(o,e,t=o,i){var r,s,n,d;if(e===ie)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=fe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,t,i)),i!==void 0?((n=(d=t)._$Co)!==null&&n!==void 0?n:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=re(o,l._$AS(o,e.values),l,i)),e}class Pi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:X).importNode(i,!0);W.currentNode=s;let n=W.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let u;c.type===2?u=new be(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new Ri(n,this,e)),this._$AV.push(u),c=r[++l]}d!==(c==null?void 0:c.index)&&(n=W.nextNode(),d++)}return W.currentNode=X,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class be{constructor(e,t,i,r){var s;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),fe(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ie&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Hi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(X.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=me.createElement(pi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const n=new Pi(s,this),d=n.u(this.options);n.v(i),this.$(d),this._$AH=n}}_$AC(e){let t=Vt.get(e.strings);return t===void 0&&Vt.set(e.strings,t=new me(e)),t}T(e){ci(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new be(this.k(pe()),this.k(pe()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ie{constructor(e,t,i,r,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=re(this,e,t,0),n=!fe(e)||e!==this._$AH&&e!==ie,n&&(this._$AH=e);else{const d=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=re(this,d[i+l],t,l),c===ie&&(c=this._$AH[l]),n||(n=!fe(c)||c!==this._$AH[l]),c===y?e=y:e!==y&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ui extends Ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const Fi=te?te.emptyScript:"";class Vi extends Ie{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,Fi):this.element.removeAttribute(this.name)}}class Ni extends Ie{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=re(this,e,t,0))!==null&&i!==void 0?i:y)===ie)return;const r=this._$AH,s=e===y&&r!==y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==y&&(r===y||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ri{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const Nt=Me.litHtmlPolyfillSupport;Nt==null||Nt(me,be),((Ve=Me.litHtmlVersions)!==null&&Ve!==void 0?Ve:Me.litHtmlVersions=[]).push("2.8.0");const ji=(o,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new be(e.insertBefore(pe(),d),d,void 0,t??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re,je;let A=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ji(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ie}};A.finalized=!0,A._$litElement$=!0,(Re=globalThis.litElementHydrateSupport)===null||Re===void 0||Re.call(globalThis,{LitElement:A});const Rt=globalThis.litElementPolyfillSupport;Rt==null||Rt({LitElement:A});((je=globalThis.litElementVersions)!==null&&je!==void 0?je:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){customElements.define(t,n)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},Zi=(o,e,t)=>{e.constructor.createProperty(t,o)};function f(o){return(e,t)=>t!==void 0?Zi(o,e,t):Wi(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qi(o){return f({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return o!=null&&(n.finisher=function(d){o(d,s)}),n}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(o,e){return Ki({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;((We=window.HTMLSlotElement)===null||We===void 0?void 0:We.prototype.assignedElements)!=null;class Xi{constructor(){this.resizeObserver=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{for(const t of e){const i=this.resizeHandlers.get(t.target);i==null||i.forEach(r=>{r.handleResize(t)})}})}),this.resizeHandlers=new Map}shutdown(){this.resizeHandlers.forEach((e,t)=>{this.resizeObserver.unobserve(t)}),this.resizeHandlers.clear()}addObserver(e){var t;const i=(t=this.resizeHandlers.get(e.target))!==null&&t!==void 0?t:new Set;i.add(e.handler),this.resizeHandlers.set(e.target,i),this.resizeObserver.observe(e.target,e.options)}removeObserver(e){const t=this.resizeHandlers.get(e.target);t&&(t.delete(e.handler),t.size===0&&(this.resizeObserver.unobserve(e.target),this.resizeHandlers.delete(e.target)))}}class fi{constructor(e){var t,i,r,s,n,d,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(s=e==null?void 0:e.processingImageMode)!==null&&s!==void 0?s:"complete",this.showCloseButton=(n=e==null?void 0:e.showCloseButton)!==null&&n!==void 0?n:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}function*gt(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*gt(o.shadowRoot.activeElement)))}function Ji(){return[...gt()].pop()}const jt=new WeakMap;function mi(o){let e=jt.get(o);return e||(e=window.getComputedStyle(o,null),jt.set(o,e)),e}function Gi(o){if("checkVisibility"in o&&typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=mi(o);return e.visibility!=="hidden"&&e.display!=="none"}function Yi(o){const e=mi(o),{overflowY:t,overflowX:i}=e;return t==="scroll"||i==="scroll"?!0:t!=="auto"||i!=="auto"?!1:o.scrollHeight>o.clientHeight&&t==="auto"||o.scrollWidth>o.clientWidth&&i==="auto"}function Qi(o){const e=o.tagName.toLowerCase(),t=Number(o.getAttribute("tabindex"));return o.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||o.hasAttribute("disabled")||o.closest("[inert]")||e==="input"&&o.getAttribute("type")==="radio"&&!o.hasAttribute("checked")||!Gi(o)?!1:(e==="audio"||e==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Yi(o)}function er(o,e){var t;return((t=o.getRootNode({composed:!0}))===null||t===void 0?void 0:t.host)!==e}function Wt(o){const e=new WeakMap,t=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!t.includes(r)&&Qi(r)&&t.push(r),r instanceof HTMLSlotElement&&er(r,o)&&r.assignedElements({flatten:!0}).forEach(s=>{i(s)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const s of Array.from(r.children))i(s)}return i(o),t.sort((r,s)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}let ce=[];class tr{constructor(e){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Ji();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Wt(this.element);let n=s.findIndex(l=>l===r);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){n+d>=s.length?n=0:n+d<0?n=s.length-1:n+=d,this.previousFocus=this.currentFocus;const l=s[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;t.preventDefault(),this.currentFocus=l,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const c=[...gt()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){ce.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ce=ce.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ce[ce.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Wt(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}var Zt;(function(o){o.processing="processing",o.complete="complete"})(Zt||(Zt={}));let rt=class extends A{constructor(){super(...arguments),this.mode="processing"}render(){return h`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=b`var(--activityIndicatorCheckmarkColor, #31A481)`,t=b`var(--activityIndicatorCompletedRingColor, #31A481)`,i=b`var(--activityIndicatorLoadingRingColor, #333333)`,r=b`var(--activityIndicatorLoadingDotColor, #333333)`;return b`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${i};
      }

      #activity-dots {
        fill: ${r};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}};a([f({type:String})],rt.prototype,"mode",void 0);rt=a([L("ia-activity-indicator")],rt);const ir=h`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`;class rr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return ir}}customElements.define("ia-icon-close",rr);const or=h`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">
      A line drawing of the Internet Archive headquarters building façade.
    </desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" class="fill-color">
        <path
          d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z"
          id="path-1"
        ></path>
      </mask>
      <use class="fill-color" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" class="fill-color">
        <path
          d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z"
          id="swatch"
        ></path>
      </g>
    </g>
  </svg>
`;let ot=class extends A{constructor(){super(...arguments),this.config=new fi}render(){return h`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?h`<div class="logo-icon">${or}</div>`:y}
            ${this.config.title?h`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?h`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?"":"hidden"}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?h` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?h` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(e){if(e.preventDefault(),e.type==="keydown"&&e.key!==" "&&e.key!=="Enter")return;const t=new Event("closeButtonPressed");this.dispatchEvent(t)}get closeButtonTemplate(){return h`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const e=b`var(--modalLogoSize, 6.5rem)`,t=b`var(--processingImageSize, 7.5rem)`,i=b`var(--modalCornerRadius, 1rem)`,r=b`var(--modalBorder, 2px solid black)`,s=b`var(--modalBottomMargin, 2.5rem)`,n=b`var(--modalTopMargin, 5rem)`,d=b`var(--modalHeaderBottomPadding, 0.5em)`,l=b`var(--modalBottomPadding, 2rem)`,c=b`var(--modalScrollOffset, 5px)`,u=b`var(--modalTitleFontSize, 1.8rem)`,m=b`var(--modalSubtitleFontSize, 1.4rem)`,g=b`var(--modalHeadlineFontSize, 1.6rem)`,w=b`var(--modalMessageFontSize, 1.4rem)`,_=b`var(--modalTitleLineHeight, normal)`,$=b`var(--modalSubtitleLineHeight, normal)`,M=b`var(--modalHeadlineLineHeight, normal)`,B=b`var(--modalMessageLineHeight, normal)`;return b`
      .processing-logo {
        margin: auto;
        width: ${t};
        height: ${t};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${i};
        width: 100%;
        margin-top: ${n};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${r};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${u};
        font-weight: bold;
        line-height: ${_};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${m};
        line-height: ${$};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${s}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${g};
        font-weight: bold;
        text-align: center;
        line-height: ${M};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${w};
        line-height: ${B};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${e};
        height: ${e};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${e} * 0.65);
        height: calc(${e} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `}};a([f({type:Object})],ot.prototype,"config",void 0);ot=a([L("modal-template")],ot);function sr(o,e,t){var i=t||{},r=i.noTrailing,s=r===void 0?!1:r,n=i.noLeading,d=n===void 0?!1:n,l=i.debounceMode,c=l===void 0?void 0:l,u,m=!1,g=0;function w(){u&&clearTimeout(u)}function _(M){var B=M||{},z=B.upcomingOnly,ze=z===void 0?!1:z;w(),m=!ze}function $(){for(var M=arguments.length,B=new Array(M),z=0;z<M;z++)B[z]=arguments[z];var ze=this,vt=Date.now()-g;if(m)return;function we(){g=Date.now(),e.apply(ze,B)}function bt(){u=void 0}!d&&c&&!u&&we(),w(),c===void 0&&vt>o?d?(g=Date.now(),s||(u=setTimeout(c?bt:we,o))):we():s!==!0&&(u=setTimeout(c?bt:we,c===void 0?o-vt:o))}return $.cancel=_,$}var Z;(function(o){o.Open="open",o.Closed="closed"})(Z||(Z={}));class nr{constructor(e){this.windowResizeThrottler=sr(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case Z.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Z.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let oe=class extends A{constructor(){super(...arguments),this.mode=Z.Closed,this.hostBridge=new nr(this),this.modal=new tr(this),this.closeOnBackdropClick=!0}firstUpdated(){return wt(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return h`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Z.Closed,this.customModalContent=void 0,this.modalTemplate.config=new fi,this.modal.deactivate()}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return wt(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=Z.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=b`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=b`var(--modalBackdropZindex, 1000)`,i=b`var(--modalWidth, 32rem)`,r=b`var(--modalMaxWidth, 95%)`,s=b`var(--modalZindex, 2000)`;return b`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${e};
        width: 100%;
        height: 100%;
        z-index: ${t};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${s};
        width: ${i};
        max-width: ${r};
      }
    `}};a([f({type:String,reflect:!0})],oe.prototype,"mode",void 0);a([f({type:Object})],oe.prototype,"customModalContent",void 0);a([f({type:Object})],oe.prototype,"hostBridge",void 0);a([se("modal-template")],oe.prototype,"modalTemplate",void 0);oe=a([L("modal-manager")],oe);function p(o){let e,t,i;return e=o,(r,s,n)=>{if(n.value!=null)n.value=qt(n.value,e,t,i);else if(n.get!=null)n.get=qt(n.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ze=new Map;function qt(o,e,t=0,i){const r=Symbol("__memoized_map__");return function(...s){let n;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const l of i)Ze.has(l)?Ze.get(l).push(d):Ze.set(l,[d]);if(e||s.length>0||t>0){let l;e===!0?l=s.map(m=>m.toString()).join("!"):e?l=e.apply(this,s):l=s[0];const c=`${l}__timestamp`;let u=!1;if(t>0)if(!d.has(c))u=!0;else{let m=d.get(c);u=Date.now()-m>t}d.has(l)&&!u?n=d.get(l):(n=o.apply(this,s),d.set(l,n),t>0&&d.set(c,Date.now()))}else{const l=this;d.has(l)?n=d.get(l):(n=o.apply(this,s),d.set(l,n))}return n}}class st{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}st.shared=new st;class U{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}U.shared=new U;class Ce{parseValue(e){return U.shared.parseValue(e)}}Ce.shared=new Ce;class ge{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ge.shared=new ge;class Ee{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,s)=>{const n=parseFloat(r);if(Number.isNaN(n))return t=!0,0;const l=60**(e.length-1-s);return n*Math.floor(l)}).reduce((r,s)=>r+s,0);return t?void 0:i}}Ee.shared=new Ee;class nt{parseValue(e){if(typeof e=="string")return e}}nt.shared=new nt;class ar{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return i.forEach(s=>{s!==void 0&&r.push(s)}),r}}class at{parseValue(e){if(typeof e=="string")return e}}at.shared=new at;class Le{parseValue(e){return String(e)}}Le.shared=new Le;class I{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}a([p()],I.prototype,"values",null);a([p()],I.prototype,"value",null);class lr extends I{constructor(e){super(st.shared,e)}}class H extends I{constructor(e){super(ge.shared,e)}}class qe extends I{constructor(e){super(Ee.shared,e)}}class E extends I{constructor(e){super(U.shared,e)}}class x extends I{constructor(e){super(Le.shared,e)}}class dr extends I{constructor(e){super(at.shared,e)}}class Kt extends I{constructor(e){super(Ce.shared,e)}}class cr extends I{constructor(e){super(nt.shared,e)}}class hr extends I{constructor(e,t){super(t,e)}}class ur extends hr{constructor(e){const t=new ar(Le.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new H(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new x(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new E(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new E(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new x(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new x(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Kt(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new x(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new x(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new x(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new x(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new H(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new x(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new E(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new qe(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new x(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new E(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new H(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new x(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new x(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new E(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Kt(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new x(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new qe(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new x(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new E(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new cr(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new lr(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new x(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new E(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new E(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new x(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new x(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new dr(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new x(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new E(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new H(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new x(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new H(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new qe(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new x(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new x(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new H(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new H(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new H(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new ur(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new x(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new x(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new x(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new E(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new x(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new x(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new E(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new x(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new x(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new E(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new E(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}a([p()],v.prototype,"addeddate",null);a([p()],v.prototype,"audio_codec",null);a([p()],v.prototype,"audio_sample_rate",null);a([p()],v.prototype,"avg_rating",null);a([p()],v.prototype,"collection",null);a([p()],v.prototype,"collections_raw",null);a([p()],v.prototype,"collection_size",null);a([p()],v.prototype,"contributor",null);a([p()],v.prototype,"coverage",null);a([p()],v.prototype,"creator",null);a([p()],v.prototype,"collection_layout",null);a([p()],v.prototype,"date",null);a([p()],v.prototype,"description",null);a([p()],v.prototype,"downloads",null);a([p()],v.prototype,"duration",null);a([p()],v.prototype,"external_identifier",null);a([p()],v.prototype,"files_count",null);a([p()],v.prototype,"indexdate",null);a([p()],v.prototype,"isbn",null);a([p()],v.prototype,"issue",null);a([p()],v.prototype,"item_count",null);a([p()],v.prototype,"item_size",null);a([p()],v.prototype,"language",null);a([p()],v.prototype,"length",null);a([p()],v.prototype,"lineage",null);a([p()],v.prototype,"month",null);a([p()],v.prototype,"mediatype",null);a([p()],v.prototype,"noindex",null);a([p()],v.prototype,"notes",null);a([p()],v.prototype,"num_favorites",null);a([p()],v.prototype,"num_reviews",null);a([p()],v.prototype,"openlibrary_edition",null);a([p()],v.prototype,"openlibrary_work",null);a([p()],v.prototype,"page_progression",null);a([p()],v.prototype,"partner",null);a([p()],v.prototype,"ppi",null);a([p()],v.prototype,"publicdate",null);a([p()],v.prototype,"publisher",null);a([p()],v.prototype,"reviewdate",null);a([p()],v.prototype,"runtime",null);a([p()],v.prototype,"scanner",null);a([p()],v.prototype,"source",null);a([p()],v.prototype,"start_localtime",null);a([p()],v.prototype,"start_time",null);a([p()],v.prototype,"stop_time",null);a([p()],v.prototype,"subject",null);a([p()],v.prototype,"taper",null);a([p()],v.prototype,"title",null);a([p()],v.prototype,"transferer",null);a([p()],v.prototype,"track",null);a([p()],v.prototype,"type",null);a([p()],v.prototype,"uploader",null);a([p()],v.prototype,"utc_offset",null);a([p()],v.prototype,"venue",null);a([p()],v.prototype,"volume",null);a([p()],v.prototype,"week",null);a([p()],v.prototype,"year",null);class ne{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Ce.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Ee.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?U.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?U.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?U.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}a([p()],ne.prototype,"size",null);a([p()],ne.prototype,"length",null);a([p()],ne.prototype,"height",null);a([p()],ne.prototype,"width",null);a([p()],ne.prototype,"track",null);class Be{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?ge.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ge.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?U.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}a([p()],Be.prototype,"reviewdate",null);a([p()],Be.prototype,"createdate",null);a([p()],Be.prototype,"stars",null);class gi{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new ne(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(r=>new Be(r))}}var q;(function(o){o.networkError="MetadataService.NetworkError",o.itemNotFound="MetadataService.ItemNotFound",o.decodingError="MetadataService.DecodingError",o.searchEngineError="MetadataService.SearchEngineError"})(q||(q={}));class lt extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class pr{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const i=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const n=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,n)}catch(n){const d=n instanceof Error?n.message:typeof n=="string"?n:"Unknown error";return this.getErrorResult(q.networkError,d)}try{const n=await s.json(),d=n.error;if(d){const l=n.forensics;return this.getErrorResult(q.searchEngineError,d,l)}else return{success:n}}catch(n){const d=n instanceof Error?n.message:typeof n=="string"?n:"Unknown error";return this.getErrorResult(q.decodingError,d)}}getErrorResult(e,t,i){return{error:new lt(e,t,i)}}}class dt{constructor(e){this.backend=e}async fetchMetadata(e){var t;const i=await this.backend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new lt(q.itemNotFound)}:{success:new gi(i.success)}}async fetchMetadataValue(e,t){var i;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((i=r.success)===null||i===void 0?void 0:i.result)===void 0?{error:new lt(q.itemNotFound)}:{success:r.success.result}}}dt.default=new dt(new pr);const fr=h`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`;class mr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return fr}}customElements.define("ia-icon-ellipses",mr);const gr=b`42px`,Ke=b`var(--menuWidth, 320px)`,Xt=b`var(--animationTiming, 200ms)`,vr=b`
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${Xt} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${Ke};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${Ke} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    cursor: pointer;
  }

  header {
    margin: 0 0 0.5rem 0;
  }

  header * {
    margin: 0;
    display: inline-block;
  }
  header button {
    cursor: pointer;
  }

  header.with-secondary-action .details {
    width: 80%;
  }

  header .details {
    font-weight: bold;
    width: 88%;
  }

  header .custom-action > *,
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    --iconWidth: var(--menuSliderHeaderIconWidth);
    --iconHeight: var(--menuSliderHeaderIconHeight);
  }

  header .custom-action,
  button.close {
    position: absolute;
  }
  button.close {
    right: 0.5rem;
  }

  button.close * {
    float: right;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${gr};
    z-index: 1;
    transform: translateX(calc(${Ke} * -1));
    transition: transform ${Xt} ease-out;
    background: var(--activeButtonBg);
    border-right: 0.2rem solid;
    border-color: var(--subpanelRightBorderColor);
    padding: 0.5rem 0 0 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .open {
    transform: translateX(0);
  }

  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--menuSliderBg);
  }
  .menu-list li {
    margin-bottom: 0.2rem;
  }

  .content > section {
    overflow: auto;
    overscroll-behavior: contain;
  }
`,br=h`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`;class wr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return br}}customElements.define("ia-icon-collapse-sidebar",wr);const yr=b`
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: inline-flex;
    width: 100%;
    padding: 0;
    font-size: 1.6rem;
    text-align: left;
    background: transparent;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  button.menu-item {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .label {
    display: var(--menuButtonLabelDisplay, none);
    padding: 0;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: left;
    vertical-align: middle;
    margin-left: 1rem;
  }

  .menu-details {
    color: var(--primaryTextColor);
    display: inline-block;
    margin-left: 0.5rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  .menu-item > .icon {
    position: relative;
    display: inline-flex;
    z-index: 2;
    min-width: 4.2rem;
    max-width: 4.2rem;
    height: 4.2rem;
    vertical-align: middle;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .menu-item.selected .icon {
    background-color: var(--activeButtonBg);
    border-radius: 1rem 0 0 1rem;
  }

  .icon .fill-color {
    fill: #999;
  }

  .icon.active .fill-color {
    fill: #fff;
  }
`;let O=class extends A{constructor(){super(...arguments),this.icon="",this.href="",this.label="",this.menuDetails="",this.buttonId="",this.selected=!1,this.followable=!1}static get styles(){return yr}onClick(e){e.preventDefault(),this.dispatchMenuTypeSelectedEvent()}dispatchMenuTypeSelectedEvent(){this.dispatchEvent(new CustomEvent("menuTypeSelected",{bubbles:!0,composed:!0,detail:{id:this.buttonId}}))}get buttonClass(){return this.selected?"selected":""}get iconClass(){return this.selected?"active":""}get menuItem(){return h`
      <span class="icon ${this.iconClass}"> ${this.icon} </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `}get linkButton(){return h`
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable?void 0:this.onClick}
        >${this.menuItem}</a
      >
    `}get clickButton(){return h`
      <button class="menu-item ${this.buttonClass}" @click=${this.onClick}>
        ${this.menuItem}
      </button>
    `}render(){return this.href?this.linkButton:this.clickButton}};a([f({type:String})],O.prototype,"icon",void 0);a([f({type:String})],O.prototype,"href",void 0);a([f({type:String})],O.prototype,"label",void 0);a([f({type:String})],O.prototype,"menuDetails",void 0);a([f({type:String})],O.prototype,"buttonId",void 0);a([f({type:Boolean})],O.prototype,"selected",void 0);a([f({type:Boolean})],O.prototype,"followable",void 0);O=a([L("menu-button")],O);const $r={closeDrawer:"menuSliderClosed"};let F=class extends A{constructor(){super(...arguments),this.menus=[],this.open=!1,this.manuallyHandleClose=!1,this.selectedMenu="",this.selectedMenuAction=y,this.animateMenuOpen=!1}static get styles(){return vr}updated(){const{actionButton:e}=this.selectedMenuDetails||{};e!==this.selectedMenuAction&&(this.selectedMenuAction=e||y)}setSelectedMenu({detail:e}){const{id:t}=e;this.selectedMenu=this.selectedMenu===t?"":t;const{actionButton:i}=this.selectedMenuDetails||{};this.selectedMenuAction=i||y}closeMenu(){this.manuallyHandleClose||(this.open=!1);const{closeDrawer:e}=$r,t=new CustomEvent(e,{detail:this.selectedMenuDetails});this.dispatchEvent(t)}get selectedMenuDetails(){return this.menus.find(t=>t.id===this.selectedMenu)}get selectedMenuComponent(){const e=this.selectedMenuDetails;return e&&(e!=null&&e.component)?e.component:h``}get sliderDetailsClass(){const e=this.animateMenuOpen?"animate":"",t=this.open?"open":"";return`${e} ${t}`}get selectedMenuClass(){return this.selectedMenu?"open":""}get menuItems(){return this.menus.map(e=>h`
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${e.icon}
            .label=${e.label}
            .menuDetails=${e.menuDetails}
            .buttonId=${e.id}
            .selected=${e.id===this.selectedMenu}
            .followable=${e.followable}
            .href=${e.href}
          ></menu-button>
        </li>
      `)}get renderMenuHeader(){const{label:e="",menuDetails:t=""}=this.selectedMenuDetails||{},i=this.selectedMenuAction?"with-secondary-action":"",r=this.selectedMenuAction?h`<span class="custom-action">${this.selectedMenuAction}</span>`:y;return h`
      <header class="${i}">
        <div class="details">
          <h3>${e}</h3>
          <span class="extra-details">${t}</span>
        </div>
        ${r} ${this.closeButton}
      </header>
    `}get closeButton(){return h`
      <button
        class="close"
        aria-label="Close this menu"
        @click=${this.closeMenu}
      >
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `}render(){return h`
      <div class="main">
        <div class="menu ${this.sliderDetailsClass}">
          ${this.closeButton}
          <ul class="menu-list">
            ${this.menuItems}
          </ul>
          <div
            class="content ${this.selectedMenuClass}"
            @menuTypeSelected=${this.setSelectedMenu}
          >
            ${this.renderMenuHeader}
            <section>
              <div class="selected-menu">${this.selectedMenuComponent}</div>
            </section>
          </div>
        </div>
      </div>
    `}};a([f({type:Array})],F.prototype,"menus",void 0);a([f({type:Boolean})],F.prototype,"open",void 0);a([f({type:Boolean})],F.prototype,"manuallyHandleClose",void 0);a([f({type:String})],F.prototype,"selectedMenu",void 0);a([f({type:Object})],F.prototype,"selectedMenuAction",void 0);a([f({type:Boolean})],F.prototype,"animateMenuOpen",void 0);F=a([L("ia-menu-slider")],F);let ct=class extends A{constructor(){super(...arguments),this.loaderMessage=""}get bookIconSvg(){return Ft`
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `}get icon(){return this.bookIconSvg}get loader(){return Ft`
    <svg
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="item-loading"
    >
      <title id="item-loading">Currently loading viewer.</title>
      <desc>Please wait while we load theater.</desc>
      <g fill="#333" fill-rule="evenodd" class="book-icon">
        ${this.icon}
        <path
          class="ring"
          d="m17.8618849 11.6970233c18.5864635-15.59603144 45.6875867-15.59603102 64.2740497.000001 1.9271446 1.6170806 2.1785128 4.4902567.5614466 6.4174186-1.6170661 1.9271618-4.4902166 2.1785323-6.4173612.5614517-15.1996922-12.75416882-37.3625282-12.75416916-52.5622206-.000001-15.19969387 12.7541707-19.04823077 34.5805019-9.1273354 51.7641499 9.9208955 17.183646 30.7471499 24.7638499 49.3923323 17.9774983 18.6451823-6.7863521 29.7266014-25.9801026 26.2811129-45.5206248-.436848-2.4775114 1.2174186-4.8400696 3.6949079-5.2769215 2.4774893-.4368518 4.8400264 1.2174296 5.2768744 3.694941 4.2132065 23.8945096-9.3373563 47.3649806-32.137028 55.6634567-22.799672 8.2984758-48.2663986-.9707372-60.39785211-21.9832155-12.1314534-21.012481-7.42539173-47.7021198 11.16107351-63.2981544z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
    `}render(){const e=this.loaderMessage?h`<h2>${this.loaderMessage}</h2>`:y;return h`
      <div class="place-holder">
        ${e} ${this.loader}
        <h3>Loading viewer</h3>
      </div>
    `}static get styles(){return b`
      .place-holder {
        width: 30%;
        margin: auto;
        text-align: center;
        color: var(--primaryTextColor);
      }

      .place-holder {
        position: relative;
      }

      .place-holder svg {
        display: block;
        width: 60%;
        max-width: 100px;
        height: auto;
        margin: auto;
      }

      svg * {
        fill: var(--primaryTextColor);
      }

      svg .ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
        display: block; // transform won't work on inline style
      }

      @keyframes rotate {
        0% {
          -moz-transform: rotate(-360deg);
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
    `}};a([f({type:String})],ct.prototype,"loaderMessage",void 0);ct=a([L("ia-itemnav-loader")],ct);let ht=class extends A{constructor(){super(...arguments),this.identifier=""}emitLoaded(){this.dispatchEvent(new CustomEvent("loadingStateUpdated",{detail:{loaded:!0}}))}updated(e){e.has("identifier")&&this.emitLoaded()}get downloadUrl(){return`/download/${this.identifier}`}render(){return h`
      <section>
        <h2>THERE IS NO PREVIEW AVAILABLE FOR THIS ITEM</h2>
        <p>
          This item does not appear to have any files that can be experienced on
          Archive.org. <br />
          Please download files in this item to interact with them on your
          computer.
        </p>
        <a href=${this.downloadUrl}>Show all files</a>
      </section>
    `}static get styles(){return b`
      :host {
        color: var(--primaryTextColor, #fff);
        text-align: center;
      }
      section {
        width: 100%;
        margin: 5%;
        padding: 0 5%;
      }
      p {
        font-size: 1.4rem;
      }
      a {
        color: var(--primaryTextColor, #fff);
        background-color: rgb(25, 72, 128);
        min-height: 35px;
        cursor: pointer;
        line-height: normal;
        border-radius: 0.4rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1.4rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        padding: 0.85rem 1.2rem;
        border: 1px solid rgb(197, 209, 223);
        white-space: nowrap;
        appearance: auto;
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
      }
    `}};a([f({type:String})],ht.prototype,"identifier",void 0);ht=a([L("ia-no-theater-available")],ht);let S=class extends A{constructor(){super(...arguments),this.viewAvailable=!0,this.baseHost="archive.org",this.signedIn=!1,this.menuContents=[],this.menuShortcuts=[],this.viewportInFullscreen=null,this.menuOpened=!1,this.loaded=!1,this.openMenuState="shift"}disconnectedCallback(){super.disconnectedCallback(),this.removeResizeObserver()}updated(e){if(e.has("sharedObserver")){const t=e.get("sharedObserver");t==null||t.removeObserver(this.resizeObserverConfig),this.setResizeObserver()}}handleResize(e){const{width:t}=e.contentRect;if(t<=600){this.openMenuState="overlay";return}this.openMenuState="shift"}setResizeObserver(){var e,t;(e=this.sharedObserver)===null||e===void 0||e.addObserver(this.resizeObserverConfig),(t=this.sharedObserver)===null||t===void 0||t.addObserver({target:this.headerSlot,handler:{handleResize:({contentRect:i})=>{i.height&&this.requestUpdate()}}})}removeResizeObserver(){var e;(e=this.sharedObserver)===null||e===void 0||e.removeObserver(this.resizeObserverConfig)}get resizeObserverConfig(){return{handler:this,target:this.frame}}get loaderTitle(){return this.viewportInFullscreen?"Internet Archive":""}get loadingArea(){return h`
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader
            .loaderMessage=${this.loaderTitle}
          ></ia-itemnav-loader>
        </div>
      </div>
    `}slotChange(e,t){var i;const r=(i=e.target.assignedNodes())===null||i===void 0?void 0:i[0];this.dispatchEvent(new CustomEvent("slotChange",{detail:{slot:r,type:t}})),this.requestUpdate()}render(){var e,t;const i=this.loaded?"":"hidden",r=((t=(e=this.headerSlot)===null||e===void 0?void 0:e.assignedNodes()[0])===null||t===void 0?void 0:t.offsetHeight)||0;return h`
      <div id="frame" class=${this.menuClass}>
        <slot
          name="header"
          style=${`height: ${r}px`}
          @slotchange=${s=>this.slotChange(s,"header")}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu?this.renderSideMenu:y}
          <div id="reader" class=${i}>
            ${this.renderViewport}
          </div>
          ${this.loaded?y:this.loadingArea}
        </div>
      </div>
    `}get noTheaterView(){var e,t;return h`<ia-no-theater-available
      .identifier=${(t=(e=this.item)===null||e===void 0?void 0:e.metadata)===null||t===void 0?void 0:t.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`}get renderViewport(){if(!this.viewAvailable)return this.noTheaterView;const e=this.loaded?"opacity: 1;":"opacity: 0;";return h`
      <div slot="main" style=${e}>
        <slot
          name="main"
          @slotchange=${t=>this.slotChange(t,"main")}
        ></slot>
      </div>
    `}loadingStateUpdated(e){const{loaded:t}=e.detail;this.loaded=t??!1}manageViewportFullscreen(e){const t=!!e.detail.isFullScreen;this.viewportInFullscreen=t||null;const i=new CustomEvent("fullscreenToggled",{detail:e.detail});this.dispatchEvent(i)}get shouldRenderMenu(){var e;return!!(!((e=this.menuContents)===null||e===void 0)&&e.length)}toggleMenu(){this.menuOpened=!this.menuOpened}closeMenu(){this.menuOpened=!1}setOpenMenu(e){const{id:t}=e.detail;this.openMenu=t!==this.openMenu?t:void 0}setMenuContents(e){const t=[...e.detail];this.menuContents=t}setMenuShortcuts(e){this.menuShortcuts=[...e.detail]}manageSideMenuEvents(e){const{menuId:t,action:i}=e.detail;t&&(i==="open"?this.openShortcut(t):i==="toggle"&&(this.openMenu=t,this.toggleMenu()))}get menuToggleButton(){return h`
      <button
        class="toggle-menu"
        @click=${this.toggleMenu}
        title="Toggle theater side panels"
      >
        <div>
          <ia-icon-ellipses
            style="width: var(--iconWidth); height: var(--iconHeight);"
          ></ia-icon-ellipses>
        </div>
      </button>
    `}get selectedMenuId(){return this.openMenu||""}get renderSideMenu(){const e=this.menuOpened?"":"hidden";return h`
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${e}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.selectedMenuId}
            @menuTypeSelected=${this.setOpenMenu}
            @menuSliderClosed=${this.closeMenu}
            manuallyHandleClose
            open
          ></ia-menu-slider>
        </div>
      </nav>
    `}openShortcut(e=""){this.openMenu=e,this.menuOpened=!0}get shortcuts(){const e=this.menuShortcuts.map(({icon:t,id:i})=>i==="fullscreen"?h`${t}`:h`
        <button class="shortcut ${i}" @click="${()=>this.openShortcut(i)}">
          ${t}
        </button>
      `);return h`<div class="shortcuts">${e}</div>`}get menuClass(){var e,t;const i=((e=this.menuContents)===null||e===void 0?void 0:e.length)||((t=this.menuShortcuts)===null||t===void 0?void 0:t.length),r=this.menuOpened&&i?"open":"",s=this.viewportInFullscreen?"fullscreen":"";return`${r} ${s} ${this.openMenuState}`}static get styles(){const e=b`var(--menuWidth, 320px)`,t=b`var(--animationTiming, 200ms)`,i=b`transform ${t} ease-out`,r=b`var(--theaterMenuMargin, 42px)`,s=b`var(--theaterBgColor, #000)`;return b`
      :host,
      #frame,
      .menu-and-reader {
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      #frame,
      .loading-area,
      .loading-view {
        min-height: inherit;
        height: inherit;
      }

      slot {
        display: block;
        width: 100%;
      }

      slot * {
        display: block;
        height: inherit;
      }

      #frame {
        background-color: ${s};
        color-scheme: dark;
        display: flex;
        flex-direction: column;
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      .loading-view {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-area {
        width: 100%;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        display: none !important;
      }

      button {
        cursor: pointer;
        padding: 0;
        border: 0;
      }

      .menu-and-reader {
        position: relative;
        display: flex;
        flex: 1;
      }

      nav button {
        background: none;
      }

      nav .minimized {
        background: rgba(0, 0, 0, 0.7);
        padding-top: 6px;
        position: absolute;
        width: ${r};
        z-index: 2;
        left: 0;
        border-bottom-right-radius: 5%;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin-bottom: 0.2rem;
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: ${r};
        height: ${r};
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
      }

      ia-icon-ellipses {
        width: var(--iconWidth);
        height: var(--iconHeight);
      }

      #menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
        transform: translateX(-${e});
        width: ${e};
        transform: translateX(calc(${e} * -1));
        transition: ${i};
      }

      #reader {
        position: relative;
        z-index: 1;
        transform: translateX(0);
        width: 100%;
        display: flex;
      }

      #reader > * {
        width: 100%;
        display: flex;
        flex: 1;
      }

      .open.overlay #reader {
        transition: none;
      }

      .open #menu {
        width: ${e};
        transform: translateX(0);
        transition: ${i};
      }

      .open.shift #reader {
        width: calc(100% - ${e});
        margin-left: ${e};
        transition: ${i};
      }
    `}};a([f({type:Object,converter:o=>o&&typeof o=="string"?new gi(JSON.parse(atob(o))):o})],S.prototype,"item",void 0);a([f({type:Boolean,reflect:!0})],S.prototype,"viewAvailable",void 0);a([f({type:String})],S.prototype,"baseHost",void 0);a([f({type:Boolean})],S.prototype,"signedIn",void 0);a([f({type:Array})],S.prototype,"menuContents",void 0);a([f({type:Array})],S.prototype,"menuShortcuts",void 0);a([f({type:Boolean,reflect:!0,attribute:!0})],S.prototype,"viewportInFullscreen",void 0);a([f({type:Boolean,reflect:!0})],S.prototype,"menuOpened",void 0);a([f({type:String,reflect:!0})],S.prototype,"openMenu",void 0);a([f({attribute:!1})],S.prototype,"modal",void 0);a([f({attribute:!1})],S.prototype,"sharedObserver",void 0);a([f({type:Boolean,reflect:!0,attribute:!0})],S.prototype,"loaded",void 0);a([qi()],S.prototype,"openMenuState",void 0);a([se("#frame")],S.prototype,"frame",void 0);a([se('slot[name="header"]')],S.prototype,"headerSlot",void 0);a([se('slot[name="main"]')],S.prototype,"mainSlot",void 0);S=a([L("iaux-item-navigator")],S);const _r=h`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="shareTitleID shareDescID"
>
  <title id="shareTitleID">Share icon</title>
  <desc id="shareDescID">A square with an arrow arcing out from the center of the square</desc>
  <g class="fill-color">
    <path d="M70.6784759,10 L70.6784759,21.3240186 C64.5020053,21.66334 58.9104278,22.5826126 53.9037433,24.0818363 C48.8970588,25.5810601 44.8495989,27.4085163 41.7613636,29.5642049 C38.6731283,31.7198935 35.9982175,34.0552229 33.736631,36.5701929 C31.4750446,39.085163 29.8217469,41.5657574 28.776738,44.011976 C27.7317291,46.4581947 26.9173351,48.6848525 26.3335561,50.6919494 C25.7497772,52.6990464 25.4088681,54.3324462 25.3108289,55.592149 L25.2372995,57.4085163 C29.0296346,54.1661122 33.1751337,51.5524507 37.6737968,49.5675316 C42.1724599,47.5826126 46.2934492,46.3118208 50.0367647,45.7551564 C53.7800802,45.1984919 57.2571301,44.8713684 60.4679144,44.7737858 C63.6786988,44.6762031 66.1831551,44.7726769 67.9812834,45.0632069 L70.6784759,45.499002 L70.6784759,57.4051896 L100,33.3765802 L70.6784759,10 Z M76.4438503,62.4883566 L82.8609626,57.1157685 C82.9099822,57.0669772 82.9946524,57.0303837 83.1149733,57.005988 C83.2352941,56.9815924 83.4536542,56.9571967 83.7700535,56.9328011 C84.0864528,56.9084054 84.3905971,56.9449989 84.6824866,57.0425815 C84.9743761,57.1401641 85.217246,57.2854291 85.4110963,57.4783766 C85.6049465,57.671324 85.7263815,57.8409847 85.7754011,57.9873586 L85.8489305,58.2035928 L85.8489305,90 L0,90 L0,17.910845 L43.1784759,17.910845 C43.2765152,17.9596363 43.410205,18.0317143 43.5795455,18.1270792 C43.7488859,18.222444 43.9438503,18.4519849 44.1644385,18.8157019 C44.3850267,19.1794189 44.469697,19.5542249 44.4184492,19.9401198 C44.4184492,20.2794411 44.3092692,20.582169 44.0909091,20.8483034 C43.872549,21.1144378 43.6664439,21.3206919 43.4725936,21.4670659 L43.1818182,21.6134398 C40.557041,23.06609 38.2954545,24.396762 36.3970588,25.6054558 L30.7820856,29.8170326 L11.5274064,29.8170326 L11.5274064,78.1669993 L74.1811497,78.1669993 L74.1811497,65.5355955 C74.1811497,65.1009093 74.3995098,64.6407186 74.8362299,64.1550233 L76.4438503,62.4883566 Z" id="Shape"></path>
  </g>
</svg>
`;class xr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return _r}}customElements.define("ia-icon-share",xr);const Ar=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="twitterTitleID twitterDescID">
  <title id="twitterTitleID">Twitter icon</title>
  <desc id="twitterDescID">The Twitter logo, a cartoon bird</desc>
  <path d="m31.5297453 8.76273313c-.3135031.40766104-.7447036.83083673-1.2936015 1.26952707-.5488979.4386904-.9169698.7837578-1.1042157 1.0352022.1562166 2.319709-.1417719 4.5297454-.8939653 6.6301092-.7521935 2.1003638-1.8023754 3.9182538-3.1505457 5.45367-1.3481704 1.5354162-2.9627648 2.8284828-4.8437835 3.8791996-1.8810186 1.0507169-3.8321207 1.7483416-5.8533062 2.092874s-4.1215493.2894286-6.30109136-.1653114c-2.17954205-.45474-4.2092874-1.3401455-6.08923604-2.6562165 2.72737.4697196 5.67408517-.2514445 8.8401455-2.1634924-3.0719024-.7521935-4.88979241-2.2881447-5.45367-4.6078537 1.12882516.0631287 1.86550396.0631287 2.21003638 0-2.91568586-1.2850417-4.38904344-3.3693558-4.42007276-6.2529424.21934517.0310293.53284828.1487267.94050931.3530922s.78375775.3060133 1.12829017.3049433c-.81532206-.7211641-1.41076396-1.9045581-1.7863257-3.5501819-.37556173-1.64562376-.17173122-3.17355015.61149155-4.58377912 1.81789001 1.88101862 3.6908838 3.36989086 5.61898138 4.46661672 1.92809757 1.0967259 4.22426707 1.7547614 6.88850847 1.9741066-.2503745-1.1908838-.1722662-2.32719882.2343248-3.40894502.4065911-1.0817462 1.0416221-1.93612241 1.9050931-2.56312861.863471-.62700621 1.8114702-1.0817462 2.8439975-1.36421999 1.0325272-.28247378 2.0827091-.27444896 3.1505456.02407447s1.9767815.87042585 2.726835 1.71570726c1.3791997-.37663172 2.6802911-.87845068 3.9032742-1.50545688-.0310293.37663171-.1407019.74470361-.3290178 1.1042157-.1883158.35951209-.3530922.62593623-.4943291.79927242s-.3841216.4317355-.728654.77519795c-.3445324.34346244-.5638776.57832227-.6580355.70457949.2193452-.09415792.6895998-.23539482 1.410764-.42371067.7211641-.18831586 1.2069334-.39214638 1.4573079-.61149155 0 .44350524-.1567516.86668093-.4702547 1.27434196z" class="fill-color" />
</svg>
`;class kr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Ar}}customElements.define("ia-icon-twitter",kr);const Sr=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="facebookTitleID facebookDescID">
  <title id="facebookTitleID">Facebook icon</title>
  <desc id="facebookDescID">A lowercase f</desc>
  <path d="m30.91057 19.2442068.2670004-5.3339402h-5.7329237c-.0890001-3.4962895.25183-5.42243459 1.0224903-5.77843514.3560005-.17800028.8004955-.28925046 1.333485-.33375053s1.0442346-.0520853 1.5337353-.02275571c.4895008.02932959 1.045246.01466479 1.6672356-.04399439.0890001-1.59997977.1335002-3.24445961.1335002-4.93343953-2.1633102-.20732987-3.6742898-.28115953-4.5329389-.22148898-2.8146294.17800028-4.7847688 1.25965538-5.9104183 3.2449653-.1780003.3256596-.3261653.68873971-.444495 1.08924034-.1183298.40050062-.2144095.76358074-.2882391 1.08924034-.0738297.32565959-.125915.7848194-.1562559 1.37747942-.030341.59266002-.052591 1.04474028-.0667501 1.35624078-.0141592.3115005-.0217444.8449956-.0227558 1.6004854v1.5777298h-3.8229605v5.3339401h3.8669549v14.622824h5.8224296c0-.3560006-.0146648-1.6819003-.0439944-3.9776994-.0293296-2.295799-.0515796-4.2957737-.0667501-5.9999241s-.0075853-3.2525506.0227557-4.6452005h5.4219289z" class="fill-color" />
</svg>
`;class Mr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Sr}}customElements.define("ia-icon-facebook",Mr);const Cr=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tumblrTitleID tumblrDescID">
  <title id="tumblrTitleID">Tumblr icon</title>
  <desc id="tumblrDescID">A lowercase letter t</desc>
  <path d="m8.50321407 8.54544475v5.32088575c.15641786.0310693.6819176.0310693 1.57649923 0 .8945816-.0310693 1.3574071.0160703 1.3884764.1414189.0942792 1.5695354.1333837 3.2253149.1173133 4.9673385-.0160703 1.7420236-.0316049 3.3426283-.0466039 4.8018141s.2046288 2.824628.6588835 4.0963267c.4542546 1.2716986 1.1999178 2.2209194 2.2369897 2.8476622 1.2556283.784232 2.9896167 1.207953 5.2019653 1.271163 2.2123485.0632099 4.1659648-.2506972 5.8608487-.9417213-.0310693-.3449764-.0230341-1.4045467.0241055-3.1787109.0471397-1.7741643-.0080351-2.75499-.1655244-2.9424772-3.5472571 1.0360005-5.697467.6904885-6.4506298-1.0365361-.7220934-1.6638147-.8635123-4.9909084-.4242566-9.981281v-.046604h6.7318605v-5.32088568h-6.7318605v-6.54383772h-4.0497228c-.2828378 1.28669763-.6122795 2.35376743-.9883252 3.20120941-.3760457.84744199-.98029 1.60060471-1.812733 2.25948817-.832443.65888347-1.87594303 1.01993018-3.1305 1.08314014z" class="fill-color" />
</svg>
`;class Er extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Cr}}customElements.define("ia-icon-tumblr",Er);const Lr=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pinterestTitleID pinterestDescID">
  <title id="pinterestTitleID">Pinterest icon</title>
  <desc id="pinterestDescID">A stylized letter p</desc>
  <path d="m11.9051049 30.5873434.653491-1.0742755.4207845-.839975c.2805229-.591861.5371377-1.2533214.7698443-1.9843813.2327065-.7310599.4659444-1.6029125.6997135-2.6155579.2337692-1.0126455.4128151-1.752206.5371377-2.2186817.0308151.030815.0775689.0855382.1402615.1641697.0626927.0786314.1094465.1333547.1402615.1641697.1243227.1870153.2178304.311338.280523.372968 1.1210293.964829 2.3817888 1.4631823 3.7822785 1.4950599 1.4939973 0 2.8790795-.3426843 4.1552465-1.0280529 2.1166733-1.1826593 3.6733633-3.1128487 4.6700699-5.7905679.4048457-1.1518444.6848374-2.5996192.8399751-4.3433245.1243226-1.587505-.0781002-3.0974411-.6072685-4.5298084-.903199-2.36638128-2.5528653-4.20306294-4.948999-5.51004497-1.276167-.65349101-2.5990879-1.05833667-3.9687625-1.21453696-1.525875-.21783034-3.1293188-.17107651-4.8103315.14026149-2.7701643.52916833-5.02709913 1.743174-6.77080442 3.64201699-1.99235065 2.14748836-2.98852598 4.62225355-2.98852598 7.42429545 0 2.9571797.9494215 5.0584455 2.84826449 6.3037975l.83997504.4207845c.12432268 0 .22526845.0154075.3028373.0462225s.1551377.0074381.23270656-.0701308c.07756885-.0775688.13229208-.1243226.16416969-.1402614s.07066204-.0860696.11635328-.2103923c.04569124-.1243226.07703756-.2098609.09403895-.2566147.01700139-.0467539.04834771-.1476996.09403895-.3028373s.06906816-.2486454.07013074-.280523l.14026149-.5132295c.06269263-.311338.09403895-.5291684.09403895-.653491-.03081502-.1243227-.12432268-.2799917-.28052297-.467007-.15620029-.1870154-.23376915-.2959305-.23270656-.3267455-.62267599-.8096914-.9494215-1.7904592-.98023652-2.9423035-.03081502-1.55669.28052297-2.9731185.93401399-4.24928547 1.18265932-2.45882635 3.17501002-3.93741618 5.97705192-4.43576949 1.6183201-.311338 3.1356943-.25661476 4.5521228.16416969 1.4164285.42078446 2.5135496 1.09765239 3.2913633 2.03060379.8405063 1.02752164 1.3229208 2.28828114 1.4472435 3.78227848.1243227 1.4004897-.0313463 2.9725872-.467007 4.7162925-.3740306 1.3696746-.9186065 2.5528653-1.6337275 3.5495719-.9967066 1.245352-2.0863896 1.8834355-3.269049 1.9142505-1.7118277.0626926-2.7547568-.6375522-3.1287874-2.1007345-.0935077-.4664757 0-1.2134744.2805229-2.240996.7469987-2.5842117 1.1359055-3.9384788 1.1667206-4.0628015.1870153-1.0275216.2024228-1.7904591.0462225-2.2888124-.1870153-.65349104-.5759222-1.15928246-1.1667205-1.51737429-.5907984-.35809182-1.2756357-.39687625-2.054512-.11635327-1.1826594.43566067-1.9610044 1.40048968-2.335035 2.89448706-.311338 1.306982-.2491767 2.6299028.186484 3.9687625 0 .0626926.0313463.1402615.094039.2327065.0626926.0924451.0940389.1700139.0940389.2327066 0 .0935076-.0313463.2491766-.0940389.467007-.0626927.2178303-.094039.3580918-.094039.4207844-.0935076.4356607-.3038999 1.3308903-.6311767 2.6856887-.3272768 1.3547985-.5838915 2.3897582-.7698443 3.1048793-.7778136 3.2068876-1.12049796 5.5881451-1.02805289 7.1437725l.37296809 2.7558194c.653491-.591861 1.2294131-1.2299445 1.7277664-1.9142505z" class="fill-color" />
</svg>
`;class Tr extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Lr}}customElements.define("ia-icon-pinterest",Tr);const Ir=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;class Br extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Ir}}customElements.define("ia-icon-email",Br);const zr=h`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="linkTitleID linkDescID">
  <title id="linkTitleID">Link icon</title>
  <desc id="linkDescID">Two chain links linked together</desc>
  <path d="m7.80511706 12.3659763c1.2669254-2.2579539 4.09819784-2.9949938 6.41200864-1.7733458l.2295791.12871 1.6067188.9559859 3.5467013-6.31849361c1.2682451-2.26030597 4.104098-2.99652769 6.4192376-1.76952182l.2223501.12488594 3.2168204 1.91103915c2.2770002 1.3527136 3.1866331 4.21502324 2.0564431 6.51290984l-.1198433.2278304-5.2002499 9.2680474c-1.2669254 2.2579539-4.0981978 2.9949938-6.4120086 1.7733458l-.2295791-.12871-1.6096554-.9558482-3.5437647 6.3183559c-1.2682451 2.260306-4.104098 2.9965277-6.41923761 1.7695218l-.22235013-.1248859-3.21682032-1.9110392c-2.27700024-1.3527136-3.18663314-4.2150232-2.05644312-6.5129098l.11984332-.2278304zm13.93955474-5.73311741-3.563271 6.35055051c1.889633 1.4530595 2.5776248 4.0429866 1.5410255 6.156875l-.1223014.2328355-.4183304.7430134 1.6096554.9558483c1.1431442.6791157 2.5155496.3977368 3.1667361-.5628389l.0921501-.1491451 5.2002498-9.2680474c.5752467-1.0252226.2110342-2.4011579-.8559335-3.14755806l-.1742742-.11247814-3.2168203-1.91103915c-1.1402863-.67741793-2.5086889-.39913772-3.1618387.55564729zm-11.79500786 7.00714351-5.20024982 9.2680474c-.57524673 1.0252226-.21103426 2.4011579.85593348 3.1475581l.17427416.1124781 3.21682032 1.9110392c1.14028632.6774179 2.50868892.3991377 3.16183872-.5556473l.0970474-.1563368 3.5622708-6.3513198c-1.8888875-1.4532134-2.5764504-4.042623-1.5400057-6.1561456l.1222818-.2327956.4153938-.7428758-1.6067188-.9559859c-1.1431442-.6791157-2.5155496-.3977368-3.1667361.5628389zm6.97653866 1.5796652-.3817806.6812386c-.5117123.9119895-.2800268 2.1014993.528439 2.8785267l.382717-.6803391c.5119098-.9123415.2798478-2.1024176-.5293754-2.8794262z" class="fill-color" />
</svg>
`;class Or extends A{static get styles(){return b`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return zr}}customElements.define("ia-icon-link",Or);const Jt=o=>{const e=o.currentTarget,t=e.querySelector("textarea"),i=e.querySelector("small");t.select(),document.execCommand("copy"),t.blur(),i.classList.add("visible"),clearTimeout(i.timeout),i.timeout=setTimeout(()=>i.classList.remove("visible"),4e3)},Hr=h`<ia-icon-share
  style="width: var(--iconWidth); height: var(--iconHeight);"
></ia-icon-share>`;let T=class extends A{constructor(){super(...arguments),this.baseHost="archive.org",this.creator="",this.description="",this.embedOptionsVisible=!1,this.identifier="",this.sharingOptions=[],this.type="",this.renderHeader=!1,this.fileSubPrefix=""}updated(e){e.has("sharingOptions")&&!this.sharingOptions.length&&this.loadProviders()}loadProviders(){let e=`https://${this.baseHost}/details/${this.identifier}`;this.fileSubPrefix&&(e+=`/${this.fileSubPrefix}`);const t=[this.description,this.creator,"Free Download, Borrow, and Streaming","Internet Archive"].filter(Boolean).join(" : ");this.sharingOptions=[{name:"Twitter",icon:h`<ia-icon-twitter></ia-icon-twitter>`,url:`https://twitter.com/intent/tweet?${new URLSearchParams({url:e,text:t,via:"internetarchive"})}`},{name:"Facebook",icon:h`<ia-icon-facebook></ia-icon-facebook>`,url:`https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({u:e})}`},{name:"Tumblr",icon:h`<ia-icon-tumblr></ia-icon-tumblr>`,url:`https://www.tumblr.com/widgets/share/tool/preview?${new URLSearchParams({posttype:"link",canonicalUrl:e,title:t})}`},{name:"Pinterest",icon:h`<ia-icon-pinterest></ia-icon-pinterest>`,url:`http://www.pinterest.com/pin/create/button/?${new URLSearchParams({url:e,description:t})}`},{name:"Email",icon:h`<ia-icon-email></ia-icon-email>`,url:`mailto:?${new URLSearchParams({subject:t,body:e})}`}]}get iframeEmbed(){return`<iframe
      src="https://${this.baseHost}/embed/${this.identifier}"
      width="560" height="384" frameborder="0"
      webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen
    ></iframe>`}get bbcodeEmbed(){return`[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}get helpURL(){return`https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`}get header(){const e=h`<header><h3>Share this ${this.type}</h3></header>`;return this.renderHeader?e:y}render(){return h`
      ${this.header}
      <main>
        ${this.sharingOptions.map(e=>h` <a class="share-option" href="${e.url}" target="_blank">
              ${e.icon} ${e.name}
            </a>`)}
        <details>
          <summary class="share-option">
            <ia-icon-link></ia-icon-link>
            Get an embeddable link
          </summary>
          <div class="embed">
            <h4>Embed</h4>
            <div class="code" @click=${Jt}>
              <textarea readonly>${this.iframeEmbed}</textarea>
              <small>Copied to clipboard</small>
            </div>
            <h4>
              Embed for wordpress.com hosted blogs and archive.org item
              &lt;description&gt; tags
            </h4>
            <div class="code" @click=${Jt}>
              <textarea readonly>${this.bbcodeEmbed}</textarea>
              <small>Copied to clipboard</small>
            </div>
            <p>
              Want more?
              <a href=${this.helpURL}
                >Advanced embedding details, examples, and help</a
              >!
            </p>
          </div>
        </details>
      </main>
    `}get providerIcon(){return h`<ia-icon-share
      style="width: var(--iconWidth); height: var(--iconHeight);"
    ></ia-icon-share>`}static get styles(){return b`
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      header {
        display: flex;
        align-items: baseline;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 1.6rem;
      }

      h4 {
        font-size: 1.4rem;
      }

      main {
        padding: 1rem 0;
      }

      .share-option {
        display: block;
        padding: 0.5rem 0;
        font-size: 1.6rem;
        text-decoration: none;
        color: var(--shareLinkColor);
        cursor: pointer;
      }

      .share-option > * {
        display: inline-block;
        padding: 0.2rem;
        margin-right: 1rem;
        vertical-align: middle;
        border: 1px solid var(--shareIconBorder);
        border-radius: 7px;
        background: var(--shareIconBg);
      }

      /* Hide the triangle that appears on details tags */
      summary::marker {
        content: '';
      }

      summary::-webkit-details-marker {
        display: none;
      }

      .embed {
        padding-right: 5px;
      }

      .embed a {
        color: var(--shareLinkColor);
      }

      .code {
        position: relative;
      }

      textarea {
        display: block;
        width: 100%;
        height: 120px;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        resize: none;
        cursor: pointer;
        font:
          normal 1.4rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaColor, #fff);
        background: var(--textareaBg, #151515);
      }

      small {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        font:
          normal 1.2rem/2rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaBg, #151515);
        background: var(--textareaColor, #fff);
        opacity: 0;
        transition: opacity 300ms linear;
      }
      small.visible {
        opacity: 1;
      }
    `}};a([f({type:String})],T.prototype,"baseHost",void 0);a([f({type:String})],T.prototype,"creator",void 0);a([f({type:String})],T.prototype,"description",void 0);a([f({type:Boolean})],T.prototype,"embedOptionsVisible",void 0);a([f({type:String})],T.prototype,"identifier",void 0);a([f({type:Array})],T.prototype,"sharingOptions",void 0);a([f({type:String})],T.prototype,"type",void 0);a([f({type:Boolean})],T.prototype,"renderHeader",void 0);a([f({type:String})],T.prototype,"fileSubPrefix",void 0);T=a([L("iaux-in-share-panel")],T);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr={CHILD:2},Pr=o=>(...e)=>({_$litDirective$:o,values:e});class Ur{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fr}=Ti,Gt=()=>document.createComment(""),he=(o,e,t)=>{var i;const r=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){const n=r.insertBefore(Gt(),s),d=r.insertBefore(Gt(),s);t=new Fr(n,d,o,o.options)}else{const n=t._$AB.nextSibling,d=t._$AM,l=d!==o;if(l){let c;(i=t._$AQ)===null||i===void 0||i.call(t,o),t._$AM=o,t._$AP!==void 0&&(c=o._$AU)!==d._$AU&&t._$AP(c)}if(n!==s||l){let c=t._$AA;for(;c!==n;){const u=c.nextSibling;r.insertBefore(c,s),c=u}}}return t},R=(o,e,t=o)=>(o._$AI(e,t),o),Vr={},Nr=(o,e=Vr)=>o._$AH=e,Rr=o=>o._$AH,Xe=o=>{var e;(e=o._$AP)===null||e===void 0||e.call(o,!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=(o,e,t)=>{const i=new Map;for(let r=e;r<=t;r++)i.set(o[r],r);return i},jr=Pr(class extends Ur{constructor(o){if(super(o),o.type!==Dr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(o,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const r=[],s=[];let n=0;for(const d of o)r[n]=i?i(d,n):n,s[n]=t(d,n),n++;return{values:s,keys:r}}render(o,e,t){return this.ct(o,e,t).values}update(o,[e,t,i]){var r;const s=Rr(o),{values:n,keys:d}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=d,n;const l=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],c=[];let u,m,g=0,w=s.length-1,_=0,$=n.length-1;for(;g<=w&&_<=$;)if(s[g]===null)g++;else if(s[w]===null)w--;else if(l[g]===d[_])c[_]=R(s[g],n[_]),g++,_++;else if(l[w]===d[$])c[$]=R(s[w],n[$]),w--,$--;else if(l[g]===d[$])c[$]=R(s[g],n[$]),he(o,c[$+1],s[g]),g++,$--;else if(l[w]===d[_])c[_]=R(s[w],n[_]),he(o,s[g],s[w]),w--,_++;else if(u===void 0&&(u=Yt(d,_,$),m=Yt(l,g,w)),u.has(l[g]))if(u.has(l[w])){const M=m.get(d[_]),B=M!==void 0?s[M]:null;if(B===null){const z=he(o,s[g]);R(z,n[_]),c[_]=z}else c[_]=R(B,n[_]),he(o,s[g],B),s[M]=null;_++}else Xe(s[w]),w--;else Xe(s[g]),g++;for(;_<=$;){const M=he(o,c[$+1]);R(M,n[_]),c[_++]=M}for(;g<=w;){const M=s[g++];M!==null&&Xe(M)}return this.ut=d,Nr(o,c),Q}}),Wr=h`
  <svg
    name="sort-asc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
        transform="matrix(1 0 0 -1 0 18.692308)"
      />
    </g>
  </svg>
`,Zr=h`
  <svg
    name="sort-desc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
      />
    </g>
  </svg>
`,qr=h`
  <svg
    name="sort-neutral"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#fff" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill-rule="nonzero"
      />
      <circle cx="13" cy="9" r="2" />
    </g>
  </svg>
`,Kr=h`
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="volumesTitleID volumesDescID"
  >
    <title id="volumesTitleID">Viewable Files</title>
    <g fill="#ffffff">
      <path
        fill="#ffffff"
        d="m9.83536396 0h10.07241114c.1725502.47117517.3378411.76385809.4958725.87804878.1295523.11419069.3199719.1998337.5712586.25692905.2512868.05709534.4704647.08564301.6575337.08564301h.2806036v15.24362526h-4.3355343v3.8106985h-4.44275v3.7250554h-12.01318261c-.27306495 0-.50313194-.085643-.69020098-.256929-.18706903-.1712861-.30936193-.3425721-.36687867-.5138581l-.06449694-.2785477v-14.2159091c0-.32815965.08627512-.5922949.25882537-.79240577.17255024-.20011086.34510049-.32150776.51765073-.36419068l.25882537-.0640244h3.36472977v-2.54767184c0-.31374722.08627513-.57067627.25882537-.77078714.17255025-.20011086.34510049-.32150776.51765074-.36419068l.25882536-.06402439h3.36472978v-2.56929047c0-.32815964.08627512-.5922949.25882537-.79240576.17255024-.20011087.34510049-.31430156.51765073-.34257207zm10.78355264 15.6294346v-13.53076498c-.2730649-.08536585-.4456152-.16380266-.5176507-.23531042-.1725502-.1424612-.2730649-.27078714-.3015441-.38497783v13.36031043h-9.87808272c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144124-.08962561.006929-.13988296.0640244-.05025735.0570953-.07538603.1427383-.07538603.256929s.02149898.210643.06449694.289357c.04299795.078714.08599591.1322062.12899387.1604767l.06449693.0216187h10.71905571zm-10.2449613-2.4412417h7.98003v-11.60421286h-7.98003zm1.6827837-9.41990022h4.6153002c.1725502 0 .3199718.05349224.4422647.16047672s.1834393.23891353.1834393.39578714c0 .15687362-.0611464.28519956-.1834393.38497783s-.2697145.1496674-.4422647.1496674h-4.6153002c-.1725503 0-.3199719-.04988913-.4422647-.1496674-.1222929-.09977827-.1834394-.22810421-.1834394-.38497783 0-.15687361.0611465-.28880266.1834394-.39578714.1222928-.10698448.2697144-.16047672.4422647-.16047672zm-6.08197737 13.50997782h7.72120467v-.8131929h-3.79610541c-.27306495 0-.49950224-.085643-.67931188-.256929-.17980964-.1712861-.29847284-.3425721-.35598958-.5138581l-.06449694-.2785477v-10.02023282h-2.82530086zm6.77217827-11.36890243h3.2139578c.1295522 0 .240956.05709534.3342113.17128603.0932554.11419069.139883.24972284.139883.40659645 0 .15687362-.0466276.28880267-.139883.39578714-.0932553.10698448-.2046591.16047672-.3342113.16047672h-3.2139578c-.1295523 0-.2373264-.05349224-.3233223-.16047672-.0859959-.10698447-.1289938-.23891352-.1289938-.39578714 0-.15687361.0429979-.29240576.1289938-.40659645s.19377-.17128603.3233223-.17128603zm-11.15043132 15.11557653h7.69942646v-.7491685h-3.79610539c-.25854616 0-.48135376-.0892462-.66842279-.2677384-.18706904-.1784922-.30936193-.3605876-.36687868-.546286l-.06449694-.2569291v-10.04101994h-2.80352266zm14.62237682-4.5606985h-.8191949v2.1410754h-9.89986085s-.04299796.0285477-.12899387.085643c-.08599592.0570954-.12201369.1427384-.10805331.2569291 0 .1141907.01786928.210643.05360784.289357.03573856.0787139.07538603.125.1189424.138858l.06449694.0432373h10.71905575v-2.9542683zm-4.3991936 3.8106985h-.8191949v2.077051h-9.8563045c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144125-.08962561.0105321-.13988296.0748337-.05025735.0643015-.07538603.1607538-.07538603.289357 0 .1141906.02149898.2070399.06449694.2785476.04299795.0715078.08599591.1141907.12899387.1280488l.06449693.0216186h10.69811519v-2.8686252z"
      />
    </g>
  </svg>
`;let ve=class extends A{constructor(){super(...arguments),this.fileListRaw=[],this.fileListSorted=[],this.sortOrderBy="default"}render(){return h`<div class="sort-multi-file-list">${this.sortButton}</div>`}get sortButton(){return{default:h`
        <button
          class="sort-by neutral-icon"
          aria-label="Sort volumes in initial order"
          @click=${()=>this.sortVolumes("title_asc")}
        >
          ${qr}
        </button>
      `,title_asc:h`
        <button
          class="sort-by asc-icon"
          aria-label="Sort volumes in ascending order"
          @click=${()=>this.sortVolumes("title_desc")}
        >
          ${Wr}
        </button>
      `,title_desc:h`
        <button
          class="sort-by desc-icon"
          aria-label="Sort volumes in descending order"
          @click=${()=>this.sortVolumes("default")}
        >
          ${Zr}
        </button>
      `}[this.sortOrderBy]}sortVolumes(e){this.sortOrderBy=e;let t=[];t=this.fileListRaw.sort((i,r)=>e==="title_asc"?i.title.localeCompare(r.title):e==="title_desc"?r.title.localeCompare(i.title):i.orig_sort-r.orig_sort),this.dispatchEvent(new CustomEvent("fileListSorted",{detail:{sortType:e,sortedFiles:t},bubbles:!0,composed:!0})),this.fileListSorted=t}static get styles(){return b`
      button.sort-by {
        padding: 0px;
        background-color: transparent;
        border: 0px;
        --iconWidth: var(--menuSliderHeaderIconWidth);
        --iconHeight: var(--menuSliderHeaderIconHeight);
      }
    `}};a([f({type:Array})],ve.prototype,"fileListRaw",void 0);a([f({type:Array})],ve.prototype,"fileListSorted",void 0);a([f({type:String,reflect:!0})],ve.prototype,"sortOrderBy",void 0);ve=a([L("iaux-in-sort-files-button")],ve);let J=class extends A{constructor(){super(...arguments),this.baseHost="archive.org",this.sortOrderBy="default",this.subPrefix="",this.fileList=[],this.addSortToUrl=!1}firstUpdated(){const e=this.shadowRoot.querySelector(".content.active");setTimeout(()=>{e!=null&&e.scrollIntoViewIfNeeded?e==null||e.scrollIntoViewIfNeeded(!0):e==null||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},350)}volumeItemWithImageTitle(e){const t=this.fileUrl(e);return h`
      <li class="content active">
        <div class="separator"></div>
        <a class="container" href="${t}">
          <div class="image">
            <img src="${e.image}" alt="preview" />
          </div>
          <div class="text">
            <p class="item-title">${e.title}</p>
            <small>by: ${e.author}</small>
          </div>
        </a>
      </li>
    `}fileUrl(e){const t=`//${this.baseHost}${e.url_path}`;let i=t;return this.addSortToUrl&&(i=this.sortOrderBy==="default"?`${t}`:`${t}?sort=${this.sortOrderBy}`),i}get pdfLabel(){return h`<span class="pdf-label"
      ><span class="sr-only">view this</span> PDF</span
    >`}fileLi(e){var t;const i=this.subPrefix===e.file_subprefix?" active":"",r=this.fileUrl(e),s=((t=e.file_source)!==null&&t!==void 0?t:"").match(/^[^+]+\.pdf$/i);return h`
      <li>
        <div class="separator"></div>
        <div class="content${i}">
          <a href=${r}>
            <p class="item-title">
              ${e.title}${s?this.pdfLabel:y}
            </p>
          </a>
        </div>
      </li>
    `}get fileListTemplate(){const e=jr(this.fileList,t=>t==null?void 0:t.file_prefix,this.fileLi.bind(this));return h`
      <ul>
        ${e}
        <div class="separator"></div>
      </ul>
    `}render(){return h` ${this.fileList.length?this.fileListTemplate:y} `}static get styles(){return b`
      :host {
        display: block;
        overflow-y: auto;
        box-sizing: border-box;
        color: var(--primaryTextColor);
        margin-top: 14px;
        margin-bottom: 2rem;
        --activeBorderWidth: 2px;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }

      img {
        width: 35px;
        height: 45px;
      }

      ul {
        padding: 0;
        list-style: none;
        margin: var(--activeBorderWidth) 0.5rem 1rem 0;
      }

      ul > li:first-child .separator {
        display: none;
      }

      li {
        cursor: pointer;
        position: relative;
      }

      li .content {
        padding: 2px 0 4px 2px;
        border: var(--activeBorderWidth) solid transparent;
        padding: 0.2rem 0 0.4rem 0.2rem;
      }

      li .content.active {
        border: var(--activeBorderWidth) solid #538bc5;
      }

      li.content a {
        display: flex;
      }

      small {
        font-style: italic;
        white-space: initial;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-title {
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-size: 14px;
        font-weight: bold;
        word-wrap: break-word;
        padding-left: 5px;
      }

      .separator {
        background-color: var(--secondaryBGColor);
        width: 98%;
        margin: 1px auto;
        height: 1px;
      }

      .text {
        padding-left: 10px;
      }

      .icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 0.7rem;
        border: 1px solid var(--primaryTextColor);
        border-radius: 2px;
        background: var(--activeButtonBg) 50% 50% no-repeat;
      }

      .pdf-label {
        border: 1px solid;
        padding: 2px 5px;
        border-radius: 20px;
        display: inline-block;
        margin-left: 5px;
        font-size: 0.9rem;
      }

      .pdf-label .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
    `}};a([f({type:String})],J.prototype,"baseHost",void 0);a([f({type:String})],J.prototype,"sortOrderBy",void 0);a([f({type:String})],J.prototype,"subPrefix",void 0);a([f({type:Array})],J.prototype,"fileList",void 0);a([f({type:Boolean,reflect:!0})],J.prototype,"addSortToUrl",void 0);J=a([L("iaux-in-viewable-files-panel")],J);const ye=[{file_origin:"",file_source:"beyonce-cosmo-article.pdf",file_subprefix:"beyonce-cosmo-article",orig_sort:0,title:"beyonce-cosmo-article.pdf",url_path:"/details/pdf_only_item/beyonce-cosmo-article.pdf"},{file_origin:"",file_source:"onestrandriverpdf.pdf",file_subprefix:"onestrandriverpdf",orig_sort:1,title:"Very cool title that is extra long so it wraps for three rows and close to the right side of the pane",url_path:"/details/pdf_only_item/onestrandriverpdf.pdf"},{url_path:"/details/masterbookofamericanfolksong00shep",file_subprefix:"01-The Master Book of American Folk Song",title:"The Master Book of American Folk Song",file_source:"/01-The Master Book of American Folk Song_jp2.zip",orig_sort:0},{url_path:"/details/masterbookofamericanfolksong00shep/02-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20A%20through%20M",file_subprefix:"02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M",title:"Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M",file_source:"/02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M_jp2.zip",orig_sort:1},{url_path:"/details/masterbookofamericanfolksong00shep/03-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20N%20through%20Z",file_subprefix:"03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z",title:"Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z",file_source:"/03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z_jp2.zip",orig_sort:2},{url_path:"/details/masterbookofamericanfolksong00shep/04-Letters%20to%20Riley%20Shepard",file_subprefix:"04-Letters to Riley Shepard",title:"Letters to Riley Shepard",file_source:"/04-Letters to Riley Shepard_jp2.zip",orig_sort:3},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%201",file_subprefix:"Master Book of American Folk Song Vol. 1",title:"Master Book of American Folk Song Vol. 1.pdf",file_source:"/Master Book of American Folk Song Vol. 1_jp2.zip",orig_sort:4},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%202",file_subprefix:"Master Book of American Folk Song Vol. 2",title:"Master Book of American Folk Song Vol. 2.pdf",file_source:"/Master Book of American Folk Song Vol. 2_jp2.zip",orig_sort:5},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%203",file_subprefix:"Master Book of American Folk Song Vol. 3",title:"Master Book of American Folk Song Vol. 3.pdf",file_source:"/Master Book of American Folk Song Vol. 3_jp2.zip",orig_sort:6},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%204",file_subprefix:"Master Book of American Folk Song Vol. 4",title:"Master Book of American Folk Song Vol. 4.pdf",file_source:"/Master Book of American Folk Song Vol. 4_jp2.zip",orig_sort:7},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%205",file_subprefix:"Master Book of American Folk Song Vol. 5",title:"Master Book of American Folk Song Vol. 5",file_source:"/Master Book of American Folk Song Vol. 5_jp2.zip",orig_sort:8},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%206",file_subprefix:"Master Book of American Folk Song Vol. 6",title:"Master Book of American Folk Song Vol. 6.pdf",file_source:"/Master Book of American Folk Song Vol. 6_jp2.zip",orig_sort:9},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%207",file_subprefix:"Master Book of American Folk Song Vol. 7",title:"Master Book of American Folk Song Vol. 7.pdf",file_source:"/Master Book of American Folk Song Vol. 7_jp2.zip",orig_sort:10},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%208",file_subprefix:"Master Book of American Folk Song Vol. 8",title:"Master Book of American Folk Song Vol. 8.pdf",file_source:"/Master Book of American Folk Song Vol. 8_jp2.zip",orig_sort:11}];let C=class extends A{constructor(){super(...arguments),this.encodedManifest="",this.sharedObserver=new Xi,this.menuContents=[],this.menuShortcuts=[],this.fullscreen=null,this.headerOn=null,this.loaded=null,this.showPlaceholder=null,this.showTheaterExample=null,this.fileListToDisplay=ye}firstUpdated(){this.fetchItemMD(),console.log("<app-root> component has loaded",this.modalMgr,this.sharedObserver),this.itemNav.viewAvailable=!1}updated(e){console.log("changed",e),e.has("itemMD")&&this.fullscreenCheck(),e.has("fileList")&&this.drawMenus()}async fetchItemMD(){const t=await dt.default.fetchMetadata("masterbookofamericanfolksong00shep");if(t.error){console.log("MD Fetch error: ",t.error),window.confirm("There was an error fetching response, please check dev console");return}console.log("mdResponse.success",JSON.stringify(t.success)),this.itemMD=t.success,this.toggleTheaterExample()}get theaterReady(){return this.modalMgr&&this.sharedObserver&&!!this.itemMD}get urlParams(){return new URLSearchParams(location.search.slice(1))}get showFullscreen(){return this.urlParams.get("view")==="theater"}toggleFS(){this.urlParams.get("view")?location.search="":location.search="view=theater"}fullscreenCheck(){this.showFullscreen&&this.itemNav&&(this.fullscreen=!0)}toggleHeader(){this.headerOn=this.headerOn?null:!0}toggleLoader(){const e=this.loaded===!0?null:!0;this.loaded=e}togglePlaceholder(){this.toggleLoader();const e=this.showPlaceholder?null:!0;this.showPlaceholder=e}toggleImmersion(){const e=this.fullscreen?null:!0;if(!e){this.menuShortcuts=[];return}this.menuShortcuts=[{icon:h`<button
          @click=${()=>{this.fullscreen=null,this.menuContents=[],this.menuShortcuts=[]}}
        >
          Exit
        </button>`,id:"exit"}],this.menuContents=[{icon:h`<button
          @click=${()=>{this.fullscreen=null}}
        >
          Exit
        </button>`,id:"exit",label:"Exit",selected:!1}],this.fullscreen=e}toggleTheaterExample(){if(this.showTheaterExample){this.showPlaceholder=!0,this.showTheaterExample=null,this.menuContents=[],this.menuShortcuts=[];return}this.showPlaceholder=null,this.showTheaterExample=!0,this.drawMenus()}drawMenus(){var e;const t={icon:Hr,label:"Share this item",id:"share",component:h`<iaux-in-share-panel
        .identifier=${((e=this.itemMD)===null||e===void 0?void 0:e.metadata.identifier)||"ux-team-books"}
        .type=${"book"}
        .creator=${"UX Team"}
        .description=${"list of test books"}
        .baseHost=${"archive.org"}
        .fileSubPrefix=${""}
      ></iaux-in-share-panel>`},i=[...ye],r={id:"viewable-files",icon:Kr,label:`Viewable Files (${ye.length})`,baseHost:"archive.org",item:this.itemMD,subPrefix:"",actionButton:h`<iaux-in-sort-files-button
        @fileListSorted=${s=>this.sortFilesCallback(s)}
        .fileListRaw=${ye}
      ></iaux-in-sort-files-button>`,component:h`<iaux-in-viewable-files-panel
        .subPrefix=${"onestrandriverpdf"}
        .fileList=${i}
      ></iaux-in-viewable-files-panel> `};this.menuContents=[r,t],this.menuShortcuts=[r,t]}async sortFilesCallback(e){const{sortType:t,sortedFiles:i}=e.detail;this.fileListToDisplay=i,console.log("fileListSorted",{sortType:t,sortedFiles:i}),await this.updateComplete,console.log("fileListSortedasyncd",{sortType:t,sortedFiles:i}),this.drawMenus()}get theaterExample(){return h`
      <div slot="main">
        <div class="theater-example">
          <img
            alt="cat theater"
            src="https://archive.org/download/masterbookofamericanfolksong00shep/__ia_thumb.jpg"
          />
          <h3>Welcome to Cat Theater</h3>
        </div>
      </div>
    `}get headerExample(){return h`
      <div slot="header">
        <div class="embed-link">
          <img
            src="https://archive.org/images/glogo-jw.png"
            alt="glowing ia logo"
          />
          <a href="/details/goody">
            The history of Little Goody Two-Shoes : otherwise called Mrs.
            Margery Two-Shoes ... [1766 edition]
          </a>
        </div>
      </div>
    `}get isViewAvailable(){return!!this.showTheaterExample}render(){const{isViewAvailable:e,loaded:t,showPlaceholder:i,headerOn:r,fullscreen:s,menuContents:n,menuShortcuts:d,showTheaterExample:l}=this;return console.log("&&&& item nav properties",{loaded:t,headerOn:r,isViewAvailable:e,showTheaterExample:l,showPlaceholder:i,fullscreen:s,menuContents:n,menuShortcuts:d}),h`
      <h1>theater, in page</h1>
      <section>
        <iaux-item-navigator
          baseHost="archive.org"
          .item=${this.itemMD}
          .modal=${this.modalMgr}
          .sharedObserver=${this.sharedObserver}
          ?loaded=${this.loaded}
          ?viewAvailable=${!!this.showTheaterExample}
          .menuContents=${this.menuContents}
          .menuShortcuts=${this.menuShortcuts}
          .viewportInFullscreen=${this.fullscreen}
        >
          ${this.headerOn?this.headerExample:""}
          ${this.showTheaterExample?this.theaterExample:""}
        </iaux-item-navigator>
      </section>
      <div>
        <button @click=${this.toggleHeader}>toggle header</button>
        <button @click=${this.toggleLoader}>toggle loader</button>
        <button @click=${this.togglePlaceholder}>toggle placeholder</button>
        <button @click=${this.toggleTheaterExample}>toggle new theater</button>
        <button @click=${this.toggleImmersion}>toggle immersion</button>
      </div>
      <modal-manager></modal-manager>
    `}};C.styles=b`
    :host([fullscreen]),
    :host([fullscreen]) section {
      height: 100vh;
      width: 100vw;
    }

    :host([fullscreen]) h1 {
      display: none;
    }

    h1 {
      color: black;
    }

    section {
      border: 1px solid pink;
      color: #222;
      height: calc(100vh - 200px);
    }

    :host,
    iaux-item-navigator {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .embed-link {
      height: 55px;
      border: 1px solid yellow;
    }

    .theater-example {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 10px;
      border: 5px dotted yellow;
      flex: 1;
    }

    div[slot='main'] {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    div[slot='main'] > * {
      flex: 1;
    }

    modal-manager[mode='closed'] {
      display: none;
    }
  `;a([f({type:Object})],C.prototype,"itemMD",void 0);a([f({type:String})],C.prototype,"encodedManifest",void 0);a([f({type:Array,attribute:!1})],C.prototype,"menuContents",void 0);a([f({type:Array,attribute:!1})],C.prototype,"menuShortcuts",void 0);a([f({reflect:!0,attribute:!0,type:Boolean})],C.prototype,"fullscreen",void 0);a([f({reflect:!0,attribute:!0,type:Boolean})],C.prototype,"headerOn",void 0);a([f({reflect:!0,attribute:!0,type:Boolean})],C.prototype,"loaded",void 0);a([f({reflect:!0,attribute:!0,type:Boolean})],C.prototype,"showPlaceholder",void 0);a([f({reflect:!0,attribute:!0,type:Boolean})],C.prototype,"showTheaterExample",void 0);a([f({type:Array})],C.prototype,"fileListToDisplay",void 0);a([se("iaux-item-navigator")],C.prototype,"itemNav",void 0);a([se("modal-manager")],C.prototype,"modalMgr",void 0);C=a([L("app-root")],C);
