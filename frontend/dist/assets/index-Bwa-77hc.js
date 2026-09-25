(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var Mc={exports:{}},Do={},Tc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function wv(){if(Vp)return dt;Vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function y(I,ie,Ne){this.props=I,this.context=ie,this.refs=R,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function L(I,ie,Ne){this.props=I,this.context=ie,this.refs=R,this.updater=Ne||S}var b=L.prototype=new g;b.constructor=L,T(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(I,ie,Ne){var K,j={},de=null,ue=null;if(ie!=null)for(K in ie.ref!==void 0&&(ue=ie.ref),ie.key!==void 0&&(de=""+ie.key),ie)Y.call(ie,K)&&!N.hasOwnProperty(K)&&(j[K]=ie[K]);var _e=arguments.length-2;if(_e===1)j.children=Ne;else if(1<_e){for(var Ee=Array(_e),Re=0;Re<_e;Re++)Ee[Re]=arguments[Re+2];j.children=Ee}if(I&&I.defaultProps)for(K in _e=I.defaultProps,_e)j[K]===void 0&&(j[K]=_e[K]);return{$$typeof:s,type:I,key:de,ref:ue,props:j,_owner:F.current}}function P(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return ie[Ne]})}var se=/\/+/g;function Z(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):ie.toString(36)}function fe(I,ie,Ne,K,j){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var ue=!1;if(I===null)ue=!0;else switch(de){case"string":case"number":ue=!0;break;case"object":switch(I.$$typeof){case s:case e:ue=!0}}if(ue)return ue=I,j=j(ue),I=K===""?"."+Z(ue,0):K,C(j)?(Ne="",I!=null&&(Ne=I.replace(se,"$&/")+"/"),fe(j,ie,Ne,"",function(Re){return Re})):j!=null&&(w(j)&&(j=P(j,Ne+(!j.key||ue&&ue.key===j.key?"":(""+j.key).replace(se,"$&/")+"/")+I)),ie.push(j)),1;if(ue=0,K=K===""?".":K+":",C(I))for(var _e=0;_e<I.length;_e++){de=I[_e];var Ee=K+Z(de,_e);ue+=fe(de,ie,Ne,Ee,j)}else if(Ee=v(I),typeof Ee=="function")for(I=Ee.call(I),_e=0;!(de=I.next()).done;)de=de.value,Ee=K+Z(de,_e++),ue+=fe(de,ie,Ne,Ee,j);else if(de==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ue}function he(I,ie,Ne){if(I==null)return I;var K=[],j=0;return fe(I,K,"","",function(de){return ie.call(Ne,de,j++)}),K}function ae(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},B={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(I,ie,Ne){he(I,function(){ie.apply(this,arguments)},Ne)},count:function(I){var ie=0;return he(I,function(){ie++}),ie},toArray:function(I){return he(I,function(ie){return ie})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=L,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,dt.act=re,dt.cloneElement=function(I,ie,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=T({},I.props),j=I.key,de=I.ref,ue=I._owner;if(ie!=null){if(ie.ref!==void 0&&(de=ie.ref,ue=F.current),ie.key!==void 0&&(j=""+ie.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(Ee in ie)Y.call(ie,Ee)&&!N.hasOwnProperty(Ee)&&(K[Ee]=ie[Ee]===void 0&&_e!==void 0?_e[Ee]:ie[Ee])}var Ee=arguments.length-2;if(Ee===1)K.children=Ne;else if(1<Ee){_e=Array(Ee);for(var Re=0;Re<Ee;Re++)_e[Re]=arguments[Re+2];K.children=_e}return{$$typeof:s,type:I.type,key:j,ref:de,props:K,_owner:ue}},dt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},dt.createElement=V,dt.createFactory=function(I){var ie=V.bind(null,I);return ie.type=I,ie},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:d,render:I}},dt.isValidElement=w,dt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ae}},dt.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},dt.startTransition=function(I){var ie=B.transition;B.transition={};try{I()}finally{B.transition=ie}},dt.unstable_act=re,dt.useCallback=function(I,ie){return ce.current.useCallback(I,ie)},dt.useContext=function(I){return ce.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},dt.useEffect=function(I,ie){return ce.current.useEffect(I,ie)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(I,ie,Ne){return ce.current.useImperativeHandle(I,ie,Ne)},dt.useInsertionEffect=function(I,ie){return ce.current.useInsertionEffect(I,ie)},dt.useLayoutEffect=function(I,ie){return ce.current.useLayoutEffect(I,ie)},dt.useMemo=function(I,ie){return ce.current.useMemo(I,ie)},dt.useReducer=function(I,ie,Ne){return ce.current.useReducer(I,ie,Ne)},dt.useRef=function(I){return ce.current.useRef(I)},dt.useState=function(I){return ce.current.useState(I)},dt.useSyncExternalStore=function(I,ie,Ne){return ce.current.useSyncExternalStore(I,ie,Ne)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Hp;function td(){return Hp||(Hp=1,Tc.exports=wv()),Tc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Av(){if(Gp)return Do;Gp=1;var s=td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:x,_owner:a.current}}return Do.Fragment=t,Do.jsx=c,Do.jsxs=c,Do}var Wp;function Rv(){return Wp||(Wp=1,Mc.exports=Av()),Mc.exports}var Gt=Rv(),Dt=td(),Ja={},wc={exports:{}},Cn={},Ac={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Cv(){return Xp||(Xp=1,(function(s){function e(B,le){var re=B.length;B.push(le);e:for(;0<re;){var I=re-1>>>1,ie=B[I];if(0<a(ie,le))B[I]=le,B[re]=ie,re=I;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],re=B.pop();if(re!==le){B[0]=re;e:for(var I=0,ie=B.length,Ne=ie>>>1;I<Ne;){var K=2*(I+1)-1,j=B[K],de=K+1,ue=B[de];if(0>a(j,re))de<ie&&0>a(ue,j)?(B[I]=ue,B[de]=re,I=de):(B[I]=j,B[K]=re,I=K);else if(de<ie&&0>a(ue,re))B[I]=ue,B[de]=re,I=de;else break e}}return le}function a(B,le){var re=B.sortIndex-le.sortIndex;return re!==0?re:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,x=null,v=3,S=!1,T=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function C(B){if(R=!1,b(B),!T)if(t(p)!==null)T=!0,ae(Y);else{var le=t(m);le!==null&&ce(C,le.startTime-B)}}function Y(B,le){T=!1,R&&(R=!1,g(V),V=-1),S=!0;var re=v;try{for(b(le),x=t(p);x!==null&&(!(x.expirationTime>le)||B&&!k());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var ie=I(x.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?x.callback=ie:x===t(p)&&r(p),b(le)}else r(p);x=t(p)}if(x!==null)var Ne=!0;else{var K=t(m);K!==null&&ce(C,K.startTime-le),Ne=!1}return Ne}finally{x=null,v=re,S=!1}}var F=!1,N=null,V=-1,P=5,w=-1;function k(){return!(s.unstable_now()-w<P)}function se(){if(N!==null){var B=s.unstable_now();w=B;var le=!0;try{le=N(!0,B)}finally{le?Z():(F=!1,N=null)}}else F=!1}var Z;if(typeof L=="function")Z=function(){L(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=se,Z=function(){he.postMessage(null)}}else Z=function(){y(se,0)};function ae(B){N=B,F||(F=!0,Z())}function ce(B,le){V=y(function(){B(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(Y))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var re=v;v=le;try{return B()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=v;v=B;try{return le()}finally{v=re}},s.unstable_scheduleCallback=function(B,le,re){var I=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,B={id:_++,callback:le,priorityLevel:B,startTime:re,expirationTime:ie,sortIndex:-1},re>I?(B.sortIndex=re,e(m,B),t(p)===null&&B===t(m)&&(R?(g(V),V=-1):R=!0,ce(C,re-I))):(B.sortIndex=ie,e(p,B),T||S||(T=!0,ae(Y))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var le=v;return function(){var re=v;v=le;try{return B.apply(this,arguments)}finally{v=re}}}})(Rc)),Rc}var qp;function Pv(){return qp||(qp=1,Ac.exports=Cv()),Ac.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function bv(){if(Yp)return Cn;Yp=1;var s=td(),e=Pv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(n){return p.call(x,n)?!0:p.call(_,n)?!1:m.test(n)?x[n]=!0:(_[n]=!0,!1)}function S(n,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,l){if(i===null||typeof i>"u"||S(n,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,L);y[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,L);y[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,L);y[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?n.setAttributeNS(l,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,I;function ie(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ne=!1;function K(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){l=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}n()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,U=h.length-1;1<=E&&0<=U&&f[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==h[U]){var O=`
`+f[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=U);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function j(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=K(n.type,!1),n;case 11:return n=K(n.type.render,!1),n;case 1:return n=K(n.type,!0),n;default:return""}}function de(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case P:return"Profiler";case V:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:de(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return de(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(n){var i=Ee(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Re(n))}function it(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return n&&(l=Ee(n)?n.checked?"true":"false":n.value),n=l,n!==o?(i.setValue(n),!0):!1}function Mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function mn(n,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),n._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function ct(n,i){ht(n,i);var o=_e(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,o):i.hasOwnProperty("defaultValue")&&At(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function At(n,i,o){(i!=="number"||Mt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function D(n,i,o,l){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&l&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function M(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:_e(o)}}function ge(n,i){var o=_e(i.value),l=_e(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),l!=null&&(n.defaultValue=""+l)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,l,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function Je(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?n.setProperty(o,f):n[o]=f}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,oe=null,me=null;function De(n){if(n=_o(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=pa(i),Pe(n.stateNode,n.type,i))}}function Le(n){oe?me?me.push(n):me=[n]:oe=n}function st(){if(oe){var n=oe,i=me;if(me=oe=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ut(n,i){return n(i)}function Yt(){}var _t=!1;function Sn(n,i,o){if(_t)return n(i,o);_t=!0;try{return Ut(n,i,o)}finally{_t=!1,(oe!==null||me!==null)&&(Yt(),st())}}function gn(n,i){var o=n.stateNode;if(o===null)return null;var l=pa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ns=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ns=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ns=!1}function wi(n,i,o,l,f,h,E,U,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ye){this.onError(ye)}}var Ai=!1,Cr=null,Pr=!1,Ki=null,jo={onError:function(n){Ai=!0,Cr=n}};function is(n,i,o,l,f,h,E,U,O){Ai=!1,Cr=null,wi.apply(jo,arguments)}function $o(n,i,o,l,f,h,E,U,O){if(is.apply(this,arguments),Ai){if(Ai){var ee=Cr;Ai=!1,Cr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=ee)}}function di(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ko(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(n){if(di(n)!==n)throw Error(t(188))}function Xl(n){var i=n.alternate;if(!i){if(i=di(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return Zo(f),n;if(h===l)return Zo(f),i;h=h.sibling}throw Error(t(188))}if(o.return!==l.return)o=f,l=h;else{for(var E=!1,U=f.child;U;){if(U===o){E=!0,o=f,l=h;break}if(U===l){E=!0,l=f,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,l=f;break}if(U===l){E=!0,l=h,o=f;break}U=U.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==l)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=Xl(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,W=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Tt=null,pt=null;function on(n){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:yt,qe=Math.log,Zn=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(qe(n)/Zn|0)|0}var an=64,Qn=4194304;function jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hi(n,i){var o=n.pendingLanes;if(o===0)return 0;var l=0,f=n.suspendedLanes,h=n.pingedLanes,E=o&268435455;if(E!==0){var U=E&~f;U!==0?l=jt(U):(h&=E,h!==0&&(l=jt(h)))}else E=o&~f,E!==0?l=jt(E):h!==0&&(l=jt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)o=31-ot(i),f=1<<o,l|=n[o],i&=~f;return l}function bt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(n,i){for(var o=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-ot(h),U=1<<E,O=f[E];O===-1?((U&o)===0||(U&l)!==0)&&(f[E]=bt(U,i)):O<=i&&(n.expiredLanes|=U),h&=~U}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=an;return an<<=1,(an&4194240)===0&&(an=64),n}function zn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function En(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function Qo(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ot(o),h=1<<f;i[f]=0,l[f]=-1,n[f]=-1,o&=~h}}function ql(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var l=31-ot(o),f=1<<l;f&i|n[l]&i&&(n[l]|=i),o&=~f}}var Rt=0;function xd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yd,Yl,Sd,Ed,Md,jl=!1,Jo=[],Zi=null,Qi=null,Ji=null,eo=new Map,to=new Map,er=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(n,i,o,l,f,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=_o(i),i!==null&&Yl(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function jg(n,i,o,l,f){switch(i){case"focusin":return Zi=no(Zi,n,i,o,l,f),!0;case"dragenter":return Qi=no(Qi,n,i,o,l,f),!0;case"mouseover":return Ji=no(Ji,n,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return eo.set(h,no(eo.get(h)||null,n,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,to.set(h,no(to.get(h)||null,n,i,o,l,f)),!0}return!1}function wd(n){var i=br(n.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){n.blockedOn=i,Md(n.priority,function(){Sd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Kl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var l=new o.constructor(o.type,o);wt=l,o.target.dispatchEvent(l),wt=null}else return i=_o(o),i!==null&&Yl(i),n.blockedOn=o,!1;i.shift()}return!0}function Ad(n,i,o){ea(n)&&o.delete(i)}function $g(){jl=!1,Zi!==null&&ea(Zi)&&(Zi=null),Qi!==null&&ea(Qi)&&(Qi=null),Ji!==null&&ea(Ji)&&(Ji=null),eo.forEach(Ad),to.forEach(Ad)}function io(n,i){n.blockedOn===i&&(n.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function ro(n){function i(f){return io(f,n)}if(0<Jo.length){io(Jo[0],n);for(var o=1;o<Jo.length;o++){var l=Jo[o];l.blockedOn===n&&(l.blockedOn=null)}}for(Zi!==null&&io(Zi,n),Qi!==null&&io(Qi,n),Ji!==null&&io(Ji,n),eo.forEach(i),to.forEach(i),o=0;o<er.length;o++)l=er[o],l.blockedOn===n&&(l.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)wd(o),o.blockedOn===null&&er.shift()}var rs=C.ReactCurrentBatchConfig,ta=!0;function Kg(n,i,o,l){var f=Rt,h=rs.transition;rs.transition=null;try{Rt=1,$l(n,i,o,l)}finally{Rt=f,rs.transition=h}}function Zg(n,i,o,l){var f=Rt,h=rs.transition;rs.transition=null;try{Rt=4,$l(n,i,o,l)}finally{Rt=f,rs.transition=h}}function $l(n,i,o,l){if(ta){var f=Kl(n,i,o,l);if(f===null)hu(n,i,l,na,o),Td(n,l);else if(jg(f,n,i,o,l))l.stopPropagation();else if(Td(n,l),i&4&&-1<Yg.indexOf(n)){for(;f!==null;){var h=_o(f);if(h!==null&&yd(h),h=Kl(n,i,o,l),h===null&&hu(n,i,l,na,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else hu(n,i,l,null,o)}}var na=null;function Kl(n,i,o,l){if(na=null,n=H(l),n=br(n),n!==null)if(i=di(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ko(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return na=n,null}function Rd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var tr=null,Zl=null,ia=null;function Cd(){if(ia)return ia;var n,i=Zl,o=i.length,l,f="value"in tr?tr.value:tr.textContent,h=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(l=1;l<=E&&i[o-l]===f[h-l];l++);return ia=f.slice(n,1<l?1-l:void 0)}function ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function sa(){return!0}function Pd(){return!1}function Un(n){function i(o,l,f,h,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sa:Pd,this.isPropagationStopped=Pd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Un(ss),so=re({},ss,{view:0,detail:0}),Qg=Un(so),Jl,eu,oo,oa=re({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Jl=n.screenX-oo.screenX,eu=n.screenY-oo.screenY):eu=Jl=0,oo=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),bd=Un(oa),Jg=re({},oa,{dataTransfer:0}),e_=Un(Jg),t_=re({},so,{relatedTarget:0}),tu=Un(t_),n_=re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=Un(n_),r_=re({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),s_=Un(r_),o_=re({},ss,{data:0}),Ld=Un(o_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=u_[n])?!!i[n]:!1}function nu(){return c_}var f_=re({},so,{key:function(n){if(n.key){var i=a_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(n){return n.type==="keypress"?ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),d_=Un(f_),h_=re({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Un(h_),p_=re({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),m_=Un(p_),g_=re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Un(g_),v_=re({},oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Un(v_),y_=[9,13,27,32],iu=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var S_=d&&"TextEvent"in window&&!ao,Ud=d&&(!iu||ao&&8<ao&&11>=ao),Nd=" ",Id=!1;function Fd(n,i){switch(n){case"keyup":return y_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function E_(n,i){switch(n){case"compositionend":return Od(i);case"keypress":return i.which!==32?null:(Id=!0,Nd);case"textInput":return n=i.data,n===Nd&&Id?null:n;default:return null}}function M_(n,i){if(os)return n==="compositionend"||!iu&&Fd(n,i)?(n=Cd(),ia=Zl=tr=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ud&&i.locale!=="ko"?null:i.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!T_[n.type]:i==="textarea"}function Bd(n,i,o,l){Le(l),i=fa(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,l),n.push({event:o,listeners:i}))}var lo=null,uo=null;function w_(n){ih(n,0)}function aa(n){var i=fs(n);if(it(i))return n}function A_(n,i){if(n==="change")return i}var zd=!1;if(d){var ru;if(d){var su="oninput"in document;if(!su){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),su=typeof Vd.oninput=="function"}ru=su}else ru=!1;zd=ru&&(!document.documentMode||9<document.documentMode)}function Hd(){lo&&(lo.detachEvent("onpropertychange",Gd),uo=lo=null)}function Gd(n){if(n.propertyName==="value"&&aa(uo)){var i=[];Bd(i,uo,n,H(n)),Sn(w_,i)}}function R_(n,i,o){n==="focusin"?(Hd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Gd)):n==="focusout"&&Hd()}function C_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return aa(uo)}function P_(n,i){if(n==="click")return aa(i)}function b_(n,i){if(n==="input"||n==="change")return aa(i)}function L_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:L_;function co(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Jn(n[f],i[f]))return!1}return!0}function Wd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xd(n,i){var o=Wd(n);n=0;for(var l;o;){if(o.nodeType===3){if(l=n+o.textContent.length,n<=i&&l>=i)return{node:o,offset:i-n};n=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wd(o)}}function qd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?qd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var n=window,i=Mt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Mt(n.document)}return i}function ou(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function D_(n){var i=Yd(),o=n.focusedElem,l=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&qd(o.ownerDocument.documentElement,o)){if(l!==null&&ou(o)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!n.extend&&h>l&&(f=l,l=h,h=f),f=Xd(o,h);var E=Xd(o,l);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),h>l?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var U_=d&&"documentMode"in document&&11>=document.documentMode,as=null,au=null,fo=null,lu=!1;function jd(n,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lu||as==null||as!==Mt(l)||(l=as,"selectionStart"in l&&ou(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=fa(au,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,o),n.push({event:i,listeners:l}),i.target=as)))}function la(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ls={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},uu={},$d={};d&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ua(n){if(uu[n])return uu[n];if(!ls[n])return n;var i=ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in $d)return uu[n]=i[o];return n}var Kd=ua("animationend"),Zd=ua("animationiteration"),Qd=ua("animationstart"),Jd=ua("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){eh.set(n,i),u(i,[n])}for(var cu=0;cu<th.length;cu++){var fu=th[cu],N_=fu.toLowerCase(),I_=fu[0].toUpperCase()+fu.slice(1);nr(N_,"on"+I_)}nr(Kd,"onAnimationEnd"),nr(Zd,"onAnimationIteration"),nr(Qd,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function nh(n,i,o){var l=n.type||"unknown-event";n.currentTarget=o,$o(l,i,void 0,n),n.currentTarget=null}function ih(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var l=n[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],O=U.instance,ee=U.currentTarget;if(U=U.listener,O!==h&&f.isPropagationStopped())break e;nh(f,U,ee),h=O}else for(E=0;E<l.length;E++){if(U=l[E],O=U.instance,ee=U.currentTarget,U=U.listener,O!==h&&f.isPropagationStopped())break e;nh(f,U,ee),h=O}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Nt(n,i){var o=i[xu];o===void 0&&(o=i[xu]=new Set);var l=n+"__bubble";o.has(l)||(rh(i,n,2,!1),o.add(l))}function du(n,i,o){var l=0;i&&(l|=4),rh(o,n,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[ca]){n[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(F_.has(o)||du(o,!1,n),du(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ca]||(i[ca]=!0,du("selectionchange",!1,i))}}function rh(n,i,o,l){switch(Rd(i)){case 1:var f=Kg;break;case 4:f=Zg;break;default:f=$l}o=f.bind(null,i,o,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function hu(n,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;E=E.return}for(;U!==null;){if(E=br(U),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}U=U.parentNode}}l=l.return}Sn(function(){var ee=h,ye=H(o),Se=[];e:{var ve=eh.get(n);if(ve!==void 0){var Ue=Ql,Be=n;switch(n){case"keypress":if(ra(o)===0)break e;case"keydown":case"keyup":Ue=d_;break;case"focusin":Be="focus",Ue=tu;break;case"focusout":Be="blur",Ue=tu;break;case"beforeblur":case"afterblur":Ue=tu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=m_;break;case Kd:case Zd:case Qd:Ue=i_;break;case Jd:Ue=__;break;case"scroll":Ue=Qg;break;case"wheel":Ue=x_;break;case"copy":case"cut":case"paste":Ue=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Dd}var Ve=(i&4)!==0,Ht=!Ve&&n==="scroll",q=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var z=ee,$;z!==null;){$=z;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,q!==null&&(we=gn(z,q),we!=null&&Ve.push(mo(z,we,$)))),Ht)break;z=z.return}0<Ve.length&&(ve=new Ue(ve,Be,null,o,ye),Se.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==wt&&(Be=o.relatedTarget||o.fromElement)&&(br(Be)||Be[Ci]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Be=o.relatedTarget||o.toElement,Ue=ee,Be=Be?br(Be):null,Be!==null&&(Ht=di(Be),Be!==Ht||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=ee),Ue!==Be)){if(Ve=bd,we="onMouseLeave",q="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Dd,we="onPointerLeave",q="onPointerEnter",z="pointer"),Ht=Ue==null?ve:fs(Ue),$=Be==null?ve:fs(Be),ve=new Ve(we,z+"leave",Ue,o,ye),ve.target=Ht,ve.relatedTarget=$,we=null,br(ye)===ee&&(Ve=new Ve(q,z+"enter",Be,o,ye),Ve.target=$,Ve.relatedTarget=Ht,we=Ve),Ht=we,Ue&&Be)t:{for(Ve=Ue,q=Be,z=0,$=Ve;$;$=us($))z++;for($=0,we=q;we;we=us(we))$++;for(;0<z-$;)Ve=us(Ve),z--;for(;0<$-z;)q=us(q),$--;for(;z--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=us(Ve),q=us(q)}Ve=null}else Ve=null;Ue!==null&&sh(Se,ve,Ue,Ve,!1),Be!==null&&Ht!==null&&sh(Se,Ht,Be,Ve,!0)}}e:{if(ve=ee?fs(ee):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=A_;else if(kd(ve))if(zd)Xe=b_;else{Xe=C_;var $e=R_}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=P_);if(Xe&&(Xe=Xe(n,ee))){Bd(Se,Xe,o,ye);break e}$e&&$e(n,ve,ee),n==="focusout"&&($e=ve._wrapperState)&&$e.controlled&&ve.type==="number"&&At(ve,"number",ve.value)}switch($e=ee?fs(ee):window,n){case"focusin":(kd($e)||$e.contentEditable==="true")&&(as=$e,au=ee,fo=null);break;case"focusout":fo=au=as=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,jd(Se,o,ye);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":jd(Se,o,ye)}var Ke;if(iu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else os?Fd(n,o)&&(tt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Ud&&o.locale!=="ko"&&(os||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&os&&(Ke=Cd()):(tr=ye,Zl="value"in tr?tr.value:tr.textContent,os=!0)),$e=fa(ee,tt),0<$e.length&&(tt=new Ld(tt,n,null,o,ye),Se.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Od(o),Ke!==null&&(tt.data=Ke)))),(Ke=S_?E_(n,o):M_(n,o))&&(ee=fa(ee,"onBeforeInput"),0<ee.length&&(ye=new Ld("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:ee}),ye.data=Ke))}ih(Se,i)})}function mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function fa(n,i){for(var o=i+"Capture",l=[];n!==null;){var f=n,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=gn(n,o),h!=null&&l.unshift(mo(n,h,f)),h=gn(n,i),h!=null&&l.push(mo(n,h,f))),n=n.return}return l}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sh(n,i,o,l,f){for(var h=i._reactName,E=[];o!==null&&o!==l;){var U=o,O=U.alternate,ee=U.stateNode;if(O!==null&&O===l)break;U.tag===5&&ee!==null&&(U=ee,f?(O=gn(o,h),O!=null&&E.unshift(mo(o,O,U))):f||(O=gn(o,h),O!=null&&E.push(mo(o,O,U)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var O_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function oh(n){return(typeof n=="string"?n:""+n).replace(O_,`
`).replace(k_,"")}function da(n,i,o){if(i=oh(i),oh(n)!==i&&o)throw Error(t(425))}function ha(){}var pu=null,mu=null;function gu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,z_=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(n){return ah.resolve(null).then(n).catch(V_)}:_u;function V_(n){setTimeout(function(){throw n})}function vu(n,i){var o=i,l=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){n.removeChild(f),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);ro(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),pi="__reactFiber$"+cs,go="__reactProps$"+cs,Ci="__reactContainer$"+cs,xu="__reactEvents$"+cs,H_="__reactListeners$"+cs,G_="__reactHandles$"+cs;function br(n){var i=n[pi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ci]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lh(n);n!==null;){if(o=n[pi])return o;n=lh(n)}return i}n=o,o=n.parentNode}return null}function _o(n){return n=n[pi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function pa(n){return n[go]||null}var yu=[],ds=-1;function rr(n){return{current:n}}function It(n){0>ds||(n.current=yu[ds],yu[ds]=null,ds--)}function Lt(n,i){ds++,yu[ds]=n.current,n.current=i}var sr={},ln=rr(sr),Mn=rr(!1),Lr=sr;function hs(n,i){var o=n.type.contextTypes;if(!o)return sr;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Tn(n){return n=n.childContextTypes,n!=null}function ma(){It(Mn),It(ln)}function uh(n,i,o){if(ln.current!==sr)throw Error(t(168));Lt(ln,i),Lt(Mn,o)}function ch(n,i,o){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(t(108,ue(n)||"Unknown",f));return re({},o,l)}function ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Lr=ln.current,Lt(ln,n),Lt(Mn,Mn.current),!0}function fh(n,i,o){var l=n.stateNode;if(!l)throw Error(t(169));o?(n=ch(n,i,Lr),l.__reactInternalMemoizedMergedChildContext=n,It(Mn),It(ln),Lt(ln,n)):It(Mn),Lt(Mn,o)}var Pi=null,_a=!1,Su=!1;function dh(n){Pi===null?Pi=[n]:Pi.push(n)}function W_(n){_a=!0,dh(n)}function or(){if(!Su&&Pi!==null){Su=!0;var n=0,i=Rt;try{var o=Pi;for(Rt=1;n<o.length;n++){var l=o[n];do l=l(!0);while(l!==null)}Pi=null,_a=!1}catch(f){throw Pi!==null&&(Pi=Pi.slice(n+1)),te(ze,or),f}finally{Rt=i,Su=!1}}return null}var ps=[],ms=0,va=null,xa=0,Vn=[],Hn=0,Dr=null,bi=1,Li="";function Ur(n,i){ps[ms++]=xa,ps[ms++]=va,va=n,xa=i}function hh(n,i,o){Vn[Hn++]=bi,Vn[Hn++]=Li,Vn[Hn++]=Dr,Dr=n;var l=bi;n=Li;var f=32-ot(l)-1;l&=~(1<<f),o+=1;var h=32-ot(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,bi=1<<32-ot(i)+f|o<<f|l,Li=h+n}else bi=1<<h|o<<f|l,Li=n}function Eu(n){n.return!==null&&(Ur(n,1),hh(n,1,0))}function Mu(n){for(;n===va;)va=ps[--ms],ps[ms]=null,xa=ps[--ms],ps[ms]=null;for(;n===Dr;)Dr=Vn[--Hn],Vn[Hn]=null,Li=Vn[--Hn],Vn[Hn]=null,bi=Vn[--Hn],Vn[Hn]=null}var Nn=null,In=null,Ft=!1,ei=null;function ph(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Nn=n,In=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Nn=n,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:bi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Nn=n,In=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wu(n){if(Ft){var i=In;if(i){var o=i;if(!mh(n,i)){if(Tu(n))throw Error(t(418));i=ir(o.nextSibling);var l=Nn;i&&mh(n,i)?ph(l,o):(n.flags=n.flags&-4097|2,Ft=!1,Nn=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Nn=n}}}function gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function ya(n){if(n!==Nn)return!1;if(!Ft)return gh(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!gu(n.type,n.memoizedProps)),i&&(i=In)){if(Tu(n))throw _h(),Error(t(418));for(;i;)ph(n,i),i=ir(i.nextSibling)}if(gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){In=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}In=null}}else In=Nn?ir(n.stateNode.nextSibling):null;return!0}function _h(){for(var n=In;n;)n=ir(n.nextSibling)}function gs(){In=Nn=null,Ft=!1}function Au(n){ei===null?ei=[n]:ei.push(n)}var X_=C.ReactCurrentBatchConfig;function vo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var l=o.stateNode}if(!l)throw Error(t(147,n));var f=l,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=f.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Sa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vh(n){var i=n._init;return i(n._payload)}function xh(n){function i(q,z){if(n){var $=q.deletions;$===null?(q.deletions=[z],q.flags|=16):$.push(z)}}function o(q,z){if(!n)return null;for(;z!==null;)i(q,z),z=z.sibling;return null}function l(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function f(q,z){return q=pr(q,z),q.index=0,q.sibling=null,q}function h(q,z,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<z?(q.flags|=2,z):$):(q.flags|=2,z)):(q.flags|=1048576,z)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,z,$,we){return z===null||z.tag!==6?(z=_c($,q.mode,we),z.return=q,z):(z=f(z,$),z.return=q,z)}function O(q,z,$,we){var Xe=$.type;return Xe===N?ye(q,z,$.props.children,we,$.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&vh(Xe)===z.type)?(we=f(z,$.props),we.ref=vo(q,z,$),we.return=q,we):(we=Xa($.type,$.key,$.props,null,q.mode,we),we.ref=vo(q,z,$),we.return=q,we)}function ee(q,z,$,we){return z===null||z.tag!==4||z.stateNode.containerInfo!==$.containerInfo||z.stateNode.implementation!==$.implementation?(z=vc($,q.mode,we),z.return=q,z):(z=f(z,$.children||[]),z.return=q,z)}function ye(q,z,$,we,Xe){return z===null||z.tag!==7?(z=Vr($,q.mode,we,Xe),z.return=q,z):(z=f(z,$),z.return=q,z)}function Se(q,z,$){if(typeof z=="string"&&z!==""||typeof z=="number")return z=_c(""+z,q.mode,$),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Y:return $=Xa(z.type,z.key,z.props,null,q.mode,$),$.ref=vo(q,null,z),$.return=q,$;case F:return z=vc(z,q.mode,$),z.return=q,z;case ae:var we=z._init;return Se(q,we(z._payload),$)}if(Ye(z)||le(z))return z=Vr(z,q.mode,$,null),z.return=q,z;Sa(q,z)}return null}function ve(q,z,$,we){var Xe=z!==null?z.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:U(q,z,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Y:return $.key===Xe?O(q,z,$,we):null;case F:return $.key===Xe?ee(q,z,$,we):null;case ae:return Xe=$._init,ve(q,z,Xe($._payload),we)}if(Ye($)||le($))return Xe!==null?null:ye(q,z,$,we,null);Sa(q,$)}return null}function Ue(q,z,$,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get($)||null,U(z,q,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Y:return q=q.get(we.key===null?$:we.key)||null,O(z,q,we,Xe);case F:return q=q.get(we.key===null?$:we.key)||null,ee(z,q,we,Xe);case ae:var $e=we._init;return Ue(q,z,$,$e(we._payload),Xe)}if(Ye(we)||le(we))return q=q.get($)||null,ye(z,q,we,Xe,null);Sa(z,we)}return null}function Be(q,z,$,we){for(var Xe=null,$e=null,Ke=z,tt=z=0,tn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var St=ve(q,Ke,$[tt],we);if(St===null){Ke===null&&(Ke=tn);break}n&&Ke&&St.alternate===null&&i(q,Ke),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=tn}if(tt===$.length)return o(q,Ke),Ft&&Ur(q,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=Se(q,$[tt],we),Ke!==null&&(z=h(Ke,z,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Ur(q,tt),Xe}for(Ke=l(q,Ke);tt<$.length;tt++)tn=Ue(Ke,q,tt,$[tt],we),tn!==null&&(n&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),z=h(tn,z,tt),$e===null?Xe=tn:$e.sibling=tn,$e=tn);return n&&Ke.forEach(function(mr){return i(q,mr)}),Ft&&Ur(q,tt),Xe}function Ve(q,z,$,we){var Xe=le($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var $e=Xe=null,Ke=z,tt=z=0,tn=null,St=$.next();Ke!==null&&!St.done;tt++,St=$.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var mr=ve(q,Ke,St.value,we);if(mr===null){Ke===null&&(Ke=tn);break}n&&Ke&&mr.alternate===null&&i(q,Ke),z=h(mr,z,tt),$e===null?Xe=mr:$e.sibling=mr,$e=mr,Ke=tn}if(St.done)return o(q,Ke),Ft&&Ur(q,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=$.next())St=Se(q,St.value,we),St!==null&&(z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Ft&&Ur(q,tt),Xe}for(Ke=l(q,Ke);!St.done;tt++,St=$.next())St=Ue(Ke,q,tt,St.value,we),St!==null&&(n&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return n&&Ke.forEach(function(Tv){return i(q,Tv)}),Ft&&Ur(q,tt),Xe}function Ht(q,z,$,we){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Y:e:{for(var Xe=$.key,$e=z;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===N){if($e.tag===7){o(q,$e.sibling),z=f($e,$.props.children),z.return=q,q=z;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&vh(Xe)===$e.type){o(q,$e.sibling),z=f($e,$.props),z.ref=vo(q,$e,$),z.return=q,q=z;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}$.type===N?(z=Vr($.props.children,q.mode,we,$.key),z.return=q,q=z):(we=Xa($.type,$.key,$.props,null,q.mode,we),we.ref=vo(q,z,$),we.return=q,q=we)}return E(q);case F:e:{for($e=$.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===$.containerInfo&&z.stateNode.implementation===$.implementation){o(q,z.sibling),z=f(z,$.children||[]),z.return=q,q=z;break e}else{o(q,z);break}else i(q,z);z=z.sibling}z=vc($,q.mode,we),z.return=q,q=z}return E(q);case ae:return $e=$._init,Ht(q,z,$e($._payload),we)}if(Ye($))return Be(q,z,$,we);if(le($))return Ve(q,z,$,we);Sa(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,z!==null&&z.tag===6?(o(q,z.sibling),z=f(z,$),z.return=q,q=z):(o(q,z),z=_c($,q.mode,we),z.return=q,q=z),E(q)):o(q,z)}return Ht}var _s=xh(!0),yh=xh(!1),Ea=rr(null),Ma=null,vs=null,Ru=null;function Cu(){Ru=vs=Ma=null}function Pu(n){var i=Ea.current;It(Ea),n._currentValue=i}function bu(n,i,o){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===o)break;n=n.return}}function xs(n,i){Ma=n,Ru=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(wn=!0),n.firstContext=null)}function Gn(n){var i=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(Ma===null)throw Error(t(308));vs=n,Ma.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Nr=null;function Lu(n){Nr===null?Nr=[n]:Nr.push(n)}function Sh(n,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Lu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Di(n,l)}function Di(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Di(n,o)}return f=l.interleaved,f===null?(i.next=i,Lu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Di(n,o)}function Ta(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,ql(n,o)}}function Mh(n,i){var o=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function wa(n,i,o,l){var f=n.updateQueue;ar=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var O=U,ee=O.next;O.next=null,E===null?h=ee:E.next=ee,E=O;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==E&&(U===null?ye.firstBaseUpdate=ee:U.next=ee,ye.lastBaseUpdate=O))}if(h!==null){var Se=f.baseState;E=0,ye=ee=O=null,U=h;do{var ve=U.lane,Ue=U.eventTime;if((l&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=n,Ve=U;switch(ve=i,Ue=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Ue,Se,ve);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ve=typeof Be=="function"?Be.call(Ue,Se,ve):Be,ve==null)break e;Se=re({},Se,ve);break e;case 2:ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[U]:ve.push(U))}else Ue={eventTime:Ue,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(ee=ye=Ue,O=Se):ye=ye.next=Ue,E|=ve;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(ye===null&&(O=Se),f.baseState=O,f.firstBaseUpdate=ee,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Or|=E,n.lanes=E,n.memoizedState=Se}}function Th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(t(191,f));f.call(l)}}}var xo={},mi=rr(xo),yo=rr(xo),So=rr(xo);function Ir(n){if(n===xo)throw Error(t(174));return n}function Uu(n,i){switch(Lt(So,i),Lt(yo,n),Lt(mi,xo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=He(i,n)}It(mi),Lt(mi,i)}function ys(){It(mi),It(yo),It(So)}function wh(n){Ir(So.current);var i=Ir(mi.current),o=He(i,n.type);i!==o&&(Lt(yo,n),Lt(mi,o))}function Nu(n){yo.current===n&&(It(mi),It(yo))}var Ot=rr(0);function Aa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Fu(){for(var n=0;n<Iu.length;n++)Iu[n]._workInProgressVersionPrimary=null;Iu.length=0}var Ra=C.ReactCurrentDispatcher,Ou=C.ReactCurrentBatchConfig,Fr=0,kt=null,$t=null,Jt=null,Ca=!1,Eo=!1,Mo=0,q_=0;function un(){throw Error(t(321))}function ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function Bu(n,i,o,l,f,h){if(Fr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=n===null||n.memoizedState===null?K_:Z_,n=o(l,f),Eo){h=0;do{if(Eo=!1,Mo=0,25<=h)throw Error(t(301));h+=1,Jt=$t=null,i.updateQueue=null,Ra.current=Q_,n=o(l,f)}while(Eo)}if(Ra.current=La,i=$t!==null&&$t.next!==null,Fr=0,Jt=$t=kt=null,Ca=!1,i)throw Error(t(300));return n}function zu(){var n=Mo!==0;return Mo=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Wn(){if($t===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Jt===null?kt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function To(n,i){return typeof i=="function"?i(n):i}function Vu(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=$t,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=E=null,O=null,ee=h;do{var ye=ee.lane;if((Fr&ye)===ye)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:n(l,ee.action);else{var Se={lane:ye,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(U=O=Se,E=l):O=O.next=Se,kt.lanes|=ye,Or|=ye}ee=ee.next}while(ee!==null&&ee!==h);O===null?E=l:O.next=U,Jn(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,o.lastRenderedState=l}if(n=o.interleaved,n!==null){f=n;do h=f.lane,kt.lanes|=h,Or|=h,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hu(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=n(h,E.action),E=E.next;while(E!==f);Jn(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Ah(){}function Rh(n,i){var o=kt,l=Wn(),f=i(),h=!Jn(l.memoizedState,f);if(h&&(l.memoizedState=f,wn=!0),l=l.queue,Gu(bh.bind(null,o,l,n),[n]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,wo(9,Ph.bind(null,o,l,f,i),void 0,null),en===null)throw Error(t(349));(Fr&30)!==0||Ch(o,i,f)}return f}function Ch(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ph(n,i,o,l){i.value=o,i.getSnapshot=l,Lh(i)&&Dh(n)}function bh(n,i,o){return o(function(){Lh(i)&&Dh(n)})}function Lh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Dh(n){var i=Di(n,1);i!==null&&ri(i,n,1,-1)}function Uh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},i.queue=n,n=n.dispatch=$_.bind(null,kt,n),[i.memoizedState,n]}function wo(n,i,o,l){return n={tag:n,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(l=o.next,o.next=n,n.next=l,i.lastEffect=n)),n}function Nh(){return Wn().memoizedState}function Pa(n,i,o,l){var f=gi();kt.flags|=n,f.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function ba(n,i,o,l){var f=Wn();l=l===void 0?null:l;var h=void 0;if($t!==null){var E=$t.memoizedState;if(h=E.destroy,l!==null&&ku(l,E.deps)){f.memoizedState=wo(i,o,h,l);return}}kt.flags|=n,f.memoizedState=wo(1|i,o,h,l)}function Ih(n,i){return Pa(8390656,8,n,i)}function Gu(n,i){return ba(2048,8,n,i)}function Fh(n,i){return ba(4,2,n,i)}function Oh(n,i){return ba(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bh(n,i,o){return o=o!=null?o.concat([n]):null,ba(4,4,kh.bind(null,i,n),o)}function Wu(){}function zh(n,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&ku(i,l[1])?l[0]:(o.memoizedState=[n,i],n)}function Vh(n,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&ku(i,l[1])?l[0]:(n=n(),o.memoizedState=[n,i],n)}function Hh(n,i,o){return(Fr&21)===0?(n.baseState&&(n.baseState=!1,wn=!0),n.memoizedState=o):(Jn(o,i)||(o=_n(),kt.lanes|=o,Or|=o,n.baseState=!0),i)}function Y_(n,i){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var l=Ou.transition;Ou.transition={};try{n(!1),i()}finally{Rt=o,Ou.transition=l}}function Gh(){return Wn().memoizedState}function j_(n,i,o){var l=dr(n);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(n))Xh(i,o);else if(o=Sh(n,i,o,l),o!==null){var f=xn();ri(o,n,l,f),qh(o,i,l)}}function $_(n,i,o){var l=dr(n),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(n))Xh(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(f.hasEagerState=!0,f.eagerState=U,Jn(U,E)){var O=i.interleaved;O===null?(f.next=f,Lu(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=Sh(n,i,f,l),o!==null&&(f=xn(),ri(o,n,l,f),qh(o,i,l))}}function Wh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function Xh(n,i){Eo=Ca=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function qh(n,i,o){if((o&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,ql(n,o)}}var La={readContext:Gn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},K_={readContext:Gn,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:Gn,useEffect:Ih,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Pa(4194308,4,kh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Pa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Pa(4,2,n,i)},useMemo:function(n,i){var o=gi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=j_.bind(null,kt,n),[l.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:Uh,useDebugValue:Wu,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=Uh(!1),i=n[0];return n=Y_.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var l=kt,f=gi();if(Ft){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),en===null)throw Error(t(349));(Fr&30)!==0||Ch(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ih(bh.bind(null,l,h,n),[n]),l.flags|=2048,wo(9,Ph.bind(null,l,h,o,i),void 0,null),o},useId:function(){var n=gi(),i=en.identifierPrefix;if(Ft){var o=Li,l=bi;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=q_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Z_={readContext:Gn,useCallback:zh,useContext:Gn,useEffect:Gu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:Vu,useRef:Nh,useState:function(){return Vu(To)},useDebugValue:Wu,useDeferredValue:function(n){var i=Wn();return Hh(i,$t.memoizedState,n)},useTransition:function(){var n=Vu(To)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1},Q_={readContext:Gn,useCallback:zh,useContext:Gn,useEffect:Gu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:Hu,useRef:Nh,useState:function(){return Hu(To)},useDebugValue:Wu,useDeferredValue:function(n){var i=Wn();return $t===null?i.memoizedState=n:Hh(i,$t.memoizedState,n)},useTransition:function(){var n=Hu(To)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Xu(n,i,o,l){i=n.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Da={isMounted:function(n){return(n=n._reactInternals)?di(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var l=xn(),f=dr(n),h=Ui(l,f);h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,f),i!==null&&(ri(i,n,f,l),Ta(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var l=xn(),f=dr(n),h=Ui(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,f),i!==null&&(ri(i,n,f,l),Ta(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=xn(),l=dr(n),f=Ui(o,l);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,l),i!==null&&(ri(i,n,l,o),Ta(i,n,l))}};function Yh(n,i,o,l,f,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(f,h):!0}function jh(n,i,o){var l=!1,f=sr,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(f=Tn(i)?Lr:ln.current,l=i.contextTypes,h=(l=l!=null)?hs(n,f):sr),i=new i(o,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=h),i}function $h(n,i,o,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==n&&Da.enqueueReplaceState(i,i.state,null)}function qu(n,i,o,l){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Du(n);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Gn(h):(h=Tn(i)?Lr:ln.current,f.context=hs(n,h)),f.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Xu(n,i,h,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Da.enqueueReplaceState(f,f.state,null),wa(n,o,f,l),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",l=i;do o+=j(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:f,digest:null}}function Yu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function Kh(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,uc=l),ju(n,i)},o}function Zh(n,i,o){o=Ui(-1,o),o.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ju(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ju(n,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Qh(n,i,o){var l=n.pingCache;if(l===null){l=n.pingCache=new J_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),n=hv.bind(null,n,i,o),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ep(n,i,o,l,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var ev=C.ReactCurrentOwner,wn=!1;function vn(n,i,o,l){i.child=n===null?yh(i,null,o,l):_s(i,n.child,o,l)}function tp(n,i,o,l,f){o=o.render;var h=i.ref;return xs(i,f),l=Bu(n,i,o,l,h,f),o=zu(),n!==null&&!wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ni(n,i,f)):(Ft&&o&&Eu(i),i.flags|=1,vn(n,i,l,f),i.child)}function np(n,i,o,l,f){if(n===null){var h=o.type;return typeof h=="function"&&!gc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,ip(n,i,h,l,f)):(n=Xa(o.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(E,l)&&n.ref===i.ref)return Ni(n,i,f)}return i.flags|=1,n=pr(h,l),n.ref=i.ref,n.return=i,i.child=n}function ip(n,i,o,l,f){if(n!==null){var h=n.memoizedProps;if(co(h,l)&&n.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(n.lanes&f)!==0)(n.flags&131072)!==0&&(wn=!0);else return i.lanes=n.lanes,Ni(n,i,f)}return $u(n,i,o,l,f)}function rp(n,i,o){var l=i.pendingProps,f=l.children,h=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,Fn),Fn|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,Fn),Fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(Ms,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(Ms,Fn),Fn|=l;return vn(n,i,f,o),i.child}function sp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $u(n,i,o,l,f){var h=Tn(o)?Lr:ln.current;return h=hs(i,h),xs(i,f),o=Bu(n,i,o,l,h,f),l=zu(),n!==null&&!wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ni(n,i,f)):(Ft&&l&&Eu(i),i.flags|=1,vn(n,i,o,f),i.child)}function op(n,i,o,l,f){if(Tn(o)){var h=!0;ga(i)}else h=!1;if(xs(i,f),i.stateNode===null)Na(n,i),jh(i,o,l),qu(i,o,l,f),l=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Gn(ee):(ee=Tn(o)?Lr:ln.current,ee=hs(i,ee));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||O!==ee)&&$h(i,E,l,ee),ar=!1;var ve=i.memoizedState;E.state=ve,wa(i,l,E,f),O=i.memoizedState,U!==l||ve!==O||Mn.current||ar?(typeof ye=="function"&&(Xu(i,o,ye,l),O=i.memoizedState),(U=ar||Yh(i,o,U,l,ve,O,ee))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=ee,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Eh(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ti(i.type,U),E.props=ee,Se=i.pendingProps,ve=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Gn(O):(O=Tn(o)?Lr:ln.current,O=hs(i,O));var Ue=o.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ve!==O)&&$h(i,E,l,O),ar=!1,ve=i.memoizedState,E.state=ve,wa(i,l,E,f);var Be=i.memoizedState;U!==Se||ve!==Be||Mn.current||ar?(typeof Ue=="function"&&(Xu(i,o,Ue,l),Be=i.memoizedState),(ee=ar||Yh(i,o,ee,l,ve,Be,O)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=O,l=ee):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),l=!1)}return Ku(n,i,o,l,h,f)}function Ku(n,i,o,l,f,h){sp(n,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&fh(i,o,!1),Ni(n,i,h);l=i.stateNode,ev.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,h),i.child=_s(i,null,U,h)):vn(n,i,U,h),i.memoizedState=l.state,f&&fh(i,o,!0),i.child}function ap(n){var i=n.stateNode;i.pendingContext?uh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&uh(n,i.context,!1),Uu(n,i.containerInfo)}function lp(n,i,o,l,f){return gs(),Au(f),i.flags|=256,vn(n,i,o,l),i.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function up(n,i,o){var l=i.pendingProps,f=Ot.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(Ot,f&1),n===null)return wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,n=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=qa(E,l,0,null),n=Vr(n,l,o,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Qu(o),i.memoizedState=Zu,n):Ju(i,E));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return tv(n,i,E,l,U,f,o);if(h){h=l.fallback,E=i.mode,f=n.child,U=f.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=pr(f,O),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=pr(U,h):(h=Vr(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=n.child.memoizedState,E=E===null?Qu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~o,i.memoizedState=Zu,l}return h=n.child,n=h.sibling,l=pr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=l,i.memoizedState=null,l}function Ju(n,i){return i=qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ua(n,i,o,l){return l!==null&&Au(l),_s(i,n.child,null,o),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function tv(n,i,o,l,f,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Yu(Error(t(422))),Ua(n,i,E,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=qa({mode:"visible",children:l.children},f,0,null),h=Vr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=Qu(E),i.memoizedState=Zu,h);if((i.mode&1)===0)return Ua(n,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(t(419)),l=Yu(h,l,void 0),Ua(n,i,E,l)}if(U=(E&n.childLanes)!==0,wn||U){if(l=en,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Di(n,f),ri(l,n,f,-1))}return mc(),l=Yu(Error(t(421))),Ua(n,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=pv.bind(null,n),f._reactRetry=i,null):(n=h.treeContext,In=ir(f.nextSibling),Nn=i,Ft=!0,ei=null,n!==null&&(Vn[Hn++]=bi,Vn[Hn++]=Li,Vn[Hn++]=Dr,bi=n.id,Li=n.overflow,Dr=i),i=Ju(i,l.children),i.flags|=4096,i)}function cp(n,i,o){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),bu(n.return,i,o)}function ec(n,i,o,l,f){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function fp(n,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(vn(n,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cp(n,o,i);else if(n.tag===19)cp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Aa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),ec(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Aa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ec(i,!0,o,null,h);break;case"together":ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function nv(n,i,o){switch(i.tag){case 3:ap(i),gs();break;case 5:wh(i);break;case 1:Tn(i.type)&&ga(i);break;case 4:Uu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Lt(Ea,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?up(n,i,o):(Lt(Ot,Ot.current&1),n=Ni(n,i,o),n!==null?n.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(n.flags&128)!==0){if(l)return fp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,rp(n,i,o)}return Ni(n,i,o)}var dp,tc,hp,pp;dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tc=function(){},hp=function(n,i,o,l){var f=n.memoizedProps;if(f!==l){n=i.stateNode,Ir(mi.current);var h=null;switch(o){case"input":f=X(n,f),l=X(n,l),h=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":f=M(n,f),l=M(n,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ha)}ft(o,l);var E;o=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var U=f[ee];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var O=l[ee];if(U=f!=null?f[ee]:void 0,l.hasOwnProperty(ee)&&O!==U&&(O!=null||U!=null))if(ee==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(h||(h=[]),h.push(ee,o)),o=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(h=h||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Nt("scroll",n),h||U===O||(h=[])):(h=h||[]).push(ee,O))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},pp=function(n,i,o,l){o!==l&&(i.flags|=4)};function Ao(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,l=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=o,i}function iv(n,i,o){var l=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&ma(),cn(i),null;case 3:return l=i.stateNode,ys(),It(Mn),It(ln),Fu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(ya(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(dc(ei),ei=null))),tc(n,i),cn(i),null;case 5:Nu(i);var f=Ir(So.current);if(o=i.type,n!==null&&i.stateNode!=null)hp(n,i,o,l,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return cn(i),null}if(n=Ir(mi.current),ya(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[pi]=i,l[go]=h,n=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(f=0;f<ho.length;f++)Nt(ho[f],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":mn(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":Q(l,h),Nt("invalid",l)}ft(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&da(l.textContent,U,n),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&da(l.textContent,U,n),f=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Nt("scroll",l)}switch(o){case"input":Qe(l),je(l,h,!0);break;case"textarea":Qe(l),xe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ha)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=E.createElement(o,{is:l.is}):(n=E.createElement(o),o==="select"&&(E=n,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):n=E.createElementNS(n,o),n[pi]=i,n[go]=l,dp(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(o,l),o){case"dialog":Nt("cancel",n),Nt("close",n),f=l;break;case"iframe":case"object":case"embed":Nt("load",n),f=l;break;case"video":case"audio":for(f=0;f<ho.length;f++)Nt(ho[f],n);f=l;break;case"source":Nt("error",n),f=l;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),f=l;break;case"details":Nt("toggle",n),f=l;break;case"input":mn(n,l),f=X(n,l),Nt("invalid",n);break;case"option":f=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),Nt("invalid",n);break;case"textarea":Q(n,l),f=M(n,l),Nt("invalid",n);break;default:f=l}ft(o,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var O=U[h];h==="style"?Je(n,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ie(n,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ut(n,O):typeof O=="number"&&ut(n,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",n):O!=null&&b(n,h,O,E))}switch(o){case"input":Qe(n),je(n,l,!1);break;case"textarea":Qe(n),xe(n);break;case"option":l.value!=null&&n.setAttribute("value",""+_e(l.value));break;case"select":n.multiple=!!l.multiple,h=l.value,h!=null?D(n,!!l.multiple,h,!1):l.defaultValue!=null&&D(n,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(n&&i.stateNode!=null)pp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(So.current),Ir(mi.current),ya(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(h=l.nodeValue!==o)&&(n=Nn,n!==null))switch(n.tag){case 3:da(l.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,o,(n.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return cn(i),null;case 13:if(It(Ot),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_h(),gs(),i.flags|=98560,h=!1;else if(h=ya(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[pi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else ei!==null&&(dc(ei),ei=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Kt===0&&(Kt=3):mc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ys(),tc(n,i),n===null&&po(i.stateNode.containerInfo),cn(i),null;case 10:return Pu(i.type._context),cn(i),null;case 17:return Tn(i.type)&&ma(),cn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ao(h,!1);else{if(Kt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Aa(n),E!==null){for(i.flags|=128,Ao(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,n=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}n=n.sibling}h.tail!==null&&Te()>Ts&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304)}else{if(!l)if(n=Aa(E),n!==null){if(i.flags|=128,l=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ft)return cn(i),null}else 2*Te()-h.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return pc(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function rv(n,i){switch(Mu(i),i.tag){case 1:return Tn(i.type)&&ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),It(Mn),It(ln),Fu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Nu(i),null;case 13:if(It(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ys(),null;case 10:return Pu(i.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Ia=!1,fn=!1,sv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Es(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(n,i,l)}else o.current=null}function nc(n,i,o){try{o()}catch(l){Bt(n,i,l)}}var mp=!1;function ov(n,i){if(pu=ta,n=Yd(),ou(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,O=-1,ee=0,ye=0,Se=n,ve=null;t:for(;;){for(var Ue;Se!==o||f!==0&&Se.nodeType!==3||(U=E+f),Se!==h||l!==0&&Se.nodeType!==3||(O=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===n)break t;if(ve===o&&++ee===f&&(U=E),ve===h&&++ye===l&&(O=E),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}o=U===-1||O===-1?null:{start:U,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(mu={focusedElem:n,selectionRange:o},ta=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Ht=Be.memoizedState,q=i.stateNode,z=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ti(i.type,Ve),Ht);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Bt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return Be=mp,mp=!1,Be}function Ro(n,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&n)===n){var h=f.destroy;f.destroy=void 0,h!==void 0&&nc(i,o,h)}f=f.next}while(f!==l)}}function Fa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ic(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gp(n){var i=n.alternate;i!==null&&(n.alternate=null,gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[go],delete i[xu],delete i[H_],delete i[G_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _p(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(n=n.child,n!==null))for(rc(n,i,o),n=n.sibling;n!==null;)rc(n,i,o),n=n.sibling}function sc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(sc(n,i,o),n=n.sibling;n!==null;)sc(n,i,o),n=n.sibling}var rn=null,ni=!1;function ur(n,i,o){for(o=o.child;o!==null;)xp(n,i,o),o=o.sibling}function xp(n,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Tt,o)}catch{}switch(o.tag){case 5:fn||Es(o,i);case 6:var l=rn,f=ni;rn=null,ur(n,i,o),rn=l,ni=f,rn!==null&&(ni?(n=rn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ni?(n=rn,o=o.stateNode,n.nodeType===8?vu(n.parentNode,o):n.nodeType===1&&vu(n,o),ro(n)):vu(rn,o.stateNode));break;case 4:l=rn,f=ni,rn=o.stateNode.containerInfo,ni=!0,ur(n,i,o),rn=l,ni=f;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&nc(o,i,E),f=f.next}while(f!==l)}ur(n,i,o);break;case 1:if(!fn&&(Es(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Bt(o,i,U)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,ur(n,i,o),fn=l):ur(n,i,o);break;default:ur(n,i,o)}}function yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new sv),i.forEach(function(l){var f=mv.bind(null,n,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:rn=U.stateNode,ni=!1;break e;case 3:rn=U.stateNode.containerInfo,ni=!0;break e;case 4:rn=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(rn===null)throw Error(t(160));xp(h,E,f),rn=null,ni=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(ee){Bt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,n),i=i.sibling}function Sp(n,i){var o=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),_i(n),l&4){try{Ro(3,n,n.return),Fa(3,n)}catch(Ve){Bt(n,n.return,Ve)}try{Ro(5,n,n.return)}catch(Ve){Bt(n,n.return,Ve)}}break;case 1:ii(i,n),_i(n),l&512&&o!==null&&Es(o,o.return);break;case 5:if(ii(i,n),_i(n),l&512&&o!==null&&Es(o,o.return),n.flags&32){var f=n.stateNode;try{ut(f,"")}catch(Ve){Bt(n,n.return,Ve)}}if(l&4&&(f=n.stateNode,f!=null)){var h=n.memoizedProps,E=o!==null?o.memoizedProps:h,U=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ht(f,h),rt(U,E);var ee=rt(U,h);for(E=0;E<O.length;E+=2){var ye=O[E],Se=O[E+1];ye==="style"?Je(f,Se):ye==="dangerouslySetInnerHTML"?Ie(f,Se):ye==="children"?ut(f,Se):b(f,ye,Se,ee)}switch(U){case"input":ct(f,h);break;case"textarea":ge(f,h);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?D(f,!!h.multiple,Ue,!1):ve!==!!h.multiple&&(h.defaultValue!=null?D(f,!!h.multiple,h.defaultValue,!0):D(f,!!h.multiple,h.multiple?[]:"",!1))}f[go]=h}catch(Ve){Bt(n,n.return,Ve)}}break;case 6:if(ii(i,n),_i(n),l&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,h=n.memoizedProps;try{f.nodeValue=h}catch(Ve){Bt(n,n.return,Ve)}}break;case 3:if(ii(i,n),_i(n),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(Ve){Bt(n,n.return,Ve)}break;case 4:ii(i,n),_i(n);break;case 13:ii(i,n),_i(n),f=n.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(lc=Te())),l&4&&yp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(fn=(ee=fn)||ye,ii(i,n),fn=ee):ii(i,n),_i(n),l&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ye&&(n.mode&1)!==0)for(Fe=n,ye=n.child;ye!==null;){for(Se=Fe=ye;Fe!==null;){switch(ve=Fe,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ro(4,ve,ve.return);break;case 1:Es(ve,ve.return);var Be=ve.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ve,o=ve.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Bt(l,o,Ve)}}break;case 5:Es(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Tp(Se);continue}}Ue!==null?(Ue.return=ve,Fe=Ue):Tp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{f=Se.stateNode,ee?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=Ze("display",E))}catch(Ve){Bt(n,n.return,Ve)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Ve){Bt(n,n.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,n),_i(n),l&4&&yp(n);break;case 21:break;default:ii(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(_p(o)){var l=o;break e}o=o.return}throw Error(t(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ut(f,""),l.flags&=-33);var h=vp(n);sc(n,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,U=vp(n);rc(n,U,E);break;default:throw Error(t(161))}}catch(O){Bt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function av(n,i,o){Fe=n,Ep(n)}function Ep(n,i,o){for(var l=(n.mode&1)!==0;Fe!==null;){var f=Fe,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ia;if(!E){var U=f.alternate,O=U!==null&&U.memoizedState!==null||fn;U=Ia;var ee=fn;if(Ia=E,(fn=O)&&!ee)for(Fe=f;Fe!==null;)E=Fe,O=E.child,E.tag===22&&E.memoizedState!==null?wp(f):O!==null?(O.return=E,Fe=O):wp(f);for(;h!==null;)Fe=h,Ep(h),h=h.sibling;Fe=f,Ia=U,fn=ee}Mp(n)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Fe=h):Mp(n)}}function Mp(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Fa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Th(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Th(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ye=ee.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ro(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||i.flags&512&&ic(i)}catch(ve){Bt(i,i.return,ve)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Tp(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function wp(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(O){Bt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(O){Bt(i,f,O)}}var h=i.return;try{ic(i)}catch(O){Bt(i,h,O)}break;case 5:var E=i.return;try{ic(i)}catch(O){Bt(i,E,O)}}}catch(O){Bt(i,i.return,O)}if(i===n){Fe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Fe=U;break}Fe=i.return}}var lv=Math.ceil,Oa=C.ReactCurrentDispatcher,oc=C.ReactCurrentOwner,Xn=C.ReactCurrentBatchConfig,vt=0,en=null,Wt=null,sn=0,Fn=0,Ms=rr(0),Kt=0,Co=null,Or=0,ka=0,ac=0,Po=null,An=null,lc=0,Ts=1/0,Ii=null,Ba=!1,uc=null,cr=null,za=!1,fr=null,Va=0,bo=0,cc=null,Ha=-1,Ga=0;function xn(){return(vt&6)!==0?Te():Ha!==-1?Ha:Ha=Te()}function dr(n){return(n.mode&1)===0?1:(vt&2)!==0&&sn!==0?sn&-sn:X_.transition!==null?(Ga===0&&(Ga=_n()),Ga):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Rd(n.type)),n)}function ri(n,i,o,l){if(50<bo)throw bo=0,cc=null,Error(t(185));En(n,o,l),((vt&2)===0||n!==en)&&(n===en&&((vt&2)===0&&(ka|=o),Kt===4&&hr(n,sn)),Rn(n,l),o===1&&vt===0&&(i.mode&1)===0&&(Ts=Te()+500,_a&&or()))}function Rn(n,i){var o=n.callbackNode;Bn(n,i);var l=hi(n,n===en?sn:0);if(l===0)o!==null&&ne(o),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(o!=null&&ne(o),i===1)n.tag===0?W_(Rp.bind(null,n)):dh(Rp.bind(null,n)),z_(function(){(vt&6)===0&&or()}),o=null;else{switch(xd(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=Ip(o,Ap.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ap(n,i){if(Ha=-1,Ga=0,(vt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var l=hi(n,n===en?sn:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Wa(n,l);else{i=l;var f=vt;vt|=2;var h=Pp();(en!==n||sn!==i)&&(Ii=null,Ts=Te()+500,Br(n,i));do try{fv();break}catch(U){Cp(n,U)}while(!0);Cu(),Oa.current=h,vt=f,Wt!==null?i=0:(en=null,sn=0,i=Kt)}if(i!==0){if(i===2&&(f=Ri(n),f!==0&&(l=f,i=fc(n,f))),i===1)throw o=Co,Br(n,0),hr(n,l),Rn(n,Te()),o;if(i===6)hr(n,l);else{if(f=n.current.alternate,(l&30)===0&&!uv(f)&&(i=Wa(n,l),i===2&&(h=Ri(n),h!==0&&(l=h,i=fc(n,h))),i===1))throw o=Co,Br(n,0),hr(n,l),Rn(n,Te()),o;switch(n.finishedWork=f,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:zr(n,An,Ii);break;case 3:if(hr(n,l),(l&130023424)===l&&(i=lc+500-Te(),10<i)){if(hi(n,0)!==0)break;if(f=n.suspendedLanes,(f&l)!==l){xn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=_u(zr.bind(null,n,An,Ii),i);break}zr(n,An,Ii);break;case 4:if(hr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,f=-1;0<l;){var E=31-ot(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*lv(l/1960))-l,10<l){n.timeoutHandle=_u(zr.bind(null,n,An,Ii),l);break}zr(n,An,Ii);break;case 5:zr(n,An,Ii);break;default:throw Error(t(329))}}}return Rn(n,Te()),n.callbackNode===o?Ap.bind(null,n):null}function fc(n,i){var o=Po;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=Wa(n,i),n!==2&&(i=An,An=o,i!==null&&dc(i)),n}function dc(n){An===null?An=n:An.push.apply(An,n)}function uv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Jn(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~ac,i&=~ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;n[o]=-1,i&=~l}}function Rp(n){if((vt&6)!==0)throw Error(t(327));ws();var i=hi(n,0);if((i&1)===0)return Rn(n,Te()),null;var o=Wa(n,i);if(n.tag!==0&&o===2){var l=Ri(n);l!==0&&(i=l,o=fc(n,l))}if(o===1)throw o=Co,Br(n,0),hr(n,i),Rn(n,Te()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,An,Ii),Rn(n,Te()),null}function hc(n,i){var o=vt;vt|=1;try{return n(i)}finally{vt=o,vt===0&&(Ts=Te()+500,_a&&or())}}function kr(n){fr!==null&&fr.tag===0&&(vt&6)===0&&ws();var i=vt;vt|=1;var o=Xn.transition,l=Rt;try{if(Xn.transition=null,Rt=1,n)return n()}finally{Rt=l,Xn.transition=o,vt=i,(vt&6)===0&&or()}}function pc(){Fn=Ms.current,It(Ms)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,B_(o)),Wt!==null)for(o=Wt.return;o!==null;){var l=o;switch(Mu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:ys(),It(Mn),It(ln),Fu();break;case 5:Nu(l);break;case 4:ys();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Pu(l.type._context);break;case 22:case 23:pc()}o=o.return}if(en=n,Wt=n=pr(n.current,null),sn=Fn=i,Kt=0,Co=null,ac=ka=Or=0,An=Po=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}o.pending=l}Nr=null}return n}function Cp(n,i){do{var o=Wt;try{if(Cu(),Ra.current=La,Ca){for(var l=kt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ca=!1}if(Fr=0,Jt=$t=kt=null,Eo=!1,Mo=0,oc.current=null,o===null||o.return===null){Kt=1,Co=i,Wt=null;break}e:{var h=n,E=o.return,U=o,O=i;if(i=sn,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,ye=U,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Jh(E);if(Ue!==null){Ue.flags&=-257,ep(Ue,E,U,h,i),Ue.mode&1&&Qh(h,ee,i),i=Ue,O=ee;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Be.add(O);break e}else{if((i&1)===0){Qh(h,ee,i),mc();break e}O=Error(t(426))}}else if(Ft&&U.mode&1){var Ht=Jh(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),ep(Ht,E,U,h,i),Au(Ss(O,U));break e}}h=O=Ss(O,U),Kt!==4&&(Kt=2),Po===null?Po=[h]:Po.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Kh(h,O,i);Mh(h,q);break e;case 1:U=O;var z=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(cr===null||!cr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Zh(h,U,i);Mh(h,we);break e}}h=h.return}while(h!==null)}Lp(o)}catch(Xe){i=Xe,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function Pp(){var n=Oa.current;return Oa.current=La,n===null?La:n}function mc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Or&268435455)===0&&(ka&268435455)===0||hr(en,sn)}function Wa(n,i){var o=vt;vt|=2;var l=Pp();(en!==n||sn!==i)&&(Ii=null,Br(n,i));do try{cv();break}catch(f){Cp(n,f)}while(!0);if(Cu(),vt=o,Oa.current=l,Wt!==null)throw Error(t(261));return en=null,sn=0,Kt}function cv(){for(;Wt!==null;)bp(Wt)}function fv(){for(;Wt!==null&&!W();)bp(Wt)}function bp(n){var i=Np(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,i===null?Lp(n):Wt=i,oc.current=null}function Lp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=iv(o,i,Fn),o!==null){Wt=o;return}}else{if(o=rv(o,i),o!==null){o.flags&=32767,Wt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);Kt===0&&(Kt=5)}function zr(n,i,o){var l=Rt,f=Xn.transition;try{Xn.transition=null,Rt=1,dv(n,i,o,l)}finally{Xn.transition=f,Rt=l}return null}function dv(n,i,o,l){do ws();while(fr!==null);if((vt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(Qo(n,h),n===en&&(Wt=en=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Ip(nt,function(){return ws(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var E=Rt;Rt=1;var U=vt;vt|=4,oc.current=null,ov(n,o),Sp(o,n),D_(mu),ta=!!pu,mu=pu=null,n.current=o,av(o),Ae(),vt=U,Rt=E,Xn.transition=h}else n.current=o;if(za&&(za=!1,fr=n,Va=f),h=n.pendingLanes,h===0&&(cr=null),on(o.stateNode),Rn(n,Te()),i!==null)for(l=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,n=uc,uc=null,n;return(Va&1)!==0&&n.tag!==0&&ws(),h=n.pendingLanes,(h&1)!==0?n===cc?bo++:(bo=0,cc=n):bo=0,or(),null}function ws(){if(fr!==null){var n=xd(Va),i=Xn.transition,o=Rt;try{if(Xn.transition=null,Rt=16>n?16:n,fr===null)var l=!1;else{if(n=fr,fr=null,Va=0,(vt&6)!==0)throw Error(t(331));var f=vt;for(vt|=4,Fe=n.current;Fe!==null;){var h=Fe,E=h.child;if((Fe.flags&16)!==0){var U=h.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ee=U[O];for(Fe=ee;Fe!==null;){var ye=Fe;switch(ye.tag){case 0:case 11:case 15:Ro(8,ye,h)}var Se=ye.child;if(Se!==null)Se.return=ye,Fe=Se;else for(;Fe!==null;){ye=Fe;var ve=ye.sibling,Ue=ye.return;if(gp(ye),ye===ee){Fe=null;break}if(ve!==null){ve.return=Ue,Fe=ve;break}Fe=Ue}}}var Be=h.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Ht=Ve.sibling;Ve.sibling=null,Ve=Ht}while(Ve!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Fe=E;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Fe=q;break e}Fe=h.return}}var z=n.current;for(Fe=z;Fe!==null;){E=Fe;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Fe=$;else e:for(E=z;Fe!==null;){if(U=Fe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Fa(9,U)}}catch(Xe){Bt(U,U.return,Xe)}if(U===E){Fe=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Fe=we;break e}Fe=U.return}}if(vt=f,or(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Tt,n)}catch{}l=!0}return l}finally{Rt=o,Xn.transition=i}}return!1}function Dp(n,i,o){i=Ss(o,i),i=Kh(n,i,1),n=lr(n,i,1),i=xn(),n!==null&&(En(n,1,i),Rn(n,i))}function Bt(n,i,o){if(n.tag===3)Dp(n,n,o);else for(;i!==null;){if(i.tag===3){Dp(i,n,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){n=Ss(o,n),n=Zh(i,n,1),i=lr(i,n,1),n=xn(),i!==null&&(En(i,1,n),Rn(i,n));break}}i=i.return}}function hv(n,i,o){var l=n.pingCache;l!==null&&l.delete(i),i=xn(),n.pingedLanes|=n.suspendedLanes&o,en===n&&(sn&o)===o&&(Kt===4||Kt===3&&(sn&130023424)===sn&&500>Te()-lc?Br(n,0):ac|=o),Rn(n,i)}function Up(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=xn();n=Di(n,i),n!==null&&(En(n,i,o),Rn(n,o))}function pv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Up(n,o)}function mv(n,i){var o=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Up(n,o)}var Np;Np=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Mn.current)wn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return wn=!1,nv(n,i,o);wn=(n.flags&131072)!==0}else wn=!1,Ft&&(i.flags&1048576)!==0&&hh(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(n,i),n=i.pendingProps;var f=hs(i,ln.current);xs(i,o),f=Bu(null,i,l,n,f,o);var h=zu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ga(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Du(i),f.updater=Da,i.stateNode=f,f._reactInternals=i,qu(i,l,n,o),i=Ku(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&Eu(i),vn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(n,i),n=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=_v(l),n=ti(l,n),f){case 0:i=$u(null,i,l,n,o);break e;case 1:i=op(null,i,l,n,o);break e;case 11:i=tp(null,i,l,n,o);break e;case 14:i=np(null,i,l,ti(l.type,n),o);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),$u(n,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),op(n,i,l,f,o);case 3:e:{if(ap(i),n===null)throw Error(t(387));l=i.pendingProps,h=i.memoizedState,f=h.element,Eh(n,i),wa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ss(Error(t(423)),i),i=lp(n,i,l,o,f);break e}else if(l!==f){f=Ss(Error(t(424)),i),i=lp(n,i,l,o,f);break e}else for(In=ir(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,ei=null,o=yh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),l===f){i=Ni(n,i,o);break e}vn(n,i,l,o)}i=i.child}return i;case 5:return wh(i),n===null&&wu(i),l=i.type,f=i.pendingProps,h=n!==null?n.memoizedProps:null,E=f.children,gu(l,f)?E=null:h!==null&&gu(l,h)&&(i.flags|=32),sp(n,i),vn(n,i,E,o),i.child;case 6:return n===null&&wu(i),null;case 13:return up(n,i,o);case 4:return Uu(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=_s(i,null,l,o):vn(n,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),tp(n,i,l,f,o);case 7:return vn(n,i,i.pendingProps,o),i.child;case 8:return vn(n,i,i.pendingProps.children,o),i.child;case 12:return vn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Lt(Ea,l._currentValue),l._currentValue=E,h!==null)if(Jn(h.value,E)){if(h.children===f.children&&!Mn.current){i=Ni(n,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var O=U.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ui(-1,o&-o),O.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var ye=ee.pending;ye===null?O.next=O:(O.next=ye.next,ye.next=O),ee.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),bu(h.return,o,i),U.lanes|=o;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),bu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}vn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,xs(i,o),f=Gn(f),l=l(f),i.flags|=1,vn(n,i,l,o),i.child;case 14:return l=i.type,f=ti(l,i.pendingProps),f=ti(l.type,f),np(n,i,l,f,o);case 15:return ip(n,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),Na(n,i),i.tag=1,Tn(l)?(n=!0,ga(i)):n=!1,xs(i,o),jh(i,l,f),qu(i,l,f,o),Ku(null,i,l,!0,n,o);case 19:return fp(n,i,o);case 22:return rp(n,i,o)}throw Error(t(156,i.tag))};function Ip(n,i){return te(n,i)}function gv(n,i,o,l){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,l){return new gv(n,i,o,l)}function gc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _v(n){if(typeof n=="function")return gc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===he)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Xa(n,i,o,l,f,h){var E=2;if(l=n,typeof n=="function")gc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case N:return Vr(o.children,f,h,i);case V:E=8,f|=8;break;case P:return n=qn(12,o,i,f|2),n.elementType=P,n.lanes=h,n;case Z:return n=qn(13,o,i,f),n.elementType=Z,n.lanes=h,n;case fe:return n=qn(19,o,i,f),n.elementType=fe,n.lanes=h,n;case ce:return qa(o,f,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:E=10;break e;case k:E=9;break e;case se:E=11;break e;case he:E=14;break e;case ae:E=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(E,o,i,f),i.elementType=n,i.type=l,i.lanes=h,i}function Vr(n,i,o,l){return n=qn(7,n,l,i),n.lanes=o,n}function qa(n,i,o,l){return n=qn(22,n,l,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function _c(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function vc(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function vv(n,i,o,l,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xc(n,i,o,l,f,h,E,U,O){return n=new vv(n,i,o,U,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(h),n}function xv(n,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:n,containerInfo:i,implementation:o}}function Fp(n){if(!n)return sr;n=n._reactInternals;e:{if(di(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Tn(o))return ch(n,o,i)}return i}function Op(n,i,o,l,f,h,E,U,O){return n=xc(o,l,!0,n,f,h,E,U,O),n.context=Fp(null),o=n.current,l=xn(),f=dr(o),h=Ui(l,f),h.callback=i??null,lr(o,h,f),n.current.lanes=f,En(n,f,l),Rn(n,l),n}function Ya(n,i,o,l){var f=i.current,h=xn(),E=dr(f);return o=Fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(h,E),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=lr(f,i,E),n!==null&&(ri(n,f,E,h),Ta(n,f,E)),E}function ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function yc(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}function yv(){return null}var Bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sc(n){this._internalRoot=n}$a.prototype.render=Sc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ya(n,i,null,null)},$a.prototype.unmount=Sc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){Ya(null,n,null,null)}),i[Ci]=null}};function $a(n){this._internalRoot=n}$a.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ed();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&wd(n)}};function Ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ka(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Sv(n,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ee=ja(E);h.call(ee)}}var E=Op(i,l,n,0,null,!1,!1,"",zp);return n._reactRootContainer=E,n[Ci]=E.current,po(n.nodeType===8?n.parentNode:n),kr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var ee=ja(O);U.call(ee)}}var O=xc(n,0,!1,null,null,!1,!1,"",zp);return n._reactRootContainer=O,n[Ci]=O.current,po(n.nodeType===8?n.parentNode:n),kr(function(){Ya(i,O,o,l)}),O}function Za(n,i,o,l,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var U=f;f=function(){var O=ja(E);U.call(O)}}Ya(i,E,n,f)}else E=Sv(o,i,n,f,l);return ja(E)}yd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);o!==0&&(ql(i,o|1),Rn(i,Te()),(vt&6)===0&&(Ts=Te()+500,or()))}break;case 13:kr(function(){var l=Di(n,1);if(l!==null){var f=xn();ri(l,n,1,f)}}),yc(n,1)}},Yl=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var o=xn();ri(i,n,134217728,o)}yc(n,134217728)}},Sd=function(n){if(n.tag===13){var i=dr(n),o=Di(n,i);if(o!==null){var l=xn();ri(o,n,i,l)}yc(n,i)}},Ed=function(){return Rt},Md=function(n,i){var o=Rt;try{return Rt=n,i()}finally{Rt=o}},Pe=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==n&&l.form===n.form){var f=pa(l);if(!f)throw Error(t(90));it(l),ct(l,f)}}}break;case"textarea":ge(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Ut=hc,Yt=kr;var Ev={usingClientEntryPoint:!1,Events:[_o,fs,pa,Le,st,hc]},Lo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Tt=Qa.inject(Mv),pt=Qa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,Cn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(i))throw Error(t(200));return xv(n,i,null,o)},Cn.createRoot=function(n,i){if(!Ec(n))throw Error(t(299));var o=!1,l="",f=Bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xc(n,1,!1,null,null,o,!1,l,f),n[Ci]=i.current,po(n.nodeType===8?n.parentNode:n),new Sc(i)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return kr(n)},Cn.hydrate=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!0,o)},Cn.hydrateRoot=function(n,i,o){if(!Ec(n))throw Error(t(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",E=Bp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Op(i,null,n,1,o??null,f,!1,h,E),n[Ci]=i.current,po(n),l)for(n=0;n<l.length;n++)o=l[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new $a(i)},Cn.render=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!1,o)},Cn.unmountComponentAtNode=function(n){if(!Ka(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){Za(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},Cn.unstable_batchedUpdates=hc,Cn.unstable_renderSubtreeIntoContainer=function(n,i,o,l){if(!Ka(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Za(n,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var jp;function Lv(){if(jp)return wc.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wc.exports=bv(),wc.exports}var $p;function Dv(){if($p)return Ja;$p=1;var s=Lv();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var Uv=Dv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="170",Nv=0,Kp=1,Iv=2,tg=1,Fv=2,Vi=3,Ar=0,Ln=1,Hi=2,Mr=0,Vs=1,Zp=2,Qp=3,Jp=4,Ov=5,Kr=100,kv=101,Bv=102,zv=103,Vv=104,Hv=200,Gv=201,Wv=202,Xv=203,uf=204,cf=205,qv=206,Yv=207,jv=208,$v=209,Kv=210,Zv=211,Qv=212,Jv=213,e0=214,ff=0,df=1,hf=2,Ws=3,pf=4,mf=5,gf=6,_f=7,ng=0,t0=1,n0=2,Tr=0,i0=1,r0=2,s0=3,o0=4,a0=5,l0=6,u0=7,ig=300,Xs=301,qs=302,vf=303,xf=304,kl=306,yf=1e3,Qr=1001,Sf=1002,fi=1003,c0=1004,el=1005,xi=1006,Cc=1007,Jr=1008,qi=1009,rg=1010,sg=1011,Ho=1012,id=1013,es=1014,Gi=1015,Go=1016,rd=1017,sd=1018,Ys=1020,og=35902,ag=1021,lg=1022,ci=1023,ug=1024,cg=1025,Hs=1026,js=1027,fg=1028,od=1029,dg=1030,ad=1031,ld=1033,wl=33776,Al=33777,Rl=33778,Cl=33779,Ef=35840,Mf=35841,Tf=35842,wf=35843,Af=36196,Rf=37492,Cf=37496,Pf=37808,bf=37809,Lf=37810,Df=37811,Uf=37812,Nf=37813,If=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Vf=37820,Hf=37821,Pl=36492,Gf=36494,Wf=36495,hg=36283,Xf=36284,qf=36285,Yf=36286,f0=3200,d0=3201,h0=0,p0=1,Er="",jn="srgb",Ks="srgb-linear",Bl="linear",Pt="srgb",As=7680,em=519,m0=512,g0=513,_0=514,pg=515,v0=516,x0=517,y0=518,S0=519,tm=35044,nm="300 es",Wi=2e3,Fl=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(t);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,jf=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function bn(s,e,t){return Math.max(e,Math.min(t,s))}function E0(s,e){return(s%e+e)%e}function bc(s,e,t){return(1-t)*s+t*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,a,u,c,d,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m)}set(e,t,r,a,u,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=u,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],T=r[8],R=a[0],y=a[3],g=a[6],L=a[1],b=a[4],C=a[7],Y=a[2],F=a[5],N=a[8];return u[0]=c*R+d*L+p*Y,u[3]=c*y+d*b+p*F,u[6]=c*g+d*C+p*N,u[1]=m*R+_*L+x*Y,u[4]=m*y+_*b+x*F,u[7]=m*g+_*C+x*N,u[2]=v*R+S*L+T*Y,u[5]=v*y+S*b+T*F,u[8]=v*g+S*C+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*c*_-t*d*m-r*u*_+r*d*p+a*u*m-a*c*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*c-d*m,v=d*p-_*u,S=m*u-c*p,T=t*x+r*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*c)*R,e[3]=v*R,e[4]=(_*t-a*p)*R,e[5]=(a*u-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(c*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new at;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M0(){const s=Ol("canvas");return s.style.display="block",s}const im={};function Bo(s){s in im||(im[s]=!0,console.warn(s))}function T0(s,e,t){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}function w0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],om=[.3127,.329],am=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Ks]:{primaries:rm,whitePoint:om,transfer:Bl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:rm,whitePoint:om,transfer:Pt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Rs;class R0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Ol("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ol("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Xi(u[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Dc(a[c].image)):u.push(Dc(a[c]))}else u=Dc(a);r.url=u}return t||(e.images[this.uuid]=r),r}}function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?R0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P0=0;class Dn extends Zs{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=Qr,a=Qr,u=xi,c=Jr,d=ci,p=qi,m=Dn.DEFAULT_ANISOTROPY,_=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Wo(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=ig;Dn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],S=p[5],T=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+R)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(m+1)/2,C=(S+1)/2,Y=(g+1)/2,F=(_+v)/4,N=(x+R)/4,V=(T+y)/4;return b>C&&b>Y?b<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(b),a=F/r,u=N/r):C>Y?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=F/a,u=V/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=N/u,a=V/u),this.set(r,a,u,t),this}let L=Math.sqrt((y-T)*(y-T)+(x-R)*(x-R)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(y-T)/L,this.y=(x-R)/L,this.z=(v-_)/L,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends Zs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends b0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class _g extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,u,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[c+0],S=u[c+1],T=u[c+2],R=u[c+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d===1){e[t+0]=v,e[t+1]=S,e[t+2]=T,e[t+3]=R;return}if(x!==R||p!==v||m!==S||_!==T){let y=1-d;const g=p*v+m*S+_*T+x*R,L=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const Y=Math.sqrt(b),F=Math.atan2(Y,g*L);y=Math.sin(y*F)/Y,d=Math.sin(d*F)/Y}const C=d*L;if(p=p*y+v*C,m=m*y+S*C,_=_*y+T*C,x=x*y+R*C,y===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=Y,m*=Y,_*=Y,x*=Y}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,u,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[c],v=u[c+1],S=u[c+2],T=u[c+3];return e[t]=d*T+_*x+p*S-m*v,e[t+1]=p*T+_*v+m*x-d*S,e[t+2]=m*T+_*S+d*v-p*x,e[t+3]=_*T-d*x-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=p(r/2),S=p(a/2),T=p(u/2);switch(c){case"XYZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"YXZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"ZXY":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"ZYX":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"YZX":this._x=v*_*x+m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x-v*S*T;break;case"XZY":this._x=v*_*x-m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],u=t[8],c=t[1],d=t[5],p=t[9],m=t[2],_=t[6],x=t[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(c-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(c-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,u=e._z,c=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+c*d+a*m-u*p,this._y=a*_+c*p+u*d-r*m,this._z=u*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*u+t*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-t)*_)/m,v=Math.sin(t*_)/m;return this._w=c*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*a,this.y=u[1]*t+u[4]*r+u[7]*a,this.z=u[2]*t+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*t-u*a),x=2*(u*r-c*t);return this.x=t+p*m+c*x-d*_,this.y=r+p*_+d*m-u*x,this.z=a+p*x+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a,this.y=u[1]*t+u[5]*r+u[9]*a,this.z=u[2]*t+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,u=e.z,c=t.x,d=t.y,p=t.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new J,um=new Xo;class qo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(u,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),nl.subVectors(this.max,No),Cs.subVectors(e.a,No),Ps.subVectors(e.b,No),bs.subVectors(e.c,No),gr.subVectors(Ps,Cs),_r.subVectors(bs,Ps),Hr.subVectors(Cs,bs);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Hr.y,Hr.x,0];return!Nc(t,Cs,Ps,bs,nl)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Cs,Ps,bs,nl))?!1:(il.crossVectors(gr,_r),t=[il.x,il.y,il.z],Nc(t,Cs,Ps,bs,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new J,new J,new J,new J,new J,new J,new J,new J],si=new J,tl=new qo,Cs=new J,Ps=new J,bs=new J,gr=new J,_r=new J,Hr=new J,No=new J,nl=new J,il=new J,Gr=new J;function Nc(s,e,t,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Gr.fromArray(s,u);const d=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),p=e.dot(Gr),m=t.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const D0=new qo,Io=new J,Ic=new J;class ud{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):D0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Ic)),this.expandByPoint(Io.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new J,Fc=new J,rl=new J,vr=new J,Oc=new J,sl=new J,kc=new J;class U0{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Fc.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Fc);const u=e.distanceTo(t)*.5,c=-this.direction.dot(rl),d=vr.dot(this.direction),p=-vr.dot(rl),m=vr.lengthSq(),_=Math.abs(1-c*c);let x,v,S,T;if(_>0)if(x=c*p-d,v=c*d-p,T=u*_,x>=0)if(v>=-T)if(v<=T){const R=1/_;x*=R,v*=R,S=x*(x+c*v+2*d)+v*(c*x+v+2*p)+m}else v=u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*p)+m;else v<=-T?(x=Math.max(0,-(-c*u+d)),v=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m):v<=T?(x=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(x=Math.max(0,-(c*u+d)),v=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m);else v=c>0?-u:u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Fc).addScaledVector(rl,v),S}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),a=Oi.dot(Oi)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,u,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,r,a,u){Oc.subVectors(t,e),sl.subVectors(r,e),kc.crossVectors(Oc,sl);let c=this.direction.dot(kc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;vr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(vr,sl));if(p<0)return null;const m=d*this.direction.dot(Oc.cross(vr));if(m<0||p+m>c)return null;const _=-d*vr.dot(kc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,r,a,u,c,d,p,m,_,x,v,S,T,R,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m,_,x,v,S,T,R,y)}set(e,t,r,a,u,c,d,p,m,_,x,v,S,T,R,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=T,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),u=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=c*_,S=c*x,T=d*_,R=d*x;t[0]=p*_,t[4]=-p*x,t[8]=m,t[1]=S+T*m,t[5]=v-R*m,t[9]=-d*p,t[2]=R-v*m,t[6]=T+S*m,t[10]=c*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,T=m*_,R=m*x;t[0]=v+R*d,t[4]=T*d-S,t[8]=c*m,t[1]=c*x,t[5]=c*_,t[9]=-d,t[2]=S*d-T,t[6]=R+v*d,t[10]=c*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,T=m*_,R=m*x;t[0]=v-R*d,t[4]=-c*x,t[8]=T+S*d,t[1]=S+T*d,t[5]=c*_,t[9]=R-v*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const v=c*_,S=c*x,T=d*_,R=d*x;t[0]=p*_,t[4]=T*m-S,t[8]=v*m+R,t[1]=p*x,t[5]=R*m+v,t[9]=S*m-T,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*m,T=d*p,R=d*m;t[0]=p*_,t[4]=R-v*x,t[8]=T*x+S,t[1]=x,t[5]=c*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*x+T,t[10]=v-R*x}else if(e.order==="XZY"){const v=c*p,S=c*m,T=d*p,R=d*m;t[0]=p*_,t[4]=-x,t[8]=m*_,t[1]=v*x+R,t[5]=c*_,t[9]=S*x-T,t[2]=T*x-S,t[6]=d*_,t[10]=R*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,I0)}lookAt(e,t,r){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xr.crossVectors(r,On),xr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xr.crossVectors(r,On)),xr.normalize(),ol.crossVectors(On,xr),a[0]=xr.x,a[4]=ol.x,a[8]=On.x,a[1]=xr.y,a[5]=ol.y,a[9]=On.y,a[2]=xr.z,a[6]=ol.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],T=r[2],R=r[6],y=r[10],g=r[14],L=r[3],b=r[7],C=r[11],Y=r[15],F=a[0],N=a[4],V=a[8],P=a[12],w=a[1],k=a[5],se=a[9],Z=a[13],fe=a[2],he=a[6],ae=a[10],ce=a[14],B=a[3],le=a[7],re=a[11],I=a[15];return u[0]=c*F+d*w+p*fe+m*B,u[4]=c*N+d*k+p*he+m*le,u[8]=c*V+d*se+p*ae+m*re,u[12]=c*P+d*Z+p*ce+m*I,u[1]=_*F+x*w+v*fe+S*B,u[5]=_*N+x*k+v*he+S*le,u[9]=_*V+x*se+v*ae+S*re,u[13]=_*P+x*Z+v*ce+S*I,u[2]=T*F+R*w+y*fe+g*B,u[6]=T*N+R*k+y*he+g*le,u[10]=T*V+R*se+y*ae+g*re,u[14]=T*P+R*Z+y*ce+g*I,u[3]=L*F+b*w+C*fe+Y*B,u[7]=L*N+b*k+C*he+Y*le,u[11]=L*V+b*se+C*ae+Y*re,u[15]=L*P+b*Z+C*ce+Y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],T=e[3],R=e[7],y=e[11],g=e[15];return T*(+u*p*x-a*m*x-u*d*v+r*m*v+a*d*S-r*p*S)+R*(+t*p*S-t*m*v+u*c*v-a*c*S+a*m*_-u*p*_)+y*(+t*m*x-t*d*S-u*c*x+r*c*S+u*d*_-r*m*_)+g*(-a*d*_-t*p*x+t*d*v+a*c*x-r*c*v+r*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],T=e[12],R=e[13],y=e[14],g=e[15],L=x*y*m-R*v*m+R*p*S-d*y*S-x*p*g+d*v*g,b=T*v*m-_*y*m-T*p*S+c*y*S+_*p*g-c*v*g,C=_*R*m-T*x*m+T*d*S-c*R*S-_*d*g+c*x*g,Y=T*x*p-_*R*p-T*d*v+c*R*v+_*d*y-c*x*y,F=t*L+r*b+a*C+u*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=L*N,e[1]=(R*v*u-x*y*u-R*a*S+r*y*S+x*a*g-r*v*g)*N,e[2]=(d*y*u-R*p*u+R*a*m-r*y*m-d*a*g+r*p*g)*N,e[3]=(x*p*u-d*v*u-x*a*m+r*v*m+d*a*S-r*p*S)*N,e[4]=b*N,e[5]=(_*y*u-T*v*u+T*a*S-t*y*S-_*a*g+t*v*g)*N,e[6]=(T*p*u-c*y*u-T*a*m+t*y*m+c*a*g-t*p*g)*N,e[7]=(c*v*u-_*p*u+_*a*m-t*v*m-c*a*S+t*p*S)*N,e[8]=C*N,e[9]=(T*x*u-_*R*u-T*r*S+t*R*S+_*r*g-t*x*g)*N,e[10]=(c*R*u-T*d*u+T*r*m-t*R*m-c*r*g+t*d*g)*N,e[11]=(_*d*u-c*x*u-_*r*m+t*x*m+c*r*S-t*d*S)*N,e[12]=Y*N,e[13]=(_*R*a-T*x*a+T*r*v-t*R*v-_*r*y+t*x*y)*N,e[14]=(T*d*a-c*R*a-T*r*p+t*R*p+c*r*y-t*d*y)*N,e[15]=(c*x*a-_*d*a+_*r*p-t*x*p-c*r*v+t*d*v)*N,this}scale(e){const t=this.elements,r=e.x,a=e.y,u=e.z;return t[0]*=r,t[4]*=a,t[8]*=u,t[1]*=r,t[5]*=a,t[9]*=u,t[2]*=r,t[6]*=a,t[10]*=u,t[3]*=r,t[7]*=a,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,u=t._x,c=t._y,d=t._z,p=t._w,m=u+u,_=c+c,x=d+d,v=u*m,S=u*_,T=u*x,R=c*_,y=c*x,g=d*x,L=p*m,b=p*_,C=p*x,Y=r.x,F=r.y,N=r.z;return a[0]=(1-(R+g))*Y,a[1]=(S+C)*Y,a[2]=(T-b)*Y,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(v+g))*F,a[6]=(y+L)*F,a[7]=0,a[8]=(T+b)*N,a[9]=(y-L)*N,a[10]=(1-(v+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let u=Ls.set(a[0],a[1],a[2]).length();const c=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,_=1/c,x=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=x,oi.elements[9]*=x,oi.elements[10]*=x,t.setFromRotationMatrix(oi),r.x=u,r.y=c,r.z=d,this}makePerspective(e,t,r,a,u,c,d=Wi){const p=this.elements,m=2*u/(t-e),_=2*u/(r-a),x=(t+e)/(t-e),v=(r+a)/(r-a);let S,T;if(d===Wi)S=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(d===Fl)S=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,u,c,d=Wi){const p=this.elements,m=1/(t-e),_=1/(r-a),x=1/(c-u),v=(t+e)*m,S=(r+a)*_;let T,R;if(d===Wi)T=(c+u)*x,R=-2*x;else if(d===Fl)T=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new J,oi=new Vt,N0=new J(0,0,0),I0=new J(1,1,1),xr=new J,ol=new J,On=new J,cm=new Vt,fm=new Xo;class Yi{constructor(e=0,t=0,r=0,a=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-bn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const dm=new J,Ds=new Xo,ki=new Vt,al=new J,Fo=new J,O0=new J,k0=new Xo,hm=new J(1,0,0),pm=new J(0,1,0),mm=new J(0,0,1),gm={type:"added"},B0={type:"removed"},Us={type:"childadded",child:null},Bc={type:"childremoved",child:null};class pn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new J,t=new Yi,r=new Xo,a=new J(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new at}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?al.copy(e):al.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Fo,al,this.up):ki.lookAt(al,Fo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new J(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new J,Bi=new J,zc=new J,zi=new J,Ns=new J,Is=new J,_m=new J,Vc=new J,Hc=new J,Gc=new J,Wc=new zt,Xc=new zt,qc=new zt;class ui{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ai.subVectors(e,t),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,t,r,a,u){ai.subVectors(a,t),Bi.subVectors(r,t),zc.subVectors(e,t);const c=ai.dot(ai),d=ai.dot(Bi),p=ai.dot(zc),m=Bi.dot(Bi),_=Bi.dot(zc),x=c*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*p-d*_)*v,T=(c*_-d*p)*v;return u.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,a,u,c,d,p){return this.getBarycoord(e,t,r,a,zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,zi.x),p.addScaledVector(c,zi.y),p.addScaledVector(d,zi.z),p)}static getInterpolatedAttribute(e,t,r,a,u,c){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,r),qc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Wc,u.x),c.addScaledVector(Xc,u.y),c.addScaledVector(qc,u.z),c}static isFrontFacing(e,t,r,a){return ai.subVectors(r,t),Bi.subVectors(e,t),ai.cross(Bi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,u){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,a,u)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,u=this.c;let c,d;Ns.subVectors(a,r),Is.subVectors(u,r),Vc.subVectors(e,r);const p=Ns.dot(Vc),m=Is.dot(Vc);if(p<=0&&m<=0)return t.copy(r);Hc.subVectors(e,a);const _=Ns.dot(Hc),x=Is.dot(Hc);if(_>=0&&x<=_)return t.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(r).addScaledVector(Ns,c);Gc.subVectors(e,u);const S=Ns.dot(Gc),T=Is.dot(Gc);if(T>=0&&S<=T)return t.copy(u);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(Is,d);const y=_*T-S*x;if(y<=0&&x-_>=0&&S-T>=0)return _m.subVectors(u,a),d=(x-_)/(x-_+(S-T)),t.copy(a).addScaledVector(_m,d);const g=1/(y+R+v);return c=R*g,d=v*g,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=xt.workingColorSpace){if(e=E0(e,1),t=bn(t,0,1),r=bn(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=Yc(c,u,e+1/3),this.g=Yc(c,u,e),this.b=Yc(c,u,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,t=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,t);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return xt.fromWorkingColorSpace(hn.copy(this),e),Math.round(bn(hn.r*255,0,255))*65536+Math.round(bn(hn.g*255,0,255))*256+Math.round(bn(hn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(hn.copy(this),t);const r=hn.r,a=hn.g,u=hn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const x=c-d;switch(m=_<=.5?x/(c+d):x/(2-c-d),c){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=jn){xt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,r=hn.g,a=hn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(ll);const r=bc(yr.h,ll.h,t),a=bc(yr.s,ll.s,t),u=bc(yr.l,ll.l,t);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*a,this.g=u[1]*t+u[4]*r+u[7]*a,this.b=u[2]*t+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ct;Ct.NAMES=xg;let z0=0;class zl extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Wo(),this.name="",this.blending=Vs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(t){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yg extends zl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new J,ul=new Et;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,u){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class Sg extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Eg extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ei extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let V0=0;const Yn=new Vt,jc=new pn,Fs=new J,kn=new qo,Oo=new qo,nn=new J;class Rr extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Eg:Sg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new at().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,r){return Yn.makeTranslation(e,t,r),this.applyMatrix4(Yn),this}scale(e,t,r){return Yn.makeScale(e,t,r),this.applyMatrix4(Yn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ei(r,3))}else{for(let r=0,a=t.count;r<a;r++){const u=e[r];t.setXYZ(r,u.x,u.y,u.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const u=t[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const d=t[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(kn.min,Oo.min),kn.expandByPoint(nn),nn.addVectors(kn.max,Oo.max),kn.expandByPoint(nn)):(kn.expandByPoint(Oo.min),kn.expandByPoint(Oo.max))}kn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(t)for(let u=0,c=t.length;u<c;u++){const d=t[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)nn.fromBufferAttribute(d,m),p&&(Fs.fromBufferAttribute(e,m),nn.add(Fs)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,u=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new J,p[V]=new J;const m=new J,_=new J,x=new J,v=new Et,S=new Et,T=new Et,R=new J,y=new J;function g(V,P,w){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,V),S.fromBufferAttribute(u,P),T.fromBufferAttribute(u,w),_.sub(m),x.sub(m),S.sub(v),T.sub(v);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(k),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),d[V].add(R),d[P].add(R),d[w].add(R),p[V].add(y),p[P].add(y),p[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,P=L.length;V<P;++V){const w=L[V],k=w.start,se=w.count;for(let Z=k,fe=k+se;Z<fe;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new J,C=new J,Y=new J,F=new J;function N(V){Y.fromBufferAttribute(a,V),F.copy(Y);const P=d[V];b.copy(P),b.sub(Y.multiplyScalar(Y.dot(P))).normalize(),C.crossVectors(F,P);const k=C.dot(p[V])<0?-1:1;c.setXYZW(V,b.x,b.y,b.z,k)}for(let V=0,P=L.length;V<P;++V){const w=L[V],k=w.start,se=w.count;for(let Z=k,fe=k+se;Z<fe;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new J,u=new J,c=new J,d=new J,p=new J,m=new J,_=new J,x=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,T),u.fromBufferAttribute(t,R),c.fromBufferAttribute(t,y),_.subVectors(c,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),u.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),_.subVectors(c,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let S=0,T=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)v[T++]=m[S++]}return new Si(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(t))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Vt,Wr=new U0,cl=new ud,xm=new J,fl=new J,dl=new J,hl=new J,$c=new J,pl=new J,ym=new J,ml=new J;class yi extends pn{constructor(e=new Rr,t=new yg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){pl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&($c.fromBufferAttribute(x,e),c?pl.addScaledVector($c,_):pl.addScaledVector($c.sub(t),_))}t.add(pl)}return t}raycast(e,t){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),Wr.copy(e.ray).recast(e.near),!(cl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(cl,xm)===null||Wr.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(vm.copy(u).invert(),Wr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,R=v.length;T<R;T++){const y=v[T],g=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,Y=b;C<Y;C+=3){const F=d.getX(C),N=d.getX(C+1),V=d.getX(C+2);a=gl(this,g,e,r,m,_,x,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const L=d.getX(y),b=d.getX(y+1),C=d.getX(y+2);a=gl(this,c,e,r,m,_,x,L,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,R=v.length;T<R;T++){const y=v[T],g=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,Y=b;C<Y;C+=3){const F=C,N=C+1,V=C+2;a=gl(this,g,e,r,m,_,x,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const L=y,b=y+1,C=y+2;a=gl(this,c,e,r,m,_,x,L,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function H0(s,e,t,r,a,u,c,d){let p;if(e.side===Ln?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===Ar,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ml);return m<t.near||m>t.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,t,r,a,u,c,d,p,m){s.getVertexPosition(d,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const _=H0(s,e,t,r,fl,dl,hl,ym);if(_){const x=new J;ui.getBarycoord(ym,fl,dl,hl,x),a&&(_.uv=ui.getInterpolatedAttribute(a,d,p,m,x,new Et)),u&&(_.uv1=ui.getInterpolatedAttribute(u,d,p,m,x,new Et)),c&&(_.normal=ui.getInterpolatedAttribute(c,d,p,m,x,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new J,materialIndex:0};ui.getNormal(fl,dl,hl,v.normal),_.face=v,_.barycoord=x}return _}class Yo extends Rr{constructor(e=1,t=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],_=[],x=[];let v=0,S=0;T("z","y","x",-1,-1,r,t,e,c,u,0),T("z","y","x",1,-1,r,t,-e,c,u,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,u,4),T("x","y","z",-1,-1,e,t,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(x,2));function T(R,y,g,L,b,C,Y,F,N,V,P){const w=C/N,k=Y/V,se=C/2,Z=Y/2,fe=F/2,he=N+1,ae=V+1;let ce=0,B=0;const le=new J;for(let re=0;re<ae;re++){const I=re*k-Z;for(let ie=0;ie<he;ie++){const Ne=ie*w-se;le[R]=Ne*L,le[y]=I*b,le[g]=fe,m.push(le.x,le.y,le.z),le[R]=0,le[y]=0,le[g]=F>0?1:-1,_.push(le.x,le.y,le.z),x.push(ie/N),x.push(1-re/V),ce+=1}}for(let re=0;re<V;re++)for(let I=0;I<N;I++){const ie=v+I+he*re,Ne=v+I+he*(re+1),K=v+(I+1)+he*(re+1),j=v+(I+1)+he*re;p.push(ie,Ne,j),p.push(Ne,K,j),B+=6}d.addGroup(S,B,P),S+=B,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function yn(s){const e={};for(let t=0;t<s.length;t++){const r=$s(s[t]);for(const a in r)e[a]=r[a]}return e}function G0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const W0={clone:$s,merge:yn};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends zl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Tg extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new J,Sm=new Et,Em=new Et;class $n extends Tg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Em),t.subVectors(Em,Sm)}setViewOffset(e,t,r,a,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/p,t-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class Y0 extends pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Os,ks,e,t);a.layers=this.layers,this.add(a);const u=new $n(Os,ks,e,t);u.layers=this.layers,this.add(u);const c=new $n(Os,ks,e,t);c.layers=this.layers,this.add(c);const d=new $n(Os,ks,e,t);d.layers=this.layers,this.add(d);const p=new $n(Os,ks,e,t);p.layers=this.layers,this.add(p);const m=new $n(Os,ks,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,u,c,d,p]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,u),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(x,v,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class wg extends Dn{constructor(e,t,r,a,u,c,d,p,m,_){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,r,a,u,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),u=new ji({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:Mr});u.uniforms.tEquirect.value=t;const c=new yi(a,u),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=xi),new Y0(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(u)}}const Kc=new J,$0=new J,K0=new at;class jr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Kc.subVectors(r,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K0.getNormalMatrix(e),a=this.coplanarPoint(Kc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ud,_l=new J;class cd{constructor(e=new jr,t=new jr,r=new jr,a=new jr,u=new jr,c=new jr){this.planes=[e,t,r,a,u,c]}set(e,t,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],T=a[9],R=a[10],y=a[11],g=a[12],L=a[13],b=a[14],C=a[15];if(r[0].setComponents(p-u,v-m,y-S,C-g).normalize(),r[1].setComponents(p+u,v+m,y+S,C+g).normalize(),r[2].setComponents(p+c,v+_,y+T,C+L).normalize(),r[3].setComponents(p-c,v-_,y-T,C-L).normalize(),r[4].setComponents(p-d,v-x,y-R,C-b).normalize(),t===Wi)r[5].setComponents(p+d,v+x,y+R,C+b).normalize();else if(t===Fl)r[5].setComponents(d,x,R,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ag(){let s=null,e=!1,t=null,r=null;function a(u,c){t(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function Z0(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<x.length;S++){const T=x[v],R=x[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++v,x[v]=R)}x.length=v+1;for(let S=0,T=x.length;S<T;S++){const R=x[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:c}}class Vl extends Rr{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const u=e/2,c=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,v=t/p,S=[],T=[],R=[],y=[];for(let g=0;g<_;g++){const L=g*v-c;for(let b=0;b<m;b++){const C=b*x-u;T.push(C,-L,0),R.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let L=0;L<d;L++){const b=L+m*g,C=L+m*(g+1),Y=L+1+m*(g+1),F=L+1+m*g;S.push(b,C,F),S.push(C,Y,F)}this.setIndex(S),this.setAttribute("position",new Ei(T,3)),this.setAttribute("normal",new Ei(R,3)),this.setAttribute("uv",new Ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
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
}`,Zx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
}`,sS=`#define DISTANCE
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
}`,oS=`#define DISTANCE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,dS=`uniform vec3 diffuse;
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
}`,hS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define MATCAP
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
}`,gS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,vS=`#define NORMAL
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
}`,xS=`#define PHONG
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
}`,yS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,ES=`#define STANDARD
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
}`,MS=`#define TOON
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
}`,TS=`#define TOON
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
}`,wS=`uniform float size;
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
}`,AS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,CS=`uniform vec3 color;
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
}`,PS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Q0,alphahash_pars_fragment:J0,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ox,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:ux,bsdfs:cx,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:yx,common:Sx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Mx,displacementmap_pars_vertex:Tx,displacementmap_vertex:wx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Px,envmap_fragment:bx,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:Wx,envmap_vertex:Nx,fog_vertex:Ix,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:kx,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:jx,lights_physical_fragment:$x,lights_physical_pars_fragment:Kx,lights_fragment_begin:Zx,lights_fragment_maps:Qx,lights_fragment_end:Jx,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:oy,map_particle_pars_fragment:ay,metalnessmap_fragment:ly,metalnessmap_pars_fragment:uy,morphinstance_vertex:cy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:hy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:xy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ty,opaque_fragment:wy,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:by,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Iy,shadowmask_pars_fragment:Fy,skinbase_vertex:Oy,skinning_pars_vertex:ky,skinning_vertex:By,skinnormal_vertex:zy,specularmap_fragment:Vy,specularmap_pars_fragment:Hy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:jy,uv_vertex:$y,worldpos_vertex:Ky,background_vert:Zy,background_frag:Qy,backgroundCube_vert:Jy,backgroundCube_frag:eS,cube_vert:tS,cube_frag:nS,depth_vert:iS,depth_frag:rS,distanceRGBA_vert:sS,distanceRGBA_frag:oS,equirect_vert:aS,equirect_frag:lS,linedashed_vert:uS,linedashed_frag:cS,meshbasic_vert:fS,meshbasic_frag:dS,meshlambert_vert:hS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:_S,meshnormal_frag:vS,meshphong_vert:xS,meshphong_frag:yS,meshphysical_vert:SS,meshphysical_frag:ES,meshtoon_vert:MS,meshtoon_frag:TS,points_vert:wS,points_frag:AS,shadow_vert:RS,shadow_frag:CS,sprite_vert:PS,sprite_frag:bS},be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},vi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:yn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const vl={r:0,b:0,g:0},qr=new Yi,LS=new Vt;function DS(s,e,t,r,a,u,c){const d=new Ct(0);let p=u===!0?0:1,m,_,x=null,v=0,S=null;function T(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function R(L){let b=!1;const C=T(L);C===null?g(d,p):C&&C.isColor&&(g(C,1),b=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,c):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,b){const C=T(b);C&&(C.isCubeTexture||C.mapping===kl)?(_===void 0&&(_=new yi(new Yo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(b.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(LS.makeRotationFromEuler(qr)),_.material.toneMapped=xt.getTransfer(C.colorSpace)!==Pt,(x!==C||v!==C.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=C,v=C.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new yi(new Vl(2,2),new ji({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=xt.getTransfer(C.colorSpace)!==Pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,b){L.getRGB(vl,Mg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,b,c)}return{getClearColor:function(){return d},setClearColor:function(L,b=1){d.set(L),p=b,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:R,addToRenderList:y}}function US(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,c=!1;function d(w,k,se,Z,fe){let he=!1;const ae=x(Z,se,k);u!==ae&&(u=ae,m(u.object)),he=S(w,Z,se,fe),he&&T(w,Z,se,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(w,k,se,Z),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function x(w,k,se){const Z=se.wireframe===!0;let fe=r[w.id];fe===void 0&&(fe={},r[w.id]=fe);let he=fe[k.id];he===void 0&&(he={},fe[k.id]=he);let ae=he[Z];return ae===void 0&&(ae=v(p()),he[Z]=ae),ae}function v(w){const k=[],se=[],Z=[];for(let fe=0;fe<t;fe++)k[fe]=0,se[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:Z,object:w,attributes:{},index:null}}function S(w,k,se,Z){const fe=u.attributes,he=k.attributes;let ae=0;const ce=se.getAttributes();for(const B in ce)if(ce[B].location>=0){const re=fe[B];let I=he[B];if(I===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;ae++}return u.attributesNum!==ae||u.index!==Z}function T(w,k,se,Z){const fe={},he=k.attributes;let ae=0;const ce=se.getAttributes();for(const B in ce)if(ce[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),fe[B]=I,ae++}u.attributes=fe,u.attributesNum=ae,u.index=Z}function R(){const w=u.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function y(w){g(w,0)}function g(w,k){const se=u.newAttributes,Z=u.enabledAttributes,fe=u.attributeDivisors;se[w]=1,Z[w]===0&&(s.enableVertexAttribArray(w),Z[w]=1),fe[w]!==k&&(s.vertexAttribDivisor(w,k),fe[w]=k)}function L(){const w=u.newAttributes,k=u.enabledAttributes;for(let se=0,Z=k.length;se<Z;se++)k[se]!==w[se]&&(s.disableVertexAttribArray(se),k[se]=0)}function b(w,k,se,Z,fe,he,ae){ae===!0?s.vertexAttribIPointer(w,k,se,fe,he):s.vertexAttribPointer(w,k,se,Z,fe,he)}function C(w,k,se,Z){R();const fe=Z.attributes,he=se.getAttributes(),ae=k.defaultAttributeValues;for(const ce in he){const B=he[ce];if(B.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const re=le.normalized,I=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ne=ie.buffer,K=ie.type,j=ie.bytesPerElement,de=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===id;if(le.isInterleavedBufferAttribute){const ue=le.data,_e=ue.stride,Ee=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)g(B.location+Re,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Re=0;Re<B.locationSize;Re++)y(B.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Re=0;Re<B.locationSize;Re++)b(B.location+Re,I/B.locationSize,K,re,_e*j,(Ee+I/B.locationSize*Re)*j,de)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)g(B.location+ue,le.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<B.locationSize;ue++)y(B.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ue=0;ue<B.locationSize;ue++)b(B.location+ue,I/B.locationSize,K,re,I*j,I/B.locationSize*ue*j,de)}}else if(ae!==void 0){const re=ae[ce];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}L()}function Y(){V();for(const w in r){const k=r[w];for(const se in k){const Z=k[se];for(const fe in Z)_(Z[fe].object),delete Z[fe];delete k[se]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const se in k){const Z=k[se];for(const fe in Z)_(Z[fe].object),delete Z[fe];delete k[se]}delete r[w.id]}function N(w){for(const k in r){const se=r[k];if(se[w.id]===void 0)continue;const Z=se[w.id];for(const fe in Z)_(Z[fe].object),delete Z[fe];delete se[w.id]}}function V(){P(),c=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function NS(s,e,t){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function c(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),t.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let T=0;T<x;T++)S+=_[T];t.update(S,r,1)}function p(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let T=0;for(let R=0;R<x;R++)T+=_[R]*v[R];t.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IS(s,e,t,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==ci&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==qi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Gi&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:F}}function FS(s){const e=this;let t=null,r=0,a=!1,u=!1;const c=new jr,d=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){t=_(x,v,0)},this.setState=function(x,v,S){const T=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,g=s.get(x);if(!a||T===null||T.length===0||u&&!y)u?_(null):m();else{const L=u?0:r,b=L*4;let C=g.clippingState||null;p.value=C,C=_(T,v,b,S);for(let Y=0;Y!==b;++Y)C[Y]=t[Y];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,T){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=p.value,T!==!0||y===null){const g=S+R*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,C=S;b!==R;++b,C+=4)c.copy(x[b]).applyMatrix4(L,d),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function OS(s){let e=new WeakMap;function t(c,d){return d===vf?c.mapping=Xs:d===xf&&(c.mapping=qs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===vf||d===xf)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new j0(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Rg extends Tg{constructor(e=-1,t=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Mm=[.125,.215,.35,.446,.526,.582],Zr=20,Zc=new Rg,Tm=new Ct;let Qc=null,Jc=0,ef=0,tf=!1;const $r=(1+Math.sqrt(5))/2,Bs=1/$r,wm=[new J(-$r,Bs,0),new J($r,Bs,0),new J(-Bs,0,$r),new J(Bs,0,$r),new J(0,$r,-Bs),new J(0,$r,Bs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Go,format:ci,colorSpace:Ks,depthBuffer:!1},a=Rm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,t,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(u)),this._blurMaterial=BS(u,e,t)}return a}_compileMaterial(e){const t=new yi(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,r,a){const d=new $n(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Tm),_.toneMapping=Tr,_.autoClear=!1;const S=new yg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new yi(new Yo,S);let R=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,R=!0):(S.color.copy(Tm),R=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):L===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;xl(a,L*b,g>2?b:0,b,b),_.setRenderTarget(a),R&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Xs||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;xl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,Zc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=wm[(a-u-1)%wm.length];this._blur(e,u-1,u,c,d)}t.autoClear=r}_blur(e,t,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,t,r,a,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new yi(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),R=u/T,y=isFinite(u)?1+Math.floor(_*R):Zr;y>Zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const g=[];let L=0;for(let N=0;N<Zr;++N){const V=N/R,P=Math.exp(-V*V/2);g.push(P),N===0?L+=P:N<y&&(L+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/L;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:b}=this;v.dTheta.value=T,v.mipInt.value=b-r;const C=this._sizeLods[a],Y=3*C*(a>b-zs?a-b+zs:0),F=4*(this._cubeSize-C);xl(t,Y,F,3*C,2*C),p.setRenderTarget(t),p.render(x,Zc)}}function kS(s){const e=[],t=[],r=[];let a=s;const u=s-zs+1+Mm.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);t.push(d);let p=1/d;c>s-zs?p=Mm[c-s+zs-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,T=6,R=3,y=2,g=1,L=new Float32Array(R*T*S),b=new Float32Array(y*T*S),C=new Float32Array(g*T*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,V=F>2?0:-1,P=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];L.set(P,R*T*F),b.set(v,y*T*F);const w=[F,F,F,F,F,F];C.set(w,g*T*F)}const Y=new Rr;Y.setAttribute("position",new Si(L,R)),Y.setAttribute("uv",new Si(b,y)),Y.setAttribute("faceIndex",new Si(C,g)),e.push(Y),a>zs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Rm(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function BS(s,e,t){const r=new Float32Array(Zr),a=new J(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Cm(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Pm(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function zS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vf||p===xf,_=p===Xs||p===qs;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new Am(s)),x=m?t.fromEquirectangular(d,x):t.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Am(s)),x=m?t.fromEquirectangular(d):t.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function VS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Bo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function HS(s,e,t,r){const a={},u=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const R=v.morphAttributes[T];for(let y=0,g=R.length;y<g;y++)e.remove(R[y])}v.removeEventListener("dispose",c),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function p(x){const v=x.attributes;for(const T in v)e.update(v[T],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const T in S){const R=S[T];for(let y=0,g=R.length;y<g;y++)e.update(R[y],s.ARRAY_BUFFER)}}function m(x){const v=[],S=x.index,T=x.attributes.position;let R=0;if(S!==null){const L=S.array;R=S.version;for(let b=0,C=L.length;b<C;b+=3){const Y=L[b+0],F=L[b+1],N=L[b+2];v.push(Y,F,F,N,N,Y)}}else if(T!==void 0){const L=T.array;R=T.version;for(let b=0,C=L.length/3-1;b<C;b+=3){const Y=b+0,F=b+1,N=b+2;v.push(Y,F,F,N,N,Y)}}else return;const y=new(mg(v)?Eg:Sg)(v,1);y.version=R;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function GS(s,e,t){let r;function a(v){r=v}let u,c;function d(v){u=v.type,c=v.bytesPerElement}function p(v,S){s.drawElements(r,S,u,v*c),t.update(S,r,1)}function m(v,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,v*c,T),t.update(S,r,T))}function _(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];t.update(y,r,1)}function x(v,S,T,R){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/c,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,R,0,T);let g=0;for(let L=0;L<T;L++)g+=S[L]*R[L];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function WS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function XS(s,e,t){const r=new WeakMap,a=new zt;function u(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let Y=d.attributes.position.count*C,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*F*4*x),V=new _g(N,Y,F,x);V.type=Gi,V.needsUpdate=!0;const P=C*4;for(let k=0;k<x;k++){const se=g[k],Z=L[k],fe=b[k],he=Y*F*4*k;for(let ae=0;ae<se.count;ae++){const ce=ae*P;T===!0&&(a.fromBufferAttribute(se,ae),N[he+ce+0]=a.x,N[he+ce+1]=a.y,N[he+ce+2]=a.z,N[he+ce+3]=0),R===!0&&(a.fromBufferAttribute(Z,ae),N[he+ce+4]=a.x,N[he+ce+5]=a.y,N[he+ce+6]=a.z,N[he+ce+7]=0),y===!0&&(a.fromBufferAttribute(fe,ae),N[he+ce+8]=a.x,N[he+ce+9]=a.y,N[he+ce+10]=a.z,N[he+ce+11]=fe.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new Et(Y,F)},r.set(d,v),d.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function qS(s,e,t,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:c}}class Cg extends Dn{constructor(e,t,r,a,u,c,d,p,m,_=Hs){if(_!==Hs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Hs&&(r=es),r===void 0&&_===js&&(r=Ys),super(null,a,u,c,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pg=new Dn,bm=new Cg(1,1),bg=new _g,Lg=new L0,Dg=new wg,Lm=[],Dm=[],Um=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function Qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let u=Lm[a];if(u===void 0&&(u=new Float32Array(a),Lm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Hl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function YS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function ZS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),Qt(t,r)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),Qt(t,r)}}function JS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),Qt(t,r)}}function eE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function rE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function aE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function lE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=pg,u=bm):u=Pg,t.setTexture2D(e||u,a)}function uE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Lg,a)}function cE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Dg,a)}function fE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||bg,a)}function dE(s){switch(s){case 5126:return YS;case 35664:return jS;case 35665:return $S;case 35666:return KS;case 35674:return ZS;case 35675:return QS;case 35676:return JS;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return fE}}function hE(s,e){s.uniform1fv(this.addr,e)}function pE(s,e){const t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function mE(s,e){const t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function gE(s,e){const t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function _E(s,e){const t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vE(s,e){const t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xE(s,e){const t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yE(s,e){s.uniform1iv(this.addr,e)}function SE(s,e){s.uniform2iv(this.addr,e)}function EE(s,e){s.uniform3iv(this.addr,e)}function ME(s,e){s.uniform4iv(this.addr,e)}function TE(s,e){s.uniform1uiv(this.addr,e)}function wE(s,e){s.uniform2uiv(this.addr,e)}function AE(s,e){s.uniform3uiv(this.addr,e)}function RE(s,e){s.uniform4uiv(this.addr,e)}function CE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Pg,u[c])}function PE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Lg,u[c])}function bE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Dg,u[c])}function LE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||bg,u[c])}function DE(s){switch(s){case 5126:return hE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return _E;case 35675:return vE;case 35676:return xE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return EE;case 35669:case 35673:return ME;case 5125:return TE;case 36294:return wE;case 36295:return AE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return LE}}class UE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dE(t.type)}}class NE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DE(t.type)}}class IE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,t[d.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function FE(s,e,t){const r=s.name,a=r.length;for(nf.lastIndex=0;;){const u=nf.exec(r),c=nf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Fm(t,m===void 0?new UE(d,s,e):new NE(d,s,e));break}else{let x=t.map[d];x===void 0&&(x=new IE(d),Fm(t,x)),t=x}}}class bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(t,a),c=e.getUniformLocation(t,u.name);FE(u,c,this)}}setValue(e,t,r,a){const u=this.map[t];u!==void 0&&u.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let u=0,c=t.length;u!==c;++u){const d=t[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Om(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const OE=37297;let kE=0;function BE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const km=new at;function zE(s){xt._getMatrix(km,xt.workingColorSpace,s);const e=`mat3( ${km.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+BE(s.getShaderSource(e),c)}else return a}function VE(s,e){const t=zE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HE(s,e){let t;switch(e){case i0:t="Linear";break;case r0:t="Reinhard";break;case s0:t="Cineon";break;case o0:t="ACESFilmic";break;case l0:t="AgX";break;case u0:t="Neutral";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new J;function GE(){xt.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function XE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function zo(s){return s!==""}function zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(YE,$E)}const jE=new Map;function $E(s,e){let t=lt[e];if(t===void 0){const r=jE.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $f(t)}const KE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(KE,ZE)}function ZE(s,e,t,r){let a="";for(let u=parseInt(e);u<parseInt(t);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function QE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function JE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function tM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ng:e="ENVMAP_BLENDING_MULTIPLY";break;case t0:e="ENVMAP_BLENDING_MIX";break;case n0:e="ENVMAP_BLENDING_ADD";break}return e}function nM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iM(s,e,t,r){const a=s.getContext(),u=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=QE(t),m=JE(t),_=eM(t),x=tM(t),v=nM(t),S=WE(t),T=XE(u),R=a.createProgram();let y,g,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),g.length>0&&(g+=`
`)):(y=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),g=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?HE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,VE("linearToOutputTexel",t.outputColorSpace),GE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),c=$f(c),c=zm(c,t),c=Vm(c,t),d=$f(d),d=zm(d,t),d=Vm(d,t),c=Hm(c),d=Hm(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=L+y+c,C=L+g+d,Y=Om(a,a.VERTEX_SHADER,b),F=Om(a,a.FRAGMENT_SHADER,C);a.attachShader(R,Y),a.attachShader(R,F),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(k){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(R).trim(),Z=a.getShaderInfoLog(Y).trim(),fe=a.getShaderInfoLog(F).trim();let he=!0,ae=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,Y,F);else{const ce=Bm(a,Y,"vertex"),B=Bm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+ce+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Z===""||fe==="")&&(ae=!1);ae&&(k.diagnostics={runnable:he,programLog:se,vertexShader:{log:Z,prefix:y},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(Y),a.deleteShader(F),V=new bl(a,R),P=qE(a,R)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,OE)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=F,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oM(e),t.set(e,r)),r}}class oM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function aM(s,e,t,r,a,u,c){const d=new vg,p=new sM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,w,k,se,Z){const fe=se.fog,he=Z.geometry,ae=P.isMeshStandardMaterial?se.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),B=ce&&ce.mapping===kl?ce.image.height:null,le=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Ne,K,j,de;if(le){const _t=vi[le];Ne=_t.vertexShader,K=_t.fragmentShader}else Ne=P.vertexShader,K=P.fragmentShader,p.update(P),j=p.getVertexShaderID(P),de=p.getFragmentShaderID(P);const ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ee=Z.isInstancedMesh===!0,Re=Z.isBatchedMesh===!0,Qe=!!P.map,it=!!P.matcap,Mt=!!ce,X=!!P.aoMap,mn=!!P.lightMap,ht=!!P.bumpMap,ct=!!P.normalMap,je=!!P.displacementMap,At=!!P.emissiveMap,Ye=!!P.metalnessMap,D=!!P.roughnessMap,M=P.anisotropy>0,Q=P.clearcoat>0,ge=P.dispersion>0,xe=P.iridescence>0,pe=P.sheen>0,He=P.transmission>0,Ce=M&&!!P.anisotropyMap,Ie=Q&&!!P.clearcoatMap,ut=Q&&!!P.clearcoatNormalMap,Me=Q&&!!P.clearcoatRoughnessMap,Oe=xe&&!!P.iridescenceMap,Ze=xe&&!!P.iridescenceThicknessMap,Je=pe&&!!P.sheenColorMap,ke=pe&&!!P.sheenRoughnessMap,ft=!!P.specularMap,rt=!!P.specularColorMap,wt=!!P.specularIntensityMap,H=He&&!!P.transmissionMap,Pe=He&&!!P.thicknessMap,oe=!!P.gradientMap,me=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,st=!!P.extensions;let Ut=Tr;P.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Yt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:K,defines:P.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Re,batchingColor:Re&&Z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,instancingMorph:Ee&&Z.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:Qe,matcap:it,envMap:Mt,envMapMode:Mt&&ce.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:mn,bumpMap:ht,normalMap:ct,displacementMap:v&&je,emissiveMap:At,normalMapObjectSpace:ct&&P.normalMapType===p0,normalMapTangentSpace:ct&&P.normalMapType===h0,metalnessMap:Ye,roughnessMap:D,anisotropy:M,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Ie,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:ge,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:Ze,sheen:pe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ft,specularColorMap:rt,specularIntensityMap:wt,transmission:He,transmissionMap:H,thicknessMap:Pe,gradientMap:oe,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:Qe&&R(P.map.channel),aoMapUv:X&&R(P.aoMap.channel),lightMapUv:mn&&R(P.lightMap.channel),bumpMapUv:ht&&R(P.bumpMap.channel),normalMapUv:ct&&R(P.normalMap.channel),displacementMapUv:je&&R(P.displacementMap.channel),emissiveMapUv:At&&R(P.emissiveMap.channel),metalnessMapUv:Ye&&R(P.metalnessMap.channel),roughnessMapUv:D&&R(P.roughnessMap.channel),anisotropyMapUv:Ce&&R(P.anisotropyMap.channel),clearcoatMapUv:Ie&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&R(P.sheenRoughnessMap.channel),specularMapUv:ft&&R(P.specularMap.channel),specularColorMapUv:rt&&R(P.specularColorMap.channel),specularIntensityMapUv:wt&&R(P.specularIntensityMap.channel),transmissionMapUv:H&&R(P.transmissionMap.channel),thicknessMapUv:Pe&&R(P.thicknessMap.channel),alphaMapUv:me&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ct||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!he.attributes.uv&&(Qe||me),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Qe&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)w.push(k),w.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(L(w,P),b(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function L(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function b(P,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const w=T[P.type];let k;if(w){const se=vi[w];k=W0.clone(se.uniforms)}else k=P.uniforms;return k}function Y(P,w){let k;for(let se=0,Z=_.length;se<Z;se++){const fe=_[se];if(fe.cacheKey===w){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new iM(s,w,P,u),_.push(k)),k}function F(P){if(--P.usedTimes===0){const w=_.indexOf(P);_[w]=_[_.length-1],_.pop(),P.destroy()}}function N(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:Y,releaseProgram:F,releaseShaderCache:N,programs:_,dispose:V}}function lM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:u}}function uM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const t=[],r=[],a=[];function u(){e=0,t.length=0,r.length=0,a.length=0}function c(x,v,S,T,R,y){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:T,renderOrder:x.renderOrder,z:R,group:y},s[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=R,g.group=y),e++,g}function d(x,v,S,T,R,y){const g=c(x,v,S,T,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function p(x,v,S,T,R,y){const g=c(x,v,S,T,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function m(x,v){t.length>1&&t.sort(x||uM),r.length>1&&r.sort(v||Wm),a.length>1&&a.sort(v||Wm)}function _(){for(let x=e,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function cM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new Xm,s.set(r,[c])):a>=u.length?(c=new Xm,u.push(c)):c=u[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function fM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ct};break;case"SpotLight":t={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function dM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hM=0;function pM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mM(s){const e=new fM,t=dM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const a=new J,u=new Vt,c=new Vt;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,R=0,y=0,g=0,L=0,b=0,C=0,Y=0,F=0,N=0;m.sort(pM);for(let P=0,w=m.length;P<w;P++){const k=m[P],se=k.color,Z=k.intensity,fe=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=se.r*Z,x+=se.g*Z,v+=se.b*Z;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(k.sh.coefficients[ae],Z);N++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=k.shadow.matrix,L++}r.directional[S]=ae,S++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(se).multiplyScalar(Z),ae.distance=fe,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,r.spot[R]=ae;const ce=k.shadow;if(k.map&&(r.spotLightMap[Y]=k.map,Y++,ce.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[R]=ce.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=he,C++}R++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(se).multiplyScalar(Z),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ae,y++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=k.shadow.matrix,b++}r.point[T]=ae,T++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(Z),ae.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[g]=ae,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==L||V.numPointShadows!==b||V.numSpotShadows!==C||V.numSpotMaps!==Y||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+Y-F,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,V.directionalLength=S,V.pointLength=T,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=L,V.numPointShadows=b,V.numSpotShadows=C,V.numSpotMaps=Y,V.numLightProbes=N,r.version=hM++)}function p(m,_){let x=0,v=0,S=0,T=0,R=0;const y=_.matrixWorldInverse;for(let g=0,L=m.length;g<L;g++){const b=m[g];if(b.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),x++}else if(b.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),u.copy(b.matrixWorld),u.premultiply(y),c.extractRotation(u),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(b.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),v++}else if(b.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:r}}function qm(s){const e=new mM(s),t=[],r=[];function a(_){m.camera=_,t.length=0,r.length=0}function u(_){t.push(_)}function c(_){r.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function gM(s){let e=new WeakMap;function t(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new qm(s),e.set(a,[d])):u>=c.length?(d=new qm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class _M extends zl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=f0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends zl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;function SM(s,e,t){let r=new cd;const a=new Et,u=new Et,c=new zt,d=new _M({depthPacking:d0}),p=new vM,m={},_=t.maxTextureSize,x={[Ar]:Ln,[Ln]:Ar,[Hi]:Hi},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:xM,fragmentShader:yM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yi(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let g=this.type;this.render=function(F,N,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Mr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=g!==Vi&&this.type===Vi,fe=g===Vi&&this.type!==Vi;for(let he=0,ae=F.length;he<ae;he++){const ce=F[he],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const le=B.getFrameExtents();if(a.multiply(le),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,B.mapSize.y=u.y)),B.map===null||Z===!0||fe===!0){const I=this.type!==Vi?{minFilter:fi,magFilter:fi}:{};B.map!==null&&B.map.dispose(),B.map=new ts(a.x,a.y,I),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const re=B.getViewportCount();for(let I=0;I<re;I++){const ie=B.getViewport(I);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),se.viewport(c),B.updateMatrices(ce,I),r=B.getFrustum(),C(N,V,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&L(B,V),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,k)};function L(F,N){const V=e.update(R);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ts(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,V,v,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,V,S,R,null)}function b(F,N,V,P){let w=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)w=k;else if(w=V.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const se=w.uuid,Z=N.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let he=fe[Z];he===void 0&&(he=w.clone(),fe[Z]=he,N.addEventListener("dispose",Y)),w=he}if(w.visible=N.visible,w.wireframe=N.wireframe,P===Vi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:x[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=s.properties.get(w);se.light=V}return w}function C(F,N,V,P,w){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Vi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const he=Z.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const B=he[ae],le=fe[B.materialIndex];if(le&&le.visible){const re=b(F,le,P,w);F.onBeforeShadow(s,F,N,V,Z,re,B),s.renderBufferDirect(V,null,Z,re,F,B),F.onAfterShadow(s,F,N,V,Z,re,B)}}}else if(fe.visible){const he=b(F,fe,P,w);F.onBeforeShadow(s,F,N,V,Z,he,null),s.renderBufferDirect(V,null,Z,he,F,null),F.onAfterShadow(s,F,N,V,Z,he,null)}}const se=F.children;for(let Z=0,fe=se.length;Z<fe;Z++)C(se[Z],N,V,P,w)}function Y(F){F.target.removeEventListener("dispose",Y);for(const V in m){const P=m[V],w=F.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const EM={[ff]:df,[hf]:gf,[pf]:_f,[Ws]:mf,[df]:ff,[gf]:hf,[_f]:pf,[mf]:Ws};function MM(s,e){function t(){let H=!1;const Pe=new zt;let oe=null;const me=new zt(0,0,0,0);return{setMask:function(De){oe!==De&&!H&&(s.colorMask(De,De,De,De),oe=De)},setLocked:function(De){H=De},setClear:function(De,Le,st,Ut,Yt){Yt===!0&&(De*=Ut,Le*=Ut,st*=Ut),Pe.set(De,Le,st,Ut),me.equals(Pe)===!1&&(s.clearColor(De,Le,st,Ut),me.copy(Pe))},reset:function(){H=!1,oe=null,me.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,oe=null,me=null,De=null;return{setReversed:function(Le){if(Pe!==Le){const st=e.get("EXT_clip_control");Pe?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Pe=Le},getReversed:function(){return Pe},setTest:function(Le){Le?ue(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Le){oe!==Le&&!H&&(s.depthMask(Le),oe=Le)},setFunc:function(Le){if(Pe&&(Le=EM[Le]),me!==Le){switch(Le){case ff:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case hf:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case pf:s.depthFunc(s.EQUAL);break;case mf:s.depthFunc(s.GEQUAL);break;case gf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Le}},setLocked:function(Le){H=Le},setClear:function(Le){De!==Le&&(Pe&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){H=!1,oe=null,me=null,De=null,Pe=!1}}}function a(){let H=!1,Pe=null,oe=null,me=null,De=null,Le=null,st=null,Ut=null,Yt=null;return{setTest:function(_t){H||(_t?ue(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(_t){Pe!==_t&&!H&&(s.stencilMask(_t),Pe=_t)},setFunc:function(_t,Sn,gn){(oe!==_t||me!==Sn||De!==gn)&&(s.stencilFunc(_t,Sn,gn),oe=_t,me=Sn,De=gn)},setOp:function(_t,Sn,gn){(Le!==_t||st!==Sn||Ut!==gn)&&(s.stencilOp(_t,Sn,gn),Le=_t,st=Sn,Ut=gn)},setLocked:function(_t){H=_t},setClear:function(_t){Yt!==_t&&(s.clearStencil(_t),Yt=_t)},reset:function(){H=!1,Pe=null,oe=null,me=null,De=null,Le=null,st=null,Ut=null,Yt=null}}}const u=new t,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],T=null,R=!1,y=null,g=null,L=null,b=null,C=null,Y=null,F=null,N=new Ct(0,0,0),V=0,P=!1,w=null,k=null,se=null,Z=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=ce>=2);let le=null,re={};const I=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ne=new zt().fromArray(I),K=new zt().fromArray(ie);function j(H,Pe,oe,me){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(H,Le),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<oe;st++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Pe+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const de={};de[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),c.setFunc(Ws),ht(!1),ct(Kp),ue(s.CULL_FACE),X(Mr);function ue(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function _e(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ee(H,Pe){return x[H]!==Pe?(s.bindFramebuffer(H,Pe),x[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Re(H,Pe){let oe=S,me=!1;if(H){oe=v.get(Pe),oe===void 0&&(oe=[],v.set(Pe,oe));const De=H.textures;if(oe.length!==De.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,st=De.length;Le<st;Le++)oe[Le]=s.COLOR_ATTACHMENT0+Le;oe.length=De.length,me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,me=!0);me&&s.drawBuffers(oe)}function Qe(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const it={[Kr]:s.FUNC_ADD,[kv]:s.FUNC_SUBTRACT,[Bv]:s.FUNC_REVERSE_SUBTRACT};it[zv]=s.MIN,it[Vv]=s.MAX;const Mt={[Hv]:s.ZERO,[Gv]:s.ONE,[Wv]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[Kv]:s.SRC_ALPHA_SATURATE,[jv]:s.DST_COLOR,[qv]:s.DST_ALPHA,[Xv]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[$v]:s.ONE_MINUS_DST_COLOR,[Yv]:s.ONE_MINUS_DST_ALPHA,[Zv]:s.CONSTANT_COLOR,[Qv]:s.ONE_MINUS_CONSTANT_COLOR,[Jv]:s.CONSTANT_ALPHA,[e0]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Pe,oe,me,De,Le,st,Ut,Yt,_t){if(H===Mr){R===!0&&(_e(s.BLEND),R=!1);return}if(R===!1&&(ue(s.BLEND),R=!0),H!==Ov){if(H!==y||_t!==P){if((g!==Kr||C!==Kr)&&(s.blendEquation(s.FUNC_ADD),g=Kr,C=Kr),_t)switch(H){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,b=null,Y=null,F=null,N.set(0,0,0),V=0,y=H,P=_t}return}De=De||Pe,Le=Le||oe,st=st||me,(Pe!==g||De!==C)&&(s.blendEquationSeparate(it[Pe],it[De]),g=Pe,C=De),(oe!==L||me!==b||Le!==Y||st!==F)&&(s.blendFuncSeparate(Mt[oe],Mt[me],Mt[Le],Mt[st]),L=oe,b=me,Y=Le,F=st),(Ut.equals(N)===!1||Yt!==V)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Yt),N.copy(Ut),V=Yt),y=H,P=!1}function mn(H,Pe){H.side===Hi?_e(s.CULL_FACE):ue(s.CULL_FACE);let oe=H.side===Ln;Pe&&(oe=!oe),ht(oe),H.blending===Vs&&H.transparent===!1?X(Mr):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),u.setMask(H.colorWrite);const me=H.stencilWrite;d.setTest(me),me&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),At(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){w!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),w=H)}function ct(H){H!==Nv?(ue(s.CULL_FACE),H!==k&&(H===Kp?s.cullFace(s.BACK):H===Iv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),k=H}function je(H){H!==se&&(ae&&s.lineWidth(H),se=H)}function At(H,Pe,oe){H?(ue(s.POLYGON_OFFSET_FILL),(Z!==Pe||fe!==oe)&&(s.polygonOffset(Pe,oe),Z=Pe,fe=oe)):_e(s.POLYGON_OFFSET_FILL)}function Ye(H){H?ue(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function D(H){H===void 0&&(H=s.TEXTURE0+he-1),le!==H&&(s.activeTexture(H),le=H)}function M(H,Pe,oe){oe===void 0&&(le===null?oe=s.TEXTURE0+he-1:oe=le);let me=re[oe];me===void 0&&(me={type:void 0,texture:void 0},re[oe]=me),(me.type!==H||me.texture!==Pe)&&(le!==oe&&(s.activeTexture(oe),le=oe),s.bindTexture(H,Pe||de[H]),me.type=H,me.texture=Pe)}function Q(){const H=re[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function ke(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function ft(H,Pe){let oe=m.get(Pe);oe===void 0&&(oe=new WeakMap,m.set(Pe,oe));let me=oe.get(H);me===void 0&&(me=s.getUniformBlockIndex(Pe,H.name),oe.set(H,me))}function rt(H,Pe){const me=m.get(Pe).get(H);p.get(Pe)!==me&&(s.uniformBlockBinding(Pe,me,H.__bindingPointIndex),p.set(Pe,me))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,re={},x={},v=new WeakMap,S=[],T=null,R=!1,y=null,g=null,L=null,b=null,C=null,Y=null,F=null,N=new Ct(0,0,0),V=0,P=!1,w=null,k=null,se=null,Z=null,fe=null,Ne.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ue,disable:_e,bindFramebuffer:Ee,drawBuffers:Re,useProgram:Qe,setBlending:X,setMaterial:mn,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:At,setScissorTest:Ye,activeTexture:D,bindTexture:M,unbindTexture:Q,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:Ze,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:He,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ie,scissor:Je,viewport:ke,reset:wt}}function Ym(s,e,t,r){const a=TM(r);switch(t){case ag:return s*e;case ug:return s*e;case cg:return s*e*2;case fg:return s*e/a.components*a.byteLength;case od:return s*e/a.components*a.byteLength;case dg:return s*e*2/a.components*a.byteLength;case ad:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case ld:return s*e*4/a.components*a.byteLength;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Ef:case Tf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hg:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TM(s){switch(s){case qi:case rg:return{byteLength:1,components:1};case Ho:case sg:case Go:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case es:case id:case Gi:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function wM(s,e,t,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return S?new OffscreenCanvas(D,M):Ol("canvas")}function R(D,M,Q){let ge=1;const xe=Ye(D);if((xe.width>Q||xe.height>Q)&&(ge=Q/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(ge*xe.width),He=Math.floor(ge*xe.height);x===void 0&&(x=T(pe,He));const Ce=M?T(pe,He):x;return Ce.width=pe,Ce.height=He,Ce.getContext("2d").drawImage(D,0,0,pe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+pe+"x"+He+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,M,Q,ge,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=M;if(M===s.RED&&(Q===s.FLOAT&&(pe=s.R32F),Q===s.HALF_FLOAT&&(pe=s.R16F),Q===s.UNSIGNED_BYTE&&(pe=s.R8)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.R8UI),Q===s.UNSIGNED_SHORT&&(pe=s.R16UI),Q===s.UNSIGNED_INT&&(pe=s.R32UI),Q===s.BYTE&&(pe=s.R8I),Q===s.SHORT&&(pe=s.R16I),Q===s.INT&&(pe=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(pe=s.RG32F),Q===s.HALF_FLOAT&&(pe=s.RG16F),Q===s.UNSIGNED_BYTE&&(pe=s.RG8)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Q===s.UNSIGNED_INT&&(pe=s.RG32UI),Q===s.BYTE&&(pe=s.RG8I),Q===s.SHORT&&(pe=s.RG16I),Q===s.INT&&(pe=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Q===s.UNSIGNED_INT&&(pe=s.RGB32UI),Q===s.BYTE&&(pe=s.RGB8I),Q===s.SHORT&&(pe=s.RGB16I),Q===s.INT&&(pe=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Q===s.BYTE&&(pe=s.RGBA8I),Q===s.SHORT&&(pe=s.RGBA16I),Q===s.INT&&(pe=s.RGBA32I)),M===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),M===s.RGBA){const He=xe?Bl:xt.getTransfer(ge);Q===s.FLOAT&&(pe=s.RGBA32F),Q===s.HALF_FLOAT&&(pe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(pe=He===Pt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(D,M){let Q;return D?M===null||M===es||M===Ys?Q=s.DEPTH24_STENCIL8:M===Gi?Q=s.DEPTH32F_STENCIL8:M===Ho&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===es||M===Ys?Q=s.DEPTH_COMPONENT24:M===Gi?Q=s.DEPTH_COMPONENT32F:M===Ho&&(Q=s.DEPTH_COMPONENT16),Q}function Y(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==xi?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function F(D){const M=D.target;M.removeEventListener("dispose",F),V(M),M.isVideoTexture&&_.delete(M)}function N(D){const M=D.target;M.removeEventListener("dispose",N),w(M)}function V(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Q=D.source,ge=v.get(Q);if(ge){const xe=ge[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(D),Object.keys(ge).length===0&&v.delete(Q)}r.remove(D)}function P(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const Q=D.source,ge=v.get(Q);delete ge[M.__cacheKey],c.memory.textures--}function w(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let xe=0;xe<M.__webglFramebuffer[ge].length;xe++)s.deleteFramebuffer(M.__webglFramebuffer[ge][xe]);else s.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[ge]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=D.textures;for(let ge=0,xe=Q.length;ge<xe;ge++){const pe=r.get(Q[ge]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),c.memory.textures--),r.remove(Q[ge])}r.remove(D)}let k=0;function se(){k=0}function Z(){const D=k;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),k+=1,D}function fe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function he(D,M){const Q=r.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,D,M);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function ae(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){K(Q,D,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function ce(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){K(Q,D,M);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function B(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const le={[yf]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[Sf]:s.MIRRORED_REPEAT},re={[fi]:s.NEAREST,[c0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Cc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},I={[m0]:s.NEVER,[S0]:s.ALWAYS,[g0]:s.LESS,[pg]:s.LEQUAL,[_0]:s.EQUAL,[y0]:s.GEQUAL,[v0]:s.GREATER,[x0]:s.NOTEQUAL};function ie(D,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xi||M.magFilter===Cc||M.magFilter===el||M.magFilter===Jr||M.minFilter===xi||M.minFilter===Cc||M.minFilter===el||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fi||M.minFilter!==el&&M.minFilter!==Jr||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(D,M){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",F));const ge=M.source;let xe=v.get(ge);xe===void 0&&(xe={},v.set(ge,xe));const pe=fe(M);if(pe!==D.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[pe].usedTimes++;const He=xe[D.__cacheKey];He!==void 0&&(xe[D.__cacheKey].usedTimes--,He.usedTimes===0&&P(M)),D.__cacheKey=pe,D.__webglTexture=xe[pe].texture}return Q}function K(D,M,Q){let ge=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=s.TEXTURE_3D);const xe=Ne(D,M),pe=M.source;t.bindTexture(ge,D.__webglTexture,s.TEXTURE0+Q);const He=r.get(pe);if(pe.version!==He.__version||xe===!0){t.activeTexture(s.TEXTURE0+Q);const Ce=xt.getPrimaries(xt.workingColorSpace),Ie=M.colorSpace===Er?null:xt.getPrimaries(M.colorSpace),ut=M.colorSpace===Er||Ce===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=R(M.image,!1,a.maxTextureSize);Me=At(M,Me);const Oe=u.convert(M.format,M.colorSpace),Ze=u.convert(M.type);let Je=b(M.internalFormat,Oe,Ze,M.colorSpace,M.isVideoTexture);ie(ge,M);let ke;const ft=M.mipmaps,rt=M.isVideoTexture!==!0,wt=He.__version===void 0||xe===!0,H=pe.dataReady,Pe=Y(M,Me);if(M.isDepthTexture)Je=C(M.format===js,M.type),wt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,Ze,null));else if(M.isDataTexture)if(ft.length>0){rt&&wt&&t.texStorage2D(s.TEXTURE_2D,Pe,Je,ft[0].width,ft[0].height);for(let oe=0,me=ft.length;oe<me;oe++)ke=ft[oe],rt?H&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Ze,ke.data):t.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Oe,Ze,ke.data);M.generateMipmaps=!1}else rt?(wt&&t.texStorage2D(s.TEXTURE_2D,Pe,Je,Me.width,Me.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Ze,Me.data)):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,Ze,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,ft[0].width,ft[0].height,Me.depth);for(let oe=0,me=ft.length;oe<me;oe++)if(ke=ft[oe],M.format!==ci)if(Oe!==null)if(rt){if(H)if(M.layerUpdates.size>0){const De=Ym(ke.width,ke.height,M.format,M.type);for(const Le of M.layerUpdates){const st=ke.data.subarray(Le*De/ke.data.BYTES_PER_ELEMENT,(Le+1)*De/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Le,ke.width,ke.height,1,Oe,st)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Oe,Ze,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Me.depth,0,Oe,Ze,ke.data)}else{rt&&wt&&t.texStorage2D(s.TEXTURE_2D,Pe,Je,ft[0].width,ft[0].height);for(let oe=0,me=ft.length;oe<me;oe++)ke=ft[oe],M.format!==ci?Oe!==null?rt?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?H&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Ze,ke.data):t.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Oe,Ze,ke.data)}else if(M.isDataArrayTexture)if(rt){if(wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,Me.width,Me.height,Me.depth),H)if(M.layerUpdates.size>0){const oe=Ym(Me.width,Me.height,M.format,M.type);for(const me of M.layerUpdates){const De=Me.data.subarray(me*oe/Me.data.BYTES_PER_ELEMENT,(me+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,Oe,Ze,De)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ze,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,Ze,Me.data);else if(M.isData3DTexture)rt?(wt&&t.texStorage3D(s.TEXTURE_3D,Pe,Je,Me.width,Me.height,Me.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ze,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,Ze,Me.data);else if(M.isFramebufferTexture){if(wt)if(rt)t.texStorage2D(s.TEXTURE_2D,Pe,Je,Me.width,Me.height);else{let oe=Me.width,me=Me.height;for(let De=0;De<Pe;De++)t.texImage2D(s.TEXTURE_2D,De,Je,oe,me,0,Oe,Ze,null),oe>>=1,me>>=1}}else if(ft.length>0){if(rt&&wt){const oe=Ye(ft[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Je,oe.width,oe.height)}for(let oe=0,me=ft.length;oe<me;oe++)ke=ft[oe],rt?H&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Ze,ke):t.texImage2D(s.TEXTURE_2D,oe,Je,Oe,Ze,ke);M.generateMipmaps=!1}else if(rt){if(wt){const oe=Ye(Me);t.texStorage2D(s.TEXTURE_2D,Pe,Je,oe.width,oe.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ze,Me)}else t.texImage2D(s.TEXTURE_2D,0,Je,Oe,Ze,Me);y(M)&&g(ge),He.__version=pe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function j(D,M,Q){if(M.image.length!==6)return;const ge=Ne(D,M),xe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const pe=r.get(xe);if(xe.version!==pe.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);const He=xt.getPrimaries(xt.workingColorSpace),Ce=M.colorSpace===Er?null:xt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Er||He===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!ut&&!Me?Oe[me]=R(M.image[me],!0,a.maxCubemapSize):Oe[me]=Me?M.image[me].image:M.image[me],Oe[me]=At(M,Oe[me]);const Ze=Oe[0],Je=u.convert(M.format,M.colorSpace),ke=u.convert(M.type),ft=b(M.internalFormat,Je,ke,M.colorSpace),rt=M.isVideoTexture!==!0,wt=pe.__version===void 0||ge===!0,H=xe.dataReady;let Pe=Y(M,Ze);ie(s.TEXTURE_CUBE_MAP,M);let oe;if(ut){rt&&wt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,Ze.width,Ze.height);for(let me=0;me<6;me++){oe=Oe[me].mipmaps;for(let De=0;De<oe.length;De++){const Le=oe[De];M.format!==ci?Je!==null?rt?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,Je,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,ft,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,Je,ke,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,ft,Le.width,Le.height,0,Je,ke,Le.data)}}}else{if(oe=M.mipmaps,rt&&wt){oe.length>0&&Pe++;const me=Ye(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,me.width,me.height)}for(let me=0;me<6;me++)if(Me){rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,Je,ke,Oe[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,Oe[me].width,Oe[me].height,0,Je,ke,Oe[me].data);for(let De=0;De<oe.length;De++){const st=oe[De].image[me].image;rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,st.width,st.height,Je,ke,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,ft,st.width,st.height,0,Je,ke,st.data)}}else{rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,ke,Oe[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,Je,ke,Oe[me]);for(let De=0;De<oe.length;De++){const Le=oe[De];rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Je,ke,Le.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,ft,Je,ke,Le.image[me])}}}y(M)&&g(s.TEXTURE_CUBE_MAP),pe.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function de(D,M,Q,ge,xe,pe){const He=u.convert(Q.format,Q.colorSpace),Ce=u.convert(Q.type),Ie=b(Q.internalFormat,He,Ce,Q.colorSpace),ut=r.get(M),Me=r.get(Q);if(Me.__renderTarget=M,!ut.__hasExternalTextures){const Oe=Math.max(1,M.width>>pe),Ze=Math.max(1,M.height>>pe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,pe,Ie,Oe,Ze,M.depth,0,He,Ce,null):t.texImage2D(xe,pe,Ie,Oe,Ze,0,He,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,xe,Me.__webglTexture,0,ht(M)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,xe,Me.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(D,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const ge=M.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,pe=C(M.stencilBuffer,xe),He=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ht(M);ct(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,pe,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,D)}else{const ge=M.textures;for(let xe=0;xe<ge.length;xe++){const pe=ge[xe],He=u.convert(pe.format,pe.colorSpace),Ce=u.convert(pe.type),Ie=b(pe.internalFormat,He,Ce,pe.colorSpace),ut=ht(M);Q&&ct(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ie,M.width,M.height):ct(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ie,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(M.depthTexture);ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he(M.depthTexture,0);const xe=ge.__webglTexture,pe=ht(M);if(M.depthTexture.format===Hs)ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(M.depthTexture.format===js)ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ee(D){const M=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=ge}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,D)}else if(Q){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=s.createRenderbuffer(),ue(M.__webglDepthbuffer[ge],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ue(M.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(D,M,Q){const ge=r.get(D);M!==void 0&&de(ge.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ee(D)}function Qe(D){const M=D.texture,Q=r.get(D),ge=r.get(M);D.addEventListener("dispose",N);const xe=D.textures,pe=D.isWebGLCubeRenderTarget===!0,He=xe.length>1;if(He||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=M.version,c.memory.textures++),pe){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)Q.__webglFramebuffer[Ce][Ie]=s.createFramebuffer()}else Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(He)for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const ut=r.get(xe[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&ct(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ie=xe[Ce];Q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ut=u.convert(Ie.format,Ie.colorSpace),Me=u.convert(Ie.type),Oe=b(Ie.internalFormat,ut,Me,Ie.colorSpace,D.isXRRenderTarget===!0),Ze=ht(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(s.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)de(Q.__webglFramebuffer[Ce][Ie],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ie);else de(Q.__webglFramebuffer[Ce],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const ut=xe[Ce],Me=r.get(ut);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,ut),de(Q.__webglFramebuffer,D,ut,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ut)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),ie(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)de(Q.__webglFramebuffer[Ie],D,M,s.COLOR_ATTACHMENT0,Ce,Ie);else de(Q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,Ce,0);y(M)&&g(Ce),t.unbindTexture()}D.depthBuffer&&Ee(D)}function it(D){const M=D.textures;for(let Q=0,ge=M.length;Q<ge;Q++){const xe=M[Q];if(y(xe)){const pe=L(D),He=r.get(xe).__webglTexture;t.bindTexture(pe,He),g(pe),t.unbindTexture()}}}const Mt=[],X=[];function mn(D){if(D.samples>0){if(ct(D)===!1){const M=D.textures,Q=D.width,ge=D.height;let xe=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(D),Ce=M.length>1;if(Ce)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const ut=r.get(M[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,xe,s.NEAREST),p===!0&&(Mt.length=0,X.length=0,Mt.push(s.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Mt.push(pe),X.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const ut=r.get(M[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function je(D){const M=c.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function At(D,M){const Q=D.colorSpace,ge=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Ks&&Q!==Er&&(xt.getTransfer(Q)===Pt?(ge!==ci||xe!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ct}function AM(s,e){function t(r,a=Er){let u;const c=xt.getTransfer(a);if(r===qi)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===id)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===ci)return s.RGBA;if(r===ug)return s.LUMINANCE;if(r===cg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===od)return s.RED_INTEGER;if(r===dg)return s.RG;if(r===ad)return s.RG_INTEGER;if(r===ld)return s.RGBA_INTEGER;if(r===wl||r===Al||r===Rl||r===Cl)if(c===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===Mf||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ef)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Af||r===Rf)return c===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===Nf||r===If||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Pf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pl||r===Gf||r===Wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Pl)return c===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===Xf||r===qf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Pl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class RM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Dn,u=e.properties.get(a);u.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ji({vertexShader:PM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends Zs{constructor(e,t){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,S=null,T=null;const R=new LM,y=t.getContextAttributes();let g=null,L=null;const b=[],C=[],Y=new Et;let F=null;const N=new $n;N.viewport=new zt;const V=new $n;V.viewport=new zt;const P=[N,V],w=new RM;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=b[K];return j===void 0&&(j=new rf,b[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=b[K];return j===void 0&&(j=new rf,b[K]=j),j.getGripSpace()},this.getHand=function(K){let j=b[K];return j===void 0&&(j=new rf,b[K]=j),j.getHandSpace()};function Z(K){const j=C.indexOf(K.inputSource);if(j===-1)return;const de=b[j];de!==void 0&&(de.update(K.inputSource,K.frame,m||c),de.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<b.length;K++){const j=C[K];j!==null&&(C[K]=null,b[K].disconnect(j))}k=null,se=null,R.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,L=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,t,j),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ts(S.framebufferWidth,S.framebufferHeight,{format:ci,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,de=null,ue=null;y.depth&&(ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?js:Hs,de=y.stencil?Ys:es);const _e={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:u};x=new XRWebGLBinding(a,t),v=x.createProjectionLayer(_e),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new ts(v.textureWidth,v.textureHeight,{format:ci,type:qi,depthTexture:new Cg(v.textureWidth,v.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(K){for(let j=0;j<K.removed.length;j++){const de=K.removed[j],ue=C.indexOf(de);ue>=0&&(C[ue]=null,b[ue].disconnect(de))}for(let j=0;j<K.added.length;j++){const de=K.added[j];let ue=C.indexOf(de);if(ue===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=C.length){C.push(de),ue=Ee;break}else if(C[Ee]===null){C[Ee]=de,ue=Ee;break}if(ue===-1)break}const _e=b[ue];_e&&_e.connect(de)}}const ae=new J,ce=new J;function B(K,j,de){ae.setFromMatrixPosition(j.matrixWorld),ce.setFromMatrixPosition(de.matrixWorld);const ue=ae.distanceTo(ce),_e=j.projectionMatrix.elements,Ee=de.projectionMatrix.elements,Re=_e[14]/(_e[10]-1),Qe=_e[14]/(_e[10]+1),it=(_e[9]+1)/_e[5],Mt=(_e[9]-1)/_e[5],X=(_e[8]-1)/_e[0],mn=(Ee[8]+1)/Ee[0],ht=Re*X,ct=Re*mn,je=ue/(-X+mn),At=je*-X;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(At),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ye=Re+je,D=Qe+je,M=ht-At,Q=ct+(ue-At),ge=it*Qe/D*Ye,xe=Mt*Qe/D*Ye;K.projectionMatrix.makePerspective(M,Q,ge,xe,Ye,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let j=K.near,de=K.far;R.texture!==null&&(R.depthNear>0&&(j=R.depthNear),R.depthFar>0&&(de=R.depthFar)),w.near=V.near=N.near=j,w.far=V.far=N.far=de,(k!==w.near||se!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,se=w.far),N.layers.mask=K.layers.mask|2,V.layers.mask=K.layers.mask|4,w.layers.mask=N.layers.mask|V.layers.mask;const ue=K.parent,_e=w.cameras;le(w,ue);for(let Ee=0;Ee<_e.length;Ee++)le(_e[Ee],ue);_e.length===2?B(w,N,V):w.projectionMatrix.copy(N.projectionMatrix),re(K,w,ue)};function re(K,j,de){de===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let I=null;function ie(K,j){if(_=j.getViewerPose(m||c),T=j,_!==null){const de=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ue=!1;de.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let Ee=0;Ee<de.length;Ee++){const Re=de[Ee];let Qe=null;if(S!==null)Qe=S.getViewport(Re);else{const Mt=x.getViewSubImage(v,Re);Qe=Mt.viewport,Ee===0&&(e.setRenderTargetTextures(L,Mt.colorTexture,v.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(L))}let it=P[Ee];it===void 0&&(it=new $n,it.layers.enable(Ee),it.viewport=new zt,P[Ee]=it),it.matrix.fromArray(Re.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Re.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ee===0&&(w.matrix.copy(it.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(it)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Ee=x.getDepthInformation(de[0]);Ee&&Ee.isValid&&Ee.texture&&R.init(e,Ee,a.renderState)}}for(let de=0;de<b.length;de++){const ue=C[de],_e=b[de];ue!==null&&_e!==void 0&&_e.update(ue,j,m||c)}I&&I(K,j),j.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:j}),T=null}const Ne=new Ag;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const Yr=new Yi,UM=new Vt;function NM(s,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Mg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,L,b,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,L,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Ln&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Ln&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const L=e.get(g),b=L.envMap,C=L.envMapRotation;b&&(y.envMap.value=b,Yr.copy(C),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Yr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,L,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*L,y.scale.value=b*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,L){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const L=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function IM(s,e,t,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,b){const C=b.program;r.uniformBlockBinding(L,C)}function m(L,b){let C=a[L.id];C===void 0&&(T(L),C=_(L),a[L.id]=C,L.addEventListener("dispose",y));const Y=b.program;r.updateUBOMapping(L,Y);const F=e.render.frame;u[L.id]!==F&&(v(L),u[L.id]=F)}function _(L){const b=x();L.__bindingPointIndex=b;const C=s.createBuffer(),Y=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,Y,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,C),C}function x(){for(let L=0;L<d;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const b=a[L.id],C=L.uniforms,Y=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let F=0,N=C.length;F<N;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,w=V.length;P<w;P++){const k=V[P];if(S(k,F,P,Y)===!0){const se=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let he=0;he<Z.length;he++){const ae=Z[he],ce=R(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,se+fe,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,b,C,Y){const F=L.value,N=b+"_"+C;if(Y[N]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[N]=F:Y[N]=F.clone(),!0;{const V=Y[N];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return Y[N]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function T(L){const b=L.uniforms;let C=0;const Y=16;for(let N=0,V=b.length;N<V;N++){const P=Array.isArray(b[N])?b[N]:[b[N]];for(let w=0,k=P.length;w<k;w++){const se=P[w],Z=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,he=Z.length;fe<he;fe++){const ae=Z[fe],ce=R(ae),B=C%Y,le=B%ce.boundary,re=B+le;C+=le,re!==0&&Y-re<ce.storage&&(C+=Y-re),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=ce.storage}}}const F=C%Y;return F>0&&(C+=Y-F),L.__size=C,L.__cache={},this}function R(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function y(L){const b=L.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete u[b.id]}function g(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},u={}}return{bind:p,update:m,dispose:g}}class FM{constructor(e={}){const{canvas:t=M0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Tr,this.toneMappingExposure=1;const C=this;let Y=!1,F=0,N=0,V=null,P=-1,w=null;const k=new zt,se=new zt;let Z=null;const fe=new Ct(0);let he=0,ae=t.width,ce=t.height,B=1,le=null,re=null;const I=new zt(0,0,ae,ce),ie=new zt(0,0,ae,ce);let Ne=!1;const K=new cd;let j=!1,de=!1;const ue=new Vt,_e=new Vt,Ee=new J,Re=new zt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Mt(){return V===null?B:1}let X=r;function mn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),X===null){const G="webgl2";if(X=mn(G,A),X===null)throw mn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,je,At,Ye,D,M,Q,ge,xe,pe,He,Ce,Ie,ut,Me,Oe,Ze,Je,ke,ft,rt,wt,H;function Pe(){ht=new VS(X),ht.init(),rt=new AM(X,ht),ct=new IS(X,ht,e,rt),je=new MM(X,ht),ct.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),At=new WS(X),Ye=new lM,D=new wM(X,ht,je,Ye,ct,rt,At),M=new OS(C),Q=new zS(C),ge=new Z0(X),wt=new US(X,ge),xe=new HS(X,ge,At,wt),pe=new qS(X,xe,ge,At),Je=new XS(X,ct,D),Me=new FS(Ye),He=new aM(C,M,Q,ht,ct,wt,Me),Ce=new NM(C,Ye),Ie=new cM,ut=new gM(ht),Ze=new DS(C,M,Q,je,pe,S,p),Oe=new SM(C,pe,ct),H=new IM(X,At,ct,je),ke=new NS(X,ht,At),ft=new GS(X,ht,At),At.programs=He.programs,C.capabilities=ct,C.extensions=ht,C.properties=Ye,C.renderLists=Ie,C.shadowMap=Oe,C.state=je,C.info=At}Pe();const oe=new DM(C,X);this.xr=oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(ae,ce,!1))},this.getSize=function(A){return A.set(ae,ce)},this.setSize=function(A,G,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ce=G,t.width=Math.floor(A*B),t.height=Math.floor(G*B),te===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ae*B,ce*B).floor()},this.setDrawingBufferSize=function(A,G,te){ae=A,ce=G,B=te,t.width=Math.floor(A*te),t.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,G,te,ne){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,G,te,ne),je.viewport(k.copy(I).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,G,te,ne){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,te,ne),je.scissor(se.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){je.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,G=!0,te=!0){let ne=0;if(A){let W=!1;if(V!==null){const Ae=V.texture.format;W=Ae===ld||Ae===ad||Ae===od}if(W){const Ae=V.texture.type,Te=Ae===qi||Ae===es||Ae===Ho||Ae===Ys||Ae===rd||Ae===sd,Ge=Ze.getClearColor(),ze=Ze.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Te?(T[0]=et,T[1]=nt,T[2]=We,T[3]=ze,X.clearBufferuiv(X.COLOR,0,T)):(R[0]=et,R[1]=nt,R[2]=We,R[3]=ze,X.clearBufferiv(X.COLOR,0,R))}else ne|=X.COLOR_BUFFER_BIT}G&&(ne|=X.DEPTH_BUFFER_BIT),te&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ie.dispose(),ut.dispose(),Ye.dispose(),M.dispose(),Q.dispose(),pe.dispose(),wt.dispose(),H.dispose(),He.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ns),oe.removeEventListener("sessionend",$i),wi.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=At.autoReset,G=Oe.enabled,te=Oe.autoUpdate,ne=Oe.needsUpdate,W=Oe.type;Pe(),At.autoReset=A,Oe.enabled=G,Oe.autoUpdate=te,Oe.needsUpdate=ne,Oe.type=W}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const G=A.target;G.removeEventListener("dispose",st),Ut(G)}function Ut(A){Yt(A),Ye.remove(A)}function Yt(A){const G=Ye.get(A).programs;G!==void 0&&(G.forEach(function(te){He.releaseProgram(te)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,ne,W,Ae){G===null&&(G=Qe);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Ge=Ko(A,G,te,ne,W);je.setMaterial(ne,Te);let ze=te.index,et=1;if(ne.wireframe===!0){if(ze=xe.getWireframeAttribute(te),ze===void 0)return;et=2}const nt=te.drawRange,We=te.attributes.position;let mt=nt.start*et,Tt=(nt.start+nt.count)*et;Ae!==null&&(mt=Math.max(mt,Ae.start*et),Tt=Math.min(Tt,(Ae.start+Ae.count)*et)),ze!==null?(mt=Math.max(mt,0),Tt=Math.min(Tt,ze.count)):We!=null&&(mt=Math.max(mt,0),Tt=Math.min(Tt,We.count));const pt=Tt-mt;if(pt<0||pt===1/0)return;wt.setup(W,ne,Ge,te,ze);let on,ot=ke;if(ze!==null&&(on=ge.get(ze),ot=ft,ot.setIndex(on)),W.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*Mt()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if(W.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*Mt()),W.isLineSegments?ot.setMode(X.LINES):W.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else W.isPoints?ot.setMode(X.POINTS):W.isSprite&&ot.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qe=W._multiDrawStarts,Zn=W._multiDrawCounts,yt=W._multiDrawCount,an=ze?ge.get(ze).bytesPerElement:1,Qn=Ye.get(ne).currentProgram.getUniforms();for(let jt=0;jt<yt;jt++)Qn.setValue(X,"_gl_DrawID",jt),ot.render(qe[jt]/an,Zn[jt])}else if(W.isInstancedMesh)ot.renderInstances(mt,pt,W.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Zn=Math.min(te.instanceCount,qe);ot.renderInstances(mt,pt,Zn)}else ot.render(mt,pt)};function _t(A,G,te){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,is(A,G,te),A.side=Ar,A.needsUpdate=!0,is(A,G,te),A.side=Hi):is(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),g=ut.get(te),g.init(G),b.push(g),te.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==te&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ne=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Te=0;Te<Ae.length;Te++){const Ge=Ae[Te];_t(Ge,te,W),ne.add(Ge)}else _t(Ae,te,W),ne.add(Ae)}),b.pop(),g=null,ne},this.compileAsync=function(A,G,te=null){const ne=this.compile(A,G,te);return new Promise(W=>{function Ae(){if(ne.forEach(function(Te){Ye.get(Te).currentProgram.isReady()&&ne.delete(Te)}),ne.size===0){W(A);return}setTimeout(Ae,10)}ht.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Sn=null;function gn(A){Sn&&Sn(A)}function ns(){wi.stop()}function $i(){wi.start()}const wi=new Ag;wi.setAnimationLoop(gn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){Sn=A,oe.setAnimationLoop(A),A===null?wi.stop():wi.start()},oe.addEventListener("sessionstart",ns),oe.addEventListener("sessionend",$i),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,G,V),g=ut.get(A,b.length),g.init(G),b.push(g),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(_e),de=this.localClippingEnabled,j=Me.init(this.clippingPlanes,de),y=Ie.get(A,L.length),y.init(),L.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Ai(Ae,G,-1/0,C.sortObjects)}Ai(A,G,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(le,re),it=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,it&&Ze.addToRenderList(y,A),this.info.render.frame++,j===!0&&Me.beginShadows();const te=g.state.shadowsArray;Oe.render(te,A,G),j===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,W=y.transmissive;if(g.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(W.length>0)for(let Te=0,Ge=Ae.length;Te<Ge;Te++){const ze=Ae[Te];Pr(ne,W,A,ze)}it&&Ze.render(A);for(let Te=0,Ge=Ae.length;Te<Ge;Te++){const ze=Ae[Te];Cr(y,A,ze,ze.viewport)}}else W.length>0&&Pr(ne,W,A,G),it&&Ze.render(A),Cr(y,A,G);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(C,A,G),wt.resetDefaultState(),P=-1,w=null,b.pop(),b.length>0?(g=b[b.length-1],j===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Ai(A,G,te,ne){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ne&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Te=pe.update(A),Ge=A.material;Ge.visible&&y.push(A,Te,Ge,te,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Te=pe.update(A),Ge=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Re.copy(Te.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ge)){const ze=Te.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ge[We.materialIndex];mt&&mt.visible&&y.push(A,Te,mt,te,Re.z,We)}}else Ge.visible&&y.push(A,Te,Ge,te,Re.z,null)}}const Ae=A.children;for(let Te=0,Ge=Ae.length;Te<Ge;Te++)Ai(Ae[Te],G,te,ne)}function Cr(A,G,te,ne){const W=A.opaque,Ae=A.transmissive,Te=A.transparent;g.setupLightsView(te),j===!0&&Me.setGlobalState(C.clippingPlanes,te),ne&&je.viewport(k.copy(ne)),W.length>0&&Ki(W,G,te),Ae.length>0&&Ki(Ae,G,te),Te.length>0&&Ki(Te,G,te),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Pr(A,G,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new ts(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Go:qi,minFilter:Jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[ne.id],Te=ne.viewport||k;Ae.setSize(Te.z,Te.w);const Ge=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(fe),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),it&&Ze.render(te);const ze=C.toneMapping;C.toneMapping=Tr;const et=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),j===!0&&Me.setGlobalState(C.clippingPlanes,ne),Ki(A,te,ne),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=G.length;We<mt;We++){const Tt=G[We],pt=Tt.object,on=Tt.geometry,ot=Tt.material,qe=Tt.group;if(ot.side===Hi&&pt.layers.test(ne.layers)){const Zn=ot.side;ot.side=Ln,ot.needsUpdate=!0,jo(pt,te,ne,on,ot,qe),ot.side=Zn,ot.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Ge),C.setClearColor(fe,he),et!==void 0&&(ne.viewport=et),C.toneMapping=ze}function Ki(A,G,te){const ne=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){const Te=A[W],Ge=Te.object,ze=Te.geometry,et=ne===null?Te.material:ne,nt=Te.group;Ge.layers.test(te.layers)&&jo(Ge,G,te,ze,et,nt)}}function jo(A,G,te,ne,W,Ae){A.onBeforeRender(C,G,te,ne,W,Ae),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,G,te,ne,A,Ae),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,C.renderBufferDirect(te,G,ne,W,A,Ae),W.side=Ar,W.needsUpdate=!0,C.renderBufferDirect(te,G,ne,W,A,Ae),W.side=Hi):C.renderBufferDirect(te,G,ne,W,A,Ae),A.onAfterRender(C,G,te,ne,W,Ae)}function is(A,G,te){G.isScene!==!0&&(G=Qe);const ne=Ye.get(A),W=g.state.lights,Ae=g.state.shadowsArray,Te=W.state.version,Ge=He.getParameters(A,W.state,Ae,G,te),ze=He.getProgramCacheKey(Ge);let et=ne.programs;ne.environment=A.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(A.isMeshStandardMaterial?Q:M).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",st),et=new Map,ne.programs=et);let nt=et.get(ze);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===Te)return di(A,Ge),nt}else Ge.uniforms=He.getUniforms(A),A.onBeforeCompile(Ge,C),nt=He.acquireProgram(Ge,ze),et.set(ze,nt),ne.uniforms=Ge.uniforms;const We=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Me.uniform),di(A,Ge),ne.needsLights=Xl(A),ne.lightsStateVersion=Te,ne.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=nt,ne.uniformsList=null,nt}function $o(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function di(A,G){const te=Ye.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Ko(A,G,te,ne,W){G.isScene!==!0&&(G=Qe),D.resetTextureUnits();const Ae=G.fog,Te=ne.isMeshStandardMaterial?G.environment:null,Ge=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ks,ze=(ne.isMeshStandardMaterial?Q:M).get(ne.envMap||Te),et=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,nt=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,Tt=!!te.morphAttributes.color;let pt=Tr;ne.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(pt=C.toneMapping);const on=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ot=on!==void 0?on.length:0,qe=Ye.get(ne),Zn=g.state.lights;if(j===!0&&(de===!0||A!==w)){const _n=A===w&&ne.id===P;Me.setState(ne,A,_n)}let yt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Zn.state.version||qe.outputColorSpace!==Ge||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isBatchedMesh&&qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qe.instancingMorph===!1&&W.morphTexture!==null||qe.envMap!==ze||ne.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==nt||qe.morphTargets!==We||qe.morphNormals!==mt||qe.morphColors!==Tt||qe.toneMapping!==pt||qe.morphTargetsCount!==ot)&&(yt=!0):(yt=!0,qe.__version=ne.version);let an=qe.currentProgram;yt===!0&&(an=is(ne,G,W));let Qn=!1,jt=!1,hi=!1;const bt=an.getUniforms(),Bn=qe.uniforms;if(je.useProgram(an.program)&&(Qn=!0,jt=!0,hi=!0),ne.id!==P&&(P=ne.id,jt=!0),Qn||w!==A){je.buffers.depth.getReversed()?(ue.copy(A.projectionMatrix),w0(ue),A0(ue),bt.setValue(X,"projectionMatrix",ue)):bt.setValue(X,"projectionMatrix",A.projectionMatrix),bt.setValue(X,"viewMatrix",A.matrixWorldInverse);const zn=bt.map.cameraPosition;zn!==void 0&&zn.setValue(X,Ee.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,jt=!0,hi=!0)}if(W.isSkinnedMesh){bt.setOptional(X,W,"bindMatrix"),bt.setOptional(X,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),bt.setValue(X,"boneTexture",_n.boneTexture,D))}W.isBatchedMesh&&(bt.setOptional(X,W,"batchingTexture"),bt.setValue(X,"batchingTexture",W._matricesTexture,D),bt.setOptional(X,W,"batchingIdTexture"),bt.setValue(X,"batchingIdTexture",W._indirectTexture,D),bt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(X,"batchingColorTexture",W._colorsTexture,D));const Ri=te.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Je.update(W,te,an),(jt||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,bt.setValue(X,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Bn.envMap.value=ze,Bn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(Bn.envMapIntensity.value=G.environmentIntensity),jt&&(bt.setValue(X,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Zo(Bn,hi),Ae&&ne.fog===!0&&Ce.refreshFogUniforms(Bn,Ae),Ce.refreshMaterialUniforms(Bn,ne,B,ce,g.state.transmissionRenderTarget[A.id]),bl.upload(X,$o(qe),Bn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(bl.upload(X,$o(qe),Bn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue(X,"center",W.center),bt.setValue(X,"modelViewMatrix",W.modelViewMatrix),bt.setValue(X,"normalMatrix",W.normalMatrix),bt.setValue(X,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const _n=ne.uniformsGroups;for(let zn=0,En=_n.length;zn<En;zn++){const Qo=_n[zn];H.update(Qo,an),H.bind(Qo,an)}}return an}function Zo(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Xl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,G,te){Ye.get(A.texture).__webglTexture=G,Ye.get(A.depthTexture).__webglTexture=te;const ne=Ye.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const te=Ye.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,te=0){V=A,F=G,N=te;let ne=!0,W=null,Ae=!1,Te=!1;if(A){const ze=Ye.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(X.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ze.__hasExternalTextures)D.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Te=!0);const nt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?W=nt[G][te]:W=nt[G],Ae=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?W=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[te]:W=nt,k.copy(A.viewport),se.copy(A.scissor),Z=A.scissorTest}else k.copy(I).multiplyScalar(B).floor(),se.copy(ie).multiplyScalar(B).floor(),Z=Ne;if(je.bindFramebuffer(X.FRAMEBUFFER,W)&&ne&&je.drawBuffers(A,W),je.viewport(k),je.scissor(se),je.setScissorTest(Z),Ae){const ze=Ye.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,te)}else if(Te){const ze=Ye.get(A.texture),et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,et)}P=-1},this.readRenderTargetPixels=function(A,G,te,ne,W,Ae,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){je.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=A.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W&&X.readPixels(G,te,ne,W,rt.convert(et),rt.convert(nt),Ae)}finally{const ze=V!==null?Ye.get(V).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,ne,W,Ae,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){const ze=A.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W){je.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(G,te,ne,W,rt.convert(et),rt.convert(nt),0);const mt=V!==null?Ye.get(V).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,mt);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await T0(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(We),X.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,te=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),W=Math.floor(A.image.width*ne),Ae=Math.floor(A.image.height*ne),Te=G!==null?G.x:0,Ge=G!==null?G.y:0;D.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Te,Ge,W,Ae),je.unbindTexture()},this.copyTextureToTexture=function(A,G,te=null,ne=null,W=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,te=null);let Ae,Te,Ge,ze,et,nt,We,mt,Tt;const pt=A.isCompressedTexture?A.mipmaps[W]:A.image;te!==null?(Ae=te.max.x-te.min.x,Te=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,et=te.min.y,nt=te.isBox3?te.min.z:0):(Ae=pt.width,Te=pt.height,Ge=pt.depth||1,ze=0,et=0,nt=0),ne!==null?(We=ne.x,mt=ne.y,Tt=ne.z):(We=0,mt=0,Tt=0);const on=rt.convert(G.format),ot=rt.convert(G.type);let qe;G.isData3DTexture?(D.setTexture3D(G,0),qe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),qe=X.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),qe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const Zn=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),Qn=X.getParameter(X.UNPACK_SKIP_ROWS),jt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,pt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const hi=A.isDataArrayTexture||A.isData3DTexture,bt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=Ye.get(A),Ri=Ye.get(G),_n=Ye.get(Bn.__renderTarget),zn=Ye.get(Ri.__renderTarget);je.bindFramebuffer(X.READ_FRAMEBUFFER,_n.__webglFramebuffer),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let En=0;En<Ge;En++)hi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,W,nt+En),A.isDepthTexture?(bt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,W,Tt+En),X.blitFramebuffer(ze,et,Ae,Te,We,mt,Ae,Te,X.DEPTH_BUFFER_BIT,X.NEAREST)):bt?X.copyTexSubImage3D(qe,W,We,mt,Tt+En,ze,et,Ae,Te):X.copyTexSubImage2D(qe,W,We,mt,Tt+En,ze,et,Ae,Te);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(qe,W,We,mt,Tt,Ae,Te,Ge,on,ot,pt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(qe,W,We,mt,Tt,Ae,Te,Ge,on,pt.data):X.texSubImage3D(qe,W,We,mt,Tt,Ae,Te,Ge,on,ot,pt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,We,mt,Ae,Te,on,ot,pt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,We,mt,pt.width,pt.height,on,pt.data):X.texSubImage2D(X.TEXTURE_2D,W,We,mt,Ae,Te,on,ot,pt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Zn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,jt),W===0&&G.generateMipmaps&&X.generateMipmap(qe),je.unbindTexture()},this.copyTextureToTexture3D=function(A,G,te=null,ne=null,W=0){return A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,te,ne,W)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){F=0,N=0,V=null,je.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}class OM extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd extends Rr{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const u=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Ei(u,3)),this.setAttribute("normal",new Ei(u.slice(),3)),this.setAttribute("uv",new Ei(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const b=new J,C=new J,Y=new J;for(let F=0;F<t.length;F+=3)S(t[F+0],b),S(t[F+1],C),S(t[F+2],Y),p(b,C,Y,L)}function p(L,b,C,Y){const F=Y+1,N=[];for(let V=0;V<=F;V++){N[V]=[];const P=L.clone().lerp(C,V/F),w=b.clone().lerp(C,V/F),k=F-V;for(let se=0;se<=k;se++)se===0&&V===F?N[V][se]=P:N[V][se]=P.clone().lerp(w,se/k)}for(let V=0;V<F;V++)for(let P=0;P<2*(F-V)-1;P++){const w=Math.floor(P/2);P%2===0?(v(N[V][w+1]),v(N[V+1][w]),v(N[V][w])):(v(N[V][w+1]),v(N[V+1][w+1]),v(N[V+1][w]))}}function m(L){const b=new J;for(let C=0;C<u.length;C+=3)b.x=u[C+0],b.y=u[C+1],b.z=u[C+2],b.normalize().multiplyScalar(L),u[C+0]=b.x,u[C+1]=b.y,u[C+2]=b.z}function _(){const L=new J;for(let b=0;b<u.length;b+=3){L.x=u[b+0],L.y=u[b+1],L.z=u[b+2];const C=y(L)/2/Math.PI+.5,Y=g(L)/Math.PI+.5;c.push(C,1-Y)}T(),x()}function x(){for(let L=0;L<c.length;L+=6){const b=c[L+0],C=c[L+2],Y=c[L+4],F=Math.max(b,C,Y),N=Math.min(b,C,Y);F>.9&&N<.1&&(b<.2&&(c[L+0]+=1),C<.2&&(c[L+2]+=1),Y<.2&&(c[L+4]+=1))}}function v(L){u.push(L.x,L.y,L.z)}function S(L,b){const C=L*3;b.x=e[C+0],b.y=e[C+1],b.z=e[C+2]}function T(){const L=new J,b=new J,C=new J,Y=new J,F=new Et,N=new Et,V=new Et;for(let P=0,w=0;P<u.length;P+=9,w+=6){L.set(u[P+0],u[P+1],u[P+2]),b.set(u[P+3],u[P+4],u[P+5]),C.set(u[P+6],u[P+7],u[P+8]),F.set(c[w+0],c[w+1]),N.set(c[w+2],c[w+3]),V.set(c[w+4],c[w+5]),Y.copy(L).add(b).add(C).divideScalar(3);const k=y(Y);R(F,w+0,L,k),R(N,w+2,b,k),R(V,w+4,C,k)}}function R(L,b,C,Y){Y<0&&L.x===1&&(c[b]=L.x-1),C.x===0&&C.z===0&&(c[b]=Y/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function g(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dd(e.vertices,e.indices,e.radius,e.details)}}class hd extends dd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,u,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hd(e.radius,e.detail)}}class Ug extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sf=new Vt,jm=new J,$m=new J;class kM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),$m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($m),t.updateMatrixWorld(),sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BM extends kM{constructor(){super(new Rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zM extends Ug{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new BM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class VM extends Ug{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);const HM=`uniform float uTime;\r
\r
varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vDisplacement;\r
\r
void main() {\r
    gl_FragColor = vec4(vec3(0.15, 1.0, 0.05) * vDisplacement, 1.0);\r
}\r
`,GM=`uniform float uTime;\r
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
`;function WM(){const s=Dt.useRef(null);return Dt.useEffect(()=>{const e=s.current,t=new OM,r=new $n(75,window.innerWidth/window.innerHeight,.1,1e3),a=new FM({canvas:e,antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),a.setSize(window.innerWidth,window.innerHeight);const u=new zM("#ffffff",.75);u.position.set(5,5,5);const c=new VM("#ffffff",.2);t.add(u,c);const d=new hd(.61,6),p=new ji({vertexShader:GM,fragmentShader:HM});p.uniforms.uTime={value:0};const m=new yi(d,p);t.add(m);const _={current:!1},x=g=>{var L;_.current=!!((L=g.detail)!=null&&L.speaking)};window.addEventListener("jarvis:speaking",x),r.position.z=3;const v=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),a.setSize(window.innerWidth,window.innerHeight)};let S,T=0,R=.002;const y=()=>{p.uniforms.uTime.value=T;const g=_.current?.008:.002;R+=(g-R)*.08,m.rotation.z-=.005*(R/.002);const L=_.current?1+Math.sin(T*7.5)*.075:1,b=m.scale.x+(L-m.scale.x)*.12;m.scale.setScalar(b),T+=R,S=window.requestAnimationFrame(y),a.render(t,r)};return window.addEventListener("resize",v),y(),()=>{window.cancelAnimationFrame(S),window.removeEventListener("resize",v),window.removeEventListener("jarvis:speaking",x),d.dispose(),p.dispose(),a.dispose()}},[]),Gt.jsx("canvas",{ref:s,className:"orb-canvas"})}const Ti=Object.create(null);Ti.open="0";Ti.close="1";Ti.ping="2";Ti.pong="3";Ti.message="4";Ti.upgrade="5";Ti.noop="6";const Ll=Object.create(null);Object.keys(Ti).forEach(s=>{Ll[Ti[s]]=s});const Kf={type:"error",data:"parser error"},Ng=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ig=typeof ArrayBuffer=="function",Fg=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,pd=({type:s,data:e},t,r)=>Ng&&e instanceof Blob?t?r(e):Km(e,r):Ig&&(e instanceof ArrayBuffer||Fg(e))?t?r(e):Km(new Blob([e]),r):r(Ti[s]+(e||"")),Km=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function Zm(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let of;function XM(s,e){if(Ng&&s.data instanceof Blob)return s.data.arrayBuffer().then(Zm).then(e);if(Ig&&(s.data instanceof ArrayBuffer||Fg(s.data)))return e(Zm(s.data));pd(s,!1,t=>{of||(of=new TextEncoder),e(of.encode(t))})}const Qm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Qm.length;s++)Vo[Qm.charCodeAt(s)]=s;const qM=s=>{let e=s.length*.75,t=s.length,r,a=0,u,c,d,p;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),_=new Uint8Array(m);for(r=0;r<t;r+=4)u=Vo[s.charCodeAt(r)],c=Vo[s.charCodeAt(r+1)],d=Vo[s.charCodeAt(r+2)],p=Vo[s.charCodeAt(r+3)],_[a++]=u<<2|c>>4,_[a++]=(c&15)<<4|d>>2,_[a++]=(d&3)<<6|p&63;return m},YM=typeof ArrayBuffer=="function",md=(s,e)=>{if(typeof s!="string")return{type:"message",data:Og(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:jM(s.substring(1),e)}:Ll[t]?s.length>1?{type:Ll[t],data:s.substring(1)}:{type:Ll[t]}:Kf},jM=(s,e)=>{if(YM){const t=qM(s);return Og(t,e)}else return{base64:!0,data:s}},Og=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},kg="",$M=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((u,c)=>{pd(u,!1,d=>{r[c]=d,++a===t&&e(r.join(kg))})})},KM=(s,e)=>{const t=s.split(kg),r=[];for(let a=0;a<t.length;a++){const u=md(t[a],e);if(r.push(u),u.type==="error")break}return r};function ZM(){return new TransformStream({transform(s,e){XM(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const u=new DataView(a.buffer);u.setUint8(0,126),u.setUint16(1,r)}else{a=new Uint8Array(9);const u=new DataView(a.buffer);u.setUint8(0,127),u.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let af;function El(s){return s.reduce((e,t)=>e+t.length,0)}function Ml(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function QM(s,e){af||(af=new TextDecoder);const t=[];let r=0,a=-1,u=!1;return new TransformStream({transform(c,d){for(t.push(c);;){if(r===0){if(El(t)<1)break;const p=Ml(t,1);u=(p[0]&128)===128,a=p[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(El(t)<2)break;const p=Ml(t,2);a=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),r=3}else if(r===2){if(El(t)<8)break;const p=Ml(t,8),m=new DataView(p.buffer,p.byteOffset,p.length),_=m.getUint32(0);if(_>Math.pow(2,21)-1){d.enqueue(Kf);break}a=_*Math.pow(2,32)+m.getUint32(4),r=3}else{if(El(t)<a)break;const p=Ml(t,a);d.enqueue(md(u?p:af.decode(p),e)),r=0}if(a===0||a>s){d.enqueue(Kf);break}}}})}const Bg=4;function qt(s){if(s)return JM(s)}function JM(s){for(var e in qt.prototype)s[e]=qt.prototype[e];return s}qt.prototype.on=qt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};qt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};qt.prototype.off=qt.prototype.removeListener=qt.prototype.removeAllListeners=qt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};qt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};qt.prototype.emitReserved=qt.prototype.emit;qt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};qt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const Gl=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Kn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),eT="arraybuffer";function zg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const tT=Kn.setTimeout,nT=Kn.clearTimeout;function Wl(s,e){e.useNativeTimers?(s.setTimeoutFn=tT.bind(Kn),s.clearTimeoutFn=nT.bind(Kn)):(s.setTimeoutFn=Kn.setTimeout.bind(Kn),s.clearTimeoutFn=Kn.clearTimeout.bind(Kn))}const iT=1.33;function rT(s){return typeof s=="string"?sT(s):Math.ceil((s.byteLength||s.size)*iT)}function sT(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Vg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function oT(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function aT(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let u=t[r].split("=");e[decodeURIComponent(u[0])]=decodeURIComponent(u[1])}return e}class lT extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class gd extends qt{constructor(e){super(),this.writable=!1,Wl(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new lT(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=md(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=oT(e);return t.length?"?"+t:""}}class uT extends gd{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};KM(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,$M(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Vg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Hg=!1;try{Hg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const cT=Hg;function fT(){}class dT extends uT{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,u)=>{this.onError("xhr post error",a,u)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class Mi extends qt{constructor(e,t,r){super(),this.createRequest=e,Wl(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=zg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=Mi.requestsCount++,Mi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=fT,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Mi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Mi.requestsCount=0;Mi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Jm);else if(typeof addEventListener=="function"){const s="onpagehide"in Kn?"pagehide":"unload";addEventListener(s,Jm,!1)}}function Jm(){for(let s in Mi.requests)Mi.requests.hasOwnProperty(s)&&Mi.requests[s].abort()}const hT=(function(){const s=Gg({xdomain:!1});return s&&s.responseType!==null})();class pT extends dT{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=hT&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mi(Gg,this.uri(),e)}}function Gg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||cT))return new XMLHttpRequest}catch{}if(!e)try{return new Kn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Wg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class mT extends gd{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=Wg?{}:zg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;pd(r,this.supportsBinary,u=>{try{this.doWrite(r,u)}catch{}a&&Gl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Vg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const lf=Kn.WebSocket||Kn.MozWebSocket;class gT extends mT{createSocket(e,t,r){return Wg?new lf(e,t,r):t?new lf(e,t):new lf(e)}doWrite(e,t){this.ws.send(t)}}class _T extends gd{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=QM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=ZM();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const u=()=>{r.read().then(({done:d,value:p})=>{d||(this.onPacket(p),u())}).catch(d=>{})};u();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this._writer.write(c).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&Gl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const vT={websocket:gT,webtransport:_T,polling:pT},xT=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,yT=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Zf(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=xT.exec(s||""),u={},c=14;for(;c--;)u[yT[c]]=a[c]||"";return t!=-1&&r!=-1&&(u.source=e,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=ST(u,u.path),u.queryKey=ET(u,u.query),u}function ST(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function ET(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,u){a&&(t[a]=u)}),t}const Qf=typeof addEventListener=="function"&&typeof removeEventListener=="function",Dl=[];Qf&&addEventListener("offline",()=>{Dl.forEach(s=>s())},!1);class wr extends qt{constructor(e,t){if(super(),this.binaryType=eT,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=Zf(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Zf(t.host).host);Wl(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(r=>{const a=r.prototype.name;this.transports.push(a),this._transportsByName[a]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=aT(this.opts.query)),Qf&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Dl.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Bg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&wr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",wr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=rT(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Gl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const u={type:e,data:t,options:r};this.emitReserved("packetCreate",u),this.writeBuffer.push(u),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(wr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Qf&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Dl.indexOf(this._offlineEventListener);r!==-1&&Dl.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}wr.protocol=Bg;class MT extends wr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;wr.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",x=>{if(!r)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;wr.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const v=new Error("probe error");v.transport=t.name,this.emitReserved("upgradeError",v)}}))};function u(){r||(r=!0,_(),t.close(),t=null)}const c=x=>{const v=new Error("probe error: "+x);v.transport=t.name,u(),this.emitReserved("upgradeError",v)};function d(){c("transport closed")}function p(){c("socket closed")}function m(x){t&&x.name!==t.name&&u()}const _=()=>{t.removeListener("open",a),t.removeListener("error",c),t.removeListener("close",d),this.off("close",p),this.off("upgrading",m)};t.once("open",a),t.once("error",c),t.once("close",d),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}let TT=class extends MT{constructor(e,t={}){const r=typeof e=="object",a=r?{...e}:{...t};(!a.transports||a.transports&&typeof a.transports[0]=="string")&&(a.transports=(a.transports||["polling","websocket","webtransport"]).map(u=>vT[u]).filter(u=>!!u)),super(r?a:e,a)}};function wT(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Zf(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const u=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+u+":"+r.port+e,r.href=r.protocol+"://"+u+(t&&t.port===r.port?"":":"+r.port),r}const AT=typeof ArrayBuffer=="function",RT=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Xg=Object.prototype.toString,CT=typeof Blob=="function"||typeof Blob<"u"&&Xg.call(Blob)==="[object BlobConstructor]",PT=typeof File=="function"||typeof File<"u"&&Xg.call(File)==="[object FileConstructor]";function _d(s){return AT&&(s instanceof ArrayBuffer||RT(s))||CT&&s instanceof Blob||PT&&s instanceof File}function Ul(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Ul(s[t]))return!0;return!1}if(_d(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Ul(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Ul(s[t]))return!0;return!1}function bT(s){const e=[],t=s.data,r=s;return r.data=Nl(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Nl(s,e,t){if(!s)return s;if(_d(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Nl(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Nl(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Nl(s[a],e));return r}return s}function LT(s,e){return s.data=Jf(s.data,e),delete s.attachments,s}function Jf(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Jf(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Jf(s[t],e));return s}const DT=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var gt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(gt||(gt={}));class UT{constructor(e){this.replacer=e}encode(e){return(e.type===gt.EVENT||e.type===gt.ACK)&&Ul(e)?this.encodeAsBinary({type:e.type===gt.EVENT?gt.BINARY_EVENT:gt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===gt.BINARY_EVENT||e.type===gt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=bT(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class vd extends qt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===gt.BINARY_EVENT;r||t.type===gt.BINARY_ACK?(t.type=r?gt.EVENT:gt.ACK,this.reconstructor=new NT(t)):super.emitReserved("decoded",t)}else if(_d(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(gt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===gt.BINARY_EVENT||r.type===gt.BINARY_ACK){const u=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(u,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const d=Number(c);if(!IT(d)||d<1)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=d}if(e.charAt(t+1)==="/"){const u=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(u,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const u=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}r.id=Number(e.substring(u,t+1))}if(e.charAt(++t)){const u=this.tryParse(e.substr(t));if(vd.isPayloadValid(r.type,u))r.data=u;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case gt.CONNECT:return eg(t);case gt.DISCONNECT:return t===void 0;case gt.CONNECT_ERROR:return typeof t=="string"||eg(t);case gt.EVENT:case gt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&DT.indexOf(t[0])===-1);case gt.ACK:case gt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class NT{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=LT(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const IT=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function eg(s){return Object.prototype.toString.call(s)==="[object Object]"}const FT=Object.freeze(Object.defineProperty({__proto__:null,Decoder:vd,Encoder:UT,get PacketType(){return gt}},Symbol.toStringTag,{value:"Module"}));function li(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const OT=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class qg extends qt{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[li(e,"open",this.onopen.bind(this)),li(e,"packet",this.onpacket.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,u;if(OT.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const c={type:gt.EVENT,data:t};if(c.options={},c.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,x=t.pop();this._registerAckCallback(_,x),c.id=_}const d=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,p=this.connected&&!(!((u=this.io.engine)===null||u===void 0)&&u._hasPingExpired());return this.flags.volatile&&!d||(p?(this.notifyOutgoingListeners(c),this.packet(c)):this.sendBuffer.push(c)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const u=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);t.call(this,new Error("operation has timed out"))},a),c=(...d)=>{this.io.clearTimeoutFn(u),t.apply(this,d)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((r,a)=>{const u=(c,d)=>c?a(c):r(d);u.withError=!0,t.push(u),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...u)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...u)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:gt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case gt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case gt.EVENT:case gt.BINARY_EVENT:this.onevent(e);break;case gt.ACK:case gt.BINARY_ACK:this.onack(e);break;case gt.DISCONNECT:this.ondisconnect();break;case gt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:gt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:gt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Js(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Js.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};Js.prototype.reset=function(){this.attempts=0};Js.prototype.setMin=function(s){this.ms=s};Js.prototype.setMax=function(s){this.max=s};Js.prototype.setJitter=function(s){this.jitter=s};class ed extends qt{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Wl(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Js({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||FT;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new TT(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=li(t,"open",function(){r.onopen(),e&&e()}),u=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},c=li(t,"error",u);if(this._timeout!==!1){const d=this._timeout,p=this.setTimeoutFn(()=>{a(),u(new Error("timeout")),t.close()},d);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(a),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(li(e,"ping",this.onping.bind(this)),li(e,"data",this.ondata.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this)),li(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Gl(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new qg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ko={};function Il(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=wT(s,e.path||"/socket.io"),r=t.source,a=t.id,u=t.path,c=ko[a]&&u in ko[a].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let p;return d?p=new ed(r,e):(ko[a]||(ko[a]=new ed(r,e)),p=ko[a]),t.query&&!e.query&&(e.query=t.queryKey),p.socket(t.path,e)}Object.assign(Il,{Manager:ed,Socket:qg,io:Il,connect:Il});const kT="http://localhost:5000",BT=8e4;function Tl(s=window.speechSynthesis.getVoices()){return s.find(e=>/microsoft david/i.test(e.name))||s.find(e=>e.lang.startsWith("en-GB")&&/daniel|george|oliver|male/i.test(e.name))||s.find(e=>e.lang.startsWith("en-GB"))||s.find(e=>e.lang.startsWith("en"))}function zT(){const s=Dt.useRef(null),e=Dt.useRef(null),t=Dt.useRef(null),r=Dt.useRef(0),a=Dt.useRef(null),u=Dt.useRef(null),c=Dt.useRef(null),d=Dt.useRef(null),p=Dt.useRef(!1),m=Dt.useRef(!1),_=Dt.useRef(null),x=Dt.useRef(""),v=Dt.useRef(!0),S=Dt.useRef(""),T=Dt.useRef([]),R=Dt.useRef(!1),y=Dt.useRef(!1),g=Dt.useRef(!1),[L,b]=Dt.useState(!1),[C,Y]=Dt.useState(""),[F,N]=Dt.useState(""),[V,P]=Dt.useState(""),[w,k]=Dt.useState([]),se=Tl(w),Z=j=>{m.current=j,window.dispatchEvent(new CustomEvent("jarvis:speaking",{detail:{speaking:j}}))},fe=()=>{window.clearTimeout(d.current),re(),!(!v.current||p.current)&&(d.current=window.setTimeout(()=>{var j;if(!(!v.current||p.current)){if((j=window.speechSynthesis)!=null&&j.speaking){fe();return}re(),K(!0)}},250))},he=()=>{if(R.current)return;const j=T.current.shift();if(!j){y.current&&v.current&&fe();return}const de=new SpeechSynthesisUtterance(j),ue=Tl();de.lang=(ue==null?void 0:ue.lang)||"en-US",de.voice=ue||null,de.rate=1,de.pitch=1,R.current=!0,de.onstart=()=>{Z(!0),K(!0,!0)},de.onend=()=>{R.current=!1,Z(!1),he()},de.onerror=()=>{R.current=!1,Z(!1),he()},window.speechSynthesis.speak(de)},ae=j=>{S.current+=j;const de=S.current.split(new RegExp("(?<=[.!?])\\s+"));if(S.current=de.pop()||"",de.filter(Boolean).forEach(ue=>T.current.push(ue.trim())),S.current.length>140){const ue=S.current.lastIndexOf(" ");ue>0&&(T.current.push(S.current.slice(0,ue).trim()),S.current=S.current.slice(ue+1))}he()},ce=()=>{y.current=!0,S.current.trim()&&(T.current.push(S.current.trim()),S.current=""),he()},B=(j,de,ue=!0)=>{if(!j)return;const _e=window.speechSynthesis;if(!_e){P("TTS is unavailable in this browser.");return}const Ee=de||Tl(),Re=new SpeechSynthesisUtterance(j);Re.lang=(Ee==null?void 0:Ee.lang)||"en-US",Re.voice=Ee||null,Re.rate=1,Re.pitch=1,Re.volume=1,Re.onstart=()=>{Z(!0),ue&&K(!0,!0)},Re.onend=()=>{Z(!1),ue&&v.current&&fe()},Re.onerror=Qe=>{Z(!1),Qe.error!=="canceled"&&Qe.error!=="interrupted"&&P(`Voice playback failed: ${Qe.error}`)};try{P(""),_e.cancel(),_e.resume(),_e.speak(Re)}catch(Qe){P(`Voice playback failed: ${Qe.message}`)}},le=j=>{window.clearTimeout(a.current),u.current=null,B("Hello Sir. This is a voice preview.",j,!1)},re=()=>{window.clearTimeout(c.current)},I=(j=!1)=>{var de;re(),window.clearTimeout(d.current),j&&(v.current=!1),(de=s.current)==null||de.stop(),p.current=!1,b(!1)},ie=j=>{re(),c.current=window.setTimeout(()=>{v.current=!1,j.stop(),p.current=!1,b(!1)},BT)};Dt.useEffect(()=>{const j=window.speechSynthesis,de=()=>{const Ee=u.current;Ee&&(u.current=null,window.clearTimeout(a.current),B(Ee))},ue=()=>{const Ee=j.getVoices();k(Ee),Ee.length>0&&de()};j&&(ue(),j.addEventListener("voiceschanged",ue));const _e=Il(kT);return e.current=_e,_e.on("server:ready",({greeting:Ee})=>{!Ee||!("speechSynthesis"in window)||(u.current=Ee,window.clearTimeout(a.current),a.current=window.setTimeout(de,j.getVoices().length>0?250:2e3))}),_e.on("connect_error",()=>P("Unable to connect to the assistant server.")),_e.on("ai:delta",({requestId:Ee,delta:Re})=>{Ee!==t.current||typeof Re!="string"||(g.current=!0,ae(Re),N(Qe=>Qe.startsWith("Thinking")?Re:Qe+Re))}),()=>{var Ee;re(),window.clearTimeout(d.current),(Ee=s.current)==null||Ee.abort(),window.clearTimeout(_.current),window.clearTimeout(a.current),u.current=null,j==null||j.removeEventListener("voiceschanged",ue),j==null||j.cancel(),Z(!1),_e.disconnect()}},[]);const Ne=j=>{var _e,Ee;re(),window.clearTimeout(d.current),(_e=s.current)==null||_e.stop(),p.current=!1,b(!1),v.current=!0,S.current="",T.current=[],R.current=!1,y.current=!1,g.current=!1,(Ee=window.speechSynthesis)==null||Ee.cancel();const de=++r.current;t.current=de,N("Thinking…");const ue=e.current;if(!(ue!=null&&ue.connected)){N(""),P("Assistant server is not connected.");return}ue.timeout(36e4).emit("ai:prompt",{requestId:de,responseMode:"operator",messages:[{role:"user",content:j}]},(Re,Qe)=>{if(t.current=null,Re){N(""),P("The assistant request timed out.");return}if(!(Qe!=null&&Qe.ok)){N(""),P((Qe==null?void 0:Qe.error)||"Grok request failed.");return}const it=Qe.result.data,Mt=typeof it=="string"?it:it.reply||JSON.stringify(it);N(Mt),ce(),g.current||B(Mt)})},K=(j=!1,de=!1)=>{var Ee;if(window.clearTimeout(d.current),p.current)return;const ue=window.SpeechRecognition||window.webkitSpeechRecognition;if(!ue){P("Speech recognition is unavailable in this browser. Use Chrome or Edge.");return}v.current=!0,P(""),x.current="",window.clearTimeout(_.current),Y(""),N(""),de||((Ee=window.speechSynthesis)==null||Ee.cancel(),Z(!1));const _e=new ue;_e.lang="en-US",_e.interimResults=!0,_e.continuous=!0,_e.onstart=()=>{p.current=!0,b(!0),ie(_e)},_e.onresult=Re=>{var it;ie(_e);const Qe=Array.from(Re.results).map(Mt=>Mt[0].transcript).join("");x.current=Qe,_.current||(_.current=window.setTimeout(()=>{Y(x.current),_.current=null},50)),m.current&&Qe.trim()&&((it=window.speechSynthesis)==null||it.cancel(),Z(!1)),Re.results[Re.results.length-1].isFinal&&Ne(Qe.trim())},_e.onerror=Re=>{re(),p.current=!1,b(!1),Re.error!=="aborted"&&Re.error!=="no-speech"&&P(`Microphone error: ${Re.error}`)},_e.onend=()=>{re(),p.current=!1,b(!1)},s.current=_e;try{_e.start(),p.current=!0}catch(Re){p.current=!1,P(`Microphone error: ${Re.message}`)}};return Gt.jsxs("section",{className:"voice-assistant","aria-live":"polite",children:[Gt.jsx("button",{className:`mic-button ${L?"is-listening":""}`,onClick:()=>L?I(!0):K(!1),"aria-label":"Speak to Grok",children:Gt.jsx("span",{className:"mic-icon"})}),Gt.jsx("p",{className:"voice-status",children:L?"Listening…":"Tap to speak"}),"speechSynthesis"in window?Gt.jsxs("details",{className:"tts-voices",children:[Gt.jsxs("summary",{onClick:()=>le(Tl()),children:["TTS voices available: ",w.length," · click to hear"]}),Gt.jsxs("p",{className:"tts-default",children:["Default voice: ",(se==null?void 0:se.name)||"Browser default"]}),w.length>0?Gt.jsx("ul",{children:w.map((j,de)=>Gt.jsxs("li",{children:[Gt.jsxs("span",{children:[j.name," (",j.lang,")",j===se?" — app default":j.default?" — system default":""]}),Gt.jsx("button",{type:"button",onClick:()=>le(j),"aria-label":`Play ${j.name} voice sample`,children:"Play"})]},`${j.voiceURI}-${de}`))}):Gt.jsx("p",{children:"No voices reported by this browser yet."})]}):Gt.jsx("p",{className:"voice-status",children:"TTS is unavailable in this browser."}),C&&Gt.jsxs("p",{className:"transcript",children:["“",C,"”"]}),F&&Gt.jsx("p",{className:"grok-reply",children:F}),V&&Gt.jsx("p",{className:"voice-error",children:V})]})}function VT(){return Gt.jsxs("main",{className:"orb-only",children:[Gt.jsx(WM,{}),Gt.jsx(zT,{})]})}Uv.createRoot(document.getElementById("root")).render(Gt.jsx(VT,{}));
