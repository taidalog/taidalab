(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function _e(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function $s(e){return e!=null&&typeof e.GetEnumerator=="function"}function Ts(e){return e!=null&&typeof e.CompareTo=="function"}function qs(e){return e!=null&&typeof e.Equals=="function"}function er(e){return e!=null&&typeof e.GetHashCode=="function"}function Hs(e){return e!=null&&typeof e.Dispose=="function"}function le(e){Hs(e)&&e.Dispose()}function Se(){return null}function Ct(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class Ps{constructor(t){this.iter=t,this.current=Se()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Ie(e){return $s(e)?e.GetEnumerator():new Ps(e[Symbol.iterator]())}function tr(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function Pn(e,t){return e.toString(10).padStart(t,"0")}function Nn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function q(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class pe{static id(t){return pe.idMap.has(t)||pe.idMap.set(t,++pe.count),pe.idMap.get(t)}}pe.idMap=new WeakMap;pe.count=0;function Je(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function O(e){return e*2654435761|0}function nr(e){return Je(e.toString(32))}function xt(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Ns(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return nr(e);case"string":return Je(e);default:return O(pe.id(e))}}function ks(e){return er(e)?e.GetHashCode():Ns(e)}function xs(e){return e.getTime()}function Rs(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=$e(e[r]);return xt(n)}function $e(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return O(e);case"bigint":return nr(e);case"string":return Je(e);default:{if(er(e))return e.GetHashCode();if(_e(e))return Rs(e);if(e instanceof Date)return xs(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>$e(r));return xt(n)}else return O(pe.id(e))}}}function rr(e){return ks(e)}function Ds(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function sr(e,t){return Ds(e,t,D)}function Os(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!D(e[n[s]],t[r[s]]))return!1;return!0}function D(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:qs(e)?e.Equals(t):_e(e)?_e(t)&&sr(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&or(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&Os(e,t)}function or(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Nn(e),r=t.getTime()+Nn(t)),n===r?0:n<r?-1:1}function vt(e,t){return e===t?0:e<t?-1:1}function Ws(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function ir(e,t){return Ws(e,t,xe)}function Fs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=xe(e[i],t[i]),o!==0)return o}return 0}function xe(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:Ts(e)?e.CompareTo(t):_e(e)?_e(t)?ir(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?or(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?Fs(e,t):-1}const Vs=new WeakMap;function Gs(e){return Vs.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function js(e){let t=0,n="[";for(const r of e){if(t===0)n+=H(r);else if(t===100){n+="; ...";break}else n+="; "+H(r);t++}return n+"]"}function H(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return js(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+H(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function Xs(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=H(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>H(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class Qe{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Xs(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>$e(n));return t.splice(0,0,O(this.tag)),xt(t)}Equals(t){return this===t?!0:Ct(this,t)&&this.tag===t.tag?sr(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Ct(this,t)?this.tag===t.tag?ir(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Ys(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function Us(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+H(n)).join(`
  `)+" }"}function Ks(e){const t=Object.values(e).map(n=>$e(n));return xt(t)}function zs(e,t){if(e===t)return!0;if(Ct(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!D(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function Zs(e,t){if(e===t)return 0;if(Ct(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=xe(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class Te{toJSON(){return Ys(this)}toString(){return Us(this)}GetHashCode(){return Ks(this)}Equals(t){return zs(this,t)}CompareTo(t){return Zs(this,t)}}class Ue{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}const Js="https://taidalog.github.io",w="/taidalab/";function ar(e){const n=e.searchParams.get("pathname");if(n!=null){const r=n,s=e.searchParams;return s.delete("pathname"),H(s)===""?new URL(e.origin+r):new URL(e.origin+r+"?"+H(s))}else return e}function Qs(e,t){return t.origin===e?t.pathname.startsWith(w):!1}function pn(e){return Qs(Js,e)}const eo=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <nav></nav>\r
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
                <h1 id="headerTitle"></h1>\r
                <div>\r
                    <span id="helpButton" class="material-symbols-outlined help-button" translate="no">\r
                        help\r
                    </span>\r
                </div>\r
            </div>\r
            <div></div>\r
            `,mt=`\r
            <div class="header-left">\r
                <span id="hamburgerButton" class="material-symbols-outlined hamburger-button" translate="no">\r
                    menu\r
                </span>\r
            </div>\r
            <div class="header-center">\r
                <h1 id="headerTitle"></h1>\r
                <div></div>\r
            </div>\r
            <div></div>\r
            `,to=`
            <ul>
                <li><a class="dec2bin" href="${w}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>
                <li><a class="dec2bin" href="${w}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>
                <li><a class="bin2dec" href="${w}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>
                <li><a class="bin2dec" href="${w}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>
                <li><a class="power-of-two" href="${w}endless-binary/power-of-two-1/">2のn乗</a></li>
                <li><a class="power-of-two" href="${w}endless-binary/power-of-two-2/">2のn乗-1</a></li>
                <li><a class="addition" href="${w}endless-binary/addition/">加算</a></li>
                <li><a class="subtraction" href="${w}endless-binary/subtraction/">減算</a></li>
                <li><a class="complement" href="${w}endless-binary/complement/">補数</a></li>
                <li><a class="dec2hex" href="${w}endless-binary/dec2hex/">10進数→16進数</a></li>
                <li><a class="hex2dec" href="${w}endless-binary/hex2dec/">16進数→10進数</a></li>
            </ul>
            <ul>
                <li><a class="iro-iroiro" id="navIroIroiro" href="${w}iro-iroiro/">色いろいろ</a></li>
                <li><a class="network-simulator" id="navNetworkSimulator" href="${w}network-simulator/">ネットワークシミュレータ</a></li>
                <li><a class="ctc" id="navSoon" href="#">Coming soon...</a></li>
            </ul>
            <ul>
                <li><a class="home" id="navout" href="${w}">Home</a></li>
                <li><a class="home" id="navAbout" href="${w}about/">About</a></li>
                <li><a class="home" id="navTerms" href="${w}terms/">ご利用について</a></li>
                <li><a class="home" id="navTerms" href="${w}information-policy/">情報の外部送信について</a></li>
            </ul>
            `,Ee='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',no="Version 5.2.0",ro=`
            <div>
                <small translate="no">&copy; 2022-2025 <a href="https://taidalog.github.io/">taidalog</a></small>
                <small translate="no"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">${no}</a></small>
                <small><a class="home" href="https://odaibako.net/u/taidalog">お題箱</a></small>
                <small translate="no"><a class="home" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></small>
                <small>Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</small>
            </div>
            `,lr=`\r
            <div class="calculation-area" id="calculationArea">\r
                <div class="first-row" id="">\r
                    <div>\r
                        <span class="question-number" id="firstRowDigit8"></span>\r
                        <span class="question-number" id="firstRowDigit7"></span>\r
                        <span class="question-number" id="firstRowDigit6"></span>\r
                        <span class="question-number" id="firstRowDigit5"></span>\r
                        <span class="question-number" id="firstRowDigit4"></span>\r
                        <span class="question-number" id="firstRowDigit3"></span>\r
                        <span class="question-number" id="firstRowDigit2"></span>\r
                        <span class="question-number" id="firstRowDigit1"></span>\r
                    </div>\r
                    <div>\r
                        <span><sub id="firstRowSrcRadix"></sub></span>\r
                    </div>\r
                </div>\r
                <div class="second-row" id="secondRow">\r
                    <div>\r
                        <span class="question-number" id="operator"></span>\r
                        <span class="question-number" id="secondRowDigit8"></span>\r
                        <span class="question-number" id="secondRowDigit7"></span>\r
                        <span class="question-number" id="secondRowDigit6"></span>\r
                        <span class="question-number" id="secondRowDigit5"></span>\r
                        <span class="question-number" id="secondRowDigit4"></span>\r
                        <span class="question-number" id="secondRowDigit3"></span>\r
                        <span class="question-number" id="secondRowDigit2"></span>\r
                        <span class="question-number" id="secondRowDigit1"></span>\r
                    </div>\r
                    <div>\r
                        <span><sub id="secondRowSrcRadix"></sub></span>\r
                    </div>\r
                </div>\r
                <div class="under-line"></div>\r
            </div>`,so=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;function ur(){document.title="taidalab";const e=document.querySelector("header");e.innerHTML=mt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span translate="no">taidalab</span>',document.querySelector("main").innerHTML=so,document.onkeydown=t=>{}}const et=Symbol("numeric");function oo(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[et])}function io(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function ao(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[et]().multiply(t)}function lo(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[et]().toFixed(t)}function kn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[et]().toPrecision(t)}function xn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[et]().toExponential(t)}function Rn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[et]().toHex()}function uo(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+Pn(n,2)+":"+Pn(r,2)}function co(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+uo(e.offset??0)}function mo(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function fo(e,t,n){return e.offset!=null?co(e):mo(e)}function hn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function go(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function cr(e,t,n=0){return e.lastIndex=n,e.test(t)}function yn(e,t,n=0){return e.lastIndex=n,e.exec(t)}const ot=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,it=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function po(e,t){return io(e,t)<0}function v(e){return{input:e,cont:yo(e)}}function E(e,t){let n=0,r=0,s="";it.lastIndex=0;let o=it.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,a,l,u,c]=o;r=it.lastIndex,s+=dr(t[n++],a,l,u,c),it.lastIndex=r-1,o=it.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function ho(e,t){return typeof t=="string"?e(t):t.cont(e)}function m(e){return ho(t=>t,e)}function dr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",oo(e))switch(s.toLowerCase()!=="x"&&(po(e,0)?(e=ao(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=lo(e,r);break;case"g":case"G":e=r!=null?kn(e,r):kn(e);break;case"e":case"E":e=r!=null?xn(e,r):xn(e);break;case"x":e=Rn(e);break;case"X":e=Rn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=fo(e):e=H(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,a=t.indexOf("-")>=0,l=a||!i?" ":"0";l==="0"?(e=Zt(e,n-o.length,l,a),e=o+e):e=Zt(o+e,n,l,a)}return e}function mr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const a=t.slice(),l=n.slice();for(const u of o){const[,,c,f,d,g]=l[0];let p=f;if(s>=0)p=s,s=-1;else if(p==="*"){if(u<0)throw new Error("Non-negative number required");s=u;continue}i+=a[0],i+=dr(u,c,p,d,g),a.splice(0,1),l.splice(0,1)}return l.length===0?(i+=a[0],e(i)):mr(e,a,l,i,s)}}function yo(e){return t=>{ot.lastIndex=0;const n=[],r=[];let s=0,o=ot.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=ot.lastIndex,ot.lastIndex-=1,o=ot.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),mr(t,n,r))}}function at(e){return typeof e!="string"||e.length===0}function Re(e){return typeof e!="string"||/^\s*$/.test(e)}function F(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Zt(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function bo(e,t,n){return Zt(e,t,n)}function fr(e,t,n){return e.replace(new RegExp(go(t),"g"),n)}class Ke{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return $e(this.value)}Equals(t){return t==null?!1:D(this.value,t instanceof Ke?t.value:t)}CompareTo(t){return t==null?1:xe(this.value,t instanceof Ke?t.value:t)}}function $(e){if(e==null)throw new Error("Option has no value");return e instanceof Ke?e.value:e}function z(e){return e==null||e instanceof Ke?new Ke(e):e}function J(e,t){return e!=null?$(e):t}function he(e,t){return t!=null?z(e($(t))):void 0}const vo="The index was outside the range of elements in the collection.",Rt="Collection was empty.",Io="The input must be non-negative.",wo="An index satisfying the predicate was not found in the collection.",gr="The input sequence has an insufficient number of elements.";function Eo(e,t){return typeof e=="function"?new e(t):new Array(t)}function Bo(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function De(e){const t=new Ue(0);if(Bo(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function Jt(e,t){return e>t?e:t}function ft(e,t){return e<t?e:t}function Lo(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function Qt(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return ye(e.length-1,e)}function lt(e,t,n){const r=t.length|0,s=Eo(n,r);for(let o=0;o<=r-1;o++)pr(s,o,e(ye(o,t)));return s}function _o(e,t,n,r,s){const o=J(n,0)|0,i=J(he(l=>o+l,r),e.length)|0;return(l=>{e:for(;;){const u=l;if(u>=i)return-1;if(s.Equals(t,ye(u,e)))return u|0;l=u+1;continue e}})(o)|0}function Dt(e,t,n){return _o(t,e,void 0,void 0,n)>=0}function So(e){return e.slice().reverse()}function Co(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function At(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return ye(0,e)}function ye(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function pr(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class ee extends Te{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+F("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=$(l),f=$(u);if(D(i.head,a.head)){s=c,o=f;continue e}else return!1}else return!1;else return u==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,a=s,l=o,u=l.tail;if(u!=null){const c=$(u);if(i>18)return a|0;r=i+1,s=(a<<1)+$e(l.head)+631*i,o=c;continue e}else return a|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,a=o,l=i.tail,u=a.tail;if(l!=null)if(u!=null){const c=$(l),f=$(u),d=xe(i.head,a.head)|0;if(d===0){s=c,o=f;continue e}else return d|0}else return 1;else return u!=null?-1:0}})(this,t)|0}GetEnumerator(){return Mo(this)}[Symbol.iterator](){return tr(Ie(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Ie(this)}}class Ao{constructor(t){this.xs=t,this.it=this.xs,this.current=Se()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=$(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=Se()}Dispose(){}}function Mo(e){return new Ao(e)}function x(){return new ee(Se(),void 0)}function gt(e,t){return new ee(e,t)}function j(e){return e.tail==null}function hr(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=$(i);continue e}else return s|0}})(0,e)|0}function oe(e){if(e.tail!=null)return e.head;throw new Error(Rt+"\\nParameter name: list")}function P(e){const t=e.tail;if(t!=null)return $(t);throw new Error(Rt+"\\nParameter name: list")}function $o(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,a=i.tail;if(a!=null){if(o===t)return i.head;r=o+1,s=$(a);continue e}else throw new Error(vo+"\\nParameter name: index")}})(0,e)}function To(){throw new Error(wo)}function We(){return x()}function Be(e,t){return gt(e,t)}function W(e){return gt(e,x())}function bn(e){return j(e)}function Q(e){return hr(e)}function tt(e){return oe(e)}function vn(e){return P(e)}function yr(e){e:for(;;){const t=e;if(j(t))return;{const n=P(t);if(j(n))return z(oe(t));e=n;continue e}}}function br(e){const t=yr(e);if(t==null)throw new Error(Rt);return $(t)}function vr(e){const t=hr(e)|0,n=Lo(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,a=o;if(!j(a)){pr(n,i,oe(a)),s=i+1,o=P(a);continue e}break}})(0,e),n}function ie(e,t,n){let r=t,s=n;for(;!j(s);)r=e(r,tt(s)),s=P(s);return r}function Mt(e){return ie((t,n)=>gt(n,t),x(),e)}function qo(e,t,n){return((s,o,i)=>{e:for(;;){const a=s,l=o,u=i;if(j(u))return l;s=a+1,o=e(a,l,oe(u)),i=P(u);continue e}})(0,t,n)}function Ho(e,t,n,r){let s=t,o=n,i=r;for(;!j(o)&&!j(i);)s=e(s,oe(o),oe(i)),o=P(o),i=P(i);return s}function S(e,t){ie((n,r)=>{e(r)},void 0,t)}function Po(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=gt(ye(r,e),n);return n}function y(e){return Po(e,x())}function No(e){let t,n;if(_e(e))return y(e);if(e instanceof ee)return e;{const r=x();let s=r;const o=Ie(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const l=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new ee(l,void 0),t.tail=n,n)}}finally{le(o)}const i=s,a=x();return i.tail=a,P(r)}}function Ce(e,t){return ie((n,r)=>gt(r,n),t,Mt(e))}function ko(e,t){let n,r;const s=x();let o=s,i=t;for(;!j(i);){let u=e(oe(i));for(;!j(u);)o=(n=o,r=new ee(oe(u),void 0),n.tail=r,r),u=P(u);i=P(i)}const a=o,l=x();return a.tail=l,P(s)}function pt(e,t){const n=x(),r=qo((o,i,a)=>{const l=new ee(e(o,a),void 0);return i.tail=l,l},n,t),s=x();return r.tail=s,P(n)}function b(e,t){const n=x(),r=ie((o,i)=>{const a=new ee(e(i),void 0);return o.tail=a,a},n,t),s=x();return r.tail=s,P(n)}function xo(e,t,n){const r=x(),s=Ho((i,a,l)=>{const u=new ee(e(a,l),void 0);return i.tail=u,u},r,t,n),o=x();return s.tail=o,P(r)}function Ro(e,t){return(r=>{e:for(;;){const s=r;if(j(s))return;{const o=e(oe(s));if(o==null){r=P(s);continue e}else return o}}})(t)}function In(e,t){return Ro(n=>e(n)?z(n):void 0,t)}function wn(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(j(i))return;if(e(oe(i)))return o;r=o+1,s=P(i);continue e}})(0,t)}function Do(e,t){const n=wn(e,t);return n==null?(To(),-1):$(n)|0}function Lt(e,t){return $o(t,e)}function R(e,t){const n=x(),r=ie((o,i)=>{if(e(i)){const a=new ee(i,void 0);return o.tail=a,a}else return o},n,t),s=x();return r.tail=s,P(n)}function X(e,t,n){return wn(r=>n.Equals(e,r),t)!=null}function En(e,t){if(j(t))throw new Error(Rt);return ie(e,tt(t),vn(t))}function ut(e,t){return ie((n,r)=>n&&e(r),!0,t)}function en(e,t){return wn(e,t)!=null}function Oo(e,t){const n=vr(t);return n.sort(e),y(n)}function Dn(e,t){return Oo((n,r)=>t.Compare(n,r),e)}function Wo(e,t){return En((n,r)=>t.Compare(r,n)>0?r:n,e)}function Fo(e,t){return En((n,r)=>t.Compare(r,n)>0?n:r,e)}function Vo(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(j(r))throw new Error(gr+"\\nParameter name: list");e=n-1,t=P(r);continue e}}function Go(e,t){if(e<0)throw new Error(Io+"\\nParameter name: count");const n=(i,a,l)=>{let u;e:for(;;){const c=i,f=a,d=l;if(c<=0)return f;if(j(d))throw new Error(gr+"\\nParameter name: list");i=c-1,a=(u=new ee(oe(d),void 0),f.tail=u,u),l=P(d);continue e}},r=x(),s=n(e,r,t),o=x();return s.tail=o,P(r)}function ht(e,t){const n=(i,a,l)=>{let u;e:for(;;){const c=i,f=a,d=l;if(c<=0)return f;if(j(d))return f;i=c-1,a=(u=new ee(oe(d),void 0),f.tail=u,u),l=P(d);continue e}},r=x(),s=n(e,r,t),o=x();return s.tail=o,P(r)}function Bn(e,t,n){const r=Q(n)|0;let s;const o=J(e,0)|0;s=o<0?0:o;let i;const a=J(t,r-1)|0;return i=a>=r?r-1:a,i<s?x():Go(i-s+1,Vo(s,n))}function jo(){return Math.random()}function Yt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function Xo(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class Yo{constructor(){}Next0(){return Yt(0,2147483647)}Next1(t){return Yt(0,t)}Next2(t,n){return Yt(t,n)}NextDouble(){return jo()}NextBytes(t){Xo(t)}}function Uo(){return new Yo}function Ir(){return Uo()}function te(e,t){return Ir().Next2(e,t+1)|0}function U(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function wr(e){return Math.log(e)/Math.log(2)}var tn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(tn||(tn={}));function Ko(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function On(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function zo(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function Zo(e,t){if(t&tn.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function Jo(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||Zo(o,t),!zo(n).test(i))return Ko(s,n)}return null}function Z(e,t,n,r,s){const o=Jo(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[a,l]=On(!0,r);!n&&o.radix!==10&&i>=a&&i<=l&&(i=i<<32-r>>32-r);const[u,c]=On(n,r);if(i>=u&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function $t(e,t,n,r,s){try{return s.contents=Z(e,t,n,r),!0}catch{return!1}}function Qo(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}function Er(e,t,n){return m(v(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function Ye(e,t,n,r){return m(v('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function Ln(e,t,n,r,s,o){return m(v('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function ei(e,t,n,r,s,o,i,a){return m(v('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(a)}function be(e,t){return ei("opacity","linear","0","1",e,t,"1","freeze")}function Br(e,t,n,r,s,o,i,a,l){return Ln(m(v("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),a,1,l,0,be(i,500))}function ze(e,t){return yn(hn(e),t)}function Ae(e,t){return cr(hn(e),t)}function ti(e){throw new Error(e)}const ni="Enumeration already finished.",ri="Enumeration has not started. Call MoveNext.",si="The input sequence has an insufficient number of elements.",oi="Reset is not supported on this enumerator.";function ii(){throw new Error(oi)}function _n(){throw new Error(ri)}function nn(){throw new Error(ni)}class ai{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=Ie(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+H(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{le(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return tr(Ie(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function li(e){return new ai(e)}class ui{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){ii()}Dispose(){this.dispose()}}function Ot(e,t,n){return new ui(e,t,n)}function ci(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const a=$(n);try{le(a)}finally{n=void 0}}if(t!=null){const a=$(t);try{le(a)}finally{t=void 0}}};return Ot(()=>(r?s&&nn():_n(),o!=null?$(o):nn()),()=>{let a;if(r||(r=!0),s)return!1;{let l;for(;l==null;){const u=t,c=n;if(u!=null)if(c!=null){const f=$(c);if(f["System.Collections.IEnumerator.MoveNext"]())o=z(f["System.Collections.Generic.IEnumerator`1.get_Current"]()),l=!0;else try{le(f)}finally{n=void 0}}else{const f=$(u);f["System.Collections.IEnumerator.MoveNext"]()?n=(a=f["System.Collections.Generic.IEnumerator`1.get_Current"](),Ie(a)):(i(),l=!1)}else t=Ie(e)}return $(l)}},()=>{s||i()})}function di(e,t){return Ot(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{le(t)}finally{}})}function Lr(e,t,n){let r=!1,s,o=z(e());const i=()=>{if(o!=null){const l=$(o);try{n(l)}finally{o=void 0}}},a=()=>{try{i()}finally{s=void 0}};return Ot(()=>(r||_n(),s!=null?$(s):nn()),()=>{if(r||(r=!0),o!=null){const l=$(o);let u;try{u=t(l)}catch(c){throw a(),c}return u!=null?(s=u,!0):(a(),!1)}else return!1},i)}function mi(e,t){let n,r=t;return Ot(()=>{if(n!=null){const s=$(n)[0];return $(n)[1],s}else return _n()},()=>(n=e(r),n!=null?($(n)[0],r=$(n)[1],!0):!1),()=>{})}function fi(e,t){t==null&&ti(e)}function nt(e){return li(e)}function yt(e){return fi("source",e),Ie(e)}function Wt(e){return nt(()=>Ie(e()))}function _r(e){return nt(()=>ci(e))}function Sr(e,t){return nt(()=>mi(e,t))}function Cr(e){return e instanceof ee?vr(e):Array.from(e)}function qe(e){return _e(e)?y(e):e instanceof ee?e:No(e)}function gi(e,t,n){return nt(()=>Lr(e,t,n))}function pi(e,t,n){return nt(()=>{let r=-1;return Lr(e,s=>(r=r+1|0,t(r,s)),n)})}function hi(e,t){return _r([e,t])}function yi(e,t,n){const r=yt(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{le(r)}}function bi(e,t){return Sr(n=>n<e?[t(n),n+1]:void 0,0)}function Wn(e,t){yi((n,r)=>(e(n,r),n+1|0),0,t)}function vi(e){if(_e(e))return e.length|0;if(e instanceof ee)return Q(e)|0;{const t=yt(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{le(t)}}}function we(e,t){return gi(()=>yt(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?z(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{le(n)})}function Ii(e,t){return pi(()=>yt(t),(n,r)=>r["System.Collections.IEnumerator.MoveNext"]()?z(e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{le(n)})}function wi(e,t){return bi(e,n=>t)}function Tt(e){return Wt(()=>So(Cr(e)))}function Ei(e,t){return nt(()=>{const n=yt(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(si+"\\nParameter name: source");return di(()=>{},n)}catch(r){throw le(n),r}})}function Bi(e){return Ei(1,e)}function Ar(e,t){return Wt(()=>_r(we(e,t)))}function Li(e,t){return Wt(()=>Co(e,Cr(t)))}function Fn(e,t,n){const r=e-vi(n)|0;return r<1?n:hi(wi(r,t),n)}function _i(e){return F("",we(t=>t,Bi(e.split(""))))}function N(e,t,n){return bo(n,e,t)}function Vn(e){return F("",we(t=>t,Tt(e.split(""))))}function Si(e,t){return we(n=>F("",n),we(n=>lt(r=>r,n),Li(e,t.split(""))))}function Ci(e,t){return we(Vn,Tt(Si(e,Vn(t))))}function Oe(e,t){return y(t.split(e))}function Ai(e){return new k(0,[e])}function Mr(e){return new k(1,[e])}class k extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Mi(e,t){return t.tag===0?Ai(e(t.fields[0])):Mr(t.fields[0])}function se(e,t){return t.tag===0?e(t.fields[0]):Mr(t.fields[0])}function $i(e){try{return new k(0,[Z(e,511,!1,32)])}catch(t){return new k(1,[new Error(t.message)])}}function Ti(e){return at(e)?new k(1,[new Error]):new k(0,[e])}function Sn(e){return e===""?new k(1,[new Error("Value cannot be empty string.")]):new k(0,[e])}function Cn(e,t){return cr(hn(e),t)?new k(0,[t]):new k(1,[new Error(`The input string '${t}' was not in a correct format.`)])}function $r(e,t,n){return e(n)>t?new k(1,[new Error(m(E("Value is too long. Value must be shorter or equal to %d%P()",[t])))]):new k(0,[n])}class T extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class Me extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}class qt extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Valid","Invalid"]}}function Tr(e){const t=$i(e);return t.tag===1?new T(1,[t.fields[0]]):new T(0,[t.fields[0]])}function K(e){const t=e;return t.tag===1?new Me(1,[t.fields[0]]):new Me(0,[q(t.fields[0],2)])}function ct(e){const t=e;return t.tag===1?new qt(1,[t.fields[0]]):new qt(0,[q(t.fields[0],16)])}function rt(e){const t=se(n=>{try{const r=yn(/^0*([01]+)$/gu,n);return new k(0,[r[1]||""])}catch(r){return new k(1,[r])}},se(n=>$r(r=>r.length,32,n),se(n=>Cn("^[01]+$",n),se(Sn,new k(0,[e])))));return t.tag===1?new Me(1,[t.fields[0]]):new Me(0,[t.fields[0]])}function Fe(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[Z(t.fields[0],511,!1,32,2)])}function An(e){const t=se(n=>{try{const r=yn(/^0*([0-9A-Fa-f]+)$/gu,n);return new k(0,[r[1]||""])}catch(r){return new k(1,[r])}},se(n=>$r(r=>r.length,8,n),se(n=>Cn("^[0-9A-Fa-f]+$",n),se(Sn,new k(0,[e])))));return t.tag===1?new qt(1,[t.fields[0]]):new qt(0,[t.fields[0]])}function Mn(e){const t=e;return t.tag===1?new T(1,[t.fields[0]]):new T(0,[Z(t.fields[0],511,!1,32,16)])}function ue(e,t){return`
            <span id="questionArea" class="question-area"></span>
            <form id="inputArea" class="endless-binary" autocomplete="off">
                <input type="text" id="numberInput" class="mono">
                <span id="binaryRadix"></span>
                <button type="button" id="submitButton" class="d2b-button">Enter</button>
                <div id="errorArea" class="error-area"></div>
                <div id="hintArea" class="hint-area"></div>
            </form>
            <div class="history-area">
                <h2>結果:</h2>
                <div class="history-indented mono">
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
            </div>`}const qi=`\r
            <span id="questionArea" class="question-area"></span>\r
            <form id="inputArea" class="endless-binary" autocomplete="off">\r
                <input type="text" id="numberInput" class="mono">\r
                <span id="binaryRadix"></span>\r
                <button type="button" id="submitButton" class="d2b-button">Enter</button>\r
                <div id="errorArea" class="error-area"></div>\r
                <div id="hintArea" class="hint-area"></div>\r
            </form>\r
            <div class="history-area">\r
                <h2>結果:</h2>\r
                <div class="history-indented mono">\r
                    <span id="outputArea"></span>\r
                </div>\r
            </div>`;function Ve(e,t,n){const r=Re(t)?`${e} の2進法表記を入力してください。`:Ae("^[01]+$",t)?"不明なエラーです。":`'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function qr(e,t,n){const r=Re(t)?`${e} の10進法表記を入力してください。`:Ae("^[0-9]+$",t)?"不明なエラーです。":`'${t}' は10進数ではありません。使えるのは半角の 0123456789 のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function Hi(e,t,n){const r=Re(t)?`${e} の16進法表記を入力してください。`:Ae("^[0-9A-Fa-f]+$",t)?"不明なエラーです。":`'${t}' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。`;return m(v('<span class="warning">%s</span>'))(r)}function Ge(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return m(E(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Hr(e,t){return t.tag===0?F(" ",qe(Ci(e,t.fields[0]))):""}function Ft(e,t){let n,r;const s=Fn(8,"",we(i=>i,(n=K(new T(0,[e])),n.tag===1?"":n.fields[0]).split(""))),o=Fn(8,"",we(i=>i,(r=K(new T(0,[t])),r.tag===1?"":r.fields[0]).split("")));Wn((i,a)=>{let l;const u=m(E("firstRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},s),Wn((i,a)=>{let l;const u=m(E("secondRowDigit%d%P()",[8-i]));l=document.getElementById(u),l.innerText=a},o)}function ge(e){const t=e*2500-500|0;return Math.abs(t)|0}function Pr(e,t){return[z(e),1,z(t),void 0]}function Nr(e,t){let n;const r=Mt(t);return bn(r)?W([void 0,void 0,void 0,void 0]):Mt(Be((n=tt(r),[void 0,void 0,z(n[0]),z(n[1])]),b(s=>[z(e),1,z(s[0]),z(s[1])],vn(r))))}function ce(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=Dt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:Je});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{S(s=>{document.getElementById(s).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Escape":{n&&S(s=>{document.getElementById(s).classList.remove("active")},y(["helpWindow","helpBarrier"]));break}}}}function He(e,t){return F(e,R(n=>!at(n),t))}function Pi(e,t){return ie((n,r)=>fr(n,r[0],r[1]),t,e)}function Pe(e){return Pi(y([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function Y(e){return fr(e," ","&nbsp;")}function rn(e,t,n){return[e(t),e(n)]}function Ht(e,t,n,r){return[e(t),e(n),e(r)]}const kr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Ni(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return Ce(s,W(1));default:{let i;const a=~~wr(o)|0;i=Math.pow(2,a),n=Ce(s,W(i)),r=o-i;continue e}}}})(We(),e)}function $n(e,t){let n,r=0;n=[Qo(e,t,new Ue(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?W([o,s]):Ce(W([o,s]),$n(o,t))}function ki(e,t,n,r){return Br(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+ge(t-1),n,r)}function xr(e,t,n){const r=Be(Pr(e,t),Nr(e,$n(t,e)));let s;const o=b(i=>{const a=J(i[0],""),l=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return m(v("%s%s%s%s"))(a)(l)(u)(c)},pt((i,a)=>[he(l=>{let u,c;return Ye(0,n*(i+1),0,(u=be((c=ge(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(l)(u)))},a[0]),he(l=>{let u,c,f,d,g,p,h;return Ln((u=~~(n/2)+2|0,c=n*i+6|0,f=~~(n/2)|0,d=n*.4,g=n*.8,p=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(f)(d)(g)(p)),"#000000",1,"none",0,be((h=ge(i)|0,i===0?h+500:h+1500),500))},a[1]),he(l=>{let u,c;return Ye(~~(n/2)*2,n*(i+1),0,(u=Y(N(3," ",q(l))),c=be(ge(i),500),m(v("%s%s"))(u)(c)))},a[2]),he(l=>{let u;return Ye(~~(n/2)*6,n*(i+1),0,(u=be(500+ge(i),500),m(v("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>m(v("%s%s"))(i)(a),ki(n,Q(r),"#191970","#b0e0e6"),o),Er(~~(n/2)*10,n*(Q(r)+1),s)}function xi(e,t){return`
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
                ${xr(e,t,20)}
            </div>
            `}function Ri(e,t){let n,r,s;const o=F(" + ",b(q,t)),i=F(" + ",(n=b(c=>{let f;return f=wr(c),~~Math.trunc(f)},t),b((r=m(v("2<sup>%d</sup>")),r),n))),a=F(" + ",b(c=>`${c}<sub>(2)</sub>`,b(c=>c.tag===1?"":c.fields[0],b(c=>K(new T(0,[c])),t))));let l;const u=K(e);return l=u.tag===1?"-1":u.fields[0],m(E(`\r
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
            <p class="history-indented hint-bgcolor-gray mono">\r
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
            <p class="history-indented hint-bgcolor-gray mono">\r
                &nbsp;&nbsp;%s%P()<br>\r
            </p>\r
            <p class="history-indented">\r
                と表現できます。最後にこれを計算すると\r
            </p>\r
            <p class="history-indented hint-bgcolor-gray mono">\r
                &nbsp;&nbsp;%s%P()<br>\r
                = %s%P()<sub>(2)</sub>\r
            </p>\r
            <p class="history-indented">\r
                になります。\r
            </p>\r
            `,[(s=e,s.tag===1?-1:s.fields[0]),o,i,i,a,a,l]))}function Rr(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${xi(2,e)}
                <h3>考え方 2</h3>
                ${Ri(new T(0,[e]),Ni(e))}
            </details>
            `}function Di(e,t){const n=(o,i)=>{e:for(;;){const a=o,l=i,u=Ir(),c=u.Next2(a,l)|0,f=u.Next2(a,l)|0;if(c!==f)return[c,f];o=a,i=l;continue e}};let r;const s=n(e,t);return r=rn(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Dr(e,t){return U(()=>Di(0,e),n=>X(n,t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function Oi(e,t){const n=Fe(rt(t));return n.tag===0?Ge(e,Y(N(8," ",t)),2,Y(N(3," ",q(n.fields[0]))),10):""}function Or(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=xr(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function Ze(e,t,n,r,s,o,i,a,l,u){const c=document.getElementById("numberInput"),f=Pe(c.value),d=rt(f);if(c.focus(),d.tag===0){document.getElementById("errorArea").innerHTML="";const g=document.getElementById("outputArea"),p=He("<br>",y([Oi(D(d,u),d.fields[0]),g.innerHTML]));if(g.innerHTML=p,D(d,u)){const h=e(a)|0;document.getElementById("questionSpan").innerText=q(h),document.getElementById("hintArea").innerHTML=t(h),r(h);const I=new T(0,[h]),_=K(I);c.value="";const L=ht(i,Be(h,a));document.getElementById("submitButton").onclick=B=>{B.preventDefault(),Ze(e,t,n,r,s,o,i,L,I,_)},document.getElementById("inputArea").onsubmit=B=>{B.preventDefault(),Ze(e,t,n,r,s,o,h,L,I,_)}}}else{const g=l.tag===0?q(l.fields[0]):"";document.getElementById("errorArea").innerHTML=n(g,f,d.fields[0])}}function Wi(e,t,n){Ze(r=>Dr(8,r),Rr,Ve,r=>{Or(r)},10,2,10,e,t,n)}function Vt(e,t,n,r,s,o,i){const a=e(We())|0;document.getElementById("questionSpan").innerText=q(a),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=q(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(a);const l=new T(0,[a]),u=K(l);document.getElementById("submitButton").onclick=c=>{c.preventDefault(),o(W(a),l,u)},document.getElementById("inputArea").onsubmit=c=>{c.preventDefault(),o(W(a),l,u)},n(a),document.getElementById("helpButton").onclick=c=>{S(f=>{document.getElementById(f).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=c=>{S(f=>{document.getElementById(f).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=c=>{S(f=>{document.getElementById(f).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=c=>{i(c)}}function Fi(){document.title="10進数→2進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>10進数→2進数 (1) - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(kr,"help-color dec2bin"),document.querySelector("#submitButton").className="dec2bin",document.querySelector("#questionArea").innerHTML=Ee,Vt(t=>Dr(8,t),Rr,t=>{Or(t)},10,2,(t,n,r)=>{Wi(t,n,r)},t=>{ce(t)})}const Wr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Fr(e){return""}function Vr(e){return U(()=>te(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function Vi(e,t,n){Ze(Vr,Fr,Ve,r=>{},10,2,10,e,t,n)}function Gi(){document.title="10進数→2進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2bin",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>10進数→2進数 (2) - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(Wr,"help-color dec2bin"),document.querySelector("#submitButton").className="dec2bin",document.querySelector("#questionArea").innerHTML=Ee,Vt(Vr,Fr,t=>{},10,2,(t,n,r)=>{Vi(t,n,r)},t=>{ce(t)})}function Gr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const jr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ji(){const e=U(()=>{const t=()=>{let n,r;const s=Fe(new Me(0,[_i(N(9,"0",(n=K(new T(0,[(r=te(0,8)|0,Math.pow(2,r))])),n.tag===0?n.fields[0]:"")))]));return s.tag===0?s.fields[0]|0:-1};return[t(),t()]},t=>!D(t[0],t[1]));return e[0]+e[1]|0}function Xi(e){return F(" + ",pt((t,n)=>{const r=e.length-t-1|0;return m(v("(%c * 2<sup>%d</sup>)"))(n)(r)},qe(e.split(""))))}function Yi(e){return pt((t,n)=>[m(E('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(E('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),m(E('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],qe(e.split("")))}function Ui(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function Ki(e){const t=ie((n,r)=>Gr((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Yi(e));return Ui(t[0],t[1],t[2])}function Xr(e){let t;if(e.tag===0){const n=e.fields[0],r=Xi(n);return m(E(`\r
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
                    <p class="history-indented hint-bgcolor-gray mono">\r
                        &nbsp;&nbsp;%s%P()<br>\r
                        = %d%P()<sub>(10)</sub>\r
                    </p>\r
                </details>\r
            `,[Ki(n),n,r,(t=Fe(e),t.tag===1?-1:t.fields[0])]))}else return""}function Yr(e){return U(ji,t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function zi(e,t){const n=K(new T(0,[t]));return n.tag===0?Ge(e,Y(N(3," ",q(t))),10,Y(N(8," ",n.fields[0])),2):""}function sn(e,t,n,r,s,o,i){const a=document.getElementById("numberInput"),l=Pe(a.value),u=Tr(l);if(a.focus(),u.tag===0){document.getElementById("errorArea").innerHTML="";const c=document.getElementById("outputArea"),f=He("<br>",y([zi(D(u,i),u.fields[0]),c.innerHTML]));if(c.innerHTML=f,D(u,i)){const d=e(s)|0,g=new T(0,[d]),p=K(g);document.getElementById("questionSpan").innerText=Hr(4,p),document.getElementById("hintArea").innerHTML=t(p),a.value="";const h=ht(r,Be(d,s));document.getElementById("submitButton").onclick=I=>{I.preventDefault(),sn(e,t,n,r,h,p,g)},document.getElementById("inputArea").onsubmit=I=>{I.preventDefault(),sn(e,t,n,r,h,p,g)}}}else{const c=o.tag===0?o.fields[0]:"";document.getElementById("errorArea").innerHTML=qr(c,l,u.fields[0])}}function Gn(e,t,n){sn(Yr,Xr,r=>{},4,e,t,n)}function Ur(e,t,n,r){const s=e(We())|0,o=new T(0,[s]),i=K(o);document.getElementById("questionSpan").innerText=Hr(4,i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("dstRadix").innerText=q(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=a=>{a.preventDefault(),Gn(W(s),i,o)},document.getElementById("inputArea").onsubmit=a=>{a.preventDefault(),Gn(W(s),i,o)},document.getElementById("helpButton").onclick=a=>{S(l=>{document.getElementById(l).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=a=>{S(l=>{document.getElementById(l).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=a=>{S(l=>{document.getElementById(l).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=a=>{r(a)}}function Zi(){document.title="2進数→10進数 (1) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>2進数→10進数 (1) - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(jr,"help-color bin2dec"),document.querySelector("#submitButton").className="bin2dec",document.querySelector("#questionArea").innerHTML=Ee,Ur(Yr,Xr,t=>{},t=>{ce(t)})}const Kr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Ji(e){return""}function Qi(e){return U(()=>te(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ea(){document.title="2進数→10進数 (2) - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="bin2dec",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>2進数→10進数 (2) - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(Kr,"help-color bin2dec"),document.querySelector("#submitButton").className="bin2dec",document.querySelector("#questionArea").innerHTML=Ee,Ur(Qi,Ji,t=>{},t=>{ce(t)})}const zr=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Zr(e){const t=~~(Math.log(e)/Math.log(2))|0;return m(E(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function Jr(e){return U(()=>{const t=te(0,7)|0;return Math.pow(2,t)|0},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ta(e,t,n){Ze(Jr,Zr,Ve,r=>{},10,2,4,e,t,n)}function na(){document.title="2のn乗 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>2のn乗 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(zr,"help-color power-of-two"),document.querySelector("#submitButton").className="power-of-two",document.querySelector("#questionArea").innerHTML=Ee,Vt(Jr,Zr,t=>{},10,2,(t,n,r)=>{ta(t,n,r)},t=>{ce(t)})}const Qr=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function es(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return m(E(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    %d%P()<sub>(10)</sub> という数は、以下のように表すことができます。\r
                </p>\r
                <p class="history-indented hint-bgcolor-gray mono">\r
                    &nbsp;&nbsp;%d%P()<sub>(10)</sub><br>\r
                    = %d%P()<sub>(10)</sub> - 1<sub>(10)</sub><br>\r
                    = 2<sup>%d%P()</sup><sub>(10)</sub> - 1<sub>(10)</sub>\r
                </p>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    一方、2<sup>n</sup>-1 の数を2進法で表現するには、1 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> - 1 なので、1 を %d%P() 個続けます。\r
                </p>\r
            </details>`,[e,e,e+1,t,e,t,t]))}function ts(e){return U(()=>{let t;return-1+(t=te(0,8)|0,Math.pow(2,t))},t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ra(e,t,n){Ze(ts,es,Ve,r=>{},10,2,4,e,t,n)}function sa(){document.title="2のn乗-1 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="power-of-two",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>2のn乗-1 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(Qr,"help-color power-of-two"),document.querySelector("#submitButton").className="power-of-two",document.querySelector("#questionArea").innerHTML=Ee,Vt(ts,es,t=>{},10,2,(t,n,r)=>{ra(t,n,r)},t=>{ce(t)})}const ns=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function oa(){return`\r
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
                </details>`}function ia(e){let t;const n=-1+Math.pow(2,e)|0,r=U(()=>te(1,n),s=>{const o=K(new T(0,[s]));if(o.tag===0){const i=o.fields[0];return i.length===e&&Ae("^1+0+$",i)===!1}else return!1})|0;return[r,(t=n-r|0,U(()=>te(1,t),s=>s!==r&&(s&r)!==0))]}function aa(e,t){return U(()=>ia(e),n=>X(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1&&X(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:O})===!1)}function on(e,t,n,r,s,o,i,a,l,u,c){const f=document.getElementById("numberInput"),d=Pe(f.value);f.focus();const g=rt(d);if(g.tag===0){const p=g.fields[0];document.getElementById("errorArea").innerHTML="";const h=n(p),I=Fe(new Me(0,[p]));if(I.tag===0){const _=I.fields[0]|0,L=Y(N(3," ",q(_))),B=document.getElementById("outputArea"),A=He("<br>",y([Ge(_===a,h,s,L,o),B.innerHTML]));if(B.innerHTML=A,_===a){const C=e(c),M=C[1]|0,V=C[0]|0;Ft(V,M),document.getElementById("hintArea").innerHTML=t(),f.value="";const st=ht(i,Ce(y([V,M]),c));document.getElementById("submitButton").onclick=je=>{je.preventDefault(),on(e,t,n,r,s,o,i,V+M,V,M,st)},document.getElementById("inputArea").onsubmit=je=>{je.preventDefault(),on(e,t,n,r,s,o,i,V+M,V,M,st)}}}}else{const p=I=>{const _=K(new T(0,[I]));return _.tag===1?"":_.fields[0]},h=Ve(m(E("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[p(l),s,p(u),s])),d,g.fields[0]);document.getElementById("errorArea").innerHTML=h}}function la(e,t,n,r,s,o,i,a,l){document.getElementById("numberInput").className="question-number",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(o),document.getElementById("hintArea").innerHTML=t();const u=e(We()),c=u[1]|0,f=u[0]|0;Ft(f,c),document.getElementById("submitButton").onclick=d=>{d.preventDefault(),l(e,t,n,r,s,o,i,f+c,f,c,y([f,c]))},document.getElementById("inputArea").onsubmit=d=>{d.preventDefault(),l(e,t,n,r,s,o,i,f+c,f,c,y([f,c]))},document.getElementById("helpButton").onclick=d=>{S(g=>{document.getElementById(g).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=d=>{S(g=>{document.getElementById(g).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=d=>{S(g=>{document.getElementById(g).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=d=>{a(d)}}function ua(){document.title="加算 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="addition",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>加算 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(ns,"help-color addition"),document.querySelector("#submitButton").className="addition",document.querySelector("#questionArea").innerHTML=lr,la(t=>aa(8,t),oa,t=>Y(N(8," ",t)),t=>{},2,2,10,t=>{ce(t)},(t,n,r,s,o,i,a,l,u,c,f)=>{on(t,n,r,s,o,i,a,l,u,c,f)})}const rs=`\r
            2進数同士の引き算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ss(){const e=te(1,255)|0,t=U(()=>te(1,255),n=>n!==e&&(n&e)!==0)|0;return e>t?[e,t]:[t,e]}function os(){return`\r
                <details><summary><h2>ヒント:</h2></summary>\r
                    <p class="history-indented">\r
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>\r
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>\r
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>\r
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>\r
                        ひとつ左の桁から1を2つもらってきます。<br>\r
                    </p>\r
                </details>`}function Pt(e,t,n,r){const s=document.getElementById("numberInput"),o=Pe(s.value);s.focus();const i=rt(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=Y(N(8," ",a)),u=Fe(new Me(0,[a]));if(u.tag===0){const c=u.fields[0]|0,f=Y(N(3," ",q(c))),d=document.getElementById("outputArea"),g=He("<br>",y([Ge(c===e,l,2,f,10),d.innerHTML]));if(d.innerHTML=g,c===e){const p=U(ss,B=>X(B[0],r,{Equals:(A,C)=>A===C,GetHashCode:O})===!1&&X(B[1],r,{Equals:(A,C)=>A===C,GetHashCode:O})===!1),h=p[1]|0,I=p[0]|0;Ft(I,h);const _=os();document.getElementById("hintArea").innerHTML=_,s.value="";const L=Bn(0,ft(20,Q(r)+1)-1,Ce(y([I,h]),r));document.getElementById("submitButton").onclick=B=>{B.preventDefault(),Pt(I-h,I,h,L)},document.getElementById("inputArea").onsubmit=B=>{B.preventDefault(),Pt(I-h,I,h,L)}}}}else{const a=u=>{const c=K(new T(0,[u]));return c.tag===1?"":c.fields[0]},l=Ve(m(E("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[a(t),2,a(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=l}}function ca(){document.title="減算 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="subtraction",document.getElementById("hamburgerButton").onclick=o=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=o=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>減算 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(rs,"help-color subtraction"),document.querySelector("#submitButton").className="subtraction",document.querySelector("#questionArea").innerHTML=lr;const t=os();document.getElementById("numberInput").className="question-number",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=t;const n=ss(),r=n[1]|0,s=n[0]|0;Ft(s,r),document.getElementById("submitButton").onclick=o=>{o.preventDefault(),Pt(s-r,s,r,y([s,r]))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),Pt(s-r,s,r,y([s,r]))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}const is=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `,da='4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？';function ma(e,t,n){return Re(t)?`<span class="warning">${e} の補数を、2進法表記で入力してください。</span>`:Ae("^[01]+$",t)?'<span class="warning">不明なエラーです。</span>':`<span class="warning">'${t}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`}function as(e,t){return`
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
            </details>`}function Nt(e,t,n){let r;const s=document.getElementById("numberInput"),o=Pe(s.value);s.focus();const i=rt(o);if(i.tag===0){const a=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=Fe(new Me(0,[a])),u=D(l,new T(0,[t]))?"history history-correct":"history history-wrong",c=N(4,"0",a),f=document.getElementById("outputArea"),d=He("<br>",y([m(v('<span class ="%s">%s<sub>(%d)</sub></span>'))(u)(c)(2),f.innerHTML]));if(f.innerHTML=d,D(l,new T(0,[t]))){const g=U(()=>te(1,15),L=>X(L,n,{Equals:(B,A)=>B===A,GetHashCode:O})===!1)|0,p=16-g|0,h=N(4,"0",(r=K(new T(0,[g])),r.tag===1?"":r.fields[0]));document.getElementById("questionSpan").innerText=h;const I=Array.from(Ar(L=>L==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=as(h,I),s.value="";const _=Bn(0,ft(8,Q(n)+1)-1,Be(g,n));document.getElementById("submitButton").onclick=L=>{L.preventDefault(),Nt(h,p,_)},document.getElementById("inputArea").onsubmit=L=>{L.preventDefault(),Nt(h,p,_)}}}else document.getElementById("errorArea").innerHTML=ma(e,o,i.fields[0])}function fa(){let e;document.title="補数 - taidalab";const t=document.querySelector("header");t.innerHTML=re,t.className="complement",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>補数 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(is,"help-color complement"),document.querySelector("#submitButton").className="complement",document.querySelector("#questionArea").innerHTML=da;const n=te(1,15)|0,r=16-n|0,s=N(4,"0",(e=K(new T(0,[n])),e.tag===1?"":e.fields[0])),o=Array.from(Ar(i=>i==="1"?"0":"1",s.split(""))).join("");document.getElementById("questionSpan").innerText=s,document.getElementById("srcRadix").innerText=m(v("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=as(s,o),document.getElementById("submitButton").onclick=i=>{i.preventDefault(),Nt(s,r,W(n))},document.getElementById("inputArea").onsubmit=i=>{i.preventDefault(),Nt(s,r,W(n))},document.getElementById("helpButton").onclick=i=>{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=i=>{S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=i=>{S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=i=>{ce(i)}}const ls=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ga(e,t,n,r){return Br(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+ge(t-1),n,r)}function us(e,t,n){const r=Be(Pr(e,t),Nr(e,$n(t,e)));let s;const o=b(i=>{const a=J(i[0],""),l=J(i[1],""),u=J(i[2],""),c=J(i[3],"");return m(v("%s%s%s%s"))(a)(l)(u)(c)},pt((i,a)=>[he(l=>{let u,c;return Ye(0,n*(i+1),0,(u=be((c=ge(i)|0,i===0?c+1e3:c+2e3),500),m(v("%d%s"))(l)(u)))},a[0]),he(l=>{let u,c,f,d,g,p,h;return Ln((u=~~(n/2)*2+4|0,c=n*i+6|0,f=~~(n/2)|0,d=n*.4,g=n*.8,p=n/2*4.8,m(v("M %d,%d q %d,%f 0,%f h %f"))(u)(c)(f)(d)(g)(p)),"#000000",1,"none",0,be((h=ge(i)|0,i===0?h+500:h+1500),500))},a[1]),he(l=>{let u,c;return Ye(~~(n/2)*3,n*(i+1),0,(u=Y(N(3," ",q(l))),c=be(ge(i),500),m(v("%s%s"))(u)(c)))},a[2]),he(l=>{let u;return Ye(~~(n/2)*7,n*(i+1),0,(u=be(500+ge(i),500),m(v("…%d%s"))(l)(u)))},a[3])],r));return s=ie((i,a)=>m(v("%s%s"))(i)(a),ga(n,Q(r),"#1e3330","#95feec"),o),Er(~~(n/2)*11,n*(Q(r)+1),s)}function pa(e,t,n){const r=us(e,t,n);return m(v(`\r
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
                `))(r)}function ha(e,t,n){const r=pa(e,t,n);return m(v(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function cs(e){return ha(16,e,20)}function ds(e){return U(()=>te(0,255),t=>X(t,e,{Equals:(n,r)=>n===r,GetHashCode:O})===!1)}function ya(e,t){const n=Mn(An(t));return n.tag===0?Ge(e,Y(N(4," ",t)),16,Y(N(3," ",q(n.fields[0]))),10):""}function ms(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=us(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function an(e,t,n,r,s,o,i,a,l,u,c){const f=document.getElementById("numberInput"),d=Pe(f.value),g=An(d.toLocaleLowerCase());if(f.focus(),g.tag===0){const p=g.fields[0];document.getElementById("errorArea").innerHTML="";const h=document.getElementById("outputArea"),I=c.tag===1?"":c.fields[0].toLocaleLowerCase(),_=He("<br>",y([ya(p===I,d),h.innerHTML]));if(h.innerHTML=_,p===I){const L=e(l)|0;document.getElementById("questionSpan").innerText=q(L),document.getElementById("hintArea").innerHTML=t(L),s(L);const B=new T(0,[L]),A=ct(B);f.value="";const C=ht(a,Be(L,l));document.getElementById("submitButton").onclick=M=>{M.preventDefault(),an(e,t,n,r,s,o,i,a,C,B,A)},document.getElementById("inputArea").onsubmit=M=>{M.preventDefault(),an(e,t,n,r,s,o,i,L,C,B,A)}}}else{const p=u.tag===0?q(u.fields[0]):"";document.getElementById("errorArea").innerHTML=n(p,d,g.fields[0])}}function jn(e,t,n){an(ds,cs,Hi,r=>N(4," ",r),r=>{ms(r)},10,16,10,e,t,n)}function ba(e,t,n,r,s,o){const i=e(We())|0;document.getElementById("questionSpan").innerText=q(i),document.getElementById("srcRadix").innerText=m(v("(%d)"))(r),document.getElementById("dstRadix").innerText=q(s),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(s),document.getElementById("hintArea").innerHTML=t(i);const a=new T(0,[i]),l=ct(a);document.getElementById("submitButton").onclick=u=>{u.preventDefault(),jn(W(i),a,l)},document.getElementById("inputArea").onsubmit=u=>{u.preventDefault(),jn(W(i),a,l)},n(i),document.getElementById("helpButton").onclick=u=>{S(c=>{document.getElementById(c).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=u=>{S(c=>{document.getElementById(c).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=u=>{S(c=>{document.getElementById(c).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=u=>{o(u)}}function va(){document.title="10進数→16進数 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="dec2hex",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>10進数→16進数 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(ls,"help-color dec2hex"),document.querySelector("#submitButton").className="dec2hex",document.querySelector("#questionArea").innerHTML=Ee,ba(ds,cs,t=>{ms(t)},10,16,t=>{ce(t)})}const fs=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function gs(e){return F(" + ",Tt(Ii((t,n)=>{let r;return m(E("(%d%P() * 16<sup>%d%P()</sup>)",[(r=Mn(An(n)),r.tag===1?-1:r.fields[0]),t]))},we(t=>t,Tt(e)))))}function Ia(e){return pt((t,n)=>[m(E('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(E('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),m(E('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],qe(e.split("")))}function wa(e,t,n){return m(v(`\r
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
                `))(e)(t)(n)}function ps(e){const t=ie((n,r)=>Gr((s,o)=>m(v("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Ia(e));return wa(t[0],t[1],t[2])}function hs(e,t,n){let r,s;return m(E(`<details>\r
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
                <p class="history-indented hint-bgcolor-gray mono">\r
                    &nbsp;&nbsp;%s%P()<br>\r
                    = %d%P()\r
                </p>\r
            </details>`,[n,(r=e,r.tag===1?"-1":r.fields[0]),t,(s=Mn(e),s.tag===1?-1:s.fields[0])]))}function kt(e,t,n){const r=document.getElementById("numberInput"),s=Pe(r.value);r.focus();const o=Tr(s);if(o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const a=Y(N(3," ",q(i))),l=ct(new T(0,[i]));if(l.tag===0){const u=Y(N(2," ",l.fields[0])),c=document.getElementById("outputArea"),f=He("<br>",y([Ge(i===e,a,10,u,16),c.innerHTML]));if(c.innerHTML=f,i===e){const d=U(()=>te(0,255),p=>X(p,n,{Equals:(h,I)=>h===I,GetHashCode:O})===!1)|0,g=ct(new T(0,[d]));if(g.tag===0){const p=g.fields[0];document.getElementById("questionSpan").innerText=p;const h=hs(g,gs(p.split("")),ps(p));document.getElementById("hintArea").innerHTML=h,r.value="";const I=Bn(0,ft(10,Q(n)+1)-1,Be(d,n));document.getElementById("submitButton").onclick=_=>{_.preventDefault(),kt(d,p,I)},document.getElementById("inputArea").onsubmit=_=>{_.preventDefault(),kt(d,p,I)}}}}}else document.getElementById("errorArea").innerHTML=qr(t,s,o.fields[0])}function Ea(){document.title="16進数→10進数 - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="hex2dec",document.getElementById("hamburgerButton").onclick=r=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=r=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>16進数→10進数 - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ue(fs,"help-color hex2dec"),document.querySelector("#submitButton").className="hex2dec",document.querySelector("#questionArea").innerHTML=Ee;const t=te(0,255)|0,n=ct(new T(0,[t]));if(n.tag===0){const r=n.fields[0],s=hs(n,gs(r.split("")),ps(r));document.getElementById("questionSpan").innerText=r,document.getElementById("srcRadix").innerText=m(v("(%d)"))(16),document.getElementById("dstRadix").innerText=q(10),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=s,document.getElementById("submitButton").onclick=o=>{o.preventDefault(),kt(t,r,W(t))},document.getElementById("inputArea").onsubmit=o=>{o.preventDefault(),kt(t,r,W(t))},document.getElementById("helpButton").onclick=o=>{S(i=>{document.getElementById(i).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=o=>{S(i=>{document.getElementById(i).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.onkeydown=o=>{ce(o)}}}function Ba(e,t){return Q(R(e,t))}function La(e,t){let n;const r=ht(e,t);return Ba((n=Lt(e,t),s=>D(n,s)),r)|0}function _a(e,t){return R(n=>X(n,t,{Equals:D,GetHashCode:$e}),e)}function Sa(e,t,n,r){const s=xe(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const a=xe(i,t)|0;return o&&a<=0||!o&&a>=0?[i,r(i,e)]:void 0}}function Ca(e,t,n,r,s){const o=Sa(t,n,r,s);return Wt(()=>Sr(o,e))}function Gt(e,t,n){return Ca(e,t,n,0,(r,s)=>r+s)}const ys=`\r
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
    `,Aa=`
        <form id="inputArea" class="iro-iroiro" autocomplete="off">
            <label>R:<input type="number" id="rInput" class="iro-iroiro mono" min="0" max="255"></label>
            <label>G:<input type="number" id="gInput" class="iro-iroiro mono" min="0" max="255"></label>
            <label>B:<input type="number" id="bInput" class="iro-iroiro mono" min="0" max="255"></label>
            <label>変化量:<input type="number" id="stepInput" class="iro-iroiro mono"></label>
            <label>回数:<input type="number" id="limitInput" class="iro-iroiro rem6 mono" value="10"></label>
            <button type="button" id="submitButton" class="d2b-button">Enter</button>
        </form>
        <div id="errorArea" class="error-area"></div>
        <div id="outputArea" class="output-area iro-iroiro"></div>
        <div id="helpWindow" class="help-window">
            <div class="help-close-outer">
                <span id="helpClose" class="material-symbols-outlined help-close iro-iroiro" translate="no">
                    close
                </span>
            </div>
            ${ys}
        </div>
        `;function Xn(e,t){return t%e}function Ma(e,t){return~~(t/e)}function $a(e,t,n){const r=t-e|0;return Ma(r*3,n)%2===0?ft(e+Xn(r*3,n),t)|0:Jt(t-Xn(r*3,n),e)|0}function Ut(e,t,n,r,s,o){return $a(t,n,(n-t)*e+r*o+s)}function Ta(e,t,n,r,s){const o=y([e,t,n]),i=Fo(o,{Compare:vt})|0,a=Wo(o,{Compare:vt})|0,l=Lt(1,Dn(o,{Compare:vt}))-i|0;let u,c;const f=[0,1,2];return c=Ht(d=>{let g;return Do((g=Lt(d,o)|0,p=>g===p),Dn(o,{Compare:vt}))+La(d,o)},f[0],f[1],f[2]),u=Ht(d=>Lt(d,y([g=>Ut(4,i,a,r,l,g),g=>Ut(0,i,a,r,l,g),g=>Ut(2,i,a,r,l,g)])),c[0],c[1],c[2]),b(d=>[u[0](d),u[1](d),u[2](d)],qe(Gt(0,1,s)))}function Yn(e,t,n){let r;const s=[e,t,n];return r=Ht(o=>N(2,"0",q(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function qa(e,t){return b(n=>1+e*n,qe(Gt(1,1,~~((255/t-1)/e))))}function Ha(e){return vn(Mt(b(t=>1-e*t,qe(Gt(1,1,~~(1/e))))))}function Pa(e,t,n){return m(E(`\r
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
        `,[e,t,n,e,t,n,Yn(e,t,n),e,t,n,Yn(e,t,n)]))}function Na(e){const t=F(`
`,e);return m(v('<div class="color-row">%s</div>'))(t)}function bs(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,a=document.getElementById("limitInput").value,l=R(u=>u[2][0]===!1,Ce(b(u=>{const c=u[2];return[u[0],u[1],[c[0],~~c[1]]]},b(u=>{let c;return[u[0],u[1],(c=0,[$t(u[2],511,!0,8,new Ue(()=>c,f=>{c=f})),c])]},y([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),b(u=>{let c;return[u[0],u[1],(c=0,[$t(u[2],511,!1,32,new Ue(()=>c,f=>{c=f|0})),c])]},y([["変化量","stepInput",i],["回数","limitInput",a]]))));if(bn(l)){const u=Z(r,511,!1,32)|0,c=Z(s,511,!1,32)|0,f=Z(o,511,!1,32)|0,d=Ta(u,c,f,Z(i,511,!1,32),Z(a,511,!1,32)),g=Jt(Jt(u,c),f)|0,p=Ha(.1),h=Q(p)|0,I=F(`
`,b(Na,b(C=>b(M=>Pa(M[0],M[1],M[2]),C),b((e=Ce(p,Be(1,qa(.1,g))),C=>b(M=>Ht(V=>~~(M*V),C[0],C[1],C[2]),e)),d)))),_=document.getElementById("outputArea");_.innerHTML=I;const L=_.getBoundingClientRect().width;let B;B=At((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,_.scrollLeft=B*h-(L-B)/2}else{const u=En((c,f)=>`${c}<br>${f}`,b(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,l));n.innerHTML=u,document.getElementById(tt(l)[1]).focus()}}function ke(e,t,n,r,s){ut(o=>o!=="",y([e,t,n,r,s]))&&bs()}function ka(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=Dt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:Je});switch(e.key){case"\\":{const a=b(l=>document.getElementById(l),y(["rInput","gInput","bInput","stepInput","limitInput"]));o||(J(In(u=>u.value==="",a),tt(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Escape":{o&&S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),f=document.getElementById("limitInput");let d,g=0;if(d=[$t(f.value,511,!1,32,new Ue(()=>g,p=>{g=p|0})),g],d[0]){const p=d[1]|0;p<2147483647&&(f.value=q(p+1),ke(a.value,l.value,u.value,c.value,f.value))}}break}case"-":{if(!o){const a=document.getElementById("rInput"),l=document.getElementById("gInput"),u=document.getElementById("bInput"),c=document.getElementById("stepInput"),f=document.getElementById("limitInput");let d,g=0;if(d=[$t(f.value,511,!1,32,new Ue(()=>g,p=>{g=p|0})),g],d[0]){const p=d[1]|0;p>0&&(f.value=q(p-1),ke(a.value,l.value,u.value,c.value,f.value))}}break}}break}}}function xa(){document.title="色いろいろ - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="iro-iroiro",document.getElementById("hamburgerButton").onclick=i=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=i=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>色いろいろ - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=Aa,document.querySelector("#submitButton").className="iro-iroiro",document.getElementById("submitButton").onclick=i=>{bs()},S(i=>{document.getElementById(i).onclick=a=>{S(l=>{document.getElementById(l).classList.toggle("active")},y(["helpWindow","helpBarrier"]))}},y(["helpButton","helpBarrier","helpClose"]));const t=document.getElementById("rInput"),n=document.getElementById("gInput"),r=document.getElementById("bInput"),s=document.getElementById("stepInput"),o=document.getElementById("limitInput");t.oninput=i=>{ke(t.value,n.value,r.value,s.value,o.value)},n.oninput=i=>{ke(t.value,n.value,r.value,s.value,o.value)},r.oninput=i=>{ke(t.value,n.value,r.value,s.value,o.value)},s.oninput=i=>{ke(t.value,n.value,r.value,s.value,o.value)},o.oninput=i=>{ke(t.value,n.value,r.value,s.value,o.value)},document.onkeydown=i=>{ka(i)}}class Ra extends Te{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return m(v("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function vs(e,t,n,r){return new Ra(e,t,n,r)}function dt(e){const t=lt(n=>Z(n,511,!0,8),e.split("."),Uint8Array);return vs(ye(0,t),ye(1,t),ye(2,t),ye(3,t))}function ln(e){return Mi(dt,se(t=>ut(n=>n>=0?n<=255:!1,b(n=>Z(n,511,!1,32),Oe(".",t)))?new k(0,[t]):new k(1,[new Error("str",`${t} is out of range. Each value must be within 0 and 255`)]),se(t=>Cn("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),se(Ti,se(Sn,new k(0,[e]))))))}function Is(e,t){return vs(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class ne extends Te{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return m(v("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function jt(e,t,n,r){return new ne(e,t,n,r)}function Da(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class G extends Te{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return m(v("X = %f; Y = %f"))(t.X)(t.Y)}}function ve(e,t){return new G(e,t)}function un(e){const t=lt(De,e.split(","),Float64Array);return ve(At(t),Qt(t))}function Oa(e){return m(v("%f,%f"))(e.X)(e.Y)}function Un(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function Wa(e,t,n){return new G(n.X+e,n.Y+t)}class Fa extends Te{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Xe(e,t,n,r,s,o){const i=dt(n),a=dt(r);return new Fa(e,t,i,a,Is(a,i),s,o)}function Va(e){let t,n,r,s;const o=e.id;return Xe(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),jt(n.left,n.top,n.width-20,n.height-20)),ve(De((r=ze("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),De((s=ze("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ws(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note client",t.setAttribute("style",m(E("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(E("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(E("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(E("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M 28.182377 18.180962 L 28.182377 66.817481 L 91.817624 66.817481 L 91.817624 18.180962 L 28.182377 18.180962 z M 31.818789 21.819335 L 88.181212 21.819335 L 88.181212 63.181069 L 31.818789 63.181069 L 31.818789 21.819335 z M 42.618187 23.415904 C 42.372545 23.415904 42.154849 23.465785 41.967006 23.566931 C 41.782775 23.668078 41.626319 23.808011 41.496273 23.98863 C 41.369838 24.169248 41.274931 24.382089 41.209911 24.624119 C 41.148499 24.866148 41.117725 25.12918 41.117725 25.414558 C 41.117725 25.826369 41.17246 26.181726 41.284443 26.481553 C 41.40004 26.78138 41.565893 27.011055 41.782636 27.17 C 41.999379 27.328945 42.264372 27.409289 42.575036 27.409289 C 42.737593 27.409289 42.879798 27.395348 43.002618 27.370061 C 43.125439 27.348389 43.243995 27.310489 43.359591 27.256301 L 43.359591 26.773799 C 43.243995 26.820758 43.130293 26.858658 43.01831 26.88756 C 42.906326 26.916462 42.785498 26.93071 42.655453 26.93071 C 42.43871 26.93071 42.254062 26.871433 42.102342 26.752224 C 41.954235 26.629403 41.842805 26.456424 41.766945 26.232457 C 41.691085 26.004877 41.653184 25.734719 41.653184 25.420442 C 41.653184 25.2037 41.674253 25.002528 41.713987 24.818296 C 41.753723 24.634066 41.813001 24.473066 41.892473 24.335795 C 41.975558 24.194913 42.07759 24.086065 42.200411 24.010205 C 42.323232 23.930733 42.467708 23.892522 42.633878 23.892522 C 42.76031 23.892522 42.880828 23.909354 42.992812 23.945479 C 43.104795 23.977991 43.206827 24.020435 43.300749 24.071008 L 43.48512 23.631657 C 43.355074 23.563024 43.217723 23.510872 43.073228 23.474746 C 42.928733 23.435012 42.777131 23.415904 42.618187 23.415904 z M 36.939971 23.419827 C 36.712391 23.419827 36.51349 23.459999 36.343709 23.539472 C 36.173927 23.615331 36.04143 23.729033 35.947509 23.880753 C 35.857199 24.032473 35.812173 24.221976 35.812173 24.449556 C 35.812173 24.659073 35.852345 24.832053 35.931818 24.969323 C 36.01129 25.106593 36.113322 25.222567 36.239755 25.316489 C 36.3698 25.406798 36.506841 25.489725 36.647724 25.565585 C 36.803056 25.645058 36.93132 25.720548 37.036079 25.789183 C 37.140835 25.857818 37.22118 25.931348 37.275368 26.01082 C 37.329556 26.090292 37.355785 26.194596 37.355785 26.324642 C 37.355785 26.433013 37.334094 26.534735 37.287136 26.628657 C 37.240176 26.718964 37.164685 26.790221 37.063538 26.844409 C 36.966004 26.894982 36.835468 26.920903 36.669299 26.920903 C 36.524804 26.920903 36.378056 26.901796 36.229948 26.862062 C 36.085454 26.818711 35.938706 26.764287 35.790598 26.699267 L 35.790598 27.207266 C 35.917031 27.268677 36.058925 27.315976 36.214257 27.348486 C 36.36959 27.384611 36.521502 27.403405 36.673222 27.403405 C 36.864678 27.403405 37.037347 27.377484 37.189067 27.326911 C 37.340787 27.276338 37.466468 27.20508 37.567614 27.111158 C 37.67237 27.013624 37.752715 26.893107 37.806904 26.752224 C 37.864701 26.611342 37.893205 26.454886 37.893205 26.281491 C 37.893205 26.075586 37.857575 25.909732 37.785328 25.783299 C 37.716693 25.653253 37.619514 25.542134 37.493082 25.451824 C 37.37026 25.357903 37.223512 25.26785 37.053731 25.181153 C 36.902011 25.09807 36.774058 25.026812 36.669299 24.9654 C 36.564539 24.900378 36.481923 24.824887 36.424126 24.741802 C 36.369937 24.658718 36.343709 24.552142 36.343709 24.422096 C 36.343709 24.313725 36.365085 24.221401 36.408435 24.145541 C 36.451783 24.066069 36.515915 24.006481 36.602612 23.963132 C 36.692922 23.919782 36.806623 23.896444 36.943893 23.896444 C 37.063101 23.896444 37.181347 23.912969 37.296943 23.945479 C 37.416151 23.977989 37.536979 24.025287 37.6598 24.086699 L 37.838286 23.631657 C 37.690179 23.559409 37.54312 23.507256 37.395012 23.474746 C 37.246905 23.438621 37.095303 23.419827 36.939971 23.419827 z M 46.725331 23.459055 L 48.161067 27.370061 L 48.627877 27.370061 L 47.192142 23.459055 L 46.725331 23.459055 z M 33.113304 23.48063 L 33.113304 27.348486 L 33.635033 27.348486 L 33.635033 25.879407 L 34.084191 25.879407 C 34.362344 25.879407 34.587475 25.827254 34.760869 25.722496 C 34.934263 25.614125 35.061906 25.467066 35.141378 25.279222 C 35.224463 25.091379 35.264946 24.875955 35.264946 24.633926 C 35.264946 24.261851 35.170349 23.977442 34.982506 23.778761 C 34.798275 23.58008 34.516137 23.48063 34.133225 23.48063 L 33.113304 23.48063 z M 33.635033 23.963132 L 34.099882 23.963132 C 34.3094 23.963132 34.465855 24.017866 34.570615 24.129849 C 34.675373 24.241833 34.729487 24.414813 34.729487 24.649617 C 34.729487 24.833848 34.701297 24.980597 34.647109 25.088968 C 34.592923 25.197336 34.51454 25.275408 34.409781 25.322373 C 34.308635 25.369337 34.17872 25.392983 34.023388 25.392983 L 33.635033 25.392983 L 33.635033 23.963132 z M 49.35359 24.190652 L 49.35359 24.66727 L 50.83836 25.420442 L 49.35359 26.173615 L 49.35359 26.650232 L 51.41697 25.561662 L 51.41697 25.267454 L 49.35359 24.190652 z M 44.96989 24.38483 C 44.865133 24.38483 44.782206 24.417879 44.720794 24.482899 C 44.659382 24.54431 44.628608 24.636944 44.628608 24.763378 C 44.628608 24.889813 44.659382 24.986681 44.720794 25.051701 C 44.782204 25.113113 44.865131 25.143887 44.96989 25.143887 C 45.067422 25.143887 45.145806 25.113113 45.207218 25.051701 C 45.272238 24.990291 45.305287 24.895694 45.305287 24.769262 C 45.305287 24.635605 45.274514 24.538427 45.213102 24.477015 C 45.155304 24.415603 45.074648 24.38483 44.96989 24.38483 z M 44.96989 26.656116 C 44.865133 26.656116 44.782206 26.686889 44.720794 26.748301 C 44.659382 26.809711 44.628608 26.902346 44.628608 27.02878 C 44.628608 27.155215 44.659382 27.252083 44.720794 27.317104 C 44.785816 27.382124 44.868743 27.413212 44.96989 27.413212 C 45.067422 27.413212 45.145806 27.382124 45.207218 27.317104 C 45.272238 27.252081 45.305287 27.155213 45.305287 27.02878 C 45.305287 26.898733 45.274514 26.806098 45.213102 26.748301 C 45.151692 26.686889 45.071037 26.656116 44.96989 26.656116 z M 28.0745 68.021773 L 11.55962 101.05153 L 108.44038 101.05153 L 91.9255 68.021773 L 87.433923 68.021773 L 88.330277 69.814481 L 101.94034 97.034613 L 18.059657 97.034613 L 31.669723 69.814481 L 32.566077 68.021773 L 28.0745 68.021773 z M 34.894244 72.672222 L 32.03258 79.033001 L 42.271021 79.033001 L 43.765598 72.672222 L 34.894244 72.672222 z M 44.799249 72.672222 L 43.304672 79.033001 L 53.758866 79.033001 L 54.257058 72.672222 L 44.799249 72.672222 z M 55.26325 72.672222 L 54.765058 79.033001 L 65.234943 79.033001 L 64.73675 72.672222 L 55.26325 72.672222 z M 65.742942 72.672222 L 66.241134 79.033001 L 76.695328 79.033001 L 75.200751 72.672222 L 65.742942 72.672222 z M 76.234402 72.672222 L 77.728979 79.033001 L 87.967421 79.033001 L 85.105757 72.672222 L 76.234402 72.672222 z M 31.579499 80.037231 L 29.170916 85.391818 L 40.778405 85.391818 L 42.035655 80.037231 L 31.579499 80.037231 z M 43.069306 80.037231 L 41.812056 85.391818 L 53.262635 85.391818 L 53.680411 80.037231 L 43.069306 80.037231 z M 54.686602 80.037231 L 54.268827 85.391818 L 65.731174 85.391818 L 65.313398 80.037231 L 54.686602 80.037231 z M 66.31959 80.037231 L 66.737365 85.391818 L 78.187944 85.391818 L 76.930695 80.037231 L 66.31959 80.037231 z M 77.964346 80.037231 L 79.221595 85.391818 L 90.829085 85.391818 L 88.420501 80.037231 L 77.964346 80.037231 z M 28.717835 86.396048 L 25.856171 92.756827 L 39.048462 92.756827 L 40.543039 86.396048 L 28.717835 86.396048 z M 41.57669 86.396048 L 40.082113 92.756827 L 52.685987 92.756827 L 53.18418 86.396048 L 41.57669 86.396048 z M 54.190371 86.396048 L 53.692179 92.756827 L 66.307821 92.756827 L 65.809629 86.396048 L 54.190371 86.396048 z M 66.815821 86.396048 L 67.314013 92.756827 L 79.917887 92.756827 L 78.42331 86.396048 L 66.815821 86.396048 z M 79.456961 86.396048 L 80.951539 92.756827 L 94.143829 92.756827 L 91.282165 86.396048 L 79.456961 86.396048 z"),o.setAttribute("transform","matrix(0.99578756,0,0,0.99578756,0.25274623,0.63390548)");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 30.525391 21.326172 L 30.525391 64.583984 L 89.474609 64.583984 L 89.474609 21.326172 L 30.525391 21.326172 z M 32.341797 68.369141 L 17.003906 98.341797 L 102.99609 98.341797 L 87.658203 68.369141 L 32.341797 68.369141 z"),i.classList.add("background"),r.appendChild(s),r.appendChild(i),r.appendChild(o),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("br"),c=document.createElement("span");c.id=`${e.Id}IPv4`,c.className="device-prop ipv4 mono",c.contentEditable="true",c.textContent=`${H(e.IPv4)}`;const f=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}SubnetMask`,d.className="device-prop subnetmask mono",d.contentEditable="true",d.textContent=`${H(e.SubnetMask)}`;const g=document.createElement("span");return g.id=`${e.Id}Kind`,g.className="no-display",g.textContent="Client",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t.appendChild(c),t.appendChild(f),t.appendChild(d),t.appendChild(g),t}class Ga extends Te{constructor(t,n,r,s,o,i,a){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=a}toString(){const t=this;return m(v("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function _t(e,t,n,r,s,o){const i=b(dt,b(l=>l.trim(),Oe(";",n))),a=b(dt,b(l=>l.trim(),Oe(";",r)));return new Ga(e,t,i,a,xo(Is,a,i),s,o)}function ja(e){let t,n,r,s;const o=e.id;return _t(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),jt(n.left,n.top,n.width-20,n.height-20)),ve(De((r=ze("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),De((s=ze("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Es(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note router",t.setAttribute("style",m(E("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(E("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(E("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(E("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 60,10 h 50 V 45 H 10 V 10 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"),i.classList.add("inner"),r.appendChild(s),r.appendChild(o),r.appendChild(i),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("br"),c=document.createElement("span");c.id=`${e.Id}IPv4`,c.className="device-prop ipv4 mono",c.contentEditable="true";const f=F("; ",b(H,e.IPv4));c.textContent=f;const d=document.createElement("br"),g=document.createElement("span");g.id=`${e.Id}SubnetMask`,g.className="device-prop subnetmask mono",g.contentEditable="true";const p=F("; ",b(H,e.SubnetMask));g.textContent=p;const h=document.createElement("span");return h.id=`${e.Id}Kind`,h.className="no-display",h.textContent="Router",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t.appendChild(c),t.appendChild(d),t.appendChild(g),t.appendChild(h),t}class Xa extends Te{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return m(v("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function cn(e,t,n,r){return new Xa(e,t,n,r)}function Ya(e){let t,n,r,s;const o=e.id;return cn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),jt(n.left,n.top,n.width-20,n.height-20)),ve(De((r=ze("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),De((s=ze("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Bs(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note hub",t.setAttribute("style",m(E("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("viewBox",m(E("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width+20,e.Area.Height+20]))),n.setAttribute("width",m(E("%f%P()",[e.Area.Width+20]))),n.setAttribute("height",m(E("%f%P()",[e.Area.Height+20])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 60,10 h 50 V 45 H 10 V 10 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"),i.classList.add("inner"),r.appendChild(s),r.appendChild(o),r.appendChild(i),n.appendChild(r);const a=document.createElement("br"),l=document.createElement("span");l.id=`${e.Id}Name`,l.className="device-prop",l.contentEditable="true",l.textContent=`${e.Name}`;const u=document.createElement("span");return u.id=`${e.Id}Kind`,u.className="no-display",u.textContent="Hub",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}class fe extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function It(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new fe(0,[Va(e)]);case"Router":return new fe(1,[ja(e)]);case"Hub":return new fe(2,[Ya(e)]);default:return}}function Ua(e){switch(e.tag){case 1:return Es(e.fields[0]);case 2:return Bs(e.fields[0]);default:return ws(e.fields[0])}}function Kt(e){return e.tag===0}function St(e){return e.tag===1}function dn(e){return e.tag===2}function Kn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function Ls(e,t){switch(t.tag){case 0:return D(t.fields[0].IPv4,e);case 1:return X(e,t.fields[0].IPv4,{Equals:D,GetHashCode:rr});default:return!1}}function zn(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return We();default:return W(e.fields[0].NetworkAddress)}}function Ka(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function mn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}function Xt(){let e;const t=document.getElementsByClassName("selected");e=Array.from(t),e.forEach(n=>{n.classList.remove("selected")})}function wt(e,t){const n=t.target;Xt();let r;const s=e.querySelectorAll("path");r=Array.from(s),t.buttons===1&&Dt(n,r,{Equals:D,GetHashCode:$e})&&(e.classList.add("selected"),e.onlostpointercapture=o=>{e.onpointermove=i=>{}},e.onpointerup=o=>{e.onpointermove=i=>{}},e.onpointermove=o=>{if(o.buttons===1){const i=e.offsetTop+o.movementY,a=e.offsetLeft+o.movementX;e.setAttribute("style",m(E("top: %f%P()px; left: %f%P()px;",[i,a]))),e.draggable=!1,e.setPointerCapture(o.pointerId)}})}class Le extends Qe{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function za(e){switch(e){case"Client":return new Le(0,[]);case"Server":return new Le(1,[]);case"Router":return new Le(2,[]);case"Hub":return new Le(3,[]);case"ProxyServer":return new Le(4,[]);case"LANCable":return new Le(5,[]);default:return}}class Za extends Te{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=H(t.Kind),r=F(" ",b(H,t.Points));return m(v("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function fn(e,t,n,r,s,o){return new Za(e,t,n,r,s,o)}function Ja(e){let t;const n=e.id,r=document.getElementById(n+"Name").innerText,s=za(document.getElementById(n+"Kind").innerText);if(s!=null){const o=s;let i;const l=document.getElementById(n+"Svg").getBoundingClientRect();return i=jt(l.left,l.top,l.width,l.height),fn(n,o,r,b(un,Oe(" ",(t=document.getElementById(n+"Polyline"),t.getAttribute("points")))),i,ve(0,0))}else return}function Zn(e){const t=document.createElement("div");t.id=e.Id,t.className="lan-cable";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.setAttribute("viewBox",m(E("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",m(E("%f%P()px",[e.Area.Width]))),n.setAttribute("height",m(E("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${F(" ",b(Oa,e.Points))}`),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),a=document.createElement("span");a.id=`${e.Id}Name`,a.textContent=`${e.Name}`;const l=document.createElement("br"),u=document.createElement("span");return u.id=`${e.Id}Kind`,u.textContent=`${H(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(l),t.appendChild(u),t}function gn(e,t){let n;const r=b(s=>Wa(t.Area.X,t.Area.Y,s),t.Points);return en((n=Ka(e),s=>Da(n,s)),r)}function Jn(e,t){if(t.buttons===1){Xt(),e.parentElement.parentElement.parentElement.classList.add("selected"),e.onlostpointercapture=c=>{e.onpointermove=f=>{}};const r=lt(un,e.getAttribute("points").split(" ")),s=At(r),o=Qt(r),i=new G(t.offsetX,t.offsetY);let a,l;const u=[s,o];l=rn(c=>Un(i,c),u[0],u[1]),a=ft(l[0],l[1]),e.onpointermove=c=>{if(c.buttons===1){const f=lt(un,e.getAttribute("points").split(" ")),d=At(f),g=Qt(f),p=new G(c.offsetX,c.offsetY);let h,I;const _=[d,g];I=rn(M=>[M,Un(p,M)],_[0],_[1]);const L=I[1][0],B=I[0][0];h=I[0][1]<I[1][1]?[B,L]:[L,B];const A=h[0],C=h[1];a<5?e.setAttribute("points",m(E("%f%P(),%f%P() %f%P(),%f%P()",[A.X+c.movementX,A.Y+c.movementY,C.X,C.Y]))):e.setAttribute("points",m(E("%f%P(),%f%P() %f%P(),%f%P()",[A.X+c.movementX,A.Y+c.movementY,C.X+c.movementX,C.Y+c.movementY]))),e.draggable=!1,e.setPointerCapture(c.pointerId)}}}}function Qa(e,t,n){const r=br(n),s=yr(R(o=>!dn(o),n));return ko(o=>R(i=>dn(i)||St(r)?!0:s!=null?!D(_a(zn(s),zn(i)),We()):!1,R(i=>gn(i,o),R(i=>X(i,n,{Equals:D,GetHashCode:rr})===!1,t))),R(o=>gn(r,o),e))}function el(e,t,n){return b(r=>Ce(n,W(r)),Qa(e,t,n))}function tl(e,t,n,r,s){const o=(i,a,l,u,c)=>{const f=el(i,a,c);return en(d=>Ls(u,d),b(br,f))?!0:l===0?!1:en(Gs(o)(i)(a)(l-1)(u),f)};return o(e,t,n,r,W(s))}const _s=`\r
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
    `,nl=`
        <form id="inputArea" class="network-simulator" autocomplete="off">
            <label>
                送信元 IPv4:
                <input type="text" id="sourceInput" class="mono">
            </label>
            <label>
                送信先 IPv4:
                <input type="text" id="destinationInput" class="mono">
            </label>
            <button type="submit" id="submitButton" translate="no">ping</button>
        </form>
        <form>
            <button type="button" id="addClientButton" class="gray">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    クライアント
                </span>
            </button>
            <button type="button" id="addRouterButton" class="gray">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ルータ
                </span>
            </button>
            <button type="button" id="addHubButton" class="gray">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ハブ
                </span>
            </button>
            <button type="button" id="addLANCableButton" class="gray">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    LANケーブル
                </span>
            </button>
            <button type="button" id="deleteButton" class="gray">
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
            ${_s}
        </div>
        `;function Et(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Bt(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function zt(e){S(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=r.innerText,i=ln(o),a=document.getElementById("errorArea");if(a.innerText="",i.tag===1){const l=document.getElementById(e.id+"Name").innerText,u=at(o)?`${l} の ${n} を入力してください。`:Re(o)?`${l} の ${n} を入力してください。`:Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",o)?ut(c=>c>=0?c<=255:!1,b(c=>Z(c,511,!1,32),Oe(".",o)))?"不明なエラーです。":`${l} の ${n} の数値の範囲が正しくありません。`:`${l} の ${n} の形式が正しくありません。`;a.innerText=u,setTimeout(()=>{r.focus()},0)}})},b(t=>[t,document.getElementById(e.id+t)],y(["IPv4","SubnetMask"])))}function rl(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],a=i[0];return`
        <div class="history-container ${a}"">
            ${i[1]}<span class ="${a}">${mn(e)} [${s=t,H(s)}] -> ${o=n,H(o)} ${i[2]}</span>
        </div>
        `}function sl(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=Dt("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(a,l)=>a===l,GetHashCode:Je});switch(e.key){case"\\":{const a=b(l=>document.getElementById(l),y(["sourceInput","destinationInput"]));o||(J(In(u=>u.value==="",a),tt(a)).focus(),e.preventDefault());break}case"?":{S(a=>{document.getElementById(a).classList.toggle("active")},y(["helpWindow","helpBarrier"]));break}case"Delete":{const a=document.getElementById("playArea");let l;const u=document.getElementsByClassName("selected");l=Array.from(u),l.forEach(c=>{a.removeChild(c)});break}case"Escape":{o?S(a=>{document.getElementById(a).classList.remove("active")},y(["helpWindow","helpBarrier"])):Xt();break}}break}}}function ol(){document.title="ネットワークシミュレータ - taidalab";const e=document.querySelector("header");e.innerHTML=re,e.className="network-simulator",document.getElementById("hamburgerButton").onclick=d=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=d=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>ネットワークシミュレータ - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=nl,document.querySelector("#submitButton").className="network-simulator",document.getElementById("helpButton").onclick=d=>{S(g=>{document.getElementById(g).classList.toggle("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=d=>{S(g=>{document.getElementById(g).classList.remove("active")},y(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=d=>{S(g=>{document.getElementById(g).classList.remove("active")},y(["helpWindow","helpBarrier"]))};const t=document.getElementById("playArea"),n=t.getBoundingClientRect(),r=y([new fe(0,[Xe("device1","クライアント(1)","10.0.0.1","255.255.255.0",new ne(0,0,100,100),new G(0+n.left,100+n.top))]),new fe(0,[Xe("device2","クライアント(2)","10.0.0.2","255.255.255.0",new ne(0,0,100,100),new G(150+n.left,100+n.top))]),new fe(1,[_t("device3","ルータ(1)","10.0.0.254","255.255.255.0",new ne(0,0,100,35),new G(300+n.left,100+n.top))]),new fe(0,[Xe("device4","クライアント(3)","10.0.1.18","255.255.255.240",new ne(0,0,100,100),new G(450+n.left,100+n.top))]),new fe(0,[Xe("device5","クライアント(4)","10.0.1.19","255.255.255.240",new ne(0,0,100,100),new G(600+n.left,100+n.top))]),new fe(1,[_t("device6","ルータ(2)","10.0.1.30","255.255.255.240",new ne(0,0,100,35),new G(750+n.left,100+n.top))]),new fe(2,[cn("device7","ハブ(1)",new ne(0,0,100,35),new G(900+n.left,100+n.top))])]);b(d=>document.getElementById("playArea").appendChild(d),b(Ua,r));const s=b(d=>fn(m(E("lancable%d%P()",[d])),new Le(5,[]),m(E("LANケーブル(%d%P())",[d])),y([ve(t.offsetLeft+5+(d-1)*250,t.offsetTop+5),ve(t.offsetLeft+195+(d-1)*250,t.offsetTop+45)]),new ne(0,0,window.innerWidth,window.innerHeight),new G((d-1)*250+t.offsetLeft,t.offsetTop)),qe(Gt(1,1,4)));b(d=>document.getElementById("playArea").appendChild(d),b(Zn,s)),S(d=>{d.onpointerdown=g=>{wt(d,g)},Et(d),Bt(d)},b(d=>document.getElementById(d),b(Kn,r))),S(d=>{zt(d)},b(d=>document.getElementById(d),b(Kn,R(d=>Kt(d)?!0:St(d),r)))),S(d=>{const g=d.querySelector("polyline");g.onpointerdown=p=>{Jn(g,p)}},b(d=>document.getElementById(d),b(d=>d.Id,s)));const o=document.getElementById("submitButton");o.onclick=d=>{let g,p,h,I,_;d.preventDefault();const L=b($,R(ae=>ae!=null,b(It,y((g=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(g)))))),B=b($,R(ae=>ae!=null,b(Ja,y((p=document.getElementById("playArea").getElementsByClassName("lan-cable"),Array.from(p)))))),A=document.getElementById("errorArea"),C=document.getElementById("outputArea");A.innerText="",C.innerText="";const M=document.getElementById("sourceInput"),V=document.getElementById("destinationInput"),st=ln(M.value),je=ln(V.value);if(st.tag===0){const ae=st.fields[0];if(je.tag===0){const de=je.fields[0],Ne=In(me=>Ls(ae,me),R(me=>Kt(me)?!0:St(me),L));if(Ne!=null){const me=Ne;if(bn(R(bt=>gn(me,bt),B)))A.innerText=(h=mn(me),I=H(ae),m(v("%s [%s] はLANケーブルに繋がっていません。"))(h)(I));else{let bt;const Ss=mn(me),Cs=H(ae),As=H(de);bt=m(v('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(Ss)(Cs)(As),C.innerHTML=bt;const Ms=rl(me,ae,de,tl(B,L,128,de,me));switch(C.innerHTML=Ms,document.activeElement.id){case"sourceInput":{M.focus();break}case"destinationInput":{V.focus();break}}}}else A.innerText=(_=H(ae),m(v("IPv4 %s を持つデバイスが見つかりません。"))(_)),M.focus()}else{const de=at(V.value)||Re(V.value)?"送信先 IPv4 を入力してください。":Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",V.value)?ut(Ne=>Ne>=0?Ne<=255:!1,b(Ne=>Z(Ne,511,!1,32),Oe(".",V.value)))?"不明なエラーです。":"送信先 IPv4 の数値の範囲が正しくありません。":"送信先 IPv4 の形式が正しくありません。";A.innerText=de,V.focus()}}else{const ae=at(M.value)||Re(M.value)?"送信元 IPv4 を入力してください。":Ae("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",M.value)?ut(de=>de>=0?de<=255:!1,b(de=>Z(de,511,!1,32),Oe(".",M.value)))?"不明なエラーです。":"送信元 IPv4 の数値の範囲が正しくありません。":"送信元 IPv4 の形式が正しくありません。";A.innerText=ae,M.focus()}};const i=document.getElementById("addClientButton");i.onclick=d=>{let g,p;const h=document.getElementById("playArea"),I=h.getBoundingClientRect(),_=h.getElementsByClassName("lan-cable").item(0),L=Q(R(Kt,b($,R(C=>C!=null,b(It,y((g=h.getElementsByClassName("device-container"),Array.from(g))))))))+1|0,B=m(E("client%d%P()",[L]));p=ws(Xe(B,m(E("クライアント(%d%P())",[L])),"10.0.0.1","255.255.255.0",new ne(0,0,100,100),new G(0+I.left,0+I.top))),h.insertBefore(p,_);const A=document.getElementById(B);A.onpointerdown=C=>{wt(A,C)},Et(document.getElementById(B)),Bt(document.getElementById(B)),zt(document.getElementById(B))};const a=document.getElementById("addRouterButton");a.onclick=d=>{let g,p,h;const I=document.getElementById("playArea"),_=I.getBoundingClientRect(),L=I.getElementsByClassName("lan-cable").item(0),B=Q(R(St,b($,R(M=>M!=null,b(It,y((g=I.getElementsByClassName("device-container"),Array.from(g))))))))|0,A=m(E("router%d%P()",[B+1]));p=Es((h=B|0,_t(A,m(E("ルータ(%d%P())",[h+1])),`10.0.${h}.254`,"255.255.255.0",new ne(0,0,100,35),new G(0+_.left,0+_.top)))),I.insertBefore(p,L);const C=document.getElementById(A);C.onpointerdown=M=>{wt(C,M)},Et(document.getElementById(A)),Bt(document.getElementById(A)),zt(document.getElementById(A))};const l=document.getElementById("addHubButton");l.onclick=d=>{let g,p;const h=document.getElementById("playArea"),I=h.getBoundingClientRect(),_=h.getElementsByClassName("lan-cable").item(0),L=Q(R(dn,b($,R(C=>C!=null,b(It,y((g=h.getElementsByClassName("device-container"),Array.from(g))))))))+1|0,B=m(E("hub%d%P()",[L]));p=Bs(cn(B,m(E("ハブ(%d%P())",[L])),new ne(0,0,100,35),new G(0+I.left,0+I.top))),h.insertBefore(p,_);const A=document.getElementById(B);A.onpointerdown=C=>{wt(A,C)},Et(document.getElementById(B)),Bt(document.getElementById(B))};const u=document.getElementById("addLANCableButton");u.onclick=d=>{let g;const p=document.getElementById("playArea"),h=p.getElementsByClassName("lan-cable").length+1|0,I=m(E("cable%d%P()",[h]));g=Zn(fn(I,new Le(5,[]),m(E("LANケーブル(%d%P())",[h])),y([ve(p.offsetLeft+5,p.offsetTop+5),ve(p.offsetLeft+195,p.offsetTop+45)]),new ne(0,0,window.innerWidth,window.innerHeight),new G(p.offsetLeft,p.offsetTop))),p.appendChild(g);const L=document.getElementById(I).querySelector("polyline");L.onpointerdown=B=>{Jn(L,B)}};const c=document.getElementById("deleteButton");c.onclick=d=>{const g=document.getElementById("playArea");let p;const h=document.getElementsByClassName("selected");p=Array.from(h),p.forEach(I=>{g.removeChild(I)})};const f=document.querySelector("main");f.onpointerdown=d=>{d.buttons===1&&D(d.target,f)&&Xt()},document.onkeydown=d=>{sl(d)}}const il=`
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
                <h3><a href="${w}endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                ${kr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Wr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${jr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${Kr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${zr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${Qr}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${ns}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${rs}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${is}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${ls}
            </dd>

            <dt>
                <h3><a href="${w}endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${fs}
            </dd>

            <dt>
                <h3><a href="${w}iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${ys}
            </dd>

            <dt>
                <h3><a href="${w}network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${_s}
            </dd>
        </dl>`;function al(){document.title="about - taidalab";const e=document.querySelector("header");e.innerHTML=mt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>about - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=il,document.onkeydown=t=>{}}const ll=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`;function ul(){document.title="ご利用について - taidalab";const e=document.querySelector("header");e.innerHTML=mt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>ご利用について - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=ll,document.onkeydown=t=>{}}const cl=`\r
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
        </p>`;function dl(){document.title="情報の外部送信について - taidalab";const e=document.querySelector("header");e.innerHTML=mt,e.className="home",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>情報の外部送信について - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=cl,document.onkeydown=t=>{}}function Qn(e){const t=document.getElementById("numberInput"),n=Pe(t.value),r=rt(n);if(t.focus(),r.tag===0){document.getElementById("errorArea").innerHTML="";const s=Y(N(9," ",r.fields[0])),o=Fe(r);if(o.tag===0){const i=o.fields[0]|0,a=Y(N(3," ",q(i))),l=document.getElementById("outputArea"),u=He("<br>",y([Ge(i===e,s,2,a,10),l.innerHTML]));l.innerHTML=u,i!==e||(window.history.replaceState(Se(),"","http://localhost:8080/taidalab/"),ur())}}else document.getElementById("errorArea").innerHTML=Ve(q(e),n,r.fields[0])}function ml(){document.title="404: Page Not Found - taidalab";const e=document.querySelector("header");e.innerHTML=mt,e.className="not-found",document.getElementById("hamburgerButton").onclick=t=>{document.querySelector("nav").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=t=>{document.querySelector("nav").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},document.querySelector("#headerTitle").innerHTML='<span>404: Page Not Found - </span><span translate="no">taidalab</span>',document.querySelector("main").innerHTML=qi,document.querySelector("#submitButton").className="not-found",document.querySelector("#questionArea").innerHTML=Ee,document.getElementById("questionSpan").innerText=q(404),document.getElementById("srcRadix").innerText=m(v("(%d)"))(10),document.getElementById("dstRadix").innerText=q(2),document.getElementById("binaryRadix").innerHTML=m(v("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=t=>{t.preventDefault(),Qn(404)},document.getElementById("inputArea").onsubmit=t=>{t.preventDefault(),Qn(404)}}function Tn(e){const t=e.pathname;t===w?ur():t===`${w}endless-binary/dec2bin-1/`?Fi():t===`${w}endless-binary/dec2bin-2/`?Gi():t===`${w}endless-binary/bin2dec-1/`?Zi():t===`${w}endless-binary/bin2dec-2/`?ea():t===`${w}endless-binary/power-of-two-1/`?na():t===`${w}endless-binary/power-of-two-2/`?sa():t===`${w}endless-binary/addition/`?ua():t===`${w}endless-binary/subtraction/`?ca():t===`${w}endless-binary/complement/`?fa():t===`${w}endless-binary/dec2hex/`?va():t===`${w}endless-binary/hex2dec/`?Ea():t===`${w}iro-iroiro/`?xa():t===`${w}network-simulator/`?ol():t===`${w}about/`?al():t===`${w}terms/`?ul():t===`${w}information-policy/`?dl():ml()}function qn(){let e;const t=document.querySelector("nav").querySelectorAll("a");e=Array.from(t),e.forEach(o=>{o.classList.remove("current-location")});let n,r;r=e.filter(o=>o.pathname!==w).filter(o=>o.href!==""),n=r.filter(o=>o.href===window.location.href),n.forEach(o=>{o.classList.add("current-location")})}function Hn(e){e.onclick=t=>{let n;t.preventDefault(),window.history.pushState(Se(),"",e.href),Tn((n=e.href,new URL(n)));let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let a;return pn((a=i.href,new URL(a)))}),r.forEach(i=>{Hn(i)}),qn()}}function fl(){document.body.innerHTML="",document.body.innerHTML=eo,document.querySelector("footer").innerHTML=ro,document.querySelector("nav").innerHTML=to}window.addEventListener("DOMContentLoaded",e=>{let t;fl();const n=ar((t=window.location.href,new URL(t)));window.history.replaceState(Se(),"",n.href),Tn(n);let r,s;s=Array.from(document.links).filter(i=>i.href!==""),r=s.filter(i=>{let a;return pn((a=i.href,new URL(a)))}),r.forEach(i=>{Hn(i)}),qn()});window.addEventListener("popstate",e=>{let t;const n=ar((t=window.location.href,new URL(t)));window.history.replaceState(Se(),"",n.href),Tn(n);let r,s,o;const i=document.querySelector("nav").querySelectorAll("a");o=Array.from(i),s=o.filter(a=>a.href!==""),r=s.filter(a=>{let l;return pn((l=a.href,new URL(l)))}),r.forEach(a=>{Hn(a)}),qn()});
