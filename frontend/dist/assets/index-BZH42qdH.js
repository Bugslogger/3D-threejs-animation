(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var Ec={exports:{}},Do={},Mc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Pv(){if(Vp)return dt;Vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function x(U,Z,xe){this.props=U,this.context=Z,this.refs=R,this.updater=xe||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=x.prototype;function b(U,Z,xe){this.props=U,this.context=Z,this.refs=R,this.updater=xe||S}var L=b.prototype=new g;L.constructor=b,T(L,x.prototype),L.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function k(U,Z,xe){var j,oe={},ge=null,fe=null;if(Z!=null)for(j in Z.ref!==void 0&&(fe=Z.ref),Z.key!==void 0&&(ge=""+Z.key),Z)Y.call(Z,j)&&!I.hasOwnProperty(j)&&(oe[j]=Z[j]);var Te=arguments.length-2;if(Te===1)oe.children=xe;else if(1<Te){for(var Re=Array(Te),Xe=0;Xe<Te;Xe++)Re[Xe]=arguments[Xe+2];oe.children=Re}if(U&&U.defaultProps)for(j in Te=U.defaultProps,Te)oe[j]===void 0&&(oe[j]=Te[j]);return{$$typeof:s,type:U,key:ge,ref:fe,props:oe,_owner:F.current}}function P(U,Z){return{$$typeof:s,type:U.type,key:Z,ref:U.ref,props:U.props,_owner:U._owner}}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return Z[xe]})}var re=/\/+/g;function ee(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):Z.toString(36)}function ue(U,Z,xe,j,oe){var ge=typeof U;(ge==="undefined"||ge==="boolean")&&(U=null);var fe=!1;if(U===null)fe=!0;else switch(ge){case"string":case"number":fe=!0;break;case"object":switch(U.$$typeof){case s:case e:fe=!0}}if(fe)return fe=U,oe=oe(fe),U=j===""?"."+ee(fe,0):j,C(oe)?(xe="",U!=null&&(xe=U.replace(re,"$&/")+"/"),ue(oe,Z,xe,"",function(Xe){return Xe})):oe!=null&&(w(oe)&&(oe=P(oe,xe+(!oe.key||fe&&fe.key===oe.key?"":(""+oe.key).replace(re,"$&/")+"/")+U)),Z.push(oe)),1;if(fe=0,j=j===""?".":j+":",C(U))for(var Te=0;Te<U.length;Te++){ge=U[Te];var Re=j+ee(ge,Te);fe+=ue(ge,Z,xe,Re,oe)}else if(Re=v(U),typeof Re=="function")for(U=Re.call(U),Te=0;!(ge=U.next()).done;)ge=ge.value,Re=j+ee(ge,Te++),fe+=ue(ge,Z,xe,Re,oe);else if(ge==="object")throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return fe}function he(U,Z,xe){if(U==null)return U;var j=[],oe=0;return ue(U,j,"","",function(ge){return Z.call(xe,ge,oe++)}),j}function ae(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},z={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function $(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(U,Z,xe){he(U,function(){Z.apply(this,arguments)},xe)},count:function(U){var Z=0;return he(U,function(){Z++}),Z},toArray:function(U){return he(U,function(Z){return Z})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=x,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=b,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,dt.act=$,dt.cloneElement=function(U,Z,xe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var j=T({},U.props),oe=U.key,ge=U.ref,fe=U._owner;if(Z!=null){if(Z.ref!==void 0&&(ge=Z.ref,fe=F.current),Z.key!==void 0&&(oe=""+Z.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Re in Z)Y.call(Z,Re)&&!I.hasOwnProperty(Re)&&(j[Re]=Z[Re]===void 0&&Te!==void 0?Te[Re]:Z[Re])}var Re=arguments.length-2;if(Re===1)j.children=xe;else if(1<Re){Te=Array(Re);for(var Xe=0;Xe<Re;Xe++)Te[Xe]=arguments[Xe+2];j.children=Te}return{$$typeof:s,type:U.type,key:oe,ref:ge,props:j,_owner:fe}},dt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},dt.createElement=k,dt.createFactory=function(U){var Z=k.bind(null,U);return Z.type=U,Z},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:d,render:U}},dt.isValidElement=w,dt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ae}},dt.memo=function(U,Z){return{$$typeof:m,type:U,compare:Z===void 0?null:Z}},dt.startTransition=function(U){var Z=z.transition;z.transition={};try{U()}finally{z.transition=Z}},dt.unstable_act=$,dt.useCallback=function(U,Z){return ce.current.useCallback(U,Z)},dt.useContext=function(U){return ce.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},dt.useEffect=function(U,Z){return ce.current.useEffect(U,Z)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(U,Z,xe){return ce.current.useImperativeHandle(U,Z,xe)},dt.useInsertionEffect=function(U,Z){return ce.current.useInsertionEffect(U,Z)},dt.useLayoutEffect=function(U,Z){return ce.current.useLayoutEffect(U,Z)},dt.useMemo=function(U,Z){return ce.current.useMemo(U,Z)},dt.useReducer=function(U,Z,xe){return ce.current.useReducer(U,Z,xe)},dt.useRef=function(U){return ce.current.useRef(U)},dt.useState=function(U){return ce.current.useState(U)},dt.useSyncExternalStore=function(U,Z,xe){return ce.current.useSyncExternalStore(U,Z,xe)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Hp;function td(){return Hp||(Hp=1,Mc.exports=Pv()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function bv(){if(Gp)return Do;Gp=1;var s=td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,y={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(y[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:y,_owner:a.current}}return Do.Fragment=t,Do.jsx=f,Do.jsxs=f,Do}var Wp;function Lv(){return Wp||(Wp=1,Ec.exports=bv()),Ec.exports}var nn=Lv(),Ft=td(),Ja={},Tc={exports:{}},Cn={},wc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Dv(){return Xp||(Xp=1,(function(s){function e(z,le){var $=z.length;z.push(le);e:for(;0<$;){var U=$-1>>>1,Z=z[U];if(0<a(Z,le))z[U]=le,z[$]=Z,$=U;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var le=z[0],$=z.pop();if($!==le){z[0]=$;e:for(var U=0,Z=z.length,xe=Z>>>1;U<xe;){var j=2*(U+1)-1,oe=z[j],ge=j+1,fe=z[ge];if(0>a(oe,$))ge<Z&&0>a(fe,oe)?(z[U]=fe,z[ge]=$,U=ge):(z[U]=oe,z[j]=$,U=j);else if(ge<Z&&0>a(fe,$))z[U]=fe,z[ge]=$,U=ge;else break e}}return le}function a(z,le){var $=z.sortIndex-le.sortIndex;return $!==0?$:z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,y=null,v=3,S=!1,T=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=z)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function C(z){if(R=!1,L(z),!T)if(t(p)!==null)T=!0,ae(Y);else{var le=t(m);le!==null&&ce(C,le.startTime-z)}}function Y(z,le){T=!1,R&&(R=!1,g(k),k=-1),S=!0;var $=v;try{for(L(le),y=t(p);y!==null&&(!(y.expirationTime>le)||z&&!B());){var U=y.callback;if(typeof U=="function"){y.callback=null,v=y.priorityLevel;var Z=U(y.expirationTime<=le);le=s.unstable_now(),typeof Z=="function"?y.callback=Z:y===t(p)&&r(p),L(le)}else r(p);y=t(p)}if(y!==null)var xe=!0;else{var j=t(m);j!==null&&ce(C,j.startTime-le),xe=!1}return xe}finally{y=null,v=$,S=!1}}var F=!1,I=null,k=-1,P=5,w=-1;function B(){return!(s.unstable_now()-w<P)}function re(){if(I!==null){var z=s.unstable_now();w=z;var le=!0;try{le=I(!0,z)}finally{le?ee():(F=!1,I=null)}}else F=!1}var ee;if(typeof b=="function")ee=function(){b(re)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=re,ee=function(){he.postMessage(null)}}else ee=function(){x(re,0)};function ae(z){I=z,F||(F=!0,ee())}function ce(z,le){k=x(function(){z(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(Y))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var $=v;v=le;try{return z()}finally{v=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,le){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=v;v=z;try{return le()}finally{v=$}},s.unstable_scheduleCallback=function(z,le,$){var U=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,z={id:_++,callback:le,priorityLevel:z,startTime:$,expirationTime:Z,sortIndex:-1},$>U?(z.sortIndex=$,e(m,z),t(p)===null&&z===t(m)&&(R?(g(k),k=-1):R=!0,ce(C,$-U))):(z.sortIndex=Z,e(p,z),T||S||(T=!0,ae(Y))),z},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(z){var le=v;return function(){var $=v;v=le;try{return z.apply(this,arguments)}finally{v=$}}}})(Ac)),Ac}var qp;function Uv(){return qp||(qp=1,wc.exports=Dv()),wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Nv(){if(Yp)return Cn;Yp=1;var s=td(),e=Uv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function v(n){return p.call(y,n)?!0:p.call(_,n)?!1:m.test(n)?y[n]=!0:(_[n]=!0,!1)}function S(n,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,l){if(i===null||typeof i>"u"||S(n,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,b);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,b);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,b);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,l){var c=x.hasOwnProperty(i)?x[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):c.mustUseProperty?n[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?n.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?n.setAttributeNS(l,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),B=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,U;function Z(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var xe=!1;function j(n,i){if(!n||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){l=te}n.call(i.prototype)}else{try{throw Error()}catch(te){l=te}n()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,N=h.length-1;1<=E&&0<=N&&c[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(c[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||c[E]!==h[N]){var O=`
`+c[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=N);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function oe(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case P:return"Profiler";case k:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Mt(n){n._valueTracker||(n._valueTracker=Xe(n))}function ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return n&&(l=Re(n)?n.checked?"true":"false":n.value),n=l,n!==o?(i.setValue(n),!0):!1}function Tt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function rn(n,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),n._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function at(n,i){nt(n,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,i,o){(i!=="number"||Tt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var je=Array.isArray;function D(n,i,o,l){if(n=n.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<n.length;o++)c=i.hasOwnProperty("$"+n[o].value),n[o].selected!==c&&(n[o].selected=c),c&&l&&(n[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,c=0;c<n.length;c++){if(n[c].value===o){n[c].selected=!0,l&&(n[c].defaultSelected=!0);return}i!==null||n[c].disabled||(i=n[c])}i!==null&&(i.selected=!0)}}function M(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(je(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Te(o)}}function me(n,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),l!=null&&(n.defaultValue=""+l)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return n(i,o,l,c)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function Qe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?n.setProperty(o,c):n[o]=c}}var Oe=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,se=null,pe=null;function De(n){if(n=_o(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=pa(i),Pe(n.stateNode,n.type,i))}}function Le(n){se?pe?pe.push(n):pe=[n]:se=n}function rt(){if(se){var n=se,i=pe;if(pe=se=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Dt(n,i){return n(i)}function qt(){}var gt=!1;function Sn(n,i,o){if(gt)return n(i,o);gt=!0;try{return Dt(n,i,o)}finally{gt=!1,(se!==null||pe!==null)&&(qt(),rt())}}function gn(n,i){var o=n.stateNode;if(o===null)return null;var l=pa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ns=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ns=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ns=!1}function wi(n,i,o,l,c,h,E,N,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ye){this.onError(ye)}}var Ai=!1,Cr=null,Pr=!1,Ki=null,jo={onError:function(n){Ai=!0,Cr=n}};function is(n,i,o,l,c,h,E,N,O){Ai=!1,Cr=null,wi.apply(jo,arguments)}function $o(n,i,o,l,c,h,E,N,O){if(is.apply(this,arguments),Ai){if(Ai){var te=Cr;Ai=!1,Cr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=te)}}function di(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ko(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(n){if(di(n)!==n)throw Error(t(188))}function Wl(n){var i=n.alternate;if(!i){if(i=di(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Zo(c),n;if(h===l)return Zo(c),i;h=h.sibling}throw Error(t(188))}if(o.return!==l.return)o=c,l=h;else{for(var E=!1,N=c.child;N;){if(N===o){E=!0,o=c,l=h;break}if(N===l){E=!0,l=c,o=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===o){E=!0,o=h,l=c;break}if(N===l){E=!0,l=h,o=c;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==l)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=Wl(n),n!==null?W(n):null}function W(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=W(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,X=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Me=e.unstable_now,He=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,Je=e.unstable_UserBlockingPriority,tt=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,pt=e.unstable_IdlePriority,wt=null,ht=null;function an(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,qe=Math.log,Zn=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(qe(n)/Zn|0)|0}var ln=64,Qn=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hi(n,i){var o=n.pendingLanes;if(o===0)return 0;var l=0,c=n.suspendedLanes,h=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~c;N!==0?l=Yt(N):(h&=E,h!==0&&(l=Yt(h)))}else E=o&~c,E!==0?l=Yt(E):h!==0&&(l=Yt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=n[o],i&=~c;return l}function bt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(n,i){for(var o=n.suspendedLanes,l=n.pingedLanes,c=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-st(h),N=1<<E,O=c[E];O===-1?((N&o)===0||(N&l)!==0)&&(c[E]=bt(N,i)):O<=i&&(n.expiredLanes|=N),h&=~N}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),n}function zn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function En(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=o}function Qo(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,n[c]=-1,o&=~h}}function Xl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var l=31-st(o),c=1<<l;c&i|n[l]&i&&(n[l]|=i),o&=~c}}var Ct=0;function yd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xd,ql,Sd,Ed,Md,Yl=!1,Jo=[],Zi=null,Qi=null,Ji=null,eo=new Map,to=new Map,er=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(n,i,o,l,c,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=_o(i),i!==null&&ql(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),n)}function Qg(n,i,o,l,c){switch(i){case"focusin":return Zi=no(Zi,n,i,o,l,c),!0;case"dragenter":return Qi=no(Qi,n,i,o,l,c),!0;case"mouseover":return Ji=no(Ji,n,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return eo.set(h,no(eo.get(h)||null,n,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,to.set(h,no(to.get(h)||null,n,i,o,l,c)),!0}return!1}function wd(n){var i=br(n.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){n.blockedOn=i,Md(n.priority,function(){Sd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var l=new o.constructor(o.type,o);At=l,o.target.dispatchEvent(l),At=null}else return i=_o(o),i!==null&&ql(i),n.blockedOn=o,!1;i.shift()}return!0}function Ad(n,i,o){ea(n)&&o.delete(i)}function Jg(){Yl=!1,Zi!==null&&ea(Zi)&&(Zi=null),Qi!==null&&ea(Qi)&&(Qi=null),Ji!==null&&ea(Ji)&&(Ji=null),eo.forEach(Ad),to.forEach(Ad)}function io(n,i){n.blockedOn===i&&(n.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function ro(n){function i(c){return io(c,n)}if(0<Jo.length){io(Jo[0],n);for(var o=1;o<Jo.length;o++){var l=Jo[o];l.blockedOn===n&&(l.blockedOn=null)}}for(Zi!==null&&io(Zi,n),Qi!==null&&io(Qi,n),Ji!==null&&io(Ji,n),eo.forEach(i),to.forEach(i),o=0;o<er.length;o++)l=er[o],l.blockedOn===n&&(l.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)wd(o),o.blockedOn===null&&er.shift()}var rs=C.ReactCurrentBatchConfig,ta=!0;function e_(n,i,o,l){var c=Ct,h=rs.transition;rs.transition=null;try{Ct=1,jl(n,i,o,l)}finally{Ct=c,rs.transition=h}}function t_(n,i,o,l){var c=Ct,h=rs.transition;rs.transition=null;try{Ct=4,jl(n,i,o,l)}finally{Ct=c,rs.transition=h}}function jl(n,i,o,l){if(ta){var c=$l(n,i,o,l);if(c===null)du(n,i,l,na,o),Td(n,l);else if(Qg(c,n,i,o,l))l.stopPropagation();else if(Td(n,l),i&4&&-1<Zg.indexOf(n)){for(;c!==null;){var h=_o(c);if(h!==null&&xd(h),h=$l(n,i,o,l),h===null&&du(n,i,l,na,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else du(n,i,l,null,o)}}var na=null;function $l(n,i,o,l){if(na=null,n=H(l),n=br(n),n!==null)if(i=di(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ko(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return na=n,null}function Rd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(He()){case Be:return 1;case Je:return 4;case tt:case Ge:return 16;case pt:return 536870912;default:return 16}default:return 16}}var tr=null,Kl=null,ia=null;function Cd(){if(ia)return ia;var n,i=Kl,o=i.length,l,c="value"in tr?tr.value:tr.textContent,h=c.length;for(n=0;n<o&&i[n]===c[n];n++);var E=o-n;for(l=1;l<=E&&i[o-l]===c[h-l];l++);return ia=c.slice(n,1<l?1-l:void 0)}function ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function sa(){return!0}function Pd(){return!1}function Un(n){function i(o,l,c,h,E){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sa:Pd,this.isPropagationStopped=Pd,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Un(ss),so=$({},ss,{view:0,detail:0}),n_=Un(so),Ql,Jl,oo,oa=$({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Ql=n.screenX-oo.screenX,Jl=n.screenY-oo.screenY):Jl=Ql=0,oo=n),Ql)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),bd=Un(oa),i_=$({},oa,{dataTransfer:0}),r_=Un(i_),s_=$({},so,{relatedTarget:0}),eu=Un(s_),o_=$({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=Un(o_),l_=$({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u_=Un(l_),c_=$({},ss,{data:0}),Ld=Un(c_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=h_[n])?!!i[n]:!1}function tu(){return p_}var m_=$({},so,{key:function(n){if(n.key){var i=f_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?d_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g_=Un(m_),__=$({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Un(__),v_=$({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),y_=Un(v_),x_=$({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=Un(x_),E_=$({},oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=Un(E_),T_=[9,13,27,32],nu=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var w_=d&&"TextEvent"in window&&!ao,Ud=d&&(!nu||ao&&8<ao&&11>=ao),Nd=" ",Id=!1;function Fd(n,i){switch(n){case"keyup":return T_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function A_(n,i){switch(n){case"compositionend":return Od(i);case"keypress":return i.which!==32?null:(Id=!0,Nd);case"textInput":return n=i.data,n===Nd&&Id?null:n;default:return null}}function R_(n,i){if(os)return n==="compositionend"||!nu&&Fd(n,i)?(n=Cd(),ia=Kl=tr=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ud&&i.locale!=="ko"?null:i.data;default:return null}}var C_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!C_[n.type]:i==="textarea"}function Bd(n,i,o,l){Le(l),i=fa(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,l),n.push({event:o,listeners:i}))}var lo=null,uo=null;function P_(n){ih(n,0)}function aa(n){var i=fs(n);if(ut(i))return n}function b_(n,i){if(n==="change")return i}var zd=!1;if(d){var iu;if(d){var ru="oninput"in document;if(!ru){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),ru=typeof Vd.oninput=="function"}iu=ru}else iu=!1;zd=iu&&(!document.documentMode||9<document.documentMode)}function Hd(){lo&&(lo.detachEvent("onpropertychange",Gd),uo=lo=null)}function Gd(n){if(n.propertyName==="value"&&aa(uo)){var i=[];Bd(i,uo,n,H(n)),Sn(P_,i)}}function L_(n,i,o){n==="focusin"?(Hd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Gd)):n==="focusout"&&Hd()}function D_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return aa(uo)}function U_(n,i){if(n==="click")return aa(i)}function N_(n,i){if(n==="input"||n==="change")return aa(i)}function I_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:I_;function co(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Jn(n[c],i[c]))return!1}return!0}function Wd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xd(n,i){var o=Wd(n);n=0;for(var l;o;){if(o.nodeType===3){if(l=n+o.textContent.length,n<=i&&l>=i)return{node:o,offset:i-n};n=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wd(o)}}function qd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?qd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var n=window,i=Tt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Tt(n.document)}return i}function su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function F_(n){var i=Yd(),o=n.focusedElem,l=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&qd(o.ownerDocument.documentElement,o)){if(l!==null&&su(o)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!n.extend&&h>l&&(c=l,l=h,h=c),c=Xd(o,h);var E=Xd(o,l);c&&E&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),n.removeAllRanges(),h>l?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O_=d&&"documentMode"in document&&11>=document.documentMode,as=null,ou=null,fo=null,au=!1;function jd(n,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;au||as==null||as!==Tt(l)||(l=as,"selectionStart"in l&&su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=fa(ou,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,o),n.push({event:i,listeners:l}),i.target=as)))}function la(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ls={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},lu={},$d={};d&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ua(n){if(lu[n])return lu[n];if(!ls[n])return n;var i=ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in $d)return lu[n]=i[o];return n}var Kd=ua("animationend"),Zd=ua("animationiteration"),Qd=ua("animationstart"),Jd=ua("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){eh.set(n,i),u(i,[n])}for(var uu=0;uu<th.length;uu++){var cu=th[uu],k_=cu.toLowerCase(),B_=cu[0].toUpperCase()+cu.slice(1);nr(k_,"on"+B_)}nr(Kd,"onAnimationEnd"),nr(Zd,"onAnimationIteration"),nr(Qd,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Jd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function nh(n,i,o){var l=n.type||"unknown-event";n.currentTarget=o,$o(l,i,void 0,n),n.currentTarget=null}function ih(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var l=n[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],O=N.instance,te=N.currentTarget;if(N=N.listener,O!==h&&c.isPropagationStopped())break e;nh(c,N,te),h=O}else for(E=0;E<l.length;E++){if(N=l[E],O=N.instance,te=N.currentTarget,N=N.listener,O!==h&&c.isPropagationStopped())break e;nh(c,N,te),h=O}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Ut(n,i){var o=i[vu];o===void 0&&(o=i[vu]=new Set);var l=n+"__bubble";o.has(l)||(rh(i,n,2,!1),o.add(l))}function fu(n,i,o){var l=0;i&&(l|=4),rh(o,n,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[ca]){n[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(z_.has(o)||fu(o,!1,n),fu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ca]||(i[ca]=!0,fu("selectionchange",!1,i))}}function rh(n,i,o,l){switch(Rd(i)){case 1:var c=e_;break;case 4:c=t_;break;default:c=jl}o=c.bind(null,i,o,n),c=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?n.addEventListener(i,o,{capture:!0,passive:c}):n.addEventListener(i,o,!0):c!==void 0?n.addEventListener(i,o,{passive:c}):n.addEventListener(i,o,!1)}function du(n,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;E=E.return}for(;N!==null;){if(E=br(N),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}N=N.parentNode}}l=l.return}Sn(function(){var te=h,ye=H(o),Se=[];e:{var _e=eh.get(n);if(_e!==void 0){var Ue=Zl,ke=n;switch(n){case"keypress":if(ra(o)===0)break e;case"keydown":case"keyup":Ue=g_;break;case"focusin":ke="focus",Ue=eu;break;case"focusout":ke="blur",Ue=eu;break;case"beforeblur":case"afterblur":Ue=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=r_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=y_;break;case Kd:case Zd:case Qd:Ue=a_;break;case Jd:Ue=S_;break;case"scroll":Ue=n_;break;case"wheel":Ue=M_;break;case"copy":case"cut":case"paste":Ue=u_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Dd}var ze=(i&4)!==0,Ht=!ze&&n==="scroll",q=ze?_e!==null?_e+"Capture":null:_e;ze=[];for(var V=te,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=gn(V,q),we!=null&&ze.push(mo(V,we,K)))),Ht)break;V=V.return}0<ze.length&&(_e=new Ue(_e,ke,null,o,ye),Se.push({event:_e,listeners:ze}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",_e&&o!==At&&(ke=o.relatedTarget||o.fromElement)&&(br(ke)||ke[Ci]))break e;if((Ue||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ue?(ke=o.relatedTarget||o.toElement,Ue=te,ke=ke?br(ke):null,ke!==null&&(Ht=di(ke),ke!==Ht||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ue=null,ke=te),Ue!==ke)){if(ze=bd,we="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(ze=Dd,we="onPointerLeave",q="onPointerEnter",V="pointer"),Ht=Ue==null?_e:fs(Ue),K=ke==null?_e:fs(ke),_e=new ze(we,V+"leave",Ue,o,ye),_e.target=Ht,_e.relatedTarget=K,we=null,br(ye)===te&&(ze=new ze(q,V+"enter",ke,o,ye),ze.target=K,ze.relatedTarget=Ht,we=ze),Ht=we,Ue&&ke)t:{for(ze=Ue,q=ke,V=0,K=ze;K;K=us(K))V++;for(K=0,we=q;we;we=us(we))K++;for(;0<V-K;)ze=us(ze),V--;for(;0<K-V;)q=us(q),K--;for(;V--;){if(ze===q||q!==null&&ze===q.alternate)break t;ze=us(ze),q=us(q)}ze=null}else ze=null;Ue!==null&&sh(Se,_e,Ue,ze,!1),ke!==null&&Ht!==null&&sh(Se,Ht,ke,ze,!0)}}e:{if(_e=te?fs(te):window,Ue=_e.nodeName&&_e.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&_e.type==="file")var We=b_;else if(kd(_e))if(zd)We=N_;else{We=D_;var $e=L_}else(Ue=_e.nodeName)&&Ue.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(We=U_);if(We&&(We=We(n,te))){Bd(Se,We,o,ye);break e}$e&&$e(n,_e,te),n==="focusout"&&($e=_e._wrapperState)&&$e.controlled&&_e.type==="number"&&Rt(_e,"number",_e.value)}switch($e=te?fs(te):window,n){case"focusin":(kd($e)||$e.contentEditable==="true")&&(as=$e,ou=te,fo=null);break;case"focusout":fo=ou=as=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,jd(Se,o,ye);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":jd(Se,o,ye)}var Ke;if(nu)e:{switch(n){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else os?Fd(n,o)&&(et="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(et="onCompositionStart");et&&(Ud&&o.locale!=="ko"&&(os||et!=="onCompositionStart"?et==="onCompositionEnd"&&os&&(Ke=Cd()):(tr=ye,Kl="value"in tr?tr.value:tr.textContent,os=!0)),$e=fa(te,et),0<$e.length&&(et=new Ld(et,n,null,o,ye),Se.push({event:et,listeners:$e}),Ke?et.data=Ke:(Ke=Od(o),Ke!==null&&(et.data=Ke)))),(Ke=w_?A_(n,o):R_(n,o))&&(te=fa(te,"onBeforeInput"),0<te.length&&(ye=new Ld("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:te}),ye.data=Ke))}ih(Se,i)})}function mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function fa(n,i){for(var o=i+"Capture",l=[];n!==null;){var c=n,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=gn(n,o),h!=null&&l.unshift(mo(n,h,c)),h=gn(n,i),h!=null&&l.push(mo(n,h,c))),n=n.return}return l}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sh(n,i,o,l,c){for(var h=i._reactName,E=[];o!==null&&o!==l;){var N=o,O=N.alternate,te=N.stateNode;if(O!==null&&O===l)break;N.tag===5&&te!==null&&(N=te,c?(O=gn(o,h),O!=null&&E.unshift(mo(o,O,N))):c||(O=gn(o,h),O!=null&&E.push(mo(o,O,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var V_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function oh(n){return(typeof n=="string"?n:""+n).replace(V_,`
`).replace(H_,"")}function da(n,i,o){if(i=oh(i),oh(n)!==i&&o)throw Error(t(425))}function ha(){}var hu=null,pu=null;function mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,G_=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(n){return ah.resolve(null).then(n).catch(X_)}:gu;function X_(n){setTimeout(function(){throw n})}function _u(n,i){var o=i,l=0;do{var c=o.nextSibling;if(n.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){n.removeChild(c),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);ro(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),pi="__reactFiber$"+cs,go="__reactProps$"+cs,Ci="__reactContainer$"+cs,vu="__reactEvents$"+cs,q_="__reactListeners$"+cs,Y_="__reactHandles$"+cs;function br(n){var i=n[pi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ci]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lh(n);n!==null;){if(o=n[pi])return o;n=lh(n)}return i}n=o,o=n.parentNode}return null}function _o(n){return n=n[pi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function pa(n){return n[go]||null}var yu=[],ds=-1;function rr(n){return{current:n}}function Nt(n){0>ds||(n.current=yu[ds],yu[ds]=null,ds--)}function Lt(n,i){ds++,yu[ds]=n.current,n.current=i}var sr={},un=rr(sr),Mn=rr(!1),Lr=sr;function hs(n,i){var o=n.type.contextTypes;if(!o)return sr;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(n){return n=n.childContextTypes,n!=null}function ma(){Nt(Mn),Nt(un)}function uh(n,i,o){if(un.current!==sr)throw Error(t(168));Lt(un,i),Lt(Mn,o)}function ch(n,i,o){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(t(108,fe(n)||"Unknown",c));return $({},o,l)}function ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Lr=un.current,Lt(un,n),Lt(Mn,Mn.current),!0}function fh(n,i,o){var l=n.stateNode;if(!l)throw Error(t(169));o?(n=ch(n,i,Lr),l.__reactInternalMemoizedMergedChildContext=n,Nt(Mn),Nt(un),Lt(un,n)):Nt(Mn),Lt(Mn,o)}var Pi=null,_a=!1,xu=!1;function dh(n){Pi===null?Pi=[n]:Pi.push(n)}function j_(n){_a=!0,dh(n)}function or(){if(!xu&&Pi!==null){xu=!0;var n=0,i=Ct;try{var o=Pi;for(Ct=1;n<o.length;n++){var l=o[n];do l=l(!0);while(l!==null)}Pi=null,_a=!1}catch(c){throw Pi!==null&&(Pi=Pi.slice(n+1)),ne(Be,or),c}finally{Ct=i,xu=!1}}return null}var ps=[],ms=0,va=null,ya=0,Vn=[],Hn=0,Dr=null,bi=1,Li="";function Ur(n,i){ps[ms++]=ya,ps[ms++]=va,va=n,ya=i}function hh(n,i,o){Vn[Hn++]=bi,Vn[Hn++]=Li,Vn[Hn++]=Dr,Dr=n;var l=bi;n=Li;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,bi=1<<32-st(i)+c|o<<c|l,Li=h+n}else bi=1<<h|o<<c|l,Li=n}function Su(n){n.return!==null&&(Ur(n,1),hh(n,1,0))}function Eu(n){for(;n===va;)va=ps[--ms],ps[ms]=null,ya=ps[--ms],ps[ms]=null;for(;n===Dr;)Dr=Vn[--Hn],Vn[Hn]=null,Li=Vn[--Hn],Vn[Hn]=null,bi=Vn[--Hn],Vn[Hn]=null}var Nn=null,In=null,It=!1,ei=null;function ph(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Nn=n,In=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Nn=n,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:bi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Nn=n,In=null,!0):!1;default:return!1}}function Mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tu(n){if(It){var i=In;if(i){var o=i;if(!mh(n,i)){if(Mu(n))throw Error(t(418));i=ir(o.nextSibling);var l=Nn;i&&mh(n,i)?ph(l,o):(n.flags=n.flags&-4097|2,It=!1,Nn=n)}}else{if(Mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,It=!1,Nn=n}}}function gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function xa(n){if(n!==Nn)return!1;if(!It)return gh(n),It=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mu(n.type,n.memoizedProps)),i&&(i=In)){if(Mu(n))throw _h(),Error(t(418));for(;i;)ph(n,i),i=ir(i.nextSibling)}if(gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){In=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}In=null}}else In=Nn?ir(n.stateNode.nextSibling):null;return!0}function _h(){for(var n=In;n;)n=ir(n.nextSibling)}function gs(){In=Nn=null,It=!1}function wu(n){ei===null?ei=[n]:ei.push(n)}var $_=C.ReactCurrentBatchConfig;function vo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var l=o.stateNode}if(!l)throw Error(t(147,n));var c=l,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=c.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Sa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vh(n){var i=n._init;return i(n._payload)}function yh(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function c(q,V){return q=pr(q,V),q.index=0,q.sibling=null,q}function h(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,V,K,we){return V===null||V.tag!==6?(V=gc(K,q.mode,we),V.return=q,V):(V=c(V,K),V.return=q,V)}function O(q,V,K,we){var We=K.type;return We===I?ye(q,V,K.props.children,we,K.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ae&&vh(We)===V.type)?(we=c(V,K.props),we.ref=vo(q,V,K),we.return=q,we):(we=Xa(K.type,K.key,K.props,null,q.mode,we),we.ref=vo(q,V,K),we.return=q,we)}function te(q,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=_c(K,q.mode,we),V.return=q,V):(V=c(V,K.children||[]),V.return=q,V)}function ye(q,V,K,we,We){return V===null||V.tag!==7?(V=Vr(K,q.mode,we,We),V.return=q,V):(V=c(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=gc(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Y:return K=Xa(V.type,V.key,V.props,null,q.mode,K),K.ref=vo(q,null,V),K.return=q,K;case F:return V=_c(V,q.mode,K),V.return=q,V;case ae:var we=V._init;return Se(q,we(V._payload),K)}if(je(V)||le(V))return V=Vr(V,q.mode,K,null),V.return=q,V;Sa(q,V)}return null}function _e(q,V,K,we){var We=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:N(q,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:return K.key===We?O(q,V,K,we):null;case F:return K.key===We?te(q,V,K,we):null;case ae:return We=K._init,_e(q,V,We(K._payload),we)}if(je(K)||le(K))return We!==null?null:ye(q,V,K,we,null);Sa(q,K)}return null}function Ue(q,V,K,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,N(V,q,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Y:return q=q.get(we.key===null?K:we.key)||null,O(V,q,we,We);case F:return q=q.get(we.key===null?K:we.key)||null,te(V,q,we,We);case ae:var $e=we._init;return Ue(q,V,K,$e(we._payload),We)}if(je(we)||le(we))return q=q.get(K)||null,ye(V,q,we,We,null);Sa(V,we)}return null}function ke(q,V,K,we){for(var We=null,$e=null,Ke=V,et=V=0,en=null;Ke!==null&&et<K.length;et++){Ke.index>et?(en=Ke,Ke=null):en=Ke.sibling;var xt=_e(q,Ke,K[et],we);if(xt===null){Ke===null&&(Ke=en);break}n&&Ke&&xt.alternate===null&&i(q,Ke),V=h(xt,V,et),$e===null?We=xt:$e.sibling=xt,$e=xt,Ke=en}if(et===K.length)return o(q,Ke),It&&Ur(q,et),We;if(Ke===null){for(;et<K.length;et++)Ke=Se(q,K[et],we),Ke!==null&&(V=h(Ke,V,et),$e===null?We=Ke:$e.sibling=Ke,$e=Ke);return It&&Ur(q,et),We}for(Ke=l(q,Ke);et<K.length;et++)en=Ue(Ke,q,et,K[et],we),en!==null&&(n&&en.alternate!==null&&Ke.delete(en.key===null?et:en.key),V=h(en,V,et),$e===null?We=en:$e.sibling=en,$e=en);return n&&Ke.forEach(function(mr){return i(q,mr)}),It&&Ur(q,et),We}function ze(q,V,K,we){var We=le(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var $e=We=null,Ke=V,et=V=0,en=null,xt=K.next();Ke!==null&&!xt.done;et++,xt=K.next()){Ke.index>et?(en=Ke,Ke=null):en=Ke.sibling;var mr=_e(q,Ke,xt.value,we);if(mr===null){Ke===null&&(Ke=en);break}n&&Ke&&mr.alternate===null&&i(q,Ke),V=h(mr,V,et),$e===null?We=mr:$e.sibling=mr,$e=mr,Ke=en}if(xt.done)return o(q,Ke),It&&Ur(q,et),We;if(Ke===null){for(;!xt.done;et++,xt=K.next())xt=Se(q,xt.value,we),xt!==null&&(V=h(xt,V,et),$e===null?We=xt:$e.sibling=xt,$e=xt);return It&&Ur(q,et),We}for(Ke=l(q,Ke);!xt.done;et++,xt=K.next())xt=Ue(Ke,q,et,xt.value,we),xt!==null&&(n&&xt.alternate!==null&&Ke.delete(xt.key===null?et:xt.key),V=h(xt,V,et),$e===null?We=xt:$e.sibling=xt,$e=xt);return n&&Ke.forEach(function(Cv){return i(q,Cv)}),It&&Ur(q,et),We}function Ht(q,V,K,we){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:e:{for(var We=K.key,$e=V;$e!==null;){if($e.key===We){if(We=K.type,We===I){if($e.tag===7){o(q,$e.sibling),V=c($e,K.props.children),V.return=q,q=V;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ae&&vh(We)===$e.type){o(q,$e.sibling),V=c($e,K.props),V.ref=vo(q,$e,K),V.return=q,q=V;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}K.type===I?(V=Vr(K.props.children,q.mode,we,K.key),V.return=q,q=V):(we=Xa(K.type,K.key,K.props,null,q.mode,we),we.ref=vo(q,V,K),we.return=q,q=we)}return E(q);case F:e:{for($e=K.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=c(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=_c(K,q.mode,we),V.return=q,q=V}return E(q);case ae:return $e=K._init,Ht(q,V,$e(K._payload),we)}if(je(K))return ke(q,V,K,we);if(le(K))return ze(q,V,K,we);Sa(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=c(V,K),V.return=q,q=V):(o(q,V),V=gc(K,q.mode,we),V.return=q,q=V),E(q)):o(q,V)}return Ht}var _s=yh(!0),xh=yh(!1),Ea=rr(null),Ma=null,vs=null,Au=null;function Ru(){Au=vs=Ma=null}function Cu(n){var i=Ea.current;Nt(Ea),n._currentValue=i}function Pu(n,i,o){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===o)break;n=n.return}}function ys(n,i){Ma=n,Au=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(wn=!0),n.firstContext=null)}function Gn(n){var i=n._currentValue;if(Au!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(Ma===null)throw Error(t(308));vs=n,Ma.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Nr=null;function bu(n){Nr===null?Nr=[n]:Nr.push(n)}function Sh(n,i,o,l){var c=i.interleaved;return c===null?(o.next=o,bu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Di(n,l)}function Di(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Di(n,o)}return c=l.interleaved,c===null?(i.next=i,bu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Di(n,o)}function Ta(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,Xl(n,o)}}function Mh(n,i){var o=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function wa(n,i,o,l){var c=n.updateQueue;ar=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var O=N,te=O.next;O.next=null,E===null?h=te:E.next=te,E=O;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==E&&(N===null?ye.firstBaseUpdate=te:N.next=te,ye.lastBaseUpdate=O))}if(h!==null){var Se=c.baseState;E=0,ye=te=O=null,N=h;do{var _e=N.lane,Ue=N.eventTime;if((l&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ke=n,ze=N;switch(_e=i,Ue=o,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){Se=ke.call(Ue,Se,_e);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,_e=typeof ke=="function"?ke.call(Ue,Se,_e):ke,_e==null)break e;Se=$({},Se,_e);break e;case 2:ar=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,_e=c.effects,_e===null?c.effects=[N]:_e.push(N))}else Ue={eventTime:Ue,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(te=ye=Ue,O=Se):ye=ye.next=Ue,E|=_e;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,c.lastBaseUpdate=_e,c.shared.pending=null}}while(!0);if(ye===null&&(O=Se),c.baseState=O,c.firstBaseUpdate=te,c.lastBaseUpdate=ye,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Or|=E,n.lanes=E,n.memoizedState=Se}}function Th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(t(191,c));c.call(l)}}}var yo={},mi=rr(yo),xo=rr(yo),So=rr(yo);function Ir(n){if(n===yo)throw Error(t(174));return n}function Du(n,i){switch(Lt(So,i),Lt(xo,n),Lt(mi,yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Nt(mi),Lt(mi,i)}function xs(){Nt(mi),Nt(xo),Nt(So)}function wh(n){Ir(So.current);var i=Ir(mi.current),o=Ve(i,n.type);i!==o&&(Lt(xo,n),Lt(mi,o))}function Uu(n){xo.current===n&&(Nt(mi),Nt(xo))}var Ot=rr(0);function Aa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nu=[];function Iu(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var Ra=C.ReactCurrentDispatcher,Fu=C.ReactCurrentBatchConfig,Fr=0,kt=null,jt=null,Qt=null,Ca=!1,Eo=!1,Mo=0,K_=0;function cn(){throw Error(t(321))}function Ou(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function ku(n,i,o,l,c,h){if(Fr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=n===null||n.memoizedState===null?ev:tv,n=o(l,c),Eo){h=0;do{if(Eo=!1,Mo=0,25<=h)throw Error(t(301));h+=1,Qt=jt=null,i.updateQueue=null,Ra.current=nv,n=o(l,c)}while(Eo)}if(Ra.current=La,i=jt!==null&&jt.next!==null,Fr=0,Qt=jt=kt=null,Ca=!1,i)throw Error(t(300));return n}function Bu(){var n=Mo!==0;return Mo=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?kt.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function Wn(){if(jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var i=Qt===null?kt.memoizedState:Qt.next;if(i!==null)Qt=i,jt=n;else{if(n===null)throw Error(t(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?kt.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function To(n,i){return typeof i=="function"?i(n):i}function zu(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=jt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=E=null,O=null,te=h;do{var ye=te.lane;if((Fr&ye)===ye)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:n(l,te.action);else{var Se={lane:ye,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(N=O=Se,E=l):O=O.next=Se,kt.lanes|=ye,Or|=ye}te=te.next}while(te!==null&&te!==h);O===null?E=l:O.next=N,Jn(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,o.lastRenderedState=l}if(n=o.interleaved,n!==null){c=n;do h=c.lane,kt.lanes|=h,Or|=h,c=c.next;while(c!==n)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vu(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var E=c=c.next;do h=n(h,E.action),E=E.next;while(E!==c);Jn(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Ah(){}function Rh(n,i){var o=kt,l=Wn(),c=i(),h=!Jn(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,Hu(bh.bind(null,o,l,n),[n]),l.getSnapshot!==i||h||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,wo(9,Ph.bind(null,o,l,c,i),void 0,null),Jt===null)throw Error(t(349));(Fr&30)!==0||Ch(o,i,c)}return c}function Ch(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ph(n,i,o,l){i.value=o,i.getSnapshot=l,Lh(i)&&Dh(n)}function bh(n,i,o){return o(function(){Lh(i)&&Dh(n)})}function Lh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Dh(n){var i=Di(n,1);i!==null&&ri(i,n,1,-1)}function Uh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},i.queue=n,n=n.dispatch=J_.bind(null,kt,n),[i.memoizedState,n]}function wo(n,i,o,l){return n={tag:n,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(l=o.next,o.next=n,n.next=l,i.lastEffect=n)),n}function Nh(){return Wn().memoizedState}function Pa(n,i,o,l){var c=gi();kt.flags|=n,c.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function ba(n,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var E=jt.memoizedState;if(h=E.destroy,l!==null&&Ou(l,E.deps)){c.memoizedState=wo(i,o,h,l);return}}kt.flags|=n,c.memoizedState=wo(1|i,o,h,l)}function Ih(n,i){return Pa(8390656,8,n,i)}function Hu(n,i){return ba(2048,8,n,i)}function Fh(n,i){return ba(4,2,n,i)}function Oh(n,i){return ba(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bh(n,i,o){return o=o!=null?o.concat([n]):null,ba(4,4,kh.bind(null,i,n),o)}function Gu(){}function zh(n,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(o.memoizedState=[n,i],n)}function Vh(n,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(n=n(),o.memoizedState=[n,i],n)}function Hh(n,i,o){return(Fr&21)===0?(n.baseState&&(n.baseState=!1,wn=!0),n.memoizedState=o):(Jn(o,i)||(o=_n(),kt.lanes|=o,Or|=o,n.baseState=!0),i)}function Z_(n,i){var o=Ct;Ct=o!==0&&4>o?o:4,n(!0);var l=Fu.transition;Fu.transition={};try{n(!1),i()}finally{Ct=o,Fu.transition=l}}function Gh(){return Wn().memoizedState}function Q_(n,i,o){var l=dr(n);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(n))Xh(i,o);else if(o=Sh(n,i,o,l),o!==null){var c=yn();ri(o,n,l,c),qh(o,i,l)}}function J_(n,i,o){var l=dr(n),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(n))Xh(i,c);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,o);if(c.hasEagerState=!0,c.eagerState=N,Jn(N,E)){var O=i.interleaved;O===null?(c.next=c,bu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}o=Sh(n,i,c,l),o!==null&&(c=yn(),ri(o,n,l,c),qh(o,i,l))}}function Wh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function Xh(n,i){Eo=Ca=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function qh(n,i,o){if((o&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,Xl(n,o)}}var La={readContext:Gn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},ev={readContext:Gn,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:Gn,useEffect:Ih,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Pa(4194308,4,kh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Pa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Pa(4,2,n,i)},useMemo:function(n,i){var o=gi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=Q_.bind(null,kt,n),[l.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:Uh,useDebugValue:Gu,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=Uh(!1),i=n[0];return n=Z_.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var l=kt,c=gi();if(It){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Jt===null)throw Error(t(349));(Fr&30)!==0||Ch(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Ih(bh.bind(null,l,h,n),[n]),l.flags|=2048,wo(9,Ph.bind(null,l,h,o,i),void 0,null),o},useId:function(){var n=gi(),i=Jt.identifierPrefix;if(It){var o=Li,l=bi;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=K_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tv={readContext:Gn,useCallback:zh,useContext:Gn,useEffect:Hu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:zu,useRef:Nh,useState:function(){return zu(To)},useDebugValue:Gu,useDeferredValue:function(n){var i=Wn();return Hh(i,jt.memoizedState,n)},useTransition:function(){var n=zu(To)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1},nv={readContext:Gn,useCallback:zh,useContext:Gn,useEffect:Hu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:Vu,useRef:Nh,useState:function(){return Vu(To)},useDebugValue:Gu,useDeferredValue:function(n){var i=Wn();return jt===null?i.memoizedState=n:Hh(i,jt.memoizedState,n)},useTransition:function(){var n=Vu(To)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Wu(n,i,o,l){i=n.memoizedState,o=o(l,i),o=o==null?i:$({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Da={isMounted:function(n){return(n=n._reactInternals)?di(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var l=yn(),c=dr(n),h=Ui(l,c);h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,c),i!==null&&(ri(i,n,c,l),Ta(i,n,c))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var l=yn(),c=dr(n),h=Ui(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=lr(n,h,c),i!==null&&(ri(i,n,c,l),Ta(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=yn(),l=dr(n),c=Ui(o,l);c.tag=2,i!=null&&(c.callback=i),i=lr(n,c,l),i!==null&&(ri(i,n,l,o),Ta(i,n,l))}};function Yh(n,i,o,l,c,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(c,h):!0}function jh(n,i,o){var l=!1,c=sr,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=Tn(i)?Lr:un.current,l=i.contextTypes,h=(l=l!=null)?hs(n,c):sr),i=new i(o,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=c,n.__reactInternalMemoizedMaskedChildContext=h),i}function $h(n,i,o,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==n&&Da.enqueueReplaceState(i,i.state,null)}function Xu(n,i,o,l){var c=n.stateNode;c.props=o,c.state=n.memoizedState,c.refs={},Lu(n);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=Tn(i)?Lr:un.current,c.context=hs(n,h)),c.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wu(n,i,h,o),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Da.enqueueReplaceState(c,c.state,null),wa(n,o,c,l),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",l=i;do o+=oe(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:c,digest:null}}function qu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Yu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Kh(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,lc=l),Yu(n,i)},o}function Zh(n,i,o){o=Ui(-1,o),o.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Yu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yu(n,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Qh(n,i,o){var l=n.pingCache;if(l===null){l=n.pingCache=new iv;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),n=_v.bind(null,n,i,o),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ep(n,i,o,l,c){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=c,n)}var rv=C.ReactCurrentOwner,wn=!1;function vn(n,i,o,l){i.child=n===null?xh(i,null,o,l):_s(i,n.child,o,l)}function tp(n,i,o,l,c){o=o.render;var h=i.ref;return ys(i,c),l=ku(n,i,o,l,h,c),o=Bu(),n!==null&&!wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~c,Ni(n,i,c)):(It&&o&&Su(i),i.flags|=1,vn(n,i,l,c),i.child)}function np(n,i,o,l,c){if(n===null){var h=o.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,ip(n,i,h,l,c)):(n=Xa(o.type,null,l,i,i.mode,c),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&c)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(E,l)&&n.ref===i.ref)return Ni(n,i,c)}return i.flags|=1,n=pr(h,l),n.ref=i.ref,n.return=i,i.child=n}function ip(n,i,o,l,c){if(n!==null){var h=n.memoizedProps;if(co(h,l)&&n.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(n.lanes&c)!==0)(n.flags&131072)!==0&&(wn=!0);else return i.lanes=n.lanes,Ni(n,i,c)}return ju(n,i,o,l,c)}function rp(n,i,o){var l=i.pendingProps,c=l.children,h=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,Fn),Fn|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,Fn),Fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(Ms,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(Ms,Fn),Fn|=l;return vn(n,i,c,o),i.child}function sp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ju(n,i,o,l,c){var h=Tn(o)?Lr:un.current;return h=hs(i,h),ys(i,c),o=ku(n,i,o,l,h,c),l=Bu(),n!==null&&!wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~c,Ni(n,i,c)):(It&&l&&Su(i),i.flags|=1,vn(n,i,o,c),i.child)}function op(n,i,o,l,c){if(Tn(o)){var h=!0;ga(i)}else h=!1;if(ys(i,c),i.stateNode===null)Na(n,i),jh(i,o,l),Xu(i,o,l,c),l=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var O=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=Gn(te):(te=Tn(o)?Lr:un.current,te=hs(i,te));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==l||O!==te)&&$h(i,E,l,te),ar=!1;var _e=i.memoizedState;E.state=_e,wa(i,l,E,c),O=i.memoizedState,N!==l||_e!==O||Mn.current||ar?(typeof ye=="function"&&(Wu(i,o,ye,l),O=i.memoizedState),(N=ar||Yh(i,o,N,l,_e,O,te))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=te,l=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Eh(n,i),N=i.memoizedProps,te=i.type===i.elementType?N:ti(i.type,N),E.props=te,Se=i.pendingProps,_e=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Gn(O):(O=Tn(o)?Lr:un.current,O=hs(i,O));var Ue=o.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Se||_e!==O)&&$h(i,E,l,O),ar=!1,_e=i.memoizedState,E.state=_e,wa(i,l,E,c);var ke=i.memoizedState;N!==Se||_e!==ke||Mn.current||ar?(typeof Ue=="function"&&(Wu(i,o,Ue,l),ke=i.memoizedState),(te=ar||Yh(i,o,te,l,_e,ke,O)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ke,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ke,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),E.props=l,E.state=ke,E.context=O,l=te):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),l=!1)}return $u(n,i,o,l,h,c)}function $u(n,i,o,l,c,h){sp(n,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&fh(i,o,!1),Ni(n,i,h);l=i.stateNode,rv.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,h),i.child=_s(i,null,N,h)):vn(n,i,N,h),i.memoizedState=l.state,c&&fh(i,o,!0),i.child}function ap(n){var i=n.stateNode;i.pendingContext?uh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&uh(n,i.context,!1),Du(n,i.containerInfo)}function lp(n,i,o,l,c){return gs(),wu(c),i.flags|=256,vn(n,i,o,l),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(n){return{baseLanes:n,cachePool:null,transitions:null}}function up(n,i,o){var l=i.pendingProps,c=Ot.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),n===null)return Tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,n=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=qa(E,l,0,null),n=Vr(n,l,o,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Zu(o),i.memoizedState=Ku,n):Qu(i,E));if(c=n.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return sv(n,i,E,l,N,c,o);if(h){h=l.fallback,E=i.mode,c=n.child,N=c.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=pr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=pr(N,h):(h=Vr(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=n.child.memoizedState,E=E===null?Zu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~o,i.memoizedState=Ku,l}return h=n.child,n=h.sibling,l=pr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=l,i.memoizedState=null,l}function Qu(n,i){return i=qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ua(n,i,o,l){return l!==null&&wu(l),_s(i,n.child,null,o),n=Qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sv(n,i,o,l,c,h,E){if(o)return i.flags&256?(i.flags&=-257,l=qu(Error(t(422))),Ua(n,i,E,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=qa({mode:"visible",children:l.children},c,0,null),h=Vr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=Zu(E),i.memoizedState=Ku,h);if((i.mode&1)===0)return Ua(n,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(t(419)),l=qu(h,l,void 0),Ua(n,i,E,l)}if(N=(E&n.childLanes)!==0,wn||N){if(l=Jt,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Di(n,c),ri(l,n,c,-1))}return pc(),l=qu(Error(t(421))),Ua(n,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=n.child,i=vv.bind(null,n),c._reactRetry=i,null):(n=h.treeContext,In=ir(c.nextSibling),Nn=i,It=!0,ei=null,n!==null&&(Vn[Hn++]=bi,Vn[Hn++]=Li,Vn[Hn++]=Dr,bi=n.id,Li=n.overflow,Dr=i),i=Qu(i,l.children),i.flags|=4096,i)}function cp(n,i,o){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Pu(n.return,i,o)}function Ju(n,i,o,l,c){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function fp(n,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(vn(n,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cp(n,o,i);else if(n.tag===19)cp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)n=o.alternate,n!==null&&Aa(n)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Ju(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(n=c.alternate,n!==null&&Aa(n)===null){i.child=c;break}n=c.sibling,c.sibling=o,o=c,c=n}Ju(i,!0,o,null,h);break;case"together":Ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ov(n,i,o){switch(i.tag){case 3:ap(i),gs();break;case 5:wh(i);break;case 1:Tn(i.type)&&ga(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(Ea,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?up(n,i,o):(Lt(Ot,Ot.current&1),n=Ni(n,i,o),n!==null?n.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(n.flags&128)!==0){if(l)return fp(n,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,rp(n,i,o)}return Ni(n,i,o)}var dp,ec,hp,pp;dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ec=function(){},hp=function(n,i,o,l){var c=n.memoizedProps;if(c!==l){n=i.stateNode,Ir(mi.current);var h=null;switch(o){case"input":c=G(n,c),l=G(n,l),h=[];break;case"select":c=$({},c,{value:void 0}),l=$({},l,{value:void 0}),h=[];break;case"textarea":c=M(n,c),l=M(n,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ha)}ft(o,l);var E;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var N=c[te];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(N=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&O!==N&&(O!=null||N!=null))if(te==="style")if(N){for(E in N)!N.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&N[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(h||(h=[]),h.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,N=N?N.__html:void 0,O!=null&&N!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ut("scroll",n),h||N===O||(h=[])):(h=h||[]).push(te,O))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},pp=function(n,i,o,l){o!==l&&(i.flags|=4)};function Ao(n,i){if(!It)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,l=0;if(i)for(var c=n.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=n,c=c.sibling;else for(c=n.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=n,c=c.sibling;return n.subtreeFlags|=l,n.childLanes=o,i}function av(n,i,o){var l=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Tn(i.type)&&ma(),fn(i),null;case 3:return l=i.stateNode,xs(),Nt(Mn),Nt(un),Iu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(fc(ei),ei=null))),ec(n,i),fn(i),null;case 5:Uu(i);var c=Ir(So.current);if(o=i.type,n!==null&&i.stateNode!=null)hp(n,i,o,l,c),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Ir(mi.current),xa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[pi]=i,l[go]=h,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<ho.length;c++)Ut(ho[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":rn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Q(l,h),Ut("invalid",l)}ft(o,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&da(l.textContent,N,n),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&da(l.textContent,N,n),c=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Mt(l),Ye(l,h,!0);break;case"textarea":Mt(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ha)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=E.createElement(o,{is:l.is}):(n=E.createElement(o),o==="select"&&(E=n,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):n=E.createElementNS(n,o),n[pi]=i,n[go]=l,dp(n,i,!1,!1),i.stateNode=n;e:{switch(E=it(o,l),o){case"dialog":Ut("cancel",n),Ut("close",n),c=l;break;case"iframe":case"object":case"embed":Ut("load",n),c=l;break;case"video":case"audio":for(c=0;c<ho.length;c++)Ut(ho[c],n);c=l;break;case"source":Ut("error",n),c=l;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),c=l;break;case"details":Ut("toggle",n),c=l;break;case"input":rn(n,l),c=G(n,l),Ut("invalid",n);break;case"option":c=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},c=$({},l,{value:void 0}),Ut("invalid",n);break;case"textarea":Q(n,l),c=M(n,l),Ut("invalid",n);break;default:c=l}ft(o,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var O=N[h];h==="style"?Qe(n,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(n,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ct(n,O):typeof O=="number"&&ct(n,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",n):O!=null&&L(n,h,O,E))}switch(o){case"input":Mt(n),Ye(n,l,!1);break;case"textarea":Mt(n),ve(n);break;case"option":l.value!=null&&n.setAttribute("value",""+Te(l.value));break;case"select":n.multiple=!!l.multiple,h=l.value,h!=null?D(n,!!l.multiple,h,!1):l.defaultValue!=null&&D(n,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(n.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)pp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(So.current),Ir(mi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(h=l.nodeValue!==o)&&(n=Nn,n!==null))switch(n.tag){case 3:da(l.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,o,(n.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return fn(i),null;case 13:if(Nt(Ot),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_h(),gs(),i.flags|=98560,h=!1;else if(h=xa(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[pi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else ei!==null&&(fc(ei),ei=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?$t===0&&($t=3):pc())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return xs(),ec(n,i),n===null&&po(i.stateNode.containerInfo),fn(i),null;case 10:return Cu(i.type._context),fn(i),null;case 17:return Tn(i.type)&&ma(),fn(i),null;case 19:if(Nt(Ot),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ao(h,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Aa(n),E!==null){for(i.flags|=128,Ao(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,n=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}n=n.sibling}h.tail!==null&&Me()>Ts&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304)}else{if(!l)if(n=Aa(E),n!==null){if(i.flags|=128,l=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!It)return fn(i),null}else 2*Me()-h.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return hc(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lv(n,i){switch(Eu(i),i.tag){case 1:return Tn(i.type)&&ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Nt(Mn),Nt(un),Iu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uu(i),null;case 13:if(Nt(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(Ot),null;case 4:return xs(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Ia=!1,dn=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Es(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(n,i,l)}else o.current=null}function tc(n,i,o){try{o()}catch(l){Bt(n,i,l)}}var mp=!1;function cv(n,i){if(hu=ta,n=Yd(),su(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,N=-1,O=-1,te=0,ye=0,Se=n,_e=null;t:for(;;){for(var Ue;Se!==o||c!==0&&Se.nodeType!==3||(N=E+c),Se!==h||l!==0&&Se.nodeType!==3||(O=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)_e=Se,Se=Ue;for(;;){if(Se===n)break t;if(_e===o&&++te===c&&(N=E),_e===h&&++ye===l&&(O=E),(Ue=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ue}o=N===-1||O===-1?null:{start:N,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(pu={focusedElem:n,selectionRange:o},ta=!1,Ie=i;Ie!==null;)if(i=Ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ie=n;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Ht=ke.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?ze:ti(i.type,ze),Ht);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Bt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ie=n;break}Ie=i.return}return ke=mp,mp=!1,ke}function Ro(n,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&n)===n){var h=c.destroy;c.destroy=void 0,h!==void 0&&tc(i,o,h)}c=c.next}while(c!==l)}}function Fa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function nc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gp(n){var i=n.alternate;i!==null&&(n.alternate=null,gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[go],delete i[vu],delete i[q_],delete i[Y_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _p(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ic(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(n=n.child,n!==null))for(ic(n,i,o),n=n.sibling;n!==null;)ic(n,i,o),n=n.sibling}function rc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(rc(n,i,o),n=n.sibling;n!==null;)rc(n,i,o),n=n.sibling}var sn=null,ni=!1;function ur(n,i,o){for(o=o.child;o!==null;)yp(n,i,o),o=o.sibling}function yp(n,i,o){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:dn||Es(o,i);case 6:var l=sn,c=ni;sn=null,ur(n,i,o),sn=l,ni=c,sn!==null&&(ni?(n=sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(ni?(n=sn,o=o.stateNode,n.nodeType===8?_u(n.parentNode,o):n.nodeType===1&&_u(n,o),ro(n)):_u(sn,o.stateNode));break;case 4:l=sn,c=ni,sn=o.stateNode.containerInfo,ni=!0,ur(n,i,o),sn=l,ni=c;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&tc(o,i,E),c=c.next}while(c!==l)}ur(n,i,o);break;case 1:if(!dn&&(Es(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(N){Bt(o,i,N)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,ur(n,i,o),dn=l):ur(n,i,o);break;default:ur(n,i,o)}}function xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new uv),i.forEach(function(l){var c=yv.bind(null,n,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:sn=N.stateNode,ni=!1;break e;case 3:sn=N.stateNode.containerInfo,ni=!0;break e;case 4:sn=N.stateNode.containerInfo,ni=!0;break e}N=N.return}if(sn===null)throw Error(t(160));yp(h,E,c),sn=null,ni=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(te){Bt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,n),i=i.sibling}function Sp(n,i){var o=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),_i(n),l&4){try{Ro(3,n,n.return),Fa(3,n)}catch(ze){Bt(n,n.return,ze)}try{Ro(5,n,n.return)}catch(ze){Bt(n,n.return,ze)}}break;case 1:ii(i,n),_i(n),l&512&&o!==null&&Es(o,o.return);break;case 5:if(ii(i,n),_i(n),l&512&&o!==null&&Es(o,o.return),n.flags&32){var c=n.stateNode;try{ct(c,"")}catch(ze){Bt(n,n.return,ze)}}if(l&4&&(c=n.stateNode,c!=null)){var h=n.memoizedProps,E=o!==null?o.memoizedProps:h,N=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&nt(c,h),it(N,E);var te=it(N,h);for(E=0;E<O.length;E+=2){var ye=O[E],Se=O[E+1];ye==="style"?Qe(c,Se):ye==="dangerouslySetInnerHTML"?Ne(c,Se):ye==="children"?ct(c,Se):L(c,ye,Se,te)}switch(N){case"input":at(c,h);break;case"textarea":me(c,h);break;case"select":var _e=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?D(c,!!h.multiple,Ue,!1):_e!==!!h.multiple&&(h.defaultValue!=null?D(c,!!h.multiple,h.defaultValue,!0):D(c,!!h.multiple,h.multiple?[]:"",!1))}c[go]=h}catch(ze){Bt(n,n.return,ze)}}break;case 6:if(ii(i,n),_i(n),l&4){if(n.stateNode===null)throw Error(t(162));c=n.stateNode,h=n.memoizedProps;try{c.nodeValue=h}catch(ze){Bt(n,n.return,ze)}}break;case 3:if(ii(i,n),_i(n),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(ze){Bt(n,n.return,ze)}break;case 4:ii(i,n),_i(n);break;case 13:ii(i,n),_i(n),c=n.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ac=Me())),l&4&&xp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(dn=(te=dn)||ye,ii(i,n),dn=te):ii(i,n),_i(n),l&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ye&&(n.mode&1)!==0)for(Ie=n,ye=n.child;ye!==null;){for(Se=Ie=ye;Ie!==null;){switch(_e=Ie,Ue=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ro(4,_e,_e.return);break;case 1:Es(_e,_e.return);var ke=_e.stateNode;if(typeof ke.componentWillUnmount=="function"){l=_e,o=_e.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){Bt(l,o,ze)}}break;case 5:Es(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Tp(Se);continue}}Ue!==null?(Ue.return=_e,Ie=Ue):Tp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{c=Se.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,N.style.display=Ze("display",E))}catch(ze){Bt(n,n.return,ze)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=te?"":Se.memoizedProps}catch(ze){Bt(n,n.return,ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,n),_i(n),l&4&&xp(n);break;case 21:break;default:ii(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(_p(o)){var l=o;break e}o=o.return}throw Error(t(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ct(c,""),l.flags&=-33);var h=vp(n);rc(n,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,N=vp(n);ic(n,N,E);break;default:throw Error(t(161))}}catch(O){Bt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function fv(n,i,o){Ie=n,Ep(n)}function Ep(n,i,o){for(var l=(n.mode&1)!==0;Ie!==null;){var c=Ie,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Ia;if(!E){var N=c.alternate,O=N!==null&&N.memoizedState!==null||dn;N=Ia;var te=dn;if(Ia=E,(dn=O)&&!te)for(Ie=c;Ie!==null;)E=Ie,O=E.child,E.tag===22&&E.memoizedState!==null?wp(c):O!==null?(O.return=E,Ie=O):wp(c);for(;h!==null;)Ie=h,Ep(h),h=h.sibling;Ie=c,Ia=N,dn=te}Mp(n)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ie=h):Mp(n)}}function Mp(n){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Fa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Th(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Th(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ye=te.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ro(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||i.flags&512&&nc(i)}catch(_e){Bt(i,i.return,_e)}}if(i===n){Ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Tp(n){for(;Ie!==null;){var i=Ie;if(i===n){Ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function wp(n){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(O){Bt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Bt(i,c,O)}}var h=i.return;try{nc(i)}catch(O){Bt(i,h,O)}break;case 5:var E=i.return;try{nc(i)}catch(O){Bt(i,E,O)}}}catch(O){Bt(i,i.return,O)}if(i===n){Ie=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ie=N;break}Ie=i.return}}var dv=Math.ceil,Oa=C.ReactCurrentDispatcher,sc=C.ReactCurrentOwner,Xn=C.ReactCurrentBatchConfig,_t=0,Jt=null,Gt=null,on=0,Fn=0,Ms=rr(0),$t=0,Co=null,Or=0,ka=0,oc=0,Po=null,An=null,ac=0,Ts=1/0,Ii=null,Ba=!1,lc=null,cr=null,za=!1,fr=null,Va=0,bo=0,uc=null,Ha=-1,Ga=0;function yn(){return(_t&6)!==0?Me():Ha!==-1?Ha:Ha=Me()}function dr(n){return(n.mode&1)===0?1:(_t&2)!==0&&on!==0?on&-on:$_.transition!==null?(Ga===0&&(Ga=_n()),Ga):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Rd(n.type)),n)}function ri(n,i,o,l){if(50<bo)throw bo=0,uc=null,Error(t(185));En(n,o,l),((_t&2)===0||n!==Jt)&&(n===Jt&&((_t&2)===0&&(ka|=o),$t===4&&hr(n,on)),Rn(n,l),o===1&&_t===0&&(i.mode&1)===0&&(Ts=Me()+500,_a&&or()))}function Rn(n,i){var o=n.callbackNode;Bn(n,i);var l=hi(n,n===Jt?on:0);if(l===0)o!==null&&ie(o),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(o!=null&&ie(o),i===1)n.tag===0?j_(Rp.bind(null,n)):dh(Rp.bind(null,n)),W_(function(){(_t&6)===0&&or()}),o=null;else{switch(yd(l)){case 1:o=Be;break;case 4:o=Je;break;case 16:o=tt;break;case 536870912:o=pt;break;default:o=tt}o=Ip(o,Ap.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ap(n,i){if(Ha=-1,Ga=0,(_t&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var l=hi(n,n===Jt?on:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Wa(n,l);else{i=l;var c=_t;_t|=2;var h=Pp();(Jt!==n||on!==i)&&(Ii=null,Ts=Me()+500,Br(n,i));do try{mv();break}catch(N){Cp(n,N)}while(!0);Ru(),Oa.current=h,_t=c,Gt!==null?i=0:(Jt=null,on=0,i=$t)}if(i!==0){if(i===2&&(c=Ri(n),c!==0&&(l=c,i=cc(n,c))),i===1)throw o=Co,Br(n,0),hr(n,l),Rn(n,Me()),o;if(i===6)hr(n,l);else{if(c=n.current.alternate,(l&30)===0&&!hv(c)&&(i=Wa(n,l),i===2&&(h=Ri(n),h!==0&&(l=h,i=cc(n,h))),i===1))throw o=Co,Br(n,0),hr(n,l),Rn(n,Me()),o;switch(n.finishedWork=c,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:zr(n,An,Ii);break;case 3:if(hr(n,l),(l&130023424)===l&&(i=ac+500-Me(),10<i)){if(hi(n,0)!==0)break;if(c=n.suspendedLanes,(c&l)!==l){yn(),n.pingedLanes|=n.suspendedLanes&c;break}n.timeoutHandle=gu(zr.bind(null,n,An,Ii),i);break}zr(n,An,Ii);break;case 4:if(hr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,c=-1;0<l;){var E=31-st(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*dv(l/1960))-l,10<l){n.timeoutHandle=gu(zr.bind(null,n,An,Ii),l);break}zr(n,An,Ii);break;case 5:zr(n,An,Ii);break;default:throw Error(t(329))}}}return Rn(n,Me()),n.callbackNode===o?Ap.bind(null,n):null}function cc(n,i){var o=Po;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=Wa(n,i),n!==2&&(i=An,An=o,i!==null&&fc(i)),n}function fc(n){An===null?An=n:An.push.apply(An,n)}function hv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Jn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~oc,i&=~ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-st(i),l=1<<o;n[o]=-1,i&=~l}}function Rp(n){if((_t&6)!==0)throw Error(t(327));ws();var i=hi(n,0);if((i&1)===0)return Rn(n,Me()),null;var o=Wa(n,i);if(n.tag!==0&&o===2){var l=Ri(n);l!==0&&(i=l,o=cc(n,l))}if(o===1)throw o=Co,Br(n,0),hr(n,i),Rn(n,Me()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,An,Ii),Rn(n,Me()),null}function dc(n,i){var o=_t;_t|=1;try{return n(i)}finally{_t=o,_t===0&&(Ts=Me()+500,_a&&or())}}function kr(n){fr!==null&&fr.tag===0&&(_t&6)===0&&ws();var i=_t;_t|=1;var o=Xn.transition,l=Ct;try{if(Xn.transition=null,Ct=1,n)return n()}finally{Ct=l,Xn.transition=o,_t=i,(_t&6)===0&&or()}}function hc(){Fn=Ms.current,Nt(Ms)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,G_(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(Eu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:xs(),Nt(Mn),Nt(un),Iu();break;case 5:Uu(l);break;case 4:xs();break;case 13:Nt(Ot);break;case 19:Nt(Ot);break;case 10:Cu(l.type._context);break;case 22:case 23:hc()}o=o.return}if(Jt=n,Gt=n=pr(n.current,null),on=Fn=i,$t=0,Co=null,oc=ka=Or=0,An=Po=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}o.pending=l}Nr=null}return n}function Cp(n,i){do{var o=Gt;try{if(Ru(),Ra.current=La,Ca){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ca=!1}if(Fr=0,Qt=jt=kt=null,Eo=!1,Mo=0,sc.current=null,o===null||o.return===null){$t=1,Co=i,Gt=null;break}e:{var h=n,E=o.return,N=o,O=i;if(i=on,N.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ye=N,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Jh(E);if(Ue!==null){Ue.flags&=-257,ep(Ue,E,N,h,i),Ue.mode&1&&Qh(h,te,i),i=Ue,O=te;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(O),i.updateQueue=ze}else ke.add(O);break e}else{if((i&1)===0){Qh(h,te,i),pc();break e}O=Error(t(426))}}else if(It&&N.mode&1){var Ht=Jh(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),ep(Ht,E,N,h,i),wu(Ss(O,N));break e}}h=O=Ss(O,N),$t!==4&&($t=2),Po===null?Po=[h]:Po.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Kh(h,O,i);Mh(h,q);break e;case 1:N=O;var V=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(cr===null||!cr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Zh(h,N,i);Mh(h,we);break e}}h=h.return}while(h!==null)}Lp(o)}catch(We){i=We,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function Pp(){var n=Oa.current;return Oa.current=La,n===null?La:n}function pc(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Or&268435455)===0&&(ka&268435455)===0||hr(Jt,on)}function Wa(n,i){var o=_t;_t|=2;var l=Pp();(Jt!==n||on!==i)&&(Ii=null,Br(n,i));do try{pv();break}catch(c){Cp(n,c)}while(!0);if(Ru(),_t=o,Oa.current=l,Gt!==null)throw Error(t(261));return Jt=null,on=0,$t}function pv(){for(;Gt!==null;)bp(Gt)}function mv(){for(;Gt!==null&&!X();)bp(Gt)}function bp(n){var i=Np(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,i===null?Lp(n):Gt=i,sc.current=null}function Lp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=av(o,i,Fn),o!==null){Gt=o;return}}else{if(o=lv(o,i),o!==null){o.flags&=32767,Gt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=n}while(i!==null);$t===0&&($t=5)}function zr(n,i,o){var l=Ct,c=Xn.transition;try{Xn.transition=null,Ct=1,gv(n,i,o,l)}finally{Xn.transition=c,Ct=l}return null}function gv(n,i,o,l){do ws();while(fr!==null);if((_t&6)!==0)throw Error(t(327));o=n.finishedWork;var c=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(Qo(n,h),n===Jt&&(Gt=Jt=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Ip(tt,function(){return ws(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var E=Ct;Ct=1;var N=_t;_t|=4,sc.current=null,cv(n,o),Sp(o,n),F_(pu),ta=!!hu,pu=hu=null,n.current=o,fv(o),Ae(),_t=N,Ct=E,Xn.transition=h}else n.current=o;if(za&&(za=!1,fr=n,Va=c),h=n.pendingLanes,h===0&&(cr=null),an(o.stateNode),Rn(n,Me()),i!==null)for(l=n.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ba)throw Ba=!1,n=lc,lc=null,n;return(Va&1)!==0&&n.tag!==0&&ws(),h=n.pendingLanes,(h&1)!==0?n===uc?bo++:(bo=0,uc=n):bo=0,or(),null}function ws(){if(fr!==null){var n=yd(Va),i=Xn.transition,o=Ct;try{if(Xn.transition=null,Ct=16>n?16:n,fr===null)var l=!1;else{if(n=fr,fr=null,Va=0,(_t&6)!==0)throw Error(t(331));var c=_t;for(_t|=4,Ie=n.current;Ie!==null;){var h=Ie,E=h.child;if((Ie.flags&16)!==0){var N=h.deletions;if(N!==null){for(var O=0;O<N.length;O++){var te=N[O];for(Ie=te;Ie!==null;){var ye=Ie;switch(ye.tag){case 0:case 11:case 15:Ro(8,ye,h)}var Se=ye.child;if(Se!==null)Se.return=ye,Ie=Se;else for(;Ie!==null;){ye=Ie;var _e=ye.sibling,Ue=ye.return;if(gp(ye),ye===te){Ie=null;break}if(_e!==null){_e.return=Ue,Ie=_e;break}Ie=Ue}}}var ke=h.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Ht=ze.sibling;ze.sibling=null,ze=Ht}while(ze!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ie=E;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Ie=q;break e}Ie=h.return}}var V=n.current;for(Ie=V;Ie!==null;){E=Ie;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Ie=K;else e:for(E=V;Ie!==null;){if(N=Ie,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Fa(9,N)}}catch(We){Bt(N,N.return,We)}if(N===E){Ie=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Ie=we;break e}Ie=N.return}}if(_t=c,or(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(wt,n)}catch{}l=!0}return l}finally{Ct=o,Xn.transition=i}}return!1}function Dp(n,i,o){i=Ss(o,i),i=Kh(n,i,1),n=lr(n,i,1),i=yn(),n!==null&&(En(n,1,i),Rn(n,i))}function Bt(n,i,o){if(n.tag===3)Dp(n,n,o);else for(;i!==null;){if(i.tag===3){Dp(i,n,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){n=Ss(o,n),n=Zh(i,n,1),i=lr(i,n,1),n=yn(),i!==null&&(En(i,1,n),Rn(i,n));break}}i=i.return}}function _v(n,i,o){var l=n.pingCache;l!==null&&l.delete(i),i=yn(),n.pingedLanes|=n.suspendedLanes&o,Jt===n&&(on&o)===o&&($t===4||$t===3&&(on&130023424)===on&&500>Me()-ac?Br(n,0):oc|=o),Rn(n,i)}function Up(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=yn();n=Di(n,i),n!==null&&(En(n,i,o),Rn(n,o))}function vv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Up(n,o)}function yv(n,i){var o=0;switch(n.tag){case 13:var l=n.stateNode,c=n.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Up(n,o)}var Np;Np=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Mn.current)wn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return wn=!1,ov(n,i,o);wn=(n.flags&131072)!==0}else wn=!1,It&&(i.flags&1048576)!==0&&hh(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(n,i),n=i.pendingProps;var c=hs(i,un.current);ys(i,o),c=ku(null,i,l,n,c,o);var h=Bu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ga(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Lu(i),c.updater=Da,i.stateNode=c,c._reactInternals=i,Xu(i,l,n,o),i=$u(null,i,l,!0,h,o)):(i.tag=0,It&&h&&Su(i),vn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(n,i),n=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Sv(l),n=ti(l,n),c){case 0:i=ju(null,i,l,n,o);break e;case 1:i=op(null,i,l,n,o);break e;case 11:i=tp(null,i,l,n,o);break e;case 14:i=np(null,i,l,ti(l.type,n),o);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),ju(n,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),op(n,i,l,c,o);case 3:e:{if(ap(i),n===null)throw Error(t(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Eh(n,i),wa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Ss(Error(t(423)),i),i=lp(n,i,l,o,c);break e}else if(l!==c){c=Ss(Error(t(424)),i),i=lp(n,i,l,o,c);break e}else for(In=ir(i.stateNode.containerInfo.firstChild),Nn=i,It=!0,ei=null,o=xh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),l===c){i=Ni(n,i,o);break e}vn(n,i,l,o)}i=i.child}return i;case 5:return wh(i),n===null&&Tu(i),l=i.type,c=i.pendingProps,h=n!==null?n.memoizedProps:null,E=c.children,mu(l,c)?E=null:h!==null&&mu(l,h)&&(i.flags|=32),sp(n,i),vn(n,i,E,o),i.child;case 6:return n===null&&Tu(i),null;case 13:return up(n,i,o);case 4:return Du(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=_s(i,null,l,o):vn(n,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),tp(n,i,l,c,o);case 7:return vn(n,i,i.pendingProps,o),i.child;case 8:return vn(n,i,i.pendingProps.children,o),i.child;case 12:return vn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Lt(Ea,l._currentValue),l._currentValue=E,h!==null)if(Jn(h.value,E)){if(h.children===c.children&&!Mn.current){i=Ni(n,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var O=N.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ui(-1,o&-o),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var ye=te.pending;ye===null?O.next=O:(O.next=ye.next,ye.next=O),te.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Pu(h.return,o,i),N.lanes|=o;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),Pu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}vn(n,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ys(i,o),c=Gn(c),l=l(c),i.flags|=1,vn(n,i,l,o),i.child;case 14:return l=i.type,c=ti(l,i.pendingProps),c=ti(l.type,c),np(n,i,l,c,o);case 15:return ip(n,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Na(n,i),i.tag=1,Tn(l)?(n=!0,ga(i)):n=!1,ys(i,o),jh(i,l,c),Xu(i,l,c,o),$u(null,i,l,!0,n,o);case 19:return fp(n,i,o);case 22:return rp(n,i,o)}throw Error(t(156,i.tag))};function Ip(n,i){return ne(n,i)}function xv(n,i,o,l){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,l){return new xv(n,i,o,l)}function mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sv(n){if(typeof n=="function")return mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===he)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Xa(n,i,o,l,c,h){var E=2;if(l=n,typeof n=="function")mc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return Vr(o.children,c,h,i);case k:E=8,c|=8;break;case P:return n=qn(12,o,i,c|2),n.elementType=P,n.lanes=h,n;case ee:return n=qn(13,o,i,c),n.elementType=ee,n.lanes=h,n;case ue:return n=qn(19,o,i,c),n.elementType=ue,n.lanes=h,n;case ce:return qa(o,c,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:E=10;break e;case B:E=9;break e;case re:E=11;break e;case he:E=14;break e;case ae:E=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(E,o,i,c),i.elementType=n,i.type=l,i.lanes=h,i}function Vr(n,i,o,l){return n=qn(7,n,l,i),n.lanes=o,n}function qa(n,i,o,l){return n=qn(22,n,l,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function gc(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function _c(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ev(n,i,o,l,c){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function vc(n,i,o,l,c,h,E,N,O){return n=new Ev(n,i,o,N,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(h),n}function Mv(n,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:n,containerInfo:i,implementation:o}}function Fp(n){if(!n)return sr;n=n._reactInternals;e:{if(di(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Tn(o))return ch(n,o,i)}return i}function Op(n,i,o,l,c,h,E,N,O){return n=vc(o,l,!0,n,c,h,E,N,O),n.context=Fp(null),o=n.current,l=yn(),c=dr(o),h=Ui(l,c),h.callback=i??null,lr(o,h,c),n.current.lanes=c,En(n,c,l),Rn(n,l),n}function Ya(n,i,o,l){var c=i.current,h=yn(),E=dr(c);return o=Fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(h,E),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=lr(c,i,E),n!==null&&(ri(n,c,E,h),Ta(n,c,E)),E}function ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function yc(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}function Tv(){return null}var Bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function xc(n){this._internalRoot=n}$a.prototype.render=xc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ya(n,i,null,null)},$a.prototype.unmount=xc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){Ya(null,n,null,null)}),i[Ci]=null}};function $a(n){this._internalRoot=n}$a.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ed();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&wd(n)}};function Sc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ka(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zp(){}function wv(n,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=ja(E);h.call(te)}}var E=Op(i,l,n,0,null,!1,!1,"",zp);return n._reactRootContainer=E,n[Ci]=E.current,po(n.nodeType===8?n.parentNode:n),kr(),E}for(;c=n.lastChild;)n.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var te=ja(O);N.call(te)}}var O=vc(n,0,!1,null,null,!1,!1,"",zp);return n._reactRootContainer=O,n[Ci]=O.current,po(n.nodeType===8?n.parentNode:n),kr(function(){Ya(i,O,o,l)}),O}function Za(n,i,o,l,c){var h=o._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var N=c;c=function(){var O=ja(E);N.call(O)}}Ya(i,E,n,c)}else E=wv(o,i,n,c,l);return ja(E)}xd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Yt(i.pendingLanes);o!==0&&(Xl(i,o|1),Rn(i,Me()),(_t&6)===0&&(Ts=Me()+500,or()))}break;case 13:kr(function(){var l=Di(n,1);if(l!==null){var c=yn();ri(l,n,1,c)}}),yc(n,1)}},ql=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var o=yn();ri(i,n,134217728,o)}yc(n,134217728)}},Sd=function(n){if(n.tag===13){var i=dr(n),o=Di(n,i);if(o!==null){var l=yn();ri(o,n,i,l)}yc(n,i)}},Ed=function(){return Ct},Md=function(n,i){var o=Ct;try{return Ct=n,i()}finally{Ct=o}},Pe=function(n,i,o){switch(i){case"input":if(at(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==n&&l.form===n.form){var c=pa(l);if(!c)throw Error(t(90));ut(l),at(l,c)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Dt=dc,qt=kr;var Av={usingClientEntryPoint:!1,Events:[_o,fs,pa,Le,rt,dc]},Lo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rv={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{wt=Qa.inject(Rv),ht=Qa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av,Cn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(t(200));return Mv(n,i,null,o)},Cn.createRoot=function(n,i){if(!Sc(n))throw Error(t(299));var o=!1,l="",c=Bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=vc(n,1,!1,null,null,o,!1,l,c),n[Ci]=i.current,po(n.nodeType===8?n.parentNode:n),new xc(i)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return kr(n)},Cn.hydrate=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!0,o)},Cn.hydrateRoot=function(n,i,o){if(!Sc(n))throw Error(t(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",E=Bp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Op(i,null,n,1,o??null,c,!1,h,E),n[Ci]=i.current,po(n),l)for(n=0;n<l.length;n++)o=l[n],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new $a(i)},Cn.render=function(n,i,o){if(!Ka(i))throw Error(t(200));return Za(null,n,i,!1,o)},Cn.unmountComponentAtNode=function(n){if(!Ka(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){Za(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},Cn.unstable_batchedUpdates=dc,Cn.unstable_renderSubtreeIntoContainer=function(n,i,o,l){if(!Ka(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Za(n,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var jp;function Iv(){if(jp)return Tc.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tc.exports=Nv(),Tc.exports}var $p;function Fv(){if($p)return Ja;$p=1;var s=Iv();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var Ov=Fv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="170",kv=0,Kp=1,Bv=2,ig=1,zv=2,Vi=3,Ar=0,Ln=1,Hi=2,Mr=0,Vs=1,Zp=2,Qp=3,Jp=4,Vv=5,Kr=100,Hv=101,Gv=102,Wv=103,Xv=104,qv=200,Yv=201,jv=202,$v=203,uf=204,cf=205,Kv=206,Zv=207,Qv=208,Jv=209,e0=210,t0=211,n0=212,i0=213,r0=214,ff=0,df=1,hf=2,Ws=3,pf=4,mf=5,gf=6,_f=7,rg=0,s0=1,o0=2,Tr=0,a0=1,l0=2,u0=3,c0=4,f0=5,d0=6,h0=7,sg=300,Xs=301,qs=302,vf=303,yf=304,Ol=306,xf=1e3,Qr=1001,Sf=1002,fi=1003,p0=1004,el=1005,yi=1006,Rc=1007,Jr=1008,qi=1009,og=1010,ag=1011,Ho=1012,id=1013,es=1014,Gi=1015,Go=1016,rd=1017,sd=1018,Ys=1020,lg=35902,ug=1021,cg=1022,ci=1023,fg=1024,dg=1025,Hs=1026,js=1027,hg=1028,od=1029,pg=1030,ad=1031,ld=1033,Tl=33776,wl=33777,Al=33778,Rl=33779,Ef=35840,Mf=35841,Tf=35842,wf=35843,Af=36196,Rf=37492,Cf=37496,Pf=37808,bf=37809,Lf=37810,Df=37811,Uf=37812,Nf=37813,If=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Vf=37820,Hf=37821,Cl=36492,Gf=36494,Wf=36495,mg=36283,Xf=36284,qf=36285,Yf=36286,m0=3200,g0=3201,_0=0,v0=1,Er="",jn="srgb",Ks="srgb-linear",kl="linear",Pt="srgb",As=7680,em=519,y0=512,x0=513,S0=514,gg=515,E0=516,M0=517,T0=518,w0=519,tm=35044,nm="300 es",Wi=2e3,Il=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(t);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,jf=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function bn(s,e,t){return Math.max(e,Math.min(t,s))}function A0(s,e){return(s%e+e)%e}function Pc(s,e,t){return(1-t)*s+t*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,f,d,p,m)}set(e,t,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],v=r[2],S=r[5],T=r[8],R=a[0],x=a[3],g=a[6],b=a[1],L=a[4],C=a[7],Y=a[2],F=a[5],I=a[8];return u[0]=f*R+d*b+p*Y,u[3]=f*x+d*L+p*F,u[6]=f*g+d*C+p*I,u[1]=m*R+_*b+y*Y,u[4]=m*x+_*L+y*F,u[7]=m*g+_*C+y*I,u[2]=v*R+S*b+T*Y,u[5]=v*x+S*L+T*F,u[8]=v*g+S*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*f*_-t*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*f-d*m,v=d*p-_*u,S=m*u-f*p,T=t*y+r*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=v*R,e[4]=(_*t-a*p)*R,e[5]=(a*u-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(f*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new ot;function _g(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function R0(){const s=Fl("canvas");return s.style.display="block",s}const im={};function Bo(s){s in im||(im[s]=!0,console.warn(s))}function C0(s,e,t){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}function P0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function b0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?kl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],om=[.3127,.329],am=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Ks]:{primaries:rm,whitePoint:om,transfer:kl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:rm,whitePoint:om,transfer:Pt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Rs;class L0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Fl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Xi(u[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D0=0;class vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Lc(a[f].image)):u.push(Lc(a[f]))}else u=Lc(a);r.url=u}return t||(e.images[this.uuid]=r),r}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class Dn extends Zs{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=Qr,a=Qr,u=yi,f=Jr,d=ci,p=qi,m=Dn.DEFAULT_ANISOTROPY,_=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Wo(),this.name="",this.source=new vg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=sg;Dn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],v=p[1],S=p[5],T=p[9],R=p[2],x=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(y-R)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+v)<.1&&Math.abs(y+R)<.1&&Math.abs(T+x)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,C=(S+1)/2,Y=(g+1)/2,F=(_+v)/4,I=(y+R)/4,k=(T+x)/4;return L>C&&L>Y?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=F/r,u=I/r):C>Y?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=F/a,u=k/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=I/u,a=k/u),this.set(r,a,u,t),this}let b=Math.sqrt((x-T)*(x-T)+(y-R)*(y-R)+(v-_)*(v-_));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(y-R)/b,this.z=(v-_)/b,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends Zs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends N0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class yg extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const v=u[f+0],S=u[f+1],T=u[f+2],R=u[f+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(d===1){e[t+0]=v,e[t+1]=S,e[t+2]=T,e[t+3]=R;return}if(y!==R||p!==v||m!==S||_!==T){let x=1-d;const g=p*v+m*S+_*T+y*R,b=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const Y=Math.sqrt(L),F=Math.atan2(Y,g*b);x=Math.sin(x*F)/Y,d=Math.sin(d*F)/Y}const C=d*b;if(p=p*x+v*C,m=m*x+S*C,_=_*x+T*C,y=y*x+R*C,x===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=Y,m*=Y,_*=Y,y*=Y}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[f],v=u[f+1],S=u[f+2],T=u[f+3];return e[t]=d*T+_*y+p*S-m*v,e[t+1]=p*T+_*v+m*y-d*S,e[t+2]=m*T+_*S+d*v-p*y,e[t+3]=_*T-d*y-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),v=p(r/2),S=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=v*_*y+m*S*T,this._y=m*S*y-v*_*T,this._z=m*_*T+v*S*y,this._w=m*_*y-v*S*T;break;case"YXZ":this._x=v*_*y+m*S*T,this._y=m*S*y-v*_*T,this._z=m*_*T-v*S*y,this._w=m*_*y+v*S*T;break;case"ZXY":this._x=v*_*y-m*S*T,this._y=m*S*y+v*_*T,this._z=m*_*T+v*S*y,this._w=m*_*y-v*S*T;break;case"ZYX":this._x=v*_*y-m*S*T,this._y=m*S*y+v*_*T,this._z=m*_*T-v*S*y,this._w=m*_*y+v*S*T;break;case"YZX":this._x=v*_*y+m*S*T,this._y=m*S*y+v*_*T,this._z=m*_*T-v*S*y,this._w=m*_*y-v*S*T;break;case"XZY":this._x=v*_*y-m*S*T,this._y=m*S*y-v*_*T,this._z=m*_*T+v*S*y,this._w=m*_*y+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],u=t[8],f=t[1],d=t[5],p=t[9],m=t[2],_=t[6],y=t[10],v=r+d+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,u=e._z,f=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*u+t*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-t)*_)/m,v=Math.sin(t*_)/m;return this._w=f*y+this._w*v,this._x=r*y+this._x*v,this._y=a*y+this._y*v,this._z=u*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*a,this.y=u[1]*t+u[4]*r+u[7]*a,this.z=u[2]*t+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*t+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*t+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*t+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*t-u*a),y=2*(u*r-f*t);return this.x=t+p*m+f*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a,this.y=u[1]*t+u[5]*r+u[9]*a,this.z=u[2]*t+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,u=e.z,f=t.x,d=t.y,p=t.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new J,um=new Xo;class qo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(u,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),nl.subVectors(this.max,No),Cs.subVectors(e.a,No),Ps.subVectors(e.b,No),bs.subVectors(e.c,No),gr.subVectors(Ps,Cs),_r.subVectors(bs,Ps),Hr.subVectors(Cs,bs);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Hr.y,Hr.x,0];return!Uc(t,Cs,Ps,bs,nl)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Cs,Ps,bs,nl))?!1:(il.crossVectors(gr,_r),t=[il.x,il.y,il.z],Uc(t,Cs,Ps,bs,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new J,new J,new J,new J,new J,new J,new J,new J],si=new J,tl=new qo,Cs=new J,Ps=new J,bs=new J,gr=new J,_r=new J,Hr=new J,No=new J,nl=new J,il=new J,Gr=new J;function Uc(s,e,t,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Gr.fromArray(s,u);const d=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),p=e.dot(Gr),m=t.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const F0=new qo,Io=new J,Nc=new J;class ud{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):F0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Nc)),this.expandByPoint(Io.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new J,Ic=new J,rl=new J,vr=new J,Fc=new J,sl=new J,Oc=new J;class O0{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ic.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Ic);const u=e.distanceTo(t)*.5,f=-this.direction.dot(rl),d=vr.dot(this.direction),p=-vr.dot(rl),m=vr.lengthSq(),_=Math.abs(1-f*f);let y,v,S,T;if(_>0)if(y=f*p-d,v=f*d-p,T=u*_,y>=0)if(v>=-T)if(v<=T){const R=1/_;y*=R,v*=R,S=y*(y+f*v+2*d)+v*(f*y+v+2*p)+m}else v=u,y=Math.max(0,-(f*v+d)),S=-y*y+v*(v+2*p)+m;else v=-u,y=Math.max(0,-(f*v+d)),S=-y*y+v*(v+2*p)+m;else v<=-T?(y=Math.max(0,-(-f*u+d)),v=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+v*(v+2*p)+m):v<=T?(y=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(y=Math.max(0,-(f*u+d)),v=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+v*(v+2*p)+m);else v=f>0?-u:u,y=Math.max(0,-(f*v+d)),S=-y*y+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Ic).addScaledVector(rl,v),S}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),a=Oi.dot(Oi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-v.z)*y,p=(e.max.z-v.z)*y):(d=(e.max.z-v.z)*y,p=(e.min.z-v.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,r,a,u){Fc.subVectors(t,e),sl.subVectors(r,e),Oc.crossVectors(Fc,sl);let f=this.direction.dot(Oc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;vr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(vr,sl));if(p<0)return null;const m=d*this.direction.dot(Fc.cross(vr));if(m<0||p+m>f)return null;const _=-d*vr.dot(Oc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,r,a,u,f,d,p,m,_,y,v,S,T,R,x){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,f,d,p,m,_,y,v,S,T,R,x)}set(e,t,r,a,u,f,d,p,m,_,y,v,S,T,R,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=v,g[3]=S,g[7]=T,g[11]=R,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),u=1/Ls.setFromMatrixColumn(e,1).length(),f=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const v=f*_,S=f*y,T=d*_,R=d*y;t[0]=p*_,t[4]=-p*y,t[8]=m,t[1]=S+T*m,t[5]=v-R*m,t[9]=-d*p,t[2]=R-v*m,t[6]=T+S*m,t[10]=f*p}else if(e.order==="YXZ"){const v=p*_,S=p*y,T=m*_,R=m*y;t[0]=v+R*d,t[4]=T*d-S,t[8]=f*m,t[1]=f*y,t[5]=f*_,t[9]=-d,t[2]=S*d-T,t[6]=R+v*d,t[10]=f*p}else if(e.order==="ZXY"){const v=p*_,S=p*y,T=m*_,R=m*y;t[0]=v-R*d,t[4]=-f*y,t[8]=T+S*d,t[1]=S+T*d,t[5]=f*_,t[9]=R-v*d,t[2]=-f*m,t[6]=d,t[10]=f*p}else if(e.order==="ZYX"){const v=f*_,S=f*y,T=d*_,R=d*y;t[0]=p*_,t[4]=T*m-S,t[8]=v*m+R,t[1]=p*y,t[5]=R*m+v,t[9]=S*m-T,t[2]=-m,t[6]=d*p,t[10]=f*p}else if(e.order==="YZX"){const v=f*p,S=f*m,T=d*p,R=d*m;t[0]=p*_,t[4]=R-v*y,t[8]=T*y+S,t[1]=y,t[5]=f*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*y+T,t[10]=v-R*y}else if(e.order==="XZY"){const v=f*p,S=f*m,T=d*p,R=d*m;t[0]=p*_,t[4]=-y,t[8]=m*_,t[1]=v*y+R,t[5]=f*_,t[9]=S*y-T,t[2]=T*y-S,t[6]=d*_,t[10]=R*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,B0)}lookAt(e,t,r){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),yr.crossVectors(r,On),yr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),yr.crossVectors(r,On)),yr.normalize(),ol.crossVectors(On,yr),a[0]=yr.x,a[4]=ol.x,a[8]=On.x,a[1]=yr.y,a[5]=ol.y,a[9]=On.y,a[2]=yr.z,a[6]=ol.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],v=r[9],S=r[13],T=r[2],R=r[6],x=r[10],g=r[14],b=r[3],L=r[7],C=r[11],Y=r[15],F=a[0],I=a[4],k=a[8],P=a[12],w=a[1],B=a[5],re=a[9],ee=a[13],ue=a[2],he=a[6],ae=a[10],ce=a[14],z=a[3],le=a[7],$=a[11],U=a[15];return u[0]=f*F+d*w+p*ue+m*z,u[4]=f*I+d*B+p*he+m*le,u[8]=f*k+d*re+p*ae+m*$,u[12]=f*P+d*ee+p*ce+m*U,u[1]=_*F+y*w+v*ue+S*z,u[5]=_*I+y*B+v*he+S*le,u[9]=_*k+y*re+v*ae+S*$,u[13]=_*P+y*ee+v*ce+S*U,u[2]=T*F+R*w+x*ue+g*z,u[6]=T*I+R*B+x*he+g*le,u[10]=T*k+R*re+x*ae+g*$,u[14]=T*P+R*ee+x*ce+g*U,u[3]=b*F+L*w+C*ue+Y*z,u[7]=b*I+L*B+C*he+Y*le,u[11]=b*k+L*re+C*ae+Y*$,u[15]=b*P+L*ee+C*ce+Y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],v=e[10],S=e[14],T=e[3],R=e[7],x=e[11],g=e[15];return T*(+u*p*y-a*m*y-u*d*v+r*m*v+a*d*S-r*p*S)+R*(+t*p*S-t*m*v+u*f*v-a*f*S+a*m*_-u*p*_)+x*(+t*m*y-t*d*S-u*f*y+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-t*p*y+t*d*v+a*f*y-r*f*v+r*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],v=e[10],S=e[11],T=e[12],R=e[13],x=e[14],g=e[15],b=y*x*m-R*v*m+R*p*S-d*x*S-y*p*g+d*v*g,L=T*v*m-_*x*m-T*p*S+f*x*S+_*p*g-f*v*g,C=_*R*m-T*y*m+T*d*S-f*R*S-_*d*g+f*y*g,Y=T*y*p-_*R*p-T*d*v+f*R*v+_*d*x-f*y*x,F=t*b+r*L+a*C+u*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(R*v*u-y*x*u-R*a*S+r*x*S+y*a*g-r*v*g)*I,e[2]=(d*x*u-R*p*u+R*a*m-r*x*m-d*a*g+r*p*g)*I,e[3]=(y*p*u-d*v*u-y*a*m+r*v*m+d*a*S-r*p*S)*I,e[4]=L*I,e[5]=(_*x*u-T*v*u+T*a*S-t*x*S-_*a*g+t*v*g)*I,e[6]=(T*p*u-f*x*u-T*a*m+t*x*m+f*a*g-t*p*g)*I,e[7]=(f*v*u-_*p*u+_*a*m-t*v*m-f*a*S+t*p*S)*I,e[8]=C*I,e[9]=(T*y*u-_*R*u-T*r*S+t*R*S+_*r*g-t*y*g)*I,e[10]=(f*R*u-T*d*u+T*r*m-t*R*m-f*r*g+t*d*g)*I,e[11]=(_*d*u-f*y*u-_*r*m+t*y*m+f*r*S-t*d*S)*I,e[12]=Y*I,e[13]=(_*R*a-T*y*a+T*r*v-t*R*v-_*r*x+t*y*x)*I,e[14]=(T*d*a-f*R*a-T*r*p+t*R*p+f*r*x-t*d*x)*I,e[15]=(f*y*a-_*d*a+_*r*p-t*y*p-f*r*v+t*d*v)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,u=e.z;return t[0]*=r,t[4]*=a,t[8]*=u,t[1]*=r,t[5]*=a,t[9]*=u,t[2]*=r,t[6]*=a,t[10]*=u,t[3]*=r,t[7]*=a,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,u=t._x,f=t._y,d=t._z,p=t._w,m=u+u,_=f+f,y=d+d,v=u*m,S=u*_,T=u*y,R=f*_,x=f*y,g=d*y,b=p*m,L=p*_,C=p*y,Y=r.x,F=r.y,I=r.z;return a[0]=(1-(R+g))*Y,a[1]=(S+C)*Y,a[2]=(T-L)*Y,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(v+g))*F,a[6]=(x+b)*F,a[7]=0,a[8]=(T+L)*I,a[9]=(x-b)*I,a[10]=(1-(v+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let u=Ls.set(a[0],a[1],a[2]).length();const f=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,_=1/f,y=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=y,oi.elements[9]*=y,oi.elements[10]*=y,t.setFromRotationMatrix(oi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,a,u,f,d=Wi){const p=this.elements,m=2*u/(t-e),_=2*u/(r-a),y=(t+e)/(t-e),v=(r+a)/(r-a);let S,T;if(d===Wi)S=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Il)S=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,u,f,d=Wi){const p=this.elements,m=1/(t-e),_=1/(r-a),y=1/(f-u),v=(t+e)*m,S=(r+a)*_;let T,R;if(d===Wi)T=(f+u)*y,R=-2*y;else if(d===Il)T=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new J,oi=new Vt,k0=new J(0,0,0),B0=new J(1,1,1),yr=new J,ol=new J,On=new J,cm=new Vt,fm=new Xo;class Yi{constructor(e=0,t=0,r=0,a=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-bn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const dm=new J,Ds=new Xo,ki=new Vt,al=new J,Fo=new J,V0=new J,H0=new Xo,hm=new J(1,0,0),pm=new J(0,1,0),mm=new J(0,0,1),gm={type:"added"},G0={type:"removed"},Us={type:"childadded",child:null},kc={type:"childremoved",child:null};class mn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new J,t=new Yi,r=new Xo,a=new J(1,1,1);function u(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ot}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?al.copy(e):al.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Fo,al,this.up):ki.lookAt(al,Fo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G0),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(t){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),y=f(e.shapes),v=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}mn.DEFAULT_UP=new J(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new J,Bi=new J,Bc=new J,zi=new J,Ns=new J,Is=new J,_m=new J,zc=new J,Vc=new J,Hc=new J,Gc=new zt,Wc=new zt,Xc=new zt;class ui{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ai.subVectors(e,t),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,t,r,a,u){ai.subVectors(a,t),Bi.subVectors(r,t),Bc.subVectors(e,t);const f=ai.dot(ai),d=ai.dot(Bi),p=ai.dot(Bc),m=Bi.dot(Bi),_=Bi.dot(Bc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const v=1/y,S=(m*p-d*_)*v,T=(f*_-d*p)*v;return u.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,a,u,f,d,p){return this.getBarycoord(e,t,r,a,zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,zi.x),p.addScaledVector(f,zi.y),p.addScaledVector(d,zi.z),p)}static getInterpolatedAttribute(e,t,r,a,u,f){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Gc,u.x),f.addScaledVector(Wc,u.y),f.addScaledVector(Xc,u.z),f}static isFrontFacing(e,t,r,a){return ai.subVectors(r,t),Bi.subVectors(e,t),ai.cross(Bi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,u){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,a,u)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,u=this.c;let f,d;Ns.subVectors(a,r),Is.subVectors(u,r),zc.subVectors(e,r);const p=Ns.dot(zc),m=Is.dot(zc);if(p<=0&&m<=0)return t.copy(r);Vc.subVectors(e,a);const _=Ns.dot(Vc),y=Is.dot(Vc);if(_>=0&&y<=_)return t.copy(a);const v=p*y-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),t.copy(r).addScaledVector(Ns,f);Hc.subVectors(e,u);const S=Ns.dot(Hc),T=Is.dot(Hc);if(T>=0&&S<=T)return t.copy(u);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(Is,d);const x=_*T-S*y;if(x<=0&&y-_>=0&&S-T>=0)return _m.subVectors(u,a),d=(y-_)/(y-_+(S-T)),t.copy(a).addScaledVector(_m,d);const g=1/(x+R+v);return f=R*g,d=v*g,t.copy(r).addScaledVector(Ns,f).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=vt.workingColorSpace){if(e=A0(e,1),t=bn(t,0,1),r=bn(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,f=2*r-u;this.r=qc(f,u,e+1/3),this.g=qc(f,u,e),this.b=qc(f,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,t=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,t);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(u,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=Sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return vt.fromWorkingColorSpace(pn.copy(this),e),Math.round(bn(pn.r*255,0,255))*65536+Math.round(bn(pn.g*255,0,255))*256+Math.round(bn(pn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(pn.copy(this),t);const r=pn.r,a=pn.g,u=pn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=_<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=jn){vt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,r=pn.g,a=pn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(ll);const r=Pc(xr.h,ll.h,t),a=Pc(xr.s,ll.s,t),u=Pc(xr.l,ll.l,t);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*a,this.g=u[1]*t+u[4]*r+u[7]*a,this.b=u[2]*t+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new St;St.NAMES=Sg;let W0=0;class Bl extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Wo(),this.name="",this.blending=Vs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(t){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Eg extends Bl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new J,ul=new Et;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,u){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class Mg extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Tg extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ei extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let X0=0;const Yn=new Vt,Yc=new mn,Fs=new J,kn=new qo,Oo=new qo,tn=new J;class Rr extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_g(e)?Tg:Mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,r){return Yn.makeTranslation(e,t,r),this.applyMatrix4(Yn),this}scale(e,t,r){return Yn.makeScale(e,t,r),this.applyMatrix4(Yn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ei(r,3))}else{for(let r=0,a=t.count;r<a;r++){const u=e[r];t.setXYZ(r,u.x,u.y,u.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const u=t[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let u=0,f=t.length;u<f;u++){const d=t[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(kn.min,Oo.min),kn.expandByPoint(tn),tn.addVectors(kn.max,Oo.max),kn.expandByPoint(tn)):(kn.expandByPoint(Oo.min),kn.expandByPoint(Oo.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(t)for(let u=0,f=t.length;u<f;u++){const d=t[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)tn.fromBufferAttribute(d,m),p&&(Fs.fromBufferAttribute(e,m),tn.add(Fs)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,u=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new J,p[k]=new J;const m=new J,_=new J,y=new J,v=new Et,S=new Et,T=new Et,R=new J,x=new J;function g(k,P,w){m.fromBufferAttribute(r,k),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,w),v.fromBufferAttribute(u,k),S.fromBufferAttribute(u,P),T.fromBufferAttribute(u,w),_.sub(m),y.sub(m),S.sub(v),T.sub(v);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(B),x.copy(y).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(B),d[k].add(R),d[P].add(R),d[w].add(R),p[k].add(x),p[P].add(x),p[w].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,P=b.length;k<P;++k){const w=b[k],B=w.start,re=w.count;for(let ee=B,ue=B+re;ee<ue;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new J,C=new J,Y=new J,F=new J;function I(k){Y.fromBufferAttribute(a,k),F.copy(Y);const P=d[k];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),C.crossVectors(F,P);const B=C.dot(p[k])<0?-1:1;f.setXYZW(k,L.x,L.y,L.z,B)}for(let k=0,P=b.length;k<P;++k){const w=b[k],B=w.start,re=w.count;for(let ee=B,ue=B+re;ee<ue;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new J,u=new J,f=new J,d=new J,p=new J,m=new J,_=new J,y=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),R=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(t,T),u.fromBufferAttribute(t,R),f.fromBufferAttribute(t,x),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,x),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),u.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,v=new m.constructor(p.length*_);let S=0,T=0;for(let R=0,x=p.length;R<x;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)v[T++]=m[S++]}return new Si(v,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const v=m[_],S=e(v,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,v=m.length;y<v;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(t))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let v=0,S=y.length;v<S;v++)_.push(y[v].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Vt,Wr=new O0,cl=new ud,ym=new J,fl=new J,dl=new J,hl=new J,jc=new J,pl=new J,xm=new J,ml=new J;class xi extends mn{constructor(e=new Rr,t=new Eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){pl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(jc.fromBufferAttribute(y,e),f?pl.addScaledVector(jc,_):pl.addScaledVector(jc.sub(t),_))}t.add(pl)}return t}raycast(e,t){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),Wr.copy(e.ray).recast(e.near),!(cl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(cl,ym)===null||Wr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(vm.copy(u).invert(),Wr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,R=v.length;T<R;T++){const x=v[T],g=f[x.materialIndex],b=Math.max(x.start,S.start),L=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let C=b,Y=L;C<Y;C+=3){const F=d.getX(C),I=d.getX(C+1),k=d.getX(C+2);a=gl(this,g,e,r,m,_,y,F,I,k),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let x=T,g=R;x<g;x+=3){const b=d.getX(x),L=d.getX(x+1),C=d.getX(x+2);a=gl(this,f,e,r,m,_,y,b,L,C),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,R=v.length;T<R;T++){const x=v[T],g=f[x.materialIndex],b=Math.max(x.start,S.start),L=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let C=b,Y=L;C<Y;C+=3){const F=C,I=C+1,k=C+2;a=gl(this,g,e,r,m,_,y,F,I,k),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let x=T,g=R;x<g;x+=3){const b=x,L=x+1,C=x+2;a=gl(this,f,e,r,m,_,y,b,L,C),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function q0(s,e,t,r,a,u,f,d){let p;if(e.side===Ln?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Ar,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ml);return m<t.near||m>t.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,t,r,a,u,f,d,p,m){s.getVertexPosition(d,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const _=q0(s,e,t,r,fl,dl,hl,xm);if(_){const y=new J;ui.getBarycoord(xm,fl,dl,hl,y),a&&(_.uv=ui.getInterpolatedAttribute(a,d,p,m,y,new Et)),u&&(_.uv1=ui.getInterpolatedAttribute(u,d,p,m,y,new Et)),f&&(_.normal=ui.getInterpolatedAttribute(f,d,p,m,y,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new J,materialIndex:0};ui.getNormal(fl,dl,hl,v.normal),_.face=v,_.barycoord=y}return _}class Yo extends Rr{constructor(e=1,t=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],y=[];let v=0,S=0;T("z","y","x",-1,-1,r,t,e,f,u,0),T("z","y","x",1,-1,r,t,-e,f,u,1),T("x","z","y",1,1,e,r,t,a,f,2),T("x","z","y",1,-1,e,r,-t,a,f,3),T("x","y","z",1,-1,e,t,r,a,u,4),T("x","y","z",-1,-1,e,t,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(y,2));function T(R,x,g,b,L,C,Y,F,I,k,P){const w=C/I,B=Y/k,re=C/2,ee=Y/2,ue=F/2,he=I+1,ae=k+1;let ce=0,z=0;const le=new J;for(let $=0;$<ae;$++){const U=$*B-ee;for(let Z=0;Z<he;Z++){const xe=Z*w-re;le[R]=xe*b,le[x]=U*L,le[g]=ue,m.push(le.x,le.y,le.z),le[R]=0,le[x]=0,le[g]=F>0?1:-1,_.push(le.x,le.y,le.z),y.push(Z/I),y.push(1-$/k),ce+=1}}for(let $=0;$<k;$++)for(let U=0;U<I;U++){const Z=v+U+he*$,xe=v+U+he*($+1),j=v+(U+1)+he*($+1),oe=v+(U+1)+he*$;p.push(Z,xe,oe),p.push(xe,j,oe),z+=6}d.addGroup(S,z,P),S+=z,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function xn(s){const e={};for(let t=0;t<s.length;t++){const r=$s(s[t]);for(const a in r)e[a]=r[a]}return e}function Y0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const j0={clone:$s,merge:xn};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Bl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ag extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new J,Sm=new Et,Em=new Et;class $n extends Ag{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Em),t.subVectors(Em,Sm)}setViewOffset(e,t,r,a,u,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,t-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class Z0 extends mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Os,ks,e,t);a.layers=this.layers,this.add(a);const u=new $n(Os,ks,e,t);u.layers=this.layers,this.add(u);const f=new $n(Os,ks,e,t);f.layers=this.layers,this.add(f);const d=new $n(Os,ks,e,t);d.layers=this.layers,this.add(d);const p=new $n(Os,ks,e,t);p.layers=this.layers,this.add(p);const m=new $n(Os,ks,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,u,f,d,p]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,u),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(y,v,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Rg extends Dn{constructor(e,t,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Rg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),u=new ji({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:Mr});u.uniforms.tEquirect.value=t;const f=new xi(a,u),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=yi),new Z0(1,10,this).update(e,f),t.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(u)}}const $c=new J,J0=new J,ey=new ot;class jr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=$c.subVectors(r,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ey.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ud,_l=new J;class cd{constructor(e=new jr,t=new jr,r=new jr,a=new jr,u=new jr,f=new jr){this.planes=[e,t,r,a,u,f]}set(e,t,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],v=a[7],S=a[8],T=a[9],R=a[10],x=a[11],g=a[12],b=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,v-m,x-S,C-g).normalize(),r[1].setComponents(p+u,v+m,x+S,C+g).normalize(),r[2].setComponents(p+f,v+_,x+T,C+b).normalize(),r[3].setComponents(p-f,v-_,x-T,C-b).normalize(),r[4].setComponents(p-d,v-y,x-R,C-L).normalize(),t===Wi)r[5].setComponents(p+d,v+y,x+R,C+L).normalize();else if(t===Il)r[5].setComponents(d,y,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cg(){let s=null,e=!1,t=null,r=null;function a(u,f){t(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function ty(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,y=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<y.length;S++){const T=y[v],R=y[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++v,y[v]=R)}y.length=v+1;for(let S=0,T=y.length;S<T;S++){const R=y[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class zl extends Rr{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const u=e/2,f=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,v=t/p,S=[],T=[],R=[],x=[];for(let g=0;g<_;g++){const b=g*v-f;for(let L=0;L<m;L++){const C=L*y-u;T.push(C,-b,0),R.push(0,0,1),x.push(L/d),x.push(1-g/p)}}for(let g=0;g<p;g++)for(let b=0;b<d;b++){const L=b+m*g,C=b+m*(g+1),Y=b+1+m*(g+1),F=b+1+m*g;S.push(L,C,F),S.push(C,Y,F)}this.setIndex(S),this.setAttribute("position",new Ei(T,3)),this.setAttribute("normal",new Ei(R,3)),this.setAttribute("uv",new Ei(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
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
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ry=`vec3 transformedNormal = objectNormal;
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
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fx=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,uS=`#define DISTANCE
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
}`,cS=`#define DISTANCE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#define LAMBERT
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
}`,vS=`#define LAMBERT
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
}`,yS=`#define MATCAP
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
}`,xS=`#define MATCAP
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
}`,SS=`#define NORMAL
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
}`,ES=`#define NORMAL
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
}`,MS=`#define PHONG
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
}`,TS=`#define PHONG
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
}`,wS=`#define STANDARD
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
}`,AS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,CS=`#define TOON
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
}`,PS=`uniform float size;
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
}`,bS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,DS=`uniform vec3 color;
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
}`,US=`uniform float rotation;
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
}`,NS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:uy,batching_pars_vertex:cy,batching_vertex:fy,begin_vertex:dy,beginnormal_vertex:hy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:xy,color_fragment:Sy,color_pars_fragment:Ey,color_pars_vertex:My,color_vertex:Ty,common:wy,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ry,displacementmap_pars_vertex:Cy,displacementmap_vertex:Py,emissivemap_fragment:by,emissivemap_pars_fragment:Ly,colorspace_fragment:Dy,colorspace_pars_fragment:Uy,envmap_fragment:Ny,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:jy,envmap_vertex:ky,fog_vertex:By,fog_pars_vertex:zy,fog_fragment:Vy,fog_pars_fragment:Hy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Wy,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:$y,lights_toon_pars_fragment:Ky,lights_phong_fragment:Zy,lights_phong_pars_fragment:Qy,lights_physical_fragment:Jy,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:lx,map_pars_fragment:ux,map_particle_fragment:cx,map_particle_pars_fragment:fx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:hx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:yx,normal_fragment_maps:xx,normal_pars_fragment:Sx,normal_pars_vertex:Ex,normal_vertex:Mx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:bx,premultiplied_alpha_fragment:Lx,project_vertex:Dx,dithering_fragment:Ux,dithering_pars_fragment:Nx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:kx,shadowmap_vertex:Bx,shadowmask_pars_fragment:zx,skinbase_vertex:Vx,skinning_pars_vertex:Hx,skinning_vertex:Gx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:jx,transmission_fragment:$x,transmission_pars_fragment:Kx,uv_pars_fragment:Zx,uv_pars_vertex:Qx,uv_vertex:Jx,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:uS,distanceRGBA_frag:cS,equirect_vert:fS,equirect_frag:dS,linedashed_vert:hS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:_S,meshlambert_frag:vS,meshmatcap_vert:yS,meshmatcap_frag:xS,meshnormal_vert:SS,meshnormal_frag:ES,meshphong_vert:MS,meshphong_frag:TS,meshphysical_vert:wS,meshphysical_frag:AS,meshtoon_vert:RS,meshtoon_frag:CS,points_vert:PS,points_frag:bS,shadow_vert:LS,shadow_frag:DS,sprite_vert:US,sprite_frag:NS},be={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},vi={basic:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:xn([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:xn([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:xn([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:xn([be.common,be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:xn([be.lights,be.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:xn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const vl={r:0,b:0,g:0},qr=new Yi,IS=new Vt;function FS(s,e,t,r,a,u,f){const d=new St(0);let p=u===!0?0:1,m,_,y=null,v=0,S=null;function T(b){let L=b.isScene===!0?b.background:null;return L&&L.isTexture&&(L=(b.backgroundBlurriness>0?t:e).get(L)),L}function R(b){let L=!1;const C=T(b);C===null?g(d,p):C&&C.isColor&&(g(C,1),L=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,f):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,L){const C=T(L);C&&(C.isCubeTexture||C.mapping===Ol)?(_===void 0&&(_=new xi(new Yo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(L.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(qr)),_.material.toneMapped=vt.getTransfer(C.colorSpace)!==Pt,(y!==C||v!==C.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=C,v=C.version,S=s.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new xi(new zl(2,2),new ji({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=vt.getTransfer(C.colorSpace)!==Pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||v!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,v=C.version,S=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function g(b,L){b.getRGB(vl,wg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,L,f)}return{getClearColor:function(){return d},setClearColor:function(b,L=1){d.set(b),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,g(d,p)},render:R,addToRenderList:x}}function OS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,f=!1;function d(w,B,re,ee,ue){let he=!1;const ae=y(ee,re,B);u!==ae&&(u=ae,m(u.object)),he=S(w,ee,re,ue),he&&T(w,ee,re,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(w,B,re,ee),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function y(w,B,re){const ee=re.wireframe===!0;let ue=r[w.id];ue===void 0&&(ue={},r[w.id]=ue);let he=ue[B.id];he===void 0&&(he={},ue[B.id]=he);let ae=he[ee];return ae===void 0&&(ae=v(p()),he[ee]=ae),ae}function v(w){const B=[],re=[],ee=[];for(let ue=0;ue<t;ue++)B[ue]=0,re[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:re,attributeDivisors:ee,object:w,attributes:{},index:null}}function S(w,B,re,ee){const ue=u.attributes,he=B.attributes;let ae=0;const ce=re.getAttributes();for(const z in ce)if(ce[z].location>=0){const $=ue[z];let U=he[z];if(U===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),$===void 0||$.attribute!==U||U&&$.data!==U.data)return!0;ae++}return u.attributesNum!==ae||u.index!==ee}function T(w,B,re,ee){const ue={},he=B.attributes;let ae=0;const ce=re.getAttributes();for(const z in ce)if(ce[z].location>=0){let $=he[z];$===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&($=w.instanceColor));const U={};U.attribute=$,$&&$.data&&(U.data=$.data),ue[z]=U,ae++}u.attributes=ue,u.attributesNum=ae,u.index=ee}function R(){const w=u.newAttributes;for(let B=0,re=w.length;B<re;B++)w[B]=0}function x(w){g(w,0)}function g(w,B){const re=u.newAttributes,ee=u.enabledAttributes,ue=u.attributeDivisors;re[w]=1,ee[w]===0&&(s.enableVertexAttribArray(w),ee[w]=1),ue[w]!==B&&(s.vertexAttribDivisor(w,B),ue[w]=B)}function b(){const w=u.newAttributes,B=u.enabledAttributes;for(let re=0,ee=B.length;re<ee;re++)B[re]!==w[re]&&(s.disableVertexAttribArray(re),B[re]=0)}function L(w,B,re,ee,ue,he,ae){ae===!0?s.vertexAttribIPointer(w,B,re,ue,he):s.vertexAttribPointer(w,B,re,ee,ue,he)}function C(w,B,re,ee){R();const ue=ee.attributes,he=re.getAttributes(),ae=B.defaultAttributeValues;for(const ce in he){const z=he[ce];if(z.location>=0){let le=ue[ce];if(le===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const $=le.normalized,U=le.itemSize,Z=e.get(le);if(Z===void 0)continue;const xe=Z.buffer,j=Z.type,oe=Z.bytesPerElement,ge=j===s.INT||j===s.UNSIGNED_INT||le.gpuType===id;if(le.isInterleavedBufferAttribute){const fe=le.data,Te=fe.stride,Re=le.offset;if(fe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<z.locationSize;Xe++)g(z.location+Xe,fe.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Xe=0;Xe<z.locationSize;Xe++)x(z.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Xe=0;Xe<z.locationSize;Xe++)L(z.location+Xe,U/z.locationSize,j,$,Te*oe,(Re+U/z.locationSize*Xe)*oe,ge)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<z.locationSize;fe++)g(z.location+fe,le.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<z.locationSize;fe++)x(z.location+fe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let fe=0;fe<z.locationSize;fe++)L(z.location+fe,U/z.locationSize,j,$,U*oe,U/z.locationSize*fe*oe,ge)}}else if(ae!==void 0){const $=ae[ce];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(z.location,$);break;case 3:s.vertexAttrib3fv(z.location,$);break;case 4:s.vertexAttrib4fv(z.location,$);break;default:s.vertexAttrib1fv(z.location,$)}}}}b()}function Y(){k();for(const w in r){const B=r[w];for(const re in B){const ee=B[re];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete B[re]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const B=r[w.id];for(const re in B){const ee=B[re];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete B[re]}delete r[w.id]}function I(w){for(const B in r){const re=r[B];if(re[w.id]===void 0)continue;const ee=re[w.id];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete re[w.id]}}function k(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:k,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:x,disableUnusedAttributes:b}}function kS(s,e,t){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function f(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),t.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let T=0;T<y;T++)S+=_[T];t.update(S,r,1)}function p(m,_,y,v){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,y);let T=0;for(let R=0;R<y;R++)T+=_[R]*v[R];t.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function BS(s,e,t,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==ci&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const k=I===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==qi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!k)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:F}}function zS(s){const e=this;let t=null,r=0,a=!1,u=!1;const f=new jr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||a;return a=v,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,v){t=_(y,v,0)},this.setState=function(y,v,S){const T=y.clippingPlanes,R=y.clipIntersection,x=y.clipShadows,g=s.get(y);if(!a||T===null||T.length===0||u&&!x)u?_(null):m();else{const b=u?0:r,L=b*4;let C=g.clippingState||null;p.value=C,C=_(T,v,L,S);for(let Y=0;Y!==L;++Y)C[Y]=t[Y];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,v,S,T){const R=y!==null?y.length:0;let x=null;if(R!==0){if(x=p.value,T!==!0||x===null){const g=S+R*4,b=v.matrixWorldInverse;d.getNormalMatrix(b),(x===null||x.length<g)&&(x=new Float32Array(g));for(let L=0,C=S;L!==R;++L,C+=4)f.copy(y[L]).applyMatrix4(b,d),f.normal.toArray(x,C),x[C+3]=f.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function VS(s){let e=new WeakMap;function t(f,d){return d===vf?f.mapping=Xs:d===yf&&(f.mapping=qs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===vf||d===yf)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Q0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),t(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Pg extends Ag{constructor(e=-1,t=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Mm=[.125,.215,.35,.446,.526,.582],Zr=20,Kc=new Pg,Tm=new St;let Zc=null,Qc=0,Jc=0,ef=!1;const $r=(1+Math.sqrt(5))/2,Bs=1/$r,wm=[new J(-$r,Bs,0),new J($r,Bs,0),new J(-Bs,0,$r),new J(Bs,0,$r),new J(0,$r,-Bs),new J(0,$r,Bs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=ef,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Go,format:ci,colorSpace:Ks,depthBuffer:!1},a=Rm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,t,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(u)),this._blurMaterial=GS(u,e,t)}return a}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,r,a){const d=new $n(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,v=_.toneMapping;_.getClearColor(Tm),_.toneMapping=Tr,_.autoClear=!1;const S=new Eg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new xi(new Yo,S);let R=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,R=!0):(S.color.copy(Tm),R=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):b===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;yl(a,b*L,g>2?L:0,L,L),_.setRenderTarget(a),R&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=y,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Xs||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new xi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;yl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(f,Kc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=wm[(a-u-1)%wm.length];this._blur(e,u-1,u,f,d)}t.autoClear=r}_blur(e,t,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,t,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new xi(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),R=u/T,x=isFinite(u)?1+Math.floor(_*R):Zr;x>Zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zr}`);const g=[];let b=0;for(let I=0;I<Zr;++I){const k=I/R,P=Math.exp(-k*k/2);g.push(P),I===0?b+=P:I<x&&(b+=2*P)}for(let I=0;I<g.length;I++)g[I]=g[I]/b;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const C=this._sizeLods[a],Y=3*C*(a>L-zs?a-L+zs:0),F=4*(this._cubeSize-C);yl(t,Y,F,3*C,2*C),p.setRenderTarget(t),p.render(y,Kc)}}function HS(s){const e=[],t=[],r=[];let a=s;const u=s-zs+1+Mm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);t.push(d);let p=1/d;f>s-zs?p=Mm[f-s+zs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,v=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,R=3,x=2,g=1,b=new Float32Array(R*T*S),L=new Float32Array(x*T*S),C=new Float32Array(g*T*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,k=F>2?0:-1,P=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];b.set(P,R*T*F),L.set(v,x*T*F);const w=[F,F,F,F,F,F];C.set(w,g*T*F)}const Y=new Rr;Y.setAttribute("position",new Si(b,R)),Y.setAttribute("uv",new Si(L,x)),Y.setAttribute("faceIndex",new Si(C,g)),e.push(Y),a>zs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Rm(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function GS(s,e,t){const r=new Float32Array(Zr),a=new J(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fd(),fragmentShader:`

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
	`}function WS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vf||p===yf,_=p===Xs||p===qs;if(m||_){let y=e.get(d);const v=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new Am(s)),y=m?t.fromEquirectangular(d,y):t.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Am(s)),y=m?t.fromEquirectangular(d):t.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function XS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Bo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function qS(s,e,t,r){const a={},u=new WeakMap;function f(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const R=v.morphAttributes[T];for(let x=0,g=R.length;x<g;x++)e.remove(R[x])}v.removeEventListener("dispose",f),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(y,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,t.memory.geometries++),v}function p(y){const v=y.attributes;for(const T in v)e.update(v[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const R=S[T];for(let x=0,g=R.length;x<g;x++)e.update(R[x],s.ARRAY_BUFFER)}}function m(y){const v=[],S=y.index,T=y.attributes.position;let R=0;if(S!==null){const b=S.array;R=S.version;for(let L=0,C=b.length;L<C;L+=3){const Y=b[L+0],F=b[L+1],I=b[L+2];v.push(Y,F,F,I,I,Y)}}else if(T!==void 0){const b=T.array;R=T.version;for(let L=0,C=b.length/3-1;L<C;L+=3){const Y=L+0,F=L+1,I=L+2;v.push(Y,F,F,I,I,Y)}}else return;const x=new(_g(v)?Tg:Mg)(v,1);x.version=R;const g=u.get(y);g&&e.remove(g),u.set(y,x)}function _(y){const v=u.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function YS(s,e,t){let r;function a(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,u,v*f),t.update(S,r,1)}function m(v,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,v*f,T),t.update(S,r,T))}function _(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,T);let x=0;for(let g=0;g<T;g++)x+=S[g];t.update(x,r,1)}function y(v,S,T,R){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<v.length;g++)m(v[g]/f,S[g],R[g]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,R,0,T);let g=0;for(let b=0;b<T;b++)g+=S[b]*R[b];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function jS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function $S(s,e,t){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==y){let w=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),x===!0&&(C=3);let Y=d.attributes.position.count*C,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const I=new Float32Array(Y*F*4*y),k=new yg(I,Y,F,y);k.type=Gi,k.needsUpdate=!0;const P=C*4;for(let B=0;B<y;B++){const re=g[B],ee=b[B],ue=L[B],he=Y*F*4*B;for(let ae=0;ae<re.count;ae++){const ce=ae*P;T===!0&&(a.fromBufferAttribute(re,ae),I[he+ce+0]=a.x,I[he+ce+1]=a.y,I[he+ce+2]=a.z,I[he+ce+3]=0),R===!0&&(a.fromBufferAttribute(ee,ae),I[he+ce+4]=a.x,I[he+ce+5]=a.y,I[he+ce+6]=a.z,I[he+ce+7]=0),x===!0&&(a.fromBufferAttribute(ue,ae),I[he+ce+8]=a.x,I[he+ce+9]=a.y,I[he+ce+10]=a.z,I[he+ce+11]=ue.itemSize===4?a.w:1)}}v={count:y,texture:k,size:new Et(Y,F)},r.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,t);else{let T=0;for(let x=0;x<m.length;x++)T+=m[x];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function KS(s,e,t,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}class bg extends Dn{constructor(e,t,r,a,u,f,d,p,m,_=Hs){if(_!==Hs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Hs&&(r=es),r===void 0&&_===js&&(r=Ys),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lg=new Dn,bm=new bg(1,1),Dg=new yg,Ug=new I0,Ng=new Rg,Lm=[],Dm=[],Um=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function Qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let u=Lm[a];if(u===void 0&&(u=new Float32Array(a),Lm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=t,s[f].toArray(u,d)}return u}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Vl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ZS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function tE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),Zt(t,r)}}function nE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),Zt(t,r)}}function iE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),Zt(t,r)}}function rE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function aE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function lE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function dE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=gg,u=bm):u=Lg,t.setTexture2D(e||u,a)}function hE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ug,a)}function pE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Ng,a)}function mE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Dg,a)}function gE(s){switch(s){case 5126:return ZS;case 35664:return QS;case 35665:return JS;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return uE;case 36295:return cE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function _E(s,e){s.uniform1fv(this.addr,e)}function vE(s,e){const t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function yE(s,e){const t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function xE(s,e){const t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function SE(s,e){const t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function EE(s,e){const t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ME(s,e){const t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function TE(s,e){s.uniform1iv(this.addr,e)}function wE(s,e){s.uniform2iv(this.addr,e)}function AE(s,e){s.uniform3iv(this.addr,e)}function RE(s,e){s.uniform4iv(this.addr,e)}function CE(s,e){s.uniform1uiv(this.addr,e)}function PE(s,e){s.uniform2uiv(this.addr,e)}function bE(s,e){s.uniform3uiv(this.addr,e)}function LE(s,e){s.uniform4uiv(this.addr,e)}function DE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Lg,u[f])}function UE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Ug,u[f])}function NE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Ng,u[f])}function IE(s,e,t){const r=this.cache,a=e.length,u=Vl(t,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Dg,u[f])}function FE(s){switch(s){case 5126:return _E;case 35664:return vE;case 35665:return yE;case 35666:return xE;case 35674:return SE;case 35675:return EE;case 35676:return ME;case 5124:case 35670:return TE;case 35667:case 35671:return wE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 5125:return CE;case 36294:return PE;case 36295:return bE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return IE}}class OE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gE(t.type)}}class kE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FE(t.type)}}class BE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,t[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function zE(s,e,t){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),f=tf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Fm(t,m===void 0?new OE(d,s,e):new kE(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new BE(d),Fm(t,y)),t=y}}}class Pl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(t,a),f=e.getUniformLocation(t,u.name);zE(u,f,this)}}setValue(e,t,r,a){const u=this.map[t];u!==void 0&&u.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let u=0,f=t.length;u!==f;++u){const d=t[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Om(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const VE=37297;let HE=0;function GE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${t[f]}`)}return r.join(`
`)}const km=new ot;function WE(s){vt._getMatrix(km,vt.workingColorSpace,s);const e=`mat3( ${km.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+GE(s.getShaderSource(e),f)}else return a}function XE(s,e){const t=WE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qE(s,e){let t;switch(e){case a0:t="Linear";break;case l0:t="Reinhard";break;case u0:t="Cineon";break;case c0:t="ACESFilmic";break;case d0:t="AgX";break;case h0:t="Neutral";break;case f0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xl=new J;function YE(){vt.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function $E(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function KE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return t}function zo(s){return s!==""}function zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(ZE,JE)}const QE=new Map;function JE(s,e){let t=lt[e];if(t===void 0){const r=QE.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $f(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(eM,tM)}function tM(s,e,t,r){let a="";for(let u=parseInt(e);u<parseInt(t);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function nM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function iM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rg:e="ENVMAP_BLENDING_MULTIPLY";break;case s0:e="ENVMAP_BLENDING_MIX";break;case o0:e="ENVMAP_BLENDING_ADD";break}return e}function oM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function aM(s,e,t,r){const a=s.getContext(),u=t.defines;let f=t.vertexShader,d=t.fragmentShader;const p=nM(t),m=iM(t),_=rM(t),y=sM(t),v=oM(t),S=jE(t),T=$E(u),R=a.createProgram();let x,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(zo).join(`
`),g.length>0&&(g+=`
`)):(x=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),g=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?qE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,XE("linearToOutputTexel",t.outputColorSpace),YE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),f=$f(f),f=zm(f,t),f=Vm(f,t),d=$f(d),d=zm(d,t),d=Vm(d,t),f=Hm(f),d=Hm(d),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=b+x+f,C=b+g+d,Y=Om(a,a.VERTEX_SHADER,L),F=Om(a,a.FRAGMENT_SHADER,C);a.attachShader(R,Y),a.attachShader(R,F),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(B){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(R).trim(),ee=a.getShaderInfoLog(Y).trim(),ue=a.getShaderInfoLog(F).trim();let he=!0,ae=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,Y,F);else{const ce=Bm(a,Y,"vertex"),z=Bm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+re+`
`+ce+`
`+z)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ee===""||ue==="")&&(ae=!1);ae&&(B.diagnostics={runnable:he,programLog:re,vertexShader:{log:ee,prefix:x},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(Y),a.deleteShader(F),k=new Pl(a,R),P=KE(a,R)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,VE)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=F,this}let lM=0;class uM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cM(e),t.set(e,r)),r}}class cM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function fM(s,e,t,r,a,u,f){const d=new xg,p=new uM,m=new Set,_=[],y=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function x(P,w,B,re,ee){const ue=re.fog,he=ee.geometry,ae=P.isMeshStandardMaterial?re.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),z=ce&&ce.mapping===Ol?ce.image.height:null,le=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const $=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=$!==void 0?$.length:0;let Z=0;he.morphAttributes.position!==void 0&&(Z=1),he.morphAttributes.normal!==void 0&&(Z=2),he.morphAttributes.color!==void 0&&(Z=3);let xe,j,oe,ge;if(le){const gt=vi[le];xe=gt.vertexShader,j=gt.fragmentShader}else xe=P.vertexShader,j=P.fragmentShader,p.update(P),oe=p.getVertexShaderID(P),ge=p.getFragmentShaderID(P);const fe=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Re=ee.isInstancedMesh===!0,Xe=ee.isBatchedMesh===!0,Mt=!!P.map,ut=!!P.matcap,Tt=!!ce,G=!!P.aoMap,rn=!!P.lightMap,nt=!!P.bumpMap,at=!!P.normalMap,Ye=!!P.displacementMap,Rt=!!P.emissiveMap,je=!!P.metalnessMap,D=!!P.roughnessMap,M=P.anisotropy>0,Q=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,Ve=P.transmission>0,Ce=M&&!!P.anisotropyMap,Ne=Q&&!!P.clearcoatMap,ct=Q&&!!P.clearcoatNormalMap,Ee=Q&&!!P.clearcoatRoughnessMap,Fe=ve&&!!P.iridescenceMap,Ze=ve&&!!P.iridescenceThicknessMap,Qe=de&&!!P.sheenColorMap,Oe=de&&!!P.sheenRoughnessMap,ft=!!P.specularMap,it=!!P.specularColorMap,At=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Pe=Ve&&!!P.thicknessMap,se=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,rt=!!P.extensions;let Dt=Tr;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const qt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:xe,fragmentShader:j,defines:P.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Xe,batchingColor:Xe&&ee._colorsTexture!==null,instancing:Re,instancingColor:Re&&ee.instanceColor!==null,instancingMorph:Re&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:Mt,matcap:ut,envMap:Tt,envMapMode:Tt&&ce.mapping,envMapCubeUVHeight:z,aoMap:G,lightMap:rn,bumpMap:nt,normalMap:at,displacementMap:v&&Ye,emissiveMap:Rt,normalMapObjectSpace:at&&P.normalMapType===v0,normalMapTangentSpace:at&&P.normalMapType===_0,metalnessMap:je,roughnessMap:D,anisotropy:M,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Ne,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:Fe,iridescenceThicknessMap:Ze,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:it,specularIntensityMap:At,transmission:Ve,transmissionMap:H,thicknessMap:Pe,gradientMap:se,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:Mt&&R(P.map.channel),aoMapUv:G&&R(P.aoMap.channel),lightMapUv:rn&&R(P.lightMap.channel),bumpMapUv:nt&&R(P.bumpMap.channel),normalMapUv:at&&R(P.normalMap.channel),displacementMapUv:Ye&&R(P.displacementMap.channel),emissiveMapUv:Rt&&R(P.emissiveMap.channel),metalnessMapUv:je&&R(P.metalnessMap.channel),roughnessMapUv:D&&R(P.roughnessMap.channel),anisotropyMapUv:Ce&&R(P.anisotropyMap.channel),clearcoatMapUv:Ne&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&R(P.sheenRoughnessMap.channel),specularMapUv:ft&&R(P.specularMap.channel),specularColorMapUv:it&&R(P.specularColorMap.channel),specularIntensityMapUv:At&&R(P.specularIntensityMap.channel),transmissionMapUv:H&&R(P.transmissionMap.channel),thicknessMapUv:Pe&&R(P.thicknessMap.channel),alphaMapUv:pe&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(at||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(Mt||pe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Mt&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)w.push(B),w.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(b(w,P),L(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function b(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const w=T[P.type];let B;if(w){const re=vi[w];B=j0.clone(re.uniforms)}else B=P.uniforms;return B}function Y(P,w){let B;for(let re=0,ee=_.length;re<ee;re++){const ue=_[re];if(ue.cacheKey===w){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new aM(s,w,P,u),_.push(B)),B}function F(P){if(--P.usedTimes===0){const w=_.indexOf(P);_[w]=_[_.length-1],_.pop(),P.destroy()}}function I(P){p.remove(P)}function k(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:Y,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:k}}function dM(){let s=new WeakMap;function e(f){return s.has(f)}function t(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:u}}function hM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const t=[],r=[],a=[];function u(){e=0,t.length=0,r.length=0,a.length=0}function f(y,v,S,T,R,x){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:v,material:S,groupOrder:T,renderOrder:y.renderOrder,z:R,group:x},s[e]=g):(g.id=y.id,g.object=y,g.geometry=v,g.material=S,g.groupOrder=T,g.renderOrder=y.renderOrder,g.z=R,g.group=x),e++,g}function d(y,v,S,T,R,x){const g=f(y,v,S,T,R,x);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function p(y,v,S,T,R,x){const g=f(y,v,S,T,R,x);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function m(y,v){t.length>1&&t.sort(y||hM),r.length>1&&r.sort(v||Wm),a.length>1&&a.sort(v||Wm)}function _(){for(let y=e,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function pM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Xm,s.set(r,[f])):a>=u.length?(f=new Xm,u.push(f)):f=u[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function mM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new St};break;case"SpotLight":t={position:new J,direction:new J,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function gM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _M=0;function vM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yM(s){const e=new mM,t=gM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const a=new J,u=new Vt,f=new Vt;function d(m){let _=0,y=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,R=0,x=0,g=0,b=0,L=0,C=0,Y=0,F=0,I=0;m.sort(vM);for(let P=0,w=m.length;P<w;P++){const B=m[P],re=B.color,ee=B.intensity,ue=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=re.r*ee,y+=re.g*ee,v+=re.b*ee;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(B.sh.coefficients[ae],ee);I++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=B.shadow.matrix,b++}r.directional[S]=ae,S++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(re).multiplyScalar(ee),ae.distance=ue,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,r.spot[R]=ae;const ce=B.shadow;if(B.map&&(r.spotLightMap[Y]=B.map,Y++,ce.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[R]=ce.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=he,C++}R++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(re).multiplyScalar(ee),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=ae,x++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=B.shadow.matrix,L++}r.point[T]=ae,T++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(ee),ae.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[g]=ae,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==S||k.pointLength!==T||k.spotLength!==R||k.rectAreaLength!==x||k.hemiLength!==g||k.numDirectionalShadows!==b||k.numPointShadows!==L||k.numSpotShadows!==C||k.numSpotMaps!==Y||k.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+Y-F,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,k.directionalLength=S,k.pointLength=T,k.spotLength=R,k.rectAreaLength=x,k.hemiLength=g,k.numDirectionalShadows=b,k.numPointShadows=L,k.numSpotShadows=C,k.numSpotMaps=Y,k.numLightProbes=I,r.version=_M++)}function p(m,_){let y=0,v=0,S=0,T=0,R=0;const x=_.matrixWorldInverse;for(let g=0,b=m.length;g<b;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[y];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(x),y++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),f.identity(),u.copy(L.matrixWorld),u.premultiply(x),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),v++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(x),R++}}}return{setup:d,setupView:p,state:r}}function qm(s){const e=new yM(s),t=[],r=[];function a(_){m.camera=_,t.length=0,r.length=0}function u(_){t.push(_)}function f(_){r.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function xM(s){let e=new WeakMap;function t(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new qm(s),e.set(a,[d])):u>=f.length?(d=new qm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class SM extends Bl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=m0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends Bl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
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
}`;function wM(s,e,t){let r=new cd;const a=new Et,u=new Et,f=new zt,d=new SM({depthPacking:g0}),p=new EM,m={},_=t.maxTextureSize,y={[Ar]:Ln,[Ln]:Ar,[Hi]:Hi},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:MM,fragmentShader:TM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new xi(T,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let g=this.type;this.render=function(F,I,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Mr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ee=g!==Vi&&this.type===Vi,ue=g===Vi&&this.type!==Vi;for(let he=0,ae=F.length;he<ae;he++){const ce=F[he],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const le=z.getFrameExtents();if(a.multiply(le),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,z.mapSize.y=u.y)),z.map===null||ee===!0||ue===!0){const U=this.type!==Vi?{minFilter:fi,magFilter:fi}:{};z.map!==null&&z.map.dispose(),z.map=new ts(a.x,a.y,U),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const $=z.getViewportCount();for(let U=0;U<$;U++){const Z=z.getViewport(U);f.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),re.viewport(f),z.updateMatrices(ce,U),r=z.getFrustum(),C(I,k,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Vi&&b(z,k),z.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(P,w,B)};function b(F,I){const k=e.update(R);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ts(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,k,v,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,k,S,R,null)}function L(F,I,k,P){let w=null;const B=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)w=B;else if(w=k.isPointLight===!0?p:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const re=w.uuid,ee=I.uuid;let ue=m[re];ue===void 0&&(ue={},m[re]=ue);let he=ue[ee];he===void 0&&(he=w.clone(),ue[ee]=he,I.addEventListener("dispose",Y)),w=he}if(w.visible=I.visible,w.wireframe=I.wireframe,P===Vi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:y[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const re=s.properties.get(w);re.light=k}return w}function C(F,I,k,P,w){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Vi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),ue=F.material;if(Array.isArray(ue)){const he=ee.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const z=he[ae],le=ue[z.materialIndex];if(le&&le.visible){const $=L(F,le,P,w);F.onBeforeShadow(s,F,I,k,ee,$,z),s.renderBufferDirect(k,null,ee,$,F,z),F.onAfterShadow(s,F,I,k,ee,$,z)}}}else if(ue.visible){const he=L(F,ue,P,w);F.onBeforeShadow(s,F,I,k,ee,he,null),s.renderBufferDirect(k,null,ee,he,F,null),F.onAfterShadow(s,F,I,k,ee,he,null)}}const re=F.children;for(let ee=0,ue=re.length;ee<ue;ee++)C(re[ee],I,k,P,w)}function Y(F){F.target.removeEventListener("dispose",Y);for(const k in m){const P=m[k],w=F.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const AM={[ff]:df,[hf]:gf,[pf]:_f,[Ws]:mf,[df]:ff,[gf]:hf,[_f]:pf,[mf]:Ws};function RM(s,e){function t(){let H=!1;const Pe=new zt;let se=null;const pe=new zt(0,0,0,0);return{setMask:function(De){se!==De&&!H&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){H=De},setClear:function(De,Le,rt,Dt,qt){qt===!0&&(De*=Dt,Le*=Dt,rt*=Dt),Pe.set(De,Le,rt,Dt),pe.equals(Pe)===!1&&(s.clearColor(De,Le,rt,Dt),pe.copy(Pe))},reset:function(){H=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,se=null,pe=null,De=null;return{setReversed:function(Le){if(Pe!==Le){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=De;De=null,this.setClear(Dt)}Pe=Le},getReversed:function(){return Pe},setTest:function(Le){Le?fe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Le){se!==Le&&!H&&(s.depthMask(Le),se=Le)},setFunc:function(Le){if(Pe&&(Le=AM[Le]),pe!==Le){switch(Le){case ff:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case hf:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case pf:s.depthFunc(s.EQUAL);break;case mf:s.depthFunc(s.GEQUAL);break;case gf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){H=Le},setClear:function(Le){De!==Le&&(Pe&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){H=!1,se=null,pe=null,De=null,Pe=!1}}}function a(){let H=!1,Pe=null,se=null,pe=null,De=null,Le=null,rt=null,Dt=null,qt=null;return{setTest:function(gt){H||(gt?fe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(gt){Pe!==gt&&!H&&(s.stencilMask(gt),Pe=gt)},setFunc:function(gt,Sn,gn){(se!==gt||pe!==Sn||De!==gn)&&(s.stencilFunc(gt,Sn,gn),se=gt,pe=Sn,De=gn)},setOp:function(gt,Sn,gn){(Le!==gt||rt!==Sn||Dt!==gn)&&(s.stencilOp(gt,Sn,gn),Le=gt,rt=Sn,Dt=gn)},setLocked:function(gt){H=gt},setClear:function(gt){qt!==gt&&(s.clearStencil(gt),qt=gt)},reset:function(){H=!1,Pe=null,se=null,pe=null,De=null,Le=null,rt=null,Dt=null,qt=null}}}const u=new t,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},y={},v=new WeakMap,S=[],T=null,R=!1,x=null,g=null,b=null,L=null,C=null,Y=null,F=null,I=new St(0,0,0),k=0,P=!1,w=null,B=null,re=null,ee=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ce>=2);let le=null,$={};const U=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),xe=new zt().fromArray(U),j=new zt().fromArray(Z);function oe(H,Pe,se,pe){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(H,Le),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Pe+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const ge={};ge[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),f.setFunc(Ws),nt(!1),at(Kp),fe(s.CULL_FACE),G(Mr);function fe(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Te(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Re(H,Pe){return y[H]!==Pe?(s.bindFramebuffer(H,Pe),y[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Xe(H,Pe){let se=S,pe=!1;if(H){se=v.get(Pe),se===void 0&&(se=[],v.set(Pe,se));const De=H.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,rt=De.length;Le<rt;Le++)se[Le]=s.COLOR_ATTACHMENT0+Le;se.length=De.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Mt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const ut={[Kr]:s.FUNC_ADD,[Hv]:s.FUNC_SUBTRACT,[Gv]:s.FUNC_REVERSE_SUBTRACT};ut[Wv]=s.MIN,ut[Xv]=s.MAX;const Tt={[qv]:s.ZERO,[Yv]:s.ONE,[jv]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[e0]:s.SRC_ALPHA_SATURATE,[Qv]:s.DST_COLOR,[Kv]:s.DST_ALPHA,[$v]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Zv]:s.ONE_MINUS_DST_ALPHA,[t0]:s.CONSTANT_COLOR,[n0]:s.ONE_MINUS_CONSTANT_COLOR,[i0]:s.CONSTANT_ALPHA,[r0]:s.ONE_MINUS_CONSTANT_ALPHA};function G(H,Pe,se,pe,De,Le,rt,Dt,qt,gt){if(H===Mr){R===!0&&(Te(s.BLEND),R=!1);return}if(R===!1&&(fe(s.BLEND),R=!0),H!==Vv){if(H!==x||gt!==P){if((g!==Kr||C!==Kr)&&(s.blendEquation(s.FUNC_ADD),g=Kr,C=Kr),gt)switch(H){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,L=null,Y=null,F=null,I.set(0,0,0),k=0,x=H,P=gt}return}De=De||Pe,Le=Le||se,rt=rt||pe,(Pe!==g||De!==C)&&(s.blendEquationSeparate(ut[Pe],ut[De]),g=Pe,C=De),(se!==b||pe!==L||Le!==Y||rt!==F)&&(s.blendFuncSeparate(Tt[se],Tt[pe],Tt[Le],Tt[rt]),b=se,L=pe,Y=Le,F=rt),(Dt.equals(I)===!1||qt!==k)&&(s.blendColor(Dt.r,Dt.g,Dt.b,qt),I.copy(Dt),k=qt),x=H,P=!1}function rn(H,Pe){H.side===Hi?Te(s.CULL_FACE):fe(s.CULL_FACE);let se=H.side===Ln;Pe&&(se=!se),nt(se),H.blending===Vs&&H.transparent===!1?G(Mr):G(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),u.setMask(H.colorWrite);const pe=H.stencilWrite;d.setTest(pe),pe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){w!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),w=H)}function at(H){H!==kv?(fe(s.CULL_FACE),H!==B&&(H===Kp?s.cullFace(s.BACK):H===Bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),B=H}function Ye(H){H!==re&&(ae&&s.lineWidth(H),re=H)}function Rt(H,Pe,se){H?(fe(s.POLYGON_OFFSET_FILL),(ee!==Pe||ue!==se)&&(s.polygonOffset(Pe,se),ee=Pe,ue=se)):Te(s.POLYGON_OFFSET_FILL)}function je(H){H?fe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function D(H){H===void 0&&(H=s.TEXTURE0+he-1),le!==H&&(s.activeTexture(H),le=H)}function M(H,Pe,se){se===void 0&&(le===null?se=s.TEXTURE0+he-1:se=le);let pe=$[se];pe===void 0&&(pe={type:void 0,texture:void 0},$[se]=pe),(pe.type!==H||pe.texture!==Pe)&&(le!==se&&(s.activeTexture(se),le=se),s.bindTexture(H,Pe||ge[H]),pe.type=H,pe.texture=Pe)}function Q(){const H=$[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(H){xe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),xe.copy(H))}function Oe(H){j.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function ft(H,Pe){let se=m.get(Pe);se===void 0&&(se=new WeakMap,m.set(Pe,se));let pe=se.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(Pe,H.name),se.set(H,pe))}function it(H,Pe){const pe=m.get(Pe).get(H);p.get(Pe)!==pe&&(s.uniformBlockBinding(Pe,pe,H.__bindingPointIndex),p.set(Pe,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,$={},y={},v=new WeakMap,S=[],T=null,R=!1,x=null,g=null,b=null,L=null,C=null,Y=null,F=null,I=new St(0,0,0),k=0,P=!1,w=null,B=null,re=null,ee=null,ue=null,xe.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:fe,disable:Te,bindFramebuffer:Re,drawBuffers:Xe,useProgram:Mt,setBlending:G,setMaterial:rn,setFlipSided:nt,setCullFace:at,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:je,activeTexture:D,bindTexture:M,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Fe,texImage3D:Ze,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:Qe,viewport:Oe,reset:At}}function Ym(s,e,t,r){const a=CM(r);switch(t){case ug:return s*e;case fg:return s*e;case dg:return s*e*2;case hg:return s*e/a.components*a.byteLength;case od:return s*e/a.components*a.byteLength;case pg:return s*e*2/a.components*a.byteLength;case ad:return s*e*2/a.components*a.byteLength;case cg:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case ld:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Ef:case Tf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mg:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CM(s){switch(s){case qi:case og:return{byteLength:1,components:1};case Ho:case ag:case Go:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case es:case id:case Gi:return{byteLength:4,components:1};case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function PM(s,e,t,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,_=new WeakMap;let y;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return S?new OffscreenCanvas(D,M):Fl("canvas")}function R(D,M,Q){let me=1;const ve=je(D);if((ve.width>Q||ve.height>Q)&&(me=Q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(me*ve.width),Ve=Math.floor(me*ve.height);y===void 0&&(y=T(de,Ve));const Ce=M?T(de,Ve):y;return Ce.width=de,Ce.height=Ve,Ce.getContext("2d").drawImage(D,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ve+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function x(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,M,Q,me,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=M;if(M===s.RED&&(Q===s.FLOAT&&(de=s.R32F),Q===s.HALF_FLOAT&&(de=s.R16F),Q===s.UNSIGNED_BYTE&&(de=s.R8)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.R8UI),Q===s.UNSIGNED_SHORT&&(de=s.R16UI),Q===s.UNSIGNED_INT&&(de=s.R32UI),Q===s.BYTE&&(de=s.R8I),Q===s.SHORT&&(de=s.R16I),Q===s.INT&&(de=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(de=s.RG32F),Q===s.HALF_FLOAT&&(de=s.RG16F),Q===s.UNSIGNED_BYTE&&(de=s.RG8)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RG8UI),Q===s.UNSIGNED_SHORT&&(de=s.RG16UI),Q===s.UNSIGNED_INT&&(de=s.RG32UI),Q===s.BYTE&&(de=s.RG8I),Q===s.SHORT&&(de=s.RG16I),Q===s.INT&&(de=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Q===s.UNSIGNED_INT&&(de=s.RGB32UI),Q===s.BYTE&&(de=s.RGB8I),Q===s.SHORT&&(de=s.RGB16I),Q===s.INT&&(de=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Q===s.UNSIGNED_INT&&(de=s.RGBA32UI),Q===s.BYTE&&(de=s.RGBA8I),Q===s.SHORT&&(de=s.RGBA16I),Q===s.INT&&(de=s.RGBA32I)),M===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),M===s.RGBA){const Ve=ve?kl:vt.getTransfer(me);Q===s.FLOAT&&(de=s.RGBA32F),Q===s.HALF_FLOAT&&(de=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(de=Ve===Pt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(D,M){let Q;return D?M===null||M===es||M===Ys?Q=s.DEPTH24_STENCIL8:M===Gi?Q=s.DEPTH32F_STENCIL8:M===Ho&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===es||M===Ys?Q=s.DEPTH_COMPONENT24:M===Gi?Q=s.DEPTH_COMPONENT32F:M===Ho&&(Q=s.DEPTH_COMPONENT16),Q}function Y(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function F(D){const M=D.target;M.removeEventListener("dispose",F),k(M),M.isVideoTexture&&_.delete(M)}function I(D){const M=D.target;M.removeEventListener("dispose",I),w(M)}function k(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Q=D.source,me=v.get(Q);if(me){const ve=me[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(me).length===0&&v.delete(Q)}r.remove(D)}function P(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const Q=D.source,me=v.get(Q);delete me[M.__cacheKey],f.memory.textures--}function w(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let ve=0;ve<M.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(M.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)s.deleteFramebuffer(M.__webglFramebuffer[me]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=D.textures;for(let me=0,ve=Q.length;me<ve;me++){const de=r.get(Q[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(Q[me])}r.remove(D)}let B=0;function re(){B=0}function ee(){const D=B;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),B+=1,D}function ue(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function he(D,M){const Q=r.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(Q,D,M);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function ae(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function ce(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,M);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function z(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){oe(Q,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const le={[xf]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[Sf]:s.MIRRORED_REPEAT},$={[fi]:s.NEAREST,[p0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},U={[y0]:s.NEVER,[w0]:s.ALWAYS,[x0]:s.LESS,[gg]:s.LEQUAL,[S0]:s.EQUAL,[T0]:s.GEQUAL,[E0]:s.GREATER,[M0]:s.NOTEQUAL};function Z(D,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===Rc||M.magFilter===el||M.magFilter===Jr||M.minFilter===yi||M.minFilter===Rc||M.minFilter===el||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,$[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fi||M.minFilter!==el&&M.minFilter!==Jr||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function xe(D,M){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",F));const me=M.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const de=ue(M);if(de!==D.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),ve[de].usedTimes++;const Ve=ve[D.__cacheKey];Ve!==void 0&&(ve[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(M)),D.__cacheKey=de,D.__webglTexture=ve[de].texture}return Q}function j(D,M,Q){let me=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=s.TEXTURE_3D);const ve=xe(D,M),de=M.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+Q);const Ve=r.get(de);if(de.version!==Ve.__version||ve===!0){t.activeTexture(s.TEXTURE0+Q);const Ce=vt.getPrimaries(vt.workingColorSpace),Ne=M.colorSpace===Er?null:vt.getPrimaries(M.colorSpace),ct=M.colorSpace===Er||Ce===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=R(M.image,!1,a.maxTextureSize);Ee=Rt(M,Ee);const Fe=u.convert(M.format,M.colorSpace),Ze=u.convert(M.type);let Qe=L(M.internalFormat,Fe,Ze,M.colorSpace,M.isVideoTexture);Z(me,M);let Oe;const ft=M.mipmaps,it=M.isVideoTexture!==!0,At=Ve.__version===void 0||ve===!0,H=de.dataReady,Pe=Y(M,Ee);if(M.isDepthTexture)Qe=C(M.format===js,M.type),At&&(it?t.texStorage2D(s.TEXTURE_2D,1,Qe,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,Fe,Ze,null));else if(M.isDataTexture)if(ft.length>0){it&&At&&t.texStorage2D(s.TEXTURE_2D,Pe,Qe,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],it?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Fe,Ze,Oe.data);M.generateMipmaps=!1}else it?(At&&t.texStorage2D(s.TEXTURE_2D,Pe,Qe,Ee.width,Ee.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Fe,Ze,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,Fe,Ze,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Qe,ft[0].width,ft[0].height,Ee.depth);for(let se=0,pe=ft.length;se<pe;se++)if(Oe=ft[se],M.format!==ci)if(Fe!==null)if(it){if(H)if(M.layerUpdates.size>0){const De=Ym(Oe.width,Oe.height,M.format,M.type);for(const Le of M.layerUpdates){const rt=Oe.data.subarray(Le*De/Oe.data.BYTES_PER_ELEMENT,(Le+1)*De/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Le,Oe.width,Oe.height,1,Fe,rt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Ee.depth,Fe,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Qe,Oe.width,Oe.height,Ee.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Ee.depth,Fe,Ze,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Qe,Oe.width,Oe.height,Ee.depth,0,Fe,Ze,Oe.data)}else{it&&At&&t.texStorage2D(s.TEXTURE_2D,Pe,Qe,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],M.format!==ci?Fe!==null?it?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Fe,Ze,Oe.data)}else if(M.isDataArrayTexture)if(it){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Qe,Ee.width,Ee.height,Ee.depth),H)if(M.layerUpdates.size>0){const se=Ym(Ee.width,Ee.height,M.format,M.type);for(const pe of M.layerUpdates){const De=Ee.data.subarray(pe*se/Ee.data.BYTES_PER_ELEMENT,(pe+1)*se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Fe,Ze,De)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Ze,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ee.width,Ee.height,Ee.depth,0,Fe,Ze,Ee.data);else if(M.isData3DTexture)it?(At&&t.texStorage3D(s.TEXTURE_3D,Pe,Qe,Ee.width,Ee.height,Ee.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Ze,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,Qe,Ee.width,Ee.height,Ee.depth,0,Fe,Ze,Ee.data);else if(M.isFramebufferTexture){if(At)if(it)t.texStorage2D(s.TEXTURE_2D,Pe,Qe,Ee.width,Ee.height);else{let se=Ee.width,pe=Ee.height;for(let De=0;De<Pe;De++)t.texImage2D(s.TEXTURE_2D,De,Qe,se,pe,0,Fe,Ze,null),se>>=1,pe>>=1}}else if(ft.length>0){if(it&&At){const se=je(ft[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Qe,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],it?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Ze,Oe):t.texImage2D(s.TEXTURE_2D,se,Qe,Fe,Ze,Oe);M.generateMipmaps=!1}else if(it){if(At){const se=je(Ee);t.texStorage2D(s.TEXTURE_2D,Pe,Qe,se.width,se.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Ze,Ee)}else t.texImage2D(s.TEXTURE_2D,0,Qe,Fe,Ze,Ee);x(M)&&g(me),Ve.__version=de.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function oe(D,M,Q){if(M.image.length!==6)return;const me=xe(D,M),ve=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const de=r.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);const Ve=vt.getPrimaries(vt.workingColorSpace),Ce=M.colorSpace===Er?null:vt.getPrimaries(M.colorSpace),Ne=M.colorSpace===Er||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ct=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!ct&&!Ee?Fe[pe]=R(M.image[pe],!0,a.maxCubemapSize):Fe[pe]=Ee?M.image[pe].image:M.image[pe],Fe[pe]=Rt(M,Fe[pe]);const Ze=Fe[0],Qe=u.convert(M.format,M.colorSpace),Oe=u.convert(M.type),ft=L(M.internalFormat,Qe,Oe,M.colorSpace),it=M.isVideoTexture!==!0,At=de.__version===void 0||me===!0,H=ve.dataReady;let Pe=Y(M,Ze);Z(s.TEXTURE_CUBE_MAP,M);let se;if(ct){it&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let De=0;De<se.length;De++){const Le=se[De];M.format!==ci?Qe!==null?it?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,Qe,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,Qe,Oe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,Qe,Oe,Le.data)}}}else{if(se=M.mipmaps,it&&At){se.length>0&&Pe++;const pe=je(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,Qe,Oe,Fe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Fe[pe].width,Fe[pe].height,0,Qe,Oe,Fe[pe].data);for(let De=0;De<se.length;De++){const rt=se[De].image[pe].image;it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,Qe,Oe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,rt.width,rt.height,0,Qe,Oe,rt.data)}}else{it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,Oe,Fe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Qe,Oe,Fe[pe]);for(let De=0;De<se.length;De++){const Le=se[De];it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,Qe,Oe,Le.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,Qe,Oe,Le.image[pe])}}}x(M)&&g(s.TEXTURE_CUBE_MAP),de.__version=ve.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ge(D,M,Q,me,ve,de){const Ve=u.convert(Q.format,Q.colorSpace),Ce=u.convert(Q.type),Ne=L(Q.internalFormat,Ve,Ce,Q.colorSpace),ct=r.get(M),Ee=r.get(Q);if(Ee.__renderTarget=M,!ct.__hasExternalTextures){const Fe=Math.max(1,M.width>>de),Ze=Math.max(1,M.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Ne,Fe,Ze,M.depth,0,Ve,Ce,null):t.texImage2D(ve,de,Ne,Fe,Ze,0,Ve,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),at(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,nt(M)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(D,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const me=M.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=C(M.stencilBuffer,ve),Ve=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=nt(M);at(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,de,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,D)}else{const me=M.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ve=u.convert(de.format,de.colorSpace),Ce=u.convert(de.type),Ne=L(de.internalFormat,Ve,Ce,de.colorSpace),ct=nt(M);Q&&at(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ne,M.width,M.height):at(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ne,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he(M.depthTexture,0);const ve=me.__webglTexture,de=nt(M);if(M.depthTexture.format===Hs)at(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(M.depthTexture.format===js)at(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Re(D){const M=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=me}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,D)}else if(Q){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=s.createRenderbuffer(),fe(M.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),fe(M.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(D,M,Q){const me=r.get(D);M!==void 0&&ge(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Re(D)}function Mt(D){const M=D.texture,Q=r.get(D),me=r.get(M);D.addEventListener("dispose",I);const ve=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=M.version,f.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)Q.__webglFramebuffer[Ce][Ne]=s.createFramebuffer()}else Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ne=ve.length;Ce<Ne;Ce++){const ct=r.get(ve[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),f.memory.textures++)}if(D.samples>0&&at(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ne=ve[Ce];Q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ct=u.convert(Ne.format,Ne.colorSpace),Ee=u.convert(Ne.type),Fe=L(Ne.internalFormat,ct,Ee,Ne.colorSpace,D.isXRRenderTarget===!0),Ze=nt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Fe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Z(s.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)ge(Q.__webglFramebuffer[Ce][Ne],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else ge(Q.__webglFramebuffer[Ce],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ce=0,Ne=ve.length;Ce<Ne;Ce++){const ct=ve[Ce],Ee=r.get(ct);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),Z(s.TEXTURE_2D,ct),ge(Q.__webglFramebuffer,D,ct,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),x(ct)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),Z(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)ge(Q.__webglFramebuffer[Ne],D,M,s.COLOR_ATTACHMENT0,Ce,Ne);else ge(Q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,Ce,0);x(M)&&g(Ce),t.unbindTexture()}D.depthBuffer&&Re(D)}function ut(D){const M=D.textures;for(let Q=0,me=M.length;Q<me;Q++){const ve=M[Q];if(x(ve)){const de=b(D),Ve=r.get(ve).__webglTexture;t.bindTexture(de,Ve),g(de),t.unbindTexture()}}}const Tt=[],G=[];function rn(D){if(D.samples>0){if(at(D)===!1){const M=D.textures,Q=D.width,me=D.height;let ve=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(D),Ce=M.length>1;if(Ce)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const ct=r.get(M[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,ve,s.NEAREST),p===!0&&(Tt.length=0,G.length=0,Tt.push(s.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Tt.push(de),G.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const ct=r.get(M[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function nt(D){return Math.min(a.maxSamples,D.samples)}function at(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(D){const M=f.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function Rt(D,M){const Q=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Ks&&Q!==Er&&(vt.getTransfer(Q)===Pt?(me!==ci||ve!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=re,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Xe,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=at}function bM(s,e){function t(r,a=Er){let u;const f=vt.getTransfer(a);if(r===qi)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===og)return s.BYTE;if(r===ag)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===id)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===ug)return s.ALPHA;if(r===cg)return s.RGB;if(r===ci)return s.RGBA;if(r===fg)return s.LUMINANCE;if(r===dg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===hg)return s.RED;if(r===od)return s.RED_INTEGER;if(r===pg)return s.RG;if(r===ad)return s.RG_INTEGER;if(r===ld)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Rl)if(f===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===Mf||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ef)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Af||r===Rf)return f===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===Nf||r===If||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Pf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Gf||r===Wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Cl)return f===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mg||r===Xf||r===qf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class LM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),g=this._getHandJoint(m,R);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=_.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Dn,u=e.properties.get(a);u.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ji({vertexShader:UM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xi(new zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends Zs{constructor(e,t){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,y=null,v=null,S=null,T=null;const R=new IM,x=t.getContextAttributes();let g=null,b=null;const L=[],C=[],Y=new Et;let F=null;const I=new $n;I.viewport=new zt;const k=new $n;k.viewport=new zt;const P=[I,k],w=new LM;let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=L[j];return oe===void 0&&(oe=new nf,L[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=L[j];return oe===void 0&&(oe=new nf,L[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=L[j];return oe===void 0&&(oe=new nf,L[j]=oe),oe.getHandSpace()};function ee(j){const oe=C.indexOf(j.inputSource);if(oe===-1)return;const ge=L[oe];ge!==void 0&&(ge.update(j.inputSource,j.frame,m||f),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function ue(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",he);for(let j=0;j<L.length;j++){const oe=C[j];oe!==null&&(C[j]=null,L[j].disconnect(oe))}B=null,re=null,R.reset(),e.setRenderTarget(g),S=null,v=null,y=null,a=null,b=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,t,oe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new ts(S.framebufferWidth,S.framebufferHeight,{format:ci,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,ge=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?js:Hs,ge=x.stencil?Ys:es);const Te={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:u};y=new XRWebGLBinding(a,t),v=y.createProjectionLayer(Te),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new ts(v.textureWidth,v.textureHeight,{format:ci,type:qi,depthTexture:new bg(v.textureWidth,v.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),xe.setContext(a),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(j){for(let oe=0;oe<j.removed.length;oe++){const ge=j.removed[oe],fe=C.indexOf(ge);fe>=0&&(C[fe]=null,L[fe].disconnect(ge))}for(let oe=0;oe<j.added.length;oe++){const ge=j.added[oe];let fe=C.indexOf(ge);if(fe===-1){for(let Re=0;Re<L.length;Re++)if(Re>=C.length){C.push(ge),fe=Re;break}else if(C[Re]===null){C[Re]=ge,fe=Re;break}if(fe===-1)break}const Te=L[fe];Te&&Te.connect(ge)}}const ae=new J,ce=new J;function z(j,oe,ge){ae.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const fe=ae.distanceTo(ce),Te=oe.projectionMatrix.elements,Re=ge.projectionMatrix.elements,Xe=Te[14]/(Te[10]-1),Mt=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],Tt=(Te[9]-1)/Te[5],G=(Te[8]-1)/Te[0],rn=(Re[8]+1)/Re[0],nt=Xe*G,at=Xe*rn,Ye=fe/(-G+rn),Rt=Ye*-G;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Rt),j.translateZ(Ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const je=Xe+Ye,D=Mt+Ye,M=nt-Rt,Q=at+(fe-Rt),me=ut*Mt/D*je,ve=Tt*Mt/D*je;j.projectionMatrix.makePerspective(M,Q,me,ve,je,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let oe=j.near,ge=j.far;R.texture!==null&&(R.depthNear>0&&(oe=R.depthNear),R.depthFar>0&&(ge=R.depthFar)),w.near=k.near=I.near=oe,w.far=k.far=I.far=ge,(B!==w.near||re!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,re=w.far),I.layers.mask=j.layers.mask|2,k.layers.mask=j.layers.mask|4,w.layers.mask=I.layers.mask|k.layers.mask;const fe=j.parent,Te=w.cameras;le(w,fe);for(let Re=0;Re<Te.length;Re++)le(Te[Re],fe);Te.length===2?z(w,I,k):w.projectionMatrix.copy(I.projectionMatrix),$(j,w,fe)};function $(j,oe,ge){ge===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(j){p=j,v!==null&&(v.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let U=null;function Z(j,oe){if(_=oe.getViewerPose(m||f),T=oe,_!==null){const ge=_.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let fe=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let Re=0;Re<ge.length;Re++){const Xe=ge[Re];let Mt=null;if(S!==null)Mt=S.getViewport(Xe);else{const Tt=y.getViewSubImage(v,Xe);Mt=Tt.viewport,Re===0&&(e.setRenderTargetTextures(b,Tt.colorTexture,v.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(b))}let ut=P[Re];ut===void 0&&(ut=new $n,ut.layers.enable(Re),ut.viewport=new zt,P[Re]=ut),ut.matrix.fromArray(Xe.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Xe.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Re===0&&(w.matrix.copy(ut.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(ut)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Re=y.getDepthInformation(ge[0]);Re&&Re.isValid&&Re.texture&&R.init(e,Re,a.renderState)}}for(let ge=0;ge<L.length;ge++){const fe=C[ge],Te=L[ge];fe!==null&&Te!==void 0&&Te.update(fe,oe,m||f)}U&&U(j,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),T=null}const xe=new Cg;xe.setAnimationLoop(Z),this.setAnimationLoop=function(j){U=j},this.dispose=function(){}}}const Yr=new Yi,OM=new Vt;function kM(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,wg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,b,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),y(x,g)):g.isMeshPhongMaterial?(u(x,g),_(x,g)):g.isMeshStandardMaterial?(u(x,g),v(x,g),g.isMeshPhysicalMaterial&&S(x,g,C)):g.isMeshMatcapMaterial?(u(x,g),T(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),R(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(f(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?p(x,g,b,L):g.isSpriteMaterial?m(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Ln&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Ln&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const b=e.get(g),L=b.envMap,C=b.envMapRotation;L&&(x.envMap.value=L,Yr.copy(C),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),x.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Yr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function p(x,g,b,L){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*b,x.scale.value=L*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function y(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function v(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function S(x,g,b){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function R(x,g){const b=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function BM(s,e,t,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const C=L.program;r.uniformBlockBinding(b,C)}function m(b,L){let C=a[b.id];C===void 0&&(T(b),C=_(b),a[b.id]=C,b.addEventListener("dispose",x));const Y=L.program;r.updateUBOMapping(b,Y);const F=e.render.frame;u[b.id]!==F&&(v(b),u[b.id]=F)}function _(b){const L=y();b.__bindingPointIndex=L;const C=s.createBuffer(),Y=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,Y,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function y(){for(let b=0;b<d;b++)if(f.indexOf(b)===-1)return f.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const L=a[b.id],C=b.uniforms,Y=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,I=C.length;F<I;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,w=k.length;P<w;P++){const B=k[P];if(S(B,F,P,Y)===!0){const re=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let he=0;he<ee.length;he++){const ae=ee[he],ce=R(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,re+ue,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,ue),ue+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,L,C,Y){const F=b.value,I=L+"_"+C;if(Y[I]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[I]=F:Y[I]=F.clone(),!0;{const k=Y[I];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return Y[I]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function T(b){const L=b.uniforms;let C=0;const Y=16;for(let I=0,k=L.length;I<k;I++){const P=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,B=P.length;w<B;w++){const re=P[w],ee=Array.isArray(re.value)?re.value:[re.value];for(let ue=0,he=ee.length;ue<he;ue++){const ae=ee[ue],ce=R(ae),z=C%Y,le=z%ce.boundary,$=z+le;C+=le,$!==0&&Y-$<ce.storage&&(C+=Y-$),re.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=C,C+=ce.storage}}}const F=C%Y;return F>0&&(C+=Y-F),b.__size=C,b.__cache={},this}function R(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function x(b){const L=b.target;L.removeEventListener("dispose",x);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const b in a)s.deleteBuffer(a[b]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class zM{constructor(e={}){const{canvas:t=R0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),R=new Int32Array(4);let x=null,g=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Tr,this.toneMappingExposure=1;const C=this;let Y=!1,F=0,I=0,k=null,P=-1,w=null;const B=new zt,re=new zt;let ee=null;const ue=new St(0);let he=0,ae=t.width,ce=t.height,z=1,le=null,$=null;const U=new zt(0,0,ae,ce),Z=new zt(0,0,ae,ce);let xe=!1;const j=new cd;let oe=!1,ge=!1;const fe=new Vt,Te=new Vt,Re=new J,Xe=new zt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Tt(){return k===null?z:1}let G=r;function rn(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),G===null){const W="webgl2";if(G=rn(W,A),G===null)throw rn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let nt,at,Ye,Rt,je,D,M,Q,me,ve,de,Ve,Ce,Ne,ct,Ee,Fe,Ze,Qe,Oe,ft,it,At,H;function Pe(){nt=new XS(G),nt.init(),it=new bM(G,nt),at=new BS(G,nt,e,it),Ye=new RM(G,nt),at.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Rt=new jS(G),je=new dM,D=new PM(G,nt,Ye,je,at,it,Rt),M=new VS(C),Q=new WS(C),me=new ty(G),At=new OS(G,me),ve=new qS(G,me,Rt,At),de=new KS(G,ve,me,Rt),Qe=new $S(G,at,D),Ee=new zS(je),Ve=new fM(C,M,Q,nt,at,At,Ee),Ce=new kM(C,je),Ne=new pM,ct=new xM(nt),Ze=new FS(C,M,Q,Ye,de,S,p),Fe=new wM(C,de,at),H=new BM(G,Rt,at,Ye),Oe=new kS(G,nt,Rt),ft=new YS(G,nt,Rt),Rt.programs=Ve.programs,C.capabilities=at,C.extensions=nt,C.properties=je,C.renderLists=Ne,C.shadowMap=Fe,C.state=Ye,C.info=Rt}Pe();const se=new FM(C,G);this.xr=se,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(ae,ce,!1))},this.getSize=function(A){return A.set(ae,ce)},this.setSize=function(A,W,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ce=W,t.width=Math.floor(A*z),t.height=Math.floor(W*z),ne===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ae*z,ce*z).floor()},this.setDrawingBufferSize=function(A,W,ne){ae=A,ce=W,z=ne,t.width=Math.floor(A*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,W,ne,ie){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,W,ne,ie),Ye.viewport(B.copy(U).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,W,ne,ie){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,W,ne,ie),Ye.scissor(re.copy(Z).multiplyScalar(z).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){Ye.setScissorTest(xe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,W=!0,ne=!0){let ie=0;if(A){let X=!1;if(k!==null){const Ae=k.texture.format;X=Ae===ld||Ae===ad||Ae===od}if(X){const Ae=k.texture.type,Me=Ae===qi||Ae===es||Ae===Ho||Ae===Ys||Ae===rd||Ae===sd,He=Ze.getClearColor(),Be=Ze.getClearAlpha(),Je=He.r,tt=He.g,Ge=He.b;Me?(T[0]=Je,T[1]=tt,T[2]=Ge,T[3]=Be,G.clearBufferuiv(G.COLOR,0,T)):(R[0]=Je,R[1]=tt,R[2]=Ge,R[3]=Be,G.clearBufferiv(G.COLOR,0,R))}else ie|=G.COLOR_BUFFER_BIT}W&&(ie|=G.DEPTH_BUFFER_BIT),ne&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),ct.dispose(),je.dispose(),M.dispose(),Q.dispose(),de.dispose(),At.dispose(),H.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",ns),se.removeEventListener("sessionend",$i),wi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=Rt.autoReset,W=Fe.enabled,ne=Fe.autoUpdate,ie=Fe.needsUpdate,X=Fe.type;Pe(),Rt.autoReset=A,Fe.enabled=W,Fe.autoUpdate=ne,Fe.needsUpdate=ie,Fe.type=X}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),Dt(W)}function Dt(A){qt(A),je.remove(A)}function qt(A){const W=je.get(A).programs;W!==void 0&&(W.forEach(function(ne){Ve.releaseProgram(ne)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ne,ie,X,Ae){W===null&&(W=Mt);const Me=X.isMesh&&X.matrixWorld.determinant()<0,He=Ko(A,W,ne,ie,X);Ye.setMaterial(ie,Me);let Be=ne.index,Je=1;if(ie.wireframe===!0){if(Be=ve.getWireframeAttribute(ne),Be===void 0)return;Je=2}const tt=ne.drawRange,Ge=ne.attributes.position;let pt=tt.start*Je,wt=(tt.start+tt.count)*Je;Ae!==null&&(pt=Math.max(pt,Ae.start*Je),wt=Math.min(wt,(Ae.start+Ae.count)*Je)),Be!==null?(pt=Math.max(pt,0),wt=Math.min(wt,Be.count)):Ge!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,Ge.count));const ht=wt-pt;if(ht<0||ht===1/0)return;At.setup(X,ie,He,ne,Be);let an,st=Oe;if(Be!==null&&(an=me.get(Be),st=ft,st.setIndex(an)),X.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*Tt()),st.setMode(G.LINES)):st.setMode(G.TRIANGLES);else if(X.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Tt()),X.isLineSegments?st.setMode(G.LINES):X.isLineLoop?st.setMode(G.LINE_LOOP):st.setMode(G.LINE_STRIP)}else X.isPoints?st.setMode(G.POINTS):X.isSprite&&st.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,Zn=X._multiDrawCounts,yt=X._multiDrawCount,ln=Be?me.get(Be).bytesPerElement:1,Qn=je.get(ie).currentProgram.getUniforms();for(let Yt=0;Yt<yt;Yt++)Qn.setValue(G,"_gl_DrawID",Yt),st.render(qe[Yt]/ln,Zn[Yt])}else if(X.isInstancedMesh)st.renderInstances(pt,ht,X.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Zn=Math.min(ne.instanceCount,qe);st.renderInstances(pt,ht,Zn)}else st.render(pt,ht)};function gt(A,W,ne){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,is(A,W,ne),A.side=Ar,A.needsUpdate=!0,is(A,W,ne),A.side=Hi):is(A,W,ne)}this.compile=function(A,W,ne=null){ne===null&&(ne=A),g=ct.get(ne),g.init(W),L.push(g),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==ne&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const ie=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Me=0;Me<Ae.length;Me++){const He=Ae[Me];gt(He,ne,X),ie.add(He)}else gt(Ae,ne,X),ie.add(Ae)}),L.pop(),g=null,ie},this.compileAsync=function(A,W,ne=null){const ie=this.compile(A,W,ne);return new Promise(X=>{function Ae(){if(ie.forEach(function(Me){je.get(Me).currentProgram.isReady()&&ie.delete(Me)}),ie.size===0){X(A);return}setTimeout(Ae,10)}nt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Sn=null;function gn(A){Sn&&Sn(A)}function ns(){wi.stop()}function $i(){wi.start()}const wi=new Cg;wi.setAnimationLoop(gn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){Sn=A,se.setAnimationLoop(A),A===null?wi.stop():wi.start()},se.addEventListener("sessionstart",ns),se.addEventListener("sessionend",$i),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,k),g=ct.get(A,L.length),g.init(W),L.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(Te),ge=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,ge),x=Ne.get(A,b.length),x.init(),b.push(x),se.enabled===!0&&se.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Ai(Ae,W,-1/0,C.sortObjects)}Ai(A,W,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(le,$),ut=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ut&&Ze.addToRenderList(x,A),this.info.render.frame++,oe===!0&&Ee.beginShadows();const ne=g.state.shadowsArray;Fe.render(ne,A,W),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=x.opaque,X=x.transmissive;if(g.setupLights(),W.isArrayCamera){const Ae=W.cameras;if(X.length>0)for(let Me=0,He=Ae.length;Me<He;Me++){const Be=Ae[Me];Pr(ie,X,A,Be)}ut&&Ze.render(A);for(let Me=0,He=Ae.length;Me<He;Me++){const Be=Ae[Me];Cr(x,A,Be,Be.viewport)}}else X.length>0&&Pr(ie,X,A,W),ut&&Ze.render(A),Cr(x,A,W);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(C,A,W),At.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],oe===!0&&Ee.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function Ai(A,W,ne,ie){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){ie&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Me=de.update(A),He=A.material;He.visible&&x.push(A,Me,He,ne,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Me=de.update(A),He=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Xe.copy(Me.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(He)){const Be=Me.groups;for(let Je=0,tt=Be.length;Je<tt;Je++){const Ge=Be[Je],pt=He[Ge.materialIndex];pt&&pt.visible&&x.push(A,Me,pt,ne,Xe.z,Ge)}}else He.visible&&x.push(A,Me,He,ne,Xe.z,null)}}const Ae=A.children;for(let Me=0,He=Ae.length;Me<He;Me++)Ai(Ae[Me],W,ne,ie)}function Cr(A,W,ne,ie){const X=A.opaque,Ae=A.transmissive,Me=A.transparent;g.setupLightsView(ne),oe===!0&&Ee.setGlobalState(C.clippingPlanes,ne),ie&&Ye.viewport(B.copy(ie)),X.length>0&&Ki(X,W,ne),Ae.length>0&&Ki(Ae,W,ne),Me.length>0&&Ki(Me,W,ne),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Pr(A,W,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new ts(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Go:qi,minFilter:Jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[ie.id],Me=ie.viewport||B;Ae.setSize(Me.z,Me.w);const He=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(ue),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ut&&Ze.render(ne);const Be=C.toneMapping;C.toneMapping=Tr;const Je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),oe===!0&&Ee.setGlobalState(C.clippingPlanes,ie),Ki(A,ne,ie),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),nt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,pt=W.length;Ge<pt;Ge++){const wt=W[Ge],ht=wt.object,an=wt.geometry,st=wt.material,qe=wt.group;if(st.side===Hi&&ht.layers.test(ie.layers)){const Zn=st.side;st.side=Ln,st.needsUpdate=!0,jo(ht,ne,ie,an,st,qe),st.side=Zn,st.needsUpdate=!0,tt=!0}}tt===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}C.setRenderTarget(He),C.setClearColor(ue,he),Je!==void 0&&(ie.viewport=Je),C.toneMapping=Be}function Ki(A,W,ne){const ie=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ae=A.length;X<Ae;X++){const Me=A[X],He=Me.object,Be=Me.geometry,Je=ie===null?Me.material:ie,tt=Me.group;He.layers.test(ne.layers)&&jo(He,W,ne,Be,Je,tt)}}function jo(A,W,ne,ie,X,Ae){A.onBeforeRender(C,W,ne,ie,X,Ae),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,W,ne,ie,A,Ae),X.transparent===!0&&X.side===Hi&&X.forceSinglePass===!1?(X.side=Ln,X.needsUpdate=!0,C.renderBufferDirect(ne,W,ie,X,A,Ae),X.side=Ar,X.needsUpdate=!0,C.renderBufferDirect(ne,W,ie,X,A,Ae),X.side=Hi):C.renderBufferDirect(ne,W,ie,X,A,Ae),A.onAfterRender(C,W,ne,ie,X,Ae)}function is(A,W,ne){W.isScene!==!0&&(W=Mt);const ie=je.get(A),X=g.state.lights,Ae=g.state.shadowsArray,Me=X.state.version,He=Ve.getParameters(A,X.state,Ae,W,ne),Be=Ve.getProgramCacheKey(He);let Je=ie.programs;ie.environment=A.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(A.isMeshStandardMaterial?Q:M).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",rt),Je=new Map,ie.programs=Je);let tt=Je.get(Be);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Me)return di(A,He),tt}else He.uniforms=Ve.getUniforms(A),A.onBeforeCompile(He,C),tt=Ve.acquireProgram(He,Be),Je.set(Be,tt),ie.uniforms=He.uniforms;const Ge=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),di(A,He),ie.needsLights=Wl(A),ie.lightsStateVersion=Me,ie.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function $o(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Pl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function di(A,W){const ne=je.get(A);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Ko(A,W,ne,ie,X){W.isScene!==!0&&(W=Mt),D.resetTextureUnits();const Ae=W.fog,Me=ie.isMeshStandardMaterial?W.environment:null,He=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ks,Be=(ie.isMeshStandardMaterial?Q:M).get(ie.envMap||Me),Je=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ge=!!ne.morphAttributes.position,pt=!!ne.morphAttributes.normal,wt=!!ne.morphAttributes.color;let ht=Tr;ie.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ht=C.toneMapping);const an=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,st=an!==void 0?an.length:0,qe=je.get(ie),Zn=g.state.lights;if(oe===!0&&(ge===!0||A!==w)){const _n=A===w&&ie.id===P;Ee.setState(ie,A,_n)}let yt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Zn.state.version||qe.outputColorSpace!==He||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==Be||ie.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==tt||qe.morphTargets!==Ge||qe.morphNormals!==pt||qe.morphColors!==wt||qe.toneMapping!==ht||qe.morphTargetsCount!==st)&&(yt=!0):(yt=!0,qe.__version=ie.version);let ln=qe.currentProgram;yt===!0&&(ln=is(ie,W,X));let Qn=!1,Yt=!1,hi=!1;const bt=ln.getUniforms(),Bn=qe.uniforms;if(Ye.useProgram(ln.program)&&(Qn=!0,Yt=!0,hi=!0),ie.id!==P&&(P=ie.id,Yt=!0),Qn||w!==A){Ye.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),P0(fe),b0(fe),bt.setValue(G,"projectionMatrix",fe)):bt.setValue(G,"projectionMatrix",A.projectionMatrix),bt.setValue(G,"viewMatrix",A.matrixWorldInverse);const zn=bt.map.cameraPosition;zn!==void 0&&zn.setValue(G,Re.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Yt=!0,hi=!0)}if(X.isSkinnedMesh){bt.setOptional(G,X,"bindMatrix"),bt.setOptional(G,X,"bindMatrixInverse");const _n=X.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),bt.setValue(G,"boneTexture",_n.boneTexture,D))}X.isBatchedMesh&&(bt.setOptional(G,X,"batchingTexture"),bt.setValue(G,"batchingTexture",X._matricesTexture,D),bt.setOptional(G,X,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",X._indirectTexture,D),bt.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",X._colorsTexture,D));const Ri=ne.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Qe.update(X,ne,ln),(Yt||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,bt.setValue(G,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Bn.envMap.value=Be,Bn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),Yt&&(bt.setValue(G,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Zo(Bn,hi),Ae&&ie.fog===!0&&Ce.refreshFogUniforms(Bn,Ae),Ce.refreshMaterialUniforms(Bn,ie,z,ce,g.state.transmissionRenderTarget[A.id]),Pl.upload(G,$o(qe),Bn,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Pl.upload(G,$o(qe),Bn,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(G,"center",X.center),bt.setValue(G,"modelViewMatrix",X.modelViewMatrix),bt.setValue(G,"normalMatrix",X.normalMatrix),bt.setValue(G,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const _n=ie.uniformsGroups;for(let zn=0,En=_n.length;zn<En;zn++){const Qo=_n[zn];H.update(Qo,ln),H.bind(Qo,ln)}}return ln}function Zo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Wl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,ne){je.get(A.texture).__webglTexture=W,je.get(A.depthTexture).__webglTexture=ne;const ie=je.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ne=je.get(A);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ne=0){k=A,F=W,I=ne;let ie=!0,X=null,Ae=!1,Me=!1;if(A){const Be=je.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(G.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Be.__hasExternalTextures)D.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Me=!0);const tt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?X=tt[W][ne]:X=tt[W],Ae=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?X=je.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[ne]:X=tt,B.copy(A.viewport),re.copy(A.scissor),ee=A.scissorTest}else B.copy(U).multiplyScalar(z).floor(),re.copy(Z).multiplyScalar(z).floor(),ee=xe;if(Ye.bindFramebuffer(G.FRAMEBUFFER,X)&&ie&&Ye.drawBuffers(A,X),Ye.viewport(B),Ye.scissor(re),Ye.setScissorTest(ee),Ae){const Be=je.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ne)}else if(Me){const Be=je.get(A.texture),Je=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,Je)}P=-1},this.readRenderTargetPixels=function(A,W,ne,ie,X,Ae,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(He=He[Me]),He){Ye.bindFramebuffer(G.FRAMEBUFFER,He);try{const Be=A.texture,Je=Be.format,tt=Be.type;if(!at.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ie&&ne>=0&&ne<=A.height-X&&G.readPixels(W,ne,ie,X,it.convert(Je),it.convert(tt),Ae)}finally{const Be=k!==null?je.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,W,ne,ie,X,Ae,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(He=He[Me]),He){const Be=A.texture,Je=Be.format,tt=Be.type;if(!at.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-ie&&ne>=0&&ne<=A.height-X){Ye.bindFramebuffer(G.FRAMEBUFFER,He);const Ge=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ge),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),G.readPixels(W,ne,ie,X,it.convert(Je),it.convert(tt),0);const pt=k!==null?je.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,pt);const wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await C0(G,wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ge),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(Ge),G.deleteSync(wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ne=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(A.image.width*ie),Ae=Math.floor(A.image.height*ie),Me=W!==null?W.x:0,He=W!==null?W.y:0;D.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,Me,He,X,Ae),Ye.unbindTexture()},this.copyTextureToTexture=function(A,W,ne=null,ie=null,X=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,ne=null);let Ae,Me,He,Be,Je,tt,Ge,pt,wt;const ht=A.isCompressedTexture?A.mipmaps[X]:A.image;ne!==null?(Ae=ne.max.x-ne.min.x,Me=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,Je=ne.min.y,tt=ne.isBox3?ne.min.z:0):(Ae=ht.width,Me=ht.height,He=ht.depth||1,Be=0,Je=0,tt=0),ie!==null?(Ge=ie.x,pt=ie.y,wt=ie.z):(Ge=0,pt=0,wt=0);const an=it.convert(W.format),st=it.convert(W.type);let qe;W.isData3DTexture?(D.setTexture3D(W,0),qe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),qe=G.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Zn=G.getParameter(G.UNPACK_ROW_LENGTH),yt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ln=G.getParameter(G.UNPACK_SKIP_PIXELS),Qn=G.getParameter(G.UNPACK_SKIP_ROWS),Yt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Be),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,tt);const hi=A.isDataArrayTexture||A.isData3DTexture,bt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=je.get(A),Ri=je.get(W),_n=je.get(Bn.__renderTarget),zn=je.get(Ri.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let En=0;En<He;En++)hi&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(A).__webglTexture,X,tt+En),A.isDepthTexture?(bt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(W).__webglTexture,X,wt+En),G.blitFramebuffer(Be,Je,Ae,Me,Ge,pt,Ae,Me,G.DEPTH_BUFFER_BIT,G.NEAREST)):bt?G.copyTexSubImage3D(qe,X,Ge,pt,wt+En,Be,Je,Ae,Me):G.copyTexSubImage2D(qe,X,Ge,pt,wt+En,Be,Je,Ae,Me);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(qe,X,Ge,pt,wt,Ae,Me,He,an,st,ht.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,X,Ge,pt,wt,Ae,Me,He,an,ht.data):G.texSubImage3D(qe,X,Ge,pt,wt,Ae,Me,He,an,st,ht):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,Ge,pt,Ae,Me,an,st,ht.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,Ge,pt,ht.width,ht.height,an,ht.data):G.texSubImage2D(G.TEXTURE_2D,X,Ge,pt,Ae,Me,an,st,ht);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ln),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt),X===0&&W.generateMipmaps&&G.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ne=null,ie=null,X=0){return A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ne,ie,X)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,I=0,k=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}class VM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd extends Rr{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const u=[],f=[];d(a),m(r),_(),this.setAttribute("position",new Ei(u,3)),this.setAttribute("normal",new Ei(u.slice(),3)),this.setAttribute("uv",new Ei(f,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(b){const L=new J,C=new J,Y=new J;for(let F=0;F<t.length;F+=3)S(t[F+0],L),S(t[F+1],C),S(t[F+2],Y),p(L,C,Y,b)}function p(b,L,C,Y){const F=Y+1,I=[];for(let k=0;k<=F;k++){I[k]=[];const P=b.clone().lerp(C,k/F),w=L.clone().lerp(C,k/F),B=F-k;for(let re=0;re<=B;re++)re===0&&k===F?I[k][re]=P:I[k][re]=P.clone().lerp(w,re/B)}for(let k=0;k<F;k++)for(let P=0;P<2*(F-k)-1;P++){const w=Math.floor(P/2);P%2===0?(v(I[k][w+1]),v(I[k+1][w]),v(I[k][w])):(v(I[k][w+1]),v(I[k+1][w+1]),v(I[k+1][w]))}}function m(b){const L=new J;for(let C=0;C<u.length;C+=3)L.x=u[C+0],L.y=u[C+1],L.z=u[C+2],L.normalize().multiplyScalar(b),u[C+0]=L.x,u[C+1]=L.y,u[C+2]=L.z}function _(){const b=new J;for(let L=0;L<u.length;L+=3){b.x=u[L+0],b.y=u[L+1],b.z=u[L+2];const C=x(b)/2/Math.PI+.5,Y=g(b)/Math.PI+.5;f.push(C,1-Y)}T(),y()}function y(){for(let b=0;b<f.length;b+=6){const L=f[b+0],C=f[b+2],Y=f[b+4],F=Math.max(L,C,Y),I=Math.min(L,C,Y);F>.9&&I<.1&&(L<.2&&(f[b+0]+=1),C<.2&&(f[b+2]+=1),Y<.2&&(f[b+4]+=1))}}function v(b){u.push(b.x,b.y,b.z)}function S(b,L){const C=b*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function T(){const b=new J,L=new J,C=new J,Y=new J,F=new Et,I=new Et,k=new Et;for(let P=0,w=0;P<u.length;P+=9,w+=6){b.set(u[P+0],u[P+1],u[P+2]),L.set(u[P+3],u[P+4],u[P+5]),C.set(u[P+6],u[P+7],u[P+8]),F.set(f[w+0],f[w+1]),I.set(f[w+2],f[w+3]),k.set(f[w+4],f[w+5]),Y.copy(b).add(L).add(C).divideScalar(3);const B=x(Y);R(F,w+0,b,B),R(I,w+2,L,B),R(k,w+4,C,B)}}function R(b,L,C,Y){Y<0&&b.x===1&&(f[L]=b.x-1),C.x===0&&C.z===0&&(f[L]=Y/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dd(e.vertices,e.indices,e.radius,e.details)}}class hd extends dd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,u,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hd(e.radius,e.detail)}}class Ig extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const rf=new Vt,jm=new J,$m=new J;class HM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),$m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($m),t.updateMatrixWorld(),rf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GM extends HM{constructor(){super(new Pg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WM extends Ig{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new GM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XM extends Ig{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);const qM=`uniform vec3 uColorBottom;\r
uniform vec3 uColorMiddle;\r
uniform vec3 uColorTop;\r
\r
varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vDisplacement;\r
\r
void main() {\r
    float height = clamp(vNormal.y * 0.5 + 0.5, 0.0, 1.0);\r
    vec3 lowerGradient = mix(uColorBottom, uColorMiddle, smoothstep(0.0, 0.55, height));\r
    vec3 gradient = mix(lowerGradient, uColorTop, smoothstep(0.45, 1.0, height));\r
    float brightness = mix(0.35, 1.0, clamp(vDisplacement, 0.0, 1.0));\r
    gl_FragColor = vec4(gradient * brightness, 1.0);\r
}\r
`,YM=`uniform float uTime;\r
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
`;function jM(){const s=Ft.useRef(null);return Ft.useEffect(()=>{const e=s.current,t=new VM,r=new $n(75,window.innerWidth/window.innerHeight,.1,1e3),a=new zM({canvas:e,antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),a.setSize(window.innerWidth,window.innerHeight);const u=new WM("#ffffff",.75);u.position.set(5,5,5);const f=new XM("#ffffff",.2);t.add(u,f);const d=new hd(.61,50),p=new ji({vertexShader:YM,fragmentShader:qM,uniforms:{uTime:{value:0},uColorBottom:{value:new St("#064d40")},uColorMiddle:{value:new St("#18d878")},uColorTop:{value:new St("#b5ff45")}}}),m=new xi(d,p);t.add(m);const _={current:!1},y=g=>{var b;_.current=!!((b=g.detail)!=null&&b.speaking)};window.addEventListener("jarvis:speaking",y),r.position.z=3;const v=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),a.setSize(window.innerWidth,window.innerHeight)};let S,T=0,R=.002;const x=()=>{p.uniforms.uTime.value=T;const g=_.current?.008:.002;R+=(g-R)*.08,m.rotation.z-=.005*(R/.002);const b=_.current?1+Math.sin(T*7.5)*.075:1,L=m.scale.x+(b-m.scale.x)*.12;m.scale.setScalar(L),T+=R,S=window.requestAnimationFrame(x),a.render(t,r)};return window.addEventListener("resize",v),x(),()=>{window.cancelAnimationFrame(S),window.removeEventListener("resize",v),window.removeEventListener("jarvis:speaking",y),d.dispose(),p.dispose(),a.dispose()}},[]),nn.jsx("canvas",{ref:s,className:"orb-canvas"})}const Ti=Object.create(null);Ti.open="0";Ti.close="1";Ti.ping="2";Ti.pong="3";Ti.message="4";Ti.upgrade="5";Ti.noop="6";const bl=Object.create(null);Object.keys(Ti).forEach(s=>{bl[Ti[s]]=s});const Kf={type:"error",data:"parser error"},Fg=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Og=typeof ArrayBuffer=="function",kg=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,pd=({type:s,data:e},t,r)=>Fg&&e instanceof Blob?t?r(e):Km(e,r):Og&&(e instanceof ArrayBuffer||kg(e))?t?r(e):Km(new Blob([e]),r):r(Ti[s]+(e||"")),Km=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function Zm(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let sf;function $M(s,e){if(Fg&&s.data instanceof Blob)return s.data.arrayBuffer().then(Zm).then(e);if(Og&&(s.data instanceof ArrayBuffer||kg(s.data)))return e(Zm(s.data));pd(s,!1,t=>{sf||(sf=new TextEncoder),e(sf.encode(t))})}const Qm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Qm.length;s++)Vo[Qm.charCodeAt(s)]=s;const KM=s=>{let e=s.length*.75,t=s.length,r,a=0,u,f,d,p;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),_=new Uint8Array(m);for(r=0;r<t;r+=4)u=Vo[s.charCodeAt(r)],f=Vo[s.charCodeAt(r+1)],d=Vo[s.charCodeAt(r+2)],p=Vo[s.charCodeAt(r+3)],_[a++]=u<<2|f>>4,_[a++]=(f&15)<<4|d>>2,_[a++]=(d&3)<<6|p&63;return m},ZM=typeof ArrayBuffer=="function",md=(s,e)=>{if(typeof s!="string")return{type:"message",data:Bg(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:QM(s.substring(1),e)}:bl[t]?s.length>1?{type:bl[t],data:s.substring(1)}:{type:bl[t]}:Kf},QM=(s,e)=>{if(ZM){const t=KM(s);return Bg(t,e)}else return{base64:!0,data:s}},Bg=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},zg="",JM=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((u,f)=>{pd(u,!1,d=>{r[f]=d,++a===t&&e(r.join(zg))})})},eT=(s,e)=>{const t=s.split(zg),r=[];for(let a=0;a<t.length;a++){const u=md(t[a],e);if(r.push(u),u.type==="error")break}return r};function tT(){return new TransformStream({transform(s,e){$M(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const u=new DataView(a.buffer);u.setUint8(0,126),u.setUint16(1,r)}else{a=new Uint8Array(9);const u=new DataView(a.buffer);u.setUint8(0,127),u.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let of;function El(s){return s.reduce((e,t)=>e+t.length,0)}function Ml(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function nT(s,e){of||(of=new TextDecoder);const t=[];let r=0,a=-1,u=!1;return new TransformStream({transform(f,d){for(t.push(f);;){if(r===0){if(El(t)<1)break;const p=Ml(t,1);u=(p[0]&128)===128,a=p[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(El(t)<2)break;const p=Ml(t,2);a=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),r=3}else if(r===2){if(El(t)<8)break;const p=Ml(t,8),m=new DataView(p.buffer,p.byteOffset,p.length),_=m.getUint32(0);if(_>Math.pow(2,21)-1){d.enqueue(Kf);break}a=_*Math.pow(2,32)+m.getUint32(4),r=3}else{if(El(t)<a)break;const p=Ml(t,a);d.enqueue(md(u?p:of.decode(p),e)),r=0}if(a===0||a>s){d.enqueue(Kf);break}}}})}const Vg=4;function Xt(s){if(s)return iT(s)}function iT(s){for(var e in Xt.prototype)s[e]=Xt.prototype[e];return s}Xt.prototype.on=Xt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};Xt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};Xt.prototype.off=Xt.prototype.removeListener=Xt.prototype.removeAllListeners=Xt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};Xt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};Xt.prototype.emitReserved=Xt.prototype.emit;Xt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};Xt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const Hl=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Kn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),rT="arraybuffer";function Hg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const sT=Kn.setTimeout,oT=Kn.clearTimeout;function Gl(s,e){e.useNativeTimers?(s.setTimeoutFn=sT.bind(Kn),s.clearTimeoutFn=oT.bind(Kn)):(s.setTimeoutFn=Kn.setTimeout.bind(Kn),s.clearTimeoutFn=Kn.clearTimeout.bind(Kn))}const aT=1.33;function lT(s){return typeof s=="string"?uT(s):Math.ceil((s.byteLength||s.size)*aT)}function uT(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Gg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function cT(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function fT(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let u=t[r].split("=");e[decodeURIComponent(u[0])]=decodeURIComponent(u[1])}return e}class dT extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class gd extends Xt{constructor(e){super(),this.writable=!1,Gl(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new dT(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=md(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=cT(e);return t.length?"?"+t:""}}class hT extends gd{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};eT(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,JM(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Gg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Wg=!1;try{Wg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const pT=Wg;function mT(){}class gT extends hT{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,u)=>{this.onError("xhr post error",a,u)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class Mi extends Xt{constructor(e,t,r){super(),this.createRequest=e,Gl(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=Hg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=Mi.requestsCount++,Mi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=mT,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Mi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Mi.requestsCount=0;Mi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Jm);else if(typeof addEventListener=="function"){const s="onpagehide"in Kn?"pagehide":"unload";addEventListener(s,Jm,!1)}}function Jm(){for(let s in Mi.requests)Mi.requests.hasOwnProperty(s)&&Mi.requests[s].abort()}const _T=(function(){const s=Xg({xdomain:!1});return s&&s.responseType!==null})();class vT extends gT{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=_T&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mi(Xg,this.uri(),e)}}function Xg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||pT))return new XMLHttpRequest}catch{}if(!e)try{return new Kn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const qg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class yT extends gd{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=qg?{}:Hg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;pd(r,this.supportsBinary,u=>{try{this.doWrite(r,u)}catch{}a&&Hl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Gg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const af=Kn.WebSocket||Kn.MozWebSocket;class xT extends yT{createSocket(e,t,r){return qg?new af(e,t,r):t?new af(e,t):new af(e)}doWrite(e,t){this.ws.send(t)}}class ST extends gd{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=nT(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=tT();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const u=()=>{r.read().then(({done:d,value:p})=>{d||(this.onPacket(p),u())}).catch(d=>{})};u();const f={type:"open"};this.query.sid&&(f.data=`{"sid":"${this.query.sid}"}`),this._writer.write(f).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&Hl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ET={websocket:xT,webtransport:ST,polling:vT},MT=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,TT=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Zf(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=MT.exec(s||""),u={},f=14;for(;f--;)u[TT[f]]=a[f]||"";return t!=-1&&r!=-1&&(u.source=e,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=wT(u,u.path),u.queryKey=AT(u,u.query),u}function wT(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function AT(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,u){a&&(t[a]=u)}),t}const Qf=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ll=[];Qf&&addEventListener("offline",()=>{Ll.forEach(s=>s())},!1);class wr extends Xt{constructor(e,t){if(super(),this.binaryType=rT,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=Zf(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Zf(t.host).host);Gl(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(r=>{const a=r.prototype.name;this.transports.push(a),this._transportsByName[a]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=fT(this.opts.query)),Qf&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ll.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Vg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&wr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",wr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=lT(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Hl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const u={type:e,data:t,options:r};this.emitReserved("packetCreate",u),this.writeBuffer.push(u),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(wr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Qf&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Ll.indexOf(this._offlineEventListener);r!==-1&&Ll.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}wr.protocol=Vg;class RT extends wr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;wr.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",y=>{if(!r)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;wr.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const v=new Error("probe error");v.transport=t.name,this.emitReserved("upgradeError",v)}}))};function u(){r||(r=!0,_(),t.close(),t=null)}const f=y=>{const v=new Error("probe error: "+y);v.transport=t.name,u(),this.emitReserved("upgradeError",v)};function d(){f("transport closed")}function p(){f("socket closed")}function m(y){t&&y.name!==t.name&&u()}const _=()=>{t.removeListener("open",a),t.removeListener("error",f),t.removeListener("close",d),this.off("close",p),this.off("upgrading",m)};t.once("open",a),t.once("error",f),t.once("close",d),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}let CT=class extends RT{constructor(e,t={}){const r=typeof e=="object",a=r?{...e}:{...t};(!a.transports||a.transports&&typeof a.transports[0]=="string")&&(a.transports=(a.transports||["polling","websocket","webtransport"]).map(u=>ET[u]).filter(u=>!!u)),super(r?a:e,a)}};function PT(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Zf(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const u=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+u+":"+r.port+e,r.href=r.protocol+"://"+u+(t&&t.port===r.port?"":":"+r.port),r}const bT=typeof ArrayBuffer=="function",LT=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Yg=Object.prototype.toString,DT=typeof Blob=="function"||typeof Blob<"u"&&Yg.call(Blob)==="[object BlobConstructor]",UT=typeof File=="function"||typeof File<"u"&&Yg.call(File)==="[object FileConstructor]";function _d(s){return bT&&(s instanceof ArrayBuffer||LT(s))||DT&&s instanceof Blob||UT&&s instanceof File}function Dl(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Dl(s[t]))return!0;return!1}if(_d(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Dl(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Dl(s[t]))return!0;return!1}function NT(s){const e=[],t=s.data,r=s;return r.data=Ul(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Ul(s,e,t){if(!s)return s;if(_d(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Ul(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Ul(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Ul(s[a],e));return r}return s}function IT(s,e){return s.data=Jf(s.data,e),delete s.attachments,s}function Jf(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Jf(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Jf(s[t],e));return s}const FT=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var mt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(mt||(mt={}));class OT{constructor(e){this.replacer=e}encode(e){return(e.type===mt.EVENT||e.type===mt.ACK)&&Dl(e)?this.encodeAsBinary({type:e.type===mt.EVENT?mt.BINARY_EVENT:mt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===mt.BINARY_EVENT||e.type===mt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=NT(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class vd extends Xt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===mt.BINARY_EVENT;r||t.type===mt.BINARY_ACK?(t.type=r?mt.EVENT:mt.ACK,this.reconstructor=new kT(t)):super.emitReserved("decoded",t)}else if(_d(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(mt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===mt.BINARY_EVENT||r.type===mt.BINARY_ACK){const u=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const f=e.substring(u,t);if(f!=Number(f)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const d=Number(f);if(!BT(d)||d<1)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=d}if(e.charAt(t+1)==="/"){const u=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(u,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const u=t+1;for(;++t;){const f=e.charAt(t);if(f==null||Number(f)!=f){--t;break}if(t===e.length)break}r.id=Number(e.substring(u,t+1))}if(e.charAt(++t)){const u=this.tryParse(e.substr(t));if(vd.isPayloadValid(r.type,u))r.data=u;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case mt.CONNECT:return eg(t);case mt.DISCONNECT:return t===void 0;case mt.CONNECT_ERROR:return typeof t=="string"||eg(t);case mt.EVENT:case mt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&FT.indexOf(t[0])===-1);case mt.ACK:case mt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class kT{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=IT(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const BT=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function eg(s){return Object.prototype.toString.call(s)==="[object Object]"}const zT=Object.freeze(Object.defineProperty({__proto__:null,Decoder:vd,Encoder:OT,get PacketType(){return mt}},Symbol.toStringTag,{value:"Module"}));function li(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const VT=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class jg extends Xt{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[li(e,"open",this.onopen.bind(this)),li(e,"packet",this.onpacket.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,u;if(VT.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const f={type:mt.EVENT,data:t};if(f.options={},f.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,y=t.pop();this._registerAckCallback(_,y),f.id=_}const d=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,p=this.connected&&!(!((u=this.io.engine)===null||u===void 0)&&u._hasPingExpired());return this.flags.volatile&&!d||(p?(this.notifyOutgoingListeners(f),this.packet(f)):this.sendBuffer.push(f)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const u=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);t.call(this,new Error("operation has timed out"))},a),f=(...d)=>{this.io.clearTimeoutFn(u),t.apply(this,d)};f.withError=!0,this.acks[e]=f}emitWithAck(e,...t){return new Promise((r,a)=>{const u=(f,d)=>f?a(f):r(d);u.withError=!0,t.push(u),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...u)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...u)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:mt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case mt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case mt.EVENT:case mt.BINARY_EVENT:this.onevent(e);break;case mt.ACK:case mt.BINARY_ACK:this.onack(e);break;case mt.DISCONNECT:this.ondisconnect();break;case mt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:mt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:mt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Js(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Js.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};Js.prototype.reset=function(){this.attempts=0};Js.prototype.setMin=function(s){this.ms=s};Js.prototype.setMax=function(s){this.max=s};Js.prototype.setJitter=function(s){this.jitter=s};class ed extends Xt{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Gl(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Js({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||zT;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new CT(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=li(t,"open",function(){r.onopen(),e&&e()}),u=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},f=li(t,"error",u);if(this._timeout!==!1){const d=this._timeout,p=this.setTimeoutFn(()=>{a(),u(new Error("timeout")),t.close()},d);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(a),this.subs.push(f),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(li(e,"ping",this.onping.bind(this)),li(e,"data",this.ondata.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this)),li(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Hl(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new jg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ko={};function Nl(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=PT(s,e.path||"/socket.io"),r=t.source,a=t.id,u=t.path,f=ko[a]&&u in ko[a].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||f;let p;return d?p=new ed(r,e):(ko[a]||(ko[a]=new ed(r,e)),p=ko[a]),t.query&&!e.query&&(e.query=t.queryKey),p.socket(t.path,e)}Object.assign(Nl,{Manager:ed,Socket:jg,io:Nl,connect:Nl});const tg="https://hologramapi.digimenu.ai",$g={socketServerUrl:tg,ttsUrl:`${tg}/api/tts`},HT=$g.socketServerUrl,GT=$g.ttsUrl,WT=8e4,Kg="jarvis-visitor-session",ng="jarvis-audio-ready";function lf(){return/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)}function XT(){try{return window.localStorage.getItem(Kg)}catch{return null}}function qT(){const s=Ft.useRef(null),e=Ft.useRef(null),t=Ft.useRef(null),r=Ft.useRef(null),a=Ft.useRef(null),u=Ft.useRef(null),f=Ft.useRef(0),d=Ft.useRef(null),p=Ft.useRef(null),m=Ft.useRef(!1),_=Ft.useRef(!1),y=Ft.useRef(!1),v=Ft.useRef(null),S=Ft.useRef(""),T=Ft.useRef(!0),R=Ft.useRef(""),x=Ft.useRef(""),[g,b]=Ft.useState(!1),[L,C]=Ft.useState(""),[Y,F]=Ft.useState(""),[I,k]=Ft.useState(""),P=$=>{_.current=$,window.dispatchEvent(new CustomEvent("jarvis:speaking",{detail:{speaking:$}}))},w=()=>{window.clearTimeout(p.current),ue(),!(lf()||!T.current||m.current)&&(p.current=window.setTimeout(()=>{if(!(!T.current||m.current)){if(e.current&&!e.current.paused){w();return}ue(),z(!0)}},250))},B=()=>{try{return window.localStorage.getItem(ng)==="true"}catch{return!1}},re=()=>{var $;($=r.current)==null||$.abort(),r.current=null,e.current&&(e.current.pause(),e.current.onended=null,e.current.onerror=null,e.current=null),t.current&&(URL.revokeObjectURL(t.current),t.current=null)},ee=async($,U=null)=>{if(!$||!y.current&&!B())return;he(!1),re();const Z=new AbortController;r.current=Z;try{k("");const xe=await fetch(GT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({speech:$,performance:U}),signal:Z.signal});if(!xe.ok){const Te=await xe.json().catch(()=>({}));throw new Error(Te.error||`TTS request failed with HTTP ${xe.status}.`)}if(!(xe.body&&"MediaSource"in window&&MediaSource.isTypeSupported("audio/mpeg"))){const Te=URL.createObjectURL(await xe.blob());t.current=Te;const Re=new Audio(Te);e.current=Re,Re.onplay=()=>P(!0),Re.onended=()=>{P(!1),re(),T.current&&w()},Re.onerror=()=>{P(!1),re(),k("Voice playback failed.")},await Re.play();return}const oe=new MediaSource,ge=URL.createObjectURL(oe);t.current=ge;const fe=new Audio(ge);e.current=fe,fe.onplay=()=>P(!0),fe.onended=()=>{P(!1),re(),T.current&&w()},fe.onerror=()=>{P(!1),re(),k("Voice playback failed.")},await new Promise((Te,Re)=>{let Xe,Mt=!1,ut=!1;const Tt=[],G=()=>{if(!Xe||Xe.updating||Tt.length===0){Mt&&Xe&&!Xe.updating&&Tt.length===0&&oe.readyState==="open"&&oe.endOfStream();return}Xe.appendBuffer(Tt.shift())},rn=async()=>{try{const nt=xe.body.getReader();for(;;){const{done:at,value:Ye}=await nt.read();if(at)break;Ye!=null&&Ye.byteLength&&Tt.push(Ye),G()}Mt=!0,G()}catch(nt){nt.name!=="AbortError"&&Re(nt)}};oe.addEventListener("sourceopen",()=>{try{Xe=oe.addSourceBuffer("audio/mpeg"),Xe.addEventListener("updateend",()=>{!ut&&fe.readyState>=HTMLMediaElement.HAVE_METADATA&&(ut=!0,fe.play().then(Te).catch(Re)),G()}),rn()}catch(nt){Re(nt)}},{once:!0})})}catch(xe){P(!1),xe.name!=="AbortError"&&k(xe.message||"Voice playback failed.")}},ue=()=>{window.clearTimeout(d.current)},he=($=!1)=>{var U;ue(),window.clearTimeout(p.current),$&&(T.current=!1),(U=s.current)==null||U.stop(),m.current=!1,b(!1)},ae=$=>{ue(),d.current=window.setTimeout(()=>{T.current=!1,$.stop(),m.current=!1,b(!1)},WT)};Ft.useEffect(()=>{const $=Nl(HT,{auth:{visitorToken:XT(),timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}});return a.current=$,$.on("visitor:session",({visitorToken:U})=>{if(U){$.auth={...$.auth,visitorToken:U};try{window.localStorage.setItem(Kg,U)}catch{}}}),$.on("server:ready",({greeting:U,error:Z})=>{if(Z){k(Z);return}U&&(k(""),F(U),B()&&window.setTimeout(()=>ee(U),250))}),$.on("connect",()=>{R.current=""}),$.on("connect_error",()=>{const U="Unable to connect to the assistant server. Please check your connection.";k(U),R.current!==U&&(R.current=U,ee(U))}),$.on("ai:delta",({requestId:U,delta:Z})=>{U!==u.current||typeof Z!="string"||F(xe=>xe.startsWith("Thinking")?Z:xe+Z)}),()=>{var U;ue(),window.clearTimeout(p.current),(U=s.current)==null||U.abort(),window.clearTimeout(v.current),re(),P(!1),$.disconnect()}},[]);const ce=$=>{var j;const U=$==null?void 0:$.trim();if(!U||u.current!==null)return;ue(),window.clearTimeout(p.current),(j=s.current)==null||j.stop(),m.current=!1,b(!1),T.current=!0,re();const Z=++f.current;u.current=Z,F("Thinking…");const xe=a.current;if(!(xe!=null&&xe.connected)){F(""),k("Assistant server is not connected.");return}xe.timeout(36e4).emit("ai:prompt",{requestId:Z,responseMode:"operator",messages:[{role:"user",content:U}]},(oe,ge)=>{if(u.current=null,oe){F(""),k("The assistant request timed out.");return}if(!(ge!=null&&ge.ok)){F(""),k((ge==null?void 0:ge.error)||"Grok request failed.");return}const fe=ge.result.data,Te=typeof fe=="string"?fe:fe.speech||fe.reply||JSON.stringify(fe);F(Te),ee(Te,typeof fe=="string"?null:fe.performance)})},z=($=!1,U=!1)=>{if(window.clearTimeout(p.current),m.current)return;const Z=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Z){k("Speech recognition is unavailable in this browser. Use Chrome or Edge.");return}T.current=!0,k(""),S.current="",x.current="",window.clearTimeout(v.current),C(""),F(""),U||(re(),P(!1));const xe=new Z;xe.lang="en-US",xe.interimResults=!lf(),xe.continuous=!lf(),xe.onstart=()=>{m.current=!0,b(!0),ae(xe)},xe.onresult=j=>{var fe,Te;ae(xe);const oe=j.results[j.results.length-1],ge=((Te=(fe=oe==null?void 0:oe[0])==null?void 0:fe.transcript)==null?void 0:Te.trim())||"";S.current=ge,v.current||(v.current=window.setTimeout(()=>{C(S.current),v.current=null},50)),_.current&&ge.trim()&&(re(),P(!1)),oe!=null&&oe.isFinal&&ge&&ge!==x.current&&(x.current=ge,ce(ge))},xe.onerror=j=>{ue(),m.current=!1,b(!1),j.error!=="aborted"&&j.error!=="no-speech"&&k(`Microphone error: ${j.error}`)},xe.onend=()=>{ue(),m.current=!1,b(!1)},s.current=xe;try{xe.start(),m.current=!0}catch(j){m.current=!1,k(`Microphone error: ${j.message}`)}},le=()=>{y.current=!0;try{window.localStorage.setItem(ng,"true")}catch{}g?he(!0):z(!1)};return nn.jsxs("section",{className:"voice-assistant","aria-live":"polite",children:[(L||Y||I)&&nn.jsxs("div",{className:"voice-messages",children:[L&&nn.jsxs("p",{className:"transcript",children:["“",L,"”"]}),Y&&nn.jsx("p",{className:"grok-reply",children:Y}),I&&nn.jsx("p",{className:"voice-error",children:I})]}),nn.jsx("button",{className:`sound-button ${g?"is-listening":""}`,onClick:le,"aria-label":g?"Stop listening":"Speak to JARVIS",children:nn.jsxs("span",{className:"sound-waves","aria-hidden":"true",children:[nn.jsx("span",{}),nn.jsx("span",{}),nn.jsx("span",{}),nn.jsx("span",{}),nn.jsx("span",{})]})}),nn.jsx("p",{className:"voice-status",children:g?"Listening…":"Tap to speak"})]})}function YT(){return nn.jsxs("main",{className:"orb-only",children:[nn.jsx(jM,{}),nn.jsx(qT,{})]})}Ov.createRoot(document.getElementById("root")).render(nn.jsx(YT,{}));
