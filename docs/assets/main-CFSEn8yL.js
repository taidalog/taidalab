(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const rt=Symbol("numeric");function bs(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[rt])}function ys(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function ws(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[rt]().multiply(t)}function Is(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[rt]().toFixed(t)}function Tn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[rt]().toPrecision(t)}function Pn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[rt]().toExponential(t)}function xn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[rt]().toHex()}function ke(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Es(e){return e!=null&&typeof e.GetEnumerator=="function"}function vs(e){return e!=null&&typeof e.CompareTo=="function"}function Bs(e){return e!=null&&typeof e.Equals=="function"}function Jn(e){return e!=null&&typeof e.GetHashCode=="function"}function _s(e){return e!=null&&typeof e.Dispose=="function"}function te(e){_s(e)&&e.Dispose()}function Te(){return null}function Ct(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class As{constructor(t){this.iter=t,this.current=Te()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Le(e){return Es(e)?e.GetEnumerator():new As(e[Symbol.iterator]())}function Zn(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function Nn(e,t){return e.toString(10).padStart(t,"0")}function qn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function L(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Be{static id(t){return Be.idMap.has(t)||Be.idMap.set(t,++Be.count),Be.idMap.get(t)}}Be.idMap=new WeakMap;Be.count=0;function st(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function R(e){return e*2654435761|0}function Qn(e){return st(e.toString(32))}function Ht(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Ss(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return R(e);case"bigint":return Qn(e);case"string":return st(e);default:return R(Be.id(e))}}function Ls(e){return Jn(e)?e.GetHashCode():Ss(e)}function Cs(e){return e.getTime()}function Ms(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Xe(e[r]);return Ht(n)}function Xe(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return R(e);case"bigint":return Qn(e);case"string":return st(e);default:{if(Jn(e))return e.GetHashCode();if(ke(e))return Ms(e);if(e instanceof Date)return Cs(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Xe(r));return Ht(n)}else return R(Be.id(e))}}}function zn(e){return Ls(e)}function ks(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function er(e,t){return ks(e,t,se)}function Ts(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!se(e[n[s]],t[r[s]]))return!1;return!0}function se(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:Bs(e)?e.Equals(t):ke(e)?ke(t)&&er(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&tr(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&Ts(e,t)}function tr(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+qn(e),r=t.getTime()+qn(t)),n===r?0:n<r?-1:1}function ct(e,t){return e===t?0:e<t?-1:1}function Ps(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function nr(e,t){return Ps(e,t,Ve)}function xs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=Ve(e[i],t[i]),o!==0)return o}return 0}function Ve(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:vs(e)?e.CompareTo(t):ke(e)?ke(t)?nr(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?tr(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?xs(e,t):-1}const cn=new WeakMap;function mt(e){if(e==null)return null;const t=(n,r,s)=>e(n)(r)(s);return cn.set(t,e),t}function Hn(e){return cn.get(e)??(t=>n=>r=>e(t,n,r))}function Ns(e){return cn.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function qs(e){let t=0,n="[";for(const r of e){if(t===0)n+=k(r);else if(t===100){n+="; ...";break}else n+="; "+k(r);t++}return n+"]"}function k(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return qs(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+k(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function Hs(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=k(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>k(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class $t{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Hs(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Xe(n));return t.splice(0,0,R(this.tag)),Ht(t)}Equals(t){return this===t?!0:Ct(this,t)&&this.tag===t.tag?er(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Ct(this,t)?this.tag===t.tag?nr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function $s(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function Rs(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+k(n)).join(`
  `)+" }"}function Os(e){const t=Object.values(e).map(n=>Xe(n));return Ht(t)}function Ds(e,t){if(e===t)return!0;if(Ct(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!se(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function Ws(e,t){if(e===t)return 0;if(Ct(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=Ve(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class Ne{toJSON(){return $s(this)}toString(){return Rs(this)}GetHashCode(){return Os(this)}Equals(t){return Ds(this,t)}CompareTo(t){return Ws(this,t)}}class et{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}function Fs(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+Nn(n,2)+":"+Nn(r,2)}function Vs(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Fs(e.offset??0)}function Gs(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function Xs(e,t,n){return e.offset!=null?Vs(e):Gs(e)}function dn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function Ys(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function rr(e,t,n=0){return e.lastIndex=n,e.test(t)}function js(e,t,n=0){return e.lastIndex=n,e.exec(t)}const lt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,ut=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function Us(e,t){return ys(e,t)<0}function h(e){return{input:e,cont:Js(e)}}function B(e,t){let n=0,r=0,s="";ut.lastIndex=0;let o=ut.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,a,l,u,c]=o;r=ut.lastIndex,s+=sr(t[n++],a,l,u,c),ut.lastIndex=r-1,o=ut.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function Ks(e,t){return typeof t=="string"?e(t):t.cont(e)}function f(e){return Ks(t=>t,e)}function sr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",bs(e))switch(s.toLowerCase()!=="x"&&(Us(e,0)?(e=ws(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=Is(e,r);break;case"g":case"G":e=r!=null?Tn(e,r):Tn(e);break;case"e":case"E":e=r!=null?Pn(e,r):Pn(e);break;case"x":e=xn(e);break;case"X":e=xn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=Xs(e):e=k(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,a=t.indexOf("-")>=0,l=a||!i?" ":"0";l==="0"?(e=Jt(e,n-o.length,l,a),e=o+e):e=Jt(o+e,n,l,a)}return e}function or(e,t,n,r="",s=-1){return(...o)=>{let i=r;const a=t.slice(),l=n.slice();for(const u of o){const[,,c,d,m,p]=l[0];let g=d;if(s>=0)g=s,s=-1;else if(g==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=a[0],i+=sr(u,c,g,m,p),a.splice(0,1),l.splice(0,1)}return l.length===0?(i+=a[0],e(i)):or(e,a,l,i,s)}}function Js(e){return t=>{lt.lastIndex=0;const n=[],r=[];let s=0,o=lt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=lt.lastIndex,lt.lastIndex-=1,o=lt.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),or(t,n,r))}}function ir(e){return typeof e!="string"||e.length===0}function H(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Jt(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function Zs(e,t,n){return Jt(e,t,n)}function mn(e,t,n){return e.replace(new RegExp(Ys(t),"g"),n)}const Qs=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <aside></aside>\r
                    <main></main>\r
                </div>\r
                <footer></footer>\r
            </div>`,ne=`\r
            <div class="header-left">\r
                <span id="hamburgerButton" class="material-symbols-outlined hamburger-button" translate="no">\r
                    menu\r
                </span>\r
            </div>\r
            <div class="header-center">\r
                <div id="headerTitle" class="header-title"></div>\r
                <div class="inline-flex-center">\r
                    <span id="helpButton" class="material-symbols-outlined help-button" translate="no">\r
                        help\r
                    </span>\r
                </div>\r
            </div>\r
            <div class="header-right">\r
            </div>\r
            `,ft=`\r
            <div class="header-left">\r
                <span id="hamburgerButton" class="material-symbols-outlined hamburger-button" translate="no">\r
                    menu\r
                </span>\r
            </div>\r
            <div class="header-center">\r
                <div id="headerTitle" class="header-title"></div>\r
                <div class="inline-flex-center"></div>\r
            </div>\r
            <div class="header-right">\r
            </div>\r
            `,zs=`\r
            <ul>\r
                <details>\r
                    <summary>\r
                        <a class="home" id="asideEndlessBinary">10進数↔︎2進数の反復練習</a>\r
                    </summary>\r
                    <ul>\r
                        <li><a class="dec2bin" href="/taidalab/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>\r
                        <li><a class="dec2bin" href="/taidalab/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>\r
                        <li><a class="bin2dec" href="/taidalab/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>\r
                        <li><a class="bin2dec" href="/taidalab/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>\r
                        <li><a class="power-of-two" href="/taidalab/endless-binary/power-of-two-1/">2のn乗</a></li>\r
                        <li><a class="power-of-two" href="/taidalab/endless-binary/power-of-two-2/">2のn乗-1</a></li>\r
                        <li><a class="addition" href="/taidalab/endless-binary/addition/">加算</a></li>\r
                        <li><a class="subtraction" href="/taidalab/endless-binary/subtraction/">減算</a></li>\r
                        <li><a class="complement" href="/taidalab/endless-binary/complement/">補数</a></li>\r
                        <li><a class="dec2hex" href="/taidalab/endless-binary/dec2hex/">10進数→16進数</a></li>\r
                        <li><a class="hex2dec" href="/taidalab/endless-binary/hex2dec/">16進数→10進数</a></li>\r
                    </ul>\r
                </details>\r
                <li><a class="iro-iroiro" id="asideIroIroiro" href="/taidalab/iro-iroiro/">色いろいろ</a></li>\r
                <li><a class="network-simulator" id="asideNetworkSimulator" href="/taidalab/network-simulator/">ネットワークシミュレータ</a></li>\r
                <li><a class="ctc" id="asideSoon" href="#">Coming soon...</a></li>\r
            </ul>\r
            <ul>\r
                <li><a class="home" id="asideAbout" href="/taidalab/">Home</a></li>\r
                <li><a class="home" id="asideAbout" href="/taidalab/about/">About</a></li>\r
                <li><a class="home" id="asideTerms" href="/taidalab/terms/">ご利用について</a></li>\r
                <li><a class="home" id="asideTerms" href="/taidalab/information-policy/">情報の外部送信について</a></li>\r
            </ul>\r
            <ul>\r
                <li><a class="home" id="asideOdaibako" href="https://odaibako.net/u/taidalog">お題箱</a></li>\r
                <li><a class="home" id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>\r
            </ul>`,ye='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',eo="Version 5.0.0",to=f(h(`\r
                <small class="footer-container">\r
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>\r
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>\r
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>\r
                </small>`))(eo),ar=`\r
            <div class="calculation-area" id="calculationArea">\r
                <div class="first-row" id="">\r
                    <span class="digit-area question-number" id="firstRowDigit8"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit7"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit6"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit5"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit4"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit3"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit2"></span>\r
                    <span class="digit-area question-number" id="firstRowDigit1"></span>\r
                    <span class=""><sub id="firstRowSrcRadix"></sub></span>\r
                </div>\r
                <div class="second-row" id="secondRow">\r
                    <span class="question-number" id="operator"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit8"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit7"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit6"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit5"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit4"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit3"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit2"></span>\r
                    <span class="digit-area question-number" id="secondRowDigit1"></span>\r
                    <span class=""><sub id="secondRowSrcRadix"></sub></span>\r
                </div>\r
                <div class="under-line"></div>\r
            </div>`,no="https://taidalog.github.io/",lr="/taidalab/";function ur(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),k(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+k(s))}else return e}function ro(e,t){return t.origin===e?t.pathname.startsWith(lr):!1}function cr(e){return ro(no,e)}const so=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function dr(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=ft,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1 translate="no">taidalab</h1>',document.querySelector("main").innerHTML=so,document.onkeydown=t=>{}}class tt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Xe(this.value)}Equals(t){return t==null?!1:se(this.value,t instanceof tt?t.value:t)}CompareTo(t){return t==null?1:Ve(this.value,t instanceof tt?t.value:t)}}function A(e){if(e==null)throw new Error("Option has no value");return e instanceof tt?e.value:e}function F(e){return e==null||e instanceof tt?new tt(e):e}function J(e,t){return e!=null?A(e):t}function _e(e,t){return t!=null?F(e(A(t))):void 0}const oo="The index was outside the range of elements in the collection.",Rt="Collection was empty.",io="The input must be non-negative.",ao="An index satisfying the predicate was not found in the collection.",mr="The input sequence has an insufficient number of elements.";function lo(e,t){return typeof e=="function"?new e(t):new Array(t)}function uo(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Ce(e){const t=new et(0);if(uo(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function Zt(e,t){return e>t?e:t}function Me(e,t){return e<t?e:t}function co(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function mo(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Ae(e.length-1,e)}function fn(e,t,n){const r=t.length|0,s=lo(n,r);for(let o=0;o<=r-1;o++)pr(s,o,e(Ae(o,t)));return s}function fo(e,t,n,r,s){const o=J(n,0)|0,i=J(_e(l=>o+l,r),e.length)|0;return(l=>{e:for(;;){const u=l;if(u>=i)return-1;if(s.Equals(t,Ae(u,e)))return u|0;l=u+1;continue e}})(o)|0}function pn(e,t,n){return fo(t,e,void 0,void 0,n)>=0}function po(e){return e.slice().reverse()}function go(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function fr(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Ae(0,e)}function Ae(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function pr(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class Q extends Ne{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+H("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=A(l),d=A(u);if(se(i.head,a.head)){s=c,o=d;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,a=s,l=o,u=l.tail;if(u!=null){const c=A(u);if(i>18)return a|0;r=i+1,s=(a<<1)+Xe(l.head)+631*i,o=c;continue e}else return a|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=A(l),d=A(u),m=Ve(i.head,a.head)|0;if(m===0){s=c,o=d;continue e}else return m|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return bo(this)}[Symbol.iterator](){return Zn(Le(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Le(this)}}class ho{constructor(t){this.xs=t,this.it=this.xs,this.current=Te()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=A(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=Te()}Dispose(){}}function bo(e){return new ho(e)}function N(){return new Q(Te(),void 0)}function pt(e,t){return new Q(e,t)}function V(e){return e.tail==null}function gr(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=A(i);continue e}else return s|0}})(0,e)|0}function oe(e){if(e.tail!=null)return e.head;throw new Error(Rt+"\\nParameter name: list")}function T(e){const t=e.tail;if(t!=null)return A(t);throw new Error(Rt+"\\nParameter name: list")}function yo(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,a=i.tail;if(a!=null){if(o===t)return i.head;r=o+1,s=A(a);continue e}else throw new Error(oo+"\\nParameter name: index")}})(0,e)}function wo(){throw new Error(ao)}function ot(){return N()}function qe(e,t){return pt(e,t)}function G(e){return pt(e,N())}function gn(e){return V(e)}function j(e){return gr(e)}function He(e){return oe(e)}function hn(e){return T(e)}function hr(e){e:for(;;){const t=e;if(V(t))return;{const n=T(t);if(V(n))return F(oe(t));e=n;continue e}}}function Ot(e){const t=hr(e);if(t==null)throw new Error(Rt);return A(t)}function br(e){const t=gr(e)|0,n=co(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,a=o;if(!V(a)){pr(n,i,oe(a)),s=i+1,o=T(a);continue e}break}})(0,e),n}function ie(e,t,n){let r=t,s=n;for(;!V(s);)r=e(r,He(s)),s=T(s);return r}function nt(e){return ie((t,n)=>pt(n,t),N(),e)}function Io(e,t,n){return((s,o,i)=>{e:for(;;){const a=s,l=o,u=i;if(V(u))return l;s=a+1,o=e(a,l,oe(u)),i=T(u);continue e}})(0,t,n)}function Eo(e,t,n,r){let s=t,o=n,i=r;for(;!V(o)&&!V(i);)s=e(s,oe(o),oe(i)),o=T(o),i=T(i);return s}function S(e,t){ie((n,r)=>{e(r)},void 0,t)}function vo(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=pt(Ae(r,e),n);return n}function I(e){return vo(e,N())}function Bo(e){let t,n;if(ke(e))return I(e);if(e instanceof Q)return e;{const r=N();let s=r;const o=Le(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const l=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new Q(l,void 0),t.tail=n,n)}}finally{te(o)}const i=s,a=N();return i.tail=a,T(r)}}function Pe(e,t){return ie((n,r)=>pt(r,n),t,nt(e))}function _o(e,t){let n,r;const s=N();let o=s,i=t;for(;!V(i);){let u=e(oe(i));for(;!V(u);)o=(n=o,r=new Q(oe(u),void 0),n.tail=r,r),u=T(u);i=T(i)}const a=o,l=N();return a.tail=l,T(s)}function it(e,t){const n=N(),r=Io((o,i,a)=>{const l=new Q(e(o,a),void 0);return i.tail=l,l},n,t),s=N();return r.tail=s,T(n)}function w(e,t){const n=N(),r=ie((o,i)=>{const a=new Q(e(i),void 0);return o.tail=a,a},n,t),s=N();return r.tail=s,T(n)}function Ao(e,t,n){const r=N(),s=Eo((i,a,l)=>{const u=new Q(e(a,l),void 0);return i.tail=u,u},r,t,n),o=N();return s.tail=o,T(r)}function So(e,t){return(r=>{e:for(;;){const s=r;if(V(s))return;{const o=e(oe(s));if(o==null){r=T(s);continue e}else return o}}})(t)}function bn(e,t){return So(n=>e(n)?F(n):void 0,t)}function yn(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(V(i))return;if(e(oe(i)))return o;r=o+1,s=T(i);continue e}})(0,t)}function Lo(e,t){const n=yn(e,t);return n==null?(wo(),-1):A(n)|0}function At(e,t){return yo(t,e)}function x(e,t){const n=N(),r=ie((o,i)=>{if(e(i)){const a=new Q(i,void 0);return o.tail=a,a}else return o},n,t),s=N();return r.tail=s,T(n)}function X(e,t,n){return yn(r=>n.Equals(e,r),t)!=null}function wn(e,t){if(V(t))throw new Error(Rt);return ie(e,He(t),hn(t))}function yr(e,t){return ie((n,r)=>n&&e(r),!0,t)}function Qt(e,t){return yn(e,t)!=null}function Co(e,t){const n=br(t);return n.sort(e),I(n)}function $n(e,t){return Co((n,r)=>t.Compare(n,r),e)}function Mo(e,t){return wn((n,r)=>t.Compare(r,n)>0?r:n,e)}function wr(e,t){return wn((n,r)=>t.Compare(r,n)>0?n:r,e)}function ko(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(V(r))throw new Error(mr+"\\nParameter name: list");e=n-1,t=T(r);continue e}}function To(e,t){if(e<0)throw new Error(io+"\\nParameter name: count");const n=(i,a,l)=>{let u;e:for(;;){const c=i,d=a,m=l;if(c<=0)return d;if(V(m))throw new Error(mr+"\\nParameter name: list");i=c-1,a=(u=new Q(oe(m),void 0),d.tail=u,u),l=T(m);continue e}},r=N(),s=n(e,r,t),o=N();return s.tail=o,T(r)}function In(e,t){const n=(i,a,l)=>{let u;e:for(;;){const c=i,d=a,m=l;if(c<=0)return d;if(V(m))return d;i=c-1,a=(u=new Q(oe(m),void 0),d.tail=u,u),l=T(m);continue e}},r=N(),s=n(e,r,t),o=N();return s.tail=o,T(r)}function Dt(e,t,n){const r=j(n)|0;let s;const o=J(e,0)|0;s=o<0?0:o;let i;const a=J(t,r-1)|0;return i=a>=r?r-1:a,i<s?N():To(i-s+1,ko(s,n))}function Po(){return Math.random()}function Yt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function xo(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class No{constructor(){}Next0(){return Yt(0,2147483647)}Next1(t){return Yt(0,t)}Next2(t,n){return Yt(t,n)}NextDouble(){return Po()}NextBytes(t){xo(t)}}function qo(){return new No}function Ir(){return qo()}function z(e,t){return Ir().Next2(e,t+1)|0}function U(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function Er(e){return Math.log(e)/Math.log(2)}var zt;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(zt||(zt={}));function Ho(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Rn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function $o(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function Ro(e,t){if(t&zt.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function Oo(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||Ro(o,t),!$o(n).test(i))return Ho(s,n)}return null}function W(e,t,n,r,s){const o=Oo(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[a,l]=Rn(!0,r);!n&&o.radix!==10&&i>=a&&i<=l&&(i=i<<32-r>>32-r);const[u,c]=Rn(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Mt(e,t,n,r,s){try{return s.contents=W(e,t,n,r),!0}catch{return!1}}function Do(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function vr(e,t,n){return f(h(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function ze(e,t,n,r){return f(h('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function En(e,t,n,r,s,o){return f(h('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function Wo(e,t,n,r,s,o,i,a){return f(h('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(a)}function Se(e,t){return Wo("opacity","linear","0","1",e,t,"1","freeze")}function Br(e,t,n,r,s,o,i,a,l){return En(f(h("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),a,1,l,0,Se(i,500))}function Fo(e){throw new Error(e)}const Vo="Enumeration already finished.",Go="Enumeration has not started. Call MoveNext.",_r="The input sequence has an insufficient number of elements.",Xo="Reset is not supported on this enumerator.";function Yo(){throw new Error(Xo)}function vn(){throw new Error(Go)}function en(){throw new Error(Vo)}class jo{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Le(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+k(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{te(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Zn(Le(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function Uo(e){return new jo(e)}class Ko{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){Yo()}Dispose(){this.dispose()}}function Wt(e,t,n){return new Ko(e,t,n)}function Jo(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const a=A(n);try{te(a)}finally{n=void 0}}if(t!=null){const a=A(t);try{te(a)}finally{t=void 0}}};return Wt(()=>(r?s&&en():vn(),o!=null?A(o):en()),()=>{let a;if(r||(r=!0),s)return!1;{let l;for(;l==null;){const u=t,c=n;if(u!=null)if(c!=null){const d=A(c);if(d["System.Collections.IEnumerator.MoveNext"]())o=F(d["System.Collections.Generic.IEnumerator`1.get_Current"]()),l=!0;else try{te(d)}finally{n=void 0}}else{const d=A(u);d["System.Collections.IEnumerator.MoveNext"]()?n=(a=d["System.Collections.Generic.IEnumerator`1.get_Current"](),Le(a)):(i(),l=!1)}else t=Le(e)}return A(l)}},()=>{s||i()})}function Zo(e,t){return Wt(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{te(t)}finally{}})}function Qo(e,t,n){let r=!1,s,o=F(e());const i=()=>{if(o!=null){const l=A(o);try{n(l)}finally{o=void 0}}},a=()=>{try{i()}finally{s=void 0}};return Wt(()=>(r||vn(),s!=null?A(s):en()),()=>{if(r||(r=!0),o!=null){const l=A(o);let u;try{u=t(l)}catch(c){throw a(),c}return u!=null?(s=u,!0):(a(),!1)}else return!1},i)}function zo(e,t){let n,r=t;return Wt(()=>{if(n!=null){const s=A(n)[0];return A(n)[1],s}else return vn()},()=>(n=e(r),n!=null?(A(n)[0],r=A(n)[1],!0):!1),()=>{})}function ei(e,t){t==null&&Fo(e)}function gt(e){return Uo(e)}function Ye(e){return ei("source",e),Le(e)}function ht(e){return gt(()=>Le(e()))}function Ar(e){return gt(()=>Jo(e))}function Sr(e,t){return gt(()=>zo(e,t))}function Lr(e){return e instanceof Q?br(e):Array.from(e)}function $e(e){return ke(e)?I(e):e instanceof Q?e:Bo(e)}function Bn(e,t,n){return gt(()=>Qo(e,t,n))}function ti(e,t){return Ar([e,t])}function ni(e,t){return Bn(()=>Ye(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{te(n)})}function ri(e,t){return ni(n=>{if(e(n))return F(n)},t)}function si(e,t,n){const r=Ye(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{te(r)}}function oi(e,t){return Sr(n=>n<e?[t(n),n+1]:void 0,0)}function On(e,t){si((n,r)=>(e(n,r),n+1|0),0,t)}function ii(e){const t=Ye(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?F(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{te(t)}}function ai(e){const t=ii(e);if(t==null)throw new Error(_r+"\\nParameter name: source");return A(t)}function li(e){if(ke(e))return e.length|0;if(e instanceof Q)return j(e)|0;{const t=Ye(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{te(t)}}}function be(e,t){return Bn(()=>Ye(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?F(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{te(n)})}function ui(e,t){return oi(e,n=>t)}function Cr(e){return ht(()=>po(Lr(e)))}function ci(e,t){return gt(()=>{const n=Ye(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(_r+"\\nParameter name: source");return Zo(()=>{},n)}catch(r){throw te(n),r}})}function di(e,t){return ht(()=>{let n=!0;return ri(r=>(n&&(n=e(r)),!n),t)})}function mi(e){return ci(1,e)}function fi(e,t){return Bn(()=>Ye(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?F(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{te(n)})}function Mr(e,t){return ht(()=>Ar(be(e,t)))}function pi(e,t){return ht(()=>go(e,Lr(t)))}function Dn(e,t,n){const r=e-li(n)|0;return r<1?n:ti(ui(r,t),n)}function kr(e){return H("",be(t=>t,mi(e.split(""))))}function gi(e){return ai(e.split(""))}function hi(e,t,n){return mn(n,e,t)}function re(e,t,n){return Zs(n,e,t)}function kt(e){return H("",be(t=>t,Cr(e.split(""))))}function bi(e,t){return be(n=>H("",n),be(n=>fn(r=>r,n),pi(e,t.split(""))))}function yi(e,t){return be(kt,Cr(bi(e,kt(t))))}function pe(e,t){return I(t.split(e))}function wi(e,t){return[H("",be(n=>n,fi(n=>!e(n),t.split("")))),H("",be(n=>n,di(n=>!e(n),t.split(""))))]}function Ii(e){return new Z(0,[e])}function Tr(e){return new Z(1,[e])}class Z extends $t{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Pr(e,t){return t.tag===0?Ii(e(t.fields[0])):Tr(t.fields[0])}function ge(e,t){return t.tag===0?e(t.fields[0]):Tr(t.fields[0])}class Ft extends $t{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["NullOrEmpty","EmptyString","WrongFormat","OutOfRange"]}}function Ei(e){return ir(e)?new Z(1,[new Ft(0,[])]):new Z(0,[e])}function Vt(e){return e===""?new Z(1,[new Ft(1,[])]):new Z(0,[e])}function Gt(e,t){return rr(dn(e),t)?new Z(0,[t]):new Z(1,[new Ft(2,[])])}function xr(e){return Pr(t=>W(t,511,!1,32),ge(t=>Gt("^[0-9]+$",t),ge(Vt,new Z(0,[e]))))}function K(e){return L(e,2)}function tn(e){return L(e,16)}function Re(e){return ge(t=>Gt("^[01]+$",t),ge(Vt,new Z(0,[e])))}function we(e){return W(e,511,!1,32,2)}function vi(e){return ge(t=>Gt("^[0-9A-Fa-f]+$",t),ge(Vt,new Z(0,[e])))}function _n(e){return W(e,511,!1,32,16)}function ue(e,t){return`
            <span id="questionArea" class="question-area"></span>
            <form id="inputArea" class="input-area" autocomplete="off">
                <input type="text" id="numberInput" class="number-input display-order-1 mono regular">
                <span id="binaryRadix" class="binary-radix display-order-2"></span>
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>
                <div id="errorArea" class="error-area display-order-4"></div>
                <div id="hintArea" class="hint-area display-order-5"></div>
            </form>
            <div class="history-area">
                <h2>結果:</h2>
                <div class="history-indented mono regular">
                    <span id="outputArea"></span>
                </div>
            </div>
            <div id="helpWindow" class="help-window">
                <div class="help-close-outer">
                    <span id="helpClose" class="material-symbols-outlined help-close ${t}" translate="no">
                        close
                    </span>
                </div>
                ${e}
            </div>`}const Bi=`\r
            <span id="questionArea" class="question-area"></span>\r
            <form id="inputArea" class="input-area" autocomplete="off">\r
                <input type="text" id="numberInput" class="number-input display-order-1 mono regular">\r
                <span id="binaryRadix" class="binary-radix display-order-2"></span>\r
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>\r
                <div id="errorArea" class="error-area display-order-4"></div>\r
                <div id="hintArea" class="hint-area display-order-5"></div>\r
            </form>\r
            <div class="history-area">\r
                <h2>結果:</h2>\r
                <div class="history-indented mono regular">\r
                    <span id="outputArea"></span>\r
                </div>\r
            </div>`;function je(e,t,n){switch(n.tag){case 2:return f(h(`<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`))(t);case 3:return f(h(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return f(h('<span class="warning">%s の2進法表記を入力してください。</span>'))(e)}}function Nr(e,t,n){switch(n.tag){case 2:return f(h(`<span class="warning">'%s' は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>`))(t);case 3:return f(h(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return f(h('<span class="warning">%s の10進法表記を入力してください。</span>'))(e)}}function _i(e,t,n){switch(n.tag){case 2:return f(h(`<span class="warning">'%s' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。</span>`))(t);case 3:return f(h(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return f(h('<span class="warning">%s の16進法表記を入力してください。</span>'))(e)}}function at(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return f(B(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function qr(e,t){return H(" ",$e(yi(e,t)))}function Xt(e,t){const n=Dn(8,"",be(s=>s,K(e).split(""))),r=Dn(8,"",be(s=>s,K(t).split("")));On((s,o)=>{let i;const a=f(B("firstRowDigit%d%P()",[8-s]));i=document.getElementById(a),i.innerText=o},n),On((s,o)=>{let i;const a=f(B("secondRowDigit%d%P()",[8-s]));i=document.getElementById(a),i.innerText=o},r)}function he(e){const t=e*2500-500|0;return Math.abs(t)|0}function Hr(e,t){return[F(e),1,F(t),void 0]}function $r(e,t){let n;const r=nt(t);return gn(r)?G([void 0,void 0,void 0,void 0]):nt(qe((n=He(r),[void 0,void 0,F(n[0]),F(n[1])]),w(s=>[F(e),1,F(s[0]),F(s[1])],hn(r))))}function ce(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=pn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:st});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{S(s=>{document.getElementById(s).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{n&&S(s=>{document.getElementById(s).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}}}}function Ue(e,t){return H(e,x(n=>!ir(n),t))}function Ai(e,t){return ie((n,r)=>mn(n,r[0],r[1]),t,e)}function Ke(e){return Ai(I([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function Oe(e){return mn(e," ","&nbsp;")}function de(e,t){return re(e,"0",t)}function Ie(e){let t;return t=wi(n=>n!=="0",kt(kr(kt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+gi(e)}function Fe(e,t,n){return[e(t),e(n)]}function Tt(e,t,n,r){return[e(t),e(n),e(r)]}const Rr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Si(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return Pe(s,G(1));default:{let i;const a=~~Er(o)|0;i=Math.pow(2,a),n=Pe(s,G(i)),r=o-i;continue e}}}})(ot(),e)}function An(e,t){let n,r=0;n=[Do(e,t,new et(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?G([o,s]):Pe(G([o,s]),An(o,t))}function Li(e,t,n,r){return Br(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+he(t-1),n,r)}function Or(e,t,n){const r=qe(Hr(e,t),$r(e,An(t,e)));let s;const o=w(i=>{const a=J(i[0],""),l=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return f(h("%s%s%s%s"))(a)(l)(u)(c)},it((i,a)=>[_e(l=>{let u,c;return ze(0,n*(i+1),0,(u=Se((c=he(i)|0,i===0?c+1e3:c+2e3),500),f(h("%d%s"))(l)(u)))},a[0]),_e(l=>{let u,c,d,m,p,g,b;return En((u=~~(n/2)+2|0,c=n*i+6|0,d=~~(n/2)|0,m=n*.4,p=n*.8,g=n/2*4.8,f(h("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(m)(p)(g)),"#000000",1,"none",0,Se((b=he(i)|0,i===0?b+500:b+1500),500))},a[1]),_e(l=>{let u,c;return ze(~~(n/2)*2,n*(i+1),0,(u=Oe(re(3," ",L(l))),c=Se(he(i),500),f(h("%s%s"))(u)(c)))},a[2]),_e(l=>{let u;return ze(~~(n/2)*6,n*(i+1),0,(u=Se(500+he(i),500),f(h("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>f(h("%s%s"))(i)(a),Li(n,j(r),"#191970","#b0e0e6"),o),vr(~~(n/2)*10,n*(j(r)+1),s)}function Ci(e,t){return`
            <div class="history-indented">
                <p>
                    10進法で表現した数を2進法で表現しなおすには、<br>
                    10進法の数を、商が 1 になるまで 2 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りを下から順に繋げると、2進法の数になります。<br>
                    ※この下の筆算をクリックすると動きます。
                </p>
            </div>
            <div id="hint1" class="history-indented mono">
                ${Or(e,t,20)}
            </div>
            `}function Mi(e,t){let n,r,s,o;const i=H(" + ",w(L,t)),a=H(" + ",(n=w(u=>{let c;return c=Er(u),~~Math.trunc(c)},t),w((r=f(h("2<sup>%d</sup>")),r),n))),l=H(" + ",(s=w(K,t),w((o=f(h("%s<sub>(2)</sub>")),o),s)));return f(B(`\r
            <p class="history-indented">\r
                10進法で表現した数を2進法で表現しなおすには、<br>\r
            </p>\r
            <p class="history-indented">\r
                <ol style="padding-left: 4rem;">\r
                    <li>10進法の数を「2<sup>n</sup> の数同士の足し算」に変換して、</li>\r
                    <li>それぞれの 2<sup>n</sup> の数を2進法で表し、</li>\r
                    <li>足し合わせる</li>\r
                </ol>\r
            </p>\r
            <p class="history-indented">\r
                という方法もあります。\r
            </p>\r
            <p class="history-indented">\r
                %d%P()<sub>(10)</sub> を 2<sup>n</sup> の数同士の足し算に変換すると\r
            </p>\r
            <p class="history-indented hint-bgcolor-gray mono regular">\r
                &nbsp;&nbsp;%s%P()<br>\r
                = %s%P()\r
            </p>\r
            <p class="history-indented">\r
                になります。<br>\r
            </p>\r
            <p class="history-indented">\r
                次に、それぞれの 2<sup>n</sup> の数を2進法で表します。<br>\r
                2<sup>n</sup> の数を2進法で表すには、1 の後に 0 を n 個続けます。<br>\r
                そのため、%s%P() は2進法で\r
            </p>\r
            <p class="history-indented hint-bgcolor-gray mono regular">\r
                &nbsp;&nbsp;%s%P()<br>\r
            </p>\r
            <p class="history-indented">\r
                と表現できます。最後にこれを計算すると\r
            </p>\r
            <p class="history-indented hint-bgcolor-gray mono regular">\r
                &nbsp;&nbsp;%s%P()<br>\r
                = %s%P()<sub>(2)</sub>\r
            </p>\r
            <p class="history-indented">\r
                になります。\r
            </p>\r
            `,[e,i,a,a,l,l,K(e)]))}function ki(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${Ci(2,e)}
                <h3>考え方 2</h3>
                ${Mi(e,Si(e))}
            </details>
            `}function Ti(e,t){const n=(o,i)=>{e:for(;;){const a=o,l=i,u=Ir(),c=u.Next2(a,l)|0,d=u.Next2(a,l)|0;if(c!==d)return[c,d];o=a,i=l;continue e}};let r;const s=n(e,t);return r=Fe(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Pi(e,t){return U(()=>Ti(0,e),n=>X(n,t,{Equals:(r,s)=>r===s,GetHashCode:R})===!1)}function xi(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Or(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function Ge(e,t,n,r,s,o,i,a,l,u,c,d){const m=document.getElementById("numberInput"),p=Ke(m.value),g=r(p);if(m.focus(),g.tag===0){const b=g.fields[0];document.getElementById("errorArea").innerHTML="";const v=o(b),E=s(b)|0,y=Oe(re(3," ",L(E))),_=document.getElementById("outputArea"),C=Ue("<br>",I([at(E===W(c,511,!1,32),v,l,y,a),_.innerHTML]));if(_.innerHTML=C,E===W(c,511,!1,32)){const M=e(d)|0;document.getElementById("questionSpan").innerText=L(M),document.getElementById("hintArea").innerHTML=t(M),i(M),m.value="";const $=In(u,qe(M,d));document.getElementById("submitButton").onclick=q=>{q.preventDefault(),Ge(e,t,n,r,s,o,i,a,l,u,L(M),$)},document.getElementById("inputArea").onsubmit=q=>{q.preventDefault(),Ge(e,t,n,r,s,o,i,a,l,u,L(M),$)}}}else document.getElementById("errorArea").innerHTML=n(c,p,g.fields[0])}function bt(e,t,n,r,s,o,i,a,l,u,c,d){const m=e(ot());document.getElementById("questionSpan").innerText=k(m),document.getElementById("srcRadix").innerText=f(h("(%d)"))(a),document.getElementById("dstRadix").innerText=L(l),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(l),document.getElementById("hintArea").innerHTML=t(m),document.getElementById("submitButton").onclick=p=>{p.preventDefault(),d(e,t,Hn(n),r,s,o,i,a,l,u,k(m),G(m))},document.getElementById("inputArea").onsubmit=p=>{p.preventDefault(),d(e,t,Hn(n),r,s,o,i,a,l,u,k(m),G(m))},i(m),document.getElementById("helpButton").onclick=p=>{S(g=>{document.getElementById(g).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=p=>{S(g=>{document.getElementById(g).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=p=>{S(g=>{document.getElementById(g).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=p=>{c(p)}}function Ni(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Rr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=ye,bt(t=>Pi(8,t),ki,je,Re,we,t=>Ie(de(8,t)),t=>{xi(t)},10,2,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m)=>{Ge(t,n,mt(r),s,o,i,a,l,u,c,d,m)})}const Dr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function qi(e){return""}function Hi(e){return U(()=>z(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function $i(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Dr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=ye,bt(Hi,qi,je,Re,we,t=>Ie(de(8,t)),t=>{},10,2,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m)=>{Ge(t,n,mt(r),s,o,i,a,l,u,c,d,m)})}function Wr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const Fr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ri(){const e=U(()=>{const t=()=>{let n;return we(kr(re(9,"0",K((n=z(0,8)|0,Math.pow(2,n))))))};return[t(),t()]},t=>!se(t[0],t[1]));return e[0]+e[1]|0}function Oi(e){return H(" + ",it((t,n)=>{const r=e.length-t-1|0;return f(h("(%c * 2<sup>%d</sup>)"))(n)(r)},$e(e.split(""))))}function Di(e){return it((t,n)=>[f(B('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),f(B('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),f(B('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],$e(e.split("")))}function Wi(e,t,n){return f(h(`\r
                <div class="hint-table" style="padding-left: 2rem;">\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">桁目</span>\r
                        </div>\r
                    </div>\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">ビット</span>\r
                        </div>\r
                    </div>\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">重み</span>\r
                        </div>\r
                    </div>\r
                </div>\r
                `))(e)(t)(n)}function Fi(e){const t=ie((n,r)=>Wr((s,o)=>f(h("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Di(e));return Wi(t[0],t[1],t[2])}function Vi(e){const t=Oi(e);return f(B(`\r
            <details><summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    10進法で表現した数は、一番右の桁から<br>\r
                    1の位、10の位、100の位、1000の位...となっています。<br>\r
                    これを「10<sup>n</sup>の位」の形で表すと、<br>\r
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。<br>\r
                </p>\r
                <p class="history-indented">\r
                    同様に、2進法で表現した数は、一番右の桁から<br>\r
                    1の位、2の位、4の位、8の位...となっています。<br>\r
                    これを「2<sup>n</sup>の位」の形で表すと、<br>\r
                    2<sup>0</sup>の位、2<sup>1</sup>の位、2<sup>2</sup>の位、2<sup>3</sup>の位...となります。\r
                </p>\r
                <p class="history-indented">\r
                    この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 2<sup>0</sup>、2<sup>1</sup>、2<sup>2</sup>、2<sup>3</sup>...という数を、その桁の「重み」と呼びます。<br>\r
                </p>\r
                <p class="history-indented">\r
                    %s%P()\r
                </p>\r
                <p class="history-indented">\r
                    2進法で表現した数を10進法で表現しなおすには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>\r
                    %s%P()<sub>(2)</sub> の場合、以下のように計算します。\r
                </p>\r
                <p class="history-indented hint-bgcolor-gray mono regular">\r
                    &nbsp;&nbsp;%s%P()<br>\r
                    = %d%P()<sub>(10)</sub>\r
                </p>\r
            </details>\r
            `,[Fi(e),e,t,we(e)]))}function Gi(e){return U(Ri,t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function Pt(e,t,n,r,s,o){const i=document.getElementById("numberInput"),a=Ke(i.value),l=xr(a);if(i.focus(),l.tag===0){const u=l.fields[0]|0;document.getElementById("errorArea").innerHTML="";const c=Oe(re(3," ",L(u))),d=Ie(de(8,K(u))),m=document.getElementById("outputArea"),p=Ue("<br>",I([at(u===W(r,511,!1,32),c,10,d,2),m.innerHTML]));if(m.innerHTML=p,u===W(r,511,!1,32)){const g=e(o)|0,b=K(g),v=qr(4,b);document.getElementById("questionSpan").innerText=v,document.getElementById("hintArea").innerHTML=t(b),i.value="";const E=Dt(0,Me(4,j(o)+1)-1,qe(g,o));document.getElementById("submitButton").onclick=y=>{y.preventDefault(),Pt(e,t,n,L(g),v,E)},document.getElementById("inputArea").onsubmit=y=>{y.preventDefault(),Pt(e,t,n,L(g),v,E)}}}else document.getElementById("errorArea").innerHTML=Nr(s,a,l.fields[0])}function Vr(e,t,n,r,s){const o=e(ot())|0,i=K(o),a=qr(4,i);document.getElementById("questionSpan").innerText=a,document.getElementById("srcRadix").innerText=f(h("(%d)"))(2),document.getElementById("dstRadix").innerText=L(10),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=l=>{l.preventDefault(),s(e,t,n,L(o),a,G(o))},document.getElementById("inputArea").onsubmit=l=>{l.preventDefault(),s(e,t,n,L(o),a,G(o))},document.getElementById("helpButton").onclick=l=>{S(u=>{document.getElementById(u).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=l=>{S(u=>{document.getElementById(u).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=l=>{S(u=>{document.getElementById(u).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=l=>{r(l)}}function Xi(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Fr,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=ye,Vr(Gi,Vi,t=>{},t=>{ce(t)},(t,n,r,s,o,i)=>{Pt(t,n,r,s,o,i)})}const Gr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Yi(e){return""}function ji(e){return U(()=>z(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function Ui(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Gr,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=ye,Vr(ji,Yi,t=>{},t=>{ce(t)},(t,n,r,s,o,i)=>{Pt(t,n,r,s,o,i)})}const Xr=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ki(e){const t=~~(Math.log(e)/Math.log(2))|0;return f(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function Ji(e){return U(()=>{const t=z(0,7)|0;return Math.pow(2,t)|0},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function Zi(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Xr,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=ye,bt(Ji,Ki,je,Re,we,t=>Ie(de(8,t)),t=>{},10,2,4,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m)=>{Ge(t,n,mt(r),s,o,i,a,l,u,c,d,m)})}const Yr=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Qi(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return f(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    %d%P()<sub>(10)</sub> という数は、以下のように表すことができます。\r
                </p>\r
                <p class="history-indented hint-bgcolor-gray mono regular">\r
                    &nbsp;&nbsp;%d%P()<sub>(10)</sub><br>\r
                    = %d%P()<sub>(10)</sub> - 1<sub>(10)</sub><br>\r
                    = 2<sup>%d%P()</sup><sub>(10)</sub> - 1<sub>(10)</sub>\r
                </p>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    一方、2<sup>n</sup>-1 の数を2進法で表現するには、1 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> - 1 なので、1 を %d%P() 個続けます。\r
                </p>\r
            </details>`,[e,e,e+1,t,e,t,t]))}function zi(e){return U(()=>{let t;return-1+(t=z(0,8)|0,Math.pow(2,t))},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function ea(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Yr,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=ye,bt(zi,Qi,je,Re,we,t=>Ie(de(8,t)),t=>{},10,2,4,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m)=>{Ge(t,n,mt(r),s,o,i,a,l,u,c,d,m)})}function xe(e,t){return js(dn(e),t)}function ta(e,t){return rr(dn(e),t)}const jr=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function na(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数を足していきます。<br><br>\r
                        0<sub>(2)</sub> + 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        0<sub>(2)</sub> + 1<sub>(2)</sub> = 1<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> + 1<sub>(2)</sub> = 10<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> + 1<sub>(2)</sub> + 1<sub>(2)</sub> = 11<sub>(2)</sub><br><br>\r
                        10<sub>(2)</sub> や 11<sub>(2)</sub>のように桁が繰り上がった時は、<br>\r
                        繰り上がった桁 (=1) をひとつ左の桁に足します。<br>\r
                    </p>\r
                </details>`}function ra(e){let t;const n=-1+Math.pow(2,e)|0,r=U(()=>z(1,n),s=>{const o=K(s);return o.length===e&&ta("^1+0+$",o)===!1})|0;return[r,(t=n-r|0,U(()=>z(1,t),s=>s!==r&&(s&r)!==0))]}function sa(e,t){return U(()=>ra(e),n=>X(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:R})===!1&&X(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:R})===!1)}function nn(e,t,n,r,s,o,i,a,l,u,c,d,m){const p=document.getElementById("numberInput"),g=Ke(p.value),b=n(g);if(p.focus(),b.tag===0){const v=b.fields[0];document.getElementById("errorArea").innerHTML="";const E=s(v),y=r(v)|0,_=Oe(re(3," ",L(y))),C=document.getElementById("outputArea"),M=Ue("<br>",I([at(y===u,E,i,_,a),C.innerHTML]));if(C.innerHTML=M,y===u){const $=e(m),q=$[1]|0,P=$[0]|0;Xt(P,q),document.getElementById("hintArea").innerHTML=t(),p.value="";const me=In(l,Pe(I([P,q]),m));document.getElementById("submitButton").onclick=Ee=>{Ee.preventDefault(),nn(e,t,n,r,s,o,i,a,l,P+q,P,q,me)},document.getElementById("inputArea").onsubmit=Ee=>{Ee.preventDefault(),nn(e,t,n,r,s,o,i,a,l,P+q,P,q,me)}}}else{const v=je(f(B("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[K(c),i,K(d),i])),g,b.fields[0]);document.getElementById("errorArea").innerHTML=v}}function oa(e,t,n,r,s,o,i,a,l,u,c){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=f(h("(%d)"))(i),document.getElementById("secondRowSrcRadix").innerText=f(h("(%d)"))(i),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(a),document.getElementById("hintArea").innerHTML=t();const d=e(ot()),m=d[1]|0,p=d[0]|0;Xt(p,m),document.getElementById("submitButton").onclick=g=>{g.preventDefault(),c(e,t,n,r,s,o,i,a,l,p+m,p,m,I([p,m]))},document.getElementById("inputArea").onsubmit=g=>{g.preventDefault(),c(e,t,n,r,s,o,i,a,l,p+m,p,m,I([p,m]))},document.getElementById("helpButton").onclick=g=>{S(b=>{document.getElementById(b).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=g=>{S(b=>{document.getElementById(b).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=g=>{S(b=>{document.getElementById(b).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=g=>{u(g)}}function ia(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>加算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(jr,"help-color addition"),document.querySelector("#submitButton").className="submit-button display-order-3 addition",document.querySelector("#questionArea").innerHTML=ar,oa(t=>sa(8,t),na,Re,we,t=>Ie(de(8,t)),t=>{},2,2,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m,p)=>{nn(t,n,r,s,o,i,a,l,u,c,d,m,p)})}const Ur=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Kr(){const e=z(1,255)|0,t=U(()=>z(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function Jr(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function xt(e,t,n,r){const s=document.getElementById("numberInput"),o=Ke(s.value),i=Re(o);if(s.focus(),i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=Ie(de(8,a)),u=we(a)|0,c=Oe(re(3," ",L(u))),d=document.getElementById("outputArea"),m=Ue("<br>",I([at(u===e,l,2,c,10),d.innerHTML]));if(d.innerHTML=m,u===e){const p=U(Kr,y=>X(y[0],r,{Equals:(_,C)=>_===C,GetHashCode:R})===!1&&X(y[1],r,{Equals:(_,C)=>_===C,GetHashCode:R})===!1),g=p[1]|0,b=p[0]|0;Xt(b,g);const v=Jr();document.getElementById("hintArea").innerHTML=v,s.value="";const E=Dt(0,Me(20,j(r)+1)-1,Pe(I([b,g]),r));document.getElementById("submitButton").onclick=y=>{y.preventDefault(),xt(b-g,b,g,E)},document.getElementById("inputArea").onsubmit=y=>{y.preventDefault(),xt(b-g,b,g,E)}}}else{const a=je(f(B("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[K(t),2,K(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=a}}function aa(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>減算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Ur,"help-color subtraction"),document.querySelector("#submitButton").className="submit-button display-order-3 subtraction",document.querySelector("#questionArea").innerHTML=ar;const t=Jr();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=f(h("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=f(h("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=Kr(),r=n[1]|0,s=n[0]|0;Xt(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),xt(s-r,s,r,I([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),xt(s-r,s,r,I([s,r]))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}const Zr=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Qr(e,t){return`
            <details><summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    ある2進数に足すと桁が1つ上がる、最も小さい数のことを、<br>
                    元の2進数に対する<span style="background-color: #95c9fe;">「2の補数」</span>と呼びます。
                </p>
                <p class="history-indented">
                    たとえば、4ビットの2進数 1010<sub>(2)</sub> に 0110<sub>(2)</sub></span> を足すと<br>
                    1桁上がって5ビットの2進数 10000<sub>(2)</sub> になります。<br>
                    この 0110<sub>(2)</sub> を、元の 1010<sub>(2)</sub> に対する2の補数と呼びます。<br>
                </p>
                <p class="history-indented">
                    2の補数は、<span style="background-color: #95c9fe;">2進数の負の数を表すのに使われます。</sub></span><br>
                    1010<sub>(2)</sub> (=10<sub>(10)</sub>) の2の補数 0110<sub>(2)</sub> は-10<sub>(10)</sub> を表します。
                </p>
                <p class="history-indented">
                    2の補数を求めるには、元の2進数の各ビットの<br>
                    <span style="background-color: #95c9fe;">0 と 1 を反転させた数に 1 を足します。</span><br>
                    今回の問題で説明すると、<br>
                    ${e}<sub>(2)</sub> の 0 と 1 を反転させると<br>
                    ${t}<sub>(2)</sub> になります。これに 1 を足したものが<br>
                    ${e}<sub>(2)</sub> の2の補数です。
                </p>
            </details>`}function Nt(e,t,n){const r=document.getElementById("numberInput"),s=Ke(r.value),o=Re(s);if(r.focus(),o.tag===0){const i=o.fields[0];document.getElementById("errorArea").innerHTML="";const a=we(i)|0,l=a===t?"history history-correct":"history history-wrong",u=de(4,i),c=document.getElementById("outputArea"),d=Ue("<br>",I([f(h('<span class ="%s">%s<sub>(%d)</sub></span>'))(l)(u)(2),c.innerHTML]));if(c.innerHTML=d,a===t){const m=U(()=>z(1,15),E=>X(E,n,{Equals:(y,_)=>y===_,GetHashCode:R})===!1)|0,p=16-m|0,g=re(4,"0",K(m));document.getElementById("questionSpan").innerText=g;const b=Array.from(Mr(E=>E==="1"?"0":"1",g.split(""))).join("");document.getElementById("hintArea").innerHTML=Qr(g,b),r.value="";const v=Dt(0,Me(8,j(n)+1)-1,qe(m,n));document.getElementById("submitButton").onclick=E=>{E.preventDefault(),Nt(g,p,v)},document.getElementById("inputArea").onsubmit=E=>{E.preventDefault(),Nt(g,p,v)}}}else{const i=o.fields[0];let a;switch(i.tag){case 2:{a=f(h(`<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`))(s);break}default:{const l=hi("","",e);a=f(h('<span class="warning">%s の補数を、2進法表記で入力してください。</span>'))(l)}}document.getElementById("errorArea").innerHTML=a}}function la(){document.title="補数 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="complement",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>補数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Zr,"help-color complement"),document.querySelector("#submitButton").className="submit-button display-order-3 complement",document.querySelector("#questionArea").innerHTML=ye;const t=z(1,15)|0,n=16-t|0,r=re(4,"0",K(t)),s=Array.from(Mr(o=>o==="1"?"0":"1",r.split(""))).join("");document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=f(h("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=Qr(r,s),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Nt(r,n,G(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Nt(r,n,G(t))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}const zr=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ua(e,t,n,r){return Br(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+he(t-1),n,r)}function es(e,t,n){const r=qe(Hr(e,t),$r(e,An(t,e)));let s;const o=w(i=>{const a=J(i[0],""),l=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return f(h("%s%s%s%s"))(a)(l)(u)(c)},it((i,a)=>[_e(l=>{let u,c;return ze(0,n*(i+1),0,(u=Se((c=he(i)|0,i===0?c+1e3:c+2e3),500),f(h("%d%s"))(l)(u)))},a[0]),_e(l=>{let u,c,d,m,p,g,b;return En((u=~~(n/2)*2+4|0,c=n*i+6|0,d=~~(n/2)|0,m=n*.4,p=n*.8,g=n/2*4.8,f(h("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(m)(p)(g)),"#000000",1,"none",0,Se((b=he(i)|0,i===0?b+500:b+1500),500))},a[1]),_e(l=>{let u,c;return ze(~~(n/2)*3,n*(i+1),0,(u=Oe(re(3," ",L(l))),c=Se(he(i),500),f(h("%s%s"))(u)(c)))},a[2]),_e(l=>{let u;return ze(~~(n/2)*7,n*(i+1),0,(u=Se(500+he(i),500),f(h("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>f(h("%s%s"))(i)(a),ua(n,j(r),"#1e3330","#95feec"),o),vr(~~(n/2)*11,n*(j(r)+1),s)}function ca(e,t,n){const r=es(e,t,n);return f(h(`\r
                <div class="history-indented">\r
                    <p>\r
                        10進法で表現した数を2進法で表現しなおすには、<br>\r
                        10進法の数を、商が 16 未満になるまで 16 で割り続けます。<br>\r
                        この時、余りを商の右に書いておきます。<br>\r
                        商と余りのうち、10~15 をそれぞれ A~F に変換し、<br>\r
                        下から順に繋げると、16進法の数になります。<br>\r
                        ※この下の筆算をクリックすると動きます。\r
                    </p>\r
                </div>\r
                <div id="hint1" class="history-indented mono">\r
                    %s\r
                </div>\r
                `))(r)}function da(e,t,n){const r=ca(e,t,n);return f(h(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function ma(e){return da(16,e,20)}function fa(e){return U(()=>z(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:R})===!1)}function pa(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=es(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function ga(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(zr,"help-color dec2hex"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2hex",document.querySelector("#questionArea").innerHTML=ye,bt(fa,ma,_i,vi,_n,t=>Ie(de(8,t)),t=>{pa(t)},10,16,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,d,m)=>{Ge(t,n,mt(r),s,o,i,a,l,u,c,d,m)})}const ts=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ns(e){return H(" + ",nt(it((t,n)=>{const r=_n(n)|0;return f(h("(%d * 16<sup>%d</sup>)"))(r)(t)},nt($e(e)))))}function ha(e){return it((t,n)=>[f(B('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),f(B('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),f(B('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],$e(e.split("")))}function ba(e,t,n){return f(h(`\r
                <div class="hint-table" style="padding-left: 2rem;">\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">桁目</span>\r
                        </div>\r
                    </div>\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">数</span>\r
                        </div>\r
                    </div>\r
                    <div class="hint-table-row">\r
                        %s\r
                        <div class="hint-table-container">\r
                            <span class="middle">重み</span>\r
                        </div>\r
                    </div>\r
                </div>\r
                `))(e)(t)(n)}function rs(e){const t=ie((n,r)=>Wr((s,o)=>f(h("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],ha(e));return ba(t[0],t[1],t[2])}function ss(e,t,n){return f(B(`<details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    10進法で表現した数は、一番右の桁から<br>\r
                    1の位、10の位、100の位、1000の位...となっています。<br>\r
                    これを「10<sup>n</sup>の位」の形で表すと、<br>\r
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。\r
                </p>\r
                <p class="history-indented">\r
                    同様に、16進法で表現した数は、一番右の桁から<br>\r
                    1の位、16の位、256の位...となっています。<br>\r
                    これを「16<sup>n</sup>の位」の形で表すと、<br>\r
                    16<sup>0</sup>の位、16<sup>1</sup>の位、16<sup>2</sup>の位...となります。\r
                </p>\r
                <p class="history-indented">\r
                    この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 16<sup>0</sup>、16<sup>1</sup>、16<sup>2</sup>...という数を、その桁の「重み」と呼びます。\r
                </p>\r
                <p class="history-indented">\r
                    %s%P()\r
                </p>\r
                <p class="history-indented">\r
                    16進法で表現した数を10進法で表現しなおすには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>\r
                    %s%P()<sub>(16)</sub>の場合、以下のように計算します。<br>\r
                    ※ 16進数にA~Fのアルファベットがある場合は、それぞれ10<sub>(10)</sub>~15<sub>(10)</sub>を表しています。\r
                </p>\r
                <p class="history-indented hint-bgcolor-gray mono regular">\r
                    &nbsp;&nbsp;%s%P()<br>\r
                    = %d%P()\r
                </p>\r
            </details>`,[n,e,t,_n(e)]))}function qt(e,t,n){const r=document.getElementById("numberInput"),s=Ke(r.value),o=xr(s);if(r.focus(),o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const a=Oe(re(3," ",L(i))),l=Ie(de(2,tn(i))),u=document.getElementById("outputArea"),c=Ue("<br>",I([at(i===e,a,10,l,16),u.innerHTML]));if(u.innerHTML=c,i===e){const d=U(()=>z(0,255),b=>X(b,n,{Equals:(v,E)=>v===E,GetHashCode:R})===!1)|0,m=tn(d);document.getElementById("questionSpan").innerText=m;const p=ss(m,ns(m.split("")),rs(m));document.getElementById("hintArea").innerHTML=p,r.value="";const g=Dt(0,Me(10,j(n)+1)-1,qe(d,n));document.getElementById("submitButton").onclick=b=>{b.preventDefault(),qt(d,m,g)},document.getElementById("inputArea").onsubmit=b=>{b.preventDefault(),qt(d,m,g)}}}else document.getElementById("errorArea").innerHTML=Nr(t,s,o.fields[0])}function ya(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=s=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=s=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(ts,"help-color hex2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 hex2dec",document.querySelector("#questionArea").innerHTML=ye;const t=z(0,255)|0,n=tn(t),r=ss(n,ns(n.split("")),rs(n));document.getElementById("questionSpan").innerText=n,document.getElementById("srcRadix").innerText=f(h("(%d)"))(16),document.getElementById("dstRadix").innerText=L(10),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=r,document.getElementById("submitButton").onclick=s=>{s.preventDefault(),qt(t,n,G(t))},document.getElementById("inputArea").onsubmit=s=>{s.preventDefault(),qt(t,n,G(t))},document.getElementById("helpButton").onclick=s=>{S(o=>{document.getElementById(o).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=s=>{S(o=>{document.getElementById(o).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=s=>{S(o=>{document.getElementById(o).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=s=>{ce(s)}}function wa(e,t){return j(x(e,t))}function Ia(e,t){return x(n=>X(n,t,{Equals:se,GetHashCode:Xe}),e)}function Ea(e,t,n,r){const s=Ve(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const a=Ve(i,t)|0;return o&&a<=0||!o&&a>=0?[i,r(i,e)]:void 0}}function va(e,t,n,r,s){const o=Ea(t,n,r,s);return ht(()=>Sr(o,e))}function Sn(e,t,n){return va(e,t,n,0,(r,s)=>r+s)}const os=`\r
        <p>\r
            元の色のRGB値などを入力すると、その色の色相（色の種類）と明度（色が黒に近いか白に近いかの度合）を変更しながら色をローテーションします。<br>\r
            綺麗です。\r
        </p>\r
        <p>\r
            入力する値は以下の通りです。\r
            <ul>\r
                <li>R: 赤のRGB値 (0 &le; R &le; 255)</li>\r
                <li>G: 緑のRGB値 (0 &le; G &le; 255)</li>\r
                <li>B: 青のRGB値 (0 &le; B &le; 255)</li>\r
                <li>\r
                    変化量: RGB値を変化させる量。(0 &le; 変化量 &le; 255)<br>\r
                    この値が小さいと色の変化が小さく、グラデーションのようになり、大きいと色が大きく変化し、カラフルになります。\r
                </li>\r
                <li>\r
                    回数: 色をローテーションさせる回数。(1 &le; 回数)<br>\r
                    あまり大きくすると時間がかかってしまいます。100位までにしておいてください。\r
                </li>\r
            </ul>\r
        </p>\r
    `,Ba=`
        <form id="inputArea" class="iro-iroiro input-area" autocomplete="off">
            <span class="display-order-1 iro-iroiro shorter">
                <span class="iro-iroiro input-wrapper"><label for="rInput">R:<input type="number" id="rInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="gInput">G:<input type="number" id="gInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="bInput">B:<input type="number" id="bInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
            </span>
            <span class="display-order-2 iro-iroiro wider">
                <span class="iro-iroiro input-wrapper"><label for="stepInput">変化量:<input type="number" id="stepInput" class="iro-iroiro number-input mono regular"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="limitInput">回数:<input type="number" id="limitInput" class="iro-iroiro number-input rem6 mono regular" value="10"></label></span>
            </span>
            <span class="display-order-3">
                <button type="button" id="submitButton" class="submit-button d2b-button">確認</button>
            </span>
        </form>
        <div id="errorArea" class="error-area"></div>
        <div id="outputArea" class="output-area iro-iroiro"></div>
        <div id="helpWindow" class="help-window">
            <div class="help-close-outer">
                <span id="helpClose" class="material-symbols-outlined help-close iro-iroiro" translate="no">
                    close
                </span>
            </div>
            ${os}
        </div>
        `;function Wn(e,t){return t%e}function _a(e,t){return~~(t/e)}function Aa(e,t){let n;const r=In(e,t);return wa((n=At(e,t),s=>se(n,s)),r)|0}function Sa(e,t,n){const r=t-e|0;return _a(r*3,n)%2===0?Me(e+Wn(r*3,n),t)|0:Zt(t-Wn(r*3,n),e)|0}function jt(e,t,n,r,s,o){return Sa(t,n,(n-t)*e+r*o+s)}function La(e,t,n,r,s){const o=I([e,t,n]),i=wr(o,{Compare:ct})|0,a=Mo(o,{Compare:ct})|0,l=At(1,$n(o,{Compare:ct}))-i|0;let u,c;const d=[0,1,2];return c=Tt(m=>{let p;return Lo((p=At(m,o)|0,g=>p===g),$n(o,{Compare:ct}))+Aa(m,o)},d[0],d[1],d[2]),u=Tt(m=>At(m,I([p=>jt(4,i,a,r,l,p),p=>jt(0,i,a,r,l,p),p=>jt(2,i,a,r,l,p)])),c[0],c[1],c[2]),w(m=>[u[0](m),u[1](m),u[2](m)],$e(Sn(0,1,s)))}function Fn(e,t,n){let r;const s=[e,t,n];return r=Tt(o=>re(2,"0",L(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Ca(e,t){return w(n=>1+e*n,$e(Sn(1,1,~~((255/t-1)/e))))}function Ma(e){return hn(nt(w(t=>1-e*t,$e(Sn(1,1,~~(1/e))))))}function ka(e,t,n){return f(B(`\r
        <div class="color-div" style="background-color: rgb(%d%P(), %d%P(), %d%P());">\r
            <div>\r
                <span>R: %d%P()  G: %d%P()  B: %d%P()</span>\r
                <br>\r
                <span>HEX: %s%P()</span>\r
                <br>\r
                <span class="white">R: %d%P()  G: %d%P()  B: %d%P()</span>\r
                <br>\r
                <span class="white">HEX: %s%P()</span>\r
            </div>\r
        </div>\r
        `,[e,t,n,e,t,n,Fn(e,t,n),e,t,n,Fn(e,t,n)]))}function Ta(e){const t=H(`
`,e);return f(h('<div class="color-row">%s</div>'))(t)}function is(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,a=document.getElementById("limitInput").value,l=x(u=>u[2][0]===!1,Pe(w(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},w(u=>{let c;return[u[0],u[1],(c=0,[Mt(u[2],511,!0,8,new et(()=>c,d=>{c=d})),c])]},I([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),w(u=>{let c;return[u[0],u[1],(c=0,[Mt(u[2],511,!1,32,new et(()=>c,d=>{c=d|0})),c])]},I([["変化量","stepInput",i],["回数","limitInput",a]]))));if(gn(l)){const u=W(r,511,!1,32)|0,c=W(s,511,!1,32)|0,d=W(o,511,!1,32)|0,m=La(u,c,d,W(i,511,!1,32),W(a,511,!1,32)),p=Zt(Zt(u,c),d)|0,g=Ma(.1),b=j(g)|0,v=H(`
`,w(Ta,w(M=>w($=>ka($[0],$[1],$[2]),M),w((e=Pe(g,qe(1,Ca(.1,p))),M=>w($=>Tt(q=>~~($*q),M[0],M[1],M[2]),e)),m)))),E=document.getElementById("outputArea");E.innerHTML=v;const y=E.getBoundingClientRect().width;let _;_=fr((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,E.scrollLeft=_*b-(y-_)/2}else{const u=wn((c,d)=>`${c}<br>${d}`,w(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,l));n.innerHTML=u,document.getElementById(He(l)[1]).focus()}}function De(e,t,n,r,s){yr(o=>o!=="",I([e,t,n,r,s]))&&is()}function Pa(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=pn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:st});switch(e.key){case"\\":{const a=w(l=>document.getElementById(l),I(["rInput","gInput","bInput","stepInput","limitInput"]));o||(J(bn(u=>u.value==="",a),He(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{o&&S(a=>{document.getElementById(a).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let m,p=0;if(m=[Mt(d.value,511,!1,32,new et(()=>p,g=>{p=g|0})),p],m[0]){const g=m[1]|0;g<2147483647&&(d.value=L(g+1),De(a.value,l.value,u.value,c.value,d.value))}}break}case"-":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let m,p=0;if(m=[Mt(d.value,511,!1,32,new et(()=>p,g=>{p=g|0})),p],m[0]){const g=m[1]|0;g>0&&(d.value=L(g-1),De(a.value,l.value,u.value,c.value,d.value))}}break}}break}}}function xa(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>色いろいろ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ba,document.querySelector("#submitButton").className="submit-button iro-iroiro",document.getElementById("submitButton").onclick=i=>{is()},S(i=>{document.getElementById(i).onclick=a=>{S(l=>{document.getElementById(l).classList.toggle("active")},I(["helpWindow","helpBarrier"]))}},I(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{Pa(i)}}class Na extends Ne{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return f(h("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function as(e,t,n,r){return new Na(e,t,n,r)}function dt(e){const t=fn(n=>W(n,511,!0,8),e.split("."),Uint8Array);return as(Ae(0,t),Ae(1,t),Ae(2,t),Ae(3,t))}function rn(e){return Pr(dt,ge(t=>yr(n=>n>=0?n<=255:!1,w(n=>W(n,511,!1,32),pe(".",t)))?new Z(0,[t]):new Z(1,[new Ft(3,[])]),ge(t=>Gt("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),ge(Ei,ge(Vt,new Z(0,[e]))))))}function ls(e,t){return as(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class O extends Ne{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return f(h("X = %f; Y = %f"))(t.X)(t.Y)}}function Je(e,t){return new O(e,t)}function We(e){const t=fn(Ce,e.split(","),Float64Array);return Je(fr(t),mo(t))}function qa(e){return f(h("%f,%f"))(e.X)(e.Y)}function Ln(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function ae(e,t,n){return new O(n.X+e,n.Y+t)}function Vn(e,t){return(e.Y>t.Y?1:0)|(e.Y<t.Y?2:0)|(e.X>t.X?4:0)|(e.X<t.X?8:0)}class D extends Ne{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return f(h("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function yt(e,t,n,r){return new D(e,t,n,r)}function Ha(e,t){let n,r;return yt(Me(e.X,t.X),Me(e.Y,t.Y),(n=e.X-t.X,Math.abs(n)),(r=e.Y-t.Y,Math.abs(r)))}function $a(e,t,n){return new D(n.X,n.Y,n.Width+e,n.Height+t)}function Ra(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class le extends $t{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function Oa(e){switch(e){case"Client":return new le(0,[]);case"Server":return new le(1,[]);case"Router":return new le(2,[]);case"Hub":return new le(3,[]);case"ProxyServer":return new le(4,[]);case"LANCable":return new le(5,[]);default:return}}class Da extends Ne{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return f(h("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Ze(e,t,n,r,s,o){const i=dt(n),a=dt(r);return new Da(e,t,i,a,ls(a,i),s,o)}function Wa(e){let t,n,r,s;const o=e.id;return Ze(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),yt(n.left,n.top,n.width,n.height)),Je(Ce((r=xe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Ce((s=xe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function us(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","100");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z"),o.setAttribute("fill","none"),o.setAttribute("stroke","#000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,60 l -15,30 l 90,0 l -15,-30"),i.setAttribute("fill","none"),i.setAttribute("stroke","#000"),i.setAttribute("stroke-width","5");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 25,63 l  -9,20 l 68,0 l  -9,-20  z"),a.setAttribute("fill","#000"),a.setAttribute("stroke","#000"),a.setAttribute("stroke-width","1");const l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000"),l.setAttribute("stroke-width","0"),l.setAttribute("x","23.40522"),l.setAttribute("y","19.58995"),l.setAttribute("font-size","6"),l.setAttribute("font-family","Noto Sans JP"),l.setAttribute("text-anchor","start"),l.setAttribute("xml:space","preserve"),l.textContent="PS C:\\>_";const u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("fill","none"),u.setAttribute("stroke","#fff"),u.setAttribute("x1","20.85"),u.setAttribute("y1","70"),u.setAttribute("x2","79.15"),u.setAttribute("y2","70");const c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("x1","17.7"),c.setAttribute("y1","77"),c.setAttribute("x2","82.3"),c.setAttribute("y2","77");const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("x1","34.7"),d.setAttribute("y1","61.5"),d.setAttribute("x2","29.3"),d.setAttribute("y2","84.5");const m=document.createElementNS("http://www.w3.org/2000/svg","line");m.setAttribute("fill","none"),m.setAttribute("stroke","#fff"),m.setAttribute("x1","44.9"),m.setAttribute("y1","61.5"),m.setAttribute("x2","43.1"),m.setAttribute("y2","84.5");const p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("x1","55.1"),p.setAttribute("y1","61.5"),p.setAttribute("x2","56.9"),p.setAttribute("y2","84.5");const g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("fill","none"),g.setAttribute("stroke","#fff"),g.setAttribute("x1","65.3"),g.setAttribute("y1","61.5"),g.setAttribute("x2","70.7"),g.setAttribute("y2","84.5"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),r.appendChild(c),r.appendChild(d),r.appendChild(m),r.appendChild(p),r.appendChild(g),n.appendChild(r);const b=document.createElement("br"),v=document.createElement("span");v.id=`${e.Id}Name`,v.className="device-prop",v.contentEditable="true",v.textContent=`${e.Name}`;const E=document.createElement("br"),y=document.createElement("span");y.id=`${e.Id}IPv4`,y.className="device-prop ipv4 mono",y.contentEditable="true",y.textContent=`${k(e.IPv4)}`;const _=document.createElement("br"),C=document.createElement("span");C.id=`${e.Id}SubnetMask`,C.className="device-prop subnetmask mono",C.contentEditable="true",C.textContent=`${k(e.SubnetMask)}`;const M=document.createElement("span");return M.id=`${e.Id}Kind`,M.className="no-display",M.textContent="Client",t.appendChild(n),t.appendChild(b),t.appendChild(v),t.appendChild(E),t.appendChild(y),t.appendChild(_),t.appendChild(C),t.appendChild(M),t}class Fa extends Ne{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return f(h("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function St(e,t,n,r,s,o){const i=w(dt,w(l=>l.trim(),pe(";",n))),a=w(dt,w(l=>l.trim(),pe(";",r)));return new Fa(e,t,i,a,Ao(ls,a,i),s,o)}function Va(e){let t,n,r,s;const o=e.id;return St(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),yt(n.left,n.top,n.width,n.height)),Je(Ce((r=xe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Ce((s=xe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function cs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#000000"),o.setAttribute("stroke","#000000");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#ffffff"),i.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#ffffff"),a.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#ffffff"),l.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#ffffff"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const m=document.createElement("br"),p=document.createElement("span");p.id=`${e.Id}IPv4`,p.className="device-prop ipv4 mono",p.contentEditable="true";const g=H("; ",w(k,e.IPv4));p.textContent=g;const b=document.createElement("br"),v=document.createElement("span");v.id=`${e.Id}SubnetMask`,v.className="device-prop subnetmask mono",v.contentEditable="true";const E=H("; ",w(k,e.SubnetMask));v.textContent=E;const y=document.createElement("span");return y.id=`${e.Id}Kind`,y.className="no-display",y.textContent="Router",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(m),t.appendChild(p),t.appendChild(b),t.appendChild(v),t.appendChild(y),t}class Ga extends Ne{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return f(h("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function sn(e,t,n,r){return new Ga(e,t,n,r)}function Xa(e){let t,n,r,s;const o=e.id;return sn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),yt(n.left,n.top,n.width,n.height)),Je(Ce((r=xe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Ce((s=xe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ds(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#ffffff"),o.setAttribute("stroke","#000000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#000000"),i.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#000000"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const m=document.createElement("span");return m.id=`${e.Id}Kind`,m.className="no-display",m.textContent="Hub",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(m),t}class fe extends $t{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function It(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new fe(0,[Wa(e)]);case"Router":return new fe(1,[Va(e)]);case"Hub":return new fe(2,[Xa(e)]);default:return}}function Ya(e){switch(e.tag){case 1:return cs(e.fields[0]);case 2:return ds(e.fields[0]);default:return us(e.fields[0])}}function Ut(e){return e.tag===0}function Lt(e){return e.tag===1}function on(e){return e.tag===2}function Gn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function ms(e,t){switch(t.tag){case 0:return se(t.fields[0].IPv4,e);case 1:return X(e,t.fields[0].IPv4,{Equals:se,GetHashCode:zn});default:return!1}}function Xn(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return ot();default:return G(e.fields[0].NetworkAddress)}}function ja(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function an(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}class Ua extends Ne{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=k(t.Kind),r=H(" ",w(k,t.Points));return f(h("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function Qe(e,t,n,r,s,o){return new Ua(e,t,n,r,s,o)}function ln(e){let t,n,r;const s=e.id,o=document.getElementById(s+"Name").innerText,i=Oa(document.getElementById(s+"Kind").innerText);let a;const u=document.getElementById(s+"Svg").getBoundingClientRect();a=yt(u.left,u.top,u.width,u.height);const c=w(We,pe(" ",(t=document.getElementById(s+"Polyline"),t.getAttribute("points")))),d=Je(Ce((n=xe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),n[1]||"")),Ce((r=xe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")));if(i!=null)return Qe(s,i,o,c,a,d)}function Yn(e){const t=document.createElement("div");t.id=e.Id,t.className="device cable-container lan-cable",t.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device"),n.classList.add("device"),n.setAttribute("viewBox",f(B("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",f(B("%f%P()px",[e.Area.Width]))),n.setAttribute("height",f(B("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${H(" ",w(qa,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),a=document.createElement("span");a.id=`${e.Id}Name`,a.className="no-display",a.textContent=`${e.Name}`;const l=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent=`${k(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}function un(e,t){let n;const r=w(s=>ae(t.Area.X,t.Area.Y,s),t.Points);return Qt((n=ja(e),s=>Ra(n,s)),r)}function Ka(e,t,n){const r=Ot(n),s=hr(x(o=>!on(o),n));return _o(o=>x(i=>on(i)||Lt(r)?!0:s!=null?!se(Ia(Xn(s),Xn(i)),ot()):!1,x(i=>un(i,o),x(i=>X(i,n,{Equals:se,GetHashCode:zn})===!1,t))),x(o=>un(r,o),e))}function Ja(e,t,n){return w(r=>Pe(n,G(r)),Ka(e,t,n))}function Za(e,t,n,r,s){const o=(i,a,l,u,c)=>{const d=Ja(i,a,c);return Qt(m=>ms(u,m),w(Ot,d))?!0:l===0?!1:Qt(Ns(o)(i)(a)(l-1)(u),d)};return o(e,t,n,r,G(s))}const fs=`\r
        <p>\r
            IP アドレスを用いた通信の簡単なシミュレーションができます。<br>\r
            「クライアント」や「ルータ」、「ハブ」といったデバイスをマウスでドラッグして配置したり、<br>\r
            「LAN ケーブル」を伸ばしてデバイス同士を接続したりして通信させることができます。\r
        </p>\r
        <p>\r
            LAN ケーブルの端にカーソルを合わせてドラッグすると、長さや角度を調節できます。<br>\r
            あまり速く動かすと位置がズレます。ゆっくり動かしてください。<br>\r
            LAN ケーブルの端がデバイスに重なっていると「繋がっている」と認識します。<br>\r
        </p>\r
        <p>\r
            デバイス同士が LAN ケーブルで繋がっている状態で、「送信元 IPv4」と「送信先 IPv4」を入力して<br>\r
            「ping」ボタンをクリックすると、通信が成功したかどうかが表示されます。<br>\r
            通信に失敗した場合は、デバイス同士の接続の仕方を変えてみたり、<br>\r
            クライアントやルータの IP アドレスをクリックして設定しなおしたりしてください。\r
        </p>\r
        <p>\r
            <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>マークのボタンをクリックすると、デバイスやケーブルを追加できます。\r
        </p>\r
        <p>\r
            デバイスやケーブルをドラッグで動かした後、カーソルから離れなくなった場合は、<br>\r
            それぞれ以下のようにしてください。<br>\r
            <ul>\r
                <li>デバイス→もう一度クリックする</li>\r
                <li>ケーブル→右クリックする（ケーブルを削除できます）</li>\r
            </ul>\r
        </p>\r
    `,Qa=`
        <form id="inputArea" class="network-simulator input-area" autocomplete="off">
            <span class="display-order-1 network-simulator shorter">
                <span class="network-simulator input-wrapper">
                    <label for="sourceInput">
                        送信元 IPv4:
                    </label>
                    <input type="text" id="sourceInput" class="number-input display-order-1 mono regular">
                </span>
                <span class="network-simulator input-wrapper">
                    <label for="destinationInput">
                        送信先 IPv4:
                    </label>
                    <input type="text" id="destinationInput" class="number-input display-order-1 mono regular">
                </span>
            </span>
            <span class="display-order-2">
                <button type="submit" id="submitButton" class="submit-button" translate="no">ping</button>
            </span>
        </form>
        <form>
            <button type="button" id="addClientButton" class="submit-button gray display-order-3">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    クライアント
                </span>
            </button>
            <button type="button" id="addRouterButton" class="submit-button gray display-order-4">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ルータ
                </span>
            </button>
            <button type="button" id="addHubButton" class="submit-button gray display-order-5">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ハブ
                </span>
            </button>
            <button type="button" id="addLANCableButton" class="submit-button gray display-order-6">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    LANケーブル
                </span>
            </button>
        </form>
        <div id="errorArea" class="error-area warning"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        <div id="helpWindow" class="help-window">
            <div class="help-close-outer">
                <span id="helpClose" class="material-symbols-outlined help-close network-simulator" translate="no">
                    close
                </span>
            </div>
            ${fs}
        </div>
        `;function ps(e,t,n){const r=n,s=r.pageY-t.getBoundingClientRect().height/2,o=r.pageX-t.getBoundingClientRect().width/2,i=f(h("top: %fpx; left: %fpx;"))(s)(o);e.setAttribute("style",i)}function Et(e){const t=document.getElementById(e.id+"Svg");t.ondragstart=r=>{r.preventDefault()};const n=r=>{ps(e,t,r)};t.onmousedown=r=>{document.addEventListener("mousemove",n),t.onmouseup=s=>{document.removeEventListener("mousemove",n)}}}function vt(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Bt(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function Kt(e){S(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=rn(r.innerText),i=document.getElementById("errorArea");if(i.innerText="",o.tag===1){const a=o.fields[0],l=document.getElementById(e.id+"Name").innerText;switch(a.tag){case 2:{i.innerText=`${l} の ${n} の形式が正しくありません。`;break}case 3:{i.innerText=`${l} の ${n} の数値の範囲が正しくありません。`;break}default:i.innerText=`${l} の ${n} を入力してください。`}setTimeout(()=>{r.focus()},0)}})},w(t=>[t,document.getElementById(e.id+t)],I(["IPv4","SubnetMask"])))}function _t(e,t,n){let r;const s=[e,t];return r=Fe(o=>Ln(n,o),s[0],s[1]),r[0]<=r[1]?[e,ae(n.X-e.X,n.Y-e.Y,t)]:[e,n]}function za(e,t,n){let r;const s=[e,t];return r=Fe(o=>Ln(n,o),s[0],s[1]),r[0]<=r[1]?[e,t]:[t,e]}function el(e,t,n,r){let s,o,i,a,l,u;const c=r;let d;const m=w(We,pe(" ",n.getAttribute("points")));d=[He(m),Ot(m)];const p=Je(c.pageX-e.offsetLeft,c.pageY-e.offsetTop),g=za(d[0],d[1],p),b=g[1],v=g[0],E=p.X-v.X,y=p.Y-v.Y,_=Vn(b,v)|0,C=_===1?[v,ae(-E,-y,b)]:_===2?_t(b,v,p):_===4?[v,ae(-E,-y,b)]:_===8?_t(b,v,p):_===5?[v,ae(-E,-y,b)]:_===9?[ae(0,-y,b),ae(E,0,v)]:_===6?[ae(0,y,v),ae(-E,0,b)]:_t(b,v,p),M=5-(s=(o=C,Fe(ve=>ve.X,o[0],o[1])),Me(s[0],s[1])),$=5-(i=(a=C,Fe(ve=>ve.Y,a[0],a[1])),Me(i[0],i[1]));let q,P;const me=C;P=Fe(ve=>ae(M,$,ve),me[0],me[1]);const Ee=P[0],ee=P[1];q=f(B("%f%P(),%f%P() %f%P(),%f%P()",[Ee.X,Ee.Y,ee.X,ee.Y])),n.setAttribute("points",q);const Y=$a(5*2,5*2,(l=(u=C,Fe(ve=>ae(M,$,ve),u[0],u[1])),Ha(l[0],l[1])));switch(t.setAttribute("viewBox",f(B("0 0 %f%P() %f%P()",[Y.Width,Y.Height]))),t.setAttribute("width",f(B("%f%P()px",[Y.Width]))),t.setAttribute("height",f(B("%f%P()px",[Y.Height]))),_){case 1:{e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E])));break}case 4:{e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E])));break}default:_===5?e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E]))):_===9?e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft]))):_===6&&e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop,e.offsetLeft+E])))}const wt=Vn(C[0],C[1])|0;switch(wt){case 1:{t.setAttribute("width",f(B("%f%P()px",[Y.Width+-E]))),t.setAttribute("height",f(B("%f%P()px",[Y.Height+-y]))),e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E])));break}case 4:{t.setAttribute("width",f(B("%f%P()px",[Y.Width+-E]))),t.setAttribute("height",f(B("%f%P()px",[Y.Height+-y]))),e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E])));break}default:wt===5&&(t.setAttribute("width",f(B("%f%P()px",[Y.Width+-E]))),t.setAttribute("height",f(B("%f%P()px",[Y.Height+-y]))),e.setAttribute("style",f(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+E]))))}}function jn(e){if(ln(e)!=null){const n=document.getElementById(e.id+"Svg");n.ondragstart=r=>{r.preventDefault()},n.onmousedown=r=>{let s;const o=ln(document.getElementById(e.id));if(o!=null){const l=o.Points;s=[He(l),Ot(l)]}else s=[void 0,void 0];const i=Je(r.offsetX,r.offsetY);let a;if(wr(w(l=>Ln(i,l),w(A,x(l=>l!=null,I([s[0],s[1]])))),{Compare:ct})<5){const l=document.getElementById(e.id+"Polyline");a=u=>{el(e,n,l,u)}}else a=l=>{ps(e,n,l)};document.addEventListener("mousemove",a),n.onmouseup=l=>{document.removeEventListener("mousemove",a)}}}}function Un(e){e.oncontextmenu=t=>{t.preventDefault(),document.getElementById("playArea").removeChild(e)}}function tl(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],a=i[0];return`
        <div class="history-container ${a}"">
            ${i[1]}<span class ="${a}">${an(e)} [${s=t,k(s)}] -> ${o=n,k(o)} ${i[2]}</span>
        </div>
        `}function nl(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=pn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:st});switch(e.key){case"\\":{const a=w(l=>document.getElementById(l),I(["sourceInput","destinationInput"]));o||(J(bn(u=>u.value==="",a),He(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{o&&S(a=>{document.getElementById(a).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}}break}}}function rl(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=ne,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=c=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=c=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Qa,document.querySelector("#submitButton").className="submit-button network-simulator",document.getElementById("helpButton").onclick=c=>{S(d=>{document.getElementById(d).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{S(d=>{document.getElementById(d).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{S(d=>{document.getElementById(d).classList.remove("active")},I(["helpWindow","helpBarrier"]))};const n=document.getElementById("playArea").getBoundingClientRect(),r=I([new fe(0,[Ze("device1","クライアント(1)","10.0.0.1","255.255.255.0",new D(0,0,100,100),new O(0+n.left,100+n.top))]),new fe(0,[Ze("device2","クライアント(2)","10.0.0.2","255.255.255.0",new D(0,0,100,100),new O(150+n.left,100+n.top))]),new fe(1,[St("device3","ルータ(1)","10.0.0.254","255.255.255.0",new D(0,0,100,35),new O(300+n.left,100+n.top))]),new fe(0,[Ze("device4","クライアント(3)","10.0.1.18","255.255.255.240",new D(0,0,100,100),new O(450+n.left,100+n.top))]),new fe(0,[Ze("device5","クライアント(4)","10.0.1.19","255.255.255.240",new D(0,0,100,100),new O(600+n.left,100+n.top))]),new fe(1,[St("device6","ルータ(2)","10.0.1.30","255.255.255.240",new D(0,0,100,35),new O(750+n.left,100+n.top))]),new fe(2,[sn("device7","ハブ(1)",new D(0,0,100,35),new O(900+n.left,100+n.top))])]);w(c=>document.getElementById("playArea").appendChild(c),w(Ya,r));const s=I([Qe("lancable1",new le(5,[]),"LANケーブル(1)",w(We,pe(" ","5,5 195,45")),new D(0,0,200,50),new O(100+n.left,30+n.top)),Qe("lancable2",new le(5,[]),"LANケーブル(2)",w(We,pe(" ","5,5 195,45")),new D(0,0,200,50),new O(300+n.left,30+n.top)),Qe("lancable3",new le(5,[]),"LANケーブル(3)",w(We,pe(" ","5,5 195,45")),new D(0,0,200,50),new O(500+n.left,30+n.top)),Qe("lancable4",new le(5,[]),"LANケーブル(4)",w(We,pe(" ","5,5 195,45")),new D(0,0,200,50),new O(700+n.left,30+n.top))]);w(c=>document.getElementById("playArea").appendChild(c),w(Yn,s)),S(c=>{Et(c),vt(c),Bt(c)},w(c=>document.getElementById(c),w(Gn,r))),S(c=>{Kt(c)},w(c=>document.getElementById(c),w(Gn,x(c=>Ut(c)?!0:Lt(c),r)))),S(c=>{jn(c),Un(c)},w(c=>document.getElementById(c),w(c=>c.Id,s)));const o=document.getElementById("submitButton");o.onclick=c=>{let d,m,p,g,b;c.preventDefault();const v=w(A,x(P=>P!=null,w(It,I((d=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(d)))))),E=w(A,x(P=>P!=null,w(ln,I((m=document.getElementById("playArea").getElementsByClassName("cable-container"),Array.from(m)))))),y=document.getElementById("errorArea"),_=document.getElementById("outputArea");y.innerText="",_.innerText="";const C=document.getElementById("sourceInput"),M=document.getElementById("destinationInput"),$=rn(C.value),q=rn(M.value);if($.tag===0){const P=$.fields[0];if(q.tag===0){const me=q.fields[0],Ee=bn(ee=>ms(P,ee),x(ee=>Ut(ee)?!0:Lt(ee),v));if(Ee!=null){const ee=Ee;if(gn(x(Y=>un(ee,Y),E)))y.innerText=(p=an(ee),g=k(P),f(h("%s [%s] はLANケーブルに繋がっていません。"))(p)(g));else{let Y;const wt=an(ee),ve=k(P),gs=k(me);Y=f(h('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(wt)(ve)(gs),_.innerHTML=Y;const hs=tl(ee,P,me,Za(E,v,128,me,ee));switch(_.innerHTML=hs,document.activeElement.id){case"sourceInput":{C.focus();break}case"destinationInput":{M.focus();break}}}}else y.innerText=(b=k(P),f(h("IPv4 %s を持つデバイスが見つかりません。"))(b)),C.focus()}else{switch(q.fields[0].tag){case 2:{y.innerText="送信先 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="送信先 IPv4 の数値の範囲が正しくありません。";break}default:y.innerText="送信先 IPv4 を入力してください。"}M.focus()}}else{switch($.fields[0].tag){case 2:{y.innerText="送信元 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="送信元 IPv4 の数値の範囲が正しくありません。";break}default:y.innerText="送信元 IPv4 を入力してください。"}C.focus()}};const i=document.getElementById("addClientButton");i.onclick=c=>{let d,m;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),b=p.getElementsByClassName("cable-container").item(0),v=j(x(Ut,w(A,x(y=>y!=null,w(It,I((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,E=f(B("client%d%P()",[v]));m=us(Ze(E,f(B("クライアント(%d%P())",[v])),"10.0.0.1","255.255.255.0",new D(0,0,100,100),new O(0+g.left,0+g.top))),p.insertBefore(m,b),Et(document.getElementById(E)),vt(document.getElementById(E)),Bt(document.getElementById(E)),Kt(document.getElementById(E))};const a=document.getElementById("addRouterButton");a.onclick=c=>{let d,m,p;const g=document.getElementById("playArea"),b=g.getBoundingClientRect(),v=g.getElementsByClassName("cable-container").item(0),E=j(x(Lt,w(A,x(_=>_!=null,w(It,I((d=g.getElementsByClassName("device-container"),Array.from(d))))))))|0,y=f(B("router%d%P()",[E+1]));m=cs((p=E|0,St(y,f(B("ルータ(%d%P())",[p+1])),`10.0.${p}.254`,"255.255.255.0",new D(0,0,100,35),new O(0+b.left,0+b.top)))),g.insertBefore(m,v),Et(document.getElementById(y)),vt(document.getElementById(y)),Bt(document.getElementById(y)),Kt(document.getElementById(y))};const l=document.getElementById("addHubButton");l.onclick=c=>{let d,m;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),b=p.getElementsByClassName("cable-container").item(0),v=j(x(on,w(A,x(y=>y!=null,w(It,I((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,E=f(B("hub%d%P()",[v]));m=ds(sn(E,f(B("ハブ(%d%P())",[v])),new D(0,0,100,35),new O(0+g.left,0+g.top))),p.insertBefore(m,b),Et(document.getElementById(E)),vt(document.getElementById(E)),Bt(document.getElementById(E))};const u=document.getElementById("addLANCableButton");u.onclick=c=>{let d;const m=document.getElementById("playArea"),p=m.getBoundingClientRect(),g=m.getElementsByClassName("cable-container").length+1|0,b=f(B("cable%d%P()",[g]));d=Yn(Qe(b,new le(5,[]),f(B("LANケーブル(%d%P())",[g])),w(We,pe(" ","5,5 195,45")),new D(0,0,200,50),new O(0+p.left,0+p.top))),m.appendChild(d);const v=document.getElementById(b);jn(v),Un(v)},document.onkeydown=c=>{nl(c)}}const sl=`
        <h2>このサイトについて</h2>
        <p>
            <span translate="no">taidalab</span>（タイダラブ）は、<span translate="no">taidalog</span> が作成したプログラム置き場です。<br>
            10進数と2進数の変換の反復練習ツールなど、高校の「情報&#8544;」の学習ツールを中心に公開しています。<br>
            <span translate="no">F#</span> で書いたものを <span translate="no">Fable</span> で <span translate="no">JavaScript</span> にトランスパイルしています。<span translate="no">F#</span> 楽しい。
        </p>
        <h2>それぞれのページについて</h2>
        <dl id="explanation" class="explanation">
            <dt>
                <h3><a href="/taidalab/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                ${Rr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Dr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${Fr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${Gr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${Xr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${Yr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${jr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${Ur}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${Zr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${zr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${ts}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${os}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${fs}
            </dd>
        </dl>`;function ol(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=ft,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>about - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=sl,document.onkeydown=t=>{}}const il=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function al(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=ft,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ご利用について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=il,document.onkeydown=t=>{}}const ll=`\r
        <h2>情報の外部送信について</h2>\r
        <p>アクセス状況の分析のため、当サイトでは「Google アナリティクス」というサービスを利用しています。それに伴い、以下のような利用者のアクセス情報を外部へ送信しています。</p>\r
        <h2>送信情報</h2>\r
        <ul>\r
            <li>閲覧したページの URL</li>\r
            <li>閲覧したページのタイトル</li>\r
            <li>当サイトを閲覧した日時</li>\r
            <li>当サイトを閲覧した際の大まかな位置情報</li>\r
            <li>当サイトを閲覧した際の IP アドレス</li>\r
            <li>当サイトを閲覧した際のインターネット端末およびインターネットブラウザの種類</li>\r
        </ul>\r
        <h2>送信先</h2>\r
        <ul>\r
            <li>Google LLC</li>\r
        </ul>\r
        <h2>利用目的</h2>\r
        <p>当サイトへのアクセス状況の分析およびコンテンツの改善のために利用しています。当該情報は個人を特定するものではありません。Google アナリティクスについては以下のページを参照してください。\r
            <ul>\r
                <li><a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a></li>\r
                <li><a href="https://policies.google.com/technologies/partner-sites">Google のサービスを使用するサイトやアプリから収集した情報の Google による使用</a></li>\r
                <li><a href="https://support.google.com/analytics/answer/11593727?hl=ja&ref_topic=1008008&sjid=3916650995392926123-AP">[GA4] データ収集 - アナリティクス ヘルプ</a></li>\r
            </ul>\r
        </p>`;function ul(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=ft,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ll,document.onkeydown=t=>{}}function Kn(e){const t=document.getElementById("numberInput"),n=Ke(t.value),r=Re(n);if(t.focus(),r.tag===0){const s=r.fields[0];document.getElementById("errorArea").innerHTML="";const o=Ie(de(9,s)),i=we(s)|0,a=Oe(re(3," ",L(i))),l=document.getElementById("outputArea"),u=Ue("<br>",I([at(i===W(e,511,!1,32),o,2,a,10),l.innerHTML]));l.innerHTML=u,i!==W(e,511,!1,32)||(window.history.replaceState(Te(),"","http://localhost:8080/taidalab/"),dr())}else document.getElementById("errorArea").innerHTML=je(e,n,r.fields[0])}function cl(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=ft,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Bi,document.querySelector("#submitButton").className="submit-button display-order-3 not-found",document.querySelector("#questionArea").innerHTML=ye,document.getElementById("questionSpan").innerText=L(404),document.getElementById("srcRadix").innerText=f(h("(%d)"))(10),document.getElementById("dstRadix").innerText=L(2),document.getElementById("binaryRadix").innerHTML=f(h("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),Kn(L(404))},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),Kn(L(404))}}function Cn(e){switch(e.pathname){case"/taidalab/":{dr();break}case"/taidalab/endless-binary/dec2bin-1/":{Ni();break}case"/taidalab/endless-binary/dec2bin-2/":{$i();break}case"/taidalab/endless-binary/bin2dec-1/":{Xi();break}case"/taidalab/endless-binary/bin2dec-2/":{Ui();break}case"/taidalab/endless-binary/power-of-two-1/":{Zi();break}case"/taidalab/endless-binary/power-of-two-2/":{ea();break}case"/taidalab/endless-binary/addition/":{ia();break}case"/taidalab/endless-binary/subtraction/":{aa();break}case"/taidalab/endless-binary/complement/":{la();break}case"/taidalab/endless-binary/dec2hex/":{ga();break}case"/taidalab/endless-binary/hex2dec/":{ya();break}case"/taidalab/iro-iroiro/":{xa();break}case"/taidalab/network-simulator/":{rl();break}case"/taidalab/about/":{ol();break}case"/taidalab/terms/":{al();break}case"/taidalab/information-policy/":{ul();break}default:cl()}}function Mn(){let e;const t=document.querySelector("aside").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==lr).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function kn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState(Te(),"",e.href),Cn((n=e.href,new URL(n))),Mn();let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return cr((l=a.href,new URL(l)))}),r.forEach(a=>{kn(a)})}}function dl(){document.body.innerHTML="",document.body.innerHTML=Qs,document.querySelector("footer").innerHTML=to,document.querySelector("aside").innerHTML=zs}window.addEventListener("DOMContentLoaded",e=>{let t;dl();const n=ur((t=window.location.href,new URL(t)));window.history.replaceState(Te(),"",n.href),Cn(n);let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return cr((l=a.href,new URL(l)))}),r.forEach(a=>{kn(a)}),Mn()});window.addEventListener("popstate",e=>{let t;const n=ur((t=window.location.href,new URL(t)));window.history.replaceState(Te(),"",n.href),Cn(n);let r,s;const o=document.querySelector("aside").querySelectorAll("a");s=Array.from(o),r=s.filter(i=>i.href!==""),r.forEach(i=>{kn(i)}),Mn()});
