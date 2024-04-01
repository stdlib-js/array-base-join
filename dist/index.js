"use strict";var a=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=a(function(y,f){
var s=require('@stdlib/array-base-arraylike2object/dist');function v(r,t){return typeof r[t]=="function"}function l(r,t){var n,e,i,o,u;for(e=r.data,i=r.accessors[0],n="",o=0;o<e.length;o++)u=i(e,o),(typeof u=="undefined"||u===null)&&(u=""),n+=u,o<e.length-1&&(n+=t);return n}function d(r,t){var n,e,i;for(e="",n=0;n<r.length;n++)i=r[n],(typeof i=="undefined"||i===null)&&(i=""),e+=i,n<r.length-1&&(e+=t);return e}function g(r,t){var n;return v(r,"join")?r.join(t):(n=s(r),n.accessorProtocol?l(n,t):n.dtype==="generic"||n.dtype===null?d(r,t):r.join(t))}f.exports=g
});var h=c();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
