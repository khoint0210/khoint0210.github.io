/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
;
function init(Counter) {
    //TODO: 客户端刷新频率过快会发出多个请求，并将在服务器上创建多个对象，致使后续数据请求错误(type: bug)
    var post_url = $(".leancloud_visitors").attr('data-url').trim() || $(".leancloud_likes").attr('data-url').trim(),
        post_title = $(".leancloud_visitors").attr('data-title').trim() || $(".leancloud_likes").attr('data-title').trim(),
        post_likes = 0,
        post_visitors = 0;

    //新建对象之前判断对象是否存在，不存在则创建
    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                //已存在
                console.log('Object instance already exists.');
            } else {
                //不存在，新建
                var newcounter = new Counter();
                newcounter.set("url", post_url);
                newcounter.set("title", post_title);
                newcounter.set("visitors", post_visitors);
                newcounter.set("likes", post_visitors);
                newcounter.save().then(
                    function(newcounter) {
                        // 成功保存之后，执行其他逻辑.
                        console.log('Succed to create.');
                        console.log('New object created with objectId: ' + newcounter.id);
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to create!');
                        console.error('Failed to create new object, with error message: ' + error.message);
                    }
                );
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function addVisitors(Counter) {
    //TODO:优化逻辑
    var post_url = $(".leancloud_visitors").attr('data-url').trim(),
        post_title = $(".leancloud_visitors").attr('data-title').trim();
    var visitorNumberContainer = $(".leancloud_visitors_count").attr('id').trim();

    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                var temporaryV = results[0];
                temporaryV.increment("visitors");
                temporaryV.fetchWhenSave(true);
                temporaryV.save().then(
                    function(temporaryV) {
                        // 成功保存之后，执行其他逻辑.
                        var content = temporaryV.get('visitors');
                        $(document.getElementById(visitorNumberContainer)).text(content);
                        console.log('Succed to add visitors.');
                        console.log('New visitors: ' + temporaryV.id + " " + temporaryV.get('url') + " " + temporaryV.get('visitors'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add visitors!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
                //init(Counter);//TODO:fixed bug!
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function addLikes(Counter) {
    //TODO:优化逻辑
    var post_url = $(".leancloud_likes").attr('data-url').trim(),
        post_title = $(".leancloud_likes").attr('data-title').trim();
    var likeNumberContainer = $(".leancloud_likes_count").attr('id').trim();

    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                var temporaryV = results[0];
                temporaryV.increment("likes");
                temporaryV.fetchWhenSave(true);
                temporaryV.save().then(
                    function(temporaryV) {
                        // 成功保存之后，执行其他逻辑.
                        var content = temporaryV.get('likes');
                        $(document.getElementById(likeNumberContainer)).text(content);
                        console.log('Succed to add likes.');
                        console.log('New likes: ' + temporaryV.id + " " + temporaryV.get('url') + " " + temporaryV.get('likes'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add likes!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
                //init(Counter);
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function showVisitors(Counter) {
    var query = new AV.Query(Counter);
    //获取页面所有文章的url
    var postArray = [];
    $(".leancloud_visitors").each(function() {
        postArray.push(
            $(this).attr("data-url").trim()
        );
    });

    //批量查询所有文章或单篇文章的数据
    query.containedIn('url', postArray);
    query.find().then(
        function(results) {
            //results: object.url等于postArray.url的对象数组
            var visitorNumberContainer = '.leancloud_visitors_count';
            if(results.length === 0) {
                $(".leancloud_visitors").find(visitorNumberContainer).text(0);
                return;
            }
            //显示visitors
            for(var i = 0; i < results.length; i++) {
                var temporaryV = results[i],
                    url = temporaryV.get('url'),
                    visitors = temporaryV.get('visitors'),
                    element = document.getElementById(url + "_visitors");

                $(element).find(visitorNumberContainer).text(visitors);

            }
            //空处理，可以不使用
            for(var i = 0; i < postArray.length; i++) {
                var url = postArray[i],
                    element = document.getElementById(url + "_visitors");
                if($(element).find(visitorNumberContainer).text() == '') {
                    $(element).find(visitorNumberContainer).text(0);
                }
            }
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

function showLikes(Counter) {
    var query = new AV.Query(Counter);
    //获取页面所有文章的url
    var postArray = [];
    $(".leancloud_likes").each(function() {
        postArray.push(
            $(this).attr("data-url").trim()
        );
    });
    //批量查询所有文章或单篇文章的数据
    query.containedIn('url', postArray);
    query.find().then(
        function(results) {
            //results: object.url等于postArray.url的对象数组
            var likeNumberContainer = '.leancloud_likes_count';
            if(results.length === 0) {
                $(".leancloud_likes").find(likeNumberContainer).text(0);
                return;
            }
            //显示likes
            for(var i = 0; i < results.length; i++) {
                var temporaryV = results[i],
                    url = temporaryV.get('url'),
                    likes = temporaryV.get('likes'),
                    element = document.getElementById(url + "_likes");
                $(element).find(likeNumberContainer).text(likes);
            }
            //空处理，可以不使用
            for(var i = 0; i < postArray.length; i++) {
                var url = postArray[i],
                    element = document.getElementById(url + "_likes");
                if($(element).find(likeNumberContainer).text() == '') {
                    $(element).find(likeNumberContainer).text(0);
                }
            }
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

function topNPost(Counter, limitCount) {
    var visitors = 0,
        title = "",
        url = "";
    var query = new AV.Query('Counter');
    query.notEqualTo('id', 0);
    query.descending('visitors'); 	//降序排序
    query.limit(limitCount); 		//限制n篇
    query.find().then(
        function(results) {
            var smallerValue = (limitCount > results.length) ? results.length : limitCount;

            if (smallerValue > 0) {
                for (var i = 0; i < smallerValue; i++) {
                    var temporaryV = results[i],
                        url = temporaryV.get('url'),
                        title = temporaryV.get('title'),
                        visitors = temporaryV.get('visitors');
                    var topNumber = i + 1,     
                        topContent = "<ul class='topN-post-list'>" + "<li class='topN-post-item'>"  +"<span class='item-topNumber'>" + "TOP" + topNumber + "</span>" + "<a class='item-title' href='" + url + "'>" + title + "</a>"+ "<i class='item-visitors'>" + "【文章热度:" + visitors + "℃】" + "</i>" + "</li>" + "</ul>";     
                    $("#topN").append(topContent);
                }
                        
                var	topTitleId = '.topN-title',
                	topTitle = $(topTitleId).attr('data-title').trim();           
                $(topTitleId).text(topTitle + "(" + smallerValue + " posts)" );              
            }
            console.log('Succed to find topNPost.');
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

/* Cookie for post like */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if(c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function getCookieById(cname, id) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    var cValue = "";
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if(c.indexOf(name) == 0)
            cValue = c.substring(name.length, c.length);
    }
    if(cValue != "") {
        var cArray = cValue.split(",");
        for(var i = 0; i < cArray.length; i++) {
            var c = cArray[i].trim();
            if(c.indexOf(id) == 0) {
                return true;
            }
        }
    }
    return "";
}

function addCookieById(cname, id, exdays) {
    var cvalue = getCookie(cname);
    if(cvalue == "") {
        cvalue = id;
    } else {
        var cArray = cvalue.split(",");
        var flag = 0;
        for(var i = 0; i < cArray.length; i++) {
            var c = cArray[i].trim();
            if(c.indexOf(id) == 0) {
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            cvalue += "," + id;
        }
    }

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//调用函数add或者show数据
function AnnieLeancloud(appid, appkey){
    AV.initialize(appid, appkey);
    
    var Counter = AV.Object.extend("Counter");
     
    function AnnieAddData(){
        init(Counter);
        if($('.leancloud_visitors').length == 1){
            addVisitors(Counter);
        }
        if($('.leancloud_likes').length){
            var post_id = $('.leancloud_likes').attr('data-url').trim();
            var star = getCookieById("star", post_id);
            if(star != "") {
                $('.leancloud_likes').addClass("heartAnimation");
            }

            showLikes(Counter);

            $('.layout-post').on("click", '.leancloud_likes', function() {
                var checkD = $(this).attr("rel");
                if((checkD === "unlike") && (star == "")) {
                    //init(Counter);
                    addLikes(Counter);
                    $(this).addClass("heartAnimation").attr("rel", "like");
                    addCookieById("star", post_id, 0.5);
                    //0.5天后自动销毁cookie, 允许再次点赞
                } else {					
                    //alert('您已经点赞过啦!');
                }
            });
        }
    }

    function AnnieShowData(){
        if($('.leancloud_visitors').length){
            showVisitors(Counter);
        }
        if($('.leancloud_likes').length){
            showLikes(Counter);
        }
    }

    if( $('.layout-post').length ) {
        //文章页: 计数+1 & 展示次数
        return AnnieAddData();
    }
    if( ($('.layout-pure').length || $('.layout-cart').length) && $('.post-title').length >= 1) {
        //主页: 只展示次数
        return AnnieShowData();
    }
};;
/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':0,'content':'It doesn’t matter who you are, where you come from.</br> The ability to triumph begins with you.</br> Always.</br> - Oprah Winfrey</br>'}");
mingyan.push("{'index':1,'content':'It doesn’t matter who you are, where you come from.</br> The ability to triumph begins with you.</br> Always.</br> - Oprah Winfrey</br>'}");
mingyan.push("{'index':3,'content':'I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.</br> - Og Mandino</br>'}");
mingyan.push("{'index':4,content: 'Courage, dear heart.</br> – C.S. Lewis </br>'}");
mingyan.push("{'index':5,content: 'In the middle of difficulty lies opportunity.</br> – Albert Einstein </br>'}");
mingyan.push("{'index':6,content: 'It doesn’t matter how slow you go as long as you don’t stop.</br> – Confucius </br>'}");
mingyan.push("{'index':7,content: 'He who has a why to live can bear almost any how.</br> – Friedrich Nietzsche </br>'}");
mingyan.push("{'index':8,content: 'Believe you can and you’re halfway there.</br> – Theodore Roosevelt </br>'}");
mingyan.push("{'index':9,content: 'The only person you are destined to become is the person you decide to be.</br> – Ralph Waldo Emerson </br>'}");
mingyan.push("{'index':10,content: 'Anything’s possible if you’ve got enough nerve.</br> – J.K. Rowling </br>'}");
mingyan.push("{'index':11,content: 'The secret of health for both mind and body is not to mourn for the past, not to worry about the future, but to live the present moment wisely and earnestly.</br> – Buddha </br>'}");
mingyan.push("{'index':12,content: 'A bird doesn’t sing because it has an answer, it sings because it has a song.</br> – Maya Angelou </br>'}");
mingyan.push("{'index':13,content: 'And you ask ‘What if I fall?’ Oh but my darling, what if you fly?</br> – Erin Hanson </br>'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
// function getMingYanHref(){
//   var item = getItem();
//   return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
// }

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
};
/* eslint-disable */

(function() {'use strict';function l(a){throw a;}var r=void 0,t,aa=this;function v(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==r?d[f]=b:d=d[f]?d[f]:d[f]={}};var y="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (y?Uint8Array:Array)(256);var z;for(z=0;256>z;++z)for(var B=z,ba=7,B=B>>>1;B;B>>>=1)--ba;var ca=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,

2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,

2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,

2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,

3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,

936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],C=y?new Uint32Array(ca):ca;if(aa.Uint8Array!==r)try{eval("String.fromCharCode.apply(null, new Uint8Array([0]));")}catch(ea){String.fromCharCode.apply=function(a){return function(b,c){return a.call(String.fromCharCode,b,Array.prototype.slice.call(c))}}(String.fromCharCode.apply)};function D(a){var b=a.length,c=0,d=Number.POSITIVE_INFINITY,f,h,k,e,g,m,p,s,q,x;for(s=0;s<b;++s)a[s]>c&&(c=a[s]),a[s]<d&&(d=a[s]);f=1<<c;h=new (y?Uint32Array:Array)(f);k=1;e=0;for(g=2;k<=c;){for(s=0;s<b;++s)if(a[s]===k){m=0;p=e;for(q=0;q<k;++q)m=m<<1|p&1,p>>=1;x=k<<16|s;for(q=m;q<f;q+=g)h[q]=x;++e}++k;e<<=1;g<<=1}return[h,c,d]};var F=[],G;for(G=0;288>G;G++)switch(!0){case 143>=G:F.push([G+48,8]);break;case 255>=G:F.push([G-144+400,9]);break;case 279>=G:F.push([G-256+0,7]);break;case 287>=G:F.push([G-280+192,8]);break;default:l("invalid literal: "+G)}

var fa=function(){function a(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,

a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:l("invalid length: "+a)}}var b=[],c,d;for(c=3;258>=c;c++)d=a(c),b[c]=d[2]<<24|d[1]<<

16|d[0];return b}();y&&new Uint32Array(fa);function I(a,b){this.l=[];this.m=32768;this.d=this.f=this.c=this.t=0;this.input=y?new Uint8Array(a):a;this.u=!1;this.n=J;this.K=!1;if(b||!(b={}))b.index&&(this.c=b.index),b.bufferSize&&(this.m=b.bufferSize),b.bufferType&&(this.n=b.bufferType),b.resize&&(this.K=b.resize);switch(this.n){case ga:this.a=32768;this.b=new (y?Uint8Array:Array)(32768+this.m+258);break;case J:this.a=0;this.b=new (y?Uint8Array:Array)(this.m);this.e=this.W;this.B=this.R;this.q=this.V;break;default:l(Error("invalid inflate mode"))}}

var ga=0,J=1;

I.prototype.r=function(){for(;!this.u;){var a=K(this,3);a&1&&(this.u=!0);a>>>=1;switch(a){case 0:var b=this.input,c=this.c,d=this.b,f=this.a,h=b.length,k=r,e=r,g=d.length,m=r;this.d=this.f=0;c+1>=h&&l(Error("invalid uncompressed block header: LEN"));k=b[c++]|b[c++]<<8;c+1>=h&&l(Error("invalid uncompressed block header: NLEN"));e=b[c++]|b[c++]<<8;k===~e&&l(Error("invalid uncompressed block header: length verify"));c+k>b.length&&l(Error("input buffer is broken"));switch(this.n){case ga:for(;f+k>d.length;){m=

g-f;k-=m;if(y)d.set(b.subarray(c,c+m),f),f+=m,c+=m;else for(;m--;)d[f++]=b[c++];this.a=f;d=this.e();f=this.a}break;case J:for(;f+k>d.length;)d=this.e({H:2});break;default:l(Error("invalid inflate mode"))}if(y)d.set(b.subarray(c,c+k),f),f+=k,c+=k;else for(;k--;)d[f++]=b[c++];this.c=c;this.a=f;this.b=d;break;case 1:this.q(ha,ia);break;case 2:for(var p=K(this,5)+257,s=K(this,5)+1,q=K(this,4)+4,x=new (y?Uint8Array:Array)(L.length),u=r,n=r,E=r,A=r,X=r,O=r,H=r,w=r,da=r,w=0;w<q;++w)x[L[w]]=K(this,3);if(!y){w=

q;for(q=x.length;w<q;++w)x[L[w]]=0}u=D(x);A=new (y?Uint8Array:Array)(p+s);w=0;for(da=p+s;w<da;)switch(X=M(this,u),X){case 16:for(H=3+K(this,2);H--;)A[w++]=O;break;case 17:for(H=3+K(this,3);H--;)A[w++]=0;O=0;break;case 18:for(H=11+K(this,7);H--;)A[w++]=0;O=0;break;default:O=A[w++]=X}n=y?D(A.subarray(0,p)):D(A.slice(0,p));E=y?D(A.subarray(p)):D(A.slice(p));this.q(n,E);break;default:l(Error("unknown BTYPE: "+a))}}return this.B()};

var ja=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=y?new Uint16Array(ja):ja,ka=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],la=y?new Uint16Array(ka):ka,ma=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],N=y?new Uint8Array(ma):ma,na=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],oa=y?new Uint16Array(na):na,pa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,

11,11,12,12,13,13],P=y?new Uint8Array(pa):pa,Q=new (y?Uint8Array:Array)(288),R,qa;R=0;for(qa=Q.length;R<qa;++R)Q[R]=143>=R?8:255>=R?9:279>=R?7:8;var ha=D(Q),S=new (y?Uint8Array:Array)(30),T,ra;T=0;for(ra=S.length;T<ra;++T)S[T]=5;var ia=D(S);function K(a,b){for(var c=a.f,d=a.d,f=a.input,h=a.c,k=f.length,e;d<b;)h>=k&&l(Error("input buffer is broken")),c|=f[h++]<<d,d+=8;e=c&(1<<b)-1;a.f=c>>>b;a.d=d-b;a.c=h;return e}

function M(a,b){for(var c=a.f,d=a.d,f=a.input,h=a.c,k=f.length,e=b[0],g=b[1],m,p;d<g&&!(h>=k);)c|=f[h++]<<d,d+=8;m=e[c&(1<<g)-1];p=m>>>16;p>d&&l(Error("invalid code length: "+p));a.f=c>>p;a.d=d-p;a.c=h;return m&65535}t=I.prototype;

t.q=function(a,b){var c=this.b,d=this.a;this.C=a;for(var f=c.length-258,h,k,e,g;256!==(h=M(this,a));)if(256>h)d>=f&&(this.a=d,c=this.e(),d=this.a),c[d++]=h;else{k=h-257;g=la[k];0<N[k]&&(g+=K(this,N[k]));h=M(this,b);e=oa[h];0<P[h]&&(e+=K(this,P[h]));d>=f&&(this.a=d,c=this.e(),d=this.a);for(;g--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};

t.V=function(a,b){var c=this.b,d=this.a;this.C=a;for(var f=c.length,h,k,e,g;256!==(h=M(this,a));)if(256>h)d>=f&&(c=this.e(),f=c.length),c[d++]=h;else{k=h-257;g=la[k];0<N[k]&&(g+=K(this,N[k]));h=M(this,b);e=oa[h];0<P[h]&&(e+=K(this,P[h]));d+g>f&&(c=this.e(),f=c.length);for(;g--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};

t.e=function(){var a=new (y?Uint8Array:Array)(this.a-32768),b=this.a-32768,c,d,f=this.b;if(y)a.set(f.subarray(32768,a.length));else{c=0;for(d=a.length;c<d;++c)a[c]=f[c+32768]}this.l.push(a);this.t+=a.length;if(y)f.set(f.subarray(b,b+32768));else for(c=0;32768>c;++c)f[c]=f[b+c];this.a=32768;return f};

t.W=function(a){var b,c=this.input.length/this.c+1|0,d,f,h,k=this.input,e=this.b;a&&("number"===typeof a.H&&(c=a.H),"number"===typeof a.P&&(c+=a.P));2>c?(d=(k.length-this.c)/this.C[2],h=258*(d/2)|0,f=h<e.length?e.length+h:e.length<<1):f=e.length*c;y?(b=new Uint8Array(f),b.set(e)):b=e;return this.b=b};

t.B=function(){var a=0,b=this.b,c=this.l,d,f=new (y?Uint8Array:Array)(this.t+(this.a-32768)),h,k,e,g;if(0===c.length)return y?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);h=0;for(k=c.length;h<k;++h){d=c[h];e=0;for(g=d.length;e<g;++e)f[a++]=d[e]}h=32768;for(k=this.a;h<k;++h)f[a++]=b[h];this.l=[];return this.buffer=f};

t.R=function(){var a,b=this.a;y?this.K?(a=new Uint8Array(b),a.set(this.b.subarray(0,b))):a=this.b.subarray(0,b):(this.b.length>b&&(this.b.length=b),a=this.b);return this.buffer=a};function U(a){a=a||{};this.files=[];this.v=a.comment}U.prototype.L=function(a){this.j=a};U.prototype.s=function(a){var b=a[2]&65535|2;return b*(b^1)>>8&255};U.prototype.k=function(a,b){a[0]=(C[(a[0]^b)&255]^a[0]>>>8)>>>0;a[1]=(6681*(20173*(a[1]+(a[0]&255))>>>0)>>>0)+1>>>0;a[2]=(C[(a[2]^a[1]>>>24)&255]^a[2]>>>8)>>>0};U.prototype.T=function(a){var b=[305419896,591751049,878082192],c,d;y&&(b=new Uint32Array(b));c=0;for(d=a.length;c<d;++c)this.k(b,a[c]&255);return b};function V(a,b){b=b||{};this.input=y&&a instanceof Array?new Uint8Array(a):a;this.c=0;this.ba=b.verify||!1;this.j=b.password}var sa={O:0,M:8},W=[80,75,1,2],Y=[80,75,3,4],Z=[80,75,5,6];function ta(a,b){this.input=a;this.offset=b}

ta.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==W[0]||a[b++]!==W[1]||a[b++]!==W[2]||a[b++]!==W[3])&&l(Error("invalid file header signature"));this.version=a[b++];this.ia=a[b++];this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<

8;this.g=a[b++]|a[b++]<<8;this.F=a[b++]|a[b++]<<8;this.ea=a[b++]|a[b++]<<8;this.ga=a[b++]|a[b++]<<8;this.fa=a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24;this.$=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.filename=String.fromCharCode.apply(null,y?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=y?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.v=y?a.subarray(b,b+this.F):a.slice(b,b+this.F);this.length=b-this.offset};function ua(a,b){this.input=a;this.offset=b}var va={N:1,ca:8,da:2048};

ua.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==Y[0]||a[b++]!==Y[1]||a[b++]!==Y[2]||a[b++]!==Y[3])&&l(Error("invalid local file header signature"));this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<8;this.g=a[b++]|a[b++]<<8;this.filename=

String.fromCharCode.apply(null,y?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=y?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.length=b-this.offset};

function $(a){var b=[],c={},d,f,h,k;if(!a.i){if(a.o===r){var e=a.input,g;if(!a.D)a:{var m=a.input,p;for(p=m.length-12;0<p;--p)if(m[p]===Z[0]&&m[p+1]===Z[1]&&m[p+2]===Z[2]&&m[p+3]===Z[3]){a.D=p;break a}l(Error("End of Central Directory Record not found"))}g=a.D;(e[g++]!==Z[0]||e[g++]!==Z[1]||e[g++]!==Z[2]||e[g++]!==Z[3])&&l(Error("invalid signature"));a.ha=e[g++]|e[g++]<<8;a.ja=e[g++]|e[g++]<<8;a.ka=e[g++]|e[g++]<<8;a.aa=e[g++]|e[g++]<<8;a.Q=(e[g++]|e[g++]<<8|e[g++]<<16|e[g++]<<24)>>>0;a.o=(e[g++]|

e[g++]<<8|e[g++]<<16|e[g++]<<24)>>>0;a.w=e[g++]|e[g++]<<8;a.v=y?e.subarray(g,g+a.w):e.slice(g,g+a.w)}d=a.o;h=0;for(k=a.aa;h<k;++h)f=new ta(a.input,d),f.parse(),d+=f.length,b[h]=f,c[f.filename]=h;a.Q<d-a.o&&l(Error("invalid file header size"));a.i=b;a.G=c}}t=V.prototype;t.Y=function(){var a=[],b,c,d;this.i||$(this);d=this.i;b=0;for(c=d.length;b<c;++b)a[b]=d[b].filename;return a};

t.r=function(a,b){var c;this.G||$(this);c=this.G[a];c===r&&l(Error(a+" not found"));var d;d=b||{};var f=this.input,h=this.i,k,e,g,m,p,s,q,x;h||$(this);h[c]===r&&l(Error("wrong index"));e=h[c].$;k=new ua(this.input,e);k.parse();e+=k.length;g=k.z;if(0!==(k.I&va.N)){!d.password&&!this.j&&l(Error("please set password"));s=this.S(d.password||this.j);q=e;for(x=e+12;q<x;++q)wa(this,s,f[q]);e+=12;g-=12;q=e;for(x=e+g;q<x;++q)f[q]=wa(this,s,f[q])}switch(k.A){case sa.O:m=y?this.input.subarray(e,e+g):this.input.slice(e,

e+g);break;case sa.M:m=(new I(this.input,{index:e,bufferSize:k.J})).r();break;default:l(Error("unknown compression type"))}if(this.ba){var u=r,n,E="number"===typeof u?u:u=0,A=m.length;n=-1;for(E=A&7;E--;++u)n=n>>>8^C[(n^m[u])&255];for(E=A>>3;E--;u+=8)n=n>>>8^C[(n^m[u])&255],n=n>>>8^C[(n^m[u+1])&255],n=n>>>8^C[(n^m[u+2])&255],n=n>>>8^C[(n^m[u+3])&255],n=n>>>8^C[(n^m[u+4])&255],n=n>>>8^C[(n^m[u+5])&255],n=n>>>8^C[(n^m[u+6])&255],n=n>>>8^C[(n^m[u+7])&255];p=(n^4294967295)>>>0;k.p!==p&&l(Error("wrong crc: file=0x"+

k.p.toString(16)+", data=0x"+p.toString(16)))}return m};t.L=function(a){this.j=a};function wa(a,b,c){c^=a.s(b);a.k(b,c);return c}t.k=U.prototype.k;t.S=U.prototype.T;t.s=U.prototype.s;v("Zlib.Unzip",V);v("Zlib.Unzip.prototype.decompress",V.prototype.r);v("Zlib.Unzip.prototype.getFilenames",V.prototype.Y);v("Zlib.Unzip.prototype.setPassword",V.prototype.L);}).call(window);



function requestArrayBuffer(url, success, error) {

    var xhr

    if (window.FormData && window.ArrayBuffer) {

        xhr = new XMLHttpRequest()

        xhr.addEventListener('load', function() {

            var successd = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;

            if (success&&successd) {

                success(xhr.response)

            } else {

                error(xhr.statusText);

            }

        })

        xhr.addEventListener('progress',progressSegment)

        xhr.open('GET', url, true);

        xhr.responseType = 'arraybuffer'

        xhr.send(null)

        return xhr;

    }

}



//return types

var TYPE_TEXT = 1;

var TYPE_URL = 2;

var TYPE_BLOB = 3;

var TYPE_RAW = 5;

var TYPE_FILES = 6;



var progressList = {};

var progressCb;

// the map of file extensions and return types

var DEFAULT_RETURN_OPTIONS = {

    'css': TYPE_TEXT,

    'html': TYPE_TEXT,

    'folder': TYPE_FILES,

}



// default callbacks if not specified

var DEFAULT_LOAD_OPTIONS = {

    success: function(e) {

        console.log(e)

    },

    error: function(e) {

        console.error(e);

    },

    progress: function(e) {

        console.log('loaded: ' + e * 100 + '%')

    }

}



// mime map used by blob

var MIME_MAP = {

    'js': 'text/javascript',

    'jpg': 'image/jpeg',

    'png': 'image/png',

}



// load entry

function initLoad(urls, options) {



    // overwrite default options

    var loadOption = $.extend({}, DEFAULT_LOAD_OPTIONS, options.loadOptions)

    var success = loadOption.success;

    var error = loadOption.error;

    progressCb = loadOption.progress;



    // overwrite default return types

    var returnOption = $.extend({}, DEFAULT_RETURN_OPTIONS, options.returnOptions)

    MIME_MAP = $.extend(MIME_MAP, options.mimeOptions)



    // parse Uint8Array based on file extension or specific type

    function getType(name, rawData, type) {

        var fileType = getFileExt(name)

        var returnType = type || returnOption[fileType];

        switch (returnType) {

            case TYPE_TEXT:

                return Utf8ArrayToStr(rawData);

                break;

            case TYPE_BLOB:

                return getBlob(rawData, MIME_MAP[fileType])

                break;

            case TYPE_RAW:

                return rawData;

                break;

            case TYPE_URL:

            default:

                return getBlobUrl(rawData, MIME_MAP[fileType]);

        }



    }



    urls.map(function(v) {



        // handle cros problems

        var crosTail = btoa(window.location.origin)

        if (/\#/.test(v)) {

            v = v.split('#')[0]

        }

        if (/\?/.test(v)) {

            crosTail = '&' + crosTail

        } else {

            crosTail = '?' + crosTail

        }

        return v + crosTail;

    }).forEach(function(url) {

        requestArrayBuffer(url,function(data){

                // wrap arrayBuffer with Uint8Array buffer view

                var bufferView = new Uint8Array(data)

                //record execute start time

                // var now = performance.now()

                //create unzip object

                var unzip = new Zlib.Unzip(bufferView)



                //get file names from zip

                var files = unzip.getFilenames()



                //parse all files outside folders

                var baseFiles = files.filter(function(v) {

                    return !/\/|\\/g.test(v)

                }).reduce(function(pre, cur) {

                    var rawData = unzip.decompress(cur);

                    pre[cur] = getType(cur, rawData);

                    return pre;

                }, {})



                //parse files inside folders, only ONE level of folder tree supported

                var baseFolders = files.filter(function(v) {

                    return /^[^\/|\\]+(\/|\\)$/.test(v)

                }).reduce(function(pre, cur) {

                    if (returnOption['folder'] == TYPE_FILES) {



                        // return each file inside the folder based on its type

                        pre[cur] = files.filter(function(v) {

                            return v != cur && v.indexOf(cur) == 0;

                        }).map(function(v) {

                            return v.replace(cur, '')

                        }).reduce(function(pre, cur2) {

                            pre[cur2] = getType(cur2, unzip.decompress(cur + cur2))

                            return pre;

                        }, {})

                    } else {



                        // return all files inside the folder based on a specific type

                        var type = returnOption['folder']

                        pre[cur] = files.filter(function(v) {

                            return v != cur && v.indexOf(cur) == 0;

                        }).map(function(v) {

                            return v.replace(cur, '')

                        }).reduce(function(pre, cur2) {

                            pre[cur2] = getType(cur2, unzip.decompress(cur + cur2), type)

                            return pre;

                        }, {})

                    }

                    return pre;

                }, {})

                // console.log(baseFiles)

                // console.log(baseFolders)

                success($.extend({}, baseFiles, baseFolders))

                progressSegment(url,true)



                // console.log(performance.now() - now)

        },function(errorText){

            error(errorText)

        })

    })



}



function getFileExt(name) {

    return name.split('.').slice(-1).join('').toLowerCase()

}



function Utf8ArrayToStr(array) {

    var out, i, len, c;

    var char2, char3;



    out = "";

    len = array.length;

    i = 0;

    while (i < len) {

        c = array[i++];

        switch (c >> 4) {

            case 0:

            case 1:

            case 2:

            case 3:

            case 4:

            case 5:

            case 6:

            case 7:

                // 0xxxxxxx

                out += String.fromCharCode(c);

                break;

            case 12:

            case 13:

                // 110x xxxx   10xx xxxx

                char2 = array[i++];

                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));

                break;

            case 14:

                // 1110 xxxx  10xx xxxx  10xx xxxx

                char2 = array[i++];

                char3 = array[i++];

                out += String.fromCharCode(((c & 0x0F) << 12) |

                    ((char2 & 0x3F) << 6) |

                    ((char3 & 0x3F) << 0));

                break;

        }

    }



    return out;

}



function getBlob(uit8ary, mime) {

    try {

        var hasBlob = window.Blob

        var hasBlobBuilder = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder

        var file

        if (hasBlob) {

            file = new Blob([uit8ary], { type: mime || 'text/plain' })

        }

        if (!hasBlob && hasBlobBuilder) {

            var builder = new hasBlobBuilder()

            builder.append(uit8ary)

            file = builder.getBlob(mime)

        }

        if (file) {

            return file

        } else {

            return ''

        }

    } catch (e) {

        alert('No Blob API Avilable')

        return ''

    }

}



function getBlobUrl(uit8ary, mime) {

    try {

        var hasBlob = window.Blob

        var hasBlobBuilder = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder

        var file

        if (hasBlob) {

            file = new Blob([uit8ary], { type: mime || 'text/plain' })

        }

        if (!hasBlob && hasBlobBuilder) {

            var builder = new hasBlobBuilder()

            builder.append(uit8ary)

            file = builder.getBlob()

        }

        if (file) {

            return (URL.createObjectURL || URL.webkitCreateObjectURL)(file)

        } else {

            return ''

        }

    } catch (e) {

        alert('No Blob API or createObjectURL Method Avilable')

        return ''

    }

}

function progressSegment(e,isSuccess){

    if(isSuccess){

        progressList[e] = {

            total:1,

            loaded:1,

            progress:1

        }

        return;

    }

    var xhr = e.target;

    var id = xhr.id;

    if(!e.lengthComputable){

        progressList[id] = {

            total:1,

            loaded:0,

            progress:0

        }

        return;

    }

    if(progressList[id]){

        progressList[id].loaded = e.loaded;

        progressList[id].progress = e.loaded / e.total;

    }else{

        progressList[id] = {

            total:e.total,

            loaded:e.loaded,

            progress:e.loaded / e.total

        }

    }



    var total = 0;

    var loaded = 0;

    for(var i in progressList){

        total += progressList[i].total;

        loaded += progressList[i].loaded;

    }

    progressCb(loaded/total)

}



/*

module.exports = {

    TYPE_URL:TYPE_URL,

    TYPE_FILES:TYPE_FILES,

    TYPE_TEXT:TYPE_TEXT,

    TYPE_RAW:TYPE_RAW,

    TYPE_BLOB:TYPE_BLOB,

    initLoad:initLoad

}

*/;
var themeLocalSearch = function({search_path, zip_Path, version_Path, input_Trigger, top_N}) {
    // Popup Window;
    var isfetched = false,
        isXml = true;

    // Search DB path;
    if (search_path.length === 0) {
        search_path = "search.xml";
    } else if (/json$/i.test(search_path)) {
        isXml = false;
    }

    // monitor main search box;
    var onPopupClose = function(e) {
        $('.popup').fadeOut(300);
        $('body').removeClass('body-fixed')
        $('#local-search-input').val('');
        $('.search-result-list').remove();
        $('#no-result').remove();
        $('.search-result-number').remove();
    }

    function proceedsearch() {
        $('.popup').fadeIn(300);
        $('body').addClass('body-fixed');
        var $localSearchInput = $('#local-search-input');
        $localSearchInput.attr("autocapitalize", "none");
        $localSearchInput.attr("autocorrect", "off");
        $localSearchInput.focus();
    }

    // get search zip version and initialize  the search zip;
    $.get(version_Path + '?t=' + (+new Date()), function(res) {
        if (localStorage.getItem('searchVersion') !== res) {
            localStorage.setItem('searchVersion', res);
            initSearchJson();
        }
    });

    function initSearchJson() {
        initLoad([zip_Path], {
            loadOptions: {
                success: function(obj) {
                    localStorage.setItem('searchJson', obj[search_path])
                },
                error: function(e) {
                    return console.log(e)
                }
            },
            returnOptions: {
                'json': TYPE_TEXT
            },
            mimeOptions: {
                'json': 'application/json'
            }
        })
    }
    
	function fixedInputWhenScrolling() {
		var searchContainerId = '.local-search-popup',
			searchInputId = '#local-search-input',
			searchInputPromptH = $(".input-prompt").outerHeight();
		
		$(searchContainerId).scroll(function() {
			var scrollTop = $(searchContainerId).scrollTop();
		
			if(scrollTop >= searchInputPromptH/2) {				
				$(searchInputId).addClass('input-fixed');
			} else {
				$(searchInputId).removeClass('input-fixed');
			}
		}).trigger('scroll');
	}
	
	
	function clearScroll() {
		var searchContainerId = '.local-search-popup',
			scrollSpeed = 5; //shoud be small value! 
		
		$(searchContainerId).animate({
			scrollTop: 0
		}, scrollSpeed);	
	}
   
	
    // search function;
    var searchFunc = function(search_id, content_id) {
    		
        'use strict';
        isfetched = true;
        var datas = JSON.parse(localStorage.getItem('searchJson'));
        console.log(search_id)
        var input = document.getElementById(search_id);
        var resultContent = document.getElementById(content_id);
        var inputEventFunction = function() {
        	// TODO
        	clearScroll(); 
        	                   	
            var searchText = input.value.trim().toLowerCase();
            var keywords = searchText.split(/[\s\-]+/);
            if (keywords.length > 1) {
                keywords.push(searchText);
            }
            var resultItems = [];
            if (searchText.length > 0) {
                // perform local searching
                datas.forEach(function(data) {
                    var isMatch = false;
                    var hitCount = 0;
                    var searchTextCount = 0;
                    var title = data.title ? data.title.trim() : '';
                    var titleInLowerCase = title.toLowerCase();
                    var content = data.content ? data.content.trim().replace(/<[^>]+>/g, "") : '';
                    var contentInLowerCase = content.toLowerCase();
                    var articleUrl = decodeURIComponent(data.url);
                    var indexOfTitle = [];
                    var indexOfContent = [];
                    // only match articles with not empty titles
                    keywords.forEach(function(keyword) {
                        function getIndexByWord(word, text, caseSensitive) {
                            var wordLen = word.length;
                            if (wordLen === 0) {
                                return [];
                            }
                            var startPosition = 0,
                                position = [],
                                index = [];
                            if (!caseSensitive) {
                                text = text.toLowerCase();
                                word = word.toLowerCase();
                            }
                            while ((position = text.indexOf(word, startPosition)) > -1) {
                                index.push({
                                    position: position,
                                    word: word
                                });
                                startPosition = position + wordLen;
                            }
                            return index;
                        }

                        indexOfTitle = indexOfTitle.concat(getIndexByWord(keyword, titleInLowerCase, false));
                        indexOfContent = indexOfContent.concat(getIndexByWord(keyword, contentInLowerCase, false));
                    });
                    if (indexOfTitle.length > 0 || indexOfContent.length > 0) {
                        isMatch = true;
                        hitCount = indexOfTitle.length + indexOfContent.length;
                    }

                    // show search results
                    if (isMatch) {
                        // sort index by position of keyword
                        [indexOfTitle, indexOfContent].forEach(function(index) {
                            index.sort(function(itemLeft, itemRight) {
                                if (itemRight.position !== itemLeft.position) {
                                    return itemRight.position - itemLeft.position;
                                } else {
                                    return itemLeft.word.length - itemRight.word.length;
                                }
                            });
                        });

                        // merge hits into slices
                        function mergeIntoSlice(text, start, end, index) {
                            var item = index[index.length - 1];
                            var position = item.position;
                            var word = item.word;
                            var hits = [];
                            var searchTextCountInSlice = 0;
                            while (position + word.length <= end && index.length != 0) {
                                if (word === searchText) {
                                    searchTextCountInSlice++;
                                }
                                hits.push({
                                    position: position,
                                    length: word.length
                                });
                                var wordEnd = position + word.length;

                                // move to next position of hit
                                index.pop();
                                while (index.length != 0) {
                                    item = index[index.length - 1];
                                    position = item.position;
                                    word = item.word;
                                    if (wordEnd > position) {
                                        index.pop();
                                    } else {
                                        break;
                                    }
                                }
                            }
                            searchTextCount += searchTextCountInSlice;
                            return {
                                hits: hits,
                                start: start,
                                end: end,
                                searchTextCount: searchTextCountInSlice
                            };
                        }

                        var slicesOfTitle = [];
                        if (indexOfTitle.length != 0) {
                            slicesOfTitle.push(mergeIntoSlice(title, 0, title.length, indexOfTitle));
                        }

                        var slicesOfContent = [];
                        while (indexOfContent.length != 0) {
                            var item = indexOfContent[indexOfContent.length - 1];
                            var position = item.position;
                            var word = item.word;
                            // cut out 100 characters
                            var start = position - 20;
                            var end = position + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (end < position + word.length) {
                                end = position + word.length;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            slicesOfContent.push(mergeIntoSlice(content, start, end, indexOfContent));
                        }

                        // sort slices in content by search text's count and hits' count
                        slicesOfContent.sort(function(sliceLeft, sliceRight) {
                            if (sliceLeft.searchTextCount !== sliceRight.searchTextCount) {
                                return sliceRight.searchTextCount - sliceLeft.searchTextCount;
                            } else if (sliceLeft.hits.length !== sliceRight.hits.length) {
                                return sliceRight.hits.length - sliceLeft.hits.length;
                            } else {
                                return sliceLeft.start - sliceRight.start;
                            }
                        });

                        // select top N slices in content
                        var upperBound = parseInt(top_N);
                        if (upperBound >= 0) {
                            slicesOfContent = slicesOfContent.slice(0, upperBound);
                        }

                        // highlight title and content
                        function highlightKeyword(text, slice) {
                            var result = '';
                            var prevEnd = slice.start;
                            slice.hits.forEach(function(hit) {
                                result += text.substring(prevEnd, hit.position);
                                var end = hit.position + hit.length;
                                result += '<b class="search-keyword">' + text.substring(hit.position, end) + '</b>';
                                prevEnd = end;
                            });
                            result += text.substring(prevEnd, slice.end);
                            return result;
                        }

                        var resultItem = '';

                        if (slicesOfTitle.length != 0) {
                            resultItem += "<li><a target='_blank' href='" + articleUrl + "' class='search-result-title'>" + highlightKeyword(title, slicesOfTitle[0]) + "</a>";
                        } else {
                            resultItem += "<li><a target='_blank' href='" + articleUrl + "' class='search-result-title'>" + title + "</a>";
                        }

                        slicesOfContent.forEach(function(slice) {
                            resultItem += "<a target='_blank' href='" + articleUrl + "'>" +
                                "<p class=\"search-result-content\">" + highlightKeyword(content, slice) +
                                "...</p>" + "</a>";
                        });

                        resultItem += "</li>";
                        resultItems.push({
                            item: resultItem,
                            searchTextCount: searchTextCount,
                            hitCount: hitCount,
                            id: resultItems.length
                        });
                    }
                })
            };
            if (keywords.length === 1 && keywords[0] === "") {
                resultContent.innerHTML = '<div id="no-result"><i class="fa fa-search fa-2x" /></div>'
            } else if (resultItems.length === 0) {
                resultContent.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-3x" /></div>'
            } else {
                resultItems.sort(function(resultLeft, resultRight) {
                    if (resultLeft.searchTextCount !== resultRight.searchTextCount) {
                        return resultRight.searchTextCount - resultLeft.searchTextCount;
                    } else if (resultLeft.hitCount !== resultRight.hitCount) {
                        return resultRight.hitCount - resultLeft.hitCount;
                    } else {
                        return resultRight.id - resultLeft.id;
                    }
                });
                var searchResultList = '<div class=\"search-result-number"\>' + resultItems.length + ' results at total!</div>' + '<ul class=\"search-result-list\">';
                resultItems.forEach(function(result) {
                    searchResultList += result.item;
                })
                searchResultList += "</ul>";
                resultContent.innerHTML = searchResultList;
            }
        }

        if ('auto' === input_Trigger) {
            input.addEventListener('input', inputEventFunction);
        } else {
            //$('.search-icon').click(inputEventFunction);
            input.addEventListener('keypress', function(event) {
                if (event.keyCode === 13) {
                    inputEventFunction();
                }
            });
        }

        proceedsearch(); 
    }

    // handle and trigger popup window;
    $('.popup-trigger').click(function(e) {
        e.stopPropagation();
        if (isfetched === false) {
            $('.sb-close').click();
            searchFunc('local-search-input', 'local-search-output');
        } else {
            proceedsearch();
        };
    });

    $('.popup-btn-close').click(onPopupClose);
    $('.popup').click(function(e) {
        e.stopPropagation();
    });
    $(document).on('keyup', function(event) {
        var shouldDismissSearchPopup = event.which === 27 &&
            $('.search-popup').is(':visible');
        if (shouldDismissSearchPopup) {
            onPopupClose();
        }
    });
    
    // TODO
    fixedInputWhenScrolling();
};;
!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);;
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * quantize.js Copyright 2008 Nick Rabinowitz
 * Ported to node.js by Olivier Lesnicki
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

// fill out a couple protovis dependencies
/*
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
    var pv = {
        map: function(array, f) {
            var o = {};
            return f ? array.map(function(d, i) {
                o.index = i;
                return f.call(o, d);
            }) : array.slice();
        },
        naturalOrder: function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        },
        sum: function(array, f) {
            var o = {};
            return array.reduce(f ? function(p, d, i) {
                o.index = i;
                return p + f.call(o, d);
            } : function(p, d) {
                return p + d;
            }, 0);
        },
        max: function(array, f) {
            return Math.max.apply(null, f ? pv.map(array, f) : array);
        }
    }
}

/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 * 
 * @author Nick Rabinowitz
 * @example
 
// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;
 
var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) { 
    return cmap.map(p); 
});
 
 */
var MMCQ = (function() {
    // private constants
    var sigbits = 5,
        rshift = 8 - sigbits,
        maxIterations = 1000,
        fractByPopulations = 0.75;

    // get reduced-space color index for a pixel

    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }

    // Simple priority queue

    function PQueue(comparator) {
        var contents = [],
            sorted = false;

        function sort() {
            contents.sort(comparator);
            sorted = true;
        }

        return {
            push: function(o) {
                contents.push(o);
                sorted = false;
            },
            peek: function(index) {
                if (!sorted) sort();
                if (index === undefined) index = contents.length - 1;
                return contents[index];
            },
            pop: function() {
                if (!sorted) sort();
                return contents.pop();
            },
            size: function() {
                return contents.length;
            },
            map: function(f) {
                return contents.map(f);
            },
            debug: function() {
                if (!sorted) sort();
                return contents;
            }
        };
    }

    // 3d color space box

    function VBox(r1, r2, g1, g2, b1, b2, histo) {
        var vbox = this;
        vbox.r1 = r1;
        vbox.r2 = r2;
        vbox.g1 = g1;
        vbox.g2 = g2;
        vbox.b1 = b1;
        vbox.b2 = b2;
        vbox.histo = histo;
    }
    VBox.prototype = {
        volume: function(force) {
            var vbox = this;
            if (!vbox._volume || force) {
                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));
            }
            return vbox._volume;
        },
        count: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._count_set || force) {
                var npix = 0,
                    i, j, k;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                            index = getColorIndex(i, j, k);
                            npix += (histo[index] || 0);
                        }
                    }
                }
                vbox._count = npix;
                vbox._count_set = true;
            }
            return vbox._count;
        },
        copy: function() {
            var vbox = this;
            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
        },
        avg: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._avg || force) {
                var ntot = 0,
                    mult = 1 << (8 - sigbits),
                    rsum = 0,
                    gsum = 0,
                    bsum = 0,
                    hval,
                    i, j, k, histoindex;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                            histoindex = getColorIndex(i, j, k);
                            hval = histo[histoindex] || 0;
                            ntot += hval;
                            rsum += (hval * (i + 0.5) * mult);
                            gsum += (hval * (j + 0.5) * mult);
                            bsum += (hval * (k + 0.5) * mult);
                        }
                    }
                }
                if (ntot) {
                    vbox._avg = [~~(rsum / ntot), ~~ (gsum / ntot), ~~ (bsum / ntot)];
                } else {
                    //console.log('empty box');
                    vbox._avg = [~~(mult * (vbox.r1 + vbox.r2 + 1) / 2), ~~ (mult * (vbox.g1 + vbox.g2 + 1) / 2), ~~ (mult * (vbox.b1 + vbox.b2 + 1) / 2)];
                }
            }
            return vbox._avg;
        },
        contains: function(pixel) {
            var vbox = this,
                rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            return (rval >= vbox.r1 && rval <= vbox.r2 &&
                gval >= vbox.g1 && gval <= vbox.g2 &&
                bval >= vbox.b1 && bval <= vbox.b2);
        }
    };

    // Color map

    function CMap() {
        this.vboxes = new PQueue(function(a, b) {
            return pv.naturalOrder(
                a.vbox.count() * a.vbox.volume(),
                b.vbox.count() * b.vbox.volume()
            )
        });;
    }
    CMap.prototype = {
        push: function(vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(vb) {
                return vb.color
            });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(color) {
            var vboxes = this.vboxes;
            for (var i = 0; i < vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        },
        nearest: function(color) {
            var vboxes = this.vboxes,
                d1, d2, pColor;
            for (var i = 0; i < vboxes.size(); i++) {
                d2 = Math.sqrt(
                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +
                    Math.pow(color[2] - vboxes.peek(i).color[2], 2)
                );
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        },
        forcebw: function() {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function(a, b) {
                return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color))
            });

            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0, 0, 0];

            // force lightest color to white if everything > 251
            var idx = vboxes.length - 1,
                highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255, 255, 255];
        }
    };

    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error

    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits),
            histo = new Array(histosize),
            index, rval, gval, bval;
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }

    function vboxFromPixels(pixels, histo) {
        var rmin = 1000000,
            rmax = 0,
            gmin = 1000000,
            gmax = 0,
            bmin = 1000000,
            bmax = 0,
            rval, gval, bval;
        // find min/max
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin) rmin = rval;
            else if (rval > rmax) rmax = rval;
            if (gval < gmin) gmin = gval;
            else if (gval > gmax) gmax = gval;
            if (bval < bmin) bmin = bval;
            else if (bval > bmax) bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }

    function medianCutApply(histo, vbox) {
        if (!vbox.count()) return;

        var rw = vbox.r2 - vbox.r1 + 1,
            gw = vbox.g2 - vbox.g1 + 1,
            bw = vbox.b2 - vbox.b1 + 1,
            maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()]
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0,
            partialsum = [],
            lookaheadsum = [],
            i, j, k, sum, index;
        if (maxw == rw) {
            for (i = vbox.r1; i <= vbox.r2; i++) {
                sum = 0;
                for (j = vbox.g1; j <= vbox.g2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(i, j, k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        } else if (maxw == gw) {
            for (i = vbox.g1; i <= vbox.g2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(j, i, k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        } else { /* maxw == bw */
            for (i = vbox.b1; i <= vbox.b2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.g1; k <= vbox.g2; k++) {
                        index = getColorIndex(j, k, i);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        partialsum.forEach(function(d, i) {
            lookaheadsum[i] = total - d
        });

        function doCut(color) {
            var dim1 = color + '1',
                dim2 = color + '2',
                left, right, vbox1, vbox2, d2, count2 = 0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~ (i + right / 2));
                    else d2 = Math.max(vbox[dim1], ~~ (i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2]) d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
                    // set dimensions
                    vbox1[dim2] = d2;
                    vbox2[dim1] = vbox1[dim2] + 1;
                    // console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                    return [vbox1, vbox2];
                }
            }

        }
        // determine the cut planes
        return maxw == rw ? doCut('r') :
            maxw == gw ? doCut('g') :
            doCut('b');
    }

    function quantize(pixels, maxcolors) {
        // short-circuit
        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
            // console.log('wrong number of maxcolors');
            return false;
        }

        // XXX: check color content and convert to grayscale if insufficient

        var histo = getHisto(pixels),
            histosize = 1 << (3 * sigbits);

        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function() {
            nColors++
        });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }

        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo),
            pq = new PQueue(function(a, b) {
                return pv.naturalOrder(a.count(), b.count())
            });
        pq.push(vbox);

        // inner function to do the iteration

        function iter(lh, target) {
            var ncolors = 1,
                niters = 0,
                vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count()) { /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox),
                    vbox1 = vboxes[0],
                    vbox2 = vboxes[1];

                if (!vbox1) {
                    // console.log("vbox1 not defined; shouldn't happen!");
                    return;
                }
                lh.push(vbox1);
                if (vbox2) { /* vbox2 can be null */
                    lh.push(vbox2);
                    ncolors++;
                }
                if (ncolors >= target) return;
                if (niters++ > maxIterations) {
                    // console.log("infinite loop; perhaps too few pixels!");
                    return;
                }
            }
        }

        // first set of colors, sorted by population
        iter(pq, fractByPopulations * maxcolors);
        // console.log(pq.size(), pq.debug().length, pq.debug().slice());

        // Re-sort by the product of pixel occupancy times the size in color space.
        var pq2 = new PQueue(function(a, b) {
            return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume())
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }

        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());

        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }

        return cmap;
    }

    return {
        quantize: quantize
    }
})();

