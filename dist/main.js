!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var a=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);n.exports=r.locals||{}},function(n,e,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},a=[],r=0;r<n.length;r++){var o=n[r],l=e.base?o[0]+e.base:o[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var u=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:g(f,e),references:1}),a.push(d)}return a}function s(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var o=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function m(n,e,t){var a=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var p=null,h=0;function g(n,e){var t,a,r;if(e.singleton){var o=h++;t=p||(p=s(e)),a=f.bind(null,t,o,!1),r=f.bind(null,t,o,!0)}else t=s(e),a=m.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=c(t[a]);i[r].references--}for(var o=l(n,e),s=0;s<t.length;s++){var d=c(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=o}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"body {\n    background-color: #313131; \n    margin: 0;\n    padding: 0;\n    font-family: 'Numans', sans-serif;\n    color: #fff;\n}\n\n/* TITLE AND NAVBAR */\n\nh1 {\n    text-align: center;\n    background-color: #353535;\n    margin: 0;\n    padding: 2rem;\n}\n\nh2 {\n    padding: 20px;\n}\n\n.navbar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #353535;\n}\n\nli {\n    flex-grow: 1;\n    text-align: center;\n    padding: 15px 20px;\n    transition: all 0.3s ease 0s;\n    cursor: pointer;\n}\n\nli:hover {\n    background-color: #111;\n}\n\nli.active {\n    background-color: #474747;\n}\n\nli.active:hover {\n    background-color: #111;\n}\n\n/* TAB CONTENT OFF */\n[data-tab-content] {\n    display: none;\n}\n\n/* TAB CONTENT ON */\n.active[data-tab-content] {\n    display: block;\n}\n\n/* HOME TAB */\n.inner-home-div {\n    margin: 0 auto;\n    color: #f5f5f5;\n}\n\n.inner-home-div blockquote {\n    width: 550px;\n    margin: 0 auto;\n    margin-top: 8%;\n    text-align: center;\n    font-size: 1rem;\n    font-family: 'Philosopher', sans-serif;\n}\n\n.home-image {\n    display: block;\n    margin-top: 6%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 20%;\n}\n\n.inner-home-div h4 {\n    width: 75%;\n    margin: 0 auto;\n    margin-top: 6%;\n    margin-bottom: 5%;\n    text-align: center;\n}\n\n/* GALLERY TAB */\n\n#gallery {\n    margin: 0 auto;\n    margin-top: 5%;\n    margin-bottom: 2%;\n    width: 80%;\n}\n\n.inner-gallery-div {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 1.2rem;\n}\n\n.box-image {\n    width: 100%;\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var r=(i=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([r]).join("\n")}var i,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);a&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";t.r(e);t(0);(()=>{const n=document.querySelector("#content"),e=document.createElement("h1");n.appendChild(e).textContent="Kiyomizu Izakaya";const t=document.createElement("ul");n.appendChild(t).className="navbar",t.innerHTML='<li data-tab-target="#home" class="tab">Home</li>\n                        <li data-tab-target="#gallery" class="tab active">Gallery</li>\n                        <li data-tab-target="#menu" class="tab">Menu</li>\n                        <li data-tab-target="#contact" class="tab">Contact</li>',function(n){const e=document.createElement("div");n.appendChild(e),e.className="",e.id="home",e.setAttribute("data-tab-content","");const t=document.createElement("div");t.className="inner-home-div",e.appendChild(t);const a=document.createElement("blockquote");t.appendChild(a),a.className="block-quote-div",a.innerHTML="<p><i>Even at my age, after decades of work, I don’t think I have achieved perfection. But I feel ecstatic all day––I love making sushi. That’s the spirit of the shokunin.</i></p>\n                                <p><i>- Jiro Ono 小野 二郎</i></p>";const r=document.createElement("img");r.src="media/sushi-art.png",r.className="home-image",t.appendChild(r);const o=document.createElement("h4");o.className="title-message",o.textContent="Kiyomizu Izakaya is a tapas-style, all-you-can eat Japanese restaurant committed to using fresh and high quality ingredients. Traditional Izakayas are casual places for after-work drinking and dining, similar to American pubs. Join us and look forward to an amazing dining experience.",t.appendChild(o)}(n),function(n){const e=document.createElement("div");n.appendChild(e),e.className="active",e.id="gallery",e.setAttribute("data-tab-content","");const t=document.createElement("div");t.className="inner-gallery-div",e.appendChild(t);for(let n=0,e=[];n<8;n++)e[n]=document.createElement("img"),e[n].src=`media/image${[n]}.jpg`,e[n].classList="box-image",t.appendChild(e[n])}(n);const a=document.createElement("div");n.appendChild(a),a.outerHTML='<div id="menu" data-tab-content><h2>Menu</h2></div>';const r=document.createElement("div");n.appendChild(r),r.outerHTML='<div id="contact" data-tab-content><h2>Contact</h2></div>';const o=document.querySelectorAll("[data-tab-target]"),i=document.querySelectorAll("[data-tab-content]");o.forEach(n=>{n.addEventListener("click",()=>{const e=document.querySelector(n.dataset.tabTarget);i.forEach(n=>{n.classList.remove("active")}),o.forEach(n=>{n.classList.remove("active")}),n.classList="active",e.classList="active"})})})()}]);