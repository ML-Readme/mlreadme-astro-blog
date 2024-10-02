(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var l=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>y(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let[h,e]=t;return h in i?i[h](e):void 0},a=t=>t.map(o),y=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([h,e])=>[h,o(e)]));class f extends HTMLElement{constructor(){super(...arguments);l(this,"Component");l(this,"hydrator");l(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},p=this.querySelectorAll("template[data-astro-template]");for(let r of p){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let u;try{u=this.hasAttribute("props")?y(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let d,m=this.hydrator(this);d=performance.now(),await m(this.Component,u,n,{client:this.getAttribute("client")}),d&&this.setAttribute("client-render-time",(performance.now()-d).toString()),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});l(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[p,{default:u}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),d=this.getAttribute("component-export")||"default";if(!d.includes("."))this.Component=p[d];else{this.Component=p;for(let m of d.split("."))this.Component=this.Component[m]}return this.hydrator=u,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}l(f,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",f)}})();