(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Nr=new URLSearchParams(location.search.slice(1));Nr.get("view")==="theater"&&document.querySelector("body").classList.toggle("fullscreen");function v(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var h=n.length-1;h>=0;h--)(r=n[h])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}function Rr(n,e,t,i){function s(o){return o instanceof t?o:new t(function(r){r(o)})}return new(t||(t=Promise))(function(o,r){function h(u){try{a(i.next(u))}catch(d){r(d)}}function l(u){try{a(i.throw(u))}catch(d){r(d)}}function a(u){u.done?o(u.value):s(u.value).then(h,l)}a((i=i.apply(n,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=window,ji=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ln=Symbol(),hs=new WeakMap;let Lr=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ln)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ji&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=hs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&hs.set(t,e))}return e}toString(){return this.cssText}};const Br=n=>new Lr(typeof n=="string"?n:n+"",void 0,Ln),zr=(n,e)=>{ji?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=Nt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},cs=ji?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Br(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var si;const It=window,us=It.trustedTypes,Ir=us?us.emptyScript:"",ps=It.reactiveElementPolyfillSupport,Li={toAttribute(n,e){switch(e){case Boolean:n=n?Ir:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Bn=(n,e)=>e!==n&&(e==e||n==n),ni={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:Bn},Bi="finalized";let Ge=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=ni){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ni}static finalize(){if(this.hasOwnProperty(Bi))return!1;this[Bi]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(cs(s))}else e!==void 0&&t.push(cs(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ni){var s;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Li).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Li;this._$El=o,this[o]=h.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Bn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ge[Bi]=!0,Ge.elementProperties=new Map,Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},ps==null||ps({ReactiveElement:Ge}),((si=It.reactiveElementVersions)!==null&&si!==void 0?si:It.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ri;const Pt=window,Ae=Pt.trustedTypes,vs=Ae?Ae.createPolicy("lit-html",{createHTML:n=>n}):void 0,zi="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,zn="?"+U,Pr=`<${zn}>`,de=document,at=()=>de.createComment(""),dt=n=>n===null||typeof n!="object"&&typeof n!="function",In=Array.isArray,Dr=n=>In(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",oi=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$s=/-->/g,ms=/>/g,Y=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gs=/'/g,fs=/"/g,Pn=/^(?:script|style|textarea|title)$/i,Dn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),_=Dn(1),_s=Dn(2),ye=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),As=new WeakMap,ne=de.createTreeWalker(de,129,null,!1);function Un(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return vs!==void 0?vs.createHTML(e):e}const Ur=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=Ye;for(let h=0;h<t;h++){const l=n[h];let a,u,d=-1,c=0;for(;c<l.length&&(r.lastIndex=c,u=r.exec(l),u!==null);)c=r.lastIndex,r===Ye?u[1]==="!--"?r=$s:u[1]!==void 0?r=ms:u[2]!==void 0?(Pn.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=Y):u[3]!==void 0&&(r=Y):r===Y?u[0]===">"?(r=s??Ye,d=-1):u[1]===void 0?d=-2:(d=r.lastIndex-u[2].length,a=u[1],r=u[3]===void 0?Y:u[3]==='"'?fs:gs):r===fs||r===gs?r=Y:r===$s||r===ms?r=Ye:(r=Y,s=void 0);const p=r===Y&&n[h+1].startsWith("/>")?" ":"";o+=r===Ye?l+Pr:d>=0?(i.push(a),l.slice(0,d)+zi+l.slice(d)+U+p):l+U+(d===-2?(i.push(void 0),h):p)}return[Un(n,o+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Ii=class Vn{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=Ur(e,t);if(this.el=Vn.createElement(a,i),ne.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=ne.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith(zi)||c.startsWith(U)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+zi).split(U),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?Wr:m[1]==="?"?Zr:m[1]==="@"?qr:Kt})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(Pn.test(s.tagName)){const d=s.textContent.split(U),c=d.length-1;if(c>0){s.textContent=Ae?Ae.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],at()),ne.nextNode(),l.push({type:2,index:++o});s.append(d[c],at())}}}else if(s.nodeType===8)if(s.data===zn)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(U,d+1))!==-1;)l.push({type:7,index:o}),d+=U.length-1}o++}}static createElement(e,t){const i=de.createElement("template");return i.innerHTML=e,i}};function be(n,e,t=n,i){var s,o,r,h;if(e===ye)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=dt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=be(n,l._$AS(n,e.values),l,i)),e}let Vr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:de).importNode(i,!0);ne.currentNode=o;let r=ne.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new es(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new Xr(r,this,e)),this._$AV.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=ne.nextNode(),h++)}return ne.currentNode=de,o}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},es=class Wn{constructor(e,t,i,s){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),dt(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Dr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.$(de.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ii.createElement(Un(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(i);else{const r=new Vr(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(e){let t=As.get(e.strings);return t===void 0&&As.set(e.strings,t=new Ii(e)),t}T(e){In(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Wn(this.k(at()),this.k(at()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Kt=class{constructor(e,t,i,s,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=be(this,e,t,0),r=!dt(e)||e!==this._$AH&&e!==ye,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=be(this,h[i+l],t,l),a===ye&&(a=this._$AH[l]),r||(r=!dt(a)||a!==this._$AH[l]),a===A?e=A:e!==A&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Wr=class extends Kt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}};const Fr=Ae?Ae.emptyScript:"";class Zr extends Kt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Fr):this.element.removeAttribute(this.name)}}let qr=class extends Kt{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=be(this,e,t,0))!==null&&i!==void 0?i:A)===ye)return;const s=this._$AH,o=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==A&&(s===A||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Xr=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}};const ys=Pt.litHtmlPolyfillSupport;ys==null||ys(Ii,es),((ri=Pt.litHtmlVersions)!==null&&ri!==void 0?ri:Pt.litHtmlVersions=[]).push("2.8.0");const Jr=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new es(e.insertBefore(at(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=window,ts=Rt.ShadowRoot&&(Rt.ShadyCSS===void 0||Rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,is=Symbol(),bs=new WeakMap;let Fn=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==is)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ts&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=bs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&bs.set(t,e))}return e}toString(){return this.cssText}};const Kr=n=>new Fn(typeof n=="string"?n:n+"",void 0,is),$=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new Fn(t,n,is)},Gr=(n,e)=>{ts?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=Rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ws=ts?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Kr(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var li;const Dt=window,xs=Dt.trustedTypes,Yr=xs?xs.emptyScript:"",Cs=Dt.reactiveElementPolyfillSupport,Pi={toAttribute(n,e){switch(e){case Boolean:n=n?Yr:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Zn=(n,e)=>e!==n&&(e==e||n==n),ai={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:Zn};let T=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=ai){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ai}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ws(s))}else e!==void 0&&t.push(ws(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ai){var s;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Pi).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Pi;this._$El=o,this[o]=h.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Zn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},Cs==null||Cs({ReactiveElement:T}),((li=Dt.reactiveElementVersions)!==null&&li!==void 0?li:Dt.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var di,hi;let L=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ye}};L.finalized=!0,L._$litElement$=!0,(di=globalThis.litElementHydrateSupport)===null||di===void 0||di.call(globalThis,{LitElement:L});const Ss=globalThis.litElementPolyfillSupport;Ss==null||Ss({LitElement:L});((hi=globalThis.litElementVersions)!==null&&hi!==void 0?hi:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},jr=(n,e,t)=>{e.constructor.createProperty(t,n)};function g(n){return(e,t)=>t!==void 0?jr(n,e,t):Qr(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eo(n){return g({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const o=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return n!=null&&(r.finisher=function(h){n(h,o)}),r}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct(n,e){return to({descriptor:t=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci;((ci=window.HTMLSlotElement)===null||ci===void 0?void 0:ci.prototype.assignedElements)!=null;class Di{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Di.shared=new Di;class re{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}re.shared=new re;class Ut{parseValue(e){return re.shared.parseValue(e)}}Ut.shared=new Ut;class ht{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}ht.shared=new ht;class Vt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((s,o)=>{const r=parseFloat(s);if(Number.isNaN(r))return t=!0,0;const l=60**(e.length-1-o);return r*Math.floor(l)}).reduce((s,o)=>s+o,0);return t?void 0:i}}Vt.shared=new Vt;var O;(function(n){n.Audio="audio",n.Collection="collection",n.Data="data",n.Etree="etree",n.Image="image",n.Movies="movies",n.Software="software",n.Texts="texts",n.Web="web"})(O||(O={}));class Ui{parseValue(e){if(typeof e!="string")return;switch(e.toLowerCase()){case"audio":return O.Audio;case"collection":return O.Collection;case"data":return O.Data;case"etree":return O.Etree;case"image":return O.Image;case"movies":return O.Movies;case"software":return O.Software;case"texts":return O.Texts;case"web":return O.Web;default:return}}}Ui.shared=new Ui;var Es;(function(n){n.RightToLeft="rl",n.LeftToRight="lr"})(Es||(Es={}));class Vi{parseValue(e){return String(e)}}Vi.shared=new Vi;class he{constructor(e,t){this.values=[],this.parser=e,this.rawValue=t,this.processRawValue()}get value(){return this.values.length>0?this.values[0]:void 0}processRawValue(){this.rawValue!==void 0&&(Array.isArray(this.rawValue)?this.rawValue.forEach(e=>{this.parseAndPersistValue(e)}):this.parseAndPersistValue(this.rawValue))}parseAndPersistValue(e){const t=this.parser.parseValue(e);t!==void 0&&this.values.push(t)}}class io extends he{constructor(e){super(Di.shared,e)}}class P extends he{constructor(e){super(ht.shared,e)}}class ui extends he{constructor(e){super(Vt.shared,e)}}class N extends he{constructor(e){super(re.shared,e)}}class y extends he{constructor(e){super(Vi.shared,e)}}class Hs extends he{constructor(e){super(Ut.shared,e)}}class so extends he{constructor(e){super(Ui.shared,e)}}class qn{constructor(e){this.rawMetadata=e,this.identifier=e.identifier,this.addeddate=e.addeddate?new P(e.addeddate):void 0,this.publicdate=e.publicdate?new P(e.publicdate):void 0,this.indexdate=e.indexdate?new P(e.indexdate):void 0,this.audio_codec=e.audio_codec?new y(e.audio_codec):void 0,this.audio_sample_rate=e.audio_sample_rate?new N(e.audio_sample_rate):void 0,this.collection=e.collection?new y(e.collection):void 0,this.collections_raw=e.collections_raw?new y(e.collections_raw):void 0,this.collection_size=e.collection_size?new Hs(e.collection_size):void 0,this.contributor=e.contributor?new y(e.contributor):void 0,this.coverage=e.coverage?new y(e.coverage):void 0,this.creator=e.creator?new y(e.creator):void 0,this.date=e.date?new P(e.date):void 0,this.description=e.description?new y(e.description):void 0,this.downloads=e.downloads?new N(e.downloads):void 0,this.duration=e.duration?new ui(e.duration):void 0,this.files_count=e.files_count?new N(e.files_count):void 0,this.item_count=e.item_count?new N(e.item_count):void 0,this.item_size=e.item_size?new Hs(e.item_size):void 0,this.language=e.language?new y(e.language):void 0,this.length=e.length?new ui(e.length):void 0,this.lineage=e.lineage?new y(e.lineage):void 0,this.mediatype=e.mediatype?new so(e.mediatype):void 0,this.month=e.month?new N(e.month):void 0,this.noindex=e.noindex?new io(e.noindex):void 0,this.notes=e.notes?new y(e.notes):void 0,this.num_favorites=e.num_favorites?new N(e.num_favorites):void 0,this.num_reviews=e.num_reviews?new N(e.num_reviews):void 0,this.runtime=e.runtime?new ui(e.runtime):void 0,this.scanner=e.scanner?new y(e.scanner):void 0,this.source=e.source?new y(e.source):void 0,this.start_localtime=e.start_localtime?new P(e.start_localtime):void 0,this.start_time=e.start_time?new P(e.start_time):void 0,this.stop_time=e.stop_time?new P(e.stop_time):void 0,this.subject=e.subject?new y(e.subject):void 0,this.taper=e.taper?new y(e.taper):void 0,this.title=e.title?new y(e.title):void 0,this.track=e.track?new N(e.track):void 0,this.transferer=e.transferer?new y(e.transferer):void 0,this.type=e.type?new y(e.type):void 0,this.uploader=e.uploader?new y(e.uploader):void 0,this.utc_offset=e.utc_offset?new N(e.utc_offset):void 0,this.venue=e.venue?new y(e.venue):void 0,this.week=e.week?new N(e.week):void 0,this.year=e.year?new P(e.year):void 0}}class no{constructor(e){this.name=e.name,this.source=e.source,this.btih=e.btih,this.md5=e.md5,this.format=e.format,this.mtime=e.mtime,this.crc32=e.crc32,this.sha1=e.sha1,this.original=e.original,this.title=e.title,this.length=e.length?Vt.shared.parseValue(e.length):void 0,this.size=e.size?Ut.shared.parseValue(e.size):void 0,this.height=e.height?re.shared.parseValue(e.height):void 0,this.width=e.width?re.shared.parseValue(e.width):void 0,this.track=e.track?re.shared.parseValue(e.track):void 0,this.external_identifier=e["external-identifier"],this.creator=e.creator,this.album=e.album}}class ro{constructor(e){this.reviewbody=e.reviewbody,this.reviewtitle=e.reviewtitle,this.reviewer=e.reviewer,this.reviewdate=ht.shared.parseValue(e.reviewdate),this.createdate=ht.shared.parseValue(e.createdate),this.stars=e.stars?parseFloat(e.stars):void 0}}class Xn{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(s=>new no(s)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new qn(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(s=>new ro(s))}}class oo{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new qn(t)),this.aggregations=e.aggregations}}class lo{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new oo(e.response)}}var ce;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(ce||(ce={}));class Jn extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class ao{constructor(e="archive.org"){this.baseUrl=e}async performSearch(e){const i=e.asUrlSearchParams.toString(),s=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(s)}async fetchMetadata(e){const t=`https://${this.baseUrl}/metadata/${e}`;return this.fetchUrl(t)}async fetchUrl(e){let t;try{t=await fetch(e)}catch(i){const s=i instanceof Error?i.message:i;return this.getErrorResult(ce.networkError,s)}try{const i=await t.json(),s=i.error;if(s){const o=i.forensics;return this.getErrorResult(ce.searchEngineError,s,o)}else return{success:i}}catch(i){const s=i instanceof Error?i.message:i;return this.getErrorResult(ce.decodingError,s)}}getErrorResult(e,t,i){return{error:new Jn(e,t,i)}}}class Wi{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new lo(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Jn(ce.itemNotFound)}:{success:new Xn(i.success)}}}Wi.default=new Wi(new ao);var Ms;(function(n){n.Asc="asc",n.Desc="desc"})(Ms||(Ms={}));var oe=[],ho=function(){return oe.some(function(n){return n.activeTargets.length>0})},co=function(){return oe.some(function(n){return n.skippedTargets.length>0})},Ts="ResizeObserver loop completed with undelivered notifications.",uo=function(){var n;typeof ErrorEvent=="function"?n=new ErrorEvent("error",{message:Ts}):(n=document.createEvent("Event"),n.initEvent("error",!1,!1),n.message=Ts),window.dispatchEvent(n)},ct;(function(n){n.BORDER_BOX="border-box",n.CONTENT_BOX="content-box",n.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ct||(ct={}));var le=function(n){return Object.freeze(n)},po=function(){function n(e,t){this.inlineSize=e,this.blockSize=t,le(this)}return n}(),Kn=function(){function n(e,t,i,s){return this.x=e,this.y=t,this.width=i,this.height=s,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,le(this)}return n.prototype.toJSON=function(){var e=this,t=e.x,i=e.y,s=e.top,o=e.right,r=e.bottom,h=e.left,l=e.width,a=e.height;return{x:t,y:i,top:s,right:o,bottom:r,left:h,width:l,height:a}},n.fromRect=function(e){return new n(e.x,e.y,e.width,e.height)},n}(),ss=function(n){return n instanceof SVGElement&&"getBBox"in n},Gn=function(n){if(ss(n)){var e=n.getBBox(),t=e.width,i=e.height;return!t&&!i}var s=n,o=s.offsetWidth,r=s.offsetHeight;return!(o||r||n.getClientRects().length)},ks=function(n){var e,t;if(n instanceof Element)return!0;var i=(t=(e=n)===null||e===void 0?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(i&&n instanceof i.Element)},vo=function(n){switch(n.tagName){case"INPUT":if(n.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},nt=typeof window<"u"?window:{},Tt=new WeakMap,Os=/auto|scroll/,$o=/^tb|vertical/,mo=/msie|trident/i.test(nt.navigator&&nt.navigator.userAgent),R=function(n){return parseFloat(n||"0")},ue=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=!1),new po((t?e:n)||0,(t?n:e)||0)},Ns=le({devicePixelContentBoxSize:ue(),borderBoxSize:ue(),contentBoxSize:ue(),contentRect:new Kn(0,0,0,0)}),Yn=function(n,e){if(e===void 0&&(e=!1),Tt.has(n)&&!e)return Tt.get(n);if(Gn(n))return Tt.set(n,Ns),Ns;var t=getComputedStyle(n),i=ss(n)&&n.ownerSVGElement&&n.getBBox(),s=!mo&&t.boxSizing==="border-box",o=$o.test(t.writingMode||""),r=!i&&Os.test(t.overflowY||""),h=!i&&Os.test(t.overflowX||""),l=i?0:R(t.paddingTop),a=i?0:R(t.paddingRight),u=i?0:R(t.paddingBottom),d=i?0:R(t.paddingLeft),c=i?0:R(t.borderTopWidth),p=i?0:R(t.borderRightWidth),f=i?0:R(t.borderBottomWidth),m=i?0:R(t.borderLeftWidth),B=d+a,z=l+u,k=m+p,K=c+f,Ke=h?n.offsetHeight-K-n.clientHeight:0,G=r?n.offsetWidth-k-n.clientWidth:0,Et=s?B+k:0,Tr=s?z+K:0,Ht=i?i.width:R(t.width)-Et-G,Mt=i?i.height:R(t.height)-Tr-Ke,kr=Ht+B+G+k,Or=Mt+z+Ke+K,ds=le({devicePixelContentBoxSize:ue(Math.round(Ht*devicePixelRatio),Math.round(Mt*devicePixelRatio),o),borderBoxSize:ue(kr,Or,o),contentBoxSize:ue(Ht,Mt,o),contentRect:new Kn(d,l,Ht,Mt)});return Tt.set(n,ds),ds},Qn=function(n,e,t){var i=Yn(n,t),s=i.borderBoxSize,o=i.contentBoxSize,r=i.devicePixelContentBoxSize;switch(e){case ct.DEVICE_PIXEL_CONTENT_BOX:return r;case ct.BORDER_BOX:return s;default:return o}},go=function(){function n(e){var t=Yn(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=le([t.borderBoxSize]),this.contentBoxSize=le([t.contentBoxSize]),this.devicePixelContentBoxSize=le([t.devicePixelContentBoxSize])}return n}(),jn=function(n){if(Gn(n))return 1/0;for(var e=0,t=n.parentNode;t;)e+=1,t=t.parentNode;return e},fo=function(){var n=1/0,e=[];oe.forEach(function(r){if(r.activeTargets.length!==0){var h=[];r.activeTargets.forEach(function(a){var u=new go(a.target),d=jn(a.target);h.push(u),a.lastReportedSize=Qn(a.target,a.observedBox),d<n&&(n=d)}),e.push(function(){r.callback.call(r.observer,h,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var t=0,i=e;t<i.length;t++){var s=i[t];s()}return n},Rs=function(n){oe.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(s){s.isActive()&&(jn(s.target)>n?t.activeTargets.push(s):t.skippedTargets.push(s))})})},_o=function(){var n=0;for(Rs(n);ho();)n=fo(),Rs(n);return co()&&uo(),n>0},pi,er=[],Ao=function(){return er.splice(0).forEach(function(n){return n()})},yo=function(n){if(!pi){var e=0,t=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return Ao()}).observe(t,i),pi=function(){t.textContent=""+(e?e--:e++)}}er.push(n),pi()},bo=function(n){yo(function(){requestAnimationFrame(n)})},Lt=0,wo=function(){return!!Lt},xo=250,Co={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ls=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Bs=function(n){return n===void 0&&(n=0),Date.now()+n},vi=!1,So=function(){function n(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return n.prototype.run=function(e){var t=this;if(e===void 0&&(e=xo),!vi){vi=!0;var i=Bs(e);bo(function(){var s=!1;try{s=_o()}finally{if(vi=!1,e=i-Bs(),!wo())return;s?t.run(1e3):e>0?t.run(e):t.start()}})}},n.prototype.schedule=function(){this.stop(),this.run()},n.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Co)};document.body?t():nt.addEventListener("DOMContentLoaded",t)},n.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ls.forEach(function(t){return nt.addEventListener(t,e.listener,!0)}))},n.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Ls.forEach(function(t){return nt.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},n}(),Fi=new So,zs=function(n){!Lt&&n>0&&Fi.start(),Lt+=n,!Lt&&Fi.stop()},Eo=function(n){return!ss(n)&&!vo(n)&&getComputedStyle(n).display==="inline"},Ho=function(){function n(e,t){this.target=e,this.observedBox=t||ct.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return n.prototype.isActive=function(){var e=Qn(this.target,this.observedBox,!0);return Eo(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},n}(),Mo=function(){function n(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return n}(),kt=new WeakMap,Is=function(n,e){for(var t=0;t<n.length;t+=1)if(n[t].target===e)return t;return-1},Ot=function(){function n(){}return n.connect=function(e,t){var i=new Mo(e,t);kt.set(e,i)},n.observe=function(e,t,i){var s=kt.get(e),o=s.observationTargets.length===0;Is(s.observationTargets,t)<0&&(o&&oe.push(s),s.observationTargets.push(new Ho(t,i&&i.box)),zs(1),Fi.schedule())},n.unobserve=function(e,t){var i=kt.get(e),s=Is(i.observationTargets,t),o=i.observationTargets.length===1;s>=0&&(o&&oe.splice(oe.indexOf(i),1),i.observationTargets.splice(s,1),zs(-1))},n.disconnect=function(e){var t=this,i=kt.get(e);i.observationTargets.slice().forEach(function(s){return t.unobserve(e,s.target)}),i.activeTargets.splice(0,i.activeTargets.length)},n}(),To=function(){function n(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ot.connect(this,e)}return n.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ks(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ot.observe(this,e,t)},n.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ks(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ot.unobserve(this,e)},n.prototype.disconnect=function(){Ot.disconnect(this)},n.toString=function(){return"function ResizeObserver () { [polyfill code] }"},n}();const ko=window.ResizeObserver||To;class Oo{constructor(){this.resizeObserver=new ko(e=>{window.requestAnimationFrame(()=>{for(const t of e){const i=this.resizeHandlers.get(t.target);i==null||i.forEach(s=>{s.handleResize(t)})}})}),this.resizeHandlers=new Map}addObserver(e){var t;const i=(t=this.resizeHandlers.get(e.target))!==null&&t!==void 0?t:new Set;i.add(e.handler),this.resizeHandlers.set(e.target,i),this.resizeObserver.observe(e.target,e.options)}removeObserver(e){const t=this.resizeHandlers.get(e.target);t&&(this.resizeObserver.unobserve(e.target),t.delete(e.handler),t.size===0&&this.resizeHandlers.delete(e.target))}}class No{constructor(e){var t,i,s,o,r,h,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(s=e==null?void 0:e.showProcessingIndicator)!==null&&s!==void 0?s:!1,this.processingImageMode=(o=e==null?void 0:e.processingImageMode)!==null&&o!==void 0?o:"complete",this.showCloseButton=(r=e==null?void 0:e.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(h=e==null?void 0:e.showHeaderLogo)!==null&&h!==void 0?h:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $i;const Wt=window,we=Wt.trustedTypes,Ps=we?we.createPolicy("lit-html",{createHTML:n=>n}):void 0,V=`lit$${(Math.random()+"").slice(9)}$`,tr="?"+V,Ro=`<${tr}>`,xe=document,ut=(n="")=>xe.createComment(n),pt=n=>n===null||typeof n!="object"&&typeof n!="function",ir=Array.isArray,Lo=n=>ir(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Us=/>/g,Q=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vs=/'/g,Ws=/"/g,sr=/^(?:script|style|textarea|title)$/i,Bo=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),D=Bo(1),Ce=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Fs=new WeakMap,pe=xe.createTreeWalker(xe,129,null,!1),zo=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=Qe;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===Qe?d[1]==="!--"?r=Ds:d[1]!==void 0?r=Us:d[2]!==void 0?(sr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=Q):d[3]!==void 0&&(r=Q):r===Q?d[0]===">"?(r=s??Qe,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Q:d[3]==='"'?Ws:Vs):r===Ws||r===Vs?r=Q:r===Ds||r===Us?r=Qe:(r=Q,s=void 0);const f=r===Q&&n[l+1].startsWith("/>")?" ":"";o+=r===Qe?a+Ro:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+V+f):a+V+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ps!==void 0?Ps.createHTML(h):h,i]};let Zi=class nr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=zo(e,t);if(this.el=nr.createElement(a,i),pe.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=pe.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(V)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(V),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?Po:m[1]==="?"?Uo:m[1]==="@"?Vo:Gt})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(sr.test(s.tagName)){const d=s.textContent.split(V),c=d.length-1;if(c>0){s.textContent=we?we.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],ut()),pe.nextNode(),l.push({type:2,index:++o});s.append(d[c],ut())}}}else if(s.nodeType===8)if(s.data===tr)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(V,d+1))!==-1;)l.push({type:7,index:o}),d+=V.length-1}o++}}static createElement(e,t){const i=xe.createElement("template");return i.innerHTML=e,i}};function Se(n,e,t=n,i){var s,o,r,h;if(e===Ce)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=pt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Se(n,l._$AS(n,e.values),l,i)),e}let Io=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:xe).importNode(i,!0);pe.currentNode=o;let r=pe.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new ns(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new Wo(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=pe.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ns=class rr{constructor(e,t,i,s){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Se(this,e,t),pt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Ce&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Lo(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==b&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Zi.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new Io(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=Fs.get(e.strings);return t===void 0&&Fs.set(e.strings,t=new Zi(e)),t}k(e){ir(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new rr(this.O(ut()),this.O(ut()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Gt=class{constructor(e,t,i,s,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=Se(this,e,t,0),r=!pt(e)||e!==this._$AH&&e!==Ce,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Se(this,h[i+l],t,l),a===Ce&&(a=this._$AH[l]),r||(r=!pt(a)||a!==this._$AH[l]),a===b?e=b:e!==b&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Po=class extends Gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}};const Do=we?we.emptyScript:"";let Uo=class extends Gt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Do):this.element.removeAttribute(this.name)}},Vo=class extends Gt{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Se(this,e,t,0))!==null&&i!==void 0?i:b)===Ce)return;const s=this._$AH,o=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==b&&(s===b||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Wo=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}};const Zs=Wt.litHtmlPolyfillSupport;Zs==null||Zs(Zi,ns),(($i=Wt.litHtmlVersions)!==null&&$i!==void 0?$i:Wt.litHtmlVersions=[]).push("2.5.0");const Fo=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new ns(e.insertBefore(ut(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mi,gi;let ve=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Fo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ce}};ve.finalized=!0,ve._$litElement$=!0,(mi=globalThis.litElementHydrateSupport)===null||mi===void 0||mi.call(globalThis,{LitElement:ve});const qs=globalThis.litElementPolyfillSupport;qs==null||qs({LitElement:ve});((gi=globalThis.litElementVersions)!==null&&gi!==void 0?gi:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function Yt(n){return(e,t)=>t!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,e,t):Zo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const o=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return n!=null&&(r.finisher=function(h){n(h,o)}),r}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xo(n,e){return qo({descriptor:t=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fi;((fi=window.HTMLSlotElement)===null||fi===void 0?void 0:fi.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _i;const Ft=window,Ee=Ft.trustedTypes,Xs=Ee?Ee.createPolicy("lit-html",{createHTML:n=>n}):void 0,W=`lit$${(Math.random()+"").slice(9)}$`,lr="?"+W,Jo=`<${lr}>`,He=document,vt=(n="")=>He.createComment(n),$t=n=>n===null||typeof n!="object"&&typeof n!="function",ar=Array.isArray,Ko=n=>ar(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Js=/-->/g,Ks=/>/g,j=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Ys=/"/g,dr=/^(?:script|style|textarea|title)$/i,Go=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Yo=Go(1),Me=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Qs=new WeakMap,$e=He.createTreeWalker(He,129,null,!1),Qo=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=je;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===je?d[1]==="!--"?r=Js:d[1]!==void 0?r=Ks:d[2]!==void 0?(dr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=j):d[3]!==void 0&&(r=j):r===j?d[0]===">"?(r=s??je,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?j:d[3]==='"'?Ys:Gs):r===Ys||r===Gs?r=j:r===Js||r===Ks?r=je:(r=j,s=void 0);const f=r===j&&n[l+1].startsWith("/>")?" ":"";o+=r===je?a+Jo:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+W+f):a+W+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xs!==void 0?Xs.createHTML(h):h,i]};let qi=class hr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=Qo(e,t);if(this.el=hr.createElement(a,i),$e.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=$e.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(W)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(W),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?el:m[1]==="?"?il:m[1]==="@"?sl:Qt})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(dr.test(s.tagName)){const d=s.textContent.split(W),c=d.length-1;if(c>0){s.textContent=Ee?Ee.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],vt()),$e.nextNode(),l.push({type:2,index:++o});s.append(d[c],vt())}}}else if(s.nodeType===8)if(s.data===lr)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(W,d+1))!==-1;)l.push({type:7,index:o}),d+=W.length-1}o++}}static createElement(e,t){const i=He.createElement("template");return i.innerHTML=e,i}};function Te(n,e,t=n,i){var s,o,r,h;if(e===Me)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=$t(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Te(n,l._$AS(n,e.values),l,i)),e}let jo=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:He).importNode(i,!0);$e.currentNode=o;let r=$e.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new rs(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new nl(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=$e.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},rs=class cr{constructor(e,t,i,s){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Te(this,e,t),$t(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==Me&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ko(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==w&&$t(this._$AH)?this._$AA.nextSibling.data=e:this.T(He.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=qi.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new jo(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=Qs.get(e.strings);return t===void 0&&Qs.set(e.strings,t=new qi(e)),t}k(e){ar(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new cr(this.O(vt()),this.O(vt()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Qt=class{constructor(e,t,i,s,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=Te(this,e,t,0),r=!$t(e)||e!==this._$AH&&e!==Me,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Te(this,h[i+l],t,l),a===Me&&(a=this._$AH[l]),r||(r=!$t(a)||a!==this._$AH[l]),a===w?e=w:e!==w&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},el=class extends Qt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}};const tl=Ee?Ee.emptyScript:"";let il=class extends Qt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,tl):this.element.removeAttribute(this.name)}},sl=class extends Qt{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Te(this,e,t,0))!==null&&i!==void 0?i:w)===Me)return;const s=this._$AH,o=e===w&&s!==w||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==w&&(s===w||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},nl=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Te(this,e)}};const js=Ft.litHtmlPolyfillSupport;js==null||js(qi,rs),((_i=Ft.litHtmlVersions)!==null&&_i!==void 0?_i:Ft.litHtmlVersions=[]).push("2.5.0");const rl=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new rs(e.insertBefore(vt(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ai,yi;let rt=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=rl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Me}};rt.finalized=!0,rt._$litElement$=!0,(Ai=globalThis.litElementHydrateSupport)===null||Ai===void 0||Ai.call(globalThis,{LitElement:rt});const en=globalThis.litElementPolyfillSupport;en==null||en({LitElement:rt});((yi=globalThis.litElementVersions)!==null&&yi!==void 0?yi:globalThis.litElementVersions=[]).push("3.2.0");const ol=Object.freeze({processing:"processing",complete:"complete"});class ll extends rt{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=ol.processing}render(){return Yo`
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
    `}static get styles(){const e=$`var(--activityIndicatorCheckmarkColor, #31A481)`,t=$`var(--activityIndicatorCompletedRingColor, #31A481)`,i=$`var(--activityIndicatorLoadingRingColor, #333333)`,s=$`var(--activityIndicatorLoadingDotColor, #333333)`;return $`
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
        fill: ${s};
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
    `}}window.customElements.define("ia-activity-indicator",ll);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bi;const Zt=window,ke=Zt.trustedTypes,tn=ke?ke.createPolicy("lit-html",{createHTML:n=>n}):void 0,F=`lit$${(Math.random()+"").slice(9)}$`,ur="?"+F,al=`<${ur}>`,Oe=document,mt=(n="")=>Oe.createComment(n),gt=n=>n===null||typeof n!="object"&&typeof n!="function",pr=Array.isArray,dl=n=>pr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sn=/-->/g,nn=/>/g,ee=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rn=/'/g,on=/"/g,vr=/^(?:script|style|textarea|title)$/i,hl=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),cl=hl(1),Ne=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),ln=new WeakMap,me=Oe.createTreeWalker(Oe,129,null,!1),ul=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=et;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===et?d[1]==="!--"?r=sn:d[1]!==void 0?r=nn:d[2]!==void 0?(vr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=ee):d[3]!==void 0&&(r=ee):r===ee?d[0]===">"?(r=s??et,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?ee:d[3]==='"'?on:rn):r===on||r===rn?r=ee:r===sn||r===nn?r=et:(r=ee,s=void 0);const f=r===ee&&n[l+1].startsWith("/>")?" ":"";o+=r===et?a+al:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+F+f):a+F+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tn!==void 0?tn.createHTML(h):h,i]};let Xi=class $r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=ul(e,t);if(this.el=$r.createElement(a,i),me.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=me.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(F)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(F),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?vl:m[1]==="?"?ml:m[1]==="@"?gl:jt})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(vr.test(s.tagName)){const d=s.textContent.split(F),c=d.length-1;if(c>0){s.textContent=ke?ke.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],mt()),me.nextNode(),l.push({type:2,index:++o});s.append(d[c],mt())}}}else if(s.nodeType===8)if(s.data===ur)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(F,d+1))!==-1;)l.push({type:7,index:o}),d+=F.length-1}o++}}static createElement(e,t){const i=Oe.createElement("template");return i.innerHTML=e,i}};function Re(n,e,t=n,i){var s,o,r,h;if(e===Ne)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=gt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Re(n,l._$AS(n,e.values),l,i)),e}let pl=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Oe).importNode(i,!0);me.currentNode=o;let r=me.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new os(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new fl(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=me.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},os=class mr{constructor(e,t,i,s){var o;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Re(this,e,t),gt(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Ne&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==x&&gt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xi.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new pl(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=ln.get(e.strings);return t===void 0&&ln.set(e.strings,t=new Xi(e)),t}k(e){pr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new mr(this.O(mt()),this.O(mt()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},jt=class{constructor(e,t,i,s,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=Re(this,e,t,0),r=!gt(e)||e!==this._$AH&&e!==Ne,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Re(this,h[i+l],t,l),a===Ne&&(a=this._$AH[l]),r||(r=!gt(a)||a!==this._$AH[l]),a===x?e=x:e!==x&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},vl=class extends jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}};const $l=ke?ke.emptyScript:"";let ml=class extends jt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,$l):this.element.removeAttribute(this.name)}},gl=class extends jt{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Re(this,e,t,0))!==null&&i!==void 0?i:x)===Ne)return;const s=this._$AH,o=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==x&&(s===x||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},fl=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}};const an=Zt.litHtmlPolyfillSupport;an==null||an(Xi,os),((bi=Zt.litHtmlVersions)!==null&&bi!==void 0?bi:Zt.litHtmlVersions=[]).push("2.5.0");const _l=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new os(e.insertBefore(mt(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi,xi;let Bt=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=_l(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ne}};Bt.finalized=!0,Bt._$litElement$=!0,(wi=globalThis.litElementHydrateSupport)===null||wi===void 0||wi.call(globalThis,{LitElement:Bt});const dn=globalThis.litElementPolyfillSupport;dn==null||dn({LitElement:Bt});((xi=globalThis.litElementVersions)!==null&&xi!==void 0?xi:globalThis.litElementVersions=[]).push("3.2.0");const Al=cl`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ci;const qt=window,Le=qt.trustedTypes,hn=Le?Le.createPolicy("lit-html",{createHTML:n=>n}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,gr="?"+Z,yl=`<${gr}>`,Be=document,ft=(n="")=>Be.createComment(n),_t=n=>n===null||typeof n!="object"&&typeof n!="function",fr=Array.isArray,bl=n=>fr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cn=/-->/g,un=/>/g,te=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pn=/'/g,vn=/"/g,_r=/^(?:script|style|textarea|title)$/i,wl=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),xl=wl(1),ze=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),$n=new WeakMap,ge=Be.createTreeWalker(Be,129,null,!1),Cl=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=tt;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===tt?d[1]==="!--"?r=cn:d[1]!==void 0?r=un:d[2]!==void 0?(_r.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=te):d[3]!==void 0&&(r=te):r===te?d[0]===">"?(r=s??tt,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?te:d[3]==='"'?vn:pn):r===vn||r===pn?r=te:r===cn||r===un?r=tt:(r=te,s=void 0);const f=r===te&&n[l+1].startsWith("/>")?" ":"";o+=r===tt?a+yl:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+Z+f):a+Z+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[hn!==void 0?hn.createHTML(h):h,i]};let Ji=class Ar{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=Cl(e,t);if(this.el=Ar.createElement(a,i),ge.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=ge.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(Z)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(Z),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?El:m[1]==="?"?Ml:m[1]==="@"?Tl:ei})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(_r.test(s.tagName)){const d=s.textContent.split(Z),c=d.length-1;if(c>0){s.textContent=Le?Le.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],ft()),ge.nextNode(),l.push({type:2,index:++o});s.append(d[c],ft())}}}else if(s.nodeType===8)if(s.data===gr)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(Z,d+1))!==-1;)l.push({type:7,index:o}),d+=Z.length-1}o++}}static createElement(e,t){const i=Be.createElement("template");return i.innerHTML=e,i}};function Ie(n,e,t=n,i){var s,o,r,h;if(e===ze)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=_t(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ie(n,l._$AS(n,e.values),l,i)),e}let Sl=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Be).importNode(i,!0);ge.currentNode=o;let r=ge.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new ls(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new kl(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=ge.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ls=class yr{constructor(e,t,i,s){var o;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),_t(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==ze&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==C&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(Be.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ji.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new Sl(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=$n.get(e.strings);return t===void 0&&$n.set(e.strings,t=new Ji(e)),t}k(e){fr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new yr(this.O(ft()),this.O(ft()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ei=class{constructor(e,t,i,s,o){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=Ie(this,e,t,0),r=!_t(e)||e!==this._$AH&&e!==ze,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Ie(this,h[i+l],t,l),a===ze&&(a=this._$AH[l]),r||(r=!_t(a)||a!==this._$AH[l]),a===C?e=C:e!==C&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},El=class extends ei{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}};const Hl=Le?Le.emptyScript:"";let Ml=class extends ei{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Hl):this.element.removeAttribute(this.name)}},Tl=class extends ei{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ie(this,e,t,0))!==null&&i!==void 0?i:C)===ze)return;const s=this._$AH,o=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==C&&(s===C||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},kl=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}};const mn=qt.litHtmlPolyfillSupport;mn==null||mn(Ji,ls),((Ci=qt.litHtmlVersions)!==null&&Ci!==void 0?Ci:qt.litHtmlVersions=[]).push("2.5.0");const Ol=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new ls(e.insertBefore(ft(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Si,Ei;let zt=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ol(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ze}};zt.finalized=!0,zt._$litElement$=!0,(Si=globalThis.litElementHydrateSupport)===null||Si===void 0||Si.call(globalThis,{LitElement:zt});const gn=globalThis.litElementPolyfillSupport;gn==null||gn({LitElement:zt});((Ei=globalThis.litElementVersions)!==null&&Ei!==void 0?Ei:globalThis.litElementVersions=[]).push("3.2.0");const Nl=xl`
<svg
  class="ia-logo"
  viewBox="0 0 27 30"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="logoTitleID logoDescID"
>
  <title id="logoTitleID">Internet Archive logo</title>
  <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" class="fill-color">
      <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
    </mask>
    <use class="fill-color" xlink:href="#path-1"></use>
    <g mask="url(#mask-2)" class="fill-color">
      <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
    </g>
  </g>
</svg>
`;let Ki=class extends ve{constructor(){super(...arguments),this.config=new No}render(){return D`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?D`<div class="logo-icon">${Nl}</div>`:b}
            ${this.config.title?D`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?D`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?D` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?D` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return D`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${Al}
      </button>
    `}static get styles(){const e=$`var(--modalLogoSize, 6.5rem)`,t=$`var(--processingImageSize, 7.5rem)`,i=$`var(--modalCornerRadius, 1rem)`,s=$`var(--modalBorder, 2px solid black)`,o=$`var(--modalBottomMargin, 2.5rem)`,r=$`var(--modalTopMargin, 5rem)`,h=$`var(--modalHeaderBottomPadding, 0.5em)`,l=$`var(--modalBottomPadding, 2rem)`,a=$`var(--modalScrollOffset, 5px)`,u=$`var(--modalTitleFontSize, 1.8rem)`,d=$`var(--modalSubtitleFontSize, 1.4rem)`,c=$`var(--modalHeadlineFontSize, 1.6rem)`,p=$`var(--modalMessageFontSize, 1.4rem)`,f=$`var(--modalTitleLineHeight, normal)`,m=$`var(--modalSubtitleLineHeight, normal)`,B=$`var(--modalHeadlineLineHeight, normal)`,z=$`var(--modalMessageLineHeight, normal)`;return $`
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
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${s};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${h};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${u};
        font-weight: bold;
        line-height: ${f};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${d};
        line-height: ${m};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${s};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${a}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${o}));
        min-height: 5rem;
        padding: 0 0 calc(${a}) 0;
      }

      .headline {
        font-size: ${c};
        font-weight: bold;
        text-align: center;
        line-height: ${B};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${z};
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
    `}};v([Yt({type:Object})],Ki.prototype,"config",void 0);Ki=v([or("modal-template")],Ki);function Rl(n,e,t){var i=t||{},s=i.noTrailing,o=s===void 0?!1:s,r=i.noLeading,h=r===void 0?!1:r,l=i.debounceMode,a=l===void 0?void 0:l,u,d=!1,c=0;function p(){u&&clearTimeout(u)}function f(B){var z=B||{},k=z.upcomingOnly,K=k===void 0?!1:k;p(),d=!K}function m(){for(var B=arguments.length,z=new Array(B),k=0;k<B;k++)z[k]=arguments[k];var K=this,Ke=Date.now()-c;if(d)return;function G(){c=Date.now(),e.apply(K,z)}function Et(){u=void 0}!h&&a&&!u&&G(),p(),a===void 0&&Ke>n?h?(c=Date.now(),o||(u=setTimeout(a?Et:G,n))):G():o!==!0&&(u=setTimeout(a?Et:G,a===void 0?n-Ke:n))}return m.cancel=f,m}var ae;(function(n){n.Open="open",n.Closed="closed"})(ae||(ae={}));class Ll{constructor(e){this.windowResizeThrottler=Rl(100,this.updateModalContainerHeight).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case ae.Open:this.startResizeListener(),this.stopDocumentScroll();break;case ae.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let Pe=class extends ve{constructor(){super(...arguments),this.mode=ae.Closed,this.hostBridge=new Ll(this),this.closeOnBackdropClick=!0}render(){return D`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=ae.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Rr(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=ae.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=$`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=$`var(--modalBackdropZindex, 1000)`,i=$`var(--modalWidth, 32rem)`,s=$`var(--modalMaxWidth, 95%)`,o=$`var(--modalZindex, 2000)`;return $`
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
        z-index: ${o};
        width: ${i};
        max-width: ${s};
      }
    `}};v([Yt({type:String,reflect:!0})],Pe.prototype,"mode",void 0);v([Yt({type:Object})],Pe.prototype,"customModalContent",void 0);v([Yt({type:Object})],Pe.prototype,"hostBridge",void 0);v([Xo("modal-template")],Pe.prototype,"modalTemplate",void 0);Pe=v([or("modal-manager")],Pe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hi;const Xt=window,De=Xt.trustedTypes,fn=De?De.createPolicy("lit-html",{createHTML:n=>n}):void 0,q=`lit$${(Math.random()+"").slice(9)}$`,br="?"+q,Bl=`<${br}>`,Ue=document,At=(n="")=>Ue.createComment(n),yt=n=>n===null||typeof n!="object"&&typeof n!="function",wr=Array.isArray,zl=n=>wr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_n=/-->/g,An=/>/g,ie=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yn=/'/g,bn=/"/g,xr=/^(?:script|style|textarea|title)$/i,Il=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Pl=Il(1),Ve=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),wn=new WeakMap,fe=Ue.createTreeWalker(Ue,129,null,!1),Dl=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=it;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===it?d[1]==="!--"?r=_n:d[1]!==void 0?r=An:d[2]!==void 0?(xr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=ie):d[3]!==void 0&&(r=ie):r===ie?d[0]===">"?(r=s??it,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?ie:d[3]==='"'?bn:yn):r===bn||r===yn?r=ie:r===_n||r===An?r=it:(r=ie,s=void 0);const f=r===ie&&n[l+1].startsWith("/>")?" ":"";o+=r===it?a+Bl:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+q+f):a+q+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fn!==void 0?fn.createHTML(h):h,i]};let Gi=class Cr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=Dl(e,t);if(this.el=Cr.createElement(a,i),fe.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=fe.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(q)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(q),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?Vl:m[1]==="?"?Fl:m[1]==="@"?Zl:ti})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(xr.test(s.tagName)){const d=s.textContent.split(q),c=d.length-1;if(c>0){s.textContent=De?De.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],At()),fe.nextNode(),l.push({type:2,index:++o});s.append(d[c],At())}}}else if(s.nodeType===8)if(s.data===br)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(q,d+1))!==-1;)l.push({type:7,index:o}),d+=q.length-1}o++}}static createElement(e,t){const i=Ue.createElement("template");return i.innerHTML=e,i}};function We(n,e,t=n,i){var s,o,r,h;if(e===Ve)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=yt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=We(n,l._$AS(n,e.values),l,i)),e}let Ul=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ue).importNode(i,!0);fe.currentNode=o;let r=fe.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new as(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new ql(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=fe.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},as=class Sr{constructor(e,t,i,s){var o;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),yt(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Ve&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==S&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ue.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Gi.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new Ul(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=wn.get(e.strings);return t===void 0&&wn.set(e.strings,t=new Gi(e)),t}k(e){wr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Sr(this.O(At()),this.O(At()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ti=class{constructor(e,t,i,s,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=We(this,e,t,0),r=!yt(e)||e!==this._$AH&&e!==Ve,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=We(this,h[i+l],t,l),a===Ve&&(a=this._$AH[l]),r||(r=!yt(a)||a!==this._$AH[l]),a===S?e=S:e!==S&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vl=class extends ti{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}};const Wl=De?De.emptyScript:"";let Fl=class extends ti{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,Wl):this.element.removeAttribute(this.name)}},Zl=class extends ti{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=We(this,e,t,0))!==null&&i!==void 0?i:S)===Ve)return;const s=this._$AH,o=e===S&&s!==S||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==S&&(s===S||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ql=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};const xn=Xt.litHtmlPolyfillSupport;xn==null||xn(Gi,as),((Hi=Xt.litHtmlVersions)!==null&&Hi!==void 0?Hi:Xt.litHtmlVersions=[]).push("2.5.0");const Xl=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new as(e.insertBefore(At(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mi,Ti;let ot=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Xl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ve}};ot.finalized=!0,ot._$litElement$=!0,(Mi=globalThis.litElementHydrateSupport)===null||Mi===void 0||Mi.call(globalThis,{LitElement:ot});const Cn=globalThis.litElementPolyfillSupport;Cn==null||Cn({LitElement:ot});((Ti=globalThis.litElementVersions)!==null&&Ti!==void 0?Ti:globalThis.litElementVersions=[]).push("3.2.0");const Jl=Pl`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`;class Kl extends ot{static get styles(){return $`
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
    `}render(){return Jl}}customElements.define("ia-icon-ellipses",Kl);const Gl=$`42px`,ki=$`var(--menuWidth, 320px)`,Sn=$`var(--animationTiming, 200ms)`,Yl=$`
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${Sn} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${ki};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${ki} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    outline: none;
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
    outline: none;
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
    left: ${Gl};
    z-index: 1;
    transform: translateX(calc(${ki} * -1));
    transition: transform ${Sn} ease-out;
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oi;const Jt=window,Fe=Jt.trustedTypes,En=Fe?Fe.createPolicy("lit-html",{createHTML:n=>n}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Er="?"+X,Ql=`<${Er}>`,Ze=document,bt=(n="")=>Ze.createComment(n),wt=n=>n===null||typeof n!="object"&&typeof n!="function",Hr=Array.isArray,jl=n=>Hr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hn=/-->/g,Mn=/>/g,se=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tn=/'/g,kn=/"/g,Mr=/^(?:script|style|textarea|title)$/i,ea=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ta=ea(1),qe=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),On=new WeakMap,_e=Ze.createTreeWalker(Ze,129,null,!1),ia=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":"",r=st;for(let l=0;l<t;l++){const a=n[l];let u,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===st?d[1]==="!--"?r=Hn:d[1]!==void 0?r=Mn:d[2]!==void 0?(Mr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=se):d[3]!==void 0&&(r=se):r===se?d[0]===">"?(r=s??st,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?se:d[3]==='"'?kn:Tn):r===kn||r===Tn?r=se:r===Hn||r===Mn?r=st:(r=se,s=void 0);const f=r===se&&n[l+1].startsWith("/>")?" ":"";o+=r===st?a+Ql:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+X+f):a+X+(c===-2?(i.push(void 0),l):f)}const h=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[En!==void 0?En.createHTML(h):h,i]};class xt{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const h=e.length-1,l=this.parts,[a,u]=ia(e,t);if(this.el=xt.createElement(a,i),_e.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=_e.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(X)){const p=u[r++];if(d.push(c),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(X),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?na:m[1]==="?"?oa:m[1]==="@"?la:ii})}else l.push({type:6,index:o})}for(const c of d)s.removeAttribute(c)}if(Mr.test(s.tagName)){const d=s.textContent.split(X),c=d.length-1;if(c>0){s.textContent=Fe?Fe.emptyScript:"";for(let p=0;p<c;p++)s.append(d[p],bt()),_e.nextNode(),l.push({type:2,index:++o});s.append(d[c],bt())}}}else if(s.nodeType===8)if(s.data===Er)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(X,d+1))!==-1;)l.push({type:7,index:o}),d+=X.length-1}o++}}static createElement(e,t){const i=Ze.createElement("template");return i.innerHTML=e,i}}function Xe(n,e,t=n,i){var s,o,r,h;if(e===qe)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=wt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((r=(h=t)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Xe(n,l._$AS(n,e.values),l,i)),e}class sa{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ze).importNode(i,!0);_e.currentNode=o;let r=_e.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let u;a.type===2?u=new St(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new aa(r,this,e)),this.u.push(u),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=_e.nextNode(),h++)}return o}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class St{constructor(e,t,i,s){var o;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),wt(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==qe&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==E&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ze.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=xt.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const r=new sa(o,this),h=r.v(this.options);r.p(i),this.T(h),this._$AH=r}}_$AC(e){let t=On.get(e.strings);return t===void 0&&On.set(e.strings,t=new xt(e)),t}k(e){Hr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new St(this.O(bt()),this.O(bt()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ii{constructor(e,t,i,s,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=Xe(this,e,t,0),r=!wt(e)||e!==this._$AH&&e!==qe,r&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Xe(this,h[i+l],t,l),a===qe&&(a=this._$AH[l]),r||(r=!wt(a)||a!==this._$AH[l]),a===E?e=E:e!==E&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class na extends ii{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}const ra=Fe?Fe.emptyScript:"";class oa extends ii{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,ra):this.element.removeAttribute(this.name)}}class la extends ii{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Xe(this,e,t,0))!==null&&i!==void 0?i:E)===qe)return;const s=this._$AH,o=e===E&&s!==E||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==E&&(s===E||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class aa{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}}const Nn=Jt.litHtmlPolyfillSupport;Nn==null||Nn(xt,St),((Oi=Jt.litHtmlVersions)!==null&&Oi!==void 0?Oi:Jt.litHtmlVersions=[]).push("2.5.0");const da=(n,e,t)=>{var i,s;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=o._$litPart$;if(r===void 0){const h=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new St(e.insertBefore(bt(),h),h,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ni,Ri;class lt extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=da(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return qe}}lt.finalized=!0,lt._$litElement$=!0,(Ni=globalThis.litElementHydrateSupport)===null||Ni===void 0||Ni.call(globalThis,{LitElement:lt});const Rn=globalThis.litElementPolyfillSupport;Rn==null||Rn({LitElement:lt});((Ri=globalThis.litElementVersions)!==null&&Ri!==void 0?Ri:globalThis.litElementVersions=[]).push("3.2.0");const ha=ta`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`;class ca extends lt{static get styles(){return $`
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
    `}render(){return ha}}customElements.define("ia-icon-collapse-sidebar",ca);const ua=$`
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

  .menu-item:focus {
    outline: none;
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
`;let I=class extends L{constructor(){super(...arguments),this.icon="",this.href="",this.label="",this.menuDetails="",this.buttonId="",this.selected=!1,this.followable=!1}static get styles(){return ua}onClick(e){e.preventDefault(),this.dispatchMenuTypeSelectedEvent()}dispatchMenuTypeSelectedEvent(){this.dispatchEvent(new CustomEvent("menuTypeSelected",{bubbles:!0,composed:!0,detail:{id:this.buttonId}}))}get buttonClass(){return this.selected?"selected":""}get iconClass(){return this.selected?"active":""}get menuItem(){return _`
      <span class="icon ${this.iconClass}"> ${this.icon} </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `}get linkButton(){return _`
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable?void 0:this.onClick}
        >${this.menuItem}</a
      >
    `}get clickButton(){return _`
      <button class="menu-item ${this.buttonClass}" @click=${this.onClick}>
        ${this.menuItem}
      </button>
    `}render(){return this.href?this.linkButton:this.clickButton}};v([g({type:String})],I.prototype,"icon",void 0);v([g({type:String})],I.prototype,"href",void 0);v([g({type:String})],I.prototype,"label",void 0);v([g({type:String})],I.prototype,"menuDetails",void 0);v([g({type:String})],I.prototype,"buttonId",void 0);v([g({type:Boolean})],I.prototype,"selected",void 0);v([g({type:Boolean})],I.prototype,"followable",void 0);I=v([Je("menu-button")],I);const pa={closeDrawer:"menuSliderClosed"};let J=class extends L{constructor(){super(...arguments),this.menus=[],this.open=!1,this.manuallyHandleClose=!1,this.selectedMenu="",this.selectedMenuAction=A,this.animateMenuOpen=!1}static get styles(){return Yl}updated(){const{actionButton:e}=this.selectedMenuDetails||{};e!==this.selectedMenuAction&&(this.selectedMenuAction=e||A)}setSelectedMenu({detail:e}){const{id:t}=e;this.selectedMenu=this.selectedMenu===t?"":t;const{actionButton:i}=this.selectedMenuDetails||{};this.selectedMenuAction=i||A}closeMenu(){this.manuallyHandleClose||(this.open=!1);const{closeDrawer:e}=pa,t=new CustomEvent(e,{detail:this.selectedMenuDetails});this.dispatchEvent(t)}get selectedMenuDetails(){return this.menus.find(t=>t.id===this.selectedMenu)}get selectedMenuComponent(){const e=this.selectedMenuDetails;return e&&(e!=null&&e.component)?e.component:_``}get sliderDetailsClass(){const e=this.animateMenuOpen?"animate":"",t=this.open?"open":"";return`${e} ${t}`}get selectedMenuClass(){return this.selectedMenu?"open":""}get menuItems(){return this.menus.map(e=>_`
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${e.icon}
            .label=${e.label}
            .menuDetails=${e.menuDetails}
            .id=${e.id}
            .selected=${e.id===this.selectedMenu}
            .followable=${e.followable}
            .href=${e.href}
          ></menu-button>
        </li>
      `)}get renderMenuHeader(){const{label:e="",menuDetails:t=""}=this.selectedMenuDetails||{},i=this.selectedMenuAction?"with-secondary-action":"",s=this.selectedMenuAction?_`<span class="custom-action">${this.selectedMenuAction}</span>`:A;return _`
      <header class="${i}">
        <div class="details">
          <h3>${e}</h3>
          <span class="extra-details">${t}</span>
        </div>
        ${s} ${this.closeButton}
      </header>
    `}get closeButton(){return _`
      <button
        class="close"
        aria-label="Close this menu"
        @click=${this.closeMenu}
      >
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `}render(){return _`
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
    `}};v([g({type:Array})],J.prototype,"menus",void 0);v([g({type:Boolean})],J.prototype,"open",void 0);v([g({type:Boolean})],J.prototype,"manuallyHandleClose",void 0);v([g({type:String})],J.prototype,"selectedMenu",void 0);v([g({type:Object})],J.prototype,"selectedMenuAction",void 0);v([g({type:Boolean})],J.prototype,"animateMenuOpen",void 0);J=v([Je("ia-menu-slider")],J);let Yi=class extends L{constructor(){super(...arguments),this.loaderMessage=""}get bookIconSvg(){return _s`
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `}get icon(){return this.bookIconSvg}get loader(){return _s`
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
    `}render(){const e=this.loaderMessage?_`<h2>${this.loaderMessage}</h2>`:A;return _`
      <div class="place-holder">
        ${e} ${this.loader}
        <h3>Loading viewer</h3>
      </div>
    `}static get styles(){return $`
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
    `}};v([g({type:String})],Yi.prototype,"loaderMessage",void 0);Yi=v([Je("ia-itemnav-loader")],Yi);let Qi=class extends L{constructor(){super(...arguments),this.identifier=""}emitLoaded(){this.dispatchEvent(new CustomEvent("loadingStateUpdated",{detail:{loaded:!0}}))}updated(e){e.has("identifier")&&this.emitLoaded()}get downloadUrl(){return`/download/${this.identifier}`}render(){return _`
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
    `}static get styles(){return $`
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
        outline: none;
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
    `}};v([g({type:String})],Qi.prototype,"identifier",void 0);Qi=v([Je("ia-no-theater-available")],Qi);let H=class extends L{constructor(){super(...arguments),this.viewAvailable=!0,this.baseHost="archive.org",this.signedIn=!1,this.menuContents=[],this.menuShortcuts=[],this.viewportInFullscreen=null,this.menuOpened=!1,this.loaded=null,this.openMenuState="shift"}disconnectedCallback(){this.removeResizeObserver()}updated(e){if(e.has("sharedObserver")){const t=e.get("sharedObserver");t==null||t.removeObserver(this.resizeObserverConfig),this.setResizeObserver()}}handleResize(e){const{width:t}=e.contentRect;if(t<=600){this.openMenuState="overlay";return}this.openMenuState="shift"}setResizeObserver(){var e,t;(e=this.sharedObserver)===null||e===void 0||e.addObserver(this.resizeObserverConfig),(t=this.sharedObserver)===null||t===void 0||t.addObserver({target:this.headerSlot,handler:{handleResize:({contentRect:i})=>{i.height&&this.requestUpdate()}}})}removeResizeObserver(){var e;(e=this.sharedObserver)===null||e===void 0||e.removeObserver(this.resizeObserverConfig)}get resizeObserverConfig(){return{handler:this,target:this.frame}}get loaderTitle(){return this.viewportInFullscreen?"Internet Archive":""}get loadingArea(){return _`
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader
            .loaderMessage=${this.loaderTitle}
          ></ia-itemnav-loader>
        </div>
      </div>
    `}slotChange(e,t){var i;const s=(i=e.target.assignedNodes())===null||i===void 0?void 0:i[0];this.dispatchEvent(new CustomEvent("slotChange",{detail:{slot:s,type:t}})),this.requestUpdate()}render(){var e,t;const i=this.loaded?"":"hidden",s=((t=(e=this.headerSlot)===null||e===void 0?void 0:e.assignedNodes()[0])===null||t===void 0?void 0:t.offsetHeight)||0;return _`
      <div id="frame" class=${this.menuClass}>
        <slot
          name="header"
          style=${`height: ${s}px`}
          @slotchange=${o=>this.slotChange(o,"header")}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu?this.renderSideMenu:A}
          <div id="reader" class=${i}>
            ${this.renderViewport}
          </div>
          ${this.loaded?A:this.loadingArea}
        </div>
      </div>
    `}get noTheaterView(){var e,t;return _`<ia-no-theater-available
      .identifier=${(t=(e=this.item)===null||e===void 0?void 0:e.metadata)===null||t===void 0?void 0:t.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`}get renderViewport(){if(!this.viewAvailable)return this.noTheaterView;const e=this.loaded?"opacity: 1;":"opacity: 0;";return _`
      <div slot="main" style=${e}>
        <slot
          name="main"
          @slotchange=${t=>this.slotChange(t,"main")}
        ></slot>
      </div>
    `}loadingStateUpdated(e){const{loaded:t}=e.detail;this.loaded=t||null}manageViewportFullscreen(e){const t=!!e.detail.isFullScreen;this.viewportInFullscreen=t||null;const i=new CustomEvent("fullscreenToggled",{detail:e.detail});this.dispatchEvent(i)}get shouldRenderMenu(){var e;return!!(!((e=this.menuContents)===null||e===void 0)&&e.length)}toggleMenu(){this.menuOpened=!this.menuOpened}closeMenu(){this.menuOpened=!1}setOpenMenu(e){const{id:t}=e.detail;this.openMenu=t!==this.openMenu?t:void 0}setMenuContents(e){const t=[...e.detail];this.menuContents=t}setMenuShortcuts(e){this.menuShortcuts=[...e.detail]}manageSideMenuEvents(e){const{menuId:t,action:i}=e.detail;t&&(i==="open"?this.openShortcut(t):i==="toggle"&&(this.openMenu=t,this.toggleMenu()))}get menuToggleButton(){return _`
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
    `}get selectedMenuId(){return this.openMenu||""}get renderSideMenu(){const e=this.menuOpened?"":"hidden";return _`
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
    `}openShortcut(e=""){this.openMenu=e,this.menuOpened=!0}get shortcuts(){const e=this.menuShortcuts.map(({icon:t,id:i})=>i==="fullscreen"?_`${t}`:_`
        <button class="shortcut ${i}" @click="${()=>this.openShortcut(i)}">
          ${t}
        </button>
      `);return _`<div class="shortcuts">${e}</div>`}get menuClass(){var e,t;const i=((e=this.menuContents)===null||e===void 0?void 0:e.length)||((t=this.menuShortcuts)===null||t===void 0?void 0:t.length),s=this.menuOpened&&i?"open":"",o=this.viewportInFullscreen?"fullscreen":"";return`${s} ${o} ${this.openMenuState}`}static get styles(){const e=$`var(--menuWidth, 320px)`,t=$`var(--animationTiming, 200ms)`,i=$`transform ${t} ease-out`,s=$`var(--theaterMenuMargin, 42px)`,o=$`var(--theaterBgColor, #000)`;return $`
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
        background-color: ${o};
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

      button:focus,
      button:active {
        outline: none;
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
        width: ${s};
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
        width: ${s};
        height: ${s};
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
    `}};v([g({type:Object,converter:n=>n&&typeof n=="string"?new Xn(JSON.parse(atob(n))):n})],H.prototype,"item",void 0);v([g({type:Boolean})],H.prototype,"viewAvailable",void 0);v([g({type:String})],H.prototype,"baseHost",void 0);v([g({converter:n=>typeof n=="boolean"?n:n==="true"})],H.prototype,"signedIn",void 0);v([g({type:Array})],H.prototype,"menuContents",void 0);v([g({type:Array})],H.prototype,"menuShortcuts",void 0);v([g({type:Boolean,reflect:!0,attribute:!0})],H.prototype,"viewportInFullscreen",void 0);v([g({type:Boolean})],H.prototype,"menuOpened",void 0);v([g({type:String})],H.prototype,"openMenu",void 0);v([g({attribute:!1})],H.prototype,"modal",void 0);v([g({attribute:!1})],H.prototype,"sharedObserver",void 0);v([g({type:Boolean,reflect:!0,attribute:!0})],H.prototype,"loaded",void 0);v([eo()],H.prototype,"openMenuState",void 0);v([Ct("#frame")],H.prototype,"frame",void 0);v([Ct('slot[name="header"]')],H.prototype,"headerSlot",void 0);v([Ct('slot[name="main"]')],H.prototype,"mainSlot",void 0);H=v([Je("ia-item-navigator")],H);let M=class extends L{constructor(){super(...arguments),this.encodedManifest="",this.sharedObserver=new Oo,this.menuContents=[],this.menuShortcuts=[],this.fullscreen=null,this.headerOn=null,this.loaded=!0,this.showPlaceholder=null,this.showTheaterExample=!0}firstUpdated(){this.fetchItemMD(),console.log("<app-root> component has loaded",this.modalMgr,this.sharedObserver),this.itemNav.viewAvailable=!1}updated(e){console.log("changed",e),e.has("itemMD")&&this.fullscreenCheck()}async fetchItemMD(){const t=await Wi.default.fetchMetadata("ux-team-books");if(t.error){console.log("MD Fetch error: ",t.error),window.confirm("There was an error fetching response, please check dev console");return}console.log("mdResponse.success",JSON.stringify(t.success)),this.itemMD=t.success}get theaterReady(){return this.modalMgr&&this.sharedObserver&&!!this.itemMD}get urlParams(){return new URLSearchParams(location.search.slice(1))}get showFullscreen(){return this.urlParams.get("view")==="theater"}toggleFS(){this.urlParams.get("view")?location.search="":location.search="view=theater"}fullscreenCheck(){this.showFullscreen&&this.itemNav&&(this.fullscreen=!0)}toggleHeader(){this.headerOn=this.headerOn?null:!0}toggleLoader(){const e=this.loaded===!0?null:!0;this.loaded=e}togglePlaceholder(){this.toggleLoader();const e=this.showPlaceholder?null:!0;this.showPlaceholder=e}toggleImmersion(){const e=this.fullscreen?null:!0;if(!e){this.menuShortcuts=[];return}this.menuShortcuts=[{icon:_`<button
          @click=${()=>{this.fullscreen=null,this.menuContents=[],this.menuShortcuts=[]}}
        >
          Exit
        </button>`,id:"exit"}],this.menuContents=[{icon:_`<button
          @click=${()=>{this.fullscreen=null}}
        >
          Exit
        </button>`,id:"exit",label:"Exit",selected:!1}],this.fullscreen=e}toggleTheaterExample(){if(this.showTheaterExample){this.showPlaceholder=!0,this.showTheaterExample=null,this.menuContents=[],this.menuShortcuts=[];return}this.showPlaceholder=null,this.showTheaterExample=!0;const e={icon:_`<p style="color: red">Allo</p>`,id:"a",label:"Hello world",menuDetails:_`<h3>Wheee!</h3>`};this.menuContents=[e],this.menuShortcuts=[e]}get theaterExample(){return _`
      <div slot="main">
        <div class="theater-example">
          <img
            alt="cat theater"
            src="https://archive.org/download/encyclopediaofca0000poll_t2e2/__ia_thumb.jpg"
          />
          <h3>Welcome to Cat Theater</h3>
        </div>
      </div>
    `}get headerExample(){return _`
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
    `}get isViewAvailable(){return!!this.showTheaterExample}render(){const{isViewAvailable:e,loaded:t,showPlaceholder:i,headerOn:s,fullscreen:o,menuContents:r,menuShortcuts:h,showTheaterExample:l}=this;return console.log("&&&& item nav properties",{loaded:t,headerOn:s,isViewAvailable:e,showTheaterExample:l,showPlaceholder:i,fullscreen:o,menuContents:r,menuShortcuts:h}),_`
      <h1>theater, in page</h1>
      <section>
        <ia-item-navigator
          baseHost="https://archive.org"
          .item=${this.itemMD}
          .modal=${this.modalMgr}
          .sharedObserver=${this.sharedObserver}
          .loaded=${this.loaded}
          ?viewAvailable=${!!this.showTheaterExample}
          .menuContents=${this.menuContents}
          .menuShortcuts=${this.menuShortcuts}
          .viewportInFullscreen=${this.fullscreen}
        >
          ${this.headerOn?this.headerExample:""}
          ${this.showTheaterExample?this.theaterExample:""}
        </ia-item-navigator>
      </section>
      <div>
        <button @click=${this.toggleHeader}>toggle header</button>
        <button @click=${this.toggleLoader}>toggle loader</button>
        <button @click=${this.togglePlaceholder}>toggle placeholder</button>
        <button @click=${this.toggleTheaterExample}>toggle new theater</button>
        <button @click=${this.toggleImmersion}>toggle immersion</button>
      </div>
      <modal-manager></modal-manager>
    `}};M.styles=$`
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
    ia-item-navigator {
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
  `;v([g({type:Object})],M.prototype,"itemMD",void 0);v([g({type:String})],M.prototype,"encodedManifest",void 0);v([g({attribute:!1})],M.prototype,"sharedObserver",void 0);v([g({type:Array,attribute:!1})],M.prototype,"menuContents",void 0);v([g({type:Array,attribute:!1})],M.prototype,"menuShortcuts",void 0);v([g({reflect:!0,attribute:!0})],M.prototype,"fullscreen",void 0);v([g({reflect:!0,attribute:!0})],M.prototype,"headerOn",void 0);v([g({reflect:!0,attribute:!0})],M.prototype,"loaded",void 0);v([g({reflect:!0,attribute:!0})],M.prototype,"showPlaceholder",void 0);v([g({reflect:!0,attribute:!0})],M.prototype,"showTheaterExample",void 0);v([Ct("ia-item-navigator")],M.prototype,"itemNav",void 0);v([Ct("modal-manager")],M.prototype,"modalMgr",void 0);M=v([Je("app-root")],M);
