"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[6087],{4583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var s=r(35143),i=(r(35238),r(16868)),o=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),n=r(77717),a=r(48611),p=r(90534),l=r(46053),u=r(40565),d=(r(47249),r(81806)),c=r(85842),h=r(17707),y=r(31608),m=r(25515),g=r(50076),f=r(49304),w=r(76460),v=r(50346),F=r(16783),_=r(40296),x=r(11316),O=r(77725),b=r(67478),S=r(76797);let R=class extends f.A{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=(0,_.f)(!1,!1),this.type="wfs",this.refresh=(0,v.sg)((async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await this.queryFeaturesJSON(e,t);return O.A.fromJSON(r)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return{count:r.count,extent:S.A.fromJSON(r.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.querySnapping(e,t)}async _createLoadOptions(e){const{url:t,customParameters:r,name:s,namespaceUri:i,fields:o,geometryType:n,maxRecordCount:a,maxPageCount:p,maxTotalRecordCount:l,swapXY:u}=this.layer,d="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!t)throw new g.A("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,x.Fu)(t,{customParameters:r,...e}));const c=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),h=c?await(0,x.O8)(this.wfsCapabilities,s,i,{spatialReference:d,customParameters:r,signal:e?.signal}):{...(0,x.YW)(o??[]),geometryType:n,name:s,namespaceUri:i,spatialReference:d,swapXY:u},m=(0,x.mG)(this.wfsCapabilities.readFeatureTypes(),h.name,h.namespaceUri),f=y.g.toJSON(h.geometryType),{operations:w}=this.wfsCapabilities,v=w.GetFeature.url,F=w.GetFeature.outputFormat;return{customParameters:r,featureType:m,fields:h.fields?.map((e=>e.toJSON()))??[],geometryField:h.geometryField,geometryType:f,getFeatureUrl:v,getFeatureOutputFormat:F,maxRecordCount:a,maxPageCount:p,maxTotalRecordCount:l,objectIdField:h.objectIdField,spatialReference:h.spatialReference?.toJSON(),swapXY:!!h.swapXY}}async _startWorker(e){const[t,r]=await(0,v.Lx)([this._createLoadOptions(e),(0,F.ho)("WFSSourceWorker",{...e,strategy:(0,d.A)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),s=t.error||r.error||null,i=r.value||null;if(s)throw i&&i.close(),s;const o=t.value;this._connection=r.value,this._workerHandler=this._connection.createInvokeProxy();const n=await this._workerHandler.load(o,e);for(const a of n.warnings)w.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:b.n$},extent:n.extent,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,_.F0)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:o.maxRecordCount,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,s._)([(0,l.MZ)()],R.prototype,"capabilities",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],R.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],R.prototype,"sourceJSON",void 0),(0,s._)([(0,l.MZ)()],R.prototype,"type",void 0),(0,s._)([(0,l.MZ)()],R.prototype,"wfsCapabilities",void 0),R=(0,s._)([(0,c.$)("esri.layers.graphics.sources.WFSSource")],R);var M,I=r(65624),C=r(31362),Z=r(74440),P=r(52908),T=r(11270),A=r(37534),j=r(94729),q=r(21617),E=r(5682),N=r(78817),U=r(95363),k=r(44135),J=r(76350),D=r(53430),Y=r(71401),Q=r(27937),H=r(97015),X=r(30973),W=r(13312);const $=(0,J.p)();let z=M=class extends((0,A.f)((0,C.d)((0,P.J)((0,Z.F)((0,I.dM)((0,N.e)((0,q.J)((0,E.j)((0,T.q)((0,j.A)((0,n.P)(m.A)))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:s,geometryType:i,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d}=e;return new M({customParameters:t,fields:r,geometryField:s,geometryType:i,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new R({layer:this}),this.spatialReference=W.A.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,D.yp)(this.renderer,this.fieldsIndex),(0,D.sv)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const s=e.filter((e=>e.name!==x.i5));this.geometryField&&s.unshift(new k.A({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,a.sM)(r,s.map((e=>e.toJSON())),t)}get parsedUrl(){return(0,p.An)(this.url)}set renderer(e){(0,D.yp)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,X.tn)(this,e)}createQuery(){const e=new H.A({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(H.A.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(H.A.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(H.A.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(H.A.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh();return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,s._)([(0,l.MZ)({readOnly:!0})],z.prototype,"capabilities",null),(0,s._)([(0,l.MZ)({type:String})],z.prototype,"copyright",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],z.prototype,"createQueryVersion",null),(0,s._)([(0,l.MZ)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],z.prototype,"customParameters",void 0),(0,s._)([(0,l.MZ)((0,b.P6)("dateFieldsTimeReference"))],z.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],z.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],z.prototype,"definitionExpression",void 0),(0,s._)([(0,l.MZ)({type:String})],z.prototype,"displayField",void 0),(0,s._)([(0,l.MZ)(U.Yj)],z.prototype,"elevationInfo",void 0),(0,s._)([(0,l.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"featureUrl",void 0),(0,s._)([(0,l.MZ)({type:[k.A],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],z.prototype,"fields",void 0),(0,s._)([(0,h.K)("fields")],z.prototype,"writeFields",null),(0,s._)([(0,l.MZ)($.fieldsIndex)],z.prototype,"fieldsIndex",void 0),(0,s._)([(0,l.MZ)({type:S.A,json:{name:"extent"}})],z.prototype,"fullExtent",void 0),(0,s._)([(0,l.MZ)()],z.prototype,"geometryField",void 0),(0,s._)([(0,l.MZ)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:y.g.read},write:{target:"layerDefinition.geometryType",writer:y.g.write,ignoreOrigin:!0},origins:{service:{read:y.g.read}}}})],z.prototype,"geometryType",void 0),(0,s._)([(0,l.MZ)({type:String})],z.prototype,"id",void 0),(0,s._)([(0,l.MZ)(U.kF)],z.prototype,"labelsVisible",void 0),(0,s._)([(0,l.MZ)({type:[Y.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Q.w},write:!0}})],z.prototype,"labelingInfo",void 0),(0,s._)([(0,l.MZ)(U.fV)],z.prototype,"legendEnabled",void 0),(0,s._)([(0,l.MZ)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,s._)([(0,l.MZ)({type:String})],z.prototype,"objectIdField",void 0),(0,s._)([(0,l.MZ)({type:["WFS"]})],z.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.MZ)({type:u.jz,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"maxRecordCount",void 0),(0,s._)([(0,l.MZ)({type:u.jz})],z.prototype,"maxPageCount",void 0),(0,s._)([(0,l.MZ)({type:u.jz})],z.prototype,"maxTotalRecordCount",void 0),(0,s._)([(0,l.MZ)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],z.prototype,"mode",void 0),(0,s._)([(0,l.MZ)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"name",void 0),(0,s._)([(0,l.MZ)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"namespaceUri",void 0),(0,s._)([(0,l.MZ)(U.Ih)],z.prototype,"opacity",void 0),(0,s._)([(0,l.MZ)($.outFields)],z.prototype,"outFields",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],z.prototype,"parsedUrl",null),(0,s._)([(0,l.MZ)(U.M6)],z.prototype,"popupEnabled",void 0),(0,s._)([(0,l.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],z.prototype,"popupTemplate",void 0),(0,s._)([(0,l.MZ)({types:o.H,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.X,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],z.prototype,"renderer",null),(0,s._)([(0,l.MZ)(U.PY)],z.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],z.prototype,"source",void 0),(0,s._)([(0,l.MZ)({type:W.A,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],z.prototype,"spatialReference",void 0),(0,s._)([(0,l.MZ)({readOnly:!0,type:[u.jz],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"spatialReferences",void 0),(0,s._)([(0,l.MZ)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"swapXY",void 0),(0,s._)([(0,l.MZ)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],z.prototype,"title",void 0),(0,s._)([(0,l.MZ)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,s._)([(0,l.MZ)(U.OZ)],z.prototype,"url",void 0),(0,s._)([(0,l.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],z.prototype,"version",void 0),(0,s._)([(0,l.MZ)()],z.prototype,"wfsCapabilities",null),z=M=(0,s._)([(0,c.$)("esri.layers.WFSLayer")],z);const G=z},20176:(e,t,r)=>{r.d(t,{N3:()=>o,Om:()=>i});var s=r(1484);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=s,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(e,t){const r=e.geometry?s.A.fromJSON(e.geometry):null,o=e.centroid?s.A.fromJSON(e.centroid):null,n=e.attributes[t];return new i(r,e.attributes,o,n)}weakClone(){const e=new i(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new i(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function o(e){return!!e.geometry?.coords?.length}},1484:(e,t,r)=>{r.d(t,{A:()=>s});class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=r}static fromJSON(e){return new s(e.lengths,e.coords,e.hasIndeterminateRingOrder)}static fromRect(e){const[t,r,i,o]=e,n=i-t,a=o-r;return new s([5],[t,r,n,0,0,a,-n,0,0,-a])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let s=0;for(const i of r){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new s(this.lengths,e,this.hasIndeterminateRingOrder)):new s(Array.from(this.lengths),Array.from(r),this.hasIndeterminateRingOrder)}}},8298:(e,t,r)=>{r.d(t,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40296:(e,t,r)=>{r.d(t,{F0:()=>a,Vx:()=>u,e2:()=>c,f:()=>h});var s=r(81806),i=r(53084),o=r(8298),n=r(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.Cb:"esriGeometryPolyline"===e?n.yM:n.WR}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function u(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this${d(t)} = null;`;for(const t in e)r+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(e){return p.test(e)?`.${e}`:`["${e}"]`}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=6087.a1a34736.chunk.js.map