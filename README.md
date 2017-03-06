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

##Customizing presentation slides
###1: `slidesFrmwork.html`
Every slide needs following tags:  
\[_an example of 1st slide_\]  
`<div class="slides" id="slide1">`  
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
* 
