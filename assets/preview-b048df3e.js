var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{w as m}from"./es.object.get-own-property-descriptor-64192e07.js";import"./web.url.constructor-7a9c56ae.js";import"./es.number.is-integer-82e52ad3.js";import{a as f,S as u,e as p}from"./iframe-6d4c93be.js";import{m as k}from"./make-decorator-6f43e346.js";var L="links",l=m.document,h=m.HTMLElement,E=n(function(e){return f.getChannel().emit(p,e)},"navigate"),d=n(function(e){var r=e.target;if(r instanceof h){var v=r,i=v.dataset,o=i.sbKind,s=i.sbStory;(o||s)&&(e.preventDefault(),E({kind:o,story:s}))}},"linksListener"),a=!1,w=n(function(){a||(a=!0,l.addEventListener("click",d))},"on"),g=n(function(){a&&(a=!1,l.removeEventListener("click",d))},"off"),S=k({name:"withLinks",parameterName:L,wrapper:n(function(e,r){return w(),f.getChannel().once(u,g),e(r)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var H=[S];export{H as decorators};
//# sourceMappingURL=preview-b048df3e.js.map
