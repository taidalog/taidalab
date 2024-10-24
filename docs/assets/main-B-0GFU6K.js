(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ot=Symbol("numeric");function vs(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[ot])}function Bs(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function _s(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[ot]().multiply(t)}function As(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[ot]().toFixed(t)}function Hn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[ot]().toPrecision(t)}function Rn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[ot]().toExponential(t)}function Dn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[ot]().toHex()}function Pe(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Ls(e){return e!=null&&typeof e.GetEnumerator=="function"}function Ss(e){return e!=null&&typeof e.CompareTo=="function"}function Ms(e){return e!=null&&typeof e.Equals=="function"}function tr(e){return e!=null&&typeof e.GetHashCode=="function"}function Ts(e){return e!=null&&typeof e.Dispose=="function"}function Z(e){Ts(e)&&e.Dispose()}function $e(){return null}function Tt(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class ks{constructor(t){this.iter=t,this.current=$e()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Se(e){return Ls(e)?e.GetEnumerator():new ks(e[Symbol.iterator]())}function nr(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function On(e,t){return e.toString(10).padStart(t,"0")}function Wn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function T(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Be{static id(t){return Be.idMap.has(t)||Be.idMap.set(t,++Be.count),Be.idMap.get(t)}}Be.idMap=new WeakMap;Be.count=0;function it(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function D(e){return e*2654435761|0}function rr(e){return it(e.toString(32))}function Wt(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Cs(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return D(e);case"bigint":return rr(e);case"string":return it(e);default:return D(Be.id(e))}}function Ps(e){return tr(e)?e.GetHashCode():Cs(e)}function $s(e){return e.getTime()}function xs(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Ge(e[r]);return Wt(n)}function Ge(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return D(e);case"bigint":return rr(e);case"string":return it(e);default:{if(tr(e))return e.GetHashCode();if(Pe(e))return xs(e);if(e instanceof Date)return $s(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Ge(r));return Wt(n)}else return D(Be.id(e))}}}function sr(e){return Ps(e)}function Ns(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function or(e,t){return Ns(e,t,Q)}function qs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!Q(e[n[s]],t[r[s]]))return!1;return!0}function Q(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:Ms(e)?e.Equals(t):Pe(e)?Pe(t)&&or(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&ir(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&qs(e,t)}function ir(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Wn(e),r=t.getTime()+Wn(t)),n===r?0:n<r?-1:1}function mt(e,t){return e===t?0:e<t?-1:1}function Hs(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function lr(e,t){return Hs(e,t,je)}function Rs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=je(e[i],t[i]),o!==0)return o}return 0}function je(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:Ss(e)?e.CompareTo(t):Pe(e)?Pe(t)?lr(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?ir(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?Rs(e,t):-1}const pn=new WeakMap;function pt(e){if(e==null)return null;const t=(n,r,s)=>e(n)(r)(s);return pn.set(t,e),t}function kt(e){return pn.get(e)??(t=>n=>r=>e(t,n,r))}function Ds(e){return pn.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function Os(e){let t=0,n="[";for(const r of e){if(t===0)n+=$(r);else if(t===100){n+="; ...";break}else n+="; "+$(r);t++}return n+"]"}function $(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return Os(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+$(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function Ws(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=$(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>$(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class lt{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Ws(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Ge(n));return t.splice(0,0,D(this.tag)),Wt(t)}Equals(t){return this===t?!0:Tt(this,t)&&this.tag===t.tag?or(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Tt(this,t)?this.tag===t.tag?lr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Fs(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function Vs(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+$(n)).join(`
  `)+" }"}function Xs(e){const t=Object.values(e).map(n=>Ge(n));return Wt(t)}function Ys(e,t){if(e===t)return!0;if(Tt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!Q(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function js(e,t){if(e===t)return 0;if(Tt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=je(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class He{toJSON(){return Fs(this)}toString(){return Vs(this)}GetHashCode(){return Xs(this)}Equals(t){return Ys(this,t)}CompareTo(t){return js(this,t)}}class nt{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}function Gs(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+On(n,2)+":"+On(r,2)}function Us(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Gs(e.offset??0)}function Ks(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function Js(e,t,n){return e.offset!=null?Us(e):Ks(e)}function gn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function Zs(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function ar(e,t,n=0){return e.lastIndex=n,e.test(t)}function Qs(e,t,n=0){return e.lastIndex=n,e.exec(t)}const ct=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,dt=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function zs(e,t){return Bs(e,t)<0}function v(e){return{input:e,cont:to(e)}}function B(e,t){let n=0,r=0,s="";dt.lastIndex=0;let o=dt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,l,a,u,c]=o;r=dt.lastIndex,s+=ur(t[n++],l,a,u,c),dt.lastIndex=r-1,o=dt.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function eo(e,t){return typeof t=="string"?e(t):t.cont(e)}function p(e){return eo(t=>t,e)}function ur(e,t,n,r,s){let o="";if(t=t||"",s=s||"",vs(e))switch(s.toLowerCase()!=="x"&&(zs(e,0)?(e=_s(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=As(e,r);break;case"g":case"G":e=r!=null?Hn(e,r):Hn(e);break;case"e":case"E":e=r!=null?Rn(e,r):Rn(e);break;case"x":e=Dn(e);break;case"X":e=Dn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=Js(e):e=$(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,l=t.indexOf("-")>=0,a=l||!i?" ":"0";a==="0"?(e=zt(e,n-o.length,a,l),e=o+e):e=zt(o+e,n,a,l)}return e}function cr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const l=t.slice(),a=n.slice();for(const u of o){const[,,c,d,m,f]=a[0];let g=d;if(s>=0)g=s,s=-1;else if(g==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=l[0],i+=ur(u,c,g,m,f),l.splice(0,1),a.splice(0,1)}return a.length===0?(i+=l[0],e(i)):cr(e,l,a,i,s)}}function to(e){return t=>{ct.lastIndex=0;const n=[],r=[];let s=0,o=ct.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=ct.lastIndex,ct.lastIndex-=1,o=ct.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),cr(t,n,r))}}function dr(e){return typeof e!="string"||e.length===0}function R(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function zt(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function no(e,t,n){return zt(e,t,n)}function mr(e,t,n){return e.replace(new RegExp(Zs(t),"g"),n)}const ro=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <aside></aside>\r
                    <main></main>\r
                </div>\r
                <footer></footer>\r
            </div>`,oe=`\r
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
            `,so=`\r
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
            </ul>`,we='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',oo="Version 4.6.3",io=p(v(`\r
                <small class="footer-container">\r
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>\r
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>\r
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>\r
                </small>`))(oo),fr=`\r
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
            </div>`,lo="https://taidalog.github.io/",pr="/taidalab/";function gr(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),$(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+$(s))}else return e}function ao(e,t){return t.origin===e?t.pathname.startsWith(pr):!1}function hr(e){return ao(lo,e)}const uo=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function br(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1 translate="no">taidalab</h1>',document.querySelector("main").innerHTML=uo,document.onkeydown=t=>{}}class rt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ge(this.value)}Equals(t){return t==null?!1:Q(this.value,t instanceof rt?t.value:t)}CompareTo(t){return t==null?1:je(this.value,t instanceof rt?t.value:t)}}function S(e){if(e==null)throw new Error("Option has no value");return e instanceof rt?e.value:e}function V(e){return e==null||e instanceof rt?new rt(e):e}function J(e,t){return e!=null?S(e):t}function _e(e,t){return t!=null?V(e(S(t))):void 0}const co="The index was outside the range of elements in the collection.",Ft="Collection was empty.",mo="The input must be non-negative.",fo="An index satisfying the predicate was not found in the collection.",yr="The input sequence has an insufficient number of elements.";function po(e,t){return typeof e=="function"?new e(t):new Array(t)}function go(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Me(e){const t=new nt(0);if(go(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function en(e,t){return e>t?e:t}function Te(e,t){return e<t?e:t}function ho(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function bo(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Ae(e.length-1,e)}function hn(e,t,n){const r=t.length|0,s=po(n,r);for(let o=0;o<=r-1;o++)Ir(s,o,e(Ae(o,t)));return s}function yo(e,t,n,r,s){const o=J(n,0)|0,i=J(_e(a=>o+a,r),e.length)|0;return(a=>{e:for(;;){const u=a;if(u>=i)return-1;if(s.Equals(t,Ae(u,e)))return u|0;a=u+1;continue e}})(o)|0}function bn(e,t,n){return yo(t,e,void 0,void 0,n)>=0}function wo(e){return e.slice().reverse()}function Io(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function wr(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return Ae(0,e)}function Ae(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function Ir(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class z extends He{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+R("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,l=o,a=i.tail,u=l.tail;if(a!=null)if(u!=null){const c=S(a),d=S(u);if(Q(i.head,l.head)){s=c,o=d;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,l=s,a=o,u=a.tail;if(u!=null){const c=S(u);if(i>18)return l|0;r=i+1,s=(l<<1)+Ge(a.head)+631*i,o=c;continue e}else return l|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,l=o,a=i.tail,u=l.tail;if(a!=null)if(u!=null){const c=S(a),d=S(u),m=je(i.head,l.head)|0;if(m===0){s=c,o=d;continue e}else return m|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return vo(this)}[Symbol.iterator](){return nr(Se(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Se(this)}}class Eo{constructor(t){this.xs=t,this.it=this.xs,this.current=$e()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=S(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=$e()}Dispose(){}}function vo(e){return new Eo(e)}function q(){return new z($e(),void 0)}function ht(e,t){return new z(e,t)}function Y(e){return e.tail==null}function Er(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=S(i);continue e}else return s|0}})(0,e)|0}function ie(e){if(e.tail!=null)return e.head;throw new Error(Ft+"\\nParameter name: list")}function x(e){const t=e.tail;if(t!=null)return S(t);throw new Error(Ft+"\\nParameter name: list")}function Bo(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,l=i.tail;if(l!=null){if(o===t)return i.head;r=o+1,s=S(l);continue e}else throw new Error(co+"\\nParameter name: index")}})(0,e)}function _o(){throw new Error(fo)}function Ue(){return q()}function ke(e,t){return ht(e,t)}function O(e){return ht(e,q())}function yn(e){return Y(e)}function U(e){return Er(e)}function Re(e){return ie(e)}function wn(e){return x(e)}function vr(e){e:for(;;){const t=e;if(Y(t))return;{const n=x(t);if(Y(n))return V(ie(t));e=n;continue e}}}function Vt(e){const t=vr(e);if(t==null)throw new Error(Ft);return S(t)}function Br(e){const t=Er(e)|0,n=ho(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,l=o;if(!Y(l)){Ir(n,i,ie(l)),s=i+1,o=x(l);continue e}break}})(0,e),n}function le(e,t,n){let r=t,s=n;for(;!Y(s);)r=e(r,Re(s)),s=x(s);return r}function Ct(e){return le((t,n)=>ht(n,t),q(),e)}function Ao(e,t,n){return((s,o,i)=>{e:for(;;){const l=s,a=o,u=i;if(Y(u))return a;s=l+1,o=e(l,a,ie(u)),i=x(u);continue e}})(0,t,n)}function Lo(e,t,n,r){let s=t,o=n,i=r;for(;!Y(o)&&!Y(i);)s=e(s,ie(o),ie(i)),o=x(o),i=x(i);return s}function L(e,t){le((n,r)=>{e(r)},void 0,t)}function So(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=ht(Ae(r,e),n);return n}function I(e){return So(e,q())}function Mo(e){let t,n;if(Pe(e))return I(e);if(e instanceof z)return e;{const r=q();let s=r;const o=Se(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const a=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new z(a,void 0),t.tail=n,n)}}finally{Z(o)}const i=s,l=q();return i.tail=l,x(r)}}function xe(e,t){return le((n,r)=>ht(r,n),t,Ct(e))}function To(e,t){let n,r;const s=q();let o=s,i=t;for(;!Y(i);){let u=e(ie(i));for(;!Y(u);)o=(n=o,r=new z(ie(u),void 0),n.tail=r,r),u=x(u);i=x(i)}const l=o,a=q();return l.tail=a,x(s)}function bt(e,t){const n=q(),r=Ao((o,i,l)=>{const a=new z(e(o,l),void 0);return i.tail=a,a},n,t),s=q();return r.tail=s,x(n)}function E(e,t){const n=q(),r=le((o,i)=>{const l=new z(e(i),void 0);return o.tail=l,l},n,t),s=q();return r.tail=s,x(n)}function ko(e,t,n){const r=q(),s=Lo((i,l,a)=>{const u=new z(e(l,a),void 0);return i.tail=u,u},r,t,n),o=q();return s.tail=o,x(r)}function Co(e,t){return(r=>{e:for(;;){const s=r;if(Y(s))return;{const o=e(ie(s));if(o==null){r=x(s);continue e}else return o}}})(t)}function In(e,t){return Co(n=>e(n)?V(n):void 0,t)}function En(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(Y(i))return;if(e(ie(i)))return o;r=o+1,s=x(i);continue e}})(0,t)}function Po(e,t){const n=En(e,t);return n==null?(_o(),-1):S(n)|0}function Lt(e,t){return Bo(t,e)}function N(e,t){const n=q(),r=le((o,i)=>{if(e(i)){const l=new z(i,void 0);return o.tail=l,l}else return o},n,t),s=q();return r.tail=s,x(n)}function j(e,t,n){return En(r=>n.Equals(e,r),t)!=null}function vn(e,t){if(Y(t))throw new Error(Ft);return le(e,Re(t),wn(t))}function _r(e,t){return le((n,r)=>n&&e(r),!0,t)}function tn(e,t){return En(e,t)!=null}function $o(e,t){const n=Br(t);return n.sort(e),I(n)}function Fn(e,t){return $o((n,r)=>t.Compare(n,r),e)}function xo(e,t){return vn((n,r)=>t.Compare(r,n)>0?r:n,e)}function Ar(e,t){return vn((n,r)=>t.Compare(r,n)>0?n:r,e)}function No(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(Y(r))throw new Error(yr+"\\nParameter name: list");e=n-1,t=x(r);continue e}}function qo(e,t){if(e<0)throw new Error(mo+"\\nParameter name: count");const n=(i,l,a)=>{let u;e:for(;;){const c=i,d=l,m=a;if(c<=0)return d;if(Y(m))throw new Error(yr+"\\nParameter name: list");i=c-1,l=(u=new z(ie(m),void 0),d.tail=u,u),a=x(m);continue e}},r=q(),s=n(e,r,t),o=q();return s.tail=o,x(r)}function Xt(e,t){const n=(i,l,a)=>{let u;e:for(;;){const c=i,d=l,m=a;if(c<=0)return d;if(Y(m))return d;i=c-1,l=(u=new z(ie(m),void 0),d.tail=u,u),a=x(m);continue e}},r=q(),s=n(e,r,t),o=q();return s.tail=o,x(r)}function Yt(e,t,n){const r=U(n)|0;let s;const o=J(e,0)|0;s=o<0?0:o;let i;const l=J(t,r-1)|0;return i=l>=r?r-1:l,i<s?q():qo(i-s+1,No(s,n))}function Ho(){return Math.random()}function Kt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function Ro(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class Do{constructor(){}Next0(){return Kt(0,2147483647)}Next1(t){return Kt(0,t)}Next2(t,n){return Kt(t,n)}NextDouble(){return Ho()}NextBytes(t){Ro(t)}}function Oo(){return new Do}function Lr(){return Oo()}function ee(e,t){return Lr().Next2(e,t+1)|0}function K(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function Sr(e){return Math.log(e)/Math.log(2)}var nn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(nn||(nn={}));function Wo(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Vn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function Fo(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function Vo(e,t){if(t&nn.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function Xo(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||Vo(o,t),!Fo(n).test(i))return Wo(s,n)}return null}function ce(e,t,n,r,s){const o=Xo(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[l,a]=Vn(!0,r);!n&&o.radix!==10&&i>=l&&i<=a&&(i=i<<32-r>>32-r);const[u,c]=Vn(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Pt(e,t,n,r,s){try{return s.contents=ce(e,t,n,r),!0}catch{return!1}}function Yo(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function Mr(e,t,n){return p(v(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function tt(e,t,n,r){return p(v('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function Bn(e,t,n,r,s,o){return p(v('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function jo(e,t,n,r,s,o,i,l){return p(v('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(l)}function Le(e,t){return jo("opacity","linear","0","1",e,t,"1","freeze")}function Tr(e,t,n,r,s,o,i,l,a){return Bn(p(v("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),l,1,a,0,Le(i,500))}function Go(e){throw new Error(e)}const Uo="Enumeration already finished.",Ko="Enumeration has not started. Call MoveNext.",kr="The input sequence has an insufficient number of elements.",Jo="Reset is not supported on this enumerator.";function Zo(){throw new Error(Jo)}function _n(){throw new Error(Ko)}function rn(){throw new Error(Uo)}class Qo{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Se(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+$(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{Z(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return nr(Se(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function zo(e){return new Qo(e)}class ei{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){Zo()}Dispose(){this.dispose()}}function jt(e,t,n){return new ei(e,t,n)}function ti(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const l=S(n);try{Z(l)}finally{n=void 0}}if(t!=null){const l=S(t);try{Z(l)}finally{t=void 0}}};return jt(()=>(r?s&&rn():_n(),o!=null?S(o):rn()),()=>{let l;if(r||(r=!0),s)return!1;{let a;for(;a==null;){const u=t,c=n;if(u!=null)if(c!=null){const d=S(c);if(d["System.Collections.IEnumerator.MoveNext"]())o=V(d["System.Collections.Generic.IEnumerator`1.get_Current"]()),a=!0;else try{Z(d)}finally{n=void 0}}else{const d=S(u);d["System.Collections.IEnumerator.MoveNext"]()?n=(l=d["System.Collections.Generic.IEnumerator`1.get_Current"](),Se(l)):(i(),a=!1)}else t=Se(e)}return S(a)}},()=>{s||i()})}function ni(e,t){return jt(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{Z(t)}finally{}})}function Cr(e,t,n){let r=!1,s,o=V(e());const i=()=>{if(o!=null){const a=S(o);try{n(a)}finally{o=void 0}}},l=()=>{try{i()}finally{s=void 0}};return jt(()=>(r||_n(),s!=null?S(s):rn()),()=>{if(r||(r=!0),o!=null){const a=S(o);let u;try{u=t(a)}catch(c){throw l(),c}return u!=null?(s=u,!0):(l(),!1)}else return!1},i)}function ri(e,t){let n,r=t;return jt(()=>{if(n!=null){const s=S(n)[0];return S(n)[1],s}else return _n()},()=>(n=e(r),n!=null?(S(n)[0],r=S(n)[1],!0):!1),()=>{})}function si(e,t){t==null&&Go(e)}function at(e){return zo(e)}function De(e){return si("source",e),Se(e)}function yt(e){return at(()=>Se(e()))}function Pr(e){return at(()=>ti(e))}function $r(e,t){return at(()=>ri(e,t))}function xr(e){return e instanceof z?Br(e):Array.from(e)}function Ke(e){return Pe(e)?I(e):e instanceof z?e:Mo(e)}function An(e,t,n){return at(()=>Cr(e,t,n))}function oi(e,t,n){return at(()=>{let r=-1;return Cr(e,s=>(r=r+1|0,t(r,s)),n)})}function ii(e,t){return Pr([e,t])}function li(e,t){return An(()=>De(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{Z(n)})}function ai(e,t){return li(n=>{if(e(n))return V(n)},t)}function ui(e,t,n){const r=De(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{Z(r)}}function ci(e,t){return $r(n=>n<e?[t(n),n+1]:void 0,0)}function Xn(e,t){ui((n,r)=>(e(n,r),n+1|0),0,t)}function di(e){const t=De(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?V(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{Z(t)}}function mi(e){const t=di(e);if(t==null)throw new Error(kr+"\\nParameter name: source");return S(t)}function fi(e){if(Pe(e))return e.length|0;if(e instanceof z)return U(e)|0;{const t=De(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{Z(t)}}}function de(e,t){return An(()=>De(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?V(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{Z(n)})}function pi(e,t){return oi(()=>De(t),(n,r)=>r["System.Collections.IEnumerator.MoveNext"]()?V(e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{Z(n)})}function gi(e,t){return ci(e,n=>t)}function $t(e){return yt(()=>wo(xr(e)))}function hi(e,t){return at(()=>{const n=De(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(kr+"\\nParameter name: source");return ni(()=>{},n)}catch(r){throw Z(n),r}})}function bi(e,t){return yt(()=>{let n=!0;return ai(r=>(n&&(n=e(r)),!n),t)})}function yi(e){return hi(1,e)}function wi(e,t){return An(()=>De(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?V(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{Z(n)})}function Nr(e,t){return yt(()=>Pr(de(e,t)))}function Ii(e,t){return yt(()=>Io(e,xr(t)))}function Yn(e,t,n){const r=e-fi(n)|0;return r<1?n:ii(gi(r,t),n)}function qr(e){return R("",de(t=>t,yi(e.split(""))))}function Ei(e){return mi(e.split(""))}function ne(e,t,n){return no(n,e,t)}function xt(e){return R("",de(t=>t,$t(e.split(""))))}function vi(e,t){return de(n=>R("",n),de(n=>hn(r=>r,n),Ii(e,t.split(""))))}function Bi(e,t){return de(xt,$t(vi(e,xt(t))))}function he(e,t){return I(t.split(e))}function _i(e,t){return[R("",de(n=>n,wi(n=>!e(n),t.split("")))),R("",de(n=>n,bi(n=>!e(n),t.split(""))))]}function Ai(e){return new X(0,[e])}function Hr(e){return new X(1,[e])}class X extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Li(e,t){return t.tag===0?Ai(e(t.fields[0])):Hr(t.fields[0])}function be(e,t){return t.tag===0?e(t.fields[0]):Hr(t.fields[0])}function Si(e){try{return new X(0,[ce(e,511,!1,32)])}catch(t){return new X(1,[new Error(t.message)])}}function Mi(e){return dr(e)?new X(1,[new Error]):new X(0,[e])}function Ln(e){return e===""?new X(1,[new Error("Value cannot be empty string.")]):new X(0,[e])}function Sn(e,t){return ar(gn(e),t)?new X(0,[t]):new X(1,[new Error(`The input string '${t}' was not in a correct format.`)])}function Rr(e,t,n){return e(n)>t?new X(1,[new Error(p(B("Value is too long. Value must be shorter or equal to %d%P()",[t])))]):new X(0,[n])}class C extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Ne extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Nt extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}function Mn(e){const t=Si(e);return t.tag===1?new C(1,[t.fields[0]]):new C(0,[t.fields[0]])}function te(e){const t=e;return t.tag===1?new Ne(1,[t.fields[0]]):new Ne(0,[T(t.fields[0],2)])}function sn(e){const t=e;return t.tag===1?new Nt(1,[t.fields[0]]):new Nt(0,[T(t.fields[0],16)])}function Oe(e){const t=be(n=>Rr(r=>r.length,32,n),be(n=>Sn("^[01]+$",n),be(Ln,new X(0,[e]))));return t.tag===1?new Ne(1,[t.fields[0]]):new Ne(0,[t.fields[0]])}function Ie(e){const t=e;return t.tag===1?new C(1,[t.fields[0]]):new C(0,[ce(t.fields[0],511,!1,32,2)])}function Tn(e){const t=be(n=>Rr(r=>r.length,8,n),be(n=>Sn("^[0-9A-Fa-f]+$",n),be(Ln,new X(0,[e]))));return t.tag===1?new Nt(1,[t.fields[0]]):new Nt(0,[t.fields[0]])}function kn(e){const t=e;return t.tag===1?new C(1,[t.fields[0]]):new C(0,[ce(t.fields[0],511,!1,32,16)])}function me(e,t){return`
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
            </div>`}const Ti=`\r
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
            </div>`;function Je(e,t,n){return"不明なエラーです。"}function Dr(e,t,n){return"不明なエラーです。"}function ki(e,t,n){return"不明なエラーです。"}function Ze(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return p(B(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Or(e,t){return t.tag===0?R(" ",Ke(Bi(e,t.fields[0]))):""}function Gt(e,t){let n,r;const s=Yn(8,"",de(i=>i,(n=te(new C(0,[e])),n.tag===1?"":n.fields[0]).split(""))),o=Yn(8,"",de(i=>i,(r=te(new C(0,[t])),r.tag===1?"":r.fields[0]).split("")));Xn((i,l)=>{let a;const u=p(B("firstRowDigit%d%P()",[8-i]));a=document.getElementById(u),a.innerText=l},s),Xn((i,l)=>{let a;const u=p(B("secondRowDigit%d%P()",[8-i]));a=document.getElementById(u),a.innerText=l},o)}function ye(e){const t=e*2500-500|0;return Math.abs(t)|0}function Wr(e,t){return[V(e),1,V(t),void 0]}function Fr(e,t){let n;const r=Ct(t);return yn(r)?O([void 0,void 0,void 0,void 0]):Ct(ke((n=Re(r),[void 0,void 0,V(n[0]),V(n[1])]),E(s=>[V(e),1,V(s[0]),V(s[1])],wn(r))))}function fe(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=bn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:it});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{L(s=>{document.getElementById(s).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{n&&L(s=>{document.getElementById(s).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}}}}function We(e,t){return R(e,N(n=>!dr(n),t))}function Ci(e,t){return le((n,r)=>mr(n,r[0],r[1]),t,e)}function Fe(e){return Ci(I([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function Ce(e){return mr(e," ","&nbsp;")}function pe(e,t){return ne(e,"0",t)}function Ee(e){let t;return t=_i(n=>n!=="0",xt(qr(xt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+Ei(e)}function Ye(e,t,n){return[e(t),e(n)]}function qt(e,t,n,r){return[e(t),e(n),e(r)]}const Vr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Pi(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return xe(s,O(1));default:{let i;const l=~~Sr(o)|0;i=Math.pow(2,l),n=xe(s,O(i)),r=o-i;continue e}}}})(Ue(),e)}function Cn(e,t){let n,r=0;n=[Yo(e,t,new nt(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?O([o,s]):xe(O([o,s]),Cn(o,t))}function $i(e,t,n,r){return Tr(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+ye(t-1),n,r)}function Xr(e,t,n){const r=ke(Wr(e,t),Fr(e,Cn(t,e)));let s;const o=E(i=>{const l=J(i[0],""),a=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return p(v("%s%s%s%s"))(l)(a)(u)(c)},bt((i,l)=>[_e(a=>{let u,c;return tt(0,n*(i+1),0,(u=Le((c=ye(i)|0,i===0?c+1e3:c+2e3),500),p(v("%d%s"))(a)(u)))},l[0]),_e(a=>{let u,c,d,m,f,g,h;return Bn((u=~~(n/2)+2|0,c=n*i+6|0,d=~~(n/2)|0,m=n*.4,f=n*.8,g=n/2*4.8,p(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(m)(f)(g)),"#000000",1,"none",0,Le((h=ye(i)|0,i===0?h+500:h+1500),500))},l[1]),_e(a=>{let u,c;return tt(~~(n/2)*2,n*(i+1),0,(u=Ce(ne(3," ",T(a))),c=Le(ye(i),500),p(v("%s%s"))(u)(c)))},l[2]),_e(a=>{let u;return tt(~~(n/2)*6,n*(i+1),0,(u=Le(500+ye(i),500),p(v("…%d%s"))(a)(u)))},l[3])],r));return s=le((i,l)=>p(v("%s%s"))(i)(l),$i(n,U(r),"#191970","#b0e0e6"),o),Mr(~~(n/2)*10,n*(U(r)+1),s)}function xi(e,t){return`
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
                ${Xr(e,t,20)}
            </div>
            `}function Ni(e,t){let n,r,s;const o=R(" + ",E(T,t)),i=R(" + ",(n=E(c=>{let d;return d=Sr(c),~~Math.trunc(d)},t),E((r=p(v("2<sup>%d</sup>")),r),n))),l=R(" + ",E(c=>`${c}<sub>(2)</sub>`,E(c=>c.tag===1?"":c.fields[0],E(c=>te(new C(0,[c])),t))));let a;const u=te(e);return a=u.tag===1?"-1":u.fields[0],p(B(`\r
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
            `,[(s=e,s.tag===1?-1:s.fields[0]),o,i,i,l,l,a]))}function qi(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${xi(2,e)}
                <h3>考え方 2</h3>
                ${Ni(new C(0,[e]),Pi(e))}
            </details>
            `}function Hi(e,t){const n=(o,i)=>{e:for(;;){const l=o,a=i,u=Lr(),c=u.Next2(l,a)|0,d=u.Next2(l,a)|0;if(c!==d)return[c,d];o=l,i=a;continue e}};let r;const s=n(e,t);return r=Ye(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Ri(e,t){return K(()=>Hi(0,e),n=>j(n,t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1)}function Di(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Xr(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function st(e,t,n,r,s,o,i,l,a,u,c){const d=document.getElementById("numberInput"),m=Fe(d.value);d.focus();const f=te(Mn(m));if(f.tag===0){const g=f.fields[0];document.getElementById("errorArea").innerHTML="";const h=s(g),b=r(g);if(b.tag===0){const w=b.fields[0]|0,y=Ce(ne(3," ",T(w))),_=document.getElementById("outputArea"),M=We("<br>",I([Ze(w===u,h,l,y,i),_.innerHTML]));if(_.innerHTML=M,w===u){const A=e(c)|0;document.getElementById("questionSpan").innerText=T(A),document.getElementById("hintArea").innerHTML=t(A),o(A),d.value="";const k=Xt(a,ke(A,c));document.getElementById("submitButton").onclick=P=>{P.preventDefault(),st(e,t,n,r,s,o,i,l,a,A,k)},document.getElementById("inputArea").onsubmit=P=>{P.preventDefault(),st(e,t,n,r,s,o,i,l,a,A,k)}}}}else document.getElementById("errorArea").innerHTML=n(T(u),m,f.fields[0])}function Ut(e,t,n,r,s,o,i,l,a,u,c){const d=e(Ue())|0;document.getElementById("questionSpan").innerText=T(d),document.getElementById("srcRadix").innerText=p(v("(%d)"))(i),document.getElementById("dstRadix").innerText=T(l),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(l),document.getElementById("hintArea").innerHTML=t(d),document.getElementById("submitButton").onclick=m=>{m.preventDefault(),c(e,t,f=>{const g=kt(n)(f);return h=>g(h)},r,s,o,i,l,a,d,O(d))},document.getElementById("inputArea").onsubmit=m=>{m.preventDefault(),c(e,t,f=>{const g=kt(n)(f);return h=>g(h)},r,s,o,i,l,a,d,O(d))},o(d),document.getElementById("helpButton").onclick=m=>{L(f=>{document.getElementById(f).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=m=>{u(m)}}function Oi(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Vr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=we,Ut(t=>Ri(8,t),qi,Je,t=>Ie(Oe(t)),t=>Ee(pe(8,t)),t=>{Di(t)},10,2,10,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{st(t,n,pt(r),s,o,i,l,a,u,c,d)})}const Yr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Wi(e){return""}function Fi(e){return K(()=>ee(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function Vi(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Yr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=we,Ut(Fi,Wi,Je,t=>Ie(Oe(t)),t=>Ee(pe(8,t)),t=>{},10,2,10,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{st(t,n,pt(r),s,o,i,l,a,u,c,d)})}function jr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const Gr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Xi(){const e=K(()=>{const t=()=>{let n,r;const s=Ie(new Ne(0,[qr(ne(9,"0",(n=te(new C(0,[(r=ee(0,8)|0,Math.pow(2,r))])),n.tag===0?n.fields[0]:"")))]));return s.tag===0?s.fields[0]|0:-1};return[t(),t()]},t=>!Q(t[0],t[1]));return e[0]+e[1]|0}function Yi(e){return R(" + ",bt((t,n)=>{const r=e.length-t-1|0;return p(v("(%c * 2<sup>%d</sup>)"))(n)(r)},Ke(e.split(""))))}function ji(e){return bt((t,n)=>[p(B('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),p(B('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),p(B('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],Ke(e.split("")))}function Gi(e,t,n){return p(v(`\r
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
                `))(e)(t)(n)}function Ui(e){const t=le((n,r)=>jr((s,o)=>p(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],ji(e));return Gi(t[0],t[1],t[2])}function Ki(e){let t;if(e.tag===0){const n=e.fields[0],r=Yi(n);return p(B(`\r
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
            `,[Ui(n),n,r,(t=Ie(e),t.tag===1?-1:t.fields[0])]))}else return""}function Ji(e){return K(Xi,t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function Ht(e,t,n,r,s,o){const i=document.getElementById("numberInput"),l=Fe(i.value);i.focus();const a=Mn(l);if(a.tag===0){const u=a.fields[0]|0;document.getElementById("errorArea").innerHTML="";const c=Ce(ne(3," ",T(u))),d=te(new C(0,[u])),m=d.tag===0?Ee(pe(8,d.fields[0])):"",f=document.getElementById("outputArea"),g=We("<br>",I([Ze(u===r,c,10,m,2),f.innerHTML]));if(f.innerHTML=g,u===r){const h=e(o)|0,b=te(new C(0,[h])),w=Or(4,b);document.getElementById("questionSpan").innerText=w,document.getElementById("hintArea").innerHTML=t(b),i.value="";const y=Yt(0,Te(4,U(o)+1)-1,ke(h,o));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),Ht(e,t,n,h,w,y)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),Ht(e,t,n,h,w,y)}}}else document.getElementById("errorArea").innerHTML=Dr(s,l,a.fields[0])}function Ur(e,t,n,r,s){const o=e(Ue())|0,i=te(new C(0,[o])),l=Or(4,i);document.getElementById("questionSpan").innerText=l,document.getElementById("srcRadix").innerText=p(v("(%d)"))(2),document.getElementById("dstRadix").innerText=T(10),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=a=>{a.preventDefault(),s(e,t,n,o,l,O(o))},document.getElementById("inputArea").onsubmit=a=>{a.preventDefault(),s(e,t,n,o,l,O(o))},document.getElementById("helpButton").onclick=a=>{L(u=>{document.getElementById(u).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=a=>{L(u=>{document.getElementById(u).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=a=>{L(u=>{document.getElementById(u).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=a=>{r(a)}}function Zi(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Gr,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=we,Ur(Ji,Ki,t=>{},t=>{fe(t)},(t,n,r,s,o,i)=>{Ht(t,n,r,s,o,i)})}const Kr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Qi(e){return""}function zi(e){return K(()=>ee(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function el(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Kr,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=we,Ur(zi,Qi,t=>{},t=>{fe(t)},(t,n,r,s,o,i)=>{Ht(t,n,r,s,o,i)})}const Jr=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function tl(e){const t=~~(Math.log(e)/Math.log(2))|0;return p(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function nl(e){return K(()=>{const t=ee(0,7)|0;return Math.pow(2,t)|0},t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function rl(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Jr,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=we,Ut(nl,tl,Je,t=>Ie(Oe(t)),t=>Ee(pe(8,t)),t=>{},10,2,4,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{st(t,n,pt(r),s,o,i,l,a,u,c,d)})}const Zr=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function sl(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return p(B(`\r
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
            </details>`,[e,e,e+1,t,e,t,t]))}function ol(e){return K(()=>{let t;return-1+(t=ee(0,8)|0,Math.pow(2,t))},t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function il(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Zr,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=we,Ut(ol,sl,Je,t=>Ie(Oe(t)),t=>Ee(pe(8,t)),t=>{},10,2,4,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{st(t,n,pt(r),s,o,i,l,a,u,c,d)})}function qe(e,t){return Qs(gn(e),t)}function ll(e,t){return ar(gn(e),t)}const Qr=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function al(){return`\r
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
                </details>`}function ul(e){let t;const n=-1+Math.pow(2,e)|0,r=K(()=>ee(1,n),s=>{const o=te(new C(0,[s]));if(o.tag===0){const i=o.fields[0];return i.length===e&&ll("^1+0+$",i)===!1}else return!1})|0;return[r,(t=n-r|0,K(()=>ee(1,t),s=>s!==r&&(s&r)!==0))]}function cl(e,t){return K(()=>ul(e),n=>j(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1&&j(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1)}function on(e,t,n,r,s,o,i,l,a,u,c){const d=document.getElementById("numberInput"),m=Fe(d.value);d.focus();const f=Oe(m);if(f.tag===0){const g=f.fields[0];document.getElementById("errorArea").innerHTML="";const h=n(g),b=Ie(new Ne(0,[g]));if(b.tag===0){const w=b.fields[0]|0,y=Ce(ne(3," ",T(w))),_=document.getElementById("outputArea"),M=We("<br>",I([Ze(w===l,h,s,y,o),_.innerHTML]));if(_.innerHTML=M,w===l){const A=e(c),k=A[1]|0,P=A[0]|0;Gt(P,k),document.getElementById("hintArea").innerHTML=t(),d.value="";const H=Xt(i,xe(I([P,k]),c));document.getElementById("submitButton").onclick=re=>{re.preventDefault(),on(e,t,n,r,s,o,i,P+k,P,k,H)},document.getElementById("inputArea").onsubmit=re=>{re.preventDefault(),on(e,t,n,r,s,o,i,P+k,P,k,H)}}}}else{const g=b=>{const w=te(new C(0,[b]));return w.tag===1?"":w.fields[0]},h=Je(p(B("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[g(a),s,g(u),s])),m,f.fields[0]);document.getElementById("errorArea").innerHTML=h}}function dl(e,t,n,r,s,o,i,l,a){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=p(v("(%d)"))(s),document.getElementById("secondRowSrcRadix").innerText=p(v("(%d)"))(s),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(o),document.getElementById("hintArea").innerHTML=t();const u=e(Ue()),c=u[1]|0,d=u[0]|0;Gt(d,c),document.getElementById("submitButton").onclick=m=>{m.preventDefault(),a(e,t,n,r,s,o,i,d+c,d,c,I([d,c]))},document.getElementById("inputArea").onsubmit=m=>{m.preventDefault(),a(e,t,n,r,s,o,i,d+c,d,c,I([d,c]))},document.getElementById("helpButton").onclick=m=>{L(f=>{document.getElementById(f).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=m=>{l(m)}}function ml(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>加算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(Qr,"help-color addition"),document.querySelector("#submitButton").className="submit-button display-order-3 addition",document.querySelector("#questionArea").innerHTML=fr,dl(t=>cl(8,t),al,t=>Ee(pe(8,t)),t=>{},2,2,10,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{on(t,n,r,s,o,i,l,a,u,c,d)})}const zr=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function es(){const e=ee(1,255)|0,t=K(()=>ee(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function ts(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function Rt(e,t,n,r){const s=document.getElementById("numberInput"),o=Fe(s.value);s.focus();const i=Oe(o);if(i.tag===0){const l=i.fields[0];document.getElementById("errorArea").innerHTML="";const a=Ee(pe(8,l)),u=Ie(new Ne(0,[l]));if(u.tag===0){const c=u.fields[0]|0,d=Ce(ne(3," ",T(c))),m=document.getElementById("outputArea"),f=We("<br>",I([Ze(c===e,a,2,d,10),m.innerHTML]));if(m.innerHTML=f,c===e){const g=K(es,_=>j(_[0],r,{Equals:(M,A)=>M===A,GetHashCode:D})===!1&&j(_[1],r,{Equals:(M,A)=>M===A,GetHashCode:D})===!1),h=g[1]|0,b=g[0]|0;Gt(b,h);const w=ts();document.getElementById("hintArea").innerHTML=w,s.value="";const y=Yt(0,Te(20,U(r)+1)-1,xe(I([b,h]),r));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),Rt(b-h,b,h,y)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),Rt(b-h,b,h,y)}}}}else{const l=u=>{const c=te(new C(0,[u]));return c.tag===1?"":c.fields[0]},a=Je(p(B("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[l(t),2,l(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=a}}function fl(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>減算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(zr,"help-color subtraction"),document.querySelector("#submitButton").className="submit-button display-order-3 subtraction",document.querySelector("#questionArea").innerHTML=fr;const t=ts();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=p(v("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=p(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=es(),r=n[1]|0,s=n[0]|0;Gt(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Rt(s-r,s,r,I([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Rt(s-r,s,r,I([s,r]))},document.getElementById("helpButton").onclick=o=>{L(i=>{document.getElementById(i).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{fe(o)}}const ns=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function rs(e,t){return`
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
            </details>`}function Dt(e,t,n){let r;const s=document.getElementById("numberInput"),o=Fe(s.value);s.focus();const i=Oe(o);if(i.tag===0){const l=i.fields[0];document.getElementById("errorArea").innerHTML="";const a=Ie(new Ne(0,[l])),u=Q(a,new C(0,[t]))?"history history-correct":"history history-wrong",c=pe(4,l),d=document.getElementById("outputArea"),m=We("<br>",I([p(v('<span class ="%s">%s<sub>(%d)</sub></span>'))(u)(c)(2),d.innerHTML]));if(d.innerHTML=m,Q(a,new C(0,[t]))){const f=K(()=>ee(1,15),y=>j(y,n,{Equals:(_,M)=>_===M,GetHashCode:D})===!1)|0,g=16-f|0,h=ne(4,"0",(r=te(new C(0,[f])),r.tag===1?"":r.fields[0]));document.getElementById("questionSpan").innerText=h;const b=Array.from(Nr(y=>y==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=rs(h,b),s.value="";const w=Yt(0,Te(8,U(n)+1)-1,ke(f,n));document.getElementById("submitButton").onclick=y=>{y.preventDefault(),Dt(h,g,w)},document.getElementById("inputArea").onsubmit=y=>{y.preventDefault(),Dt(h,g,w)}}}else{i.fields[0];const l="不明なエラーです。";document.getElementById("errorArea").innerHTML=l}}function pl(){let e;document.title="補数 - taidalab";const t=document.querySelector("header");t.innerHTML=oe,t.className="complement",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>補数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(ns,"help-color complement"),document.querySelector("#submitButton").className="submit-button display-order-3 complement",document.querySelector("#questionArea").innerHTML=we;const n=ee(1,15)|0,r=16-n|0,s=ne(4,"0",(e=te(new C(0,[n])),e.tag===1?"":e.fields[0])),o=Array.from(Nr(i=>i==="1"?"0":"1",s.split(""))).join("");document.getElementById("questionSpan").innerText=s,document.getElementById("srcRadix").innerText=p(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=rs(s,o),document.getElementById("submitButton").onclick=i=>{i.preventDefault(),Dt(s,r,O(n))},document.getElementById("inputArea").onsubmit=i=>{i.preventDefault(),Dt(s,r,O(n))},document.getElementById("helpButton").onclick=i=>{L(l=>{document.getElementById(l).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=i=>{L(l=>{document.getElementById(l).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=i=>{L(l=>{document.getElementById(l).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=i=>{fe(i)}}const ss=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function gl(e,t,n,r){return Tr(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+ye(t-1),n,r)}function os(e,t,n){const r=ke(Wr(e,t),Fr(e,Cn(t,e)));let s;const o=E(i=>{const l=J(i[0],""),a=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return p(v("%s%s%s%s"))(l)(a)(u)(c)},bt((i,l)=>[_e(a=>{let u,c;return tt(0,n*(i+1),0,(u=Le((c=ye(i)|0,i===0?c+1e3:c+2e3),500),p(v("%d%s"))(a)(u)))},l[0]),_e(a=>{let u,c,d,m,f,g,h;return Bn((u=~~(n/2)*2+4|0,c=n*i+6|0,d=~~(n/2)|0,m=n*.4,f=n*.8,g=n/2*4.8,p(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(m)(f)(g)),"#000000",1,"none",0,Le((h=ye(i)|0,i===0?h+500:h+1500),500))},l[1]),_e(a=>{let u,c;return tt(~~(n/2)*3,n*(i+1),0,(u=Ce(ne(3," ",T(a))),c=Le(ye(i),500),p(v("%s%s"))(u)(c)))},l[2]),_e(a=>{let u;return tt(~~(n/2)*7,n*(i+1),0,(u=Le(500+ye(i),500),p(v("…%d%s"))(a)(u)))},l[3])],r));return s=le((i,l)=>p(v("%s%s"))(i)(l),gl(n,U(r),"#1e3330","#95feec"),o),Mr(~~(n/2)*11,n*(U(r)+1),s)}function hl(e,t,n){const r=os(e,t,n);return p(v(`\r
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
                `))(r)}function bl(e,t,n){const r=hl(e,t,n);return p(v(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function yl(e){return bl(16,e,20)}function wl(e){return K(()=>ee(0,255),t=>j(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function Il(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=os(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function ln(e,t,n,r,s,o,i,l,a,u,c){const d=document.getElementById("numberInput"),m=Fe(d.value);d.focus();const f=Tn(m);if(f.tag===0){const g=f.fields[0];document.getElementById("errorArea").innerHTML="";const h=s(g),b=r(g);if(b.tag===0){const w=b.fields[0]|0,y=Ce(ne(3," ",T(w))),_=document.getElementById("outputArea"),M=We("<br>",I([Ze(w===u,h,l,y,i),_.innerHTML]));if(_.innerHTML=M,w===u){const A=e(c)|0;document.getElementById("questionSpan").innerText=T(A),document.getElementById("hintArea").innerHTML=t(A),o(A),d.value="";const k=Xt(a,ke(A,c));document.getElementById("submitButton").onclick=P=>{P.preventDefault(),ln(e,t,n,r,s,o,i,l,a,A,k)},document.getElementById("inputArea").onsubmit=P=>{P.preventDefault(),ln(e,t,n,r,s,o,i,l,a,A,k)}}}}else document.getElementById("errorArea").innerHTML=n(u,m,f.fields[0])}function El(e,t,n,r,s,o,i,l,a,u,c){const d=e(Ue())|0;document.getElementById("questionSpan").innerText=T(d),document.getElementById("srcRadix").innerText=p(v("(%d)"))(i),document.getElementById("dstRadix").innerText=T(l),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(l),document.getElementById("hintArea").innerHTML=t(d),document.getElementById("submitButton").onclick=m=>{m.preventDefault(),c(e,t,f=>{const g=kt(n)(f);return h=>g(h)},r,s,o,i,l,a,d,O(d))},document.getElementById("inputArea").onsubmit=m=>{m.preventDefault(),c(e,t,f=>{const g=kt(n)(f);return h=>g(h)},r,s,o,i,l,a,d,O(d))},o(d),document.getElementById("helpButton").onclick=m=>{L(f=>{document.getElementById(f).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=m=>{L(f=>{document.getElementById(f).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=m=>{u(m)}}function vl(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(ss,"help-color dec2hex"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2hex",document.querySelector("#questionArea").innerHTML=we,El(wl,yl,ki,t=>kn(Tn(t)),t=>Ee(pe(8,t)),t=>{Il(t)},10,16,10,t=>{fe(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{ln(t,n,pt(r),s,o,i,l,a,u,c,d)})}const is=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ls(e){return R(" + ",$t(pi((t,n)=>{let r;return p(B("(%d%P() * 16<sup>%d%P()</sup>)",[(r=kn(Tn(n)),r.tag===1?-1:r.fields[0]),t]))},de(t=>t,$t(e)))))}function Bl(e){return bt((t,n)=>[p(B('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),p(B('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),p(B('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],Ke(e.split("")))}function _l(e,t,n){return p(v(`\r
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
                `))(e)(t)(n)}function as(e){const t=le((n,r)=>jr((s,o)=>p(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Bl(e));return _l(t[0],t[1],t[2])}function us(e,t,n){let r,s;return p(B(`<details>\r
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
            </details>`,[n,(r=e,r.tag===1?"-1":r.fields[0]),t,(s=kn(e),s.tag===1?-1:s.fields[0])]))}function Ot(e,t,n){const r=document.getElementById("numberInput"),s=Fe(r.value);r.focus();const o=Mn(s);if(o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const l=Ce(ne(3," ",T(i))),a=sn(new C(0,[i]));if(a.tag===0){const u=Ee(pe(2,a.fields[0])),c=document.getElementById("outputArea"),d=We("<br>",I([Ze(i===e,l,10,u,16),c.innerHTML]));if(c.innerHTML=d,i===e){const m=K(()=>ee(0,255),g=>j(g,n,{Equals:(h,b)=>h===b,GetHashCode:D})===!1)|0,f=sn(new C(0,[m]));if(f.tag===0){const g=f.fields[0];document.getElementById("questionSpan").innerText=g;const h=us(f,ls(g.split("")),as(g));document.getElementById("hintArea").innerHTML=h,r.value="";const b=Yt(0,Te(10,U(n)+1)-1,ke(m,n));document.getElementById("submitButton").onclick=w=>{w.preventDefault(),Ot(m,g,b)},document.getElementById("inputArea").onsubmit=w=>{w.preventDefault(),Ot(m,g,b)}}}}}else document.getElementById("errorArea").innerHTML=Dr(t,s,o.fields[0])}function Al(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=r=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=r=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=me(is,"help-color hex2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 hex2dec",document.querySelector("#questionArea").innerHTML=we;const t=ee(0,255)|0,n=sn(new C(0,[t]));if(n.tag===0){const r=n.fields[0],s=us(n,ls(r.split("")),as(r));document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=p(v("(%d)"))(16),document.getElementById("dstRadix").innerText=T(10),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=s,document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Ot(t,r,O(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Ot(t,r,O(t))},document.getElementById("helpButton").onclick=o=>{L(i=>{document.getElementById(i).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{fe(o)}}}function Ll(e,t){return U(N(e,t))}function Sl(e,t){let n;const r=Xt(e,t);return Ll((n=Lt(e,t),s=>Q(n,s)),r)|0}function Ml(e,t){return N(n=>j(n,t,{Equals:Q,GetHashCode:Ge}),e)}function Tl(e,t,n,r){const s=je(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const l=je(i,t)|0;return o&&l<=0||!o&&l>=0?[i,r(i,e)]:void 0}}function kl(e,t,n,r,s){const o=Tl(t,n,r,s);return yt(()=>$r(o,e))}function Pn(e,t,n){return kl(e,t,n,0,(r,s)=>r+s)}const cs=`\r
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
    `,Cl=`
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
            ${cs}
        </div>
        `;function jn(e,t){return t%e}function Pl(e,t){return~~(t/e)}function $l(e,t,n){const r=t-e|0;return Pl(r*3,n)%2===0?Te(e+jn(r*3,n),t)|0:en(t-jn(r*3,n),e)|0}function Jt(e,t,n,r,s,o){return $l(t,n,(n-t)*e+r*o+s)}function xl(e,t,n,r,s){const o=I([e,t,n]),i=Ar(o,{Compare:mt})|0,l=xo(o,{Compare:mt})|0,a=Lt(1,Fn(o,{Compare:mt}))-i|0;let u,c;const d=[0,1,2];return c=qt(m=>{let f;return Po((f=Lt(m,o)|0,g=>f===g),Fn(o,{Compare:mt}))+Sl(m,o)},d[0],d[1],d[2]),u=qt(m=>Lt(m,I([f=>Jt(4,i,l,r,a,f),f=>Jt(0,i,l,r,a,f),f=>Jt(2,i,l,r,a,f)])),c[0],c[1],c[2]),E(m=>[u[0](m),u[1](m),u[2](m)],Ke(Pn(0,1,s)))}function Gn(e,t,n){let r;const s=[e,t,n];return r=qt(o=>ne(2,"0",T(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Nl(e,t){return E(n=>1+e*n,Ke(Pn(1,1,~~((255/t-1)/e))))}function ql(e){return wn(Ct(E(t=>1-e*t,Ke(Pn(1,1,~~(1/e))))))}function Hl(e,t,n){return p(B(`\r
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
        `,[e,t,n,e,t,n,Gn(e,t,n),e,t,n,Gn(e,t,n)]))}function Rl(e){const t=R(`
`,e);return p(v('<div class="color-row">%s</div>'))(t)}function ds(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,l=document.getElementById("limitInput").value,a=N(u=>u[2][0]===!1,xe(E(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},E(u=>{let c;return[u[0],u[1],(c=0,[Pt(u[2],511,!0,8,new nt(()=>c,d=>{c=d})),c])]},I([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),E(u=>{let c;return[u[0],u[1],(c=0,[Pt(u[2],511,!1,32,new nt(()=>c,d=>{c=d|0})),c])]},I([["変化量","stepInput",i],["回数","limitInput",l]]))));if(yn(a)){const u=ce(r,511,!1,32)|0,c=ce(s,511,!1,32)|0,d=ce(o,511,!1,32)|0,m=xl(u,c,d,ce(i,511,!1,32),ce(l,511,!1,32)),f=en(en(u,c),d)|0,g=ql(.1),h=U(g)|0,b=R(`
`,E(Rl,E(A=>E(k=>Hl(k[0],k[1],k[2]),A),E((e=xe(g,ke(1,Nl(.1,f))),A=>E(k=>qt(P=>~~(k*P),A[0],A[1],A[2]),e)),m)))),w=document.getElementById("outputArea");w.innerHTML=b;const y=w.getBoundingClientRect().width;let _;_=wr((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,w.scrollLeft=_*h-(y-_)/2}else{const u=vn((c,d)=>`${c}<br>${d}`,E(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,a));n.innerHTML=u,document.getElementById(Re(a)[1]).focus()}}function Ve(e,t,n,r,s){_r(o=>o!=="",I([e,t,n,r,s]))&&ds()}function Dl(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=bn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(l,a)=>l===a,GetHashCode:it});switch(e.key){case"\\":{const l=E(a=>document.getElementById(a),I(["rInput","gInput","bInput","stepInput","limitInput"]));o||(J(In(u=>u.value==="",l),Re(l)).focus(),e.preventDefault());break}case"?":{L(l=>{document.getElementById(l).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{o&&L(l=>{document.getElementById(l).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const l=document.getElementById("rInput"),a=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let m,f=0;if(m=[Pt(d.value,511,!1,32,new nt(()=>f,g=>{f=g|0})),f],m[0]){const g=m[1]|0;g<2147483647&&(d.value=T(g+1),Ve(l.value,a.value,u.value,c.value,d.value))}}break}case"-":{if(!o){const l=document.getElementById("rInput"),a=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let m,f=0;if(m=[Pt(d.value,511,!1,32,new nt(()=>f,g=>{f=g|0})),f],m[0]){const g=m[1]|0;g>0&&(d.value=T(g-1),Ve(l.value,a.value,u.value,c.value,d.value))}}break}}break}}}function Ol(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>色いろいろ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Cl,document.querySelector("#submitButton").className="submit-button iro-iroiro",document.getElementById("submitButton").onclick=i=>{ds()},L(i=>{document.getElementById(i).onclick=l=>{L(a=>{document.getElementById(a).classList.toggle("active")},I(["helpWindow","helpBarrier"]))}},I(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{Ve(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{Dl(i)}}class Wl extends He{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return p(v("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function ms(e,t,n,r){return new Wl(e,t,n,r)}function ft(e){const t=hn(n=>ce(n,511,!0,8),e.split("."),Uint8Array);return ms(Ae(0,t),Ae(1,t),Ae(2,t),Ae(3,t))}function an(e){return Li(ft,be(t=>_r(n=>n>=0?n<=255:!1,E(n=>ce(n,511,!1,32),he(".",t)))?new X(0,[t]):new X(1,[new Error("str",`${t} is out of range. Each value must be within 0 and 255`)]),be(t=>Sn("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),be(Mi,be(Ln,new X(0,[e]))))))}function fs(e,t){return ms(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class W extends He{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return p(v("X = %f; Y = %f"))(t.X)(t.Y)}}function Qe(e,t){return new W(e,t)}function Xe(e){const t=hn(Me,e.split(","),Float64Array);return Qe(wr(t),bo(t))}function Fl(e){return p(v("%f,%f"))(e.X)(e.Y)}function $n(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function ae(e,t,n){return new W(n.X+e,n.Y+t)}function Un(e,t){return(e.Y>t.Y?1:0)|(e.Y<t.Y?2:0)|(e.X>t.X?4:0)|(e.X<t.X?8:0)}class F extends He{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return p(v("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function wt(e,t,n,r){return new F(e,t,n,r)}function Vl(e,t){let n,r;return wt(Te(e.X,t.X),Te(e.Y,t.Y),(n=e.X-t.X,Math.abs(n)),(r=e.Y-t.Y,Math.abs(r)))}function Xl(e,t,n){return new F(n.X,n.Y,n.Width+e,n.Height+t)}function Yl(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class ue extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function jl(e){switch(e){case"Client":return new ue(0,[]);case"Server":return new ue(1,[]);case"Router":return new ue(2,[]);case"Hub":return new ue(3,[]);case"ProxyServer":return new ue(4,[]);case"LANCable":return new ue(5,[]);default:return}}class Gl extends He{constructor(t,n,r,s,o,i,l){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=l}toString(){const t=this;return p(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function ze(e,t,n,r,s,o){const i=ft(n),l=ft(r);return new Gl(e,t,i,l,fs(l,i),s,o)}function Ul(e){let t,n,r,s;const o=e.id;return ze(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),wt(n.left,n.top,n.width,n.height)),Qe(Me((r=qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Me((s=qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ps(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","100");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z"),o.setAttribute("fill","none"),o.setAttribute("stroke","#000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,60 l -15,30 l 90,0 l -15,-30"),i.setAttribute("fill","none"),i.setAttribute("stroke","#000"),i.setAttribute("stroke-width","5");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 25,63 l  -9,20 l 68,0 l  -9,-20  z"),l.setAttribute("fill","#000"),l.setAttribute("stroke","#000"),l.setAttribute("stroke-width","1");const a=document.createElementNS("http://www.w3.org/2000/svg","text");a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000"),a.setAttribute("stroke-width","0"),a.setAttribute("x","23.40522"),a.setAttribute("y","19.58995"),a.setAttribute("font-size","6"),a.setAttribute("font-family","Noto Sans JP"),a.setAttribute("text-anchor","start"),a.setAttribute("xml:space","preserve"),a.textContent="PS C:\\>_";const u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("fill","none"),u.setAttribute("stroke","#fff"),u.setAttribute("x1","20.85"),u.setAttribute("y1","70"),u.setAttribute("x2","79.15"),u.setAttribute("y2","70");const c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("x1","17.7"),c.setAttribute("y1","77"),c.setAttribute("x2","82.3"),c.setAttribute("y2","77");const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("x1","34.7"),d.setAttribute("y1","61.5"),d.setAttribute("x2","29.3"),d.setAttribute("y2","84.5");const m=document.createElementNS("http://www.w3.org/2000/svg","line");m.setAttribute("fill","none"),m.setAttribute("stroke","#fff"),m.setAttribute("x1","44.9"),m.setAttribute("y1","61.5"),m.setAttribute("x2","43.1"),m.setAttribute("y2","84.5");const f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("fill","none"),f.setAttribute("stroke","#fff"),f.setAttribute("x1","55.1"),f.setAttribute("y1","61.5"),f.setAttribute("x2","56.9"),f.setAttribute("y2","84.5");const g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("fill","none"),g.setAttribute("stroke","#fff"),g.setAttribute("x1","65.3"),g.setAttribute("y1","61.5"),g.setAttribute("x2","70.7"),g.setAttribute("y2","84.5"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),r.appendChild(c),r.appendChild(d),r.appendChild(m),r.appendChild(f),r.appendChild(g),n.appendChild(r);const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}Name`,b.className="device-prop",b.contentEditable="true",b.textContent=`${e.Name}`;const w=document.createElement("br"),y=document.createElement("span");y.id=`${e.Id}IPv4`,y.className="device-prop ipv4 mono",y.contentEditable="true",y.textContent=`${$(e.IPv4)}`;const _=document.createElement("br"),M=document.createElement("span");M.id=`${e.Id}SubnetMask`,M.className="device-prop subnetmask mono",M.contentEditable="true",M.textContent=`${$(e.SubnetMask)}`;const A=document.createElement("span");return A.id=`${e.Id}Kind`,A.className="no-display",A.textContent="Client",t.appendChild(n),t.appendChild(h),t.appendChild(b),t.appendChild(w),t.appendChild(y),t.appendChild(_),t.appendChild(M),t.appendChild(A),t}class Kl extends He{constructor(t,n,r,s,o,i,l){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=l}toString(){const t=this;return p(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function St(e,t,n,r,s,o){const i=E(ft,E(a=>a.trim(),he(";",n))),l=E(ft,E(a=>a.trim(),he(";",r)));return new Kl(e,t,i,l,ko(fs,l,i),s,o)}function Jl(e){let t,n,r,s;const o=e.id;return St(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),wt(n.left,n.top,n.width,n.height)),Qe(Me((r=qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Me((s=qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function gs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#000000"),o.setAttribute("stroke","#000000");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#ffffff"),i.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#ffffff"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#ffffff"),a.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#ffffff"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const m=document.createElement("br"),f=document.createElement("span");f.id=`${e.Id}IPv4`,f.className="device-prop ipv4 mono",f.contentEditable="true";const g=R("; ",E($,e.IPv4));f.textContent=g;const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}SubnetMask`,b.className="device-prop subnetmask mono",b.contentEditable="true";const w=R("; ",E($,e.SubnetMask));b.textContent=w;const y=document.createElement("span");return y.id=`${e.Id}Kind`,y.className="no-display",y.textContent="Router",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(m),t.appendChild(f),t.appendChild(h),t.appendChild(b),t.appendChild(y),t}class Zl extends He{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return p(v("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function un(e,t,n,r){return new Zl(e,t,n,r)}function Ql(e){let t,n,r,s;const o=e.id;return un(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),wt(n.left,n.top,n.width,n.height)),Qe(Me((r=qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Me((s=qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function hs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#ffffff"),o.setAttribute("stroke","#000000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#000000"),i.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#000000"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const m=document.createElement("span");return m.id=`${e.Id}Kind`,m.className="no-display",m.textContent="Hub",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(m),t}class ge extends lt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function Et(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new ge(0,[Ul(e)]);case"Router":return new ge(1,[Jl(e)]);case"Hub":return new ge(2,[Ql(e)]);default:return}}function zl(e){switch(e.tag){case 1:return gs(e.fields[0]);case 2:return hs(e.fields[0]);default:return ps(e.fields[0])}}function Zt(e){return e.tag===0}function Mt(e){return e.tag===1}function cn(e){return e.tag===2}function Kn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function bs(e,t){switch(t.tag){case 0:return Q(t.fields[0].IPv4,e);case 1:return j(e,t.fields[0].IPv4,{Equals:Q,GetHashCode:sr});default:return!1}}function Jn(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return Ue();default:return O(e.fields[0].NetworkAddress)}}function ea(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function dn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}class ta extends He{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=$(t.Kind),r=R(" ",E($,t.Points));return p(v("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function et(e,t,n,r,s,o){return new ta(e,t,n,r,s,o)}function mn(e){let t,n,r;const s=e.id,o=document.getElementById(s+"Name").innerText,i=jl(document.getElementById(s+"Kind").innerText);let l;const u=document.getElementById(s+"Svg").getBoundingClientRect();l=wt(u.left,u.top,u.width,u.height);const c=E(Xe,he(" ",(t=document.getElementById(s+"Polyline"),t.getAttribute("points")))),d=Qe(Me((n=qe("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),n[1]||"")),Me((r=qe("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")));if(i!=null)return et(s,i,o,c,l,d)}function Zn(e){const t=document.createElement("div");t.id=e.Id,t.className="device cable-container lan-cable",t.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device"),n.classList.add("device"),n.setAttribute("viewBox",p(B("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",p(B("%f%P()px",[e.Area.Width]))),n.setAttribute("height",p(B("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${R(" ",E(Fl,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="no-display",l.textContent=`${e.Name}`;const a=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent=`${$(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(l),t.appendChild(a),t.appendChild(u),t}function fn(e,t){let n;const r=E(s=>ae(t.Area.X,t.Area.Y,s),t.Points);return tn((n=ea(e),s=>Yl(n,s)),r)}function na(e,t,n){const r=Vt(n),s=vr(N(o=>!cn(o),n));return To(o=>N(i=>cn(i)||Mt(r)?!0:s!=null?!Q(Ml(Jn(s),Jn(i)),Ue()):!1,N(i=>fn(i,o),N(i=>j(i,n,{Equals:Q,GetHashCode:sr})===!1,t))),N(o=>fn(r,o),e))}function ra(e,t,n){return E(r=>xe(n,O(r)),na(e,t,n))}function sa(e,t,n,r,s){const o=(i,l,a,u,c)=>{const d=ra(i,l,c);return tn(m=>bs(u,m),E(Vt,d))?!0:a===0?!1:tn(Ds(o)(i)(l)(a-1)(u),d)};return o(e,t,n,r,O(s))}const ys=`\r
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
    `,oa=`
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
            ${ys}
        </div>
        `;function ws(e,t,n){const r=n,s=r.pageY-t.getBoundingClientRect().height/2,o=r.pageX-t.getBoundingClientRect().width/2,i=p(v("top: %fpx; left: %fpx;"))(s)(o);e.setAttribute("style",i)}function vt(e){const t=document.getElementById(e.id+"Svg");t.ondragstart=r=>{r.preventDefault()};const n=r=>{ws(e,t,r)};t.onmousedown=r=>{document.addEventListener("mousemove",n),t.onmouseup=s=>{document.removeEventListener("mousemove",n)}}}function Bt(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function _t(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function Qt(e){L(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=an(r.innerText),i=document.getElementById("errorArea");if(i.innerText="",o.tag===1){o.fields[0];const l=document.getElementById(e.id+"Name").innerText;let a;switch(a=3,a){case 0:{i.innerText=`${l} の ${n} の数値の範囲が正しくありません。`;break}case 1:{i.innerText=`${l} の ${n} を入力してください。`;break}case 2:{i.innerText=`${l} の ${n} の形式が正しくありません。`;break}case 3:{i.innerText="不明なエラーです。";break}}setTimeout(()=>{r.focus()},0)}})},E(t=>[t,document.getElementById(e.id+t)],I(["IPv4","SubnetMask"])))}function At(e,t,n){let r;const s=[e,t];return r=Ye(o=>$n(n,o),s[0],s[1]),r[0]<=r[1]?[e,ae(n.X-e.X,n.Y-e.Y,t)]:[e,n]}function ia(e,t,n){let r;const s=[e,t];return r=Ye(o=>$n(n,o),s[0],s[1]),r[0]<=r[1]?[e,t]:[t,e]}function la(e,t,n,r){let s,o,i,l,a,u;const c=r;let d;const m=E(Xe,he(" ",n.getAttribute("points")));d=[Re(m),Vt(m)];const f=Qe(c.pageX-e.offsetLeft,c.pageY-e.offsetTop),g=ia(d[0],d[1],f),h=g[1],b=g[0],w=f.X-b.X,y=f.Y-b.Y,_=Un(h,b)|0,M=_===1?[b,ae(-w,-y,h)]:_===2?At(h,b,f):_===4?[b,ae(-w,-y,h)]:_===8?At(h,b,f):_===5?[b,ae(-w,-y,h)]:_===9?[ae(0,-y,h),ae(w,0,b)]:_===6?[ae(0,y,b),ae(-w,0,h)]:At(h,b,f),A=5-(s=(o=M,Ye(ve=>ve.X,o[0],o[1])),Te(s[0],s[1])),k=5-(i=(l=M,Ye(ve=>ve.Y,l[0],l[1])),Te(i[0],i[1]));let P,H;const re=M;H=Ye(ve=>ae(A,k,ve),re[0],re[1]);const ut=H[0],se=H[1];P=p(B("%f%P(),%f%P() %f%P(),%f%P()",[ut.X,ut.Y,se.X,se.Y])),n.setAttribute("points",P);const G=Xl(5*2,5*2,(a=(u=M,Ye(ve=>ae(A,k,ve),u[0],u[1])),Vl(a[0],a[1])));switch(t.setAttribute("viewBox",p(B("0 0 %f%P() %f%P()",[G.Width,G.Height]))),t.setAttribute("width",p(B("%f%P()px",[G.Width]))),t.setAttribute("height",p(B("%f%P()px",[G.Height]))),_){case 1:{e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w])));break}case 4:{e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w])));break}default:_===5?e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w]))):_===9?e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft]))):_===6&&e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop,e.offsetLeft+w])))}const It=Un(M[0],M[1])|0;switch(It){case 1:{t.setAttribute("width",p(B("%f%P()px",[G.Width+-w]))),t.setAttribute("height",p(B("%f%P()px",[G.Height+-y]))),e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w])));break}case 4:{t.setAttribute("width",p(B("%f%P()px",[G.Width+-w]))),t.setAttribute("height",p(B("%f%P()px",[G.Height+-y]))),e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w])));break}default:It===5&&(t.setAttribute("width",p(B("%f%P()px",[G.Width+-w]))),t.setAttribute("height",p(B("%f%P()px",[G.Height+-y]))),e.setAttribute("style",p(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+y,e.offsetLeft+w]))))}}function Qn(e){if(mn(e)!=null){const n=document.getElementById(e.id+"Svg");n.ondragstart=r=>{r.preventDefault()},n.onmousedown=r=>{let s;const o=mn(document.getElementById(e.id));if(o!=null){const a=o.Points;s=[Re(a),Vt(a)]}else s=[void 0,void 0];const i=Qe(r.offsetX,r.offsetY);let l;if(Ar(E(a=>$n(i,a),E(S,N(a=>a!=null,I([s[0],s[1]])))),{Compare:mt})<5){const a=document.getElementById(e.id+"Polyline");l=u=>{la(e,n,a,u)}}else l=a=>{ws(e,n,a)};document.addEventListener("mousemove",l),n.onmouseup=a=>{document.removeEventListener("mousemove",l)}}}}function zn(e){e.oncontextmenu=t=>{t.preventDefault(),document.getElementById("playArea").removeChild(e)}}function aa(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],l=i[0];return`
        <div class="history-container ${l}"">
            ${i[1]}<span class ="${l}">${dn(e)} [${s=t,$(s)}] -> ${o=n,$(o)} ${i[2]}</span>
        </div>
        `}function ua(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=bn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(l,a)=>l===a,GetHashCode:it});switch(e.key){case"\\":{const l=E(a=>document.getElementById(a),I(["sourceInput","destinationInput"]));o||(J(In(u=>u.value==="",l),Re(l)).focus(),e.preventDefault());break}case"?":{L(l=>{document.getElementById(l).classList.toggle("active")},I(["helpWindow","helpBarrier"]));break}case"Escape":{o&&L(l=>{document.getElementById(l).classList.remove("active")},I(["helpWindow","helpBarrier"]));break}}break}}}function ca(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=oe,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=c=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=c=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=oa,document.querySelector("#submitButton").className="submit-button network-simulator",document.getElementById("helpButton").onclick=c=>{L(d=>{document.getElementById(d).classList.toggle("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},I(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},I(["helpWindow","helpBarrier"]))};const n=document.getElementById("playArea").getBoundingClientRect(),r=I([new ge(0,[ze("device1","クライアント(1)","10.0.0.1","255.255.255.0",new F(0,0,100,100),new W(0+n.left,100+n.top))]),new ge(0,[ze("device2","クライアント(2)","10.0.0.2","255.255.255.0",new F(0,0,100,100),new W(150+n.left,100+n.top))]),new ge(1,[St("device3","ルータ(1)","10.0.0.254","255.255.255.0",new F(0,0,100,35),new W(300+n.left,100+n.top))]),new ge(0,[ze("device4","クライアント(3)","10.0.1.18","255.255.255.240",new F(0,0,100,100),new W(450+n.left,100+n.top))]),new ge(0,[ze("device5","クライアント(4)","10.0.1.19","255.255.255.240",new F(0,0,100,100),new W(600+n.left,100+n.top))]),new ge(1,[St("device6","ルータ(2)","10.0.1.30","255.255.255.240",new F(0,0,100,35),new W(750+n.left,100+n.top))]),new ge(2,[un("device7","ハブ(1)",new F(0,0,100,35),new W(900+n.left,100+n.top))])]);E(c=>document.getElementById("playArea").appendChild(c),E(zl,r));const s=I([et("lancable1",new ue(5,[]),"LANケーブル(1)",E(Xe,he(" ","5,5 195,45")),new F(0,0,200,50),new W(100+n.left,30+n.top)),et("lancable2",new ue(5,[]),"LANケーブル(2)",E(Xe,he(" ","5,5 195,45")),new F(0,0,200,50),new W(300+n.left,30+n.top)),et("lancable3",new ue(5,[]),"LANケーブル(3)",E(Xe,he(" ","5,5 195,45")),new F(0,0,200,50),new W(500+n.left,30+n.top)),et("lancable4",new ue(5,[]),"LANケーブル(4)",E(Xe,he(" ","5,5 195,45")),new F(0,0,200,50),new W(700+n.left,30+n.top))]);E(c=>document.getElementById("playArea").appendChild(c),E(Zn,s)),L(c=>{vt(c),Bt(c),_t(c)},E(c=>document.getElementById(c),E(Kn,r))),L(c=>{Qt(c)},E(c=>document.getElementById(c),E(Kn,N(c=>Zt(c)?!0:Mt(c),r)))),L(c=>{Qn(c),zn(c)},E(c=>document.getElementById(c),E(c=>c.Id,s)));const o=document.getElementById("submitButton");o.onclick=c=>{let d,m,f,g,h;c.preventDefault();const b=E(S,N(H=>H!=null,E(Et,I((d=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(d)))))),w=E(S,N(H=>H!=null,E(mn,I((m=document.getElementById("playArea").getElementsByClassName("cable-container"),Array.from(m)))))),y=document.getElementById("errorArea"),_=document.getElementById("outputArea");y.innerText="",_.innerText="";const M=document.getElementById("sourceInput"),A=document.getElementById("destinationInput"),k=an(M.value),P=an(A.value);if(k.tag===0){const H=k.fields[0];if(P.tag===0){const re=P.fields[0],ut=In(se=>bs(H,se),N(se=>Zt(se)?!0:Mt(se),b));if(ut!=null){const se=ut;if(yn(N(G=>fn(se,G),w)))y.innerText=(f=dn(se),g=$(H),p(v("%s [%s] はLANケーブルに繋がっていません。"))(f)(g));else{let G;const It=dn(se),ve=$(H),Is=$(re);G=p(v('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(It)(ve)(Is),_.innerHTML=G;const Es=aa(se,H,re,sa(w,b,128,re,se));switch(_.innerHTML=Es,document.activeElement.id){case"sourceInput":{M.focus();break}case"destinationInput":{A.focus();break}}}}else y.innerText=(h=$(H),p(v("IPv4 %s を持つデバイスが見つかりません。"))(h)),M.focus()}else{P.fields[0];let re;switch(re=3,re){case 0:{y.innerText="送信先 IPv4 の数値の範囲が正しくありません。";break}case 1:{y.innerText="送信先 IPv4 を入力してください。";break}case 2:{y.innerText="送信先 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="不明なエラーです。";break}}A.focus()}}else{k.fields[0];let H;switch(H=3,H){case 0:{y.innerText="送信元 IPv4 の数値の範囲が正しくありません。";break}case 1:{y.innerText="送信元 IPv4 を入力してください。";break}case 2:{y.innerText="送信元 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="不明なエラーです。";break}}M.focus()}};const i=document.getElementById("addClientButton");i.onclick=c=>{let d,m;const f=document.getElementById("playArea"),g=f.getBoundingClientRect(),h=f.getElementsByClassName("cable-container").item(0),b=U(N(Zt,E(S,N(y=>y!=null,E(Et,I((d=f.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,w=p(B("client%d%P()",[b]));m=ps(ze(w,p(B("クライアント(%d%P())",[b])),"10.0.0.1","255.255.255.0",new F(0,0,100,100),new W(0+g.left,0+g.top))),f.insertBefore(m,h),vt(document.getElementById(w)),Bt(document.getElementById(w)),_t(document.getElementById(w)),Qt(document.getElementById(w))};const l=document.getElementById("addRouterButton");l.onclick=c=>{let d,m,f;const g=document.getElementById("playArea"),h=g.getBoundingClientRect(),b=g.getElementsByClassName("cable-container").item(0),w=U(N(Mt,E(S,N(_=>_!=null,E(Et,I((d=g.getElementsByClassName("device-container"),Array.from(d))))))))|0,y=p(B("router%d%P()",[w+1]));m=gs((f=w|0,St(y,p(B("ルータ(%d%P())",[f+1])),`10.0.${f}.254`,"255.255.255.0",new F(0,0,100,35),new W(0+h.left,0+h.top)))),g.insertBefore(m,b),vt(document.getElementById(y)),Bt(document.getElementById(y)),_t(document.getElementById(y)),Qt(document.getElementById(y))};const a=document.getElementById("addHubButton");a.onclick=c=>{let d,m;const f=document.getElementById("playArea"),g=f.getBoundingClientRect(),h=f.getElementsByClassName("cable-container").item(0),b=U(N(cn,E(S,N(y=>y!=null,E(Et,I((d=f.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,w=p(B("hub%d%P()",[b]));m=hs(un(w,p(B("ハブ(%d%P())",[b])),new F(0,0,100,35),new W(0+g.left,0+g.top))),f.insertBefore(m,h),vt(document.getElementById(w)),Bt(document.getElementById(w)),_t(document.getElementById(w))};const u=document.getElementById("addLANCableButton");u.onclick=c=>{let d;const m=document.getElementById("playArea"),f=m.getBoundingClientRect(),g=m.getElementsByClassName("cable-container").length+1|0,h=p(B("cable%d%P()",[g]));d=Zn(et(h,new ue(5,[]),p(B("LANケーブル(%d%P())",[g])),E(Xe,he(" ","5,5 195,45")),new F(0,0,200,50),new W(0+f.left,0+f.top))),m.appendChild(d);const b=document.getElementById(h);Qn(b),zn(b)},document.onkeydown=c=>{ua(c)}}const da=`
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
                ${Vr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Yr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${Gr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${Kr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${Jr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${Zr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${Qr}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${zr}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${ns}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${ss}
            </dd>

            <dt>
                <h3><a href="/taidalab/endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${is}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${cs}
            </dd>
            
            <dt>
                <h3><a href="/taidalab/network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${ys}
            </dd>
        </dl>`;function ma(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>about - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=da,document.onkeydown=t=>{}}const fa=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function pa(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ご利用について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=fa,document.onkeydown=t=>{}}const ga=`\r
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
        </p>`;function ha(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ga,document.onkeydown=t=>{}}function er(e){const t=document.getElementById("numberInput"),n=Fe(t.value),r=Oe(n);if(t.focus(),r.tag===0){document.getElementById("errorArea").innerHTML="";const s=Ee(pe(9,r.fields[0])),o=Ie(r);if(o.tag===0){const i=o.fields[0]|0,l=Ce(ne(3," ",T(i))),a=document.getElementById("outputArea"),u=We("<br>",I([Ze(i===e,s,2,l,10),a.innerHTML]));a.innerHTML=u,i!==e||(window.history.replaceState($e(),"","http://localhost:8080/taidalab/"),br())}}else document.getElementById("errorArea").innerHTML=Je(T(e),n,r.fields[0])}function ba(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=gt,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ti,document.querySelector("#submitButton").className="submit-button display-order-3 not-found",document.querySelector("#questionArea").innerHTML=we,document.getElementById("questionSpan").innerText=T(404),document.getElementById("srcRadix").innerText=p(v("(%d)"))(10),document.getElementById("dstRadix").innerText=T(2),document.getElementById("binaryRadix").innerHTML=p(v("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),er(404)},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),er(404)}}function xn(e){switch(e.pathname){case"/taidalab/":{br();break}case"/taidalab/endless-binary/dec2bin-1/":{Oi();break}case"/taidalab/endless-binary/dec2bin-2/":{Vi();break}case"/taidalab/endless-binary/bin2dec-1/":{Zi();break}case"/taidalab/endless-binary/bin2dec-2/":{el();break}case"/taidalab/endless-binary/power-of-two-1/":{rl();break}case"/taidalab/endless-binary/power-of-two-2/":{il();break}case"/taidalab/endless-binary/addition/":{ml();break}case"/taidalab/endless-binary/subtraction/":{fl();break}case"/taidalab/endless-binary/complement/":{pl();break}case"/taidalab/endless-binary/dec2hex/":{vl();break}case"/taidalab/endless-binary/hex2dec/":{Al();break}case"/taidalab/iro-iroiro/":{Ol();break}case"/taidalab/network-simulator/":{ca();break}case"/taidalab/about/":{ma();break}case"/taidalab/terms/":{pa();break}case"/taidalab/information-policy/":{ha();break}default:ba()}}function Nn(){let e;const t=document.querySelector("aside").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==pr).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function qn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState($e(),"",e.href),xn((n=e.href,new URL(n))),Nn();let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(l=>l.href!==""),r=s.filter(l=>{let a;return hr((a=l.href,new URL(a)))}),r.forEach(l=>{qn(l)})}}function ya(){document.body.innerHTML="",document.body.innerHTML=ro,document.querySelector("footer").innerHTML=io,document.querySelector("aside").innerHTML=so}window.addEventListener("DOMContentLoaded",e=>{let t;ya();const n=gr((t=window.location.href,new URL(t)));window.history.replaceState($e(),"",n.href),xn(n);let r,s,o;const i=document.links;o=Array.from(i),s=o.filter(l=>l.href!==""),r=s.filter(l=>{let a;return hr((a=l.href,new URL(a)))}),r.forEach(l=>{qn(l)}),Nn()});window.addEventListener("popstate",e=>{let t;const n=gr((t=window.location.href,new URL(t)));window.history.replaceState($e(),"",n.href),xn(n);let r,s;const o=document.querySelector("aside").querySelectorAll("a");s=Array.from(o),r=s.filter(i=>i.href!==""),r.forEach(i=>{qn(i)}),Nn()});
