"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=s(function(b,c){
var d=require('@stdlib/array-base-arraylike2object/dist'),v=require('@stdlib/assert-is-undefined-or-null/dist');function l(r,e){return typeof r[e]=="function"}function g(r,e){var i,n,o,t,u,a;for(i=r.data,o=r.accessors[0],t=i.length-1,n="",a=0;a<=t;a++)u=o(i,a),v(u)||(n+=String(u)),a<t&&(n+=e);return n}function j(r,e){var i,n,o,t;for(n=r.length-1,i="",t=0;t<=n;t++)o=r[t],v(o)||(i+=String(o)),t<n&&(i+=e);return i}function h(r,e){var i;return l(r,"join")?r.join(e):(i=d(r),i.accessorProtocol?g(i,e):j(r,e))}c.exports=h
});var q=f();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
