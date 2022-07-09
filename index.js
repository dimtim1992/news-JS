(()=>{"use strict";var e={669:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const s=o},501:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,".sources {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    /* height: 120px; */\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    width: 20%;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .source__item {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 479px) {\r\n    .source__item {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",""]);const s=o},767:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),s=[];function i(e){for(var n=-1,r=0;r<s.length;r++)if(s[r].identifier===e){n=r;break}return n}function a(e,n){for(var r={},t=[],o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=i(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:h(f,n),references:1}),t.push(d)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var s=r.nc;s&&(t.nonce=s)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var s=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(s,i[n]):e.appendChild(s)}}function f(e,n,r){var t=r.css,o=r.media,s=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(e,n){var r,t,o;if(n.singleton){var s=m++;r=p||(p=c(n)),t=u.bind(null,r,s,!1),o=u.bind(null,r,s,!0)}else r=c(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=i(r[t]);s[o].references--}for(var c=a(e,n),l=0;l<r.length;l++){var d=i(r[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}r=c}}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={id:t,exports:{}};return e[t](s,s.exports,r),s.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(669);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(501);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class s{constructor(){this.news=new class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,r=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");if(t){n.forEach(((e,n)=>{const o=t.content.cloneNode(!0);if(o){const t=o.querySelector(".news__item");n%2&&t&&t.classList.add("alt");const s=o.querySelector(".news__meta-photo");s&&(s.style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`);const i=o.querySelector(".news__meta-author");i&&(i.textContent=e.author||e.source.name);const a=o.querySelector(".news__meta-date");a&&(a.textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"));const c=o.querySelector(".news__description-title");c&&(c.textContent=e.title);const l=o.querySelector(".news__description-source");l&&(l.textContent=e.source.name);const d=o.querySelector(".news__description-content");d&&(d.textContent=e.description);const u=o.querySelector(".news__read-more a");u&&u.setAttribute("href",e.url),r.append(o)}}));const e=document.querySelector(".news");e&&(e.innerHTML="",e.appendChild(r))}}},this.sources=new class{draw(e){const n=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");r&&e.forEach((e=>{const t=r.content.cloneNode(!0);if(t){const r=t.querySelector(".source__item-name");r&&(r.textContent=e.name);const o=t.querySelector(".source__item");o&&o.setAttribute("data-source-id",e.id),n.append(t)}}));const t=document.querySelector(".sources");t&&t.append(n)}}}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}}var i=r(767);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,console.log("START"),(new class{constructor(){this.controller=new class extends class extends class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n={}},r=(()=>{console.error("No callback for GET response")})){this.load("GET",e,r,n)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const r=Object.assign(Object.assign({},this.options),e);let t=`${this.baseLink}${n}?`;return Object.keys(r).forEach((e=>{t+=`${e}=${r[e]}&`})),t.slice(0,-1)}load(e,n,r,t={}){fetch(this.makeUrl(t,n),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error(e)))}}{constructor(){super("https://newsapi.org/v2/",{apiKey:"47e0f7fc050e46ac8c4f6a309e2433f2"})}}{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,n){let r=e.target;const t=e.currentTarget;for(;r!==t;){if(r&&r.classList.contains("source__item")){const e=r.getAttribute("data-source-id");return void(e&&t&&t.getAttribute("data-source")!==e&&(t.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},n)))}r=r.parentNode}}},this.view=new s}start(){const e=document.querySelector(".sources");e&&(e.addEventListener("click",(e=>this.controller.getNews(e,(e=>{this.view.drawNews(e)})))),this.controller.getSources((e=>{this.view.drawSources(e)})))}}).start()})()})();