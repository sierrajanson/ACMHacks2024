"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[2897],{95085:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(35143),o=r(91967),s=r(18690),i=r(69098),l=r(5632),a=r(42553),u=r(46053),p=(r(81806),r(76460),r(85842));let c=0,d=class extends((0,a.Te)((0,i.O)((0,l.sA)(o.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(s.Ru)}};(0,n._)([(0,u.MZ)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,n._)([(0,u.MZ)({type:String})],d.prototype,"title",void 0),(0,n._)([(0,u.MZ)({clonable:!1,value:null})],d.prototype,"parent",null),(0,n._)([(0,u.MZ)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,n._)([(0,p.$)("esri.analysis.Analysis")],d);const y=d},37546:(e,t,r)=>{r.d(t,{P:()=>y});var n=r(50076),o=r(53514),s=r(24387),i=r(90534),l=r(49723),a=r(19258),u=r(49140),p=r(46053),c=r(95474),d=r(79453);function y(e){const t=e?.origins??[void 0];return(r,n)=>{const o=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const n=(0,a.z4)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,d.r)(e,t,r);return n.type===String?o:"function"==typeof n.type?new n.type({url:o}):void 0},write:{writer(t,o,l,a){if(!a?.resources)return"string"==typeof t?void(o[l]=(0,d.t)(t,a)):void(o[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(p,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),v=n.type!==String&&(!(0,s.H)(this)||a?.origin&&this.originIdOf(r)>(0,u.aB)(a.origin)),m={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:l,context:a,params:e};a?.portalItem&&y&&!(0,i.oP)(y)?v&&e?.contentAddressed?f(m):v?function(e){const{context:t,targetUrl:r,params:n,value:o,dest:s,targetPropertyName:l}=e;if(!t.portalItem)return;const a=t.portalItem.resourceFromPath(r),u=h(o,r,t),p=(0,c.n)(u),d=(0,i.Zo)(a.path),y=n?.compress??!1;p===d?(t.resources&&g({...e,resource:a,content:u,compress:y,updates:t.resources.toUpdate}),s[l]=r):f(e)}(m):function(e){let{context:t,targetUrl:r,dest:n,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[o]=r)}(m):a?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,i.w8)(y)||v)?f(m):o[l]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,p.rM)(r,e,n);for(const e in o)t[e]=o[e]}}}function f(e){const{targetUrl:t,params:r,value:s,context:a,dest:u,targetPropertyName:p}=e;if(!a.portalItem)return;const y=(0,d.p)(t),f=h(s,t,a);if(r?.contentAddressed&&"json"!==f.type)return void a.messages?.push(new n.A("persistable:contentAddressingUnsupported",`Property "${p}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const v=r?.contentAddressed&&"json"===f.type?(0,o.d)(f.jsonString):y?.filename??(0,l.lk)(),m=(0,i.fj)(r?.prefix??y?.prefix,v),b=`${m}.${(0,c.n)(f)}`;if(r?.contentAddressed&&a.resources&&"json"===f.type){const e=a.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===b}))??a.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===b}));if(e)return void(u[p]=e.resource.itemRelativeUrl)}const w=a.portalItem.resourceFromPath(b);(0,i.w8)(t)&&a.resources&&a.resources.pendingOperations.push((0,i.tk)(t).then((e=>{w.path=`${m}.${(0,c.n)({type:"blob",blob:e})}`,u[p]=w.itemRelativeUrl})).catch((()=>{})));const I=r?.compress??!1;a.resources&&g({...e,resource:w,content:f,compress:I,updates:a.resources.toAdd}),u[p]=w.itemRelativeUrl}function g(e){let{object:t,propertyName:r,updates:n,resource:o,content:s,compress:i}=e;n.push({resource:o,content:s,compress:i,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function h(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},24387:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>n})},22897:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(35143),o=r(95085);function s(e,t){return i(e)===i(t)}function i(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const l={json:{write:{writer:function(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var a=r(91967),u=r(69098),p=r(42553),c=r(30726),d=r(46053),y=(r(81806),r(76460),r(47249),r(85842)),f=r(37546),g=r(19247),h=r(731);let v=class extends((0,p.Te)((0,u.O)(a.A))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c.CM)(this.position,e.position)&&(0,c.CM)(this.elevationInfo,e.elevationInfo)&&s(this.feature,e.feature)}};(0,n._)([(0,d.MZ)({type:g.A,json:{write:{isRequired:!0}}})],v.prototype,"position",void 0),(0,n._)([(0,d.MZ)({type:h.A}),(0,f.P)()],v.prototype,"elevationInfo",void 0),(0,n._)([(0,d.MZ)(l)],v.prototype,"feature",void 0),v=(0,n._)([(0,y.$)("esri.analysis.LineOfSightAnalysisObserver")],v);const m=v;let b=class extends((0,p.Te)(u.P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c.CM)(this.position,e.position)&&(0,c.CM)(this.elevationInfo,e.elevationInfo)&&s(this.feature,e.feature)}};(0,n._)([(0,d.MZ)({type:g.A}),(0,f.P)()],b.prototype,"position",void 0),(0,n._)([(0,d.MZ)({type:h.A}),(0,f.P)()],b.prototype,"elevationInfo",void 0),(0,n._)([(0,d.MZ)(l)],b.prototype,"feature",void 0),b=(0,n._)([(0,y.$)("esri.analysis.LineOfSightAnalysisTarget")],b);const w=b;var I=r(94643),j=r(3975),x=r(68134),_=r(26346),M=r(42294),A=r(12482);const O=I.A.ofType(w);let Z=class extends o.A{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,x.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),x.pc))}get targets(){return this._get("targets")||new O}set targets(e){this._set("targets",(0,j.V)(e,this.targets,O))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==this.observer?.position||null==e)return null;const t=e=>"absolute-height"===(0,A.w7)(e.position,e.elevationInfo),r=this.observer.position,n=(0,M.fA)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if(null!=s.position){const t=(0,_.projectOrLoad)(s.position,e);if(null!=t.pending)return{pending:t.pending,extent:null};if(null!=t.geometry){const{x:e,y:r,z:o}=t.geometry;(0,M.iT)(n,[e,r,o])}}const o=(0,M.w1)(n,e);return t(this.observer)&&this.targets.every(t)||(o.zmin=void 0,o.zmax=void 0),{pending:null,extent:o}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,d.MZ)({type:["line-of-sight"]})],Z.prototype,"type",void 0),(0,n._)([(0,d.MZ)({type:m,json:{read:!0,write:!0}})],Z.prototype,"observer",void 0),(0,n._)([(0,d.MZ)({cast:j.H,type:O,nonNullable:!0,json:{read:!0,write:!0}})],Z.prototype,"targets",null),(0,n._)([(0,d.MZ)({value:null,readOnly:!0})],Z.prototype,"extent",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],Z.prototype,"spatialReference",null),(0,n._)([(0,d.MZ)({readOnly:!0})],Z.prototype,"requiredPropertiesForEditing",null),Z=(0,n._)([(0,y.$)("esri.analysis.LineOfSightAnalysis")],Z);const P=Z;var $=r(77717),S=r(25515),R=r(11270);const E=I.A.ofType(w);let z=class extends((0,R.q)((0,$.P)(S.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new P,this.opacity=1}initialize(){this.addHandles((0,x.wB)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),x.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new I.A}set targets(e){(0,j.V)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new P)}};(0,n._)([(0,d.MZ)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,n._)([(0,d.MZ)({type:["LineOfSightLayer"]})],z.prototype,"operationalLayerType",void 0),(0,n._)([(0,d.MZ)({type:m,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],z.prototype,"observer",null),(0,n._)([(0,d.MZ)({type:E,json:{read:!0,write:{ignoreOrigin:!0}}})],z.prototype,"targets",null),(0,n._)([(0,d.MZ)({nonNullable:!0,json:{read:!1,write:!1}})],z.prototype,"analysis",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],z.prototype,"fullExtent",null),(0,n._)([(0,d.MZ)({readOnly:!0})],z.prototype,"spatialReference",null),(0,n._)([(0,d.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],z.prototype,"opacity",void 0),(0,n._)([(0,d.MZ)({type:["show","hide"]})],z.prototype,"listMode",void 0),z=(0,n._)([(0,y.$)("esri.layers.LineOfSightLayer")],z);const U=z},95474:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(90534);function o(e){return s[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,n.Zo)(e);return a[t]||i}(e.url)}(e)]||l}const s={},i="text/plain",l=s[i],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)s[a[u]]=u},12482:(e,t,r)=>{r.d(t,{$7:()=>l,B:()=>i,M7:()=>p,XF:()=>u,tW:()=>a,w7:()=>s});r(31633);var n=r(59097);function o(e){return e?c:d}function s(e,t){return function(e,t){return t?.mode?t.mode:o(e).mode}(null!=e&&e.hasZ,t)}function i(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function l(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function u(e,t){t&&e.warn(".elevationInfo=",t)}function p(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const c={mode:"absolute-height",offset:0},d={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=2897.e75b2968.chunk.js.map