(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var Ec={exports:{}},Do={},Mc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Tv(){if(zp)return ct;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function v(N,ne,De){this.props=N,this.context=ne,this.refs=R,this.updater=De||S}v.prototype.isReactComponent={},v.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=v.prototype;function D(N,ne,De){this.props=N,this.context=ne,this.refs=R,this.updater=De||S}var L=D.prototype=new g;L.constructor=D,T(L,v.prototype),L.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(N,ne,De){var K,ue={},Ee=null,ve=null;if(ne!=null)for(K in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)Y.call(ne,K)&&!I.hasOwnProperty(K)&&(ue[K]=ne[K]);var we=arguments.length-2;if(we===1)ue.children=De;else if(1<we){for(var Ue=Array(we),Ke=0;Ke<we;Ke++)Ue[Ke]=arguments[Ke+2];ue.children=Ue}if(N&&N.defaultProps)for(K in we=N.defaultProps,we)ue[K]===void 0&&(ue[K]=we[K]);return{$$typeof:s,type:N,key:Ee,ref:ve,props:ue,_owner:O.current}}function P(N,ne){return{$$typeof:s,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function k(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(De){return ne[De]})}var se=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):ne.toString(36)}function fe(N,ne,De,K,ue){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Ee){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case s:case e:ve=!0}}if(ve)return ve=N,ue=ue(ve),N=K===""?"."+te(ve,0):K,C(ue)?(De="",N!=null&&(De=N.replace(se,"$&/")+"/"),fe(ue,ne,De,"",function(Ke){return Ke})):ue!=null&&(w(ue)&&(ue=P(ue,De+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+N)),ne.push(ue)),1;if(ve=0,K=K===""?".":K+":",C(N))for(var we=0;we<N.length;we++){Ee=N[we];var Ue=K+te(Ee,we);ve+=fe(Ee,ne,De,Ue,ue)}else if(Ue=x(N),typeof Ue=="function")for(N=Ue.call(N),we=0;!(Ee=N.next()).done;)Ee=Ee.value,Ue=K+te(Ee,we++),ve+=fe(Ee,ne,De,Ue,ue);else if(Ee==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,De){if(N==null)return N;var K=[],ue=0;return fe(N,K,"","",function(Ee){return ne.call(De,Ee,ue++)}),K}function oe(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(De){(N._status===0||N._status===-1)&&(N._status=1,N._result=De)},function(De){(N._status===0||N._status===-1)&&(N._status=2,N._result=De)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(N,ne,De){he(N,function(){ne.apply(this,arguments)},De)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ct.Component=v,ct.Fragment=t,ct.Profiler=a,ct.PureComponent=D,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=re,ct.cloneElement=function(N,ne,De){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var K=T({},N.props),ue=N.key,Ee=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,ve=O.current),ne.key!==void 0&&(ue=""+ne.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ue in ne)Y.call(ne,Ue)&&!I.hasOwnProperty(Ue)&&(K[Ue]=ne[Ue]===void 0&&we!==void 0?we[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)K.children=De;else if(1<Ue){we=Array(Ue);for(var Ke=0;Ke<Ue;Ke++)we[Ke]=arguments[Ke+2];K.children=we}return{$$typeof:s,type:N.type,key:ue,ref:Ee,props:K,_owner:ve}},ct.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ct.createElement=V,ct.createFactory=function(N){var ne=V.bind(null,N);return ne.type=N,ne},ct.createRef=function(){return{current:null}},ct.forwardRef=function(N){return{$$typeof:d,render:N}},ct.isValidElement=w,ct.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:oe}},ct.memo=function(N,ne){return{$$typeof:m,type:N,compare:ne===void 0?null:ne}},ct.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},ct.unstable_act=re,ct.useCallback=function(N,ne){return le.current.useCallback(N,ne)},ct.useContext=function(N){return le.current.useContext(N)},ct.useDebugValue=function(){},ct.useDeferredValue=function(N){return le.current.useDeferredValue(N)},ct.useEffect=function(N,ne){return le.current.useEffect(N,ne)},ct.useId=function(){return le.current.useId()},ct.useImperativeHandle=function(N,ne,De){return le.current.useImperativeHandle(N,ne,De)},ct.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},ct.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},ct.useMemo=function(N,ne){return le.current.useMemo(N,ne)},ct.useReducer=function(N,ne,De){return le.current.useReducer(N,ne,De)},ct.useRef=function(N){return le.current.useRef(N)},ct.useState=function(N){return le.current.useState(N)},ct.useSyncExternalStore=function(N,ne,De){return le.current.useSyncExternalStore(N,ne,De)},ct.useTransition=function(){return le.current.useTransition()},ct.version="18.3.1",ct}var Vp;function ed(){return Vp||(Vp=1,Mc.exports=Tv()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function wv(){if(Hp)return Do;Hp=1;var s=ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(y[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return Do.Fragment=t,Do.jsx=c,Do.jsxs=c,Do}var Gp;function Av(){return Gp||(Gp=1,Ec.exports=wv()),Ec.exports}var qn=Av(),_i=ed(),Ja={},Tc={exports:{}},An={},wc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Rv(){return Wp||(Wp=1,(function(s){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<a(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,De=ne>>>1;N<De;){var K=2*(N+1)-1,ue=B[K],Ee=K+1,ve=B[Ee];if(0>a(ue,re))Ee<ne&&0>a(ve,ue)?(B[N]=ve,B[Ee]=re,N=Ee):(B[N]=ue,B[K]=re,N=K);else if(Ee<ne&&0>a(ve,re))B[N]=ve,B[Ee]=re,N=Ee;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,y=null,x=3,S=!1,T=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=t(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(m)}}function C(B){if(R=!1,L(B),!T)if(t(p)!==null)T=!0,oe(Y);else{var ae=t(m);ae!==null&&le(C,ae.startTime-B)}}function Y(B,ae){T=!1,R&&(R=!1,g(V),V=-1),S=!0;var re=x;try{for(L(ae),y=t(p);y!==null&&(!(y.expirationTime>ae)||B&&!k());){var N=y.callback;if(typeof N=="function"){y.callback=null,x=y.priorityLevel;var ne=N(y.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?y.callback=ne:y===t(p)&&r(p),L(ae)}else r(p);y=t(p)}if(y!==null)var De=!0;else{var K=t(m);K!==null&&le(C,K.startTime-ae),De=!1}return De}finally{y=null,x=re,S=!1}}var O=!1,I=null,V=-1,P=5,w=-1;function k(){return!(s.unstable_now()-w<P)}function se(){if(I!==null){var B=s.unstable_now();w=B;var ae=!0;try{ae=I(!0,B)}finally{ae?te():(O=!1,I=null)}}else O=!1}var te;if(typeof D=="function")te=function(){D(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=se,te=function(){he.postMessage(null)}}else te=function(){v(se,0)};function oe(B){I=B,O||(O=!0,te())}function le(B,ae){V=v(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(Y))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return B()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=x;x=B;try{return ae()}finally{x=re}},s.unstable_scheduleCallback=function(B,ae,re){var N=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(m,B),t(p)===null&&B===t(m)&&(R?(g(V),V=-1):R=!0,le(C,re-N))):(B.sortIndex=ne,e(p,B),T||S||(T=!0,oe(Y))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var ae=x;return function(){var re=x;x=ae;try{return B.apply(this,arguments)}finally{x=re}}}})(Ac)),Ac}var Xp;function Cv(){return Xp||(Xp=1,wc.exports=Rv()),wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Pv(){if(qp)return An;qp=1;var s=ed(),e=Cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(n){return p.call(y,n)?!0:p.call(_,n)?!1:m.test(n)?y[n]=!0:(_[n]=!0,!1)}function S(n,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,l){if(i===null||typeof i>"u"||S(n,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,l){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?n.setAttributeNS(l,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var De=!1;function K(n,i){if(!n||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){l=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}n()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,U=h.length-1;1<=E&&0<=U&&f[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==h[U]){var F=`
`+f[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=K(n.type,!1),n;case 11:return n=K(n.type.render,!1),n;case 1:return n=K(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case P:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Ke(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return n&&(l=Ue(n)?n.checked?"true":"false":n.value),n=l,n!==o?(i.setValue(n),!0):!1}function bt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function hn(n,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function lt(n,i){ft(n,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||bt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function b(n,i,o,l){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&l&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function M(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function pe(n,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),l!=null&&(n.defaultValue=""+l)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,l,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ye[i]=ye[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(n)&&ye[n]?(""+i).trim():i+"px"}function Qe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?n.setProperty(o,f):n[o]=f}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function nt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ie=null,de=null;function be(n){if(n=_o(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=pa(i),Re(n.stateNode,n.type,i))}}function Pe(n){ie?de?de.push(n):de=[n]:ie=n}function it(){if(ie){var n=ie,i=de;if(de=ie=null,be(n),i)for(n=0;n<i.length;n++)be(i[n])}}function Dt(n,i){return n(i)}function Xt(){}var gt=!1;function xn(n,i,o){if(gt)return n(i,o);gt=!0;try{return Dt(n,i,o)}finally{gt=!1,(ie!==null||de!==null)&&(Xt(),it())}}function pn(n,i){var o=n.stateNode;if(o===null)return null;var l=pa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ns=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ns=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ns=!1}function wi(n,i,o,l,f,h,E,U,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(_e){this.onError(_e)}}var Ai=!1,Cr=null,Pr=!1,Ki=null,jo={onError:function(n){Ai=!0,Cr=n}};function is(n,i,o,l,f,h,E,U,F){Ai=!1,Cr=null,wi.apply(jo,arguments)}function $o(n,i,o,l,f,h,E,U,F){if(is.apply(this,arguments),Ai){if(Ai){var Q=Cr;Ai=!1,Cr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=Q)}}function fi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ko(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(n){if(fi(n)!==n)throw Error(t(188))}function Wl(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return Zo(f),n;if(h===l)return Zo(f),i;h=h.sibling}throw Error(t(188))}if(o.return!==l.return)o=f,l=h;else{for(var E=!1,U=f.child;U;){if(U===o){E=!0,o=f,l=h;break}if(U===l){E=!0,l=f,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,l=f;break}if(U===l){E=!0,l=h,o=f;break}U=U.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==l)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=Wl(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var J=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,He=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,Je=e.unstable_UserBlockingPriority,tt=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,pt=e.unstable_IdlePriority,Et=null,ht=null;function rn(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:xt,Xe=Math.log,Kn=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Xe(n)/Kn|0)|0}var sn=64,Zn=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function di(n,i){var o=n.pendingLanes;if(o===0)return 0;var l=0,f=n.suspendedLanes,h=n.pingedLanes,E=o&268435455;if(E!==0){var U=E&~f;U!==0?l=qt(U):(h&=E,h!==0&&(l=qt(h)))}else E=o&~f,E!==0?l=qt(E):h!==0&&(l=qt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)o=31-rt(i),f=1<<o,l|=n[o],i&=~f;return l}function Pt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function On(n,i){for(var o=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-rt(h),U=1<<E,F=f[E];F===-1?((U&o)===0||(U&l)!==0)&&(f[E]=Pt(U,i)):F<=i&&(n.expiredLanes|=U),h&=~U}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function mn(){var n=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),n}function kn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function yn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-rt(i),n[i]=o}function Qo(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-rt(o),h=1<<f;i[f]=0,l[f]=-1,n[f]=-1,o&=~h}}function Xl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var l=31-rt(o),f=1<<l;f&i|n[l]&i&&(n[l]|=i),o&=~f}}var wt=0;function vd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xd,ql,yd,Sd,Ed,Yl=!1,Jo=[],Zi=null,Qi=null,Ji=null,eo=new Map,to=new Map,er=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(n,i,o,l,f,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=_o(i),i!==null&&ql(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Yg(n,i,o,l,f){switch(i){case"focusin":return Zi=no(Zi,n,i,o,l,f),!0;case"dragenter":return Qi=no(Qi,n,i,o,l,f),!0;case"mouseover":return Ji=no(Ji,n,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return eo.set(h,no(eo.get(h)||null,n,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,to.set(h,no(to.get(h)||null,n,i,o,l,f)),!0}return!1}function Td(n){var i=br(n.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){n.blockedOn=i,Ed(n.priority,function(){yd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var l=new o.constructor(o.type,o);Mt=l,o.target.dispatchEvent(l),Mt=null}else return i=_o(o),i!==null&&ql(i),n.blockedOn=o,!1;i.shift()}return!0}function wd(n,i,o){ea(n)&&o.delete(i)}function jg(){Yl=!1,Zi!==null&&ea(Zi)&&(Zi=null),Qi!==null&&ea(Qi)&&(Qi=null),Ji!==null&&ea(Ji)&&(Ji=null),eo.forEach(wd),to.forEach(wd)}function io(n,i){n.blockedOn===i&&(n.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jg)))}function ro(n){function i(f){return io(f,n)}if(0<Jo.length){io(Jo[0],n);for(var o=1;o<Jo.length;o++){var l=Jo[o];l.blockedOn===n&&(l.blockedOn=null)}}for(Zi!==null&&io(Zi,n),Qi!==null&&io(Qi,n),Ji!==null&&io(Ji,n),eo.forEach(i),to.forEach(i),o=0;o<er.length;o++)l=er[o],l.blockedOn===n&&(l.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)Td(o),o.blockedOn===null&&er.shift()}var rs=C.ReactCurrentBatchConfig,ta=!0;function $g(n,i,o,l){var f=wt,h=rs.transition;rs.transition=null;try{wt=1,jl(n,i,o,l)}finally{wt=f,rs.transition=h}}function Kg(n,i,o,l){var f=wt,h=rs.transition;rs.transition=null;try{wt=4,jl(n,i,o,l)}finally{wt=f,rs.transition=h}}function jl(n,i,o,l){if(ta){var f=$l(n,i,o,l);if(f===null)du(n,i,l,na,o),Md(n,l);else if(Yg(f,n,i,o,l))l.stopPropagation();else if(Md(n,l),i&4&&-1<qg.indexOf(n)){for(;f!==null;){var h=_o(f);if(h!==null&&xd(h),h=$l(n,i,o,l),h===null&&du(n,i,l,na,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else du(n,i,l,null,o)}}var na=null;function $l(n,i,o,l){if(na=null,n=H(l),n=br(n),n!==null)if(i=fi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ko(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return na=n,null}function Ad(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(He()){case Be:return 1;case Je:return 4;case tt:case Ge:return 16;case pt:return 536870912;default:return 16}default:return 16}}var tr=null,Kl=null,ia=null;function Rd(){if(ia)return ia;var n,i=Kl,o=i.length,l,f="value"in tr?tr.value:tr.textContent,h=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(l=1;l<=E&&i[o-l]===f[h-l];l++);return ia=f.slice(n,1<l?1-l:void 0)}function ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function sa(){return!0}function Cd(){return!1}function Ln(n){function i(o,l,f,h,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sa:Cd,this.isPropagationStopped=Cd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Ln(ss),so=re({},ss,{view:0,detail:0}),Zg=Ln(so),Ql,Jl,oo,oa=re({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Ql=n.screenX-oo.screenX,Jl=n.screenY-oo.screenY):Jl=Ql=0,oo=n),Ql)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),Pd=Ln(oa),Qg=re({},oa,{dataTransfer:0}),Jg=Ln(Qg),e_=re({},so,{relatedTarget:0}),eu=Ln(e_),t_=re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=Ln(t_),i_=re({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),r_=Ln(i_),s_=re({},ss,{data:0}),bd=Ln(s_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=l_[n])?!!i[n]:!1}function tu(){return u_}var c_=re({},so,{key:function(n){if(n.key){var i=o_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?a_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f_=Ln(c_),d_=re({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=Ln(d_),h_=re({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),p_=Ln(h_),m_=re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=Ln(m_),__=re({},oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=Ln(__),x_=[9,13,27,32],nu=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var y_=d&&"TextEvent"in window&&!ao,Dd=d&&(!nu||ao&&8<ao&&11>=ao),Ud=" ",Nd=!1;function Id(n,i){switch(n){case"keyup":return x_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function S_(n,i){switch(n){case"compositionend":return Fd(i);case"keypress":return i.which!==32?null:(Nd=!0,Ud);case"textInput":return n=i.data,n===Ud&&Nd?null:n;default:return null}}function E_(n,i){if(os)return n==="compositionend"||!nu&&Id(n,i)?(n=Rd(),ia=Kl=tr=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dd&&i.locale!=="ko"?null:i.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!M_[n.type]:i==="textarea"}function kd(n,i,o,l){Pe(l),i=fa(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,l),n.push({event:o,listeners:i}))}var lo=null,uo=null;function T_(n){nh(n,0)}function aa(n){var i=fs(n);if(dt(i))return n}function w_(n,i){if(n==="change")return i}var Bd=!1;if(d){var iu;if(d){var ru="oninput"in document;if(!ru){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),ru=typeof zd.oninput=="function"}iu=ru}else iu=!1;Bd=iu&&(!document.documentMode||9<document.documentMode)}function Vd(){lo&&(lo.detachEvent("onpropertychange",Hd),uo=lo=null)}function Hd(n){if(n.propertyName==="value"&&aa(uo)){var i=[];kd(i,uo,n,H(n)),xn(T_,i)}}function A_(n,i,o){n==="focusin"?(Vd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Hd)):n==="focusout"&&Vd()}function R_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return aa(uo)}function C_(n,i){if(n==="click")return aa(i)}function P_(n,i){if(n==="input"||n==="change")return aa(i)}function b_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:b_;function co(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Qn(n[f],i[f]))return!1}return!0}function Gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,i){var o=Gd(n);n=0;for(var l;o;){if(o.nodeType===3){if(l=n+o.textContent.length,n<=i&&l>=i)return{node:o,offset:i-n};n=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gd(o)}}function Xd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Xd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function qd(){for(var n=window,i=bt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=bt(n.document)}return i}function su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function L_(n){var i=qd(),o=n.focusedElem,l=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Xd(o.ownerDocument.documentElement,o)){if(l!==null&&su(o)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!n.extend&&h>l&&(f=l,l=h,h=f),f=Wd(o,h);var E=Wd(o,l);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),h>l?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var D_=d&&"documentMode"in document&&11>=document.documentMode,as=null,ou=null,fo=null,au=!1;function Yd(n,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;au||as==null||as!==bt(l)||(l=as,"selectionStart"in l&&su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=fa(ou,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,o),n.push({event:i,listeners:l}),i.target=as)))}function la(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ls={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},lu={},jd={};d&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ua(n){if(lu[n])return lu[n];if(!ls[n])return n;var i=ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in jd)return lu[n]=i[o];return n}var $d=ua("animationend"),Kd=ua("animationiteration"),Zd=ua("animationstart"),Qd=ua("transitionend"),Jd=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Jd.set(n,i),u(i,[n])}for(var uu=0;uu<eh.length;uu++){var cu=eh[uu],U_=cu.toLowerCase(),N_=cu[0].toUpperCase()+cu.slice(1);nr(U_,"on"+N_)}nr($d,"onAnimationEnd"),nr(Kd,"onAnimationIteration"),nr(Zd,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Qd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function th(n,i,o){var l=n.type||"unknown-event";n.currentTarget=o,$o(l,i,void 0,n),n.currentTarget=null}function nh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var l=n[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],F=U.instance,Q=U.currentTarget;if(U=U.listener,F!==h&&f.isPropagationStopped())break e;th(f,U,Q),h=F}else for(E=0;E<l.length;E++){if(U=l[E],F=U.instance,Q=U.currentTarget,U=U.listener,F!==h&&f.isPropagationStopped())break e;th(f,U,Q),h=F}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Ut(n,i){var o=i[vu];o===void 0&&(o=i[vu]=new Set);var l=n+"__bubble";o.has(l)||(ih(i,n,2,!1),o.add(l))}function fu(n,i,o){var l=0;i&&(l|=4),ih(o,n,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[ca]){n[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(I_.has(o)||fu(o,!1,n),fu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ca]||(i[ca]=!0,fu("selectionchange",!1,i))}}function ih(n,i,o,l){switch(Ad(i)){case 1:var f=$g;break;case 4:f=Kg;break;default:f=jl}o=f.bind(null,i,o,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function du(n,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===f||F.nodeType===8&&F.parentNode===f))return;E=E.return}for(;U!==null;){if(E=br(U),E===null)return;if(F=E.tag,F===5||F===6){l=h=E;continue e}U=U.parentNode}}l=l.return}xn(function(){var Q=h,_e=H(o),xe=[];e:{var me=Jd.get(n);if(me!==void 0){var Le=Zl,ke=n;switch(n){case"keypress":if(ra(o)===0)break e;case"keydown":case"keyup":Le=f_;break;case"focusin":ke="focus",Le=eu;break;case"focusout":ke="blur",Le=eu;break;case"beforeblur":case"afterblur":Le=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=p_;break;case $d:case Kd:case Zd:Le=n_;break;case Qd:Le=g_;break;case"scroll":Le=Zg;break;case"wheel":Le=v_;break;case"copy":case"cut":case"paste":Le=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Ld}var ze=(i&4)!==0,Vt=!ze&&n==="scroll",q=ze?me!==null?me+"Capture":null:me;ze=[];for(var z=Q,j;z!==null;){j=z;var Me=j.stateNode;if(j.tag===5&&Me!==null&&(j=Me,q!==null&&(Me=pn(z,q),Me!=null&&ze.push(mo(z,Me,j)))),Vt)break;z=z.return}0<ze.length&&(me=new Le(me,ke,null,o,_e),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&o!==Mt&&(ke=o.relatedTarget||o.fromElement)&&(br(ke)||ke[Ci]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ke=o.relatedTarget||o.toElement,Le=Q,ke=ke?br(ke):null,ke!==null&&(Vt=fi(ke),ke!==Vt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=Q),Le!==ke)){if(ze=Pd,Me="onMouseLeave",q="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ze=Ld,Me="onPointerLeave",q="onPointerEnter",z="pointer"),Vt=Le==null?me:fs(Le),j=ke==null?me:fs(ke),me=new ze(Me,z+"leave",Le,o,_e),me.target=Vt,me.relatedTarget=j,Me=null,br(_e)===Q&&(ze=new ze(q,z+"enter",ke,o,_e),ze.target=j,ze.relatedTarget=Vt,Me=ze),Vt=Me,Le&&ke)t:{for(ze=Le,q=ke,z=0,j=ze;j;j=us(j))z++;for(j=0,Me=q;Me;Me=us(Me))j++;for(;0<z-j;)ze=us(ze),z--;for(;0<j-z;)q=us(q),j--;for(;z--;){if(ze===q||q!==null&&ze===q.alternate)break t;ze=us(ze),q=us(q)}ze=null}else ze=null;Le!==null&&rh(xe,me,Le,ze,!1),ke!==null&&Vt!==null&&rh(xe,Vt,ke,ze,!0)}}e:{if(me=Q?fs(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=w_;else if(Od(me))if(Bd)We=P_;else{We=R_;var je=A_}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=C_);if(We&&(We=We(n,Q))){kd(xe,We,o,_e);break e}je&&je(n,me,Q),n==="focusout"&&(je=me._wrapperState)&&je.controlled&&me.type==="number"&&Tt(me,"number",me.value)}switch(je=Q?fs(Q):window,n){case"focusin":(Od(je)||je.contentEditable==="true")&&(as=je,ou=Q,fo=null);break;case"focusout":fo=ou=as=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Yd(xe,o,_e);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":Yd(xe,o,_e)}var $e;if(nu)e:{switch(n){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else os?Id(n,o)&&(et="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(et="onCompositionStart");et&&(Dd&&o.locale!=="ko"&&(os||et!=="onCompositionStart"?et==="onCompositionEnd"&&os&&($e=Rd()):(tr=_e,Kl="value"in tr?tr.value:tr.textContent,os=!0)),je=fa(Q,et),0<je.length&&(et=new bd(et,n,null,o,_e),xe.push({event:et,listeners:je}),$e?et.data=$e:($e=Fd(o),$e!==null&&(et.data=$e)))),($e=y_?S_(n,o):E_(n,o))&&(Q=fa(Q,"onBeforeInput"),0<Q.length&&(_e=new bd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Q}),_e.data=$e))}nh(xe,i)})}function mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function fa(n,i){for(var o=i+"Capture",l=[];n!==null;){var f=n,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=pn(n,o),h!=null&&l.unshift(mo(n,h,f)),h=pn(n,i),h!=null&&l.push(mo(n,h,f))),n=n.return}return l}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rh(n,i,o,l,f){for(var h=i._reactName,E=[];o!==null&&o!==l;){var U=o,F=U.alternate,Q=U.stateNode;if(F!==null&&F===l)break;U.tag===5&&Q!==null&&(U=Q,f?(F=pn(o,h),F!=null&&E.unshift(mo(o,F,U))):f||(F=pn(o,h),F!=null&&E.push(mo(o,F,U)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var F_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function sh(n){return(typeof n=="string"?n:""+n).replace(F_,`
`).replace(O_,"")}function da(n,i,o){if(i=sh(i),sh(n)!==i&&o)throw Error(t(425))}function ha(){}var hu=null,pu=null;function mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(n){return oh.resolve(null).then(n).catch(z_)}:gu;function z_(n){setTimeout(function(){throw n})}function _u(n,i){var o=i,l=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){n.removeChild(f),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);ro(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),hi="__reactFiber$"+cs,go="__reactProps$"+cs,Ci="__reactContainer$"+cs,vu="__reactEvents$"+cs,V_="__reactListeners$"+cs,H_="__reactHandles$"+cs;function br(n){var i=n[hi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ci]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ah(n);n!==null;){if(o=n[hi])return o;n=ah(n)}return i}n=o,o=n.parentNode}return null}function _o(n){return n=n[hi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function pa(n){return n[go]||null}var xu=[],ds=-1;function rr(n){return{current:n}}function Nt(n){0>ds||(n.current=xu[ds],xu[ds]=null,ds--)}function Lt(n,i){ds++,xu[ds]=n.current,n.current=i}var sr={},on=rr(sr),Sn=rr(!1),Lr=sr;function hs(n,i){var o=n.type.contextTypes;if(!o)return sr;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function En(n){return n=n.childContextTypes,n!=null}function ma(){Nt(Sn),Nt(on)}function lh(n,i,o){if(on.current!==sr)throw Error(t(168));Lt(on,i),Lt(Sn,o)}function uh(n,i,o){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return re({},o,l)}function ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Lr=on.current,Lt(on,n),Lt(Sn,Sn.current),!0}function ch(n,i,o){var l=n.stateNode;if(!l)throw Error(t(169));o?(n=uh(n,i,Lr),l.__reactInternalMemoizedMergedChildContext=n,Nt(Sn),Nt(on),Lt(on,n)):Nt(Sn),Lt(Sn,o)}var Pi=null,_a=!1,yu=!1;function fh(n){Pi===null?Pi=[n]:Pi.push(n)}function G_(n){_a=!0,fh(n)}function or(){if(!yu&&Pi!==null){yu=!0;var n=0,i=wt;try{var o=Pi;for(wt=1;n<o.length;n++){var l=o[n];do l=l(!0);while(l!==null)}Pi=null,_a=!1}catch(f){throw Pi!==null&&(Pi=Pi.slice(n+1)),J(Be,or),f}finally{wt=i,yu=!1}}return null}var ps=[],ms=0,va=null,xa=0,Bn=[],zn=0,Dr=null,bi=1,Li="";function Ur(n,i){ps[ms++]=xa,ps[ms++]=va,va=n,xa=i}function dh(n,i,o){Bn[zn++]=bi,Bn[zn++]=Li,Bn[zn++]=Dr,Dr=n;var l=bi;n=Li;var f=32-rt(l)-1;l&=~(1<<f),o+=1;var h=32-rt(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,bi=1<<32-rt(i)+f|o<<f|l,Li=h+n}else bi=1<<h|o<<f|l,Li=n}function Su(n){n.return!==null&&(Ur(n,1),dh(n,1,0))}function Eu(n){for(;n===va;)va=ps[--ms],ps[ms]=null,xa=ps[--ms],ps[ms]=null;for(;n===Dr;)Dr=Bn[--zn],Bn[zn]=null,Li=Bn[--zn],Bn[zn]=null,bi=Bn[--zn],Bn[zn]=null}var Dn=null,Un=null,It=!1,Jn=null;function hh(n,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ph(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Dn=n,Un=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Dn=n,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:bi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Dn=n,Un=null,!0):!1;default:return!1}}function Mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tu(n){if(It){var i=Un;if(i){var o=i;if(!ph(n,i)){if(Mu(n))throw Error(t(418));i=ir(o.nextSibling);var l=Dn;i&&ph(n,i)?hh(l,o):(n.flags=n.flags&-4097|2,It=!1,Dn=n)}}else{if(Mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,It=!1,Dn=n}}}function mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Dn=n}function ya(n){if(n!==Dn)return!1;if(!It)return mh(n),It=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mu(n.type,n.memoizedProps)),i&&(i=Un)){if(Mu(n))throw gh(),Error(t(418));for(;i;)hh(n,i),i=ir(i.nextSibling)}if(mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Un=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Un=null}}else Un=Dn?ir(n.stateNode.nextSibling):null;return!0}function gh(){for(var n=Un;n;)n=ir(n.nextSibling)}function gs(){Un=Dn=null,It=!1}function wu(n){Jn===null?Jn=[n]:Jn.push(n)}var W_=C.ReactCurrentBatchConfig;function vo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var l=o.stateNode}if(!l)throw Error(t(147,n));var f=l,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=f.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Sa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function _h(n){var i=n._init;return i(n._payload)}function vh(n){function i(q,z){if(n){var j=q.deletions;j===null?(q.deletions=[z],q.flags|=16):j.push(z)}}function o(q,z){if(!n)return null;for(;z!==null;)i(q,z),z=z.sibling;return null}function l(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function f(q,z){return q=pr(q,z),q.index=0,q.sibling=null,q}function h(q,z,j){return q.index=j,n?(j=q.alternate,j!==null?(j=j.index,j<z?(q.flags|=2,z):j):(q.flags|=2,z)):(q.flags|=1048576,z)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,z,j,Me){return z===null||z.tag!==6?(z=gc(j,q.mode,Me),z.return=q,z):(z=f(z,j),z.return=q,z)}function F(q,z,j,Me){var We=j.type;return We===I?_e(q,z,j.props.children,Me,j.key):z!==null&&(z.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&_h(We)===z.type)?(Me=f(z,j.props),Me.ref=vo(q,z,j),Me.return=q,Me):(Me=Xa(j.type,j.key,j.props,null,q.mode,Me),Me.ref=vo(q,z,j),Me.return=q,Me)}function Q(q,z,j,Me){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=_c(j,q.mode,Me),z.return=q,z):(z=f(z,j.children||[]),z.return=q,z)}function _e(q,z,j,Me,We){return z===null||z.tag!==7?(z=Vr(j,q.mode,Me,We),z.return=q,z):(z=f(z,j),z.return=q,z)}function xe(q,z,j){if(typeof z=="string"&&z!==""||typeof z=="number")return z=gc(""+z,q.mode,j),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Y:return j=Xa(z.type,z.key,z.props,null,q.mode,j),j.ref=vo(q,null,z),j.return=q,j;case O:return z=_c(z,q.mode,j),z.return=q,z;case oe:var Me=z._init;return xe(q,Me(z._payload),j)}if(qe(z)||ae(z))return z=Vr(z,q.mode,j,null),z.return=q,z;Sa(q,z)}return null}function me(q,z,j,Me){var We=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return We!==null?null:U(q,z,""+j,Me);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:return j.key===We?F(q,z,j,Me):null;case O:return j.key===We?Q(q,z,j,Me):null;case oe:return We=j._init,me(q,z,We(j._payload),Me)}if(qe(j)||ae(j))return We!==null?null:_e(q,z,j,Me,null);Sa(q,j)}return null}function Le(q,z,j,Me,We){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return q=q.get(j)||null,U(z,q,""+Me,We);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case Y:return q=q.get(Me.key===null?j:Me.key)||null,F(z,q,Me,We);case O:return q=q.get(Me.key===null?j:Me.key)||null,Q(z,q,Me,We);case oe:var je=Me._init;return Le(q,z,j,je(Me._payload),We)}if(qe(Me)||ae(Me))return q=q.get(j)||null,_e(z,q,Me,We,null);Sa(z,Me)}return null}function ke(q,z,j,Me){for(var We=null,je=null,$e=z,et=z=0,Jt=null;$e!==null&&et<j.length;et++){$e.index>et?(Jt=$e,$e=null):Jt=$e.sibling;var yt=me(q,$e,j[et],Me);if(yt===null){$e===null&&($e=Jt);break}n&&$e&&yt.alternate===null&&i(q,$e),z=h(yt,z,et),je===null?We=yt:je.sibling=yt,je=yt,$e=Jt}if(et===j.length)return o(q,$e),It&&Ur(q,et),We;if($e===null){for(;et<j.length;et++)$e=xe(q,j[et],Me),$e!==null&&(z=h($e,z,et),je===null?We=$e:je.sibling=$e,je=$e);return It&&Ur(q,et),We}for($e=l(q,$e);et<j.length;et++)Jt=Le($e,q,et,j[et],Me),Jt!==null&&(n&&Jt.alternate!==null&&$e.delete(Jt.key===null?et:Jt.key),z=h(Jt,z,et),je===null?We=Jt:je.sibling=Jt,je=Jt);return n&&$e.forEach(function(mr){return i(q,mr)}),It&&Ur(q,et),We}function ze(q,z,j,Me){var We=ae(j);if(typeof We!="function")throw Error(t(150));if(j=We.call(j),j==null)throw Error(t(151));for(var je=We=null,$e=z,et=z=0,Jt=null,yt=j.next();$e!==null&&!yt.done;et++,yt=j.next()){$e.index>et?(Jt=$e,$e=null):Jt=$e.sibling;var mr=me(q,$e,yt.value,Me);if(mr===null){$e===null&&($e=Jt);break}n&&$e&&mr.alternate===null&&i(q,$e),z=h(mr,z,et),je===null?We=mr:je.sibling=mr,je=mr,$e=Jt}if(yt.done)return o(q,$e),It&&Ur(q,et),We;if($e===null){for(;!yt.done;et++,yt=j.next())yt=xe(q,yt.value,Me),yt!==null&&(z=h(yt,z,et),je===null?We=yt:je.sibling=yt,je=yt);return It&&Ur(q,et),We}for($e=l(q,$e);!yt.done;et++,yt=j.next())yt=Le($e,q,et,yt.value,Me),yt!==null&&(n&&yt.alternate!==null&&$e.delete(yt.key===null?et:yt.key),z=h(yt,z,et),je===null?We=yt:je.sibling=yt,je=yt);return n&&$e.forEach(function(Mv){return i(q,Mv)}),It&&Ur(q,et),We}function Vt(q,z,j,Me){if(typeof j=="object"&&j!==null&&j.type===I&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:e:{for(var We=j.key,je=z;je!==null;){if(je.key===We){if(We=j.type,We===I){if(je.tag===7){o(q,je.sibling),z=f(je,j.props.children),z.return=q,q=z;break e}}else if(je.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&_h(We)===je.type){o(q,je.sibling),z=f(je,j.props),z.ref=vo(q,je,j),z.return=q,q=z;break e}o(q,je);break}else i(q,je);je=je.sibling}j.type===I?(z=Vr(j.props.children,q.mode,Me,j.key),z.return=q,q=z):(Me=Xa(j.type,j.key,j.props,null,q.mode,Me),Me.ref=vo(q,z,j),Me.return=q,q=Me)}return E(q);case O:e:{for(je=j.key;z!==null;){if(z.key===je)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){o(q,z.sibling),z=f(z,j.children||[]),z.return=q,q=z;break e}else{o(q,z);break}else i(q,z);z=z.sibling}z=_c(j,q.mode,Me),z.return=q,q=z}return E(q);case oe:return je=j._init,Vt(q,z,je(j._payload),Me)}if(qe(j))return ke(q,z,j,Me);if(ae(j))return ze(q,z,j,Me);Sa(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,z!==null&&z.tag===6?(o(q,z.sibling),z=f(z,j),z.return=q,q=z):(o(q,z),z=gc(j,q.mode,Me),z.return=q,q=z),E(q)):o(q,z)}return Vt}var _s=vh(!0),xh=vh(!1),Ea=rr(null),Ma=null,vs=null,Au=null;function Ru(){Au=vs=Ma=null}function Cu(n){var i=Ea.current;Nt(Ea),n._currentValue=i}function Pu(n,i,o){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===o)break;n=n.return}}function xs(n,i){Ma=n,Au=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Mn=!0),n.firstContext=null)}function Vn(n){var i=n._currentValue;if(Au!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(Ma===null)throw Error(t(308));vs=n,Ma.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Nr=null;function bu(n){Nr===null?Nr=[n]:Nr.push(n)}function yh(n,i,o,l){var f=i.interleaved;return f===null?(o.next=o,bu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Di(n,l)}function Di(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Di(n,o)}return f=l.interleaved,f===null?(i.next=i,bu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Di(n,o)}function Ta(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,Xl(n,o)}}function Eh(n,i){var o=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function wa(n,i,o,l){var f=n.updateQueue;ar=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var F=U,Q=F.next;F.next=null,E===null?h=Q:E.next=Q,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=Q:U.next=Q,_e.lastBaseUpdate=F))}if(h!==null){var xe=f.baseState;E=0,_e=Q=F=null,U=h;do{var me=U.lane,Le=U.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var ke=n,ze=U;switch(me=i,Le=o,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){xe=ke.call(Le,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(Le,xe,me):ke,me==null)break e;xe=re({},xe,me);break e;case 2:ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,me=f.effects,me===null?f.effects=[U]:me.push(U))}else Le={eventTime:Le,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(Q=_e=Le,F=xe):_e=_e.next=Le,E|=me;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;me=U,U=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(_e===null&&(F=xe),f.baseState=F,f.firstBaseUpdate=Q,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Or|=E,n.lanes=E,n.memoizedState=xe}}function Mh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(t(191,f));f.call(l)}}}var xo={},pi=rr(xo),yo=rr(xo),So=rr(xo);function Ir(n){if(n===xo)throw Error(t(174));return n}function Du(n,i){switch(Lt(So,i),Lt(yo,n),Lt(pi,xo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Nt(pi),Lt(pi,i)}function ys(){Nt(pi),Nt(yo),Nt(So)}function Th(n){Ir(So.current);var i=Ir(pi.current),o=Ve(i,n.type);i!==o&&(Lt(yo,n),Lt(pi,o))}function Uu(n){yo.current===n&&(Nt(pi),Nt(yo))}var Ft=rr(0);function Aa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nu=[];function Iu(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var Ra=C.ReactCurrentDispatcher,Fu=C.ReactCurrentBatchConfig,Fr=0,Ot=null,Yt=null,Zt=null,Ca=!1,Eo=!1,Mo=0,X_=0;function an(){throw Error(t(321))}function Ou(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function ku(n,i,o,l,f,h){if(Fr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=n===null||n.memoizedState===null?$_:K_,n=o(l,f),Eo){h=0;do{if(Eo=!1,Mo=0,25<=h)throw Error(t(301));h+=1,Zt=Yt=null,i.updateQueue=null,Ra.current=Z_,n=o(l,f)}while(Eo)}if(Ra.current=La,i=Yt!==null&&Yt.next!==null,Fr=0,Zt=Yt=Ot=null,Ca=!1,i)throw Error(t(300));return n}function Bu(){var n=Mo!==0;return Mo=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function Hn(){if(Yt===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?Ot.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function To(n,i){return typeof i=="function"?i(n):i}function zu(n){var i=Hn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=Yt,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=E=null,F=null,Q=h;do{var _e=Q.lane;if((Fr&_e)===_e)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:n(l,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(U=F=xe,E=l):F=F.next=xe,Ot.lanes|=_e,Or|=_e}Q=Q.next}while(Q!==null&&Q!==h);F===null?E=l:F.next=U,Qn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,o.lastRenderedState=l}if(n=o.interleaved,n!==null){f=n;do h=f.lane,Ot.lanes|=h,Or|=h,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vu(n){var i=Hn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=n(h,E.action),E=E.next;while(E!==f);Qn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function wh(){}function Ah(n,i){var o=Ot,l=Hn(),f=i(),h=!Qn(l.memoizedState,f);if(h&&(l.memoizedState=f,Mn=!0),l=l.queue,Hu(Ph.bind(null,o,l,n),[n]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,wo(9,Ch.bind(null,o,l,f,i),void 0,null),Qt===null)throw Error(t(349));(Fr&30)!==0||Rh(o,i,f)}return f}function Rh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ch(n,i,o,l){i.value=o,i.getSnapshot=l,bh(i)&&Lh(n)}function Ph(n,i,o){return o(function(){bh(i)&&Lh(n)})}function bh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function Lh(n){var i=Di(n,1);i!==null&&ii(i,n,1,-1)}function Dh(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},i.queue=n,n=n.dispatch=j_.bind(null,Ot,n),[i.memoizedState,n]}function wo(n,i,o,l){return n={tag:n,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(l=o.next,o.next=n,n.next=l,i.lastEffect=n)),n}function Uh(){return Hn().memoizedState}function Pa(n,i,o,l){var f=mi();Ot.flags|=n,f.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function ba(n,i,o,l){var f=Hn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var E=Yt.memoizedState;if(h=E.destroy,l!==null&&Ou(l,E.deps)){f.memoizedState=wo(i,o,h,l);return}}Ot.flags|=n,f.memoizedState=wo(1|i,o,h,l)}function Nh(n,i){return Pa(8390656,8,n,i)}function Hu(n,i){return ba(2048,8,n,i)}function Ih(n,i){return ba(4,2,n,i)}function Fh(n,i){return ba(4,4,n,i)}function Oh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function kh(n,i,o){return o=o!=null?o.concat([n]):null,ba(4,4,Oh.bind(null,i,n),o)}function Gu(){}function Bh(n,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(o.memoizedState=[n,i],n)}function zh(n,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(n=n(),o.memoizedState=[n,i],n)}function Vh(n,i,o){return(Fr&21)===0?(n.baseState&&(n.baseState=!1,Mn=!0),n.memoizedState=o):(Qn(o,i)||(o=mn(),Ot.lanes|=o,Or|=o,n.baseState=!0),i)}function q_(n,i){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var l=Fu.transition;Fu.transition={};try{n(!1),i()}finally{wt=o,Fu.transition=l}}function Hh(){return Hn().memoizedState}function Y_(n,i,o){var l=dr(n);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Gh(n))Wh(i,o);else if(o=yh(n,i,o,l),o!==null){var f=_n();ii(o,n,l,f),Xh(o,i,l)}}function j_(n,i,o){var l=dr(n),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gh(n))Wh(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(f.hasEagerState=!0,f.eagerState=U,Qn(U,E)){var F=i.interleaved;F===null?(f.next=f,bu(i)):(f.next=F.next,F.next=f),i.interleaved=f;return}}catch{}finally{}o=yh(n,i,f,l),o!==null&&(f=_n(),ii(o,n,l,f),Xh(o,i,l))}}function Gh(n){var i=n.alternate;return n===Ot||i!==null&&i===Ot}function Wh(n,i){Eo=Ca=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Xh(n,i,o){if((o&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,Xl(n,o)}}var La={readContext:Vn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},$_={readContext:Vn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Vn,useEffect:Nh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Pa(4194308,4,Oh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Pa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Pa(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=Y_.bind(null,Ot,n),[l.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:Dh,useDebugValue:Gu,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=Dh(!1),i=n[0];return n=q_.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var l=Ot,f=mi();if(It){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Qt===null)throw Error(t(349));(Fr&30)!==0||Rh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Nh(Ph.bind(null,l,h,n),[n]),l.flags|=2048,wo(9,Ch.bind(null,l,h,o,i),void 0,null),o},useId:function(){var n=mi(),i=Qt.identifierPrefix;if(It){var o=Li,l=bi;o=(l&~(1<<32-rt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=X_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},K_={readContext:Vn,useCallback:Bh,useContext:Vn,useEffect:Hu,useImperativeHandle:kh,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:zh,useReducer:zu,useRef:Uh,useState:function(){return zu(To)},useDebugValue:Gu,useDeferredValue:function(n){var i=Hn();return Vh(i,Yt.memoizedState,n)},useTransition:function(){var n=zu(To)[0],i=Hn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1},Z_={readContext:Vn,useCallback:Bh,useContext:Vn,useEffect:Hu,useImperativeHandle:kh,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:zh,useReducer:Vu,useRef:Uh,useState:function(){return Vu(To)},useDebugValue:Gu,useDeferredValue:function(n){var i=Hn();return Yt===null?i.memoizedState=n:Vh(i,Yt.memoizedState,n)},useTransition:function(){var n=Vu(To)[0],i=Hn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Wu(n,i,o,l){i=n.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Da={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var l=_n(),f=dr(n),h=Ui(l,f);h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,f),i!==null&&(ii(i,n,f,l),Ta(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var l=_n(),f=dr(n),h=Ui(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,f),i!==null&&(ii(i,n,f,l),Ta(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=_n(),l=dr(n),f=Ui(o,l);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,l),i!==null&&(ii(i,n,l,o),Ta(i,n,l))}};function qh(n,i,o,l,f,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(f,h):!0}function Yh(n,i,o){var l=!1,f=sr,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(f=En(i)?Lr:on.current,l=i.contextTypes,h=(l=l!=null)?hs(n,f):sr),i=new i(o,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=h),i}function jh(n,i,o,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==n&&Da.enqueueReplaceState(i,i.state,null)}function Xu(n,i,o,l){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Lu(n);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Vn(h):(h=En(i)?Lr:on.current,f.context=hs(n,h)),f.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wu(n,i,h,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Da.enqueueReplaceState(f,f.state,null),wa(n,o,f,l),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:f,digest:null}}function qu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Yu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function $h(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,lc=l),Yu(n,i)},o}function Kh(n,i,o){o=Ui(-1,o),o.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Yu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yu(n,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Zh(n,i,o){var l=n.pingCache;if(l===null){l=n.pingCache=new Q_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),n=dv.bind(null,n,i,o),i.then(n,n))}function Qh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Jh(n,i,o,l,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var J_=C.ReactCurrentOwner,Mn=!1;function gn(n,i,o,l){i.child=n===null?xh(i,null,o,l):_s(i,n.child,o,l)}function ep(n,i,o,l,f){o=o.render;var h=i.ref;return xs(i,f),l=ku(n,i,o,l,h,f),o=Bu(),n!==null&&!Mn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ni(n,i,f)):(It&&o&&Su(i),i.flags|=1,gn(n,i,l,f),i.child)}function tp(n,i,o,l,f){if(n===null){var h=o.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,np(n,i,h,l,f)):(n=Xa(o.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(E,l)&&n.ref===i.ref)return Ni(n,i,f)}return i.flags|=1,n=pr(h,l),n.ref=i.ref,n.return=i,i.child=n}function np(n,i,o,l,f){if(n!==null){var h=n.memoizedProps;if(co(h,l)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,Ni(n,i,f)}return ju(n,i,o,l,f)}function ip(n,i,o){var l=i.pendingProps,f=l.children,h=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,Nn),Nn|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,Nn),Nn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(Ms,Nn),Nn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(Ms,Nn),Nn|=l;return gn(n,i,f,o),i.child}function rp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ju(n,i,o,l,f){var h=En(o)?Lr:on.current;return h=hs(i,h),xs(i,f),o=ku(n,i,o,l,h,f),l=Bu(),n!==null&&!Mn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ni(n,i,f)):(It&&l&&Su(i),i.flags|=1,gn(n,i,o,f),i.child)}function sp(n,i,o,l,f){if(En(o)){var h=!0;ga(i)}else h=!1;if(xs(i,f),i.stateNode===null)Na(n,i),Yh(i,o,l),Xu(i,o,l,f),l=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var F=E.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Vn(Q):(Q=En(o)?Lr:on.current,Q=hs(i,Q));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||F!==Q)&&jh(i,E,l,Q),ar=!1;var me=i.memoizedState;E.state=me,wa(i,l,E,f),F=i.memoizedState,U!==l||me!==F||Sn.current||ar?(typeof _e=="function"&&(Wu(i,o,_e,l),F=i.memoizedState),(U=ar||qh(i,o,U,l,me,F,Q))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=Q,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Sh(n,i),U=i.memoizedProps,Q=i.type===i.elementType?U:ei(i.type,U),E.props=Q,xe=i.pendingProps,me=E.context,F=o.contextType,typeof F=="object"&&F!==null?F=Vn(F):(F=En(o)?Lr:on.current,F=hs(i,F));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==xe||me!==F)&&jh(i,E,l,F),ar=!1,me=i.memoizedState,E.state=me,wa(i,l,E,f);var ke=i.memoizedState;U!==xe||me!==ke||Sn.current||ar?(typeof Le=="function"&&(Wu(i,o,Le,l),ke=i.memoizedState),(Q=ar||qh(i,o,Q,l,me,ke,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ke,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ke,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),E.props=l,E.state=ke,E.context=F,l=Q):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),l=!1)}return $u(n,i,o,l,h,f)}function $u(n,i,o,l,f,h){rp(n,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&ch(i,o,!1),Ni(n,i,h);l=i.stateNode,J_.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,h),i.child=_s(i,null,U,h)):gn(n,i,U,h),i.memoizedState=l.state,f&&ch(i,o,!0),i.child}function op(n){var i=n.stateNode;i.pendingContext?lh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(n,i.context,!1),Du(n,i.containerInfo)}function ap(n,i,o,l,f){return gs(),wu(f),i.flags|=256,gn(n,i,o,l),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(n){return{baseLanes:n,cachePool:null,transitions:null}}function lp(n,i,o){var l=i.pendingProps,f=Ft.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(Ft,f&1),n===null)return Tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,n=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=qa(E,l,0,null),n=Vr(n,l,o,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Zu(o),i.memoizedState=Ku,n):Qu(i,E));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return ev(n,i,E,l,U,f,o);if(h){h=l.fallback,E=i.mode,f=n.child,U=f.sibling;var F={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=pr(f,F),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=pr(U,h):(h=Vr(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=n.child.memoizedState,E=E===null?Zu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~o,i.memoizedState=Ku,l}return h=n.child,n=h.sibling,l=pr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=l,i.memoizedState=null,l}function Qu(n,i){return i=qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ua(n,i,o,l){return l!==null&&wu(l),_s(i,n.child,null,o),n=Qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ev(n,i,o,l,f,h,E){if(o)return i.flags&256?(i.flags&=-257,l=qu(Error(t(422))),Ua(n,i,E,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=qa({mode:"visible",children:l.children},f,0,null),h=Vr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=Zu(E),i.memoizedState=Ku,h);if((i.mode&1)===0)return Ua(n,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(t(419)),l=qu(h,l,void 0),Ua(n,i,E,l)}if(U=(E&n.childLanes)!==0,Mn||U){if(l=Qt,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Di(n,f),ii(l,n,f,-1))}return pc(),l=qu(Error(t(421))),Ua(n,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=hv.bind(null,n),f._reactRetry=i,null):(n=h.treeContext,Un=ir(f.nextSibling),Dn=i,It=!0,Jn=null,n!==null&&(Bn[zn++]=bi,Bn[zn++]=Li,Bn[zn++]=Dr,bi=n.id,Li=n.overflow,Dr=i),i=Qu(i,l.children),i.flags|=4096,i)}function up(n,i,o){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Pu(n.return,i,o)}function Ju(n,i,o,l,f){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function cp(n,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(gn(n,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&up(n,o,i);else if(n.tag===19)up(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Lt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Aa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ju(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Aa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Ju(i,!0,o,null,h);break;case"together":Ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function tv(n,i,o){switch(i.tag){case 3:op(i),gs();break;case 5:Th(i);break;case 1:En(i.type)&&ga(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Lt(Ea,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?lp(n,i,o):(Lt(Ft,Ft.current&1),n=Ni(n,i,o),n!==null?n.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(n.flags&128)!==0){if(l)return cp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,ip(n,i,o)}return Ni(n,i,o)}var fp,ec,dp,hp;fp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ec=function(){},dp=function(n,i,o,l){var f=n.memoizedProps;if(f!==l){n=i.stateNode,Ir(pi.current);var h=null;switch(o){case"input":f=X(n,f),l=X(n,l),h=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":f=M(n,f),l=M(n,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ha)}ut(o,l);var E;o=null;for(Q in f)if(!l.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var U=f[Q];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var F=l[Q];if(U=f!=null?f[Q]:void 0,l.hasOwnProperty(Q)&&F!==U&&(F!=null||U!=null))if(Q==="style")if(U){for(E in U)!U.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in F)F.hasOwnProperty(E)&&U[E]!==F[E]&&(o||(o={}),o[E]=F[E])}else o||(h||(h=[]),h.push(Q,o)),o=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,U=U?U.__html:void 0,F!=null&&U!==F&&(h=h||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&Ut("scroll",n),h||U===F||(h=[])):(h=h||[]).push(Q,F))}o&&(h=h||[]).push("style",o);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},hp=function(n,i,o,l){o!==l&&(i.flags|=4)};function Ao(n,i){if(!It)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,l=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=o,i}function nv(n,i,o){var l=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return En(i.type)&&ma(),ln(i),null;case 3:return l=i.stateNode,ys(),Nt(Sn),Nt(on),Iu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(ya(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(fc(Jn),Jn=null))),ec(n,i),ln(i),null;case 5:Uu(i);var f=Ir(So.current);if(o=i.type,n!==null&&i.stateNode!=null)dp(n,i,o,l,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return ln(i),null}if(n=Ir(pi.current),ya(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[go]=h,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(f=0;f<ho.length;f++)Ut(ho[f],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":hn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":$(l,h),Ut("invalid",l)}ut(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&da(l.textContent,U,n),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&da(l.textContent,U,n),f=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Rt(l),Ye(l,h,!0);break;case"textarea":Rt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ha)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=E.createElement(o,{is:l.is}):(n=E.createElement(o),o==="select"&&(E=n,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):n=E.createElementNS(n,o),n[hi]=i,n[go]=l,fp(n,i,!1,!1),i.stateNode=n;e:{switch(E=nt(o,l),o){case"dialog":Ut("cancel",n),Ut("close",n),f=l;break;case"iframe":case"object":case"embed":Ut("load",n),f=l;break;case"video":case"audio":for(f=0;f<ho.length;f++)Ut(ho[f],n);f=l;break;case"source":Ut("error",n),f=l;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),f=l;break;case"details":Ut("toggle",n),f=l;break;case"input":hn(n,l),f=X(n,l),Ut("invalid",n);break;case"option":f=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),Ut("invalid",n);break;case"textarea":$(n,l),f=M(n,l),Ut("invalid",n);break;default:f=l}ut(o,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var F=U[h];h==="style"?Qe(n,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ne(n,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&at(n,F):typeof F=="number"&&at(n,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",n):F!=null&&L(n,h,F,E))}switch(o){case"input":Rt(n),Ye(n,l,!1);break;case"textarea":Rt(n),ge(n);break;case"option":l.value!=null&&n.setAttribute("value",""+we(l.value));break;case"select":n.multiple=!!l.multiple,h=l.value,h!=null?b(n,!!l.multiple,h,!1):l.defaultValue!=null&&b(n,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(n&&i.stateNode!=null)hp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(So.current),Ir(pi.current),ya(i)){if(l=i.stateNode,o=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==o)&&(n=Dn,n!==null))switch(n.tag){case 3:da(l.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,o,(n.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return ln(i),null;case 13:if(Nt(Ft),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),gs(),i.flags|=98560,h=!1;else if(h=ya(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[hi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else Jn!==null&&(fc(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ft.current&1)!==0?jt===0&&(jt=3):pc())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ys(),ec(n,i),n===null&&po(i.stateNode.containerInfo),ln(i),null;case 10:return Cu(i.type._context),ln(i),null;case 17:return En(i.type)&&ma(),ln(i),null;case 19:if(Nt(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ao(h,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Aa(n),E!==null){for(i.flags|=128,Ao(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,n=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}n=n.sibling}h.tail!==null&&Se()>Ts&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304)}else{if(!l)if(n=Aa(E),n!==null){if(i.flags|=128,l=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!It)return ln(i),null}else 2*Se()-h.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Se(),i.sibling=null,o=Ft.current,Lt(Ft,l?o&1|2:o&1),i):(ln(i),null);case 22:case 23:return hc(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function iv(n,i){switch(Eu(i),i.tag){case 1:return En(i.type)&&ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Nt(Sn),Nt(on),Iu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uu(i),null;case 13:if(Nt(Ft),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(Ft),null;case 4:return ys(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Ia=!1,un=!1,rv=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Es(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(n,i,l)}else o.current=null}function tc(n,i,o){try{o()}catch(l){kt(n,i,l)}}var pp=!1;function sv(n,i){if(hu=ta,n=qd(),su(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,F=-1,Q=0,_e=0,xe=n,me=null;t:for(;;){for(var Le;xe!==o||f!==0&&xe.nodeType!==3||(U=E+f),xe!==h||l!==0&&xe.nodeType!==3||(F=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===n)break t;if(me===o&&++Q===f&&(U=E),me===h&&++_e===l&&(F=E),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}o=U===-1||F===-1?null:{start:U,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(pu={focusedElem:n,selectionRange:o},ta=!1,Ie=i;Ie!==null;)if(i=Ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ie=n;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Vt=ke.memoizedState,q=i.stateNode,z=q.getSnapshotBeforeUpdate(i.elementType===i.type?ze:ei(i.type,ze),Vt);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){kt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Ie=n;break}Ie=i.return}return ke=pp,pp=!1,ke}function Ro(n,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&n)===n){var h=f.destroy;f.destroy=void 0,h!==void 0&&tc(i,o,h)}f=f.next}while(f!==l)}}function Fa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function nc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function mp(n){var i=n.alternate;i!==null&&(n.alternate=null,mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[go],delete i[vu],delete i[V_],delete i[H_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gp(n){return n.tag===5||n.tag===3||n.tag===4}function _p(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ic(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(n=n.child,n!==null))for(ic(n,i,o),n=n.sibling;n!==null;)ic(n,i,o),n=n.sibling}function rc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(rc(n,i,o),n=n.sibling;n!==null;)rc(n,i,o),n=n.sibling}var tn=null,ti=!1;function ur(n,i,o){for(o=o.child;o!==null;)vp(n,i,o),o=o.sibling}function vp(n,i,o){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:un||Es(o,i);case 6:var l=tn,f=ti;tn=null,ur(n,i,o),tn=l,ti=f,tn!==null&&(ti?(n=tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ti?(n=tn,o=o.stateNode,n.nodeType===8?_u(n.parentNode,o):n.nodeType===1&&_u(n,o),ro(n)):_u(tn,o.stateNode));break;case 4:l=tn,f=ti,tn=o.stateNode.containerInfo,ti=!0,ur(n,i,o),tn=l,ti=f;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&tc(o,i,E),f=f.next}while(f!==l)}ur(n,i,o);break;case 1:if(!un&&(Es(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){kt(o,i,U)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,ur(n,i,o),un=l):ur(n,i,o);break;default:ur(n,i,o)}}function xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new rv),i.forEach(function(l){var f=pv.bind(null,n,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ni(n,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:tn=U.stateNode,ti=!1;break e;case 3:tn=U.stateNode.containerInfo,ti=!0;break e;case 4:tn=U.stateNode.containerInfo,ti=!0;break e}U=U.return}if(tn===null)throw Error(t(160));vp(h,E,f),tn=null,ti=!1;var F=f.alternate;F!==null&&(F.return=null),f.return=null}catch(Q){kt(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,n),i=i.sibling}function yp(n,i){var o=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),gi(n),l&4){try{Ro(3,n,n.return),Fa(3,n)}catch(ze){kt(n,n.return,ze)}try{Ro(5,n,n.return)}catch(ze){kt(n,n.return,ze)}}break;case 1:ni(i,n),gi(n),l&512&&o!==null&&Es(o,o.return);break;case 5:if(ni(i,n),gi(n),l&512&&o!==null&&Es(o,o.return),n.flags&32){var f=n.stateNode;try{at(f,"")}catch(ze){kt(n,n.return,ze)}}if(l&4&&(f=n.stateNode,f!=null)){var h=n.memoizedProps,E=o!==null?o.memoizedProps:h,U=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ft(f,h),nt(U,E);var Q=nt(U,h);for(E=0;E<F.length;E+=2){var _e=F[E],xe=F[E+1];_e==="style"?Qe(f,xe):_e==="dangerouslySetInnerHTML"?Ne(f,xe):_e==="children"?at(f,xe):L(f,_e,xe,Q)}switch(U){case"input":lt(f,h);break;case"textarea":pe(f,h);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(f,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(f,!!h.multiple,h.defaultValue,!0):b(f,!!h.multiple,h.multiple?[]:"",!1))}f[go]=h}catch(ze){kt(n,n.return,ze)}}break;case 6:if(ni(i,n),gi(n),l&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,h=n.memoizedProps;try{f.nodeValue=h}catch(ze){kt(n,n.return,ze)}}break;case 3:if(ni(i,n),gi(n),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(ze){kt(n,n.return,ze)}break;case 4:ni(i,n),gi(n);break;case 13:ni(i,n),gi(n),f=n.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(ac=Se())),l&4&&xp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(un=(Q=un)||_e,ni(i,n),un=Q):ni(i,n),gi(n),l&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!_e&&(n.mode&1)!==0)for(Ie=n,_e=n.child;_e!==null;){for(xe=Ie=_e;Ie!==null;){switch(me=Ie,Le=me.child,me.tag){case 0:case 11:case 14:case 15:Ro(4,me,me.return);break;case 1:Es(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){kt(l,o,ze)}}break;case 5:Es(me,me.return);break;case 22:if(me.memoizedState!==null){Mp(xe);continue}}Le!==null?(Le.return=me,Ie=Le):Mp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{f=xe.stateNode,Q?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=xe.stateNode,F=xe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,U.style.display=Ze("display",E))}catch(ze){kt(n,n.return,ze)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(ze){kt(n,n.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,n),gi(n),l&4&&xp(n);break;case 21:break;default:ni(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(gp(o)){var l=o;break e}o=o.return}throw Error(t(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(at(f,""),l.flags&=-33);var h=_p(n);rc(n,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,U=_p(n);ic(n,U,E);break;default:throw Error(t(161))}}catch(F){kt(n,n.return,F)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ov(n,i,o){Ie=n,Sp(n)}function Sp(n,i,o){for(var l=(n.mode&1)!==0;Ie!==null;){var f=Ie,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ia;if(!E){var U=f.alternate,F=U!==null&&U.memoizedState!==null||un;U=Ia;var Q=un;if(Ia=E,(un=F)&&!Q)for(Ie=f;Ie!==null;)E=Ie,F=E.child,E.tag===22&&E.memoizedState!==null?Tp(f):F!==null?(F.return=E,Ie=F):Tp(f);for(;h!==null;)Ie=h,Sp(h),h=h.sibling;Ie=f,Ia=U,un=Q}Ep(n)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ie=h):Ep(n)}}function Ep(n){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Fa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Mh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ro(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}un||i.flags&512&&nc(i)}catch(me){kt(i,i.return,me)}}if(i===n){Ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Mp(n){for(;Ie!==null;){var i=Ie;if(i===n){Ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Tp(n){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(F){kt(i,f,F)}}var h=i.return;try{nc(i)}catch(F){kt(i,h,F)}break;case 5:var E=i.return;try{nc(i)}catch(F){kt(i,E,F)}}}catch(F){kt(i,i.return,F)}if(i===n){Ie=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ie=U;break}Ie=i.return}}var av=Math.ceil,Oa=C.ReactCurrentDispatcher,sc=C.ReactCurrentOwner,Gn=C.ReactCurrentBatchConfig,_t=0,Qt=null,Ht=null,nn=0,Nn=0,Ms=rr(0),jt=0,Co=null,Or=0,ka=0,oc=0,Po=null,Tn=null,ac=0,Ts=1/0,Ii=null,Ba=!1,lc=null,cr=null,za=!1,fr=null,Va=0,bo=0,uc=null,Ha=-1,Ga=0;function _n(){return(_t&6)!==0?Se():Ha!==-1?Ha:Ha=Se()}function dr(n){return(n.mode&1)===0?1:(_t&2)!==0&&nn!==0?nn&-nn:W_.transition!==null?(Ga===0&&(Ga=mn()),Ga):(n=wt,n!==0||(n=window.event,n=n===void 0?16:Ad(n.type)),n)}function ii(n,i,o,l){if(50<bo)throw bo=0,uc=null,Error(t(185));yn(n,o,l),((_t&2)===0||n!==Qt)&&(n===Qt&&((_t&2)===0&&(ka|=o),jt===4&&hr(n,nn)),wn(n,l),o===1&&_t===0&&(i.mode&1)===0&&(Ts=Se()+500,_a&&or()))}function wn(n,i){var o=n.callbackNode;On(n,i);var l=di(n,n===Qt?nn:0);if(l===0)o!==null&&ee(o),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(o!=null&&ee(o),i===1)n.tag===0?G_(Ap.bind(null,n)):fh(Ap.bind(null,n)),B_(function(){(_t&6)===0&&or()}),o=null;else{switch(vd(l)){case 1:o=Be;break;case 4:o=Je;break;case 16:o=tt;break;case 536870912:o=pt;break;default:o=tt}o=Np(o,wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function wp(n,i){if(Ha=-1,Ga=0,(_t&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var l=di(n,n===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Wa(n,l);else{i=l;var f=_t;_t|=2;var h=Cp();(Qt!==n||nn!==i)&&(Ii=null,Ts=Se()+500,Br(n,i));do try{cv();break}catch(U){Rp(n,U)}while(!0);Ru(),Oa.current=h,_t=f,Ht!==null?i=0:(Qt=null,nn=0,i=jt)}if(i!==0){if(i===2&&(f=Ri(n),f!==0&&(l=f,i=cc(n,f))),i===1)throw o=Co,Br(n,0),hr(n,l),wn(n,Se()),o;if(i===6)hr(n,l);else{if(f=n.current.alternate,(l&30)===0&&!lv(f)&&(i=Wa(n,l),i===2&&(h=Ri(n),h!==0&&(l=h,i=cc(n,h))),i===1))throw o=Co,Br(n,0),hr(n,l),wn(n,Se()),o;switch(n.finishedWork=f,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:zr(n,Tn,Ii);break;case 3:if(hr(n,l),(l&130023424)===l&&(i=ac+500-Se(),10<i)){if(di(n,0)!==0)break;if(f=n.suspendedLanes,(f&l)!==l){_n(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=gu(zr.bind(null,n,Tn,Ii),i);break}zr(n,Tn,Ii);break;case 4:if(hr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,f=-1;0<l;){var E=31-rt(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Se()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*av(l/1960))-l,10<l){n.timeoutHandle=gu(zr.bind(null,n,Tn,Ii),l);break}zr(n,Tn,Ii);break;case 5:zr(n,Tn,Ii);break;default:throw Error(t(329))}}}return wn(n,Se()),n.callbackNode===o?wp.bind(null,n):null}function cc(n,i){var o=Po;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=Wa(n,i),n!==2&&(i=Tn,Tn=o,i!==null&&fc(i)),n}function fc(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function lv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Qn(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~oc,i&=~ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-rt(i),l=1<<o;n[o]=-1,i&=~l}}function Ap(n){if((_t&6)!==0)throw Error(t(327));ws();var i=di(n,0);if((i&1)===0)return wn(n,Se()),null;var o=Wa(n,i);if(n.tag!==0&&o===2){var l=Ri(n);l!==0&&(i=l,o=cc(n,l))}if(o===1)throw o=Co,Br(n,0),hr(n,i),wn(n,Se()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,Tn,Ii),wn(n,Se()),null}function dc(n,i){var o=_t;_t|=1;try{return n(i)}finally{_t=o,_t===0&&(Ts=Se()+500,_a&&or())}}function kr(n){fr!==null&&fr.tag===0&&(_t&6)===0&&ws();var i=_t;_t|=1;var o=Gn.transition,l=wt;try{if(Gn.transition=null,wt=1,n)return n()}finally{wt=l,Gn.transition=o,_t=i,(_t&6)===0&&or()}}function hc(){Nn=Ms.current,Nt(Ms)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,k_(o)),Ht!==null)for(o=Ht.return;o!==null;){var l=o;switch(Eu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:ys(),Nt(Sn),Nt(on),Iu();break;case 5:Uu(l);break;case 4:ys();break;case 13:Nt(Ft);break;case 19:Nt(Ft);break;case 10:Cu(l.type._context);break;case 22:case 23:hc()}o=o.return}if(Qt=n,Ht=n=pr(n.current,null),nn=Nn=i,jt=0,Co=null,oc=ka=Or=0,Tn=Po=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}o.pending=l}Nr=null}return n}function Rp(n,i){do{var o=Ht;try{if(Ru(),Ra.current=La,Ca){for(var l=Ot.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ca=!1}if(Fr=0,Zt=Yt=Ot=null,Eo=!1,Mo=0,sc.current=null,o===null||o.return===null){jt=1,Co=i,Ht=null;break}e:{var h=n,E=o.return,U=o,F=i;if(i=nn,U.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,_e=U,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Qh(E);if(Le!==null){Le.flags&=-257,Jh(Le,E,U,h,i),Le.mode&1&&Zh(h,Q,i),i=Le,F=Q;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(F),i.updateQueue=ze}else ke.add(F);break e}else{if((i&1)===0){Zh(h,Q,i),pc();break e}F=Error(t(426))}}else if(It&&U.mode&1){var Vt=Qh(E);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Jh(Vt,E,U,h,i),wu(Ss(F,U));break e}}h=F=Ss(F,U),jt!==4&&(jt=2),Po===null?Po=[h]:Po.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=$h(h,F,i);Eh(h,q);break e;case 1:U=F;var z=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(cr===null||!cr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Kh(h,U,i);Eh(h,Me);break e}}h=h.return}while(h!==null)}bp(o)}catch(We){i=We,Ht===o&&o!==null&&(Ht=o=o.return);continue}break}while(!0)}function Cp(){var n=Oa.current;return Oa.current=La,n===null?La:n}function pc(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Or&268435455)===0&&(ka&268435455)===0||hr(Qt,nn)}function Wa(n,i){var o=_t;_t|=2;var l=Cp();(Qt!==n||nn!==i)&&(Ii=null,Br(n,i));do try{uv();break}catch(f){Rp(n,f)}while(!0);if(Ru(),_t=o,Oa.current=l,Ht!==null)throw Error(t(261));return Qt=null,nn=0,jt}function uv(){for(;Ht!==null;)Pp(Ht)}function cv(){for(;Ht!==null&&!W();)Pp(Ht)}function Pp(n){var i=Up(n.alternate,n,Nn);n.memoizedProps=n.pendingProps,i===null?bp(n):Ht=i,sc.current=null}function bp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=nv(o,i,Nn),o!==null){Ht=o;return}}else{if(o=iv(o,i),o!==null){o.flags&=32767,Ht=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=n}while(i!==null);jt===0&&(jt=5)}function zr(n,i,o){var l=wt,f=Gn.transition;try{Gn.transition=null,wt=1,fv(n,i,o,l)}finally{Gn.transition=f,wt=l}return null}function fv(n,i,o,l){do ws();while(fr!==null);if((_t&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(Qo(n,h),n===Qt&&(Ht=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Np(tt,function(){return ws(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Gn.transition,Gn.transition=null;var E=wt;wt=1;var U=_t;_t|=4,sc.current=null,sv(n,o),yp(o,n),L_(pu),ta=!!hu,pu=hu=null,n.current=o,ov(o),Te(),_t=U,wt=E,Gn.transition=h}else n.current=o;if(za&&(za=!1,fr=n,Va=f),h=n.pendingLanes,h===0&&(cr=null),rn(o.stateNode),wn(n,Se()),i!==null)for(l=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,n=lc,lc=null,n;return(Va&1)!==0&&n.tag!==0&&ws(),h=n.pendingLanes,(h&1)!==0?n===uc?bo++:(bo=0,uc=n):bo=0,or(),null}function ws(){if(fr!==null){var n=vd(Va),i=Gn.transition,o=wt;try{if(Gn.transition=null,wt=16>n?16:n,fr===null)var l=!1;else{if(n=fr,fr=null,Va=0,(_t&6)!==0)throw Error(t(331));var f=_t;for(_t|=4,Ie=n.current;Ie!==null;){var h=Ie,E=h.child;if((Ie.flags&16)!==0){var U=h.deletions;if(U!==null){for(var F=0;F<U.length;F++){var Q=U[F];for(Ie=Q;Ie!==null;){var _e=Ie;switch(_e.tag){case 0:case 11:case 15:Ro(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Ie=xe;else for(;Ie!==null;){_e=Ie;var me=_e.sibling,Le=_e.return;if(mp(_e),_e===Q){Ie=null;break}if(me!==null){me.return=Le,Ie=me;break}Ie=Le}}}var ke=h.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Vt=ze.sibling;ze.sibling=null,ze=Vt}while(ze!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ie=E;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Ie=q;break e}Ie=h.return}}var z=n.current;for(Ie=z;Ie!==null;){E=Ie;var j=E.child;if((E.subtreeFlags&2064)!==0&&j!==null)j.return=E,Ie=j;else e:for(E=z;Ie!==null;){if(U=Ie,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Fa(9,U)}}catch(We){kt(U,U.return,We)}if(U===E){Ie=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,Ie=Me;break e}Ie=U.return}}if(_t=f,or(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Et,n)}catch{}l=!0}return l}finally{wt=o,Gn.transition=i}}return!1}function Lp(n,i,o){i=Ss(o,i),i=$h(n,i,1),n=lr(n,i,1),i=_n(),n!==null&&(yn(n,1,i),wn(n,i))}function kt(n,i,o){if(n.tag===3)Lp(n,n,o);else for(;i!==null;){if(i.tag===3){Lp(i,n,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){n=Ss(o,n),n=Kh(i,n,1),i=lr(i,n,1),n=_n(),i!==null&&(yn(i,1,n),wn(i,n));break}}i=i.return}}function dv(n,i,o){var l=n.pingCache;l!==null&&l.delete(i),i=_n(),n.pingedLanes|=n.suspendedLanes&o,Qt===n&&(nn&o)===o&&(jt===4||jt===3&&(nn&130023424)===nn&&500>Se()-ac?Br(n,0):oc|=o),wn(n,i)}function Dp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var o=_n();n=Di(n,i),n!==null&&(yn(n,i,o),wn(n,o))}function hv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Dp(n,o)}function pv(n,i){var o=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Dp(n,o)}var Up;Up=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Sn.current)Mn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,tv(n,i,o);Mn=(n.flags&131072)!==0}else Mn=!1,It&&(i.flags&1048576)!==0&&dh(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(n,i),n=i.pendingProps;var f=hs(i,on.current);xs(i,o),f=ku(null,i,l,n,f,o);var h=Bu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,En(l)?(h=!0,ga(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lu(i),f.updater=Da,i.stateNode=f,f._reactInternals=i,Xu(i,l,n,o),i=$u(null,i,l,!0,h,o)):(i.tag=0,It&&h&&Su(i),gn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(n,i),n=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=gv(l),n=ei(l,n),f){case 0:i=ju(null,i,l,n,o);break e;case 1:i=sp(null,i,l,n,o);break e;case 11:i=ep(null,i,l,n,o);break e;case 14:i=tp(null,i,l,ei(l.type,n),o);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),ju(n,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),sp(n,i,l,f,o);case 3:e:{if(op(i),n===null)throw Error(t(387));l=i.pendingProps,h=i.memoizedState,f=h.element,Sh(n,i),wa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ss(Error(t(423)),i),i=ap(n,i,l,o,f);break e}else if(l!==f){f=Ss(Error(t(424)),i),i=ap(n,i,l,o,f);break e}else for(Un=ir(i.stateNode.containerInfo.firstChild),Dn=i,It=!0,Jn=null,o=xh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),l===f){i=Ni(n,i,o);break e}gn(n,i,l,o)}i=i.child}return i;case 5:return Th(i),n===null&&Tu(i),l=i.type,f=i.pendingProps,h=n!==null?n.memoizedProps:null,E=f.children,mu(l,f)?E=null:h!==null&&mu(l,h)&&(i.flags|=32),rp(n,i),gn(n,i,E,o),i.child;case 6:return n===null&&Tu(i),null;case 13:return lp(n,i,o);case 4:return Du(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=_s(i,null,l,o):gn(n,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),ep(n,i,l,f,o);case 7:return gn(n,i,i.pendingProps,o),i.child;case 8:return gn(n,i,i.pendingProps.children,o),i.child;case 12:return gn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Lt(Ea,l._currentValue),l._currentValue=E,h!==null)if(Qn(h.value,E)){if(h.children===f.children&&!Sn.current){i=Ni(n,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var F=U.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ui(-1,o&-o),F.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),Q.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Pu(h.return,o,i),U.lanes|=o;break}F=F.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Pu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}gn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,xs(i,o),f=Vn(f),l=l(f),i.flags|=1,gn(n,i,l,o),i.child;case 14:return l=i.type,f=ei(l,i.pendingProps),f=ei(l.type,f),tp(n,i,l,f,o);case 15:return np(n,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),Na(n,i),i.tag=1,En(l)?(n=!0,ga(i)):n=!1,xs(i,o),Yh(i,l,f),Xu(i,l,f,o),$u(null,i,l,!0,n,o);case 19:return cp(n,i,o);case 22:return ip(n,i,o)}throw Error(t(156,i.tag))};function Np(n,i){return J(n,i)}function mv(n,i,o,l){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,i,o,l){return new mv(n,i,o,l)}function mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gv(n){if(typeof n=="function")return mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===he)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Wn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Xa(n,i,o,l,f,h){var E=2;if(l=n,typeof n=="function")mc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return Vr(o.children,f,h,i);case V:E=8,f|=8;break;case P:return n=Wn(12,o,i,f|2),n.elementType=P,n.lanes=h,n;case te:return n=Wn(13,o,i,f),n.elementType=te,n.lanes=h,n;case fe:return n=Wn(19,o,i,f),n.elementType=fe,n.lanes=h,n;case le:return qa(o,f,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:E=10;break e;case k:E=9;break e;case se:E=11;break e;case he:E=14;break e;case oe:E=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Wn(E,o,i,f),i.elementType=n,i.type=l,i.lanes=h,i}function Vr(n,i,o,l){return n=Wn(7,n,l,i),n.lanes=o,n}function qa(n,i,o,l){return n=Wn(22,n,l,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function gc(n,i,o){return n=Wn(6,n,null,i),n.lanes=o,n}function _c(n,i,o){return i=Wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function _v(n,i,o,l,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vc(n,i,o,l,f,h,E,U,F){return n=new _v(n,i,o,U,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(h),n}function vv(n,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:n,containerInfo:i,implementation:o}}function Ip(n){if(!n)return sr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(En(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(En(o))return uh(n,o,i)}return i}function Fp(n,i,o,l,f,h,E,U,F){return n=vc(o,l,!0,n,f,h,E,U,F),n.context=Ip(null),o=n.current,l=_n(),f=dr(o),h=Ui(l,f),h.callback=i??null,lr(o,h,f),n.current.lanes=f,yn(n,f,l),wn(n,l),n}function Ya(n,i,o,l){var f=i.current,h=_n(),E=dr(f);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(h,E),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=lr(f,i,E),n!==null&&(ii(n,f,E,h),Ta(n,f,E)),E}function ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Op(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function xc(n,i){Op(n,i),(n=n.alternate)&&Op(n,i)}function xv(){return null}var kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function yc(n){this._internalRoot=n}$a.prototype.render=yc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ya(n,i,null,null)},$a.prototype.unmount=yc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){Ya(null,n,null,null)}),i[Ci]=null}};function $a(n){this._internalRoot=n}$a.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&Td(n)}};function Sc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ka(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function yv(n,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var Q=ja(E);h.call(Q)}}var E=Fp(i,l,n,0,null,!1,!1,"",Bp);return n._reactRootContainer=E,n[Ci]=E.current,po(n.nodeType===8?n.parentNode:n),kr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var Q=ja(F);U.call(Q)}}var F=vc(n,0,!1,null,null,!1,!1,"",Bp);return n._reactRootContainer=F,n[Ci]=F.current,po(n.nodeType===8?n.parentNode:n),kr(function(){Ya(i,F,o,l)}),F}function Za(n,i,o,l,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var U=f;f=function(){var F=ja(E);U.call(F)}}Ya(i,E,n,f)}else E=yv(o,i,n,f,l);return ja(E)}xd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(Xl(i,o|1),wn(i,Se()),(_t&6)===0&&(Ts=Se()+500,or()))}break;case 13:kr(function(){var l=Di(n,1);if(l!==null){var f=_n();ii(l,n,1,f)}}),xc(n,1)}},ql=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var o=_n();ii(i,n,134217728,o)}xc(n,134217728)}},yd=function(n){if(n.tag===13){var i=dr(n),o=Di(n,i);if(o!==null){var l=_n();ii(o,n,i,l)}xc(n,i)}},Sd=function(){return wt},Ed=function(n,i){var o=wt;try{return wt=n,i()}finally{wt=o}},Re=function(n,i,o){switch(i){case"input":if(lt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==n&&l.form===n.form){var f=pa(l);if(!f)throw Error(t(90));dt(l),lt(l,f)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},Dt=dc,Xt=kr;var Sv={usingClientEntryPoint:!1,Events:[_o,fs,pa,Pe,it,dc]},Lo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Et=Qa.inject(Ev),ht=Qa}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv,An.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(t(200));return vv(n,i,null,o)},An.createRoot=function(n,i){if(!Sc(n))throw Error(t(299));var o=!1,l="",f=kp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vc(n,1,!1,null,null,o,!1,l,f),n[Ci]=i.current,po(n.nodeType===8?n.parentNode:n),new yc(i)},An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},An.flushSync=function(n){return kr(n)},An.hydrate=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!0,o)},An.hydrateRoot=function(n,i,o){if(!Sc(n))throw Error(t(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",E=kp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Fp(i,null,n,1,o??null,f,!1,h,E),n[Ci]=i.current,po(n),l)for(n=0;n<l.length;n++)o=l[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new $a(i)},An.render=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!1,o)},An.unmountComponentAtNode=function(n){if(!Ka(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){Za(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},An.unstable_batchedUpdates=dc,An.unstable_renderSubtreeIntoContainer=function(n,i,o,l){if(!Ka(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Za(n,i,o,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Yp;function bv(){if(Yp)return Tc.exports;Yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tc.exports=Pv(),Tc.exports}var jp;function Lv(){if(jp)return Ja;jp=1;var s=bv();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var Dv=Lv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="170",Uv=0,$p=1,Nv=2,eg=1,Iv=2,Vi=3,Ar=0,Pn=1,Hi=2,Mr=0,Vs=1,Kp=2,Zp=3,Qp=4,Fv=5,Kr=100,Ov=101,kv=102,Bv=103,zv=104,Vv=200,Hv=201,Gv=202,Wv=203,lf=204,uf=205,Xv=206,qv=207,Yv=208,jv=209,$v=210,Kv=211,Zv=212,Qv=213,Jv=214,cf=0,ff=1,df=2,Ws=3,hf=4,pf=5,mf=6,gf=7,tg=0,e0=1,t0=2,Tr=0,n0=1,i0=2,r0=3,s0=4,o0=5,a0=6,l0=7,ng=300,Xs=301,qs=302,_f=303,vf=304,Ol=306,xf=1e3,Qr=1001,yf=1002,ci=1003,u0=1004,el=1005,xi=1006,Rc=1007,Jr=1008,qi=1009,ig=1010,rg=1011,Ho=1012,nd=1013,es=1014,Gi=1015,Go=1016,id=1017,rd=1018,Ys=1020,sg=35902,og=1021,ag=1022,ui=1023,lg=1024,ug=1025,Hs=1026,js=1027,cg=1028,sd=1029,fg=1030,od=1031,ad=1033,Tl=33776,wl=33777,Al=33778,Rl=33779,Sf=35840,Ef=35841,Mf=35842,Tf=35843,wf=36196,Af=37492,Rf=37496,Cf=37808,Pf=37809,bf=37810,Lf=37811,Df=37812,Uf=37813,Nf=37814,If=37815,Ff=37816,Of=37817,kf=37818,Bf=37819,zf=37820,Vf=37821,Cl=36492,Hf=36494,Gf=36495,dg=36283,Wf=36284,Xf=36285,qf=36286,c0=3200,f0=3201,d0=0,h0=1,Er="",Yn="srgb",Ks="srgb-linear",kl="linear",Ct="srgb",As=7680,Jp=519,p0=512,m0=513,g0=514,hg=515,_0=516,v0=517,x0=518,y0=519,em=35044,tm="300 es",Wi=2e3,Il=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(t);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,Yf=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Cn(s,e,t){return Math.max(e,Math.min(t,s))}function S0(s,e){return(s%e+e)%e}function Pc(s,e,t){return(1-t)*s+t*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,r,a,u,c,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m)}set(e,t,r,a,u,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=u,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],T=r[8],R=a[0],v=a[3],g=a[6],D=a[1],L=a[4],C=a[7],Y=a[2],O=a[5],I=a[8];return u[0]=c*R+d*D+p*Y,u[3]=c*v+d*L+p*O,u[6]=c*g+d*C+p*I,u[1]=m*R+_*D+y*Y,u[4]=m*v+_*L+y*O,u[7]=m*g+_*C+y*I,u[2]=x*R+S*D+T*Y,u[5]=x*v+S*L+T*O,u[8]=x*g+S*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*c*_-t*d*m-r*u*_+r*d*p+a*u*m-a*c*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*c-d*m,x=d*p-_*u,S=m*u-c*p,T=t*y+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*c)*R,e[3]=x*R,e[4]=(_*t-a*p)*R,e[5]=(a*u-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(c*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new st;function pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E0(){const s=Fl("canvas");return s.style.display="block",s}const nm={};function Bo(s){s in nm||(nm[s]=!0,console.warn(s))}function M0(s,e,t){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}function T0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function w0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?kl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const im=[.64,.33,.3,.6,.15,.06],rm=[.2126,.7152,.0722],sm=[.3127,.329],om=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Ks]:{primaries:im,whitePoint:sm,transfer:kl,toXYZ:om,fromXYZ:am,luminanceCoefficients:rm,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:im,whitePoint:sm,transfer:Ct,toXYZ:om,fromXYZ:am,luminanceCoefficients:rm,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}});let Rs;class A0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Fl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Xi(u[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R0=0;class mg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Lc(a[c].image)):u.push(Lc(a[c]))}else u=Lc(a);r.url=u}return t||(e.images[this.uuid]=r),r}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?A0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class bn extends Zs{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=Qr,a=Qr,u=xi,c=Jr,d=ui,p=qi,m=bn.DEFAULT_ANISOTROPY,_=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Wo(),this.name="",this.source=new mg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=ng;bn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,r=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],T=p[9],R=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-R)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+R)<.1&&Math.abs(T+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,C=(S+1)/2,Y=(g+1)/2,O=(_+x)/4,I=(y+R)/4,V=(T+v)/4;return L>C&&L>Y?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=I/r):C>Y?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=O/a,u=V/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=I/u,a=V/u),this.set(r,a,u,t),this}let D=Math.sqrt((v-T)*(v-T)+(y-R)*(y-R)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(v-T)/D,this.y=(y-R)/D,this.z=(x-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends Zs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends P0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gg extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b0 extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,u,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[c+0],S=u[c+1],T=u[c+2],R=u[c+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=R;return}if(y!==R||p!==x||m!==S||_!==T){let v=1-d;const g=p*x+m*S+_*T+y*R,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const Y=Math.sqrt(L),O=Math.atan2(Y,g*D);v=Math.sin(v*O)/Y,d=Math.sin(d*O)/Y}const C=d*D;if(p=p*v+x*C,m=m*v+S*C,_=_*v+T*C,y=y*v+R*C,v===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=Y,m*=Y,_*=Y,y*=Y}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,a,u,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[c],x=u[c+1],S=u[c+2],T=u[c+3];return e[t]=d*T+_*y+p*S-m*x,e[t+1]=p*T+_*x+m*y-d*S,e[t+2]=m*T+_*S+d*x-p*y,e[t+3]=_*T-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),T=p(u/2);switch(c){case"XYZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"YXZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"ZXY":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"ZYX":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"YZX":this._x=x*_*y+m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y-x*S*T;break;case"XZY":this._x=x*_*y-m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],u=t[8],c=t[1],d=t[5],p=t[9],m=t[2],_=t[6],y=t[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(c-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(c-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,u=e._z,c=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+c*d+a*m-u*p,this._y=a*_+c*p+u*d-r*m,this._z=u*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*u+t*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-t)*_)/m,x=Math.sin(t*_)/m;return this._w=c*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*a,this.y=u[1]*t+u[4]*r+u[7]*a,this.z=u[2]*t+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*t-u*a),y=2*(u*r-c*t);return this.x=t+p*m+c*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a,this.y=u[1]*t+u[5]*r+u[9]*a,this.z=u[2]*t+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,u=e.z,c=t.x,d=t.y,p=t.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new Z,lm=new Xo;class qo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(u,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),nl.subVectors(this.max,No),Cs.subVectors(e.a,No),Ps.subVectors(e.b,No),bs.subVectors(e.c,No),gr.subVectors(Ps,Cs),_r.subVectors(bs,Ps),Hr.subVectors(Cs,bs);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Hr.y,Hr.x,0];return!Uc(t,Cs,Ps,bs,nl)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Cs,Ps,bs,nl))?!1:(il.crossVectors(gr,_r),t=[il.x,il.y,il.z],Uc(t,Cs,Ps,bs,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ri=new Z,tl=new qo,Cs=new Z,Ps=new Z,bs=new Z,gr=new Z,_r=new Z,Hr=new Z,No=new Z,nl=new Z,il=new Z,Gr=new Z;function Uc(s,e,t,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Gr.fromArray(s,u);const d=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),p=e.dot(Gr),m=t.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const L0=new qo,Io=new Z,Nc=new Z;class ld{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):L0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Nc)),this.expandByPoint(Io.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new Z,Ic=new Z,rl=new Z,vr=new Z,Fc=new Z,sl=new Z,Oc=new Z;class D0{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ic.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Ic);const u=e.distanceTo(t)*.5,c=-this.direction.dot(rl),d=vr.dot(this.direction),p=-vr.dot(rl),m=vr.lengthSq(),_=Math.abs(1-c*c);let y,x,S,T;if(_>0)if(y=c*p-d,x=c*d-p,T=u*_,y>=0)if(x>=-T)if(x<=T){const R=1/_;y*=R,x*=R,S=y*(y+c*x+2*d)+x*(c*y+x+2*p)+m}else x=u,y=Math.max(0,-(c*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(c*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-T?(y=Math.max(0,-(-c*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=T?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(c*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=c>0?-u:u,y=Math.max(0,-(c*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Ic).addScaledVector(rl,x),S}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),a=Oi.dot(Oi)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,u,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,r,a,u){Fc.subVectors(t,e),sl.subVectors(r,e),Oc.crossVectors(Fc,sl);let c=this.direction.dot(Oc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;vr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(vr,sl));if(p<0)return null;const m=d*this.direction.dot(Fc.cross(vr));if(m<0||p+m>c)return null;const _=-d*vr.dot(Oc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,a,u,c,d,p,m,_,y,x,S,T,R,v){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m,_,y,x,S,T,R,v)}set(e,t,r,a,u,c,d,p,m,_,y,x,S,T,R,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=T,g[11]=R,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),u=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=c*_,S=c*y,T=d*_,R=d*y;t[0]=p*_,t[4]=-p*y,t[8]=m,t[1]=S+T*m,t[5]=x-R*m,t[9]=-d*p,t[2]=R-x*m,t[6]=T+S*m,t[10]=c*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,T=m*_,R=m*y;t[0]=x+R*d,t[4]=T*d-S,t[8]=c*m,t[1]=c*y,t[5]=c*_,t[9]=-d,t[2]=S*d-T,t[6]=R+x*d,t[10]=c*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,T=m*_,R=m*y;t[0]=x-R*d,t[4]=-c*y,t[8]=T+S*d,t[1]=S+T*d,t[5]=c*_,t[9]=R-x*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const x=c*_,S=c*y,T=d*_,R=d*y;t[0]=p*_,t[4]=T*m-S,t[8]=x*m+R,t[1]=p*y,t[5]=R*m+x,t[9]=S*m-T,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const x=c*p,S=c*m,T=d*p,R=d*m;t[0]=p*_,t[4]=R-x*y,t[8]=T*y+S,t[1]=y,t[5]=c*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*y+T,t[10]=x-R*y}else if(e.order==="XZY"){const x=c*p,S=c*m,T=d*p,R=d*m;t[0]=p*_,t[4]=-y,t[8]=m*_,t[1]=x*y+R,t[5]=c*_,t[9]=S*y-T,t[2]=T*y-S,t[6]=d*_,t[10]=R*y+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,r){const a=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),xr.crossVectors(r,In),xr.lengthSq()===0&&(Math.abs(r.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),xr.crossVectors(r,In)),xr.normalize(),ol.crossVectors(In,xr),a[0]=xr.x,a[4]=ol.x,a[8]=In.x,a[1]=xr.y,a[5]=ol.y,a[9]=In.y,a[2]=xr.z,a[6]=ol.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],T=r[2],R=r[6],v=r[10],g=r[14],D=r[3],L=r[7],C=r[11],Y=r[15],O=a[0],I=a[4],V=a[8],P=a[12],w=a[1],k=a[5],se=a[9],te=a[13],fe=a[2],he=a[6],oe=a[10],le=a[14],B=a[3],ae=a[7],re=a[11],N=a[15];return u[0]=c*O+d*w+p*fe+m*B,u[4]=c*I+d*k+p*he+m*ae,u[8]=c*V+d*se+p*oe+m*re,u[12]=c*P+d*te+p*le+m*N,u[1]=_*O+y*w+x*fe+S*B,u[5]=_*I+y*k+x*he+S*ae,u[9]=_*V+y*se+x*oe+S*re,u[13]=_*P+y*te+x*le+S*N,u[2]=T*O+R*w+v*fe+g*B,u[6]=T*I+R*k+v*he+g*ae,u[10]=T*V+R*se+v*oe+g*re,u[14]=T*P+R*te+v*le+g*N,u[3]=D*O+L*w+C*fe+Y*B,u[7]=D*I+L*k+C*he+Y*ae,u[11]=D*V+L*se+C*oe+Y*re,u[15]=D*P+L*te+C*le+Y*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],T=e[3],R=e[7],v=e[11],g=e[15];return T*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+t*p*S-t*m*x+u*c*x-a*c*S+a*m*_-u*p*_)+v*(+t*m*y-t*d*S-u*c*y+r*c*S+u*d*_-r*m*_)+g*(-a*d*_-t*p*y+t*d*x+a*c*y-r*c*x+r*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],T=e[12],R=e[13],v=e[14],g=e[15],D=y*v*m-R*x*m+R*p*S-d*v*S-y*p*g+d*x*g,L=T*x*m-_*v*m-T*p*S+c*v*S+_*p*g-c*x*g,C=_*R*m-T*y*m+T*d*S-c*R*S-_*d*g+c*y*g,Y=T*y*p-_*R*p-T*d*x+c*R*x+_*d*v-c*y*v,O=t*D+r*L+a*C+u*Y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=D*I,e[1]=(R*x*u-y*v*u-R*a*S+r*v*S+y*a*g-r*x*g)*I,e[2]=(d*v*u-R*p*u+R*a*m-r*v*m-d*a*g+r*p*g)*I,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*I,e[4]=L*I,e[5]=(_*v*u-T*x*u+T*a*S-t*v*S-_*a*g+t*x*g)*I,e[6]=(T*p*u-c*v*u-T*a*m+t*v*m+c*a*g-t*p*g)*I,e[7]=(c*x*u-_*p*u+_*a*m-t*x*m-c*a*S+t*p*S)*I,e[8]=C*I,e[9]=(T*y*u-_*R*u-T*r*S+t*R*S+_*r*g-t*y*g)*I,e[10]=(c*R*u-T*d*u+T*r*m-t*R*m-c*r*g+t*d*g)*I,e[11]=(_*d*u-c*y*u-_*r*m+t*y*m+c*r*S-t*d*S)*I,e[12]=Y*I,e[13]=(_*R*a-T*y*a+T*r*x-t*R*x-_*r*v+t*y*v)*I,e[14]=(T*d*a-c*R*a-T*r*p+t*R*p+c*r*v-t*d*v)*I,e[15]=(c*y*a-_*d*a+_*r*p-t*y*p-c*r*x+t*d*x)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,u=e.z;return t[0]*=r,t[4]*=a,t[8]*=u,t[1]*=r,t[5]*=a,t[9]*=u,t[2]*=r,t[6]*=a,t[10]*=u,t[3]*=r,t[7]*=a,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,u=t._x,c=t._y,d=t._z,p=t._w,m=u+u,_=c+c,y=d+d,x=u*m,S=u*_,T=u*y,R=c*_,v=c*y,g=d*y,D=p*m,L=p*_,C=p*y,Y=r.x,O=r.y,I=r.z;return a[0]=(1-(R+g))*Y,a[1]=(S+C)*Y,a[2]=(T-L)*Y,a[3]=0,a[4]=(S-C)*O,a[5]=(1-(x+g))*O,a[6]=(v+D)*O,a[7]=0,a[8]=(T+L)*I,a[9]=(v-D)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let u=Ls.set(a[0],a[1],a[2]).length();const c=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/c,y=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=y,si.elements[9]*=y,si.elements[10]*=y,t.setFromRotationMatrix(si),r.x=u,r.y=c,r.z=d,this}makePerspective(e,t,r,a,u,c,d=Wi){const p=this.elements,m=2*u/(t-e),_=2*u/(r-a),y=(t+e)/(t-e),x=(r+a)/(r-a);let S,T;if(d===Wi)S=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(d===Il)S=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,u,c,d=Wi){const p=this.elements,m=1/(t-e),_=1/(r-a),y=1/(c-u),x=(t+e)*m,S=(r+a)*_;let T,R;if(d===Wi)T=(c+u)*y,R=-2*y;else if(d===Il)T=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new Z,si=new zt,U0=new Z(0,0,0),N0=new Z(1,1,1),xr=new Z,ol=new Z,In=new Z,um=new zt,cm=new Xo;class Yi{constructor(e=0,t=0,r=0,a=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Cn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const fm=new Z,Ds=new Xo,ki=new zt,al=new Z,Fo=new Z,F0=new Z,O0=new Xo,dm=new Z(1,0,0),hm=new Z(0,1,0),pm=new Z(0,0,1),mm={type:"added"},k0={type:"removed"},Us={type:"childadded",child:null},kc={type:"childremoved",child:null};class dn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new Z,t=new Yi,r=new Xo,a=new Z(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new st}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,t){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?al.copy(e):al.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Fo,al,this.up):ki.lookAt(al,Fo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),y=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Z,Bi=new Z,Bc=new Z,zi=new Z,Ns=new Z,Is=new Z,gm=new Z,zc=new Z,Vc=new Z,Hc=new Z,Gc=new Bt,Wc=new Bt,Xc=new Bt;class li{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),oi.subVectors(e,t),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,t,r,a,u){oi.subVectors(a,t),Bi.subVectors(r,t),Bc.subVectors(e,t);const c=oi.dot(oi),d=oi.dot(Bi),p=oi.dot(Bc),m=Bi.dot(Bi),_=Bi.dot(Bc),y=c*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*_)*x,T=(c*_-d*p)*x;return u.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,a,u,c,d,p){return this.getBarycoord(e,t,r,a,zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,zi.x),p.addScaledVector(c,zi.y),p.addScaledVector(d,zi.z),p)}static getInterpolatedAttribute(e,t,r,a,u,c){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Gc,u.x),c.addScaledVector(Wc,u.y),c.addScaledVector(Xc,u.z),c}static isFrontFacing(e,t,r,a){return oi.subVectors(r,t),Bi.subVectors(e,t),oi.cross(Bi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),oi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,t,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,u=this.c;let c,d;Ns.subVectors(a,r),Is.subVectors(u,r),zc.subVectors(e,r);const p=Ns.dot(zc),m=Is.dot(zc);if(p<=0&&m<=0)return t.copy(r);Vc.subVectors(e,a);const _=Ns.dot(Vc),y=Is.dot(Vc);if(_>=0&&y<=_)return t.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(r).addScaledVector(Ns,c);Hc.subVectors(e,u);const S=Ns.dot(Hc),T=Is.dot(Hc);if(T>=0&&S<=T)return t.copy(u);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(Is,d);const v=_*T-S*y;if(v<=0&&y-_>=0&&S-T>=0)return gm.subVectors(u,a),d=(y-_)/(y-_+(S-T)),t.copy(a).addScaledVector(gm,d);const g=1/(v+R+x);return c=R*g,d=x*g,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=vt.workingColorSpace){if(e=S0(e,1),t=Cn(t,0,1),r=Cn(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=qc(c,u,e+1/3),this.g=qc(c,u,e),this.b=qc(c,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,t=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,t);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return vt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Cn(fn.r*255,0,255))*65536+Math.round(Cn(fn.g*255,0,255))*256+Math.round(Cn(fn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(fn.copy(this),t);const r=fn.r,a=fn.g,u=fn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const y=c-d;switch(m=_<=.5?y/(c+d):y/(2-c-d),c){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Yn){vt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,r=fn.g,a=fn.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(ll);const r=Pc(yr.h,ll.h,t),a=Pc(yr.s,ll.s,t),u=Pc(yr.l,ll.l,t);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*a,this.g=u[1]*t+u[4]*r+u[7]*a,this.b=u[2]*t+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new At;At.NAMES=vg;let B0=0;class Bl extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Wo(),this.name="",this.blending=Vs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lf&&(r.blendSrc=this.blendSrc),this.blendDst!==uf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(t){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xg extends Bl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Z,ul=new St;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=em,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,u){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),a=Rn(a,this.array),u=Rn(u,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}}class yg extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Sg extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ei extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z0=0;const Xn=new zt,Yc=new dn,Fs=new Z,Fn=new qo,Oo=new qo,en=new Z;class Rr extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Sg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,r){return Xn.makeTranslation(e,t,r),this.applyMatrix4(Xn),this}scale(e,t,r){return Xn.makeScale(e,t,r),this.applyMatrix4(Xn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ei(r,3))}else{for(let r=0,a=t.count;r<a;r++){const u=e[r];t.setXYZ(r,u.x,u.y,u.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const u=t[r];Fn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ld);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const d=t[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,Oo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Oo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Oo.min),Fn.expandByPoint(Oo.max))}Fn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(t)for(let u=0,c=t.length;u<c;u++){const d=t[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)en.fromBufferAttribute(d,m),p&&(Fs.fromBufferAttribute(e,m),en.add(Fs)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,u=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new Z,p[V]=new Z;const m=new Z,_=new Z,y=new Z,x=new St,S=new St,T=new St,R=new Z,v=new Z;function g(V,P,w){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,w),x.fromBufferAttribute(u,V),S.fromBufferAttribute(u,P),T.fromBufferAttribute(u,w),_.sub(m),y.sub(m),S.sub(x),T.sub(x);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(k),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),d[V].add(R),d[P].add(R),d[w].add(R),p[V].add(v),p[P].add(v),p[w].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,P=D.length;V<P;++V){const w=D[V],k=w.start,se=w.count;for(let te=k,fe=k+se;te<fe;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new Z,C=new Z,Y=new Z,O=new Z;function I(V){Y.fromBufferAttribute(a,V),O.copy(Y);const P=d[V];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),C.crossVectors(O,P);const k=C.dot(p[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,k)}for(let V=0,P=D.length;V<P;++V){const w=D[V],k=w.start,se=w.count;for(let te=k,fe=k+se;te<fe;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,c=new Z,d=new Z,p=new Z,m=new Z,_=new Z,y=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),R=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(t,T),u.fromBufferAttribute(t,R),c.fromBufferAttribute(t,v),_.subVectors(c,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),u.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),_.subVectors(c,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,x=new m.constructor(p.length*_);let S=0,T=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new Si(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(t))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const y=c[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new zt,Wr=new D0,cl=new ld,vm=new Z,fl=new Z,dl=new Z,hl=new Z,jc=new Z,pl=new Z,xm=new Z,ml=new Z;class yi extends dn{constructor(e=new Rr,t=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){pl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(jc.fromBufferAttribute(y,e),c?pl.addScaledVector(jc,_):pl.addScaledVector(jc.sub(t),_))}t.add(pl)}return t}raycast(e,t){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),Wr.copy(e.ray).recast(e.near),!(cl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(cl,vm)===null||Wr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(_m.copy(u).invert(),Wr.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,R=x.length;T<R;T++){const v=x[T],g=c[v.materialIndex],D=Math.max(v.start,S.start),L=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let C=D,Y=L;C<Y;C+=3){const O=d.getX(C),I=d.getX(C+1),V=d.getX(C+2);a=gl(this,g,e,r,m,_,y,O,I,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let v=T,g=R;v<g;v+=3){const D=d.getX(v),L=d.getX(v+1),C=d.getX(v+2);a=gl(this,c,e,r,m,_,y,D,L,C),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,R=x.length;T<R;T++){const v=x[T],g=c[v.materialIndex],D=Math.max(v.start,S.start),L=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let C=D,Y=L;C<Y;C+=3){const O=C,I=C+1,V=C+2;a=gl(this,g,e,r,m,_,y,O,I,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let v=T,g=R;v<g;v+=3){const D=v,L=v+1,C=v+2;a=gl(this,c,e,r,m,_,y,D,L,C),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function V0(s,e,t,r,a,u,c,d){let p;if(e.side===Pn?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===Ar,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ml);return m<t.near||m>t.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,t,r,a,u,c,d,p,m){s.getVertexPosition(d,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const _=V0(s,e,t,r,fl,dl,hl,xm);if(_){const y=new Z;li.getBarycoord(xm,fl,dl,hl,y),a&&(_.uv=li.getInterpolatedAttribute(a,d,p,m,y,new St)),u&&(_.uv1=li.getInterpolatedAttribute(u,d,p,m,y,new St)),c&&(_.normal=li.getInterpolatedAttribute(c,d,p,m,y,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};li.getNormal(fl,dl,hl,x.normal),_.face=x,_.barycoord=y}return _}class Yo extends Rr{constructor(e=1,t=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],_=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,t,e,c,u,0),T("z","y","x",1,-1,r,t,-e,c,u,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,u,4),T("x","y","z",-1,-1,e,t,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(y,2));function T(R,v,g,D,L,C,Y,O,I,V,P){const w=C/I,k=Y/V,se=C/2,te=Y/2,fe=O/2,he=I+1,oe=V+1;let le=0,B=0;const ae=new Z;for(let re=0;re<oe;re++){const N=re*k-te;for(let ne=0;ne<he;ne++){const De=ne*w-se;ae[R]=De*D,ae[v]=N*L,ae[g]=fe,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[v]=0,ae[g]=O>0?1:-1,_.push(ae.x,ae.y,ae.z),y.push(ne/I),y.push(1-re/V),le+=1}}for(let re=0;re<V;re++)for(let N=0;N<I;N++){const ne=x+N+he*re,De=x+N+he*(re+1),K=x+(N+1)+he*(re+1),ue=x+(N+1)+he*re;p.push(ne,De,ue),p.push(De,K,ue),B+=6}d.addGroup(S,B,P),S+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function vn(s){const e={};for(let t=0;t<s.length;t++){const r=$s(s[t]);for(const a in r)e[a]=r[a]}return e}function H0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Eg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const G0={clone:$s,merge:vn};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Bl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Mg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new Z,ym=new St,Sm=new St;class jn extends Mg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,ym,Sm),t.subVectors(Sm,ym)}setViewOffset(e,t,r,a,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/p,t-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class q0 extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Os,ks,e,t);a.layers=this.layers,this.add(a);const u=new jn(Os,ks,e,t);u.layers=this.layers,this.add(u);const c=new jn(Os,ks,e,t);c.layers=this.layers,this.add(c);const d=new jn(Os,ks,e,t);d.layers=this.layers,this.add(d);const p=new jn(Os,ks,e,t);p.layers=this.layers,this.add(p);const m=new jn(Os,ks,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,u,c,d,p]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,u),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Tg extends bn{constructor(e,t,r,a,u,c,d,p,m,_){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,r,a,u,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Tg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Yo(5,5,5),u=new ji({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Mr});u.uniforms.tEquirect.value=t;const c=new yi(a,u),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=xi),new q0(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(u)}}const $c=new Z,j0=new Z,$0=new st;class jr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=$c.subVectors(r,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$0.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ld,_l=new Z;class ud{constructor(e=new jr,t=new jr,r=new jr,a=new jr,u=new jr,c=new jr){this.planes=[e,t,r,a,u,c]}set(e,t,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],T=a[9],R=a[10],v=a[11],g=a[12],D=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,v-S,C-g).normalize(),r[1].setComponents(p+u,x+m,v+S,C+g).normalize(),r[2].setComponents(p+c,x+_,v+T,C+D).normalize(),r[3].setComponents(p-c,x-_,v-T,C-D).normalize(),r[4].setComponents(p-d,x-y,v-R,C-L).normalize(),t===Wi)r[5].setComponents(p+d,x+y,v+R,C+L).normalize();else if(t===Il)r[5].setComponents(d,y,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wg(){let s=null,e=!1,t=null,r=null;function a(u,c){t(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function K0(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<y.length;S++){const T=y[x],R=y[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,y[x]=R)}y.length=x+1;for(let S=0,T=y.length;S<T;S++){const R=y[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:c}}class zl extends Rr{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const u=e/2,c=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,x=t/p,S=[],T=[],R=[],v=[];for(let g=0;g<_;g++){const D=g*x-c;for(let L=0;L<m;L++){const C=L*y-u;T.push(C,-D,0),R.push(0,0,1),v.push(L/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const L=D+m*g,C=D+m*(g+1),Y=D+1+m*(g+1),O=D+1+m*g;S.push(L,C,O),S.push(C,Y,O)}this.setIndex(S),this.setAttribute("position",new Ei(T,3)),this.setAttribute("normal",new Ei(R,3)),this.setAttribute("uv",new Ei(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Z0,alphahash_pars_fragment:Q0,alphamap_fragment:J0,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:lx,bsdfs:ux,iridescence_fragment:cx,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:xx,common:yx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Mx,displacementmap_vertex:Tx,emissivemap_fragment:wx,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:bx,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ux,fog_vertex:Nx,fog_pars_vertex:Ix,fog_fragment:Fx,fog_pars_fragment:Ox,gradientmap_pars_fragment:kx,lightmap_pars_fragment:Bx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Hx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:qx,lights_phong_pars_fragment:Yx,lights_physical_fragment:jx,lights_physical_pars_fragment:$x,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Qx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:ly,morphinstance_vertex:uy,morphcolor_vertex:cy,morphnormal_vertex:fy,morphtarget_pars_vertex:dy,morphtarget_vertex:hy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:_y,normal_vertex:vy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:My,opaque_fragment:Ty,packing:wy,premultiplied_alpha_fragment:Ay,project_vertex:Ry,dithering_fragment:Cy,dithering_pars_fragment:Py,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Ny,shadowmask_pars_fragment:Iy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:ky,skinnormal_vertex:By,specularmap_fragment:zy,specularmap_pars_fragment:Vy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:jy,worldpos_vertex:$y,background_vert:Ky,background_frag:Zy,backgroundCube_vert:Qy,backgroundCube_frag:Jy,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:uS,meshbasic_vert:cS,meshbasic_frag:fS,meshlambert_vert:dS,meshlambert_frag:hS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:_S,meshphong_vert:vS,meshphong_frag:xS,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:ES,meshtoon_frag:MS,points_vert:TS,points_frag:wS,shadow_vert:AS,shadow_frag:RS,sprite_vert:CS,sprite_frag:PS},Ce={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},vi={basic:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:vn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:vn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:vn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:vn([Ce.lights,Ce.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:vn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const vl={r:0,b:0,g:0},qr=new Yi,bS=new zt;function LS(s,e,t,r,a,u,c){const d=new At(0);let p=u===!0?0:1,m,_,y=null,x=0,S=null;function T(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?t:e).get(L)),L}function R(D){let L=!1;const C=T(D);C===null?g(d,p):C&&C.isColor&&(g(C,1),L=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,c):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(D,L){const C=T(L);C&&(C.isCubeTexture||C.mapping===Ol)?(_===void 0&&(_=new yi(new Yo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(L.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(bS.makeRotationFromEuler(qr)),_.material.toneMapped=vt.getTransfer(C.colorSpace)!==Ct,(y!==C||x!==C.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=C,x=C.version,S=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new yi(new zl(2,2),new ji({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=vt.getTransfer(C.colorSpace)!==Ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||x!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,x=C.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,L){D.getRGB(vl,Eg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,L,c)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:R,addToRenderList:v}}function DS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,c=!1;function d(w,k,se,te,fe){let he=!1;const oe=y(te,se,k);u!==oe&&(u=oe,m(u.object)),he=S(w,te,se,fe),he&&T(w,te,se,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(w,k,se,te),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function y(w,k,se){const te=se.wireframe===!0;let fe=r[w.id];fe===void 0&&(fe={},r[w.id]=fe);let he=fe[k.id];he===void 0&&(he={},fe[k.id]=he);let oe=he[te];return oe===void 0&&(oe=x(p()),he[te]=oe),oe}function x(w){const k=[],se=[],te=[];for(let fe=0;fe<t;fe++)k[fe]=0,se[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:te,object:w,attributes:{},index:null}}function S(w,k,se,te){const fe=u.attributes,he=k.attributes;let oe=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){const re=fe[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;oe++}return u.attributesNum!==oe||u.index!==te}function T(w,k,se,te){const fe={},he=k.attributes;let oe=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),fe[B]=N,oe++}u.attributes=fe,u.attributesNum=oe,u.index=te}function R(){const w=u.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function v(w){g(w,0)}function g(w,k){const se=u.newAttributes,te=u.enabledAttributes,fe=u.attributeDivisors;se[w]=1,te[w]===0&&(s.enableVertexAttribArray(w),te[w]=1),fe[w]!==k&&(s.vertexAttribDivisor(w,k),fe[w]=k)}function D(){const w=u.newAttributes,k=u.enabledAttributes;for(let se=0,te=k.length;se<te;se++)k[se]!==w[se]&&(s.disableVertexAttribArray(se),k[se]=0)}function L(w,k,se,te,fe,he,oe){oe===!0?s.vertexAttribIPointer(w,k,se,fe,he):s.vertexAttribPointer(w,k,se,te,fe,he)}function C(w,k,se,te){R();const fe=te.attributes,he=se.getAttributes(),oe=k.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),le==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const De=ne.buffer,K=ne.type,ue=ne.bytesPerElement,Ee=K===s.INT||K===s.UNSIGNED_INT||ae.gpuType===nd;if(ae.isInterleavedBufferAttribute){const ve=ae.data,we=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<B.locationSize;Ke++)g(B.location+Ke,ve.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<B.locationSize;Ke++)v(B.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ke=0;Ke<B.locationSize;Ke++)L(B.location+Ke,N/B.locationSize,K,re,we*ue,(Ue+N/B.locationSize*Ke)*ue,Ee)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ae.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)v(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,N/B.locationSize,K,re,N*ue,N/B.locationSize*ve*ue,Ee)}}else if(oe!==void 0){const re=oe[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}D()}function Y(){V();for(const w in r){const k=r[w];for(const se in k){const te=k[se];for(const fe in te)_(te[fe].object),delete te[fe];delete k[se]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const se in k){const te=k[se];for(const fe in te)_(te[fe].object),delete te[fe];delete k[se]}delete r[w.id]}function I(w){for(const k in r){const se=r[k];if(se[w.id]===void 0)continue;const te=se[w.id];for(const fe in te)_(te[fe].object),delete te[fe];delete se[w.id]}}function V(){P(),c=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:v,disableUnusedAttributes:D}}function US(s,e,t){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function c(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),t.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let T=0;T<y;T++)S+=_[T];t.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let T=0;for(let R=0;R<y;R++)T+=_[R]*x[R];t.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function NS(s,e,t,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ui&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const V=I===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==qi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!V)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:O}}function IS(s){const e=this;let t=null,r=0,a=!1,u=!1;const c=new jr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){t=_(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!a||T===null||T.length===0||u&&!v)u?_(null):m();else{const D=u?0:r,L=D*4;let C=g.clippingState||null;p.value=C,C=_(T,x,L,S);for(let Y=0;Y!==L;++Y)C[Y]=t[Y];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,T){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=p.value,T!==!0||v===null){const g=S+R*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,C=S;L!==R;++L,C+=4)c.copy(y[L]).applyMatrix4(D,d),c.normal.toArray(v,C),v[C+3]=c.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function FS(s){let e=new WeakMap;function t(c,d){return d===_f?c.mapping=Xs:d===vf&&(c.mapping=qs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===_f||d===vf)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new Y0(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Ag extends Mg{constructor(e=-1,t=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Em=[.125,.215,.35,.446,.526,.582],Zr=20,Kc=new Ag,Mm=new At;let Zc=null,Qc=0,Jc=0,ef=!1;const $r=(1+Math.sqrt(5))/2,Bs=1/$r,Tm=[new Z(-$r,Bs,0),new Z($r,Bs,0),new Z(-Bs,0,$r),new Z(Bs,0,$r),new Z(0,$r,-Bs),new Z(0,$r,Bs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=ef,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Go,format:ui,colorSpace:Ks,depthBuffer:!1},a=Am(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OS(u)),this._blurMaterial=kS(u,e,t)}return a}_compileMaterial(e){const t=new yi(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,r,a){const d=new jn(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(Mm),_.toneMapping=Tr,_.autoClear=!1;const S=new xg({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),T=new yi(new Yo,S);let R=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,R=!0):(S.color.copy(Mm),R=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;xl(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),R&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Xs||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;xl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,Kc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Tm[(a-u-1)%Tm.length];this._blur(e,u-1,u,c,d)}t.autoClear=r}_blur(e,t,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,t,r,a,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new yi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),R=u/T,v=isFinite(u)?1+Math.floor(_*R):Zr;v>Zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zr}`);const g=[];let D=0;for(let I=0;I<Zr;++I){const V=I/R,P=Math.exp(-V*V/2);g.push(P),I===0?D+=P:I<v&&(D+=2*P)}for(let I=0;I<g.length;I++)g[I]=g[I]/D;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[a],Y=3*C*(a>L-zs?a-L+zs:0),O=4*(this._cubeSize-C);xl(t,Y,O,3*C,2*C),p.setRenderTarget(t),p.render(y,Kc)}}function OS(s){const e=[],t=[],r=[];let a=s;const u=s-zs+1+Em.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);t.push(d);let p=1/d;c>s-zs?p=Em[c-s+zs-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,R=3,v=2,g=1,D=new Float32Array(R*T*S),L=new Float32Array(v*T*S),C=new Float32Array(g*T*S);for(let O=0;O<S;O++){const I=O%3*2/3-1,V=O>2?0:-1,P=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];D.set(P,R*T*O),L.set(x,v*T*O);const w=[O,O,O,O,O,O];C.set(w,g*T*O)}const Y=new Rr;Y.setAttribute("position",new Si(D,R)),Y.setAttribute("uv",new Si(L,v)),Y.setAttribute("faceIndex",new Si(C,g)),e.push(Y),a>zs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Am(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function kS(s,e,t){const r=new Float32Array(Zr),a=new Z(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Rm(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Cm(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===_f||p===vf,_=p===Xs||p===qs;if(m||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new wm(s)),y=m?t.fromEquirectangular(d,y):t.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new wm(s)),y=m?t.fromEquirectangular(d):t.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function zS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Bo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function VS(s,e,t,r){const a={},u=new WeakMap;function c(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const R=x.morphAttributes[T];for(let v=0,g=R.length;v<g;v++)e.remove(R[v])}x.removeEventListener("dispose",c),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function p(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const R=S[T];for(let v=0,g=R.length;v<g;v++)e.update(R[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,T=y.attributes.position;let R=0;if(S!==null){const D=S.array;R=S.version;for(let L=0,C=D.length;L<C;L+=3){const Y=D[L+0],O=D[L+1],I=D[L+2];x.push(Y,O,O,I,I,Y)}}else if(T!==void 0){const D=T.array;R=T.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const Y=L+0,O=L+1,I=L+2;x.push(Y,O,O,I,I,Y)}}else return;const v=new(pg(x)?Sg:yg)(x,1);v.version=R;const g=u.get(y);g&&e.remove(g),u.set(y,v)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function HS(s,e,t){let r;function a(x){r=x}let u,c;function d(x){u=x.type,c=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*c),t.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,x*c,T),t.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let v=0;for(let g=0;g<T;g++)v+=S[g];t.update(v,r,1)}function y(x,S,T,R){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/c,S[g],R[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,T);let g=0;for(let D=0;D<T;D++)g+=S[D]*R[D];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function GS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function WS(s,e,t){const r=new WeakMap,a=new Bt;function u(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let w=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),v===!0&&(C=3);let Y=d.attributes.position.count*C,O=1;Y>e.maxTextureSize&&(O=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const I=new Float32Array(Y*O*4*y),V=new gg(I,Y,O,y);V.type=Gi,V.needsUpdate=!0;const P=C*4;for(let k=0;k<y;k++){const se=g[k],te=D[k],fe=L[k],he=Y*O*4*k;for(let oe=0;oe<se.count;oe++){const le=oe*P;T===!0&&(a.fromBufferAttribute(se,oe),I[he+le+0]=a.x,I[he+le+1]=a.y,I[he+le+2]=a.z,I[he+le+3]=0),R===!0&&(a.fromBufferAttribute(te,oe),I[he+le+4]=a.x,I[he+le+5]=a.y,I[he+le+6]=a.z,I[he+le+7]=0),v===!0&&(a.fromBufferAttribute(fe,oe),I[he+le+8]=a.x,I[he+le+9]=a.y,I[he+le+10]=a.z,I[he+le+11]=fe.itemSize===4?a.w:1)}}x={count:y,texture:V,size:new St(Y,O)},r.set(d,x),d.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function XS(s,e,t,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:c}}class Rg extends bn{constructor(e,t,r,a,u,c,d,p,m,_=Hs){if(_!==Hs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Hs&&(r=es),r===void 0&&_===js&&(r=Ys),super(null,a,u,c,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cg=new bn,Pm=new Rg(1,1),Pg=new gg,bg=new b0,Lg=new Tg,bm=[],Lm=[],Dm=new Float32Array(16),Um=new Float32Array(9),Nm=new Float32Array(4);function Qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let u=bm[a];if(u===void 0&&(u=new Float32Array(a),bm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(u,d)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Vl(s,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function KS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),Kt(t,r)}}function ZS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),Kt(t,r)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),Kt(t,r)}}function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function iE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function aE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Pm.compareFunction=hg,u=Pm):u=Cg,t.setTexture2D(e||u,a)}function lE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||bg,a)}function uE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Lg,a)}function cE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Pg,a)}function fE(s){switch(s){case 5126:return qS;case 35664:return YS;case 35665:return jS;case 35666:return $S;case 35674:return KS;case 35675:return ZS;case 35676:return QS;case 5124:case 35670:return JS;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return cE}}function dE(s,e){s.uniform1fv(this.addr,e)}function hE(s,e){const t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function pE(s,e){const t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function mE(s,e){const t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function gE(s,e){const t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _E(s,e){const t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vE(s,e){const t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xE(s,e){s.uniform1iv(this.addr,e)}function yE(s,e){s.uniform2iv(this.addr,e)}function SE(s,e){s.uniform3iv(this.addr,e)}function EE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function TE(s,e){s.uniform2uiv(this.addr,e)}function wE(s,e){s.uniform3uiv(this.addr,e)}function AE(s,e){s.uniform4uiv(this.addr,e)}function RE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Cg,u[c])}function CE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||bg,u[c])}function PE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Lg,u[c])}function bE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Pg,u[c])}function LE(s){switch(s){case 5126:return dE;case 35664:return hE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return _E;case 35676:return vE;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return SE;case 35669:case 35673:return EE;case 5125:return ME;case 36294:return TE;case 36295:return wE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return RE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return bE}}class DE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=fE(t.type)}}class UE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LE(t.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,t[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,t){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),c=tf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Im(t,m===void 0?new DE(d,s,e):new UE(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new NE(d),Im(t,y)),t=y}}}class Pl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(t,a),c=e.getUniformLocation(t,u.name);IE(u,c,this)}}setValue(e,t,r,a){const u=this.map[t];u!==void 0&&u.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let u=0,c=t.length;u!==c;++u){const d=t[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Fm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const FE=37297;let OE=0;function kE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Om=new st;function BE(s){vt._getMatrix(Om,vt.workingColorSpace,s);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+kE(s.getShaderSource(e),c)}else return a}function zE(s,e){const t=BE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VE(s,e){let t;switch(e){case n0:t="Linear";break;case i0:t="Reinhard";break;case r0:t="Cineon";break;case s0:t="ACESFilmic";break;case a0:t="AgX";break;case l0:t="Neutral";break;case o0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new Z;function HE(){vt.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function WE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function zo(s){return s!==""}function Bm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(qE,jE)}const YE=new Map;function jE(s,e){let t=ot[e];if(t===void 0){const r=YE.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(t)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace($E,KE)}function KE(s,e,t,r){let a="";for(let u=parseInt(e);u<parseInt(t);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Hm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function eM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case e0:e="ENVMAP_BLENDING_MIX";break;case t0:e="ENVMAP_BLENDING_ADD";break}return e}function tM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function nM(s,e,t,r){const a=s.getContext(),u=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=ZE(t),m=QE(t),_=JE(t),y=eM(t),x=tM(t),S=GE(t),T=WE(u),R=a.createProgram();let v,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),g.length>0&&(g+=`
`)):(v=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),g=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?ot.tonemapping_pars_fragment:"",t.toneMapping!==Tr?VE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,zE("linearToOutputTexel",t.outputColorSpace),HE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),c=jf(c),c=Bm(c,t),c=zm(c,t),d=jf(d),d=Bm(d,t),d=zm(d,t),c=Vm(c),d=Vm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+v+c,C=D+g+d,Y=Fm(a,a.VERTEX_SHADER,L),O=Fm(a,a.FRAGMENT_SHADER,C);a.attachShader(R,Y),a.attachShader(R,O),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(k){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(R).trim(),te=a.getShaderInfoLog(Y).trim(),fe=a.getShaderInfoLog(O).trim();let he=!0,oe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,Y,O);else{const le=km(a,Y,"vertex"),B=km(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+le+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||fe==="")&&(oe=!1);oe&&(k.diagnostics={runnable:he,programLog:se,vertexShader:{log:te,prefix:v},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(Y),a.deleteShader(O),V=new Pl(a,R),P=XE(a,R)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,FE)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=O,this}let iM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new sM(e),t.set(e,r)),r}}class sM{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}}function oM(s,e,t,r,a,u,c){const d=new _g,p=new rM,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function v(P,w,k,se,te){const fe=se.fog,he=te.geometry,oe=P.isMeshStandardMaterial?se.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),B=le&&le.mapping===Ol?le.image.height:null,ae=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let De,K,ue,Ee;if(ae){const gt=vi[ae];De=gt.vertexShader,K=gt.fragmentShader}else De=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Ee=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,Rt=!!P.map,dt=!!P.matcap,bt=!!le,X=!!P.aoMap,hn=!!P.lightMap,ft=!!P.bumpMap,lt=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,b=!!P.roughnessMap,M=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,Ve=P.transmission>0,Ae=M&&!!P.anisotropyMap,Ne=$&&!!P.clearcoatMap,at=$&&!!P.clearcoatNormalMap,ye=$&&!!P.clearcoatRoughnessMap,Fe=ge&&!!P.iridescenceMap,Ze=ge&&!!P.iridescenceThicknessMap,Qe=ce&&!!P.sheenColorMap,Oe=ce&&!!P.sheenRoughnessMap,ut=!!P.specularMap,nt=!!P.specularColorMap,Mt=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Re=Ve&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Dt=Tr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Xt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:Rt,matcap:dt,envMap:bt,envMapMode:bt&&le.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:hn,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:lt&&P.normalMapType===h0,normalMapTangentSpace:lt&&P.normalMapType===d0,metalnessMap:qe,roughnessMap:b,anisotropy:M,anisotropyMap:Ae,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Ze,sheen:ce,sheenColorMap:Qe,sheenRoughnessMap:Oe,specularMap:ut,specularColorMap:nt,specularIntensityMap:Mt,transmission:Ve,transmissionMap:H,thicknessMap:Re,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Rt&&R(P.map.channel),aoMapUv:X&&R(P.aoMap.channel),lightMapUv:hn&&R(P.lightMap.channel),bumpMapUv:ft&&R(P.bumpMap.channel),normalMapUv:lt&&R(P.normalMap.channel),displacementMapUv:Ye&&R(P.displacementMap.channel),emissiveMapUv:Tt&&R(P.emissiveMap.channel),metalnessMapUv:qe&&R(P.metalnessMap.channel),roughnessMapUv:b&&R(P.roughnessMap.channel),anisotropyMapUv:Ae&&R(P.anisotropyMap.channel),clearcoatMapUv:Ne&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&R(P.sheenRoughnessMap.channel),specularMapUv:ut&&R(P.specularMap.channel),specularColorMapUv:nt&&R(P.specularColorMap.channel),specularIntensityMapUv:Mt&&R(P.specularIntensityMap.channel),transmissionMapUv:H&&R(P.transmissionMap.channel),thicknessMapUv:Re&&R(P.thicknessMap.channel),alphaMapUv:de&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Rt||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Pn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function g(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)w.push(k),w.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(w,P),L(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function D(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const w=T[P.type];let k;if(w){const se=vi[w];k=G0.clone(se.uniforms)}else k=P.uniforms;return k}function Y(P,w){let k;for(let se=0,te=_.length;se<te;se++){const fe=_[se];if(fe.cacheKey===w){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new nM(s,w,P,u),_.push(k)),k}function O(P){if(--P.usedTimes===0){const w=_.indexOf(P);_[w]=_[_.length-1],_.pop(),P.destroy()}}function I(P){p.remove(P)}function V(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:C,acquireProgram:Y,releaseProgram:O,releaseShaderCache:I,programs:_,dispose:V}}function aM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:u}}function lM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const t=[],r=[],a=[];function u(){e=0,t.length=0,r.length=0,a.length=0}function c(y,x,S,T,R,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:R,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=y.renderOrder,g.z=R,g.group=v),e++,g}function d(y,x,S,T,R,v){const g=c(y,x,S,T,R,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function p(y,x,S,T,R,v){const g=c(y,x,S,T,R,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function m(y,x){t.length>1&&t.sort(y||lM),r.length>1&&r.sort(x||Gm),a.length>1&&a.sort(x||Gm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function uM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new Wm,s.set(r,[c])):a>=u.length?(c=new Wm,u.push(c)):c=u[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function cM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new At};break;case"SpotLight":t={position:new Z,direction:new Z,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function fM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dM=0;function hM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pM(s){const e=new cM,t=fM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new zt,c=new zt;function d(m){let _=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,R=0,v=0,g=0,D=0,L=0,C=0,Y=0,O=0,I=0;m.sort(hM);for(let P=0,w=m.length;P<w;P++){const k=m[P],se=k.color,te=k.intensity,fe=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=se.r*te,y+=se.g*te,x+=se.b*te;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],te);I++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,B=t.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=k.shadow.matrix,D++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(se).multiplyScalar(te),oe.distance=fe,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[R]=oe;const le=k.shadow;if(k.map&&(r.spotLightMap[Y]=k.map,Y++,le.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[R]=le.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=he,C++}R++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(se).multiplyScalar(te),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=oe,v++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const le=k.shadow,B=t.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=k.shadow.matrix,L++}r.point[T]=oe,T++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(te),oe.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[g]=oe,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==R||V.rectAreaLength!==v||V.hemiLength!==g||V.numDirectionalShadows!==D||V.numPointShadows!==L||V.numSpotShadows!==C||V.numSpotMaps!==Y||V.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=v,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+Y-O,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,V.directionalLength=S,V.pointLength=T,V.spotLength=R,V.rectAreaLength=v,V.hemiLength=g,V.numDirectionalShadows=D,V.numPointShadows=L,V.numSpotShadows=C,V.numSpotMaps=Y,V.numLightProbes=I,r.version=dM++)}function p(m,_){let y=0,x=0,S=0,T=0,R=0;const v=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[y];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),y++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),S++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),c.identity(),u.copy(L.matrixWorld),u.premultiply(v),c.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(v),R++}}}return{setup:d,setupView:p,state:r}}function Xm(s){const e=new pM(s),t=[],r=[];function a(_){m.camera=_,t.length=0,r.length=0}function u(_){t.push(_)}function c(_){r.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function mM(s){let e=new WeakMap;function t(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Xm(s),e.set(a,[d])):u>=c.length?(d=new Xm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class gM extends Bl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Bl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(s,e,t){let r=new ud;const a=new St,u=new St,c=new Bt,d=new gM({depthPacking:f0}),p=new _M,m={},_=t.maxTextureSize,y={[Ar]:Pn,[Pn]:Ar,[Hi]:Hi},x=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yi(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let g=this.type;this.render=function(O,I,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Mr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const te=g!==Vi&&this.type===Vi,fe=g===Vi&&this.type!==Vi;for(let he=0,oe=O.length;he<oe;he++){const le=O[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||te===!0||fe===!0){const N=this.type!==Vi?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new ts(a.x,a.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);c.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),se.viewport(c),B.updateMatrices(le,N),r=B.getFrustum(),C(I,V,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&D(B,V),B.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(P,w,k)};function D(O,I){const V=e.update(R);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ts(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(I,null,V,x,R,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(I,null,V,S,R,null)}function L(O,I,V,P){let w=null;const k=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)w=k;else if(w=V.isPointLight===!0?p:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const se=w.uuid,te=I.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let he=fe[te];he===void 0&&(he=w.clone(),fe[te]=he,I.addEventListener("dispose",Y)),w=he}if(w.visible=I.visible,w.wireframe=I.wireframe,P===Vi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:y[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=s.properties.get(w);se.light=V}return w}function C(O,I,V,P,w){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Vi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const te=e.update(O),fe=O.material;if(Array.isArray(fe)){const he=te.groups;for(let oe=0,le=he.length;oe<le;oe++){const B=he[oe],ae=fe[B.materialIndex];if(ae&&ae.visible){const re=L(O,ae,P,w);O.onBeforeShadow(s,O,I,V,te,re,B),s.renderBufferDirect(V,null,te,re,O,B),O.onAfterShadow(s,O,I,V,te,re,B)}}}else if(fe.visible){const he=L(O,fe,P,w);O.onBeforeShadow(s,O,I,V,te,he,null),s.renderBufferDirect(V,null,te,he,O,null),O.onAfterShadow(s,O,I,V,te,he,null)}}const se=O.children;for(let te=0,fe=se.length;te<fe;te++)C(se[te],I,V,P,w)}function Y(O){O.target.removeEventListener("dispose",Y);for(const V in m){const P=m[V],w=O.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const SM={[cf]:ff,[df]:mf,[hf]:gf,[Ws]:pf,[ff]:cf,[mf]:df,[gf]:hf,[pf]:Ws};function EM(s,e){function t(){let H=!1;const Re=new Bt;let ie=null;const de=new Bt(0,0,0,0);return{setMask:function(be){ie!==be&&!H&&(s.colorMask(be,be,be,be),ie=be)},setLocked:function(be){H=be},setClear:function(be,Pe,it,Dt,Xt){Xt===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Re.set(be,Pe,it,Dt),de.equals(Re)===!1&&(s.clearColor(be,Pe,it,Dt),de.copy(Re))},reset:function(){H=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Re!==Pe){const it=e.get("EXT_clip_control");Re?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!H&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Re&&(Pe=SM[Pe]),de!==Pe){switch(Pe){case cf:s.depthFunc(s.NEVER);break;case ff:s.depthFunc(s.ALWAYS);break;case df:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){be!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){H=!1,ie=null,de=null,be=null,Re=!1}}}function a(){let H=!1,Re=null,ie=null,de=null,be=null,Pe=null,it=null,Dt=null,Xt=null;return{setTest:function(gt){H||(gt?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!H&&(s.stencilMask(gt),Re=gt)},setFunc:function(gt,xn,pn){(ie!==gt||de!==xn||be!==pn)&&(s.stencilFunc(gt,xn,pn),ie=gt,de=xn,be=pn)},setOp:function(gt,xn,pn){(Pe!==gt||it!==xn||Dt!==pn)&&(s.stencilOp(gt,xn,pn),Pe=gt,it=xn,Dt=pn)},setLocked:function(gt){H=gt},setClear:function(gt){Xt!==gt&&(s.clearStencil(gt),Xt=gt)},reset:function(){H=!1,Re=null,ie=null,de=null,be=null,Pe=null,it=null,Dt=null,Xt=null}}}const u=new t,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},y={},x=new WeakMap,S=[],T=null,R=!1,v=null,g=null,D=null,L=null,C=null,Y=null,O=null,I=new At(0,0,0),V=0,P=!1,w=null,k=null,se=null,te=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ae=null,re={};const N=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new Bt().fromArray(N),K=new Bt().fromArray(ne);function ue(H,Re,ie,de){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(H,Pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ie;it++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Re+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),c.setFunc(Ws),ft(!1),lt($p),ve(s.CULL_FACE),X(Mr);function ve(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ue(H,Re){return y[H]!==Re?(s.bindFramebuffer(H,Re),y[H]=Re,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(H,Re){let ie=S,de=!1;if(H){ie=x.get(Re),ie===void 0&&(ie=[],x.set(Re,ie));const be=H.textures;if(ie.length!==be.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function Rt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const dt={[Kr]:s.FUNC_ADD,[Ov]:s.FUNC_SUBTRACT,[kv]:s.FUNC_REVERSE_SUBTRACT};dt[Bv]=s.MIN,dt[zv]=s.MAX;const bt={[Vv]:s.ZERO,[Hv]:s.ONE,[Gv]:s.SRC_COLOR,[lf]:s.SRC_ALPHA,[$v]:s.SRC_ALPHA_SATURATE,[Yv]:s.DST_COLOR,[Xv]:s.DST_ALPHA,[Wv]:s.ONE_MINUS_SRC_COLOR,[uf]:s.ONE_MINUS_SRC_ALPHA,[jv]:s.ONE_MINUS_DST_COLOR,[qv]:s.ONE_MINUS_DST_ALPHA,[Kv]:s.CONSTANT_COLOR,[Zv]:s.ONE_MINUS_CONSTANT_COLOR,[Qv]:s.CONSTANT_ALPHA,[Jv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Re,ie,de,be,Pe,it,Dt,Xt,gt){if(H===Mr){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(ve(s.BLEND),R=!0),H!==Fv){if(H!==v||gt!==P){if((g!==Kr||C!==Kr)&&(s.blendEquation(s.FUNC_ADD),g=Kr,C=Kr),gt)switch(H){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kp:s.blendFunc(s.ONE,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,L=null,Y=null,O=null,I.set(0,0,0),V=0,v=H,P=gt}return}be=be||Re,Pe=Pe||ie,it=it||de,(Re!==g||be!==C)&&(s.blendEquationSeparate(dt[Re],dt[be]),g=Re,C=be),(ie!==D||de!==L||Pe!==Y||it!==O)&&(s.blendFuncSeparate(bt[ie],bt[de],bt[Pe],bt[it]),D=ie,L=de,Y=Pe,O=it),(Dt.equals(I)===!1||Xt!==V)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Xt),I.copy(Dt),V=Xt),v=H,P=!1}function hn(H,Re){H.side===Hi?we(s.CULL_FACE):ve(s.CULL_FACE);let ie=H.side===Pn;Re&&(ie=!ie),ft(ie),H.blending===Vs&&H.transparent===!1?X(Mr):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),u.setMask(H.colorWrite);const de=H.stencilWrite;d.setTest(de),de&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){w!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),w=H)}function lt(H){H!==Uv?(ve(s.CULL_FACE),H!==k&&(H===$p?s.cullFace(s.BACK):H===Nv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=H}function Ye(H){H!==se&&(oe&&s.lineWidth(H),se=H)}function Tt(H,Re,ie){H?(ve(s.POLYGON_OFFSET_FILL),(te!==Re||fe!==ie)&&(s.polygonOffset(Re,ie),te=Re,fe=ie)):we(s.POLYGON_OFFSET_FILL)}function qe(H){H?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+he-1),ae!==H&&(s.activeTexture(H),ae=H)}function M(H,Re,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==H||de.texture!==Re)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(H,Re||Ee[H]),de.type=H,de.texture=Re)}function $(){const H=re[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(H){De.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function Oe(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function ut(H,Re){let ie=m.get(Re);ie===void 0&&(ie=new WeakMap,m.set(Re,ie));let de=ie.get(H);de===void 0&&(de=s.getUniformBlockIndex(Re,H.name),ie.set(H,de))}function nt(H,Re){const de=m.get(Re).get(H);p.get(Re)!==de&&(s.uniformBlockBinding(Re,de,H.__bindingPointIndex),p.set(Re,de))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,re={},y={},x=new WeakMap,S=[],T=null,R=!1,v=null,g=null,D=null,L=null,C=null,Y=null,O=null,I=new At(0,0,0),V=0,P=!1,w=null,k=null,se=null,te=null,fe=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ve,disable:we,bindFramebuffer:Ue,drawBuffers:Ke,useProgram:Rt,setBlending:X,setMaterial:hn,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:b,bindTexture:M,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Ze,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ne,scissor:Qe,viewport:Oe,reset:Mt}}function qm(s,e,t,r){const a=MM(r);switch(t){case og:return s*e;case lg:return s*e;case ug:return s*e*2;case cg:return s*e/a.components*a.byteLength;case sd:return s*e/a.components*a.byteLength;case fg:return s*e*2/a.components*a.byteLength;case od:return s*e*2/a.components*a.byteLength;case ag:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case ad:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Tf:return Math.max(s,16)*Math.max(e,8)/4;case Sf:case Mf:return Math.max(s,8)*Math.max(e,8)/2;case wf:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dg:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MM(s){switch(s){case qi:case ig:return{byteLength:1,components:1};case Ho:case rg:case Go:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case es:case nd:case Gi:return{byteLength:4,components:1};case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function TM(s,e,t,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,M){return S?new OffscreenCanvas(b,M):Fl("canvas")}function R(b,M,$){let pe=1;const ge=qe(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);y===void 0&&(y=T(ce,Ve));const Ae=M?T(ce,Ve):y;return Ae.width=ce,Ae.height=Ve,Ae.getContext("2d").drawImage(b,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function v(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,M,$,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=M;if(M===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),M===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RG8UI),$===s.UNSIGNED_SHORT&&(ce=s.RG16UI),$===s.UNSIGNED_INT&&(ce=s.RG32UI),$===s.BYTE&&(ce=s.RG8I),$===s.SHORT&&(ce=s.RG16I),$===s.INT&&(ce=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),$===s.UNSIGNED_INT&&(ce=s.RGB32UI),$===s.BYTE&&(ce=s.RGB8I),$===s.SHORT&&(ce=s.RGB16I),$===s.INT&&(ce=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),$===s.UNSIGNED_INT&&(ce=s.RGBA32UI),$===s.BYTE&&(ce=s.RGBA8I),$===s.SHORT&&(ce=s.RGBA16I),$===s.INT&&(ce=s.RGBA32I)),M===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),M===s.RGBA){const Ve=ge?kl:vt.getTransfer(pe);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=Ve===Ct?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(b,M){let $;return b?M===null||M===es||M===Ys?$=s.DEPTH24_STENCIL8:M===Gi?$=s.DEPTH32F_STENCIL8:M===Ho&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===es||M===Ys?$=s.DEPTH_COMPONENT24:M===Gi?$=s.DEPTH_COMPONENT32F:M===Ho&&($=s.DEPTH_COMPONENT16),$}function Y(b,M){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==xi?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function O(b){const M=b.target;M.removeEventListener("dispose",O),V(M),M.isVideoTexture&&_.delete(M)}function I(b){const M=b.target;M.removeEventListener("dispose",I),w(M)}function V(b){const M=r.get(b);if(M.__webglInit===void 0)return;const $=b.source,pe=x.get($);if(pe){const ge=pe[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete($)}r.remove(b)}function P(b){const M=r.get(b);s.deleteTexture(M.__webglTexture);const $=b.source,pe=x.get($);delete pe[M.__cacheKey],c.memory.textures--}function w(b){const M=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ge=0;ge<M.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[pe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove($[pe])}r.remove(b)}let k=0;function se(){k=0}function te(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function fe(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function he(b,M){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,b,M);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function oe(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function le(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function B(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const ae={[xf]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[yf]:s.MIRRORED_REPEAT},re={[ci]:s.NEAREST,[u0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},N={[p0]:s.NEVER,[y0]:s.ALWAYS,[m0]:s.LESS,[hg]:s.LEQUAL,[g0]:s.EQUAL,[x0]:s.GEQUAL,[_0]:s.GREATER,[v0]:s.NOTEQUAL};function ne(b,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xi||M.magFilter===Rc||M.magFilter===el||M.magFilter===Jr||M.minFilter===xi||M.minFilter===Rc||M.minFilter===el||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ci||M.minFilter!==el&&M.minFilter!==Jr||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function De(b,M){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",O));const pe=M.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=fe(M);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ce].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(M)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function K(b,M,$){let pe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=De(b,M),ce=M.source;t.bindTexture(pe,b.__webglTexture,s.TEXTURE0+$);const Ve=r.get(ce);if(ce.version!==Ve.__version||ge===!0){t.activeTexture(s.TEXTURE0+$);const Ae=vt.getPrimaries(vt.workingColorSpace),Ne=M.colorSpace===Er?null:vt.getPrimaries(M.colorSpace),at=M.colorSpace===Er||Ae===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=R(M.image,!1,a.maxTextureSize);ye=Tt(M,ye);const Fe=u.convert(M.format,M.colorSpace),Ze=u.convert(M.type);let Qe=L(M.internalFormat,Fe,Ze,M.colorSpace,M.isVideoTexture);ne(pe,M);let Oe;const ut=M.mipmaps,nt=M.isVideoTexture!==!0,Mt=Ve.__version===void 0||ge===!0,H=ce.dataReady,Re=Y(M,ye);if(M.isDepthTexture)Qe=C(M.format===js,M.type),Mt&&(nt?t.texStorage2D(s.TEXTURE_2D,1,Qe,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Fe,Ze,null));else if(M.isDataTexture)if(ut.length>0){nt&&Mt&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Oe=ut[ie],nt?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):t.texImage2D(s.TEXTURE_2D,ie,Qe,Oe.width,Oe.height,0,Fe,Ze,Oe.data);M.generateMipmaps=!1}else nt?(Mt&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,ye.width,ye.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,Ze,ye.data)):t.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Fe,Ze,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,ut[0].width,ut[0].height,ye.depth);for(let ie=0,de=ut.length;ie<de;ie++)if(Oe=ut[ie],M.format!==ui)if(Fe!==null)if(nt){if(H)if(M.layerUpdates.size>0){const be=qm(Oe.width,Oe.height,M.format,M.type);for(const Pe of M.layerUpdates){const it=Oe.data.subarray(Pe*be/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*be/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,Oe.width,Oe.height,1,Fe,it)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Qe,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Ze,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Qe,Oe.width,Oe.height,ye.depth,0,Fe,Ze,Oe.data)}else{nt&&Mt&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Oe=ut[ie],M.format!==ui?Fe!==null?nt?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):t.texImage2D(s.TEXTURE_2D,ie,Qe,Oe.width,Oe.height,0,Fe,Ze,Oe.data)}else if(M.isDataArrayTexture)if(nt){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,ye.width,ye.height,ye.depth),H)if(M.layerUpdates.size>0){const ie=qm(ye.width,ye.height,M.format,M.type);for(const de of M.layerUpdates){const be=ye.data.subarray(de*ie/ye.data.BYTES_PER_ELEMENT,(de+1)*ie/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Fe,Ze,be)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Ze,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Fe,Ze,ye.data);else if(M.isData3DTexture)nt?(Mt&&t.texStorage3D(s.TEXTURE_3D,Re,Qe,ye.width,ye.height,ye.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Ze,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Fe,Ze,ye.data);else if(M.isFramebufferTexture){if(Mt)if(nt)t.texStorage2D(s.TEXTURE_2D,Re,Qe,ye.width,ye.height);else{let ie=ye.width,de=ye.height;for(let be=0;be<Re;be++)t.texImage2D(s.TEXTURE_2D,be,Qe,ie,de,0,Fe,Ze,null),ie>>=1,de>>=1}}else if(ut.length>0){if(nt&&Mt){const ie=qe(ut[0]);t.texStorage2D(s.TEXTURE_2D,Re,Qe,ie.width,ie.height)}for(let ie=0,de=ut.length;ie<de;ie++)Oe=ut[ie],nt?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Fe,Ze,Oe):t.texImage2D(s.TEXTURE_2D,ie,Qe,Fe,Ze,Oe);M.generateMipmaps=!1}else if(nt){if(Mt){const ie=qe(ye);t.texStorage2D(s.TEXTURE_2D,Re,Qe,ie.width,ie.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Ze,ye)}else t.texImage2D(s.TEXTURE_2D,0,Qe,Fe,Ze,ye);v(M)&&g(pe),Ve.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ue(b,M,$){if(M.image.length!==6)return;const pe=De(b,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){t.activeTexture(s.TEXTURE0+$);const Ve=vt.getPrimaries(vt.workingColorSpace),Ae=M.colorSpace===Er?null:vt.getPrimaries(M.colorSpace),Ne=M.colorSpace===Er||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!at&&!ye?Fe[de]=R(M.image[de],!0,a.maxCubemapSize):Fe[de]=ye?M.image[de].image:M.image[de],Fe[de]=Tt(M,Fe[de]);const Ze=Fe[0],Qe=u.convert(M.format,M.colorSpace),Oe=u.convert(M.type),ut=L(M.internalFormat,Qe,Oe,M.colorSpace),nt=M.isVideoTexture!==!0,Mt=ce.__version===void 0||pe===!0,H=ge.dataReady;let Re=Y(M,Ze);ne(s.TEXTURE_CUBE_MAP,M);let ie;if(at){nt&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,Ze.width,Ze.height);for(let de=0;de<6;de++){ie=Fe[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];M.format!==ui?Qe!==null?nt?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Oe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Qe,Oe,Pe.data)}}}else{if(ie=M.mipmaps,nt&&Mt){ie.length>0&&Re++;const de=qe(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,Qe,Oe,Fe[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Fe[de].width,Fe[de].height,0,Qe,Oe,Fe[de].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[de].image;nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,Oe,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,it.width,it.height,0,Qe,Oe,it.data)}}else{nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,Oe,Fe[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Qe,Oe,Fe[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,Oe,Pe.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,Qe,Oe,Pe.image[de])}}}v(M)&&g(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ee(b,M,$,pe,ge,ce){const Ve=u.convert($.format,$.colorSpace),Ae=u.convert($.type),Ne=L($.internalFormat,Ve,Ae,$.colorSpace),at=r.get(M),ye=r.get($);if(ye.__renderTarget=M,!at.__hasExternalTextures){const Fe=Math.max(1,M.width>>ce),Ze=Math.max(1,M.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Ne,Fe,Ze,M.depth,0,Ve,Ae,null):t.texImage2D(ge,ce,Ne,Fe,Ze,0,Ve,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),lt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ft(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const pe=M.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(M.stencilBuffer,ge),Ve=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ft(M);lt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ce,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const pe=M.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=u.convert(ce.format,ce.colorSpace),Ae=u.convert(ce.type),Ne=L(ce.internalFormat,Ve,Ae,ce.colorSpace),at=ft(M);$&&lt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ne,M.width,M.height):lt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Ne,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he(M.depthTexture,0);const ge=pe.__webglTexture,ce=ft(M);if(M.depthTexture.format===Hs)lt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(M.depthTexture.format===js)lt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const M=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=pe}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,b)}else if($){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(M.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ve(M.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(b,M,$){const pe=r.get(b);M!==void 0&&Ee(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ue(b)}function Rt(b){const M=b.texture,$=r.get(b),pe=r.get(M);b.addEventListener("dispose",I);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=M.version,c.memory.textures++),ce){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)$.__webglFramebuffer[Ae][Ne]=s.createFramebuffer()}else $.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const at=r.get(ge[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&lt(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ne=ge[Ae];$.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const at=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),Fe=L(Ne.internalFormat,at,ye,Ne.colorSpace,b.isXRRenderTarget===!0),Ze=ft(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,M);for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)Ee($.__webglFramebuffer[Ae][Ne],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne);else Ee($.__webglFramebuffer[Ae],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const at=ge[Ae],ye=r.get(at);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ne(s.TEXTURE_2D,at),Ee($.__webglFramebuffer,b,at,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),v(at)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)Ee($.__webglFramebuffer[Ne],b,M,s.COLOR_ATTACHMENT0,Ae,Ne);else Ee($.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,Ae,0);v(M)&&g(Ae),t.unbindTexture()}b.depthBuffer&&Ue(b)}function dt(b){const M=b.textures;for(let $=0,pe=M.length;$<pe;$++){const ge=M[$];if(v(ge)){const ce=D(b),Ve=r.get(ge).__webglTexture;t.bindTexture(ce,Ve),g(ce),t.unbindTexture()}}}const bt=[],X=[];function hn(b){if(b.samples>0){if(lt(b)===!1){const M=b.textures,$=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),Ae=M.length>1;if(Ae)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(M[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,s.NEAREST),p===!0&&(bt.length=0,X.length=0,bt.push(s.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(ce),X.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(M[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ft(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const M=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(b){const M=c.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function Tt(b,M){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Ks&&$!==Er&&(vt.getTransfer($)===Ct?(pe!==ui||ge!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=lt}function wM(s,e){function t(r,a=Er){let u;const c=vt.getTransfer(a);if(r===qi)return s.UNSIGNED_BYTE;if(r===id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ig)return s.BYTE;if(r===rg)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===nd)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===og)return s.ALPHA;if(r===ag)return s.RGB;if(r===ui)return s.RGBA;if(r===lg)return s.LUMINANCE;if(r===ug)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===cg)return s.RED;if(r===sd)return s.RED_INTEGER;if(r===fg)return s.RG;if(r===od)return s.RG_INTEGER;if(r===ad)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Rl)if(c===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sf||r===Ef||r===Mf||r===Tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Sf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wf||r===Af||r===Rf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===wf||r===Af)return c===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===Nf||r===If||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Cf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===If)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Hf||r===Gf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Cl)return c===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dg||r===Wf||r===Xf||r===qf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class AM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),g=this._getHandJoint(m,R);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new bn,u=e.properties.get(a);u.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ji({vertexShader:CM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LM extends Zs{constructor(e,t){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,T=null;const R=new bM,v=t.getContextAttributes();let g=null,D=null;const L=[],C=[],Y=new St;let O=null;const I=new jn;I.viewport=new Bt;const V=new jn;V.viewport=new Bt;const P=[I,V],w=new AM;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=L[K];return ue===void 0&&(ue=new nf,L[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=L[K];return ue===void 0&&(ue=new nf,L[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=L[K];return ue===void 0&&(ue=new nf,L[K]=ue),ue.getHandSpace()};function te(K){const ue=C.indexOf(K.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,m||c),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<L.length;K++){const ue=C[K];ue!==null&&(C[K]=null,L[K].disconnect(ue))}k=null,se=null,R.reset(),e.setRenderTarget(g),S=null,x=null,y=null,a=null,D=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ts(S.framebufferWidth,S.framebufferHeight,{format:ui,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,Ee=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?js:Hs,Ee=v.stencil?Ys:es);const we={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:u};y=new XRWebGLBinding(a,t),x=y.createProjectionLayer(we),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ts(x.textureWidth,x.textureHeight,{format:ui,type:qi,depthTexture:new Rg(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(K){for(let ue=0;ue<K.removed.length;ue++){const Ee=K.removed[ue],ve=C.indexOf(Ee);ve>=0&&(C[ve]=null,L[ve].disconnect(Ee))}for(let ue=0;ue<K.added.length;ue++){const Ee=K.added[ue];let ve=C.indexOf(Ee);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=C.length){C.push(Ee),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Ee,ve=Ue;break}if(ve===-1)break}const we=L[ve];we&&we.connect(Ee)}}const oe=new Z,le=new Z;function B(K,ue,Ee){oe.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const ve=oe.distanceTo(le),we=ue.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Ke=we[14]/(we[10]-1),Rt=we[14]/(we[10]+1),dt=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],X=(we[8]-1)/we[0],hn=(Ue[8]+1)/Ue[0],ft=Ke*X,lt=Ke*hn,Ye=ve/(-X+hn),Tt=Ye*-X;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const qe=Ke+Ye,b=Rt+Ye,M=ft-Tt,$=lt+(ve-Tt),pe=dt*Rt/b*qe,ge=bt*Rt/b*qe;K.projectionMatrix.makePerspective(M,$,pe,ge,qe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Ee=K.far;R.texture!==null&&(R.depthNear>0&&(ue=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),w.near=V.near=I.near=ue,w.far=V.far=I.far=Ee,(k!==w.near||se!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,se=w.far),I.layers.mask=K.layers.mask|2,V.layers.mask=K.layers.mask|4,w.layers.mask=I.layers.mask|V.layers.mask;const ve=K.parent,we=w.cameras;ae(w,ve);for(let Ue=0;Ue<we.length;Ue++)ae(we[Ue],ve);we.length===2?B(w,I,V):w.projectionMatrix.copy(I.projectionMatrix),re(K,w,ve)};function re(K,ue,Ee){Ee===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let N=null;function ne(K,ue){if(_=ue.getViewerPose(m||c),T=ue,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Ke=Ee[Ue];let Rt=null;if(S!==null)Rt=S.getViewport(Ke);else{const bt=y.getViewSubImage(x,Ke);Rt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(D,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(D))}let dt=P[Ue];dt===void 0&&(dt=new jn,dt.layers.enable(Ue),dt.viewport=new Bt,P[Ue]=dt),dt.matrix.fromArray(Ke.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ke.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(w.matrix.copy(dt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(dt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=y.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&R.init(e,Ue,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const ve=C[Ee],we=L[Ee];ve!==null&&we!==void 0&&we.update(ve,ue,m||c)}N&&N(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const De=new wg;De.setAnimationLoop(ne),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}}const Yr=new Yi,DM=new zt;function UM(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Eg(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,D,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),y(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,C)):g.isMeshMatcapMaterial?(u(v,g),T(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),R(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(c(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,D,L):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Pn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Pn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,C=D.envMapRotation;L&&(v.envMap.value=L,Yr.copy(C),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Yr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function c(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,D,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*D,v.scale.value=L*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,D){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function R(v,g){const D=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function NM(s,e,t,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const C=L.program;r.uniformBlockBinding(D,C)}function m(D,L){let C=a[D.id];C===void 0&&(T(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",v));const Y=L.program;r.updateUBOMapping(D,Y);const O=e.render.frame;u[D.id]!==O&&(x(D),u[D.id]=O)}function _(D){const L=y();D.__bindingPointIndex=L;const C=s.createBuffer(),Y=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,Y,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function y(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],C=D.uniforms,Y=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,I=C.length;O<I;O++){const V=Array.isArray(C[O])?C[O]:[C[O]];for(let P=0,w=V.length;P<w;P++){const k=V[P];if(S(k,O,P,Y)===!0){const se=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let he=0;he<te.length;he++){const oe=te[he],le=R(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,se+fe,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,L,C,Y){const O=D.value,I=L+"_"+C;if(Y[I]===void 0)return typeof O=="number"||typeof O=="boolean"?Y[I]=O:Y[I]=O.clone(),!0;{const V=Y[I];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return Y[I]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function T(D){const L=D.uniforms;let C=0;const Y=16;for(let I=0,V=L.length;I<V;I++){const P=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,k=P.length;w<k;w++){const se=P[w],te=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,he=te.length;fe<he;fe++){const oe=te[fe],le=R(oe),B=C%Y,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&Y-re<le.storage&&(C+=Y-re),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=le.storage}}}const O=C%Y;return O>0&&(C+=Y-O),D.__size=C,D.__cache={},this}function R(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function v(D){const L=D.target;L.removeEventListener("dispose",v);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},u={}}return{bind:p,update:m,dispose:g}}class IM{constructor(e={}){const{canvas:t=E0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),R=new Int32Array(4);let v=null,g=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=Tr,this.toneMappingExposure=1;const C=this;let Y=!1,O=0,I=0,V=null,P=-1,w=null;const k=new Bt,se=new Bt;let te=null;const fe=new At(0);let he=0,oe=t.width,le=t.height,B=1,ae=null,re=null;const N=new Bt(0,0,oe,le),ne=new Bt(0,0,oe,le);let De=!1;const K=new ud;let ue=!1,Ee=!1;const ve=new zt,we=new zt,Ue=new Z,Ke=new Bt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function bt(){return V===null?B:1}let X=r;function hn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${td}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const G="webgl2";if(X=hn(G,A),X===null)throw hn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,lt,Ye,Tt,qe,b,M,$,pe,ge,ce,Ve,Ae,Ne,at,ye,Fe,Ze,Qe,Oe,ut,nt,Mt,H;function Re(){ft=new zS(X),ft.init(),nt=new wM(X,ft),lt=new NS(X,ft,e,nt),Ye=new EM(X,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new GS(X),qe=new aM,b=new TM(X,ft,Ye,qe,lt,nt,Tt),M=new FS(C),$=new BS(C),pe=new K0(X),Mt=new DS(X,pe),ge=new VS(X,pe,Tt,Mt),ce=new XS(X,ge,pe,Tt),Qe=new WS(X,lt,b),ye=new IS(qe),Ve=new oM(C,M,$,ft,lt,Mt,ye),Ae=new UM(C,qe),Ne=new uM,at=new mM(ft),Ze=new LS(C,M,$,Ye,ce,S,p),Fe=new yM(C,ce,lt),H=new NM(X,Tt,lt,Ye),Oe=new US(X,ft,Tt),ut=new HS(X,ft,Tt),Tt.programs=Ve.programs,C.capabilities=lt,C.extensions=ft,C.properties=qe,C.renderLists=Ne,C.shadowMap=Fe,C.state=Ye,C.info=Tt}Re();const ie=new LM(C,X);this.xr=ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(oe,le,!1))},this.getSize=function(A){return A.set(oe,le)},this.setSize=function(A,G,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,le=G,t.width=Math.floor(A*B),t.height=Math.floor(G*B),J===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(A,G,J){oe=A,le=G,B=J,t.width=Math.floor(A*J),t.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,G,J,ee){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,G,J,ee),Ye.viewport(k.copy(N).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,G,J,ee){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,G,J,ee),Ye.scissor(se.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){Ye.setScissorTest(De=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,G=!0,J=!0){let ee=0;if(A){let W=!1;if(V!==null){const Te=V.texture.format;W=Te===ad||Te===od||Te===sd}if(W){const Te=V.texture.type,Se=Te===qi||Te===es||Te===Ho||Te===Ys||Te===id||Te===rd,He=Ze.getClearColor(),Be=Ze.getClearAlpha(),Je=He.r,tt=He.g,Ge=He.b;Se?(T[0]=Je,T[1]=tt,T[2]=Ge,T[3]=Be,X.clearBufferuiv(X.COLOR,0,T)):(R[0]=Je,R[1]=tt,R[2]=Ge,R[3]=Be,X.clearBufferiv(X.COLOR,0,R))}else ee|=X.COLOR_BUFFER_BIT}G&&(ee|=X.DEPTH_BUFFER_BIT),J&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ne.dispose(),at.dispose(),qe.dispose(),M.dispose(),$.dispose(),ce.dispose(),Mt.dispose(),H.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ns),ie.removeEventListener("sessionend",$i),wi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=Tt.autoReset,G=Fe.enabled,J=Fe.autoUpdate,ee=Fe.needsUpdate,W=Fe.type;Re(),Tt.autoReset=A,Fe.enabled=G,Fe.autoUpdate=J,Fe.needsUpdate=ee,Fe.type=W}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const G=A.target;G.removeEventListener("dispose",it),Dt(G)}function Dt(A){Xt(A),qe.remove(A)}function Xt(A){const G=qe.get(A).programs;G!==void 0&&(G.forEach(function(J){Ve.releaseProgram(J)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,ee,W,Te){G===null&&(G=Rt);const Se=W.isMesh&&W.matrixWorld.determinant()<0,He=Ko(A,G,J,ee,W);Ye.setMaterial(ee,Se);let Be=J.index,Je=1;if(ee.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;Je=2}const tt=J.drawRange,Ge=J.attributes.position;let pt=tt.start*Je,Et=(tt.start+tt.count)*Je;Te!==null&&(pt=Math.max(pt,Te.start*Je),Et=Math.min(Et,(Te.start+Te.count)*Je)),Be!==null?(pt=Math.max(pt,0),Et=Math.min(Et,Be.count)):Ge!=null&&(pt=Math.max(pt,0),Et=Math.min(Et,Ge.count));const ht=Et-pt;if(ht<0||ht===1/0)return;Mt.setup(W,ee,He,J,Be);let rn,rt=Oe;if(Be!==null&&(rn=pe.get(Be),rt=ut,rt.setIndex(rn)),W.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*bt()),rt.setMode(X.LINES)):rt.setMode(X.TRIANGLES);else if(W.isLine){let Xe=ee.linewidth;Xe===void 0&&(Xe=1),Ye.setLineWidth(Xe*bt()),W.isLineSegments?rt.setMode(X.LINES):W.isLineLoop?rt.setMode(X.LINE_LOOP):rt.setMode(X.LINE_STRIP)}else W.isPoints?rt.setMode(X.POINTS):W.isSprite&&rt.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)rt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,Kn=W._multiDrawCounts,xt=W._multiDrawCount,sn=Be?pe.get(Be).bytesPerElement:1,Zn=qe.get(ee).currentProgram.getUniforms();for(let qt=0;qt<xt;qt++)Zn.setValue(X,"_gl_DrawID",qt),rt.render(Xe[qt]/sn,Kn[qt])}else if(W.isInstancedMesh)rt.renderInstances(pt,ht,W.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Kn=Math.min(J.instanceCount,Xe);rt.renderInstances(pt,ht,Kn)}else rt.render(pt,ht)};function gt(A,G,J){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,is(A,G,J),A.side=Ar,A.needsUpdate=!0,is(A,G,J),A.side=Hi):is(A,G,J)}this.compile=function(A,G,J=null){J===null&&(J=A),g=at.get(J),g.init(G),L.push(g),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==J&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ee=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const He=Te[Se];gt(He,J,W),ee.add(He)}else gt(Te,J,W),ee.add(Te)}),L.pop(),g=null,ee},this.compileAsync=function(A,G,J=null){const ee=this.compile(A,G,J);return new Promise(W=>{function Te(){if(ee.forEach(function(Se){qe.get(Se).currentProgram.isReady()&&ee.delete(Se)}),ee.size===0){W(A);return}setTimeout(Te,10)}ft.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xn=null;function pn(A){xn&&xn(A)}function ns(){wi.stop()}function $i(){wi.start()}const wi=new wg;wi.setAnimationLoop(pn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){xn=A,ie.setAnimationLoop(A),A===null?wi.stop():wi.start()},ie.addEventListener("sessionstart",ns),ie.addEventListener("sessionend",$i),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,G,V),g=at.get(A,L.length),g.init(G),L.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Ee),v=Ne.get(A,D.length),v.init(),D.push(v),ie.enabled===!0&&ie.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&Ai(Te,G,-1/0,C.sortObjects)}Ai(A,G,0,C.sortObjects),v.finish(),C.sortObjects===!0&&v.sort(ae,re),dt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,dt&&Ze.addToRenderList(v,A),this.info.render.frame++,ue===!0&&ye.beginShadows();const J=g.state.shadowsArray;Fe.render(J,A,G),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=v.opaque,W=v.transmissive;if(g.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Se=0,He=Te.length;Se<He;Se++){const Be=Te[Se];Pr(ee,W,A,Be)}dt&&Ze.render(A);for(let Se=0,He=Te.length;Se<He;Se++){const Be=Te[Se];Cr(v,A,Be,Be.viewport)}}else W.length>0&&Pr(ee,W,A,G),dt&&Ze.render(A),Cr(v,A,G);V!==null&&(b.updateMultisampleRenderTarget(V),b.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(C,A,G),Mt.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],ue===!0&&ye.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?v=D[D.length-1]:v=null};function Ai(A,G,J,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ee&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Se=ce.update(A),He=A.material;He.visible&&v.push(A,Se,He,J,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Se=ce.update(A),He=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ke.copy(Se.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(He)){const Be=Se.groups;for(let Je=0,tt=Be.length;Je<tt;Je++){const Ge=Be[Je],pt=He[Ge.materialIndex];pt&&pt.visible&&v.push(A,Se,pt,J,Ke.z,Ge)}}else He.visible&&v.push(A,Se,He,J,Ke.z,null)}}const Te=A.children;for(let Se=0,He=Te.length;Se<He;Se++)Ai(Te[Se],G,J,ee)}function Cr(A,G,J,ee){const W=A.opaque,Te=A.transmissive,Se=A.transparent;g.setupLightsView(J),ue===!0&&ye.setGlobalState(C.clippingPlanes,J),ee&&Ye.viewport(k.copy(ee)),W.length>0&&Ki(W,G,J),Te.length>0&&Ki(Te,G,J),Se.length>0&&Ki(Se,G,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Pr(A,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new ts(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Go:qi,minFilter:Jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[ee.id],Se=ee.viewport||k;Te.setSize(Se.z,Se.w);const He=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(fe),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),dt&&Ze.render(J);const Be=C.toneMapping;C.toneMapping=Tr;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),ue===!0&&ye.setGlobalState(C.clippingPlanes,ee),Ki(A,J,ee),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),ft.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,pt=G.length;Ge<pt;Ge++){const Et=G[Ge],ht=Et.object,rn=Et.geometry,rt=Et.material,Xe=Et.group;if(rt.side===Hi&&ht.layers.test(ee.layers)){const Kn=rt.side;rt.side=Pn,rt.needsUpdate=!0,jo(ht,J,ee,rn,rt,Xe),rt.side=Kn,rt.needsUpdate=!0,tt=!0}}tt===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}C.setRenderTarget(He),C.setClearColor(fe,he),Je!==void 0&&(ee.viewport=Je),C.toneMapping=Be}function Ki(A,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=A.length;W<Te;W++){const Se=A[W],He=Se.object,Be=Se.geometry,Je=ee===null?Se.material:ee,tt=Se.group;He.layers.test(J.layers)&&jo(He,G,J,Be,Je,tt)}}function jo(A,G,J,ee,W,Te){A.onBeforeRender(C,G,J,ee,W,Te),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,G,J,ee,A,Te),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,C.renderBufferDirect(J,G,ee,W,A,Te),W.side=Ar,W.needsUpdate=!0,C.renderBufferDirect(J,G,ee,W,A,Te),W.side=Hi):C.renderBufferDirect(J,G,ee,W,A,Te),A.onAfterRender(C,G,J,ee,W,Te)}function is(A,G,J){G.isScene!==!0&&(G=Rt);const ee=qe.get(A),W=g.state.lights,Te=g.state.shadowsArray,Se=W.state.version,He=Ve.getParameters(A,W.state,Te,G,J),Be=Ve.getProgramCacheKey(He);let Je=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?$:M).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",it),Je=new Map,ee.programs=Je);let tt=Je.get(Be);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Se)return fi(A,He),tt}else He.uniforms=Ve.getUniforms(A),A.onBeforeCompile(He,C),tt=Ve.acquireProgram(He,Be),Je.set(Be,tt),ee.uniforms=He.uniforms;const Ge=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),fi(A,He),ee.needsLights=Wl(A),ee.lightsStateVersion=Se,ee.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function $o(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Pl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function fi(A,G){const J=qe.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ko(A,G,J,ee,W){G.isScene!==!0&&(G=Rt),b.resetTextureUnits();const Te=G.fog,Se=ee.isMeshStandardMaterial?G.environment:null,He=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ks,Be=(ee.isMeshStandardMaterial?$:M).get(ee.envMap||Se),Je=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let ht=Tr;ee.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ht=C.toneMapping);const rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rt=rn!==void 0?rn.length:0,Xe=qe.get(ee),Kn=g.state.lights;if(ue===!0&&(Ee===!0||A!==w)){const mn=A===w&&ee.id===P;ye.setState(ee,A,mn)}let xt=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Kn.state.version||Xe.outputColorSpace!==He||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Be||ee.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ye.numPlanes||Xe.numIntersection!==ye.numIntersection)||Xe.vertexAlphas!==Je||Xe.vertexTangents!==tt||Xe.morphTargets!==Ge||Xe.morphNormals!==pt||Xe.morphColors!==Et||Xe.toneMapping!==ht||Xe.morphTargetsCount!==rt)&&(xt=!0):(xt=!0,Xe.__version=ee.version);let sn=Xe.currentProgram;xt===!0&&(sn=is(ee,G,W));let Zn=!1,qt=!1,di=!1;const Pt=sn.getUniforms(),On=Xe.uniforms;if(Ye.useProgram(sn.program)&&(Zn=!0,qt=!0,di=!0),ee.id!==P&&(P=ee.id,qt=!0),Zn||w!==A){Ye.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),T0(ve),w0(ve),Pt.setValue(X,"projectionMatrix",ve)):Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const kn=Pt.map.cameraPosition;kn!==void 0&&kn.setValue(X,Ue.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,qt=!0,di=!0)}if(W.isSkinnedMesh){Pt.setOptional(X,W,"bindMatrix"),Pt.setOptional(X,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(X,"boneTexture",mn.boneTexture,b))}W.isBatchedMesh&&(Pt.setOptional(X,W,"batchingTexture"),Pt.setValue(X,"batchingTexture",W._matricesTexture,b),Pt.setOptional(X,W,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",W._indirectTexture,b),Pt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",W._colorsTexture,b));const Ri=J.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Qe.update(W,J,sn),(qt||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Pt.setValue(X,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(On.envMap.value=Be,On.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(On.envMapIntensity.value=G.environmentIntensity),qt&&(Pt.setValue(X,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&Zo(On,di),Te&&ee.fog===!0&&Ae.refreshFogUniforms(On,Te),Ae.refreshMaterialUniforms(On,ee,B,le,g.state.transmissionRenderTarget[A.id]),Pl.upload(X,$o(Xe),On,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Pl.upload(X,$o(Xe),On,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(X,"center",W.center),Pt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(X,"normalMatrix",W.normalMatrix),Pt.setValue(X,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const mn=ee.uniformsGroups;for(let kn=0,yn=mn.length;kn<yn;kn++){const Qo=mn[kn];H.update(Qo,sn),H.bind(Qo,sn)}}return sn}function Zo(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Wl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,G,J){qe.get(A.texture).__webglTexture=G,qe.get(A.depthTexture).__webglTexture=J;const ee=qe.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const J=qe.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,J=0){V=A,O=G,I=J;let ee=!0,W=null,Te=!1,Se=!1;if(A){const Be=qe.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&qe.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);const tt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[G])?W=tt[G][J]:W=tt[G],Te=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[J]:W=tt,k.copy(A.viewport),se.copy(A.scissor),te=A.scissorTest}else k.copy(N).multiplyScalar(B).floor(),se.copy(ne).multiplyScalar(B).floor(),te=De;if(Ye.bindFramebuffer(X.FRAMEBUFFER,W)&&ee&&Ye.drawBuffers(A,W),Ye.viewport(k),Ye.scissor(se),Ye.setScissorTest(te),Te){const Be=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,J)}else if(Se){const Be=qe.get(A.texture),Je=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,J||0,Je)}P=-1},this.readRenderTargetPixels=function(A,G,J,ee,W,Te,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(He=He[Se]),He){Ye.bindFramebuffer(X.FRAMEBUFFER,He);try{const Be=A.texture,Je=Be.format,tt=Be.type;if(!lt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&J>=0&&J<=A.height-W&&X.readPixels(G,J,ee,W,nt.convert(Je),nt.convert(tt),Te)}finally{const Be=V!==null?qe.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,G,J,ee,W,Te,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(He=He[Se]),He){const Be=A.texture,Je=Be.format,tt=Be.type;if(!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ee&&J>=0&&J<=A.height-W){Ye.bindFramebuffer(X.FRAMEBUFFER,He);const Ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(G,J,ee,W,nt.convert(Je),nt.convert(tt),0);const pt=V!==null?qe.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,pt);const Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await M0(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(Ge),X.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,J=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-J),W=Math.floor(A.image.width*ee),Te=Math.floor(A.image.height*ee),Se=G!==null?G.x:0,He=G!==null?G.y:0;b.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,Se,He,W,Te),Ye.unbindTexture()},this.copyTextureToTexture=function(A,G,J=null,ee=null,W=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,J=null);let Te,Se,He,Be,Je,tt,Ge,pt,Et;const ht=A.isCompressedTexture?A.mipmaps[W]:A.image;J!==null?(Te=J.max.x-J.min.x,Se=J.max.y-J.min.y,He=J.isBox3?J.max.z-J.min.z:1,Be=J.min.x,Je=J.min.y,tt=J.isBox3?J.min.z:0):(Te=ht.width,Se=ht.height,He=ht.depth||1,Be=0,Je=0,tt=0),ee!==null?(Ge=ee.x,pt=ee.y,Et=ee.z):(Ge=0,pt=0,Et=0);const rn=nt.convert(G.format),rt=nt.convert(G.type);let Xe;G.isData3DTexture?(b.setTexture3D(G,0),Xe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Xe=X.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Xe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const Kn=X.getParameter(X.UNPACK_ROW_LENGTH),xt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),sn=X.getParameter(X.UNPACK_SKIP_PIXELS),Zn=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,Je),X.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const di=A.isDataArrayTexture||A.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const On=qe.get(A),Ri=qe.get(G),mn=qe.get(On.__renderTarget),kn=qe.get(Ri.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let yn=0;yn<He;yn++)di&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,tt+yn),A.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(G).__webglTexture,W,Et+yn),X.blitFramebuffer(Be,Je,Te,Se,Ge,pt,Te,Se,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(Xe,W,Ge,pt,Et+yn,Be,Je,Te,Se):X.copyTexSubImage2D(Xe,W,Ge,pt,Et+yn,Be,Je,Te,Se);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Xe,W,Ge,pt,Et,Te,Se,He,rn,rt,ht.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,W,Ge,pt,Et,Te,Se,He,rn,ht.data):X.texSubImage3D(Xe,W,Ge,pt,Et,Te,Se,He,rn,rt,ht):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,Ge,pt,Te,Se,rn,rt,ht.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,Ge,pt,ht.width,ht.height,rn,ht.data):X.texSubImage2D(X.TEXTURE_2D,W,Ge,pt,Te,Se,rn,rt,ht);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,sn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Zn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),W===0&&G.generateMipmaps&&X.generateMipmap(Xe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,G,J=null,ee=null,W=0){return A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,J,ee,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){O=0,I=0,V=null,Ye.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}class FM extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fd extends Rr{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const u=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Ei(u,3)),this.setAttribute("normal",new Ei(u.slice(),3)),this.setAttribute("uv",new Ei(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new Z,C=new Z,Y=new Z;for(let O=0;O<t.length;O+=3)S(t[O+0],L),S(t[O+1],C),S(t[O+2],Y),p(L,C,Y,D)}function p(D,L,C,Y){const O=Y+1,I=[];for(let V=0;V<=O;V++){I[V]=[];const P=D.clone().lerp(C,V/O),w=L.clone().lerp(C,V/O),k=O-V;for(let se=0;se<=k;se++)se===0&&V===O?I[V][se]=P:I[V][se]=P.clone().lerp(w,se/k)}for(let V=0;V<O;V++)for(let P=0;P<2*(O-V)-1;P++){const w=Math.floor(P/2);P%2===0?(x(I[V][w+1]),x(I[V+1][w]),x(I[V][w])):(x(I[V][w+1]),x(I[V+1][w+1]),x(I[V+1][w]))}}function m(D){const L=new Z;for(let C=0;C<u.length;C+=3)L.x=u[C+0],L.y=u[C+1],L.z=u[C+2],L.normalize().multiplyScalar(D),u[C+0]=L.x,u[C+1]=L.y,u[C+2]=L.z}function _(){const D=new Z;for(let L=0;L<u.length;L+=3){D.x=u[L+0],D.y=u[L+1],D.z=u[L+2];const C=v(D)/2/Math.PI+.5,Y=g(D)/Math.PI+.5;c.push(C,1-Y)}T(),y()}function y(){for(let D=0;D<c.length;D+=6){const L=c[D+0],C=c[D+2],Y=c[D+4],O=Math.max(L,C,Y),I=Math.min(L,C,Y);O>.9&&I<.1&&(L<.2&&(c[D+0]+=1),C<.2&&(c[D+2]+=1),Y<.2&&(c[D+4]+=1))}}function x(D){u.push(D.x,D.y,D.z)}function S(D,L){const C=D*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function T(){const D=new Z,L=new Z,C=new Z,Y=new Z,O=new St,I=new St,V=new St;for(let P=0,w=0;P<u.length;P+=9,w+=6){D.set(u[P+0],u[P+1],u[P+2]),L.set(u[P+3],u[P+4],u[P+5]),C.set(u[P+6],u[P+7],u[P+8]),O.set(c[w+0],c[w+1]),I.set(c[w+2],c[w+3]),V.set(c[w+4],c[w+5]),Y.copy(D).add(L).add(C).divideScalar(3);const k=v(Y);R(O,w+0,D,k),R(I,w+2,L,k),R(V,w+4,C,k)}}function R(D,L,C,Y){Y<0&&D.x===1&&(c[L]=D.x-1),C.x===0&&C.z===0&&(c[L]=Y/2/Math.PI+.5)}function v(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.vertices,e.indices,e.radius,e.details)}}class dd extends fd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,u,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dd(e.radius,e.detail)}}class Dg extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const rf=new zt,Ym=new Z,jm=new Z;class OM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jm),t.updateMatrixWorld(),rf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kM extends OM{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BM extends Dg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new kM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zM extends Dg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);const VM=`uniform float uTime;\r
\r
varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vDisplacement;\r
\r
void main() {\r
    gl_FragColor = vec4(vec3(0.15, 1.0, 0.05) * vDisplacement, 1.0);\r
}\r
`,HM=`uniform float uTime;\r
\r
varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vDisplacement;\r
\r
// i have some functions for use on here like perlin noise\r
// fit and ...\r
\r
// you can find them on github (link in description)\r
\r
#define PI 3.1415926535897932384626433832795\r
\r
//* perlin noise\r
//	Classic Perlin 3D Noise \r
//	by Stefan Gustavson (https://github.com/stegu/webgl-noise)\r
//\r
vec4 permute(vec4 x) {\r
    return mod(((x * 34.0) + 1.0) * x, 289.0);\r
}\r
vec4 taylorInvSqrt(vec4 r) {\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
vec3 fade(vec3 t) {\r
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\r
}\r
\r
float pNoise(vec3 P) {\r
    vec3 Pi0 = floor(P); // Integer part for indexing\r
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); // Fractional part for interpolation\r
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;\r
\r
    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);\r
\r
    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\r
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\r
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\r
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\r
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\r
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\r
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\r
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\r
\r
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;\r
\r
    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);\r
\r
    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
    return 2.2 * n_xyz;\r
}\r
\r
/* \r
* SMOOTH MOD\r
* - authored by @charstiles -\r
* based on https://math.stackexchange.com/questions/2491494/does-there-exist-a-smooth-approximation-of-x-bmod-y\r
* (axis) input axis to modify\r
* (amp) amplitude of each edge/tip\r
* (rad) radius of each edge/tip\r
* returns => smooth edges\r
*/\r
\r
float smoothMod(float axis, float amp, float rad) {\r
    float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));\r
    float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);\r
    float at = atan(top / bottom);\r
    return amp * (1.0 / 2.0) - (1.0 / PI) * at;\r
}\r
\r
float fit(float unscaled, float originalMin, float originalMax, float minAllowed, float maxAllowed) {\r
    return (maxAllowed - minAllowed) * (unscaled - originalMin) / (originalMax - originalMin) + minAllowed;\r
}\r
\r
float wave(vec3 position) {\r
    return fit(smoothMod(position.y * 6.0, 1.0, 1.5), 0.35, 0.6, 0.0, 1.0);\r
}\r
\r
void main() {\r
\r
    vec3 coords = normal;\r
    coords.y += uTime;\r
    vec3 noisePattern = vec3(pNoise(coords));\r
    float pattern = wave(noisePattern);\r
\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;\r
    vDisplacement = pattern;\r
\r
    float displacement = vDisplacement / 3.0;\r
    vec3 newPosition = position + normal * displacement;\r
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0);\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
\r
    gl_Position = projectedPosition;\r
}\r
`;function GM(){const s=_i.useRef(null);return _i.useEffect(()=>{const e=s.current,t=new FM,r=new jn(75,window.innerWidth/window.innerHeight,.1,1e3),a=new IM({canvas:e,antialias:!0});a.setSize(window.innerWidth,window.innerHeight);const u=new BM("#ffffff",.75);u.position.set(5,5,5);const c=new zM("#ffffff",.2);t.add(u,c);const d=new dd(.61,80),p=new ji({vertexShader:HM,fragmentShader:VM});p.uniforms.uTime={value:0};const m=new yi(d,p);t.add(m),r.position.z=3;const _=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};let y,x=0;const S=()=>{p.uniforms.uTime.value=x,m.rotation.z-=.005,x+=.002,y=window.requestAnimationFrame(S),a.render(t,r)};return window.addEventListener("resize",_),S(),()=>{window.cancelAnimationFrame(y),window.removeEventListener("resize",_),d.dispose(),p.dispose(),a.dispose()}},[]),qn.jsx("canvas",{ref:s,className:"orb-canvas"})}const Ti=Object.create(null);Ti.open="0";Ti.close="1";Ti.ping="2";Ti.pong="3";Ti.message="4";Ti.upgrade="5";Ti.noop="6";const bl=Object.create(null);Object.keys(Ti).forEach(s=>{bl[Ti[s]]=s});const $f={type:"error",data:"parser error"},Ug=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ng=typeof ArrayBuffer=="function",Ig=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,hd=({type:s,data:e},t,r)=>Ug&&e instanceof Blob?t?r(e):$m(e,r):Ng&&(e instanceof ArrayBuffer||Ig(e))?t?r(e):$m(new Blob([e]),r):r(Ti[s]+(e||"")),$m=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function Km(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let sf;function WM(s,e){if(Ug&&s.data instanceof Blob)return s.data.arrayBuffer().then(Km).then(e);if(Ng&&(s.data instanceof ArrayBuffer||Ig(s.data)))return e(Km(s.data));hd(s,!1,t=>{sf||(sf=new TextEncoder),e(sf.encode(t))})}const Zm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Zm.length;s++)Vo[Zm.charCodeAt(s)]=s;const XM=s=>{let e=s.length*.75,t=s.length,r,a=0,u,c,d,p;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),_=new Uint8Array(m);for(r=0;r<t;r+=4)u=Vo[s.charCodeAt(r)],c=Vo[s.charCodeAt(r+1)],d=Vo[s.charCodeAt(r+2)],p=Vo[s.charCodeAt(r+3)],_[a++]=u<<2|c>>4,_[a++]=(c&15)<<4|d>>2,_[a++]=(d&3)<<6|p&63;return m},qM=typeof ArrayBuffer=="function",pd=(s,e)=>{if(typeof s!="string")return{type:"message",data:Fg(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:YM(s.substring(1),e)}:bl[t]?s.length>1?{type:bl[t],data:s.substring(1)}:{type:bl[t]}:$f},YM=(s,e)=>{if(qM){const t=XM(s);return Fg(t,e)}else return{base64:!0,data:s}},Fg=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},Og="",jM=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((u,c)=>{hd(u,!1,d=>{r[c]=d,++a===t&&e(r.join(Og))})})},$M=(s,e)=>{const t=s.split(Og),r=[];for(let a=0;a<t.length;a++){const u=pd(t[a],e);if(r.push(u),u.type==="error")break}return r};function KM(){return new TransformStream({transform(s,e){WM(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const u=new DataView(a.buffer);u.setUint8(0,126),u.setUint16(1,r)}else{a=new Uint8Array(9);const u=new DataView(a.buffer);u.setUint8(0,127),u.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let of;function El(s){return s.reduce((e,t)=>e+t.length,0)}function Ml(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function ZM(s,e){of||(of=new TextDecoder);const t=[];let r=0,a=-1,u=!1;return new TransformStream({transform(c,d){for(t.push(c);;){if(r===0){if(El(t)<1)break;const p=Ml(t,1);u=(p[0]&128)===128,a=p[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(El(t)<2)break;const p=Ml(t,2);a=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),r=3}else if(r===2){if(El(t)<8)break;const p=Ml(t,8),m=new DataView(p.buffer,p.byteOffset,p.length),_=m.getUint32(0);if(_>Math.pow(2,21)-1){d.enqueue($f);break}a=_*Math.pow(2,32)+m.getUint32(4),r=3}else{if(El(t)<a)break;const p=Ml(t,a);d.enqueue(pd(u?p:of.decode(p),e)),r=0}if(a===0||a>s){d.enqueue($f);break}}}})}const kg=4;function Wt(s){if(s)return QM(s)}function QM(s){for(var e in Wt.prototype)s[e]=Wt.prototype[e];return s}Wt.prototype.on=Wt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};Wt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};Wt.prototype.off=Wt.prototype.removeListener=Wt.prototype.removeAllListeners=Wt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};Wt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};Wt.prototype.emitReserved=Wt.prototype.emit;Wt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};Wt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const Hl=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),$n=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),JM="arraybuffer";function Bg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const eT=$n.setTimeout,tT=$n.clearTimeout;function Gl(s,e){e.useNativeTimers?(s.setTimeoutFn=eT.bind($n),s.clearTimeoutFn=tT.bind($n)):(s.setTimeoutFn=$n.setTimeout.bind($n),s.clearTimeoutFn=$n.clearTimeout.bind($n))}const nT=1.33;function iT(s){return typeof s=="string"?rT(s):Math.ceil((s.byteLength||s.size)*nT)}function rT(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function zg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function sT(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function oT(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let u=t[r].split("=");e[decodeURIComponent(u[0])]=decodeURIComponent(u[1])}return e}class aT extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class md extends Wt{constructor(e){super(),this.writable=!1,Gl(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new aT(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=pd(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=sT(e);return t.length?"?"+t:""}}class lT extends md{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};$M(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,jM(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=zg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Vg=!1;try{Vg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uT=Vg;function cT(){}class fT extends lT{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,u)=>{this.onError("xhr post error",a,u)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class Mi extends Wt{constructor(e,t,r){super(),this.createRequest=e,Gl(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=Bg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=Mi.requestsCount++,Mi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=cT,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Mi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Mi.requestsCount=0;Mi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Qm);else if(typeof addEventListener=="function"){const s="onpagehide"in $n?"pagehide":"unload";addEventListener(s,Qm,!1)}}function Qm(){for(let s in Mi.requests)Mi.requests.hasOwnProperty(s)&&Mi.requests[s].abort()}const dT=(function(){const s=Hg({xdomain:!1});return s&&s.responseType!==null})();class hT extends fT{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=dT&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mi(Hg,this.uri(),e)}}function Hg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||uT))return new XMLHttpRequest}catch{}if(!e)try{return new $n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Gg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class pT extends md{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=Gg?{}:Bg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;hd(r,this.supportsBinary,u=>{try{this.doWrite(r,u)}catch{}a&&Hl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=zg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const af=$n.WebSocket||$n.MozWebSocket;class mT extends pT{createSocket(e,t,r){return Gg?new af(e,t,r):t?new af(e,t):new af(e)}doWrite(e,t){this.ws.send(t)}}class gT extends md{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=ZM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=KM();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const u=()=>{r.read().then(({done:d,value:p})=>{d||(this.onPacket(p),u())}).catch(d=>{})};u();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this._writer.write(c).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&Hl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const _T={websocket:mT,webtransport:gT,polling:hT},vT=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,xT=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Kf(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=vT.exec(s||""),u={},c=14;for(;c--;)u[xT[c]]=a[c]||"";return t!=-1&&r!=-1&&(u.source=e,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=yT(u,u.path),u.queryKey=ST(u,u.query),u}function yT(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function ST(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,u){a&&(t[a]=u)}),t}const Zf=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ll=[];Zf&&addEventListener("offline",()=>{Ll.forEach(s=>s())},!1);class wr extends Wt{constructor(e,t){if(super(),this.binaryType=JM,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=Kf(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Kf(t.host).host);Gl(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(r=>{const a=r.prototype.name;this.transports.push(a),this._transportsByName[a]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=oT(this.opts.query)),Zf&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ll.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=kg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&wr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",wr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=iT(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Hl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const u={type:e,data:t,options:r};this.emitReserved("packetCreate",u),this.writeBuffer.push(u),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(wr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Zf&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Ll.indexOf(this._offlineEventListener);r!==-1&&Ll.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}wr.protocol=kg;class ET extends wr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;wr.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",y=>{if(!r)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;wr.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const x=new Error("probe error");x.transport=t.name,this.emitReserved("upgradeError",x)}}))};function u(){r||(r=!0,_(),t.close(),t=null)}const c=y=>{const x=new Error("probe error: "+y);x.transport=t.name,u(),this.emitReserved("upgradeError",x)};function d(){c("transport closed")}function p(){c("socket closed")}function m(y){t&&y.name!==t.name&&u()}const _=()=>{t.removeListener("open",a),t.removeListener("error",c),t.removeListener("close",d),this.off("close",p),this.off("upgrading",m)};t.once("open",a),t.once("error",c),t.once("close",d),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}let MT=class extends ET{constructor(e,t={}){const r=typeof e=="object",a=r?{...e}:{...t};(!a.transports||a.transports&&typeof a.transports[0]=="string")&&(a.transports=(a.transports||["polling","websocket","webtransport"]).map(u=>_T[u]).filter(u=>!!u)),super(r?a:e,a)}};function TT(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Kf(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const u=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+u+":"+r.port+e,r.href=r.protocol+"://"+u+(t&&t.port===r.port?"":":"+r.port),r}const wT=typeof ArrayBuffer=="function",AT=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Wg=Object.prototype.toString,RT=typeof Blob=="function"||typeof Blob<"u"&&Wg.call(Blob)==="[object BlobConstructor]",CT=typeof File=="function"||typeof File<"u"&&Wg.call(File)==="[object FileConstructor]";function gd(s){return wT&&(s instanceof ArrayBuffer||AT(s))||RT&&s instanceof Blob||CT&&s instanceof File}function Dl(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Dl(s[t]))return!0;return!1}if(gd(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Dl(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Dl(s[t]))return!0;return!1}function PT(s){const e=[],t=s.data,r=s;return r.data=Ul(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Ul(s,e,t){if(!s)return s;if(gd(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Ul(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Ul(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Ul(s[a],e));return r}return s}function bT(s,e){return s.data=Qf(s.data,e),delete s.attachments,s}function Qf(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Qf(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Qf(s[t],e));return s}const LT=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var mt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(mt||(mt={}));class DT{constructor(e){this.replacer=e}encode(e){return(e.type===mt.EVENT||e.type===mt.ACK)&&Dl(e)?this.encodeAsBinary({type:e.type===mt.EVENT?mt.BINARY_EVENT:mt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===mt.BINARY_EVENT||e.type===mt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=PT(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class _d extends Wt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===mt.BINARY_EVENT;r||t.type===mt.BINARY_ACK?(t.type=r?mt.EVENT:mt.ACK,this.reconstructor=new UT(t)):super.emitReserved("decoded",t)}else if(gd(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(mt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===mt.BINARY_EVENT||r.type===mt.BINARY_ACK){const u=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(u,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const d=Number(c);if(!NT(d)||d<1)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=d}if(e.charAt(t+1)==="/"){const u=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(u,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const u=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}r.id=Number(e.substring(u,t+1))}if(e.charAt(++t)){const u=this.tryParse(e.substr(t));if(_d.isPayloadValid(r.type,u))r.data=u;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case mt.CONNECT:return Jm(t);case mt.DISCONNECT:return t===void 0;case mt.CONNECT_ERROR:return typeof t=="string"||Jm(t);case mt.EVENT:case mt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&LT.indexOf(t[0])===-1);case mt.ACK:case mt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class UT{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=bT(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const NT=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function Jm(s){return Object.prototype.toString.call(s)==="[object Object]"}const IT=Object.freeze(Object.defineProperty({__proto__:null,Decoder:_d,Encoder:DT,get PacketType(){return mt}},Symbol.toStringTag,{value:"Module"}));function ai(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const FT=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Xg extends Wt{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[ai(e,"open",this.onopen.bind(this)),ai(e,"packet",this.onpacket.bind(this)),ai(e,"error",this.onerror.bind(this)),ai(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,u;if(FT.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const c={type:mt.EVENT,data:t};if(c.options={},c.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,y=t.pop();this._registerAckCallback(_,y),c.id=_}const d=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,p=this.connected&&!(!((u=this.io.engine)===null||u===void 0)&&u._hasPingExpired());return this.flags.volatile&&!d||(p?(this.notifyOutgoingListeners(c),this.packet(c)):this.sendBuffer.push(c)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const u=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);t.call(this,new Error("operation has timed out"))},a),c=(...d)=>{this.io.clearTimeoutFn(u),t.apply(this,d)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((r,a)=>{const u=(c,d)=>c?a(c):r(d);u.withError=!0,t.push(u),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...u)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...u)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:mt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case mt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case mt.EVENT:case mt.BINARY_EVENT:this.onevent(e);break;case mt.ACK:case mt.BINARY_ACK:this.onack(e);break;case mt.DISCONNECT:this.ondisconnect();break;case mt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:mt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:mt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Js(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Js.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};Js.prototype.reset=function(){this.attempts=0};Js.prototype.setMin=function(s){this.ms=s};Js.prototype.setMax=function(s){this.max=s};Js.prototype.setJitter=function(s){this.jitter=s};class Jf extends Wt{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Gl(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Js({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||IT;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new MT(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=ai(t,"open",function(){r.onopen(),e&&e()}),u=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},c=ai(t,"error",u);if(this._timeout!==!1){const d=this._timeout,p=this.setTimeoutFn(()=>{a(),u(new Error("timeout")),t.close()},d);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(a),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(ai(e,"ping",this.onping.bind(this)),ai(e,"data",this.ondata.bind(this)),ai(e,"error",this.onerror.bind(this)),ai(e,"close",this.onclose.bind(this)),ai(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Hl(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Xg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ko={};function Nl(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=TT(s,e.path||"/socket.io"),r=t.source,a=t.id,u=t.path,c=ko[a]&&u in ko[a].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let p;return d?p=new Jf(r,e):(ko[a]||(ko[a]=new Jf(r,e)),p=ko[a]),t.query&&!e.query&&(e.query=t.queryKey),p.socket(t.path,e)}Object.assign(Nl,{Manager:Jf,Socket:Xg,io:Nl,connect:Nl});const OT="http://localhost:5000";function kT(){const s=window.speechSynthesis.getVoices();return s.find(e=>e.lang.startsWith("en-GB")&&/daniel|george|oliver|male/i.test(e.name))||s.find(e=>e.lang.startsWith("en-GB"))||s.find(e=>e.lang.startsWith("en"))}function BT(){const s=_i.useRef(null),e=_i.useRef(null),t=_i.useRef(!1),[r,a]=_i.useState(!1),[u,c]=_i.useState(""),[d,p]=_i.useState(""),[m,_]=_i.useState("");_i.useEffect(()=>{const S=Nl(OT);return e.current=S,S.on("server:ready",({greeting:T})=>{const R="jarvis-has-greeted";if(t.current||sessionStorage.getItem(R)||!T||!("speechSynthesis"in window))return;t.current=!0,sessionStorage.setItem(R,"true");const v=new SpeechSynthesisUtterance(T);v.lang="en-GB",v.voice=kT()||null,v.rate=.78,v.pitch=.35,v.volume=1,window.speechSynthesis.speak(v)}),S.on("connect_error",()=>_("Unable to connect to the assistant server.")),()=>{var T,R;(T=s.current)==null||T.abort(),(R=window.speechSynthesis)==null||R.cancel(),S.disconnect()}},[]);const y=async S=>{p("Thinking…");const T=e.current;if(!(T!=null&&T.connected)){p(""),_("Assistant server is not connected.");return}T.timeout(6e4).emit("ai:prompt",{responseMode:"operator",messages:[{role:"user",content:S}]},(R,v)=>{if(R){p(""),_("The assistant request timed out.");return}if(!(v!=null&&v.ok)){p(""),_((v==null?void 0:v.error)||"Grok request failed.");return}const g=v.result.data;p(typeof g=="string"?g:g.reply||JSON.stringify(g))})},x=()=>{const S=window.SpeechRecognition||window.webkitSpeechRecognition;if(!S){_("Speech recognition is unavailable in this browser. Use Chrome or Edge.");return}_(""),c(""),p("");const T=new S;T.lang="en-US",T.interimResults=!0,T.continuous=!1,T.onstart=()=>a(!0),T.onresult=R=>{const v=Array.from(R.results).map(g=>g[0].transcript).join("");c(v),R.results[R.results.length-1].isFinal&&y(v.trim())},T.onerror=R=>_(`Microphone error: ${R.error}`),T.onend=()=>a(!1),s.current=T,T.start()};return qn.jsxs("section",{className:"voice-assistant","aria-live":"polite",children:[qn.jsx("button",{className:`mic-button ${r?"is-listening":""}`,onClick:x,"aria-label":"Speak to Grok",children:qn.jsx("span",{className:"mic-icon"})}),qn.jsx("p",{className:"voice-status",children:r?"Listening…":"Tap to speak"}),u&&qn.jsxs("p",{className:"transcript",children:["“",u,"”"]}),d&&qn.jsx("p",{className:"grok-reply",children:d}),m&&qn.jsx("p",{className:"voice-error",children:m})]})}function zT(){return qn.jsxs("main",{className:"orb-only",children:[qn.jsx(GM,{}),qn.jsx(BT,{})]})}Dv.createRoot(document.getElementById("root")).render(qn.jsx(zT,{}));