module.exports = MMCQ.quantize

},{}],2:[function(require,module,exports){

/*
  Vibrant.js
  by Jari Zwarts

  Color algorithm class that finds variations on colors in an image.

  Credits
  --------
  Lokesh Dhakar (http://www.lokeshdhakar.com) - Created ColorThief
  Google - Palette support library in Android
 */

(function() {
  var CanvasImage, Swatch, Vibrant,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  window.Swatch = Swatch = (function() {
    Swatch.prototype.hsl = void 0;

    Swatch.prototype.rgb = void 0;

    Swatch.prototype.population = 1;

    Swatch.yiq = 0;

    function Swatch(rgb, population) {
      this.rgb = rgb;
      this.population = population;
    }

    Swatch.prototype.getHsl = function() {
      if (!this.hsl) {
        return this.hsl = Vibrant.rgbToHsl(this.rgb[0], this.rgb[1], this.rgb[2]);
      } else {
        return this.hsl;
      }
    };

    Swatch.prototype.getPopulation = function() {
      return this.population;
    };

    Swatch.prototype.getRgb = function() {
      return this.rgb;
    };

    Swatch.prototype.getHex = function() {
      return "#" + ((1 << 24) + (this.rgb[0] << 16) + (this.rgb[1] << 8) + this.rgb[2]).toString(16).slice(1, 7);
    };

    Swatch.prototype.getTitleTextColor = function() {
      this._ensureTextColors();
      if (this.yiq < 200) {
        return "#fff";
      } else {
        return "#000";
      }
    };

    Swatch.prototype.getBodyTextColor = function() {
      this._ensureTextColors();
      if (this.yiq < 150) {
        return "#fff";
      } else {
        return "#000";
      }
    };

    Swatch.prototype._ensureTextColors = function() {
      if (!this.yiq) {
        return this.yiq = (this.rgb[0] * 299 + this.rgb[1] * 587 + this.rgb[2] * 114) / 1000;
      }
    };

    return Swatch;

  })();

  window.Vibrant = Vibrant = (function() {
    Vibrant.prototype.quantize = require('quantize');

    Vibrant.prototype._swatches = [];

    Vibrant.prototype.TARGET_DARK_LUMA = 0.26;

    Vibrant.prototype.MAX_DARK_LUMA = 0.45;

    Vibrant.prototype.MIN_LIGHT_LUMA = 0.55;

    Vibrant.prototype.TARGET_LIGHT_LUMA = 0.74;

    Vibrant.prototype.MIN_NORMAL_LUMA = 0.3;

    Vibrant.prototype.TARGET_NORMAL_LUMA = 0.5;

    Vibrant.prototype.MAX_NORMAL_LUMA = 0.7;

    Vibrant.prototype.TARGET_MUTED_SATURATION = 0.3;

    Vibrant.prototype.MAX_MUTED_SATURATION = 0.4;

    Vibrant.prototype.TARGET_VIBRANT_SATURATION = 1;

    Vibrant.prototype.MIN_VIBRANT_SATURATION = 0.35;

    Vibrant.prototype.WEIGHT_SATURATION = 3;

    Vibrant.prototype.WEIGHT_LUMA = 6;

    Vibrant.prototype.WEIGHT_POPULATION = 1;

    Vibrant.prototype.VibrantSwatch = void 0;

    Vibrant.prototype.MutedSwatch = void 0;

    Vibrant.prototype.DarkVibrantSwatch = void 0;

    Vibrant.prototype.DarkMutedSwatch = void 0;

    Vibrant.prototype.LightVibrantSwatch = void 0;

    Vibrant.prototype.LightMutedSwatch = void 0;

    Vibrant.prototype.HighestPopulation = 0;

    function Vibrant(sourceImage, colorCount, quality) {
      this.swatches = bind(this.swatches, this);
      var a, allPixels, b, cmap, g, i, image, imageData, offset, pixelCount, pixels, r;
      if (typeof colorCount === 'undefined') {
        colorCount = 64;
      }
      if (typeof quality === 'undefined') {
        quality = 5;
      }
      image = new CanvasImage(sourceImage);
      imageData = image.getImageData();
      pixels = imageData.data;
      pixelCount = image.getPixelCount();
      allPixels = [];
      i = 0;
      while (i < pixelCount) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3];
        if (a >= 125) {
          if (!(r > 250 && g > 250 && b > 250)) {
            allPixels.push([r, g, b]);
          }
        }
        i = i + quality;
      }
      cmap = this.quantize(allPixels, colorCount);
      this._swatches = cmap.vboxes.map((function(_this) {
        return function(vbox) {
          return new Swatch(vbox.color, vbox.vbox.count());
        };
      })(this));
      this.maxPopulation = this.findMaxPopulation;
      this.generateVarationColors();
      this.generateEmptySwatches();
      image.removeCanvas();
    }

    Vibrant.prototype.generateVarationColors = function() {
      this.VibrantSwatch = this.findColorVariation(this.TARGET_NORMAL_LUMA, this.MIN_NORMAL_LUMA, this.MAX_NORMAL_LUMA, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.LightVibrantSwatch = this.findColorVariation(this.TARGET_LIGHT_LUMA, this.MIN_LIGHT_LUMA, 1, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.DarkVibrantSwatch = this.findColorVariation(this.TARGET_DARK_LUMA, 0, this.MAX_DARK_LUMA, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.MutedSwatch = this.findColorVariation(this.TARGET_NORMAL_LUMA, this.MIN_NORMAL_LUMA, this.MAX_NORMAL_LUMA, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
      this.LightMutedSwatch = this.findColorVariation(this.TARGET_LIGHT_LUMA, this.MIN_LIGHT_LUMA, 1, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
      return this.DarkMutedSwatch = this.findColorVariation(this.TARGET_DARK_LUMA, 0, this.MAX_DARK_LUMA, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
    };

    Vibrant.prototype.generateEmptySwatches = function() {
      var hsl;
      if (this.VibrantSwatch === void 0) {
        if (this.DarkVibrantSwatch !== void 0) {
          hsl = this.DarkVibrantSwatch.getHsl();
          hsl[2] = this.TARGET_NORMAL_LUMA;
          this.VibrantSwatch = new Swatch(Vibrant.hslToRgb(hsl[0], hsl[1], hsl[2]), 0);
        }
      }
      if (this.DarkVibrantSwatch === void 0) {
        if (this.VibrantSwatch !== void 0) {
          hsl = this.VibrantSwatch.getHsl();
          hsl[2] = this.TARGET_DARK_LUMA;
          return this.DarkVibrantSwatch = new Swatch(Vibrant.hslToRgb(hsl[0], hsl[1], hsl[2]), 0);
        }
      }
    };

    Vibrant.prototype.findMaxPopulation = function() {
      var j, len, population, ref, swatch;
      population = 0;
      ref = this._swatches;
      for (j = 0, len = ref.length; j < len; j++) {
        swatch = ref[j];
        population = Math.max(population, swatch.getPopulation());
      }
      return population;
    };

    Vibrant.prototype.findColorVariation = function(targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation) {
      var j, len, luma, max, maxValue, ref, sat, swatch, value;
      max = void 0;
      maxValue = 0;
      ref = this._swatches;
      for (j = 0, len = ref.length; j < len; j++) {
        swatch = ref[j];
        sat = swatch.getHsl()[1];
        luma = swatch.getHsl()[2];
        if (sat >= minSaturation && sat <= maxSaturation && luma >= minLuma && luma <= maxLuma && !this.isAlreadySelected(swatch)) {
          value = this.createComparisonValue(sat, targetSaturation, luma, targetLuma, swatch.getPopulation(), this.HighestPopulation);
          if (max === void 0 || value > maxValue) {
            max = swatch;
            maxValue = value;
          }
        }
      }
      return max;
    };

    Vibrant.prototype.createComparisonValue = function(saturation, targetSaturation, luma, targetLuma, population, maxPopulation) {
      return this.weightedMean(this.invertDiff(saturation, targetSaturation), this.WEIGHT_SATURATION, this.invertDiff(luma, targetLuma), this.WEIGHT_LUMA, population / maxPopulation, this.WEIGHT_POPULATION);
    };

    Vibrant.prototype.invertDiff = function(value, targetValue) {
      return 1 - Math.abs(value - targetValue);
    };

    Vibrant.prototype.weightedMean = function() {
      var i, sum, sumWeight, value, values, weight;
      values = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      sum = 0;
      sumWeight = 0;
      i = 0;
      while (i < values.length) {
        value = values[i];
        weight = values[i + 1];
        sum += value * weight;
        sumWeight += weight;
        i += 2;
      }
      return sum / sumWeight;
    };

    Vibrant.prototype.swatches = function() {
      return {
        Vibrant: this.VibrantSwatch,
        Muted: this.MutedSwatch,
        DarkVibrant: this.DarkVibrantSwatch,
        DarkMuted: this.DarkMutedSwatch,
        LightVibrant: this.LightVibrantSwatch,
        LightMuted: this.LightMuted
      };
    };

    Vibrant.prototype.isAlreadySelected = function(swatch) {
      return this.VibrantSwatch === swatch || this.DarkVibrantSwatch === swatch || this.LightVibrantSwatch === swatch || this.MutedSwatch === swatch || this.DarkMutedSwatch === swatch || this.LightMutedSwatch === swatch;
    };

    Vibrant.rgbToHsl = function(r, g, b) {
      var d, h, l, max, min, s;
      r /= 255;
      g /= 255;
      b /= 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      h = void 0;
      s = void 0;
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [h, s, l];
    };

    Vibrant.hslToRgb = function(h, s, l) {
      var b, g, hue2rgb, p, q, r;
      r = void 0;
      g = void 0;
      b = void 0;
      hue2rgb = function(p, q, t) {
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      };
      if (s === 0) {
        r = g = b = l;
      } else {
        q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
        p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
      }
      return [r * 255, g * 255, b * 255];
    };

    return Vibrant;

  })();


  /*
    CanvasImage Class
    Class that wraps the html image element and canvas.
    It also simplifies some of the canvas context manipulation
    with a set of helper functions.
    Stolen from https://github.com/lokesh/color-thief
   */

  window.CanvasImage = CanvasImage = (function() {
    function CanvasImage(image) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);
      this.width = this.canvas.width = image.width;
      this.height = this.canvas.height = image.height;
      this.context.drawImage(image, 0, 0, this.width, this.height);
    }

    CanvasImage.prototype.clear = function() {
      return this.context.clearRect(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.update = function(imageData) {
      return this.context.putImageData(imageData, 0, 0);
    };

    CanvasImage.prototype.getPixelCount = function() {
      return this.width * this.height;
    };

    CanvasImage.prototype.getImageData = function() {
      return this.context.getImageData(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.removeCanvas = function() {
      return this.canvas.parentNode.removeChild(this.canvas);
    };

    return CanvasImage;

  })();

}).call(this);

},{"quantize":1}]},{},[2]);
;
// 网页简繁体转换
// -------------- 以下参数大部分可以更改 --------------------
//s = simplified 简体中文 t = traditional 繁体中文 n = normal 正常显示
var zh_default = 'n'; //默认语言，请不要改变
var zh_choose = 's'; //当前选择
var zh_expires = 7; //cookie过期天数
var zh_class = 'zh_click'; //链接的class名，id为class + s/t/n 之一
var zh_style_active = 'background: #00A1DF; color:#FFFFFF;'; //当前选择的链接式样
var zh_style_inactive = ''; //非当前选择的链接式样
var zh_browserLang = ''; //浏览器语言
var zh_autoLang_t = true; //浏览器语言为繁体时自动进行操作
var zh_autoLang_s = false; //浏览器语言为简体时自动进行操作
var zh_autoLang_alert = false; //自动操作后是否显示提示消息

var zh_autoLang_checked = 0; //次检测浏览器次数,第一次写cookie为1,提示后为2,今后将不再提示


//判断浏览器语言的正则,ie为小写,ff为大写
var zh_langReg_t = /^zh-tw|zh-hk$/i;
var zh_langReg_s = /^zh-cn$/i;

//简体繁体对照字表,可以自行替换
var zh_s = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
var zh_t = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
String.prototype.tran=function(){
	var s1,s2;
	if(zh_choose=='t'){
	   s1 = zh_s;
	   s2 = zh_t;
	}else if(zh_choose=='s'){
	   s1 = zh_t;
	   s2 = zh_s;
	}else{
	   return this;
	}
	var a = '';
	var l = this.length;
	for(var i=0;i<this.length;i++){
		var c = this.charAt(i);
		var p = s1.indexOf(c);
		a += p < 0 ? c : s2.charAt(p);
	}
	return a;
}
function setCookie(name, value){
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires != null){
	   var LargeExpDate = new Date ();
	   LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}
function getCookie(Name){
	var search = Name + "=";
	if(document.cookie.length > 0){
		offset = document.cookie.indexOf(search);
		if(offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if(end == -1){
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, end));
		}else{
			return '';
		}
	}
}
function zh_tranBody(obj){
	var o = (typeof(obj) == "object") ? obj.childNodes : document.body.childNodes;
	for (var i = 0; i < o.length; i++){
		var c = o.item(i);
		if('||BR|HR|TEXTAREA|SCRIPT|'.indexOf("|"+c.tagName+"|") > 0) continue;
		if(c.className == zh_class){
			if(c.id == zh_class + '_' + zh_choose){
				c.setAttribute('style', zh_style_active);
				c.style.cssText = zh_style_active;
			}else{
				c.setAttribute('style', zh_style_inactive);
				c.style.cssText = zh_style_inactive;
			}
			continue;   
		}
		if(c.title != '' && c.title != null){
			c.title = c.title.tran();
		}
		if(c.alt != '' && c.alt != null){
			c.alt = c.alt.tran();
		}
		if(c.tagName == "INPUT" && c.value != '' && c.type != 'text' && c.type != 'hidden' && c.type != 'password'){
			c.value = c.value.tran();
		}
		if(c.nodeType == 3){
			c.data = c.data.tran();  
		}else{
			zh_tranBody(c);
		}
	}
}
function zh_tran(go){
	if(go) zh_choose = go;
	setCookie('zh_choose', zh_choose, zh_expires);
	if(go == 'n'){
	   window.location.reload();
	}else {
	   zh_tranBody();
	}
}
function zh_getLang(){
	if(getCookie('zh_choose')){
	   zh_choose = getCookie('zh_choose');
	   return true;
	}
	if(!zh_autoLang_t && !zh_autoLang_s){
		return false;
	}
	if(getCookie('zh_autoLang_checked')){
		return false;
	}
	if(navigator.language){
		zh_browserLang = navigator.language;
	}else if(navigator.browserLanguage){
		zh_browserLang = navigator.browserLanguage;
	}
	if(zh_autoLang_t && zh_langReg_t.test(zh_browserLang)){
		zh_choose = 't';
	}else if(zh_autoLang_s && zh_langReg_s.test(zh_browserLang)){
		zh_choose = 's';
	}
	zh_autoLang_checked = 1;
	setCookie('zh_choose', zh_choose, zh_expires);
	if(zh_choose == zh_default){
		return false;
	}
	return true;
}
function zh_init(){
	zh_getLang();
	c = document.getElementById(zh_class + '_' + zh_choose);
	if(zh_choose != zh_default){
		if(window.onload){
			window.onload_before_zh_init = window.onload;
			window.onload = function(){
				zh_tran(zh_choose);
				if(zh_autoLang_alert){
					
				};
				window.onload_before_zh_init();
			};
		}else{
			window.onload = function(){
				zh_tran(zh_choose);
				if(zh_autoLang_alert){
				
				};
			};
		}
	}
}
//zh_init();;
var yall=function(){"use strict";return function(e){var n=(e=e||{}).lazyClass||"lazy",o=e.lazyBackgroundClass||"lazy-bg",t="idleLoadTimeout"in e?e.idleLoadTimeout:200,r=e.observeChanges||!1,i=e.events||{},a=window,s="requestIdleCallback",c="IntersectionObserver",u=["srcset","src","poster"],d=[],l=function(e,t){return d.slice.call((t||document).querySelectorAll(e||"img."+n+",video."+n+",iframe."+n+",."+o))},f=function(n){var t,r,i=n.parentNode;for(var a in"PICTURE"==i.nodeName&&(r=i),"VIDEO"==n.nodeName&&(r=n),t=l("source",r))b(t[a]);b(n),n.autoplay&&n.load();var s=n.classList;s.contains(o)&&(s.remove(o),s.add(e.lazyBackgroundLoaded||"lazy-bg-loaded"))},v=function(e){for(var n in i)e.addEventListener(n,i[n].listener||i[n],i[n].options||void 0);h.observe(e)},b=function(e){u.forEach(function(n){n in e.dataset&&a.requestAnimationFrame(function(){e[n]=e.dataset[n]})})},g=l();if(/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent))for(var m in g)f(g[m]);else if(c in a&&c+"Entry"in a){var h=new a[c](function(e,o){e.forEach(function(e){if(e.intersectionRatio){var i=e.target;s in a&&t?a[s](function(){f(i)},{timeout:t}):f(i),i.classList.remove(n),o.unobserve(i),(g=g.filter(function(e){return e!=i})).length||r||h.disconnect()}})},{rootMargin:("threshold"in e?e.threshold:200)+"px 0%"});for(var y in g)v(g[y]);r&&new MutationObserver(function(){l().forEach(function(e){g.indexOf(e)<0&&(g.push(e),v(e))})}).observe(l(e.observeRootSelector||"body")[0],e.mutationObserverOptions||{childList:!0,subtree:!0})}}}();
;
/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 */
(function(a){a.fn.resizeToParent=function(c){var e={parent:"div",delay:100};var c=a.extend(e,c);function f(n){n.css({width:"",height:"","margin-left":"","margin-top":""});var k=n.parents(c.parent).width();var j=n.parents(c.parent).height();var h=n.width();var g=n.height();var m=h/k;if((g/m)<j){n.css({width:"auto",height:j});h=h/(g/j);g=j}else{n.css({height:"auto",width:k});h=k;g=g/m}var l=(h-k)/-2;var i=(g-j)/-2;n.css({"margin-left":l,"margin-top":i})}var d;var b=this;a(window).on("resize",function(){clearTimeout(d);d=setTimeout(function(){b.each(function(){f(a(this))})},c.delay)});return this.each(function(){var g=a(this);g.attr("src",g.attr("src"));g.on('load',function(){f(g)});if(this.complete){f(g)}})}})(jQuery);;
/* jquery.nicescroll
-- version 3.7.6
-- copyright 2017-07-19 InuYaksa*2017
-- licensed under the MIT
--
-- https://nicescroll.areaaperta.com/
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

/* jshint expr: true */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS.
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function (jQuery) {

  "use strict";

  // globals
  var domfocus = false,
    mousefocus = false,
    tabindexcounter = 0,
    ascrailcounter = 2000,
    globalmaxzindex = 0;

  var $ = jQuery,       // sandbox
    _doc = document,
    _win = window,
    $window = $(_win);

  var delegatevents = [];

  // http://stackoverflow.com/questions/2161159/get-script-path
  function getScriptPath() {
    var scripts = _doc.currentScript || (function () { var s = _doc.getElementsByTagName('script'); return (s.length) ? s[s.length - 1] : false; })();
    var path = scripts ? scripts.src.split('?')[0] : '';
    return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
  }

  // based on code by Paul Irish https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  
  var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || false;
  var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || false;

  if (!setAnimationFrame) {
    var anilasttime = 0;
    setAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
      var id = _win.setTimeout(function () { callback(currTime + timeToCall); },
        timeToCall);
      anilasttime = currTime + timeToCall;
      return id;
    };
    clearAnimationFrame = function (id) {
      _win.clearTimeout(id);
    };
  } else {
    if (!_win.cancelAnimationFrame) clearAnimationFrame = function (id) { };
  }

  var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || false;

  var now = Date.now || function () { return new Date().getTime(); };

  var _globaloptions = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 40,
    mousescrollstep: 9 * 3,
    touchbehavior: false,   // deprecated
    emulatetouch: false,    // replacing touchbehavior
    hwacceleration: true,
    usetransition: true,
    boxzoom: false,
    dblclickzoom: true,
    gesturezoom: true,
    grabcursorenabled: true,
    autohidemode: true,
    background: "",
    iframeautoresize: true,
    cursorminheight: 32,
    preservenativescrolling: true,
    railoffset: false,
    railhoffset: false,
    bouncescroll: true,
    spacebarenabled: true,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: true,
    horizrailenabled: true,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: true,
    enablemousewheel: true,
    enablekeyboard: true,
    smoothscroll: true,
    sensitiverail: true,
    enablemouselockapi: true,
    //      cursormaxheight:false,
    cursorfixedheight: false,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: true,
    enablescrollonselection: true,
    overflowx: true,
    overflowy: true,
    cursordragspeed: 0.3,
    rtlmode: "auto",
    cursordragontouch: false,
    oneaxismousemode: "auto",
    scriptpath: getScriptPath(),
    preventmultitouchscrolling: true,
    disablemutationobserver: false,
    enableobserver: true,
    scrollbarid: false,
    scrollCLass: false
  };

  var browserdetected = false;

  var getBrowserDetection = function () {

    if (browserdetected) return browserdetected;

    var _el = _doc.createElement('DIV'),
      _style = _el.style,
      _agent = navigator.userAgent,
      _platform = navigator.platform,
      d = {};

    d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;

    d.isopera = ("opera" in _win); // 12-
    d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
    d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");

    d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera); //IE10-
    d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
    d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
    d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
    d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
    d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
    d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11); // IE11+

    d.ismsedge = ("msCredentials" in _win);  // MS Edge 14+

    d.ismozilla = ("MozAppearance" in _style);

    d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);

    d.ischrome = d.iswebkit && ("chrome" in _win);
    d.ischrome38 = (d.ischrome && ("touchAction" in _style)); // behavior changed in touch emulation    
    d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
    d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)

    d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win); // with detection for Chrome Touch Emulation    
    d.hasw3ctouch = (_win.PointerEvent || false) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); //IE11 pointer events, following W3C Pointer Events spec
    d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || false); // IE10 pointer events

    d.ismac = /^mac$/i.test(_platform);

    d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
    d.isios4 = d.isios && !("seal" in Object);
    d.isios7 = d.isios && ("webkitHidden" in _doc);  //iOS 7+
    d.isios8 = d.isios && ("hidden" in _doc);  //iOS 8+
    d.isios10 = d.isios && _win.Proxy;  //iOS 10+

    d.isandroid = (/android/i.test(_agent));

    d.haseventlistener = ("addEventListener" in _el);

    d.trstyle = false;
    d.hastransform = false;
    d.hastranslate3d = false;
    d.transitionstyle = false;
    d.hastransition = false;
    d.transitionend = false;

    d.trstyle = "transform";
    d.hastransform = ("transform" in _style) || (function () {
      var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
      for (var a = 0, c = check.length; a < c; a++) {
        if (_style[check[a]] !== undefined) {
          d.trstyle = check[a];
          break;
        }
      }
      d.hastransform = (!!d.trstyle);
    })();

    if (d.hastransform) {
      _style[d.trstyle] = "translate3d(1px,2px,3px)";
      d.hastranslate3d = /translate3d/.test(_style[d.trstyle]);
    }

    d.transitionstyle = "transition";
    d.prefixstyle = '';
    d.transitionend = "transitionend";

    d.hastransition = ("transition" in _style) || (function () {

      d.transitionend = false;
      var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
      var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
      var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
      for (var a = 0, c = check.length; a < c; a++) {
        if (check[a] in _style) {
          d.transitionstyle = check[a];
          d.prefixstyle = prefix[a];
          d.transitionend = evs[a];
          break;
        }
      }
      if (d.ischrome26) d.prefixstyle = prefix[1];  // always use prefix

      d.hastransition = (d.transitionstyle);

    })();

    function detectCursorGrab() {
      var lst = ['grab', '-webkit-grab', '-moz-grab'];
      if ((d.ischrome && !d.ischrome38) || d.isie) lst = []; // force setting for IE returns false positive and chrome cursor bug
      for (var a = 0, l = lst.length; a < l; a++) {
        var p = lst[a];
        _style.cursor = p;
        if (_style.cursor == p) return p;
      }
      return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'; // thanks to https://cdnjs.com/ for the openhand cursor!
    }
    d.cursorgrabvalue = detectCursorGrab();

    d.hasmousecapture = ("setCapture" in _el);

    d.hasMutationObserver = (ClsMutationObserver !== false);

    _el = null; //memory released

    browserdetected = d;

    return d;
  };

  var NiceScrollClass = function (myopt, me) {

    var self = this;

    this.version = '3.7.6';
    this.name = 'nicescroll';

    this.me = me;

    var $body = $("body");

    var opt = this.opt = {
      doc: $body,
      win: false
    };

    $.extend(opt, _globaloptions);  // clone opts

    // Options for internal use
    opt.snapbackspeed = 80;

    if (myopt || false) {
      for (var a in opt) {
        if (myopt[a] !== undefined) opt[a] = myopt[a];
      }
    }

    if (opt.disablemutationobserver) ClsMutationObserver = false;

    this.doc = opt.doc;
    this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
    this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
    this.haswrapper = (opt.win !== false);
    this.win = opt.win || (this.ispage ? $window : this.doc);
    this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
    this.body = $body;
    this.viewport = false;

    this.isfixed = false;

    this.iframe = false;
    this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));

    this.istextarea = (this.win[0].nodeName == 'TEXTAREA');

    this.forcescreen = false; //force to use screen position on events

    this.canshowonmouseevent = (opt.autohidemode != "scroll");

    // Events jump table    
    this.onmousedown = false;
    this.onmouseup = false;
    this.onmousemove = false;
    this.onmousewheel = false;
    this.onkeypress = false;
    this.ongesturezoom = false;
    this.onclick = false;

    // Nicescroll custom events
    this.onscrollstart = false;
    this.onscrollend = false;
    this.onscrollcancel = false;

    this.onzoomin = false;
    this.onzoomout = false;

    // Let's start!  
    this.view = false;
    this.page = false;

    this.scroll = {
      x: 0,
      y: 0
    };
    this.scrollratio = {
      x: 0,
      y: 0
    };
    this.cursorheight = 20;
    this.scrollvaluemax = 0;

    // http://dev.w3.org/csswg/css-writing-modes-3/#logical-to-physical
    // http://dev.w3.org/csswg/css-writing-modes-3/#svg-writing-mode
    if (opt.rtlmode == "auto") {
      var target = this.win[0] == _win ? this.body : this.win;
      var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");

      if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
        this.isrtlmode = (target.css("direction") == "rtl");
        this.isvertical = false;
      } else {
        this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
        this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl");
      }
    } else {
      this.isrtlmode = (opt.rtlmode === true);
      this.isvertical = false;
    }
    //    this.checkrtlmode = false;

    this.scrollrunning = false;

    this.scrollmom = false;

    this.observer = false;  // observer div changes
    this.observerremover = false;  // observer on parent for remove detection
    this.observerbody = false;  // observer on body for position change

    if (opt.scrollbarid !== false) {
      this.id = opt.scrollbarid;
    } else {
      do {
        this.id = "ascrail" + (ascrailcounter++);
      } while (_doc.getElementById(this.id));
    }

    this.rail = false;
    this.cursor = false;
    this.cursorfreezed = false;
    this.selectiondrag = false;

    this.zoom = false;
    this.zoomactive = false;

    this.hasfocus = false;
    this.hasmousefocus = false;

    //this.visibility = true;
    this.railslocked = false;  // locked by resize
    this.locked = false;  // prevent lost of locked status sets by user
    this.hidden = false; // rails always hidden
    this.cursoractive = true; // user can interact with cursors

    this.wheelprevented = false; //prevent mousewheel event

    this.overflowx = opt.overflowx;
    this.overflowy = opt.overflowy;

    this.nativescrollingarea = false;
    this.checkarea = 0;

    this.events = []; // event list for unbind

    this.saved = {};  // style saved

    this.delaylist = {};
    this.synclist = {};

    this.lastdeltax = 0;
    this.lastdeltay = 0;

    this.detected = getBrowserDetection();

    var cap = $.extend({}, this.detected);

    this.canhwscroll = (cap.hastransform && opt.hwacceleration);
    this.ishwscroll = (this.canhwscroll && self.haswrapper);

    if (!this.isrtlmode) {
      this.hasreversehr = false;
    } else if (this.isvertical) { // RTL mode with reverse horizontal axis
      this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11);
    } else {
      this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11));
    }

    this.istouchcapable = false; // desktop devices with touch screen support

    //## Check WebKit-based desktop with touch support
    //## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)

    if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {  // desktop device with multiple input
      this.istouchcapable = true;
    } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
      this.istouchcapable = true;
    }

    //## disable MouseLock API on user request
    if (!opt.enablemouselockapi) {
      cap.hasmousecapture = false;
      cap.haspointerlock = false;
    }

    this.debounced = function (name, fn, tm) {
      if (!self) return;
      var dd = self.delaylist[name] || false;
      if (!dd) {
        self.delaylist[name] = {
          h: setAnimationFrame(function () {
            self.delaylist[name].fn.call(self);
            self.delaylist[name] = false;
          }, tm)
        };
        fn.call(self);
      }
      self.delaylist[name].fn = fn;
    };


    this.synched = function (name, fn) {
      if (self.synclist[name]) self.synclist[name] = fn;
      else {
        self.synclist[name] = fn;
        setAnimationFrame(function () {
          if (!self) return;
          self.synclist[name] && self.synclist[name].call(self);
          self.synclist[name] = null;
        });
      }
    };

    this.unsynched = function (name) {
      if (self.synclist[name]) self.synclist[name] = false;
    };

    this.css = function (el, pars) { // save & set
      for (var n in pars) {
        self.saved.css.push([el, n, el.css(n)]);
        el.css(n, pars[n]);
      }
    };

    this.scrollTop = function (val) {
      return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val);
    };

    this.scrollLeft = function (val) {
      return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val);
    };

    // derived by by Dan Pupius www.pupius.net
    var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {

      this.st = st;
      this.ed = ed;
      this.spd = spd;

      this.p1 = p1 || 0;
      this.p2 = p2 || 1;
      this.p3 = p3 || 0;
      this.p4 = p4 || 1;

      this.ts = now();
      this.df = ed - st;
    };
    BezierClass.prototype = {
      B2: function (t) {
        return 3 * (1 - t) * (1 - t) * t;
      },
      B3: function (t) {
        return 3 * (1 - t) * t * t;
      },
      B4: function (t) {
        return t * t * t;
      },
      getPos: function () {
        return (now() - this.ts) / this.spd;
      },
      getNow: function () {
        var pc = (now() - this.ts) / this.spd;
        var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
        return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0;
      },
      update: function (ed, spd) {
        this.st = this.getNow();
        this.ed = ed;
        this.spd = spd;
        this.ts = now();
        this.df = this.ed - this.st;
        return this;
      }
    };

    //derived from http://stackoverflow.com/questions/11236090/
    function getMatrixValues() {
      var tr = self.doc.css(cap.trstyle);
      if (tr && (tr.substr(0, 6) == "matrix")) {
        return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
      }
      return false;
    }

    if (this.ishwscroll) {    // hw accelerated scroll

      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      };

      //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
      if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden"); // prevent flickering http://stackoverflow.com/questions/3461441/      

      this.getScrollTop = function (last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5]; //matrix3d 16 on IE10
          if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
        }
        return self.doc.translate.y;
      };

      this.getScrollLeft = function (last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4]; //matrix3d 16 on IE10
          if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
        }
        return self.doc.translate.x;
      };

      this.notifyScrollEvent = function (el) {
        var e = _doc.createEvent("UIEvents");
        e.initUIEvent("scroll", false, false, _win, 1);
        e.niceevent = true;
        el.dispatchEvent(e);
      };

      var cxscrollleft = (this.isrtlmode) ? 1 : -1;

      if (cap.hastranslate3d && opt.enabletranslate3d) {
        this.setScrollTop = function (val, silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val * -1) + "px";
          self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function (val, silent) {
          self.doc.translate.x = val;
          self.doc.translate.tx = (val * cxscrollleft) + "px";
          self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      } else {
        this.setScrollTop = function (val, silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val * -1) + "px";
          self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function (val, silent) {
          self.doc.translate.x = val;
          self.doc.translate.tx = (val * cxscrollleft) + "px";
          self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      }
    } else {    // native scroll

      this.getScrollTop = function () {
        return self.docscroll.scrollTop();
      };
      this.setScrollTop = function (val) {
        self.docscroll.scrollTop(val);
      };

      this.getScrollLeft = function () {
        var val;
        if (!self.hasreversehr) {
          val = self.docscroll.scrollLeft();
        } else if (self.detected.ismozilla) {
          val = self.page.maxw - Math.abs(self.docscroll.scrollLeft());
        } else {
          val = self.page.maxw - self.docscroll.scrollLeft();
        }
        return val;
      };
      this.setScrollLeft = function (val) {
        return setTimeout(function () {
          if (!self) return;
          if (self.hasreversehr) {
            if (self.detected.ismozilla) {
              val = -(self.page.maxw - val);
            } else {
              val = self.page.maxw - val;
            }
          }
          return self.docscroll.scrollLeft(val);
        }, 1);
      };
    }

    this.getTarget = function (e) {
      if (!e) return false;
      if (e.target) return e.target;
      if (e.srcElement) return e.srcElement;
      return false;
    };

    this.hasParent = function (e, id) {
      if (!e) return false;
      var el = e.target || e.srcElement || e || false;
      while (el && el.id != id) {
        el = el.parentNode || false;
      }
      return (el !== false);
    };

    function getZIndex() {
      var dom = self.win;
      if ("zIndex" in dom) return dom.zIndex(); // use jQuery UI method when available
      while (dom.length > 0) {
        if (dom[0].nodeType == 9) return false;
        var zi = dom.css('zIndex');
        if (!isNaN(zi) && zi !== 0) return parseInt(zi);
        dom = dom.parent();
      }
      return false;
    }

    //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
    var _convertBorderWidth = {
      "thin": 1,
      "medium": 3,
      "thick": 5
    };

    function getWidthToPixel(dom, prop, chkheight) {
      var wd = dom.css(prop);
      var px = parseFloat(wd);
      if (isNaN(px)) {
        px = _convertBorderWidth[wd] || 0;
        var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
        if (self.isie8 && px) px += 1;
        return (brd) ? px : 0;
      }
      return px;
    }

    this.getDocumentScrollOffset = function () {
      return {
        top: _win.pageYOffset || _doc.documentElement.scrollTop,
        left: _win.pageXOffset || _doc.documentElement.scrollLeft
      };
    };

    this.getOffset = function () {
      if (self.isfixed) {
        var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
        var scrl = self.getDocumentScrollOffset();
        ofs.top -= scrl.top;
        ofs.left -= scrl.left;
        return ofs;
      }
      var ww = self.win.offset();
      if (!self.viewport) return ww;
      var vp = self.viewport.offset();
      return {
        top: ww.top - vp.top,
        left: ww.left - vp.left
      };
    };

    this.updateScrollBar = function (len) {
      var pos, off;
      if (self.ishwscroll) {
        self.rail.css({
          height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
        });
        if (self.railh) self.railh.css({
          width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
        });
      } else {
        var wpos = self.getOffset();
        pos = {
          top: wpos.top,
          left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
        };
        pos.top += getWidthToPixel(self.win, 'border-top-width', true);
        pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');

        off = opt.railoffset;
        if (off) {
          if (off.top) pos.top += off.top;
          if (off.left) pos.left += off.left;
        }

        if (!self.railslocked) self.rail.css({
          top: pos.top,
          left: pos.left,
          height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
        });

        if (self.zoom) {
          self.zoom.css({
            top: pos.top + 1,
            left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
          });
        }

        if (self.railh && !self.railslocked) {
          pos = {
            top: wpos.top,
            left: wpos.left
          };
          off = opt.railhoffset;
          if (off) {
            if (off.top) pos.top += off.top;
            if (off.left) pos.left += off.left;
          }
          var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
          var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
          self.railh.css({
            top: y - (opt.railpadding.top + opt.railpadding.bottom),
            left: x,
            width: self.railh.width
          });
        }

      }
    };

    this.doRailClick = function (e, dbl, hr) {
      var fn, pg, cur, pos;

      if (self.railslocked) return;

      self.cancelEvent(e);

      if (!("pageY" in e)) {
        e.pageX = e.clientX + _doc.documentElement.scrollLeft;
        e.pageY = e.clientY + _doc.documentElement.scrollTop;
      }

      if (dbl) {
        fn = (hr) ? self.doScrollLeft : self.doScrollTop;
        cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
        self.unsynched("relativexy");
        fn(cur|0);
      } else {
        fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
        cur = (hr) ? self.scroll.x : self.scroll.y;
        pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
        pg = (hr) ? self.view.w : self.view.h;
        fn((cur >= pos) ? pg : -pg);
      }

    };

    self.newscrolly = self.newscrollx = 0;

    self.hasanimationframe = ("requestAnimationFrame" in _win);
    self.hascancelanimationframe = ("cancelAnimationFrame" in _win);

    self.hasborderbox = false;

    this.init = function () {

      self.saved.css = [];

      if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
      if (cap.isandroid && !("hidden" in _doc)) return true; // Android 3- SORRY, DO NOT WORK!

      opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;  // mantain compatibility with "touchbehavior"      

      self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");

      var _scrollyhidden = { 'overflow-y': 'hidden' };
      if (cap.isie11 || cap.isie10) _scrollyhidden['-ms-overflow-style'] = 'none';  // IE 10 & 11 is always a world apart!

      if (self.ishwscroll) {
        this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
        if (cap.transitionend) self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); //I have got to do something usefull!!
      }

      self.zindex = "auto";
      if (!self.ispage && opt.zindex == "auto") {
        self.zindex = getZIndex() || "auto";
      } else {
        self.zindex = opt.zindex;
      }

      if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
        globalmaxzindex = self.zindex;
      }

      if (self.isie && self.zindex === 0 && opt.zindex == "auto") { // fix IE auto == 0
        self.zindex = "auto";
      }

      if (!self.ispage || !cap.isieold) {

        var cont = self.docscroll;
        if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;

        self.css(cont, _scrollyhidden);

        if (self.ispage && (cap.isie11 || cap.isie)) { // IE 7-11
          self.css($("html"), _scrollyhidden);
        }

        if (cap.isios && !self.ispage && !self.haswrapper) self.css($body, {
          "-webkit-overflow-scrolling": "touch"
        }); //force hw acceleration

        var cursor = $(_doc.createElement('div'));
        cursor.css({
          position: "relative",
          top: 0,
          "float": "right",
          width: opt.cursorwidth,
          height: 0,
          'background-color': opt.cursorcolor,
          border: opt.cursorborder,
          'background-clip': 'padding-box',
          '-webkit-border-radius': opt.cursorborderradius,
          '-moz-border-radius': opt.cursorborderradius,
          'border-radius': opt.cursorborderradius
        });

        cursor.addClass('nicescroll-cursors');

        self.cursor = cursor;

        var rail = $(_doc.createElement('div'));
        rail.attr('id', self.id);
        rail.addClass('nicescroll-rails nicescroll-rails-vr');

        if (opt.scrollCLass) {
            rail.addClass(opt.scrollCLass);
        }

        var v, a, kp = ["left", "right", "top", "bottom"];  //**
        for (var n in kp) {
          a = kp[n];
          v = opt.railpadding[a] || 0;
          v && rail.css("padding-" + a, v + "px");
        }

        rail.append(cursor);

        rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
        rail.css({
          width: rail.width + "px",
          zIndex: self.zindex,
          background: opt.background,
          cursor: "default"
        });

        rail.visibility = true;
        rail.scrollable = true;

        rail.align = (opt.railalign == "left") ? 0 : 1;

        self.rail = rail;

        self.rail.drag = false;

        var zoom = false;
        if (opt.boxzoom && !self.ispage && !cap.isieold) {
          zoom = _doc.createElement('div');

          self.bind(zoom, "click", self.doZoom);
          self.bind(zoom, "mouseenter", function () {
            self.zoom.css('opacity', opt.cursoropacitymax);
          });
          self.bind(zoom, "mouseleave", function () {
            self.zoom.css('opacity', opt.cursoropacitymin);
          });

          self.zoom = $(zoom);
          self.zoom.css({
            cursor: "pointer",
            zIndex: self.zindex,
            backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
            height: 18,
            width: 18,
            backgroundPosition: '0 0'
          });
          if (opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
          if (cap.cantouch && opt.gesturezoom) {
            self.ongesturezoom = function (e) {
              if (e.scale > 1.5) self.doZoomIn(e);
              if (e.scale < 0.8) self.doZoomOut(e);
              return self.cancelEvent(e);
            };
            self.bind(self.win, "gestureend", self.ongesturezoom);
          }
        }

        // init HORIZ

        self.railh = false;
        var railh;

        if (opt.horizrailenabled) {

          self.css(cont, {
            overflowX: 'hidden'
          });

          cursor = $(_doc.createElement('div'));
          cursor.css({
            position: "absolute",
            top: 0,
            height: opt.cursorwidth,
            width: 0,
            backgroundColor: opt.cursorcolor,
            border: opt.cursorborder,
            backgroundClip: 'padding-box',
            '-webkit-border-radius': opt.cursorborderradius,
            '-moz-border-radius': opt.cursorborderradius,
            'border-radius': opt.cursorborderradius
          });

          if (cap.isieold) cursor.css('overflow', 'hidden');  //IE6 horiz scrollbar issue

          cursor.addClass('nicescroll-cursors');

          self.cursorh = cursor;

          railh = $(_doc.createElement('div'));
          railh.attr('id', self.id + '-hr');
          railh.addClass('nicescroll-rails nicescroll-rails-hr');
          if (opt.scrollCLass) {
              railh.addClass(opt.scrollCLass);
          }

          railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
          railh.css({
            height: railh.height + "px",
            'zIndex': self.zindex,
            "background": opt.background
          });

          railh.append(cursor);

          railh.visibility = true;
          railh.scrollable = true;

          railh.align = (opt.railvalign == "top") ? 0 : 1;

          self.railh = railh;

          self.railh.drag = false;

        }

        if (self.ispage) {

          rail.css({
            position: "fixed",
            top: 0,
            height: "100%"
          });

          rail.css((rail.align) ? { right: 0 } : { left: 0 });

          self.body.append(rail);
          if (self.railh) {
            railh.css({
              position: "fixed",
              left: 0,
              width: "100%"
            });

            railh.css((railh.align) ? { bottom: 0 } : { top: 0 });

            self.body.append(railh);
          }
        } else {
          if (self.ishwscroll) {
            if (self.win.css('position') == 'static') self.css(self.win, { 'position': 'relative' });
            var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
            $(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
            if (self.zoom) {
              self.zoom.css({
                position: "absolute",
                top: 1,
                right: 0,
                "margin-right": rail.width + 4
              });
              bd.append(self.zoom);
            }
            rail.css({
              position: "absolute",
              top: 0
            });
            rail.css((rail.align) ? { right: 0 } : { left: 0 });
            bd.append(rail);
            if (railh) {
              railh.css({
                position: "absolute",
                left: 0,
                bottom: 0
              });
              railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
              bd.append(railh);
            }
          } else {
            self.isfixed = (self.win.css("position") == "fixed");
            var rlpos = (self.isfixed) ? "fixed" : "absolute";

            if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
            if (self.viewport) {
              self.body = self.viewport;
              if (!(/fixed|absolute/.test(self.viewport.css("position")))) self.css(self.viewport, {
                "position": "relative"
              });
            }

            rail.css({
              position: rlpos
            });
            if (self.zoom) self.zoom.css({
              position: rlpos
            });
            self.updateScrollBar();
            self.body.append(rail);
            if (self.zoom) self.body.append(self.zoom);
            if (self.railh) {
              railh.css({
                position: rlpos
              });
              self.body.append(railh);
            }
          }

          if (cap.isios) self.css(self.win, {
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
            '-webkit-touch-callout': 'none'
          }); // prevent grey layer on click

          if (opt.disableoutline) {
            if (cap.isie) self.win.attr("hideFocus", "true"); // IE, prevent dotted rectangle on focused div
            if (cap.iswebkit) self.win.css('outline', 'none');  // Webkit outline
          }

        }

        if (opt.autohidemode === false) {
          self.autohidedom = false;
          self.rail.css({
            opacity: opt.cursoropacitymax
          });
          if (self.railh) self.railh.css({
            opacity: opt.cursoropacitymax
          });
        } else if ((opt.autohidemode === true) || (opt.autohidemode === "leave")) {
          self.autohidedom = $().add(self.rail);
          if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
          if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
        } else if (opt.autohidemode == "scroll") {
          self.autohidedom = $().add(self.rail);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
        } else if (opt.autohidemode == "cursor") {
          self.autohidedom = $().add(self.cursor);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
        } else if (opt.autohidemode == "hidden") {
          self.autohidedom = false;
          self.hide();
          self.railslocked = false;
        }

        if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {

          self.scrollmom = new ScrollMomentumClass2D(self);

          var delayedclick = null;

          self.ontouchstart = function (e) {

            if (self.locked) return false;

            //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
            if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;  // need test on surface!!

            self.hasmoving = false;

            if (self.scrollmom.timer) {
              self.triggerScrollEnd();
              self.scrollmom.stop();
            }

            if (!self.railslocked) {
              var tg = self.getTarget(e);

              if (tg) {
                var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                if (skp) return self.stopPropagation(e);
              }

              var ismouse = (e.type === "mousedown");

              if (!("clientX" in e) && ("changedTouches" in e)) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
              }

              if (self.forcescreen) {
                var le = e;
                e = {
                  "original": (e.original) ? e.original : e
                };
                e.clientX = le.screenX;
                e.clientY = le.screenY;
              }

              self.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: self.scroll.x,
                sy: self.scroll.y,
                st: self.getScrollTop(),
                sl: self.getScrollLeft(),
                pt: 2,
                dl: false,
                tg: tg
              };

              if (self.ispage || !opt.directionlockdeadzone) {

                self.rail.drag.dl = "f";

              } else {

                var view = {
                  w: $window.width(),
                  h: $window.height()
                };

                var page = self.getContentSize();

                var maxh = page.h - view.h;
                var maxw = page.w - view.w;

                if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false;
                else if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false;
                else self.rail.drag.ck = false;

              }

              if (opt.emulatetouch && self.isiframe && cap.isie) {
                var wp = self.win.position();
                self.rail.drag.x += wp.left;
                self.rail.drag.y += wp.top;
              }

              self.hasmoving = false;
              self.lastmouseup = false;
              self.scrollmom.reset(e.clientX, e.clientY);

              if (tg&&ismouse) {

                var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                if (!ip) {
                  if (cap.hasmousecapture) tg.setCapture();
                  if (opt.emulatetouch) {
                    if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
                      tg._onclick = tg.onclick;
                      tg.onclick = function (e) {
                        if (self.hasmoving) return false;
                        tg._onclick.call(this, e);
                      };
                    }
                    return self.cancelEvent(e);
                  }
                  return self.stopPropagation(e);
                }

                if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                  self.preventclick = {
                    "tg": tg,
                    "click": false
                  };
                }

              }
            }

          };

          self.ontouchend = function (e) {

            if (!self.rail.drag) return true;

            if (self.rail.drag.pt == 2) {
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;

              self.rail.drag = false;

              var ismouse = (e.type === "mouseup");

              if (self.hasmoving) {
                self.scrollmom.doMomentum();
                self.lastmouseup = true;
                self.hideCursor();
                if (cap.hasmousecapture) _doc.releaseCapture();
                if (ismouse) return self.cancelEvent(e);
              }

            }
            else if (self.rail.drag.pt == 1) {
              return self.onmouseup(e);
            }

          };

          var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);

          var locktollerance = opt.directionlockdeadzone * 0.3 | 0;

          self.ontouchmove = function (e, byiframe) {

            if (!self.rail.drag) return true;

            if (e.targetTouches && opt.preventmultitouchscrolling) {
              if (e.targetTouches.length > 1) return true; // multitouch
            }

            //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
            if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return true;

            if (self.rail.drag.pt == 2) {

              if (("changedTouches" in e)) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
              }

              var ofy, ofx;
              ofx = ofy = 0;

              if (moveneedoffset && !byiframe) {
                var wp = self.win.position();
                ofx = -wp.left;
                ofy = -wp.top;
              }

              var fy = e.clientY + ofy;
              var my = (fy - self.rail.drag.y);
              var fx = e.clientX + ofx;
              var mx = (fx - self.rail.drag.x);

              var ny = self.rail.drag.st - my;

              if (self.ishwscroll && opt.bouncescroll) {
                if (ny < 0) {
                  ny = Math.round(ny / 2);
                } else if (ny > self.page.maxh) {
                  ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                }
              } else {
                if (ny < 0) {
                  ny = 0;
                  fy = 0;
                }
                else if (ny > self.page.maxh) {
                  ny = self.page.maxh;
                  fy = 0;
                }
                if (fy === 0 && !self.hasmoving) {
                  if (!self.ispage) self.rail.drag = false;
                  return true;
                }
              }

              var nx = self.getScrollLeft();

              if (self.railh && self.railh.scrollable) {
                nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;

                if (self.ishwscroll && opt.bouncescroll) {
                  if (nx < 0) {
                    nx = Math.round(nx / 2);
                  } else if (nx > self.page.maxw) {
                    nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                  }
                } else {
                  if (nx < 0) {
                    nx = 0;
                    fx = 0;
                  }
                  if (nx > self.page.maxw) {
                    nx = self.page.maxw;
                    fx = 0;
                  }
                }

              }


              if (!self.hasmoving) {

                if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) return self.cancelEvent(e);  // prevent first useless move event 

                var ay = Math.abs(my);
                var ax = Math.abs(mx);
                var dz = opt.directionlockdeadzone;

                if (!self.rail.drag.ck) {
                  if (ay > dz && ax > dz) self.rail.drag.dl = "f";
                  else if (ay > dz) self.rail.drag.dl = (ax > locktollerance) ? "f" : "v";
                  else if (ax > dz) self.rail.drag.dl = (ay > locktollerance) ? "f" : "h";
                }
                else if (self.rail.drag.ck == "v") {
                  if (ax > dz && ay <= locktollerance) {
                    self.rail.drag = false;
                  }
                  else if (ay > dz) self.rail.drag.dl = "v";

                }
                else if (self.rail.drag.ck == "h") {

                  if (ay > dz && ax <= locktollerance) {
                    self.rail.drag = false;
                  }
                  else if (ax > dz) self.rail.drag.dl = "h";

                }

                if (!self.rail.drag.dl) return self.cancelEvent(e);

                self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                self.hasmoving = true;
              }

              if (self.preventclick && !self.preventclick.click) {
                self.preventclick.click = self.preventclick.tg.onclick || false;
                self.preventclick.tg.onclick = self.onpreventclick;
              }

              if (self.rail.drag.dl) {
                if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
                else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
              }

              self.synched("touchmove", function () {
                if (self.rail.drag && (self.rail.drag.pt == 2)) {
                  if (self.prepareTransition) self.resetTransition();
                  if (self.rail.scrollable) self.setScrollTop(ny);
                  self.scrollmom.update(fx, fy);
                  if (self.railh && self.railh.scrollable) {
                    self.setScrollLeft(nx);
                    self.showCursor(ny, nx);
                  } else {
                    self.showCursor(ny);
                  }
                  if (cap.isie10) _doc.selection.clear();
                }
              });

              return self.cancelEvent(e);

            }
            else if (self.rail.drag.pt == 1) { // drag on cursor
              return self.onmousemove(e);
            }

          };

          self.ontouchstartCursor = function (e, hronly) {
            if (self.rail.drag && self.rail.drag.pt != 3) return;
            if (self.locked) return self.cancelEvent(e);
            self.cancelScroll();
            self.rail.drag = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
              sx: self.scroll.x,
              sy: self.scroll.y,
              pt: 3,
              hr: (!!hronly)
            };
            var tg = self.getTarget(e);
            if (!self.ispage && cap.hasmousecapture) tg.setCapture();
            if (self.isiframe && !cap.hasmousecapture) {
              self.saved.csspointerevents = self.doc.css("pointer-events");
              self.css(self.doc, { "pointer-events": "none" });
            }
            return self.cancelEvent(e);
          };

          self.ontouchendCursor = function (e) {
            if (self.rail.drag) {
              if (cap.hasmousecapture) _doc.releaseCapture();
              if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
              if (self.rail.drag.pt != 3) return;
              self.rail.drag = false;
              return self.cancelEvent(e);
            }
          };

          self.ontouchmoveCursor = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt != 3) return;

              self.cursorfreezed = true;

              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                if (self.scroll.x < 0) self.scroll.x = 0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x > mw) self.scroll.x = mw;
              } else {
                self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                if (self.scroll.y < 0) self.scroll.y = 0;
                var my = self.scrollvaluemax;
                if (self.scroll.y > my) self.scroll.y = my;
              }

              self.synched('touchmove', function () {
                if (self.rail.drag && (self.rail.drag.pt == 3)) {
                  self.showCursor();
                  if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed);
                  else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed);
                }
              });

              return self.cancelEvent(e);
            }

          };

        }

        self.onmousedown = function (e, hronly) {
          if (self.rail.drag && self.rail.drag.pt != 1) return;
          if (self.railslocked) return self.cancelEvent(e);
          self.cancelScroll();
          self.rail.drag = {
            x: e.clientX,
            y: e.clientY,
            sx: self.scroll.x,
            sy: self.scroll.y,
            pt: 1,
            hr: hronly || false
          };
          var tg = self.getTarget(e);

          if (cap.hasmousecapture) tg.setCapture();
          if (self.isiframe && !cap.hasmousecapture) {
            self.saved.csspointerevents = self.doc.css("pointer-events");
            self.css(self.doc, {
              "pointer-events": "none"
            });
          }
          self.hasmoving = false;
          return self.cancelEvent(e);
        };

        self.onmouseup = function (e) {
          if (self.rail.drag) {
            if (self.rail.drag.pt != 1) return true;

            if (cap.hasmousecapture) _doc.releaseCapture();
            if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
            self.rail.drag = false;
            self.cursorfreezed = false;
            if (self.hasmoving) self.triggerScrollEnd();
            return self.cancelEvent(e);
          }
        };

        self.onmousemove = function (e) {
          if (self.rail.drag) {
            if (self.rail.drag.pt !== 1) return;

            if (cap.ischrome && e.which === 0) return self.onmouseup(e);

            self.cursorfreezed = true;

            if (!self.hasmoving) self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);

            self.hasmoving = true;

            if (self.rail.drag.hr) {
              self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
              if (self.scroll.x < 0) self.scroll.x = 0;
              var mw = self.scrollvaluemaxw;
              if (self.scroll.x > mw) self.scroll.x = mw;
            } else {
              self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
              if (self.scroll.y < 0) self.scroll.y = 0;
              var my = self.scrollvaluemax;
              if (self.scroll.y > my) self.scroll.y = my;
            }

            self.synched('mousemove', function () {

              if (self.cursorfreezed) {
                self.showCursor();

                if (self.rail.drag.hr) {
                  self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x));
                } else {
                  self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y));
                }

              }
            });

            return self.cancelEvent(e);
          }
          else {
            self.checkarea = 0;
          }
        };

        if (cap.cantouch || opt.emulatetouch) {

          self.onpreventclick = function (e) {
            if (self.preventclick) {
              self.preventclick.tg.onclick = self.preventclick.click;
              self.preventclick = false;
              return self.cancelEvent(e);
            }
          };

          self.onclick = (cap.isios) ? false : function (e) {  // it needs to check IE11 ???
            if (self.lastmouseup) {
              self.lastmouseup = false;
              return self.cancelEvent(e);
            } else {
              return true;
            }
          };

          if (opt.grabcursorenabled && cap.cursorgrabvalue) {
            self.css((self.ispage) ? self.doc : self.win, {
              'cursor': cap.cursorgrabvalue
            });
            self.css(self.rail, {
              'cursor': cap.cursorgrabvalue
            });
          }

        } else {

          var checkSelectionScroll = function (e) {
            if (!self.selectiondrag) return;

            if (e) {
              var ww = self.win.outerHeight();
              var df = (e.pageY - self.selectiondrag.top);
              if (df > 0 && df < ww) df = 0;
              if (df >= ww) df -= ww;
              self.selectiondrag.df = df;
            }
            if (self.selectiondrag.df === 0) return;

            var rt = -(self.selectiondrag.df*2/6)|0;
            self.doScrollBy(rt);

            self.debounced("doselectionscroll", function () {
              checkSelectionScroll();
            }, 50);
          };

          if ("getSelection" in _doc) { // A grade - Major browsers
            self.hasTextSelected = function () {
              return (_doc.getSelection().rangeCount > 0);
            };
          } else if ("selection" in _doc) { //IE9-
            self.hasTextSelected = function () {
              return (_doc.selection.type != "None");
            };
          } else {
            self.hasTextSelected = function () { // no support
              return false;
            };
          }

          self.onselectionstart = function (e) {
            //  More testing - severe chrome issues           
            /* 
                          if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
                            self.win.css({'overflow':'auto'});
                            setTimeout(function(){
                              self.win.css({'overflow':'hidden'});
                            },10);                
                            return true;
                          }            
            */
            if (self.ispage) return;
            self.selectiondrag = self.win.offset();
          };

          self.onselectionend = function (e) {
            self.selectiondrag = false;
          };
          self.onselectiondrag = function (e) {
            if (!self.selectiondrag) return;
            if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
              checkSelectionScroll(e);
            }, 250);
          };
        }

        if (cap.hasw3ctouch) { //IE11+
          self.css((self.ispage) ? $("html") : self.win, { 'touch-action': 'none' });
          self.css(self.rail, {
            'touch-action': 'none'
          });
          self.css(self.cursor, {
            'touch-action': 'none'
          });
          self.bind(self.win, "pointerdown", self.ontouchstart);
          self.bind(_doc, "pointerup", self.ontouchend);
          self.delegate(_doc, "pointermove", self.ontouchmove);
        } else if (cap.hasmstouch) { //IE10
          self.css((self.ispage) ? $("html") : self.win, { '-ms-touch-action': 'none' });
          self.css(self.rail, {
            '-ms-touch-action': 'none'
          });
          self.css(self.cursor, {
            '-ms-touch-action': 'none'
          });
          self.bind(self.win, "MSPointerDown", self.ontouchstart);
          self.bind(_doc, "MSPointerUp", self.ontouchend);
          self.delegate(_doc, "MSPointerMove", self.ontouchmove);
          self.bind(self.cursor, "MSGestureHold", function (e) {
            e.preventDefault();
          });
          self.bind(self.cursor, "contextmenu", function (e) {
            e.preventDefault();
          });
        } else if (cap.cantouch) { // smartphones/touch devices
          self.bind(self.win, "touchstart", self.ontouchstart, false, true);
          self.bind(_doc, "touchend", self.ontouchend, false, true);
          self.bind(_doc, "touchcancel", self.ontouchend, false, true);
          self.delegate(_doc, "touchmove", self.ontouchmove, false, true);
        }

        if (opt.emulatetouch) {
          self.bind(self.win, "mousedown", self.ontouchstart, false, true);
          self.bind(_doc, "mouseup", self.ontouchend, false, true);
          self.bind(_doc, "mousemove", self.ontouchmove, false, true);
        }

        if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {

          self.rail.css({
            cursor: "default"
          });
          self.railh && self.railh.css({
            cursor: "default"
          });

          self.jqbind(self.rail, "mouseenter", function () {
            if (!self.ispage && !self.win.is(":visible")) return false;
            if (self.canshowonmouseevent) self.showCursor();
            self.rail.active = true;
          });
          self.jqbind(self.rail, "mouseleave", function () {
            self.rail.active = false;
            if (!self.rail.drag) self.hideCursor();
          });

          if (opt.sensitiverail) {
            self.bind(self.rail, "click", function (e) {
              self.doRailClick(e, false, false);
            });
            self.bind(self.rail, "dblclick", function (e) {
              self.doRailClick(e, true, false);
            });
            self.bind(self.cursor, "click", function (e) {
              self.cancelEvent(e);
            });
            self.bind(self.cursor, "dblclick", function (e) {
              self.cancelEvent(e);
            });
          }

          if (self.railh) {
            self.jqbind(self.railh, "mouseenter", function () {
              if (!self.ispage && !self.win.is(":visible")) return false;
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.railh, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });

            if (opt.sensitiverail) {
              self.bind(self.railh, "click", function (e) {
                self.doRailClick(e, false, true);
              });
              self.bind(self.railh, "dblclick", function (e) {
                self.doRailClick(e, true, true);
              });
              self.bind(self.cursorh, "click", function (e) {
                self.cancelEvent(e);
              });
              self.bind(self.cursorh, "dblclick", function (e) {
                self.cancelEvent(e);
              });
            }

          }

        }

        if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
          self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
          self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
          self.bind(self.cursor, "touchend", self.ontouchendCursor);
          self.cursorh && self.bind(self.cursorh, "touchstart", function (e) {
            self.ontouchstartCursor(e, true);
          });
          self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
          self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor);
        }

