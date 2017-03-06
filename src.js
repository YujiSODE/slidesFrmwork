/*slidesFrmwork
* src.js
*/
//============================================================================
(function(){var slf=window,_tl,S=[],i=0,page0=slf.prompt('start page?',0),
    N=slf.document.getElementsByClassName('slides').length,c=_multiCount(),
    _date=slf.Date().replace(/\s/g,'_'),_header=[],_footer=[],
    setSlide=function(marker,Title,Txt){
        //marker: marker of page number; '()', '# ' etc.
        //Title: an array of titles; [''(<= for title page),'Introduction','Result','Conclusion'] etc.
        //Txt: an array of additional texts; ['','note1','note2'] etc.
        var i=0;
        while(i<N){_setInterface(i,marker,!Title[i]?'':Title[i],!Txt[i]?undefined:Txt[i]),i+=1;}
    };
            //======================== [Setting 1]: <header>, <footer> and controls ========================
            //-- <header> e.g., [''(<= for title page),'Introduction','Result','Conclusion'] --
            _header=['','<h3>Slide 1</h3>','<h3>Slide 2</h3>'];
            //-- <footer> --
            _footer=[_date];
            //-- setting <header> and <footer> --
            setSlide('()',_header,_footer);
            /*=== tool object ===
            * _tl: {
            * page,scroll(y,delay),addInnerHTML(txt,delay),removeTag(ID,delay),
            * reset(delay),getCurrent(delay),getForward(delay),getBackward(delay),
            * close()
            * }
            * =========
            */
            _tl=_sTool(!!+page0?+page0:0);
            //---"showing controls": ctrl key + click ---
            slf.addEventListener('click',function(e){
                 if(!!e.ctrlKey){e.stopPropagation(),_getControls(_tl);}
             },true);
            //======================== [Setting 2]: scripts ========================
            //_tl: tool object
            //S[j]: array of functions for j-th slide
            //=== 0th slide: title ===
            S[0]=[];
            S[0][0]=_tl.scroll(1,0);
            //=== 1st slide: Introduction ===
            S[1]=[];
            S[1][0]=_tl.addInnerHTML("text1",0);
            S[1][1]=function(){(_tl.reset(0)()),(_tl.scroll(2,0)());};
            //=== 2nd slide: 1. Text and basics ===
            S[2]=[];
            S[2][0]=_tl.addInnerHTML("text2",0);
            S[2][1]=function(){(_tl.reset(0)()),(_tl.scroll(0,0)());};
            //=== Loading script ===
            i=0;while(i<N){_setEvent(i,S[i],c,'click'),i+=1;}
           }());
//============================================================================
/*slidesFrmwork
* src.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*
* HTML based presentation slides framework
*/
