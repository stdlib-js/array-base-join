// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined-or-null@v0.2.2-esm/index.mjs";function n(n,e){var o;return function(r,t){return"function"==typeof r[t]}(n,"join")?n.join(e):(o=r(n)).accessorProtocol?function(r,n){var e,o,s,i,a,c;for(e=r.data,s=r.accessors[0],i=e.length-1,o="",c=0;c<=i;c++)a=s(e,c),t(a)||(o+=String(a)),c<i&&(o+=n);return o}(o,e):function(r,n){var e,o,s,i;for(o=r.length-1,e="",i=0;i<=o;i++)s=r[i],t(s)||(e+=String(s)),i<o&&(e+=n);return e}(n,e)}export{n as default};
//# sourceMappingURL=index.mjs.map
