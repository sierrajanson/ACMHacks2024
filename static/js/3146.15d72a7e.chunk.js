"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[3146],{37888:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(24387);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,a.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},24387:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},10765:(e,t,r)=>{r.d(t,{save:()=>N,saveAs:()=>O});var a=r(18690),n=(r(50076),r(97924)),o=r(13096),i=r(11668),s=r(31933),l=r(62487),u=r(72945);const c="Feature Service",p="feature-layer-utils",d=`${p}-save`,f=`${p}-save-as`;function y(e){return{isValid:(0,s.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],r=[];for(const{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}function w(e){return m([e])}async function v(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):h(t,e)}async function h(e,t){if(e.reverse(),!t)return m(e);const r=await async function(e,t){let r=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(r))return r;r||={},function(e){e.layers||=[],e.tables||=[]}(r);const{layer:{url:a,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,r){const{url:a,customParameters:n,apiKey:o}=t,{serviceJSON:s,layersJSON:u}=await(0,i.Q)(a,{customParameters:n,apiKey:o}),c=S(e.layers,s.layers,r),p=S(e.tables,s.tables,r);e.layers=c.itemResources,e.tables=p.itemResources;const d=[...c.added,...p.added],f=u?[...u.layers,...u.tables]:[];await async function(e,t,r,a){const n=await async function(e){const t=[];e.forEach((e=>{let{type:r}=e;const a=(0,i.K)(r),n=l.S[a];t.push(n())}));const r=await Promise.all(t),a=new Map;return e.forEach(((e,t)=>{let{type:n}=e;a.set(n,r[t])})),a}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:r,layerId:t,sourceJSON:a.find((e=>{let{id:r}=e;return r===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),A(t,o,e)}))}(e,d,a,f)}(r,{url:a??"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),r}(t,e);for(const a of e)A(a.layer,a.layerJSON,r);return function(e,t){const r=[],a=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?a.push(t):r.push(t)}b(e.layers,r),b(e.tables,a)}(r,e),r}function b(e,t){if(e.length<2)return;const r=[];for(const{id:a}of e)r.push(a);(0,a.aI)(r.sort(I),t.slice().sort(I))&&e.sort(((e,r)=>{const a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function S(e,t,r){const n=(0,a.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:r}=t;e.push({id:r})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!r.includes(t)}))}}function A(e,t,r){e.isTable?P(r.tables,t):P(r.layers,t)}function P(e,t){const r=e.findIndex((e=>{let{id:r}=e;return r===t.id}));-1===r?e.push(t):e[r]=t}async function g(e,t){const{url:r,layerId:a,title:n,fullExtent:i,isTable:s}=e,l=(0,o.qg)(r);t.url=("FeatureServer"===l?.serverType?r:`${r}/${a}`)??null,t.title||=n,t.extent=null,s||null==i||(t.extent=await(0,u.sQ)(i)),(0,u.OM)(t,u.mm.METADATA),(0,u.OM)(t,u.mm.MULTI_LAYER),(0,u.LG)(t,u.mm.SINGLE_LAYER),s&&(0,u.LG)(t,u.mm.TABLE)}async function N(e,t){return(0,n.UN)({layer:e,itemType:c,validateLayer:y,createItemData:(e,t)=>v(t,[e]),errorNamePrefix:d},t)}async function O(e,t,r){return(0,n.Uh)({layer:e,itemType:c,validateLayer:y,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:t,setItemProperties:g},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>b,Uh:()=>I});var a=r(50076),n=r(37888),o=r(65308),i=r(70652),s=r(79942),l=r(72945),u=r(65526),c=r(24907);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function f(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if((0,u.X)(t),function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function m(e){const{newItem:t,itemType:r}=e;let a=i.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),f({...e,item:a}),a}function w(e){return(0,s.m)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,c.c)(t,{errorName:"layer-write:unsupported"},r),a}function h(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e),y(e);const u=r.portalItem,c=o?o(u):w(u),d=await v(r,c,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:d},u);return await(i?.(r,u)),h(u),await u.update({data:f}),(0,n.v)(c),await(s?.(u,c)),u}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e);const u=m(e),c=o?o(u):w(u),d=await v(r,c,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:d},u);return await i(r,u),h(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(u,f,t),r.portalItem=u,(0,n.v)(c),await(s?.(u,c)),u}},65526:(e,t,r)=>{r.d(t,{X:()=>i});var a=r(86560),n=r(50076),o=r(90924);function i(e){if(a.A.apiKey&&(0,o.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},24907:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>n});var a=r(50076);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let n=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new a.A(t,r,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((e=>{let{name:r}=e;return!(o.has(r)||t.includes(r))}))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);
//# sourceMappingURL=3146.15d72a7e.chunk.js.map