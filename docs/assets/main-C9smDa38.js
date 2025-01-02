(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Te(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Rs(e){return e!=null&&typeof e.GetEnumerator=="function"}function Ds(e){return e!=null&&typeof e.CompareTo=="function"}function Os(e){return e!=null&&typeof e.Equals=="function"}function ir(e){return e!=null&&typeof e.GetHashCode=="function"}function Ws(e){return e!=null&&typeof e.Dispose=="function"}function te(e){Ws(e)&&e.Dispose()}function xe(){return null}function Nt(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class Fs{constructor(t){this.iter=t,this.current=xe()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Le(e){return Rs(e)?e.GetEnumerator():new Fs(e[Symbol.iterator]())}function lr(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function On(e,t){return e.toString(10).padStart(t,"0")}function Wn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function C(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class ve{static id(t){return ve.idMap.has(t)||ve.idMap.set(t,++ve.count),ve.idMap.get(t)}}ve.idMap=new WeakMap;ve.count=0;function at(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function W(e){return e*2654435761|0}function ar(e){return at(e.toString(32))}function Xt(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Vs(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return W(e);case"bigint":return ar(e);case"string":return at(e);default:return W(ve.id(e))}}function Gs(e){return ir(e)?e.GetHashCode():Vs(e)}function Xs(e){return e.getTime()}function Ys(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Ke(e[r]);return Xt(n)}function Ke(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return W(e);case"bigint":return ar(e);case"string":return at(e);default:{if(ir(e))return e.GetHashCode();if(Te(e))return Ys(e);if(e instanceof Date)return Xs(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Ke(r));return Xt(n)}else return W(ve.id(e))}}}function ur(e){return Gs(e)}function js(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function cr(e,t){return js(e,t,H)}function Us(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!H(e[n[s]],t[r[s]]))return!1;return!0}function H(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:Os(e)?e.Equals(t):Te(e)?Te(t)&&cr(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&dr(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&Us(e,t)}function dr(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Wn(e),r=t.getTime()+Wn(t)),n===r?0:n<r?-1:1}function gt(e,t){return e===t?0:e<t?-1:1}function Ks(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function mr(e,t){return Ks(e,t,je)}function Js(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=je(e[i],t[i]),o!==0)return o}return 0}function je(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:Ds(e)?e.CompareTo(t):Te(e)?Te(t)?mr(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?dr(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?Js(e,t):-1}const Zs=new WeakMap;function Qs(e){return Zs.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function zs(e){let t=0,n="[";for(const r of e){if(t===0)n+=x(r);else if(t===100){n+="; ...";break}else n+="; "+x(r);t++}return n+"]"}function x(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return zs(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+x(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function eo(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=x(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>x(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class ut{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return eo(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Ke(n));return t.splice(0,0,W(this.tag)),Xt(t)}Equals(t){return this===t?!0:Nt(this,t)&&this.tag===t.tag?cr(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Nt(this,t)?this.tag===t.tag?mr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function to(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function no(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+x(n)).join(`
  `)+" }"}function ro(e){const t=Object.values(e).map(n=>Ke(n));return Xt(t)}function so(e,t){if(e===t)return!0;if(Nt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!H(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function oo(e,t){if(e===t)return 0;if(Nt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=je(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class Re{toJSON(){return to(this)}toString(){return no(this)}GetHashCode(){return ro(this)}Equals(t){return so(this,t)}CompareTo(t){return oo(this,t)}}class ot{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}const io="https://taidalog.github.io",_="/taidalab/";function fr(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),x(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+x(s))}else return e}function lo(e,t){return t.origin===e?t.pathname.startsWith(_):!1}function hn(e){return lo(io,e)}const ct=Symbol("numeric");function ao(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[ct])}function uo(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function co(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[ct]().multiply(t)}function mo(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[ct]().toFixed(t)}function Fn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[ct]().toPrecision(t)}function Vn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[ct]().toExponential(t)}function Gn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[ct]().toHex()}function fo(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+On(n,2)+":"+On(r,2)}function po(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+fo(e.offset??0)}function go(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function ho(e,t,n){return e.offset!=null?po(e):go(e)}function bn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function bo(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function pr(e,t,n=0){return e.lastIndex=n,e.test(t)}function yn(e,t,n=0){return e.lastIndex=n,e.exec(t)}const ft=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,pt=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function yo(e,t){return uo(e,t)<0}function v(e){return{input:e,cont:Io(e)}}function B(e,t){let n=0,r=0,s="";pt.lastIndex=0;let o=pt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,l,a,u,c]=o;r=pt.lastIndex,s+=gr(t[n++],l,a,u,c),pt.lastIndex=r-1,o=pt.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function wo(e,t){return typeof t=="string"?e(t):t.cont(e)}function m(e){return wo(t=>t,e)}function gr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",ao(e))switch(s.toLowerCase()!=="x"&&(yo(e,0)?(e=co(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=mo(e,r);break;case"g":case"G":e=r!=null?Fn(e,r):Fn(e);break;case"e":case"E":e=r!=null?Vn(e,r):Vn(e);break;case"x":e=Gn(e);break;case"X":e=Gn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=ho(e):e=x(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,l=t.indexOf("-")>=0,a=l||!i?" ":"0";a==="0"?(e=tn(e,n-o.length,a,l),e=o+e):e=tn(o+e,n,a,l)}return e}function hr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const l=t.slice(),a=n.slice();for(const u of o){const[,,c,d,f,p]=a[0];let g=d;if(s>=0)g=s,s=-1;else if(g==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=l[0],i+=gr(u,c,g,f,p),l.splice(0,1),a.splice(0,1)}return a.length===0?(i+=l[0],e(i)):hr(e,l,a,i,s)}}function Io(e){return t=>{ft.lastIndex=0;const n=[],r=[];let s=0,o=ft.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=ft.lastIndex,ft.lastIndex-=1,o=ft.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),hr(t,n,r))}}function ht(e){return typeof e!="string"||e.length===0}function Ue(e){return typeof e!="string"||/^\s*$/.test(e)}function R(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function tn(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function Eo(e,t,n){return tn(e,t,n)}function br(e,t,n){return e.replace(new RegExp(bo(t),"g"),n)}const vo=`\r
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
            `,It=`\r
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
            `,Bo=`
            <ul>
                <details>
                    <summary>
                        <a class="home" id="asideEndlessBinary">10進数↔︎2進数の反復練習</a>
                    </summary>
                    <ul>
                        <li><a class="dec2bin" href="${_}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>
                        <li><a class="dec2bin" href="${_}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>
                        <li><a class="bin2dec" href="${_}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>
                        <li><a class="bin2dec" href="${_}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>
                        <li><a class="power-of-two" href="${_}endless-binary/power-of-two-1/">2のn乗</a></li>
                        <li><a class="power-of-two" href="${_}endless-binary/power-of-two-2/">2のn乗-1</a></li>
                        <li><a class="addition" href="${_}endless-binary/addition/">加算</a></li>
                        <li><a class="subtraction" href="${_}endless-binary/subtraction/">減算</a></li>
                        <li><a class="complement" href="${_}endless-binary/complement/">補数</a></li>
                        <li><a class="dec2hex" href="${_}endless-binary/dec2hex/">10進数→16進数</a></li>
                        <li><a class="hex2dec" href="${_}endless-binary/hex2dec/">16進数→10進数</a></li>
                    </ul>
                </details>
                <li><a class="iro-iroiro" id="asideIroIroiro" href="${_}iro-iroiro/">色いろいろ</a></li>
                <li><a class="network-simulator" id="asideNetworkSimulator" href="${_}network-simulator/">ネットワークシミュレータ</a></li>
                <li><a class="ctc" id="asideSoon" href="#">Coming soon...</a></li>
            </ul>
            <ul>
                <li><a class="home" id="asideAbout" href="${_}">Home</a></li>
                <li><a class="home" id="asideAbout" href="${_}about/">About</a></li>
                <li><a class="home" id="asideTerms" href="${_}terms/">ご利用について</a></li>
                <li><a class="home" id="asideTerms" href="${_}information-policy/">情報の外部送信について</a></li>
            </ul>
            <ul>
                <li><a class="home" id="asideOdaibako" href="https://odaibako.net/u/taidalog">お題箱</a></li>
                <li><a class="home" id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>
            </ul>`,$e='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',_o="Version 5.0.4",Ao=m(v(`\r
                <small class="footer-container">\r
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>\r
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>\r
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>\r
                </small>`))(_o),yr=`\r
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
            </div>`,Lo=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function wr(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=It,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1 translate="no">taidalab</h1>',document.querySelector("main").innerHTML=Lo,document.onkeydown=t=>{}}class it{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ke(this.value)}Equals(t){return t==null?!1:H(this.value,t instanceof it?t.value:t)}CompareTo(t){return t==null?1:je(this.value,t instanceof it?t.value:t)}}function $(e){if(e==null)throw new Error("Option has no value");return e instanceof it?e.value:e}function Y(e){return e==null||e instanceof it?new it(e):e}function ee(e,t){return e!=null?$(e):t}function Be(e,t){return t!=null?Y(e($(t))):void 0}const So="The index was outside the range of elements in the collection.",Yt="Collection was empty.",$o="The input must be non-negative.",Mo="An index satisfying the predicate was not found in the collection.",Ir="The input sequence has an insufficient number of elements.";function Co(e,t){return typeof e=="function"?new e(t):new Array(t)}function To(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Se(e){const t=new ot(0);if(To(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function nn(e,t){return e>t?e:t}function Pe(e,t){return e<t?e:t}function xo(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function Po(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return _e(e.length-1,e)}function wn(e,t,n){const r=t.length|0,s=Co(n,r);for(let o=0;o<=r-1;o++)vr(s,o,e(_e(o,t)));return s}function qo(e,t,n,r,s){const o=ee(n,0)|0,i=ee(Be(a=>o+a,r),e.length)|0;return(a=>{e:for(;;){const u=a;if(u>=i)return-1;if(s.Equals(t,_e(u,e)))return u|0;a=u+1;continue e}})(o)|0}function In(e,t,n){return qo(t,e,void 0,void 0,n)>=0}function No(e){return e.slice().reverse()}function ko(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function Er(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return _e(0,e)}function _e(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function vr(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class re extends Re{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+R("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,l=o,a=i.tail,u=l.tail;if(a!=null)if(u!=null){const c=$(a),d=$(u);if(H(i.head,l.head)){s=c,o=d;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,l=s,a=o,u=a.tail;if(u!=null){const c=$(u);if(i>18)return l|0;r=i+1,s=(l<<1)+Ke(a.head)+631*i,o=c;continue e}else return l|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,l=o,a=i.tail,u=l.tail;if(a!=null)if(u!=null){const c=$(a),d=$(u),f=je(i.head,l.head)|0;if(f===0){s=c,o=d;continue e}else return f|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return Ro(this)}[Symbol.iterator](){return lr(Le(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Le(this)}}class Ho{constructor(t){this.xs=t,this.it=this.xs,this.current=xe()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=$(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=xe()}Dispose(){}}function Ro(e){return new Ho(e)}function k(){return new re(xe(),void 0)}function Et(e,t){return new re(e,t)}function j(e){return e.tail==null}function Br(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=$(i);continue e}else return s|0}})(0,e)|0}function ce(e){if(e.tail!=null)return e.head;throw new Error(Yt+"\\nParameter name: list")}function P(e){const t=e.tail;if(t!=null)return $(t);throw new Error(Yt+"\\nParameter name: list")}function Do(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,l=i.tail;if(l!=null){if(o===t)return i.head;r=o+1,s=$(l);continue e}else throw new Error(So+"\\nParameter name: index")}})(0,e)}function Oo(){throw new Error(Mo)}function Je(){return k()}function Me(e,t){return Et(e,t)}function F(e){return Et(e,k())}function En(e){return j(e)}function ne(e){return Br(e)}function De(e){return ce(e)}function vn(e){return P(e)}function _r(e){e:for(;;){const t=e;if(j(t))return;{const n=P(t);if(j(n))return Y(ce(t));e=n;continue e}}}function jt(e){const t=_r(e);if(t==null)throw new Error(Yt);return $(t)}function Ar(e){const t=Br(e)|0,n=xo(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,l=o;if(!j(l)){vr(n,i,ce(l)),s=i+1,o=P(l);continue e}break}})(0,e),n}function de(e,t,n){let r=t,s=n;for(;!j(s);)r=e(r,De(s)),s=P(s);return r}function kt(e){return de((t,n)=>Et(n,t),k(),e)}function Wo(e,t,n){return((s,o,i)=>{e:for(;;){const l=s,a=o,u=i;if(j(u))return a;s=l+1,o=e(l,a,ce(u)),i=P(u);continue e}})(0,t,n)}function Fo(e,t,n,r){let s=t,o=n,i=r;for(;!j(o)&&!j(i);)s=e(s,ce(o),ce(i)),o=P(o),i=P(i);return s}function L(e,t){de((n,r)=>{e(r)},void 0,t)}function Vo(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=Et(_e(r,e),n);return n}function w(e){return Vo(e,k())}function Go(e){let t,n;if(Te(e))return w(e);if(e instanceof re)return e;{const r=k();let s=r;const o=Le(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const a=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new re(a,void 0),t.tail=n,n)}}finally{te(o)}const i=s,l=k();return i.tail=l,P(r)}}function qe(e,t){return de((n,r)=>Et(r,n),t,kt(e))}function Xo(e,t){let n,r;const s=k();let o=s,i=t;for(;!j(i);){let u=e(ce(i));for(;!j(u);)o=(n=o,r=new re(ce(u),void 0),n.tail=r,r),u=P(u);i=P(i)}const l=o,a=k();return l.tail=a,P(s)}function vt(e,t){const n=k(),r=Wo((o,i,l)=>{const a=new re(e(o,l),void 0);return i.tail=a,a},n,t),s=k();return r.tail=s,P(n)}function y(e,t){const n=k(),r=de((o,i)=>{const l=new re(e(i),void 0);return o.tail=l,l},n,t),s=k();return r.tail=s,P(n)}function Yo(e,t,n){const r=k(),s=Fo((i,l,a)=>{const u=new re(e(l,a),void 0);return i.tail=u,u},r,t,n),o=k();return s.tail=o,P(r)}function jo(e,t){return(r=>{e:for(;;){const s=r;if(j(s))return;{const o=e(ce(s));if(o==null){r=P(s);continue e}else return o}}})(t)}function Bn(e,t){return jo(n=>e(n)?Y(n):void 0,t)}function _n(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(j(i))return;if(e(ce(i)))return o;r=o+1,s=P(i);continue e}})(0,t)}function Uo(e,t){const n=_n(e,t);return n==null?(Oo(),-1):$(n)|0}function xt(e,t){return Do(t,e)}function q(e,t){const n=k(),r=de((o,i)=>{if(e(i)){const l=new re(i,void 0);return o.tail=l,l}else return o},n,t),s=k();return r.tail=s,P(n)}function U(e,t,n){return _n(r=>n.Equals(e,r),t)!=null}function An(e,t){if(j(t))throw new Error(Yt);return de(e,De(t),vn(t))}function bt(e,t){return de((n,r)=>n&&e(r),!0,t)}function rn(e,t){return _n(e,t)!=null}function Ko(e,t){const n=Ar(t);return n.sort(e),w(n)}function Xn(e,t){return Ko((n,r)=>t.Compare(n,r),e)}function Jo(e,t){return An((n,r)=>t.Compare(r,n)>0?r:n,e)}function Lr(e,t){return An((n,r)=>t.Compare(r,n)>0?n:r,e)}function Zo(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(j(r))throw new Error(Ir+"\\nParameter name: list");e=n-1,t=P(r);continue e}}function Qo(e,t){if(e<0)throw new Error($o+"\\nParameter name: count");const n=(i,l,a)=>{let u;e:for(;;){const c=i,d=l,f=a;if(c<=0)return d;if(j(f))throw new Error(Ir+"\\nParameter name: list");i=c-1,l=(u=new re(ce(f),void 0),d.tail=u,u),a=P(f);continue e}},r=k(),s=n(e,r,t),o=k();return s.tail=o,P(r)}function Bt(e,t){const n=(i,l,a)=>{let u;e:for(;;){const c=i,d=l,f=a;if(c<=0)return d;if(j(f))return d;i=c-1,l=(u=new re(ce(f),void 0),d.tail=u,u),a=P(f);continue e}},r=k(),s=n(e,r,t),o=k();return s.tail=o,P(r)}function Ln(e,t,n){const r=ne(n)|0;let s;const o=ee(e,0)|0;s=o<0?0:o;let i;const l=ee(t,r-1)|0;return i=l>=r?r-1:l,i<s?k():Qo(i-s+1,Zo(s,n))}function zo(){return Math.random()}function Zt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function ei(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class ti{constructor(){}Next0(){return Zt(0,2147483647)}Next1(t){return Zt(0,t)}Next2(t,n){return Zt(t,n)}NextDouble(){return zo()}NextBytes(t){ei(t)}}function ni(){return new ti}function Sr(){return ni()}function se(e,t){return Sr().Next2(e,t+1)|0}function J(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function $r(e){return Math.log(e)/Math.log(2)}var sn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(sn||(sn={}));function ri(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Yn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function si(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function oi(e,t){if(t&sn.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function ii(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||oi(o,t),!si(n).test(i))return ri(s,n)}return null}function z(e,t,n,r,s){const o=ii(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[l,a]=Yn(!0,r);!n&&o.radix!==10&&i>=l&&i<=a&&(i=i<<32-r>>32-r);const[u,c]=Yn(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Ht(e,t,n,r,s){try{return s.contents=z(e,t,n,r),!0}catch{return!1}}function li(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function Mr(e,t,n){return m(v(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function st(e,t,n,r){return m(v('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function Sn(e,t,n,r,s,o){return m(v('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function ai(e,t,n,r,s,o,i,l){return m(v('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(l)}function Ae(e,t){return ai("opacity","linear","0","1",e,t,"1","freeze")}function Cr(e,t,n,r,s,o,i,l,a){return Sn(m(v("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),l,1,a,0,Ae(i,500))}function Ne(e,t){return yn(bn(e),t)}function ke(e,t){return pr(bn(e),t)}function ui(e){throw new Error(e)}const ci="Enumeration already finished.",di="Enumeration has not started. Call MoveNext.",Tr="The input sequence has an insufficient number of elements.",mi="Reset is not supported on this enumerator.";function fi(){throw new Error(mi)}function $n(){throw new Error(di)}function on(){throw new Error(ci)}class pi{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Le(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+x(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{te(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return lr(Le(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function gi(e){return new pi(e)}class hi{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){fi()}Dispose(){this.dispose()}}function Ut(e,t,n){return new hi(e,t,n)}function bi(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const l=$(n);try{te(l)}finally{n=void 0}}if(t!=null){const l=$(t);try{te(l)}finally{t=void 0}}};return Ut(()=>(r?s&&on():$n(),o!=null?$(o):on()),()=>{let l;if(r||(r=!0),s)return!1;{let a;for(;a==null;){const u=t,c=n;if(u!=null)if(c!=null){const d=$(c);if(d["System.Collections.IEnumerator.MoveNext"]())o=Y(d["System.Collections.Generic.IEnumerator`1.get_Current"]()),a=!0;else try{te(d)}finally{n=void 0}}else{const d=$(u);d["System.Collections.IEnumerator.MoveNext"]()?n=(l=d["System.Collections.Generic.IEnumerator`1.get_Current"](),Le(l)):(i(),a=!1)}else t=Le(e)}return $(a)}},()=>{s||i()})}function yi(e,t){return Ut(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{te(t)}finally{}})}function xr(e,t,n){let r=!1,s,o=Y(e());const i=()=>{if(o!=null){const a=$(o);try{n(a)}finally{o=void 0}}},l=()=>{try{i()}finally{s=void 0}};return Ut(()=>(r||$n(),s!=null?$(s):on()),()=>{if(r||(r=!0),o!=null){const a=$(o);let u;try{u=t(a)}catch(c){throw l(),c}return u!=null?(s=u,!0):(l(),!1)}else return!1},i)}function wi(e,t){let n,r=t;return Ut(()=>{if(n!=null){const s=$(n)[0];return $(n)[1],s}else return $n()},()=>(n=e(r),n!=null?($(n)[0],r=$(n)[1],!0):!1),()=>{})}function Ii(e,t){t==null&&ui(e)}function dt(e){return gi(e)}function Oe(e){return Ii("source",e),Le(e)}function _t(e){return dt(()=>Le(e()))}function Pr(e){return dt(()=>bi(e))}function qr(e,t){return dt(()=>wi(e,t))}function Nr(e){return e instanceof re?Ar(e):Array.from(e)}function Ze(e){return Te(e)?w(e):e instanceof re?e:Go(e)}function Mn(e,t,n){return dt(()=>xr(e,t,n))}function Ei(e,t,n){return dt(()=>{let r=-1;return xr(e,s=>(r=r+1|0,t(r,s)),n)})}function vi(e,t){return Pr([e,t])}function Bi(e,t){return Mn(()=>Oe(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{te(n)})}function _i(e,t){return Bi(n=>{if(e(n))return Y(n)},t)}function Ai(e,t,n){const r=Oe(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{te(r)}}function Li(e,t){return qr(n=>n<e?[t(n),n+1]:void 0,0)}function jn(e,t){Ai((n,r)=>(e(n,r),n+1|0),0,t)}function Si(e){const t=Oe(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?Y(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{te(t)}}function $i(e){const t=Si(e);if(t==null)throw new Error(Tr+"\\nParameter name: source");return $(t)}function Mi(e){if(Te(e))return e.length|0;if(e instanceof re)return ne(e)|0;{const t=Oe(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{te(t)}}}function pe(e,t){return Mn(()=>Oe(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?Y(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{te(n)})}function Ci(e,t){return Ei(()=>Oe(t),(n,r)=>r["System.Collections.IEnumerator.MoveNext"]()?Y(e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{te(n)})}function Ti(e,t){return Li(e,n=>t)}function Rt(e){return _t(()=>No(Nr(e)))}function xi(e,t){return dt(()=>{const n=Oe(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Tr+"\\nParameter name: source");return yi(()=>{},n)}catch(r){throw te(n),r}})}function Pi(e,t){return _t(()=>{let n=!0;return _i(r=>(n&&(n=e(r)),!n),t)})}function qi(e){return xi(1,e)}function Ni(e,t){return Mn(()=>Oe(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?Y(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{te(n)})}function kr(e,t){return _t(()=>Pr(pe(e,t)))}function ki(e,t){return _t(()=>ko(e,Nr(t)))}function Un(e,t,n){const r=e-Mi(n)|0;return r<1?n:vi(Ti(r,t),n)}function Hr(e){return R("",pe(t=>t,qi(e.split(""))))}function Hi(e){return $i(e.split(""))}function Z(e,t,n){return Eo(n,e,t)}function Dt(e){return R("",pe(t=>t,Rt(e.split(""))))}function Ri(e,t){return pe(n=>R("",n),pe(n=>wn(r=>r,n),ki(e,t.split(""))))}function Di(e,t){return pe(Dt,Rt(Ri(e,Dt(t))))}function le(e,t){return w(t.split(e))}function Oi(e,t){return[R("",pe(n=>n,Ni(n=>!e(n),t.split("")))),R("",pe(n=>n,Pi(n=>!e(n),t.split(""))))]}function Wi(e){return new N(0,[e])}function Rr(e){return new N(1,[e])}class N extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Fi(e,t){return t.tag===0?Wi(e(t.fields[0])):Rr(t.fields[0])}function ue(e,t){return t.tag===0?e(t.fields[0]):Rr(t.fields[0])}function Vi(e){try{return new N(0,[z(e,511,!1,32)])}catch(t){return new N(1,[new Error(t.message)])}}function Gi(e){return ht(e)?new N(1,[new Error]):new N(0,[e])}function Cn(e){return e===""?new N(1,[new Error("Value cannot be empty string.")]):new N(0,[e])}function Tn(e,t){return pr(bn(e),t)?new N(0,[t]):new N(1,[new Error(`The input string '${t}' was not in a correct format.`)])}function Dr(e,t,n){return e(n)>t?new N(1,[new Error(m(B("Value is too long. Value must be shorter or equal to %d%P()",[t])))]):new N(0,[n])}class T extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class He extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Ot extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}function Or(e){const t=Vi(e);return t.tag===1?new T(1,[t.fields[0]]):new T(0,[t.fields[0]])}function oe(e){const t=e;return t.tag===1?new He(1,[t.fields[0]]):new He(0,[C(t.fields[0],2)])}function yt(e){const t=e;return t.tag===1?new Ot(1,[t.fields[0]]):new Ot(0,[C(t.fields[0],16)])}function mt(e){const t=ue(n=>{try{const r=yn(/^0*([01]+)$/gu,n);return new N(0,[r[1]||""])}catch(r){return new N(1,[r])}},ue(n=>Dr(r=>r.length,32,n),ue(n=>Tn("^[01]+$",n),ue(Cn,new N(0,[e])))));return t.tag===1?new He(1,[t.fields[0]]):new He(0,[t.fields[0]])}function Qe(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[z(t.fields[0],511,!1,32,2)])}function xn(e){const t=ue(n=>{try{const r=yn(/^0*([0-9A-Fa-f]+)$/gu,n);return new N(0,[r[1]||""])}catch(r){return new N(1,[r])}},ue(n=>Dr(r=>r.length,8,n),ue(n=>Tn("^[0-9A-Fa-f]+$",n),ue(Cn,new N(0,[e])))));return t.tag===1?new Ot(1,[t.fields[0]]):new Ot(0,[t.fields[0]])}function Pn(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[z(t.fields[0],511,!1,32,16)])}function ge(e,t){return`
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
            </div>`}const Xi=`\r
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
            </div>`;function ze(e,t,n){const r=Ue(t)?`${e} の2進法表記を入力してください。`:ke("^[01]+$",t)?"不明なエラーです。":`'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function Wr(e,t,n){const r=Ue(t)?`${e} の10進法表記を入力してください。`:ke("^[0-9]+$",t)?"不明なエラーです。":`'${t}' は10進数ではありません。使えるのは半角の 0123456789 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function Yi(e,t,n){const r=Ue(t)?`${e} の16進法表記を入力してください。`:ke("^[0-9A-Fa-f]+$",t)?"不明なエラーです。":`'${t}' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function et(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return m(B(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Fr(e,t){return t.tag===0?R(" ",Ze(Di(e,t.fields[0]))):""}function Kt(e,t){let n,r;const s=Un(8,"",pe(i=>i,(n=oe(new T(0,[e])),n.tag===1?"":n.fields[0]).split(""))),o=Un(8,"",pe(i=>i,(r=oe(new T(0,[t])),r.tag===1?"":r.fields[0]).split("")));jn((i,l)=>{let a;const u=m(B("firstRowDigit%d%P()",[8-i]));a=document.getElementById(u),a.innerText=l},s),jn((i,l)=>{let a;const u=m(B("secondRowDigit%d%P()",[8-i]));a=document.getElementById(u),a.innerText=l},o)}function we(e){const t=e*2500-500|0;return Math.abs(t)|0}function Vr(e,t){return[Y(e),1,Y(t),void 0]}function Gr(e,t){let n;const r=kt(t);return En(r)?F([void 0,void 0,void 0,void 0]):kt(Me((n=De(r),[void 0,void 0,Y(n[0]),Y(n[1])]),y(s=>[Y(e),1,Y(s[0]),Y(s[1])],vn(r))))}function he(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=In("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:at});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{L(s=>{document.getElementById(s).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{n&&L(s=>{document.getElementById(s).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}}}function We(e,t){return R(e,q(n=>!ht(n),t))}function ji(e,t){return de((n,r)=>br(n,r[0],r[1]),t,e)}function Fe(e){return ji(w([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function Ie(e){return br(e," ","&nbsp;")}function Ce(e,t){return Z(e,"0",t)}function Ve(e){let t;return t=Oi(n=>n!=="0",Dt(Hr(Dt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+Hi(e)}function Ye(e,t,n){return[e(t),e(n)]}function Wt(e,t,n,r){return[e(t),e(n),e(r)]}const Xr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ui(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return qe(s,F(1));default:{let i;const l=~~$r(o)|0;i=Math.pow(2,l),n=qe(s,F(i)),r=o-i;continue e}}}})(Je(),e)}function qn(e,t){let n,r=0;n=[li(e,t,new ot(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?F([o,s]):qe(F([o,s]),qn(o,t))}function Ki(e,t,n,r){return Cr(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+we(t-1),n,r)}function Yr(e,t,n){const r=Me(Vr(e,t),Gr(e,qn(t,e)));let s;const o=y(i=>{const l=ee(i[0],""),a=ee(i[1],""),u=ee(i[2],""),c=ee(i[3],"");return m(v("%s%s%s%s"))(l)(a)(u)(c)},vt((i,l)=>[Be(a=>{let u,c;return st(0,n*(i+1),0,(u=Ae((c=we(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(a)(u)))},l[0]),Be(a=>{let u,c,d,f,p,g,h;return Sn((u=~~(n/2)+2|0,c=n*i+6|0,d=~~(n/2)|0,f=n*.4,p=n*.8,g=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(f)(p)(g)),"#000000",1,"none",0,Ae((h=we(i)|0,i===0?h+500:h+1500),500))},l[1]),Be(a=>{let u,c;return st(~~(n/2)*2,n*(i+1),0,(u=Ie(Z(3," ",C(a))),c=Ae(we(i),500),m(v("%s%s"))(u)(c)))},l[2]),Be(a=>{let u;return st(~~(n/2)*6,n*(i+1),0,(u=Ae(500+we(i),500),m(v("…%d%s"))(a)(u)))},l[3])],r));return s=de((i,l)=>m(v("%s%s"))(i)(l),Ki(n,ne(r),"#191970","#b0e0e6"),o),Mr(~~(n/2)*10,n*(ne(r)+1),s)}function Ji(e,t){return`
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
                ${Yr(e,t,20)}
            </div>
            `}function Zi(e,t){let n,r,s;const o=R(" + ",y(C,t)),i=R(" + ",(n=y(c=>{let d;return d=$r(c),~~Math.trunc(d)},t),y((r=m(v("2<sup>%d</sup>")),r),n))),l=R(" + ",y(c=>`${c}<sub>(2)</sub>`,y(c=>c.tag===1?"":c.fields[0],y(c=>oe(new T(0,[c])),t))));let a;const u=oe(e);return a=u.tag===1?"-1":u.fields[0],m(B(`\r
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
            `,[(s=e,s.tag===1?-1:s.fields[0]),o,i,i,l,l,a]))}function jr(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${Ji(2,e)}
                <h3>考え方 2</h3>
                ${Zi(new T(0,[e]),Ui(e))}
            </details>
            `}function Qi(e,t){const n=(o,i)=>{e:for(;;){const l=o,a=i,u=Sr(),c=u.Next2(l,a)|0,d=u.Next2(l,a)|0;if(c!==d)return[c,d];o=l,i=a;continue e}};let r;const s=n(e,t);return r=Ye(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Ur(e,t){return J(()=>Qi(0,e),n=>U(n,t,{Equals:(r,s)=>r===s,GetHashCode:W})===!1)}function zi(e,t){const n=Qe(mt(t));return n.tag===0?et(e,Ve(Ce(8,t)),2,Ie(Z(3," ",C(n.fields[0]))),10):""}function Kr(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Yr(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function lt(e,t,n,r,s,o,i,l,a,u){const c=document.getElementById("numberInput"),d=Fe(c.value),f=mt(d);if(c.focus(),f.tag===0){document.getElementById("errorArea").innerHTML="";const p=document.getElementById("outputArea"),g=We("<br>",w([zi(H(f,u),f.fields[0]),p.innerHTML]));if(p.innerHTML=g,H(f,u)){const h=e(l)|0;document.getElementById("questionSpan").innerText=C(h),document.getElementById("hintArea").innerHTML=t(h),r(h);const b=new T(0,[h]),I=oe(b);c.value="";const E=Bt(i,Me(h,l));document.getElementById("submitButton").onclick=A=>{A.preventDefault(),lt(e,t,n,r,s,o,i,E,b,I)},document.getElementById("inputArea").onsubmit=A=>{A.preventDefault(),lt(e,t,n,r,s,o,h,E,b,I)}}}else{const p=a.tag===0?C(a.fields[0]):"";document.getElementById("errorArea").innerHTML=n(p,d,f.fields[0])}}function el(e,t,n){lt(r=>Ur(8,r),jr,ze,r=>{Kr(r)},10,2,10,e,t,n)}function Jt(e,t,n,r,s,o,i){const l=e(Je())|0;document.getElementById("questionSpan").innerText=C(l),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=C(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(l);const a=new T(0,[l]),u=oe(a);document.getElementById("submitButton").onclick=c=>{c.preventDefault(),o(F(l),a,u)},document.getElementById("inputArea").onsubmit=c=>{c.preventDefault(),o(F(l),a,u)},n(l),document.getElementById("helpButton").onclick=c=>{L(d=>{document.getElementById(d).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=c=>{i(c)}}function tl(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(Xr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=$e,Jt(t=>Ur(8,t),jr,t=>{Kr(t)},10,2,(t,n,r)=>{el(t,n,r)},t=>{he(t)})}const Jr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Zr(e){return""}function Qr(e){return J(()=>se(0,255),t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function nl(e,t,n){lt(Qr,Zr,ze,r=>{},10,2,10,e,t,n)}function rl(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(Jr,"help-color dec2bin"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2bin",document.querySelector("#questionArea").innerHTML=$e,Jt(Qr,Zr,t=>{},10,2,(t,n,r)=>{nl(t,n,r)},t=>{he(t)})}function zr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const es=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function sl(){const e=J(()=>{const t=()=>{let n,r;const s=Qe(new He(0,[Hr(Z(9,"0",(n=oe(new T(0,[(r=se(0,8)|0,Math.pow(2,r))])),n.tag===0?n.fields[0]:"")))]));return s.tag===0?s.fields[0]|0:-1};return[t(),t()]},t=>!H(t[0],t[1]));return e[0]+e[1]|0}function ol(e){return R(" + ",vt((t,n)=>{const r=e.length-t-1|0;return m(v("(%c * 2<sup>%d</sup>)"))(n)(r)},Ze(e.split(""))))}function il(e){return vt((t,n)=>[m(B('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],Ze(e.split("")))}function ll(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function al(e){const t=de((n,r)=>zr((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],il(e));return ll(t[0],t[1],t[2])}function ts(e){let t;if(e.tag===0){const n=e.fields[0],r=ol(n);return m(B(`\r
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
            `,[al(n),n,r,(t=Qe(e),t.tag===1?-1:t.fields[0])]))}else return""}function ns(e){return J(sl,t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function ul(e,t,n){let r,s,o;switch(t.tag===0&&n.tag===0?(r=0,s=t.fields[0],o=n.fields[0]):r=1,r){case 0:{const i=Ve(Ce(8,s));return et(e,Ie(Z(3," ",C(o))),10,i,2)}default:return""}}function ln(e,t,n,r,s,o,i){const l=document.getElementById("numberInput"),a=Fe(l.value),u=Or(a);if(l.focus(),u.tag===0){document.getElementById("errorArea").innerHTML="";const c=document.getElementById("outputArea"),d=We("<br>",w([ul(H(u,i),o,i),c.innerHTML]));if(c.innerHTML=d,H(u,i)){const f=e(s)|0,p=new T(0,[f]),g=oe(p);document.getElementById("questionSpan").innerText=Fr(4,g),document.getElementById("hintArea").innerHTML=t(g),l.value="";const h=Bt(r,Me(f,s));document.getElementById("submitButton").onclick=b=>{b.preventDefault(),ln(e,t,n,r,h,g,p)},document.getElementById("inputArea").onsubmit=b=>{b.preventDefault(),ln(e,t,n,r,h,g,p)}}}else{const c=o.tag===0?o.fields[0]:"";document.getElementById("errorArea").innerHTML=Wr(c,a,u.fields[0])}}function Kn(e,t,n){ln(ns,ts,r=>{},4,e,t,n)}function rs(e,t,n,r){const s=e(Je())|0,o=new T(0,[s]),i=oe(o);document.getElementById("questionSpan").innerText=Fr(4,i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("dstRadix").innerText=C(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=l=>{l.preventDefault(),Kn(F(s),i,o)},document.getElementById("inputArea").onsubmit=l=>{l.preventDefault(),Kn(F(s),i,o)},document.getElementById("helpButton").onclick=l=>{L(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=l=>{L(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=l=>{L(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=l=>{r(l)}}function cl(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(es,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=$e,rs(ns,ts,t=>{},t=>{he(t)})}const ss=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function dl(e){return""}function ml(e){return J(()=>se(0,255),t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function fl(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(ss,"help-color bin2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 bin2dec",document.querySelector("#questionArea").innerHTML=$e,rs(ml,dl,t=>{},t=>{he(t)})}const os=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function is(e){const t=~~(Math.log(e)/Math.log(2))|0;return m(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function ls(e){return J(()=>{const t=se(0,7)|0;return Math.pow(2,t)|0},t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function pl(e,t,n){lt(ls,is,ze,r=>{},10,2,4,e,t,n)}function gl(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(os,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=$e,Jt(ls,is,t=>{},10,2,(t,n,r)=>{pl(t,n,r)},t=>{he(t)})}const as=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function us(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return m(B(`\r
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
            </details>`,[e,e,e+1,t,e,t,t]))}function cs(e){return J(()=>{let t;return-1+(t=se(0,8)|0,Math.pow(2,t))},t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function hl(e,t,n){lt(cs,us,ze,r=>{},10,2,4,e,t,n)}function bl(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(as,"help-color power-of-two"),document.querySelector("#submitButton").className="submit-button display-order-3 power-of-two",document.querySelector("#questionArea").innerHTML=$e,Jt(cs,us,t=>{},10,2,(t,n,r)=>{hl(t,n,r)},t=>{he(t)})}const ds=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function yl(){return`\r
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
                </details>`}function wl(e){let t;const n=-1+Math.pow(2,e)|0,r=J(()=>se(1,n),s=>{const o=oe(new T(0,[s]));if(o.tag===0){const i=o.fields[0];return i.length===e&&ke("^1+0+$",i)===!1}else return!1})|0;return[r,(t=n-r|0,J(()=>se(1,t),s=>s!==r&&(s&r)!==0))]}function Il(e,t){return J(()=>wl(e),n=>U(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:W})===!1&&U(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:W})===!1)}function an(e,t,n,r,s,o,i,l,a,u,c){const d=document.getElementById("numberInput"),f=Fe(d.value);d.focus();const p=mt(f);if(p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="";const h=n(g),b=Qe(new He(0,[g]));if(b.tag===0){const I=b.fields[0]|0,E=Ie(Z(3," ",C(I))),A=document.getElementById("outputArea"),S=We("<br>",w([et(I===l,h,s,E,o),A.innerHTML]));if(A.innerHTML=S,I===l){const M=e(c),D=M[1]|0,Q=M[0]|0;Kt(Q,D),document.getElementById("hintArea").innerHTML=t(),d.value="";const O=Bt(i,qe(w([Q,D]),c));document.getElementById("submitButton").onclick=V=>{V.preventDefault(),an(e,t,n,r,s,o,i,Q+D,Q,D,O)},document.getElementById("inputArea").onsubmit=V=>{V.preventDefault(),an(e,t,n,r,s,o,i,Q+D,Q,D,O)}}}}else{const g=b=>{const I=oe(new T(0,[b]));return I.tag===1?"":I.fields[0]},h=ze(m(B("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[g(a),s,g(u),s])),f,p.fields[0]);document.getElementById("errorArea").innerHTML=h}}function El(e,t,n,r,s,o,i,l,a){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(o),document.getElementById("hintArea").innerHTML=t();const u=e(Je()),c=u[1]|0,d=u[0]|0;Kt(d,c),document.getElementById("submitButton").onclick=f=>{f.preventDefault(),a(e,t,n,r,s,o,i,d+c,d,c,w([d,c]))},document.getElementById("inputArea").onsubmit=f=>{f.preventDefault(),a(e,t,n,r,s,o,i,d+c,d,c,w([d,c]))},document.getElementById("helpButton").onclick=f=>{L(p=>{document.getElementById(p).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=f=>{L(p=>{document.getElementById(p).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=f=>{L(p=>{document.getElementById(p).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=f=>{l(f)}}function vl(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>加算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(ds,"help-color addition"),document.querySelector("#submitButton").className="submit-button display-order-3 addition",document.querySelector("#questionArea").innerHTML=yr,El(t=>Il(8,t),yl,t=>Ve(Ce(8,t)),t=>{},2,2,10,t=>{he(t)},(t,n,r,s,o,i,l,a,u,c,d)=>{an(t,n,r,s,o,i,l,a,u,c,d)})}const ms=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function fs(){const e=se(1,255)|0,t=J(()=>se(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function ps(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function Ft(e,t,n,r){const s=document.getElementById("numberInput"),o=Fe(s.value);s.focus();const i=mt(o);if(i.tag===0){const l=i.fields[0];document.getElementById("errorArea").innerHTML="";const a=Ve(Ce(8,l)),u=Qe(new He(0,[l]));if(u.tag===0){const c=u.fields[0]|0,d=Ie(Z(3," ",C(c))),f=document.getElementById("outputArea"),p=We("<br>",w([et(c===e,a,2,d,10),f.innerHTML]));if(f.innerHTML=p,c===e){const g=J(fs,A=>U(A[0],r,{Equals:(S,M)=>S===M,GetHashCode:W})===!1&&U(A[1],r,{Equals:(S,M)=>S===M,GetHashCode:W})===!1),h=g[1]|0,b=g[0]|0;Kt(b,h);const I=ps();document.getElementById("hintArea").innerHTML=I,s.value="";const E=Ln(0,Pe(20,ne(r)+1)-1,qe(w([b,h]),r));document.getElementById("submitButton").onclick=A=>{A.preventDefault(),Ft(b-h,b,h,E)},document.getElementById("inputArea").onsubmit=A=>{A.preventDefault(),Ft(b-h,b,h,E)}}}}else{const l=u=>{const c=oe(new T(0,[u]));return c.tag===1?"":c.fields[0]},a=ze(m(B("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[l(t),2,l(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=a}}function Bl(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>減算 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(ms,"help-color subtraction"),document.querySelector("#submitButton").className="submit-button display-order-3 subtraction",document.querySelector("#questionArea").innerHTML=yr;const t=ps();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=fs(),r=n[1]|0,s=n[0]|0;Kt(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Ft(s-r,s,r,w([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Ft(s-r,s,r,w([s,r]))},document.getElementById("helpButton").onclick=o=>{L(i=>{document.getElementById(i).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{he(o)}}const gs=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `,_l='4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？';function Al(e,t,n){return Ue(t)?`<span class="warning">${e} の補数を、2進法表記で入力してください。</span>`:ke("^[01]+$",t)?'<span class="warning">不明なエラーです。</span>':`<span class="warning">'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`}function hs(e,t){return`
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
            </details>`}function Vt(e,t,n){let r;const s=document.getElementById("numberInput"),o=Fe(s.value);s.focus();const i=mt(o);if(i.tag===0){const l=i.fields[0];document.getElementById("errorArea").innerHTML="";const a=Qe(new He(0,[l])),u=H(a,new T(0,[t]))?"history history-correct":"history history-wrong",c=Ce(4,l),d=document.getElementById("outputArea"),f=We("<br>",w([m(v('<span class ="%s">%s<sub>(%d)</sub></span>'))(u)(c)(2),d.innerHTML]));if(d.innerHTML=f,H(a,new T(0,[t]))){const p=J(()=>se(1,15),E=>U(E,n,{Equals:(A,S)=>A===S,GetHashCode:W})===!1)|0,g=16-p|0,h=Z(4,"0",(r=oe(new T(0,[p])),r.tag===1?"":r.fields[0]));document.getElementById("questionSpan").innerText=h;const b=Array.from(kr(E=>E==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=hs(h,b),s.value="";const I=Ln(0,Pe(8,ne(n)+1)-1,Me(p,n));document.getElementById("submitButton").onclick=E=>{E.preventDefault(),Vt(h,g,I)},document.getElementById("inputArea").onsubmit=E=>{E.preventDefault(),Vt(h,g,I)}}}else document.getElementById("errorArea").innerHTML=Al(e,o,i.fields[0])}function Ll(){let e;document.title="補数 - taidalab";const t=document.querySelector("header");t.innerHTML=ae,t.className="complement",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>補数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(gs,"help-color complement"),document.querySelector("#submitButton").className="submit-button display-order-3 complement",document.querySelector("#questionArea").innerHTML=_l;const n=se(1,15)|0,r=16-n|0,s=Z(4,"0",(e=oe(new T(0,[n])),e.tag===1?"":e.fields[0])),o=Array.from(kr(i=>i==="1"?"0":"1",s.split(""))).join("");document.getElementById("questionSpan").innerText=s,document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=hs(s,o),document.getElementById("submitButton").onclick=i=>{i.preventDefault(),Vt(s,r,F(n))},document.getElementById("inputArea").onsubmit=i=>{i.preventDefault(),Vt(s,r,F(n))},document.getElementById("helpButton").onclick=i=>{L(l=>{document.getElementById(l).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=i=>{L(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=i=>{L(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=i=>{he(i)}}const bs=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Sl(e,t,n,r){return Cr(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+we(t-1),n,r)}function ys(e,t,n){const r=Me(Vr(e,t),Gr(e,qn(t,e)));let s;const o=y(i=>{const l=ee(i[0],""),a=ee(i[1],""),u=ee(i[2],""),c=ee(i[3],"");return m(v("%s%s%s%s"))(l)(a)(u)(c)},vt((i,l)=>[Be(a=>{let u,c;return st(0,n*(i+1),0,(u=Ae((c=we(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(a)(u)))},l[0]),Be(a=>{let u,c,d,f,p,g,h;return Sn((u=~~(n/2)*2+4|0,c=n*i+6|0,d=~~(n/2)|0,f=n*.4,p=n*.8,g=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(d)(f)(p)(g)),"#000000",1,"none",0,Ae((h=we(i)|0,i===0?h+500:h+1500),500))},l[1]),Be(a=>{let u,c;return st(~~(n/2)*3,n*(i+1),0,(u=Ie(Z(3," ",C(a))),c=Ae(we(i),500),m(v("%s%s"))(u)(c)))},l[2]),Be(a=>{let u;return st(~~(n/2)*7,n*(i+1),0,(u=Ae(500+we(i),500),m(v("…%d%s"))(a)(u)))},l[3])],r));return s=de((i,l)=>m(v("%s%s"))(i)(l),Sl(n,ne(r),"#1e3330","#95feec"),o),Mr(~~(n/2)*11,n*(ne(r)+1),s)}function $l(e,t,n){const r=ys(e,t,n);return m(v(`\r
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
                `))(r)}function Ml(e,t,n){const r=$l(e,t,n);return m(v(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function ws(e){return Ml(16,e,20)}function Is(e){return J(()=>se(0,255),t=>U(t,e,{Equals:(n,r)=>n===r,GetHashCode:W})===!1)}function Cl(e,t){const n=Pn(xn(t));return n.tag===0?et(e,Ve(Ce(8,t)),16,Ie(Z(3," ",C(n.fields[0]))),10):""}function Es(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=ys(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function un(e,t,n,r,s,o,i,l,a,u,c){const d=document.getElementById("numberInput"),f=Fe(d.value),p=xn(f);if(d.focus(),p.tag===0){const g=p.fields[0];document.getElementById("errorArea").innerHTML="",r(g),Ie(Z(3," ",g));const h=document.getElementById("outputArea"),b=We("<br>",w([Cl(H(p,c),g),h.innerHTML]));if(h.innerHTML=b,H(p,c)){const I=e(a)|0;document.getElementById("questionSpan").innerText=C(I),document.getElementById("hintArea").innerHTML=t(I),s(I);const E=new T(0,[I]),A=yt(E);d.value="";const S=Bt(l,Me(I,a));document.getElementById("submitButton").onclick=M=>{M.preventDefault(),un(e,t,n,r,s,o,i,l,S,E,A)},document.getElementById("inputArea").onsubmit=M=>{M.preventDefault(),un(e,t,n,r,s,o,i,I,S,E,A)}}}else{const g=u.tag===0?C(u.fields[0]):"";document.getElementById("errorArea").innerHTML=n(g,f,p.fields[0])}}function Jn(e,t,n){un(Is,ws,Yi,r=>Ve(Ce(8,r)),r=>{Es(r)},10,16,10,e,t,n)}function Tl(e,t,n,r,s,o){const i=e(Je())|0;document.getElementById("questionSpan").innerText=C(i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=C(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(i);const l=new T(0,[i]),a=yt(l);document.getElementById("submitButton").onclick=u=>{u.preventDefault(),Jn(F(i),l,a)},document.getElementById("inputArea").onsubmit=u=>{u.preventDefault(),Jn(F(i),l,a)},n(i),document.getElementById("helpButton").onclick=u=>{L(c=>{document.getElementById(c).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=u=>{L(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=u=>{L(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=u=>{o(u)}}function xl(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(bs,"help-color dec2hex"),document.querySelector("#submitButton").className="submit-button display-order-3 dec2hex",document.querySelector("#questionArea").innerHTML=$e,Tl(Is,ws,t=>{Es(t)},10,16,t=>{he(t)})}const vs=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Bs(e){return R(" + ",Rt(Ci((t,n)=>{let r;return m(B("(%d%P() * 16<sup>%d%P()</sup>)",[(r=Pn(xn(n)),r.tag===1?-1:r.fields[0]),t]))},pe(t=>t,Rt(e)))))}function Pl(e){return vt((t,n)=>[m(B('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],Ze(e.split("")))}function ql(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function _s(e){const t=de((n,r)=>zr((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Pl(e));return ql(t[0],t[1],t[2])}function As(e,t,n){let r,s;return m(B(`<details>\r
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
            </details>`,[n,(r=e,r.tag===1?"-1":r.fields[0]),t,(s=Pn(e),s.tag===1?-1:s.fields[0])]))}function Gt(e,t,n){const r=document.getElementById("numberInput"),s=Fe(r.value);r.focus();const o=Or(s);if(o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const l=Ie(Z(3," ",C(i))),a=yt(new T(0,[i]));if(a.tag===0){const u=Ve(Ce(2,a.fields[0])),c=document.getElementById("outputArea"),d=We("<br>",w([et(i===e,l,10,u,16),c.innerHTML]));if(c.innerHTML=d,i===e){const f=J(()=>se(0,255),g=>U(g,n,{Equals:(h,b)=>h===b,GetHashCode:W})===!1)|0,p=yt(new T(0,[f]));if(p.tag===0){const g=p.fields[0];document.getElementById("questionSpan").innerText=g;const h=As(p,Bs(g.split("")),_s(g));document.getElementById("hintArea").innerHTML=h,r.value="";const b=Ln(0,Pe(10,ne(n)+1)-1,Me(f,n));document.getElementById("submitButton").onclick=I=>{I.preventDefault(),Gt(f,g,b)},document.getElementById("inputArea").onsubmit=I=>{I.preventDefault(),Gt(f,g,b)}}}}}else document.getElementById("errorArea").innerHTML=Wr(t,s,o.fields[0])}function Nl(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=r=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=r=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ge(vs,"help-color hex2dec"),document.querySelector("#submitButton").className="submit-button display-order-3 hex2dec",document.querySelector("#questionArea").innerHTML=$e;const t=se(0,255)|0,n=yt(new T(0,[t]));if(n.tag===0){const r=n.fields[0],s=As(n,Bs(r.split("")),_s(r));document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=m(v("(%d)"))(16),document.getElementById("dstRadix").innerText=C(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=s,document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Gt(t,r,F(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Gt(t,r,F(t))},document.getElementById("helpButton").onclick=o=>{L(i=>{document.getElementById(i).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{L(i=>{document.getElementById(i).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{he(o)}}}function kl(e,t){return ne(q(e,t))}function Hl(e,t){let n;const r=Bt(e,t);return kl((n=xt(e,t),s=>H(n,s)),r)|0}function Rl(e,t){return q(n=>U(n,t,{Equals:H,GetHashCode:Ke}),e)}function Dl(e,t,n,r){const s=je(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const l=je(i,t)|0;return o&&l<=0||!o&&l>=0?[i,r(i,e)]:void 0}}function Ol(e,t,n,r,s){const o=Dl(t,n,r,s);return _t(()=>qr(o,e))}function Nn(e,t,n){return Ol(e,t,n,0,(r,s)=>r+s)}const Ls=`\r
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
    `,Wl=`
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
            ${Ls}
        </div>
        `;function Zn(e,t){return t%e}function Fl(e,t){return~~(t/e)}function Vl(e,t,n){const r=t-e|0;return Fl(r*3,n)%2===0?Pe(e+Zn(r*3,n),t)|0:nn(t-Zn(r*3,n),e)|0}function Qt(e,t,n,r,s,o){return Vl(t,n,(n-t)*e+r*o+s)}function Gl(e,t,n,r,s){const o=w([e,t,n]),i=Lr(o,{Compare:gt})|0,l=Jo(o,{Compare:gt})|0,a=xt(1,Xn(o,{Compare:gt}))-i|0;let u,c;const d=[0,1,2];return c=Wt(f=>{let p;return Uo((p=xt(f,o)|0,g=>p===g),Xn(o,{Compare:gt}))+Hl(f,o)},d[0],d[1],d[2]),u=Wt(f=>xt(f,w([p=>Qt(4,i,l,r,a,p),p=>Qt(0,i,l,r,a,p),p=>Qt(2,i,l,r,a,p)])),c[0],c[1],c[2]),y(f=>[u[0](f),u[1](f),u[2](f)],Ze(Nn(0,1,s)))}function Qn(e,t,n){let r;const s=[e,t,n];return r=Wt(o=>Z(2,"0",C(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Xl(e,t){return y(n=>1+e*n,Ze(Nn(1,1,~~((255/t-1)/e))))}function Yl(e){return vn(kt(y(t=>1-e*t,Ze(Nn(1,1,~~(1/e))))))}function jl(e,t,n){return m(B(`\r
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
        `,[e,t,n,e,t,n,Qn(e,t,n),e,t,n,Qn(e,t,n)]))}function Ul(e){const t=R(`
`,e);return m(v('<div class="color-row">%s</div>'))(t)}function Ss(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,l=document.getElementById("limitInput").value,a=q(u=>u[2][0]===!1,qe(y(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},y(u=>{let c;return[u[0],u[1],(c=0,[Ht(u[2],511,!0,8,new ot(()=>c,d=>{c=d})),c])]},w([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),y(u=>{let c;return[u[0],u[1],(c=0,[Ht(u[2],511,!1,32,new ot(()=>c,d=>{c=d|0})),c])]},w([["変化量","stepInput",i],["回数","limitInput",l]]))));if(En(a)){const u=z(r,511,!1,32)|0,c=z(s,511,!1,32)|0,d=z(o,511,!1,32)|0,f=Gl(u,c,d,z(i,511,!1,32),z(l,511,!1,32)),p=nn(nn(u,c),d)|0,g=Yl(.1),h=ne(g)|0,b=R(`
`,y(Ul,y(M=>y(D=>jl(D[0],D[1],D[2]),M),y((e=qe(g,Me(1,Xl(.1,p))),M=>y(D=>Wt(Q=>~~(D*Q),M[0],M[1],M[2]),e)),f)))),I=document.getElementById("outputArea");I.innerHTML=b;const E=I.getBoundingClientRect().width;let A;A=Er((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,I.scrollLeft=A*h-(E-A)/2}else{const u=An((c,d)=>`${c}<br>${d}`,y(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,a));n.innerHTML=u,document.getElementById(De(a)[1]).focus()}}function Ge(e,t,n,r,s){bt(o=>o!=="",w([e,t,n,r,s]))&&Ss()}function Kl(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=In("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(l,a)=>l===a,GetHashCode:at});switch(e.key){case"\\":{const l=y(a=>document.getElementById(a),w(["rInput","gInput","bInput","stepInput","limitInput"]));o||(ee(Bn(u=>u.value==="",l),De(l)).focus(),e.preventDefault());break}case"?":{L(l=>{document.getElementById(l).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&L(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const l=document.getElementById("rInput"),a=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let f,p=0;if(f=[Ht(d.value,511,!1,32,new ot(()=>p,g=>{p=g|0})),p],f[0]){const g=f[1]|0;g<2147483647&&(d.value=C(g+1),Ge(l.value,a.value,u.value,c.value,d.value))}}break}case"-":{if(!o){const l=document.getElementById("rInput"),a=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let f,p=0;if(f=[Ht(d.value,511,!1,32,new ot(()=>p,g=>{p=g|0})),p],f[0]){const g=f[1]|0;g>0&&(d.value=C(g-1),Ge(l.value,a.value,u.value,c.value,d.value))}}break}}break}}}function Jl(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>色いろいろ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Wl,document.querySelector("#submitButton").className="submit-button iro-iroiro",document.getElementById("submitButton").onclick=i=>{Ss()},L(i=>{document.getElementById(i).onclick=l=>{L(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]))}},w(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{Ge(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{Ge(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{Ge(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{Ge(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{Ge(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{Kl(i)}}class Zl extends Re{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return m(v("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function $s(e,t,n,r){return new Zl(e,t,n,r)}function wt(e){const t=wn(n=>z(n,511,!0,8),e.split("."),Uint8Array);return $s(_e(0,t),_e(1,t),_e(2,t),_e(3,t))}function cn(e){return Fi(wt,ue(t=>bt(n=>n>=0?n<=255:!1,y(n=>z(n,511,!1,32),le(".",t)))?new N(0,[t]):new N(1,[new Error("str",`${t} is out of range. Each value must be within 0 and 255`)]),ue(t=>Tn("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),ue(Gi,ue(Cn,new N(0,[e]))))))}function Ms(e,t){return $s(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class G extends Re{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return m(v("X = %f; Y = %f"))(t.X)(t.Y)}}function tt(e,t){return new G(e,t)}function Xe(e){const t=wn(Se,e.split(","),Float64Array);return tt(Er(t),Po(t))}function Ql(e){return m(v("%f,%f"))(e.X)(e.Y)}function kn(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function me(e,t,n){return new G(n.X+e,n.Y+t)}function zn(e,t){return(e.Y>t.Y?1:0)|(e.Y<t.Y?2:0)|(e.X>t.X?4:0)|(e.X<t.X?8:0)}class X extends Re{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return m(v("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function At(e,t,n,r){return new X(e,t,n,r)}function zl(e,t){let n,r;return At(Pe(e.X,t.X),Pe(e.Y,t.Y),(n=e.X-t.X,Math.abs(n)),(r=e.Y-t.Y,Math.abs(r)))}function ea(e,t,n){return new X(n.X,n.Y,n.Width+e,n.Height+t)}function ta(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class fe extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function na(e){switch(e){case"Client":return new fe(0,[]);case"Server":return new fe(1,[]);case"Router":return new fe(2,[]);case"Hub":return new fe(3,[]);case"ProxyServer":return new fe(4,[]);case"LANCable":return new fe(5,[]);default:return}}class ra extends Re{constructor(t,n,r,s,o,i,l){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=l}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function nt(e,t,n,r,s,o){const i=wt(n),l=wt(r);return new ra(e,t,i,l,Ms(l,i),s,o)}function sa(e){let t,n,r,s;const o=e.id;return nt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),At(n.left,n.top,n.width,n.height)),tt(Se((r=Ne("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Se((s=Ne("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Cs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","100");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z"),o.setAttribute("fill","none"),o.setAttribute("stroke","#000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,60 l -15,30 l 90,0 l -15,-30"),i.setAttribute("fill","none"),i.setAttribute("stroke","#000"),i.setAttribute("stroke-width","5");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 25,63 l  -9,20 l 68,0 l  -9,-20  z"),l.setAttribute("fill","#000"),l.setAttribute("stroke","#000"),l.setAttribute("stroke-width","1");const a=document.createElementNS("http://www.w3.org/2000/svg","text");a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000"),a.setAttribute("stroke-width","0"),a.setAttribute("x","23.40522"),a.setAttribute("y","19.58995"),a.setAttribute("font-size","6"),a.setAttribute("font-family","Noto Sans JP"),a.setAttribute("text-anchor","start"),a.setAttribute("xml:space","preserve"),a.textContent="PS C:\\>_";const u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("fill","none"),u.setAttribute("stroke","#fff"),u.setAttribute("x1","20.85"),u.setAttribute("y1","70"),u.setAttribute("x2","79.15"),u.setAttribute("y2","70");const c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("x1","17.7"),c.setAttribute("y1","77"),c.setAttribute("x2","82.3"),c.setAttribute("y2","77");const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("x1","34.7"),d.setAttribute("y1","61.5"),d.setAttribute("x2","29.3"),d.setAttribute("y2","84.5");const f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("fill","none"),f.setAttribute("stroke","#fff"),f.setAttribute("x1","44.9"),f.setAttribute("y1","61.5"),f.setAttribute("x2","43.1"),f.setAttribute("y2","84.5");const p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("x1","55.1"),p.setAttribute("y1","61.5"),p.setAttribute("x2","56.9"),p.setAttribute("y2","84.5");const g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("fill","none"),g.setAttribute("stroke","#fff"),g.setAttribute("x1","65.3"),g.setAttribute("y1","61.5"),g.setAttribute("x2","70.7"),g.setAttribute("y2","84.5"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),r.appendChild(c),r.appendChild(d),r.appendChild(f),r.appendChild(p),r.appendChild(g),n.appendChild(r);const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}Name`,b.className="device-prop",b.contentEditable="true",b.textContent=`${e.Name}`;const I=document.createElement("br"),E=document.createElement("span");E.id=`${e.Id}IPv4`,E.className="device-prop ipv4 mono",E.contentEditable="true",E.textContent=`${x(e.IPv4)}`;const A=document.createElement("br"),S=document.createElement("span");S.id=`${e.Id}SubnetMask`,S.className="device-prop subnetmask mono",S.contentEditable="true",S.textContent=`${x(e.SubnetMask)}`;const M=document.createElement("span");return M.id=`${e.Id}Kind`,M.className="no-display",M.textContent="Client",t.appendChild(n),t.appendChild(h),t.appendChild(b),t.appendChild(I),t.appendChild(E),t.appendChild(A),t.appendChild(S),t.appendChild(M),t}class oa extends Re{constructor(t,n,r,s,o,i,l){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=l}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Pt(e,t,n,r,s,o){const i=y(wt,y(a=>a.trim(),le(";",n))),l=y(wt,y(a=>a.trim(),le(";",r)));return new oa(e,t,i,l,Yo(Ms,l,i),s,o)}function ia(e){let t,n,r,s;const o=e.id;return Pt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),At(n.left,n.top,n.width,n.height)),tt(Se((r=Ne("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Se((s=Ne("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Ts(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#000000"),o.setAttribute("stroke","#000000");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#ffffff"),i.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#ffffff"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#ffffff"),a.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#ffffff"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const f=document.createElement("br"),p=document.createElement("span");p.id=`${e.Id}IPv4`,p.className="device-prop ipv4 mono",p.contentEditable="true";const g=R("; ",y(x,e.IPv4));p.textContent=g;const h=document.createElement("br"),b=document.createElement("span");b.id=`${e.Id}SubnetMask`,b.className="device-prop subnetmask mono",b.contentEditable="true";const I=R("; ",y(x,e.SubnetMask));b.textContent=I;const E=document.createElement("span");return E.id=`${e.Id}Kind`,E.className="no-display",E.textContent="Router",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(f),t.appendChild(p),t.appendChild(h),t.appendChild(b),t.appendChild(E),t}class la extends Re{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return m(v("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function dn(e,t,n,r){return new la(e,t,n,r)}function aa(e){let t,n,r,s;const o=e.id;return dn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),At(n.left,n.top,n.width,n.height)),tt(Se((r=Ne("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Se((s=Ne("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function xs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#ffffff"),o.setAttribute("stroke","#000000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#000000"),i.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#000000"),u.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(a),r.appendChild(u),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const f=document.createElement("span");return f.id=`${e.Id}Kind`,f.className="no-display",f.textContent="Hub",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(f),t}class ye extends ut{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function St(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new ye(0,[sa(e)]);case"Router":return new ye(1,[ia(e)]);case"Hub":return new ye(2,[aa(e)]);default:return}}function ua(e){switch(e.tag){case 1:return Ts(e.fields[0]);case 2:return xs(e.fields[0]);default:return Cs(e.fields[0])}}function zt(e){return e.tag===0}function qt(e){return e.tag===1}function mn(e){return e.tag===2}function er(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function Ps(e,t){switch(t.tag){case 0:return H(t.fields[0].IPv4,e);case 1:return U(e,t.fields[0].IPv4,{Equals:H,GetHashCode:ur});default:return!1}}function tr(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return Je();default:return F(e.fields[0].NetworkAddress)}}function ca(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function fn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}class da extends Re{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=x(t.Kind),r=R(" ",y(x,t.Points));return m(v("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function rt(e,t,n,r,s,o){return new da(e,t,n,r,s,o)}function pn(e){let t,n,r;const s=e.id,o=document.getElementById(s+"Name").innerText,i=na(document.getElementById(s+"Kind").innerText);let l;const u=document.getElementById(s+"Svg").getBoundingClientRect();l=At(u.left,u.top,u.width,u.height);const c=y(Xe,le(" ",(t=document.getElementById(s+"Polyline"),t.getAttribute("points")))),d=tt(Se((n=Ne("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),n[1]||"")),Se((r=Ne("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")));if(i!=null)return rt(s,i,o,c,l,d)}function nr(e){const t=document.createElement("div");t.id=e.Id,t.className="device cable-container lan-cable",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device"),n.classList.add("device"),n.setAttribute("viewBox",m(B("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",m(B("%f%P()px",[e.Area.Width]))),n.setAttribute("height",m(B("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${R(" ",y(Ql,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="no-display",l.textContent=`${e.Name}`;const a=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent=`${x(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(l),t.appendChild(a),t.appendChild(u),t}function gn(e,t){let n;const r=y(s=>me(t.Area.X,t.Area.Y,s),t.Points);return rn((n=ca(e),s=>ta(n,s)),r)}function ma(e,t,n){const r=jt(n),s=_r(q(o=>!mn(o),n));return Xo(o=>q(i=>mn(i)||qt(r)?!0:s!=null?!H(Rl(tr(s),tr(i)),Je()):!1,q(i=>gn(i,o),q(i=>U(i,n,{Equals:H,GetHashCode:ur})===!1,t))),q(o=>gn(r,o),e))}function fa(e,t,n){return y(r=>qe(n,F(r)),ma(e,t,n))}function pa(e,t,n,r,s){const o=(i,l,a,u,c)=>{const d=fa(i,l,c);return rn(f=>Ps(u,f),y(jt,d))?!0:a===0?!1:rn(Qs(o)(i)(l)(a-1)(u),d)};return o(e,t,n,r,F(s))}const qs=`\r
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
    `,ga=`
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
            ${qs}
        </div>
        `;function Ns(e,t,n){const r=n,s=r.pageY-t.getBoundingClientRect().height/2,o=r.pageX-t.getBoundingClientRect().width/2,i=m(v("top: %fpx; left: %fpx;"))(s)(o);e.setAttribute("style",i)}function $t(e){const t=document.getElementById(e.id+"Svg");t.ondragstart=r=>{r.preventDefault()};const n=r=>{Ns(e,t,r)};t.onmousedown=r=>{document.addEventListener("mousemove",n),t.onmouseup=s=>{document.removeEventListener("mousemove",n)}}}function Mt(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Ct(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function en(e){L(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=r.innerText,i=cn(o),l=document.getElementById("errorArea");if(l.innerText="",i.tag===1){const a=document.getElementById(e.id+"Name").innerText,u=ht(o)?`${a} の ${n} を入力してください。`:Ue(o)?`${a} の ${n} を入力してください。`:ke("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",o)?bt(c=>c>=0?c<=255:!1,y(c=>z(c,511,!1,32),le(".",o)))?"不明なエラーです。":`${a} の ${n} の数値の範囲が正しくありません。`:`${a} の ${n} の形式が正しくありません。`;l.innerText=u,setTimeout(()=>{r.focus()},0)}})},y(t=>[t,document.getElementById(e.id+t)],w(["IPv4","SubnetMask"])))}function Tt(e,t,n){let r;const s=[e,t];return r=Ye(o=>kn(n,o),s[0],s[1]),r[0]<=r[1]?[e,me(n.X-e.X,n.Y-e.Y,t)]:[e,n]}function ha(e,t,n){let r;const s=[e,t];return r=Ye(o=>kn(n,o),s[0],s[1]),r[0]<=r[1]?[e,t]:[t,e]}function ba(e,t,n,r){let s,o,i,l,a,u;const c=r;let d;const f=y(Xe,le(" ",n.getAttribute("points")));d=[De(f),jt(f)];const p=tt(c.pageX-e.offsetLeft,c.pageY-e.offsetTop),g=ha(d[0],d[1],p),h=g[1],b=g[0],I=p.X-b.X,E=p.Y-b.Y,A=zn(h,b)|0,S=A===1?[b,me(-I,-E,h)]:A===2?Tt(h,b,p):A===4?[b,me(-I,-E,h)]:A===8?Tt(h,b,p):A===5?[b,me(-I,-E,h)]:A===9?[me(0,-E,h),me(I,0,b)]:A===6?[me(0,E,b),me(-I,0,h)]:Tt(h,b,p),M=5-(s=(o=S,Ye(Ee=>Ee.X,o[0],o[1])),Pe(s[0],s[1])),D=5-(i=(l=S,Ye(Ee=>Ee.Y,l[0],l[1])),Pe(i[0],i[1]));let Q,O;const V=S;O=Ye(Ee=>me(M,D,Ee),V[0],V[1]);const be=O[0],ie=O[1];Q=m(B("%f%P(),%f%P() %f%P(),%f%P()",[be.X,be.Y,ie.X,ie.Y])),n.setAttribute("points",Q);const K=ea(5*2,5*2,(a=(u=S,Ye(Ee=>me(M,D,Ee),u[0],u[1])),zl(a[0],a[1])));switch(t.setAttribute("viewBox",m(B("0 0 %f%P() %f%P()",[K.Width,K.Height]))),t.setAttribute("width",m(B("%f%P()px",[K.Width]))),t.setAttribute("height",m(B("%f%P()px",[K.Height]))),A){case 1:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}case 4:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}default:A===5?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I]))):A===9?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft]))):A===6&&e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop,e.offsetLeft+I])))}const Lt=zn(S[0],S[1])|0;switch(Lt){case 1:{t.setAttribute("width",m(B("%f%P()px",[K.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[K.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}case 4:{t.setAttribute("width",m(B("%f%P()px",[K.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[K.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I])));break}default:Lt===5&&(t.setAttribute("width",m(B("%f%P()px",[K.Width+-I]))),t.setAttribute("height",m(B("%f%P()px",[K.Height+-E]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+E,e.offsetLeft+I]))))}}function rr(e){if(pn(e)!=null){const n=document.getElementById(e.id+"Svg");n.ondragstart=r=>{r.preventDefault()},n.onmousedown=r=>{let s;const o=pn(document.getElementById(e.id));if(o!=null){const a=o.Points;s=[De(a),jt(a)]}else s=[void 0,void 0];const i=tt(r.offsetX,r.offsetY);let l;if(Lr(y(a=>kn(i,a),y($,q(a=>a!=null,w([s[0],s[1]])))),{Compare:gt})<5){const a=document.getElementById(e.id+"Polyline");l=u=>{ba(e,n,a,u)}}else l=a=>{Ns(e,n,a)};document.addEventListener("mousemove",l),n.onmouseup=a=>{document.removeEventListener("mousemove",l)}}}}function sr(e){e.oncontextmenu=t=>{t.preventDefault(),document.getElementById("playArea").removeChild(e)}}function ya(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],l=i[0];return`
        <div class="history-container ${l}"">
            ${i[1]}<span class ="${l}">${fn(e)} [${s=t,x(s)}] -> ${o=n,x(o)} ${i[2]}</span>
        </div>
        `}function wa(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=In("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(l,a)=>l===a,GetHashCode:at});switch(e.key){case"\\":{const l=y(a=>document.getElementById(a),w(["sourceInput","destinationInput"]));o||(ee(Bn(u=>u.value==="",l),De(l)).focus(),e.preventDefault());break}case"?":{L(l=>{document.getElementById(l).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&L(l=>{document.getElementById(l).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}break}}}function Ia(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=ae,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=c=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=c=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=ga,document.querySelector("#submitButton").className="submit-button network-simulator",document.getElementById("helpButton").onclick=c=>{L(d=>{document.getElementById(d).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{L(d=>{document.getElementById(d).classList.remove("active")},w(["helpWindow","helpBarrier"]))};const n=document.getElementById("playArea").getBoundingClientRect(),r=w([new ye(0,[nt("device1","クライアント(1)","10.0.0.1","255.255.255.0",new X(0,0,100,100),new G(0+n.left,100+n.top))]),new ye(0,[nt("device2","クライアント(2)","10.0.0.2","255.255.255.0",new X(0,0,100,100),new G(150+n.left,100+n.top))]),new ye(1,[Pt("device3","ルータ(1)","10.0.0.254","255.255.255.0",new X(0,0,100,35),new G(300+n.left,100+n.top))]),new ye(0,[nt("device4","クライアント(3)","10.0.1.18","255.255.255.240",new X(0,0,100,100),new G(450+n.left,100+n.top))]),new ye(0,[nt("device5","クライアント(4)","10.0.1.19","255.255.255.240",new X(0,0,100,100),new G(600+n.left,100+n.top))]),new ye(1,[Pt("device6","ルータ(2)","10.0.1.30","255.255.255.240",new X(0,0,100,35),new G(750+n.left,100+n.top))]),new ye(2,[dn("device7","ハブ(1)",new X(0,0,100,35),new G(900+n.left,100+n.top))])]);y(c=>document.getElementById("playArea").appendChild(c),y(ua,r));const s=w([rt("lancable1",new fe(5,[]),"LANケーブル(1)",y(Xe,le(" ","5,5 195,45")),new X(0,0,200,50),new G(100+n.left,30+n.top)),rt("lancable2",new fe(5,[]),"LANケーブル(2)",y(Xe,le(" ","5,5 195,45")),new X(0,0,200,50),new G(300+n.left,30+n.top)),rt("lancable3",new fe(5,[]),"LANケーブル(3)",y(Xe,le(" ","5,5 195,45")),new X(0,0,200,50),new G(500+n.left,30+n.top)),rt("lancable4",new fe(5,[]),"LANケーブル(4)",y(Xe,le(" ","5,5 195,45")),new X(0,0,200,50),new G(700+n.left,30+n.top))]);y(c=>document.getElementById("playArea").appendChild(c),y(nr,s)),L(c=>{$t(c),Mt(c),Ct(c)},y(c=>document.getElementById(c),y(er,r))),L(c=>{en(c)},y(c=>document.getElementById(c),y(er,q(c=>zt(c)?!0:qt(c),r)))),L(c=>{rr(c),sr(c)},y(c=>document.getElementById(c),y(c=>c.Id,s)));const o=document.getElementById("submitButton");o.onclick=c=>{let d,f,p,g,h;c.preventDefault();const b=y($,q(O=>O!=null,y(St,w((d=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(d)))))),I=y($,q(O=>O!=null,y(pn,w((f=document.getElementById("playArea").getElementsByClassName("cable-container"),Array.from(f)))))),E=document.getElementById("errorArea"),A=document.getElementById("outputArea");E.innerText="",A.innerText="";const S=document.getElementById("sourceInput"),M=document.getElementById("destinationInput"),D=cn(S.value),Q=cn(M.value);if(D.tag===0){const O=D.fields[0];if(Q.tag===0){const V=Q.fields[0],be=Bn(ie=>Ps(O,ie),q(ie=>zt(ie)?!0:qt(ie),b));if(be!=null){const ie=be;if(En(q(K=>gn(ie,K),I)))E.innerText=(p=fn(ie),g=x(O),m(v("%s [%s] はLANケーブルに繋がっていません。"))(p)(g));else{let K;const Lt=fn(ie),Ee=x(O),ks=x(V);K=m(v('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(Lt)(Ee)(ks),A.innerHTML=K;const Hs=ya(ie,O,V,pa(I,b,128,V,ie));switch(A.innerHTML=Hs,document.activeElement.id){case"sourceInput":{S.focus();break}case"destinationInput":{M.focus();break}}}}else E.innerText=(h=x(O),m(v("IPv4 %s を持つデバイスが見つかりません。"))(h)),S.focus()}else{const V=ht(M.value)||Ue(M.value)?"送信先 IPv4 を入力してください。":ke("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",M.value)?bt(be=>be>=0?be<=255:!1,y(be=>z(be,511,!1,32),le(".",M.value)))?"不明なエラーです。":"送信先 IPv4 の数値の範囲が正しくありません。":"送信先 IPv4 の形式が正しくありません。";E.innerText=V,M.focus()}}else{const O=ht(S.value)||Ue(S.value)?"送信元 IPv4 を入力してください。":ke("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",S.value)?bt(V=>V>=0?V<=255:!1,y(V=>z(V,511,!1,32),le(".",S.value)))?"不明なエラーです。":"送信元 IPv4 の数値の範囲が正しくありません。":"送信元 IPv4 の形式が正しくありません。";E.innerText=O,S.focus()}};const i=document.getElementById("addClientButton");i.onclick=c=>{let d,f;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=ne(q(zt,y($,q(E=>E!=null,y(St,w((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,I=m(B("client%d%P()",[b]));f=Cs(nt(I,m(B("クライアント(%d%P())",[b])),"10.0.0.1","255.255.255.0",new X(0,0,100,100),new G(0+g.left,0+g.top))),p.insertBefore(f,h),$t(document.getElementById(I)),Mt(document.getElementById(I)),Ct(document.getElementById(I)),en(document.getElementById(I))};const l=document.getElementById("addRouterButton");l.onclick=c=>{let d,f,p;const g=document.getElementById("playArea"),h=g.getBoundingClientRect(),b=g.getElementsByClassName("cable-container").item(0),I=ne(q(qt,y($,q(A=>A!=null,y(St,w((d=g.getElementsByClassName("device-container"),Array.from(d))))))))|0,E=m(B("router%d%P()",[I+1]));f=Ts((p=I|0,Pt(E,m(B("ルータ(%d%P())",[p+1])),`10.0.${p}.254`,"255.255.255.0",new X(0,0,100,35),new G(0+h.left,0+h.top)))),g.insertBefore(f,b),$t(document.getElementById(E)),Mt(document.getElementById(E)),Ct(document.getElementById(E)),en(document.getElementById(E))};const a=document.getElementById("addHubButton");a.onclick=c=>{let d,f;const p=document.getElementById("playArea"),g=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=ne(q(mn,y($,q(E=>E!=null,y(St,w((d=p.getElementsByClassName("device-container"),Array.from(d))))))))+1|0,I=m(B("hub%d%P()",[b]));f=xs(dn(I,m(B("ハブ(%d%P())",[b])),new X(0,0,100,35),new G(0+g.left,0+g.top))),p.insertBefore(f,h),$t(document.getElementById(I)),Mt(document.getElementById(I)),Ct(document.getElementById(I))};const u=document.getElementById("addLANCableButton");u.onclick=c=>{let d;const f=document.getElementById("playArea"),p=f.getBoundingClientRect(),g=f.getElementsByClassName("cable-container").length+1|0,h=m(B("cable%d%P()",[g]));d=nr(rt(h,new fe(5,[]),m(B("LANケーブル(%d%P())",[g])),y(Xe,le(" ","5,5 195,45")),new X(0,0,200,50),new G(0+p.left,0+p.top))),f.appendChild(d);const b=document.getElementById(h);rr(b),sr(b)},document.onkeydown=c=>{wa(c)}}const Ea=`
        <h2>このサイトについて</h2>
        <p>
            <span translate="no">taidalab</span>（タイダラブ）は、<span translate="no">taidalog</span> が作成したプログラム置き場です。<br>
            10進数と2進数の変換の反復練習ツールなど、高校の「情報&#8544;」の学習ツールを中心に公開しています。<br>
            <span translate="no">F#</span> で書いたものを <span translate="no">Fable</span> で <span translate="no">JavaScript</span> にトランスパイルしています。<span translate="no">F#</span> 楽しい。
        </p>
        <h2>それぞれのページについて</h2>
        <dl id="explanation" class="explanation">
            <dt>
                <h3><a href="${_}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                ${Xr}
            </dd>
            
            <dt>
                <h3><a href="${_}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Jr}
            </dd>
            
            <dt>
                <h3><a href="${_}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${es}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${ss}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${os}
            </dd>
            
            <dt>
                <h3><a href="${_}endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${as}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${ds}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${ms}
            </dd>
            
            <dt>
                <h3><a href="${_}endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${gs}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${bs}
            </dd>

            <dt>
                <h3><a href="${_}endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${vs}
            </dd>
            
            <dt>
                <h3><a href="${_}iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${Ls}
            </dd>
            
            <dt>
                <h3><a href="${_}network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${qs}
            </dd>
        </dl>`;function va(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=It,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>about - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ea,document.onkeydown=t=>{}}const Ba=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function _a(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=It,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>ご利用について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Ba,document.onkeydown=t=>{}}const Aa=`\r
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
        </p>`;function La(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=It,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Aa,document.onkeydown=t=>{}}function or(e){const t=document.getElementById("numberInput"),n=Fe(t.value),r=mt(n);if(t.focus(),r.tag===0){document.getElementById("errorArea").innerHTML="";const s=Ve(Ce(9,r.fields[0])),o=Qe(r);if(o.tag===0){const i=o.fields[0]|0,l=Ie(Z(3," ",C(i))),a=document.getElementById("outputArea"),u=We("<br>",w([et(i===e,s,2,l,10),a.innerHTML]));a.innerHTML=u,i!==e||(window.history.replaceState(xe(),"","http://localhost:8080/taidalab/"),wr())}}else document.getElementById("errorArea").innerHTML=ze(C(e),n,r.fields[0])}function Sa(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=It,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',document.querySelector("main").innerHTML=Xi,document.querySelector("#submitButton").className="submit-button display-order-3 not-found",document.querySelector("#questionArea").innerHTML=$e,document.getElementById("questionSpan").innerText=C(404),document.getElementById("srcRadix").innerText=m(v("(%d)"))(10),document.getElementById("dstRadix").innerText=C(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),or(404)},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),or(404)}}function Hn(e){const t=e.pathname;t===_?wr():t===`${_}endless-binary/dec2bin-1/`?tl():t===`${_}endless-binary/dec2bin-2/`?rl():t===`${_}endless-binary/bin2dec-1/`?cl():t===`${_}endless-binary/bin2dec-2/`?fl():t===`${_}endless-binary/power-of-two-1/`?gl():t===`${_}endless-binary/power-of-two-2/`?bl():t===`${_}endless-binary/addition/`?vl():t===`${_}endless-binary/subtraction/`?Bl():t===`${_}endless-binary/complement/`?Ll():t===`${_}endless-binary/dec2hex/`?xl():t===`${_}endless-binary/hex2dec/`?Nl():t===`${_}iro-iroiro/`?Jl():t===`${_}network-simulator/`?Ia():t===`${_}about/`?va():t===`${_}terms/`?_a():t===`${_}information-policy/`?La():Sa()}function Rn(){let e;const t=document.querySelector("aside").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==_).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function Dn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState(xe(),"",e.href),Hn((n=e.href,new URL(n)));let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let l;return hn((l=i.href,new URL(l)))}),r.forEach(i=>{Dn(i)}),Rn()}}function $a(){document.body.innerHTML="",document.body.innerHTML=vo,document.querySelector("footer").innerHTML=Ao,document.querySelector("aside").innerHTML=Bo}window.addEventListener("DOMContentLoaded",e=>{let t;$a();const n=fr((t=window.location.href,new URL(t)));window.history.replaceState(xe(),"",n.href),Hn(n);let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let l;return hn((l=i.href,new URL(l)))}),r.forEach(i=>{Dn(i)}),Rn()});window.addEventListener("popstate",e=>{let t;const n=fr((t=window.location.href,new URL(t)));window.history.replaceState(xe(),"",n.href),Hn(n);let r,s,o;const i=document.querySelector("aside").querySelectorAll("a");o=Array.from(i),s=o.filter(l=>l.href!==""),r=s.filter(l=>{let a;return hn((a=l.href,new URL(a)))}),r.forEach(l=>{Dn(l)}),Rn()});
