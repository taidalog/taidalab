(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Ce(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Ns(e){return e!=null&&typeof e.GetEnumerator=="function"}function ks(e){return e!=null&&typeof e.CompareTo=="function"}function xs(e){return e!=null&&typeof e.Equals=="function"}function rr(e){return e!=null&&typeof e.GetHashCode=="function"}function Rs(e){return e!=null&&typeof e.Dispose=="function"}function Z(e){Rs(e)&&e.Dispose()}function Se(){return null}function $t(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class Ds{constructor(t){this.iter=t,this.current=Se()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Ee(e){return Ns(e)?e.GetEnumerator():new Ds(e[Symbol.iterator]())}function sr(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function Rn(e,t){return e.toString(10).padStart(t,"0")}function Dn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function T(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class he{static id(t){return he.idMap.has(t)||he.idMap.set(t,++he.count),he.idMap.get(t)}}he.idMap=new WeakMap;he.count=0;function tt(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function O(e){return e*2654435761|0}function or(e){return tt(e.toString(32))}function Wt(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Os(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return or(e);case"string":return tt(e);default:return O(he.id(e))}}function Ws(e){return rr(e)?e.GetHashCode():Os(e)}function Fs(e){return e.getTime()}function Vs(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Te(e[r]);return Wt(n)}function Te(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return or(e);case"string":return tt(e);default:{if(rr(e))return e.GetHashCode();if(Ce(e))return Vs(e);if(e instanceof Date)return Fs(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Te(r));return Wt(n)}else return O(he.id(e))}}}function ir(e){return Ws(e)}function Gs(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function ar(e,t){return Gs(e,t,N)}function js(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!N(e[n[s]],t[r[s]]))return!1;return!0}function N(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:xs(e)?e.Equals(t):Ce(e)?Ce(t)&&ar(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&lr(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&js(e,t)}function lr(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Dn(e),r=t.getTime()+Dn(t)),n===r?0:n<r?-1:1}function vt(e,t){return e===t?0:e<t?-1:1}function Xs(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function ur(e,t){return Xs(e,t,Oe)}function Ys(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=Oe(e[i],t[i]),o!==0)return o}return 0}function Oe(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:ks(e)?e.CompareTo(t):Ce(e)?Ce(t)?ur(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?lr(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?Ys(e,t):-1}const Us=new WeakMap;function Ks(e){return Us.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function zs(e){let t=0,n="[";for(const r of e){if(t===0)n+=H(r);else if(t===100){n+="; ...";break}else n+="; "+H(r);t++}return n+"]"}function H(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return zs(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+H(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function Zs(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=H(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>H(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class nt{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Zs(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Te(n));return t.splice(0,0,O(this.tag)),Wt(t)}Equals(t){return this===t?!0:$t(this,t)&&this.tag===t.tag?ar(this.fields,t.fields):!1}CompareTo(t){return this===t?0:$t(this,t)?this.tag===t.tag?ur(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Js(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function Qs(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+H(n)).join(`
  `)+" }"}function eo(e){const t=Object.values(e).map(n=>Te(n));return Wt(t)}function to(e,t){if(e===t)return!0;if($t(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!N(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function no(e,t){if(e===t)return 0;if($t(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=Oe(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class qe{toJSON(){return Js(this)}toString(){return Qs(this)}GetHashCode(){return eo(this)}Equals(t){return to(this,t)}CompareTo(t){return no(this,t)}}class Ze{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}const ro="https://taidalog.github.io",E="/taidalab/";function cr(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),H(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+H(s))}else return e}function so(e,t){return t.origin===e?t.pathname.startsWith(E):!1}function bn(e){return so(ro,e)}const oo=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <aside></aside>\r
                    <main></main>\r
                </div>\r
                <footer></footer>\r
            </div>`,re=`\r
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
            `,gt=`\r
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
            `,io=`
            <ul>
                <details>
                    <summary>
                        <a class="home" id="asideEndlessBinary">10進数↔︎2進数の反復練習</a>
                    </summary>
                    <ul>
                        <li><a class="dec2bin" href="${E}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>
                        <li><a class="dec2bin" href="${E}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>
                        <li><a class="bin2dec" href="${E}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>
                        <li><a class="bin2dec" href="${E}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>
                        <li><a class="power-of-two" href="${E}endless-binary/power-of-two-1/">2のn乗</a></li>
                        <li><a class="power-of-two" href="${E}endless-binary/power-of-two-2/">2のn乗-1</a></li>
                        <li><a class="addition" href="${E}endless-binary/addition/">加算</a></li>
                        <li><a class="subtraction" href="${E}endless-binary/subtraction/">減算</a></li>
                        <li><a class="complement" href="${E}endless-binary/complement/">補数</a></li>
                        <li><a class="dec2hex" href="${E}endless-binary/dec2hex/">10進数→16進数</a></li>
                        <li><a class="hex2dec" href="${E}endless-binary/hex2dec/">16進数→10進数</a></li>
                    </ul>
                </details>
                <li><a class="iro-iroiro" id="asideIroIroiro" href="${E}iro-iroiro/">色いろいろ</a></li>
                <li><a class="network-simulator" id="asideNetworkSimulator" href="${E}network-simulator/">ネットワークシミュレータ</a></li>
                <li><a class="ctc" id="asideSoon" href="#">Coming soon...</a></li>
            </ul>
            <ul>
                <li><a class="home" id="asideAbout" href="${E}">Home</a></li>
                <li><a class="home" id="asideAbout" href="${E}about/">About</a></li>
                <li><a class="home" id="asideTerms" href="${E}terms/">ご利用について</a></li>
                <li><a class="home" id="asideTerms" href="${E}information-policy/">情報の外部送信について</a></li>
            </ul>
            `,ve='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',ao="Version 5.1.0",lo=`
            <div>
                <small translate="no">&copy; 2022-2025 <a href="https://taidalog.github.io/">taidalog</a></small>
                <small translate="no"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">${ao}</a></small>
                <small><a class="home" href="https://odaibako.net/u/taidalog">お題箱</a></small>
                <small translate="no"><a class="home" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></small>
                <small>Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</small>
            </div>
            `,dr=`\r
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
            </div>`,uo=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function mr(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1 translate="no">taidalab</h1>',document.querySelector("main").innerHTML=uo,document.onkeydown=t=>{}}const rt=Symbol("numeric");function co(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[rt])}function mo(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function fo(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[rt]().multiply(t)}function po(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[rt]().toFixed(t)}function On(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[rt]().toPrecision(t)}function Wn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[rt]().toExponential(t)}function Fn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[rt]().toHex()}function go(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+Rn(n,2)+":"+Rn(r,2)}function ho(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+go(e.offset??0)}function yo(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function bo(e,t,n){return e.offset!=null?ho(e):yo(e)}function In(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function Io(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function fr(e,t,n=0){return e.lastIndex=n,e.test(t)}function wn(e,t,n=0){return e.lastIndex=n,e.exec(t)}const lt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,ut=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function wo(e,t){return mo(e,t)<0}function I(e){return{input:e,cont:vo(e)}}function v(e,t){let n=0,r=0,s="";ut.lastIndex=0;let o=ut.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,a,l,u,c]=o;r=ut.lastIndex,s+=pr(t[n++],a,l,u,c),ut.lastIndex=r-1,o=ut.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function Eo(e,t){return typeof t=="string"?e(t):t.cont(e)}function m(e){return Eo(t=>t,e)}function pr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",co(e))switch(s.toLowerCase()!=="x"&&(wo(e,0)?(e=fo(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=po(e,r);break;case"g":case"G":e=r!=null?On(e,r):On(e);break;case"e":case"E":e=r!=null?Wn(e,r):Wn(e);break;case"x":e=Fn(e);break;case"X":e=Fn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=bo(e):e=H(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,a=t.indexOf("-")>=0,l=a||!i?" ":"0";l==="0"?(e=en(e,n-o.length,l,a),e=o+e):e=en(o+e,n,l,a)}return e}function gr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const a=t.slice(),l=n.slice();for(const u of o){const[,,c,f,d,p]=l[0];let g=f;if(s>=0)g=s,s=-1;else if(g==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=a[0],i+=pr(u,c,g,d,p),a.splice(0,1),l.splice(0,1)}return l.length===0?(i+=a[0],e(i)):gr(e,a,l,i,s)}}function vo(e){return t=>{lt.lastIndex=0;const n=[],r=[];let s=0,o=lt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=lt.lastIndex,lt.lastIndex-=1,o=lt.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),gr(t,n,r))}}function ct(e){return typeof e!="string"||e.length===0}function We(e){return typeof e!="string"||/^\s*$/.test(e)}function D(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function en(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function Bo(e,t,n){return en(e,t,n)}function hr(e,t,n){return e.replace(new RegExp(Io(t),"g"),n)}class Je{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Te(this.value)}Equals(t){return t==null?!1:N(this.value,t instanceof Je?t.value:t)}CompareTo(t){return t==null?1:Oe(this.value,t instanceof Je?t.value:t)}}function A(e){if(e==null)throw new Error("Option has no value");return e instanceof Je?e.value:e}function F(e){return e==null||e instanceof Je?new Je(e):e}function z(e,t){return e!=null?A(e):t}function ye(e,t){return t!=null?F(e(A(t))):void 0}const Lo="The index was outside the range of elements in the collection.",Ft="Collection was empty.",_o="The input must be non-negative.",Co="An index satisfying the predicate was not found in the collection.",yr="The input sequence has an insufficient number of elements.";function So(e,t){return typeof e=="function"?new e(t):new Array(t)}function Mo(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Fe(e){const t=new Ze(0);if(Mo(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function tn(e,t){return e>t?e:t}function ht(e,t){return e<t?e:t}function Ao(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function nn(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return be(e.length-1,e)}function dt(e,t,n){const r=t.length|0,s=So(n,r);for(let o=0;o<=r-1;o++)br(s,o,e(be(o,t)));return s}function $o(e,t,n,r,s){const o=z(n,0)|0,i=z(ye(l=>o+l,r),e.length)|0;return(l=>{e:for(;;){const u=l;if(u>=i)return-1;if(s.Equals(t,be(u,e)))return u|0;l=u+1;continue e}})(o)|0}function Vt(e,t,n){return $o(t,e,void 0,void 0,n)>=0}function To(e){return e.slice().reverse()}function qo(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function Tt(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return be(0,e)}function be(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function br(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class Q extends qe{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+D("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=A(l),f=A(u);if(N(i.head,a.head)){s=c,o=f;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,a=s,l=o,u=l.tail;if(u!=null){const c=A(u);if(i>18)return a|0;r=i+1,s=(a<<1)+Te(l.head)+631*i,o=c;continue e}else return a|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=A(l),f=A(u),d=Oe(i.head,a.head)|0;if(d===0){s=c,o=f;continue e}else return d|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return Po(this)}[Symbol.iterator](){return sr(Ee(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Ee(this)}}class Ho{constructor(t){this.xs=t,this.it=this.xs,this.current=Se()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=A(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=Se()}Dispose(){}}function Po(e){return new Ho(e)}function x(){return new Q(Se(),void 0)}function yt(e,t){return new Q(e,t)}function j(e){return e.tail==null}function Ir(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=A(i);continue e}else return s|0}})(0,e)|0}function oe(e){if(e.tail!=null)return e.head;throw new Error(Ft+"\\nParameter name: list")}function P(e){const t=e.tail;if(t!=null)return A(t);throw new Error(Ft+"\\nParameter name: list")}function No(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,a=i.tail;if(a!=null){if(o===t)return i.head;r=o+1,s=A(a);continue e}else throw new Error(Lo+"\\nParameter name: index")}})(0,e)}function ko(){throw new Error(Co)}function Ge(){return x()}function Be(e,t){return yt(e,t)}function W(e){return yt(e,x())}function En(e){return j(e)}function J(e){return Ir(e)}function st(e){return oe(e)}function vn(e){return P(e)}function wr(e){e:for(;;){const t=e;if(j(t))return;{const n=P(t);if(j(n))return F(oe(t));e=n;continue e}}}function Er(e){const t=wr(e);if(t==null)throw new Error(Ft);return A(t)}function vr(e){const t=Ir(e)|0,n=Ao(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,a=o;if(!j(a)){br(n,i,oe(a)),s=i+1,o=P(a);continue e}break}})(0,e),n}function ie(e,t,n){let r=t,s=n;for(;!j(s);)r=e(r,st(s)),s=P(s);return r}function qt(e){return ie((t,n)=>yt(n,t),x(),e)}function xo(e,t,n){return((s,o,i)=>{e:for(;;){const a=s,l=o,u=i;if(j(u))return l;s=a+1,o=e(a,l,oe(u)),i=P(u);continue e}})(0,t,n)}function Ro(e,t,n,r){let s=t,o=n,i=r;for(;!j(o)&&!j(i);)s=e(s,oe(o),oe(i)),o=P(o),i=P(i);return s}function S(e,t){ie((n,r)=>{e(r)},void 0,t)}function Do(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=yt(be(r,e),n);return n}function y(e){return Do(e,x())}function Oo(e){let t,n;if(Ce(e))return y(e);if(e instanceof Q)return e;{const r=x();let s=r;const o=Ee(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const l=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new Q(l,void 0),t.tail=n,n)}}finally{Z(o)}const i=s,a=x();return i.tail=a,P(r)}}function Me(e,t){return ie((n,r)=>yt(r,n),t,qt(e))}function Wo(e,t){let n,r;const s=x();let o=s,i=t;for(;!j(i);){let u=e(oe(i));for(;!j(u);)o=(n=o,r=new Q(oe(u),void 0),n.tail=r,r),u=P(u);i=P(i)}const a=o,l=x();return a.tail=l,P(s)}function bt(e,t){const n=x(),r=xo((o,i,a)=>{const l=new Q(e(o,a),void 0);return i.tail=l,l},n,t),s=x();return r.tail=s,P(n)}function b(e,t){const n=x(),r=ie((o,i)=>{const a=new Q(e(i),void 0);return o.tail=a,a},n,t),s=x();return r.tail=s,P(n)}function Fo(e,t,n){const r=x(),s=Ro((i,a,l)=>{const u=new Q(e(a,l),void 0);return i.tail=u,u},r,t,n),o=x();return s.tail=o,P(r)}function Vo(e,t){return(r=>{e:for(;;){const s=r;if(j(s))return;{const o=e(oe(s));if(o==null){r=P(s);continue e}else return o}}})(t)}function Bn(e,t){return Vo(n=>e(n)?F(n):void 0,t)}function Ln(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(j(i))return;if(e(oe(i)))return o;r=o+1,s=P(i);continue e}})(0,t)}function Go(e,t){const n=Ln(e,t);return n==null?(ko(),-1):A(n)|0}function St(e,t){return No(t,e)}function R(e,t){const n=x(),r=ie((o,i)=>{if(e(i)){const a=new Q(i,void 0);return o.tail=a,a}else return o},n,t),s=x();return r.tail=s,P(n)}function X(e,t,n){return Ln(r=>n.Equals(e,r),t)!=null}function _n(e,t){if(j(t))throw new Error(Ft);return ie(e,st(t),vn(t))}function mt(e,t){return ie((n,r)=>n&&e(r),!0,t)}function rn(e,t){return Ln(e,t)!=null}function jo(e,t){const n=vr(t);return n.sort(e),y(n)}function Vn(e,t){return jo((n,r)=>t.Compare(n,r),e)}function Xo(e,t){return _n((n,r)=>t.Compare(r,n)>0?r:n,e)}function Yo(e,t){return _n((n,r)=>t.Compare(r,n)>0?n:r,e)}function Uo(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(j(r))throw new Error(yr+"\\nParameter name: list");e=n-1,t=P(r);continue e}}function Ko(e,t){if(e<0)throw new Error(_o+"\\nParameter name: count");const n=(i,a,l)=>{let u;e:for(;;){const c=i,f=a,d=l;if(c<=0)return f;if(j(d))throw new Error(yr+"\\nParameter name: list");i=c-1,a=(u=new Q(oe(d),void 0),f.tail=u,u),l=P(d);continue e}},r=x(),s=n(e,r,t),o=x();return s.tail=o,P(r)}function It(e,t){const n=(i,a,l)=>{let u;e:for(;;){const c=i,f=a,d=l;if(c<=0)return f;if(j(d))return f;i=c-1,a=(u=new Q(oe(d),void 0),f.tail=u,u),l=P(d);continue e}},r=x(),s=n(e,r,t),o=x();return s.tail=o,P(r)}function Cn(e,t,n){const r=J(n)|0;let s;const o=z(e,0)|0;s=o<0?0:o;let i;const a=z(t,r-1)|0;return i=a>=r?r-1:a,i<s?x():Ko(i-s+1,Uo(s,n))}function zo(){return Math.random()}function zt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function Zo(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class Jo{constructor(){}Next0(){return zt(0,2147483647)}Next1(t){return zt(0,t)}Next2(t,n){return zt(t,n)}NextDouble(){return zo()}NextBytes(t){Zo(t)}}function Qo(){return new Jo}function Br(){return Qo()}function ee(e,t){return Br().Next2(e,t+1)|0}function Y(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function Lr(e){return Math.log(e)/Math.log(2)}var sn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(sn||(sn={}));function ei(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Gn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function ti(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function ni(e,t){if(t&sn.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function ri(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||ni(o,t),!ti(n).test(i))return ei(s,n)}return null}function K(e,t,n,r,s){const o=ri(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[a,l]=Gn(!0,r);!n&&o.radix!==10&&i>=a&&i<=l&&(i=i<<32-r>>32-r);const[u,c]=Gn(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Ht(e,t,n,r,s){try{return s.contents=K(e,t,n,r),!0}catch{return!1}}function si(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function _r(e,t,n){return m(I(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function ze(e,t,n,r){return m(I('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function Sn(e,t,n,r,s,o){return m(I('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function oi(e,t,n,r,s,o,i,a){return m(I('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(a)}function Ie(e,t){return oi("opacity","linear","0","1",e,t,"1","freeze")}function Cr(e,t,n,r,s,o,i,a,l){return Sn(m(I("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),a,1,l,0,Ie(i,500))}function Qe(e,t){return wn(In(e),t)}function Ae(e,t){return fr(In(e),t)}function ii(e){throw new Error(e)}const ai="Enumeration already finished.",li="Enumeration has not started. Call MoveNext.",Sr="The input sequence has an insufficient number of elements.",ui="Reset is not supported on this enumerator.";function ci(){throw new Error(ui)}function Mn(){throw new Error(li)}function on(){throw new Error(ai)}class di{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Ee(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+H(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{Z(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return sr(Ee(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function mi(e){return new di(e)}class fi{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){ci()}Dispose(){this.dispose()}}function Gt(e,t,n){return new fi(e,t,n)}function pi(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const a=A(n);try{Z(a)}finally{n=void 0}}if(t!=null){const a=A(t);try{Z(a)}finally{t=void 0}}};return Gt(()=>(r?s&&on():Mn(),o!=null?A(o):on()),()=>{let a;if(r||(r=!0),s)return!1;{let l;for(;l==null;){const u=t,c=n;if(u!=null)if(c!=null){const f=A(c);if(f["System.Collections.IEnumerator.MoveNext"]())o=F(f["System.Collections.Generic.IEnumerator`1.get_Current"]()),l=!0;else try{Z(f)}finally{n=void 0}}else{const f=A(u);f["System.Collections.IEnumerator.MoveNext"]()?n=(a=f["System.Collections.Generic.IEnumerator`1.get_Current"](),Ee(a)):(i(),l=!1)}else t=Ee(e)}return A(l)}},()=>{s||i()})}function gi(e,t){return Gt(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{Z(t)}finally{}})}function Mr(e,t,n){let r=!1,s,o=F(e());const i=()=>{if(o!=null){const l=A(o);try{n(l)}finally{o=void 0}}},a=()=>{try{i()}finally{s=void 0}};return Gt(()=>(r||Mn(),s!=null?A(s):on()),()=>{if(r||(r=!0),o!=null){const l=A(o);let u;try{u=t(l)}catch(c){throw a(),c}return u!=null?(s=u,!0):(a(),!1)}else return!1},i)}function hi(e,t){let n,r=t;return Gt(()=>{if(n!=null){const s=A(n)[0];return A(n)[1],s}else return Mn()},()=>(n=e(r),n!=null?(A(n)[0],r=A(n)[1],!0):!1),()=>{})}function yi(e,t){t==null&&ii(e)}function ot(e){return mi(e)}function He(e){return yi("source",e),Ee(e)}function wt(e){return ot(()=>Ee(e()))}function Ar(e){return ot(()=>pi(e))}function $r(e,t){return ot(()=>hi(e,t))}function Tr(e){return e instanceof Q?vr(e):Array.from(e)}function Pe(e){return Ce(e)?y(e):e instanceof Q?e:Oo(e)}function An(e,t,n){return ot(()=>Mr(e,t,n))}function bi(e,t,n){return ot(()=>{let r=-1;return Mr(e,s=>(r=r+1|0,t(r,s)),n)})}function Ii(e,t){return Ar([e,t])}function wi(e,t){return An(()=>He(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{Z(n)})}function Ei(e,t){return wi(n=>{if(e(n))return F(n)},t)}function vi(e,t,n){const r=He(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{Z(r)}}function Bi(e,t){return $r(n=>n<e?[t(n),n+1]:void 0,0)}function jn(e,t){vi((n,r)=>(e(n,r),n+1|0),0,t)}function Li(e){const t=He(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?F(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{Z(t)}}function _i(e){const t=Li(e);if(t==null)throw new Error(Sr+"\\nParameter name: source");return A(t)}function Ci(e){if(Ce(e))return e.length|0;if(e instanceof Q)return J(e)|0;{const t=He(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{Z(t)}}}function le(e,t){return An(()=>He(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?F(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{Z(n)})}function Si(e,t){return bi(()=>He(t),(n,r)=>r["System.Collections.IEnumerator.MoveNext"]()?F(e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{Z(n)})}function Mi(e,t){return Bi(e,n=>t)}function Pt(e){return wt(()=>To(Tr(e)))}function Ai(e,t){return ot(()=>{const n=He(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Sr+"\\nParameter name: source");return gi(()=>{},n)}catch(r){throw Z(n),r}})}function $i(e,t){return wt(()=>{let n=!0;return Ei(r=>(n&&(n=e(r)),!n),t)})}function Ti(e){return Ai(1,e)}function qi(e,t){return An(()=>He(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?F(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{Z(n)})}function qr(e,t){return wt(()=>Ar(le(e,t)))}function Hi(e,t){return wt(()=>qo(e,Tr(t)))}function Xn(e,t,n){const r=e-Ci(n)|0;return r<1?n:Ii(Mi(r,t),n)}function Hr(e){return D("",le(t=>t,Ti(e.split(""))))}function Pi(e){return _i(e.split(""))}function U(e,t,n){return Bo(n,e,t)}function Nt(e){return D("",le(t=>t,Pt(e.split(""))))}function Ni(e,t){return le(n=>D("",n),le(n=>dt(r=>r,n),Hi(e,t.split(""))))}function ki(e,t){return le(Nt,Pt(Ni(e,Nt(t))))}function Ve(e,t){return y(t.split(e))}function xi(e,t){return[D("",le(n=>n,qi(n=>!e(n),t.split("")))),D("",le(n=>n,$i(n=>!e(n),t.split(""))))]}function Ri(e){return new k(0,[e])}function Pr(e){return new k(1,[e])}class k extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Di(e,t){return t.tag===0?Ri(e(t.fields[0])):Pr(t.fields[0])}function se(e,t){return t.tag===0?e(t.fields[0]):Pr(t.fields[0])}function Oi(e){try{return new k(0,[K(e,511,!1,32)])}catch(t){return new k(1,[new Error(t.message)])}}function Wi(e){return ct(e)?new k(1,[new Error]):new k(0,[e])}function $n(e){return e===""?new k(1,[new Error("Value cannot be empty string.")]):new k(0,[e])}function Tn(e,t){return fr(In(e),t)?new k(0,[t]):new k(1,[new Error(`The input string '${t}' was not in a correct format.`)])}function Nr(e,t,n){return e(n)>t?new k(1,[new Error(m(v("Value is too long. Value must be shorter or equal to %d%P()",[t])))]):new k(0,[n])}class q extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class $e extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class kt extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}function kr(e){const t=Oi(e);return t.tag===1?new q(1,[t.fields[0]]):new q(0,[t.fields[0]])}function te(e){const t=e;return t.tag===1?new $e(1,[t.fields[0]]):new $e(0,[T(t.fields[0],2)])}function ft(e){const t=e;return t.tag===1?new kt(1,[t.fields[0]]):new kt(0,[T(t.fields[0],16)])}function it(e){const t=se(n=>{try{const r=wn(/^0*([01]+)$/gu,n);return new k(0,[r[1]||""])}catch(r){return new k(1,[r])}},se(n=>Nr(r=>r.length,32,n),se(n=>Tn("^[01]+$",n),se($n,new k(0,[e])))));return t.tag===1?new $e(1,[t.fields[0]]):new $e(0,[t.fields[0]])}function je(e){const t=e;return t.tag===1?new q(1,[t.fields[0]]):new q(0,[K(t.fields[0],511,!1,32,2)])}function qn(e){const t=se(n=>{try{const r=wn(/^0*([0-9A-Fa-f]+)$/gu,n);return new k(0,[r[1]||""])}catch(r){return new k(1,[r])}},se(n=>Nr(r=>r.length,8,n),se(n=>Tn("^[0-9A-Fa-f]+$",n),se($n,new k(0,[e])))));return t.tag===1?new kt(1,[t.fields[0]]):new kt(0,[t.fields[0]])}function Hn(e){const t=e;return t.tag===1?new q(1,[t.fields[0]]):new q(0,[K(t.fields[0],511,!1,32,16)])}function ue(e,t){return`
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
            </div>`}const Fi=`\r
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
            </div>`;function Xe(e,t,n){const r=We(t)?`${e} の2進法表記を入力してください。`:Ae("^[01]+$",t)?"不明なエラーです。":`'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。`;return m(I('<span class="warning">%s</span>'))(r)}function xr(e,t,n){const r=We(t)?`${e} の10進法表記を入力してください。`:Ae("^[0-9]+$",t)?"不明なエラーです。":`'${t}' は10進数ではありません。使えるのは半角の 0123456789 のみです。`;return m(I('<span class="warning">%s</span>'))(r)}function Vi(e,t,n){const r=We(t)?`${e} の16進法表記を入力してください。`:Ae("^[0-9A-Fa-f]+$",t)?"不明なエラーです。":`'${t}' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。`;return m(I('<span class="warning">%s</span>'))(r)}function Ye(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return m(v(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Rr(e,t){return t.tag===0?D(" ",Pe(ki(e,t.fields[0]))):""}function jt(e,t){let n,r;const s=Xn(8,"",le(i=>i,(n=te(new q(0,[e])),n.tag===1?"":n.fields[0]).split(""))),o=Xn(8,"",le(i=>i,(r=te(new q(0,[t])),r.tag===1?"":r.fields[0]).split("")));jn((i,a)=>{let l;const u=m(v("firstRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},s),jn((i,a)=>{let l;const u=m(v("secondRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},o)}function pe(e){const t=e*2500-500|0;return Math.abs(t)|0}function Dr(e,t){return[F(e),1,F(t),void 0]}function Or(e,t){let n;const r=qt(t);return En(r)?W([void 0,void 0,void 0,void 0]):qt(Be((n=st(r),[void 0,void 0,F(n[0]),F(n[1])]),b(s=>[F(e),1,F(s[0]),F(s[1])],vn(r))))}function ce(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=Vt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:tt});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{S(s=>{document.getElementById(s).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Escape":{n&&S(s=>{document.getElementById(s).classList.remove("active")},y(["helpWindow","helpBarrier"]));break}}}}function Ne(e,t){return D(e,R(n=>!ct(n),t))}function Gi(e,t){return ie((n,r)=>hr(n,r[0],r[1]),t,e)}function ke(e){return Gi(y([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function ge(e){return hr(e," ","&nbsp;")}function Le(e,t){return U(e,"0",t)}function xe(e){let t;return t=xi(n=>n!=="0",Nt(Hr(Nt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+Pi(e)}function an(e,t,n){return[e(t),e(n)]}function xt(e,t,n,r){return[e(t),e(n),e(r)]}const Wr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ji(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return Me(s,W(1));default:{let i;const a=~~Lr(o)|0;i=Math.pow(2,a),n=Me(s,W(i)),r=o-i;continue e}}}})(Ge(),e)}function Pn(e,t){let n,r=0;n=[si(e,t,new Ze(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?W([o,s]):Me(W([o,s]),Pn(o,t))}function Xi(e,t,n,r){return Cr(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+pe(t-1),n,r)}function Fr(e,t,n){const r=Be(Dr(e,t),Or(e,Pn(t,e)));let s;const o=b(i=>{const a=z(i[0],""),l=z(i[1],""),u=z(i[2],""),c=z(i[3],"");return m(I("%s%s%s%s"))(a)(l)(u)(c)},bt((i,a)=>[ye(l=>{let u,c;return ze(0,n*(i+1),0,(u=Ie((c=pe(i)|0,i===0?c+1e3:c+2e3),500),m(I("%d%s"))(l)(u)))},a[0]),ye(l=>{let u,c,f,d,p,g,h;return Sn((u=~~(n/2)+2|0,c=n*i+6|0,f=~~(n/2)|0,d=n*.4,p=n*.8,g=n/2*4.8,m(I("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(f)(d)(p)(g)),"#000000",1,"none",0,Ie((h=pe(i)|0,i===0?h+500:h+1500),500))},a[1]),ye(l=>{let u,c;return ze(~~(n/2)*2,n*(i+1),0,(u=ge(U(3," ",T(l))),c=Ie(pe(i),500),m(I("%s%s"))(u)(c)))},a[2]),ye(l=>{let u;return ze(~~(n/2)*6,n*(i+1),0,(u=Ie(500+pe(i),500),m(I("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>m(I("%s%s"))(i)(a),Xi(n,J(r),"#191970","#b0e0e6"),o),_r(~~(n/2)*10,n*(J(r)+1),s)}function Yi(e,t){return`
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
                ${Fr(e,t,20)}
            </div>
            `}function Ui(e,t){let n,r,s;const o=D(" + ",b(T,t)),i=D(" + ",(n=b(c=>{let f;return f=Lr(c),~~Math.trunc(f)},t),b((r=m(I("2<sup>%d</sup>")),r),n))),a=D(" + ",b(c=>`${c}<sub>(2)</sub>`,b(c=>c.tag===1?"":c.fields[0],b(c=>te(new q(0,[c])),t))));let l;const u=te(e);return l=u.tag===1?"-1":u.fields[0],m(v(`\r
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
            `,[(s=e,s.tag===1?-1:s.fields[0]),o,i,i,a,a,l]))}function Vr(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${Yi(2,e)}
                <h3>考え方 2</h3>
                ${Ui(new q(0,[e]),ji(e))}
            </details>
            `}function Ki(e,t){const n=(o,i)=>{e:for(;;){const a=o,l=i,u=Br(),c=u.Next2(a,l)|0,f=u.Next2(a,l)|0;if(c!==f)return[c,f];o=a,i=l;continue e}};let r;const s=n(e,t);return r=an(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Gr(e,t){return Y(()=>Ki(0,e),n=>X(n,t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function zi(e,t){const n=je(it(t));return n.tag===0?Ye(e,xe(Le(8,t)),2,ge(U(3," ",T(n.fields[0]))),10):""}function jr(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Fr(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function et(e,t,n,r,s,o,i,a,l,u){const c=document.getElementById("numberInput"),f=ke(c.value),d=it(f);if(c.focus(),d.tag===0){document.getElementById("errorArea").innerHTML="";const p=document.getElementById("outputArea"),g=Ne("<br>",y([zi(N(d,u),d.fields[0]),p.innerHTML]));if(p.innerHTML=g,N(d,u)){const h=e(a)|0;document.getElementById("questionSpan").innerText=T(h),document.getElementById("hintArea").innerHTML=t(h),r(h);const w=new q(0,[h]),L=te(w);c.value="";const _=It(i,Be(h,a));document.getElementById("submitButton").onclick=B=>{B.preventDefault(),et(e,t,n,r,s,o,i,_,w,L)},document.getElementById("inputArea").onsubmit=B=>{B.preventDefault(),et(e,t,n,r,s,o,h,_,w,L)}}}else{const p=l.tag===0?T(l.fields[0]):"";document.getElementById("errorArea").innerHTML=n(p,f,d.fields[0])}}function Zi(e,t,n){et(r=>Gr(8,r),Vr,Xe,r=>{jr(r)},10,2,10,e,t,n)}function Xt(e,t,n,r,s,o,i){const a=e(Ge())|0;document.getElementById("questionSpan").innerText=T(a),document.getElementById("srcRadix").innerText=m(I("(%d)"))(r),document.getElementById("dstRadix").innerText=T(s),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(a);const l=new q(0,[a]),u=te(l);document.getElementById("submitButton").onclick=c=>{c.preventDefault(),o(W(a),l,u)},document.getElementById("inputArea").onsubmit=c=>{c.preventDefault(),o(W(a),l,u)},n(a),document.getElementById("helpButton").onclick=c=>{S(f=>{document.getElementById(f).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{S(f=>{document.getElementById(f).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{S(f=>{document.getElementById(f).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=c=>{i(c)}}function Ji(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Wr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=ve,Xt(t=>Gr(8,t),Vr,t=>{jr(t)},10,2,(t,n,r)=>{Zi(t,n,r)},t=>{ce(t)})}const Xr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Yr(e){return""}function Ur(e){return Y(()=>ee(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function Qi(e,t,n){et(Ur,Yr,Xe,r=>{},10,2,10,e,t,n)}function ea(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(Xr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=ve,Xt(Ur,Yr,t=>{},10,2,(t,n,r)=>{Qi(t,n,r)},t=>{ce(t)})}function Kr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const zr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ta(){const e=Y(()=>{const t=()=>{let n,r;const s=je(new $e(0,[Hr(U(9,"0",(n=te(new q(0,[(r=ee(0,8)|0,Math.pow(2,r))])),n.tag===0?n.fields[0]:"")))]));return s.tag===0?s.fields[0]|0:-1};return[t(),t()]},t=>!N(t[0],t[1]));return e[0]+e[1]|0}function na(e){return D(" + ",bt((t,n)=>{const r=e.length-t-1|0;return m(I("(%c * 2<sup>%d</sup>)"))(n)(r)},Pe(e.split(""))))}function ra(e){return bt((t,n)=>[m(v('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(v('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),m(v('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],Pe(e.split("")))}function sa(e,t,n){return m(I(`\r
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
                `))(e)(t)(n)}function oa(e){const t=ie((n,r)=>Kr((s,o)=>m(I("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],ra(e));return sa(t[0],t[1],t[2])}function Zr(e){let t;if(e.tag===0){const n=e.fields[0],r=na(n);return m(v(`\r
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
            `,[oa(n),n,r,(t=je(e),t.tag===1?-1:t.fields[0])]))}else return""}function Jr(e){return Y(ta,t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ia(e,t,n){let r,s,o;switch(t.tag===0&&n.tag===0?(r=0,s=t.fields[0],o=n.fields[0]):r=1,r){case 0:{const i=xe(Le(8,s));return Ye(e,ge(U(3," ",T(o))),10,i,2)}default:return""}}function ln(e,t,n,r,s,o,i){const a=document.getElementById("numberInput"),l=ke(a.value),u=kr(l);if(a.focus(),u.tag===0){document.getElementById("errorArea").innerHTML="";const c=document.getElementById("outputArea"),f=Ne("<br>",y([ia(N(u,i),o,i),c.innerHTML]));if(c.innerHTML=f,N(u,i)){const d=e(s)|0,p=new q(0,[d]),g=te(p);document.getElementById("questionSpan").innerText=Rr(4,g),document.getElementById("hintArea").innerHTML=t(g),a.value="";const h=It(r,Be(d,s));document.getElementById("submitButton").onclick=w=>{w.preventDefault(),ln(e,t,n,r,h,g,p)},document.getElementById("inputArea").onsubmit=w=>{w.preventDefault(),ln(e,t,n,r,h,g,p)}}}else{const c=o.tag===0?o.fields[0]:"";document.getElementById("errorArea").innerHTML=xr(c,l,u.fields[0])}}function Yn(e,t,n){ln(Jr,Zr,r=>{},4,e,t,n)}function Qr(e,t,n,r){const s=e(Ge())|0,o=new q(0,[s]),i=te(o);document.getElementById("questionSpan").innerText=Rr(4,i),document.getElementById("srcRadix").innerText=m(I("(%d)"))(2),document.getElementById("dstRadix").innerText=T(10),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=a=>{a.preventDefault(),Yn(W(s),i,o)},document.getElementById("inputArea").onsubmit=a=>{a.preventDefault(),Yn(W(s),i,o)},document.getElementById("helpButton").onclick=a=>{S(l=>{document.getElementById(l).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=a=>{S(l=>{document.getElementById(l).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=a=>{S(l=>{document.getElementById(l).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=a=>{r(a)}}function aa(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(zr,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=ve,Qr(Jr,Zr,t=>{},t=>{ce(t)})}const es=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function la(e){return""}function ua(e){return Y(()=>ee(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ca(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(es,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=ve,Qr(ua,la,t=>{},t=>{ce(t)})}const ts=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ns(e){const t=~~(Math.log(e)/Math.log(2))|0;return m(v(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function rs(e){return Y(()=>{const t=ee(0,7)|0;return Math.pow(2,t)|0},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function da(e,t,n){et(rs,ns,Xe,r=>{},10,2,4,e,t,n)}function ma(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(ts,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=ve,Xt(rs,ns,t=>{},10,2,(t,n,r)=>{da(t,n,r)},t=>{ce(t)})}const ss=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function os(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return m(v(`\r
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
            </details>`,[e,e,e+1,t,e,t,t]))}function is(e){return Y(()=>{let t;return-1+(t=ee(0,8)|0,Math.pow(2,t))},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function fa(e,t,n){et(is,os,Xe,r=>{},10,2,4,e,t,n)}function pa(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(ss,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=ve,Xt(is,os,t=>{},10,2,(t,n,r)=>{fa(t,n,r)},t=>{ce(t)})}const as=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ga(){return`\r
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
                </details>`}function ha(e){let t;const n=-1+Math.pow(2,e)|0,r=Y(()=>ee(1,n),s=>{const o=te(new q(0,[s]));if(o.tag===0){const i=o.fields[0];return i.length===e&&Ae("^1+0+$",i)===!1}else return!1})|0;return[r,(t=n-r|0,Y(()=>ee(1,t),s=>s!==r&&(s&r)!==0))]}function ya(e,t){return Y(()=>ha(e),n=>X(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1&&X(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function un(e,t,n,r,s,o,i,a,l,u,c){const f=document.getElementById("numberInput"),d=ke(f.value);f.focus();const p=it(d);if(p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="";const h=n(g),w=je(new $e(0,[g]));if(w.tag===0){const L=w.fields[0]|0,_=ge(U(3," ",T(L))),B=document.getElementById("outputArea"),M=Ne("<br>",y([Ye(L===a,h,s,_,o),B.innerHTML]));if(B.innerHTML=M,L===a){const C=e(c),$=C[1]|0,V=C[0]|0;jt(V,$),document.getElementById("hintArea").innerHTML=t(),f.value="";const at=It(i,Me(y([V,$]),c));document.getElementById("submitButton").onclick=Ue=>{Ue.preventDefault(),un(e,t,n,r,s,o,i,V+$,V,$,at)},document.getElementById("inputArea").onsubmit=Ue=>{Ue.preventDefault(),un(e,t,n,r,s,o,i,V+$,V,$,at)}}}}else{const g=w=>{const L=te(new q(0,[w]));return L.tag===1?"":L.fields[0]},h=Xe(m(v("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[g(l),s,g(u),s])),d,p.fields[0]);document.getElementById("errorArea").innerHTML=h}}function ba(e,t,n,r,s,o,i,a,l){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=m(I("(%d)"))(s),document.getElementById("secondRowSrcRadix").innerText=m(I("(%d)"))(s),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(o),document.getElementById("hintArea").innerHTML=t();const u=e(Ge()),c=u[1]|0,f=u[0]|0;jt(f,c),document.getElementById("submitButton").onclick=d=>{d.preventDefault(),l(e,t,n,r,s,o,i,f+c,f,c,y([f,c]))},document.getElementById("inputArea").onsubmit=d=>{d.preventDefault(),l(e,t,n,r,s,o,i,f+c,f,c,y([f,c]))},document.getElementById("helpButton").onclick=d=>{S(p=>{document.getElementById(p).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=d=>{S(p=>{document.getElementById(p).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=d=>{S(p=>{document.getElementById(p).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=d=>{a(d)}}function Ia(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>加算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(as,"help-color addition"),document.querySelector("#submitButton").className="submit-button display-order-3 addition",document.querySelector("#questionArea").innerHTML=dr,ba(t=>ya(8,t),ga,t=>xe(Le(8,t)),t=>{},2,2,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,f)=>{un(t,n,r,s,o,i,a,l,u,c,f)})}const ls=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function us(){const e=ee(1,255)|0,t=Y(()=>ee(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function cs(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function Rt(e,t,n,r){const s=document.getElementById("numberInput"),o=ke(s.value);s.focus();const i=it(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=xe(Le(8,a)),u=je(new $e(0,[a]));if(u.tag===0){const c=u.fields[0]|0,f=ge(U(3," ",T(c))),d=document.getElementById("outputArea"),p=Ne("<br>",y([Ye(c===e,l,2,f,10),d.innerHTML]));if(d.innerHTML=p,c===e){const g=Y(us,B=>X(B[0],r,{Equals:(M,C)=>M===C,GetHashCode:O})===!1&&X(B[1],r,{Equals:(M,C)=>M===C,GetHashCode:O})===!1),h=g[1]|0,w=g[0]|0;jt(w,h);const L=cs();document.getElementById("hintArea").innerHTML=L,s.value="";const _=Cn(0,ht(20,J(r)+1)-1,Me(y([w,h]),r));document.getElementById("submitButton").onclick=B=>{B.preventDefault(),Rt(w-h,w,h,_)},document.getElementById("inputArea").onsubmit=B=>{B.preventDefault(),Rt(w-h,w,h,_)}}}}else{const a=u=>{const c=te(new q(0,[u]));return c.tag===1?"":c.fields[0]},l=Xe(m(v("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[a(t),2,a(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=l}}function wa(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>減算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(ls,"help-color subtraction"),document.querySelector("#submitButton").className="submit-button display-order-3 subtraction",document.querySelector("#questionArea").innerHTML=dr;const t=cs();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=m(I("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=m(I("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=us(),r=n[1]|0,s=n[0]|0;jt(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Rt(s-r,s,r,y([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Rt(s-r,s,r,y([s,r]))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}const ds=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `,Ea='4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？';function va(e,t,n){return We(t)?`<span class="warning">${e} の補数を、2進法表記で入力してください。</span>`:Ae("^[01]+$",t)?'<span class="warning">不明なエラーです。</span>':`<span class="warning">'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`}function ms(e,t){return`
            <details><summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    ある2進数に足すと桁が1つ上がる、最も小さい数のことを、<br>
                    元の2進数に対する<span class="complement marker">「2の補数」</span>と呼びます。
                </p>
                <p class="history-indented">
                    たとえば、4ビットの2進数 1010<sub>(2)</sub> に 0110<sub>(2)</sub></span> を足すと<br>
                    1桁上がって5ビットの2進数 10000<sub>(2)</sub> になります。<br>
                    この 0110<sub>(2)</sub> を、元の 1010<sub>(2)</sub> に対する2の補数と呼びます。<br>
                </p>
                <p class="history-indented">
                    2の補数は、<span class="complement marker">2進数の負の数を表すのに使われます。</sub></span><br>
                    1010<sub>(2)</sub> (=10<sub>(10)</sub>) の2の補数 0110<sub>(2)</sub> は-10<sub>(10)</sub> を表します。
                </p>
                <p class="history-indented">
                    2の補数を求めるには、元の2進数の各ビットの<br>
                    <span class="complement marker">0 と 1 を反転させた数に 1 を足します。</span><br>
                    今回の問題で説明すると、<br>
                    ${e}<sub>(2)</sub> の 0 と 1 を反転させると<br>
                    ${t}<sub>(2)</sub> になります。これに 1 を足したものが<br>
                    ${e}<sub>(2)</sub> の2の補数です。
                </p>
            </details>`}function Dt(e,t,n){let r;const s=document.getElementById("numberInput"),o=ke(s.value);s.focus();const i=it(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=je(new $e(0,[a])),u=N(l,new q(0,[t]))?"history history-correct":"history history-wrong",c=Le(4,a),f=document.getElementById("outputArea"),d=Ne("<br>",y([m(I('<span class ="%s">%s<sub>(%d)</sub></span>'))(u)(c)(2),f.innerHTML]));if(f.innerHTML=d,N(l,new q(0,[t]))){const p=Y(()=>ee(1,15),_=>X(_,n,{Equals:(B,M)=>B===M,GetHashCode:O})===!1)|0,g=16-p|0,h=U(4,"0",(r=te(new q(0,[p])),r.tag===1?"":r.fields[0]));document.getElementById("questionSpan").innerText=h;const w=Array.from(qr(_=>_==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=ms(h,w),s.value="";const L=Cn(0,ht(8,J(n)+1)-1,Be(p,n));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),Dt(h,g,L)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),Dt(h,g,L)}}}else document.getElementById("errorArea").innerHTML=va(e,o,i.fields[0])}function Ba(){let e;document.title="補数 - taidalab";const t=document.querySelector("header");t.innerHTML=re,t.className="complement",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>補数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(ds,"help-color complement"),document.querySelector("#submitButton").className="submit-button display-order-3 complement",document.querySelector("#questionArea").innerHTML=Ea;const n=ee(1,15)|0,r=16-n|0,s=U(4,"0",(e=te(new q(0,[n])),e.tag===1?"":e.fields[0])),o=Array.from(qr(i=>i==="1"?"0":"1",s.split(""))).join("");document.getElementById("questionSpan").innerText=s,document.getElementById("srcRadix").innerText=m(I("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=ms(s,o),document.getElementById("submitButton").onclick=i=>{i.preventDefault(),Dt(s,r,W(n))},document.getElementById("inputArea").onsubmit=i=>{i.preventDefault(),Dt(s,r,W(n))},document.getElementById("helpButton").onclick=i=>{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=i=>{S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=i=>{S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=i=>{ce(i)}}const fs=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function La(e,t,n,r){return Cr(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+pe(t-1),n,r)}function ps(e,t,n){const r=Be(Dr(e,t),Or(e,Pn(t,e)));let s;const o=b(i=>{const a=z(i[0],""),l=z(i[1],""),u=z(i[2],""),c=z(i[3],"");return m(I("%s%s%s%s"))(a)(l)(u)(c)},bt((i,a)=>[ye(l=>{let u,c;return ze(0,n*(i+1),0,(u=Ie((c=pe(i)|0,i===0?c+1e3:c+2e3),500),m(I("%d%s"))(l)(u)))},a[0]),ye(l=>{let u,c,f,d,p,g,h;return Sn((u=~~(n/2)*2+4|0,c=n*i+6|0,f=~~(n/2)|0,d=n*.4,p=n*.8,g=n/2*4.8,m(I("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(f)(d)(p)(g)),"#000000",1,"none",0,Ie((h=pe(i)|0,i===0?h+500:h+1500),500))},a[1]),ye(l=>{let u,c;return ze(~~(n/2)*3,n*(i+1),0,(u=ge(U(3," ",T(l))),c=Ie(pe(i),500),m(I("%s%s"))(u)(c)))},a[2]),ye(l=>{let u;return ze(~~(n/2)*7,n*(i+1),0,(u=Ie(500+pe(i),500),m(I("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>m(I("%s%s"))(i)(a),La(n,J(r),"#1e3330","#95feec"),o),_r(~~(n/2)*11,n*(J(r)+1),s)}function _a(e,t,n){const r=ps(e,t,n);return m(I(`\r
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
                `))(r)}function Ca(e,t,n){const r=_a(e,t,n);return m(I(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function gs(e){return Ca(16,e,20)}function hs(e){return Y(()=>ee(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function Sa(e,t){const n=Hn(qn(t));return n.tag===0?Ye(e,xe(Le(8,t)),16,ge(U(3," ",T(n.fields[0]))),10):""}function ys(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=ps(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function cn(e,t,n,r,s,o,i,a,l,u,c){const f=document.getElementById("numberInput"),d=ke(f.value),p=qn(d);if(f.focus(),p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="",r(g),ge(U(3," ",g));const h=document.getElementById("outputArea"),w=Ne("<br>",y([Sa(N(p,c),g),h.innerHTML]));if(h.innerHTML=w,N(p,c)){const L=e(l)|0;document.getElementById("questionSpan").innerText=T(L),document.getElementById("hintArea").innerHTML=t(L),s(L);const _=new q(0,[L]),B=ft(_);f.value="";const M=It(a,Be(L,l));document.getElementById("submitButton").onclick=C=>{C.preventDefault(),cn(e,t,n,r,s,o,i,a,M,_,B)},document.getElementById("inputArea").onsubmit=C=>{C.preventDefault(),cn(e,t,n,r,s,o,i,L,M,_,B)}}}else{const g=u.tag===0?T(u.fields[0]):"";document.getElementById("errorArea").innerHTML=n(g,d,p.fields[0])}}function Un(e,t,n){cn(hs,gs,Vi,r=>xe(Le(8,r)),r=>{ys(r)},10,16,10,e,t,n)}function Ma(e,t,n,r,s,o){const i=e(Ge())|0;document.getElementById("questionSpan").innerText=T(i),document.getElementById("srcRadix").innerText=m(I("(%d)"))(r),document.getElementById("dstRadix").innerText=T(s),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(i);const a=new q(0,[i]),l=ft(a);document.getElementById("submitButton").onclick=u=>{u.preventDefault(),Un(W(i),a,l)},document.getElementById("inputArea").onsubmit=u=>{u.preventDefault(),Un(W(i),a,l)},n(i),document.getElementById("helpButton").onclick=u=>{S(c=>{document.getElementById(c).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=u=>{S(c=>{document.getElementById(c).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=u=>{S(c=>{document.getElementById(c).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=u=>{o(u)}}function Aa(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(fs,"help-color dec2hex"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2hex",document.querySelector("#questionArea").innerHTML=ve,Ma(hs,gs,t=>{ys(t)},10,16,t=>{ce(t)})}const bs=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Is(e){return D(" + ",Pt(Si((t,n)=>{let r;return m(v("(%d%P() * 16<sup>%d%P()</sup>)",[(r=Hn(qn(n)),r.tag===1?-1:r.fields[0]),t]))},le(t=>t,Pt(e)))))}function $a(e){return bt((t,n)=>[m(v('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(v('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),m(v('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],Pe(e.split("")))}function Ta(e,t,n){return m(I(`\r
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
                `))(e)(t)(n)}function ws(e){const t=ie((n,r)=>Kr((s,o)=>m(I("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],$a(e));return Ta(t[0],t[1],t[2])}function Es(e,t,n){let r,s;return m(v(`<details>\r
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
            </details>`,[n,(r=e,r.tag===1?"-1":r.fields[0]),t,(s=Hn(e),s.tag===1?-1:s.fields[0])]))}function Ot(e,t,n){const r=document.getElementById("numberInput"),s=ke(r.value);r.focus();const o=kr(s);if(o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const a=ge(U(3," ",T(i))),l=ft(new q(0,[i]));if(l.tag===0){const u=xe(Le(2,l.fields[0])),c=document.getElementById("outputArea"),f=Ne("<br>",y([Ye(i===e,a,10,u,16),c.innerHTML]));if(c.innerHTML=f,i===e){const d=Y(()=>ee(0,255),g=>X(g,n,{Equals:(h,w)=>h===w,GetHashCode:O})===!1)|0,p=ft(new q(0,[d]));if(p.tag===0){const g=p.fields[0];document.getElementById("questionSpan").innerText=g;const h=Es(p,Is(g.split("")),ws(g));document.getElementById("hintArea").innerHTML=h,r.value="";const w=Cn(0,ht(10,J(n)+1)-1,Be(d,n));document.getElementById("submitButton").onclick=L=>{L.preventDefault(),Ot(d,g,w)},document.getElementById("inputArea").onsubmit=L=>{L.preventDefault(),Ot(d,g,w)}}}}}else document.getElementById("errorArea").innerHTML=xr(t,s,o.fields[0])}function qa(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=r=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=r=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ue(bs,"help-color hex2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 hex2dec",document.querySelector("#questionArea").innerHTML=ve;const t=ee(0,255)|0,n=ft(new q(0,[t]));if(n.tag===0){const r=n.fields[0],s=Es(n,Is(r.split("")),ws(r));document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=m(I("(%d)"))(16),document.getElementById("dstRadix").innerText=T(10),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=s,document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Ot(t,r,W(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Ot(t,r,W(t))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}}function Ha(e,t){return J(R(e,t))}function Pa(e,t){let n;const r=It(e,t);return Ha((n=St(e,t),s=>N(n,s)),r)|0}function Na(e,t){return R(n=>X(n,t,{Equals:N,GetHashCode:Te}),e)}function ka(e,t,n,r){const s=Oe(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const a=Oe(i,t)|0;return o&&a<=0||!o&&a>=0?[i,r(i,e)]:void 0}}function xa(e,t,n,r,s){const o=ka(t,n,r,s);return wt(()=>$r(o,e))}function Yt(e,t,n){return xa(e,t,n,0,(r,s)=>r+s)}const vs=`\r
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
    `,Ra=`
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
            ${vs}
        </div>
        `;function Kn(e,t){return t%e}function Da(e,t){return~~(t/e)}function Oa(e,t,n){const r=t-e|0;return Da(r*3,n)%2===0?ht(e+Kn(r*3,n),t)|0:tn(t-Kn(r*3,n),e)|0}function Zt(e,t,n,r,s,o){return Oa(t,n,(n-t)*e+r*o+s)}function Wa(e,t,n,r,s){const o=y([e,t,n]),i=Yo(o,{Compare:vt})|0,a=Xo(o,{Compare:vt})|0,l=St(1,Vn(o,{Compare:vt}))-i|0;let u,c;const f=[0,1,2];return c=xt(d=>{let p;return Go((p=St(d,o)|0,g=>p===g),Vn(o,{Compare:vt}))+Pa(d,o)},f[0],f[1],f[2]),u=xt(d=>St(d,y([p=>Zt(4,i,a,r,l,p),p=>Zt(0,i,a,r,l,p),p=>Zt(2,i,a,r,l,p)])),c[0],c[1],c[2]),b(d=>[u[0](d),u[1](d),u[2](d)],Pe(Yt(0,1,s)))}function zn(e,t,n){let r;const s=[e,t,n];return r=xt(o=>U(2,"0",T(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Fa(e,t){return b(n=>1+e*n,Pe(Yt(1,1,~~((255/t-1)/e))))}function Va(e){return vn(qt(b(t=>1-e*t,Pe(Yt(1,1,~~(1/e))))))}function Ga(e,t,n){return m(v(`\r
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
        `,[e,t,n,e,t,n,zn(e,t,n),e,t,n,zn(e,t,n)]))}function ja(e){const t=D(`
`,e);return m(I('<div class="color-row">%s</div>'))(t)}function Bs(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,a=document.getElementById("limitInput").value,l=R(u=>u[2][0]===!1,Me(b(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},b(u=>{let c;return[u[0],u[1],(c=0,[Ht(u[2],511,!0,8,new Ze(()=>c,f=>{c=f})),c])]},y([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),b(u=>{let c;return[u[0],u[1],(c=0,[Ht(u[2],511,!1,32,new Ze(()=>c,f=>{c=f|0})),c])]},y([["変化量","stepInput",i],["回数","limitInput",a]]))));if(En(l)){const u=K(r,511,!1,32)|0,c=K(s,511,!1,32)|0,f=K(o,511,!1,32)|0,d=Wa(u,c,f,K(i,511,!1,32),K(a,511,!1,32)),p=tn(tn(u,c),f)|0,g=Va(.1),h=J(g)|0,w=D(`
`,b(ja,b(C=>b($=>Ga($[0],$[1],$[2]),C),b((e=Me(g,Be(1,Fa(.1,p))),C=>b($=>xt(V=>~~($*V),C[0],C[1],C[2]),e)),d)))),L=document.getElementById("outputArea");L.innerHTML=w;const _=L.getBoundingClientRect().width;let B;B=Tt((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,L.scrollLeft=B*h-(_-B)/2}else{const u=_n((c,f)=>`${c}<br>${f}`,b(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,l));n.innerHTML=u,document.getElementById(st(l)[1]).focus()}}function De(e,t,n,r,s){mt(o=>o!=="",y([e,t,n,r,s]))&&Bs()}function Xa(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=Vt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:tt});switch(e.key){case"\\":{const a=b(l=>document.getElementById(l),y(["rInput","gInput","bInput","stepInput","limitInput"]));o||(z(Bn(u=>u.value==="",a),st(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Escape":{o&&S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),f=document.getElementById("limitInput");let d,p=0;if(d=[Ht(f.value,511,!1,32,new Ze(()=>p,g=>{p=g|0})),p],d[0]){const g=d[1]|0;g<2147483647&&(f.value=T(g+1),De(a.value,l.value,u.value,c.value,f.value))}}break}case"-":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),f=document.getElementById("limitInput");let d,p=0;if(d=[Ht(f.value,511,!1,32,new Ze(()=>p,g=>{p=g|0})),p],d[0]){const g=d[1]|0;g>0&&(f.value=T(g-1),De(a.value,l.value,u.value,c.value,f.value))}}break}}break}}}function Ya(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>色いろいろ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ra,document.querySelector("#submitButton").className="submit-button iro-iroiro",document.getElementById("submitButton").onclick=i=>{Bs()},S(i=>{document.getElementById(i).onclick=a=>{S(l=>{document.getElementById(l).classList.toggle("active")},y(["helpWindow","helpBarrier"]))}},y(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{De(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{Xa(i)}}class Ua extends qe{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return m(I("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function Ls(e,t,n,r){return new Ua(e,t,n,r)}function pt(e){const t=dt(n=>K(n,511,!0,8),e.split("."),Uint8Array);return Ls(be(0,t),be(1,t),be(2,t),be(3,t))}function dn(e){return Di(pt,se(t=>mt(n=>n>=0?n<=255:!1,b(n=>K(n,511,!1,32),Ve(".",t)))?new k(0,[t]):new k(1,[new Error("str",`${t} is out of range. Each value must be within 0 and 255`)]),se(t=>Tn("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),se(Wi,se($n,new k(0,[e]))))))}function _s(e,t){return Ls(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class ne extends qe{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return m(I("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function Ut(e,t,n,r){return new ne(e,t,n,r)}function Ka(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class G extends qe{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return m(I("X = %f; Y = %f"))(t.X)(t.Y)}}function we(e,t){return new G(e,t)}function mn(e){const t=dt(Fe,e.split(","),Float64Array);return we(Tt(t),nn(t))}function za(e){return m(I("%f,%f"))(e.X)(e.Y)}function Zn(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function Za(e,t,n){return new G(n.X+e,n.Y+t)}class Ja extends qe{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(I("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Ke(e,t,n,r,s,o){const i=pt(n),a=pt(r);return new Ja(e,t,i,a,_s(a,i),s,o)}function Qa(e){let t,n,r,s;const o=e.id;return Ke(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),Ut(n.left,n.top,n.width-20,n.height-20)),we(Fe((r=Qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Fe((s=Qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Cs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note client",t.setAttribute("style",m(v("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(v("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(v("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(v("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M 28.182377 18.180962 L 28.182377 66.817481 L 91.817624 66.817481 L 91.817624 18.180962 L 28.182377 18.180962 z M 31.818789 21.819335 L 88.181212 21.819335 L 88.181212 63.181069 L 31.818789 63.181069 L 31.818789 21.819335 z M 42.618187 23.415904 C 42.372545 23.415904 42.154849 23.465785 41.967006 23.566931 C 41.782775 23.668078 41.626319 23.808011 41.496273 23.98863 C 41.369838 24.169248 41.274931 24.382089 41.209911 24.624119 C 41.148499 24.866148 41.117725 25.12918 41.117725 25.414558 C 41.117725 25.826369 41.17246 26.181726 41.284443 26.481553 C 41.40004 26.78138 41.565893 27.011055 41.782636 27.17 C 41.999379 27.328945 42.264372 27.409289 42.575036 27.409289 C 42.737593 27.409289 42.879798 27.395348 43.002618 27.370061 C 43.125439 27.348389 43.243995 27.310489 43.359591 27.256301 L 43.359591 26.773799 C 43.243995 26.820758 43.130293 26.858658 43.01831 26.88756 C 42.906326 26.916462 42.785498 26.93071 42.655453 26.93071 C 42.43871 26.93071 42.254062 26.871433 42.102342 26.752224 C 41.954235 26.629403 41.842805 26.456424 41.766945 26.232457 C 41.691085 26.004877 41.653184 25.734719 41.653184 25.420442 C 41.653184 25.2037 41.674253 25.002528 41.713987 24.818296 C 41.753723 24.634066 41.813001 24.473066 41.892473 24.335795 C 41.975558 24.194913 42.07759 24.086065 42.200411 24.010205 C 42.323232 23.930733 42.467708 23.892522 42.633878 23.892522 C 42.76031 23.892522 42.880828 23.909354 42.992812 23.945479 C 43.104795 23.977991 43.206827 24.020435 43.300749 24.071008 L 43.48512 23.631657 C 43.355074 23.563024 43.217723 23.510872 43.073228 23.474746 C 42.928733 23.435012 42.777131 23.415904 42.618187 23.415904 z M 36.939971 23.419827 C 36.712391 23.419827 36.51349 23.459999 36.343709 23.539472 C 36.173927 23.615331 36.04143 23.729033 35.947509 23.880753 C 35.857199 24.032473 35.812173 24.221976 35.812173 24.449556 C 35.812173 24.659073 35.852345 24.832053 35.931818 24.969323 C 36.01129 25.106593 36.113322 25.222567 36.239755 25.316489 C 36.3698 25.406798 36.506841 25.489725 36.647724 25.565585 C 36.803056 25.645058 36.93132 25.720548 37.036079 25.789183 C 37.140835 25.857818 37.22118 25.931348 37.275368 26.01082 C 37.329556 26.090292 37.355785 26.194596 37.355785 26.324642 C 37.355785 26.433013 37.334094 26.534735 37.287136 26.628657 C 37.240176 26.718964 37.164685 26.790221 37.063538 26.844409 C 36.966004 26.894982 36.835468 26.920903 36.669299 26.920903 C 36.524804 26.920903 36.378056 26.901796 36.229948 26.862062 C 36.085454 26.818711 35.938706 26.764287 35.790598 26.699267 L 35.790598 27.207266 C 35.917031 27.268677 36.058925 27.315976 36.214257 27.348486 C 36.36959 27.384611 36.521502 27.403405 36.673222 27.403405 C 36.864678 27.403405 37.037347 27.377484 37.189067 27.326911 C 37.340787 27.276338 37.466468 27.20508 37.567614 27.111158 C 37.67237 27.013624 37.752715 26.893107 37.806904 26.752224 C 37.864701 26.611342 37.893205 26.454886 37.893205 26.281491 C 37.893205 26.075586 37.857575 25.909732 37.785328 25.783299 C 37.716693 25.653253 37.619514 25.542134 37.493082 25.451824 C 37.37026 25.357903 37.223512 25.26785 37.053731 25.181153 C 36.902011 25.09807 36.774058 25.026812 36.669299 24.9654 C 36.564539 24.900378 36.481923 24.824887 36.424126 24.741802 C 36.369937 24.658718 36.343709 24.552142 36.343709 24.422096 C 36.343709 24.313725 36.365085 24.221401 36.408435 24.145541 C 36.451783 24.066069 36.515915 24.006481 36.602612 23.963132 C 36.692922 23.919782 36.806623 23.896444 36.943893 23.896444 C 37.063101 23.896444 37.181347 23.912969 37.296943 23.945479 C 37.416151 23.977989 37.536979 24.025287 37.6598 24.086699 L 37.838286 23.631657 C 37.690179 23.559409 37.54312 23.507256 37.395012 23.474746 C 37.246905 23.438621 37.095303 23.419827 36.939971 23.419827 z M 46.725331 23.459055 L 48.161067 27.370061 L 48.627877 27.370061 L 47.192142 23.459055 L 46.725331 23.459055 z M 33.113304 23.48063 L 33.113304 27.348486 L 33.635033 27.348486 L 33.635033 25.879407 L 34.084191 25.879407 C 34.362344 25.879407 34.587475 25.827254 34.760869 25.722496 C 34.934263 25.614125 35.061906 25.467066 35.141378 25.279222 C 35.224463 25.091379 35.264946 24.875955 35.264946 24.633926 C 35.264946 24.261851 35.170349 23.977442 34.982506 23.778761 C 34.798275 23.58008 34.516137 23.48063 34.133225 23.48063 L 33.113304 23.48063 z M 33.635033 23.963132 L 34.099882 23.963132 C 34.3094 23.963132 34.465855 24.017866 34.570615 24.129849 C 34.675373 24.241833 34.729487 24.414813 34.729487 24.649617 C 34.729487 24.833848 34.701297 24.980597 34.647109 25.088968 C 34.592923 25.197336 34.51454 25.275408 34.409781 25.322373 C 34.308635 25.369337 34.17872 25.392983 34.023388 25.392983 L 33.635033 25.392983 L 33.635033 23.963132 z M 49.35359 24.190652 L 49.35359 24.66727 L 50.83836 25.420442 L 49.35359 26.173615 L 49.35359 26.650232 L 51.41697 25.561662 L 51.41697 25.267454 L 49.35359 24.190652 z M 44.96989 24.38483 C 44.865133 24.38483 44.782206 24.417879 44.720794 24.482899 C 44.659382 24.54431 44.628608 24.636944 44.628608 24.763378 C 44.628608 24.889813 44.659382 24.986681 44.720794 25.051701 C 44.782204 25.113113 44.865131 25.143887 44.96989 25.143887 C 45.067422 25.143887 45.145806 25.113113 45.207218 25.051701 C 45.272238 24.990291 45.305287 24.895694 45.305287 24.769262 C 45.305287 24.635605 45.274514 24.538427 45.213102 24.477015 C 45.155304 24.415603 45.074648 24.38483 44.96989 24.38483 z M 44.96989 26.656116 C 44.865133 26.656116 44.782206 26.686889 44.720794 26.748301 C 44.659382 26.809711 44.628608 26.902346 44.628608 27.02878 C 44.628608 27.155215 44.659382 27.252083 44.720794 27.317104 C 44.785816 27.382124 44.868743 27.413212 44.96989 27.413212 C 45.067422 27.413212 45.145806 27.382124 45.207218 27.317104 C 45.272238 27.252081 45.305287 27.155213 45.305287 27.02878 C 45.305287 26.898733 45.274514 26.806098 45.213102 26.748301 C 45.151692 26.686889 45.071037 26.656116 44.96989 26.656116 z M 28.0745 68.021773 L 11.55962 101.05153 L 108.44038 101.05153 L 91.9255 68.021773 L 87.433923 68.021773 L 88.330277 69.814481 L 101.94034 97.034613 L 18.059657 97.034613 L 31.669723 69.814481 L 32.566077 68.021773 L 28.0745 68.021773 z M 34.894244 72.672222 L 32.03258 79.033001 L 42.271021 79.033001 L 43.765598 72.672222 L 34.894244 72.672222 z M 44.799249 72.672222 L 43.304672 79.033001 L 53.758866 79.033001 L 54.257058 72.672222 L 44.799249 72.672222 z M 55.26325 72.672222 L 54.765058 79.033001 L 65.234943 79.033001 L 64.73675 72.672222 L 55.26325 72.672222 z M 65.742942 72.672222 L 66.241134 79.033001 L 76.695328 79.033001 L 75.200751 72.672222 L 65.742942 72.672222 z M 76.234402 72.672222 L 77.728979 79.033001 L 87.967421 79.033001 L 85.105757 72.672222 L 76.234402 72.672222 z M 31.579499 80.037231 L 29.170916 85.391818 L 40.778405 85.391818 L 42.035655 80.037231 L 31.579499 80.037231 z M 43.069306 80.037231 L 41.812056 85.391818 L 53.262635 85.391818 L 53.680411 80.037231 L 43.069306 80.037231 z M 54.686602 80.037231 L 54.268827 85.391818 L 65.731174 85.391818 L 65.313398 80.037231 L 54.686602 80.037231 z M 66.31959 80.037231 L 66.737365 85.391818 L 78.187944 85.391818 L 76.930695 80.037231 L 66.31959 80.037231 z M 77.964346 80.037231 L 79.221595 85.391818 L 90.829085 85.391818 L 88.420501 80.037231 L 77.964346 80.037231 z M 28.717835 86.396048 L 25.856171 92.756827 L 39.048462 92.756827 L 40.543039 86.396048 L 28.717835 86.396048 z M 41.57669 86.396048 L 40.082113 92.756827 L 52.685987 92.756827 L 53.18418 86.396048 L 41.57669 86.396048 z M 54.190371 86.396048 L 53.692179 92.756827 L 66.307821 92.756827 L 65.809629 86.396048 L 54.190371 86.396048 z M 66.815821 86.396048 L 67.314013 92.756827 L 79.917887 92.756827 L 78.42331 86.396048 L 66.815821 86.396048 z M 79.456961 86.396048 L 80.951539 92.756827 L 94.143829 92.756827 L 91.282165 86.396048 L 79.456961 86.396048 z"),o.setAttribute("transform","matrix(0.99578756,0,0,0.99578756,0.25274623,0.63390548)");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 30.525391 21.326172 L 30.525391 64.583984 L 89.474609 64.583984 L 89.474609 21.326172 L 30.525391 21.326172 z M 32.341797 68.369141 L 17.003906 98.341797 L 102.99609 98.341797 L 87.658203 68.369141 L 32.341797 68.369141 z"),i.classList.add("background"),r.appendChild(s),r.appendChild(i),r.appendChild(o),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("br"),c=document.createElement("span");c.id=`${e.Id}IPv4`,c.className="device-prop ipv4 mono",c.contentEditable="true",c.textContent=`${H(e.IPv4)}`;const f=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}SubnetMask`,d.className="device-prop subnetmask mono",d.contentEditable="true",d.textContent=`${H(e.SubnetMask)}`;const p=document.createElement("span");return p.id=`${e.Id}Kind`,p.className="no-display",p.textContent="Client",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t.appendChild(c),t.appendChild(f),t.appendChild(d),t.appendChild(p),t}class el extends qe{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(I("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Mt(e,t,n,r,s,o){const i=b(pt,b(l=>l.trim(),Ve(";",n))),a=b(pt,b(l=>l.trim(),Ve(";",r)));return new el(e,t,i,a,Fo(_s,a,i),s,o)}function tl(e){let t,n,r,s;const o=e.id;return Mt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),Ut(n.left,n.top,n.width-20,n.height-20)),we(Fe((r=Qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Fe((s=Qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Ss(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note router",t.setAttribute("style",m(v("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(v("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(v("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(v("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 60,10 h 50 V 45 H 10 V 10 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"),i.classList.add("inner"),r.appendChild(s),r.appendChild(o),r.appendChild(i),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("br"),c=document.createElement("span");c.id=`${e.Id}IPv4`,c.className="device-prop ipv4 mono",c.contentEditable="true";const f=D("; ",b(H,e.IPv4));c.textContent=f;const d=document.createElement("br"),p=document.createElement("span");p.id=`${e.Id}SubnetMask`,p.className="device-prop subnetmask mono",p.contentEditable="true";const g=D("; ",b(H,e.SubnetMask));p.textContent=g;const h=document.createElement("span");return h.id=`${e.Id}Kind`,h.className="no-display",h.textContent="Router",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t.appendChild(c),t.appendChild(d),t.appendChild(p),t.appendChild(h),t}class nl extends qe{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return m(I("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function fn(e,t,n,r){return new nl(e,t,n,r)}function rl(e){let t,n,r,s;const o=e.id;return fn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),Ut(n.left,n.top,n.width-20,n.height-20)),we(Fe((r=Qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Fe((s=Qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Ms(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note hub",t.setAttribute("style",m(v("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(v("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(v("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(v("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 60,10 h 50 V 45 H 10 V 10 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"),i.classList.add("inner"),r.appendChild(s),r.appendChild(o),r.appendChild(i),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent="Hub",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}class fe extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function Bt(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new fe(0,[Qa(e)]);case"Router":return new fe(1,[tl(e)]);case"Hub":return new fe(2,[rl(e)]);default:return}}function sl(e){switch(e.tag){case 1:return Ss(e.fields[0]);case 2:return Ms(e.fields[0]);default:return Cs(e.fields[0])}}function Jt(e){return e.tag===0}function At(e){return e.tag===1}function pn(e){return e.tag===2}function Jn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function As(e,t){switch(t.tag){case 0:return N(t.fields[0].IPv4,e);case 1:return X(e,t.fields[0].IPv4,{Equals:N,GetHashCode:ir});default:return!1}}function Qn(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return Ge();default:return W(e.fields[0].NetworkAddress)}}function ol(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function gn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}function Kt(){let e;const t=document.getElementsByClassName("selected");e=Array.from(t),e.forEach(n=>{n.classList.remove("selected")})}function Lt(e,t){const n=t.target;Kt();let r;const s=e.querySelectorAll("path");r=Array.from(s),t.buttons===1&&Vt(n,r,{Equals:N,GetHashCode:Te})&&(e.classList.add("selected"),e.onlostpointercapture=o=>{e.onpointermove=i=>{}},e.onpointerup=o=>{e.onpointermove=i=>{}},e.onpointermove=o=>{if(o.buttons===1){const i=e.offsetTop+o.movementY,a=e.offsetLeft+o.movementX;e.setAttribute("style",m(v("top: %f%P()px; left: %f%P()px;",[i,a]))),e.draggable=!1,e.setPointerCapture(o.pointerId)}})}class _e extends nt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function il(e){switch(e){case"Client":return new _e(0,[]);case"Server":return new _e(1,[]);case"Router":return new _e(2,[]);case"Hub":return new _e(3,[]);case"ProxyServer":return new _e(4,[]);case"LANCable":return new _e(5,[]);default:return}}class al extends qe{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=H(t.Kind),r=D(" ",b(H,t.Points));return m(I("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function hn(e,t,n,r,s,o){return new al(e,t,n,r,s,o)}function ll(e){let t;const n=e.id,r=document.getElementById(n+"Name").innerText,s=il(document.getElementById(n+"Kind").innerText);if(s!=null){const o=s;let i;const l=document.getElementById(n+"Svg").getBoundingClientRect();return i=Ut(l.left,l.top,l.width,l.height),hn(n,o,r,b(mn,Ve(" ",(t=document.getElementById(n+"Polyline"),t.getAttribute("points")))),i,we(0,0))}else return}function er(e){const t=document.createElement("div");t.id=e.Id,t.className="lan-cable";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.setAttribute("viewBox",m(v("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",m(v("%f%P()px",[e.Area.Width]))),n.setAttribute("height",m(v("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${D(" ",b(za,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),a=document.createElement("span");a.id=`${e.Id}Name`,a.textContent=`${e.Name}`;const l=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.textContent=`${H(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}function yn(e,t){let n;const r=b(s=>Za(t.Area.X,t.Area.Y,s),t.Points);return rn((n=ol(e),s=>Ka(n,s)),r)}function tr(e,t){if(t.buttons===1){Kt(),e.parentElement.parentElement.parentElement.classList.add("selected"),e.onlostpointercapture=c=>{e.onpointermove=f=>{}};const r=dt(mn,e.getAttribute("points").split(" ")),s=Tt(r),o=nn(r),i=new G(t.offsetX,t.offsetY);let a,l;const u=[s,o];l=an(c=>Zn(i,c),u[0],u[1]),a=ht(l[0],l[1]),e.onpointermove=c=>{if(c.buttons===1){const f=dt(mn,e.getAttribute("points").split(" ")),d=Tt(f),p=nn(f),g=new G(c.offsetX,c.offsetY);let h,w;const L=[d,p];w=an($=>[$,Zn(g,$)],L[0],L[1]);const _=w[1][0],B=w[0][0];h=w[0][1]<w[1][1]?[B,_]:[_,B];const M=h[0],C=h[1];a<5?e.setAttribute("points",m(v("%f%P(),%f%P() %f%P(),%f%P()",[M.X+c.movementX,M.Y+c.movementY,C.X,C.Y]))):e.setAttribute("points",m(v("%f%P(),%f%P() %f%P(),%f%P()",[M.X+c.movementX,M.Y+c.movementY,C.X+c.movementX,C.Y+c.movementY]))),e.draggable=!1,e.setPointerCapture(c.pointerId)}}}}function ul(e,t,n){const r=Er(n),s=wr(R(o=>!pn(o),n));return Wo(o=>R(i=>pn(i)||At(r)?!0:s!=null?!N(Na(Qn(s),Qn(i)),Ge()):!1,R(i=>yn(i,o),R(i=>X(i,n,{Equals:N,GetHashCode:ir})===!1,t))),R(o=>yn(r,o),e))}function cl(e,t,n){return b(r=>Me(n,W(r)),ul(e,t,n))}function dl(e,t,n,r,s){const o=(i,a,l,u,c)=>{const f=cl(i,a,c);return rn(d=>As(u,d),b(Er,f))?!0:l===0?!1:rn(Ks(o)(i)(a)(l-1)(u),f)};return o(e,t,n,r,W(s))}const $s=`\r
        <p>\r
            IP アドレスを用いた通信の簡単なシミュレーションができます。<br>\r
            「クライアント」や「ルータ」、「ハブ」といったデバイスをマウスでドラッグして配置したり、<br>\r
            「LAN ケーブル」を伸ばしてデバイス同士を接続したりして通信させることができます。\r
        </p>\r
        <p>\r
            LAN ケーブルの端にカーソルを合わせてドラッグすると、長さや角度を調節できます。<br>\r
            LAN ケーブルの端がデバイスに重なっていると「繋がっている」と認識します。\r
        </p>\r
        <p>\r
            デバイス同士が LAN ケーブルで繋がっている状態で、「送信元 IPv4」と「送信先 IPv4」を入力して<br>\r
            「ping」ボタンをクリックすると、通信が成功したかどうかが表示されます。<br>\r
            通信に失敗した場合は、デバイス同士の接続の仕方を変えてみたり、<br>\r
            クライアントやルータの IP アドレスをクリックして設定しなおしたりしてください。\r
        </p>\r
        <p>\r
            <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>マークのボタンをクリックすると、デバイスやケーブルを追加できます。<br>\r
            <span class="material-symbols-outlined symbols18" translate="no">delete</span>マークのボタンをクリックすると、選択中のデバイスやケーブルを削除できます。\r
        </p>\r
    `,ml=`
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
            <button type="button" id="deleteButton" class="submit-button gray display-order-7">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">delete</span>
                    削除
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
            ${$s}
        </div>
        `;function _t(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Ct(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function Qt(e){S(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=r.innerText,i=dn(o),a=document.getElementById("errorArea");if(a.innerText="",i.tag===1){const l=document.getElementById(e.id+"Name").innerText,u=ct(o)?`${l} の ${n} を入力してください。`:We(o)?`${l} の ${n} を入力してください。`:Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",o)?mt(c=>c>=0?c<=255:!1,b(c=>K(c,511,!1,32),Ve(".",o)))?"不明なエラーです。":`${l} の ${n} の数値の範囲が正しくありません。`:`${l} の ${n} の形式が正しくありません。`;a.innerText=u,setTimeout(()=>{r.focus()},0)}})},b(t=>[t,document.getElementById(e.id+t)],y(["IPv4","SubnetMask"])))}function fl(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],a=i[0];return`
        <div class="history-container ${a}"">
            ${i[1]}<span class ="${a}">${gn(e)} [${s=t,H(s)}] -> ${o=n,H(o)} ${i[2]}</span>
        </div>
        `}function pl(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=Vt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:tt});switch(e.key){case"\\":{const a=b(l=>document.getElementById(l),y(["sourceInput","destinationInput"]));o||(z(Bn(u=>u.value==="",a),st(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Delete":{const a=document.getElementById("playArea");let l;const u=document.getElementsByClassName("selected");l=Array.from(u),l.forEach(c=>{a.removeChild(c)});break}case"Escape":{o?S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"])):Kt();break}}break}}}function gl(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=d=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=d=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ml,document.querySelector("#submitButton").className="submit-button network-simulator",document.getElementById("helpButton").onclick=d=>{S(p=>{document.getElementById(p).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=d=>{S(p=>{document.getElementById(p).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=d=>{S(p=>{document.getElementById(p).classList.remove("active")},y(["helpWindow","helpBarrier"]))};const t=document.getElementById("playArea"),n=t.getBoundingClientRect(),r=y([new fe(0,[Ke("device1","クライアント(1)","10.0.0.1","255.255.255.0",new ne(0,0,100,100),new G(0+n.left,100+n.top))]),new fe(0,[Ke("device2","クライアント(2)","10.0.0.2","255.255.255.0",new ne(0,0,100,100),new G(150+n.left,100+n.top))]),new fe(1,[Mt("device3","ルータ(1)","10.0.0.254","255.255.255.0",new ne(0,0,100,35),new G(300+n.left,100+n.top))]),new fe(0,[Ke("device4","クライアント(3)","10.0.1.18","255.255.255.240",new ne(0,0,100,100),new G(450+n.left,100+n.top))]),new fe(0,[Ke("device5","クライアント(4)","10.0.1.19","255.255.255.240",new ne(0,0,100,100),new G(600+n.left,100+n.top))]),new fe(1,[Mt("device6","ルータ(2)","10.0.1.30","255.255.255.240",new ne(0,0,100,35),new G(750+n.left,100+n.top))]),new fe(2,[fn("device7","ハブ(1)",new ne(0,0,100,35),new G(900+n.left,100+n.top))])]);b(d=>document.getElementById("playArea").appendChild(d),b(sl,r));const s=b(d=>hn(m(v("lancable%d%P()",[d])),new _e(5,[]),m(v("LANケーブル(%d%P())",[d])),y([we(t.offsetLeft+5+(d-1)*250,t.offsetTop+5),we(t.offsetLeft+195+(d-1)*250,t.offsetTop+45)]),new ne(0,0,window.innerWidth,window.innerHeight),new G((d-1)*250+t.offsetLeft,t.offsetTop)),Pe(Yt(1,1,4)));b(d=>document.getElementById("playArea").appendChild(d),b(er,s)),S(d=>{d.onpointerdown=p=>{Lt(d,p)},_t(d),Ct(d)},b(d=>document.getElementById(d),b(Jn,r))),S(d=>{Qt(d)},b(d=>document.getElementById(d),b(Jn,R(d=>Jt(d)?!0:At(d),r)))),S(d=>{const p=d.querySelector("polyline");p.onpointerdown=g=>{tr(p,g)}},b(d=>document.getElementById(d),b(d=>d.Id,s)));const o=document.getElementById("submitButton");o.onclick=d=>{let p,g,h,w,L;d.preventDefault();const _=b(A,R(ae=>ae!=null,b(Bt,y((p=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(p)))))),B=b(A,R(ae=>ae!=null,b(ll,y((g=document.getElementById("playArea").getElementsByClassName("lan-cable"),Array.from(g)))))),M=document.getElementById("errorArea"),C=document.getElementById("outputArea");M.innerText="",C.innerText="";const $=document.getElementById("sourceInput"),V=document.getElementById("destinationInput"),at=dn($.value),Ue=dn(V.value);if(at.tag===0){const ae=at.fields[0];if(Ue.tag===0){const de=Ue.fields[0],Re=Bn(me=>As(ae,me),R(me=>Jt(me)?!0:At(me),_));if(Re!=null){const me=Re;if(En(R(Et=>yn(me,Et),B)))M.innerText=(h=gn(me),w=H(ae),m(I("%s [%s] はLANケーブルに繋がっていません。"))(h)(w));else{let Et;const Ts=gn(me),qs=H(ae),Hs=H(de);Et=m(I('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(Ts)(qs)(Hs),C.innerHTML=Et;const Ps=fl(me,ae,de,dl(B,_,128,de,me));switch(C.innerHTML=Ps,document.activeElement.id){case"sourceInput":{$.focus();break}case"destinationInput":{V.focus();break}}}}else M.innerText=(L=H(ae),m(I("IPv4 %s を持つデバイスが見つかりません。"))(L)),$.focus()}else{const de=ct(V.value)||We(V.value)?"送信先 IPv4 を入力してください。":Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",V.value)?mt(Re=>Re>=0?Re<=255:!1,b(Re=>K(Re,511,!1,32),Ve(".",V.value)))?"不明なエラーです。":"送信先 IPv4 の数値の範囲が正しくありません。":"送信先 IPv4 の形式が正しくありません。";M.innerText=de,V.focus()}}else{const ae=ct($.value)||We($.value)?"送信元 IPv4 を入力してください。":Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",$.value)?mt(de=>de>=0?de<=255:!1,b(de=>K(de,511,!1,32),Ve(".",$.value)))?"不明なエラーです。":"送信元 IPv4 の数値の範囲が正しくありません。":"送信元 IPv4 の形式が正しくありません。";M.innerText=ae,$.focus()}};const i=document.getElementById("addClientButton");i.onclick=d=>{let p,g;const h=document.getElementById("playArea"),w=h.getBoundingClientRect(),L=h.getElementsByClassName("lan-cable").item(0),_=J(R(Jt,b(A,R(C=>C!=null,b(Bt,y((p=h.getElementsByClassName("device-container"),Array.from(p))))))))+1|0,B=m(v("client%d%P()",[_]));g=Cs(Ke(B,m(v("クライアント(%d%P())",[_])),"10.0.0.1","255.255.255.0",new ne(0,0,100,100),new G(0+w.left,0+w.top))),h.insertBefore(g,L);const M=document.getElementById(B);M.onpointerdown=C=>{Lt(M,C)},_t(document.getElementById(B)),Ct(document.getElementById(B)),Qt(document.getElementById(B))};const a=document.getElementById("addRouterButton");a.onclick=d=>{let p,g,h;const w=document.getElementById("playArea"),L=w.getBoundingClientRect(),_=w.getElementsByClassName("lan-cable").item(0),B=J(R(At,b(A,R($=>$!=null,b(Bt,y((p=w.getElementsByClassName("device-container"),Array.from(p))))))))|0,M=m(v("router%d%P()",[B+1]));g=Ss((h=B|0,Mt(M,m(v("ルータ(%d%P())",[h+1])),`10.0.${h}.254`,"255.255.255.0",new ne(0,0,100,35),new G(0+L.left,0+L.top)))),w.insertBefore(g,_);const C=document.getElementById(M);C.onpointerdown=$=>{Lt(C,$)},_t(document.getElementById(M)),Ct(document.getElementById(M)),Qt(document.getElementById(M))};const l=document.getElementById("addHubButton");l.onclick=d=>{let p,g;const h=document.getElementById("playArea"),w=h.getBoundingClientRect(),L=h.getElementsByClassName("lan-cable").item(0),_=J(R(pn,b(A,R(C=>C!=null,b(Bt,y((p=h.getElementsByClassName("device-container"),Array.from(p))))))))+1|0,B=m(v("hub%d%P()",[_]));g=Ms(fn(B,m(v("ハブ(%d%P())",[_])),new ne(0,0,100,35),new G(0+w.left,0+w.top))),h.insertBefore(g,L);const M=document.getElementById(B);M.onpointerdown=C=>{Lt(M,C)},_t(document.getElementById(B)),Ct(document.getElementById(B))};const u=document.getElementById("addLANCableButton");u.onclick=d=>{let p;const g=document.getElementById("playArea"),h=g.getElementsByClassName("lan-cable").length+1|0,w=m(v("cable%d%P()",[h]));p=er(hn(w,new _e(5,[]),m(v("LANケーブル(%d%P())",[h])),y([we(g.offsetLeft+5,g.offsetTop+5),we(g.offsetLeft+195,g.offsetTop+45)]),new ne(0,0,window.innerWidth,window.innerHeight),new G(g.offsetLeft,g.offsetTop))),g.appendChild(p);const _=document.getElementById(w).querySelector("polyline");_.onpointerdown=B=>{tr(_,B)}};const c=document.getElementById("deleteButton");c.onclick=d=>{const p=document.getElementById("playArea");let g;const h=document.getElementsByClassName("selected");g=Array.from(h),g.forEach(w=>{p.removeChild(w)})};const f=document.querySelector("main");f.onpointerdown=d=>{d.buttons===1&&N(d.target,f)&&Kt()},document.onkeydown=d=>{pl(d)}}const hl=`
        <h2>このサイトについて</h2>
        <p>
            <span translate="no">taidalab</span>（タイダラブ）は、<span translate="no">taidalog</span> が作成したプログラム置き場です。<br>
            10進数と2進数の変換の反復練習ツールなど、高校の「情報&#8544;」の学習ツールを中心に公開しています。<br>
            利用前に<a translate="no" href="https://github.com/taidalog/taidalab/blob/main/README.ja.md">README</a>をご一読ください。<br>
            <span translate="no">F#</span> で書いたものを <span translate="no">Fable</span> で <span translate="no">JavaScript</span> にトランスパイルしています。<span translate="no">F#</span> 楽しい。
        </p>
        <h2>それぞれのページについて</h2>
        <dl id="explanation" class="explanation">
            <dt>
                <h3><a href="${E}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                ${Wr}
            </dd>
            
            <dt>
                <h3><a href="${E}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Xr}
            </dd>
            
            <dt>
                <h3><a href="${E}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${zr}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${es}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${ts}
            </dd>
            
            <dt>
                <h3><a href="${E}endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${ss}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${as}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${ls}
            </dd>
            
            <dt>
                <h3><a href="${E}endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${ds}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${fs}
            </dd>

            <dt>
                <h3><a href="${E}endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${bs}
            </dd>
            
            <dt>
                <h3><a href="${E}iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${vs}
            </dd>
            
            <dt>
                <h3><a href="${E}network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${$s}
            </dd>
        </dl>`;function yl(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>about - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=hl,document.onkeydown=t=>{}}const bl=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function Il(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ご利用について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=bl,document.onkeydown=t=>{}}const wl=`\r
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
        </p>`;function El(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=wl,document.onkeydown=t=>{}}function nr(e){const t=document.getElementById("numberInput"),n=ke(t.value),r=it(n);if(t.focus(),r.tag===0){document.getElementById("errorArea").innerHTML="";const s=xe(Le(9,r.fields[0])),o=je(r);if(o.tag===0){const i=o.fields[0]|0,a=ge(U(3," ",T(i))),l=document.getElementById("outputArea"),u=Ne("<br>",y([Ye(i===e,s,2,a,10),l.innerHTML]));l.innerHTML=u,i!==e||(window.history.replaceState(Se(),"","http://localhost:8080/taidalab/"),mr())}}else document.getElementById("errorArea").innerHTML=Xe(T(e),n,r.fields[0])}function vl(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Fi,document.querySelector("#submitButton").className="submit-button display-order-3 not-found",document.querySelector("#questionArea").innerHTML=ve,document.getElementById("questionSpan").innerText=T(404),document.getElementById("srcRadix").innerText=m(I("(%d)"))(10),document.getElementById("dstRadix").innerText=T(2),document.getElementById("binaryRadix").innerHTML=m(I("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),nr(404)},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),nr(404)}}function Nn(e){const t=e.pathname;t===E?mr():t===`${E}endless-binary/dec2bin-1/`?Ji():t===`${E}endless-binary/dec2bin-2/`?ea():t===`${E}endless-binary/bin2dec-1/`?aa():t===`${E}endless-binary/bin2dec-2/`?ca():t===`${E}endless-binary/power-of-two-1/`?ma():t===`${E}endless-binary/power-of-two-2/`?pa():t===`${E}endless-binary/addition/`?Ia():t===`${E}endless-binary/subtraction/`?wa():t===`${E}endless-binary/complement/`?Ba():t===`${E}endless-binary/dec2hex/`?Aa():t===`${E}endless-binary/hex2dec/`?qa():t===`${E}iro-iroiro/`?Ya():t===`${E}network-simulator/`?gl():t===`${E}about/`?yl():t===`${E}terms/`?Il():t===`${E}information-policy/`?El():vl()}function kn(){let e;const t=document.querySelector("aside").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==E).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function xn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState(Se(),"",e.href),Nn((n=e.href,new URL(n)));let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let a;return bn((a=i.href,new URL(a)))}),r.forEach(i=>{xn(i)}),kn()}}function Bl(){document.body.innerHTML="",document.body.innerHTML=oo,document.querySelector("footer").innerHTML=lo,document.querySelector("aside").innerHTML=io}window.addEventListener("DOMContentLoaded",e=>{let t;Bl();const n=cr((t=window.location.href,new URL(t)));window.history.replaceState(Se(),"",n.href),Nn(n);let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let a;return bn((a=i.href,new URL(a)))}),r.forEach(i=>{xn(i)}),kn()});window.addEventListener("popstate",e=>{let t;const n=cr((t=window.location.href,new URL(t)));window.history.replaceState(Se(),"",n.href),Nn(n);let r,s,o;const i=document.querySelector("aside").querySelectorAll("a");o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return bn((l=a.href,new URL(l)))}),r.forEach(a=>{xn(a)}),kn()});
