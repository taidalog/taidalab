(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const at=Symbol("numeric");function Os(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[at])}function Ws(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function Fs(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[at]().multiply(t)}function Vs(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[at]().toFixed(t)}function Rn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[at]().toPrecision(t)}function Dn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[at]().toExponential(t)}function On(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[at]().toHex()}function Te(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Gs(e){return e!=null&&typeof e.GetEnumerator=="function"}function Xs(e){return e!=null&&typeof e.CompareTo=="function"}function Ys(e){return e!=null&&typeof e.Equals=="function"}function sr(e){return e!=null&&typeof e.GetHashCode=="function"}function js(e){return e!=null&&typeof e.Dispose=="function"}function ee(e){js(e)&&e.Dispose()}function xe(){return null}function Pt(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class Us{constructor(t){this.iter=t,this.current=xe()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Ae(e){return Gs(e)?e.GetEnumerator():new Us(e[Symbol.iterator]())}function or(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function Wn(e,t){return e.toString(10).padStart(t,"0")}function Fn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function C(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ee{static id(t){return Ee.idMap.has(t)||Ee.idMap.set(t,++Ee.count),Ee.idMap.get(t)}}Ee.idMap=new WeakMap;Ee.count=0;function lt(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function O(e){return e*2654435761|0}function ir(e){return lt(e.toString(32))}function Gt(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Ks(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return ir(e);case"string":return lt(e);default:return O(Ee.id(e))}}function Js(e){return sr(e)?e.GetHashCode():Ks(e)}function Zs(e){return e.getTime()}function Qs(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Ue(e[r]);return Gt(n)}function Ue(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return ir(e);case"string":return lt(e);default:{if(sr(e))return e.GetHashCode();if(Te(e))return Qs(e);if(e instanceof Date)return Zs(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Ue(r));return Gt(n)}else return O(Ee.id(e))}}}function ar(e){return Js(e)}function zs(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function lr(e,t){return zs(e,t,N)}function eo(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!N(e[n[s]],t[r[s]]))return!1;return!0}function N(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:Ys(e)?e.Equals(t):Te(e)?Te(t)&&lr(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&ur(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&eo(e,t)}function ur(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Fn(e),r=t.getTime()+Fn(t)),n===r?0:n<r?-1:1}function pt(e,t){return e===t?0:e<t?-1:1}function to(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function cr(e,t){return to(e,t,Ye)}function no(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=Ye(e[i],t[i]),o!==0)return o}return 0}function Ye(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:Xs(e)?e.CompareTo(t):Te(e)?Te(t)?cr(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?ur(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?no(e,t):-1}const ro=new WeakMap;function so(e){return ro.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function oo(e){let t=0,n="[";for(const r of e){if(t===0)n+=x(r);else if(t===100){n+="; ...";break}else n+="; "+x(r);t++}return n+"]"}function x(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return oo(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+x(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function io(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=x(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>x(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class ut{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return io(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Ue(n));return t.splice(0,0,O(this.tag)),Gt(t)}Equals(t){return this===t?!0:Pt(this,t)&&this.tag===t.tag?lr(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Pt(this,t)?this.tag===t.tag?cr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function ao(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function lo(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+x(n)).join(`
  `)+" }"}function uo(e){const t=Object.values(e).map(n=>Ue(n));return Gt(t)}function co(e,t){if(e===t)return!0;if(Pt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!N(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function mo(e,t){if(e===t)return 0;if(Pt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=Ye(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class He{toJSON(){return ao(this)}toString(){return lo(this)}GetHashCode(){return uo(this)}Equals(t){return co(this,t)}CompareTo(t){return mo(this,t)}}class st{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}function fo(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+Wn(n,2)+":"+Wn(r,2)}function po(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+fo(e.offset??0)}function go(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function ho(e,t,n){return e.offset!=null?po(e):go(e)}function gn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function bo(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function dr(e,t,n=0){return e.lastIndex=n,e.test(t)}function hn(e,t,n=0){return e.lastIndex=n,e.exec(t)}const mt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,ft=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function yo(e,t){return Ws(e,t)<0}function v(e){return{input:e,cont:Io(e)}}function B(e,t){let n=0,r=0,s="";ft.lastIndex=0;let o=ft.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,a,l,u,c]=o;r=ft.lastIndex,s+=fr(t[n++],a,l,u,c),ft.lastIndex=r-1,o=ft.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function mr(e,t){return typeof t=="string"?e(t):t.cont(e)}function wo(e){return mr(t=>console.log(t),e)}function m(e){return mr(t=>t,e)}function fr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",Os(e))switch(s.toLowerCase()!=="x"&&(yo(e,0)?(e=Fs(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=Vs(e,r);break;case"g":case"G":e=r!=null?Rn(e,r):Rn(e);break;case"e":case"E":e=r!=null?Dn(e,r):Dn(e);break;case"x":e=On(e);break;case"X":e=On(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=ho(e):e=x(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,a=t.indexOf("-")>=0,l=a||!i?" ":"0";l==="0"?(e=en(e,n-o.length,l,a),e=o+e):e=en(o+e,n,l,a)}return e}function pr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const a=t.slice(),l=n.slice();for(const u of o){const[,,c,d,f,p]=l[0];let g=d;if(s>=0)g=s,s=-1;else if(g==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=a[0],i+=fr(u,c,g,f,p),a.splice(0,1),l.splice(0,1)}return l.length===0?(i+=a[0],e(i)):pr(e,a,l,i,s)}}function Io(e){return t=>{mt.lastIndex=0;const n=[],r=[];let s=0,o=mt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=mt.lastIndex,mt.lastIndex-=1,o=mt.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),pr(t,n,r))}}function gt(e){return typeof e!="string"||e.length===0}function je(e){return typeof e!="string"||/^\s*$/.test(e)}function H(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function en(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function Eo(e,t,n){return en(e,t,n)}function gr(e,t,n){return e.replace(new RegExp(bo(t),"g"),n)}const vo=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <aside></aside>\r
                    <main></main>\r
                </div>\r
                <footer></footer>\r
            </div>`,ae=`\r
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
            `,wt=`\r
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
            `,Bo=`\r
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
            </ul>`,Se='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',_o="Version 5.0.1",Ao=m(v(`\r
                <small class="footer-container">\r
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>\r
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>\r
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>\r
                </small>`))(_o),hr=`\r
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
            </div>`,br="https://taidalog.github.io/",yr="/taidalab/";function wr(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),x(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+x(s))}else return e}function Lo(e,t){return t.origin===e?t.pathname.startsWith(yr):!1}function Ir(e){return Lo(br,e)}const So=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function Er(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=wt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1 translate="no">taidalab</h1>',document.querySelector("main").innerHTML=So,document.onkeydown=t=>{}}class ot{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ue(this.value)}Equals(t){return t==null?!1:N(this.value,t instanceof ot?t.value:t)}CompareTo(t){return t==null?1:Ye(this.value,t instanceof ot?t.value:t)}}function S(e){if(e==null)throw new Error("Option has no value");return e instanceof ot?e.value:e}function X(e){return e==null||e instanceof ot?new ot(e):e}function z(e,t){return e!=null?S(e):t}function ve(e,t){return t!=null?X(e(S(t))):void 0}const Mo="The index was outside the range of elements in the collection.",Xt="Collection was empty.",Co="The input must be non-negative.",To="An index satisfying the predicate was not found in the collection.",vr="The input sequence has an insufficient number of elements.";function xo(e,t){return typeof e=="function"?new e(t):new Array(t)}function ko(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Le(e){const t=new st(0);if(ko(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function tn(e,t){return e>t?e:t}function ke(e,t){return e<t?e:t}function $o(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function Po(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Be(e.length-1,e)}function bn(e,t,n){const r=t.length|0,s=xo(n,r);for(let o=0;o<=r-1;o++)_r(s,o,e(Be(o,t)));return s}function qo(e,t,n,r,s){const o=z(n,0)|0,i=z(ve(l=>o+l,r),e.length)|0;return(l=>{e:for(;;){const u=l;if(u>=i)return-1;if(s.Equals(t,Be(u,e)))return u|0;l=u+1;continue e}})(o)|0}function yn(e,t,n){return qo(t,e,void 0,void 0,n)>=0}function No(e){return e.slice().reverse()}function Ho(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function Br(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Be(0,e)}function Be(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function _r(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class ne extends He{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+H("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=S(l),d=S(u);if(N(i.head,a.head)){s=c,o=d;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,a=s,l=o,u=l.tail;if(u!=null){const c=S(u);if(i>18)return a|0;r=i+1,s=(a<<1)+Ue(l.head)+631*i,o=c;continue e}else return a|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=S(l),d=S(u),f=Ye(i.head,a.head)|0;if(f===0){s=c,o=d;continue e}else return f|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return Do(this)}[Symbol.iterator](){return or(Ae(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Ae(this)}}class Ro{constructor(t){this.xs=t,this.it=this.xs,this.current=xe()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=S(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=xe()}Dispose(){}}function Do(e){return new Ro(e)}function q(){return new ne(xe(),void 0)}function It(e,t){return new ne(e,t)}function Y(e){return e.tail==null}function Ar(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=S(i);continue e}else return s|0}})(0,e)|0}function ue(e){if(e.tail!=null)return e.head;throw new Error(Xt+"\\nParameter name: list")}function k(e){const t=e.tail;if(t!=null)return S(t);throw new Error(Xt+"\\nParameter name: list")}function Oo(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,a=i.tail;if(a!=null){if(o===t)return i.head;r=o+1,s=S(a);continue e}else throw new Error(Mo+"\\nParameter name: index")}})(0,e)}function Wo(){throw new Error(To)}function Ke(){return q()}function Me(e,t){return It(e,t)}function W(e){return It(e,q())}function wn(e){return Y(e)}function te(e){return Ar(e)}function Re(e){return ue(e)}function In(e){return k(e)}function Lr(e){e:for(;;){const t=e;if(Y(t))return;{const n=k(t);if(Y(n))return X(ue(t));e=n;continue e}}}function Yt(e){const t=Lr(e);if(t==null)throw new Error(Xt);return S(t)}function Sr(e){const t=Ar(e)|0,n=$o(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,a=o;if(!Y(a)){_r(n,i,ue(a)),s=i+1,o=k(a);continue e}break}})(0,e),n}function ce(e,t,n){let r=t,s=n;for(;!Y(s);)r=e(r,Re(s)),s=k(s);return r}function qt(e){return ce((t,n)=>It(n,t),q(),e)}function Fo(e,t,n){return((s,o,i)=>{e:for(;;){const a=s,l=o,u=i;if(Y(u))return l;s=a+1,o=e(a,l,ue(u)),i=k(u);continue e}})(0,t,n)}function Vo(e,t,n,r){let s=t,o=n,i=r;for(;!Y(o)&&!Y(i);)s=e(s,ue(o),ue(i)),o=k(o),i=k(i);return s}function A(e,t){ce((n,r)=>{e(r)},void 0,t)}function Go(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=It(Be(r,e),n);return n}function w(e){return Go(e,q())}function Xo(e){let t,n;if(Te(e))return w(e);if(e instanceof ne)return e;{const r=q();let s=r;const o=Ae(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const l=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new ne(l,void 0),t.tail=n,n)}}finally{ee(o)}const i=s,a=q();return i.tail=a,k(r)}}function $e(e,t){return ce((n,r)=>It(r,n),t,qt(e))}function Yo(e,t){let n,r;const s=q();let o=s,i=t;for(;!Y(i);){let u=e(ue(i));for(;!Y(u);)o=(n=o,r=new ne(ue(u),void 0),n.tail=r,r),u=k(u);i=k(i)}const a=o,l=q();return a.tail=l,k(s)}function Et(e,t){const n=q(),r=Fo((o,i,a)=>{const l=new ne(e(o,a),void 0);return i.tail=l,l},n,t),s=q();return r.tail=s,k(n)}function y(e,t){const n=q(),r=ce((o,i)=>{const a=new ne(e(i),void 0);return o.tail=a,a},n,t),s=q();return r.tail=s,k(n)}function jo(e,t,n){const r=q(),s=Vo((i,a,l)=>{const u=new ne(e(a,l),void 0);return i.tail=u,u},r,t,n),o=q();return s.tail=o,k(r)}function Uo(e,t){return(r=>{e:for(;;){const s=r;if(Y(s))return;{const o=e(ue(s));if(o==null){r=k(s);continue e}else return o}}})(t)}function En(e,t){return Uo(n=>e(n)?X(n):void 0,t)}function vn(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(Y(i))return;if(e(ue(i)))return o;r=o+1,s=k(i);continue e}})(0,t)}function Ko(e,t){const n=vn(e,t);return n==null?(Wo(),-1):S(n)|0}function xt(e,t){return Oo(t,e)}function $(e,t){const n=q(),r=ce((o,i)=>{if(e(i)){const a=new ne(i,void 0);return o.tail=a,a}else return o},n,t),s=q();return r.tail=s,k(n)}function j(e,t,n){return vn(r=>n.Equals(e,r),t)!=null}function Bn(e,t){if(Y(t))throw new Error(Xt);return ce(e,Re(t),In(t))}function ht(e,t){return ce((n,r)=>n&&e(r),!0,t)}function nn(e,t){return vn(e,t)!=null}function Jo(e,t){const n=Sr(t);return n.sort(e),w(n)}function Vn(e,t){return Jo((n,r)=>t.Compare(n,r),e)}function Zo(e,t){return Bn((n,r)=>t.Compare(r,n)>0?r:n,e)}function Mr(e,t){return Bn((n,r)=>t.Compare(r,n)>0?n:r,e)}function Qo(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(Y(r))throw new Error(vr+"\\nParameter name: list");e=n-1,t=k(r);continue e}}function zo(e,t){if(e<0)throw new Error(Co+"\\nParameter name: count");const n=(i,a,l)=>{let u;e:for(;;){const c=i,d=a,f=l;if(c<=0)return d;if(Y(f))throw new Error(vr+"\\nParameter name: list");i=c-1,a=(u=new ne(ue(f),void 0),d.tail=u,u),l=k(f);continue e}},r=q(),s=n(e,r,t),o=q();return s.tail=o,k(r)}function vt(e,t){const n=(i,a,l)=>{let u;e:for(;;){const c=i,d=a,f=l;if(c<=0)return d;if(Y(f))return d;i=c-1,a=(u=new ne(ue(f),void 0),d.tail=u,u),l=k(f);continue e}},r=q(),s=n(e,r,t),o=q();return s.tail=o,k(r)}function _n(e,t,n){const r=te(n)|0;let s;const o=z(e,0)|0;s=o<0?0:o;let i;const a=z(t,r-1)|0;return i=a>=r?r-1:a,i<s?q():zo(i-s+1,Qo(s,n))}function ei(){return Math.random()}function Jt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function ti(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class ni{constructor(){}Next0(){return Jt(0,2147483647)}Next1(t){return Jt(0,t)}Next2(t,n){return Jt(t,n)}NextDouble(){return ei()}NextBytes(t){ti(t)}}function ri(){return new ni}function Cr(){return ri()}function re(e,t){return Cr().Next2(e,t+1)|0}function K(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function Tr(e){return Math.log(e)/Math.log(2)}var rn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(rn||(rn={}));function si(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Gn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function oi(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function ii(e,t){if(t&rn.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function ai(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||ii(o,t),!oi(n).test(i))return si(s,n)}return null}function Q(e,t,n,r,s){const o=ai(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[a,l]=Gn(!0,r);!n&&o.radix!==10&&i>=a&&i<=l&&(i=i<<32-r>>32-r);const[u,c]=Gn(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Nt(e,t,n,r,s){try{return s.contents=Q(e,t,n,r),!0}catch{return!1}}function li(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function xr(e,t,n){return m(v(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function rt(e,t,n,r){return m(v('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function An(e,t,n,r,s,o){return m(v('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function ui(e,t,n,r,s,o,i,a){return m(v('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(a)}function _e(e,t){return ui("opacity","linear","0","1",e,t,"1","freeze")}function kr(e,t,n,r,s,o,i,a,l){return An(m(v("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),a,1,l,0,_e(i,500))}function Pe(e,t){return hn(gn(e),t)}function qe(e,t){return dr(gn(e),t)}function ci(e){throw new Error(e)}const di="Enumeration already finished.",mi="Enumeration has not started. Call MoveNext.",$r="The input sequence has an insufficient number of elements.",fi="Reset is not supported on this enumerator.";function pi(){throw new Error(fi)}function Ln(){throw new Error(mi)}function sn(){throw new Error(di)}class gi{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Ae(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+x(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{ee(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return or(Ae(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function hi(e){return new gi(e)}class bi{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){pi()}Dispose(){this.dispose()}}function jt(e,t,n){return new bi(e,t,n)}function yi(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const a=S(n);try{ee(a)}finally{n=void 0}}if(t!=null){const a=S(t);try{ee(a)}finally{t=void 0}}};return jt(()=>(r?s&&sn():Ln(),o!=null?S(o):sn()),()=>{let a;if(r||(r=!0),s)return!1;{let l;for(;l==null;){const u=t,c=n;if(u!=null)if(c!=null){const d=S(c);if(d["System.Collections.IEnumerator.MoveNext"]())o=X(d["System.Collections.Generic.IEnumerator`1.get_Current"]()),l=!0;else try{ee(d)}finally{n=void 0}}else{const d=S(u);d["System.Collections.IEnumerator.MoveNext"]()?n=(a=d["System.Collections.Generic.IEnumerator`1.get_Current"](),Ae(a)):(i(),l=!1)}else t=Ae(e)}return S(l)}},()=>{s||i()})}function wi(e,t){return jt(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{ee(t)}finally{}})}function Pr(e,t,n){let r=!1,s,o=X(e());const i=()=>{if(o!=null){const l=S(o);try{n(l)}finally{o=void 0}}},a=()=>{try{i()}finally{s=void 0}};return jt(()=>(r||Ln(),s!=null?S(s):sn()),()=>{if(r||(r=!0),o!=null){const l=S(o);let u;try{u=t(l)}catch(c){throw a(),c}return u!=null?(s=u,!0):(a(),!1)}else return!1},i)}function Ii(e,t){let n,r=t;return jt(()=>{if(n!=null){const s=S(n)[0];return S(n)[1],s}else return Ln()},()=>(n=e(r),n!=null?(S(n)[0],r=S(n)[1],!0):!1),()=>{})}function Ei(e,t){t==null&&ci(e)}function ct(e){return hi(e)}function De(e){return Ei("source",e),Ae(e)}function Bt(e){return ct(()=>Ae(e()))}function qr(e){return ct(()=>yi(e))}function Nr(e,t){return ct(()=>Ii(e,t))}function Hr(e){return e instanceof ne?Sr(e):Array.from(e)}function Je(e){return Te(e)?w(e):e instanceof ne?e:Xo(e)}function Sn(e,t,n){return ct(()=>Pr(e,t,n))}function vi(e,t,n){return ct(()=>{let r=-1;return Pr(e,s=>(r=r+1|0,t(r,s)),n)})}function Bi(e,t){return qr([e,t])}function _i(e,t){return Sn(()=>De(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{ee(n)})}function Ai(e,t){return _i(n=>{if(e(n))return X(n)},t)}function Li(e,t,n){const r=De(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{ee(r)}}function Si(e,t){return Nr(n=>n<e?[t(n),n+1]:void 0,0)}function Xn(e,t){Li((n,r)=>(e(n,r),n+1|0),0,t)}function Mi(e){const t=De(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?X(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{ee(t)}}function Ci(e){const t=Mi(e);if(t==null)throw new Error($r+"\\nParameter name: source");return S(t)}function Ti(e){if(Te(e))return e.length|0;if(e instanceof ne)return te(e)|0;{const t=De(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{ee(t)}}}function fe(e,t){return Sn(()=>De(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?X(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{ee(n)})}function xi(e,t){return vi(()=>De(t),(n,r)=>r["System.Collections.IEnumerator.MoveNext"]()?X(e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{ee(n)})}function ki(e,t){return Si(e,n=>t)}function Ht(e){return Bt(()=>No(Hr(e)))}function $i(e,t){return ct(()=>{const n=De(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error($r+"\\nParameter name: source");return wi(()=>{},n)}catch(r){throw ee(n),r}})}function Pi(e,t){return Bt(()=>{let n=!0;return Ai(r=>(n&&(n=e(r)),!n),t)})}function qi(e){return $i(1,e)}function Ni(e,t){return Sn(()=>De(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?X(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{ee(n)})}function Rr(e,t){return Bt(()=>qr(fe(e,t)))}function Hi(e,t){return Bt(()=>Ho(e,Hr(t)))}function Yn(e,t,n){const r=e-Ti(n)|0;return r<1?n:Bi(ki(r,t),n)}function Dr(e){return H("",fe(t=>t,qi(e.split(""))))}function Ri(e){return Ci(e.split(""))}function J(e,t,n){return Eo(n,e,t)}function Rt(e){return H("",fe(t=>t,Ht(e.split(""))))}function Di(e,t){return fe(n=>H("",n),fe(n=>bn(r=>r,n),Hi(e,t.split(""))))}function Oi(e,t){return fe(Rt,Ht(Di(e,Rt(t))))}function ie(e,t){return w(t.split(e))}function Wi(e,t){return[H("",fe(n=>n,Ni(n=>!e(n),t.split("")))),H("",fe(n=>n,Pi(n=>!e(n),t.split(""))))]}function Fi(e){return new P(0,[e])}function Or(e){return new P(1,[e])}class P extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Vi(e,t){return t.tag===0?Fi(e(t.fields[0])):Or(t.fields[0])}function le(e,t){return t.tag===0?e(t.fields[0]):Or(t.fields[0])}function Gi(e){try{return new P(0,[Q(e,511,!1,32)])}catch(t){return new P(1,[new Error(t.message)])}}function Xi(e){return gt(e)?new P(1,[new Error]):new P(0,[e])}function Mn(e){return e===""?new P(1,[new Error("Value cannot be empty string.")]):new P(0,[e])}function Cn(e,t){return dr(gn(e),t)?new P(0,[t]):new P(1,[new Error(`The input string '${t}' was not in a correct format.`)])}function Wr(e,t,n){return e(n)>t?new P(1,[new Error(m(B("Value is too long. Value must be shorter or equal to %d%P()",[t])))]):new P(0,[n])}class T extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Ne extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Dt extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}function Fr(e){const t=Gi(e);return t.tag===1?new T(1,[t.fields[0]]):new T(0,[t.fields[0]])}function se(e){const t=e;return t.tag===1?new Ne(1,[t.fields[0]]):new Ne(0,[C(t.fields[0],2)])}function bt(e){const t=e;return t.tag===1?new Dt(1,[t.fields[0]]):new Dt(0,[C(t.fields[0],16)])}function dt(e){const t=le(n=>{try{const r=hn(/^0*([01]+)$/gu,n);return new P(0,[r[1]||""])}catch(r){return new P(1,[r])}},le(n=>Wr(r=>r.length,32,n),le(n=>Cn("^[01]+$",n),le(Mn,new P(0,[e])))));return t.tag===1?new Ne(1,[t.fields[0]]):new Ne(0,[t.fields[0]])}function Ze(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[Q(t.fields[0],511,!1,32,2)])}function Tn(e){const t=le(n=>{try{const r=hn(/^0*([0-9A-Fa-f]+)$/gu,n);return new P(0,[r[1]||""])}catch(r){return new P(1,[r])}},le(n=>Wr(r=>r.length,8,n),le(n=>Cn("^[0-9A-Fa-f]+$",n),le(Mn,new P(0,[e])))));return t.tag===1?new Dt(1,[t.fields[0]]):new Dt(0,[t.fields[0]])}function xn(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[Q(t.fields[0],511,!1,32,16)])}function pe(e,t){return`
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
            </div>`}const Yi=`\r
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
            </div>`;function Qe(e,t,n){const r=je(t)?`${e} の2進法表記を入力してください。`:qe("^[01]+$",t)?"不明なエラーです。":`'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function Vr(e,t,n){const r=je(t)?`${e} の10進法表記を入力してください。`:qe("^[0-9]+$",t)?"不明なエラーです。":`'${t}' は10進数ではありません。使えるのは半角の 0123456789 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function ji(e,t,n){const r=je(t)?`${e} の16進法表記を入力してください。`:qe("^[0-9A-Fa-f]+$",t)?"不明なエラーです。":`'${t}' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function ze(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return m(B(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Gr(e,t){return t.tag===0?H(" ",Je(Oi(e,t.fields[0]))):""}function Ut(e,t){let n,r;const s=Yn(8,"",fe(i=>i,(n=se(new T(0,[e])),n.tag===1?"":n.fields[0]).split(""))),o=Yn(8,"",fe(i=>i,(r=se(new T(0,[t])),r.tag===1?"":r.fields[0]).split("")));Xn((i,a)=>{let l;const u=m(B("firstRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},s),Xn((i,a)=>{let l;const u=m(B("secondRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},o)}function ye(e){const t=e*2500-500|0;return Math.abs(t)|0}function Xr(e,t){return[X(e),1,X(t),void 0]}function Yr(e,t){let n;const r=qt(t);return wn(r)?W([void 0,void 0,void 0,void 0]):qt(Me((n=Re(r),[void 0,void 0,X(n[0]),X(n[1])]),y(s=>[X(e),1,X(s[0]),X(s[1])],In(r))))}function ge(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=yn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:lt});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{A(s=>{document.getElementById(s).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{n&&A(s=>{document.getElementById(s).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}}}function Oe(e,t){return H(e,$(n=>!gt(n),t))}function Ui(e,t){return ce((n,r)=>gr(n,r[0],r[1]),t,e)}function We(e){return Ui(w([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function we(e){return gr(e," ","&nbsp;")}function Ce(e,t){return J(e,"0",t)}function Fe(e){let t;return t=Wi(n=>n!=="0",Rt(Dr(Rt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+Ri(e)}function Xe(e,t,n){return[e(t),e(n)]}function Ot(e,t,n,r){return[e(t),e(n),e(r)]}const jr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ki(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return $e(s,W(1));default:{let i;const a=~~Tr(o)|0;i=Math.pow(2,a),n=$e(s,W(i)),r=o-i;continue e}}}})(Ke(),e)}function kn(e,t){let n,r=0;n=[li(e,t,new st(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?W([o,s]):$e(W([o,s]),kn(o,t))}function Ji(e,t,n,r){return kr(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+ye(t-1),n,r)}function Ur(e,t,n){const r=Me(Xr(e,t),Yr(e,kn(t,e)));let s;const o=y(i=>{const a=z(i[0],""),l=z(i[1],""),u=z(i[2],""),c=z(i[3],"");return m(v("%s%s%s%s"))(a)(l)(u)(c)},Et((i,a)=>[ve(l=>{let u,c;return rt(0,n*(i+1),0,(u=_e((c=ye(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(l)(u)))},a[0]),ve(l=>{let u,c,d,f,p,g,h;return An((u=~~(n/2)+2|0,c=n*i+6|0,d=~~(n/2)|0,f=n*.4,p=n*.8,g=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(f)(p)(g)),"#000000",1,"none",0,_e((h=ye(i)|0,i===0?h+500:h+1500),500))},a[1]),ve(l=>{let u,c;return rt(~~(n/2)*2,n*(i+1),0,(u=we(J(3," ",C(l))),c=_e(ye(i),500),m(v("%s%s"))(u)(c)))},a[2]),ve(l=>{let u;return rt(~~(n/2)*6,n*(i+1),0,(u=_e(500+ye(i),500),m(v("…%d%s"))(l)(u)))},a[3])],r));return s=ce((i,a)=>m(v("%s%s"))(i)(a),Ji(n,te(r),"#191970","#b0e0e6"),o),xr(~~(n/2)*10,n*(te(r)+1),s)}function Zi(e,t){return`
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
                ${Ur(e,t,20)}
            </div>
            `}function Qi(e,t){let n,r,s;const o=H(" + ",y(C,t)),i=H(" + ",(n=y(c=>{let d;return d=Tr(c),~~Math.trunc(d)},t),y((r=m(v("2<sup>%d</sup>")),r),n))),a=H(" + ",y(c=>`${c}<sub>(2)</sub>`,y(c=>c.tag===1?"":c.fields[0],y(c=>se(new T(0,[c])),t))));let l;const u=se(e);return l=u.tag===1?"-1":u.fields[0],m(B(`\r
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
            `,[(s=e,s.tag===1?-1:s.fields[0]),o,i,i,a,a,l]))}function Kr(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${Zi(2,e)}
                <h3>考え方 2</h3>
                ${Qi(new T(0,[e]),Ki(e))}
            </details>
            `}function zi(e,t){const n=(o,i)=>{e:for(;;){const a=o,l=i,u=Cr(),c=u.Next2(a,l)|0,d=u.Next2(a,l)|0;if(c!==d)return[c,d];o=a,i=l;continue e}};let r;const s=n(e,t);return r=Xe(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Jr(e,t){return K(()=>zi(0,e),n=>j(n,t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function ea(e,t){const n=Ze(dt(t));return n.tag===0?ze(e,Fe(Ce(8,t)),2,we(J(3," ",C(n.fields[0]))),10):""}function Zr(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Ur(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function it(e,t,n,r,s,o,i,a,l,u){const c=document.getElementById("numberInput"),d=We(c.value),f=dt(d);if(c.focus(),f.tag===0){document.getElementById("errorArea").innerHTML="";const p=document.getElementById("outputArea"),g=Oe("<br>",w([ea(N(f,u),f.fields[0]),p.innerHTML]));if(p.innerHTML=g,N(f,u)){const h=e(a)|0;document.getElementById("questionSpan").innerText=C(h),document.getElementById("hintArea").innerHTML=t(h),r(h);const b=new T(0,[h]),I=se(b);c.value="";const E=vt(i,Me(h,a));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),it(e,t,n,r,s,o,i,E,b,I)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),it(e,t,n,r,s,o,h,E,b,I)}}}else{const p=l.tag===0?C(l.fields[0]):"";document.getElementById("errorArea").innerHTML=n(p,d,f.fields[0])}}function ta(e,t,n){it(r=>Jr(8,r),Kr,Qe,r=>{Zr(r)},10,2,10,e,t,n)}function Kt(e,t,n,r,s,o,i){const a=e(Ke())|0;document.getElementById("questionSpan").innerText=C(a),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=C(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(a);const l=new T(0,[a]),u=se(l);document.getElementById("submitButton").onclick=c=>{c.preventDefault(),o(W(a),l,u)},document.getElementById("inputArea").onsubmit=c=>{c.preventDefault(),o(W(a),l,u)},n(a),document.getElementById("helpButton").onclick=c=>{A(d=>{document.getElementById(d).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{A(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{A(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=c=>{i(c)}}function na(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(jr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=Se,Kt(t=>Jr(8,t),Kr,t=>{Zr(t)},10,2,(t,n,r)=>{ta(t,n,r)},t=>{ge(t)})}const Qr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function zr(e){return""}function es(e){return K(()=>re(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ra(e,t,n){it(es,zr,Qe,r=>{},10,2,10,e,t,n)}function sa(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(Qr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=Se,Kt(es,zr,t=>{},10,2,(t,n,r)=>{ra(t,n,r)},t=>{ge(t)})}function ts(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const ns=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function oa(){const e=K(()=>{const t=()=>{let n,r;const s=Ze(new Ne(0,[Dr(J(9,"0",(n=se(new T(0,[(r=re(0,8)|0,Math.pow(2,r))])),n.tag===0?n.fields[0]:"")))]));return s.tag===0?s.fields[0]|0:-1};return[t(),t()]},t=>!N(t[0],t[1]));return e[0]+e[1]|0}function ia(e){return H(" + ",Et((t,n)=>{const r=e.length-t-1|0;return m(v("(%c * 2<sup>%d</sup>)"))(n)(r)},Je(e.split(""))))}function aa(e){return Et((t,n)=>[m(B('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],Je(e.split("")))}function la(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function ua(e){const t=ce((n,r)=>ts((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],aa(e));return la(t[0],t[1],t[2])}function rs(e){let t;if(e.tag===0){const n=e.fields[0],r=ia(n);return m(B(`\r
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
            `,[ua(n),n,r,(t=Ze(e),t.tag===1?-1:t.fields[0])]))}else return""}function ss(e){return K(oa,t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ca(e,t,n){let r,s,o;switch(t.tag===0&&n.tag===0?(r=0,s=t.fields[0],o=n.fields[0]):r=1,r){case 0:{const i=Fe(Ce(8,s));return ze(e,we(J(3," ",C(o))),10,i,2)}default:return""}}function on(e,t,n,r,s,o,i){const a=document.getElementById("numberInput"),l=We(a.value),u=Fr(l);if(a.focus(),u.tag===0){document.getElementById("errorArea").innerHTML="";const c=document.getElementById("outputArea"),d=Oe("<br>",w([ca(N(u,i),o,i),c.innerHTML]));if(c.innerHTML=d,N(u,i)){const f=e(s)|0,p=new T(0,[f]),g=se(p);document.getElementById("questionSpan").innerText=Gr(4,g),document.getElementById("hintArea").innerHTML=t(g),a.value="";const h=vt(r,Me(f,s));document.getElementById("submitButton").onclick=b=>{b.preventDefault(),on(e,t,n,r,h,g,p)},document.getElementById("inputArea").onsubmit=b=>{b.preventDefault(),on(e,t,n,r,h,g,p)}}}else{const c=o.tag===0?o.fields[0]:"";document.getElementById("errorArea").innerHTML=Vr(c,l,u.fields[0])}}function jn(e,t,n){on(ss,rs,r=>{},4,e,t,n)}function os(e,t,n,r){const s=e(Ke())|0,o=new T(0,[s]),i=se(o);document.getElementById("questionSpan").innerText=Gr(4,i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("dstRadix").innerText=C(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=a=>{a.preventDefault(),jn(W(s),i,o)},document.getElementById("inputArea").onsubmit=a=>{a.preventDefault(),jn(W(s),i,o)},document.getElementById("helpButton").onclick=a=>{A(l=>{document.getElementById(l).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=a=>{A(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=a=>{A(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=a=>{r(a)}}function da(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(ns,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=Se,os(ss,rs,t=>{},t=>{ge(t)})}const is=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function ma(e){return""}function fa(e){return K(()=>re(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function pa(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(is,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=Se,os(fa,ma,t=>{},t=>{ge(t)})}const as=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ls(e){const t=~~(Math.log(e)/Math.log(2))|0;return m(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function us(e){return K(()=>{const t=re(0,7)|0;return Math.pow(2,t)|0},t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ga(e,t,n){it(us,ls,Qe,r=>{},10,2,4,e,t,n)}function ha(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(as,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=Se,Kt(us,ls,t=>{},10,2,(t,n,r)=>{ga(t,n,r)},t=>{ge(t)})}const cs=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ds(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return m(B(`\r
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
            </details>`,[e,e,e+1,t,e,t,t]))}function ms(e){return K(()=>{let t;return-1+(t=re(0,8)|0,Math.pow(2,t))},t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ba(e,t,n){it(ms,ds,Qe,r=>{},10,2,4,e,t,n)}function ya(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(cs,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=Se,Kt(ms,ds,t=>{},10,2,(t,n,r)=>{ba(t,n,r)},t=>{ge(t)})}const fs=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function wa(){return`\r
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
                </details>`}function Ia(e){let t;const n=-1+Math.pow(2,e)|0,r=K(()=>re(1,n),s=>{const o=se(new T(0,[s]));if(o.tag===0){const i=o.fields[0];return i.length===e&&qe("^1+0+$",i)===!1}else return!1})|0;return[r,(t=n-r|0,K(()=>re(1,t),s=>s!==r&&(s&r)!==0))]}function Ea(e,t){return K(()=>Ia(e),n=>j(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1&&j(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function an(e,t,n,r,s,o,i,a,l,u,c){const d=document.getElementById("numberInput"),f=We(d.value);d.focus();const p=dt(f);if(p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="";const h=n(g),b=Ze(new Ne(0,[g]));if(b.tag===0){const I=b.fields[0]|0,E=we(J(3," ",C(I))),_=document.getElementById("outputArea"),L=Oe("<br>",w([ze(I===a,h,s,E,o),_.innerHTML]));if(_.innerHTML=L,I===a){const M=e(c),R=M[1]|0,Z=M[0]|0;Ut(Z,R),document.getElementById("hintArea").innerHTML=t(),d.value="";const D=vt(i,$e(w([Z,R]),c));document.getElementById("submitButton").onclick=F=>{F.preventDefault(),an(e,t,n,r,s,o,i,Z+R,Z,R,D)},document.getElementById("inputArea").onsubmit=F=>{F.preventDefault(),an(e,t,n,r,s,o,i,Z+R,Z,R,D)}}}}else{const g=b=>{const I=se(new T(0,[b]));return I.tag===1?"":I.fields[0]},h=Qe(m(B("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[g(l),s,g(u),s])),f,p.fields[0]);document.getElementById("errorArea").innerHTML=h}}function va(e,t,n,r,s,o,i,a,l){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(o),document.getElementById("hintArea").innerHTML=t();const u=e(Ke()),c=u[1]|0,d=u[0]|0;Ut(d,c),document.getElementById("submitButton").onclick=f=>{f.preventDefault(),l(e,t,n,r,s,o,i,d+c,d,c,w([d,c]))},document.getElementById("inputArea").onsubmit=f=>{f.preventDefault(),l(e,t,n,r,s,o,i,d+c,d,c,w([d,c]))},document.getElementById("helpButton").onclick=f=>{A(p=>{document.getElementById(p).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=f=>{A(p=>{document.getElementById(p).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=f=>{A(p=>{document.getElementById(p).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=f=>{a(f)}}function Ba(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>加算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(fs,"help-color addition"),document.querySelector("#submitButton").className="submit-button display-order-3 addition",document.querySelector("#questionArea").innerHTML=hr,va(t=>Ea(8,t),wa,t=>Fe(Ce(8,t)),t=>{},2,2,10,t=>{ge(t)},(t,n,r,s,o,i,a,l,u,c,d)=>{an(t,n,r,s,o,i,a,l,u,c,d)})}const ps=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function gs(){const e=re(1,255)|0,t=K(()=>re(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function hs(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function Wt(e,t,n,r){const s=document.getElementById("numberInput"),o=We(s.value);s.focus();const i=dt(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=Fe(Ce(8,a)),u=Ze(new Ne(0,[a]));if(u.tag===0){const c=u.fields[0]|0,d=we(J(3," ",C(c))),f=document.getElementById("outputArea"),p=Oe("<br>",w([ze(c===e,l,2,d,10),f.innerHTML]));if(f.innerHTML=p,c===e){const g=K(gs,_=>j(_[0],r,{Equals:(L,M)=>L===M,GetHashCode:O})===!1&&j(_[1],r,{Equals:(L,M)=>L===M,GetHashCode:O})===!1),h=g[1]|0,b=g[0]|0;Ut(b,h);const I=hs();document.getElementById("hintArea").innerHTML=I,s.value="";const E=_n(0,ke(20,te(r)+1)-1,$e(w([b,h]),r));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),Wt(b-h,b,h,E)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),Wt(b-h,b,h,E)}}}}else{const a=u=>{const c=se(new T(0,[u]));return c.tag===1?"":c.fields[0]},l=Qe(m(B("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[a(t),2,a(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=l}}function _a(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>減算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(ps,"help-color subtraction"),document.querySelector("#submitButton").className="submit-button display-order-3 subtraction",document.querySelector("#questionArea").innerHTML=hr;const t=hs();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=gs(),r=n[1]|0,s=n[0]|0;Ut(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Wt(s-r,s,r,w([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Wt(s-r,s,r,w([s,r]))},document.getElementById("helpButton").onclick=o=>{A(i=>{document.getElementById(i).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{A(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{A(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ge(o)}}const bs=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `,Aa='4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？';function La(e,t,n){return je(t)?`<span class="warning">${e} の補数を、2進法表記で入力してください。</span>`:qe("^[01]+$",t)?'<span class="warning">不明なエラーです。</span>':`<span class="warning">'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`}function ys(e,t){return`
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
            </details>`}function Ft(e,t,n){let r;const s=document.getElementById("numberInput"),o=We(s.value);s.focus();const i=dt(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=Ze(new Ne(0,[a])),u=N(l,new T(0,[t]))?"history history-correct":"history history-wrong",c=Ce(4,a),d=document.getElementById("outputArea"),f=Oe("<br>",w([m(v('<span class ="%s">%s<sub>(%d)</sub></span>'))(u)(c)(2),d.innerHTML]));if(d.innerHTML=f,N(l,new T(0,[t]))){const p=K(()=>re(1,15),E=>j(E,n,{Equals:(_,L)=>_===L,GetHashCode:O})===!1)|0,g=16-p|0,h=J(4,"0",(r=se(new T(0,[p])),r.tag===1?"":r.fields[0]));document.getElementById("questionSpan").innerText=h;const b=Array.from(Rr(E=>E==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=ys(h,b),s.value="";const I=_n(0,ke(8,te(n)+1)-1,Me(p,n));document.getElementById("submitButton").onclick=E=>{E.preventDefault(),Ft(h,g,I)},document.getElementById("inputArea").onsubmit=E=>{E.preventDefault(),Ft(h,g,I)}}}else document.getElementById("errorArea").innerHTML=La(e,o,i.fields[0])}function Sa(){let e;document.title="補数 - taidalab";const t=document.querySelector("header");t.innerHTML=ae,t.className="complement",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>補数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(bs,"help-color complement"),document.querySelector("#submitButton").className="submit-button display-order-3 complement",document.querySelector("#questionArea").innerHTML=Aa;const n=re(1,15)|0,r=16-n|0,s=J(4,"0",(e=se(new T(0,[n])),e.tag===1?"":e.fields[0])),o=Array.from(Rr(i=>i==="1"?"0":"1",s.split(""))).join("");document.getElementById("questionSpan").innerText=s,document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=ys(s,o),document.getElementById("submitButton").onclick=i=>{i.preventDefault(),Ft(s,r,W(n))},document.getElementById("inputArea").onsubmit=i=>{i.preventDefault(),Ft(s,r,W(n))},document.getElementById("helpButton").onclick=i=>{A(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=i=>{A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=i=>{A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=i=>{ge(i)}}const ws=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ma(e,t,n,r){return kr(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+ye(t-1),n,r)}function Is(e,t,n){const r=Me(Xr(e,t),Yr(e,kn(t,e)));let s;const o=y(i=>{const a=z(i[0],""),l=z(i[1],""),u=z(i[2],""),c=z(i[3],"");return m(v("%s%s%s%s"))(a)(l)(u)(c)},Et((i,a)=>[ve(l=>{let u,c;return rt(0,n*(i+1),0,(u=_e((c=ye(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(l)(u)))},a[0]),ve(l=>{let u,c,d,f,p,g,h;return An((u=~~(n/2)*2+4|0,c=n*i+6|0,d=~~(n/2)|0,f=n*.4,p=n*.8,g=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(f)(p)(g)),"#000000",1,"none",0,_e((h=ye(i)|0,i===0?h+500:h+1500),500))},a[1]),ve(l=>{let u,c;return rt(~~(n/2)*3,n*(i+1),0,(u=we(J(3," ",C(l))),c=_e(ye(i),500),m(v("%s%s"))(u)(c)))},a[2]),ve(l=>{let u;return rt(~~(n/2)*7,n*(i+1),0,(u=_e(500+ye(i),500),m(v("…%d%s"))(l)(u)))},a[3])],r));return s=ce((i,a)=>m(v("%s%s"))(i)(a),Ma(n,te(r),"#1e3330","#95feec"),o),xr(~~(n/2)*11,n*(te(r)+1),s)}function Ca(e,t,n){const r=Is(e,t,n);return m(v(`\r
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
                `))(r)}function Ta(e,t,n){const r=Ca(e,t,n);return m(v(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function Es(e){return Ta(16,e,20)}function vs(e){return K(()=>re(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function xa(e,t){const n=xn(Tn(t));return n.tag===0?ze(e,Fe(Ce(8,t)),16,we(J(3," ",C(n.fields[0]))),10):""}function Bs(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Is(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function ln(e,t,n,r,s,o,i,a,l,u,c){const d=document.getElementById("numberInput"),f=We(d.value),p=Tn(f);if(d.focus(),p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="",r(g),we(J(3," ",g));const h=document.getElementById("outputArea"),b=Oe("<br>",w([xa(N(p,c),g),h.innerHTML]));if(h.innerHTML=b,N(p,c)){const I=e(l)|0;document.getElementById("questionSpan").innerText=C(I),document.getElementById("hintArea").innerHTML=t(I),s(I);const E=new T(0,[I]),_=bt(E);d.value="";const L=vt(a,Me(I,l));document.getElementById("submitButton").onclick=M=>{M.preventDefault(),ln(e,t,n,r,s,o,i,a,L,E,_)},document.getElementById("inputArea").onsubmit=M=>{M.preventDefault(),ln(e,t,n,r,s,o,i,I,L,E,_)}}}else{const g=u.tag===0?C(u.fields[0]):"";document.getElementById("errorArea").innerHTML=n(g,f,p.fields[0])}}function Un(e,t,n){ln(vs,Es,ji,r=>Fe(Ce(8,r)),r=>{Bs(r)},10,16,10,e,t,n)}function ka(e,t,n,r,s,o){const i=e(Ke())|0;document.getElementById("questionSpan").innerText=C(i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=C(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(i);const a=new T(0,[i]),l=bt(a);document.getElementById("submitButton").onclick=u=>{u.preventDefault(),Un(W(i),a,l)},document.getElementById("inputArea").onsubmit=u=>{u.preventDefault(),Un(W(i),a,l)},n(i),document.getElementById("helpButton").onclick=u=>{A(c=>{document.getElementById(c).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=u=>{A(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=u=>{A(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=u=>{o(u)}}function $a(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(ws,"help-color dec2hex"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2hex",document.querySelector("#questionArea").innerHTML=Se,ka(vs,Es,t=>{Bs(t)},10,16,t=>{ge(t)})}const _s=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function As(e){return H(" + ",Ht(xi((t,n)=>{let r;return m(B("(%d%P() * 16<sup>%d%P()</sup>)",[(r=xn(Tn(n)),r.tag===1?-1:r.fields[0]),t]))},fe(t=>t,Ht(e)))))}function Pa(e){return Et((t,n)=>[m(B('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],Je(e.split("")))}function qa(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function Ls(e){const t=ce((n,r)=>ts((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Pa(e));return qa(t[0],t[1],t[2])}function Ss(e,t,n){let r,s;return m(B(`<details>\r
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
            </details>`,[n,(r=e,r.tag===1?"-1":r.fields[0]),t,(s=xn(e),s.tag===1?-1:s.fields[0])]))}function Vt(e,t,n){const r=document.getElementById("numberInput"),s=We(r.value);r.focus();const o=Fr(s);if(o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const a=we(J(3," ",C(i))),l=bt(new T(0,[i]));if(l.tag===0){const u=Fe(Ce(2,l.fields[0])),c=document.getElementById("outputArea"),d=Oe("<br>",w([ze(i===e,a,10,u,16),c.innerHTML]));if(c.innerHTML=d,i===e){const f=K(()=>re(0,255),g=>j(g,n,{Equals:(h,b)=>h===b,GetHashCode:O})===!1)|0,p=bt(new T(0,[f]));if(p.tag===0){const g=p.fields[0];document.getElementById("questionSpan").innerText=g;const h=Ss(p,As(g.split("")),Ls(g));document.getElementById("hintArea").innerHTML=h,r.value="";const b=_n(0,ke(10,te(n)+1)-1,Me(f,n));document.getElementById("submitButton").onclick=I=>{I.preventDefault(),Vt(f,g,b)},document.getElementById("inputArea").onsubmit=I=>{I.preventDefault(),Vt(f,g,b)}}}}}else document.getElementById("errorArea").innerHTML=Vr(t,s,o.fields[0])}function Na(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=r=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=r=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=pe(_s,"help-color hex2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 hex2dec",document.querySelector("#questionArea").innerHTML=Se;const t=re(0,255)|0,n=bt(new T(0,[t]));if(n.tag===0){const r=n.fields[0],s=Ss(n,As(r.split("")),Ls(r));document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=m(v("(%d)"))(16),document.getElementById("dstRadix").innerText=C(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=s,document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Vt(t,r,W(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Vt(t,r,W(t))},document.getElementById("helpButton").onclick=o=>{A(i=>{document.getElementById(i).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{A(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{A(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ge(o)}}}function Ha(e,t){return te($(e,t))}function Ra(e,t){let n;const r=vt(e,t);return Ha((n=xt(e,t),s=>N(n,s)),r)|0}function Da(e,t){return $(n=>j(n,t,{Equals:N,GetHashCode:Ue}),e)}function Oa(e,t,n,r){const s=Ye(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const a=Ye(i,t)|0;return o&&a<=0||!o&&a>=0?[i,r(i,e)]:void 0}}function Wa(e,t,n,r,s){const o=Oa(t,n,r,s);return Bt(()=>Nr(o,e))}function $n(e,t,n){return Wa(e,t,n,0,(r,s)=>r+s)}const Ms=`\r
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
    `,Fa=`
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
            ${Ms}
        </div>
        `;function Kn(e,t){return t%e}function Va(e,t){return~~(t/e)}function Ga(e,t,n){const r=t-e|0;return Va(r*3,n)%2===0?ke(e+Kn(r*3,n),t)|0:tn(t-Kn(r*3,n),e)|0}function Zt(e,t,n,r,s,o){return Ga(t,n,(n-t)*e+r*o+s)}function Xa(e,t,n,r,s){const o=w([e,t,n]),i=Mr(o,{Compare:pt})|0,a=Zo(o,{Compare:pt})|0,l=xt(1,Vn(o,{Compare:pt}))-i|0;let u,c;const d=[0,1,2];return c=Ot(f=>{let p;return Ko((p=xt(f,o)|0,g=>p===g),Vn(o,{Compare:pt}))+Ra(f,o)},d[0],d[1],d[2]),u=Ot(f=>xt(f,w([p=>Zt(4,i,a,r,l,p),p=>Zt(0,i,a,r,l,p),p=>Zt(2,i,a,r,l,p)])),c[0],c[1],c[2]),y(f=>[u[0](f),u[1](f),u[2](f)],Je($n(0,1,s)))}function Jn(e,t,n){let r;const s=[e,t,n];return r=Ot(o=>J(2,"0",C(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Ya(e,t){return y(n=>1+e*n,Je($n(1,1,~~((255/t-1)/e))))}function ja(e){return In(qt(y(t=>1-e*t,Je($n(1,1,~~(1/e))))))}function Ua(e,t,n){return m(B(`\r
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
        `,[e,t,n,e,t,n,Jn(e,t,n),e,t,n,Jn(e,t,n)]))}function Ka(e){const t=H(`
`,e);return m(v('<div class="color-row">%s</div>'))(t)}function Cs(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,a=document.getElementById("limitInput").value,l=$(u=>u[2][0]===!1,$e(y(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},y(u=>{let c;return[u[0],u[1],(c=0,[Nt(u[2],511,!0,8,new st(()=>c,d=>{c=d})),c])]},w([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),y(u=>{let c;return[u[0],u[1],(c=0,[Nt(u[2],511,!1,32,new st(()=>c,d=>{c=d|0})),c])]},w([["変化量","stepInput",i],["回数","limitInput",a]]))));if(wn(l)){const u=Q(r,511,!1,32)|0,c=Q(s,511,!1,32)|0,d=Q(o,511,!1,32)|0,f=Xa(u,c,d,Q(i,511,!1,32),Q(a,511,!1,32)),p=tn(tn(u,c),d)|0,g=ja(.1),h=te(g)|0,b=H(`
`,y(Ka,y(M=>y(R=>Ua(R[0],R[1],R[2]),M),y((e=$e(g,Me(1,Ya(.1,p))),M=>y(R=>Ot(Z=>~~(R*Z),M[0],M[1],M[2]),e)),f)))),I=document.getElementById("outputArea");I.innerHTML=b;const E=I.getBoundingClientRect().width;let _;_=Br((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,I.scrollLeft=_*h-(E-_)/2}else{const u=Bn((c,d)=>`${c}<br>${d}`,y(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,l));n.innerHTML=u,document.getElementById(Re(l)[1]).focus()}}function Ve(e,t,n,r,s){ht(o=>o!=="",w([e,t,n,r,s]))&&Cs()}function Ja(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=yn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:lt});switch(e.key){case"\\":{const a=y(l=>document.getElementById(l),w(["rInput","gInput","bInput","stepInput","limitInput"]));o||(z(En(u=>u.value==="",a),Re(a)).focus(),e.preventDefault());break}case"?":{A(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let f,p=0;if(f=[Nt(d.value,511,!1,32,new st(()=>p,g=>{p=g|0})),p],f[0]){const g=f[1]|0;g<2147483647&&(d.value=C(g+1),Ve(a.value,l.value,u.value,c.value,d.value))}}break}case"-":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let f,p=0;if(f=[Nt(d.value,511,!1,32,new st(()=>p,g=>{p=g|0})),p],f[0]){const g=f[1]|0;g>0&&(d.value=C(g-1),Ve(a.value,l.value,u.value,c.value,d.value))}}break}}break}}}function Za(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>色いろいろ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Fa,document.querySelector("#submitButton").className="submit-button iro-iroiro",document.getElementById("submitButton").onclick=i=>{Cs()},A(i=>{document.getElementById(i).onclick=a=>{A(l=>{document.getElementById(l).classList.toggle("active")},w(["helpWindow","helpBarrier"]))}},w(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{Ja(i)}}class Qa extends He{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return m(v("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function Ts(e,t,n,r){return new Qa(e,t,n,r)}function yt(e){const t=bn(n=>Q(n,511,!0,8),e.split("."),Uint8Array);return Ts(Be(0,t),Be(1,t),Be(2,t),Be(3,t))}function un(e){return Vi(yt,le(t=>ht(n=>n>=0?n<=255:!1,y(n=>Q(n,511,!1,32),ie(".",t)))?new P(0,[t]):new P(1,[new Error("str",`${t} is out of range. Each value must be within 0 and 255`)]),le(t=>Cn("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),le(Xi,le(Mn,new P(0,[e]))))))}function xs(e,t){return Ts(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class V extends He{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return m(v("X = %f; Y = %f"))(t.X)(t.Y)}}function et(e,t){return new V(e,t)}function Ge(e){const t=bn(Le,e.split(","),Float64Array);return et(Br(t),Po(t))}function za(e){return m(v("%f,%f"))(e.X)(e.Y)}function Pn(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function de(e,t,n){return new V(n.X+e,n.Y+t)}function Zn(e,t){return(e.Y>t.Y?1:0)|(e.Y<t.Y?2:0)|(e.X>t.X?4:0)|(e.X<t.X?8:0)}class G extends He{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return m(v("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function _t(e,t,n,r){return new G(e,t,n,r)}function el(e,t){let n,r;return _t(ke(e.X,t.X),ke(e.Y,t.Y),(n=e.X-t.X,Math.abs(n)),(r=e.Y-t.Y,Math.abs(r)))}function tl(e,t,n){return new G(n.X,n.Y,n.Width+e,n.Height+t)}function nl(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class me extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function rl(e){switch(e){case"Client":return new me(0,[]);case"Server":return new me(1,[]);case"Router":return new me(2,[]);case"Hub":return new me(3,[]);case"ProxyServer":return new me(4,[]);case"LANCable":return new me(5,[]);default:return}}class sl extends He{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function tt(e,t,n,r,s,o){const i=yt(n),a=yt(r);return new sl(e,t,i,a,xs(a,i),s,o)}function ol(e){let t,n,r,s;const o=e.id;return tt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),_t(n.left,n.top,n.width,n.height)),et(Le((r=Pe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Le((s=Pe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ks(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","100");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z"),o.setAttribute("fill","none"),o.setAttribute("stroke","#000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,60 l -15,30 l 90,0 l -15,-30"),i.setAttribute("fill","none"),i.setAttribute("stroke","#000"),i.setAttribute("stroke-width","5");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 25,63 l  -9,20 l 68,0 l  -9,-20  z"),a.setAttribute("fill","#000"),a.setAttribute("stroke","#000"),a.setAttribute("stroke-width","1");const l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000"),l.setAttribute("stroke-width","0"),l.setAttribute("x","23.40522"),l.setAttribute("y","19.58995"),l.setAttribute("font-size","6"),l.setAttribute("font-family","Noto Sans JP"),l.setAttribute("text-anchor","start"),l.setAttribute("xml:space","preserve"),l.textContent="PS C:\\>_";const u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("fill","none"),u.setAttribute("stroke","#fff"),u.setAttribute("x1","20.85"),u.setAttribute("y1","70"),u.setAttribute("x2","79.15"),u.setAttribute("y2","70");const c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("x1","17.7"),c.setAttribute("y1","77"),c.setAttribute("x2","82.3"),c.setAttribute("y2","77");const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("x1","34.7"),d.setAttribute("y1","61.5"),d.setAttribute("x2","29.3"),d.setAttribute("y2","84.5");const f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("fill","none"),f.setAttribute("stroke","#fff"),f.setAttribute("x1","44.9"),f.setAttribute("y1","61.5"),f.setAttribute("x2","43.1"),f.setAttribute("y2","84.5");const p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("x1","55.1"),p.setAttribute("y1","61.5"),p.setAttribute("x2","56.9"),p.setAttribute("y2","84.5");const g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("fill","none"),g.setAttribute("stroke","#fff"),g.setAttribute("x1","65.3"),g.setAttribute("y1","61.5"),g.setAttribute("x2","70.7"),g.setAttribute("y2","84.5"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),r.appendChild(c),r.appendChild(d),r.appendChild(f),r.appendChild(p),r.appendChild(g),n.appendChild(r);const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}Name`,b.className="device-prop",b.contentEditable="true",b.textContent=`${e.Name}`;const I=document.createElement("br"),E=document.createElement("span");E.id=`${e.Id}IPv4`,E.className="device-prop ipv4 mono",E.contentEditable="true",E.textContent=`${x(e.IPv4)}`;const _=document.createElement("br"),L=document.createElement("span");L.id=`${e.Id}SubnetMask`,L.className="device-prop subnetmask mono",L.contentEditable="true",L.textContent=`${x(e.SubnetMask)}`;const M=document.createElement("span");return M.id=`${e.Id}Kind`,M.className="no-display",M.textContent="Client",t.appendChild(n),t.appendChild(h),t.appendChild(b),t.appendChild(I),t.appendChild(E),t.appendChild(_),t.appendChild(L),t.appendChild(M),t}class il extends He{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function kt(e,t,n,r,s,o){const i=y(yt,y(l=>l.trim(),ie(";",n))),a=y(yt,y(l=>l.trim(),ie(";",r)));return new il(e,t,i,a,jo(xs,a,i),s,o)}function al(e){let t,n,r,s;const o=e.id;return kt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),_t(n.left,n.top,n.width,n.height)),et(Le((r=Pe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Le((s=Pe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function $s(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#000000"),o.setAttribute("stroke","#000000");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#ffffff"),i.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#ffffff"),a.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#ffffff"),l.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#ffffff"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const f=document.createElement("br"),p=document.createElement("span");p.id=`${e.Id}IPv4`,p.className="device-prop ipv4 mono",p.contentEditable="true";const g=H("; ",y(x,e.IPv4));p.textContent=g;const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}SubnetMask`,b.className="device-prop subnetmask mono",b.contentEditable="true";const I=H("; ",y(x,e.SubnetMask));b.textContent=I;const E=document.createElement("span");return E.id=`${e.Id}Kind`,E.className="no-display",E.textContent="Router",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(f),t.appendChild(p),t.appendChild(h),t.appendChild(b),t.appendChild(E),t}class ll extends He{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return m(v("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function cn(e,t,n,r){return new ll(e,t,n,r)}function ul(e){let t,n,r,s;const o=e.id;return cn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),_t(n.left,n.top,n.width,n.height)),et(Le((r=Pe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Le((s=Pe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Ps(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#ffffff"),o.setAttribute("stroke","#000000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#000000"),i.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#000000"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const f=document.createElement("span");return f.id=`${e.Id}Kind`,f.className="no-display",f.textContent="Hub",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(f),t}class be extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function Lt(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new be(0,[ol(e)]);case"Router":return new be(1,[al(e)]);case"Hub":return new be(2,[ul(e)]);default:return}}function cl(e){switch(e.tag){case 1:return $s(e.fields[0]);case 2:return Ps(e.fields[0]);default:return ks(e.fields[0])}}function Qt(e){return e.tag===0}function $t(e){return e.tag===1}function dn(e){return e.tag===2}function Qn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function qs(e,t){switch(t.tag){case 0:return N(t.fields[0].IPv4,e);case 1:return j(e,t.fields[0].IPv4,{Equals:N,GetHashCode:ar});default:return!1}}function zn(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return Ke();default:return W(e.fields[0].NetworkAddress)}}function dl(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function mn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}class ml extends He{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=x(t.Kind),r=H(" ",y(x,t.Points));return m(v("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function nt(e,t,n,r,s,o){return new ml(e,t,n,r,s,o)}function fn(e){let t,n,r;const s=e.id,o=document.getElementById(s+"Name").innerText,i=rl(document.getElementById(s+"Kind").innerText);let a;const u=document.getElementById(s+"Svg").getBoundingClientRect();a=_t(u.left,u.top,u.width,u.height);const c=y(Ge,ie(" ",(t=document.getElementById(s+"Polyline"),t.getAttribute("points")))),d=et(Le((n=Pe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),n[1]||"")),Le((r=Pe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")));if(i!=null)return nt(s,i,o,c,a,d)}function er(e){const t=document.createElement("div");t.id=e.Id,t.className="device cable-container lan-cable",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device"),n.classList.add("device"),n.setAttribute("viewBox",m(B("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",m(B("%f%P()px",[e.Area.Width]))),n.setAttribute("height",m(B("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${H(" ",y(za,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),a=document.createElement("span");a.id=`${e.Id}Name`,a.className="no-display",a.textContent=`${e.Name}`;const l=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent=`${x(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}function pn(e,t){let n;const r=y(s=>de(t.Area.X,t.Area.Y,s),t.Points);return nn((n=dl(e),s=>nl(n,s)),r)}function fl(e,t,n){const r=Yt(n),s=Lr($(o=>!dn(o),n));return Yo(o=>$(i=>dn(i)||$t(r)?!0:s!=null?!N(Da(zn(s),zn(i)),Ke()):!1,$(i=>pn(i,o),$(i=>j(i,n,{Equals:N,GetHashCode:ar})===!1,t))),$(o=>pn(r,o),e))}function pl(e,t,n){return y(r=>$e(n,W(r)),fl(e,t,n))}function gl(e,t,n,r,s){const o=(i,a,l,u,c)=>{const d=pl(i,a,c);return nn(f=>qs(u,f),y(Yt,d))?!0:l===0?!1:nn(so(o)(i)(a)(l-1)(u),d)};return o(e,t,n,r,W(s))}const Ns=`\r
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
    `,hl=`
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
            ${Ns}
        </div>
        `;function Hs(e,t,n){const r=n,s=r.pageY-t.getBoundingClientRect().height/2,o=r.pageX-t.getBoundingClientRect().width/2,i=m(v("top: %fpx; left: %fpx;"))(s)(o);e.setAttribute("style",i)}function St(e){const t=document.getElementById(e.id+"Svg");t.ondragstart=r=>{r.preventDefault()};const n=r=>{Hs(e,t,r)};t.onmousedown=r=>{document.addEventListener("mousemove",n),t.onmouseup=s=>{document.removeEventListener("mousemove",n)}}}function Mt(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Ct(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function zt(e){A(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=r.innerText,i=un(o),a=document.getElementById("errorArea");if(a.innerText="",i.tag===1){const l=document.getElementById(e.id+"Name").innerText,u=gt(o)?`${l} の ${n} を入力してください。`:je(o)?`${l} の ${n} を入力してください。`:qe("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",o)?ht(c=>c>=0?c<=255:!1,y(c=>Q(c,511,!1,32),ie(".",o)))?"不明なエラーです。":`${l} の ${n} の数値の範囲が正しくありません。`:`${l} の ${n} の形式が正しくありません。`;a.innerText=u,setTimeout(()=>{r.focus()},0)}})},y(t=>[t,document.getElementById(e.id+t)],w(["IPv4","SubnetMask"])))}function Tt(e,t,n){let r;const s=[e,t];return r=Xe(o=>Pn(n,o),s[0],s[1]),r[0]<=r[1]?[e,de(n.X-e.X,n.Y-e.Y,t)]:[e,n]}function bl(e,t,n){let r;const s=[e,t];return r=Xe(o=>Pn(n,o),s[0],s[1]),r[0]<=r[1]?[e,t]:[t,e]}function yl(e,t,n,r){let s,o,i,a,l,u;const c=r;let d;const f=y(Ge,ie(" ",n.getAttribute("points")));d=[Re(f),Yt(f)];const p=et(c.pageX-e.offsetLeft,c.pageY-e.offsetTop),g=bl(d[0],d[1],p),h=g[1],b=g[0],I=p.X-b.X,E=p.Y-b.Y,_=Zn(h,b)|0,L=_===1?[b,de(-I,-E,h)]:_===2?Tt(h,b,p):_===4?[b,de(-I,-E,h)]:_===8?Tt(h,b,p):_===5?[b,de(-I,-E,h)]:_===9?[de(0,-E,h),de(I,0,b)]:_===6?[de(0,E,b),de(-I,0,h)]:Tt(h,b,p),M=5-(s=(o=L,Xe(Ie=>Ie.X,o[0],o[1])),ke(s[0],s[1])),R=5-(i=(a=L,Xe(Ie=>Ie.Y,a[0],a[1])),ke(i[0],i[1]));let Z,D;const F=L;D=Xe(Ie=>de(M,R,Ie),F[0],F[1]);const he=D[0],oe=D[1];Z=m(B("%f%P(),%f%P() %f%P(),%f%P()",[he.X,he.Y,oe.X,oe.Y])),n.setAttribute("points",Z);const U=tl(5*2,5*2,(l=(u=L,Xe(Ie=>de(M,R,Ie),u[0],u[1])),el(l[0],l[1])));switch(t.setAttribute("viewBox",m(B("0 0 %f%P() %f%P()",[U.Width,U.Height]))),t.setAttribute("width",m(B("%f%P()px",[U.Width]))),t.setAttribute("height",m(B("%f%P()px",[U.Height]))),_){case 1:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}case 4:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}default:_===5?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I]))):_===9?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft]))):_===6&&e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop,e.offsetLeft+I])))}const At=Zn(L[0],L[1])|0;switch(At){case 1:{t.setAttribute("width",m(B("%f%P()px",[U.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[U.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}case 4:{t.setAttribute("width",m(B("%f%P()px",[U.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[U.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}default:At===5&&(t.setAttribute("width",m(B("%f%P()px",[U.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[U.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I]))))}}function tr(e){if(fn(e)!=null){const n=document.getElementById(e.id+"Svg");n.ondragstart=r=>{r.preventDefault()},n.onmousedown=r=>{let s;const o=fn(document.getElementById(e.id));if(o!=null){const l=o.Points;s=[Re(l),Yt(l)]}else s=[void 0,void 0];const i=et(r.offsetX,r.offsetY);let a;if(Mr(y(l=>Pn(i,l),y(S,$(l=>l!=null,w([s[0],s[1]])))),{Compare:pt})<5){const l=document.getElementById(e.id+"Polyline");a=u=>{yl(e,n,l,u)}}else a=l=>{Hs(e,n,l)};document.addEventListener("mousemove",a),n.onmouseup=l=>{document.removeEventListener("mousemove",a)}}}}function nr(e){e.oncontextmenu=t=>{t.preventDefault(),document.getElementById("playArea").removeChild(e)}}function wl(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],a=i[0];return`
        <div class="history-container ${a}"">
            ${i[1]}<span class ="${a}">${mn(e)} [${s=t,x(s)}] -> ${o=n,x(o)} ${i[2]}</span>
        </div>
        `}function Il(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=yn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:lt});switch(e.key){case"\\":{const a=y(l=>document.getElementById(l),w(["sourceInput","destinationInput"]));o||(z(En(u=>u.value==="",a),Re(a)).focus(),e.preventDefault());break}case"?":{A(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}break}}}function El(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=c=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=c=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=hl,document.querySelector("#submitButton").className="submit-button network-simulator",document.getElementById("helpButton").onclick=c=>{A(d=>{document.getElementById(d).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{A(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{A(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))};const n=document.getElementById("playArea").getBoundingClientRect(),r=w([new be(0,[tt("device1","クライアント(1)","10.0.0.1","255.255.255.0",new G(0,0,100,100),new V(0+n.left,100+n.top))]),new be(0,[tt("device2","クライアント(2)","10.0.0.2","255.255.255.0",new G(0,0,100,100),new V(150+n.left,100+n.top))]),new be(1,[kt("device3","ルータ(1)","10.0.0.254","255.255.255.0",new G(0,0,100,35),new V(300+n.left,100+n.top))]),new be(0,[tt("device4","クライアント(3)","10.0.1.18","255.255.255.240",new G(0,0,100,100),new V(450+n.left,100+n.top))]),new be(0,[tt("device5","クライアント(4)","10.0.1.19","255.255.255.240",new G(0,0,100,100),new V(600+n.left,100+n.top))]),new be(1,[kt("device6","ルータ(2)","10.0.1.30","255.255.255.240",new G(0,0,100,35),new V(750+n.left,100+n.top))]),new be(2,[cn("device7","ハブ(1)",new G(0,0,100,35),new V(900+n.left,100+n.top))])]);y(c=>document.getElementById("playArea").appendChild(c),y(cl,r));const s=w([nt("lancable1",new me(5,[]),"LANケーブル(1)",y(Ge,ie(" ","5,5 195,45")),new G(0,0,200,50),new V(100+n.left,30+n.top)),nt("lancable2",new me(5,[]),"LANケーブル(2)",y(Ge,ie(" ","5,5 195,45")),new G(0,0,200,50),new V(300+n.left,30+n.top)),nt("lancable3",new me(5,[]),"LANケーブル(3)",y(Ge,ie(" ","5,5 195,45")),new G(0,0,200,50),new V(500+n.left,30+n.top)),nt("lancable4",new me(5,[]),"LANケーブル(4)",y(Ge,ie(" ","5,5 195,45")),new G(0,0,200,50),new V(700+n.left,30+n.top))]);y(c=>document.getElementById("playArea").appendChild(c),y(er,s)),A(c=>{St(c),Mt(c),Ct(c)},y(c=>document.getElementById(c),y(Qn,r))),A(c=>{zt(c)},y(c=>document.getElementById(c),y(Qn,$(c=>Qt(c)?!0:$t(c),r)))),A(c=>{tr(c),nr(c)},y(c=>document.getElementById(c),y(c=>c.Id,s)));const o=document.getElementById("submitButton");o.onclick=c=>{let d,f,p,g,h;c.preventDefault();const b=y(S,$(D=>D!=null,y(Lt,w((d=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(d)))))),I=y(S,$(D=>D!=null,y(fn,w((f=document.getElementById("playArea").getElementsByClassName("cable-container"),Array.from(f)))))),E=document.getElementById("errorArea"),_=document.getElementById("outputArea");E.innerText="",_.innerText="";const L=document.getElementById("sourceInput"),M=document.getElementById("destinationInput"),R=un(L.value),Z=un(M.value);if(R.tag===0){const D=R.fields[0];if(Z.tag===0){const F=Z.fields[0],he=En(oe=>qs(D,oe),$(oe=>Qt(oe)?!0:$t(oe),b));if(he!=null){const oe=he;if(wn($(U=>pn(oe,U),I)))E.innerText=(p=mn(oe),g=x(D),m(v("%s [%s] はLANケーブルに繋がっていません。"))(p)(g));else{let U;const At=mn(oe),Ie=x(D),Rs=x(F);U=m(v('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(At)(Ie)(Rs),_.innerHTML=U;const Ds=wl(oe,D,F,gl(I,b,128,F,oe));switch(_.innerHTML=Ds,document.activeElement.id){case"sourceInput":{L.focus();break}case"destinationInput":{M.focus();break}}}}else E.innerText=(h=x(D),m(v("IPv4 %s を持つデバイスが見つかりません。"))(h)),L.focus()}else{const F=gt(M.value)||je(M.value)?"送信先 IPv4 を入力してください。":qe("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",M.value)?ht(he=>he>=0?he<=255:!1,y(he=>Q(he,511,!1,32),ie(".",M.value)))?"不明なエラーです。":"送信先 IPv4 の数値の範囲が正しくありません。":"送信先 IPv4 の形式が正しくありません。";E.innerText=F,M.focus()}}else{const D=gt(L.value)||je(L.value)?"送信元 IPv4 を入力してください。":qe("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",L.value)?ht(F=>F>=0?F<=255:!1,y(F=>Q(F,511,!1,32),ie(".",L.value)))?"不明なエラーです。":"送信元 IPv4 の数値の範囲が正しくありません。":"送信元 IPv4 の形式が正しくありません。";E.innerText=D,L.focus()}};const i=document.getElementById("addClientButton");i.onclick=c=>{let d,f;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=te($(Qt,y(S,$(E=>E!=null,y(Lt,w((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,I=m(B("client%d%P()",[b]));f=ks(tt(I,m(B("クライアント(%d%P())",[b])),"10.0.0.1","255.255.255.0",new G(0,0,100,100),new V(0+g.left,0+g.top))),p.insertBefore(f,h),St(document.getElementById(I)),Mt(document.getElementById(I)),Ct(document.getElementById(I)),zt(document.getElementById(I))};const a=document.getElementById("addRouterButton");a.onclick=c=>{let d,f,p;const g=document.getElementById("playArea"),h=g.getBoundingClientRect(),b=g.getElementsByClassName("cable-container").item(0),I=te($($t,y(S,$(_=>_!=null,y(Lt,w((d=g.getElementsByClassName("device-container"),Array.from(d))))))))|0,E=m(B("router%d%P()",[I+1]));f=$s((p=I|0,kt(E,m(B("ルータ(%d%P())",[p+1])),`10.0.${p}.254`,"255.255.255.0",new G(0,0,100,35),new V(0+h.left,0+h.top)))),g.insertBefore(f,b),St(document.getElementById(E)),Mt(document.getElementById(E)),Ct(document.getElementById(E)),zt(document.getElementById(E))};const l=document.getElementById("addHubButton");l.onclick=c=>{let d,f;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=te($(dn,y(S,$(E=>E!=null,y(Lt,w((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,I=m(B("hub%d%P()",[b]));f=Ps(cn(I,m(B("ハブ(%d%P())",[b])),new G(0,0,100,35),new V(0+g.left,0+g.top))),p.insertBefore(f,h),St(document.getElementById(I)),Mt(document.getElementById(I)),Ct(document.getElementById(I))};const u=document.getElementById("addLANCableButton");u.onclick=c=>{let d;const f=document.getElementById("playArea"),p=f.getBoundingClientRect(),g=f.getElementsByClassName("cable-container").length+1|0,h=m(B("cable%d%P()",[g]));d=er(nt(h,new me(5,[]),m(B("LANケーブル(%d%P())",[g])),y(Ge,ie(" ","5,5 195,45")),new G(0,0,200,50),new V(0+p.left,0+p.top))),f.appendChild(d);const b=document.getElementById(h);tr(b),nr(b)},document.onkeydown=c=>{Il(c)}}const vl=`
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
                ${jr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Qr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${ns}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${is}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${as}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${cs}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${fs}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${ps}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${bs}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${ws}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${_s}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${Ms}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${Ns}
            </dd>
        </dl>`;function Bl(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=wt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>about - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=vl,document.onkeydown=t=>{}}const _l=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function Al(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=wt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ご利用について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=_l,document.onkeydown=t=>{}}const Ll=`\r
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
        </p>`;function Sl(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=wt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ll,document.onkeydown=t=>{}}function rr(e){const t=document.getElementById("numberInput"),n=We(t.value),r=dt(n);if(t.focus(),r.tag===0){document.getElementById("errorArea").innerHTML="";const s=Fe(Ce(9,r.fields[0])),o=Ze(r);if(o.tag===0){const i=o.fields[0]|0,a=we(J(3," ",C(i))),l=document.getElementById("outputArea"),u=Oe("<br>",w([ze(i===e,s,2,a,10),l.innerHTML]));l.innerHTML=u,i!==e||(window.history.replaceState(xe(),"","http://localhost:8080/taidalab/"),Er())}}else document.getElementById("errorArea").innerHTML=Qe(C(e),n,r.fields[0])}function Ml(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=wt,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Yi,document.querySelector("#submitButton").className="submit-button display-order-3 not-found",document.querySelector("#questionArea").innerHTML=Se,document.getElementById("questionSpan").innerText=C(404),document.getElementById("srcRadix").innerText=m(v("(%d)"))(10),document.getElementById("dstRadix").innerText=C(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),rr(404)},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),rr(404)}}function qn(e){switch(e.pathname){case"/taidalab/":{Er();break}case"/taidalab/endless-binary/dec2bin-1/":{na();break}case"/taidalab/endless-binary/dec2bin-2/":{sa();break}case"/taidalab/endless-binary/bin2dec-1/":{da();break}case"/taidalab/endless-binary/bin2dec-2/":{pa();break}case"/taidalab/endless-binary/power-of-two-1/":{ha();break}case"/taidalab/endless-binary/power-of-two-2/":{ya();break}case"/taidalab/endless-binary/addition/":{Ba();break}case"/taidalab/endless-binary/subtraction/":{_a();break}case"/taidalab/endless-binary/complement/":{Sa();break}case"/taidalab/endless-binary/dec2hex/":{$a();break}case"/taidalab/endless-binary/hex2dec/":{Na();break}case"/taidalab/iro-iroiro/":{Za();break}case"/taidalab/network-simulator/":{El();break}case"/taidalab/about/":{Bl();break}case"/taidalab/terms/":{Al();break}case"/taidalab/information-policy/":{Sl();break}default:Ml()}}function Nn(){let e;const t=document.querySelector("aside").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==yr).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function Hn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState(xe(),"",e.href),qn((n=e.href,new URL(n))),console.log(new URL(e.href)),Nn();let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return Ir((l=a.href,new URL(l)))}),r.forEach(a=>{Hn(a)})}}function Cl(){document.body.innerHTML="",document.body.innerHTML=vo,document.querySelector("footer").innerHTML=Ao,document.querySelector("aside").innerHTML=Bo}window.addEventListener("DOMContentLoaded",e=>{let t;Cl();const n=wr((t=window.location.href,new URL(t)));window.history.replaceState(xe(),"",n.href),qn(n),wo(v("%s"))(br),console.log(n);let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return Ir((l=a.href,new URL(l)))}),r.forEach(a=>{Hn(a)}),Nn()});window.addEventListener("popstate",e=>{let t;const n=wr((t=window.location.href,new URL(t)));window.history.replaceState(xe(),"",n.href),qn(n),console.log(n);let r,s;const o=document.querySelector("aside").querySelectorAll("a");s=Array.from(o),r=s.filter(i=>i.href!==""),r.forEach(i=>{Hn(i)}),Nn()});
