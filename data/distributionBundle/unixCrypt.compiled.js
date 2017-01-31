#!/usr/bin/env node
// -*- coding: utf-8 -*-
'use strict';
module.exports=function(c){function e(i){if(f[i])return f[i].exports;var j=f[i]={i:i,l:!1,exports:{}};return c[i].call(j.exports,j,j.exports,e),j.l=!0,j.exports}var f={};return e.m=c,e.c=f,e.i=function(i){return i},e.d=function(i,j,k){e.o(i,j)||Object.defineProperty(i,j,{configurable:!1,enumerable:!0,get:k})},e.n=function(i){var j=i&&i.__esModule?function(){return i['default']}:function(){return i};return e.d(j,'a',j),j},e.o=function(i,j){return Object.prototype.hasOwnProperty.call(i,j)},e.p='',e(e.s=18)}({10:function(c,e){'use strict';Object.defineProperty(e,'__esModule',{value:!0}),e.default=(()=>{function i(ia){var ja,ka,la,ma;for(ja=0;28>ja;ja++)P[ja]=ia[x[ja]-1],R[ja]=ia[C[ja]-1];for(ja=0;16>ja;ja++){for(la=0;la<D[ja];la++){for(ma=P[0],ka=0;27>ka;ka++)P[ka]=P[ka+1];for(P[27]=ma,ma=R[0],ka=0;27>ka;ka++)R[ka]=R[ka+1];R[27]=ma}for(ka=0;24>ka;ka++)S[ja][ka]=P[E[ka]-1],S[ja][ka+24]=R[L[ka]-28-1]}}function j(ia,ja){var ka,la,ma,na,oa,pa=[];for(ma=0;64>ma;ma++)pa[ma]=ia[k[ma]-1];for(ma=0;32>ma;++ma)ba[ma]=pa[ma],ca[ma]=pa[ma+32];for(la=0;16>la;la++){for(ka=ja?15-la:la,ma=0;32>ma;ma++)da[ma]=ca[ma];for(ma=0;48>ma;ma++)fa[ma]=ca[Z[ma]-1]^S[ka][ma];for(ma=0;8>ma;ma++)oa=6*ma,na=_[ma][(fa[oa+0]<<5)+(fa[oa+1]<<3)+(fa[oa+2]<<2)+(fa[oa+3]<<1)+(fa[oa+4]<<0)+(fa[oa+5]<<4)],oa=4*ma,ea[oa+0]=1&na>>3,ea[oa+1]=1&na>>2,ea[oa+2]=1&na>>1,ea[oa+3]=1&na>>0;for(ma=0;32>ma;ma++)ca[ma]=ba[ma]^ea[aa[ma]-1];for(ma=0;32>ma;ma++)ba[ma]=da[ma]}for(ma=0;32>ma;ma++)oa=ba[ma],ba[ma]=ca[ma],ca[ma]=oa;for(ma=0;32>ma;++ma)pa[ma]=ba[ma],pa[ma+32]=ca[ma];for(ma=0;64>ma;ma++)ia[ma]=pa[t[ma]-1]}for(var k=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],t=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],x=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36],C=[63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],D=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],E=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2],L=[41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],P=[],R=[],S=[],Y=0;16>Y;++Y)S[Y]=[];var Z=[],$=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],_=[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7,0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8,4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0,15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13],[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10,3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5,0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15,13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9],[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8,13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1,13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7,1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12],[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15,13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9,10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4,3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14],[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9,14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6,4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14,11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3],[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11,10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8,9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6,4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13],[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1,13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6,1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2,6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12],[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7,1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2,7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8,2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]],aa=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],ba=[],ca=[],da=[[]],ea=[],fa=[],ga=function(ia){var ja,ka=[];for(ja=0;ja<ia.length;++ja)ka[ja]=ia.charCodeAt(ja);return ka},ha=function(ia){return String.fromCharCode.apply(String,ia)};return function(ia,ja,ka){'string'==typeof ia&&(ia=ga(ia)),'string'==typeof ja&&(ja=ga(ja));var la,ma,na,oa,pa,qa=[],ra=[];for(la=0;66>la;la++)qa[la]=0;for(la=0,na=0;(oa=ia[na])&&64>la;++na){for(ma=0;7>ma;ma++,la++)qa[la]=1&oa>>6-ma;la++}for(i(qa),la=0;66>la;la++)qa[la]=0;for(la=0;48>la;la++)Z[la]=$[la];for(la=0,na=0;2>la;la++,++na)for(oa=ja[na],ra[la]=oa,oa>'Z'.charCodeAt(0)&&(oa-=6),oa>'9'.charCodeAt(0)&&(oa-=7),oa-='.'.charCodeAt(0),ma=0;6>ma;ma++)1&oa>>ma&&(pa=Z[6*la+ma],Z[6*la+ma]=Z[6*la+ma+24],Z[6*la+ma+24]=pa);for(la=0;25>la;la++)j(qa,0);for(la=0;11>la;la++){for(oa=0,ma=0;6>ma;ma++)oa<<=1,oa|=qa[6*la+ma];oa+='.'.charCodeAt(0),oa>'9'.charCodeAt(0)&&(oa+=7),oa>'Z'.charCodeAt(0)&&(oa+=6),ra[la+2]=oa}return 0==ra[1]&&(ra[1]=ra[0]),ka?ra:ha(ra)}})()},18:function(c,e,f){c.exports=f(10)}});
