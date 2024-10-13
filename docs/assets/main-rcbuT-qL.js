(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ot=Symbol("numeric");function Ps(e){return typeof e=="number"||typeof e=="bigint"||(e==null?void 0:e[ot])}function ks(e,t){return typeof e=="number"||typeof e=="bigint"?e<t?-1:e>t?1:0:e.CompareTo(t)}function Ns(e,t){return typeof e=="number"?e*t:typeof e=="bigint"?e*BigInt(t):e[ot]().multiply(t)}function $s(e,t){return typeof e=="number"?e.toFixed(t):typeof e=="bigint"?e:e[ot]().toFixed(t)}function Rn(e,t){return typeof e=="number"?e.toPrecision(t):typeof e=="bigint"?e:e[ot]().toPrecision(t)}function Dn(e,t){return typeof e=="number"?e.toExponential(t):typeof e=="bigint"?e:e[ot]().toExponential(t)}function On(e){return typeof e=="number"?(Number(e)>>>0).toString(16):typeof e=="bigint"?BigInt.asUintN(64,e).toString(16):e[ot]().toHex()}function Se(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function Ss(e){return e!=null&&typeof e.GetEnumerator=="function"}function Ms(e){return e!=null&&typeof e.CompareTo=="function"}function Ts(e){return e!=null&&typeof e.Equals=="function"}function rr(e){return e!=null&&typeof e.GetHashCode=="function"}function Ls(e){return e!=null&&typeof e.Dispose=="function"}function re(e){Ls(e)&&e.Dispose()}function tt(){return null}function St(e,t){var n,r;return((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===((r=Object.getPrototypeOf(t))==null?void 0:r.constructor)}class Hs{constructor(t){this.iter=t,this.current=tt()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function xe(e){return Ss(e)?e.GetEnumerator():new Hs(e[Symbol.iterator]())}function sr(e){return{next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function qn(e,t){return e.toString(10).padStart(t,"0")}function Wn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function x(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Be{static id(t){return Be.idMap.has(t)||Be.idMap.set(t,++Be.count),Be.idMap.get(t)}}Be.idMap=new WeakMap;Be.count=0;function it(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function D(e){return e*2654435761|0}function or(e){return it(e.toString(32))}function Ft(e){let t=0;const n=e.length;for(let r=0;r<n;r++){const s=e[r];t=(t<<5)+t^s}return t}function Rs(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return D(e);case"bigint":return or(e);case"string":return it(e);default:return D(Be.id(e))}}function Ds(e){return rr(e)?e.GetHashCode():Rs(e)}function Os(e){return e.getTime()}function qs(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Ye(e[r]);return Ft(n)}function Ye(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return D(e);case"bigint":return or(e);case"string":return it(e);default:{if(rr(e))return e.GetHashCode();if(Se(e))return qs(e);if(e instanceof Date)return Os(e);if(((t=Object.getPrototypeOf(e))==null?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>Ye(r));return Ft(n)}else return D(Be.id(e))}}}function ir(e){return Ds(e)}function Ws(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function ur(e,t){return Ws(e,t,ae)}function Fs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let s=0;s<n.length;s++)if(n[s]!==r[s]||!ae(e[n[s]],t[r[s]]))return!1;return!0}function ae(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:Ts(e)?e.Equals(t):Se(e)?Se(t)&&ur(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&ar(e,t)===0:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object&&Fs(e,t)}function ar(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Wn(e),r=t.getTime()+Wn(t)),n===r?0:n<r?-1:1}function ft(e,t){return e===t?0:e<t?-1:1}function Gs(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,s=0;r<e.length;r++)if(s=n(e[r],t[r]),s!==0)return s;return 0}function lr(e,t){return Gs(e,t,Ve)}function Xs(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let s=0,o=0;s<n.length;s++){const i=n[s];if(i!==r[s])return i<r[s]?-1:1;if(o=Ve(e[i],t[i]),o!==0)return o}return 0}function Ve(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:Ms(e)?e.CompareTo(t):Se(e)?Se(t)?lr(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?ar(e,t):-1:((n=Object.getPrototypeOf(e))==null?void 0:n.constructor)===Object?Xs(e,t):-1}const yn=new WeakMap;function ut(e){if(e==null)return null;const t=(n,r,s)=>e(n)(r)(s);return yn.set(t,e),t}function Fn(e){return yn.get(e)??(t=>n=>r=>e(t,n,r))}function Vs(e){return yn.get(e)??(t=>n=>r=>s=>o=>e(t,n,r,s,o))}function Ys(e){let t=0,n="[";for(const r of e){if(t===0)n+=$(r);else if(t===100){n+="; ...";break}else n+="; "+$(r);t++}return n+"]"}function $(e,t=0){var n;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return Ys(e);{const r=(n=Object.getPrototypeOf(e))==null?void 0:n.constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([s,o])=>s+" = "+$(o,t+1)).join(`
  `)+" }":(r==null?void 0:r.name)??""}}return String(e)}function js(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=$(t[0]),r=n.indexOf(" ")>=0):n=t.map(s=>$(s)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class gt{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return js(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Ye(n));return t.splice(0,0,D(this.tag)),Ft(t)}Equals(t){return this===t?!0:St(this,t)&&this.tag===t.tag?ur(this.fields,t.fields):!1}CompareTo(t){return this===t?0:St(this,t)?this.tag===t.tag?lr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Ks(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function Js(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+$(n)).join(`
  `)+" }"}function Zs(e){const t=Object.values(e).map(n=>Ye(n));return Ft(t)}function Us(e,t){if(e===t)return!0;if(St(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!ae(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function Qs(e,t){if(e===t)return 0;if(St(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=Ve(e[n[r]],t[n[r]]);if(s!==0)return s}return 0}else return-1}class Ne{toJSON(){return Ks(this)}toString(){return Js(this)}GetHashCode(){return Zs(this)}Equals(t){return Us(this,t)}CompareTo(t){return Qs(this,t)}}class nt{get contents(){return this.getter()}set contents(t){this.setter(t)}constructor(t,n){typeof n=="function"?(this.getter=t,this.setter=n):(this.getter=()=>t,this.setter=r=>{t=r})}}function zs(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+qn(n,2)+":"+qn(r,2)}function eo(e,t){return new Date(e.getTime()+(e.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+zs(e.offset??0)}function to(e,t){return e.kind===1?e.toUTCString():e.toLocaleString()}function no(e,t,n){return e.offset!=null?eo(e):to(e)}function wn(e,t=0){if(t&-284)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Compiled, Singleline and ECMAScript");let n="gu";return n+=t&1?"i":"",n+=t&2?"m":"",n+=t&16?"s":"",new RegExp(e,n)}function ro(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function cr(e,t,n=0){return e.lastIndex=n,e.test(t)}function so(e,t,n=0){return e.lastIndex=n,e.exec(t)}const pt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,mt=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function oo(e,t){return ks(e,t)<0}function g(e){return{input:e,cont:io(e)}}function B(e,t){let n=0,r=0,s="";mt.lastIndex=0;let o=mt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;s+=e.substring(r,i).replace(/%%/g,"%");const[,,u,l,a,c]=o;r=mt.lastIndex,s+=pr(t[n++],u,l,a,c),mt.lastIndex=r-1,o=mt.exec(e)}return s+=e.substring(r).replace(/%%/g,"%"),s}function dr(e,t){return typeof t=="string"?e(t):t.cont(e)}function Pt(e){return dr(t=>console.log(t),e)}function m(e){return dr(t=>t,e)}function pr(e,t,n,r,s){let o="";if(t=t||"",s=s||"",Ps(e))switch(s.toLowerCase()!=="x"&&(oo(e,0)?(e=Ns(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=r==null?null:parseInt(r,10),s){case"f":case"F":r=r??6,e=$s(e,r);break;case"g":case"G":e=r!=null?Rn(e,r):Rn(e);break;case"e":case"E":e=r!=null?Dn(e,r):Dn(e);break;case"x":e=On(e);break;case"X":e=On(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=no(e):e=$(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=o+e;else{const i=t.indexOf("0")>=0,u=t.indexOf("-")>=0,l=u||!i?" ":"0";l==="0"?(e=rn(e,n-o.length,l,u),e=o+e):e=rn(o+e,n,l,u)}return e}function mr(e,t,n,r="",s=-1){return(...o)=>{let i=r;const u=t.slice(),l=n.slice();for(const a of o){const[,,c,d,p,f]=l[0];let h=d;if(s>=0)h=s,s=-1;else if(h==="*"){if(a<0)throw new Error("Non-negative number required");s=a;continue}i+=u[0],i+=pr(a,c,h,p,f),u.splice(0,1),l.splice(0,1)}return l.length===0?(i+=u[0],e(i)):mr(e,u,l,i,s)}}function io(e){return t=>{pt.lastIndex=0;const n=[],r=[];let s=0,o=pt.exec(e);for(;o;){const i=o.index+(o[1]||"").length;n.push(e.substring(s,i).replace(/%%/g,"%")),r.push(o),s=pt.lastIndex,pt.lastIndex-=1,o=pt.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(s).replace(/%%/g,"%")),mr(t,n,r))}}function fr(e){return typeof e!="string"||e.length===0}function H(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function rn(e,t,n,r){n=n||" ",t=t-e.length;for(let s=0;s<t;s++)e=r?e+n:n+e;return e}function uo(e,t,n){return rn(e,t,n)}function En(e,t,n){return e.replace(new RegExp(ro(t),"g"),n)}const ao='4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？',lo=`\r
            <div class="body-container">\r
                <div id="barrier" class="barrier"></div>\r
                <div id="helpBarrier" class="help-barrier"></div>\r
                <header></header>\r
                <div class="main-container">\r
                    <aside></aside>\r
                    <main></main>\r
                </div>\r
                <footer></footer>\r
            </div>`,J=`\r
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
            `,Ue=`\r
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
            `,co=`\r
            <ul>\r
                <details>\r
                    <summary>\r
                        <a class="home" id="asideEndlessBinary">10進数↔︎2進数の反復練習</a>\r
                    </summary>\r
                    <ul>\r
                        <li><a class="dec2bin" href="/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>\r
                        <li><a class="dec2bin" href="/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>\r
                        <li><a class="bin2dec" href="/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>\r
                        <li><a class="bin2dec" href="/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>\r
                        <li><a class="power-of-two" href="/endless-binary/power-of-two-1/">2のn乗</a></li>\r
                        <li><a class="power-of-two" href="/endless-binary/power-of-two-2/">2のn乗-1</a></li>\r
                        <li><a class="addition" href="/endless-binary/addition/">加算</a></li>\r
                        <li><a class="subtraction" href="/endless-binary/subtraction/">減算</a></li>\r
                        <li><a class="complement" href="/endless-binary/complement/">補数</a></li>\r
                        <li><a class="dec2hex" href="/endless-binary/dec2hex/">10進数→16進数</a></li>\r
                        <li><a class="hex2dec" href="/endless-binary/hex2dec/">16進数→10進数</a></li>\r
                    </ul>\r
                </details>\r
                <li><a class="iro-iroiro" id="asideIroIroiro" href="/iro-iroiro/">色いろいろ</a></li>\r
                <li><a class="network-simulator" id="asideNetworkSimulator" href="/network-simulator/">ネットワークシミュレータ</a></li>\r
                <li><a class="ctc" id="asideSoon" href="#">Coming soon...</a></li>\r
            </ul>\r
            <ul>\r
                <li><a class="home" id="asideAbout" href="/">Home</a></li>\r
                <li><a class="home" id="asideAbout" href="/about/">About</a></li>\r
                <li><a class="home" id="asideTerms" href="/terms/">ご利用について</a></li>\r
                <li><a class="home" id="asideTerms" href="/information-policy/">情報の外部送信について</a></li>\r
            </ul>\r
            <ul>\r
                <li><a class="home" id="asideOdaibako" href="https://odaibako.net/u/taidalog">お題箱</a></li>\r
                <li><a class="home" id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>\r
            </ul>`,he='<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？',po="Version 4.6.3",mo=m(g(`\r
                <small class="footer-container">\r
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>\r
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>\r
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>\r
                </small>`))(po),Ut=`\r
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
            </div>`,hr=`\r
        <div class="home-center">\r
            <p>\r
                <span class="home-title" translate="no">taidalab</span><br>\r
                <span class="home-subtitle">「情報I」学習サイト</span>\r
            </p>\r
        </div>`;class rt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ye(this.value)}Equals(t){return t==null?!1:ae(this.value,t instanceof rt?t.value:t)}CompareTo(t){return t==null?1:Ve(this.value,t instanceof rt?t.value:t)}}function C(e){if(e==null)throw new Error("Option has no value");return e instanceof rt?e.value:e}function G(e){return e==null||e instanceof rt?new rt(e):e}function Q(e,t){return e!=null?C(e):t}function Ae(e,t){return t!=null?G(e(C(t))):void 0}function fo(e){throw new Error(e)}function ho(e,t){return typeof e=="function"?new e(t):new Array(t)}function bo(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Pe(e){const t=new nt(0);if(bo(e,t))return t.contents;throw new Error(`The input string ${e} was not in a correct format.`)}function sn(e,t){return e>t?e:t}function ke(e,t){return e<t?e:t}const go="The index was outside the range of elements in the collection.",Gt="Collection was empty.",yo="The input must be non-negative.",wo="An index satisfying the predicate was not found in the collection.",br="The input sequence has an insufficient number of elements.";function Eo(e,t,n,r){const s=t|0;return e.fill(r,s,s+n)}function Io(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return _e(e.length-1,e)}function In(e,t,n){const r=t.length|0,s=ho(n,r);for(let o=0;o<=r-1;o++)yr(s,o,e(_e(o,t)));return s}function vo(e,t,n,r,s){const o=Q(n,0)|0,i=Q(Ae(l=>o+l,r),e.length)|0;return(l=>{e:for(;;){const a=l;if(a>=i)return-1;if(s.Equals(t,_e(a,e)))return a|0;l=a+1;continue e}})(o)|0}function vn(e,t,n){return vo(t,e,void 0,void 0,n)>=0}function Bo(e){return e.slice().reverse()}function Ao(e,t){if(t.length===0)return[[]];{const n=[];for(let r=0;r<=~~Math.ceil(t.length/e)-1;r++){let s;const o=r*e|0;s=t.slice(o,o+e),n.push(s)}return n}}function gr(e){if(e.length===0)throw new Error("The input array was empty\\nParameter name: array");return _e(0,e)}function _e(e,t){if(e<0||e>=t.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return t[e]}function yr(e,t,n){if(t<0||t>=e.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");e[t]=n}class ee extends Ne{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+H("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((s,o)=>{e:for(;;){const i=s,u=o,l=i.tail,a=u.tail;if(l!=null)if(a!=null){const c=C(l),d=C(a);if(ae(i.head,u.head)){s=c,o=d;continue e}else return!1}else return!1;else return a==null}})(n,t)}GetHashCode(){return((r,s,o)=>{e:for(;;){const i=r,u=s,l=o,a=l.tail;if(a!=null){const c=C(a);if(i>18)return u|0;r=i+1,s=(u<<1)+Ye(l.head)+631*i,o=c;continue e}else return u|0}})(0,0,this)|0}toJSON(){const t=this;return Array.from(t)}CompareTo(t){return((s,o)=>{e:for(;;){const i=s,u=o,l=i.tail,a=u.tail;if(l!=null)if(a!=null){const c=C(l),d=C(a),p=Ve(i.head,u.head)|0;if(p===0){s=c,o=d;continue e}else return p|0}else return 1;else return a!=null?-1:0}})(this,t)|0}GetEnumerator(){return Co(this)}[Symbol.iterator](){return sr(xe(this))}"System.Collections.IEnumerable.GetEnumerator"(){return xe(this)}}class _o{constructor(t){this.xs=t,this.it=this.xs,this.current=tt()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(n!=null){const r=C(n);return t.current=t.it.head,t.it=r,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=tt()}Dispose(){}}function Co(e){return new _o(e)}function L(){return new ee(tt(),void 0)}function yt(e,t){return new ee(e,t)}function X(e){return e.tail==null}function wr(e){return((n,r)=>{e:for(;;){const s=n,i=r.tail;if(i!=null){n=s+1,r=C(i);continue e}else return s|0}})(0,e)|0}function le(e){if(e.tail!=null)return e.head;throw new Error(Gt+"\\nParameter name: list")}function S(e){const t=e.tail;if(t!=null)return C(t);throw new Error(Gt+"\\nParameter name: list")}function xo(e,t){return((r,s)=>{e:for(;;){const o=r,i=s,u=i.tail;if(u!=null){if(o===t)return i.head;r=o+1,s=C(u);continue e}else throw new Error(go+"\\nParameter name: index")}})(0,e)}function Po(){throw new Error(wo)}function at(){return L()}function He(e,t){return yt(e,t)}function V(e){return yt(e,L())}function Bn(e){return X(e)}function Z(e){return wr(e)}function Re(e){return le(e)}function An(e){return S(e)}function Er(e){e:for(;;){const t=e;if(X(t))return;{const n=S(t);if(X(n))return G(le(t));e=n;continue e}}}function Xt(e){const t=Er(e);if(t==null)throw new Error(Gt);return C(t)}function Ir(e){const t=wr(e)|0,n=Eo(new Array(t),0,t,null);return((s,o)=>{e:for(;;){const i=s,u=o;if(!X(u)){yr(n,i,le(u)),s=i+1,o=S(u);continue e}break}})(0,e),n}function ce(e,t,n){let r=t,s=n;for(;!X(s);)r=e(r,Re(s)),s=S(s);return r}function st(e){return ce((t,n)=>yt(n,t),L(),e)}function ko(e,t,n){return((s,o,i)=>{e:for(;;){const u=s,l=o,a=i;if(X(a))return l;s=u+1,o=e(u,l,le(a)),i=S(a);continue e}})(0,t,n)}function No(e,t,n,r){let s=t,o=n,i=r;for(;!X(o)&&!X(i);)s=e(s,le(o),le(i)),o=S(o),i=S(i);return s}function A(e,t){ce((n,r)=>{e(r)},void 0,t)}function $o(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=yt(_e(r,e),n);return n}function w(e){return $o(e,L())}function So(e){let t,n;if(Se(e))return w(e);if(e instanceof ee)return e;{const r=L();let s=r;const o=xe(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const l=o["System.Collections.Generic.IEnumerator`1.get_Current"]();s=(t=s,n=new ee(l,void 0),t.tail=n,n)}}finally{re(o)}const i=s,u=L();return i.tail=u,S(r)}}function Me(e,t){return ce((n,r)=>yt(r,n),t,st(e))}function Mo(e,t){let n,r;const s=L();let o=s,i=t;for(;!X(i);){let a=e(le(i));for(;!X(a);)o=(n=o,r=new ee(le(a),void 0),n.tail=r,r),a=S(a);i=S(i)}const u=o,l=L();return u.tail=l,S(s)}function lt(e,t){const n=L(),r=ko((o,i,u)=>{const l=new ee(e(o,u),void 0);return i.tail=l,l},n,t),s=L();return r.tail=s,S(n)}function E(e,t){const n=L(),r=ce((o,i)=>{const u=new ee(e(i),void 0);return o.tail=u,u},n,t),s=L();return r.tail=s,S(n)}function To(e,t,n){const r=L(),s=No((i,u,l)=>{const a=new ee(e(u,l),void 0);return i.tail=a,a},r,t,n),o=L();return s.tail=o,S(r)}function Lo(e,t){return(r=>{e:for(;;){const s=r;if(X(s))return;{const o=e(le(s));if(o==null){r=S(s);continue e}else return o}}})(t)}function _n(e,t){return Lo(n=>e(n)?G(n):void 0,t)}function Cn(e,t){return((r,s)=>{e:for(;;){const o=r,i=s;if(X(i))return;if(e(le(i)))return o;r=o+1,s=S(i);continue e}})(0,t)}function Ho(e,t){const n=Cn(e,t);return n==null?(Po(),-1):C(n)|0}function kt(e,t){return xo(t,e)}function T(e,t){const n=L(),r=ce((o,i)=>{if(e(i)){const u=new ee(i,void 0);return o.tail=u,u}else return o},n,t),s=L();return r.tail=s,S(n)}function Y(e,t,n){return Cn(r=>n.Equals(e,r),t)!=null}function xn(e,t){if(X(t))throw new Error(Gt);return ce(e,Re(t),An(t))}function vr(e,t){return ce((n,r)=>n&&e(r),!0,t)}function on(e,t){return Cn(e,t)!=null}function Ro(e,t){const n=Ir(t);return n.sort(e),w(n)}function Gn(e,t){return Ro((n,r)=>t.Compare(n,r),e)}function Do(e,t){return xn((n,r)=>t.Compare(r,n)>0?r:n,e)}function Br(e,t){return xn((n,r)=>t.Compare(r,n)>0?n:r,e)}function Oo(e,t){e:for(;;){const n=e,r=t;if(n<=0)return r;if(X(r))throw new Error(br+"\\nParameter name: list");e=n-1,t=S(r);continue e}}function qo(e,t){if(e<0)throw new Error(yo+"\\nParameter name: count");const n=(i,u,l)=>{let a;e:for(;;){const c=i,d=u,p=l;if(c<=0)return d;if(X(p))throw new Error(br+"\\nParameter name: list");i=c-1,u=(a=new ee(le(p),void 0),d.tail=a,a),l=S(p);continue e}},r=L(),s=n(e,r,t),o=L();return s.tail=o,S(r)}function Pn(e,t){const n=(i,u,l)=>{let a;e:for(;;){const c=i,d=u,p=l;if(c<=0)return d;if(X(p))return d;i=c-1,u=(a=new ee(le(p),void 0),d.tail=a,a),l=S(p);continue e}},r=L(),s=n(e,r,t),o=L();return s.tail=o,S(r)}function Vt(e,t,n){const r=Z(n)|0;let s;const o=Q(e,0)|0;s=o<0?0:o;let i;const u=Q(t,r-1)|0;return i=u>=r?r-1:u,i<s?L():qo(i-s+1,Oo(s,n))}const Wo="Enumeration already finished.",Fo="Enumeration has not started. Call MoveNext.",Ar="The input sequence has an insufficient number of elements.",Go="Reset is not supported on this enumerator.";function Xo(){throw new Error(Go)}function kn(){throw new Error(Fo)}function un(){throw new Error(Wo)}class Vo{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const s=xe(t);try{for(;n<4&&s["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+$(s["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{re(s)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return sr(xe(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function Yo(e){return new Vo(e)}class jo{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){Xo()}Dispose(){this.dispose()}}function Yt(e,t,n){return new jo(e,t,n)}function Ko(e){let t,n,r=!1,s=!1,o;const i=()=>{if(s=!0,n!=null){const u=C(n);try{re(u)}finally{n=void 0}}if(t!=null){const u=C(t);try{re(u)}finally{t=void 0}}};return Yt(()=>(r?s&&un():kn(),o!=null?C(o):un()),()=>{let u;if(r||(r=!0),s)return!1;{let l;for(;l==null;){const a=t,c=n;if(a!=null)if(c!=null){const d=C(c);if(d["System.Collections.IEnumerator.MoveNext"]())o=G(d["System.Collections.Generic.IEnumerator`1.get_Current"]()),l=!0;else try{re(d)}finally{n=void 0}}else{const d=C(a);d["System.Collections.IEnumerator.MoveNext"]()?n=(u=d["System.Collections.Generic.IEnumerator`1.get_Current"](),xe(u)):(i(),l=!1)}else t=xe(e)}return C(l)}},()=>{s||i()})}function Jo(e,t){return Yt(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{re(t)}finally{}})}function Zo(e,t,n){let r=!1,s,o=G(e());const i=()=>{if(o!=null){const l=C(o);try{n(l)}finally{o=void 0}}},u=()=>{try{i()}finally{s=void 0}};return Yt(()=>(r||kn(),s!=null?C(s):un()),()=>{if(r||(r=!0),o!=null){const l=C(o);let a;try{a=t(l)}catch(c){throw u(),c}return a!=null?(s=a,!0):(u(),!1)}else return!1},i)}function Uo(e,t){let n,r=t;return Yt(()=>{if(n!=null){const s=C(n)[0];return C(n)[1],s}else return kn()},()=>(n=e(r),n!=null?(C(n)[0],r=C(n)[1],!0):!1),()=>{})}function Qo(e,t){t==null&&fo(e)}function wt(e){return Yo(e)}function je(e){return Qo("source",e),xe(e)}function Et(e){return wt(()=>xe(e()))}function _r(e){return wt(()=>Ko(e))}function Cr(e,t){return wt(()=>Uo(e,t))}function xr(e){return e instanceof ee?Ir(e):Array.from(e)}function De(e){return Se(e)?w(e):e instanceof ee?e:So(e)}function Nn(e,t,n){return wt(()=>Zo(e,t,n))}function zo(e,t){return _r([e,t])}function ei(e,t){return Nn(()=>je(t),n=>{let r;for(;r==null&&n["System.Collections.IEnumerator.MoveNext"]();)r=e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return r},n=>{re(n)})}function ti(e,t){return ei(n=>{if(e(n))return G(n)},t)}function ni(e,t,n){const r=je(n);try{let s=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)s=e(s,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return s}finally{re(r)}}function ri(e,t){return Cr(n=>n<e?[t(n),n+1]:void 0,0)}function Xn(e,t){ni((n,r)=>(e(n,r),n+1|0),0,t)}function si(e){const t=je(e);try{const n=r=>{e:for(;;){const s=r;if(t["System.Collections.IEnumerator.MoveNext"]()){r=t["System.Collections.Generic.IEnumerator`1.get_Current"]();continue e}else return s;break}};return t["System.Collections.IEnumerator.MoveNext"]()?G(n(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0}finally{re(t)}}function oi(e){const t=si(e);if(t==null)throw new Error(Ar+"\\nParameter name: source");return C(t)}function ii(e){if(Se(e))return e.length|0;if(e instanceof ee)return Z(e)|0;{const t=je(e);try{let n=0;for(;t["System.Collections.IEnumerator.MoveNext"]();)n=n+1|0;return n|0}finally{re(t)}}}function Ee(e,t){return Nn(()=>je(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?G(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{re(n)})}function ui(e,t){return ri(e,n=>t)}function Pr(e){return Et(()=>Bo(xr(e)))}function ai(e,t){return wt(()=>{const n=je(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Ar+"\\nParameter name: source");return Jo(()=>{},n)}catch(r){throw re(n),r}})}function li(e,t){return Et(()=>{let n=!0;return ti(r=>(n&&(n=e(r)),!n),t)})}function ci(e){return ai(1,e)}function di(e,t){return Nn(()=>je(t),n=>n["System.Collections.IEnumerator.MoveNext"]()&&e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())?G(n["System.Collections.Generic.IEnumerator`1.get_Current"]()):void 0,n=>{re(n)})}function kr(e,t){return Et(()=>_r(Ee(e,t)))}function pi(e,t){return Et(()=>Ao(e,xr(t)))}function Vn(e,t,n){const r=e-ii(n)|0;return r<1?n:zo(ui(r,t),n)}function Nr(e){return H("",Ee(t=>t,ci(e.split(""))))}function mi(e){return oi(e.split(""))}function fi(e,t,n){return En(n,e,t)}function se(e,t,n){return uo(n,e,t)}function Mt(e){return H("",Ee(t=>t,Pr(e.split(""))))}function hi(e,t){return Ee(n=>H("",n),Ee(n=>In(r=>r,n),pi(e,t.split(""))))}function bi(e,t){return Ee(Mt,Pr(hi(e,Mt(t))))}function ge(e,t){return w(t.split(e))}function gi(e,t){return[H("",Ee(n=>n,di(n=>!e(n),t.split("")))),H("",Ee(n=>n,li(n=>!e(n),t.split(""))))]}function yi(e){return new z(0,[e])}function $r(e){return new z(1,[e])}class z extends gt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Ok","Error"]}}function Sr(e,t){return t.tag===0?yi(e(t.fields[0])):$r(t.fields[0])}function ye(e,t){return t.tag===0?e(t.fields[0]):$r(t.fields[0])}var an;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(an||(an={}));function wi(e,t){const[,n,r,s]=e;return{sign:n||"",prefix:r||"",digits:s,radix:t}}function Yn(e,t){switch(t){case 8:return e?[0,255]:[-128,127];case 16:return e?[0,65535]:[-32768,32767];case 32:return e?[0,4294967295]:[-2147483648,2147483647];default:throw new Error("Invalid bit size.")}}function Ei(e){switch(e){case 2:return/[^0-1]/;case 8:return/[^0-7]/;case 10:return/[^0-9]/;case 16:return/[^0-9a-fA-F]/;default:throw new Error("Invalid Base.")}}function Ii(e,t){if(t&an.AllowHexSpecifier)return 16;switch(e){case"0b":case"0B":return 2;case"0o":case"0O":return 8;case"0x":case"0X":return 16;default:return 10}}function vi(e,t,n){const s=/^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(e.replace(/_/g,""));if(s!=null){const[,,o,i]=s;if(n=n||Ii(o,t),!Ei(n).test(i))return wi(s,n)}return null}function F(e,t,n,r,s){const o=vi(e,t,s);if(o!=null){let i=Number.parseInt(o.sign+o.digits,o.radix);if(!Number.isNaN(i)){const[u,l]=Yn(!0,r);!n&&o.radix!==10&&i>=u&&i<=l&&(i=i<<32-r>>32-r);const[a,c]=Yn(n,r);if(i>=a&&i<=c)return i}}throw new Error(`The input string ${e} was not in a correct format.`)}function Tt(e,t,n,r,s){try{return s.contents=F(e,t,n,r),!0}catch{return!1}}function Bi(e,t,n){const r=~~(e/t),s=e%t;return n===void 0?[r,s]:(n.contents=s,r)}class jt extends gt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["NullOrEmpty","EmptyString","WrongFormat","OutOfRange"]}}function Ai(e){return fr(e)?new z(1,[new jt(0,[])]):new z(0,[e])}function Kt(e){return e===""?new z(1,[new jt(1,[])]):new z(0,[e])}function Jt(e,t){return cr(wn(e),t)?new z(0,[t]):new z(1,[new jt(2,[])])}function Mr(e){return Sr(t=>F(t,511,!1,32),ye(t=>Jt("^[0-9]+$",t),ye(Kt,new z(0,[e]))))}function j(e){return x(e,2)}function ln(e){return x(e,16)}function Ie(e){return ye(t=>Jt("^[01]+$",t),ye(Kt,new z(0,[e])))}function de(e){return F(e,511,!1,32,2)}function _i(e){return ye(t=>Jt("^[0-9A-Fa-f]+$",t),ye(Kt,new z(0,[e])))}function $n(e){return F(e,511,!1,32,16)}const Ci=`\r
            <form class="button-container">\r
                <button type="button" id="buttonED2B1" class="btn course-button-d2b1 display-order-1">10進数→2進数 (1)</button>\r
                <button type="button" id="buttonED2B2" class="btn course-button-d2b2 display-order-2">10進数→2進数 (2)</button>\r
                <button type="button" id="buttonEB2D1" class="btn course-button-b2d1 display-order-3">2進数→10進数 (1)</button>\r
                <button type="button" id="buttonEB2D2" class="btn course-button-b2d2 display-order-4">2進数→10進数 (2)</button>\r
                <button type="button" id="buttonEPOT1" class="btn course-button-pot1 display-order-5">2のn乗</button>\r
                <button type="button" id="buttonEPOT2" class="btn course-button-pot2 display-order-6">2のn乗-1</button>\r
                <button type="button" id="buttonEBAD" class="btn course-button-add display-order-7">加算</button>\r
                <button type="button" id="buttonEBSB" class="btn course-button-sub display-order-8">減算</button>\r
                <button type="button" id="buttonECMP" class="btn course-button-cmp display-order-9">補数</button>\r
                <button type="button" id="buttonED2H" class="btn course-button-d2h display-order-10">10進数→16進数</button>\r
                <button type="button" id="buttonEH2D" class="btn course-button-d2h display-order-11">16進数→10進数</button>\r
            </form>`;function ne(e,t){return`
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
            </div>`}const xi=`\r
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
            </div>`;function Oe(e,t,n){switch(n.tag){case 2:return m(g(`<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`))(t);case 3:return m(g(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return m(g('<span class="warning">%s の2進法表記を入力してください。</span>'))(e)}}function Tr(e,t,n){switch(n.tag){case 2:return m(g(`<span class="warning">'%s' は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>`))(t);case 3:return m(g(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return m(g('<span class="warning">%s の10進法表記を入力してください。</span>'))(e)}}function Pi(e,t,n){switch(n.tag){case 2:return m(g(`<span class="warning">'%s' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。</span>`))(t);case 3:return m(g(`<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>`))(t);default:return m(g('<span class="warning">%s の16進法表記を入力してください。</span>'))(e)}}function ct(e,t,n,r,s){const o=e?"history history-correct":"history history-wrong";return m(B(`\r
        <div class="history-container %s%P()"">\r
            %s%P()<span class ="%s%P()">%s%P()<sub>(%d%P())</sub> = %s%P()<sub>(%d%P())</sub></span>\r
        </div>\r
        `,[o,e?'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>':'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',o,t,n,r,s]))}function Lr(e,t){return H(" ",De(bi(e,t)))}function Zt(e,t){const n=Vn(8,"",Ee(s=>s,j(e).split(""))),r=Vn(8,"",Ee(s=>s,j(t).split("")));Xn((s,o)=>{let i;const u=m(B("firstRowDigit%d%P()",[8-s]));i=document.getElementById(u),i.innerText=o},n),Xn((s,o)=>{let i;const u=m(B("secondRowDigit%d%P()",[8-s]));i=document.getElementById(u),i.innerText=o},r)}function we(e){const t=e*2500-500|0;return Math.abs(t)|0}function Hr(e,t){return[G(e),1,G(t),void 0]}function Rr(e,t){let n;const r=st(t);return Bn(r)?V([void 0,void 0,void 0,void 0]):st(He((n=Re(r),[void 0,void 0,G(n[0]),G(n[1])]),E(s=>[G(e),1,G(s[0]),G(s[1])],An(r))))}function oe(e){let t;if(document.activeElement.id==="numberInput")e.key==="Escape"&&document.getElementById("numberInput").blur();else{const n=vn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(s,o)=>s===o,GetHashCode:it});switch(e.key){case"\\":{n||(document.getElementById("numberInput").focus(),e.preventDefault());break}case"?":{A(s=>{document.getElementById(s).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{n&&A(s=>{document.getElementById(s).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}}}function ki(){return Math.random()}function Qt(e,t){if(t<e)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(t-e))+e}function Ni(e){if(e==null)throw new Error("Buffer cannot be null");for(let t=0;t<e.length;t+=6){let n=Math.floor(Math.random()*281474976710656);const r=Math.floor(n/16777216);for(let s=0;s<6&&t+s<e.length;s++)s===3&&(n=r),e[t+s]=n&255,n>>>=8}}class $i{constructor(){}Next0(){return Qt(0,2147483647)}Next1(t){return Qt(0,t)}Next2(t,n){return Qt(t,n)}NextDouble(){return ki()}NextBytes(t){Ni(t)}}function Si(){return new $i}function Dr(){return Si()}function te(e,t){return Dr().Next2(e,t+1)|0}function U(e,t){e:for(;;){const n=e,r=t,s=n();if(r(s))return s;e=n,t=r;continue e}}function Or(e){return Math.log(e)/Math.log(2)}function qr(e,t,n){return m(g(`\r
            <?xml version="1.0" standalone="no"?>\r
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
                %s\r
            </svg>\r
            `))(e)(t)(n)}function et(e,t,n,r){return m(g('<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>'))(e)(t)(n)(r)}function Sn(e,t,n,r,s,o){return m(g('<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>'))(e)(t)(n)(r)(s)(o)}function Mi(e,t,n,r,s,o,i,u){return m(g('<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />'))(e)(t)(n)(r)(s)(o)(i)(u)}function Ce(e,t){return Mi("opacity","linear","0","1",e,t,"1","freeze")}function Wr(e,t,n,r,s,o,i,u,l){return Sn(m(g("M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z"))(e)(t)(n)(r)(o)(s),u,1,l,0,Ce(i,500))}function Ke(e,t){return H(e,T(n=>!fr(n),t))}function Ti(e,t){return ce((n,r)=>En(n,r[0],r[1]),t,e)}function Je(e){return Ti(w([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]),e)}function qe(e){return En(e," ","&nbsp;")}function ie(e,t){return se(e,"0",t)}function pe(e){let t;return t=gi(n=>n!=="0",Mt(Nr(Mt(e)))),`<span class="zero-gray">${t[0]}</span>${t[1]}`+mi(e)}function Xe(e,t,n){return[e(t),e(n)]}function Lt(e,t,n,r){return[e(t),e(n),e(r)]}const cn=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Li(e){return((n,r)=>{e:for(;;){const s=n,o=r;switch(o){case 0:return s;case 1:return Me(s,V(1));default:{let i;const u=~~Or(o)|0;i=Math.pow(2,u),n=Me(s,V(i)),r=o-i;continue e}}}})(at(),e)}function Mn(e,t){let n,r=0;n=[Bi(e,t,new nt(()=>r,i=>{r=i|0})),r];const s=n[1]|0,o=n[0]|0;return o<t?V([o,s]):Me(V([o,s]),Mn(o,t))}function Hi(e,t,n,r){return Wr(e/2*4,e*(t-1)+6,e/2*3,-1*(17.85*t-35),-48,17.85*t-15,1500+we(t-1),n,r)}function Fr(e,t,n){const r=He(Hr(e,t),Rr(e,Mn(t,e)));let s;const o=E(i=>{const u=Q(i[0],""),l=Q(i[1],""),a=Q(i[2],""),c=Q(i[3],"");return m(g("%s%s%s%s"))(u)(l)(a)(c)},lt((i,u)=>[Ae(l=>{let a,c;return et(0,n*(i+1),0,(a=Ce((c=we(i)|0,i===0?c+1e3:c+2e3),500),m(g("%d%s"))(l)(a)))},u[0]),Ae(l=>{let a,c,d,p,f,h,b;return Sn((a=~~(n/2)+2|0,c=n*i+6|0,d=~~(n/2)|0,p=n*.4,f=n*.8,h=n/2*4.8,m(g("M %d,%d q %d,%f 0,%f h %f"))(a)(c)(d)(p)(f)(h)),"#000000",1,"none",0,Ce((b=we(i)|0,i===0?b+500:b+1500),500))},u[1]),Ae(l=>{let a,c;return et(~~(n/2)*2,n*(i+1),0,(a=qe(se(3," ",x(l))),c=Ce(we(i),500),m(g("%s%s"))(a)(c)))},u[2]),Ae(l=>{let a;return et(~~(n/2)*6,n*(i+1),0,(a=Ce(500+we(i),500),m(g("…%d%s"))(l)(a)))},u[3])],r));return s=ce((i,u)=>m(g("%s%s"))(i)(u),Hi(n,Z(r),"#191970","#b0e0e6"),o),qr(~~(n/2)*10,n*(Z(r)+1),s)}function Ri(e,t){return`
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
            `}function Di(e,t){let n,r,s,o;const i=H(" + ",E(x,t)),u=H(" + ",(n=E(a=>{let c;return c=Or(a),~~Math.trunc(c)},t),E((r=m(g("2<sup>%d</sup>")),r),n))),l=H(" + ",(s=E(j,t),E((o=m(g("%s<sub>(2)</sub>")),o),s)));return m(B(`\r
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
            `,[e,i,u,u,l,l,j(e)]))}function Gr(e){return`
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                ${Ri(2,e)}
                <h3>考え方 2</h3>
                ${Di(e,Li(e))}
            </details>
            `}function Oi(e,t){const n=(o,i)=>{e:for(;;){const u=o,l=i,a=Dr(),c=a.Next2(u,l)|0,d=a.Next2(u,l)|0;if(c!==d)return[c,d];o=u,i=l;continue e}};let r;const s=n(e,t);return r=Xe(o=>Math.pow(2,o),s[0],s[1]),r[0]+r[1]|0}function Xr(e,t){return U(()=>Oi(0,e),n=>Y(n,t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1)}function Vr(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=Fr(2,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function Te(e,t,n,r,s,o,i,u,l,a,c,d){const p=document.getElementById("numberInput"),f=Je(p.value),h=r(f);if(p.focus(),h.tag===0){const b=h.fields[0];document.getElementById("errorArea").innerHTML="";const I=o(b),y=s(b)|0,v=qe(se(3," ",x(y))),_=document.getElementById("outputArea"),P=Ke("<br>",w([ct(y===F(c,511,!1,32),I,l,v,u),_.innerHTML]));if(_.innerHTML=P,y===F(c,511,!1,32)){const k=e(d)|0;document.getElementById("questionSpan").innerText=x(k),document.getElementById("hintArea").innerHTML=t(k),i(k),p.value="";const R=Pn(a,He(k,d));document.getElementById("submitButton").onclick=N=>{N.preventDefault(),Te(e,t,n,r,s,o,i,u,l,a,x(k),R)},document.getElementById("inputArea").onsubmit=N=>{N.preventDefault(),Te(e,t,n,r,s,o,i,u,l,a,x(k),R)}}}else document.getElementById("errorArea").innerHTML=n(c,f,h.fields[0])}function dt(e,t,n,r,s,o,i,u,l,a,c,d){const p=e(at());document.getElementById("questionSpan").innerText=$(p),document.getElementById("srcRadix").innerText=m(g("(%d)"))(u),document.getElementById("dstRadix").innerText=x(l),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(l),document.getElementById("hintArea").innerHTML=t(p),document.getElementById("submitButton").onclick=f=>{f.preventDefault(),d(e,t,Fn(n),r,s,o,i,u,l,a,$(p),V(p))},document.getElementById("inputArea").onsubmit=f=>{f.preventDefault(),d(e,t,Fn(n),r,s,o,i,u,l,a,$(p),V(p))},i(p),document.getElementById("helpButton").onclick=f=>{A(h=>{document.getElementById(h).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=f=>{A(h=>{document.getElementById(h).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=f=>{A(h=>{document.getElementById(h).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=f=>{c(f)}}function qi(){dt(e=>Xr(8,e),Gr,Oe,Ie,de,e=>pe(ie(8,e)),e=>{Vr(e)},10,2,10,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}function Wi(){dt(e=>Xr(4,e),Gr,Oe,Ie,de,e=>pe(ie(4,e)),e=>{Vr(e)},10,2,2,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}const Yr=`\r
            10進数から2進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function Fi(e){return""}function Gi(e){return U(()=>te(0,255),t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function Xi(){dt(Gi,Fi,Oe,Ie,de,e=>pe(ie(8,e)),e=>{},10,2,10,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}function jr(e,t,n,r,s,o,i){return[e(t,s),e(n,o),e(r,i)]}const Kr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function Vi(){const e=U(()=>{const t=()=>{let n;return de(Nr(se(9,"0",j((n=te(0,8)|0,Math.pow(2,n))))))};return[t(),t()]},t=>!ae(t[0],t[1]));return e[0]+e[1]|0}function Yi(e){return H(" + ",lt((t,n)=>{const r=e.length-t-1|0;return m(g("(%c * 2<sup>%d</sup>)"))(n)(r)},De(e.split(""))))}function ji(e){return lt((t,n)=>[m(B('<span class="bin2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="bin2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="bin2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[2,e.length-t-1]))],De(e.split("")))}function Ki(e,t,n){return m(g(`\r
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
                `))(e)(t)(n)}function Ji(e){const t=ce((n,r)=>jr((s,o)=>m(g("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],ji(e));return Ki(t[0],t[1],t[2])}function Zi(e){const t=Yi(e);return m(B(`\r
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
            `,[Ji(e),e,t,de(e)]))}function Ui(e){return U(Vi,t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function Ht(e,t,n,r,s,o){const i=document.getElementById("numberInput"),u=Je(i.value),l=Mr(u);if(i.focus(),l.tag===0){const a=l.fields[0]|0;document.getElementById("errorArea").innerHTML="";const c=qe(se(3," ",x(a))),d=pe(ie(8,j(a))),p=document.getElementById("outputArea"),f=Ke("<br>",w([ct(a===F(r,511,!1,32),c,10,d,2),p.innerHTML]));if(p.innerHTML=f,a===F(r,511,!1,32)){const h=e(o)|0,b=j(h),I=Lr(4,b);document.getElementById("questionSpan").innerText=I,document.getElementById("hintArea").innerHTML=t(b),i.value="";const y=Vt(0,ke(4,Z(o)+1)-1,He(h,o));document.getElementById("submitButton").onclick=v=>{v.preventDefault(),Ht(e,t,n,x(h),I,y)},document.getElementById("inputArea").onsubmit=v=>{v.preventDefault(),Ht(e,t,n,x(h),I,y)}}}else document.getElementById("errorArea").innerHTML=Tr(s,u,l.fields[0])}function Jr(e,t,n,r,s){const o=e(at())|0,i=j(o),u=Lr(4,i);document.getElementById("questionSpan").innerText=u,document.getElementById("srcRadix").innerText=m(g("(%d)"))(2),document.getElementById("dstRadix").innerText=x(10),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=t(i),document.getElementById("submitButton").onclick=l=>{l.preventDefault(),s(e,t,n,x(o),u,V(o))},document.getElementById("inputArea").onsubmit=l=>{l.preventDefault(),s(e,t,n,x(o),u,V(o))},document.getElementById("helpButton").onclick=l=>{A(a=>{document.getElementById(a).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=l=>{A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=l=>{A(a=>{document.getElementById(a).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=l=>{r(l)}}function Qi(){Jr(Ui,Zi,e=>{},e=>{oe(e)},(e,t,n,r,s,o)=>{Ht(e,t,n,r,s,o)})}const Zr=`\r
            2進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒントはありませんので、慣れてからどうぞ。\r
            `;function zi(e){return""}function eu(e){return U(()=>te(0,255),t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function tu(){Jr(eu,zi,e=>{},e=>{oe(e)},(e,t,n,r,s,o)=>{Ht(e,t,n,r,s,o)})}const Ur=`\r
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function nu(e){const t=~~(Math.log(e)/Math.log(2))|0;return m(B(`\r
            <details>\r
                <summary><h2>ヒント:</h2></summary>\r
                <p class="history-indented">\r
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>\r
                    %d%P()<sub>(10)</sub> は 2<sup>%d%P()</sup> なので、1 の後ろに 0 を %d%P() 個つけます。\r
                </p>\r
            </details>`,[e,t,t]))}function ru(e){return U(()=>{const t=te(0,7)|0;return Math.pow(2,t)|0},t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function su(){dt(ru,nu,Oe,Ie,de,e=>pe(ie(8,e)),e=>{},10,2,4,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}const Qr=`\r
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\r
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ou(e){const t=~~(Math.log(e+1)/Math.log(2))|0;return m(B(`\r
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
            </details>`,[e,e,e+1,t,e,t,t]))}function iu(e){return U(()=>{let t;return-1+(t=te(0,8)|0,Math.pow(2,t))},t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function uu(){dt(iu,ou,Oe,Ie,de,e=>pe(ie(8,e)),e=>{},10,2,4,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}function Le(e,t){return so(wn(e),t)}function zr(e,t){return cr(wn(e),t)}const dn=`\r
            2進数同士の足し算をエンドレスで練習できます。<br>\r
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function es(){return`\r
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
                </details>`}function au(e){let t;const n=-1+Math.pow(2,e)|0,r=U(()=>te(1,n),e<4?s=>{let o;return o=j(s),o.length===e}:s=>{const o=j(s);return o.length===e&&zr("^1+0+$",o)===!1})|0;return[r,(t=(e<4?n:n-r)|0,U(()=>te(1,t),e<4?s=>!0:s=>s!==r&&(s&r)!==0))]}function ts(e,t){return U(()=>au(e),e<4?n=>!0:n=>Y(n[0],t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1&&Y(n[1],t,{Equals:(r,s)=>r===s,GetHashCode:D})===!1)}function Rt(e,t,n,r,s,o,i,u,l,a,c,d,p){const f=document.getElementById("numberInput"),h=Je(f.value),b=n(h);if(f.focus(),b.tag===0){const I=b.fields[0];document.getElementById("errorArea").innerHTML="";const y=s(I),v=r(I)|0,_=qe(se(3," ",x(v))),P=document.getElementById("outputArea"),k=Ke("<br>",w([ct(v===a,y,i,_,u),P.innerHTML]));if(P.innerHTML=k,v===a){const R=e(p),N=R[1]|0,K=R[0]|0;Zt(K,N),document.getElementById("hintArea").innerHTML=t(),f.value="";const $e=Pn(l,Me(w([K,N]),p));document.getElementById("submitButton").onclick=O=>{O.preventDefault(),Rt(e,t,n,r,s,o,i,u,l,K+N,K,N,$e)},document.getElementById("inputArea").onsubmit=O=>{O.preventDefault(),Rt(e,t,n,r,s,o,i,u,l,K+N,K,N,$e)}}}else{const I=Oe(m(B("%s%P()<sub>(%d%P())</sub> + %s%P()<sub>(%d%P())</sub>",[j(c),i,j(d),i])),h,b.fields[0]);document.getElementById("errorArea").innerHTML=I}}function ns(e,t,n,r,s,o,i,u,l,a,c){document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="+)",document.getElementById("firstRowSrcRadix").innerText=m(g("(%d)"))(i),document.getElementById("secondRowSrcRadix").innerText=m(g("(%d)"))(i),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(u),document.getElementById("hintArea").innerHTML=t();const d=e(at()),p=d[1]|0,f=d[0]|0;Zt(f,p),document.getElementById("submitButton").onclick=h=>{h.preventDefault(),c(e,t,n,r,s,o,i,u,l,f+p,f,p,w([f,p]))},document.getElementById("inputArea").onsubmit=h=>{h.preventDefault(),c(e,t,n,r,s,o,i,u,l,f+p,f,p,w([f,p]))},document.getElementById("helpButton").onclick=h=>{A(b=>{document.getElementById(b).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=h=>{A(b=>{document.getElementById(b).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=h=>{A(b=>{document.getElementById(b).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=h=>{a(h)}}function lu(){ns(e=>ts(8,e),es,Ie,de,e=>pe(ie(8,e)),e=>{},2,2,10,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d,p)=>{Rt(e,t,n,r,s,o,i,u,l,a,c,d,p)})}function cu(){ns(e=>ts(4,e),es,Ie,de,e=>pe(ie(4,e)),e=>{},2,2,5,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d,p)=>{Rt(e,t,n,r,s,o,i,u,l,a,c,d,p)})}const rs=`\r
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
                </details>`}function Dt(e,t,n,r){const s=document.getElementById("numberInput"),o=Je(s.value),i=Ie(o);if(s.focus(),i.tag===0){const u=i.fields[0];document.getElementById("errorArea").innerHTML="";const l=pe(ie(8,u)),a=de(u)|0,c=qe(se(3," ",x(a))),d=document.getElementById("outputArea"),p=Ke("<br>",w([ct(a===e,l,2,c,10),d.innerHTML]));if(d.innerHTML=p,a===e){const f=U(ss,v=>Y(v[0],r,{Equals:(_,P)=>_===P,GetHashCode:D})===!1&&Y(v[1],r,{Equals:(_,P)=>_===P,GetHashCode:D})===!1),h=f[1]|0,b=f[0]|0;Zt(b,h);const I=os();document.getElementById("hintArea").innerHTML=I,s.value="";const y=Vt(0,ke(20,Z(r)+1)-1,Me(w([b,h]),r));document.getElementById("submitButton").onclick=v=>{v.preventDefault(),Dt(b-h,b,h,y)},document.getElementById("inputArea").onsubmit=v=>{v.preventDefault(),Dt(b-h,b,h,y)}}}else{const u=Oe(m(B("%s%P()<sub>(%d%P())</sub> - %s%P()<sub>(%d%P())</sub>",[j(t),2,j(n),2])),o,i.fields[0]);document.getElementById("errorArea").innerHTML=u}}function du(){const e=os();document.getElementById("numberInput").className="number-input question-number eight-digit",document.getElementById("operator").innerText="-)",document.getElementById("firstRowSrcRadix").innerText=m(g("(%d)"))(2),document.getElementById("secondRowSrcRadix").innerText=m(g("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=e;const t=ss(),n=t[1]|0,r=t[0]|0;Zt(r,n),document.getElementById("submitButton").onclick=s=>{s.preventDefault(),Dt(r-n,r,n,w([r,n]))},document.getElementById("inputArea").onsubmit=s=>{s.preventDefault(),Dt(r-n,r,n,w([r,n]))},document.getElementById("helpButton").onclick=s=>{A(o=>{document.getElementById(o).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=s=>{A(o=>{document.getElementById(o).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=s=>{A(o=>{document.getElementById(o).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=s=>{oe(s)}}const is=`\r
            2進数の補数（2の補数）を求める練習ができます。<br>\r
            出題範囲は n (1 &le; n &le; 15) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function us(e,t){return`
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
            </details>`}function Ot(e,t,n){const r=document.getElementById("numberInput"),s=Je(r.value),o=Ie(s);if(r.focus(),o.tag===0){const i=o.fields[0];document.getElementById("errorArea").innerHTML="";const u=de(i)|0,l=u===t?"history history-correct":"history history-wrong",a=ie(4,i),c=document.getElementById("outputArea"),d=Ke("<br>",w([m(g('<span class ="%s">%s<sub>(%d)</sub></span>'))(l)(a)(2),c.innerHTML]));if(c.innerHTML=d,u===t){const p=U(()=>te(1,15),y=>Y(y,n,{Equals:(v,_)=>v===_,GetHashCode:D})===!1)|0,f=16-p|0,h=se(4,"0",j(p));document.getElementById("questionSpan").innerText=h;const b=Array.from(kr(y=>y==="1"?"0":"1",h.split(""))).join("");document.getElementById("hintArea").innerHTML=us(h,b),r.value="";const I=Vt(0,ke(8,Z(n)+1)-1,He(p,n));document.getElementById("submitButton").onclick=y=>{y.preventDefault(),Ot(h,f,I)},document.getElementById("inputArea").onsubmit=y=>{y.preventDefault(),Ot(h,f,I)}}}else{const i=o.fields[0];let u;switch(i.tag){case 2:{u=m(g(`<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>`))(s);break}default:{const l=fi("","",e);u=m(g('<span class="warning">%s の補数を、2進法表記で入力してください。</span>'))(l)}}document.getElementById("errorArea").innerHTML=u}}function pu(){const e=te(1,15)|0,t=16-e|0,n=se(4,"0",j(e)),r=Array.from(kr(s=>s==="1"?"0":"1",n.split(""))).join("");document.getElementById("questionSpan").innerText=n,document.getElementById("srcRadix").innerText=m(g("(%d)"))(2),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(2),document.getElementById("hintArea").innerHTML=us(n,r),document.getElementById("submitButton").onclick=s=>{s.preventDefault(),Ot(n,t,V(e))},document.getElementById("inputArea").onsubmit=s=>{s.preventDefault(),Ot(n,t,V(e))},document.getElementById("helpButton").onclick=s=>{A(o=>{document.getElementById(o).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=s=>{A(o=>{document.getElementById(o).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=s=>{A(o=>{document.getElementById(o).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=s=>{oe(s)}}const as=`\r
            10進数から16進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function mu(e,t,n,r){return Wr(e/2*4,e*(t-1)+6,e/2*4,-1*(17.85*t-35),-58,17.85*t-15,1500+we(t-1),n,r)}function ls(e,t,n){const r=He(Hr(e,t),Rr(e,Mn(t,e)));let s;const o=E(i=>{const u=Q(i[0],""),l=Q(i[1],""),a=Q(i[2],""),c=Q(i[3],"");return m(g("%s%s%s%s"))(u)(l)(a)(c)},lt((i,u)=>[Ae(l=>{let a,c;return et(0,n*(i+1),0,(a=Ce((c=we(i)|0,i===0?c+1e3:c+2e3),500),m(g("%d%s"))(l)(a)))},u[0]),Ae(l=>{let a,c,d,p,f,h,b;return Sn((a=~~(n/2)*2+4|0,c=n*i+6|0,d=~~(n/2)|0,p=n*.4,f=n*.8,h=n/2*4.8,m(g("M %d,%d q %d,%f 0,%f h %f"))(a)(c)(d)(p)(f)(h)),"#000000",1,"none",0,Ce((b=we(i)|0,i===0?b+500:b+1500),500))},u[1]),Ae(l=>{let a,c;return et(~~(n/2)*3,n*(i+1),0,(a=qe(se(3," ",x(l))),c=Ce(we(i),500),m(g("%s%s"))(a)(c)))},u[2]),Ae(l=>{let a;return et(~~(n/2)*7,n*(i+1),0,(a=Ce(500+we(i),500),m(g("…%d%s"))(l)(a)))},u[3])],r));return s=ce((i,u)=>m(g("%s%s"))(i)(u),mu(n,Z(r),"#1e3330","#95feec"),o),qr(~~(n/2)*11,n*(Z(r)+1),s)}function fu(e,t,n){const r=ls(e,t,n);return m(g(`\r
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
                `))(r)}function hu(e,t,n){const r=fu(e,t,n);return m(g(`\r
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>\r
                    <h3>考え方 1</h3>\r
                    %s\r
                </details>\r
                `))(r)}function bu(e){return hu(16,e,20)}function gu(e){return U(()=>te(0,255),t=>Y(t,e,{Equals:(n,r)=>n===r,GetHashCode:D})===!1)}function yu(e){document.getElementById("hint1").onclick=t=>{document.getElementById("hint1").innerHTML=ls(16,e,20),document.getElementById("hintDetails").setAttribute("open","true")}}function wu(){dt(gu,bu,Pi,_i,$n,e=>pe(ie(8,e)),e=>{yu(e)},10,16,10,e=>{oe(e)},(e,t,n,r,s,o,i,u,l,a,c,d)=>{Te(e,t,ut(n),r,s,o,i,u,l,a,c,d)})}const cs=`\r
            16進数から10進数への変換をエンドレスで練習できます。<br>\r
            出題範囲は n (0&le;n&le;255) です。<br>\r
            ヒント付きなので、考え方も身に付けられます。\r
            `;function ds(e){return H(" + ",st(lt((t,n)=>{const r=$n(n)|0;return m(g("(%d * 16<sup>%d</sup>)"))(r)(t)},st(De(e)))))}function Eu(e){return lt((t,n)=>[m(B('<span class="hex2dec hint-table-digit">%d%P()</span>',[e.length-t])),m(B('<span class="hex2dec hint-table-digit green large">%c%P()</span>',[n])),m(B('<span class="hex2dec hint-table-digit gray">%d%P()<sup>%d%P()</sup></span>',[16,e.length-t-1]))],De(e.split("")))}function Iu(e,t,n){return m(g(`\r
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
                `))(e)(t)(n)}function ps(e){const t=ce((n,r)=>jr((s,o)=>m(g("%s%s"))(s)(o),n[0],n[1],n[2],r[0],r[1],r[2]),["","",""],Eu(e));return Iu(t[0],t[1],t[2])}function ms(e,t,n){return m(B(`<details>\r
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
            </details>`,[n,e,t,$n(e)]))}function qt(e,t,n){const r=document.getElementById("numberInput"),s=Je(r.value),o=Mr(s);if(r.focus(),o.tag===0){const i=o.fields[0]|0;document.getElementById("errorArea").innerHTML="";const u=qe(se(3," ",x(i))),l=pe(ie(2,ln(i))),a=document.getElementById("outputArea"),c=Ke("<br>",w([ct(i===e,u,10,l,16),a.innerHTML]));if(a.innerHTML=c,i===e){const d=U(()=>te(0,255),b=>Y(b,n,{Equals:(I,y)=>I===y,GetHashCode:D})===!1)|0,p=ln(d);document.getElementById("questionSpan").innerText=p;const f=ms(p,ds(p.split("")),ps(p));document.getElementById("hintArea").innerHTML=f,r.value="";const h=Vt(0,ke(10,Z(n)+1)-1,He(d,n));document.getElementById("submitButton").onclick=b=>{b.preventDefault(),qt(d,p,h)},document.getElementById("inputArea").onsubmit=b=>{b.preventDefault(),qt(d,p,h)}}}else document.getElementById("errorArea").innerHTML=Tr(t,s,o.fields[0])}function vu(){const e=te(0,255)|0,t=ln(e),n=ms(t,ds(t.split("")),ps(t));document.getElementById("questionSpan").innerText=t,document.getElementById("srcRadix").innerText=m(g("(%d)"))(16),document.getElementById("dstRadix").innerText=x(10),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(10),document.getElementById("hintArea").innerHTML=n,document.getElementById("submitButton").onclick=r=>{r.preventDefault(),qt(e,t,V(e))},document.getElementById("inputArea").onsubmit=r=>{r.preventDefault(),qt(e,t,V(e))},document.getElementById("helpButton").onclick=r=>{A(s=>{document.getElementById(s).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=r=>{A(s=>{document.getElementById(s).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=r=>{A(s=>{document.getElementById(s).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.onkeydown=r=>{oe(r)}}function Bu(e,t){return Z(T(e,t))}function Au(e,t){return T(n=>Y(n,t,{Equals:ae,GetHashCode:Ye}),e)}function _u(e,t,n,r){const s=Ve(e,n)|0;if(s===0)throw new Error("The step of a range cannot be zero");const o=s>0;return i=>{const u=Ve(i,t)|0;return o&&u<=0||!o&&u>=0?[i,r(i,e)]:void 0}}function Cu(e,t,n,r,s){const o=_u(t,n,r,s);return Et(()=>Cr(o,e))}function Tn(e,t,n){return Cu(e,t,n,0,(r,s)=>r+s)}const fs=`\r
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
    `,xu=`
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
            ${fs}
        </div>
        `;function jn(e,t){return t%e}function Pu(e,t){return~~(t/e)}function ku(e,t){let n;const r=Pn(e,t);return Bu((n=kt(e,t),s=>ae(n,s)),r)|0}function Nu(e,t,n){const r=t-e|0;return Pu(r*3,n)%2===0?ke(e+jn(r*3,n),t)|0:sn(t-jn(r*3,n),e)|0}function zt(e,t,n,r,s,o){return Nu(t,n,(n-t)*e+r*o+s)}function $u(e,t,n,r,s){const o=w([e,t,n]),i=Br(o,{Compare:ft})|0,u=Do(o,{Compare:ft})|0,l=kt(1,Gn(o,{Compare:ft}))-i|0;let a,c;const d=[0,1,2];return c=Lt(p=>{let f;return Ho((f=kt(p,o)|0,h=>f===h),Gn(o,{Compare:ft}))+ku(p,o)},d[0],d[1],d[2]),a=Lt(p=>kt(p,w([f=>zt(4,i,u,r,l,f),f=>zt(0,i,u,r,l,f),f=>zt(2,i,u,r,l,f)])),c[0],c[1],c[2]),E(p=>[a[0](p),a[1](p),a[2](p)],De(Tn(0,1,s)))}function Kn(e,t,n){let r;const s=[e,t,n];return r=Lt(o=>se(2,"0",x(o,16)),s[0],s[1],s[2]),`#${r[0]}${r[1]}${r[2]}`}function Su(e,t){return E(n=>1+e*n,De(Tn(1,1,~~((255/t-1)/e))))}function Mu(e){return An(st(E(t=>1-e*t,De(Tn(1,1,~~(1/e))))))}function Tu(e,t,n){return m(B(`\r
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
        `,[e,t,n,e,t,n,Kn(e,t,n),e,t,n,Kn(e,t,n)]))}function Lu(e){const t=H(`
`,e);return m(g('<div class="color-row">%s</div>'))(t)}function hs(){let e,t;const n=document.getElementById("errorArea");n.innerHTML="";const r=document.getElementById("rInput").value,s=document.getElementById("gInput").value,o=document.getElementById("bInput").value,i=document.getElementById("stepInput").value,u=document.getElementById("limitInput").value,l=T(a=>a[2][0]===!1,Me(E(a=>{const c=a[2];return[a[0],a[1],[c[0],~~c[1]]]},E(a=>{let c;return[a[0],a[1],(c=0,[Tt(a[2],511,!0,8,new nt(()=>c,d=>{c=d})),c])]},w([["R","rInput",r],["G","gInput",s],["B","bInput",o]]))),E(a=>{let c;return[a[0],a[1],(c=0,[Tt(a[2],511,!1,32,new nt(()=>c,d=>{c=d|0})),c])]},w([["変化量","stepInput",i],["回数","limitInput",u]]))));if(Bn(l)){const a=F(r,511,!1,32)|0,c=F(s,511,!1,32)|0,d=F(o,511,!1,32)|0,p=$u(a,c,d,F(i,511,!1,32),F(u,511,!1,32)),f=sn(sn(a,c),d)|0,h=Mu(.1),b=Z(h)|0,I=H(`
`,E(Lu,E(k=>E(R=>Tu(R[0],R[1],R[2]),k),E((e=Me(h,He(1,Su(.1,f))),k=>E(R=>Lt(N=>~~(R*N),k[0],k[1],k[2]),e)),p)))),y=document.getElementById("outputArea");y.innerHTML=I;const v=y.getBoundingClientRect().width;let _;_=gr((t=document.getElementsByClassName("color-div"),Array.from(t))).getBoundingClientRect().width,y.scrollLeft=_*b-(v-_)/2}else{const a=xn((c,d)=>`${c}<br>${d}`,E(c=>`<span class="warning">${c[0]} の値が正しくありません。</span>`,l));n.innerHTML=a,document.getElementById(Re(l)[1]).focus()}}function Fe(e,t,n,r,s){vr(o=>o!=="",w([e,t,n,r,s]))&&hs()}function Hu(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"rInput":{r=0,s=n;break}case"gInput":{r=0,s=n;break}case"bInput":{r=0,s=n;break}case"stepInput":{r=0,s=n;break}case"limitInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=vn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(u,l)=>u===l,GetHashCode:it});switch(e.key){case"\\":{const u=E(l=>document.getElementById(l),w(["rInput","gInput","bInput","stepInput","limitInput"]));o||(Q(_n(a=>a.value==="",u),Re(u)).focus(),e.preventDefault());break}case"?":{A(u=>{document.getElementById(u).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&A(u=>{document.getElementById(u).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}case"+":{if(!o){const u=document.getElementById("rInput"),l=document.getElementById("gInput"),a=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let p,f=0;if(p=[Tt(d.value,511,!1,32,new nt(()=>f,h=>{f=h|0})),f],p[0]){const h=p[1]|0;h<2147483647&&(d.value=x(h+1),Fe(u.value,l.value,a.value,c.value,d.value))}}break}case"-":{if(!o){const u=document.getElementById("rInput"),l=document.getElementById("gInput"),a=document.getElementById("bInput"),c=document.getElementById("stepInput"),d=document.getElementById("limitInput");let p,f=0;if(p=[Tt(d.value,511,!1,32,new nt(()=>f,h=>{f=h|0})),f],p[0]){const h=p[1]|0;h>0&&(d.value=x(h-1),Fe(u.value,l.value,a.value,c.value,d.value))}}break}}break}}}function Ru(){document.getElementById("submitButton").onclick=o=>{hs()},A(o=>{document.getElementById(o).onclick=i=>{A(u=>{document.getElementById(u).classList.toggle("active")},w(["helpWindow","helpBarrier"]))}},w(["helpButton","helpBarrier","helpClose"]));const e=document.getElementById("rInput"),t=document.getElementById("gInput"),n=document.getElementById("bInput"),r=document.getElementById("stepInput"),s=document.getElementById("limitInput");e.oninput=o=>{Fe(e.value,t.value,n.value,r.value,s.value)},t.oninput=o=>{Fe(e.value,t.value,n.value,r.value,s.value)},n.oninput=o=>{Fe(e.value,t.value,n.value,r.value,s.value)},r.oninput=o=>{Fe(e.value,t.value,n.value,r.value,s.value)},s.oninput=o=>{Fe(e.value,t.value,n.value,r.value,s.value)},document.onkeydown=o=>{Hu(o)}}class Du extends Ne{constructor(t,n,r,s){super(),this.Octet1=t,this.Octet2=n,this.Octet3=r,this.Octet4=s}toString(){const t=this;return m(g("%d.%d.%d.%d"))(t.Octet1)(t.Octet2)(t.Octet3)(t.Octet4)}}function bs(e,t,n,r){return new Du(e,t,n,r)}function ht(e){const t=In(n=>F(n,511,!0,8),e.split("."),Uint8Array);return bs(_e(0,t),_e(1,t),_e(2,t),_e(3,t))}function pn(e){return Sr(ht,ye(t=>vr(n=>n>=0?n<=255:!1,E(n=>F(n,511,!1,32),ge(".",t)))?new z(0,[t]):new z(1,[new jt(3,[])]),ye(t=>Jt("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",t),ye(Ai,ye(Kt,new z(0,[e]))))))}function gs(e,t){return bs(e.Octet1&t.Octet1,e.Octet2&t.Octet2,e.Octet3&t.Octet3,e.Octet4&t.Octet4)}class q extends Ne{constructor(t,n){super(),this.X=t,this.Y=n}toString(){const t=this;return m(g("X = %f; Y = %f"))(t.X)(t.Y)}}function Ze(e,t){return new q(e,t)}function Ge(e){const t=In(Pe,e.split(","),Float64Array);return Ze(gr(t),Io(t))}function Ou(e){return m(g("%f,%f"))(e.X)(e.Y)}function Ln(e,t){let n,r;return Math.sqrt((n=e.X-t.X,Math.pow(n,2)+(r=e.Y-t.Y,Math.pow(r,2))))}function me(e,t,n){return new q(n.X+e,n.Y+t)}function Jn(e,t){return(e.Y>t.Y?1:0)|(e.Y<t.Y?2:0)|(e.X>t.X?4:0)|(e.X<t.X?8:0)}class W extends Ne{constructor(t,n,r,s){super(),this.X=t,this.Y=n,this.Width=r,this.Height=s}toString(){const t=this;return m(g("X = %f; Y = %f; Width = %f; Height = %f"))(t.X)(t.Y)(t.Width)(t.Height)}}function It(e,t,n,r){return new W(e,t,n,r)}function qu(e,t){let n,r;return It(ke(e.X,t.X),ke(e.Y,t.Y),(n=e.X-t.X,Math.abs(n)),(r=e.Y-t.Y,Math.abs(r)))}function Wu(e,t,n){return new W(n.X,n.Y,n.Width+e,n.Height+t)}function Fu(e,t){return t.X>=e.X&&t.X<=e.X+e.Width&&t.Y>=e.Y?t.Y<=e.Y+e.Height:!1}class fe extends gt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Server","Router","Hub","ProxyServer","LANCable"]}}function Gu(e){switch(e){case"Client":return new fe(0,[]);case"Server":return new fe(1,[]);case"Router":return new fe(2,[]);case"Hub":return new fe(3,[]);case"ProxyServer":return new fe(4,[]);case"LANCable":return new fe(5,[]);default:return}}class Xu extends Ne{constructor(t,n,r,s,o,i,u){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=u}toString(){const t=this;return m(g("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Qe(e,t,n,r,s,o){const i=ht(n),u=ht(r);return new Xu(e,t,i,u,gs(u,i),s,o)}function Vu(e){let t,n,r,s;const o=e.id;return Qe(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),It(n.left,n.top,n.width,n.height)),Ze(Pe((r=Le("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Pe((s=Le("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ys(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","100");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z"),o.setAttribute("fill","none"),o.setAttribute("stroke","#000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,60 l -15,30 l 90,0 l -15,-30"),i.setAttribute("fill","none"),i.setAttribute("stroke","#000"),i.setAttribute("stroke-width","5");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 25,63 l  -9,20 l 68,0 l  -9,-20  z"),u.setAttribute("fill","#000"),u.setAttribute("stroke","#000"),u.setAttribute("stroke-width","1");const l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000"),l.setAttribute("stroke-width","0"),l.setAttribute("x","23.40522"),l.setAttribute("y","19.58995"),l.setAttribute("font-size","6"),l.setAttribute("font-family","Noto Sans JP"),l.setAttribute("text-anchor","start"),l.setAttribute("xml:space","preserve"),l.textContent="PS C:\\>_";const a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("fill","none"),a.setAttribute("stroke","#fff"),a.setAttribute("x1","20.85"),a.setAttribute("y1","70"),a.setAttribute("x2","79.15"),a.setAttribute("y2","70");const c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("x1","17.7"),c.setAttribute("y1","77"),c.setAttribute("x2","82.3"),c.setAttribute("y2","77");const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("x1","34.7"),d.setAttribute("y1","61.5"),d.setAttribute("x2","29.3"),d.setAttribute("y2","84.5");const p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("x1","44.9"),p.setAttribute("y1","61.5"),p.setAttribute("x2","43.1"),p.setAttribute("y2","84.5");const f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("fill","none"),f.setAttribute("stroke","#fff"),f.setAttribute("x1","55.1"),f.setAttribute("y1","61.5"),f.setAttribute("x2","56.9"),f.setAttribute("y2","84.5");const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("fill","none"),h.setAttribute("stroke","#fff"),h.setAttribute("x1","65.3"),h.setAttribute("y1","61.5"),h.setAttribute("x2","70.7"),h.setAttribute("y2","84.5"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(u),r.appendChild(l),r.appendChild(a),r.appendChild(c),r.appendChild(d),r.appendChild(p),r.appendChild(f),r.appendChild(h),n.appendChild(r);const b=document.createElement("br"),I=document.createElement("span");I.id=`${e.Id}Name`,I.className="device-prop",I.contentEditable="true",I.textContent=`${e.Name}`;const y=document.createElement("br"),v=document.createElement("span");v.id=`${e.Id}IPv4`,v.className="device-prop ipv4 mono",v.contentEditable="true",v.textContent=`${$(e.IPv4)}`;const _=document.createElement("br"),P=document.createElement("span");P.id=`${e.Id}SubnetMask`,P.className="device-prop subnetmask mono",P.contentEditable="true",P.textContent=`${$(e.SubnetMask)}`;const k=document.createElement("span");return k.id=`${e.Id}Kind`,k.className="no-display",k.textContent="Client",t.appendChild(n),t.appendChild(b),t.appendChild(I),t.appendChild(y),t.appendChild(v),t.appendChild(_),t.appendChild(P),t.appendChild(k),t}class Yu extends Ne{constructor(t,n,r,s,o,i,u){super(),this.Id=t,this.Name=n,this.IPv4=r,this.SubnetMask=s,this.NetworkAddress=o,this.Area=i,this.Position=u}toString(){const t=this;return m(g("Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"))(t.Id)(t.Name)(t.IPv4)(t.SubnetMask)(t.Area)(t.Position)}}function Nt(e,t,n,r,s,o){const i=E(ht,E(l=>l.trim(),ge(";",n))),u=E(ht,E(l=>l.trim(),ge(";",r)));return new Yu(e,t,i,u,To(gs,u,i),s,o)}function ju(e){let t,n,r,s;const o=e.id;return Nt(o,document.getElementById(o+"Name").innerText,document.getElementById(o+"IPv4").innerText,document.getElementById(o+"SubnetMask").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),It(n.left,n.top,n.width,n.height)),Ze(Pe((r=Le("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Pe((s=Le("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function ws(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#000000"),o.setAttribute("stroke","#000000");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#ffffff"),i.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#ffffff"),u.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#ffffff"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#ffffff"),a.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(u),r.appendChild(l),r.appendChild(a),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const p=document.createElement("br"),f=document.createElement("span");f.id=`${e.Id}IPv4`,f.className="device-prop ipv4 mono",f.contentEditable="true";const h=H("; ",E($,e.IPv4));f.textContent=h;const b=document.createElement("br"),I=document.createElement("span");I.id=`${e.Id}SubnetMask`,I.className="device-prop subnetmask mono",I.contentEditable="true";const y=H("; ",E($,e.SubnetMask));I.textContent=y;const v=document.createElement("span");return v.id=`${e.Id}Kind`,v.className="no-display",v.textContent="Router",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(p),t.appendChild(f),t.appendChild(b),t.appendChild(I),t.appendChild(v),t}class Ku extends Ne{constructor(t,n,r,s){super(),this.Id=t,this.Name=n,this.Area=r,this.Position=s}toString(){const t=this;return m(g("Id = %s; Name = %s; Area = %O; Position = %O"))(t.Id)(t.Name)(t.Area)(t.Position)}}function mn(e,t,n,r){return new Ku(e,t,n,r)}function Ju(e){let t,n,r,s;const o=e.id;return mn(o,document.getElementById(o+"Name").innerText,(t=document.getElementById(o+"Svg"),n=t.getBoundingClientRect(),It(n.left,n.top,n.width,n.height)),Ze(Pe((r=Le("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")),Pe((s=Le("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),s[1]||""))))}function Es(e){const t=document.createElement("div");t.id=e.Id,t.className="device device-container device-note",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device-image"),n.setAttribute("width","100"),n.setAttribute("height","35");const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z"),o.setAttribute("fill","#ffffff"),o.setAttribute("stroke","#000000"),o.setAttribute("stroke-width","5");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),i.setAttribute("fill","#000000"),i.setAttribute("stroke","#000000");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),u.setAttribute("fill","#000000"),u.setAttribute("stroke","#000000");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),l.setAttribute("fill","#000000"),l.setAttribute("stroke","#000000");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z"),a.setAttribute("fill","#000000"),a.setAttribute("stroke","#000000"),r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(u),r.appendChild(l),r.appendChild(a),n.appendChild(r);const c=document.createElement("br"),d=document.createElement("span");d.id=`${e.Id}Name`,d.className="device-prop",d.contentEditable="true",d.textContent=`${e.Name}`;const p=document.createElement("span");return p.id=`${e.Id}Kind`,p.className="no-display",p.textContent="Hub",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(p),t}class be extends gt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Client","Router","Hub"]}}function Bt(e){const t=e.id;switch(document.getElementById(t+"Kind").innerText){case"Client":return new be(0,[Vu(e)]);case"Router":return new be(1,[ju(e)]);case"Hub":return new be(2,[Ju(e)]);default:return}}function Zu(e){switch(e.tag){case 1:return ws(e.fields[0]);case 2:return Es(e.fields[0]);default:return ys(e.fields[0])}}function en(e){return e.tag===0}function $t(e){return e.tag===1}function fn(e){return e.tag===2}function Zn(e){switch(e.tag){case 1:return e.fields[0].Id;case 2:return e.fields[0].Id;default:return e.fields[0].Id}}function Is(e,t){switch(t.tag){case 0:return ae(t.fields[0].IPv4,e);case 1:return Y(e,t.fields[0].IPv4,{Equals:ae,GetHashCode:ir});default:return!1}}function Un(e){switch(e.tag){case 1:return e.fields[0].NetworkAddress;case 2:return at();default:return V(e.fields[0].NetworkAddress)}}function Uu(e){switch(e.tag){case 1:return e.fields[0].Area;case 2:return e.fields[0].Area;default:return e.fields[0].Area}}function hn(e){switch(e.tag){case 1:return e.fields[0].Name;case 2:return e.fields[0].Name;default:return e.fields[0].Name}}class Qu extends Ne{constructor(t,n,r,s,o,i){super(),this.Id=t,this.Kind=n,this.Name=r,this.Points=s,this.Area=o,this.Position=i}toString(){const t=this,n=$(t.Kind),r=H(" ",E($,t.Points));return m(g("Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"))(t.Id)(n)(t.Name)(r)(t.Area)(t.Position)}}function ze(e,t,n,r,s,o){return new Qu(e,t,n,r,s,o)}function bn(e){let t,n,r;const s=e.id,o=document.getElementById(s+"Name").innerText,i=Gu(document.getElementById(s+"Kind").innerText);let u;const a=document.getElementById(s+"Svg").getBoundingClientRect();u=It(a.left,a.top,a.width,a.height);const c=E(Ge,ge(" ",(t=document.getElementById(s+"Polyline"),t.getAttribute("points")))),d=Ze(Pe((n=Le("left: (\\d+\\.?\\d+)px;",e.getAttribute("style")),n[1]||"")),Pe((r=Le("top: (\\d+\\.?\\d+)px;",e.getAttribute("style")),r[1]||"")));if(i!=null)return ze(s,i,o,c,u,d)}function Qn(e){const t=document.createElement("div");t.id=e.Id,t.className="device cable-container lan-cable",t.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.Position.Y,e.Position.X])));const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id=`${e.Id}Svg`,n.classList.add("device"),n.classList.add("device"),n.setAttribute("viewBox",m(B("%f%P() %f%P() %f%P() %f%P()",[e.Area.X,e.Area.Y,e.Area.Width,e.Area.Height]))),n.setAttribute("width",m(B("%f%P()px",[e.Area.Width]))),n.setAttribute("height",m(B("%f%P()px",[e.Area.Height])));const r=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","title");s.id=`${e.Id}Title`,s.textContent=`${e.Name}`;const o=document.createElementNS("http://www.w3.org/2000/svg","polyline");o.id=`${e.Id}Polyline`,o.setAttribute("points",`${H(" ",E(Ou,e.Points))}`),o.setAttribute("fill","none"),o.setAttribute("stroke","#00aeda"),o.setAttribute("stroke-width","5"),r.appendChild(s),r.appendChild(o),n.appendChild(r);const i=document.createElement("br"),u=document.createElement("span");u.id=`${e.Id}Name`,u.className="no-display",u.textContent=`${e.Name}`;const l=document.createElement("br"),a=document.createElement("span");return a.id=`${e.Id}Kind`,a.className="no-display",a.textContent=`${$(e.Kind)}`,t.appendChild(n),t.appendChild(i),t.appendChild(u),t.appendChild(l),t.appendChild(a),t}function gn(e,t){let n;const r=E(s=>me(t.Area.X,t.Area.Y,s),t.Points);return on((n=Uu(e),s=>Fu(n,s)),r)}function zu(e,t,n){const r=Xt(n),s=Er(T(o=>!fn(o),n));return Mo(o=>T(i=>fn(i)||$t(r)?!0:s!=null?!ae(Au(Un(s),Un(i)),at()):!1,T(i=>gn(i,o),T(i=>Y(i,n,{Equals:ae,GetHashCode:ir})===!1,t))),T(o=>gn(r,o),e))}function ea(e,t,n){return E(r=>Me(n,V(r)),zu(e,t,n))}function ta(e,t,n,r,s){const o=(i,u,l,a,c)=>{const d=ea(i,u,c);return on(p=>Is(a,p),E(Xt,d))?!0:l===0?!1:on(Vs(o)(i)(u)(l-1)(a),d)};return o(e,t,n,r,V(s))}const vs=`\r
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
    `,na=`
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
            ${vs}
        </div>
        `;function Bs(e,t,n){const r=n,s=r.pageY-t.getBoundingClientRect().height/2,o=r.pageX-t.getBoundingClientRect().width/2,i=m(g("top: %fpx; left: %fpx;"))(s)(o);e.setAttribute("style",i)}function At(e){const t=document.getElementById(e.id+"Svg");t.ondragstart=r=>{r.preventDefault()};const n=r=>{Bs(e,t,r)};t.onmousedown=r=>{document.addEventListener("mousemove",n),t.onmouseup=s=>{document.removeEventListener("mousemove",n)}}}function _t(e){const t=document.getElementById(e.id+"Name");t.addEventListener("blur",n=>{const r=document.getElementById(e.id+"Title");r.textContent=t.innerText})}function Ct(e){let t,n;const r=e.children;n=Array.from(r),t=n.filter(s=>s.contentEditable==="true"),t.forEach(s=>{s.onkeydown=o=>{(o.key==="Enter"||o.key==="Escape")&&s.blur()}})}function tn(e){A(t=>{const n=t[0],r=t[1];r.addEventListener("blur",s=>{const o=pn(r.innerText),i=document.getElementById("errorArea");if(i.innerText="",o.tag===1){const u=o.fields[0],l=document.getElementById(e.id+"Name").innerText;switch(u.tag){case 2:{i.innerText=`${l} の ${n} の形式が正しくありません。`;break}case 3:{i.innerText=`${l} の ${n} の数値の範囲が正しくありません。`;break}default:i.innerText=`${l} の ${n} を入力してください。`}setTimeout(()=>{r.focus()},0)}})},E(t=>[t,document.getElementById(e.id+t)],w(["IPv4","SubnetMask"])))}function xt(e,t,n){let r;const s=[e,t];return r=Xe(o=>Ln(n,o),s[0],s[1]),r[0]<=r[1]?[e,me(n.X-e.X,n.Y-e.Y,t)]:[e,n]}function ra(e,t,n){let r;const s=[e,t];return r=Xe(o=>Ln(n,o),s[0],s[1]),r[0]<=r[1]?[e,t]:[t,e]}function sa(e,t,n,r){let s,o,i,u,l,a;const c=r;let d;const p=E(Ge,ge(" ",n.getAttribute("points")));d=[Re(p),Xt(p)];const f=Ze(c.pageX-e.offsetLeft,c.pageY-e.offsetTop),h=ra(d[0],d[1],f),b=h[1],I=h[0],y=f.X-I.X,v=f.Y-I.Y,_=Jn(b,I)|0,P=_===1?[I,me(-y,-v,b)]:_===2?xt(b,I,f):_===4?[I,me(-y,-v,b)]:_===8?xt(b,I,f):_===5?[I,me(-y,-v,b)]:_===9?[me(0,-v,b),me(y,0,I)]:_===6?[me(0,v,I),me(-y,0,b)]:xt(b,I,f),k=5-(s=(o=P,Xe(ve=>ve.X,o[0],o[1])),ke(s[0],s[1])),R=5-(i=(u=P,Xe(ve=>ve.Y,u[0],u[1])),ke(i[0],i[1]));let N,K;const $e=P;K=Xe(ve=>me(k,R,ve),$e[0],$e[1]);const O=K[0],We=K[1];N=m(B("%f%P(),%f%P() %f%P(),%f%P()",[O.X,O.Y,We.X,We.Y])),n.setAttribute("points",N);const ue=Wu(5*2,5*2,(l=(a=P,Xe(ve=>me(k,R,ve),a[0],a[1])),qu(l[0],l[1])));switch(t.setAttribute("viewBox",m(B("0 0 %f%P() %f%P()",[ue.Width,ue.Height]))),t.setAttribute("width",m(B("%f%P()px",[ue.Width]))),t.setAttribute("height",m(B("%f%P()px",[ue.Height]))),_){case 1:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y])));break}case 4:{e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y])));break}default:_===5?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y]))):_===9?e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft]))):_===6&&e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop,e.offsetLeft+y])))}const vt=Jn(P[0],P[1])|0;switch(vt){case 1:{t.setAttribute("width",m(B("%f%P()px",[ue.Width+-y]))),t.setAttribute("height",m(B("%f%P()px",[ue.Height+-v]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y])));break}case 4:{t.setAttribute("width",m(B("%f%P()px",[ue.Width+-y]))),t.setAttribute("height",m(B("%f%P()px",[ue.Height+-v]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y])));break}default:vt===5&&(t.setAttribute("width",m(B("%f%P()px",[ue.Width+-y]))),t.setAttribute("height",m(B("%f%P()px",[ue.Height+-v]))),e.setAttribute("style",m(B("top: %f%P()px; left: %f%P()px;",[e.offsetTop+v,e.offsetLeft+y]))))}}function zn(e){if(bn(e)!=null){const n=document.getElementById(e.id+"Svg");n.ondragstart=r=>{r.preventDefault()},n.onmousedown=r=>{let s;const o=bn(document.getElementById(e.id));if(o!=null){const l=o.Points;s=[Re(l),Xt(l)]}else s=[void 0,void 0];const i=Ze(r.offsetX,r.offsetY);let u;if(Br(E(l=>Ln(i,l),E(C,T(l=>l!=null,w([s[0],s[1]])))),{Compare:ft})<5){const l=document.getElementById(e.id+"Polyline");u=a=>{sa(e,n,l,a)}}else u=l=>{Bs(e,n,l)};document.addEventListener("mousemove",u),n.onmouseup=l=>{document.removeEventListener("mousemove",u)}}}}function er(e){e.oncontextmenu=t=>{t.preventDefault(),document.getElementById("playArea").removeChild(e)}}function oa(e,t,n,r){let s,o;const i=r?["history history-correct",'<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>',"通信成功！"]:["history history-wrong",'<span class="material-symbols-outlined history-wrong" translate="no">error</span>',"通信失敗…"],u=i[0];return`
        <div class="history-container ${u}"">
            ${i[1]}<span class ="${u}">${hn(e)} [${s=t,$(s)}] -> ${o=n,$(o)} ${i[2]}</span>
        </div>
        `}function ia(e){let t;const n=document.activeElement.id;let r,s;switch(n){case"sourceInput":{r=0,s=n;break}case"destinationInput":{r=0,s=n;break}default:r=1}switch(r){case 0:{e.key==="Escape"&&document.getElementById(s).blur();break}case 1:{const o=vn("active",(t=document.getElementById("helpWindow").classList,Array.from(t)),{Equals:(u,l)=>u===l,GetHashCode:it});switch(e.key){case"\\":{const u=E(l=>document.getElementById(l),w(["sourceInput","destinationInput"]));o||(Q(_n(a=>a.value==="",u),Re(u)).focus(),e.preventDefault());break}case"?":{A(u=>{document.getElementById(u).classList.toggle("active")},w(["helpWindow","helpBarrier"]));break}case"Escape":{o&&A(u=>{document.getElementById(u).classList.remove("active")},w(["helpWindow","helpBarrier"]));break}}break}}}function ua(){document.getElementById("helpButton").onclick=a=>{A(c=>{document.getElementById(c).classList.toggle("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpBarrier").onclick=a=>{A(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))},document.getElementById("helpClose").onclick=a=>{A(c=>{document.getElementById(c).classList.remove("active")},w(["helpWindow","helpBarrier"]))};const t=document.getElementById("playArea").getBoundingClientRect(),n=w([new be(0,[Qe("device1","クライアント(1)","10.0.0.1","255.255.255.0",new W(0,0,100,100),new q(0+t.left,100+t.top))]),new be(0,[Qe("device2","クライアント(2)","10.0.0.2","255.255.255.0",new W(0,0,100,100),new q(150+t.left,100+t.top))]),new be(1,[Nt("device3","ルータ(1)","10.0.0.254","255.255.255.0",new W(0,0,100,35),new q(300+t.left,100+t.top))]),new be(0,[Qe("device4","クライアント(3)","10.0.1.18","255.255.255.240",new W(0,0,100,100),new q(450+t.left,100+t.top))]),new be(0,[Qe("device5","クライアント(4)","10.0.1.19","255.255.255.240",new W(0,0,100,100),new q(600+t.left,100+t.top))]),new be(1,[Nt("device6","ルータ(2)","10.0.1.30","255.255.255.240",new W(0,0,100,35),new q(750+t.left,100+t.top))]),new be(2,[mn("device7","ハブ(1)",new W(0,0,100,35),new q(900+t.left,100+t.top))])]);E(a=>document.getElementById("playArea").appendChild(a),E(Zu,n));const r=w([ze("lancable1",new fe(5,[]),"LANケーブル(1)",E(Ge,ge(" ","5,5 195,45")),new W(0,0,200,50),new q(100+t.left,30+t.top)),ze("lancable2",new fe(5,[]),"LANケーブル(2)",E(Ge,ge(" ","5,5 195,45")),new W(0,0,200,50),new q(300+t.left,30+t.top)),ze("lancable3",new fe(5,[]),"LANケーブル(3)",E(Ge,ge(" ","5,5 195,45")),new W(0,0,200,50),new q(500+t.left,30+t.top)),ze("lancable4",new fe(5,[]),"LANケーブル(4)",E(Ge,ge(" ","5,5 195,45")),new W(0,0,200,50),new q(700+t.left,30+t.top))]);E(a=>document.getElementById("playArea").appendChild(a),E(Qn,r)),A(a=>{At(a),_t(a),Ct(a)},E(a=>document.getElementById(a),E(Zn,n))),A(a=>{tn(a)},E(a=>document.getElementById(a),E(Zn,T(a=>en(a)?!0:$t(a),n)))),A(a=>{zn(a),er(a)},E(a=>document.getElementById(a),E(a=>a.Id,r)));const s=document.getElementById("submitButton");s.onclick=a=>{let c,d,p,f,h;const b=E(C,T(N=>N!=null,E(Bt,w((c=document.getElementById("playArea").getElementsByClassName("device-container"),Array.from(c)))))),I=E(C,T(N=>N!=null,E(bn,w((d=document.getElementById("playArea").getElementsByClassName("cable-container"),Array.from(d)))))),y=document.getElementById("errorArea"),v=document.getElementById("outputArea");y.innerText="",v.innerText="";const _=document.getElementById("sourceInput"),P=document.getElementById("destinationInput"),k=pn(_.value),R=pn(P.value);if(k.tag===0){const N=k.fields[0];if(R.tag===0){const K=R.fields[0],$e=_n(O=>Is(N,O),T(O=>en(O)?!0:$t(O),b));if($e!=null){const O=$e;if(Bn(T(We=>gn(O,We),I)))y.innerText=(p=hn(O),f=$(N),m(g("%s [%s] はLANケーブルに繋がっていません。"))(p)(f));else{let We;const ue=hn(O),vt=$(N),ve=$(K);We=m(g('<span class="history history-lightgray">%s [%s] -> %s 接続中…'))(ue)(vt)(ve),v.innerHTML=We;const xs=oa(O,N,K,ta(I,b,128,K,O));switch(v.innerHTML=xs,document.activeElement.id){case"sourceInput":{_.focus();break}case"destinationInput":{P.focus();break}}}}else y.innerText=(h=$(N),m(g("IPv4 %s を持つデバイスが見つかりません。"))(h)),_.focus()}else{switch(R.fields[0].tag){case 2:{y.innerText="送信先 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="送信先 IPv4 の数値の範囲が正しくありません。";break}default:y.innerText="送信先 IPv4 を入力してください。"}P.focus()}}else{switch(k.fields[0].tag){case 2:{y.innerText="送信元 IPv4 の形式が正しくありません。";break}case 3:{y.innerText="送信元 IPv4 の数値の範囲が正しくありません。";break}default:y.innerText="送信元 IPv4 を入力してください。"}_.focus()}};const o=document.getElementById("addClientButton");o.onclick=a=>{let c,d;const p=document.getElementById("playArea"),f=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=Z(T(en,E(C,T(y=>y!=null,E(Bt,w((c=p.getElementsByClassName("device-container"),Array.from(c))))))))+1|0,I=m(B("client%d%P()",[b]));d=ys(Qe(I,m(B("クライアント(%d%P())",[b])),"10.0.0.1","255.255.255.0",new W(0,0,100,100),new q(0+f.left,0+f.top))),p.insertBefore(d,h),At(document.getElementById(I)),_t(document.getElementById(I)),Ct(document.getElementById(I)),tn(document.getElementById(I))};const i=document.getElementById("addRouterButton");i.onclick=a=>{let c,d,p;const f=document.getElementById("playArea"),h=f.getBoundingClientRect(),b=f.getElementsByClassName("cable-container").item(0),I=Z(T($t,E(C,T(v=>v!=null,E(Bt,w((c=f.getElementsByClassName("device-container"),Array.from(c))))))))|0,y=m(B("router%d%P()",[I+1]));d=ws((p=I|0,Nt(y,m(B("ルータ(%d%P())",[p+1])),`10.0.${p}.254`,"255.255.255.0",new W(0,0,100,35),new q(0+h.left,0+h.top)))),f.insertBefore(d,b),At(document.getElementById(y)),_t(document.getElementById(y)),Ct(document.getElementById(y)),tn(document.getElementById(y))};const u=document.getElementById("addHubButton");u.onclick=a=>{let c,d;const p=document.getElementById("playArea"),f=p.getBoundingClientRect(),h=p.getElementsByClassName("cable-container").item(0),b=Z(T(fn,E(C,T(y=>y!=null,E(Bt,w((c=p.getElementsByClassName("device-container"),Array.from(c))))))))+1|0,I=m(B("hub%d%P()",[b]));d=Es(mn(I,m(B("ハブ(%d%P())",[b])),new W(0,0,100,35),new q(0+f.left,0+f.top))),p.insertBefore(d,h),At(document.getElementById(I)),_t(document.getElementById(I)),Ct(document.getElementById(I))};const l=document.getElementById("addLANCableButton");l.onclick=a=>{let c;const d=document.getElementById("playArea"),p=d.getBoundingClientRect(),f=d.getElementsByClassName("cable-container").length+1|0,h=m(B("cable%d%P()",[f]));c=Qn(ze(h,new fe(5,[]),m(B("LANケーブル(%d%P())",[f])),E(Ge,ge(" ","5,5 195,45")),new W(0,0,200,50),new q(0+p.left,0+p.top))),d.appendChild(c);const b=document.getElementById(h);zn(b),er(b)},document.onkeydown=a=>{ia(a)}}const aa=`
        <h2>このサイトについて</h2>
        <p>
            <span translate="no">taidalab</span>（タイダラブ）は、<span translate="no">taidalog</span> が作成したプログラム置き場です。<br>
            10進数と2進数の変換の反復練習ツールなど、高校の「情報&#8544;」の学習ツールを中心に公開しています。<br>
            <span translate="no">F#</span> で書いたものを <span translate="no">Fable</span> で <span translate="no">JavaScript</span> にトランスパイルしています。<span translate="no">F#</span> 楽しい。
        </p>
        <h2>それぞれのページについて</h2>
        <dl id="explanation" class="explanation">
            <dt>
                <h3><a href="/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                ${cn}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                ${Yr}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                ${Kr}
            </dd>

            <dt>
                <h3><a href="/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                ${Zr}
            </dd>

            <dt>
                <h3><a href="/endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                ${Ur}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                ${Qr}
            </dd>

            <dt>
                <h3><a href="/endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                ${dn}
            </dd>

            <dt>
                <h3><a href="/endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                ${rs}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                ${is}
            </dd>

            <dt>
                <h3><a href="/endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                ${as}
            </dd>

            <dt>
                <h3><a href="/endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                ${cs}
            </dd>
            
            <dt>
                <h3><a href="/iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                ${fs}
            </dd>
            
            <dt>
                <h3><a href="/network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                ${vs}
            </dd>
        </dl>`,la=`\r
        <p>著作権は作成者 (<span translate="no">taidalog</span>) が所有しています。</p>\r
        <p>利用に必要な通信料等は利用者の負担となります。</p>\r
        <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\r
        <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\r
        <p>2022年6月11日</p>`,ca=`\r
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
        </p>`;function Hn(e){document.title=e.title;const t=document.querySelector("header");t.innerHTML=e.headerContent,t.className=e.headerColorClass,document.getElementById("hamburgerButton").onclick=s=>{document.querySelector("aside").classList.toggle("flagged"),document.getElementById("barrier").classList.toggle("flagged"),document.querySelector("main").classList.toggle("flagged")},document.getElementById("barrier").onclick=s=>{document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")};const n=document.querySelector("#headerTitle");n.innerHTML=e.headerTitle;const r=document.querySelector("main");r.innerHTML=e.mainContent,e.questionContent!==""&&(document.querySelector("#questionArea").innerHTML=e.questionContent),e.buttonColorClass!==""&&(document.querySelector("#submitButton").className=e.buttonColorClass),e.initFunc()}function As(e){window.history.pushState(tt(),"",e.pathname),Hn(e)}function _s(e){window.history.replaceState(tt(),"",e.pathname),Hn(e)}class M extends Ne{constructor(t,n,r,s,o,i,u,l,a){super(),this.pathname=t,this.title=n,this.headerContent=r,this.headerColorClass=s,this.headerTitle=o,this.mainContent=i,this.buttonColorClass=u,this.questionContent=l,this.initFunc=a}}function bt(e,t,n){switch(Pt(g("%A"))(e),e){case"/":return new M("/","taidalab",Ue,"home",'<h1 translate="no">taidalab</h1>',t,"","",n);case"/endless-binary/":return new M("/endless-binary/","10進数↔2進数 - taidalab",Ue,"home",'<h1>10進数↔︎2進数 - <span translate="no">taidalab</span></h1>',t,"","",n);case"/endless-binary/dec2bin-1/":return new M("/endless-binary/dec2bin-1/","10進数→2進数 (1) - taidalab",J,"dec2bin",'<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 dec2bin",he,n);case"/endless-binary/dec2bin-1/4/":return new M("/endless-binary/dec2bin-1/4/","10進数→2進数 (1) - taidalab",J,"dec2bin",'<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 dec2bin",he,n);case"/endless-binary/dec2bin-2/":return new M("/endless-binary/dec2bin-2/","10進数→2進数 (2) - taidalab",J,"dec2bin",'<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 dec2bin",he,n);case"/endless-binary/bin2dec-1/":return new M("/endless-binary/bin2dec-1/","2進数→10進数 (1) - taidalab",J,"bin2dec",'<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 bin2dec",he,n);case"/endless-binary/bin2dec-2/":return new M("/endless-binary/bin2dec-2/","2進数→10進数 (2) - taidalab",J,"bin2dec",'<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 bin2dec",he,n);case"/endless-binary/power-of-two-1/":return new M("/endless-binary/power-of-two-1/","2のn乗 - taidalab",J,"power-of-two",'<h1>2のn乗 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 power-of-two",he,n);case"/endless-binary/power-of-two-2/":return new M("/endless-binary/power-of-two-2/","2のn乗-1 - taidalab",J,"power-of-two",'<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 power-of-two",he,n);case"/endless-binary/addition/":return new M("/endless-binary/addition/","加算 - taidalab",J,"addition",'<h1>加算 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 addition",Ut,n);case"/endless-binary/addition/4/":return new M("/endless-binary/addition/4/","加算 - taidalab",J,"addition",'<h1>加算 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 addition",Ut,n);case"/endless-binary/subtraction/":return new M("/endless-binary/subtraction/","減算 - taidalab",J,"subtraction",'<h1>減算 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 subtraction",Ut,n);case"/endless-binary/complement/":return new M("/endless-binary/complement/","補数 - taidalab",J,"complement",'<h1>補数 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 complement",ao,n);case"/endless-binary/dec2hex/":return new M("/endless-binary/dec2hex/","10進数→16進数 - taidalab",J,"dec2hex",'<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 dec2hex",he,n);case"/endless-binary/hex2dec/":return new M("/endless-binary/hex2dec/","16進数→10進数 - taidalab",J,"hex2dec",'<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 hex2dec",he,n);case"/iro-iroiro/":return new M("/iro-iroiro/","色いろいろ - taidalab",J,"iro-iroiro",'<h1>色いろいろ - <span translate="no">taidalab</span></h1>',t,"submit-button iro-iroiro","",n);case"/network-simulator/":return new M("/network-simulator/","ネットワークシミュレータ - taidalab",J,"network-simulator",'<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>',t,"submit-button network-simulator","",n);case"/about/":return new M("/about/","about - taidalab",Ue,"home",'<h1>about - <span translate="no">taidalab</span></h1>',t,"","",n);case"/terms/":return new M("/terms/","ご利用について - taidalab",Ue,"home",'<h1>ご利用について - <span translate="no">taidalab</span></h1>',t,"","",n);case"/information-policy/":return new M("/information-policy/","情報の外部送信について - taidalab",Ue,"home",'<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>',t,"","",n);default:return new M("/404/","404: Page Not Found - taidalab",Ue,"not-found",'<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>',t,"submit-button display-order-3 not-found",he,n)}}function tr(e){const t=document.getElementById("numberInput"),n=Je(t.value),r=Ie(n);if(t.focus(),r.tag===0){const s=r.fields[0];document.getElementById("errorArea").innerHTML="";const o=pe(ie(9,s)),i=de(s)|0,u=qe(se(3," ",x(i))),l=document.getElementById("outputArea"),a=Ke("<br>",w([ct(i===F(e,511,!1,32),o,2,u,10),l.innerHTML]));l.innerHTML=a,i!==F(e,511,!1,32)||_s(bt("/",hr,()=>{}))}else document.getElementById("errorArea").innerHTML=Oe(e,n,r.fields[0])}function da(){document.getElementById("questionSpan").innerText=x(404),document.getElementById("srcRadix").innerText=m(g("(%d)"))(10),document.getElementById("dstRadix").innerText=x(2),document.getElementById("binaryRadix").innerHTML=m(g("<sub>(%d)</sub>"))(2),document.getElementById("submitButton").onclick=e=>{e.preventDefault(),tr(x(404))},document.getElementById("inputArea").onsubmit=e=>{e.preventDefault(),tr(x(404))}}class nr extends gt{constructor(t,n){super(),this.tag=t,this.fields=n}cases(){return["Choice1Of2","Choice2Of2"]}}function Wt(e){switch(e){case"/":return[e,hr,()=>{document.onkeydown=t=>{}}];case"/endless-binary/":return[e,Ci,()=>{fa()}];case"/endless-binary/dec2bin-1/":return[e,ne(cn,"help-color dec2bin"),()=>{qi()}];case"/endless-binary/dec2bin-1/4/":return[e,ne(cn,"help-color dec2bin"),()=>{Wi()}];case"/endless-binary/dec2bin-2/":return[e,ne(Yr,"help-color dec2bin"),()=>{Xi()}];case"/endless-binary/bin2dec-1/":return[e,ne(Kr,"help-color bin2dec"),()=>{Qi()}];case"/endless-binary/bin2dec-2/":return[e,ne(Zr,"help-color bin2dec"),()=>{tu()}];case"/endless-binary/power-of-two-1/":return[e,ne(Ur,"help-color power-of-two"),()=>{su()}];case"/endless-binary/power-of-two-2/":return[e,ne(Qr,"help-color power-of-two"),()=>{uu()}];case"/endless-binary/addition/":return[e,ne(dn,"help-color addition"),()=>{lu()}];case"/endless-binary/addition/4/":return[e,ne(dn,"help-color addition"),()=>{cu()}];case"/endless-binary/subtraction/":return[e,ne(rs,"help-color subtraction"),()=>{du()}];case"/endless-binary/complement/":return[e,ne(is,"help-color complement"),()=>{pu()}];case"/endless-binary/dec2hex/":return[e,ne(as,"help-color dec2hex"),()=>{wu()}];case"/endless-binary/hex2dec/":return[e,ne(cs,"help-color hex2dec"),()=>{vu()}];case"/iro-iroiro/":return[e,xu,()=>{Ru()}];case"/network-simulator/":return[e,na,()=>{ua()}];case"/about/":return[e,aa,()=>{document.onkeydown=t=>{}}];case"/terms/":return[e,la,()=>{document.onkeydown=t=>{}}];case"/information-policy/":return[e,ca,()=>{document.onkeydown=t=>{}}];default:return["/404/",xi,()=>{da()}]}}function Cs(e){let t;Hn((t=Wt(e),bt(t[0],t[1],t[2])))}function pa(e){return zr("^http://localhost:8080/",e)?new nr(0,[void 0]):new nr(1,[void 0])}function ma(e){return pa(e).tag!==1}function nn(e,t){t.onclick=n=>{n.preventDefault(),e()}}function fa(){A(e=>{document.getElementById(e[0]).onclick=t=>{let n;As((n=Wt(e[1]),bt(n[0],n[1],n[2])))}},w([["buttonED2B1","/endless-binary/dec2bin-1/"],["buttonED2B2","/endless-binary/dec2bin-2/"],["buttonEB2D1","/endless-binary/bin2dec-1/"],["buttonEB2D2","/endless-binary/bin2dec-2/"],["buttonEPOT1","/endless-binary/power-of-two-1/"],["buttonEPOT2","/endless-binary/power-of-two-2/"],["buttonEBAD","/endless-binary/addition/"],["buttonEBSB","/endless-binary/subtraction/"],["buttonECMP","/endless-binary/complement/"],["buttonED2H","/endless-binary/dec2hex/"]]))}function ha(e,t){let n,r,s,o,i,u,l,a,c,d;const p=document.querySelector("aside").getElementsByTagName("a");d=Array.from(p),c=d.filter(f=>f.id!=="asideSoon"),a=c.filter(f=>f.pathname!=="/"),(n=(r=[e,t.href,t],[r[0]!=="/404/",ma(r[1]),r[2]]),s=n[1],o=n[2],n[0]?s?(i=o,()=>{nn(()=>{let f;As((f=Wt(i.pathname),bt(f[0],f[1],f[2]))),a.forEach(b=>{b.classList.remove("current-location")}),a.filter(b=>b.pathname===window.location.pathname).forEach(b=>{b.classList.add("current-location")}),document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},i)}):()=>{}:s?(u=o,()=>{nn(()=>{let f;_s((f=Wt(u.pathname),bt(f[0],f[1],f[2]))),a.forEach(b=>{b.classList.remove("current-location")}),a.filter(b=>b.pathname===window.location.pathname).forEach(b=>{b.classList.add("current-location")}),document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},u)}):(l=o,()=>{nn(()=>{window.location.replace(l.pathname),a.forEach(h=>{h.classList.remove("current-location")}),a.filter(h=>h.pathname===window.location.pathname).forEach(h=>{h.classList.add("current-location")}),document.querySelector("aside").classList.remove("flagged"),document.getElementById("barrier").classList.remove("flagged"),document.querySelector("main").classList.remove("flagged")},l)}))()}window.addEventListener("DOMContentLoaded",e=>{let t;Pt(g("%s"))("The begining of DOMContentLoaded"),document.body.innerHTML=lo,document.querySelector("footer").innerHTML=mo,document.querySelector("aside").innerHTML=co;const n=window.location.pathname;Pt(g("%s"))(n);const r=window.location.pathname;Cs(r),A(s=>{ha(r,s)},w((t=document.querySelector("aside").getElementsByTagName("a"),Array.from(t)))),Pt(g("%s"))("The end of DOMContentLoaded")});window.addEventListener("popstate",e=>{let t,n,r;const s=document.querySelector("aside").getElementsByTagName("a");r=Array.from(s),n=r.filter(i=>i.id!=="asideSoon"),t=n.filter(i=>i.pathname!=="/"),t.forEach(i=>{i.classList.remove("current-location")}),t.filter(i=>i.pathname===window.location.pathname).forEach(i=>{i.classList.add("current-location")}),Cs(window.location.pathname)});
