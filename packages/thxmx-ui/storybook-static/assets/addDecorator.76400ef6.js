import{w as A,r as C,g as E,t as h,u as _,n as T}from"./vendor.2e27e55e.js";var y="backgrounds",M;function L(o,r){return r||(r=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))}var s=A.document,I=A.window,P=function(){var r=I.matchMedia("(prefers-reduced-motion: reduce)");return r.matches},R=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;if(r==="transparent")return"transparent";if(e.find(function(t){return t.value===r}))return r;var n=e.find(function(t){return t.name===a});if(n)return n.value;if(a){var d=e.map(function(t){return t.name}).join(", ");C.warn(E(M||(M=L([`
        Backgrounds Addon: could not find the default color "`,`".
        These are the available colors for your story based on your configuration:
        `,`.
      `])),a,d))}return"transparent"},O=function(r){var e=Array.isArray(r)?r:[r];e.forEach($)},$=function(r){var e=s.getElementById(r);e&&e.parentElement.removeChild(e)},H=function(r,e){var a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{var n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},N=function(r,e,a){var n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{var d=s.createElement("style");d.setAttribute("id",r),d.innerHTML=e;var t="addon-backgrounds-grid".concat(a?"-docs-".concat(a):""),l=s.getElementById(t);l?l.parentElement.insertBefore(d,l):s.head.appendChild(d)}},G=function(r,e){var a,n=e.globals,d=e.parameters,t=(a=n[y])===null||a===void 0?void 0:a.value,l=d[y],i=h(function(){return l.disable?"transparent":R(t,l.values,l.default)},[l,t]),u=h(function(){return i&&i!=="transparent"},[i]),v=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",g=h(function(){var f="transition: background-color 0.3s;";return`
      `.concat(v,` {
        background: `).concat(i,` !important;
        `).concat(P()?"":f,`
      }
    `)},[i,v]);return _(function(){var f=e.viewMode==="docs"?"addon-backgrounds-docs-".concat(e.id):"addon-backgrounds-color";if(!u){O(f);return}N(f,g,e.viewMode==="docs"?e.id:null)},[u,g,e]),r()},z;function D(o,r){return r||(r=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))}var K=T(function(){},E(z||(z=D([`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `])))),Y=function(r,e){var a,n,d,t,l=e.globals,i=e.parameters,u=i[y].grid,v=((a=l[y])===null||a===void 0?void 0:a.grid)===!0&&u.disable!==!0,g=u.cellAmount,f=u.cellSize,p=u.opacity,S=e.viewMode==="docs",c;(n=i.grid)!==null&&n!==void 0&&n.cellSize?(c=i.grid.cellSize,K()):c=f;var j=i.layout===void 0||i.layout==="padded",w=j?16:0,m=(d=u.offsetX)!==null&&d!==void 0?d:S?20:w,b=(t=u.offsetY)!==null&&t!==void 0?t:S?20:w,B=h(function(){var k=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",x=["".concat(c*g,"px ").concat(c*g,"px"),"".concat(c*g,"px ").concat(c*g,"px"),"".concat(c,"px ").concat(c,"px"),"".concat(c,"px ").concat(c,"px")].join(", ");return`
      `.concat(k,` {
        background-size: `).concat(x,` !important;
        background-position: `).concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,`px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, `).concat(p,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(p,`) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, `).concat(p/2,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(p/2,`) 1px, transparent 1px) !important;
      }
    `)},[c]);return _(function(){var k=e.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(e.id):"addon-backgrounds-grid";if(!v){O(k);return}H(k,B)},[v,B,e]),r()},X=[Y,G];export{X as decorators};
//# sourceMappingURL=addDecorator.76400ef6.js.map