//        if (!cap.cantouch && !opt.emulatetouch) {
        if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {

          self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
          self.bind(_doc, "mousemove", self.onmousemove);
          if (self.onclick) self.bind(_doc, "click", self.onclick);

          self.bind(self.cursor, "mousedown", self.onmousedown);
          self.bind(self.cursor, "mouseup", self.onmouseup);

          if (self.railh) {
            self.bind(self.cursorh, "mousedown", function (e) {
              self.onmousedown(e, true);
            });
            self.bind(self.cursorh, "mouseup", self.onmouseup);
          }

          if (!self.ispage && opt.enablescrollonselection) {
            self.bind(self.win[0], "mousedown", self.onselectionstart);
            self.bind(_doc, "mouseup", self.onselectionend);
            self.bind(self.cursor, "mouseup", self.onselectionend);
            if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
            self.bind(_doc, "mousemove", self.onselectiondrag);
          }

          if (self.zoom) {
            self.jqbind(self.zoom, "mouseenter", function () {
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.zoom, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
          }

        } else {

          self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
          if (self.onclick) self.bind(_doc, "click", self.onclick);

          if (opt.cursordragontouch) {
            self.bind(self.cursor, "mousedown", self.onmousedown);
            self.bind(self.cursor, "mouseup", self.onmouseup);
            self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
              self.onmousedown(e, true);
            });
            self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
          } else {
            self.bind(self.rail, "mousedown", function (e) { e.preventDefault(); });  // prevent text selection             
            self.railh && self.bind(self.railh, "mousedown", function (e) { e.preventDefault(); });
          }

        }


        if (opt.enablemousewheel) {
          if (!self.isiframe) self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel);
          self.mousewheel(self.rail, self.onmousewheel);
          if (self.railh) self.mousewheel(self.railh, self.onmousewheelhr);
        }

        if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
          if (!self.win.attr("tabindex")) self.win.attr({
            "tabindex": ++tabindexcounter
          });

          self.bind(self.win, "focus", function (e) {  // better using native events
            domfocus = (self.getTarget(e)).id || self.getTarget(e) || false;
            self.hasfocus = true;
            if (self.canshowonmouseevent) self.noticeCursor();
          });
          self.bind(self.win, "blur", function (e) {  // *
            domfocus = false;
            self.hasfocus = false;
          });

          self.bind(self.win, "mouseenter", function (e) {   // *
            mousefocus = (self.getTarget(e)).id || self.getTarget(e) || false;
            self.hasmousefocus = true;
            if (self.canshowonmouseevent) self.noticeCursor();
          });
          self.bind(self.win, "mouseleave", function (e) {   // *       
            mousefocus = false;
            self.hasmousefocus = false;
            if (!self.rail.drag) self.hideCursor();
          });

        }


        //Thanks to http://www.quirksmode.org !!
        self.onkeypress = function (e) {
          if (self.railslocked && self.page.maxh === 0) return true;

          e = e || _win.event;
          var tg = self.getTarget(e);
          if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
            var tp = tg.getAttribute('type') || tg.type || false;
            if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
          }

          if ($(tg).attr('contenteditable')) return true;

          if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
            var key = e.keyCode;

            if (self.railslocked && key != 27) return self.cancelEvent(e);

            var ctrl = e.ctrlKey || false;
            var shift = e.shiftKey || false;

            var ret = false;
            switch (key) {
              case 38:
              case 63233: //safari
                self.doScrollBy(24 * 3);
                ret = true;
                break;
              case 40:
              case 63235: //safari
                self.doScrollBy(-24 * 3);
                ret = true;
                break;
              case 37:
              case 63232: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                  ret = true;
                }
                break;
              case 39:
              case 63234: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                  ret = true;
                }
                break;
              case 33:
              case 63276: // safari
                self.doScrollBy(self.view.h);
                ret = true;
                break;
              case 34:
              case 63277: // safari
                self.doScrollBy(-self.view.h);
                ret = true;
                break;
              case 36:
              case 63273: // safari                
                (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                ret = true;
                break;
              case 35:
              case 63275: // safari
                (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                ret = true;
                break;
              case 32:
                if (opt.spacebarenabled) {
                  (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                  ret = true;
                }
                break;
              case 27: // ESC
                if (self.zoomactive) {
                  self.doZoom();
                  ret = true;
                }
                break;
            }
            if (ret) return self.cancelEvent(e);
          }
        };

        if (opt.enablekeyboard) self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);

        self.bind(_doc, "keydown", function (e) {
          var ctrl = e.ctrlKey || false;
          if (ctrl) self.wheelprevented = true;
        });
        self.bind(_doc, "keyup", function (e) {
          var ctrl = e.ctrlKey || false;
          if (!ctrl) self.wheelprevented = false;
        });
        self.bind(_win, "blur", function (e) {
          self.wheelprevented = false;
        });

        self.bind(_win, 'resize', self.onscreenresize);
        self.bind(_win, 'orientationchange', self.onscreenresize);

        self.bind(_win, "load", self.lazyResize);

        if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
          var tmp = self.win.attr("style");
          var ww = parseFloat(self.win.css("width")) + 1;
          self.win.css('width', ww);
          self.synched("chromefix", function () {
            self.win.attr("style", tmp);
          });
        }


        // Trying a cross-browser implementation - good luck!

        self.onAttributeChange = function (e) {
          self.lazyResize(self.isieold ? 250 : 30);
        };

        if (opt.enableobserver) {

          if ((!self.isie11) && (ClsMutationObserver !== false)) {  // IE11 crashes  #568
            self.observerbody = new ClsMutationObserver(function (mutations) {
              mutations.forEach(function (mut) {
                if (mut.type == "attributes") {
                  return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show();  // Support for Bootstrap modal; Added check if the nice scroll element is inside a modal
                }
              });
              if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) return self.lazyResize(30);
            });
            self.observerbody.observe(_doc.body, {
              childList: true,
              subtree: true,
              characterData: false,
              attributes: true,
              attributeFilter: ['class']
            });
          }

          if (!self.ispage && !self.haswrapper) {

            var _dom = self.win[0];

            // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
            if (ClsMutationObserver !== false) {
              self.observer = new ClsMutationObserver(function (mutations) {
                mutations.forEach(self.onAttributeChange);
              });
              self.observer.observe(_dom, {
                childList: true,
                characterData: false,
                attributes: true,
                subtree: false
              });
              self.observerremover = new ClsMutationObserver(function (mutations) {
                mutations.forEach(function (mo) {
                  if (mo.removedNodes.length > 0) {
                    for (var dd in mo.removedNodes) {
                      if (!!self && (mo.removedNodes[dd] === _dom)) return self.remove();
                    }
                  }
                });
              });
              self.observerremover.observe(_dom.parentNode, {
                childList: true,
                characterData: false,
                attributes: false,
                subtree: false
              });
            } else {
              self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
              if (cap.isie9) _dom.attachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
              self.bind(_dom, "DOMNodeRemoved", function (e) {
                if (e.target === _dom) self.remove();
              });
            }
          }

        }

        //

        if (!self.ispage && opt.boxzoom) self.bind(_win, "resize", self.resizeZoom);
        if (self.istextarea) {
          self.bind(self.win, "keydown", self.lazyResize);
          self.bind(self.win, "mouseup", self.lazyResize);
        }

        self.lazyResize(30);

      }

      if (this.doc[0].nodeName == 'IFRAME') {
        var oniframeload = function () {
          self.iframexd = false;
          var doc;
          try {
            doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
            var a = doc.domain;
          } catch (e) {
            self.iframexd = true;
            doc = false;
          }

          if (self.iframexd) {
            if ("console" in _win) console.log('NiceScroll error: policy restriced iframe');
            return true; //cross-domain - I can't manage this        
          }

          self.forcescreen = true;

          if (self.isiframe) {
            self.iframe = {
              "doc": $(doc),
              "html": self.doc.contents().find('html')[0],
              "body": self.doc.contents().find('body')[0]
            };
            self.getContentSize = function () {
              return {
                w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
              };
            };
            self.docscroll = $(self.iframe.body);
          }

          if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
            self.win.scrollTop(0); // reset position
            self.doc.height(""); //reset height to fix browser bug
            var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
            self.doc.height(hh);
          }
          self.lazyResize(30);

          self.css($(self.iframe.body), _scrollyhidden);

          if (cap.isios && self.haswrapper) {
            self.css($(doc.body), {
              '-webkit-transform': 'translate3d(0,0,0)'
            }); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
          }

          if ('contentWindow' in this) {
            self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
          } else {
            self.bind(doc, "scroll", self.onscroll);
          }

          if (opt.enablemousewheel) {
            self.mousewheel(doc, self.onmousewheel);
          }

          if (opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);

          if (cap.cantouch) {
            self.bind(doc, "touchstart", self.ontouchstart);
            self.bind(doc, "touchmove", self.ontouchmove);
          }
          else if (opt.emulatetouch) {
            self.bind(doc, "mousedown", self.ontouchstart);
            self.bind(doc, "mousemove", function (e) {
              return self.ontouchmove(e, true);
            });
            if (opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
              'cursor': cap.cursorgrabvalue
            });
          }

          self.bind(doc, "mouseup", self.ontouchend);

          if (self.zoom) {
            if (opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
            if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
          }
        };

        if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
          setTimeout(function () {
            oniframeload.call(self.doc[0], false);
          }, 500);
        }
        self.bind(this.doc, "load", oniframeload);

      }

    };

    this.showCursor = function (py, px) {
      if (self.cursortimeout) {
        clearTimeout(self.cursortimeout);
        self.cursortimeout = 0;
      }
      if (!self.rail) return;
      if (self.autohidedom) {
        self.autohidedom.stop().css({
          opacity: opt.cursoropacitymax
        });
        self.cursoractive = true;
      }

      if (!self.rail.drag || self.rail.drag.pt != 1) {
        if (py !== undefined && py !== false) {
          self.scroll.y = (py / self.scrollratio.y) | 0;
        }
        if (px !== undefined) {
          self.scroll.x = (px / self.scrollratio.x) | 0;
        }
      }

      self.cursor.css({
        height: self.cursorheight,
        top: self.scroll.y
      });
      if (self.cursorh) {
        var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
        self.cursorh.css({
          width: self.cursorwidth,
          left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
        });
        self.cursoractive = true;
      }

      if (self.zoom) self.zoom.stop().css({
        opacity: opt.cursoropacitymax
      });
    };

    this.hideCursor = function (tm) {
      if (self.cursortimeout) return;
      if (!self.rail) return;
      if (!self.autohidedom) return;

      if (self.hasmousefocus && opt.autohidemode === "leave") return;
      self.cursortimeout = setTimeout(function () {
        if (!self.rail.active || !self.showonmouseevent) {
          self.autohidedom.stop().animate({
            opacity: opt.cursoropacitymin
          });
          if (self.zoom) self.zoom.stop().animate({
            opacity: opt.cursoropacitymin
          });
          self.cursoractive = false;
        }
        self.cursortimeout = 0;
      }, tm || opt.hidecursordelay);
    };

    this.noticeCursor = function (tm, py, px) {
      self.showCursor(py, px);
      if (!self.rail.active) self.hideCursor(tm);
    };

    this.getContentSize =
      (self.ispage) ?
        function () {
          return {
            w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
            h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
          };
        } : (self.haswrapper) ?
          function () {
            return {
              w: self.doc[0].offsetWidth,
              h: self.doc[0].offsetHeight
            };
          } : function () {
            return {
              w: self.docscroll[0].scrollWidth,
              h: self.docscroll[0].scrollHeight
            };
          };

    this.onResize = function (e, page) {

      if (!self || !self.win) return false;

      var premaxh = self.page.maxh,
          premaxw = self.page.maxw,
          previewh = self.view.h,
          previeww = self.view.w;

      self.view = {
        w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
        h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
      };

      self.page = (page) ? page : self.getContentSize();

      self.page.maxh = Math.max(0, self.page.h - self.view.h);
      self.page.maxw = Math.max(0, self.page.w - self.view.w);

      if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
        // test position        
        if (!self.ispage) {
          var pos = self.win.offset();
          if (self.lastposition) {
            var lst = self.lastposition;
            if ((lst.top == pos.top) && (lst.left == pos.left)) return self; //nothing to do            
          }
          self.lastposition = pos;
        } else {
          return self; //nothing to do
        }
      }

      if (self.page.maxh === 0) {
        self.hideRail();
        self.scrollvaluemax = 0;
        self.scroll.y = 0;
        self.scrollratio.y = 0;
        self.cursorheight = 0;
        self.setScrollTop(0);
        if (self.rail) self.rail.scrollable = false;
      } else {
        self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
        self.rail.scrollable = true;
      }

      if (self.page.maxw === 0) {
        self.hideRailHr();
        self.scrollvaluemaxw = 0;
        self.scroll.x = 0;
        self.scrollratio.x = 0;
        self.cursorwidth = 0;
        self.setScrollLeft(0);
        if (self.railh) {
          self.railh.scrollable = false;
        }
      } else {
        self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
        if (self.railh) self.railh.scrollable = (opt.horizrailenabled);
      }

      self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
      if (self.railslocked) {
        if (!self.ispage) self.updateScrollBar(self.view);
        return false;
      }

      if (!self.hidden) {
        if (!self.rail.visibility) self.showRail();
        if (self.railh && !self.railh.visibility) self.showRailHr();
      }

      if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;

      self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
      self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);

      self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
      self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);

      self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
      if (!self.hasborderbox) self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight;

      if (self.railh) {
        self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
        self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right);
      }

      if (!self.ispage) self.updateScrollBar(self.view);

      self.scrollratio = {
        x: (self.page.maxw / self.scrollvaluemaxw),
        y: (self.page.maxh / self.scrollvaluemax)
      };

      var sy = self.getScrollTop();
      if (sy > self.page.maxh) {
        self.doScrollTop(self.page.maxh);
      } else {
        self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
        self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
        if (self.cursoractive) self.noticeCursor();
      }

      if (self.scroll.y && (self.getScrollTop() === 0)) self.doScrollTo((self.scroll.y * self.scrollratio.y)|0);

      return self;
    };

    this.resize = self.onResize;

    var hlazyresize = 0;

    this.onscreenresize = function(e) {
      clearTimeout(hlazyresize);

      var hiderails = (!self.ispage && !self.haswrapper);
      if (hiderails) self.hideRails();

      hlazyresize = setTimeout(function () {
        if (self) {
          if (hiderails) self.showRails();
          self.resize();
        }
        hlazyresize=0;
      }, 120);
    };

    this.lazyResize = function (tm) { // event debounce

      clearTimeout(hlazyresize);

      tm = isNaN(tm) ? 240 : tm;

      hlazyresize = setTimeout(function () {
        self && self.resize();
        hlazyresize=0;
      }, tm);

      return self;

    };

    // derived by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
    function _modernWheelEvent(dom, name, fn, bubble) {
      self._bind(dom, name, function (e) {
        e = e || _win.event;
        var event = {
          original: e,
          target: e.target || e.srcElement,
          type: "wheel",
          deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function () {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
          },
          stopImmediatePropagation: function () {
            (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
          }
        };

        if (name == "mousewheel") {
          e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
          e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
          !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta);
        } else {
          event.deltaY = e.detail;
        }

        return fn.call(dom, event);
      }, bubble);
    }



    this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
      self.events.push({
        e: dom,
        n: name,
        f: fn,
        q: true
      });
      $(dom).on(name, fn);
    };

    this.mousewheel = function (dom, fn, bubble) { // bind mousewheel
      var el = ("jquery" in dom) ? dom[0] : dom;
      if ("onwheel" in _doc.createElement("div")) { // Modern browsers support "wheel"
        self._bind(el, "wheel", fn, bubble || false);
      } else {
        var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"; // older Webkit+IE support or older Firefox          
        _modernWheelEvent(el, wname, fn, bubble || false);
        if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); // Firefox legacy
      }
    };

    var passiveSupported = false;

    if (cap.haseventlistener) {  // W3C standard event model

      // thanks to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      try { var options = Object.defineProperty({}, "passive", { get: function () { passiveSupported = !0; } }); _win.addEventListener("test", null, options); } catch (err) { }

      this.stopPropagation = function (e) {
        if (!e) return false;
        e = (e.original) ? e.original : e;
        e.stopPropagation();
        return false;
      };

      this.cancelEvent = function(e) {
        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        if (e.preventManipulation) e.preventManipulation();  // IE10+
        return false;
      };      

    } else {

      // inspired from https://gist.github.com/jonathantneal/2415137      

      Event.prototype.preventDefault = function () {
        this.returnValue = false;
      };

      Event.prototype.stopPropagation = function () {
        this.cancelBubble = true;
      };

      _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (type, listener, useCapture) {
        this.attachEvent("on" + type, listener);
      };
      _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (type, listener, useCapture) {
        this.detachEvent("on" + type, listener);
      };

      // Thanks to http://www.switchonthecode.com !!
      this.cancelEvent = function (e) {
        e = e || _win.event;
        if (e) {          
          e.cancelBubble = true;
          e.cancel = true;
          e.returnValue = false;
        }  
        return false;
      };

      this.stopPropagation = function (e) {
        e = e || _win.event;
        if (e) e.cancelBubble = true;
        return false;
      };

    }

    this.delegate = function (dom, name, fn, bubble, active) {

      var de = delegatevents[name] || false;

      if (!de) {

        de = {
          a: [],
          l: [],
          f: function (e) {
            var lst = de.l, l = lst.length - 1;
            var r = false;
            for (var a = l; a >= 0; a--) {
              r = lst[a].call(e.target, e);
              if (r === false) return false;
            }
            return r;
          }
        };

        self.bind(dom, name, de.f, bubble, active);

        delegatevents[name] = de;

      }

      if (self.ispage) {
        de.a = [self.id].concat(de.a);
        de.l = [fn].concat(de.l);
      } else {
        de.a.push(self.id);
        de.l.push(fn);        
      }

    };

    this.undelegate = function (dom, name, fn, bubble, active) {
      var de = delegatevents[name]||false;
      if (de&&de.l) {  // quick fix #683
        for (var a=0,l=de.l.length;a<l;a++) {
          if (de.a[a] === self.id) {
            de.a.splice(a);
            de.l.splice(a);
            if (de.a.length===0) {
              self._unbind(dom,name,de.l.f);
              delegatevents[name] = null;
            }
          }
        }
      }
    };

    this.bind = function (dom, name, fn, bubble, active) {
      var el = ("jquery" in dom) ? dom[0] : dom;
      self._bind(el, name, fn, bubble || false, active || false);
    };

    this._bind = function (el, name, fn, bubble, active) { // primitive bind

      self.events.push({
        e: el,
        n: name,
        f: fn,
        b: bubble,
        q: false
      });

      (passiveSupported && (active || el == window.document || el == window.document.body || el == window)) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);
    };

    this._unbind = function (el, name, fn, bub) { // primitive unbind
      if (delegatevents[name]) self.undelegate(el, name, fn, bub);
      else el.removeEventListener(name, fn, bub);
    };

    this.unbindAll = function () {
      for (var a = 0; a < self.events.length; a++) {
        var r = self.events[a];
        (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
      }
    };

    this.showRails = function () {
      return self.showRail().showRailHr();
    };

    this.showRail = function () {
      if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
        //self.visibility = true;
        self.rail.visibility = true;
        self.rail.css('display', 'block');
      }
      return self;
    };

    this.showRailHr = function () {
      if (self.railh) {
        if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
          self.railh.visibility = true;
          self.railh.css('display', 'block');
        }
      }
      return self;
    };

    this.hideRails = function () {
      return self.hideRail().hideRailHr();
    };

    this.hideRail = function () {
      //self.visibility = false;
      self.rail.visibility = false;
      self.rail.css('display', 'none');
      return self;
    };

    this.hideRailHr = function () {
      if (self.railh) {
        self.railh.visibility = false;
        self.railh.css('display', 'none');
      }
      return self;
    };

    this.show = function () {
      self.hidden = false;
      self.railslocked = false;
      return self.showRails();
    };

    this.hide = function () {
      self.hidden = true;
      self.railslocked = true;
      return self.hideRails();
    };

    this.toggle = function () {
      return (self.hidden) ? self.show() : self.hide();
    };

    this.remove = function () {
      self.stop();
      if (self.cursortimeout) clearTimeout(self.cursortimeout);
      for (var n in self.delaylist) if (self.delaylist[n]) clearAnimationFrame(self.delaylist[n].h);
      self.doZoomOut();
      self.unbindAll();

      if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug

      if (self.observer !== false) self.observer.disconnect();
      if (self.observerremover !== false) self.observerremover.disconnect();
      if (self.observerbody !== false) self.observerbody.disconnect();

      self.events = null;

      if (self.cursor) {
        self.cursor.remove();
      }
      if (self.cursorh) {
        self.cursorh.remove();
      }
      if (self.rail) {
        self.rail.remove();
      }
      if (self.railh) {
        self.railh.remove();
      }
      if (self.zoom) {
        self.zoom.remove();
      }
      for (var a = 0; a < self.saved.css.length; a++) {
        var d = self.saved.css[a];
        d[0].css(d[1], (d[2] === undefined) ? '' : d[2]);
      }
      self.saved = false;
      self.me.data('__nicescroll', ''); //erase all traces

      // memory leak fixed by GianlucaGuarini - thanks a lot!
      // remove the current nicescroll from the $.nicescroll array & normalize array
      var lst = $.nicescroll;
      lst.each(function (i) {
        if (!this) return;
        if (this.id === self.id) {
          delete lst[i];
          for (var b = ++i; b < lst.length; b++ , i++) lst[i] = lst[b];
          lst.length--;
          if (lst.length) delete lst[lst.length];
        }
      });

      for (var i in self) {
        self[i] = null;
        delete self[i];
      }

      self = null;

    };

    this.scrollstart = function (fn) {
      this.onscrollstart = fn;
      return self;
    };
    this.scrollend = function (fn) {
      this.onscrollend = fn;
      return self;
    };
    this.scrollcancel = function (fn) {
      this.onscrollcancel = fn;
      return self;
    };

    this.zoomin = function (fn) {
      this.onzoomin = fn;
      return self;
    };
    this.zoomout = function (fn) {
      this.onzoomout = fn;
      return self;
    };

    this.isScrollable = function (e) {
      var dom = (e.target) ? e.target : e;
      if (dom.nodeName == 'OPTION') return true;
      while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
        if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };

    this.getViewport = function (me) {
      var dom = (me && me.parentNode) ? me.parentNode : false;
      while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        if (/fixed|absolute/.test(dd.css("position"))) return dd;
        var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
        if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
        if (dd.getNiceScroll().length > 0) return dd;
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };

    this.triggerScrollStart = function (cx, cy, rx, ry, ms) {

      if (self.onscrollstart) {
        var info = {
          type: "scrollstart",
          current: {
            x: cx,
            y: cy
          },
          request: {
            x: rx,
            y: ry
          },
          end: {
            x: self.newscrollx,
            y: self.newscrolly
          },
          speed: ms
        };
        self.onscrollstart.call(self, info);
      }

    };

    this.triggerScrollEnd = function () {
      if (self.onscrollend) {

        var px = self.getScrollLeft();
        var py = self.getScrollTop();

        var info = {
          type: "scrollend",
          current: {
            x: px,
            y: py
          },
          end: {
            x: px,
            y: py
          }
        };

        self.onscrollend.call(self, info);

      }

    };

    var scrolldiry = 0, scrolldirx = 0, scrolltmr = 0, scrollspd = 1;

    function doScrollRelative(px, py, chkscroll, iswheel) {

      if (!self.scrollrunning) {
        self.newscrolly = self.getScrollTop();
        self.newscrollx = self.getScrollLeft();
        scrolltmr = now();
      }

      var gap = (now() - scrolltmr);
      scrolltmr = now();

      if (gap > 350) {
        scrollspd = 1;
      } else {
        scrollspd += (2 - scrollspd) / 10;
      }

      px = px * scrollspd | 0;
      py = py * scrollspd | 0;

      if (px) {

        if (iswheel) { // mouse-only
          if (px < 0) {  // fix apple magic mouse swipe back/forward
            if (self.getScrollLeft() >= self.page.maxw) return true;
          } else {
            if (self.getScrollLeft() <= 0) return true;
          }
        }

        var dx = px > 0 ? 1 : -1;

        if (scrolldirx !== dx) {
          if (self.scrollmom) self.scrollmom.stop();
          self.newscrollx = self.getScrollLeft();
          scrolldirx = dx;
        }

        self.lastdeltax -= px;

      }

      if (py) {

        var chk = (function () {
          var top = self.getScrollTop();
          if (py < 0) {
            if (top >= self.page.maxh) return true;
          } else {
            if (top <= 0) return true;
          }
        })();

        if (chk) {
          if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) return true;
          var ny = self.view.h >> 1;
          if (self.newscrolly < -ny) { self.newscrolly = -ny; py = -1; }
          else if (self.newscrolly > self.page.maxh + ny) { self.newscrolly = self.page.maxh + ny; py = 1; }
          else py = 0;
        }

        var dy = py > 0 ? 1 : -1;

        if (scrolldiry !== dy) {
          if (self.scrollmom) self.scrollmom.stop();
          self.newscrolly = self.getScrollTop();
          scrolldiry = dy;
        }

        self.lastdeltay -= py;

      }

      if (py || px) {
        self.synched("relativexy", function () {

          var dty = self.lastdeltay + self.newscrolly;
          self.lastdeltay = 0;

          var dtx = self.lastdeltax + self.newscrollx;
          self.lastdeltax = 0;

          if (!self.rail.drag) self.doScrollPos(dtx, dty);

        });
      }

    }

    var hasparentscrollingphase = false;

    function execScrollWheel(e, hr, chkscroll) {
      var px, py;

      if (!chkscroll && hasparentscrollingphase) return true;

      if (e.deltaMode === 0) { // PIXEL
        px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
        py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0;
      } else if (e.deltaMode === 1) { // LINE
        px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
        py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0;
      }

      if (hr && opt.oneaxismousemode && (px === 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
        px = py;
        py = 0;

        if (chkscroll) {
          var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
          if (hrend) {  // preserve vertical scrolling
            py = px;
            px = 0;
          }
        }

      }

      // invert horizontal direction for rtl mode
      if (self.isrtlmode) px = -px;

      var chk = doScrollRelative(px, py, chkscroll, true);

      if (chk) {
        if (chkscroll) hasparentscrollingphase = true;
      } else {
        hasparentscrollingphase = false;
        e.stopImmediatePropagation();
        return e.preventDefault();
      }

    }

    this.onmousewheel = function (e) {
      if (self.wheelprevented||self.locked) return false;
      if (self.railslocked) {
        self.debounced("checkunlock", self.resize, 250);
        return false;
      }
      if (self.rail.drag) return self.cancelEvent(e);

      if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) opt.oneaxismousemode = false; // check two-axis mouse support (not very elegant)

      if (opt.oneaxismousemode && e.deltaX === 0) {
        if (!self.rail.scrollable) {
          if (self.railh && self.railh.scrollable) {
            return self.onmousewheelhr(e);
          } else {
            return true;
          }
        }
      }

      var nw = now();
      var chk = false;
      if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
      var ret = execScrollWheel(e, false, chk);
      if (ret) self.checkarea = 0;
      return ret;
    };

    this.onmousewheelhr = function (e) {
      if (self.wheelprevented) return;
      if (self.railslocked || !self.railh.scrollable) return true;
      if (self.rail.drag) return self.cancelEvent(e);

      var nw = now();
      var chk = false;
      if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this is not my business
      if (self.railslocked) return self.cancelEvent(e);

      return execScrollWheel(e, true, chk);
    };

    this.stop = function () {
      self.cancelScroll();
      if (self.scrollmon) self.scrollmon.stop();
      self.cursorfreezed = false;
      self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
      self.noticeCursor();
      return self;
    };

    this.getTransitionSpeed = function (dif) {

      return 80 + (dif / 72) * opt.scrollspeed |0;

    };

    if (!opt.smoothscroll) {
      this.doScrollLeft = function (x, spd) { //direct
        var y = self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };
      this.doScrollTop = function (y, spd) { //direct
        var x = self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };
      this.doScrollPos = function (x, y, spd) { //direct
        var nx = (x > self.page.maxw) ? self.page.maxw : x;
        if (nx < 0) nx = 0;
        var ny = (y > self.page.maxh) ? self.page.maxh : y;
        if (ny < 0) ny = 0;
        self.synched('scroll', function () {
          self.setScrollTop(ny);
          self.setScrollLeft(nx);
        });
      };
      this.cancelScroll = function () { }; // direct

    } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {

      var lasttransitionstyle = '';

      this.resetTransition = function () {
        lasttransitionstyle = '';
        self.doc.css(cap.prefixstyle + 'transition-duration', '0ms');
      };

      this.prepareTransition = function (dif, istime) {
        var ex = (istime) ? dif : self.getTransitionSpeed(dif);
        var trans = ex + 'ms';
        if (lasttransitionstyle !== trans) {
          lasttransitionstyle = trans;
          self.doc.css(cap.prefixstyle + 'transition-duration', trans);
        }
        return ex;
      };

      this.doScrollLeft = function (x, spd) { //trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollTop = function (y, spd) { //trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };

      this.cursorupdate = {
        running: false,
        start: function () {
          var m = this;

          if (m.running) return;
          m.running = true;

          var loop = function () {
            if (m.running) setAnimationFrame(loop);
            self.showCursor(self.getScrollTop(), self.getScrollLeft());
            self.notifyScrollEvent(self.win[0]);
          };

          setAnimationFrame(loop);
        },
        stop: function () {
          this.running = false;
        }
      };

      this.doScrollPos = function (x, y, spd) { //trans

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection      

        if (!opt.bouncescroll) {
          if (y < 0) y = 0;
          else if (y > self.page.maxh) y = self.page.maxh;
          if (x < 0) x = 0;
          else if (x > self.page.maxw) x = self.page.maxw;
        } else {
          if (y < 0) y = y / 2 | 0;
          else if (y > self.page.maxh) y = self.page.maxh + (y - self.page.maxh) / 2 | 0;
          if (x < 0) x = x / 2 | 0;
          else if (x > self.page.maxw) x = self.page.maxw + (x - self.page.maxw) / 2 | 0;
        }

        if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;

        self.newscrolly = y;
        self.newscrollx = x;

        var top = self.getScrollTop();
        var lft = self.getScrollLeft();

        var dst = {};
        dst.x = x - lft;
        dst.y = y - top;

        var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;

        var ms = self.prepareTransition(dd);

        if (!self.scrollrunning) {
          self.scrollrunning = true;
          self.triggerScrollStart(lft, top, x, y, ms);
          self.cursorupdate.start();
        }

        self.scrollendtrapped = true;

        if (!cap.transitionend) {
          if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
          self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
        }

        self.setScrollTop(self.newscrolly);
        self.setScrollLeft(self.newscrollx);

      };

      this.cancelScroll = function () {
        if (!self.scrollendtrapped) return true;
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.scrollrunning = false;
        if (!cap.transitionend) clearTimeout(cap.transitionend);
        self.scrollendtrapped = false;
        self.resetTransition();
        self.setScrollTop(py); // fire event onscroll
        if (self.railh) self.setScrollLeft(px);
        if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;

        self.cursorfreezed = false;

        self.cursorupdate.stop();
        self.showCursor(py, px);
        return self;
      };

      this.onScrollTransitionEnd = function () {

        if (!self.scrollendtrapped) return;

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (py < 0) py = 0;
        else if (py > self.page.maxh) py = self.page.maxh;
        if (px < 0) px = 0;
        else if (px > self.page.maxw) px = self.page.maxw;
        if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, opt.snapbackspeed);

        if (self.scrollrunning) self.triggerScrollEnd();
        self.scrollrunning = false;

        self.scrollendtrapped = false;
        self.resetTransition();
        self.timerscroll = false;
        self.setScrollTop(py); // fire event onscroll        
        if (self.railh) self.setScrollLeft(px); // fire event onscroll left

        self.cursorupdate.stop();
        self.noticeCursor(false, py, px);

        self.cursorfreezed = false;

      };

    } else {

      this.doScrollLeft = function (x, spd) { //no-trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollTop = function (y, spd) { //no-trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollPos = function (x, y, spd) { //no-trans

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection

        var clipped = false;

        if (!self.bouncescroll || !self.rail.visibility) {
          if (y < 0) {
            y = 0;
            clipped = true;
          } else if (y > self.page.maxh) {
            y = self.page.maxh;
            clipped = true;
          }
        }
        if (!self.bouncescroll || !self.railh.visibility) {
          if (x < 0) {
            x = 0;
            clipped = true;
          } else if (x > self.page.maxw) {
            x = self.page.maxw;
            clipped = true;
          }
        }

        if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) return true;

        self.newscrolly = y;
        self.newscrollx = x;

        self.dst = {};
        self.dst.x = x - px;
        self.dst.y = y - py;
        self.dst.px = px;
        self.dst.py = py;

        var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
        var ms = self.getTransitionSpeed(dd);

        self.bzscroll = {};

        var p3 = (clipped) ? 1 : 0.58;
        self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
        self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);

        var loopid = now();

        var loop = function () {

          if (!self.scrollrunning) return;
          var x = self.bzscroll.y.getPos();

          self.setScrollLeft(self.bzscroll.x.getNow());
          self.setScrollTop(self.bzscroll.y.getNow());

          if (x <= 1) {
            self.timer = setAnimationFrame(loop);
          } else {
            self.scrollrunning = false;
            self.timer = 0;
            self.triggerScrollEnd();
          }

        };

        if (!self.scrollrunning) {
          self.triggerScrollStart(px, py, x, y, ms);
          self.scrollrunning = true;
          self.timer = setAnimationFrame(loop);
        }

      };

      this.cancelScroll = function () {
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;
        self.bzscroll = false;
        self.scrollrunning = false;
        return self;
      };

    }

    this.doScrollBy = function (stp, relative) {
      doScrollRelative(0, stp);
    };

    this.doScrollLeftBy = function (stp, relative) {
      doScrollRelative(stp, 0);
    };

    this.doScrollTo = function (pos, relative) {
      var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
      if (ny < 0) ny = 0;
      else if (ny > self.page.maxh) ny = self.page.maxh;
      self.cursorfreezed = false;
      self.doScrollTop(pos);
    };

    this.checkContentSize = function () {
      var pg = self.getContentSize();
      if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
    };

    self.onscroll = function (e) {
      if (self.rail.drag) return;
      if (!self.cursorfreezed) {
        self.synched('scroll', function () {
          self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
          if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x);
          self.noticeCursor();
        });
      }
    };
    self.bind(self.docscroll, "scroll", self.onscroll);

    this.doZoomIn = function (e) {
      if (self.zoomactive) return;
      self.zoomactive = true;

      self.zoomrestore = {
        style: {}
      };
      var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
      var win = self.win[0].style;
      for (var a in lst) {
        var pp = lst[a];
        self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : '';
      }

      self.zoomrestore.style.width = self.win.css('width');
      self.zoomrestore.style.height = self.win.css('height');

      self.zoomrestore.padding = {
        w: self.win.outerWidth() - self.win.width(),
        h: self.win.outerHeight() - self.win.height()
      };

      if (cap.isios4) {
        self.zoomrestore.scrollTop = $window.scrollTop();
        $window.scrollTop(0);
      }

      self.win.css({
        position: (cap.isios4) ? "absolute" : "fixed",
        top: 0,
        left: 0,
        zIndex: globalmaxzindex + 100,
        margin: 0
      });
      var bkg = self.win.css("backgroundColor");
      if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
      self.rail.css({
        zIndex: globalmaxzindex + 101
      });
      self.zoom.css({
        zIndex: globalmaxzindex + 102
      });
      self.zoom.css('backgroundPosition', '0 -18px');
      self.resizeZoom();

      if (self.onzoomin) self.onzoomin.call(self);

      return self.cancelEvent(e);
    };

    this.doZoomOut = function (e) {
      if (!self.zoomactive) return;
      self.zoomactive = false;

      self.win.css("margin", "");
      self.win.css(self.zoomrestore.style);

      if (cap.isios4) {
        $window.scrollTop(self.zoomrestore.scrollTop);
      }

      self.rail.css({
        "z-index": self.zindex
      });
      self.zoom.css({
        "z-index": self.zindex
      });
      self.zoomrestore = false;
      self.zoom.css('backgroundPosition', '0 0');
      self.onResize();

      if (self.onzoomout) self.onzoomout.call(self);

      return self.cancelEvent(e);
    };

    this.doZoom = function (e) {
      return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
    };

    this.resizeZoom = function () {
      if (!self.zoomactive) return;

      var py = self.getScrollTop(); //preserve scrolling position
      self.win.css({
        width: $window.width() - self.zoomrestore.padding.w + "px",
        height: $window.height() - self.zoomrestore.padding.h + "px"
      });
      self.onResize();

      self.setScrollTop(Math.min(self.page.maxh, py));
    };

    this.init();

    $.nicescroll.push(this);

  };

  // Inspired by the work of Kin Blas
  // http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
  var ScrollMomentumClass2D = function (nc) {
    var self = this;
    this.nc = nc;

    this.lastx = 0;
    this.lasty = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.lasttime = 0;
    this.steptime = 0;
    this.snapx = false;
    this.snapy = false;
    this.demulx = 0;
    this.demuly = 0;

    this.lastscrollx = -1;
    this.lastscrolly = -1;

    this.chkx = 0;
    this.chky = 0;

    this.timer = 0;

    this.reset = function (px, py) {
      self.stop();
      self.steptime = 0;
      self.lasttime = now();
      self.speedx = 0;
      self.speedy = 0;
      self.lastx = px;
      self.lasty = py;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };

    this.update = function (px, py) {
      var tm = now();
      self.steptime = tm - self.lasttime;
      self.lasttime = tm;
      var dy = py - self.lasty;
      var dx = px - self.lastx;
      var sy = self.nc.getScrollTop();
      var sx = self.nc.getScrollLeft();
      var newy = sy + dy;
      var newx = sx + dx;
      self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
      self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
      self.speedx = dx;
      self.speedy = dy;
      self.lastx = px;
      self.lasty = py;
    };

    this.stop = function () {
      self.nc.unsynched("domomentum2d");
      if (self.timer) clearTimeout(self.timer);
      self.timer = 0;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };

    this.doSnapy = function (nx, ny) {
      var snap = false;

      if (ny < 0) {
        ny = 0;
        snap = true;
      } else if (ny > self.nc.page.maxh) {
        ny = self.nc.page.maxh;
        snap = true;
      }

      if (nx < 0) {
        nx = 0;
        snap = true;
      } else if (nx > self.nc.page.maxw) {
        nx = self.nc.page.maxw;
        snap = true;
      }

      (snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
    };

    this.doMomentum = function (gp) {
      var t = now();
      var l = (gp) ? t + gp : self.lasttime;

      var sl = self.nc.getScrollLeft();
      var st = self.nc.getScrollTop();

      var pageh = self.nc.page.maxh;
      var pagew = self.nc.page.maxw;

      self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
      self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;

      var chk = l && (t - l) <= 60;

      if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;

      var sy = (self.speedy && chk) ? self.speedy : false;
      var sx = (self.speedx && chk) ? self.speedx : false;

      if (sy || sx) {
        var tm = Math.max(16, self.steptime); //timeout granularity

        if (tm > 50) { // do smooth
          var xm = tm / 50;
          self.speedx *= xm;
          self.speedy *= xm;
          tm = 50;
        }

        self.demulxy = 0;

        self.lastscrollx = self.nc.getScrollLeft();
        self.chkx = self.lastscrollx;
        self.lastscrolly = self.nc.getScrollTop();
        self.chky = self.lastscrolly;

        var nx = self.lastscrollx;
        var ny = self.lastscrolly;

        var onscroll = function () {
          var df = ((now() - t) > 600) ? 0.04 : 0.02;

          if (self.speedx) {
            nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
            self.lastscrollx = nx;
            if ((nx < 0) || (nx > pagew)) df = 0.10;
          }

          if (self.speedy) {
            ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
            self.lastscrolly = ny;
            if ((ny < 0) || (ny > pageh)) df = 0.10;
          }

          self.demulxy = Math.min(1, self.demulxy + df);

          self.nc.synched("domomentum2d", function () {

            if (self.speedx) {
              var scx = self.nc.getScrollLeft();
              //              if (scx != self.chkx) self.stop();
              self.chkx = nx;
              self.nc.setScrollLeft(nx);
            }

            if (self.speedy) {
              var scy = self.nc.getScrollTop();
              //              if (scy != self.chky) self.stop();
              self.chky = ny;
              self.nc.setScrollTop(ny);
            }

            if (!self.timer) {
              self.nc.hideCursor();
              self.doSnapy(nx, ny);
            }

          });

          if (self.demulxy < 1) {
            self.timer = setTimeout(onscroll, tm);
          } else {
            self.stop();
            self.nc.hideCursor();
            self.doSnapy(nx, ny);
          }
        };

        onscroll();

      } else {
        self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
      }

    };

  };


  // override jQuery scrollTop
  var _scrollTop = jQuery.fn.scrollTop; // preserve original function

  jQuery.cssHooks.pageYOffset = {
    get: function (elem, computed, extra) {
      var nice = $.data(elem, '__nicescroll') || false;
      return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
    },
    set: function (elem, value) {
      var nice = $.data(elem, '__nicescroll') || false;
      (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
      return this;
    }
  };

  jQuery.fn.scrollTop = function (value) {
    if (value === undefined) {
      var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
      return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
    } else {
      return this.each(function () {
        var nice = $.data(this, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
      });
    }
  };

  // override jQuery scrollLeft
  var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function

  $.cssHooks.pageXOffset = {
    get: function (elem, computed, extra) {
      var nice = $.data(elem, '__nicescroll') || false;
      return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
    },
    set: function (elem, value) {
      var nice = $.data(elem, '__nicescroll') || false;
      (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
      return this;
    }
  };

  jQuery.fn.scrollLeft = function (value) {
    if (value === undefined) {
      var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
      return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
    } else {
      return this.each(function () {
        var nice = $.data(this, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
      });
    }
  };

  var NiceScrollArray = function (doms) {
    var self = this;
    this.length = 0;
    this.name = "nicescrollarray";

    this.each = function (fn) {
      $.each(self, fn);
      return self;
    };

    this.push = function (nice) {
      self[self.length] = nice;
      self.length++;
    };

    this.eq = function (idx) {
      return self[idx];
    };

    if (doms) {
      for (var a = 0; a < doms.length; a++) {
        var nice = $.data(doms[a], '__nicescroll') || false;
        if (nice) {
          this[this.length] = nice;
          this.length++;
        }
      }
    }

    return this;
  };

  function mplex(el, lst, fn) {
    for (var a = 0, l = lst.length; a < l; a++) fn(el, lst[a]);
  }
  mplex(
    NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'],
    function (e, n) {
      e[n] = function () {
        var args = arguments;
        return this.each(function () {
          this[n].apply(this, args);
        });
      };
    }
  );

  jQuery.fn.getNiceScroll = function (index) {
    if (index === undefined) {
      return new NiceScrollArray(this);
    } else {
      return this[index] && $.data(this[index], '__nicescroll') || false;
    }
  };

  var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];  // jQuery 3 migration
  pseudos.nicescroll = function (a) {
    return $.data(a, '__nicescroll') !== undefined;
  };

  $.fn.niceScroll = function (wrapper, _opt) {
    if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
      _opt = wrapper;
      wrapper = false;
    }

    var ret = new NiceScrollArray();

    this.each(function () {
      var $this = $(this);

      var opt = $.extend({}, _opt); // cloning

      if (wrapper || false) {
        var wrp = $(wrapper);
        opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
        opt.win = $this;
      }
      var docundef = !("doc" in opt);
      if (!docundef && !("win" in opt)) opt.win = $this;

      var nice = $this.data('__nicescroll') || false;
      if (!nice) {
        opt.doc = opt.doc || $this;
        nice = new NiceScrollClass(opt, $this);
        $this.data('__nicescroll', nice);
      }
      ret.push(nice);
    });

    return (ret.length === 1) ? ret[0] : ret;
  };

  _win.NiceScroll = {
    getjQuery: function () {
      return jQuery;
    }
  };

  if (!$.nicescroll) {
    $.nicescroll = new NiceScrollArray();
    $.nicescroll.options = _globaloptions;
  }

}));;
//http://www.itshij.com/divresize
//监听div大小变化
(function($, h, c) {
	var a = $([]),
	e = $.resize = $.extend($.resize, {}),
	i,
	k = "setTimeout",
	j = "resize",
	d = j + "-special-event",
	b = "delay",
	f = "throttleWindow";
	e[b] = 250;
	e[f] = true;
	$.event.special[j] = {
		setup: function() {
			if (!e[f] && this[k]) {
				return false;
			}
			var l = $(this);
			a = a.add(l);
			$.data(this, d, {
				w: l.width(),
				h: l.height()
			});
			if (a.length === 1) {
				g();
			}
		},
		teardown: function() {
			if (!e[f] && this[k]) {
				return false;
			}
			var l = $(this);
			a = a.not(l);
			l.removeData(d);
			if (!a.length) {
				clearTimeout(i);
			}
		},
		add: function(l) {
			if (!e[f] && this[k]) {
				return false;
			}
			var n;
			function m(s, o, p) {
				var q = $(this),
				r = $.data(this, d);
				r.w = o !== c ? o: q.width();
				r.h = p !== c ? p: q.height();
				n.apply(this, arguments);
			}
			if ($.isFunction(l)) {
				n = l;
				return m;
			} else {
				n = l.handler;
				l.handler = m;
			}
		}
	};
	function g() {
		i = h[k](function() {
			a.each(function() {
				var n = $(this),
				m = n.width(),
				l = n.height(),
				o = $.data(this, d);
				if (m !== o.w || l !== o.h) {
					n.trigger(j, [o.w = m, o.h = l]);
				}
			});
			g();
		},
		e[b]);
	}
})(jQuery, this);;
/**
 * Main js for hexo-theme-Annie.
 *
 * @Author   Sariay
 * @DateTime 2019-08-26
 */
