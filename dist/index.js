"use strict";var d=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var O=d(function(L,p){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist');function B(e,a,v,l,i,g,x,j,y,f,s,o){var c,h,u,C,m,n,q,r,t;if(e<=0||a<=0)return-1;if(z([l,i])){for(u=e,C=a,t=0;t<C;t++){for(m=g+t*i,q=y,r=0;r<u&&v[m]===x[q];r++)m+=l,q+=j;if(r===u)return t}return-1}for(u=a,C=e,c=i,h=l-u*i,n=o,r=0;r<u;r++)f[n]=1,n+=s;for(m=g,q=y,t=0;t<C;t++){for(n=o,r=0;r<u;r++)v[m]!==x[q]&&(f[n]=0),m+=c,n+=s;m+=h,q+=j}for(n=o,r=0;r<u&&f[n]!==1;r++)n+=s;return r===u?-1:r}p.exports=B
});var S=d(function(D,F){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),I=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(e,a,v,l,i,g,x,j,y){var f,s,o;if(!G(e))throw new TypeError(E('2iRFx',e));if(H(e)?o=v:o=a,i<R(1,o))throw new RangeError(E('2iRIR',R(1,o),i));return I(e)?(f=1,s=i):(f=i,s=1),J(a,v,l,f,s,0,g,x,w(a,x),j,y,w(v,y))}F.exports=K
});var T=d(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=O();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=T(),b,k=Y(U(__dirname,"./native.js"));Z(k)?b=$:b=k;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
