"use strict";var O=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var b=O(function(L,p){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist');function B(n,a,v,x,e,g,d,j,y,f,l,o){var s,h,i,C,m,u,q,r,t;if(n<=0||a<=0)return-1;if(z([x,e])){for(i=n,C=a,t=0;t<C;t++){for(m=g+t*e,q=y,r=0;r<i&&v[m]===d[q];r++)m+=x,q+=j;if(r===i)return t}return-1}for(i=a,C=n,s=e,h=x-i*e,u=o,r=0;r<i;r++)f[u]=1,u+=l;for(m=g,q=y,t=0;t<C;t++){for(u=o,r=0;r<i;r++)v[m]!==d[q]&&(f[u]=0),m+=s,u+=l;m+=h,q+=j}for(u=o,r=0;r<i&&f[u]!==1;r++)u+=l;return r===i?-1:r}p.exports=B
});var S=O(function(M,F){
var G=require('@stdlib/blas-base-layout-resolve-str/dist'),H=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),I=b();function J(n,a,v,x,e,g,d,j,y){var f,l,o,s;if(s=G(n),s===null)throw new TypeError(E('2iRFx',n));if(H(s)?(o=v,f=e,l=1):(o=a,f=1,l=e),e<R(1,o))throw new RangeError(E('2iRIR',R(1,o),e));return I(a,v,x,f,l,0,g,d,w(a,d),j,y,w(v,y))}F.exports=J
});var T=O(function(D,_){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),P=b();K(V,"ndarray",P);_.exports=V
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),c,k=U(Q(__dirname,"./native.js"));Y(k)?c=Z:c=k;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
