/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-audio-backdropfilter-backgroundblendmode-backgroundcliptext-canvas-canvasblending-cookies-cors-cssall-cssanimations-cssfilters-csspositionsticky-flexbox-forcetouch-fullscreen-geolocation-hiddenscroll-localstorage-lowbandwidth-lowbattery-sandbox-seamless-sessionstorage-srcdoc-svg-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,s,i;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),T.push((o?"":"no-")+i.join("-"))}}function a(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?_.className.baseVal=t:_.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=s(E?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var a,i,c,u,d="modernizr",f=s("div"),p=l();if(parseInt(r,10))for(;r--;)c=s("div"),c.id=o?o[r]:d+(r+1),f.appendChild(c);return a=s("style"),a.type="text/css",a.id="s"+d,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=n(f,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):f.parentNode.removeChild(f),!!i}function u(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?d(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var s=a.error?"error":"log";a[s].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+p(t[o])+":"+r+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function g(e,t,o,a){function l(){d&&(delete j.style,delete j.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=v(e,o);if(!r(c,"undefined"))return c}for(var d,f,p,m,g,y=["modernizr","tspan","samp"];!j.style&&y.length;)d=!0,j.modElem=s(y.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=j.style[m],u(m,"-")&&(m=i(m)),j.style[m]!==n){if(a||r(o,"undefined"))return l(),"pfx"==t?m:!0;try{j.style[m]=o}catch(h){}if(j.style[m]!=g)return l(),"pfx"==t?m:!0}return l(),!1}function y(e,t,n,o,a){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+z.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?g(i,t,o,a):(i=(e+" "+M.join(s+" ")+s).split(" "),f(i,t,n))}function h(e,t,r){return y(e,n,n,t,r)}var T=[],x=[],C={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var b="CSS"in e&&"supports"in e.CSS,S="supportsCSS"in e;Modernizr.addTest("supports",b||S),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=w;var _=t.documentElement;Modernizr.addTest("cssall","all"in _.style);var E="svg"===_.nodeName.toLowerCase();Modernizr.addTest("sandbox","sandbox"in s("iframe")),Modernizr.addTest("seamless","seamless"in s("iframe")),Modernizr.addTest("srcdoc","srcdoc"in s("iframe")),Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=s("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=s("a"),r=n.style;return r.cssText=e+w.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var k=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();C.hasEvent=k;var P=C.testStyles=c;Modernizr.addTest("hiddenscroll",function(){return P("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(r,function(e){n=9===e.offsetTop})}return n});var O="Moz O ms Webkit",z=C._config.usePrefixes?O.split(" "):[];C._cssomPrefixes=z;var N=function(t){var r,o=w.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var s=0;o>s;s++){var i=w[s],l=i.toUpperCase()+"_"+r;if(l in a)return"@-"+i.toLowerCase()+"-"+t}return!1};C.atRule=N;var M=C._config.usePrefixes?O.toLowerCase().split(" "):[];C._domPrefixes=M;var R={elem:s("modernizr")};Modernizr._q.push(function(){delete R.elem});var j={style:R.elem.style};Modernizr._q.unshift(function(){delete j.style}),C.testAllProps=y,C.testAllProps=h,Modernizr.addTest("appearance",h("appearance")),Modernizr.addTest("backdropfilter",h("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return h("backgroundClip","text")}),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=s("a");return e.style.cssText=w.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("cssanimations",h("animationName","a",!0));var A=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=i(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("backgroundblendmode",A("backgroundBlendMode","text")),Modernizr.addTest("forcetouch",function(){return k(A("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!A("exitFullscreen",t,!1)&&!A("cancelFullScreen",t,!1))),Modernizr.addTest("lowbattery",function(){var e=.2,t=A("battery",navigator);return!!(t&&!t.charging&&t.level<=e)}),o(),a(T),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
