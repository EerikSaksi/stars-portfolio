function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,i,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(s){const r=l(n,e,o,c);t.p(r,s)}}let a,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[l].claim_order)-1;o[l]=e[t]+1;const i=t+1;e[i]=l,r=Math.max(i,r)}const i=[],c=[];let s=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,u=0;l<c.length;l++){for(;u<i.length&&c[l].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){f&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function $(){return _(" ")}function b(){return _("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function w(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function E(t,n){return v(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>_(n)),!0)}function k(t){return E(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function M(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function N(t){a=t}function j(){if(!a)throw new Error("Function called outside component initialization");return a}function C(t){j().$$.on_mount.push(t)}function I(t){j().$$.after_update.push(t)}function S(){const t=j();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function O(t,n){j().$$.context.set(t,n)}const B=[],T=[],q=[],z=[],F=Promise.resolve();let P=!1;function D(){P||(P=!0,F.then(K))}function G(t){q.push(t)}let H=!1;const J=new Set;function K(){if(!H){H=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];N(n),L(n.$$)}for(N(null),B.length=0;T.length;)T.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];J.has(n)||(J.add(n),n())}q.length=0}while(B.length);for(;z.length;)z.pop()();P=!1,H=!1,J.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,c){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=t.$$;s&&s.m(n,o),c||G((()=>{const n=l.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(G)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(n,e,i,c,s,l,u=[-1]){const d=a;N(n);const h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(B.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){f=!0;const t=x(e.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),f=!1,K()}N(d)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function st(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!ct.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ct.push(t,n)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const l=[c,s];return r.push(l),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const lt=t=>({intersecting:2&t,entry:1&t,observer:4&t}),ut=t=>({intersecting:t[1],entry:t[0],observer:t[2]});function at(t){let n;const e=t[9].default,o=s(e,t,t[8],ut);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||263&r)&&u(o,e,t,t[8],n?r:-1,lt,ut)},i(t){n||(W(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){o&&o.d(t)}}}function ft(t,n,e){let{$$slots:o={},$$scope:r}=n,{element:i=null}=n,{once:c=!1}=n,{root:s=null}=n,{rootMargin:l="0px"}=n,{threshold:u=0}=n,{entry:a=null}=n,{intersecting:f=!1}=n,{observer:d=null}=n;const h=S();let p=null,m=null;const g=()=>{e(2,d=new IntersectionObserver((t=>{t.forEach((t=>{e(0,a=t),e(1,f=t.isIntersecting)}))}),{root:s,rootMargin:l,threshold:u}))};return C((()=>(g(),()=>{d&&d.disconnect()}))),I((async()=>{null!==a&&(h("observe",a),a.isIntersecting&&(h("intersect",a),c&&d.unobserve(i))),await(D(),F),null!==i&&i!==m&&(d.observe(i),null!==m&&d.unobserve(m),m=i),p&&l!==p&&(d.disconnect(),m=null,g()),p=l})),t.$$set=t=>{"element"in t&&e(3,i=t.element),"once"in t&&e(4,c=t.once),"root"in t&&e(5,s=t.root),"rootMargin"in t&&e(6,l=t.rootMargin),"threshold"in t&&e(7,u=t.threshold),"entry"in t&&e(0,a=t.entry),"intersecting"in t&&e(1,f=t.intersecting),"observer"in t&&e(2,d=t.observer),"$$scope"in t&&e(8,r=t.$$scope)},[a,f,d,i,c,s,l,u,r,o]}class dt extends it{constructor(t){super(),rt(this,t,ft,at,c,{element:3,once:4,root:5,rootMargin:6,threshold:7,entry:0,intersecting:1,observer:2})}}export{C as A,n as B,st as C,s as D,u as E,h as F,t as G,T as H,dt as I,M as J,it as S,x as a,y as b,w as c,m as d,g as e,p as f,E as g,A as h,rt as i,tt as j,$ as k,b as l,nt as m,k as n,et as o,Y as p,Z as q,U as r,c as s,_ as t,X as u,ot as v,V as w,W as x,O as y,I as z};
