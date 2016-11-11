/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-cookies-forcetouch-fullscreen-geolocation-hashchange-notification-svg-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,a;for(var u in y)if(y.hasOwnProperty(u)){if(e=[],n=y[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var i,a,f,c,l="modernizr",d=s("div"),p=u();if(parseInt(o,10))for(;o--;)f=s("div"),f.id=r?r[o]:l+(o+1),d.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+l,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=c,_.offsetHeight):d.parentNode.removeChild(d),!!a}function c(e,n){return!!~(""+e).indexOf(n)}function l(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var i in e)if(e[i]in n)return t===!1?e[i]:(r=n[e[i]],o(r,"function")?l(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+p(n[r])+":"+o+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,r,i){function u(){l&&(delete z.style,delete z.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var l,d,p,v,h,g=["modernizr","tspan","samp"];!z.style&&g.length;)l=!0,z.modElem=s(g.shift()),z.style=z.modElem.style;for(p=e.length,d=0;p>d;d++)if(v=e[d],h=z.style[v],c(v,"-")&&(v=a(v)),z.style[v]!==t){if(i||o(r,"undefined"))return u(),"pfx"==n?v:!0;try{z.style[v]=r}catch(y){}if(z.style[v]!=h)return u(),"pfx"==n?v:!0}return u(),!1}function h(e,n,t,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,r,i):(a=(e+" "+k.join(s+" ")+s).split(" "),d(a,n,t))}var g=[],y=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("notification",function(){if(!e.Notification||!e.Notification.requestPermission)return!1;if("granted"===e.Notification.permission)return!0;try{new e.Notification("")}catch(n){if("TypeError"===n.name)return!1}return!0}),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var _=n.documentElement,w="svg"===_.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))});var x=function(){function e(e,n){var r;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,r=e in n,!r&&o&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),r="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),r):!1}var o=!("onblur"in n.documentElement);return e}();C.hasEvent=x,Modernizr.addTest("hashchange",function(){return x("hashchange",e)===!1?!1:n.documentMode===t||n.documentMode>7});var T=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=T;var E=C.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",T.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(o,function(e){t=9===e.offsetTop})}return t});var S="Moz O ms Webkit",b=C._config.usePrefixes?S.split(" "):[];C._cssomPrefixes=b;var N=function(n){var o,r=T.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),o=n.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+n;for(var s=0;r>s;s++){var a=T[s],u=a.toUpperCase()+"_"+o;if(u in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=N;var k=C._config.usePrefixes?S.toLowerCase().split(" "):[];C._domPrefixes=k;var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var z={style:O.elem.style};Modernizr._q.unshift(function(){delete z.style}),C.testAllProps=h;var P=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=a(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return x(P("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!P("exitFullscreen",n,!1)&&!P("cancelFullScreen",n,!1))),r(),i(g),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);