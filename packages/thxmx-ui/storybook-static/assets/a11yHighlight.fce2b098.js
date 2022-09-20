var s=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);import{w as g,a as m,S as v}from"./vendor.2e27e55e.js";import{E as u,H as r}from"./constants.3d4a2310.js";var p=s((I,n)=>{var H=function(e){return`
  outline: 2px dashed `.concat(e,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},a=g.document;n&&n.hot&&n.hot.decline&&n.hot.decline();var h=m.getChannel(),f=function(e){var t=r;l();var d=Array.from(new Set(e.elements)),o=a.createElement("style");o.setAttribute("id",t),o.innerHTML=d.map(function(c){return"".concat(c,`{
          `).concat(H(e.color),`
         }`)}).join(" "),a.head.appendChild(o)},l=function(){var e=r,t=a.getElementById(e);t&&t.parentNode.removeChild(t)};h.on(v,l);h.on(u.HIGHLIGHT,f)});export default p();
//# sourceMappingURL=a11yHighlight.fce2b098.js.map
