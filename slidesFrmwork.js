/*slidesFrmwork
* slidesFrmwork.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*
* HTML based presentation slides framework
*/
//============================================================================
//this function returns tool object:{page,scroll(y,delay),addInnerHTML(txt,delay),removeTag(ID,delay),reset(delay)}
function _sTool(I){
    I=!(+I<0)?I:0;
    var sf=window,tg=sf.document.getElementsByClassName('slides'),_bcup=[],n=tg.length,i=0,o;
    while(i<n){_bcup[i]+=tg[i].innerHTML,i+=1;}
    o={
        /*current page*/
        page:+I,
        /*this method returns function that scrolls window after delay*/
        scroll:function(y,delay){
            /*y: viewport scroll*/
            /*delay: millisecond*/
            //setting range of y: 0 to n-1
            y=y>0?y:0;
            y=y<(n-1)?y:(n-1);
            return function(){
                var slf=window,H=slf.innerHeight,T,s=function(){slf.scroll(0,y*H),o.page=y;};
                T=+delay>0?slf.setTimeout(s,+delay):s();};
        },
        /*this method returns function that adds a given text|tag to the current tag after delay*/
        addInnerHTML:function(txt,delay){
            /*txt: text*/
            /*delay: millisecond*/
            return function(){
                txt=txt.replace(/<script|<\/script|javascript:/gi,'@');
                var slf=window,tgt=slf.document.getElementsByClassName('slideSections')[o.page],T,s=function(){tgt.innerHTML+=txt;};
                T=+delay>0?slf.setTimeout(s,+delay):s();};
            },
        /*this method returns function that removes a target tag after delay*/
        removeTag:function(ID,delay){
            /*ID: id of removing tag*/
            /*delay: millisecond*/
            return function(){
                var slf=window,tgt=slf.document.getElementById(ID),r,T,
                    s=function(){
                        if(!tgt){return;}else{r=tgt.parentNode.removeChild(tgt);r=null;}
                    };
                T=+delay>0?slf.setTimeout(s,+delay):s();};
        },
        /*this method returns function that resets the current page after delay*/
        reset:function(delay){
            return function(){
                var slf=window,T,s=function(){tg[o.page].innerHTML=_bcup[o.page].replace(/undefined/,'');};
                T=+delay>0?slf.setTimeout(s,+delay):s();};
        },
        /*this method returns function that scrolls window to the current page after delay*/
        getCurrent:function(delay){
            /*delay: millisecond*/
            return function(){(o.scroll(o.page,delay)());};
        },
        /*this method returns function that scrolls window to the next page after delay*/
        getForward:function(delay){
            /*delay: millisecond*/
            return function(){(o.scroll(+o.page+1,delay)());};
        },
        /*this method returns function that scrolls window to the previous page after delay*/
        getBackward:function(delay){
            /*delay: millisecond*/
            return function(){(o.scroll(+o.page-1,delay)());};
        },
        /*this method returns function that closes "controls"*/
        close:function(){
            return function(){};
        }
    };
    sf.scroll(0,I*sf.innerHeight);
    return o;
}
//============================================================================
//this function sets <header> and <footer>
function _setInterface(page,marker,title,txt){
    //page: page number of target slide
    //marker: marker of page number; '()', '# ' etc.
    //title: title of the current page
    //txt: additional text
    if(+page<0){throw new Error('page<0');}
    if(marker.length<2){throw new Error('marker.length<2');}
    var sf=window,
        hd=sf.document.getElementsByTagName('header'),
        ft=sf.document.getElementsByTagName('footer'),
        n=+page.toFixed();
    if(!!hd[n]){hd[n].innerHTML=title;}
    if(!!ft[n]){ft[n].innerHTML=marker[0]+n+marker[1]+(txt!==undefined?':'+txt:'');}
}
//============================================================================
//this function returns function for multiple count
function _multiCount(){
    //n is integer, no less than 0
    var mC=function(n){
        //n is integer, no less than 0
        if(+n<0){throw new Error('n<0');}
        mC.c[n]=(mC.c[n]!==undefined)?mC.c[n]+1:1;
        return mC.c;
    };
    mC.c=[];
    mC.reset=function(n){
        //n is integer, no less than 0
        if(+n<0){throw new Error('n<0');}
        mC.c[n]=0;
        return mC.c;
    };
    return mC;
}
//============================================================================
//this function sets event listener
function _setEvent(page,src,C,ev){
    //page: number of current page
    //src: an array of functions
    //C: var c=_multiCount();
    //ev: name of event
    if(page<0){throw new Error('page<0');}
    var slf=window,n=src.length,F,count=C.reset(page)[page],
        tg=slf.document.getElementsByClassName('slides')[page];
    F=function(){
        if(!!tg){
            if(!!src[count]){
                //to execute a function in src, and increase index in src with +1
                src[count](),count=C(page)[page];
                //to reset index in src
                if(!(count<n)){count=C.reset(page)[page];}
            }
        }
    };
    //setting eventListener
    tg.addEventListener(ev,F,true);
}
//============================================================================
//this function shows controls: <nav> with given object
function _getControls(Obj){
    //Obj:object
    var divNv=document.getElementById("divNav"),
        Nv=document.createElement('nav'),
        fm=document.createElement('form'),idx=0,el,El,i=0,n=0,f,txtF=[],F=[];
    Nv.innerHTML='<h4 style=\'margin:0 2em;font-size:0.8em;\'>[Controls]</h4>';Nv.id='slidesFrmworkControls';
    Nv.appendChild(fm);
    for(el in Obj){
        if(Obj[el].constructor!==Function){
            //<p>value:value of Obj</p>
            El=document.createElement('p');
            El.innerHTML=el+':'+Obj[el],El.id='ctrl'+idx,El.style.cssText='margin:0 2em;font-size:0.8em;';
        }else{
            //<input type='button'>
            El=document.createElement('input');
            El.type='button',El.value=el,El.id='ctrl'+idx;
        }
        fm.appendChild(El),idx+=1;
    }
    //this function returns function that executes a given function, and closes controls itself
    f=function(msg,F){
        //msg: csv formatted arguments as a text
        //F: function
        return function(){
            var v=[],ms=msg.split(/,/),i=0,n=ms.length,r;
            while(i<n){
                v[i]=!!ms[i]?window.prompt(ms[i]+'=?'):undefined;
                i+=1;
            }
            (F.apply(Obj,v)());
            if(!!Nv){r=Nv.parentNode.removeChild(Nv);}
            v=ms=i=n=r=null;
        };
    };
    n=fm.length;
    while(i<n){
        txtF[i]=Obj[fm[i].value].toString().split(/^function\s+\(|\)/)[1];
        F[i]=f(txtF[i],Obj[fm[i].value]);
        fm[i].addEventListener('click',F[i],true);
        i+=1;}
    divNv.appendChild(Nv);
}