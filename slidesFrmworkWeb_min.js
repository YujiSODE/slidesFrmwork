/*slidesFrmwork
* slidesFrmworkWeb_min.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*
* HTML based presentation slides framework
*/
function _sTool(I){I=!(+I<0)?I:0;var sf=window,tg=sf.document.getElementsByClassName('slides'),_bcup=[],n=tg.length,i=0,o;while(i<n){_bcup[i]+=tg[i].innerHTML,i+=1;}o={page:+I,scroll:function(y,delay){y=y>0?y:0;y=y<(n-1)?y:(n-1);return function(){var slf=window,H=slf.innerHeight,T,s=function(){slf.scroll(0,y*H),o.page=y;};T=+delay>0?slf.setTimeout(s,+delay):s();};},addInnerHTML:function(txt,delay){return function(){txt=txt.replace(/<script|<\/script|javascript:/gi,'@');var slf=window,tgt=slf.document.getElementsByClassName('slideSections')[o.page],T,s=function(){tgt.innerHTML+=txt;};T=+delay>0?slf.setTimeout(s,+delay):s();};},removeTag:function(ID,delay){return function(){var slf=window,tgt=slf.document.getElementById(ID),r,T,s=function(){if(!tgt){return;}else{r=tgt.parentNode.removeChild(tgt);r=null;}};T=+delay>0?slf.setTimeout(s,+delay):s();};},reset:function(delay){return function(){var slf=window,T,s=function(){tg[o.page].innerHTML=_bcup[o.page].replace(/undefined/,'');};T=+delay>0?slf.setTimeout(s,+delay):s();};},getCurrent:function(delay){return function(){(o.scroll(o.page,delay)());};},getForward:function(delay){return function(){(o.scroll(+o.page+1,delay)());};},getBackward:function(delay){return function(){(o.scroll(+o.page-1,delay)());};},close:function(){return function(){};}};sf.scroll(0,I*sf.innerHeight);return o;}function _setInterface(page,marker,title,txt){if(+page<0){throw new Error('page<0');}if(marker.length<2){throw new Error('marker.length<2');}var sf=window,hd=sf.document.getElementsByTagName('header'),ft=sf.document.getElementsByTagName('footer'),n=+page.toFixed();if(!!hd[n]){hd[n].innerHTML=title;}if(!!ft[n]){ft[n].innerHTML=marker[0]+n+marker[1]+(txt!==undefined?':'+txt:'');}}function _multiCount(){var mC=function(n){if(+n<0){throw new Error('n<0');}mC.c[n]=(mC.c[n]!==undefined)?mC.c[n]+1:1;return mC.c;};mC.c=[];mC.reset=function(n){if(+n<0){throw new Error('n<0');}mC.c[n]=0;return mC.c;};return mC;}
function _setEvent(page,src,C,ev){if(page<0){throw new Error('page<0');}var slf=window,n=src.length,F,count=C.reset(page)[page],tg=slf.document.getElementsByClassName('slides')[page];F=function(){if(!!tg){if(!!src[count]){src[count](),count=C(page)[page];if(!(count<n)){count=C.reset(page)[page];}}}};tg.addEventListener(ev,F,true);}