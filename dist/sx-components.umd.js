!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["sx-components"]={})}(this,(function(t){"use strict";function e(){}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,l=!1;function a(t,e,n,o){for(;t<e;){const i=t+(e-t>>1);n(i)<=o?t=i+1:e=i}return t}function u(t,e){l?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const t=a(1,i+1,(t=>e[n[t]].claim_order),e[l].claim_order)-1;o[l]=n[t]+1;const r=t+1;n[r]=l,i=Math.max(r,i)}const r=[],s=[];let c=e.length-1;for(let l=n[i]+1;0!=l;l=o[l-1]){for(r.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);r.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let l=0,a=0;l<s.length;l++){for(;a<r.length&&s[l].claim_order>=r[a].claim_order;)a++;const e=a<r.length?r[a]:null;t.insertBefore(s[l],e)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function h(t,e,n){l&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function p(){return m("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function b(t,e,n,o,i=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(e(r))return n(r),t.splice(o,1),i||(t.claim_info.last_index=o),r}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(e(r))return n(r),t.splice(o,1),i?t.claim_info.last_index--:t.claim_info.last_index=o,r}return o()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function x(t,e,n,o){return b(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o];n[i.name]||e.push(i.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)))}function y(t,e){return b(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>m(e)),!0)}function v(t,e,n){for(let o=n;o<t.length;o+=1){const n=t[o];if(8===n.nodeType&&n.textContent.trim()===e)return o}return t.length}function k(t,e,n){t.classList[n?"add":"remove"](e)}class w{constructor(t){this.e=this.n=null,this.l=t}m(t,e,n=null){this.e||(this.e=d(e.nodeName),this.t=e,this.l?this.n=this.l:this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}function E(t){const e={};for(const n of t)e[n.name]=n.value;return e}function T(t){c=t}function A(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.on_mount.push(t)}function N(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const M=[],C=[],H=[],L=[],S=Promise.resolve();let j=!1;function I(t){H.push(t)}let O=!1;const R=new Set;function B(){if(!O){O=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];T(e),D(e.$$)}for(T(null),M.length=0;C.length;)C.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];R.has(e)||(R.add(e),e())}H.length=0}while(M.length);for(;L.length;)L.pop()();j=!1,O=!1,R.clear()}}function D(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const P=new Set;let G,V;function q(t,e){t&&t.i&&(P.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),G.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function F(t,e,o,s){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,o),s||I((()=>{const e=l.map(n).filter(r);a?a.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(I)}function J(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(M.push(t),j||(j=!0,S.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,n,r,s,a,u,h=[-1]){const d=c;T(t);const m=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:h,skip_bound:!1};let p=!1;if(m.ctx=r?r(t,n.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return m.ctx&&a(m.ctx[e],m.ctx[e]=i)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](i),p&&K(t,e)),n})):[],m.update(),p=!0,i(m.before_update),m.fragment=!!s&&s(m.ctx),n.target){if(n.hydrate){l=!0;const t=_(n.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();n.intro&&q(t.$$.fragment),F(t,n.target,n.anchor,n.customElement),l=!1,B()}T(d)}function U(t){let e,n,o=t[1](t[0])+"";return{c(){e=new w,n=p(),this.h()},l(t){e=function(t){const e=v(t,"HTML_TAG_START",0),n=v(t,"HTML_TAG_END",e);if(e===n)return new w;const o=t.splice(e,n+1);return f(o[0]),f(o[o.length-1]),new w(o.slice(1,o.length-1))}(t),n=p(),this.h()},h(){e.a=n},m(t,i){e.m(o,t,i),h(t,n,i)},p(t,n){3&n&&o!==(o=t[1](t[0])+"")&&e.p(o)},d(t){t&&f(n),t&&e.d()}}}function W(t){let n,o=t[1]&&U(t);return{c(){o&&o.c(),n=p(),this.c=e},l(t){o&&o.l(t),n=p()},m(t,e){o&&o.m(t,e),h(t,n,e)},p(t,[e]){t[1]?o?o.p(t,e):(o=U(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:e,o:e,d(t){o&&o.d(t),t&&f(n)}}}function X(t,e,n){let o,{src:i}=e;return A((async()=>{var t;n(1,o=(await(t=()=>import("https://unpkg.com/marked@2.1.2/lib/marked.esm.js"),t())).default)})),t.$$set=t=>{"src"in t&&n(0,i=t.src)},[i,o]}"function"==typeof HTMLElement&&(V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(r);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){J(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Y extends V{constructor(t){super(),Q(this,{target:this.shadowRoot,props:E(this.attributes),customElement:!0},X,W,s,{src:0}),t&&(t.target&&h(t.target,this,t.anchor),t.props&&(this.$set(t.props),B()))}static get observedAttributes(){return["src"]}get src(){return this.$$.ctx[0]}set src(t){this.$set({src:t}),B()}}function Z(t){let e,n,o,r,s,c;return o=new Y({props:{src:t[1]}}),{c(){var t;e=d("div"),n=d("div"),(t=o.$$.fragment)&&t.c(),this.h()},l(t){e=x(t,"DIV",{});var i=_(e);n=x(i,"DIV",{class:!0});var r,s,c=_(n);r=o.$$.fragment,s=c,r&&r.l(s),c.forEach(f),i.forEach(f),this.h()},h(){$(n,"class","markdown-body"),k(n,"content",t[5]),k(e,"mask",t[4])},m(i,l){var a;h(i,e,l),u(e,n),F(o,n,null),t[7](n),t[8](e),r=!0,s||(c=[g(n,"click",(a=t[6],function(t){return t.stopPropagation(),a.call(this,t)})),g(e,"click",t[2])],s=!0)},p(t,i){const r={};2&i&&(r.src=t[1]),o.$set(r),32&i&&k(n,"content",t[5]),16&i&&k(e,"mask",t[4])},i(t){r||(q(o.$$.fragment,t),r=!0)},o(t){z(o.$$.fragment,t),r=!1},d(n){n&&f(e),J(o),t[7](null),t[8](null),s=!1,i(c)}}}function tt(t){let n,o,r,s,c,l,a=t[0]&&Z(t);return{c(){a&&a.c(),n=m(" "),o=d("a"),r=m("Help"),this.c=e,this.h()},l(t){a&&a.l(t),n=function(t){return y(t," ")}(t),o=x(t,"A",{href:!0});var e=_(o);r=y(e,"Help"),e.forEach(f),this.h()},h(){$(o,"href","#"),k(o,"button",t[3])},m(e,i){a&&a.m(e,i),h(e,n,i),h(e,o,i),u(o,r),t[9](o),s=!0,c||(l=g(o,"click",t[2]),c=!0)},p(t,[e]){t[0]?a?(a.p(t,e),1&e&&q(a,1)):(a=Z(t),a.c(),q(a,1),a.m(n.parentNode,n)):a&&(G={r:0,c:[],p:G},z(a,1,1,(()=>{a=null})),G.r||i(G.c),G=G.p),8&e&&k(o,"button",t[3])},i(t){s||(q(a),s=!0)},o(t){z(a),s=!1},d(e){a&&a.d(e),e&&f(n),e&&f(o),t[9](null),c=!1,l()}}}function et(t,e,n){let o,i,r,{src:s}=e,{visible:c}=e;return t.$$set=t=>{"src"in t&&n(1,s=t.src),"visible"in t&&n(0,c=t.visible)},[c,s,function(){n(0,c=!c)},o,i,r,function(e){N.call(this,t,e)},function(t){C[t?"unshift":"push"]((()=>{r=t,n(5,r)}))},function(t){C[t?"unshift":"push"]((()=>{i=t,n(4,i)}))},function(t){C[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}customElements.define("sx-markdown",Y);class nt extends V{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import url('https://unpkg.com/github-markdown-css@4.0.0/github-markdown.css');.button{position:fixed;top:0;right:0;margin-top:1rem;margin-right:1rem}.mask{background:rgba(0, 0, 0, 0.5)}.mask{position:fixed;inset:0;display:flex;justify-content:center;align-items:center}.content{max-width:75%;max-height:75%;padding:1rem;overflow:scroll}.content{background:white}</style>",Q(this,{target:this.shadowRoot,props:E(this.attributes),customElement:!0},et,tt,s,{src:1,visible:0,toggle:2}),t&&(t.target&&h(t.target,this,t.anchor),t.props&&(this.$set(t.props),B()))}static get observedAttributes(){return["src","visible","toggle"]}get src(){return this.$$.ctx[1]}set src(t){this.$set({src:t}),B()}get visible(){return this.$$.ctx[0]}set visible(t){this.$set({visible:t}),B()}get toggle(){return this.$$.ctx[2]}}customElements.define("sx-help",nt),t.Help=nt,t.Markdown=Y,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));
