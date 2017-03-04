/*slidesFrmwork
* src.js (Web version)
*/
//============================================================================
(function(){var slf=window,_tl,S=[],i=0,page0=slf.prompt('start page?',0),N=slf.document.getElementsByClassName('slides').length,c=_multiCount(),_date=slf.Date().replace(/\s/g,'_'),_header=[],_footer=[],setSlide=function(marker,Title,Txt){var i=0;while(i<N){_setInterface(i,marker,!Title[i]?'':Title[i],!Txt[i]?undefined:Txt[i]),i+=1;}};
            //======================== [Setting 1]: <header>, <footer> and controls ========================
            //-- <header> e.g., [''(<= for title page),'Introduction','Result','Conclusion'] --
            _header=['','<h3>Introduction</h3>','<h3>1. Text and basics</h3>','<h3>2. Images</h3>','<h3>3. Web applications</h3>'];
            //-- <footer> --
            _footer=[_date];
            //-- setting <header> and <footer> --
            setSlide('()',_header,_footer);
            //_tl: tool object
            _tl=_sTool(!!+page0?+page0:0);
            //======================== [Setting 2]: scripts ========================
            //_tl: tool object
            //S[j]: array of functions for j-th slide
            //=== 0th slide: title ===
            S[0]=[];
            S[0][0]=_tl.scroll(1,0);
            //=== 1st slide: Introduction ===
            S[1]=[];
            S[1][0]=_tl.addInnerHTML("<div style='margin:16vh 30vw;font-size:1.5em;'><p><b>Contents</b></p><ol><li>Text and basics</li><li>Images</li><li>Web applications</li></ol></div>",0);
            S[1][1]=function(){(_tl.reset(0)()),(_tl.scroll(2,0)());};
            //=== 2nd slide: 1. Text and basics ===
            S[2]=[];
            S[2][0]=_tl.addInnerHTML("<p style='margin-left:10vw;'><b>Code:</b> <code>S[2][0]=_tl.addInnerHTML('Text sample',0);</code></p>",0);
            S[2][1]=function(){
                (_tl.addInnerHTML("<p style='margin-left:10vw;'><b>Result:</b> Text sample</p>",0)()),
                (_tl.addInnerHTML("<p style='margin-left:10vw;width:40vw;padding:1%;border:1px solid rgba(0,0,0,1);'>Method: <code>_tl.addInnerHTML(txt,delay)</code><br><code>txt</code>: text<br><code>delay</code>: millisecond</p>",1000)());
            };
            S[2][2]=function(){(_tl.reset(0)()),(_tl.scroll(3,0)());};
            //=== 3rd slide: 2. Images ===
            S[3]=[];
            S[3][0]=_tl.addInnerHTML("<p style='margin-left:10vw;'><b>Code:</b> <code>S[3][0]=_tl.addInnerHTML('&lt;img alt=\\'image\\' src=\\'imageSample.png\\'&gt;',0);</code></p>",0);
            S[3][1]=function(){
                (_tl.addInnerHTML("<p style='margin-left:10vw;'><b>Result:</b><img alt=\'image\' src=\'imageSample.png\'></p>",0)()),
                (_tl.addInnerHTML("<p style='margin-left:10vw;width:40vw;padding:1%;border:1px solid rgba(0,0,0,1);'>Method: <code>_tl.addInnerHTML(txt,delay)</code><br><code>txt</code>: text<br><code>delay</code>: millisecond</p>",1000)());
            };
            S[3][2]=function(){(_tl.reset(0)()),(_tl.scroll(4,0)());};
            //=== 4th slide: 3. Web applications ===
            S[4]=[];
            S[4][0]=_tl.addInnerHTML('<iframe style=\'margin-left:10vw;width:50vw;\' src="./helloWorld.html">helloWorld.html</iframe>',0);
            S[4][1]=function(){(_tl.reset(0)()),(_tl.scroll(5,0)());};
            //=== 5th slide: *** ===
            S[5]=[];
            //=== Loading script ===
            i=0;while(i<N){_setEvent(i,S[i],c,'click'),i+=1;}
           }());
//============================================================================
/*slidesFrmwork
* src.js (Web version)
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*
* HTML based presentation slides framework
*/