"use strict";var d=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var O=d(function(L,p){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist');function B(e,a,m,l,i,g,x,j,y,t,f,v){var c,h,u,C,s,n,q,r,o;if(e<=0||a<=0)return-1;if(z([l,i])){for(u=e,C=a,o=0;o<C;o++){for(s=g+o*i,q=y,r=0;r<u&&m[s]===x[q];r++)s+=l,q+=j;if(r===u)return o}return-1}for(u=a,C=e,c=i,h=l-u*i,n=v,r=0;r<u;r++)t[n]=1,n+=f;for(s=g,q=y,o=0;o<C;o++){for(n=v,r=0;r<u;r++)m[s]!==x[q]&&(t[n]=0),s+=c,n+=f;s+=h,q+=j}for(n=v,r=0;r<u&&t[n]!==1;r++)n+=f;return r===u?-1:r}p.exports=B
});var S=d(function(D,F){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),I=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(e,a,m,l,i,g,x,j,y){var t,f,v;if(!G(e))throw new TypeError(E('nullFx',e));if(H(e)?v=m:v=a,i<R(1,v))throw new RangeError(E('nullIR',R(1,v),i));return I(e)?(t=1,f=i):(t=i,f=1),J(a,m,l,t,f,0,g,x,w(a,x),j,y,w(m,y))}F.exports=K
});var T=d(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=O();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=T(),b,k=Y(U(__dirname,"./native.js"));Z(k)?b=$:b=k;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
