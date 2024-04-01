// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,r){var e;return function(n,t){return"function"==typeof n[t]}(t,"join")?t.join(r):(e=n(t)).accessorProtocol?function(n,t){var r,e,o,l,a;for(e=n.data,o=n.accessors[0],r="",l=0;l<e.length;l++)null==(a=o(e,l))&&(a=""),r+=a,l<e.length-1&&(r+=t);return r}(e,r):"generic"===e.dtype||null===e.dtype?function(n,t){var r,e,o;for(e="",r=0;r<n.length;r++)null==(o=n[r])&&(o=""),e+=o,r<n.length-1&&(e+=t);return e}(t,r):t.join(r)}export{t as default};
//# sourceMappingURL=index.mjs.map
