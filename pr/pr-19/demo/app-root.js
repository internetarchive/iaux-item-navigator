(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const od=new URLSearchParams(location.search.slice(1));od.get("view")==="theater"&&document.querySelector("body").classList.toggle("fullscreen");function f(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var d=n.length-1;d>=0;d--)(o=n[d])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function rd(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function d(p){try{a(i.next(p))}catch(h){o(h)}}function l(p){try{a(i.throw(p))}catch(h){o(h)}}function a(p){p.done?r(p.value):s(p.value).then(d,l)}a((i=i.apply(n,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=window,Ho=fs.ShadowRoot&&(fs.ShadyCSS===void 0||fs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Aa=Symbol(),Zo=new WeakMap;let ld=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Aa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ho&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Zo.set(t,e))}return e}toString(){return this.cssText}};const ad=n=>new ld(typeof n=="string"?n:n+"",void 0,Aa),hd=(n,e)=>{Ho?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=fs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},qo=Ho?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ad(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tn;const ys=window,Xo=ys.trustedTypes,dd=Xo?Xo.emptyScript:"",Jo=ys.reactiveElementPolyfillSupport,io={toAttribute(n,e){switch(e){case Boolean:n=n?dd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ya=(n,e)=>e!==n&&(e==e||n==n),sn={attribute:!0,type:String,converter:io,reflect:!1,hasChanged:ya},so="finalized";let ti=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=sn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||sn}static finalize(){if(this.hasOwnProperty(so))return!1;this[so]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(qo(s))}else e!==void 0&&t.push(qo(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return hd(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=sn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:io).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:io;this._$El=r,this[r]=d.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ya)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ti[so]=!0,ti.elementProperties=new Map,ti.elementStyles=[],ti.shadowRootOptions={mode:"open"},Jo==null||Jo({ReactiveElement:ti}),((tn=ys.reactiveElementVersions)!==null&&tn!==void 0?tn:ys.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nn;const bs=window,et=bs.trustedTypes,Ko=et?et.createPolicy("lit-html",{createHTML:n=>n}):void 0,xs="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,Eo="?"+q,cd=`<${Eo}>`,Be=document,Ei=()=>Be.createComment(""),Ti=n=>n===null||typeof n!="object"&&typeof n!="function",ba=Array.isArray,xa=n=>ba(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",on=`[ 	
\f\r]`,ii=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Go=/-->/g,Yo=/>/g,pe=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qo=/'/g,jo=/"/g,wa=/^(?:script|style|textarea|title)$/i,Ca=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),_=Ca(1),er=Ca(2),Ie=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),tr=new WeakMap,Ee=Be.createTreeWalker(Be,129,null,!1);function Sa(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ko!==void 0?Ko.createHTML(e):e}const Ha=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ii;for(let d=0;d<t;d++){const l=n[d];let a,p,h=-1,c=0;for(;c<l.length&&(o.lastIndex=c,p=o.exec(l),p!==null);)c=o.lastIndex,o===ii?p[1]==="!--"?o=Go:p[1]!==void 0?o=Yo:p[2]!==void 0?(wa.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=pe):p[3]!==void 0&&(o=pe):o===pe?p[0]===">"?(o=s??ii,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,a=p[1],o=p[3]===void 0?pe:p[3]==='"'?jo:Qo):o===jo||o===Qo?o=pe:o===Go||o===Yo?o=ii:(o=pe,s=void 0);const u=o===pe&&n[d+1].startsWith("/>")?" ":"";r+=o===ii?l+cd:h>=0?(i.push(a),l.slice(0,h)+xs+l.slice(h)+q+u):l+q+(h===-2?(i.push(void 0),d):u)}return[Sa(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let no=class Ea{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Ha(e,t);if(this.el=Ea.createElement(a,i),Ee.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ee.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith(xs)||c.startsWith(q)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+xs).split(q),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?Ma:v[1]==="?"?Na:v[1]==="@"?Ba:rs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(wa.test(s.tagName)){const h=s.textContent.split(q),c=h.length-1;if(c>0){s.textContent=et?et.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Ei()),Ee.nextNode(),l.push({type:2,index:++r});s.append(h[c],Ei())}}}else if(s.nodeType===8)if(s.data===Eo)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(q,h+1))!==-1;)l.push({type:7,index:r}),h+=q.length-1}r++}}static createElement(e,t){const i=Be.createElement("template");return i.innerHTML=e,i}};function Oe(n,e,t=n,i){var s,r,o,d;if(e===Ie)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Ti(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Oe(n,l._$AS(n,e.values),l,i)),e}let Ta=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Be).importNode(i,!0);Ee.currentNode=r;let o=Ee.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Ds(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Ia(o,this,e)),this._$AV.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ee.nextNode(),d++)}return Ee.currentNode=Be,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ds=class ka{constructor(e,t,i,s){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oe(this,e,t),Ti(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xa(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&Ti(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=no.createElement(Sa(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Ta(r,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(e){let t=tr.get(e.strings);return t===void 0&&tr.set(e.strings,t=new no(e)),t}T(e){ba(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ka(this.k(Ei()),this.k(Ei()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},rs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Oe(this,e,t,0),o=!Ti(e)||e!==this._$AH&&e!==Ie,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Oe(this,d[i+l],t,l),a===Ie&&(a=this._$AH[l]),o||(o=!Ti(a)||a!==this._$AH[l]),a===A?e=A:e!==A&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ma=class extends rs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}};const ud=et?et.emptyScript:"";class Na extends rs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,ud):this.element.removeAttribute(this.name)}}let Ba=class extends rs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Oe(this,e,t,0))!==null&&i!==void 0?i:A)===Ie)return;const s=this._$AH,r=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==A&&(s===A||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ia=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}};const pd={O:xs,P:q,A:Eo,C:1,M:Ha,L:Ta,R:xa,D:Oe,I:Ds,V:rs,H:Na,N:Ba,U:Ma,F:Ia},ir=bs.litHtmlPolyfillSupport;ir==null||ir(no,Ds),((nn=bs.litHtmlVersions)!==null&&nn!==void 0?nn:bs.litHtmlVersions=[]).push("2.8.0");const $d=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Ds(e.insertBefore(Ei(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=window,To=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ko=Symbol(),sr=new WeakMap;let Oa=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ko)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(To&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=sr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&sr.set(t,e))}return e}toString(){return this.cssText}};const vd=n=>new Oa(typeof n=="string"?n:n+"",void 0,ko),m=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Oa(t,n,ko)},fd=(n,e)=>{To?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=gs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},nr=To?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return vd(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rn;const ws=window,or=ws.trustedTypes,gd=or?or.emptyScript:"",rr=ws.reactiveElementPolyfillSupport,oo={toAttribute(n,e){switch(e){case Boolean:n=n?gd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ra=(n,e)=>e!==n&&(e==e||n==n),ln={attribute:!0,type:String,converter:oo,reflect:!1,hasChanged:Ra};let w=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=ln){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ln}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(nr(s))}else e!==void 0&&t.push(nr(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fd(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ln){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:oo).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:oo;this._$El=r,this[r]=d.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ra)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},rr==null||rr({ReactiveElement:w}),((rn=ws.reactiveElementVersions)!==null&&rn!==void 0?rn:ws.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var an,hn;let U=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$d(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ie}};U.finalized=!0,U._$litElement$=!0,(an=globalThis.litElementHydrateSupport)===null||an===void 0||an.call(globalThis,{LitElement:U});const lr=globalThis.litElementPolyfillSupport;lr==null||lr({LitElement:U});((hn=globalThis.litElementVersions)!==null&&hn!==void 0?hn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const md=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},_d=(n,e,t)=>{e.constructor.createProperty(t,n)};function g(n){return(e,t)=>t!==void 0?_d(n,e,t):md(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ad(n){return g({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yd=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(d){n(d,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ls(n,e){return yd({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dn;((dn=window.HTMLSlotElement)===null||dn===void 0?void 0:dn.prototype.assignedElements)!=null;class ro{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}ro.shared=new ro;class Te{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Te.shared=new Te;class Cs{parseValue(e){return Te.shared.parseValue(e)}}Cs.shared=new Cs;class ki{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}ki.shared=new ki;class Ss{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((s,r)=>{const o=parseFloat(s);if(Number.isNaN(o))return t=!0,0;const l=60**(e.length-1-r);return o*Math.floor(l)}).reduce((s,r)=>s+r,0);return t?void 0:i}}Ss.shared=new Ss;var V;(function(n){n.Audio="audio",n.Collection="collection",n.Data="data",n.Etree="etree",n.Image="image",n.Movies="movies",n.Software="software",n.Texts="texts",n.Web="web"})(V||(V={}));class lo{parseValue(e){if(typeof e!="string")return;switch(e.toLowerCase()){case"audio":return V.Audio;case"collection":return V.Collection;case"data":return V.Data;case"etree":return V.Etree;case"image":return V.Image;case"movies":return V.Movies;case"software":return V.Software;case"texts":return V.Texts;case"web":return V.Web;default:return}}}lo.shared=new lo;var ar;(function(n){n.RightToLeft="rl",n.LeftToRight="lr"})(ar||(ar={}));class ao{parseValue(e){return String(e)}}ao.shared=new ao;class Le{constructor(e,t){this.values=[],this.parser=e,this.rawValue=t,this.processRawValue()}get value(){return this.values.length>0?this.values[0]:void 0}processRawValue(){this.rawValue!==void 0&&(Array.isArray(this.rawValue)?this.rawValue.forEach(e=>{this.parseAndPersistValue(e)}):this.parseAndPersistValue(this.rawValue))}parseAndPersistValue(e){const t=this.parser.parseValue(e);t!==void 0&&this.values.push(t)}}class bd extends Le{constructor(e){super(ro.shared,e)}}class K extends Le{constructor(e){super(ki.shared,e)}}class cn extends Le{constructor(e){super(Ss.shared,e)}}class W extends Le{constructor(e){super(Te.shared,e)}}class b extends Le{constructor(e){super(ao.shared,e)}}class hr extends Le{constructor(e){super(Cs.shared,e)}}class xd extends Le{constructor(e){super(lo.shared,e)}}class La{constructor(e){this.rawMetadata=e,this.identifier=e.identifier,this.addeddate=e.addeddate?new K(e.addeddate):void 0,this.publicdate=e.publicdate?new K(e.publicdate):void 0,this.indexdate=e.indexdate?new K(e.indexdate):void 0,this.audio_codec=e.audio_codec?new b(e.audio_codec):void 0,this.audio_sample_rate=e.audio_sample_rate?new W(e.audio_sample_rate):void 0,this.collection=e.collection?new b(e.collection):void 0,this.collections_raw=e.collections_raw?new b(e.collections_raw):void 0,this.collection_size=e.collection_size?new hr(e.collection_size):void 0,this.contributor=e.contributor?new b(e.contributor):void 0,this.coverage=e.coverage?new b(e.coverage):void 0,this.creator=e.creator?new b(e.creator):void 0,this.date=e.date?new K(e.date):void 0,this.description=e.description?new b(e.description):void 0,this.downloads=e.downloads?new W(e.downloads):void 0,this.duration=e.duration?new cn(e.duration):void 0,this.files_count=e.files_count?new W(e.files_count):void 0,this.item_count=e.item_count?new W(e.item_count):void 0,this.item_size=e.item_size?new hr(e.item_size):void 0,this.language=e.language?new b(e.language):void 0,this.length=e.length?new cn(e.length):void 0,this.lineage=e.lineage?new b(e.lineage):void 0,this.mediatype=e.mediatype?new xd(e.mediatype):void 0,this.month=e.month?new W(e.month):void 0,this.noindex=e.noindex?new bd(e.noindex):void 0,this.notes=e.notes?new b(e.notes):void 0,this.num_favorites=e.num_favorites?new W(e.num_favorites):void 0,this.num_reviews=e.num_reviews?new W(e.num_reviews):void 0,this.runtime=e.runtime?new cn(e.runtime):void 0,this.scanner=e.scanner?new b(e.scanner):void 0,this.source=e.source?new b(e.source):void 0,this.start_localtime=e.start_localtime?new K(e.start_localtime):void 0,this.start_time=e.start_time?new K(e.start_time):void 0,this.stop_time=e.stop_time?new K(e.stop_time):void 0,this.subject=e.subject?new b(e.subject):void 0,this.taper=e.taper?new b(e.taper):void 0,this.title=e.title?new b(e.title):void 0,this.track=e.track?new W(e.track):void 0,this.transferer=e.transferer?new b(e.transferer):void 0,this.type=e.type?new b(e.type):void 0,this.uploader=e.uploader?new b(e.uploader):void 0,this.utc_offset=e.utc_offset?new W(e.utc_offset):void 0,this.venue=e.venue?new b(e.venue):void 0,this.week=e.week?new W(e.week):void 0,this.year=e.year?new K(e.year):void 0}}class wd{constructor(e){this.name=e.name,this.source=e.source,this.btih=e.btih,this.md5=e.md5,this.format=e.format,this.mtime=e.mtime,this.crc32=e.crc32,this.sha1=e.sha1,this.original=e.original,this.title=e.title,this.length=e.length?Ss.shared.parseValue(e.length):void 0,this.size=e.size?Cs.shared.parseValue(e.size):void 0,this.height=e.height?Te.shared.parseValue(e.height):void 0,this.width=e.width?Te.shared.parseValue(e.width):void 0,this.track=e.track?Te.shared.parseValue(e.track):void 0,this.external_identifier=e["external-identifier"],this.creator=e.creator,this.album=e.album}}class Cd{constructor(e){this.reviewbody=e.reviewbody,this.reviewtitle=e.reviewtitle,this.reviewer=e.reviewer,this.reviewdate=ki.shared.parseValue(e.reviewdate),this.createdate=ki.shared.parseValue(e.createdate),this.stars=e.stars?parseFloat(e.stars):void 0}}class za{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(s=>new wd(s)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new La(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(s=>new Cd(s))}}class Sd{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new La(t)),this.aggregations=e.aggregations}}class Hd{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new Sd(e.response)}}var ze;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(ze||(ze={}));class Pa extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Ed{constructor(e="archive.org"){this.baseUrl=e}async performSearch(e){const i=e.asUrlSearchParams.toString(),s=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(s)}async fetchMetadata(e){const t=`https://${this.baseUrl}/metadata/${e}`;return this.fetchUrl(t)}async fetchUrl(e){let t;try{t=await fetch(e)}catch(i){const s=i instanceof Error?i.message:i;return this.getErrorResult(ze.networkError,s)}try{const i=await t.json(),s=i.error;if(s){const r=i.forensics;return this.getErrorResult(ze.searchEngineError,s,r)}else return{success:i}}catch(i){const s=i instanceof Error?i.message:i;return this.getErrorResult(ze.decodingError,s)}}getErrorResult(e,t,i){return{error:new Pa(e,t,i)}}}class ho{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new Hd(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Pa(ze.itemNotFound)}:{success:new za(i.success)}}}ho.default=new ho(new Ed);var dr;(function(n){n.Asc="asc",n.Desc="desc"})(dr||(dr={}));var ke=[],Td=function(){return ke.some(function(n){return n.activeTargets.length>0})},kd=function(){return ke.some(function(n){return n.skippedTargets.length>0})},cr="ResizeObserver loop completed with undelivered notifications.",Md=function(){var n;typeof ErrorEvent=="function"?n=new ErrorEvent("error",{message:cr}):(n=document.createEvent("Event"),n.initEvent("error",!1,!1),n.message=cr),window.dispatchEvent(n)},Mi;(function(n){n.BORDER_BOX="border-box",n.CONTENT_BOX="content-box",n.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Mi||(Mi={}));var Me=function(n){return Object.freeze(n)},Nd=function(){function n(e,t){this.inlineSize=e,this.blockSize=t,Me(this)}return n}(),Da=function(){function n(e,t,i,s){return this.x=e,this.y=t,this.width=i,this.height=s,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Me(this)}return n.prototype.toJSON=function(){var e=this,t=e.x,i=e.y,s=e.top,r=e.right,o=e.bottom,d=e.left,l=e.width,a=e.height;return{x:t,y:i,top:s,right:r,bottom:o,left:d,width:l,height:a}},n.fromRect=function(e){return new n(e.x,e.y,e.width,e.height)},n}(),Mo=function(n){return n instanceof SVGElement&&"getBBox"in n},Ua=function(n){if(Mo(n)){var e=n.getBBox(),t=e.width,i=e.height;return!t&&!i}var s=n,r=s.offsetWidth,o=s.offsetHeight;return!(r||o||n.getClientRects().length)},ur=function(n){var e,t;if(n instanceof Element)return!0;var i=(t=(e=n)===null||e===void 0?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(i&&n instanceof i.Element)},Bd=function(n){switch(n.tagName){case"INPUT":if(n.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},gi=typeof window<"u"?window:{},us=new WeakMap,pr=/auto|scroll/,Id=/^tb|vertical/,Od=/msie|trident/i.test(gi.navigator&&gi.navigator.userAgent),Z=function(n){return parseFloat(n||"0")},Pe=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=!1),new Nd((t?e:n)||0,(t?n:e)||0)},$r=Me({devicePixelContentBoxSize:Pe(),borderBoxSize:Pe(),contentBoxSize:Pe(),contentRect:new Da(0,0,0,0)}),Va=function(n,e){if(e===void 0&&(e=!1),us.has(n)&&!e)return us.get(n);if(Ua(n))return us.set(n,$r),$r;var t=getComputedStyle(n),i=Mo(n)&&n.ownerSVGElement&&n.getBBox(),s=!Od&&t.boxSizing==="border-box",r=Id.test(t.writingMode||""),o=!i&&pr.test(t.overflowY||""),d=!i&&pr.test(t.overflowX||""),l=i?0:Z(t.paddingTop),a=i?0:Z(t.paddingRight),p=i?0:Z(t.paddingBottom),h=i?0:Z(t.paddingLeft),c=i?0:Z(t.borderTopWidth),u=i?0:Z(t.borderRightWidth),$=i?0:Z(t.borderBottomWidth),v=i?0:Z(t.borderLeftWidth),y=h+a,D=l+p,P=v+u,ce=c+$,ei=d?n.offsetHeight-ce-n.clientHeight:0,ue=o?n.offsetWidth-P-n.clientWidth:0,hs=s?y+P:0,id=s?D+ce:0,ds=i?i.width:Z(t.width)-hs-ue,cs=i?i.height:Z(t.height)-id-ei,sd=ds+y+ue+P,nd=cs+D+ei+ce,Wo=Me({devicePixelContentBoxSize:Pe(Math.round(ds*devicePixelRatio),Math.round(cs*devicePixelRatio),r),borderBoxSize:Pe(sd,nd,r),contentBoxSize:Pe(ds,cs,r),contentRect:new Da(h,l,ds,cs)});return us.set(n,Wo),Wo},Fa=function(n,e,t){var i=Va(n,t),s=i.borderBoxSize,r=i.contentBoxSize,o=i.devicePixelContentBoxSize;switch(e){case Mi.DEVICE_PIXEL_CONTENT_BOX:return o;case Mi.BORDER_BOX:return s;default:return r}},Rd=function(){function n(e){var t=Va(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=Me([t.borderBoxSize]),this.contentBoxSize=Me([t.contentBoxSize]),this.devicePixelContentBoxSize=Me([t.devicePixelContentBoxSize])}return n}(),Wa=function(n){if(Ua(n))return 1/0;for(var e=0,t=n.parentNode;t;)e+=1,t=t.parentNode;return e},Ld=function(){var n=1/0,e=[];ke.forEach(function(o){if(o.activeTargets.length!==0){var d=[];o.activeTargets.forEach(function(a){var p=new Rd(a.target),h=Wa(a.target);d.push(p),a.lastReportedSize=Fa(a.target,a.observedBox),h<n&&(n=h)}),e.push(function(){o.callback.call(o.observer,d,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var t=0,i=e;t<i.length;t++){var s=i[t];s()}return n},vr=function(n){ke.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(s){s.isActive()&&(Wa(s.target)>n?t.activeTargets.push(s):t.skippedTargets.push(s))})})},zd=function(){var n=0;for(vr(n);Td();)n=Ld(),vr(n);return kd()&&Md(),n>0},un,Za=[],Pd=function(){return Za.splice(0).forEach(function(n){return n()})},Dd=function(n){if(!un){var e=0,t=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return Pd()}).observe(t,i),un=function(){t.textContent=""+(e?e--:e++)}}Za.push(n),un()},Ud=function(n){Dd(function(){requestAnimationFrame(n)})},ms=0,Vd=function(){return!!ms},Fd=250,Wd={attributes:!0,characterData:!0,childList:!0,subtree:!0},fr=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],gr=function(n){return n===void 0&&(n=0),Date.now()+n},pn=!1,Zd=function(){function n(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return n.prototype.run=function(e){var t=this;if(e===void 0&&(e=Fd),!pn){pn=!0;var i=gr(e);Ud(function(){var s=!1;try{s=zd()}finally{if(pn=!1,e=i-gr(),!Vd())return;s?t.run(1e3):e>0?t.run(e):t.start()}})}},n.prototype.schedule=function(){this.stop(),this.run()},n.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Wd)};document.body?t():gi.addEventListener("DOMContentLoaded",t)},n.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),fr.forEach(function(t){return gi.addEventListener(t,e.listener,!0)}))},n.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),fr.forEach(function(t){return gi.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},n}(),co=new Zd,mr=function(n){!ms&&n>0&&co.start(),ms+=n,!ms&&co.stop()},qd=function(n){return!Mo(n)&&!Bd(n)&&getComputedStyle(n).display==="inline"},Xd=function(){function n(e,t){this.target=e,this.observedBox=t||Mi.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return n.prototype.isActive=function(){var e=Fa(this.target,this.observedBox,!0);return qd(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},n}(),Jd=function(){function n(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return n}(),ps=new WeakMap,_r=function(n,e){for(var t=0;t<n.length;t+=1)if(n[t].target===e)return t;return-1},$s=function(){function n(){}return n.connect=function(e,t){var i=new Jd(e,t);ps.set(e,i)},n.observe=function(e,t,i){var s=ps.get(e),r=s.observationTargets.length===0;_r(s.observationTargets,t)<0&&(r&&ke.push(s),s.observationTargets.push(new Xd(t,i&&i.box)),mr(1),co.schedule())},n.unobserve=function(e,t){var i=ps.get(e),s=_r(i.observationTargets,t),r=i.observationTargets.length===1;s>=0&&(r&&ke.splice(ke.indexOf(i),1),i.observationTargets.splice(s,1),mr(-1))},n.disconnect=function(e){var t=this,i=ps.get(e);i.observationTargets.slice().forEach(function(s){return t.unobserve(e,s.target)}),i.activeTargets.splice(0,i.activeTargets.length)},n}(),Kd=function(){function n(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");$s.connect(this,e)}return n.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ur(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");$s.observe(this,e,t)},n.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ur(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");$s.unobserve(this,e)},n.prototype.disconnect=function(){$s.disconnect(this)},n.toString=function(){return"function ResizeObserver () { [polyfill code] }"},n}();const Gd=window.ResizeObserver||Kd;class Yd{constructor(){this.resizeObserver=new Gd(e=>{window.requestAnimationFrame(()=>{for(const t of e){const i=this.resizeHandlers.get(t.target);i==null||i.forEach(s=>{s.handleResize(t)})}})}),this.resizeHandlers=new Map}addObserver(e){var t;const i=(t=this.resizeHandlers.get(e.target))!==null&&t!==void 0?t:new Set;i.add(e.handler),this.resizeHandlers.set(e.target,i),this.resizeObserver.observe(e.target,e.options)}removeObserver(e){const t=this.resizeHandlers.get(e.target);t&&(this.resizeObserver.unobserve(e.target),t.delete(e.handler),t.size===0&&this.resizeHandlers.delete(e.target))}}class Qd{constructor(e){var t,i,s,r,o,d,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(s=e==null?void 0:e.showProcessingIndicator)!==null&&s!==void 0?s:!1,this.processingImageMode=(r=e==null?void 0:e.processingImageMode)!==null&&r!==void 0?r:"complete",this.showCloseButton=(o=e==null?void 0:e.showCloseButton)!==null&&o!==void 0?o:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $n;const Hs=window,tt=Hs.trustedTypes,Ar=tt?tt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,qa="?"+Y,jd=`<${qa}>`,it=document,Ni=(n="")=>it.createComment(n),Bi=n=>n===null||typeof n!="object"&&typeof n!="function",Xa=Array.isArray,ec=n=>Xa(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yr=/-->/g,br=/>/g,$e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xr=/'/g,wr=/"/g,Ja=/^(?:script|style|textarea|title)$/i,tc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),G=tc(1),st=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Cr=new WeakMap,De=it.createTreeWalker(it,129,null,!1),ic=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=si;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===si?h[1]==="!--"?o=yr:h[1]!==void 0?o=br:h[2]!==void 0?(Ja.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=$e):h[3]!==void 0&&(o=$e):o===$e?h[0]===">"?(o=s??si,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?$e:h[3]==='"'?wr:xr):o===wr||o===xr?o=$e:o===yr||o===br?o=si:(o=$e,s=void 0);const $=o===$e&&n[l+1].startsWith("/>")?" ":"";r+=o===si?a+jd:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+Y+$):a+Y+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ar!==void 0?Ar.createHTML(d):d,i]};let uo=class Ka{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=ic(e,t);if(this.el=Ka.createElement(a,i),De.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=De.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(Y)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(Y),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?nc:v[1]==="?"?rc:v[1]==="@"?lc:Us})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Ja.test(s.tagName)){const h=s.textContent.split(Y),c=h.length-1;if(c>0){s.textContent=tt?tt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Ni()),De.nextNode(),l.push({type:2,index:++r});s.append(h[c],Ni())}}}else if(s.nodeType===8)if(s.data===qa)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(Y,h+1))!==-1;)l.push({type:7,index:r}),h+=Y.length-1}r++}}static createElement(e,t){const i=it.createElement("template");return i.innerHTML=e,i}};function nt(n,e,t=n,i){var s,r,o,d;if(e===st)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Bi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=nt(n,l._$AS(n,e.values),l,i)),e}let sc=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:it).importNode(i,!0);De.currentNode=r;let o=De.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new No(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new ac(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=De.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},No=class Ga{constructor(e,t,i,s){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),Bi(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==st&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ec(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==x&&Bi(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=uo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new sc(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Cr.get(e.strings);return t===void 0&&Cr.set(e.strings,t=new uo(e)),t}k(e){Xa(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Ga(this.O(Ni()),this.O(Ni()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Us=class{constructor(e,t,i,s,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=nt(this,e,t,0),o=!Bi(e)||e!==this._$AH&&e!==st,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=nt(this,d[i+l],t,l),a===st&&(a=this._$AH[l]),o||(o=!Bi(a)||a!==this._$AH[l]),a===x?e=x:e!==x&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},nc=class extends Us{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}};const oc=tt?tt.emptyScript:"";let rc=class extends Us{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,oc):this.element.removeAttribute(this.name)}},lc=class extends Us{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=nt(this,e,t,0))!==null&&i!==void 0?i:x)===st)return;const s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ac=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}};const Sr=Hs.litHtmlPolyfillSupport;Sr==null||Sr(uo,No),(($n=Hs.litHtmlVersions)!==null&&$n!==void 0?$n:Hs.litHtmlVersions=[]).push("2.5.0");const hc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new No(e.insertBefore(Ni(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,fn;let Ue=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=hc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return st}};Ue.finalized=!0,Ue._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:Ue});const Hr=globalThis.litElementPolyfillSupport;Hr==null||Hr({LitElement:Ue});((fn=globalThis.litElementVersions)!==null&&fn!==void 0?fn:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dc=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function Vs(n){return(e,t)=>t!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,e,t):dc(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(d){n(d,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function uc(n,e){return cc({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;((gn=window.HTMLSlotElement)===null||gn===void 0?void 0:gn.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const Es=window,ot=Es.trustedTypes,Er=ot?ot.createPolicy("lit-html",{createHTML:n=>n}):void 0,Q=`lit$${(Math.random()+"").slice(9)}$`,Qa="?"+Q,pc=`<${Qa}>`,rt=document,Ii=(n="")=>rt.createComment(n),Oi=n=>n===null||typeof n!="object"&&typeof n!="function",ja=Array.isArray,$c=n=>ja(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ni=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tr=/-->/g,kr=/>/g,ve=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,Nr=/"/g,eh=/^(?:script|style|textarea|title)$/i,vc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),fc=vc(1),lt=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Br=new WeakMap,Ve=rt.createTreeWalker(rt,129,null,!1),gc=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ni;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===ni?h[1]==="!--"?o=Tr:h[1]!==void 0?o=kr:h[2]!==void 0?(eh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=ve):h[3]!==void 0&&(o=ve):o===ve?h[0]===">"?(o=s??ni,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?ve:h[3]==='"'?Nr:Mr):o===Nr||o===Mr?o=ve:o===Tr||o===kr?o=ni:(o=ve,s=void 0);const $=o===ve&&n[l+1].startsWith("/>")?" ":"";r+=o===ni?a+pc:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+Q+$):a+Q+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Er!==void 0?Er.createHTML(d):d,i]};let po=class th{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=gc(e,t);if(this.el=th.createElement(a,i),Ve.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ve.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(Q)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(Q),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?_c:v[1]==="?"?yc:v[1]==="@"?bc:Fs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(eh.test(s.tagName)){const h=s.textContent.split(Q),c=h.length-1;if(c>0){s.textContent=ot?ot.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Ii()),Ve.nextNode(),l.push({type:2,index:++r});s.append(h[c],Ii())}}}else if(s.nodeType===8)if(s.data===Qa)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(Q,h+1))!==-1;)l.push({type:7,index:r}),h+=Q.length-1}r++}}static createElement(e,t){const i=rt.createElement("template");return i.innerHTML=e,i}};function at(n,e,t=n,i){var s,r,o,d;if(e===lt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Oi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=at(n,l._$AS(n,e.values),l,i)),e}let mc=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:rt).importNode(i,!0);Ve.currentNode=r;let o=Ve.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Bo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new xc(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ve.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Bo=class ih{constructor(e,t,i,s){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=at(this,e,t),Oi(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==lt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$c(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==C&&Oi(this._$AH)?this._$AA.nextSibling.data=e:this.T(rt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=po.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new mc(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Br.get(e.strings);return t===void 0&&Br.set(e.strings,t=new po(e)),t}k(e){ja(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ih(this.O(Ii()),this.O(Ii()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Fs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=at(this,e,t,0),o=!Oi(e)||e!==this._$AH&&e!==lt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=at(this,d[i+l],t,l),a===lt&&(a=this._$AH[l]),o||(o=!Oi(a)||a!==this._$AH[l]),a===C?e=C:e!==C&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_c=class extends Fs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}};const Ac=ot?ot.emptyScript:"";let yc=class extends Fs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Ac):this.element.removeAttribute(this.name)}},bc=class extends Fs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=at(this,e,t,0))!==null&&i!==void 0?i:C)===lt)return;const s=this._$AH,r=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==C&&(s===C||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},xc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}};const Ir=Es.litHtmlPolyfillSupport;Ir==null||Ir(po,Bo),((mn=Es.litHtmlVersions)!==null&&mn!==void 0?mn:Es.litHtmlVersions=[]).push("2.5.0");const wc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Bo(e.insertBefore(Ii(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n,An;let mi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=wc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return lt}};mi.finalized=!0,mi._$litElement$=!0,(_n=globalThis.litElementHydrateSupport)===null||_n===void 0||_n.call(globalThis,{LitElement:mi});const Or=globalThis.litElementPolyfillSupport;Or==null||Or({LitElement:mi});((An=globalThis.litElementVersions)!==null&&An!==void 0?An:globalThis.litElementVersions=[]).push("3.2.0");const Cc=Object.freeze({processing:"processing",complete:"complete"});class Sc extends mi{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=Cc.processing}render(){return fc`
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
    `}static get styles(){const e=m`var(--activityIndicatorCheckmarkColor, #31A481)`,t=m`var(--activityIndicatorCompletedRingColor, #31A481)`,i=m`var(--activityIndicatorLoadingRingColor, #333333)`,s=m`var(--activityIndicatorLoadingDotColor, #333333)`;return m`
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
    `}}window.customElements.define("ia-activity-indicator",Sc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Ts=window,ht=Ts.trustedTypes,Rr=ht?ht.createPolicy("lit-html",{createHTML:n=>n}):void 0,j=`lit$${(Math.random()+"").slice(9)}$`,sh="?"+j,Hc=`<${sh}>`,dt=document,Ri=(n="")=>dt.createComment(n),Li=n=>n===null||typeof n!="object"&&typeof n!="function",nh=Array.isArray,Ec=n=>nh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lr=/-->/g,zr=/>/g,fe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pr=/'/g,Dr=/"/g,oh=/^(?:script|style|textarea|title)$/i,Tc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),kc=Tc(1),ct=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ur=new WeakMap,Fe=dt.createTreeWalker(dt,129,null,!1),Mc=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=oi;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===oi?h[1]==="!--"?o=Lr:h[1]!==void 0?o=zr:h[2]!==void 0?(oh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=fe):h[3]!==void 0&&(o=fe):o===fe?h[0]===">"?(o=s??oi,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?fe:h[3]==='"'?Dr:Pr):o===Dr||o===Pr?o=fe:o===Lr||o===zr?o=oi:(o=fe,s=void 0);const $=o===fe&&n[l+1].startsWith("/>")?" ":"";r+=o===oi?a+Hc:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+j+$):a+j+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Rr!==void 0?Rr.createHTML(d):d,i]};let $o=class rh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Mc(e,t);if(this.el=rh.createElement(a,i),Fe.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Fe.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(j)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(j),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?Bc:v[1]==="?"?Oc:v[1]==="@"?Rc:Ws})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(oh.test(s.tagName)){const h=s.textContent.split(j),c=h.length-1;if(c>0){s.textContent=ht?ht.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Ri()),Fe.nextNode(),l.push({type:2,index:++r});s.append(h[c],Ri())}}}else if(s.nodeType===8)if(s.data===sh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(j,h+1))!==-1;)l.push({type:7,index:r}),h+=j.length-1}r++}}static createElement(e,t){const i=dt.createElement("template");return i.innerHTML=e,i}};function ut(n,e,t=n,i){var s,r,o,d;if(e===ct)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Li(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=ut(n,l._$AS(n,e.values),l,i)),e}let Nc=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:dt).importNode(i,!0);Fe.currentNode=r;let o=Fe.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Io(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Lc(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Fe.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Io=class lh{constructor(e,t,i,s){var r;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ut(this,e,t),Li(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ct&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ec(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==S&&Li(this._$AH)?this._$AA.nextSibling.data=e:this.T(dt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=$o.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Nc(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Ur.get(e.strings);return t===void 0&&Ur.set(e.strings,t=new $o(e)),t}k(e){nh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new lh(this.O(Ri()),this.O(Ri()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ws=class{constructor(e,t,i,s,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=ut(this,e,t,0),o=!Li(e)||e!==this._$AH&&e!==ct,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=ut(this,d[i+l],t,l),a===ct&&(a=this._$AH[l]),o||(o=!Li(a)||a!==this._$AH[l]),a===S?e=S:e!==S&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Bc=class extends Ws{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}};const Ic=ht?ht.emptyScript:"";let Oc=class extends Ws{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,Ic):this.element.removeAttribute(this.name)}},Rc=class extends Ws{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=ut(this,e,t,0))!==null&&i!==void 0?i:S)===ct)return;const s=this._$AH,r=e===S&&s!==S||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==S&&(s===S||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Lc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ut(this,e)}};const Vr=Ts.litHtmlPolyfillSupport;Vr==null||Vr($o,Io),((yn=Ts.litHtmlVersions)!==null&&yn!==void 0?yn:Ts.litHtmlVersions=[]).push("2.5.0");const zc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Io(e.insertBefore(Ri(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn,xn;let _s=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=zc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ct}};_s.finalized=!0,_s._$litElement$=!0,(bn=globalThis.litElementHydrateSupport)===null||bn===void 0||bn.call(globalThis,{LitElement:_s});const Fr=globalThis.litElementPolyfillSupport;Fr==null||Fr({LitElement:_s});((xn=globalThis.litElementVersions)!==null&&xn!==void 0?xn:globalThis.litElementVersions=[]).push("3.2.0");const Pc=kc`
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
 */var wn;const ks=window,pt=ks.trustedTypes,Wr=pt?pt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ee=`lit$${(Math.random()+"").slice(9)}$`,ah="?"+ee,Dc=`<${ah}>`,$t=document,zi=(n="")=>$t.createComment(n),Pi=n=>n===null||typeof n!="object"&&typeof n!="function",hh=Array.isArray,Uc=n=>hh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zr=/-->/g,qr=/>/g,ge=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xr=/'/g,Jr=/"/g,dh=/^(?:script|style|textarea|title)$/i,Vc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Fc=Vc(1),vt=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Kr=new WeakMap,We=$t.createTreeWalker($t,129,null,!1),Wc=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ri;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===ri?h[1]==="!--"?o=Zr:h[1]!==void 0?o=qr:h[2]!==void 0?(dh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=ge):h[3]!==void 0&&(o=ge):o===ge?h[0]===">"?(o=s??ri,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?ge:h[3]==='"'?Jr:Xr):o===Jr||o===Xr?o=ge:o===Zr||o===qr?o=ri:(o=ge,s=void 0);const $=o===ge&&n[l+1].startsWith("/>")?" ":"";r+=o===ri?a+Dc:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+ee+$):a+ee+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Wr!==void 0?Wr.createHTML(d):d,i]};let vo=class ch{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Wc(e,t);if(this.el=ch.createElement(a,i),We.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=We.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(ee)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(ee),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?qc:v[1]==="?"?Jc:v[1]==="@"?Kc:Zs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(dh.test(s.tagName)){const h=s.textContent.split(ee),c=h.length-1;if(c>0){s.textContent=pt?pt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],zi()),We.nextNode(),l.push({type:2,index:++r});s.append(h[c],zi())}}}else if(s.nodeType===8)if(s.data===ah)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(ee,h+1))!==-1;)l.push({type:7,index:r}),h+=ee.length-1}r++}}static createElement(e,t){const i=$t.createElement("template");return i.innerHTML=e,i}};function ft(n,e,t=n,i){var s,r,o,d;if(e===vt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Pi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=ft(n,l._$AS(n,e.values),l,i)),e}let Zc=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:$t).importNode(i,!0);We.currentNode=r;let o=We.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Oo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Gc(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=We.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Oo=class uh{constructor(e,t,i,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ft(this,e,t),Pi(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==vt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Uc(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==H&&Pi(this._$AH)?this._$AA.nextSibling.data=e:this.T($t.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=vo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Zc(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Kr.get(e.strings);return t===void 0&&Kr.set(e.strings,t=new vo(e)),t}k(e){hh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new uh(this.O(zi()),this.O(zi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Zs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=ft(this,e,t,0),o=!Pi(e)||e!==this._$AH&&e!==vt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=ft(this,d[i+l],t,l),a===vt&&(a=this._$AH[l]),o||(o=!Pi(a)||a!==this._$AH[l]),a===H?e=H:e!==H&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qc=class extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}};const Xc=pt?pt.emptyScript:"";let Jc=class extends Zs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,Xc):this.element.removeAttribute(this.name)}},Kc=class extends Zs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=ft(this,e,t,0))!==null&&i!==void 0?i:H)===vt)return;const s=this._$AH,r=e===H&&s!==H||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Gc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ft(this,e)}};const Gr=ks.litHtmlPolyfillSupport;Gr==null||Gr(vo,Oo),((wn=ks.litHtmlVersions)!==null&&wn!==void 0?wn:ks.litHtmlVersions=[]).push("2.5.0");const Yc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Oo(e.insertBefore(zi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cn,Sn;let As=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Yc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return vt}};As.finalized=!0,As._$litElement$=!0,(Cn=globalThis.litElementHydrateSupport)===null||Cn===void 0||Cn.call(globalThis,{LitElement:As});const Yr=globalThis.litElementPolyfillSupport;Yr==null||Yr({LitElement:As});((Sn=globalThis.litElementVersions)!==null&&Sn!==void 0?Sn:globalThis.litElementVersions=[]).push("3.2.0");const Qc=Fc`
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
`;let fo=class extends Ue{constructor(){super(...arguments),this.config=new Qd}render(){return G`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?G`<div class="logo-icon">${Qc}</div>`:x}
            ${this.config.title?G`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?G`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?G` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?G` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return G`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${Pc}
      </button>
    `}static get styles(){const e=m`var(--modalLogoSize, 6.5rem)`,t=m`var(--processingImageSize, 7.5rem)`,i=m`var(--modalCornerRadius, 1rem)`,s=m`var(--modalBorder, 2px solid black)`,r=m`var(--modalBottomMargin, 2.5rem)`,o=m`var(--modalTopMargin, 5rem)`,d=m`var(--modalHeaderBottomPadding, 0.5em)`,l=m`var(--modalBottomPadding, 2rem)`,a=m`var(--modalScrollOffset, 5px)`,p=m`var(--modalTitleFontSize, 1.8rem)`,h=m`var(--modalSubtitleFontSize, 1.4rem)`,c=m`var(--modalHeadlineFontSize, 1.6rem)`,u=m`var(--modalMessageFontSize, 1.4rem)`,$=m`var(--modalTitleLineHeight, normal)`,v=m`var(--modalSubtitleLineHeight, normal)`,y=m`var(--modalHeadlineLineHeight, normal)`,D=m`var(--modalMessageLineHeight, normal)`;return m`
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
        margin-top: ${o};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${s};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${p};
        font-weight: bold;
        line-height: ${$};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${h};
        line-height: ${v};
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
        max-height: calc(100vh - (16.5rem + ${r}));
        min-height: 5rem;
        padding: 0 0 calc(${a}) 0;
      }

      .headline {
        font-size: ${c};
        font-weight: bold;
        text-align: center;
        line-height: ${y};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${u};
        line-height: ${D};
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
    `}};f([Vs({type:Object})],fo.prototype,"config",void 0);fo=f([Ya("modal-template")],fo);function jc(n,e,t){var i=t||{},s=i.noTrailing,r=s===void 0?!1:s,o=i.noLeading,d=o===void 0?!1:o,l=i.debounceMode,a=l===void 0?void 0:l,p,h=!1,c=0;function u(){p&&clearTimeout(p)}function $(y){var D=y||{},P=D.upcomingOnly,ce=P===void 0?!1:P;u(),h=!ce}function v(){for(var y=arguments.length,D=new Array(y),P=0;P<y;P++)D[P]=arguments[P];var ce=this,ei=Date.now()-c;if(h)return;function ue(){c=Date.now(),e.apply(ce,D)}function hs(){p=void 0}!d&&a&&!p&&ue(),u(),a===void 0&&ei>n?d?(c=Date.now(),r||(p=setTimeout(a?hs:ue,n))):ue():r!==!0&&(p=setTimeout(a?hs:ue,a===void 0?n-ei:n))}return v.cancel=$,v}var Ne;(function(n){n.Open="open",n.Closed="closed"})(Ne||(Ne={}));class e0{constructor(e){this.windowResizeThrottler=jc(100,this.updateModalContainerHeight).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case Ne.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Ne.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let gt=class extends Ue{constructor(){super(...arguments),this.mode=Ne.Closed,this.hostBridge=new e0(this),this.closeOnBackdropClick=!0}render(){return G`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Ne.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return rd(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=Ne.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=m`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=m`var(--modalBackdropZindex, 1000)`,i=m`var(--modalWidth, 32rem)`,s=m`var(--modalMaxWidth, 95%)`,r=m`var(--modalZindex, 2000)`;return m`
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
        z-index: ${r};
        width: ${i};
        max-width: ${s};
      }
    `}};f([Vs({type:String,reflect:!0})],gt.prototype,"mode",void 0);f([Vs({type:Object})],gt.prototype,"customModalContent",void 0);f([Vs({type:Object})],gt.prototype,"hostBridge",void 0);f([uc("modal-template")],gt.prototype,"modalTemplate",void 0);gt=f([Ya("modal-manager")],gt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn;const Ms=window,mt=Ms.trustedTypes,Qr=mt?mt.createPolicy("lit-html",{createHTML:n=>n}):void 0,te=`lit$${(Math.random()+"").slice(9)}$`,ph="?"+te,t0=`<${ph}>`,_t=document,Di=(n="")=>_t.createComment(n),Ui=n=>n===null||typeof n!="object"&&typeof n!="function",$h=Array.isArray,i0=n=>$h(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",li=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jr=/-->/g,el=/>/g,me=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tl=/'/g,il=/"/g,vh=/^(?:script|style|textarea|title)$/i,s0=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),n0=s0(1),At=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),sl=new WeakMap,Ze=_t.createTreeWalker(_t,129,null,!1),o0=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=li;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===li?h[1]==="!--"?o=jr:h[1]!==void 0?o=el:h[2]!==void 0?(vh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=me):h[3]!==void 0&&(o=me):o===me?h[0]===">"?(o=s??li,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?me:h[3]==='"'?il:tl):o===il||o===tl?o=me:o===jr||o===el?o=li:(o=me,s=void 0);const $=o===me&&n[l+1].startsWith("/>")?" ":"";r+=o===li?a+t0:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+te+$):a+te+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Qr!==void 0?Qr.createHTML(d):d,i]};let go=class fh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=o0(e,t);if(this.el=fh.createElement(a,i),Ze.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ze.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(te)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(te),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?l0:v[1]==="?"?h0:v[1]==="@"?d0:qs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(vh.test(s.tagName)){const h=s.textContent.split(te),c=h.length-1;if(c>0){s.textContent=mt?mt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Di()),Ze.nextNode(),l.push({type:2,index:++r});s.append(h[c],Di())}}}else if(s.nodeType===8)if(s.data===ph)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(te,h+1))!==-1;)l.push({type:7,index:r}),h+=te.length-1}r++}}static createElement(e,t){const i=_t.createElement("template");return i.innerHTML=e,i}};function yt(n,e,t=n,i){var s,r,o,d;if(e===At)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Ui(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=yt(n,l._$AS(n,e.values),l,i)),e}let r0=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:_t).importNode(i,!0);Ze.currentNode=r;let o=Ze.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Ro(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new c0(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ze.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ro=class gh{constructor(e,t,i,s){var r;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),Ui(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==At&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):i0(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==E&&Ui(this._$AH)?this._$AA.nextSibling.data=e:this.T(_t.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=go.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new r0(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=sl.get(e.strings);return t===void 0&&sl.set(e.strings,t=new go(e)),t}k(e){$h(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new gh(this.O(Di()),this.O(Di()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},qs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=yt(this,e,t,0),o=!Ui(e)||e!==this._$AH&&e!==At,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=yt(this,d[i+l],t,l),a===At&&(a=this._$AH[l]),o||(o=!Ui(a)||a!==this._$AH[l]),a===E?e=E:e!==E&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},l0=class extends qs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}};const a0=mt?mt.emptyScript:"";let h0=class extends qs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,a0):this.element.removeAttribute(this.name)}},d0=class extends qs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=yt(this,e,t,0))!==null&&i!==void 0?i:E)===At)return;const s=this._$AH,r=e===E&&s!==E||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==E&&(s===E||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},c0=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}};const nl=Ms.litHtmlPolyfillSupport;nl==null||nl(go,Ro),((Hn=Ms.litHtmlVersions)!==null&&Hn!==void 0?Hn:Ms.litHtmlVersions=[]).push("2.5.0");const u0=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Ro(e.insertBefore(Di(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var En,Tn;let _i=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=u0(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return At}};_i.finalized=!0,_i._$litElement$=!0,(En=globalThis.litElementHydrateSupport)===null||En===void 0||En.call(globalThis,{LitElement:_i});const ol=globalThis.litElementPolyfillSupport;ol==null||ol({LitElement:_i});((Tn=globalThis.litElementVersions)!==null&&Tn!==void 0?Tn:globalThis.litElementVersions=[]).push("3.2.0");const p0=n0`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`;class $0 extends _i{static get styles(){return m`
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
    `}render(){return p0}}customElements.define("ia-icon-ellipses",$0);const v0=m`42px`,kn=m`var(--menuWidth, 320px)`,rl=m`var(--animationTiming, 200ms)`,f0=m`
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${rl} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${kn};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${kn} * -1));
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
    left: ${v0};
    z-index: 1;
    transform: translateX(calc(${kn} * -1));
    transition: transform ${rl} ease-out;
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
 */var Mn;const Ns=window,bt=Ns.trustedTypes,ll=bt?bt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ie=`lit$${(Math.random()+"").slice(9)}$`,mh="?"+ie,g0=`<${mh}>`,xt=document,Vi=(n="")=>xt.createComment(n),Fi=n=>n===null||typeof n!="object"&&typeof n!="function",_h=Array.isArray,m0=n=>_h(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ai=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,al=/-->/g,hl=/>/g,_e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dl=/'/g,cl=/"/g,Ah=/^(?:script|style|textarea|title)$/i,_0=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),A0=_0(1),wt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ul=new WeakMap,qe=xt.createTreeWalker(xt,129,null,!1),y0=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ai;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===ai?h[1]==="!--"?o=al:h[1]!==void 0?o=hl:h[2]!==void 0?(Ah.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=_e):h[3]!==void 0&&(o=_e):o===_e?h[0]===">"?(o=s??ai,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?_e:h[3]==='"'?cl:dl):o===cl||o===dl?o=_e:o===al||o===hl?o=ai:(o=_e,s=void 0);const $=o===_e&&n[l+1].startsWith("/>")?" ":"";r+=o===ai?a+g0:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+ie+$):a+ie+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ll!==void 0?ll.createHTML(d):d,i]};let mo=class yh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=y0(e,t);if(this.el=yh.createElement(a,i),qe.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=qe.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(ie)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(ie),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?x0:v[1]==="?"?C0:v[1]==="@"?S0:Xs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Ah.test(s.tagName)){const h=s.textContent.split(ie),c=h.length-1;if(c>0){s.textContent=bt?bt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Vi()),qe.nextNode(),l.push({type:2,index:++r});s.append(h[c],Vi())}}}else if(s.nodeType===8)if(s.data===mh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(ie,h+1))!==-1;)l.push({type:7,index:r}),h+=ie.length-1}r++}}static createElement(e,t){const i=xt.createElement("template");return i.innerHTML=e,i}};function Ct(n,e,t=n,i){var s,r,o,d;if(e===wt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Fi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ct(n,l._$AS(n,e.values),l,i)),e}let b0=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:xt).importNode(i,!0);qe.currentNode=r;let o=qe.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Lo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new H0(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=qe.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Lo=class bh{constructor(e,t,i,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ct(this,e,t),Fi(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==wt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):m0(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==T&&Fi(this._$AH)?this._$AA.nextSibling.data=e:this.T(xt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=mo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new b0(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=ul.get(e.strings);return t===void 0&&ul.set(e.strings,t=new mo(e)),t}k(e){_h(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new bh(this.O(Vi()),this.O(Vi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Xs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ct(this,e,t,0),o=!Fi(e)||e!==this._$AH&&e!==wt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Ct(this,d[i+l],t,l),a===wt&&(a=this._$AH[l]),o||(o=!Fi(a)||a!==this._$AH[l]),a===T?e=T:e!==T&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},x0=class extends Xs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}};const w0=bt?bt.emptyScript:"";let C0=class extends Xs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,w0):this.element.removeAttribute(this.name)}},S0=class extends Xs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ct(this,e,t,0))!==null&&i!==void 0?i:T)===wt)return;const s=this._$AH,r=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},H0=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ct(this,e)}};const pl=Ns.litHtmlPolyfillSupport;pl==null||pl(mo,Lo),((Mn=Ns.litHtmlVersions)!==null&&Mn!==void 0?Mn:Ns.litHtmlVersions=[]).push("2.5.0");const E0=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Lo(e.insertBefore(Vi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nn,Bn;let Ai=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=E0(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return wt}};Ai.finalized=!0,Ai._$litElement$=!0,(Nn=globalThis.litElementHydrateSupport)===null||Nn===void 0||Nn.call(globalThis,{LitElement:Ai});const $l=globalThis.litElementPolyfillSupport;$l==null||$l({LitElement:Ai});((Bn=globalThis.litElementVersions)!==null&&Bn!==void 0?Bn:globalThis.litElementVersions=[]).push("3.2.0");const T0=A0`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`;class k0 extends Ai{static get styles(){return m`
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
    `}render(){return T0}}customElements.define("ia-icon-collapse-sidebar",k0);const M0=m`
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: flex;
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
    vertical-align: middle;
    margin-left: 1rem;
  }

  .menu-details {
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
`;let X=class extends U{constructor(){super(...arguments),this.icon="",this.href="",this.label="",this.menuDetails="",this.buttonId="",this.selected=!1,this.followable=!1}static get styles(){return M0}onClick(e){e.preventDefault(),this.dispatchMenuTypeSelectedEvent()}dispatchMenuTypeSelectedEvent(){this.dispatchEvent(new CustomEvent("menuTypeSelected",{bubbles:!0,composed:!0,detail:{id:this.buttonId}}))}get buttonClass(){return this.selected?"selected":""}get iconClass(){return this.selected?"active":""}get menuItem(){return _`
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
    `}render(){return this.href?this.linkButton:this.clickButton}};f([g({type:String})],X.prototype,"icon",void 0);f([g({type:String})],X.prototype,"href",void 0);f([g({type:String})],X.prototype,"label",void 0);f([g({type:String})],X.prototype,"menuDetails",void 0);f([g({type:String})],X.prototype,"buttonId",void 0);f([g({type:Boolean})],X.prototype,"selected",void 0);f([g({type:Boolean})],X.prototype,"followable",void 0);X=f([J("menu-button")],X);const N0={closeDrawer:"menuSliderClosed"};let de=class extends U{constructor(){super(...arguments),this.menus=[],this.open=!1,this.manuallyHandleClose=!1,this.selectedMenu="",this.selectedMenuAction=A,this.animateMenuOpen=!1}static get styles(){return f0}updated(){const{actionButton:e}=this.selectedMenuDetails||{};e!==this.selectedMenuAction&&(this.selectedMenuAction=e||A)}setSelectedMenu({detail:e}){const{id:t}=e;this.selectedMenu=this.selectedMenu===t?"":t;const{actionButton:i}=this.selectedMenuDetails||{};this.selectedMenuAction=i||A}closeMenu(){this.manuallyHandleClose||(this.open=!1);const{closeDrawer:e}=N0,t=new CustomEvent(e,{detail:this.selectedMenuDetails});this.dispatchEvent(t)}get selectedMenuDetails(){return this.menus.find(t=>t.id===this.selectedMenu)}get selectedMenuComponent(){const e=this.selectedMenuDetails;return e&&(e!=null&&e.component)?e.component:_``}get sliderDetailsClass(){const e=this.animateMenuOpen?"animate":"",t=this.open?"open":"";return`${e} ${t}`}get selectedMenuClass(){return this.selectedMenu?"open":""}get menuItems(){return this.menus.map(e=>_`
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
    `}};f([g({type:Array})],de.prototype,"menus",void 0);f([g({type:Boolean})],de.prototype,"open",void 0);f([g({type:Boolean})],de.prototype,"manuallyHandleClose",void 0);f([g({type:String})],de.prototype,"selectedMenu",void 0);f([g({type:Object})],de.prototype,"selectedMenuAction",void 0);f([g({type:Boolean})],de.prototype,"animateMenuOpen",void 0);de=f([J("ia-menu-slider")],de);let _o=class extends U{constructor(){super(...arguments),this.loaderMessage=""}get bookIconSvg(){return er`
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `}get icon(){return this.bookIconSvg}get loader(){return er`
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
    `}static get styles(){return m`
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
    `}};f([g({type:String})],_o.prototype,"loaderMessage",void 0);_o=f([J("ia-itemnav-loader")],_o);let Ao=class extends U{constructor(){super(...arguments),this.identifier=""}emitLoaded(){this.dispatchEvent(new CustomEvent("loadingStateUpdated",{detail:{loaded:!0}}))}updated(e){e.has("identifier")&&this.emitLoaded()}get downloadUrl(){return`/download/${this.identifier}`}render(){return _`
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
    `}static get styles(){return m`
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
    `}};f([g({type:String})],Ao.prototype,"identifier",void 0);Ao=f([J("ia-no-theater-available")],Ao);let L=class extends U{constructor(){super(...arguments),this.viewAvailable=!0,this.baseHost="archive.org",this.signedIn=!1,this.menuContents=[],this.menuShortcuts=[],this.viewportInFullscreen=null,this.menuOpened=!1,this.loaded=!1,this.openMenuState="shift"}disconnectedCallback(){this.removeResizeObserver()}updated(e){if(e.has("sharedObserver")){const t=e.get("sharedObserver");t==null||t.removeObserver(this.resizeObserverConfig),this.setResizeObserver()}}handleResize(e){const{width:t}=e.contentRect;if(t<=600){this.openMenuState="overlay";return}this.openMenuState="shift"}setResizeObserver(){var e,t;(e=this.sharedObserver)===null||e===void 0||e.addObserver(this.resizeObserverConfig),(t=this.sharedObserver)===null||t===void 0||t.addObserver({target:this.headerSlot,handler:{handleResize:({contentRect:i})=>{i.height&&this.requestUpdate()}}})}removeResizeObserver(){var e;(e=this.sharedObserver)===null||e===void 0||e.removeObserver(this.resizeObserverConfig)}get resizeObserverConfig(){return{handler:this,target:this.frame}}get loaderTitle(){return this.viewportInFullscreen?"Internet Archive":""}get loadingArea(){return _`
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
          @slotchange=${r=>this.slotChange(r,"header")}
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
    `}loadingStateUpdated(e){const{loaded:t}=e.detail;this.loaded=t??!1}manageViewportFullscreen(e){const t=!!e.detail.isFullScreen;this.viewportInFullscreen=t||null;const i=new CustomEvent("fullscreenToggled",{detail:e.detail});this.dispatchEvent(i)}get shouldRenderMenu(){var e;return!!(!((e=this.menuContents)===null||e===void 0)&&e.length)}toggleMenu(){this.menuOpened=!this.menuOpened}closeMenu(){this.menuOpened=!1}setOpenMenu(e){const{id:t}=e.detail;this.openMenu=t!==this.openMenu?t:void 0}setMenuContents(e){const t=[...e.detail];this.menuContents=t}setMenuShortcuts(e){this.menuShortcuts=[...e.detail]}manageSideMenuEvents(e){const{menuId:t,action:i}=e.detail;t&&(i==="open"?this.openShortcut(t):i==="toggle"&&(this.openMenu=t,this.toggleMenu()))}get menuToggleButton(){return _`
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
      `);return _`<div class="shortcuts">${e}</div>`}get menuClass(){var e,t;const i=((e=this.menuContents)===null||e===void 0?void 0:e.length)||((t=this.menuShortcuts)===null||t===void 0?void 0:t.length),s=this.menuOpened&&i?"open":"",r=this.viewportInFullscreen?"fullscreen":"";return`${s} ${r} ${this.openMenuState}`}static get styles(){const e=m`var(--menuWidth, 320px)`,t=m`var(--animationTiming, 200ms)`,i=m`transform ${t} ease-out`,s=m`var(--theaterMenuMargin, 42px)`,r=m`var(--theaterBgColor, #000)`;return m`
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
        background-color: ${r};
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
    `}};f([g({type:Object,converter:n=>n&&typeof n=="string"?new za(JSON.parse(atob(n))):n})],L.prototype,"item",void 0);f([g({type:Boolean,reflect:!0})],L.prototype,"viewAvailable",void 0);f([g({type:String})],L.prototype,"baseHost",void 0);f([g({type:Boolean})],L.prototype,"signedIn",void 0);f([g({type:Array})],L.prototype,"menuContents",void 0);f([g({type:Array})],L.prototype,"menuShortcuts",void 0);f([g({type:Boolean,reflect:!0,attribute:!0})],L.prototype,"viewportInFullscreen",void 0);f([g({type:Boolean,reflect:!0})],L.prototype,"menuOpened",void 0);f([g({type:String,reflect:!0})],L.prototype,"openMenu",void 0);f([g({attribute:!1})],L.prototype,"modal",void 0);f([g({attribute:!1})],L.prototype,"sharedObserver",void 0);f([g({type:Boolean,reflect:!0,attribute:!0})],L.prototype,"loaded",void 0);f([Ad()],L.prototype,"openMenuState",void 0);f([ls("#frame")],L.prototype,"frame",void 0);f([ls('slot[name="header"]')],L.prototype,"headerSlot",void 0);f([ls('slot[name="main"]')],L.prototype,"mainSlot",void 0);L=f([J("iaux-item-navigator")],L);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var In;const Bs=window,St=Bs.trustedTypes,vl=St?St.createPolicy("lit-html",{createHTML:n=>n}):void 0,se=`lit$${(Math.random()+"").slice(9)}$`,xh="?"+se,B0=`<${xh}>`,Ht=document,Wi=(n="")=>Ht.createComment(n),Zi=n=>n===null||typeof n!="object"&&typeof n!="function",wh=Array.isArray,I0=n=>wh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,gl=/>/g,Ae=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ml=/'/g,_l=/"/g,Ch=/^(?:script|style|textarea|title)$/i,O0=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),R0=O0(1),Et=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Al=new WeakMap,Xe=Ht.createTreeWalker(Ht,129,null,!1),L0=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=hi;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===hi?h[1]==="!--"?o=fl:h[1]!==void 0?o=gl:h[2]!==void 0?(Ch.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Ae):h[3]!==void 0&&(o=Ae):o===Ae?h[0]===">"?(o=s??hi,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?Ae:h[3]==='"'?_l:ml):o===_l||o===ml?o=Ae:o===fl||o===gl?o=hi:(o=Ae,s=void 0);const $=o===Ae&&n[l+1].startsWith("/>")?" ":"";r+=o===hi?a+B0:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+se+$):a+se+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vl!==void 0?vl.createHTML(d):d,i]};let yo=class Sh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=L0(e,t);if(this.el=Sh.createElement(a,i),Xe.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Xe.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(se)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(se),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?P0:v[1]==="?"?U0:v[1]==="@"?V0:Js})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Ch.test(s.tagName)){const h=s.textContent.split(se),c=h.length-1;if(c>0){s.textContent=St?St.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Wi()),Xe.nextNode(),l.push({type:2,index:++r});s.append(h[c],Wi())}}}else if(s.nodeType===8)if(s.data===xh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(se,h+1))!==-1;)l.push({type:7,index:r}),h+=se.length-1}r++}}static createElement(e,t){const i=Ht.createElement("template");return i.innerHTML=e,i}};function Tt(n,e,t=n,i){var s,r,o,d;if(e===Et)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Zi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Tt(n,l._$AS(n,e.values),l,i)),e}let z0=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ht).importNode(i,!0);Xe.currentNode=r;let o=Xe.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new zo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new F0(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Xe.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},zo=class Hh{constructor(e,t,i,s){var r;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tt(this,e,t),Zi(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Et&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):I0(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==k&&Zi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ht.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=yo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new z0(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Al.get(e.strings);return t===void 0&&Al.set(e.strings,t=new yo(e)),t}k(e){wh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Hh(this.O(Wi()),this.O(Wi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Js=class{constructor(e,t,i,s,r){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Tt(this,e,t,0),o=!Zi(e)||e!==this._$AH&&e!==Et,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Tt(this,d[i+l],t,l),a===Et&&(a=this._$AH[l]),o||(o=!Zi(a)||a!==this._$AH[l]),a===k?e=k:e!==k&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},P0=class extends Js{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}};const D0=St?St.emptyScript:"";let U0=class extends Js{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,D0):this.element.removeAttribute(this.name)}},V0=class extends Js{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Tt(this,e,t,0))!==null&&i!==void 0?i:k)===Et)return;const s=this._$AH,r=e===k&&s!==k||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==k&&(s===k||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},F0=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}};const yl=Bs.litHtmlPolyfillSupport;yl==null||yl(yo,zo),((In=Bs.litHtmlVersions)!==null&&In!==void 0?In:Bs.litHtmlVersions=[]).push("2.5.0");const W0=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new zo(e.insertBefore(Wi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var On,Rn;let yi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=W0(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Et}};yi.finalized=!0,yi._$litElement$=!0,(On=globalThis.litElementHydrateSupport)===null||On===void 0||On.call(globalThis,{LitElement:yi});const bl=globalThis.litElementPolyfillSupport;bl==null||bl({LitElement:yi});((Rn=globalThis.litElementVersions)!==null&&Rn!==void 0?Rn:globalThis.litElementVersions=[]).push("3.2.0");const Z0=R0`
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
`;class q0 extends yi{static get styles(){return m`
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
    `}render(){return Z0}}customElements.define("ia-icon-share",q0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ln;const Is=window,kt=Is.trustedTypes,xl=kt?kt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ne=`lit$${(Math.random()+"").slice(9)}$`,Eh="?"+ne,X0=`<${Eh}>`,Mt=document,qi=(n="")=>Mt.createComment(n),Xi=n=>n===null||typeof n!="object"&&typeof n!="function",Th=Array.isArray,J0=n=>Th(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wl=/-->/g,Cl=/>/g,ye=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sl=/'/g,Hl=/"/g,kh=/^(?:script|style|textarea|title)$/i,K0=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),G0=K0(1),Nt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),El=new WeakMap,Je=Mt.createTreeWalker(Mt,129,null,!1),Y0=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=di;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===di?h[1]==="!--"?o=wl:h[1]!==void 0?o=Cl:h[2]!==void 0?(kh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=ye):h[3]!==void 0&&(o=ye):o===ye?h[0]===">"?(o=s??di,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?ye:h[3]==='"'?Hl:Sl):o===Hl||o===Sl?o=ye:o===wl||o===Cl?o=di:(o=ye,s=void 0);const $=o===ye&&n[l+1].startsWith("/>")?" ":"";r+=o===di?a+X0:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+ne+$):a+ne+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xl!==void 0?xl.createHTML(d):d,i]};let bo=class Mh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Y0(e,t);if(this.el=Mh.createElement(a,i),Je.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Je.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(ne)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(ne),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?j0:v[1]==="?"?tu:v[1]==="@"?iu:Ks})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(kh.test(s.tagName)){const h=s.textContent.split(ne),c=h.length-1;if(c>0){s.textContent=kt?kt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],qi()),Je.nextNode(),l.push({type:2,index:++r});s.append(h[c],qi())}}}else if(s.nodeType===8)if(s.data===Eh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(ne,h+1))!==-1;)l.push({type:7,index:r}),h+=ne.length-1}r++}}static createElement(e,t){const i=Mt.createElement("template");return i.innerHTML=e,i}};function Bt(n,e,t=n,i){var s,r,o,d;if(e===Nt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Xi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Bt(n,l._$AS(n,e.values),l,i)),e}let Q0=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Mt).importNode(i,!0);Je.currentNode=r;let o=Je.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Po(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new su(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Je.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Po=class Nh{constructor(e,t,i,s){var r;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bt(this,e,t),Xi(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Nt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):J0(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==M&&Xi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=bo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Q0(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=El.get(e.strings);return t===void 0&&El.set(e.strings,t=new bo(e)),t}k(e){Th(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Nh(this.O(qi()),this.O(qi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ks=class{constructor(e,t,i,s,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Bt(this,e,t,0),o=!Xi(e)||e!==this._$AH&&e!==Nt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Bt(this,d[i+l],t,l),a===Nt&&(a=this._$AH[l]),o||(o=!Xi(a)||a!==this._$AH[l]),a===M?e=M:e!==M&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},j0=class extends Ks{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}};const eu=kt?kt.emptyScript:"";let tu=class extends Ks{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,eu):this.element.removeAttribute(this.name)}},iu=class extends Ks{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Bt(this,e,t,0))!==null&&i!==void 0?i:M)===Nt)return;const s=this._$AH,r=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==M&&(s===M||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},su=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}};const Tl=Is.litHtmlPolyfillSupport;Tl==null||Tl(bo,Po),((Ln=Is.litHtmlVersions)!==null&&Ln!==void 0?Ln:Is.litHtmlVersions=[]).push("2.5.0");const nu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Po(e.insertBefore(qi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zn,Pn;let bi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=nu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Nt}};bi.finalized=!0,bi._$litElement$=!0,(zn=globalThis.litElementHydrateSupport)===null||zn===void 0||zn.call(globalThis,{LitElement:bi});const kl=globalThis.litElementPolyfillSupport;kl==null||kl({LitElement:bi});((Pn=globalThis.litElementVersions)!==null&&Pn!==void 0?Pn:globalThis.litElementVersions=[]).push("3.2.0");const ou=G0`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="twitterTitleID twitterDescID">
  <title id="twitterTitleID">Twitter icon</title>
  <desc id="twitterDescID">The Twitter logo, a cartoon bird</desc>
  <path d="m31.5297453 8.76273313c-.3135031.40766104-.7447036.83083673-1.2936015 1.26952707-.5488979.4386904-.9169698.7837578-1.1042157 1.0352022.1562166 2.319709-.1417719 4.5297454-.8939653 6.6301092-.7521935 2.1003638-1.8023754 3.9182538-3.1505457 5.45367-1.3481704 1.5354162-2.9627648 2.8284828-4.8437835 3.8791996-1.8810186 1.0507169-3.8321207 1.7483416-5.8533062 2.092874s-4.1215493.2894286-6.30109136-.1653114c-2.17954205-.45474-4.2092874-1.3401455-6.08923604-2.6562165 2.72737.4697196 5.67408517-.2514445 8.8401455-2.1634924-3.0719024-.7521935-4.88979241-2.2881447-5.45367-4.6078537 1.12882516.0631287 1.86550396.0631287 2.21003638 0-2.91568586-1.2850417-4.38904344-3.3693558-4.42007276-6.2529424.21934517.0310293.53284828.1487267.94050931.3530922s.78375775.3060133 1.12829017.3049433c-.81532206-.7211641-1.41076396-1.9045581-1.7863257-3.5501819-.37556173-1.64562376-.17173122-3.17355015.61149155-4.58377912 1.81789001 1.88101862 3.6908838 3.36989086 5.61898138 4.46661672 1.92809757 1.0967259 4.22426707 1.7547614 6.88850847 1.9741066-.2503745-1.1908838-.1722662-2.32719882.2343248-3.40894502.4065911-1.0817462 1.0416221-1.93612241 1.9050931-2.56312861.863471-.62700621 1.8114702-1.0817462 2.8439975-1.36421999 1.0325272-.28247378 2.0827091-.27444896 3.1505456.02407447s1.9767815.87042585 2.726835 1.71570726c1.3791997-.37663172 2.6802911-.87845068 3.9032742-1.50545688-.0310293.37663171-.1407019.74470361-.3290178 1.1042157-.1883158.35951209-.3530922.62593623-.4943291.79927242s-.3841216.4317355-.728654.77519795c-.3445324.34346244-.5638776.57832227-.6580355.70457949.2193452-.09415792.6895998-.23539482 1.410764-.42371067.7211641-.18831586 1.2069334-.39214638 1.4573079-.61149155 0 .44350524-.1567516.86668093-.4702547 1.27434196z" class="fill-color" />
</svg>
`;class ru extends bi{static get styles(){return m`
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
    `}render(){return ou}}customElements.define("ia-icon-twitter",ru);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dn;const Os=window,It=Os.trustedTypes,Ml=It?It.createPolicy("lit-html",{createHTML:n=>n}):void 0,oe=`lit$${(Math.random()+"").slice(9)}$`,Bh="?"+oe,lu=`<${Bh}>`,Ot=document,Ji=(n="")=>Ot.createComment(n),Ki=n=>n===null||typeof n!="object"&&typeof n!="function",Ih=Array.isArray,au=n=>Ih(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ci=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nl=/-->/g,Bl=/>/g,be=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Il=/'/g,Ol=/"/g,Oh=/^(?:script|style|textarea|title)$/i,hu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),du=hu(1),Rt=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Rl=new WeakMap,Ke=Ot.createTreeWalker(Ot,129,null,!1),cu=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ci;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===ci?h[1]==="!--"?o=Nl:h[1]!==void 0?o=Bl:h[2]!==void 0?(Oh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=be):h[3]!==void 0&&(o=be):o===be?h[0]===">"?(o=s??ci,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?be:h[3]==='"'?Ol:Il):o===Ol||o===Il?o=be:o===Nl||o===Bl?o=ci:(o=be,s=void 0);const $=o===be&&n[l+1].startsWith("/>")?" ":"";r+=o===ci?a+lu:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+oe+$):a+oe+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ml!==void 0?Ml.createHTML(d):d,i]};let xo=class Rh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=cu(e,t);if(this.el=Rh.createElement(a,i),Ke.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ke.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(oe)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(oe),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?pu:v[1]==="?"?vu:v[1]==="@"?fu:Gs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Oh.test(s.tagName)){const h=s.textContent.split(oe),c=h.length-1;if(c>0){s.textContent=It?It.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Ji()),Ke.nextNode(),l.push({type:2,index:++r});s.append(h[c],Ji())}}}else if(s.nodeType===8)if(s.data===Bh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(oe,h+1))!==-1;)l.push({type:7,index:r}),h+=oe.length-1}r++}}static createElement(e,t){const i=Ot.createElement("template");return i.innerHTML=e,i}};function Lt(n,e,t=n,i){var s,r,o,d;if(e===Rt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Ki(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Lt(n,l._$AS(n,e.values),l,i)),e}let uu=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ot).importNode(i,!0);Ke.currentNode=r;let o=Ke.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Do(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new gu(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ke.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Do=class Lh{constructor(e,t,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Lt(this,e,t),Ki(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Rt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):au(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==N&&Ki(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ot.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=xo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new uu(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Rl.get(e.strings);return t===void 0&&Rl.set(e.strings,t=new xo(e)),t}k(e){Ih(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Lh(this.O(Ji()),this.O(Ji()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Gs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Lt(this,e,t,0),o=!Ki(e)||e!==this._$AH&&e!==Rt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Lt(this,d[i+l],t,l),a===Rt&&(a=this._$AH[l]),o||(o=!Ki(a)||a!==this._$AH[l]),a===N?e=N:e!==N&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pu=class extends Gs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const $u=It?It.emptyScript:"";let vu=class extends Gs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,$u):this.element.removeAttribute(this.name)}},fu=class extends Gs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Lt(this,e,t,0))!==null&&i!==void 0?i:N)===Rt)return;const s=this._$AH,r=e===N&&s!==N||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},gu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}};const Ll=Os.litHtmlPolyfillSupport;Ll==null||Ll(xo,Do),((Dn=Os.litHtmlVersions)!==null&&Dn!==void 0?Dn:Os.litHtmlVersions=[]).push("2.5.0");const mu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Do(e.insertBefore(Ji(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Un,Vn;let xi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=mu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Rt}};xi.finalized=!0,xi._$litElement$=!0,(Un=globalThis.litElementHydrateSupport)===null||Un===void 0||Un.call(globalThis,{LitElement:xi});const zl=globalThis.litElementPolyfillSupport;zl==null||zl({LitElement:xi});((Vn=globalThis.litElementVersions)!==null&&Vn!==void 0?Vn:globalThis.litElementVersions=[]).push("3.2.0");const _u=du`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="facebookTitleID facebookDescID">
  <title id="facebookTitleID">Facebook icon</title>
  <desc id="facebookDescID">A lowercase f</desc>
  <path d="m30.91057 19.2442068.2670004-5.3339402h-5.7329237c-.0890001-3.4962895.25183-5.42243459 1.0224903-5.77843514.3560005-.17800028.8004955-.28925046 1.333485-.33375053s1.0442346-.0520853 1.5337353-.02275571c.4895008.02932959 1.045246.01466479 1.6672356-.04399439.0890001-1.59997977.1335002-3.24445961.1335002-4.93343953-2.1633102-.20732987-3.6742898-.28115953-4.5329389-.22148898-2.8146294.17800028-4.7847688 1.25965538-5.9104183 3.2449653-.1780003.3256596-.3261653.68873971-.444495 1.08924034-.1183298.40050062-.2144095.76358074-.2882391 1.08924034-.0738297.32565959-.125915.7848194-.1562559 1.37747942-.030341.59266002-.052591 1.04474028-.0667501 1.35624078-.0141592.3115005-.0217444.8449956-.0227558 1.6004854v1.5777298h-3.8229605v5.3339401h3.8669549v14.622824h5.8224296c0-.3560006-.0146648-1.6819003-.0439944-3.9776994-.0293296-2.295799-.0515796-4.2957737-.0667501-5.9999241s-.0075853-3.2525506.0227557-4.6452005h5.4219289z" class="fill-color" />
</svg>
`;class Au extends xi{static get styles(){return m`
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
    `}render(){return _u}}customElements.define("ia-icon-facebook",Au);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fn;const Rs=window,zt=Rs.trustedTypes,Pl=zt?zt.createPolicy("lit-html",{createHTML:n=>n}):void 0,re=`lit$${(Math.random()+"").slice(9)}$`,zh="?"+re,yu=`<${zh}>`,Pt=document,Gi=(n="")=>Pt.createComment(n),Yi=n=>n===null||typeof n!="object"&&typeof n!="function",Ph=Array.isArray,bu=n=>Ph(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dl=/-->/g,Ul=/>/g,xe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vl=/'/g,Fl=/"/g,Dh=/^(?:script|style|textarea|title)$/i,xu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),wu=xu(1),Dt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Wl=new WeakMap,Ge=Pt.createTreeWalker(Pt,129,null,!1),Cu=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ui;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===ui?h[1]==="!--"?o=Dl:h[1]!==void 0?o=Ul:h[2]!==void 0?(Dh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=xe):h[3]!==void 0&&(o=xe):o===xe?h[0]===">"?(o=s??ui,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?xe:h[3]==='"'?Fl:Vl):o===Fl||o===Vl?o=xe:o===Dl||o===Ul?o=ui:(o=xe,s=void 0);const $=o===xe&&n[l+1].startsWith("/>")?" ":"";r+=o===ui?a+yu:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+re+$):a+re+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Pl!==void 0?Pl.createHTML(d):d,i]};let wo=class Uh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Cu(e,t);if(this.el=Uh.createElement(a,i),Ge.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ge.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(re)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(re),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?Hu:v[1]==="?"?Tu:v[1]==="@"?ku:Ys})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Dh.test(s.tagName)){const h=s.textContent.split(re),c=h.length-1;if(c>0){s.textContent=zt?zt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Gi()),Ge.nextNode(),l.push({type:2,index:++r});s.append(h[c],Gi())}}}else if(s.nodeType===8)if(s.data===zh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(re,h+1))!==-1;)l.push({type:7,index:r}),h+=re.length-1}r++}}static createElement(e,t){const i=Pt.createElement("template");return i.innerHTML=e,i}};function Ut(n,e,t=n,i){var s,r,o,d;if(e===Dt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=Yi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ut(n,l._$AS(n,e.values),l,i)),e}let Su=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Pt).importNode(i,!0);Ge.currentNode=r;let o=Ge.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Uo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Mu(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ge.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Uo=class Vh{constructor(e,t,i,s){var r;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ut(this,e,t),Yi(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Dt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bu(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&Yi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=wo.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Su(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Wl.get(e.strings);return t===void 0&&Wl.set(e.strings,t=new wo(e)),t}k(e){Ph(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Vh(this.O(Gi()),this.O(Gi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ys=class{constructor(e,t,i,s,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ut(this,e,t,0),o=!Yi(e)||e!==this._$AH&&e!==Dt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Ut(this,d[i+l],t,l),a===Dt&&(a=this._$AH[l]),o||(o=!Yi(a)||a!==this._$AH[l]),a===B?e=B:e!==B&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Hu=class extends Ys{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Eu=zt?zt.emptyScript:"";let Tu=class extends Ys{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Eu):this.element.removeAttribute(this.name)}},ku=class extends Ys{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ut(this,e,t,0))!==null&&i!==void 0?i:B)===Dt)return;const s=this._$AH,r=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Mu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}};const Zl=Rs.litHtmlPolyfillSupport;Zl==null||Zl(wo,Uo),((Fn=Rs.litHtmlVersions)!==null&&Fn!==void 0?Fn:Rs.litHtmlVersions=[]).push("2.5.0");const Nu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Uo(e.insertBefore(Gi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn,Zn;let wi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Nu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Dt}};wi.finalized=!0,wi._$litElement$=!0,(Wn=globalThis.litElementHydrateSupport)===null||Wn===void 0||Wn.call(globalThis,{LitElement:wi});const ql=globalThis.litElementPolyfillSupport;ql==null||ql({LitElement:wi});((Zn=globalThis.litElementVersions)!==null&&Zn!==void 0?Zn:globalThis.litElementVersions=[]).push("3.2.0");const Bu=wu`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tumblrTitleID tumblrDescID">
  <title id="tumblrTitleID">Tumblr icon</title>
  <desc id="tumblrDescID">A lowercase letter t</desc>
  <path d="m8.50321407 8.54544475v5.32088575c.15641786.0310693.6819176.0310693 1.57649923 0 .8945816-.0310693 1.3574071.0160703 1.3884764.1414189.0942792 1.5695354.1333837 3.2253149.1173133 4.9673385-.0160703 1.7420236-.0316049 3.3426283-.0466039 4.8018141s.2046288 2.824628.6588835 4.0963267c.4542546 1.2716986 1.1999178 2.2209194 2.2369897 2.8476622 1.2556283.784232 2.9896167 1.207953 5.2019653 1.271163 2.2123485.0632099 4.1659648-.2506972 5.8608487-.9417213-.0310693-.3449764-.0230341-1.4045467.0241055-3.1787109.0471397-1.7741643-.0080351-2.75499-.1655244-2.9424772-3.5472571 1.0360005-5.697467.6904885-6.4506298-1.0365361-.7220934-1.6638147-.8635123-4.9909084-.4242566-9.981281v-.046604h6.7318605v-5.32088568h-6.7318605v-6.54383772h-4.0497228c-.2828378 1.28669763-.6122795 2.35376743-.9883252 3.20120941-.3760457.84744199-.98029 1.60060471-1.812733 2.25948817-.832443.65888347-1.87594303 1.01993018-3.1305 1.08314014z" class="fill-color" />
</svg>
`;class Iu extends wi{static get styles(){return m`
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
    `}render(){return Bu}}customElements.define("ia-icon-tumblr",Iu);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qn;const Ls=window,Vt=Ls.trustedTypes,Xl=Vt?Vt.createPolicy("lit-html",{createHTML:n=>n}):void 0,le=`lit$${(Math.random()+"").slice(9)}$`,Fh="?"+le,Ou=`<${Fh}>`,Ft=document,Qi=(n="")=>Ft.createComment(n),ji=n=>n===null||typeof n!="object"&&typeof n!="function",Wh=Array.isArray,Ru=n=>Wh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",pi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jl=/-->/g,Kl=/>/g,we=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gl=/'/g,Yl=/"/g,Zh=/^(?:script|style|textarea|title)$/i,Lu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),zu=Lu(1),Wt=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Ql=new WeakMap,Ye=Ft.createTreeWalker(Ft,129,null,!1),Pu=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=pi;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===pi?h[1]==="!--"?o=Jl:h[1]!==void 0?o=Kl:h[2]!==void 0?(Zh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=we):h[3]!==void 0&&(o=we):o===we?h[0]===">"?(o=s??pi,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?we:h[3]==='"'?Yl:Gl):o===Yl||o===Gl?o=we:o===Jl||o===Kl?o=pi:(o=we,s=void 0);const $=o===we&&n[l+1].startsWith("/>")?" ":"";r+=o===pi?a+Ou:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+le+$):a+le+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xl!==void 0?Xl.createHTML(d):d,i]};let Co=class qh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=Pu(e,t);if(this.el=qh.createElement(a,i),Ye.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Ye.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(le)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(le),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?Uu:v[1]==="?"?Fu:v[1]==="@"?Wu:Qs})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Zh.test(s.tagName)){const h=s.textContent.split(le),c=h.length-1;if(c>0){s.textContent=Vt?Vt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Qi()),Ye.nextNode(),l.push({type:2,index:++r});s.append(h[c],Qi())}}}else if(s.nodeType===8)if(s.data===Fh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(le,h+1))!==-1;)l.push({type:7,index:r}),h+=le.length-1}r++}}static createElement(e,t){const i=Ft.createElement("template");return i.innerHTML=e,i}};function Zt(n,e,t=n,i){var s,r,o,d;if(e===Wt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=ji(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Zt(n,l._$AS(n,e.values),l,i)),e}let Du=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ft).importNode(i,!0);Ye.currentNode=r;let o=Ye.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Vo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Zu(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Ye.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Vo=class Xh{constructor(e,t,i,s){var r;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Zt(this,e,t),ji(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Wt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ru(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==I&&ji(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Co.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Du(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=Ql.get(e.strings);return t===void 0&&Ql.set(e.strings,t=new Co(e)),t}k(e){Wh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Xh(this.O(Qi()),this.O(Qi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Qs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Zt(this,e,t,0),o=!ji(e)||e!==this._$AH&&e!==Wt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Zt(this,d[i+l],t,l),a===Wt&&(a=this._$AH[l]),o||(o=!ji(a)||a!==this._$AH[l]),a===I?e=I:e!==I&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Uu=class extends Qs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}};const Vu=Vt?Vt.emptyScript:"";let Fu=class extends Qs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==I?this.element.setAttribute(this.name,Vu):this.element.removeAttribute(this.name)}},Wu=class extends Qs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Zt(this,e,t,0))!==null&&i!==void 0?i:I)===Wt)return;const s=this._$AH,r=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==I&&(s===I||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Zu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}};const jl=Ls.litHtmlPolyfillSupport;jl==null||jl(Co,Vo),((qn=Ls.litHtmlVersions)!==null&&qn!==void 0?qn:Ls.litHtmlVersions=[]).push("2.5.0");const qu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Vo(e.insertBefore(Qi(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn,Jn;let Ci=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=qu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Wt}};Ci.finalized=!0,Ci._$litElement$=!0,(Xn=globalThis.litElementHydrateSupport)===null||Xn===void 0||Xn.call(globalThis,{LitElement:Ci});const ea=globalThis.litElementPolyfillSupport;ea==null||ea({LitElement:Ci});((Jn=globalThis.litElementVersions)!==null&&Jn!==void 0?Jn:globalThis.litElementVersions=[]).push("3.2.0");const Xu=zu`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pinterestTitleID pinterestDescID">
  <title id="pinterestTitleID">Pinterest icon</title>
  <desc id="pinterestDescID">A stylized letter p</desc>
  <path d="m11.9051049 30.5873434.653491-1.0742755.4207845-.839975c.2805229-.591861.5371377-1.2533214.7698443-1.9843813.2327065-.7310599.4659444-1.6029125.6997135-2.6155579.2337692-1.0126455.4128151-1.752206.5371377-2.2186817.0308151.030815.0775689.0855382.1402615.1641697.0626927.0786314.1094465.1333547.1402615.1641697.1243227.1870153.2178304.311338.280523.372968 1.1210293.964829 2.3817888 1.4631823 3.7822785 1.4950599 1.4939973 0 2.8790795-.3426843 4.1552465-1.0280529 2.1166733-1.1826593 3.6733633-3.1128487 4.6700699-5.7905679.4048457-1.1518444.6848374-2.5996192.8399751-4.3433245.1243226-1.587505-.0781002-3.0974411-.6072685-4.5298084-.903199-2.36638128-2.5528653-4.20306294-4.948999-5.51004497-1.276167-.65349101-2.5990879-1.05833667-3.9687625-1.21453696-1.525875-.21783034-3.1293188-.17107651-4.8103315.14026149-2.7701643.52916833-5.02709913 1.743174-6.77080442 3.64201699-1.99235065 2.14748836-2.98852598 4.62225355-2.98852598 7.42429545 0 2.9571797.9494215 5.0584455 2.84826449 6.3037975l.83997504.4207845c.12432268 0 .22526845.0154075.3028373.0462225s.1551377.0074381.23270656-.0701308c.07756885-.0775688.13229208-.1243226.16416969-.1402614s.07066204-.0860696.11635328-.2103923c.04569124-.1243226.07703756-.2098609.09403895-.2566147.01700139-.0467539.04834771-.1476996.09403895-.3028373s.06906816-.2486454.07013074-.280523l.14026149-.5132295c.06269263-.311338.09403895-.5291684.09403895-.653491-.03081502-.1243227-.12432268-.2799917-.28052297-.467007-.15620029-.1870154-.23376915-.2959305-.23270656-.3267455-.62267599-.8096914-.9494215-1.7904592-.98023652-2.9423035-.03081502-1.55669.28052297-2.9731185.93401399-4.24928547 1.18265932-2.45882635 3.17501002-3.93741618 5.97705192-4.43576949 1.6183201-.311338 3.1356943-.25661476 4.5521228.16416969 1.4164285.42078446 2.5135496 1.09765239 3.2913633 2.03060379.8405063 1.02752164 1.3229208 2.28828114 1.4472435 3.78227848.1243227 1.4004897-.0313463 2.9725872-.467007 4.7162925-.3740306 1.3696746-.9186065 2.5528653-1.6337275 3.5495719-.9967066 1.245352-2.0863896 1.8834355-3.269049 1.9142505-1.7118277.0626926-2.7547568-.6375522-3.1287874-2.1007345-.0935077-.4664757 0-1.2134744.2805229-2.240996.7469987-2.5842117 1.1359055-3.9384788 1.1667206-4.0628015.1870153-1.0275216.2024228-1.7904591.0462225-2.2888124-.1870153-.65349104-.5759222-1.15928246-1.1667205-1.51737429-.5907984-.35809182-1.2756357-.39687625-2.054512-.11635327-1.1826594.43566067-1.9610044 1.40048968-2.335035 2.89448706-.311338 1.306982-.2491767 2.6299028.186484 3.9687625 0 .0626926.0313463.1402615.094039.2327065.0626926.0924451.0940389.1700139.0940389.2327066 0 .0935076-.0313463.2491766-.0940389.467007-.0626927.2178303-.094039.3580918-.094039.4207844-.0935076.4356607-.3038999 1.3308903-.6311767 2.6856887-.3272768 1.3547985-.5838915 2.3897582-.7698443 3.1048793-.7778136 3.2068876-1.12049796 5.5881451-1.02805289 7.1437725l.37296809 2.7558194c.653491-.591861 1.2294131-1.2299445 1.7277664-1.9142505z" class="fill-color" />
</svg>
`;class Ju extends Ci{static get styles(){return m`
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
    `}render(){return Xu}}customElements.define("ia-icon-pinterest",Ju);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;const zs=window,qt=zs.trustedTypes,ta=qt?qt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ae=`lit$${(Math.random()+"").slice(9)}$`,Jh="?"+ae,Ku=`<${Jh}>`,Xt=document,es=(n="")=>Xt.createComment(n),ts=n=>n===null||typeof n!="object"&&typeof n!="function",Kh=Array.isArray,Gu=n=>Kh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",$i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ia=/-->/g,sa=/>/g,Ce=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),na=/'/g,oa=/"/g,Gh=/^(?:script|style|textarea|title)$/i,Yu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Qu=Yu(1),Jt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),ra=new WeakMap,Qe=Xt.createTreeWalker(Xt,129,null,!1),ju=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=$i;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===$i?h[1]==="!--"?o=ia:h[1]!==void 0?o=sa:h[2]!==void 0?(Gh.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Ce):h[3]!==void 0&&(o=Ce):o===Ce?h[0]===">"?(o=s??$i,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?Ce:h[3]==='"'?oa:na):o===oa||o===na?o=Ce:o===ia||o===sa?o=$i:(o=Ce,s=void 0);const $=o===Ce&&n[l+1].startsWith("/>")?" ":"";r+=o===$i?a+Ku:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+ae+$):a+ae+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ta!==void 0?ta.createHTML(d):d,i]};let So=class Yh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=ju(e,t);if(this.el=Yh.createElement(a,i),Qe.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=Qe.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(ae)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(ae),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?tp:v[1]==="?"?sp:v[1]==="@"?np:js})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Gh.test(s.tagName)){const h=s.textContent.split(ae),c=h.length-1;if(c>0){s.textContent=qt?qt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],es()),Qe.nextNode(),l.push({type:2,index:++r});s.append(h[c],es())}}}else if(s.nodeType===8)if(s.data===Jh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(ae,h+1))!==-1;)l.push({type:7,index:r}),h+=ae.length-1}r++}}static createElement(e,t){const i=Xt.createElement("template");return i.innerHTML=e,i}};function Kt(n,e,t=n,i){var s,r,o,d;if(e===Jt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=ts(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Kt(n,l._$AS(n,e.values),l,i)),e}let ep=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Xt).importNode(i,!0);Qe.currentNode=r;let o=Qe.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new Fo(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new op(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=Qe.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Fo=class Qh{constructor(e,t,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Kt(this,e,t),ts(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==Jt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gu(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==O&&ts(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=So.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new ep(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=ra.get(e.strings);return t===void 0&&ra.set(e.strings,t=new So(e)),t}k(e){Kh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Qh(this.O(es()),this.O(es()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},js=class{constructor(e,t,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Kt(this,e,t,0),o=!ts(e)||e!==this._$AH&&e!==Jt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Kt(this,d[i+l],t,l),a===Jt&&(a=this._$AH[l]),o||(o=!ts(a)||a!==this._$AH[l]),a===O?e=O:e!==O&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},tp=class extends js{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}};const ip=qt?qt.emptyScript:"";let sp=class extends js{constructor(){super(...arguments),this.type=4}j(e){e&&e!==O?this.element.setAttribute(this.name,ip):this.element.removeAttribute(this.name)}},np=class extends js{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Kt(this,e,t,0))!==null&&i!==void 0?i:O)===Jt)return;const s=this._$AH,r=e===O&&s!==O||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},op=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Kt(this,e)}};const la=zs.litHtmlPolyfillSupport;la==null||la(So,Fo),((Kn=zs.litHtmlVersions)!==null&&Kn!==void 0?Kn:zs.litHtmlVersions=[]).push("2.5.0");const rp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Fo(e.insertBefore(es(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gn,Yn;let Si=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=rp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Jt}};Si.finalized=!0,Si._$litElement$=!0,(Gn=globalThis.litElementHydrateSupport)===null||Gn===void 0||Gn.call(globalThis,{LitElement:Si});const aa=globalThis.litElementPolyfillSupport;aa==null||aa({LitElement:Si});((Yn=globalThis.litElementVersions)!==null&&Yn!==void 0?Yn:globalThis.litElementVersions=[]).push("3.2.0");const lp=Qu`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;class ap extends Si{static get styles(){return m`
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
    `}render(){return lp}}customElements.define("ia-icon-email",ap);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qn;const Ps=window,Gt=Ps.trustedTypes,ha=Gt?Gt.createPolicy("lit-html",{createHTML:n=>n}):void 0,he=`lit$${(Math.random()+"").slice(9)}$`,jh="?"+he,hp=`<${jh}>`,Yt=document,is=(n="")=>Yt.createComment(n),ss=n=>n===null||typeof n!="object"&&typeof n!="function",ed=Array.isArray,dp=n=>ed(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,da=/-->/g,ca=/>/g,Se=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ua=/'/g,pa=/"/g,td=/^(?:script|style|textarea|title)$/i,cp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),up=cp(1),Qt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),$a=new WeakMap,je=Yt.createTreeWalker(Yt,129,null,!1),pp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=vi;for(let l=0;l<t;l++){const a=n[l];let p,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===vi?h[1]==="!--"?o=da:h[1]!==void 0?o=ca:h[2]!==void 0?(td.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Se):h[3]!==void 0&&(o=Se):o===Se?h[0]===">"?(o=s??vi,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?Se:h[3]==='"'?pa:ua):o===pa||o===ua?o=Se:o===da||o===ca?o=vi:(o=Se,s=void 0);const $=o===Se&&n[l+1].startsWith("/>")?" ":"";r+=o===vi?a+hp:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+he+$):a+he+(c===-2?(i.push(void 0),l):$)}const d=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ha!==void 0?ha.createHTML(d):d,i]};class ns{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const d=e.length-1,l=this.parts,[a,p]=pp(e,t);if(this.el=ns.createElement(a,i),je.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=je.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(he)){const u=p[o++];if(h.push(c),u!==void 0){const $=s.getAttribute(u.toLowerCase()+"$lit$").split(he),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?vp:v[1]==="?"?gp:v[1]==="@"?mp:en})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(td.test(s.tagName)){const h=s.textContent.split(he),c=h.length-1;if(c>0){s.textContent=Gt?Gt.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],is()),je.nextNode(),l.push({type:2,index:++r});s.append(h[c],is())}}}else if(s.nodeType===8)if(s.data===jh)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(he,h+1))!==-1;)l.push({type:7,index:r}),h+=he.length-1}r++}}static createElement(e,t){const i=Yt.createElement("template");return i.innerHTML=e,i}}function jt(n,e,t=n,i){var s,r,o,d;if(e===Qt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const a=ss(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=jt(n,l._$AS(n,e.values),l,i)),e}class $p{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Yt).importNode(i,!0);je.currentNode=r;let o=je.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new as(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new _p(o,this,e)),this.u.push(p),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=je.nextNode(),d++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class as{constructor(e,t,i,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=jt(this,e,t),ss(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==Qt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dp(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&ss(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ns.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new $p(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=$a.get(e.strings);return t===void 0&&$a.set(e.strings,t=new ns(e)),t}k(e){ed(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new as(this.O(is()),this.O(is()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class en{constructor(e,t,i,s,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=jt(this,e,t,0),o=!ss(e)||e!==this._$AH&&e!==Qt,o&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=jt(this,d[i+l],t,l),a===Qt&&(a=this._$AH[l]),o||(o=!ss(a)||a!==this._$AH[l]),a===R?e=R:e!==R&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vp extends en{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}const fp=Gt?Gt.emptyScript:"";class gp extends en{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,fp):this.element.removeAttribute(this.name)}}class mp extends en{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=jt(this,e,t,0))!==null&&i!==void 0?i:R)===Qt)return;const s=this._$AH,r=e===R&&s!==R||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class _p{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){jt(this,e)}}const va=Ps.litHtmlPolyfillSupport;va==null||va(ns,as),((Qn=Ps.litHtmlVersions)!==null&&Qn!==void 0?Qn:Ps.litHtmlVersions=[]).push("2.5.0");const Ap=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new as(e.insertBefore(is(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn,eo;let Hi=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ap(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Qt}};Hi.finalized=!0,Hi._$litElement$=!0,(jn=globalThis.litElementHydrateSupport)===null||jn===void 0||jn.call(globalThis,{LitElement:Hi});const fa=globalThis.litElementPolyfillSupport;fa==null||fa({LitElement:Hi});((eo=globalThis.litElementVersions)!==null&&eo!==void 0?eo:globalThis.litElementVersions=[]).push("3.2.0");const yp=up`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="linkTitleID linkDescID">
  <title id="linkTitleID">Link icon</title>
  <desc id="linkDescID">Two chain links linked together</desc>
  <path d="m7.80511706 12.3659763c1.2669254-2.2579539 4.09819784-2.9949938 6.41200864-1.7733458l.2295791.12871 1.6067188.9559859 3.5467013-6.31849361c1.2682451-2.26030597 4.104098-2.99652769 6.4192376-1.76952182l.2223501.12488594 3.2168204 1.91103915c2.2770002 1.3527136 3.1866331 4.21502324 2.0564431 6.51290984l-.1198433.2278304-5.2002499 9.2680474c-1.2669254 2.2579539-4.0981978 2.9949938-6.4120086 1.7733458l-.2295791-.12871-1.6096554-.9558482-3.5437647 6.3183559c-1.2682451 2.260306-4.104098 2.9965277-6.41923761 1.7695218l-.22235013-.1248859-3.21682032-1.9110392c-2.27700024-1.3527136-3.18663314-4.2150232-2.05644312-6.5129098l.11984332-.2278304zm13.93955474-5.73311741-3.563271 6.35055051c1.889633 1.4530595 2.5776248 4.0429866 1.5410255 6.156875l-.1223014.2328355-.4183304.7430134 1.6096554.9558483c1.1431442.6791157 2.5155496.3977368 3.1667361-.5628389l.0921501-.1491451 5.2002498-9.2680474c.5752467-1.0252226.2110342-2.4011579-.8559335-3.14755806l-.1742742-.11247814-3.2168203-1.91103915c-1.1402863-.67741793-2.5086889-.39913772-3.1618387.55564729zm-11.79500786 7.00714351-5.20024982 9.2680474c-.57524673 1.0252226-.21103426 2.4011579.85593348 3.1475581l.17427416.1124781 3.21682032 1.9110392c1.14028632.6774179 2.50868892.3991377 3.16183872-.5556473l.0970474-.1563368 3.5622708-6.3513198c-1.8888875-1.4532134-2.5764504-4.042623-1.5400057-6.1561456l.1222818-.2327956.4153938-.7428758-1.6067188-.9559859c-1.1431442-.6791157-2.5155496-.3977368-3.1667361.5628389zm6.97653866 1.5796652-.3817806.6812386c-.5117123.9119895-.2800268 2.1014993.528439 2.8785267l.382717-.6803391c.5119098-.9123415.2798478-2.1024176-.5293754-2.8794262z" class="fill-color" />
</svg>
`;class bp extends Hi{static get styles(){return m`
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
    `}render(){return yp}}customElements.define("ia-icon-link",bp);const ga=n=>{const e=n.currentTarget,t=e.querySelector("textarea"),i=e.querySelector("small");t.select(),document.execCommand("copy"),t.blur(),i.classList.add("visible"),clearTimeout(i.timeout),i.timeout=setTimeout(()=>i.classList.remove("visible"),4e3)},xp=_`<ia-icon-share
  style="width: var(--iconWidth); height: var(--iconHeight);"
></ia-icon-share>`;let F=class extends U{constructor(){super(...arguments),this.baseHost="archive.org",this.creator="",this.description="",this.embedOptionsVisible=!1,this.identifier="",this.sharingOptions=[],this.type="",this.renderHeader=!1,this.fileSubPrefix=""}updated(e){e.has("sharingOptions")&&!this.sharingOptions.length&&this.loadProviders()}loadProviders(){let e=`https://${this.baseHost}/details/${this.identifier}`;this.fileSubPrefix&&(e+=`/${this.fileSubPrefix}`);const t=[this.description,this.creator,"Free Download, Borrow, and Streaming","Internet Archive"].filter(Boolean).join(" : ");this.sharingOptions=[{name:"Twitter",icon:_`<ia-icon-twitter></ia-icon-twitter>`,url:`https://twitter.com/intent/tweet?${new URLSearchParams({url:e,text:t,via:"internetarchive"})}`},{name:"Facebook",icon:_`<ia-icon-facebook></ia-icon-facebook>`,url:`https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({u:e})}`},{name:"Tumblr",icon:_`<ia-icon-tumblr></ia-icon-tumblr>`,url:`https://www.tumblr.com/widgets/share/tool/preview?${new URLSearchParams({posttype:"link",canonicalUrl:e,title:t})}`},{name:"Pinterest",icon:_`<ia-icon-pinterest></ia-icon-pinterest>`,url:`http://www.pinterest.com/pin/create/button/?${new URLSearchParams({url:e,description:t})}`},{name:"Email",icon:_`<ia-icon-email></ia-icon-email>`,url:`mailto:?${new URLSearchParams({subject:t,body:e})}`}]}get iframeEmbed(){return`<iframe
      src="https://${this.baseHost}/embed/${this.identifier}"
      width="560" height="384" frameborder="0"
      webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen
    ></iframe>`}get bbcodeEmbed(){return`[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}get helpURL(){return`https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`}get header(){const e=_`<header><h3>Share this ${this.type}</h3></header>`;return this.renderHeader?e:A}render(){return _`
      ${this.header}
      <main>
        ${this.sharingOptions.map(e=>_` <a class="share-option" href="${e.url}" target="_blank">
              ${e.icon} ${e.name}
            </a>`)}
        <details>
          <summary class="share-option">
            <ia-icon-link></ia-icon-link>
            Get an embeddable link
          </summary>
          <div class="embed">
            <h4>Embed</h4>
            <div class="code" @click=${ga}>
              <textarea readonly>${this.iframeEmbed}</textarea>
              <small>Copied to clipboard</small>
            </div>
            <h4>
              Embed for wordpress.com hosted blogs and archive.org item
              &lt;description&gt; tags
            </h4>
            <div class="code" @click=${ga}>
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
    `}get providerIcon(){return _`<ia-icon-share
      style="width: var(--iconWidth); height: var(--iconHeight);"
    ></ia-icon-share>`}static get styles(){return m`
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
    `}};f([g({type:String})],F.prototype,"baseHost",void 0);f([g({type:String})],F.prototype,"creator",void 0);f([g({type:String})],F.prototype,"description",void 0);f([g({type:Boolean})],F.prototype,"embedOptionsVisible",void 0);f([g({type:String})],F.prototype,"identifier",void 0);f([g({type:Array})],F.prototype,"sharingOptions",void 0);f([g({type:String})],F.prototype,"type",void 0);f([g({type:Boolean})],F.prototype,"renderHeader",void 0);f([g({type:String})],F.prototype,"fileSubPrefix",void 0);F=f([J("iaux-in-share-panel")],F);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wp={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cp=n=>(...e)=>({_$litDirective$:n,values:e});class Sp{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Hp}=pd,ma=()=>document.createComment(""),fi=(n,e,t)=>{var i;const s=n._$AA.parentNode,r=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(ma(),r),d=s.insertBefore(ma(),r);t=new Hp(o,d,n,n.options)}else{const o=t._$AB.nextSibling,d=t._$AM,l=d!==n;if(l){let a;(i=t._$AQ)===null||i===void 0||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(a=n._$AU)!==d._$AU&&t._$AP(a)}if(o!==r||l){let a=t._$AA;for(;a!==o;){const p=a.nextSibling;s.insertBefore(a,r),a=p}}}return t},He=(n,e,t=n)=>(n._$AI(e,t),n),Ep={},Tp=(n,e=Ep)=>n._$AH=e,kp=n=>n._$AH,to=n=>{var e;(e=n._$AP)===null||e===void 0||e.call(n,!1,!0);let t=n._$AA;const i=n._$AB.nextSibling;for(;t!==i;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=(n,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(n[s],s);return i},Mp=Cp(class extends Sp{constructor(n){if(super(n),n.type!==wp.CHILD)throw Error("repeat() can only be used in text expressions")}ct(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],r=[];let o=0;for(const d of n)s[o]=i?i(d,o):o,r[o]=t(d,o),o++;return{values:r,keys:s}}render(n,e,t){return this.ct(n,e,t).values}update(n,[e,t,i]){var s;const r=kp(n),{values:o,keys:d}=this.ct(e,t,i);if(!Array.isArray(r))return this.ut=d,o;const l=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],a=[];let p,h,c=0,u=r.length-1,$=0,v=o.length-1;for(;c<=u&&$<=v;)if(r[c]===null)c++;else if(r[u]===null)u--;else if(l[c]===d[$])a[$]=He(r[c],o[$]),c++,$++;else if(l[u]===d[v])a[v]=He(r[u],o[v]),u--,v--;else if(l[c]===d[v])a[v]=He(r[c],o[v]),fi(n,a[v+1],r[c]),c++,v--;else if(l[u]===d[$])a[$]=He(r[u],o[$]),fi(n,r[c],r[u]),u--,$++;else if(p===void 0&&(p=_a(d,$,v),h=_a(l,c,u)),p.has(l[c]))if(p.has(l[u])){const y=h.get(d[$]),D=y!==void 0?r[y]:null;if(D===null){const P=fi(n,r[c]);He(P,o[$]),a[$]=P}else a[$]=He(D,o[$]),fi(n,r[c],D),r[y]=null;$++}else to(r[u]),u--;else to(r[c]),c++;for(;$<=v;){const y=fi(n,a[v+1]);He(y,o[$]),a[$++]=y}for(;c<=u;){const y=r[c++];y!==null&&to(y)}return this.ut=d,Tp(n,a),Ie}}),Np=_`
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
`,Bp=_`
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
`,Ip=_`
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
`,Op=_`
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
`;let os=class extends U{constructor(){super(...arguments),this.fileListRaw=[],this.fileListSorted=[],this.sortOrderBy="default"}render(){return _`<div class="sort-multi-file-list">${this.sortButton}</div>`}get sortButton(){return{default:_`
        <button
          class="sort-by neutral-icon"
          aria-label="Sort volumes in initial order"
          @click=${()=>this.sortVolumes("title_asc")}
        >
          ${Ip}
        </button>
      `,title_asc:_`
        <button
          class="sort-by asc-icon"
          aria-label="Sort volumes in ascending order"
          @click=${()=>this.sortVolumes("title_desc")}
        >
          ${Np}
        </button>
      `,title_desc:_`
        <button
          class="sort-by desc-icon"
          aria-label="Sort volumes in descending order"
          @click=${()=>this.sortVolumes("default")}
        >
          ${Bp}
        </button>
      `}[this.sortOrderBy]}sortVolumes(e){this.sortOrderBy=e;let t=[];t=this.fileListRaw.sort((i,s)=>e==="title_asc"?i.title.localeCompare(s.title):e==="title_desc"?s.title.localeCompare(i.title):i.orig_sort-s.orig_sort),this.dispatchEvent(new CustomEvent("fileListSorted",{detail:{sortType:e,sortedFiles:t},bubbles:!0,composed:!0})),this.fileListSorted=t}static get styles(){return m`
      button.sort-by {
        padding: 0px;
        background-color: transparent;
        border: 0px;
        --iconWidth: var(--menuSliderHeaderIconWidth);
        --iconHeight: var(--menuSliderHeaderIconHeight);
      }
    `}};f([g({type:Array})],os.prototype,"fileListRaw",void 0);f([g({type:Array})],os.prototype,"fileListSorted",void 0);f([g({type:String,reflect:!0})],os.prototype,"sortOrderBy",void 0);os=f([J("iaux-in-sort-files-button")],os);let Re=class extends U{constructor(){super(...arguments),this.baseHost="archive.org",this.sortOrderBy="default",this.subPrefix="",this.fileList=[],this.addSortToUrl=!1}firstUpdated(){const e=this.shadowRoot.querySelector(".content.active");setTimeout(()=>{e!=null&&e.scrollIntoViewIfNeeded?e==null||e.scrollIntoViewIfNeeded(!0):e==null||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},350)}volumeItemWithImageTitle(e){const t=this.fileUrl(e);return _`
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
    `}fileUrl(e){const t=`//${this.baseHost}${e.url_path}`;let i=t;return this.addSortToUrl&&(i=this.sortOrderBy==="default"?`${t}`:`${t}?sort=${this.sortOrderBy}`),i}get pdfLabel(){return _`<span class="pdf-label"
      ><span class="sr-only">view this</span> PDF</span
    >`}fileLi(e){var t;const i=this.subPrefix===e.file_subprefix?" active":"",s=this.fileUrl(e),r=((t=e.file_source)!==null&&t!==void 0?t:"").match(/^[^+]+\.pdf$/i);return _`
      <li>
        <div class="separator"></div>
        <div class="content${i}">
          <a href=${s}>
            <p class="item-title">
              ${e.title}${r?this.pdfLabel:A}
            </p>
          </a>
        </div>
      </li>
    `}get fileListTemplate(){const e=Mp(this.fileList,t=>t==null?void 0:t.file_prefix,this.fileLi.bind(this));return _`
      <ul>
        ${e}
        <div class="separator"></div>
      </ul>
    `}render(){return _` ${this.fileList.length?this.fileListTemplate:A} `}static get styles(){return m`
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
    `}};f([g({type:String})],Re.prototype,"baseHost",void 0);f([g({type:String})],Re.prototype,"sortOrderBy",void 0);f([g({type:String})],Re.prototype,"subPrefix",void 0);f([g({type:Array})],Re.prototype,"fileList",void 0);f([g({type:Boolean,reflect:!0})],Re.prototype,"addSortToUrl",void 0);Re=f([J("iaux-in-viewable-files-panel")],Re);const vs=[{file_origin:"",file_source:"beyonce-cosmo-article.pdf",file_subprefix:"beyonce-cosmo-article",orig_sort:0,title:"beyonce-cosmo-article.pdf",url_path:"/details/pdf_only_item/beyonce-cosmo-article.pdf"},{file_origin:"",file_source:"onestrandriverpdf.pdf",file_subprefix:"onestrandriverpdf",orig_sort:1,title:"Very cool title that is extra long so it wraps for three rows and close to the right side of the pane",url_path:"/details/pdf_only_item/onestrandriverpdf.pdf"},{url_path:"/details/masterbookofamericanfolksong00shep",file_subprefix:"01-The Master Book of American Folk Song",title:"The Master Book of American Folk Song",file_source:"/01-The Master Book of American Folk Song_jp2.zip",orig_sort:0},{url_path:"/details/masterbookofamericanfolksong00shep/02-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20A%20through%20M",file_subprefix:"02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M",title:"Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M",file_source:"/02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M_jp2.zip",orig_sort:1},{url_path:"/details/masterbookofamericanfolksong00shep/03-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20N%20through%20Z",file_subprefix:"03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z",title:"Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z",file_source:"/03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z_jp2.zip",orig_sort:2},{url_path:"/details/masterbookofamericanfolksong00shep/04-Letters%20to%20Riley%20Shepard",file_subprefix:"04-Letters to Riley Shepard",title:"Letters to Riley Shepard",file_source:"/04-Letters to Riley Shepard_jp2.zip",orig_sort:3},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%201",file_subprefix:"Master Book of American Folk Song Vol. 1",title:"Master Book of American Folk Song Vol. 1.pdf",file_source:"/Master Book of American Folk Song Vol. 1_jp2.zip",orig_sort:4},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%202",file_subprefix:"Master Book of American Folk Song Vol. 2",title:"Master Book of American Folk Song Vol. 2.pdf",file_source:"/Master Book of American Folk Song Vol. 2_jp2.zip",orig_sort:5},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%203",file_subprefix:"Master Book of American Folk Song Vol. 3",title:"Master Book of American Folk Song Vol. 3.pdf",file_source:"/Master Book of American Folk Song Vol. 3_jp2.zip",orig_sort:6},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%204",file_subprefix:"Master Book of American Folk Song Vol. 4",title:"Master Book of American Folk Song Vol. 4.pdf",file_source:"/Master Book of American Folk Song Vol. 4_jp2.zip",orig_sort:7},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%205",file_subprefix:"Master Book of American Folk Song Vol. 5",title:"Master Book of American Folk Song Vol. 5",file_source:"/Master Book of American Folk Song Vol. 5_jp2.zip",orig_sort:8},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%206",file_subprefix:"Master Book of American Folk Song Vol. 6",title:"Master Book of American Folk Song Vol. 6.pdf",file_source:"/Master Book of American Folk Song Vol. 6_jp2.zip",orig_sort:9},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%207",file_subprefix:"Master Book of American Folk Song Vol. 7",title:"Master Book of American Folk Song Vol. 7.pdf",file_source:"/Master Book of American Folk Song Vol. 7_jp2.zip",orig_sort:10},{url_path:"/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%208",file_subprefix:"Master Book of American Folk Song Vol. 8",title:"Master Book of American Folk Song Vol. 8.pdf",file_source:"/Master Book of American Folk Song Vol. 8_jp2.zip",orig_sort:11}];let z=class extends U{constructor(){super(...arguments),this.encodedManifest="",this.sharedObserver=new Yd,this.menuContents=[],this.menuShortcuts=[],this.fullscreen=null,this.headerOn=null,this.loaded=null,this.showPlaceholder=null,this.showTheaterExample=null,this.fileListToDisplay=vs}firstUpdated(){this.fetchItemMD(),console.log("<app-root> component has loaded",this.modalMgr,this.sharedObserver),this.itemNav.viewAvailable=!1}updated(e){console.log("changed",e),e.has("itemMD")&&this.fullscreenCheck(),e.has("fileList")&&this.drawMenus()}async fetchItemMD(){const t=await ho.default.fetchMetadata("masterbookofamericanfolksong00shep");if(t.error){console.log("MD Fetch error: ",t.error),window.confirm("There was an error fetching response, please check dev console");return}console.log("mdResponse.success",JSON.stringify(t.success)),this.itemMD=t.success,this.toggleTheaterExample()}get theaterReady(){return this.modalMgr&&this.sharedObserver&&!!this.itemMD}get urlParams(){return new URLSearchParams(location.search.slice(1))}get showFullscreen(){return this.urlParams.get("view")==="theater"}toggleFS(){this.urlParams.get("view")?location.search="":location.search="view=theater"}fullscreenCheck(){this.showFullscreen&&this.itemNav&&(this.fullscreen=!0)}toggleHeader(){this.headerOn=this.headerOn?null:!0}toggleLoader(){const e=this.loaded===!0?null:!0;this.loaded=e}togglePlaceholder(){this.toggleLoader();const e=this.showPlaceholder?null:!0;this.showPlaceholder=e}toggleImmersion(){const e=this.fullscreen?null:!0;if(!e){this.menuShortcuts=[];return}this.menuShortcuts=[{icon:_`<button
          @click=${()=>{this.fullscreen=null,this.menuContents=[],this.menuShortcuts=[]}}
        >
          Exit
        </button>`,id:"exit"}],this.menuContents=[{icon:_`<button
          @click=${()=>{this.fullscreen=null}}
        >
          Exit
        </button>`,id:"exit",label:"Exit",selected:!1}],this.fullscreen=e}toggleTheaterExample(){if(this.showTheaterExample){this.showPlaceholder=!0,this.showTheaterExample=null,this.menuContents=[],this.menuShortcuts=[];return}this.showPlaceholder=null,this.showTheaterExample=!0,this.drawMenus()}drawMenus(){var e;const t={icon:xp,label:"Share this item",id:"share",component:_`<iaux-in-share-panel
        .identifier=${((e=this.itemMD)===null||e===void 0?void 0:e.metadata.identifier)||"ux-team-books"}
        .type=${"book"}
        .creator=${"UX Team"}
        .description=${"list of test books"}
        .baseHost=${"archive.org"}
        .fileSubPrefix=${""}
      ></iaux-in-share-panel>`},i=[...vs],s={id:"viewable-files",icon:Op,label:`Viewable Files (${vs.length})`,baseHost:"archive.org",item:this.itemMD,subPrefix:"",actionButton:_`<iaux-in-sort-files-button
        @fileListSorted=${r=>this.sortFilesCallback(r)}
        .fileListRaw=${vs}
      ></iaux-in-sort-files-button>`,component:_`<iaux-in-viewable-files-panel
        .subPrefix=${"onestrandriverpdf"}
        .fileList=${i}
      ></iaux-in-viewable-files-panel> `};this.menuContents=[s,t],this.menuShortcuts=[s,t]}async sortFilesCallback(e){const{sortType:t,sortedFiles:i}=e.detail;this.fileListToDisplay=i,console.log("fileListSorted",{sortType:t,sortedFiles:i}),await this.updateComplete,console.log("fileListSortedasyncd",{sortType:t,sortedFiles:i}),this.drawMenus()}get theaterExample(){return _`
      <div slot="main">
        <div class="theater-example">
          <img
            alt="cat theater"
            src="https://archive.org/download/masterbookofamericanfolksong00shep/__ia_thumb.jpg"
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
    `}get isViewAvailable(){return!!this.showTheaterExample}render(){const{isViewAvailable:e,loaded:t,showPlaceholder:i,headerOn:s,fullscreen:r,menuContents:o,menuShortcuts:d,showTheaterExample:l}=this;return console.log("&&&& item nav properties",{loaded:t,headerOn:s,isViewAvailable:e,showTheaterExample:l,showPlaceholder:i,fullscreen:r,menuContents:o,menuShortcuts:d}),_`
      <h1>theater, in page</h1>
      <section>
        <iaux-item-navigator
          baseHost="archive.org"
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
    `}};z.styles=m`
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
  `;f([g({type:Object})],z.prototype,"itemMD",void 0);f([g({type:String})],z.prototype,"encodedManifest",void 0);f([g({attribute:!1})],z.prototype,"sharedObserver",void 0);f([g({type:Array,attribute:!1})],z.prototype,"menuContents",void 0);f([g({type:Array,attribute:!1})],z.prototype,"menuShortcuts",void 0);f([g({reflect:!0,attribute:!0,type:Boolean})],z.prototype,"fullscreen",void 0);f([g({reflect:!0,attribute:!0,type:Boolean})],z.prototype,"headerOn",void 0);f([g({reflect:!0,attribute:!0,type:Boolean})],z.prototype,"loaded",void 0);f([g({reflect:!0,attribute:!0,type:Boolean})],z.prototype,"showPlaceholder",void 0);f([g({reflect:!0,attribute:!0,type:Boolean})],z.prototype,"showTheaterExample",void 0);f([g({type:Array})],z.prototype,"fileListToDisplay",void 0);f([ls("iaux-item-navigator")],z.prototype,"itemNav",void 0);f([ls("modal-manager")],z.prototype,"modalMgr",void 0);z=f([J("app-root")],z);
