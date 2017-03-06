# slidesFrmwork
HTML based presentation slides framework  
https://github.com/YujiSODE/slidesFrmwork

>Copyright (c) 2017 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

##Script
* `slidesFrmwork.html`
* `slidesFrmwork.js`
* `slidesFrmwork.css`
* `src.js`

##How to use
1. Select a page to start presentation.
2. Just click the presentation slide.
3. "controls" are available (`click` + `ctrl key`).

##Customizing presentation slides
###1: `slidesFrmwork.html`
Every slide needs following tags:  
\[_an example of 1st slide_\]  
`<div class="slides">`  
  `<header></header>`  
    `<section class="slideSections">`  
      --- Text, tags etc. ---  
    `</section>`  
  `<footer></footer>`  
`</div>`
###2: `src.js`
__[Setting 1]:__ `<header>, <footer> and controls`

* `_header`: an array of header titles.
* `_footer`: an array of footer texts.

__[Setting 2]:__ `scripts`

An array `S` in `src.js` is used in order to describe script.  
`S[i][j]` is _j_-th script in _i_-th page in the presentation slides.

###3: Available value and methods in tool object in order to describe script in `src.js`

* `_tl`: tool object.  

* `_tl.page`: current page.  

* `_tl.scroll(y,delay)`: this method returns function that scrolls window after delay.  
 `y`: viewport scroll;`delay`: millisecond.  
 
* `_tl.addInnerHTML(txt,delay)`: this method returns function that adds a given text|tag to the current tag after delay.  
 `txt`: text;`delay`: millisecond.  
 
* `_tl.removeTag(ID,delay)`: this method returns function that removes a target tag after delay.  
  `ID`: id of removing tag;`delay`: millisecond.  
 
* `_tl.reset(delay)`: this method returns function that resets the current page after delay.  
 `delay`: millisecond.  
 
* `_tl.getCurrent(delay)`: this method returns function that scrolls window to the current page after delay.  
 `delay`: millisecond.  
 
* `_tl.getForward(delay)`: this method returns function that scrolls window to the next page after delay.  
 `delay`: millisecond.  
 
* `_tl.getBackward(delay)`: this method returns function that scrolls window to the previous page after delay.  
 `delay`: millisecond.  
 
* `_tl.close()`: this method returns function that closes "controls"; available only called in a "controls".  
 