jQuery(document).ready(function($) {

	"use strict";

	/**
	 * Some global variables.
	 */
	var scrollLimitG = 500,
		scrollSpeedG = 500,
		delayTimeG = 500,
		headerH = $('header').outerHeight(),
		headerAId = '#navigation-show a, #logo a',
		postContentH = $('#article-content').outerHeight(),
		mainH = $("main").outerHeight(),
		investmentContainerH = $(".investment-container").outerHeight(),
		postPageId = '.layout-post',
		postCoverId = '#current-post-cover',
		postTocId = '#catelog-list',
		paginationId = '#pagination a',
		paginationContainer = '#layout-cart, #layout-pure';
	// loadAnimation：Loading animation for 'fun Annie_LoadPost()' & 'fun Annie_QueryPostsByTag()'
	var loadAnimation = '<div class = "transition"><div class = "three-bounce1"> </div> <div class = "three-bounce2"> </div> <div class = "three-bounce3"> </div> </div> ';

	/**
	 * Preloader for html page. If the background image of header is loaded, it will remove the mask layer immediately, or else after 10 seconds at most!
	 *
	 * @method   Annie_Preloader
	 */
	var Annie_Preloader = function() {
		var mode = $('header').attr('data-img-mode'),
			curImgSrc = ' ',
			randomMax = $('header').attr('data-random-max'),
			randomNum = 0;

		if($(postPageId).length && $(postCoverId).length) {
			mode = 'post';
		}

		switch(mode) {
			case 'random':
				{
					randomNum = Math.floor(Math.random() * (randomMax - 1) + 1);
					curImgSrc = $('header').attr('data-random-src') + randomNum + '.jpg';
				}
				break;
			case 'normal':
				{
					curImgSrc = $('header').attr('data-normal-src');
				}
				break;
			case 'post':
				{
					curImgSrc = $(postCoverId).attr('data-scr');
				}
				break;
			default:
				{
					//TODO: Maybe, it loads slowly!
					curImgSrc = 'https://source.unsplash.com/collection/954550/1920x1080';
				}
				break;
		}

		/**
		 * Html page scroll down to the height for header!
		 *
		 * @method   Annie_Scroll
		 */
		function Annie_Scroll() {
			$('html, body').delay(delayTimeG * 2).animate({
				scrollTop: headerH + 2
			}, delayTimeG * 3);
		}

		/**
		 * Set & then remove the mask layer for html page!
		 *
		 * @method   Annie_Transition
		 */
		function Annie_Transition() {
			$('#status').fadeOut();
			$('#preloader').delay(delayTimeG).fadeOut('slow');
			$('body').delay(delayTimeG);
			
			// delayTime = delayTimeG = 500, make the html page can be scrolled.
			setTimeout(function() {
				$('html').removeClass('html-loading');
			}, delayTimeG);
		}

		/**
		 * 背景图片加载完成后，设置header的背景
		 *
		 * @method   Annie_SetBg
		 * @param    {[type]}    imgSrc [description]
		 */
		function Annie_SetBg(imgSrc) {
			var backgroundImg = 'url(' + imgSrc + ')';
			$('header').css('background-image', backgroundImg);

			Annie_Transition();

			if($(postPageId).length) {
				Annie_Scroll()
			}
		}

		/**
		 * header背景图片主色提取，根据主色设置导航菜单项、motto的颜色（黑或白)。
		 * PLUGIN：plugin/vibrant/vibrant.js
		 * WARNING：背景主色提取可能影响页面加载速度 or 引起CROS bug！
		 * TODO：重构header模块
		 *
		 * @method   Annie_ColorExtraction
		 * @param    {[type]}              img [description]
		 */
		function Annie_ColorExtraction(img) {
			var vibrant = new Vibrant(img),
				swatches = vibrant.swatches(),
				mainColor = '',
				mainRgb = [],
				mainVibrant = swatches['Vibrant'];
			if(mainVibrant) {
				mainColor = mainVibrant.getBodyTextColor();
				mainRgb = mainVibrant.getRgb();
			}

			var fontColor = ' ', //mainColor
				grayLevel = mainRgb[0] * 0.299 + mainRgb[1] * 0.587 + mainRgb[2] * 0.114;
			if(grayLevel >= 192) {
				// 若为浅色，把文字设置为黑色
				fontColor = '#000';
			} else {
				// 若为深色，把文字设置为白色
				fontColor = '#fff';
			}

			// set motto color
			$('.motto, #read-more').css({
				'color': fontColor || mainColor
			});

			// set header nav color
			$(headerAId).css({
				'color': fontColor || mainColor
			});

			$(headerAId).each(function() {
				$(this).hover(
					function() {
						$(this).css({
							'color': 'darkgoldenrod'
						});
					},
					function() {
						$(this).css({
							'color': fontColor || mainColor
						});
					}

				)
			});
		}

		/**
		 * 根据背景图片的加载状况，调用不同的方法
		 * TODO：We can use "https://github.com/desandro/imagesloaded plugin" to check img.load status!
		 */
		var img = new Image(),
			stop = setTimeout(function() {
				function timeoutCalled() {
					console.log('timeout');
					Annie_Transition();
					Annie_Scroll();
				}
				return timeoutCalled();
			}, delayTimeG * 20); // delayTime = delayTimeG * 20 = 10s

		img.crossOrigin = "Anonymous"; // TODO: CROS bug!
		img.src = curImgSrc;

		img.onerror = function() {
			if(stop) {
				clearTimeout(stop);
			}

			Annie_Transition();
			Annie_Scroll();
			console.log("Header background imgSrc:" + img.src);
			console.log('Failed to load & set background img for header!');
		}

		img.onload = function() {
			if(stop) {
				clearTimeout(stop);
			}

			Annie_SetBg(img.src);

			Annie_ColorExtraction(img);
		}
		//The following code may have a bug when using img.src 'https://source.unsplash.com/collection/954550/1920x1080' in Fixfox...( because of cache)!
		//		if( img.complete || img.height ){
		//			if ( stop ) {
		//				clearTimeout( stop );
		//			}			
		//			Annie_SetBg( img.src );	
		//		} else {
		//			img.onload = function() {
		//				if ( stop ) {
		//					clearTimeout( stop );
		//				}				
		//				Annie_SetBg( img.src );
		//			}				
		//		}
	};

	/**
	 * Nav set for theme.
	 *
	 * @method   Annie_Nav
	 */
	var Annie_Nav = function() {
		//open navigation
		$('.nav-trigger').on('click', function(event) {
			event.preventDefault();
			toggleNav(true);
			$('body').addClass('body-fixed');
		});

		//close navigation
		$('.nav-close').on('click', function(event) {
			event.preventDefault();
			toggleNav(false);
			$('body').removeClass('body-fixed');
		});

		function toggleNav(bool) {
			$('.nav-container').toggleClass('is-visible', bool);
		}

		function currentNavStatus() {
			//some operation
			var urlStr = location.href,
				urlSta = false,
				homePage = paginationContainer;

			$('#navigation-show a').each(function() {
				var currentUrl = $(this).attr('class');
				currentUrl = currentUrl.substr(10);

				if(urlStr.indexOf(currentUrl) > -1 && $(this).attr('href') != '') {
					$(this).addClass('active');
					urlSta = true;
				} else {
					$(this).removeClass('active');
				}
			});

			if(!urlSta && ($(homePage).length)) {
				$("#navigation-show a").eq(0).addClass('active');
			}
		}

		currentNavStatus();
	};

	/**
	 * Progress for page & post.
	 *
	 * @method   Annie_Progress
	 */
	var Annie_Progress = function() {
		var navBarId = "#navigation-hide",
			navBarHeight = $(navBarId).outerHeight();

		var postTitleH = $(".article-title").outerHeight(),
			postMetaH = $(".article-meta").outerHeight();

		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop(),
				docHeight = $(document).height(),
				windowHeight = $(window).height(),
				scrollPercent = 0;

			if($(postPageId).length) {
				// 80 = div.layout-post的padding-top
				scrollPercent = ((scrollTop - headerH) / (postContentH + postTitleH + postMetaH + 80 - windowHeight)) * 100;
			} else {
				scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
			}

			scrollPercent = scrollPercent.toFixed(1);

			if(scrollPercent > 100 || scrollPercent < 0) {
				scrollPercent = 100;
			}

			$('#progress-percentage h1').text(scrollPercent + "%");

			$("#progress-bar").attr("style", "width: " + (scrollPercent) + "%; display: block;");

			if(scrollTop >= ((scrollLimitG > headerH) ? scrollLimitG : headerH)) {
				$(navBarId).css({
					top: '0'
				}).show();
				$('.nav-trigger').show();
			} else {
				$(navBarId).css({
					top: '-' + navBarHeight + 'px'
				}).hide();
				$('.nav-trigger').hide();
			}

			//Current post or page title
			if(scrollTop >= headerH + 300) {
				$('#navigation-hide p').show();
			} else {
				$('#navigation-hide p').hide();
			}
		}).trigger('scroll');
	};

	/**
	 * Toc for post.
	 *
	 * @method   Annie_Toc
	 */
	var Annie_Toc = function() {
		var scrollSpeed = scrollSpeedG,
			upperLimit1 = headerH,
			upperLimit2 = mainH - investmentContainerH;
		var tocSwitchButton = ".switch-button";

		function fixedAndShowTocId() {
			$(window).scroll(function() {
				var scrollTop = $(document).scrollTop();

				if((scrollTop >= upperLimit1) && (scrollTop < upperLimit2)) {
					//屏幕宽度<=1024px时应隐藏
					$(postTocId).css('position', 'fixed').show().fadeIn(delayTimeG);

				} else {
					$(postTocId).hide().fadeOut(delayTimeG);
				}
			});
		}

		function generateToclist() {
			var katelogIns = new katelog({
				contentEl: 'article-content',
				catelogEl: 'catelog-list',
				linkClass: 'k-catelog-link',
				linkActiveClass: 'k-catelog-link-active',
				selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				supplyTop: 20,
				active: function(el) {}
			});
			//TODO: 添加目录标题、层级标题
			//var tocTitle = $( postTocId ).attr('data-title'), htmlText = '<h2>' + tocTitle + '</h2>';	
		}

		function adjustTocContainer() {
			var clickCount = 1;

			$(tocSwitchButton).on("click", function() {

				$(this).toggleClass("toc-switch-button-active");

				if(clickCount == 1) {
					$('main').toggleClass("inline-flex");
					$('#layout-toc').toggleClass("show").fadeToggle();
					clickCount = 2;
				} else {
					$('#layout-toc').toggleClass("show").fadeToggle();
					setTimeout(function() {
						$('main').toggleClass("inline-flex");
					}, delayTimeG / 2); //delayTimeG = 500ms
					clickCount = 1;
				}
			});
		}

		if($(postPageId).length) {
			fixedAndShowTocId();
		}

		if($(postTocId).length) {
			generateToclist();
		}

		if($(postPageId).length && $(postTocId).length) {
			$(tocSwitchButton).show();

			adjustTocContainer();
		} else {
			$(tocSwitchButton).hide();
		}
	};

	/**
	 * Anchor for toTop and readMore.
	 *
	 * @method   Annie_ToAnchor
	 */
	var Annie_ToAnchor = function() {
		var scrollSpeed = scrollSpeedG,
			upperLimit = scrollLimitG,
			toTop = $('#totop'),
			readMore = $('#read-more');

		toTop.hide();

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();

			if(scrollTop > upperLimit) {
				$(toTop).stop().fadeTo(delayTimeG, 1);
			} else {
				$(toTop).stop().fadeTo(delayTimeG, 0);
			}
		});

		$(toTop).click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, scrollSpeed);
			return false;
		});

		$(readMore).click(function() {
			$('html, body').animate({
				scrollTop: $('main').offset().top + 2
			}, scrollSpeed);
			return false;
		});
	};

	/**
	 * Archive by year.
	 *
	 * @method   Annie_Archive
	 */
	var Annie_Archive = function() {
		if(window.location.pathname.indexOf("archive") == -1) {
			return;
		}
		var currentYear = "",
			Newy = "";
		$("#layout-archive-year  ul li").each(function(i) {
			var year = $(this).find("em").attr("year");
			if(year < currentYear || currentYear == "") {
				currentYear = year;
				if(Newy == "") {
					Newy = year
				}
				$(this).before("<h3 class='" + currentYear + "'>" + currentYear + "<em>(" + $("[year='" + currentYear + "']").length + " posts)</em></h3>");
			}
			$(this).attr("year", currentYear);
		});

		$("#layout-archive-year h3").each(function() {
			$("#layout-archive-year ul li[year='" + $(this).attr("class") + "'").wrapAll("<div year='" + $(this).attr("class") + "'></div>");
			$("h3." + $(this).attr("class")).click(function() {
				$(this).toggleClass("title-bg").next().slideToggle(300);

			})
		});
		$("#layout-archive-year ul div[year!='" + Newy + "']").hide();
		$("h3." + Newy).addClass("title-bg");
		//TODO: Archive by month
	};

	/**
	 * InfiniteLoading to load more posts for index page！
	 *
	 * @method   Annie_LoadPost
	 */
	var Annie_LoadPost = function() {
		$('body').on('click', paginationId, function() {
			$(paginationId).text(" ").append(loadAnimation);

			$.ajax({
				type: "get",
				url: $(this).attr("href"),
				async: true,
				timeout: delayTimeG * 20, //10s
				error: function(request) {
					//TODO: error				
				},
				success: function(data) {
					var result = $(data).find("#post"),
						newhref = $(data).find(paginationId).attr("href");

					$(paginationContainer).append(result.fadeIn(delayTimeG).addClass('annie-animation-zoom'));

					$(paginationId).empty().text($(paginationId).attr('data-title'));

					if(newhref != undefined) {
						$(paginationId).attr("href", newhref);
					} else {
						$("#pagination").html("<span>" + $(paginationId).attr('data-status') + "</span>");
					}
				},
				complete: function() {
					// TODO
				}
			});

			return false;
		});
	};

	/**
	 * Tab to switch 'relate' or 'comment' module
	 *
	 * @method   Annie_Tab
	 */
	var Annie_Tab = function() {
		function tabs(tabTit, on, tabCon) {
			$(tabCon).each(function() {
				$(this).children().eq(0).show();
			});

			$(tabTit).each(function() {
				$(this).children().eq(0).addClass(on);
			});

			$(tabTit).children().click(function() {
				$(this).addClass(on).siblings().removeClass(on);
				var index = $(tabTit).children().index(this);
				$(tabCon).children().eq(index).show().siblings().hide();
			});
		}
		tabs(".investment-title-1", "on", ".investment-content");
	};

	/**
	 * Query the posts which have specified tag or category!
	 * TODO: We can use "Content filtering plugin" to instead this function!
	 *
	 * @method   Annie_QueryPostsByTag
	 */
	var Annie_QueryPostsByTag = function() {
		$('.tags a, .category a').click(function() {
			$("#TCP-title").text("Result");
			//添加查询结果之前，清除容器中的内容
			$("#TCP-content").text("").append(loadAnimation);
			var href = $(this).attr("href");
			if(href != undefined) {
				$.ajax({
					url: href,
					type: "get",
					async: true,
					error: function(request) {
						//TODO: erro
					},
					success: function(data) {
						$("#TCP-content").empty();

						var result = $(data).find(".layout-archive");
						$('#TCP-content').append(result.fadeIn(delayTimeG).addClass('annie-animation-zoom'));
						$(".layout-archive").css({
							'paddingTop': '0'
						});
						$(".layout-archive i").css({
							'marginTop': '5px',
							'marginBottom': '30px'
						});
					},
					complete: function() {
						// TODO
					}
				});
			}
			return false;
		});
	};

	/**
	 * PLUGIN: plugin/chinese/chinese.js
	 *
	 * @method   Annie_LanguageSet
	 */
	var Annie_LanguageSet = function() {
		zh_init();
	};

	/**
	 * PLUGIN: plugin/imgLazyLoader/yall.min.js
	 *
	 * @method   Annie_ImageLazyLoad
	 */
	var Annie_ImageLazyLoad = function() {
		yall({
			observeChanges: true
		});
	};

	/**
	 * Resize image to parent.
	 * PLUGIN: plugin/imgResize/jquery.resizeimagetoparent.min.js
	 * 
	 * @method   Annie_ImageResize
	 */
	var Annie_ImageResize = function() {		
		$('.post-cover img, .relate-post-cover img').resizeToParent({
			parent: '.post-cover, .relate-post-cover'
		});
	};

	/**
	 * Adjust the browser scroll bar for 'html body', 'code bloack'.
	 * PLUGIN: plugin/nicescroll/jquery.nicescroll.js
	 *
	 * @method   Annie_NiceScroll
	 */
	var Annie_NiceScroll = function() {
		var niceScrollId = 'body, .highlight',
			niceScrollSetting = $(niceScrollId).niceScroll({
					cursorborder: "none",					
					autohidemode: true
			});	
			
		// PLUGIN: js/resizediv.js
		$(niceScrollId).resize(function(event) {
			setTimeout(function() {
				niceScrollSetting.resize();
			}, 2);	
		});		
	};

	/**
	 * Other js functions. An function example might be as follows:
	 */
	/*  
		var Annie_XXX = function(argument) {
			// body...
		};
	*/

	/* Initialize */
	(function Annie_Init() {
		Annie_Preloader();
		Annie_Nav();
		Annie_Progress();
		Annie_Toc();
		Annie_ToAnchor();
		Annie_Archive();
		Annie_LoadPost();
		Annie_Tab();
		Annie_QueryPostsByTag();
		Annie_LanguageSet();
		Annie_ImageLazyLoad();
		Annie_ImageResize();
		Annie_NiceScroll();
	})();
});;
(function(e, t) {
	'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define('NaturalGallery', [], t) : 'object' == typeof exports ? exports.NaturalGallery = t() : e.NaturalGallery = t();
})(this, function() {
	var t = Math.round,
		e = Math.max,
		n = Math.floor;
	return function(e) {
		function t(i) {
			if(n[i])
				return n[i].exports;
			var o = n[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function(e, n, i) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: i
			});
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e['default'];
			} : function() {
				return e;
			};
			return t.d(n, 'a', n), n;
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}, t.p = '', t(t.s = 2);
	}([function(e, t) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var n;
		(function(e) {
			e.getIcon = function(e) {
				var t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				return t.setAttribute('viewBox', '0 0 100 100'), t.innerHTML = '<use xlink:href="#' + e + '"></use>', t;
			}, e.toggleClass = function(e, t) {
				e && t && (this.hasClass(e, t) ? this.removeClass(e, t) : this.addClass(e, t));
			}, e.removeClass = function(e, t) {
				var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
				e.className = e.className.replace(n, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			}, e.addClass = function(e, t) {
				this.hasClass(t) || (e.className += (e.className ? ' ' : '') + t);
			}, e.hasClass = function(e, t) {
				return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
			}, e.uniqBy = function(e, t) {
				var n = [];
				return e.forEach(function(e) {
					var i = n.some(function(n) {
						return e[t] === n[t];
					});
					i || n.push(e);
				}), n;
			}, e.differenceBy = function(e, t, n) {
				var i = [];
				return e.forEach(function(e) {
					var o = t.some(function(t) {
						return e[n] === t[n];
					});
					o || i.push(e);
				}), i;
			}, e.intersectionBy = function(e, t, n) {
				var i = [];
				return e.forEach(function(e) {
					var o = t.some(function(t) {
						return e[n] === t[n];
					});
					o && i.push(e);
				}), i;
			};
			var t = [{
				base: 'A',
				letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
			}, {
				base: 'AA',
				letters: /[\uA732]/g
			}, {
				base: 'AE',
				letters: /[\u00C6\u01FC\u01E2]/g
			}, {
				base: 'AO',
				letters: /[\uA734]/g
			}, {
				base: 'AU',
				letters: /[\uA736]/g
			}, {
				base: 'AV',
				letters: /[\uA738\uA73A]/g
			}, {
				base: 'AY',
				letters: /[\uA73C]/g
			}, {
				base: 'B',
				letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
			}, {
				base: 'C',
				letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
			}, {
				base: 'D',
				letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
			}, {
				base: 'DZ',
				letters: /[\u01F1\u01C4]/g
			}, {
				base: 'Dz',
				letters: /[\u01F2\u01C5]/g
			}, {
				base: 'E',
				letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
			}, {
				base: 'F',
				letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
			}, {
				base: 'G',
				letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
			}, {
				base: 'H',
				letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
			}, {
				base: 'I',
				letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
			}, {
				base: 'J',
				letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
			}, {
				base: 'K',
				letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
			}, {
				base: 'L',
				letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
			}, {
				base: 'LJ',
				letters: /[\u01C7]/g
			}, {
				base: 'Lj',
				letters: /[\u01C8]/g
			}, {
				base: 'M',
				letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
			}, {
				base: 'N',
				letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
			}, {
				base: 'NJ',
				letters: /[\u01CA]/g
			}, {
				base: 'Nj',
				letters: /[\u01CB]/g
			}, {
				base: 'O',
				letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
			}, {
				base: 'OI',
				letters: /[\u01A2]/g
			}, {
				base: 'OO',
				letters: /[\uA74E]/g
			}, {
				base: 'OU',
				letters: /[\u0222]/g
			}, {
				base: 'P',
				letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
			}, {
				base: 'Q',
				letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
			}, {
				base: 'R',
				letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
			}, {
				base: 'S',
				letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
			}, {
				base: 'T',
				letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
			}, {
				base: 'TZ',
				letters: /[\uA728]/g
			}, {
				base: 'U',
				letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
			}, {
				base: 'V',
				letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
			}, {
				base: 'VY',
				letters: /[\uA760]/g
			}, {
				base: 'W',
				letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
			}, {
				base: 'X',
				letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
			}, {
				base: 'Y',
				letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
			}, {
				base: 'Z',
				letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
			}, {
				base: 'a',
				letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
			}, {
				base: 'aa',
				letters: /[\uA733]/g
			}, {
				base: 'ae',
				letters: /[\u00E6\u01FD\u01E3]/g
			}, {
				base: 'ao',
				letters: /[\uA735]/g
			}, {
				base: 'au',
				letters: /[\uA737]/g
			}, {
				base: 'av',
				letters: /[\uA739\uA73B]/g
			}, {
				base: 'ay',
				letters: /[\uA73D]/g
			}, {
				base: 'b',
				letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
			}, {
				base: 'c',
				letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
			}, {
				base: 'd',
				letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
			}, {
				base: 'dz',
				letters: /[\u01F3\u01C6]/g
			}, {
				base: 'e',
				letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
			}, {
				base: 'f',
				letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
			}, {
				base: 'g',
				letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
			}, {
				base: 'h',
				letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
			}, {
				base: 'hv',
				letters: /[\u0195]/g
			}, {
				base: 'i',
				letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
			}, {
				base: 'j',
				letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
			}, {
				base: 'k',
				letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
			}, {
				base: 'l',
				letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
			}, {
				base: 'lj',
				letters: /[\u01C9]/g
			}, {
				base: 'm',
				letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
			}, {
				base: 'n',
				letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
			}, {
				base: 'nj',
				letters: /[\u01CC]/g
			}, {
				base: 'o',
				letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
			}, {
				base: 'oi',
				letters: /[\u01A3]/g
			}, {
				base: 'ou',
				letters: /[\u0223]/g
			}, {
				base: 'oo',
				letters: /[\uA74F]/g
			}, {
				base: 'p',
				letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
			}, {
				base: 'q',
				letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
			}, {
				base: 'r',
				letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
			}, {
				base: 's',
				letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
			}, {
				base: 't',
				letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
			}, {
				base: 'tz',
				letters: /[\uA729]/g
			}, {
				base: 'u',
				letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
			}, {
				base: 'v',
				letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
			}, {
				base: 'vy',
				letters: /[\uA761]/g
			}, {
				base: 'w',
				letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
			}, {
				base: 'x',
				letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
			}, {
				base: 'y',
				letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
			}, {
				base: 'z',
				letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
			}];
			e.removeDiacritics = function(e) {
				for(var n = 0; n < t.length; n++)
					e = e.replace(t[n].letters, t[n].base);
				return e;
			};
		})(n = t.Utility || (t.Utility = {}));
	}, function(e, t) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var n = function() {
			function e(e) {
				this.header = e, this._collection = null;
			}
			return e.prototype.isActive = function() {
				return null !== this.collection;
			}, Object.defineProperty(e.prototype, 'collection', {
				get: function() {
					return this._collection;
				},
				set: function(e) {
					this._collection = e;
				},
				enumerable: !0,
				configurable: !0
			}), e;
		}();
		t.AbstractFilter = n;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		}), n(3), n(4);
		var i = n(5);
		t.Gallery = i.Gallery;
	}, function() {}, function() {}, function(t, i, o) {
		'use strict';
		Object.defineProperty(i, '__esModule', {
			value: !0
		});
		var l = o(6),
			a = o(9),
			r = o(10),
			s = o(11),
			d = o(0),
			p = o(13),
			c = function() {
				function t(e, t, i, o) {
					for(var l in void 0 === o && (o = null), this.scrollElement = o, this._options = {
							rowHeight: 350,
							format: 'natural',
							round: 3,
							margin: 3,
							limit: 0,
							showLabels: 'hover',
							lightbox: !0,
							minRowsAtStart: 2,
							showCount: !1,
							searchFilter: !1,
							categoriesFilter: !1,
							showNone: !1,
							showOthers: !1,
							labelCategories: 'Category',
							labelNone: 'None',
							labelOthers: 'Others',
							labelSearch: 'Search',
							labelImages: 'Images',
							selectable: !1,
							zoomRotation: !0,
							infiniteScrollOffset: 0
						}, this._events = {}, this.old_scroll_top = 0, this._pswpContainer = [], this._collection = [], this._categories = [], this._selected = [], this.defaultImageRatio = .7, this.pswpElement = t, this.options)
						'undefined' == typeof i.options[l] && (i.options[l] = this.options[l]);
					this.options = i.options, this.categories = i.categories ? i.categories : [], this.rootElement = e, d.Utility.addClass(this.rootElement, 'natural-gallery'), this._events = i.events ? i.events : {}, this._events.select && (this.options.selectable = !0), (this.options.searchFilter || this.options.categoriesFilter || this.options.showCount) && (this.header = new a.Header(this), this.options.searchFilter && this.header.addFilter(new r.SearchFilter(this.header)), this.options.categoriesFilter && this.header.addFilter(new s.CategoryFilter(this.header))), this.render(), this.bodyWidth = n(this.bodyElement.getBoundingClientRect().width), i.images ? this.collection = i.images : this.pagination(), 0 === this.options.limit && this.bindScroll(null === o ? document : o);
				}
				return t.prototype.render = function() {
					var t = this;
					this.noResults = document.createElement('div'), d.Utility.addClass(this.noResults, 'natural-gallery-noresults'), this.noResults.appendChild(d.Utility.getIcon('icon-noresults')), this.noResults.style.display = 'block', this.nextButton = document.createElement('div'), d.Utility.addClass(this.nextButton, 'natural-gallery-next'), this.nextButton.appendChild(d.Utility.getIcon('icon-next')), this.nextButton.style.display = 'none', this.nextButton.addEventListener('click', function(n) {
						n.preventDefault();
						var e = t.getRowsPerPage();
						t.addElements(e), t.pagination(e);
					});
					var e = document.createElement('iframe');
					this.rootElement.appendChild(e);
					var n = null;
					e.contentWindow.addEventListener('resize', function() {
						clearTimeout(n), n = setTimeout(function() {
							t.resize();
						}, 100);
					}), this.bodyElement = document.createElement('div'), d.Utility.addClass(this.bodyElement, 'natural-gallery-body'), this.bodyElement.appendChild(this.noResults), this.header && this.rootElement.appendChild(this.header.render()), this.rootElement.appendChild(this.bodyElement), this.rootElement.appendChild(this.nextButton);
				}, t.prototype.addItems = function(e) {
					if(e.constructor === Array && e.length) {
						var t = 0 === this.collection.length || this.collection.length === this.pswpContainer.length;
						e.forEach(function(e) {
							this._collection.push(new l.Item(e, this));
						}, this), p.Organizer.organize(this), this.header && this.header.refresh(), t && this.addElements(this.getRowsPerPage());
					}
				}, t.prototype.style = function() {
					this.collection.forEach(function(e) {
						e.style();
					});
				}, t.prototype.addElements = function(e) {
					void 0 === e && (e = null);
					var t = this.collection;
					if(this.nextButton.style.display = 'block', this.pswpContainer.length === t.length)
						return this.nextButton.style.display = 'none', void(0 === t.length && (this.noResults.style.display = 'block', this.rootElement.getElementsByClassName('natural-gallery-images')[0].style.display = 'none'));
					for(var n, o = this.pswpContainer.length, l = this.pswpContainer.length ? t[o].row + e : e, a = o; a < t.length; a++)
						n = t[a], n.row < l && (this.pswpContainer.push(n.getPswpItem()), this.bodyElement.appendChild(n.loadElement()), n.bindClick(), n.flash()), this.pswpContainer.length === t.length && (this.nextButton.style.display = 'none');
					this.noResults.style.display = 'none';
					var i = this.rootElement.getElementsByClassName('natural-gallery-images')[0];
					i && (i.style.display = 'block');
					var r = this.rootElement.getElementsByClassName('natural-gallery-visible')[0];
					r && (r.textContent = this.pswpContainer.length + '');
					var s = this.rootElement.getElementsByClassName('natural-gallery-total')[0];
					s && (s.textContent = t.length + '');
				}, t.prototype.getRowsPerPage = function() {
					if(this.options.limit)
						return this.options.limit;
					var e = this.scrollElement ? this.scrollElement.clientHeight : document.documentElement.clientHeight,
						t = e - this.bodyElement.offsetTop,
						i = n(t / (0.55 * this.options.rowHeight));
					return i < this.options.minRowsAtStart ? this.options.minRowsAtStart : i;
				}, t.prototype.resize = function() {
					var e = n(this.bodyElement.getBoundingClientRect().width);
					if(e !== this.bodyWidth) {
						this.bodyWidth = e, p.Organizer.organize(this);
						var t = this.collection[this.pswpContainer.length - 1],
							i = t ? t.row + 1 : this.getRowsPerPage();
						this.reset(), this.addElements(i);
					}
				}, t.prototype.refresh = function() {
					this.reset(), p.Organizer.organize(this), this.addElements(this.getRowsPerPage());
				}, t.prototype.reset = function() {
					this.pswpContainer = [], this._collection.forEach(function(e) {
						e.remove();
					}), this.noResults.style.display = 'block';
				}, t.prototype.bindScroll = function(e) {
					var t = this,
						n = null;
					n = e instanceof Document ? e.documentElement : e, e.addEventListener('scroll', function() {
						var e = t.rootElement.offsetTop + t.rootElement.offsetHeight + t.options.infiniteScrollOffset,
							i = n.scrollTop - (n.clientTop || 0),
							o = n.clientHeight,
							l = i - t.old_scroll_top;
						t.old_scroll_top = i, 0 < l && i + o >= e && (t.addElements(1), t.pagination(1));
					});
				}, t.prototype.pagination = function(e) {
					if(void 0 === e && (e = 1), this.events.pagination)
						if(this.collection.length) {
							var t = this.getMaxImagesPerRow();
							this._events.pagination(this.collection.length, t * e);
						}
					else {
						var n = p.Organizer.simulatePagination(this);
						this._events.pagination(this.collection.length, 2 * (n * this.getRowsPerPage()));
					}
				}, t.prototype.getMaxImagesPerRow = function() {
					return e.apply(null, function(e) {
						return e.reduce(function(t, n) {
							return t[n.row] = -1 < t[n.row] ? t[n.row] + 1 : 1, t;
						}, []);
					}(this.collection));
				}, t.prototype.select = function(e) {
					var t = this._selected.indexOf(e); -
					1 === t && (this._selected.push(e), this._events.select(this._selected.map(function(e) {
						return e.fields;
					})));
				}, t.prototype.unselect = function(e) {
					var t = this._selected.indexOf(e); -
					1 < t && (this._selected.splice(t, 1), this._events.select(this._selected.map(function(e) {
						return e.fields;
					})));
				}, t.prototype.unselectAll = function() {
					for(var e = this._selected.length - 1; 0 <= e; e--)
						this._selected[e].toggleSelect();
					this._selected = [];
				}, Object.defineProperty(t.prototype, 'events', {
					get: function() {
						return this._events;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpContainer', {
					get: function() {
						return this._pswpContainer;
					},
					set: function(e) {
						this._pswpContainer = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'collection', {
					get: function() {
						return this.header && this.header.isFiltered() ? this.header.collection : this._collection;
					},
					set: function(e) {
						this.reset(), this._collection = [], this.addItems(e);
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getOriginalCollection = function() {
					return this._collection;
				}, Object.defineProperty(t.prototype, 'bodyWidth', {
					get: function() {
						return this._bodyWidth;
					},
					set: function(e) {
						this._bodyWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'bodyElement', {
					get: function() {
						return this._bodyElement;
					},
					set: function(e) {
						this._bodyElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'rootElement', {
					get: function() {
						return this._rootElement;
					},
					set: function(e) {
						this._rootElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpApi', {
					get: function() {
						return this._pswpApi;
					},
					set: function(e) {
						this._pswpApi = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpElement', {
					get: function() {
						return this._pswpElement;
					},
					set: function(e) {
						this._pswpElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'options', {
					get: function() {
						return this._options;
					},
					set: function(e) {
						this._options = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'header', {
					get: function() {
						return this._header;
					},
					set: function(e) {
						this._header = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), t;
			}();
		i.Gallery = c;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = n(7),
			l = n(8),
			a = function() {
				function e(e, t) {
					this.gallery = t, this._binded = !1, this.selected = !1, this._fields = e, this.id = e.id, this.thumbnail = e.thumbnail, this.enlarged = e.enlarged, this.title = this.getTitle(e), this.link = this.getLink(e), this.linkTarget = this.getLinkTarget(e), this.tWidth = e.tWidth, this.tHeight = e.tHeight, this.eWidth = e.eWidth, this.eHeight = e.eHeight, this.categories = e.categories, this.last = e.last, this.createElement();
				}
				return e.prototype.getTitle = function(e) {
					return e.title ? this.getTitleDetails(e.title).title : null;
				}, e.prototype.getLink = function(e) {
					return e.link ? e.link : this.getTitleDetails(e.title).link;
				}, e.prototype.getLinkTarget = function(e) {
					return e.linkTarget ? e.linkTarget : this.getTitleDetails(e.title).linkTarget;
				}, e.prototype.getTitleDetails = function(e) {
					var t = document.createElement('div');
					t.innerHTML = e;
					var n = t.getElementsByTagName('a'),
						i = {
							title: t.textContent,
							link: null,
							linkTarget: null
						};
					return n[0] && (i.link = n[0].getAttribute('href'), i.linkTarget = n[0].getAttribute('target')), i;
				}, e.prototype.createElement = function() {
					var t = this,
						e = this.gallery.options,
						n = null;
					this.title && -1 < ['true', 'hover'].indexOf(e.showLabels) && (n = !0);
					var o = document.createElement('div'),
						l = document.createElement('div'),
						a = this.getLinkElement(),
						r = null;
					if(e.lightbox && n && a ? (n = a, i.Utility.addClass(n, 'button'), r = l) : e.lightbox && n && !a ? (n = document.createElement('div'), r = o) : e.lightbox && !n ? r = o : !e.lightbox && n && a ? (o = a, n = document.createElement('div'), n.classList.add('button')) : e.lightbox || !n || a ? !e.lightbox && !n && a && (o = a) : n = document.createElement('div'), r && (i.Utility.addClass(r, 'zoomable'), e.zoomRotation && i.Utility.addClass(r, 'rotation')), i.Utility.addClass(l, 'image'), i.Utility.addClass(o, 'figure loading visible'), l.style.backgroundImage = 'url(' + this.thumbnail + ')', o.appendChild(l), e.round) {
						var s = e.round + 'px';
						o.style.borderRadius = s, l.style.borderRadius = s;
					}
					if(this.element = o, this.image = l, n && (n.textContent = this.title, i.Utility.addClass(n, 'title'), 'hover' === e.showLabels && i.Utility.addClass(n, 'hover'), o.appendChild(n)), this.gallery.options.selectable) {
						this.selectBtn = document.createElement('div');
						var d = i.Utility.getIcon('icon-select');
						this.selectBtn.appendChild(d), this.selectBtn.classList.add('selectBtn'), d.addEventListener('click', function(n) {
							n.stopPropagation(), t.toggleSelect();
						}), this.element.appendChild(this.selectBtn);
					}
				}, e.prototype.toggleSelect = function() {
					this.selected = !this.selected, this.selected ? (this.element.classList.add('selected'), this.gallery.select(this)) : (this.element.classList.remove('selected'), this.gallery.unselect(this));
				}, e.prototype.getLinkElement = function() {
					var e = this,
						t = null;
					return this.link && (t = document.createElement('a'), this.gallery.events.link ? t.addEventListener('click', function(t) {
						e.gallery.events.link.preventDefault && t.preventDefault(), e.gallery.events.link.callback(e._fields);
					}) : (t.setAttribute('href', this.link), i.Utility.addClass(t, 'link'), this.linkTarget && t.setAttribute('target', this.linkTarget))), t;
				}, e.prototype.style = function() {
					i.Utility.removeClass(this.element, 'visible'), this.element.style.width = this.width + 'px', this.element.style.height = this.height + 'px', this.element.style.marginRight = this.gallery.options.margin + 'px', this.element.style.marginBottom = this.gallery.options.margin + 'px', this.last && (this.element.style.marginRight = '0');
					var e = this;
					window.setTimeout(function() {
						i.Utility.addClass(e.element, 'visible');
					}, 0);
				}, e.prototype.flash = function() {
					var e = this;
					i.Utility.removeClass(this.element, 'visible'), window.setTimeout(function() {
						i.Utility.addClass(e.element, 'visible');
					}, 0);
				}, e.prototype.bindClick = function() {
					if(this.gallery.options.lightbox) {
						var t = this;
						if(!this.binded) {
							this.binded = !0;
							var e = function(n) {
									t.openPhotoSwipe.call(t, n, t.element);
								},
								n = null;
							n = this.link ? this.image : this.element, n.addEventListener('click', e);
						}
					}
				}, e.prototype.openPhotoSwipe = function(t, e) {
					t.preventDefault();
					var n = this;
					if(this.gallery.options.lightbox) {
						var i = Array.prototype.slice.call(e.parentNode.children),
							a = i.indexOf(e) - 1,
							r = new o(this.gallery.pswpElement, l, this.gallery.pswpContainer, {
								index: a,
								bgOpacity: 0.85,
								showHideOpacity: !0,
								loop: !1
							});
						this.gallery.pswpApi = r, r.init();
						var s = null;
						r.listen('beforeChange', function(e) {
							0 < e && r.getCurrentIndex() === r.items.length - 1 ? n.gallery.addElements() : e === -1 * (r.items.length - 1) && (s = r.items.length, n.gallery.addElements());
						}), r.listen('afterChange', function() {
							s && (r.goTo(s), s = null);
						});
					}
				}, e.prototype.getPswpItem = function() {
					return {
						src: this._enlarged,
						w: this._eWidth,
						h: this._eHeight,
						title: this._title
					};
				}, e.prototype.getElement = function() {
					return this.element;
				}, e.prototype.loadElement = function() {
					var e = this,
						t = document.createElement('img');
					return t.setAttribute('src', this.thumbnail), t.addEventListener('load', function() {
						i.Utility.removeClass(e.element, 'loading'), i.Utility.addClass(e.element, 'loaded');
					}), t.addEventListener('error', function() {
						i.Utility.addClass(e.element, 'errored');
					}), this.element;
				}, e.prototype.remove = function() {
					this.getElement().parentNode && this.getElement().parentNode.removeChild(this.getElement());
				}, Object.defineProperty(e.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'thumbnail', {
					get: function() {
						return this._thumbnail;
					},
					set: function(e) {
						this._thumbnail = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'enlarged', {
					get: function() {
						return this._enlarged;
					},
					set: function(e) {
						this._enlarged = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'title', {
					get: function() {
						return this._title;
					},
					set: function(e) {
						this._title = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'tWidth', {
					get: function() {
						return this._tWidth;
					},
					set: function(e) {
						this._tWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'tHeight', {
					get: function() {
						return this._tHeight;
					},
					set: function(e) {
						this._tHeight = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'eWidth', {
					get: function() {
						return this._eWidth;
					},
					set: function(e) {
						this._eWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'eHeight', {
					get: function() {
						return this._eHeight;
					},
					set: function(e) {
						this._eHeight = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'last', {
					get: function() {
						return this._last;
					},
					set: function(e) {
						this._last = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'row', {
					get: function() {
						return this._row;
					},
					set: function(e) {
						this._row = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'height', {
					get: function() {
						return this._height;
					},
					set: function(e) {
						this._height = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'width', {
					get: function() {
						return this._width;
					},
					set: function(e) {
						this._width = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'description', {
					get: function() {
						return this._description;
					},
					set: function(e) {
						this._description = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'binded', {
					get: function() {
						return this._binded;
					},
					set: function(e) {
						this._binded = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'link', {
					get: function() {
						return this._link;
					},
					set: function(e) {
						this._link = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'linkTarget', {
					get: function() {
						return this._linkTarget;
					},
					set: function(e) {
						this._linkTarget = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'fields', {
					get: function() {
						return this._fields;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Item = a;
	}, function(n, i, o) {
		var l, a;
		(function(e, t) {
			l = t, a = 'function' == typeof l ? l.call(i, o, i, n) : l, !(a !== void 0 && (n.exports = a));
		})(this, function() {
			'use strict';
			return function(n, o, i, l) {
				var a = Math.min,
					r = Math.abs,
					s = Math.PI,
					d = {
						features: null,
						bind: function(e, t, n, o) {
							var l = (o ? 'remove' : 'add') + 'EventListener';
							t = t.split(' ');
							for(var a = 0; a < t.length; a++)
								t[a] && e[l](t[a], n, !1);
						},
						isArray: function(e) {
							return e instanceof Array;
						},
						createEl: function(e, t) {
							var n = document.createElement(t || 'div');
							return e && (n.className = e), n;
						},
						getScrollY: function() {
							var e = window.pageYOffset;
							return void 0 === e ? document.documentElement.scrollTop : e;
						},
						unbind: function(e, t, n) {
							d.bind(e, t, n, !0);
						},
						removeClass: function(e, t) {
							var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
							e.className = e.className.replace(n, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
						},
						addClass: function(e, t) {
							d.hasClass(e, t) || (e.className += (e.className ? ' ' : '') + t);
						},
						hasClass: function(e, t) {
							return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
						},
						getChildByClass: function(e, t) {
							for(var n = e.firstChild; n;) {
								if(d.hasClass(n, t))
									return n;
								n = n.nextSibling;
							}
						},
						arraySearch: function(e, t, n) {
							for(var o = e.length; o--;)
								if(e[o][n] === t)
									return o;
							return -1;
						},
						extend: function(e, t, n) {
							for(var i in t)
								if(t.hasOwnProperty(i)) {
									if(n && e.hasOwnProperty(i))
										continue;
									e[i] = t[i];
								}
						},
						easing: {
							sine: {
								out: function(e) {
									return Math.sin(e * (s / 2));
								},
								inOut: function(e) {
									return -(Math.cos(s * e) - 1) / 2;
								}
							},
							cubic: {
								out: function(e) {
									return --e * e * e + 1;
								}
							}
						},
						detectFeatures: function() {
							if(d.features)
								return d.features;
							var t = d.createEl(),
								n = t.style,
								o = '',
								l = {};
							if(l.oldIE = document.all && !document.addEventListener, l.touch = 'ontouchstart' in window, window.requestAnimationFrame && (l.raf = window.requestAnimationFrame, l.caf = window.cancelAnimationFrame), l.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !l.pointerEvent) {
								var r = navigator.userAgent;
								if(/iP(hone|od)/.test(navigator.platform)) {
									var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
									s && 0 < s.length && (s = parseInt(s[1], 10), 1 <= s && 8 > s && (l.isOldIOSPhone = !0));
								}
								var p = r.match(/Android\s([0-9\.]*)/),
									c = p ? p[1] : 0;
								c = parseFloat(c), 1 <= c && (4.4 > c && (l.isOldAndroid = !0), l.androidVersion = c), l.isMobileOpera = /opera mini|opera mobi/i.test(r);
							}
							for(var m, u, g = ['transform', 'perspective', 'animationName'], h = ['', 'webkit', 'Moz', 'ms', 'O'], y = 0; 4 > y; y++) {
								o = h[y];
								for(var i = 0; 3 > i; i++)
									m = g[i], u = o + (o ? m.charAt(0).toUpperCase() + m.slice(1) : m), !l[m] && u in n && (l[m] = u);
								o && !l.raf && (o = o.toLowerCase(), l.raf = window[o + 'RequestAnimationFrame'], l.raf && (l.caf = window[o + 'CancelAnimationFrame'] || window[o + 'CancelRequestAnimationFrame']));
							}
							if(!l.raf) {
								var a = 0;
								l.raf = function(t) {
									var n = new Date().getTime(),
										i = e(0, 16 - (n - a)),
										o = window.setTimeout(function() {
											t(n + i);
										}, i);
									return a = n + i, o;
								}, l.caf = function(e) {
									clearTimeout(e);
								};
							}
							return l.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect, d.features = l, l;
						}
					};
				d.detectFeatures(), d.features.oldIE && (d.bind = function(e, t, n, o) {
					t = t.split(' ');
					for(var l, a = (o ? 'detach' : 'attach') + 'Event', r = function() {
							n.handleEvent.call(n);
						}, s = 0; s < t.length; s++)
						if(l = t[s], l)
							if('object' == typeof n && n.handleEvent) {
								if(!o)
									n['oldIE' + l] = r;
								else if(!n['oldIE' + l])
									return !1;
								e[a]('on' + l, n['oldIE' + l]);
							}
					else
						e[a]('on' + l, n);
				});
				var c = this,
					m = 25,
					u = 3,
					g = {
						allowPanToNext: !0,
						spacing: 0.12,
						bgOpacity: 1,
						mouseUsed: !1,
						loop: !0,
						pinchToClose: !0,
						closeOnScroll: !0,
						closeOnVerticalDrag: !0,
						verticalDragRange: 0.75,
						hideAnimationDuration: 333,
						showAnimationDuration: 333,
						showHideOpacity: !1,
						focus: !0,
						escKey: !0,
						arrowKeys: !0,
						mainScrollEndFriction: 0.35,
						panEndFriction: 0.35,
						isClickableElement: function(e) {
							return 'A' === e.tagName;
						},
						getDoubleTapZoom: function(e, t) {
							return e ? 1 : 0.7 > t.initialZoomLevel ? 1 : 1.33;
						},
						maxSpreadZoom: 1.33,
						modal: !0,
						scaleMode: 'fit'
					};
				d.extend(g, l);
				var h, y, f, b, w, x, C, _, v, E, I, k, P, T, S, O, A, D, R, F, L, z, U, N, Z, B, M, H, W, K, q, G, Y, V, X, j, $, J, Q, ee, te, ne, ie, oe, le, ae, re, se, de, pe, ce, me, ue, ge, he, ye, fe, be = function() {
						return {
							x: 0,
							y: 0
						};
					},
					xe = be(),
					we = be(),
					Ce = be(),
					_e = {},
					ve = 0,
					Ee = {},
					Ie = be(),
					ke = 0,
					Pe = !0,
					Te = [],
					Se = {},
					Oe = !1,
					Ae = function(e, t) {
						d.extend(c, t.publicMethods), Te.push(e);
					},
					De = function(e) {
						var t = ln();
						if(e > t - 1)
							return e - t;
						return 0 > e ? t + e : e;
					},
					Re = {},
					Fe = function(e, t) {
						return Re[e] || (Re[e] = []), Re[e].push(t);
					},
					Le = function(e) {
						var t = Re[e];
						if(t) {
							var n = Array.prototype.slice.call(arguments);
							n.shift();
							for(var o = 0; o < t.length; o++)
								t[o].apply(c, n);
						}
					},
					ze = function() {
						return new Date().getTime();
					},
					Ue = function(e) {
						he = e, c.bg.style.opacity = e * g.bgOpacity;
					},
					Ne = function(e, t, n, i, o) {
						(!Oe || o && o !== c.currItem) && (i /= o ? o.fitRatio : c.currItem.fitRatio), e[z] = k + t + 'px, ' + n + 'px' + P + ' scale(' + i + ')';
					},
					Ze = function(e) {
						pe && (e && (E > c.currItem.fitRatio ? !Oe && (fn(c.currItem, !1, !0), Oe = !0) : Oe && (fn(c.currItem), Oe = !1)), Ne(pe, Ce.x, Ce.y, E));
					},
					Be = function(e) {
						e.container && Ne(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e);
					},
					Me = function(e, t) {
						t[z] = k + e + 'px, 0px' + P;
					},
					He = function(e, n) {
						if(!g.loop && n) {
							var i = b + (Ie.x * ve - e) / Ie.x,
								o = t(e - vt.x);
							(0 > i && 0 < o || i >= ln() - 1 && 0 > o) && (e = vt.x + o * g.mainScrollEndFriction);
						}
						vt.x = e, Me(e, w);
					},
					We = function(e, t) {
						var n = Et[e] - Ee[e];
						return we[e] + xe[e] + n - n * (t / I);
					},
					Ke = function(e, t) {
						e.x = t.x, e.y = t.y, t.id && (e.id = t.id);
					},
					qe = function(e) {
						e.x = t(e.x), e.y = t(e.y);
					},
					Ge = null,
					Ye = function() {
						Ge && (d.unbind(document, 'mousemove', Ye), d.addClass(n, 'pswp--has_mouse'), g.mouseUsed = !0, Le('mouseUsed')), Ge = setTimeout(function() {
							Ge = null;
						}, 100);
					},
					Ve = function() {
						d.bind(document, 'keydown', c), q.transform && d.bind(c.scrollWrap, 'click', c), g.mouseUsed || d.bind(document, 'mousemove', Ye), d.bind(window, 'resize scroll orientationchange', c), Le('bindEvents');
					},
					Xe = function() {
						d.unbind(window, 'resize scroll orientationchange', c), d.unbind(window, 'scroll', v.scroll), d.unbind(document, 'keydown', c), d.unbind(document, 'mousemove', Ye), q.transform && d.unbind(c.scrollWrap, 'click', c), Q && d.unbind(window, C, c), clearTimeout(G), Le('unbindEvents');
					},
					je = function(e, t) {
						var n = un(c.currItem, _e, e);
						return t && (de = n), n;
					},
					$e = function(e) {
						return e || (e = c.currItem), e.initialZoomLevel;
					},
					Je = function(e) {
						return e || (e = c.currItem), 0 < e.w ? g.maxSpreadZoom : 1;
					},
					Qe = function(e, t, n, i) {
						return i === c.currItem.initialZoomLevel ? (n[e] = c.currItem.initialPosition[e], !0) : (n[e] = We(e, i), n[e] > t.min[e]) ? (n[e] = t.min[e], !0) : !!(n[e] < t.max[e]) && (n[e] = t.max[e], !0);
					},
					et = function() {
						if(z) {
							var e = q.perspective && !N;
							return k = 'translate' + (e ? '3d(' : '('), void(P = q.perspective ? ', 0px)' : ')');
						}
						z = 'left', d.addClass(n, 'pswp--ie'), Me = function(e, t) {
							t.left = e + 'px';
						}, Be = function(e) {
							var t = 1 < e.fitRatio ? 1 : e.fitRatio,
								n = e.container.style,
								i = t * e.w,
								o = t * e.h;
							n.width = i + 'px', n.height = o + 'px', n.left = e.initialPosition.x + 'px', n.top = e.initialPosition.y + 'px';
						}, Ze = function() {
							if(pe) {
								var e = pe,
									t = c.currItem,
									n = 1 < t.fitRatio ? 1 : t.fitRatio,
									i = n * t.w,
									o = n * t.h;
								e.width = i + 'px', e.height = o + 'px', e.left = Ce.x + 'px', e.top = Ce.y + 'px';
							}
						};
					},
					tt = function(t) {
						var e = '';
						g.escKey && 27 === t.keyCode ? e = 'close' : g.arrowKeys && (37 === t.keyCode ? e = 'prev' : 39 === t.keyCode && (e = 'next')), !e || t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, c[e]());
					},
					nt = function(t) {
						!t || (ne || te || ce || $) && (t.preventDefault(), t.stopPropagation());
					},
					it = function() {
						c.setScrollOffset(0, d.getScrollY());
					},
					ot = {},
					lt = 0,
					at = function(e) {
						ot[e] && (ot[e].raf && B(ot[e].raf), lt--, delete ot[e]);
					},
					rt = function(e) {
						ot[e] && at(e), ot[e] || (lt++, ot[e] = {});
					},
					st = function() {
						for(var e in ot)
							ot.hasOwnProperty(e) && at(e);
					},
					dt = function(e, n, i, o, l, a, r) {
						var s, t = ze();
						rt(e);
						var d = function() {
							if(ot[e]) {
								if(s = ze() - t, s >= o)
									return at(e), a(i), void(r && r());
								a((i - n) * l(s / o) + n), ot[e].raf = Z(d);
							}
						};
						d();
					},
					pt = 30,
					ct = 10,
					mt = {},
					p = {},
					ut = {},
					gt = {},
					ht = {},
					yt = [],
					ft = {},
					bt = [],
					xt = {},
					wt = 0,
					Ct = be(),
					_t = 0,
					vt = be(),
					Et = be(),
					It = be(),
					kt = function(e, t) {
						return e.x === t.x && e.y === t.y;
					},
					Pt = function(e, t) {
						return r(e.x - t.x) < m && r(e.y - t.y) < m;
					},
					Tt = function(e, t) {
						return xt.x = r(e.x - t.x), xt.y = r(e.y - t.y), Math.sqrt(xt.x * xt.x + xt.y * xt.y);
					},
					St = function() {
						ie && (B(ie), ie = null);
					},
					Ot = function() {
						Q && (ie = Z(Ot), Gt());
					},
					At = function() {
						return 'fit' !== g.scaleMode || E !== c.currItem.initialZoomLevel;
					},
					Dt = function(e, t) {
						return e && e !== document && (e.getAttribute('class') && -1 < e.getAttribute('class').indexOf('pswp__scroll-wrap') ? !1 : t(e) ? e : Dt(e.parentNode, t));
					},
					Rt = {},
					Ft = function(t, e) {
						return Rt.prevent = !Dt(t.target, g.isClickableElement), Le('preventDragEvent', t, e, Rt), Rt.prevent;
					},
					Lt = function(e, t) {
						return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t;
					},
					zt = function(e, t, n) {
						n.x = 0.5 * (e.x + t.x), n.y = 0.5 * (e.y + t.y);
					},
					Ut = function(e, t, n) {
						if(50 < e - V) {
							var i = 2 < bt.length ? bt.shift() : {};
							i.x = t, i.y = n, bt.push(i), V = e;
						}
					},
					Nt = function() {
						var e = Ce.y - c.currItem.initialPosition.y;
						return 1 - r(e / (_e.y / 2));
					},
					Zt = {},
					Bt = {},
					Mt = [],
					Ht = function(t) {
						for(; 0 < Mt.length;)
							Mt.pop();
						return U ? (fe = 0, yt.forEach(function(e) {
							0 === fe ? Mt[0] = e : 1 === fe && (Mt[1] = e), fe++;
						})) : -1 < t.type.indexOf('touch') ? t.touches && 0 < t.touches.length && (Mt[0] = Lt(t.touches[0], Zt), 1 < t.touches.length && (Mt[1] = Lt(t.touches[1], Bt))) : (Zt.x = t.pageX, Zt.y = t.pageY, Zt.id = '', Mt[0] = Zt), Mt;
					},
					Wt = function(e, t) {
						var n, i, o, l, a = 0,
							r = Ce[e] + t[e],
							s = 0 < t[e],
							d = vt.x + t.x,
							p = vt.x - ft.x;
						return n = r > de.min[e] || r < de.max[e] ? g.panEndFriction : 1, r = Ce[e] + t[e] * n, (g.allowPanToNext || E === c.currItem.initialZoomLevel) && (pe ? 'h' === me && 'x' === e && !te && (s ? (r > de.min[e] && (n = g.panEndFriction, a = de.min[e] - r, i = de.min[e] - we[e]), (0 >= i || 0 > p) && 1 < ln() ? (l = d, 0 > p && d > ft.x && (l = ft.x)) : de.min.x !== de.max.x && (o = r)) : (r < de.max[e] && (n = g.panEndFriction, a = r - de.max[e], i = we[e] - de.max[e]), (0 >= i || 0 < p) && 1 < ln() ? (l = d, 0 < p && d < ft.x && (l = ft.x)) : de.min.x !== de.max.x && (o = r))) : l = d, 'x' === e) ? (void 0 !== l && (He(l, !0), oe = l !== ft.x), de.min.x !== de.max.x && (void 0 === o ? !oe && (Ce.x += t.x * n) : Ce.x = o), void 0 !== l) : void(!ce && !oe && E > c.currItem.fitRatio && (Ce[e] += t[e] * n));
					},
					Kt = function(t) {
						if(!('mousedown' === t.type && 0 < t.button)) {
							if(nn)
								return void t.preventDefault();
							if(!(J && 'mousedown' === t.type)) {
								if(Ft(t, !0) && t.preventDefault(), Le('pointerDown'), U) {
									var e = d.arraySearch(yt, t.pointerId, 'id');
									0 > e && (e = yt.length), yt[e] = {
										x: t.pageX,
										y: t.pageY,
										id: t.pointerId
									};
								}
								var n = Ht(t),
									i = n.length;
								le = null, st(), Q && 1 !== i || (Q = ue = !0, d.bind(window, C, c), j = ye = ge = $ = oe = ne = ee = te = !1, me = null, Le('firstTouchStart', n), Ke(we, Ce), xe.x = xe.y = 0, Ke(gt, n[0]), Ke(ht, gt), ft.x = Ie.x * ve, bt = [{
									x: gt.x,
									y: gt.y
								}], V = Y = ze(), je(E, !0), St(), Ot()), ae || !(1 < i) || ce || oe || (I = E, te = !1, ae = ee = !0, xe.y = xe.x = 0, Ke(we, Ce), Ke(mt, n[0]), Ke(p, n[1]), zt(mt, p, It), Et.x = r(It.x) - Ce.x, Et.y = r(It.y) - Ce.y, re = se = Tt(mt, p));
							}
						}
					},
					qt = function(t) {
						if(t.preventDefault(), U) {
							var e = d.arraySearch(yt, t.pointerId, 'id');
							if(-1 < e) {
								var n = yt[e];
								n.x = t.pageX, n.y = t.pageY;
							}
						}
						if(Q) {
							var i = Ht(t);
							if(me || ne || ae)
								le = i;
							else if(vt.x !== Ie.x * ve)
								me = 'h';
							else {
								var o = r(i[0].x - gt.x) - r(i[0].y - gt.y);
								r(o) >= ct && (me = 0 < o ? 'h' : 'v', le = i);
							}
						}
					},
					Gt = function() {
						if(le) {
							var e = le.length;
							if(0 !== e)
								if(Ke(mt, le[0]), ut.x = mt.x - gt.x, ut.y = mt.y - gt.y, ae && 1 < e) {
									if(gt.x = mt.x, gt.y = mt.y, !ut.x && !ut.y && kt(le[1], p))
										return;
									Ke(p, le[1]), te || (te = !0, Le('zoomGestureStarted'));
									var t = Tt(mt, p),
										n = $t(t);
									n > c.currItem.initialZoomLevel + c.currItem.initialZoomLevel / 15 && (ye = !0);
									var i = 1,
										o = $e(),
										l = Je();
									if(!(n < o))
										n > l && (i = (n - l) / (6 * o), 1 < i && (i = 1), n = l + i * o);
									else if(g.pinchToClose && !ye && I <= c.currItem.initialZoomLevel) {
										var a = o - n,
											s = 1 - a / (o / 1.2);
										Ue(s), Le('onPinchClose', s), ge = !0;
									} else
										i = (o - n) / o, 1 < i && (i = 1), n = o - i * (o / 3);
									0 > i && (i = 0), re = t, zt(mt, p, Ct), xe.x += Ct.x - It.x, xe.y += Ct.y - It.y, Ke(It, Ct), Ce.x = We('x', n), Ce.y = We('y', n), j = n > E, E = n, Ze();
								}
							else {
								if(!me)
									return;
								if(ue && (ue = !1, r(ut.x) >= ct && (ut.x -= le[0].x - ht.x), r(ut.y) >= ct && (ut.y -= le[0].y - ht.y)), gt.x = mt.x, gt.y = mt.y, 0 === ut.x && 0 === ut.y)
									return;
								if('v' === me && g.closeOnVerticalDrag && !At()) {
									xe.y += ut.y, Ce.y += ut.y;
									var d = Nt();
									return $ = !0, Le('onVerticalDrag', d), Ue(d), void Ze();
								}
								Ut(ze(), mt.x, mt.y), ne = !0, de = c.currItem.bounds;
								var m = Wt('x', ut);
								m || (Wt('y', ut), qe(Ce), Ze());
							}
						}
					},
					Yt = function(t) {
						if(q.isOldAndroid) {
							if(J && 'mouseup' === t.type)
								return; -
							1 < t.type.indexOf('touch') && (clearTimeout(J), J = setTimeout(function() {
								J = 0;
							}, 600));
						}
						Le('pointerUp'), Ft(t, !1) && t.preventDefault();
						var e;
						if(U) {
							var n = d.arraySearch(yt, t.pointerId, 'id');
							if(-1 < n)
								if(e = yt.splice(n, 1)[0], navigator.pointerEnabled)
									e.type = t.pointerType || 'mouse';
								else {
									e.type = {
										2: 'touch',
										3: 'pen',
										4: 'mouse'
									}[t.pointerType], e.type || (e.type = t.pointerType || 'mouse');
								}
						}
						var i, o = Ht(t),
							l = o.length;
						if('mouseup' === t.type && (l = 0), 2 === l)
							return le = null, !0;
						1 === l && Ke(ht, o[0]), 0 !== l || me || ce || (!e && ('mouseup' === t.type ? e = {
							x: t.pageX,
							y: t.pageY,
							type: 'mouse'
						} : t.changedTouches && t.changedTouches[0] && (e = {
							x: t.changedTouches[0].pageX,
							y: t.changedTouches[0].pageY,
							type: 'touch'
						})), Le('touchRelease', t, e));
						var a = -1;
						if(0 === l && (Q = !1, d.unbind(window, C, c), St(), ae ? a = 0 : -1 != _t && (a = ze() - _t)), _t = 1 === l ? ze() : -1, i = -1 != a && 150 > a ? 'zoom' : 'swipe', ae && 2 > l && (ae = !1, 1 === l && (i = 'zoomPointerUp'), Le('zoomGestureEnded')), le = null, ne || te || ce || $) {
							if(st(), X || (X = Vt()), X.calculateSwipeSpeed('x'), $) {
								var r = Nt();
								if(r < g.verticalDragRange)
									c.close();
								else {
									var s = Ce.y,
										p = he;
									dt('verticalDrag', 0, 1, 300, d.easing.cubic.out, function(e) {
										Ce.y = (c.currItem.initialPosition.y - s) * e + s, Ue((1 - p) * e + p), Ze();
									}), Le('onVerticalDrag', 1);
								}
								return;
							}
							if((oe || ce) && 0 === l) {
								var m = jt(i, X);
								if(m)
									return;
								i = 'zoomPointerUp';
							}
							return ce ? void 0 : 'swipe' === i ? void(!oe && E > c.currItem.fitRatio && Xt(X)) : void Jt();
						}
					},
					Vt = function() {
						var e, n, i = {
							lastFlickOffset: {},
							lastFlickDist: {},
							lastFlickSpeed: {},
							slowDownRatio: {},
							slowDownRatioReverse: {},
							speedDecelerationRatio: {},
							speedDecelerationRatioAbs: {},
							distanceOffset: {},
							backAnimDestination: {},
							backAnimStarted: {},
							calculateSwipeSpeed: function(t) {
								1 < bt.length ? (e = ze() - V + 50, n = bt[bt.length - 2][t]) : (e = ze() - Y, n = ht[t]), i.lastFlickOffset[t] = gt[t] - n, i.lastFlickDist[t] = r(i.lastFlickOffset[t]), i.lastFlickSpeed[t] = 20 < i.lastFlickDist[t] ? i.lastFlickOffset[t] / e : 0, 0.1 > r(i.lastFlickSpeed[t]) && (i.lastFlickSpeed[t] = 0), i.slowDownRatio[t] = 0.95, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatio[t] = 1;
							},
							calculateOverBoundsAnimOffset: function(e, t) {
								i.backAnimStarted[e] || (Ce[e] > de.min[e] ? i.backAnimDestination[e] = de.min[e] : Ce[e] < de.max[e] && (i.backAnimDestination[e] = de.max[e]), i.backAnimDestination[e] !== void 0 && (i.slowDownRatio[e] = 0.7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], 0.05 > i.speedDecelerationRatioAbs[e] && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, dt('bounceZoomPan' + e, Ce[e], i.backAnimDestination[e], t || 300, d.easing.sine.out, function(t) {
									Ce[e] = t, Ze();
								}))));
							},
							calculateAnimOffset: function(e) {
								i.backAnimStarted[e] || (i.speedDecelerationRatio[e] *= i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10, i.speedDecelerationRatioAbs[e] = r(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, Ce[e] += i.distanceOffset[e]);
							},
							panAnimLoop: function() {
								if(ot.zoomPan && (ot.zoomPan.raf = Z(i.panAnimLoop), i.now = ze(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset('x'), i.calculateAnimOffset('y'), Ze(), i.calculateOverBoundsAnimOffset('x'), i.calculateOverBoundsAnimOffset('y'), 0.05 > i.speedDecelerationRatioAbs.x && 0.05 > i.speedDecelerationRatioAbs.y))
									return Ce.x = t(Ce.x), Ce.y = t(Ce.y), Ze(), void at('zoomPan');
							}
						};
						return i;
					},
					Xt = function(e) {
						return e.calculateSwipeSpeed('y'), de = c.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, 0.05 >= r(e.lastFlickSpeed.x) && 0.05 >= r(e.lastFlickSpeed.y) ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset('x'), e.calculateOverBoundsAnimOffset('y'), !0) : void(rt('zoomPan'), e.lastNow = ze(), e.panAnimLoop());
					},
					jt = function(t, n) {
						var i;
						ce || (wt = b);
						var o;
						if('swipe' === t) {
							var l = gt.x - ht.x,
								s = 10 > n.lastFlickDist.x;
							l > pt && (s || 20 < n.lastFlickOffset.x) ? o = -1 : l < -pt && (s || -20 > n.lastFlickOffset.x) && (o = 1);
						}
						var p;
						o && (b += o, 0 > b ? (b = g.loop ? ln() - 1 : 0, p = !0) : b >= ln() && (b = g.loop ? 0 : ln() - 1, p = !0), (!p || g.loop) && (ke += o, ve -= o, i = !0));
						var m, u = Ie.x * ve,
							h = r(u - vt.x);
						return i || u > vt.x == 0 < n.lastFlickSpeed.x ? (m = 0 < r(n.lastFlickSpeed.x) ? h / r(n.lastFlickSpeed.x) : 333, m = a(m, 400), m = e(m, 250)) : m = 333, wt === b && (i = !1), ce = !0, Le('mainScrollAnimStart'), dt('mainScroll', vt.x, u, m, d.easing.cubic.out, He, function() {
							st(), ce = !1, wt = -1, (i || wt !== b) && c.updateCurrItem(), Le('mainScrollAnimComplete');
						}), i && c.updateCurrItem(!0), i;
					},
					$t = function(e) {
						return 1 / se * e * I;
					},
					Jt = function() {
						var e = E,
							t = $e(),
							n = Je();
						E < t ? e = t : E > n && (e = n);
						var i, o = he;
						return ge && !j && !ye && E < t ? (c.close(), !0) : (ge && (i = function(e) {
							Ue((1 - o) * e + o);
						}), c.zoomTo(e, 0, 200, d.easing.cubic.out, i), !0);
					};
				Ae('Gestures', {
					publicMethods: {
						initGestures: function() {
							var e = function(e, t, n, i, o) {
								D = e + t, R = e + n, F = e + i, L = o ? e + o : '';
							};
							U = q.pointerEvent, U && q.touch && (q.touch = !1), U ? navigator.pointerEnabled ? e('pointer', 'down', 'move', 'up', 'cancel') : e('MSPointer', 'Down', 'Move', 'Up', 'Cancel') : q.touch ? (e('touch', 'start', 'move', 'end', 'cancel'), N = !0) : e('mouse', 'down', 'move', 'up'), C = R + ' ' + F + ' ' + L, _ = D, U && !N && (N = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), c.likelyTouchDevice = N, v[D] = Kt, v[R] = qt, v[F] = Yt, L && (v[L] = v[F]), q.touch && (_ += ' mousedown', C += ' mousemove mouseup', v.mousedown = v[D], v.mousemove = v[R], v.mouseup = v[F]), N || (g.allowPanToNext = !1);
						}
					}
				});
				var Qt, en, tn, nn, on, ln, an, rn = function(e, t, i, o) {
						Qt && clearTimeout(Qt), nn = !0, tn = !0;
						var l;
						e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = g.getThumbBoundsFn && g.getThumbBoundsFn(b);
						var a = i ? g.hideAnimationDuration : g.showAnimationDuration,
							r = function() {
								at('initialZoom'), i ? (c.template.removeAttribute('style'), c.bg.removeAttribute('style')) : (Ue(1), t && (t.style.display = 'block'), d.addClass(n, 'pswp--animated-in'), Le('initialZoom' + (i ? 'OutEnd' : 'InEnd'))), o && o(), nn = !1;
							};
						if(!a || !l || void 0 === l.x)
							return Le('initialZoom' + (i ? 'Out' : 'In')), E = e.initialZoomLevel, Ke(Ce, e.initialPosition), Ze(), n.style.opacity = i ? 0 : 1, Ue(1), void(a ? setTimeout(function() {
								r();
							}, a) : r());
						(function() {
							var t = f,
								o = !c.currItem.src || c.currItem.loadError || g.showHideOpacity;
							e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = 'hidden'), i || (E = l.w / e.w, Ce.x = l.x, Ce.y = l.y - H, c[o ? 'template' : 'bg'].style.opacity = 1e-3, Ze()), rt('initialZoom'), i && !t && d.removeClass(n, 'pswp--animated-in'), o && (i ? d[(t ? 'remove' : 'add') + 'Class'](n, 'pswp--animate_opacity') : setTimeout(function() {
								d.addClass(n, 'pswp--animate_opacity');
							}, 30)), Qt = setTimeout(function() {
								if(Le('initialZoom' + (i ? 'Out' : 'In')), !i)
									E = e.initialZoomLevel, Ke(Ce, e.initialPosition), Ze(), Ue(1), o ? n.style.opacity = 1 : Ue(1), Qt = setTimeout(r, a + 20);
								else {
									var s = l.w / e.w,
										p = {
											x: Ce.x,
											y: Ce.y
										},
										c = E,
										m = he,
										u = function(e) {
											1 === e ? (E = s, Ce.x = l.x, Ce.y = l.y - K) : (E = (s - c) * e + c, Ce.x = (l.x - p.x) * e + p.x, Ce.y = (l.y - K - p.y) * e + p.y), Ze(), o ? n.style.opacity = 1 - e : Ue(m - e * m);
										};
									t ? dt('initialZoom', 0, 1, a, d.easing.cubic.out, u, r) : (u(1), Qt = setTimeout(r, a + 20));
								}
							}, i ? 25 : 90);
						})();
					},
					sn = {},
					dn = [],
					pn = {
						index: 0,
						errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
						forceProgressiveLoading: !1,
						preload: [1, 1],
						getNumItemsFn: function() {
							return en.length;
						}
					},
					cn = function() {
						return {
							center: {
								x: 0,
								y: 0
							},
							max: {
								x: 0,
								y: 0
							},
							min: {
								x: 0,
								y: 0
							}
						};
					},
					mn = function(e, n, i) {
						var o = e.bounds;
						o.center.x = t((sn.x - n) / 2), o.center.y = t((sn.y - i) / 2) + e.vGap.top, o.max.x = n > sn.x ? t(sn.x - n) : o.center.x, o.max.y = i > sn.y ? t(sn.y - i) + e.vGap.top : o.center.y, o.min.x = n > sn.x ? 0 : o.center.x, o.min.y = i > sn.y ? e.vGap.top : o.center.y;
					},
					un = function(e, t, n) {
						if(e.src && !e.loadError) {
							var i = !n;
							if(i && (!e.vGap && (e.vGap = {
									top: 0,
									bottom: 0
								}), Le('parseVerticalMargin', e)), sn.x = t.x, sn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
								var o = sn.x / e.w,
									l = sn.y / e.h;
								e.fitRatio = o < l ? o : l;
								var a = g.scaleMode;
								'orig' === a ? n = 1 : 'fit' === a && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = cn());
							}
							return n ? (mn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0;
						}
						return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = cn(), e.initialPosition = e.bounds.center, e.bounds;
					},
					gn = function(e, t, n, i, o, l) {
						t.loadError || i && (t.imageAppended = !0, fn(t, i, t === c.currItem && Oe), n.appendChild(i), l && setTimeout(function() {
							t && t.loaded && t.placeholder && (t.placeholder.style.display = 'none', t.placeholder = null);
						}, 500));
					},
					hn = function(e) {
						e.loading = !0, e.loaded = !1;
						var t = e.img = d.createEl('pswp__img', 'img'),
							n = function() {
								e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null;
							};
						return t.onload = n, t.onerror = function() {
							e.loadError = !0, n();
						}, t.src = e.src, t;
					},
					yn = function(e, t) {
						if(e.src && e.loadError && e.container)
							return t && (e.container.innerHTML = ''), e.container.innerHTML = g.errorMsg.replace('%url%', e.src), !0;
					},
					fn = function(e, n, i) {
						if(e.src) {
							n || (n = e.container.lastChild);
							var o = i ? e.w : t(e.w * e.fitRatio),
								l = i ? e.h : t(e.h * e.fitRatio);
							e.placeholder && !e.loaded && (e.placeholder.style.width = o + 'px', e.placeholder.style.height = l + 'px'), n.style.width = o + 'px', n.style.height = l + 'px';
						}
					},
					bn = function() {
						if(dn.length) {
							for(var e, t = 0; t < dn.length; t++)
								e = dn[t], e.holder.index === e.index && gn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
							dn = [];
						}
					};
				Ae('Controller', {
					publicMethods: {
						lazyLoadItem: function(e) {
							e = De(e);
							var t = on(e);
							t && (!t.loaded && !t.loading || S) && (Le('gettingData', e, t), t.src && hn(t));
						},
						initController: function() {
							d.extend(g, pn, !0), c.items = en = i, on = c.getItemAt, ln = g.getNumItemsFn, an = g.loop, 3 > ln() && (g.loop = !1), Fe('beforeChange', function(e) {
								var t, n = g.preload,
									i = !(null !== e) || 0 <= e,
									o = a(n[0], ln()),
									l = a(n[1], ln());
								for(t = 1; t <= (i ? l : o); t++)
									c.lazyLoadItem(b + t);
								for(t = 1; t <= (i ? o : l); t++)
									c.lazyLoadItem(b - t);
							}), Fe('initialLayout', function() {
								c.currItem.initialLayout = g.getThumbBoundsFn && g.getThumbBoundsFn(b);
							}), Fe('mainScrollAnimComplete', bn), Fe('initialZoomInEnd', bn), Fe('destroy', function() {
								for(var e, t = 0; t < en.length; t++)
									e = en[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
								dn = null;
							});
						},
						getItemAt: function(e) {
							return !!(0 <= e) && void 0 !== en[e] && en[e];
						},
						allowProgressiveImg: function() {
							return g.forceProgressiveLoading || !N || g.mouseUsed || 1200 < screen.width;
						},
						setContent: function(e, t) {
							g.loop && (t = De(t));
							var n = c.getItemAt(e.index);
							n && (n.container = null);
							var i, o = c.getItemAt(t);
							if(!o)
								return void(e.el.innerHTML = '');
							Le('gettingData', t, o), e.index = t, e.item = o;
							var l = o.container = d.createEl('pswp__zoom-wrap');
							if(!o.src && o.html && (o.html.tagName ? l.appendChild(o.html) : l.innerHTML = o.html), yn(o), un(o, _e), o.src && !o.loadError && !o.loaded) {
								if(o.loadComplete = function(n) {
										if(h) {
											if(e && e.index === t) {
												if(yn(n, !0))
													return n.loadComplete = n.img = null, un(n, _e), Be(n), void(e.index === b && c.updateCurrZoomItem());
												n.imageAppended ? !nn && n.placeholder && (n.placeholder.style.display = 'none', n.placeholder = null) : q.transform && (ce || nn) ? dn.push({
													item: n,
													baseDiv: l,
													img: n.img,
													index: t,
													holder: e,
													clearPlaceholder: !0
												}) : gn(t, n, l, n.img, ce || nn, !0);
											}
											n.loadComplete = null, n.img = null, Le('imageLoadComplete', t, n);
										}
									}, d.features.transform) {
									var a = 'pswp__img pswp__img--placeholder';
									a += o.msrc ? '' : ' pswp__img--placeholder--blank';
									var r = d.createEl(a, o.msrc ? 'img' : '');
									o.msrc && (r.src = o.msrc), fn(o, r), l.appendChild(r), o.placeholder = r;
								}
								o.loading || hn(o), c.allowProgressiveImg() && (!tn && q.transform ? dn.push({
									item: o,
									baseDiv: l,
									img: o.img,
									index: t,
									holder: e
								}) : gn(t, o, l, o.img, !0, !0));
							} else
								o.src && !o.loadError && (i = d.createEl('pswp__img', 'img'), i.style.opacity = 1, i.src = o.src, fn(o, i), gn(t, o, l, i, !0));
							tn || t !== b ? Be(o) : (pe = l.style, rn(o, i || o.img)), e.el.innerHTML = '', e.el.appendChild(l);
						},
						cleanSlide: function(e) {
							e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1;
						}
					}
				});
				var xn, wn = {},
					Cn = function(t, n, i) {
						var o = document.createEvent('CustomEvent'),
							e = {
								origEvent: t,
								target: t.target,
								releasePoint: n,
								pointerType: i || 'touch'
							};
						o.initCustomEvent('pswpTap', !0, !0, e), t.target.dispatchEvent(o);
					};
				Ae('Tap', {
					publicMethods: {
						initTap: function() {
							Fe('firstTouchStart', c.onTapStart), Fe('touchRelease', c.onTapRelease), Fe('destroy', function() {
								wn = {}, xn = null;
							});
						},
						onTapStart: function(e) {
							1 < e.length && (clearTimeout(xn), xn = null);
						},
						onTapRelease: function(t, e) {
							if(e && !ne && !ee && !lt) {
								var n = e;
								if(xn && (clearTimeout(xn), xn = null, Pt(n, wn)))
									return void Le('doubleTap', n);
								if('mouse' === e.type)
									return void Cn(t, e, 'mouse');
								var i = t.target.tagName.toUpperCase();
								if('BUTTON' === i || d.hasClass(t.target, 'pswp__single-tap'))
									return void Cn(t, e);
								Ke(wn, n), xn = setTimeout(function() {
									Cn(t, e), xn = null;
								}, 300);
							}
						}
					}
				});
				var _n;
				Ae('DesktopZoom', {
					publicMethods: {
						initDesktopZoom: function() {
							W || (N ? Fe('mouseUsed', function() {
								c.setupDesktopZoom();
							}) : c.setupDesktopZoom(!0));
						},
						setupDesktopZoom: function(e) {
							_n = {};
							var t = 'wheel mousewheel DOMMouseScroll';
							Fe('bindEvents', function() {
								d.bind(n, t, c.handleMouseWheel);
							}), Fe('unbindEvents', function() {
								_n && d.unbind(n, t, c.handleMouseWheel);
							}), c.mouseZoomedIn = !1;
							var i, o = function() {
									c.mouseZoomedIn && (d.removeClass(n, 'pswp--zoomed-in'), c.mouseZoomedIn = !1), 1 > E ? d.addClass(n, 'pswp--zoom-allowed') : d.removeClass(n, 'pswp--zoom-allowed'), l();
								},
								l = function() {
									i && (d.removeClass(n, 'pswp--dragging'), i = !1);
								};
							Fe('resize', o), Fe('afterChange', o), Fe('pointerDown', function() {
								c.mouseZoomedIn && (i = !0, d.addClass(n, 'pswp--dragging'));
							}), Fe('pointerUp', l), e || o();
						},
						handleMouseWheel: function(t) {
							if(E <= c.currItem.fitRatio)
								return g.modal && (!g.closeOnScroll || lt || Q ? t.preventDefault() : z && 2 < r(t.deltaY) && (f = !0, c.close())), !0;
							if(t.stopPropagation(), _n.x = 0, 'deltaX' in t)
								1 === t.deltaMode ? (_n.x = 18 * t.deltaX, _n.y = 18 * t.deltaY) : (_n.x = t.deltaX, _n.y = t.deltaY);
							else if('wheelDelta' in t)
								t.wheelDeltaX && (_n.x = -0.16 * t.wheelDeltaX), _n.y = t.wheelDeltaY ? -0.16 * t.wheelDeltaY : -0.16 * t.wheelDelta;
							else if('detail' in t)
								_n.y = t.detail;
							else
								return;
							je(E, !0);
							var e = Ce.x - _n.x,
								n = Ce.y - _n.y;
							(g.modal || e <= de.min.x && e >= de.max.x && n <= de.min.y && n >= de.max.y) && t.preventDefault(), c.panTo(e, n);
						},
						toggleDesktopZoom: function(e) {
							e = e || {
								x: _e.x / 2 + Ee.x,
								y: _e.y / 2 + Ee.y
							};
							var t = g.getDoubleTapZoom(!0, c.currItem),
								i = E === t;
							c.mouseZoomedIn = !i, c.zoomTo(i ? c.currItem.initialZoomLevel : t, e, 333), d[(i ? 'remove' : 'add') + 'Class'](n, 'pswp--zoomed-in');
						}
					}
				});
				var vn, En, In, kn, Pn, Tn, Sn, On, An, Dn, Rn, Fn, Ln = {
						history: !0,
						galleryUID: 1
					},
					zn = function() {
						return Rn.hash.substring(1);
					},
					Un = function() {
						vn && clearTimeout(vn), In && clearTimeout(In);
					},
					Nn = function() {
						var e = zn(),
							t = {};
						if(5 > e.length)
							return t;
						var n, i = e.split('&');
						for(n = 0; n < i.length; n++)
							if(i[n]) {
								var o = i[n].split('=');
								2 > o.length || (t[o[0]] = o[1]);
							}
						if(g.galleryPIDs) {
							var l = t.pid;
							for(t.pid = 0, n = 0; n < en.length; n++)
								if(en[n].pid === l) {
									t.pid = n;
									break;
								}
						} else
							t.pid = parseInt(t.pid, 10) - 1;
						return 0 > t.pid && (t.pid = 0), t;
					},
					Zn = function() {
						if(In && clearTimeout(In), lt || Q)
							return void(In = setTimeout(Zn, 500));
						kn ? clearTimeout(En) : kn = !0;
						var e = b + 1,
							t = on(b);
						t.hasOwnProperty('pid') && (e = t.pid);
						var n = Sn + '&gid=' + g.galleryUID + '&pid=' + e;
						On || -1 !== Rn.hash.indexOf(n) || (Dn = !0);
						var i = Rn.href.split('#')[0] + '#' + n;
						Fn ? '#' + n !== window.location.hash && history[On ? 'replaceState' : 'pushState']('', document.title, i) : On ? Rn.replace(i) : Rn.hash = n, On = !0, En = setTimeout(function() {
							kn = !1;
						}, 60);
					};
				Ae('History', {
					publicMethods: {
						initHistory: function() {
							if(d.extend(g, Ln, !0), !!g.history) {
								Rn = window.location, Dn = !1, An = !1, On = !1, Sn = zn(), Fn = 'pushState' in history, -1 < Sn.indexOf('gid=') && (Sn = Sn.split('&gid=')[0], Sn = Sn.split('?gid=')[0]), Fe('afterChange', c.updateURL), Fe('unbindEvents', function() {
									d.unbind(window, 'hashchange', c.onHashChange);
								});
								var e = function() {
									Tn = !0, An || (Dn ? history.back() : Sn ? Rn.hash = Sn : Fn ? history.pushState('', document.title, Rn.pathname + Rn.search) : Rn.hash = ''), Un();
								};
								Fe('unbindEvents', function() {
									f && e();
								}), Fe('destroy', function() {
									Tn || e();
								}), Fe('firstUpdate', function() {
									b = Nn().pid;
								});
								var t = Sn.indexOf('pid='); -
								1 < t && (Sn = Sn.substring(0, t), '&' === Sn.slice(-1) && (Sn = Sn.slice(0, -1))), setTimeout(function() {
									h && d.bind(window, 'hashchange', c.onHashChange);
								}, 40);
							}
						},
						onHashChange: function() {
							return zn() === Sn ? (An = !0, void c.close()) : void(!kn && (Pn = !0, c.goTo(Nn().pid), Pn = !1));
						},
						updateURL: function() {
							Un();
							Pn || (On ? vn = setTimeout(Zn, 800) : Zn());
						}
					}
				}), d.extend(c, {
					shout: Le,
					listen: Fe,
					viewportSize: _e,
					options: g,
					isMainScrollAnimating: function() {
						return ce;
					},
					getZoomLevel: function() {
						return E;
					},
					getCurrentIndex: function() {
						return b;
					},
					isDragging: function() {
						return Q;
					},
					isZooming: function() {
						return ae;
					},
					setScrollOffset: function(e, t) {
						Ee.x = e, K = Ee.y = t, Le('updateScrollOffset', Ee);
					},
					applyZoomPan: function(e, t, n, i) {
						Ce.x = t, Ce.y = n, E = e, Ze(i);
					},
					init: function() {
						if(!(h || y)) {
							var e;
							c.framework = d, c.template = n, c.bg = d.getChildByClass(n, 'pswp__bg'), M = n.className, h = !0, q = d.detectFeatures(), Z = q.raf, B = q.caf, z = q.transform, W = q.oldIE, c.scrollWrap = d.getChildByClass(n, 'pswp__scroll-wrap'), c.container = d.getChildByClass(c.scrollWrap, 'pswp__container'), w = c.container.style, c.itemHolders = O = [{
								el: c.container.children[0],
								wrap: 0,
								index: -1
							}, {
								el: c.container.children[1],
								wrap: 0,
								index: -1
							}, {
								el: c.container.children[2],
								wrap: 0,
								index: -1
							}], O[0].el.style.display = O[2].el.style.display = 'none', et(), v = {
								resize: c.updateSize,
								orientationchange: function() {
									clearTimeout(G), G = setTimeout(function() {
										_e.x !== c.scrollWrap.clientWidth && c.updateSize();
									}, 500);
								},
								scroll: it,
								keydown: tt,
								click: nt
							};
							var t = q.isOldIOSPhone || q.isOldAndroid || q.isMobileOpera;
							for(q.animationName && q.transform && !t || (g.showAnimationDuration = g.hideAnimationDuration = 0), e = 0; e < Te.length; e++)
								c['init' + Te[e]]();
							if(o) {
								var i = c.ui = new o(c, d);
								i.init();
							}
							Le('firstUpdate'), b = b || g.index || 0, (isNaN(b) || 0 > b || b >= ln()) && (b = 0), c.currItem = on(b), (q.isOldIOSPhone || q.isOldAndroid) && (Pe = !1), n.setAttribute('aria-hidden', 'false'), g.modal && (Pe ? n.style.position = 'fixed' : (n.style.position = 'absolute', n.style.top = d.getScrollY() + 'px')), void 0 === K && (Le('initialLayout'), K = H = d.getScrollY());
							var l = 'pswp--open ';
							for(g.mainClass && (l += g.mainClass + ' '), g.showHideOpacity && (l += 'pswp--animate_opacity '), l += N ? 'pswp--touch' : 'pswp--notouch', l += q.animationName ? ' pswp--css_animation' : '', l += q.svg ? ' pswp--svg' : '', d.addClass(n, l), c.updateSize(), x = -1, ke = null, e = 0; e < u; e++)
								Me((e + x) * Ie.x, O[e].el.style);
							W || d.bind(c.scrollWrap, _, c), Fe('initialZoomInEnd', function() {
								c.setContent(O[0], b - 1), c.setContent(O[2], b + 1), O[0].el.style.display = O[2].el.style.display = 'block', g.focus && n.focus(), Ve();
							}), c.setContent(O[1], b), c.updateCurrItem(), Le('afterInit'), Pe || (T = setInterval(function() {
								lt || Q || ae || E !== c.currItem.initialZoomLevel || c.updateSize();
							}, 1e3)), d.addClass(n, 'pswp--visible');
						}
					},
					close: function() {
						h && (h = !1, y = !0, Le('close'), Xe(), rn(c.currItem, null, !0, c.destroy));
					},
					destroy: function() {
						Le('destroy'), Qt && clearTimeout(Qt), n.setAttribute('aria-hidden', 'true'), n.className = M, T && clearInterval(T), d.unbind(c.scrollWrap, _, c), d.unbind(window, 'scroll', c), St(), st(), Re = null;
					},
					panTo: function(e, t, n) {
						n || (e > de.min.x ? e = de.min.x : e < de.max.x && (e = de.max.x), t > de.min.y ? t = de.min.y : t < de.max.y && (t = de.max.y)), Ce.x = e, Ce.y = t, Ze();
					},
					handleEvent: function(t) {
						t = t || window.event, v[t.type] && v[t.type](t);
					},
					goTo: function(e) {
						e = De(e);
						var t = e - b;
						ke = t, b = e, c.currItem = on(b), ve -= t, He(Ie.x * ve), st(), ce = !1, c.updateCurrItem();
					},
					next: function() {
						c.goTo(b + 1);
					},
					prev: function() {
						c.goTo(b - 1);
					},
					updateCurrZoomItem: function(e) {
						if(e && Le('beforeChange', 0), O[1].el.children.length) {
							var t = O[1].el.children[0];
							pe = d.hasClass(t, 'pswp__zoom-wrap') ? t.style : null;
						} else
							pe = null;
						de = c.currItem.bounds, I = E = c.currItem.initialZoomLevel, Ce.x = de.center.x, Ce.y = de.center.y, e && Le('afterChange');
					},
					invalidateCurrItems: function() {
						S = !0;
						for(var e = 0; e < u; e++)
							O[e].item && (O[e].item.needsUpdate = !0);
					},
					updateCurrItem: function(e) {
						if(0 !== ke) {
							var t, n = r(ke);
							if(!(e && 2 > n)) {
								c.currItem = on(b), Oe = !1, Le('beforeChange', ke), n >= u && (x += ke + (0 < ke ? -u : u), n = u);
								for(var o = 0; o < n; o++)
									0 < ke ? (t = O.shift(), O[u - 1] = t, x++, Me((x + 2) * Ie.x, t.el.style), c.setContent(t, b - n + o + 1 + 1)) : (t = O.pop(), O.unshift(t), x--, Me(x * Ie.x, t.el.style), c.setContent(t, b + n - o - 1 - 1));
								if(pe && 1 === r(ke)) {
									var i = on(A);
									i.initialZoomLevel !== E && (un(i, _e), fn(i), Be(i));
								}
								ke = 0, c.updateCurrZoomItem(), A = b, Le('afterChange');
							}
						}
					},
					updateSize: function(e) {
						if(!Pe && g.modal) {
							var o = d.getScrollY();
							if(K !== o && (n.style.top = o + 'px', K = o), !e && Se.x === window.innerWidth && Se.y === window.innerHeight)
								return;
							Se.x = window.innerWidth, Se.y = window.innerHeight, n.style.height = Se.y + 'px';
						}
						if(_e.x = c.scrollWrap.clientWidth, _e.y = c.scrollWrap.clientHeight, it(), Ie.x = _e.x + t(_e.x * g.spacing), Ie.y = _e.y, He(Ie.x * ve), Le('beforeResize'), void 0 !== x) {
							for(var l, a, r, s = 0; s < u; s++)
								l = O[s], Me((s + x) * Ie.x, l.el.style), r = b + s - 1, g.loop && 2 < ln() && (r = De(r)), a = on(r), a && (S || a.needsUpdate || !a.bounds) ? (c.cleanSlide(a), c.setContent(l, r), 1 === s && (c.currItem = a, c.updateCurrZoomItem(!0)), a.needsUpdate = !1) : -1 === l.index && 0 <= r && c.setContent(l, r), a && a.container && (un(a, _e), fn(a), Be(a));
							S = !1;
						}
						I = E = c.currItem.initialZoomLevel, de = c.currItem.bounds, de && (Ce.x = de.center.x, Ce.y = de.center.y, Ze(!0)), Le('resize');
					},
					zoomTo: function(e, t, n, i, o) {
						t && (I = E, Et.x = r(t.x) - Ce.x, Et.y = r(t.y) - Ce.y, Ke(we, Ce));
						var l = je(e, !1),
							a = {};
						Qe('x', l, a, e), Qe('y', l, a, e);
						var s = E,
							p = {
								x: Ce.x,
								y: Ce.y
							};
						qe(a);
						var c = function(t) {
							1 === t ? (E = e, Ce.x = a.x, Ce.y = a.y) : (E = (e - s) * t + s, Ce.x = (a.x - p.x) * t + p.x, Ce.y = (a.y - p.y) * t + p.y), o && o(t), Ze(1 === t);
						};
						n ? dt('customZoomTo', 0, 1, n, i || d.easing.sine.inOut, c) : c(1);
					}
				});
			};
		});
	}, function(e, n, i) {
		var o, l;
		(function(t, a) {
			o = a, l = 'function' == typeof o ? o.call(n, i, n, e) : o, !(l !== void 0 && (e.exports = l));
		})(this, function() {
			'use strict';
			return function(n, o) {
				var i, l, e, a, r, s, d, p, c, m, u, g, h, y, f, b, x, w, C = this,
					_ = !1,
					v = !0,
					E = !0,
					I = {
						barsSize: {
							top: 44,
							bottom: 'auto'
						},
						closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
						timeToIdle: 4e3,
						timeToIdleOutside: 1e3,
						loadingIndicatorDelay: 1e3,
						addCaptionHTMLFn: function(e, t) {
							return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = '', !1);
						},
						closeEl: !0,
						captionEl: !0,
						fullscreenEl: !0,
						zoomEl: !0,
						shareEl: !0,
						counterEl: !0,
						arrowEl: !0,
						preloaderEl: !0,
						tapToClose: !1,
						tapToToggleControls: !0,
						clickToCloseNonZoomable: !0,
						shareButtons: [{
							id: 'facebook',
							label: 'Share on Facebook',
							url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
						}, {
							id: 'twitter',
							label: 'Tweet',
							url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
						}, {
							id: 'pinterest',
							label: 'Pin it',
							url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
						}, {
							id: 'download',
							label: 'Download image',
							url: '{{raw_image_url}}',
							download: !0
						}],
						getImageURLForShare: function() {
							return n.currItem.src || '';
						},
						getPageURLForShare: function() {
							return window.location.href;
						},
						getTextForShare: function() {
							return n.currItem.title || '';
						},
						indexIndicatorSep: ' / ',
						fitControlsWidth: 1200
					},
					k = function(t) {
						if(b)
							return !0;
						t = t || window.event, f.timeToIdle && f.mouseUsed && !c && z();
						for(var e, n, l = t.target || t.srcElement, a = l.getAttribute('class') || '', r = 0; r < K.length; r++)
							e = K[r], e.onTap && -1 < a.indexOf('pswp__' + e.name) && (e.onTap(), n = !0);
						if(n) {
							t.stopPropagation && t.stopPropagation(), b = !0;
							var i = o.features.isOldAndroid ? 600 : 30;
							setTimeout(function() {
								b = !1;
							}, i);
						}
					},
					P = function() {
						return !n.likelyTouchDevice || f.mouseUsed || screen.width > f.fitControlsWidth;
					},
					T = function(e, t, n) {
						o[(n ? 'add' : 'remove') + 'Class'](e, 'pswp__' + t);
					},
					S = function() {
						var e = 1 === f.getNumItemsFn();
						e !== y && (T(l, 'ui--one-slide', e), y = e);
					},
					O = function() {
						T(d, 'share-modal--hidden', E);
					},
					A = function() {
						return E = !E, E ? (o.removeClass(d, 'pswp__share-modal--fade-in'), setTimeout(function() {
							E && O();
						}, 300)) : (O(), setTimeout(function() {
							E || o.addClass(d, 'pswp__share-modal--fade-in');
						}, 30)), E || R(), !1;
					},
					D = function(i) {
						i = i || window.event;
						var e = i.target || i.srcElement;
						return(n.shout('shareLinkClick', i, e), !!e.href) && (!!e.hasAttribute('download') || (window.open(e.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? t(screen.width / 2 - 275) : 100)), E || A(), !1));
					},
					R = function() {
						for(var e, t, n, o, l, a = '', r = 0; r < f.shareButtons.length; r++)
							e = f.shareButtons[r], n = f.getImageURLForShare(e), o = f.getPageURLForShare(e), l = f.getTextForShare(e), t = e.url.replace('{{url}}', encodeURIComponent(o)).replace('{{image_url}}', encodeURIComponent(n)).replace('{{raw_image_url}}', n).replace('{{text}}', encodeURIComponent(l)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? 'download' : '') + '>' + e.label + '</a>', f.parseShareButtonOut && (a = f.parseShareButtonOut(e, a));
						d.children[0].innerHTML = a, d.children[0].onclick = D;
					},
					F = function(e) {
						for(var t = 0; t < f.closeElClasses.length; t++)
							if(o.hasClass(e, 'pswp__' + f.closeElClasses[t]))
								return !0;
					},
					L = 0,
					z = function() {
						clearTimeout(w), L = 0, c && C.setIdle(!1);
					},
					U = function(t) {
						t = t ? t : window.event;
						var e = t.relatedTarget || t.toElement;
						e && 'HTML' !== e.nodeName || (clearTimeout(w), w = setTimeout(function() {
							C.setIdle(!0);
						}, f.timeToIdleOutside));
					},
					N = function() {
						f.fullscreenEl && !o.features.isOldAndroid && (!i && (i = C.getFullscreenAPI()), i ? (o.bind(document, i.eventK, C.updateFullscreen), C.updateFullscreen(), o.addClass(n.template, 'pswp--supports-fs')) : o.removeClass(n.template, 'pswp--supports-fs'));
					},
					Z = function() {
						f.preloaderEl && (B(!0), m('beforeChange', function() {
							clearTimeout(h), h = setTimeout(function() {
								n.currItem && n.currItem.loading ? (!n.allowProgressiveImg() || n.currItem.img && !n.currItem.img.naturalWidth) && B(!1) : B(!0);
							}, f.loadingIndicatorDelay);
						}), m('imageLoadComplete', function(e, t) {
							n.currItem === t && B(!0);
						}));
					},
					B = function(e) {
						g !== e && (T(u, 'preloader--active', !e), g = e);
					},
					M = function(t) {
						var n = t.vGap;
						if(P()) {
							var i = f.barsSize;
							if(!(f.captionEl && 'auto' === i.bottom))
								n.bottom = 'auto' === i.bottom ? 0 : i.bottom;
							else if(a || (a = o.createEl('pswp__caption pswp__caption--fake'), a.appendChild(o.createEl('pswp__caption__center')), l.insertBefore(a, e), o.addClass(l, 'pswp__ui--fit')), f.addCaptionHTMLFn(t, a, !0)) {
								var r = a.clientHeight;
								n.bottom = parseInt(r, 10) || 44;
							} else
								n.bottom = i.top;
							n.top = i.top;
						} else
							n.top = n.bottom = 0;
					},
					H = function() {
						f.timeToIdle && m('mouseUsed', function() {
							o.bind(document, 'mousemove', z), o.bind(document, 'mouseout', U), x = setInterval(function() {
								L++, 2 == L && C.setIdle(!0);
							}, f.timeToIdle / 2);
						});
					},
					W = function() {
						m('onVerticalDrag', function(e) {
							v && 0.95 > e ? C.hideControls() : !v && 0.95 <= e && C.showControls();
						});
						var e;
						m('onPinchClose', function(t) {
							v && 0.9 > t ? (C.hideControls(), e = !0) : e && !v && 0.9 < t && C.showControls();
						}), m('zoomGestureEnded', function() {
							e = !1, e && !v && C.showControls();
						});
					},
					K = [{
						name: 'caption',
						option: 'captionEl',
						onInit: function(t) {
							e = t;
						}
					}, {
						name: 'share-modal',
						option: 'shareEl',
						onInit: function(e) {
							d = e;
						},
						onTap: function() {
							A();
						}
					}, {
						name: 'button--share',
						option: 'shareEl',
						onInit: function(e) {
							s = e;
						},
						onTap: function() {
							A();
						}
					}, {
						name: 'button--zoom',
						option: 'zoomEl',
						onTap: n.toggleDesktopZoom
					}, {
						name: 'counter',
						option: 'counterEl',
						onInit: function(e) {
							r = e;
						}
					}, {
						name: 'button--close',
						option: 'closeEl',
						onTap: n.close
					}, {
						name: 'button--arrow--left',
						option: 'arrowEl',
						onTap: n.prev
					}, {
						name: 'button--arrow--right',
						option: 'arrowEl',
						onTap: n.next
					}, {
						name: 'button--fs',
						option: 'fullscreenEl',
						onTap: function() {
							i.isFullscreen() ? i.exit() : i.enter();
						}
					}, {
						name: 'preloader',
						option: 'preloaderEl',
						onInit: function(e) {
							u = e;
						}
					}],
					q = function() {
						var e, t, n, i = function(r) {
							if(r)
								for(var s = r.length, l = 0; l < s; l++) {
									e = r[l], t = e.className;
									for(var i = 0; i < K.length; i++)
										n = K[i], -1 < t.indexOf('pswp__' + n.name) && (f[n.option] ? (o.removeClass(e, 'pswp__element--disabled'), n.onInit && n.onInit(e)) : o.addClass(e, 'pswp__element--disabled'));
								}
						};
						i(l.children);
						var a = o.getChildByClass(l, 'pswp__top-bar');
						a && i(a.children);
					};
				C.init = function() {
					o.extend(n.options, I, !0), f = n.options, l = o.getChildByClass(n.scrollWrap, 'pswp__ui'), m = n.listen, W(), m('beforeChange', C.update), m('doubleTap', function(e) {
						var t = n.currItem.initialZoomLevel;
						n.getZoomLevel() === t ? n.zoomTo(f.getDoubleTapZoom(!1, n.currItem), e, 333) : n.zoomTo(t, e, 333);
					}), m('preventDragEvent', function(n, e, i) {
						var o = n.target || n.srcElement;
						o && o.getAttribute('class') && -1 < n.type.indexOf('mouse') && (0 < o.getAttribute('class').indexOf('__caption') || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (i.prevent = !1);
					}), m('bindEvents', function() {
						o.bind(l, 'pswpTap click', k), o.bind(n.scrollWrap, 'pswpTap', C.onGlobalTap), n.likelyTouchDevice || o.bind(n.scrollWrap, 'mouseover', C.onMouseOver);
					}), m('unbindEvents', function() {
						E || A(), x && clearInterval(x), o.unbind(document, 'mouseout', U), o.unbind(document, 'mousemove', z), o.unbind(l, 'pswpTap click', k), o.unbind(n.scrollWrap, 'pswpTap', C.onGlobalTap), o.unbind(n.scrollWrap, 'mouseover', C.onMouseOver), i && (o.unbind(document, i.eventK, C.updateFullscreen), i.isFullscreen() && (f.hideAnimationDuration = 0, i.exit()), i = null);
					}), m('destroy', function() {
						f.captionEl && (a && l.removeChild(a), o.removeClass(e, 'pswp__caption--empty')), d && (d.children[0].onclick = null), o.removeClass(l, 'pswp__ui--over-close'), o.addClass(l, 'pswp__ui--hidden'), C.setIdle(!1);
					}), f.showAnimationDuration || o.removeClass(l, 'pswp__ui--hidden'), m('initialZoomIn', function() {
						f.showAnimationDuration && o.removeClass(l, 'pswp__ui--hidden');
					}), m('initialZoomOut', function() {
						o.addClass(l, 'pswp__ui--hidden');
					}), m('parseVerticalMargin', M), q(), f.shareEl && s && d && (E = !0), S(), H(), N(), Z();
				}, C.setIdle = function(e) {
					c = e, T(l, 'ui--idle', e);
				}, C.update = function() {
					v && n.currItem ? (C.updateIndexIndicator(), f.captionEl && (f.addCaptionHTMLFn(n.currItem, e), T(e, 'caption--empty', !n.currItem.title)), _ = !0) : _ = !1, E || A(), S();
				}, C.updateFullscreen = function(t) {
					t && setTimeout(function() {
						n.setScrollOffset(0, o.getScrollY());
					}, 50), o[(i.isFullscreen() ? 'add' : 'remove') + 'Class'](n.template, 'pswp--fs');
				}, C.updateIndexIndicator = function() {
					f.counterEl && (r.innerHTML = n.getCurrentIndex() + 1 + f.indexIndicatorSep + f.getNumItemsFn());
				}, C.onGlobalTap = function(t) {
					t = t || window.event;
					var e = t.target || t.srcElement;
					if(!b)
						if(t.detail && 'mouse' === t.detail.pointerType) {
							if(F(e))
								return void n.close();
							o.hasClass(e, 'pswp__img') && (1 === n.getZoomLevel() && n.getZoomLevel() <= n.currItem.fitRatio ? f.clickToCloseNonZoomable && n.close() : n.toggleDesktopZoom(t.detail.releasePoint));
						}
					else if(f.tapToToggleControls && (v ? C.hideControls() : C.showControls()), f.tapToClose && (o.hasClass(e, 'pswp__img') || F(e)))
						return void n.close();
				}, C.onMouseOver = function(t) {
					t = t || window.event;
					var e = t.target || t.srcElement;
					T(l, 'ui--over-close', F(e));
				}, C.hideControls = function() {
					o.addClass(l, 'pswp__ui--hidden'), v = !1;
				}, C.showControls = function() {
					v = !0, _ || C.update(), o.removeClass(l, 'pswp__ui--hidden');
				}, C.supportsFullscreen = function() {
					var e = document;
					return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen);
				}, C.getFullscreenAPI = function() {
					var e, t = document.documentElement,
						i = 'fullscreenchange';
					return t.requestFullscreen ? e = {
						enterK: 'requestFullscreen',
						exitK: 'exitFullscreen',
						elementK: 'fullscreenElement',
						eventK: i
					} : t.mozRequestFullScreen ? e = {
						enterK: 'mozRequestFullScreen',
						exitK: 'mozCancelFullScreen',
						elementK: 'mozFullScreenElement',
						eventK: 'moz' + i
					} : t.webkitRequestFullscreen ? e = {
						enterK: 'webkitRequestFullscreen',
						exitK: 'webkitExitFullscreen',
						elementK: 'webkitFullscreenElement',
						eventK: 'webkit' + i
					} : t.msRequestFullscreen && (e = {
						enterK: 'msRequestFullscreen',
						exitK: 'msExitFullscreen',
						elementK: 'msFullscreenElement',
						eventK: 'MSFullscreenChange'
					}), e && (e.enter = function() {
						return p = f.closeOnScroll, f.closeOnScroll = !1, 'webkitRequestFullscreen' === this.enterK ? void n.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) : n.template[this.enterK]();
					}, e.exit = function() {
						return f.closeOnScroll = p, document[this.exitK]();
					}, e.isFullscreen = function() {
						return document[this.elementK];
					}), e;
				};
			};
		});
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = function() {
				function e(e) {
					this._collection = null, this._filters = [], this.gallery = e;
				}
				return e.prototype.addFilter = function(e) {
					this.filters.push(e);
				}, e.prototype.refresh = function() {
					this.filters.forEach(function(e) {
						e.render();
					});
				}, e.prototype.render = function() {
					var e = document.createElement('div');
					i.Utility.addClass(e, 'natural-gallery-images sectionContainer'), e.appendChild(i.Utility.getIcon('icon-pict'));
					var t = document.createElement('div');
					i.Utility.addClass(t, 'sectionName'), t.textContent = this.gallery.options.labelImages, e.appendChild(t);
					var n = document.createElement('span');
					e.appendChild(n), i.Utility.addClass(n, 'natural-gallery-visible');
					var o = document.createElement('span');
					o.textContent = ' / ', e.appendChild(o);
					var l = document.createElement('span');
					return i.Utility.addClass(l, 'natural-gallery-total'), e.appendChild(l), this.element = document.createElement('div'), this.filters.forEach(function(e) {
						this.element.appendChild(e.render());
					}, this), i.Utility.addClass(this.element, 'natural-gallery-header'), this.element.appendChild(e), this.element;
				}, e.prototype.isFiltered = function() {
					return null !== this.collection;
				}, e.prototype.filter = function() {
					var e = null;
					this.filters.forEach(function(t) {
						t.isActive() && (null == e ? e = t.collection : e = i.Utility.intersectionBy(e, t.collection, 'id'));
					}), this.collection = e, this.gallery.refresh();
				}, Object.defineProperty(e.prototype, 'collection', {
					get: function() {
						return this._collection;
					},
					set: function(e) {
						this._collection = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'gallery', {
					get: function() {
						return this._gallery;
					},
					set: function(e) {
						this._gallery = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'filters', {
					get: function() {
						return this._filters;
					},
					set: function(e) {
						this._filters = e;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Header = o;
	}, function(e, t, n) {
		'use strict';
		var i = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for(var n in t)
					t.hasOwnProperty(n) && (e[n] = t[n]);
			};
			return function(t, n) {
				function i() {
					this.constructor = t;
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i);
			};
		}();
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var o = n(0),
			l = n(1),
			a = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this;
				}
				return i(t, e), t.prototype.render = function() {
					var e = document.createElement('div');
					o.Utility.addClass(e, 'natural-gallery-searchTerm sectionContainer'), e.appendChild(o.Utility.getIcon('icon-search')), e.appendChild(this.getInput());
					var t = document.createElement('label');
					o.Utility.addClass(t, 'sectionName'), t.textContent = this.header.gallery.options.labelSearch, e.appendChild(t);
					var n = document.createElement('span');
					return o.Utility.addClass(n, 'bar'), e.appendChild(n), e;
				}, t.prototype.getInput = function() {
					var e = this,
						t = document.createElement('input');
					return t.setAttribute('required', ''), t.addEventListener('keyup', function(t) {
						var n = this;
						27 === t.keyCode && (n.value = ''), e.filter(n.value);
					}), t;
				}, t.prototype.filter = function(e) {
					this.collection = null;
					var t = o.Utility.removeDiacritics(e).toLowerCase();
					0 < t.length && (this.collection = [], this.header.gallery.getOriginalCollection().forEach(function(e) {
						var n = o.Utility.removeDiacritics(e.title + ' ' + (e.description ? e.description : '')).toLowerCase(); -
						1 !== n.search(t) && this.collection.push(e);
					}, this)), this.header.filter();
				}, t;
			}(l.AbstractFilter);
		t.SearchFilter = a;
	}, function(e, t, n) {
		'use strict';
		var i = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for(var n in t)
					t.hasOwnProperty(n) && (e[n] = t[n]);
			};
			return function(t, n) {
				function i() {
					this.constructor = t;
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i);
			};
		}();
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var o = n(1),
			l = n(12),
			a = n(0),
			r = function(e) {
				function t(t) {
					var n = e.call(this, t) || this;
					return n.header = t, n._categories = [], n;
				}
				return i(t, e), Object.defineProperty(t.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.render = function() {
					if(this.prepare(), !this.element) {
						this.element = document.createElement('div'), a.Utility.addClass(this.element, 'natural-gallery-categories sectionContainer');
						var e = document.createElement('div');
						a.Utility.addClass(e, 'sectionName'), e.textContent = this.header.gallery.options.labelCategories, this.element.appendChild(e);
					} else
						for(var t = this.element.getElementsByTagName('label'), n = t.length - 1; 0 < n; n--)
							this.element.removeChild(t.item(n));
					var i = this.element.getElementsByTagName('label')[0];
					return i && i.parentNode.removeChild(i), this.categories.forEach(function(e) {
						this.element.appendChild(e.render());
					}, this), this.element;
				}, t.prototype.prepare = function() {
					var e = [];
					this.header.gallery.categories.forEach(function(t) {
						e.push(new l.Category(t.id, t.title, this));
					}, this), this.none = new l.Category(-1, this.header.gallery.options.labelNone, this), this.others = new l.Category(-2, this.header.gallery.options.labelOthers, this), this.header.gallery.options.showNone && e.length && e.push(this.none), this.header.gallery.options.showOthers && e.length && e.push(this.others);
					var t = [];
					this.header.gallery.getOriginalCollection().forEach(function(n) {
						(!n.categories || n.categories && 0 === n.categories.length && this.header.gallery.options.showNone) && (n.categories = [this.none]), e.length && a.Utility.differenceBy(n.categories, e, 'id').length === n.categories.length && this.header.gallery.options.showOthers && (n.categories = [this.others]), n.categories.forEach(function(e) {
							t.push(new l.Category(e.id, e.title, this));
						}, this);
					}, this), e = a.Utility.uniqBy(e, 'id'), t = a.Utility.uniqBy(t, 'id'), this.categories = e.length ? a.Utility.intersectionBy(e, t, 'id') : t;
				}, t.prototype.filter = function() {
					var e = this.categories.filter(function(e) {
						return e.isActive;
					});
					if(e.length === this.categories.length)
						this.collection = null;
					else if(0 === e.length)
						this.collection = [];
					else {
						var t = [];
						this.header.gallery.getOriginalCollection().forEach(function(n) {
							!n.categories || n.categories && 0 === n.categories.length ? this.none && t.push(n) : n.categories.some(function(i) {
								var o = e.some(function(e) {
									return i.id === e.id;
								});
								if(o)
									return t.push(n), !0;
							});
						}, this), this.collection = t;
					}
					this.header.filter();
				}, Object.defineProperty(t.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'others', {
					get: function() {
						return this._others;
					},
					set: function(e) {
						this._others = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'none', {
					get: function() {
						return this._none;
					},
					set: function(e) {
						this._none = e;
					},
					enumerable: !0,
					configurable: !0
				}), t;
			}(o.AbstractFilter);
		t.CategoryFilter = r;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = function() {
				function e(e, t, n) {
					this.filter = n, this._isActive = !0, this.id = e, this.title = t;
				}
				return e.prototype.render = function() {
					var e = this;
					this.element = document.createElement('label');
					var t = document.createElement('input');
					t.setAttribute('type', 'checkbox'), t.setAttribute('checked', 'checked'), t.addEventListener('change', function() {
						e.isActive = !e.isActive, e.filter.filter();
					}), this.element.appendChild(t);
					var n = document.createElement('span');
					n.textContent = this.title;
					var o = document.createElement('span');
					i.Utility.addClass(o, 'label'), o.appendChild(i.Utility.getIcon('icon-category')), o.appendChild(n), this.element.appendChild(o);
					var l = document.createElement('span');
					return i.Utility.addClass(l, 'bar'), this.element.appendChild(l), this.element;
				}, Object.defineProperty(e.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'title', {
					get: function() {
						return this._title;
					},
					set: function(e) {
						this._title = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'isActive', {
					get: function() {
						return this._isActive;
					},
					set: function(e) {
						this._isActive = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Category = o;
	}, function(e, i) {
		'use strict';
		Object.defineProperty(i, '__esModule', {
			value: !0
		});
		var o;
		(function(e) {
			var o = Math.ceil;
			e.organize = function(e) {
				'natural' === e.options.format ? this.organizeNatural(e.collection, e.bodyWidth, e.options.rowHeight, e.options.margin) : 'square' === e.options.format && e.options.imagesPerRow ? this.organizeSquareByImagesPerRow(e.collection, e.bodyWidth, e.options.imagesPerRow, e.options.margin) : 'square' === e.options.format && e.options.rowHeight && this.organizeSquareByRowHeight(e.collection, e.bodyWidth, e.options.rowHeight, e.options.margin), e.style();
			}, e.simulatePagination = function(e) {
				var t = e.options.margin ? e.options.margin : 0,
					n = o(e.options.rowHeight * e.defaultImageRatio + t),
					i = (e.bodyWidth + t) / (n + t);
				return o(i);
			}, e.organizeSquareByRowHeight = function(e, l, a, r) {
				r || (r = 0);
				for(var s, d = o((l + r) / (a + r)), p = t((l + r - d * r) / d), c = l - d * p - (d - 1) * r, m = 0; m < e.length; m++)
					s = e[m], s.last = m % d == d - 1, s.row = n(m / d), s.width = n(p), s.height = n(p), s.last && (s.width = n(p + c));
			}, e.organizeSquareByImagesPerRow = function(e, t, o, l) {
				l || (l = 0), o || (o = 4);
				for(var a, r = (t - (o - 1) * l) / o, s = 0; s < e.length; s++)
					a = e[s], a.width = n(r), a.height = n(r), a.last = s % o == o - 1, a.row = n(s / o);
			}, e.organizeNatural = function(e, t, n, i, o) {
				void 0 === o && (o = null), o || (o = 0), i || (i = 0), n || (n = 300);
				for(var l = 1; l <= e.length; l++) {
					var a = e.slice(0, l),
						r = this.getRowWidth(n, i, a);
					if(r >= t) {
						this.computeSizes(a, t, i, o), this.organizeNatural(e.slice(l), t, n, i, o + 1);
						break;
					} else if(l === e.length) {
						this.computeSizes(a, null, i, o, n);
						break;
					}
				}
			}, e.computeSizes = function(e, o, l, a, r) {
				void 0 === r && (r = null);
				for(var s = o ? this.getRowHeight(o, l, e) : r, d = this.getRowWidth(s, l, e), p = o ? this.apportionExcess(e, o, d) : 0, c = 0, m = 0; m < e.length; m++) {
					var i = e[m],
						u = this.getImageRatio(i) * s - p;
					c += u - n(u), u = n(u), (1 <= c || m === e.length - 1 && 1 === t(c)) && (u++, c--), i.width = u, i.height = n(s), i.row = a, i.last = m === e.length - 1;
				}
			}, e.getRowWidth = function(e, t, n) {
				return t * (n.length - 1) + this.getRatios(n) * e;
			}, e.getRowHeight = function(e, t, n) {
				return e / this.getRatios(n) + t * (n.length - 1);
			}, e.getRatios = function(e) {
				for(var t = this, n = 0, o = 0; o < e.length; o++)
					n += t.getImageRatio(e[o]);
				return n;
			}, e.getImageRatio = function(e) {
				return +e.tWidth / +e.tHeight;
			}, e.apportionExcess = function(e, t, n) {
				var i = (n - t) / e.length;
				return i;
			};
		})(o = i.Organizer || (i.Organizer = {}));
	}]);
});;
"use strict";
var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
	"function" == typeof define && define.amd ? define(function() {
		return t
	}) : "object" === ("undefined" == typeof exports ? "undefined" : y(exports)) ? module.exports = t : e.katelog = t
}(window, function(e) {
	function f(e, t) {
		return !!e.className && e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
	}

	function u(e, t) {
		if(f(e, t)) {
			var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
			e.className = e.className.replace(n, " ")
		}
	}

	function t(e) {
		for(var t, n = void 0, o = [], i = {}, a = {
				id: -1
			}, l = null, r = void 0, c = 0; c < e.length; c++) r = "heading-" + c, i = {
			name: e[c].innerText || e[c].textContent,
			tagName: n = e[c].tagName,
			id: e[c].id = r,
			level: (t = n, t ? t.slice(1) : 0),
			parent: a
		}, l && (d(i.tagName) < d(l.tagName) ? i.parent = l : i.parent = s(i, l)), l = i, o.push(i);
		return o
	}

	function s(e, t) {
		for(var n = t.parent; n && d(e.tagName) >= d(n.tagName);) n = n.parent;
		return n || {
			id: -1
		}
	}

	function d(e) {
		var t = 0;
		if(e) switch(e.toLowerCase()) {
			case "h1":
				t = 6;
				break;
			case "h2":
				t = 5;
				break;
			case "h3":
				t = 4;
				break;
			case "h4":
				t = 3;
				break;
			case "h5":
				t = 2;
				break;
			case "h6":
				t = 1
		}
		return t
	}

	function n(e, t, n) {
		e && (e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
			e["e" + t + n](window.event)
		}, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1))
	}

	function r(e, t) {
		var n, o, i = void 0,
			a = !1;
		if(e) {
			i = "<ul>";
			for(var l = 0; l < e.length; l++) n = e[l].parent, o = t, n && o && "object" === (void 0 === n ? "undefined" : y(n)) && "object" === (void 0 === o ? "undefined" : y(o)) && n.id === o.id && (a = !0, i += '<li><div class="' + p.linkClass + " k-catelog-level-" + e[l].level + '" data-target="' + e[l].id + '">' + e[l].name + "</div>", i += r(e, e[l]), i += "</li>");
			i += "</ul>"
		}
		return a ? i : ""
	}
	"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
		value: function(e, t) {
			if(null == e) throw new TypeError("Cannot convert undefined or null to object");
			for(var n = Object(e), o = 1; o < arguments.length; o++) {
				var i = arguments[o];
				if(null != i)
					for(var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
			}
			return n
		},
		writable: !0,
		configurable: !0
	});
	var p = Object.assign({}, {
			linkClass: "k-catelog-link",
			linkActiveClass: "k-catelog-link-active",
			supplyTop: 0,
			selector: ["h1", "h2", "h3", "h4", "h5", "h6"],
			active: null
		}, e),
		o = this.contentEl = document.getElementById(p.contentEl),
		g = document.getElementById(p.catelogEl),
		i = o.querySelectorAll(p.selector.join()),
		a = t(i),
		l = !1;
	g.innerHTML = r(a, {
		id: -1
	});
	var c = "\n        .k-catelog-list { overflow: hidden !important; }\n        .k-catelog-list > ul { position: relative; }    \n    ",
		h = document.createElement("style");

	function v(e) {
		var t, n = g.querySelectorAll("[data-target]");
		t = n, n = Array.prototype.slice.call(t);
		for(var o, i, a, l, r = null, c = void 0, s = 0; s < n.length; s++) c = n[s], l = "target", ((a = c).dataset ? a.dataset[l] : a.getAttribute("data-" + l)) === e ? (o = c, i = p.linkActiveClass, f(o, i) || (o.className += " " + i), r = c, g.children[0].offsetHeight > g.offsetHeight && (c.offsetTop > g.offsetHeight / 2 ? g.children[0].offsetHeight - c.offsetTop - c.offsetHeight < g.offsetHeight / 2 ? g.children[0].style.marginTop = -g.children[0].offsetHeight + g.offsetHeight + "px" : g.children[0].style.marginTop = g.offsetHeight / 2 - c.offsetTop + "px" : g.children[0].style.marginTop = "0px")) : u(c, p.linkActiveClass);
		"function" == typeof p.active && p.active.call(this, r)
	}

	function m(e) {
		for(var t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
		return t
	}
	h.type = "text/css", h.styleSheet ? h.styleSheet.cssText = c : h.innerHTML = c, document.getElementsByTagName("head")[0].appendChild(h), n(g, "click", function(e) {
		var t = (e.target || e.srcElement).getAttribute("data-target");
		if(t) {
			var n = document.getElementById(t);
			l = !0, window.scrollTo(0, n.offsetTop - p.supplyTop), v(t)
		}
	}), n(window, "scroll", function(e) {
		if(!l) {
			for(var t = (document.documentElement.scrollTop || document.body.scrollTop) + p.supplyTop, n = null, o = i.length - 1; 0 <= o; o--)
				if(m(i[o]) <= t) {
					n = i[o];
					break
				}
			v(n ? n.id : null)
		}
		l = !1
	}), this.rebuild = function() {
		var e = t(i = o.querySelectorAll(p.selector.join()));
		g.innerHTML = r(e, {
			id: -1
		})
	}
});;
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});;
// ==================================================
// fancyBox v3.5.6
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
(function(window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function(stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl:
        '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl:
        '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl:
      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download:
        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom:
        '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn:
        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function(current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function(current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function(id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function() {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function(opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function(key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function(elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function(content, opts, index) {
    var self = this;

    self.opts = mergeOpts({index: index}, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function() {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
            (window.innerWidth - document.documentElement.clientWidth) +
            "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function(index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
        self.translate(
          self,
          firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
        )
      )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function(content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function(i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {contentType: "pdf", opts: {iframe: {preload: false}}});
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function() {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function(e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function(e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function() {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function() {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function(e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function(e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function() {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function() {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function(pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function(index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function(index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {top: 0, left: leftPos - stagePos.left + diff});

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide,
            {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function() {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function() {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function(pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function(x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content,
        {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function() {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function(duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content,
        {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function() {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function(slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function(e) {
      var self = this;

      $.each(self.slides, function(key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function(slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function(duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide,
        {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function() {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function(slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function(nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function() {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function(nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function(nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {width: nextWidth, height: nextHeight};
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function(slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
              .replace(/\{\{src\}\}/gi, slide.src)
              .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
              .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function(data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function(jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function() {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function(slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function() {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function() {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function() {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function(slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function(el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function(el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function(a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function(slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function() {
          self.setError(slide);
        })
        .one("load", function() {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function() {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function(slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function(e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function() {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function() {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function(slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function() {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function(slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function(slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function(slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function(slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function(e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function(slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function(slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function(slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function() {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function() {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function(slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function() {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function(key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function() {
            if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function(type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function(e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function() {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function() {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function() {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function(e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function() {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function() {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function(e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function() {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function(andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
          .map(function(i) {
            return "fancybox-show-" + i;
          })
          .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function() {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function() {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.6",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function(items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function(all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function() {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function() {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function(e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function() {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function(options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {options: options}, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start",
        {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function() {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function(e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);

// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function(rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function(rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function(url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function(key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function(e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function(providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function(vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function() {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function() {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function() {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function(vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function(e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function() {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function(e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);

// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function(window, document, $) {
  "use strict";

  var requestAFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function(id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function(e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function(el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function(instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function() {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function(e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {top: 0, left: 0};
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function(e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function(e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function(e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function(index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function(index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function() {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function(index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function() {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function() {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function() {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function(e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function(swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide,
        {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function() {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function() {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function(e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function(prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
        .find($target)
        .addBack()
        .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function() {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function(e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function(e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);

// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function(document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow:
        '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function() {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function(force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {scaleX: 1}, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function() {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function() {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function() {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function() {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function() {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function(e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function() {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);

// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function(document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function() {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function(elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function() {
        document[fn.exitFullscreen]();
      },
      toggle: function(elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function() {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function() {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function() {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function(e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function(e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);

// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function(document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true,
    {
      btnTpl: {
        thumbs:
          '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function(instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function(instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function() {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function() {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
            .find(parentEl)
            .addBack()
            .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function() {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function(i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
            i +
            '"' +
            (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
            "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
            instance.group.length *
              self.$list
                .children()
                .eq(0)
                .outerWidth(true)
        );
      }
    },

    focus: function(duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate(
          {
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate(
            {
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function() {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function() {
      this.isVisible = false;
      this.update();
    },

    show: function() {
      this.isVisible = true;
      this.update();
    },

    toggle: function() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function(e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function(e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);

//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function(document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share:
        '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function(instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl:
        '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function(s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function() {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function(shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function() {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function() {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);

// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function(window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function(sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function(ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function() {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function(e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function(e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function() {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"](
              {},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function(e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function() {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
          .get()
          .reverse(),
        function(index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function() {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);

// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function(document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function(e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);
