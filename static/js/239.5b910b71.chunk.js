"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[239,2487],{77491:(e,a,r)=>{r.d(a,{v:()=>n});var t=r(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},39323:(e,a,r)=>{r.d(a,{L:()=>o});var t=r(55171),n=r(3825),i=r(50076),s=r(50346),c=r(13096),y=r(65308),l=r(70652);async function o(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new l.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(d){(0,s.QP)(d)}return null}(e);null!=i&&(r.portal=new y.A({url:i}));try{return r.load({signal:e.signal})}catch(f){return(0,s.QP)(f),null}}(o),null==o.sceneLayerItem)return L(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const d=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new l.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,s.QP)(t),null}}(o);if(!d?.url)throw new i.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=d;const f=await L(d.url,o);return f.portalItem=d,f}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function L(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const y=u(a),l=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(l?.layers?.[0]||l?.tables?.[0])?.customParameters,L=e=>{const r={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},d=L("anonymous").catch((()=>L("no-prompt"))),[f,p]=await Promise.all([d,y]),m=p?.layers,S=f.data&&f.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(m)){for(let n=0;n<Math.min(m.length,S.length);n++)if(m[n].id===s)return{serverUrl:t,layerId:S[n].id}}else if(null!=s&&s<S.length)return{serverUrl:t,layerId:S[s].id};throw new Error("could not find matching associated sublayer")}},11668:(e,a,r)=>{r.d(a,{K:()=>L,Q:()=>i});var t=r(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:r,...n}=a||{},i=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);u(i),y(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const c=`${e}/layers`,l=r?await r.fetchServiceMetadata(c,n):await(0,t.V)(c,n);return u(l),y(l),s.layersJSON={layers:l.layers,tables:l.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function y(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(c)}function l(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function u(e){e.layers?.forEach(l),e.tables?.forEach(o)}function L(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},60239:(e,a,r)=>{r.r(a),r.d(a,{populateGroupLayer:()=>T,populateOperationalLayers:()=>o});var t=r(94643),n=(r(81806),r(77491)),i=r(62487),s=r(70652);function c(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var y=r(2487),l=r(81589);async function o(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await T(t,a,r):v(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):b(a)&&await async function(e,a,r){const t=i.S.FeatureLayer,n=await t(),s=a.featureCollection,c=s?.showLegend,y=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const y={...r,ignoreDefaults:!0};return G(s,e,a,i,y),null!=c&&s.read({showLegend:c},y),s}));e.layers.addMany(y??[])}(t,a,r.context)),await(0,l.L)(t,r.context),t}(await g(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},L={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},w={...p,LinkChartLayer:"LinkChartLayer"},h={...m},I={...S};async function g(e,a){const r=a.context,t=M(r);let l=e.layerType||e.type;!l&&a?.defaultLayerType&&(l=a.defaultLayerType);const o=t[l];let u=o?i.S[o]:i.S.UnknownLayer;if(v(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,y.n)(r,new n.v)).className||"UnknownLayer";u=i.S[t]}}else"ArcGISFeatureLayer"===l?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?u=i.S.MapNotesLayer:function(e){return c(e,"route")}(e)?u=i.S.RouteLayer:b(e)&&(u=i.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=i.S.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo?.version&&(u=i.S.UnsupportedLayer);return u()}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!v(e)&&(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=f;break;case"ground":a=L;break;case"tables":a=d;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=I;break;case"tables":a=h;break;default:a=w}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=m;break;default:a=p}}return a}async function T(e,a,r){const n=new t.A,i=o(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(s){e.destroy();for(const e of n)e.destroy();throw s}}catch(s){throw s}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(3993).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(9592),r.e(260),r.e(9189),r.e(8664),r.e(9724)]).then(r.bind(r,30188))).default,CSVLayer:async()=>(await r.e(1365).then(r.bind(r,1365))).default,CatalogLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(2003),r.e(2746),r.e(7872),r.e(9078),r.e(4397)]).then(r.bind(r,84397))).default,DimensionLayer:async()=>(await r.e(2798).then(r.bind(r,72798))).default,ElevationLayer:async()=>(await r.e(3875).then(r.bind(r,43875))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await r.e(709).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await r.e(2551).then(r.bind(r,52551))).default,GroupLayer:async()=>(await r.e(6095).then(r.bind(r,16095))).default,ImageryLayer:async()=>(await Promise.all([r.e(9122),r.e(3092),r.e(6964),r.e(7480),r.e(7333)]).then(r.bind(r,59051))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(3092),r.e(9844),r.e(6964),r.e(9571),r.e(7480),r.e(1425)]).then(r.bind(r,11425))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(6790).then(r.bind(r,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(260),r.e(3196)]).then(r.bind(r,3196))).default,KMLLayer:async()=>(await r.e(1324).then(r.bind(r,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(8618),r.e(3620),r.e(7425),r.e(7216),r.e(2003),r.e(8153),r.e(4476),r.e(7118),r.e(6570)]).then(r.bind(r,26570))).default,LineOfSightLayer:async()=>(await r.e(2897).then(r.bind(r,22897))).default,LinkChartLayer:async()=>(await Promise.all([r.e(8618),r.e(3620),r.e(7425),r.e(7216),r.e(2003),r.e(8153),r.e(4476),r.e(7118),r.e(2218)]).then(r.bind(r,92218))).default,MapImageLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(7872),r.e(5721),r.e(2951)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await r.e(3311).then(r.bind(r,43311))).default,MediaLayer:async()=>(await r.e(9522).then(r.bind(r,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(8618),r.e(6799),r.e(5526)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await r.e(803).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await r.e(2593).then(r.bind(r,52593))).default,PointCloudLayer:async()=>(await Promise.all([r.e(260),r.e(1830)]).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(1297),r.e(1301)]).then(r.bind(r,91301))).default,SceneLayer:async()=>(await Promise.all([r.e(8105),r.e(2746),r.e(9592),r.e(260),r.e(3848),r.e(9189),r.e(2923),r.e(8664),r.e(8320)]).then(r.bind(r,48320))).default,StreamLayer:async()=>(await r.e(4369).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await r.e(9005).then(r.bind(r,69005))).default,TileLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(7872),r.e(5721),r.e(1174)]).then(r.bind(r,71174))).default,UnknownLayer:async()=>(await r.e(8896).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await r.e(2043).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(5663),r.e(5995),r.e(117)]).then(r.bind(r,53451))).default,VideoLayer:async()=>(await r.e(9029).then(r.bind(r,79029))).default,VoxelLayer:async()=>(await Promise.all([r.e(260),r.e(8560)]).then(r.bind(r,88560))).default,WFSLayer:async()=>(await Promise.all([r.e(1316),r.e(6087)]).then(r.bind(r,4583))).default,WMSLayer:async()=>(await r.e(2015).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await r.e(1845).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await r.e(4552).then(r.bind(r,24552))).default}},64130:(e,a,r)=>{r.d(a,{Ju:()=>l,K8:()=>L,XH:()=>o,_r:()=>i,bO:()=>s,iK:()=>u,nu:()=>d,pJ:()=>c,rc:()=>y});var t=r(39323),n=r(11668);function i(e){const a={id:e.id,name:e.name},r=(0,n.K)(e.type);return"FeatureLayer"!==r&&(a.layerType=r),a}async function s(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(i),e.tables=e.tables||t?.tables?.map(i)}return e}function c(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function y(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function l(e,a){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:r}=e;return r?r===a:"ArcGISFeatureLayer"===a}))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function L(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function d(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(i)}const{serverUrl:n,portalItem:s}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData();if(e?.tables)a.tables=e.tables.map(i);else{const t=await r.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters});a.tables=t?.tables?.map(i)}}if(a.tables)for(const t of a.tables)t.url=`${n}/${t.id}`;return a}},2487:(e,a,r)=>{r.d(a,{fromItem:()=>L,n:()=>d});var t=r(50076),n=r(39323),i=r(11668),s=r(77491),c=r(31933),y=r(62487),l=r(70652),o=r(64130),u=r(72945);async function L(e){let{portalItem:a}=e;!a||a instanceof l.default||(a=new l.default(a));const r=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,r=y.S[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),r=(0,u.Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,o.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await f(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),c=i.capabilities?.toLowerCase().includes("tilesonly");return"map"===s||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await f(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:c.XX[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function f(e,a,r){const{url:t,type:n}=e,s="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(s){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:r.id,className:(0,i.K)(r.type),sourceJSON:r}}return{}}await e.load();let c=await a.fetchItemData(e);if(s){const e=await(0,o.bO)(c,t,a),r=p(e);if("object"==typeof r){const a=(0,o.rc)(e,r.id);r.className=(0,o.K8)(a?.layerType)}return r}if("Scene Service"===n&&(c=await(0,o.nu)(e,c,a)),(0,o.XH)(c)>0)return p(c);const y=await a.fetchServiceMetadata(t);return r&&(y.tables=await r()),p(y)}function p(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=239.5b910b71.chunk.js.map