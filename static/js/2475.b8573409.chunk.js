"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[2475],{75941:(e,t,r)=>{r.d(t,{O:()=>s});class s{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},22475:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.g,FramebufferObject:()=>i.H,Program:()=>n.B,ProgramCache:()=>o.J,Renderbuffer:()=>l.l,ShaderCompiler:()=>h.Z,Texture:()=>u.g,VertexArrayObject:()=>a.Z,createContext:()=>d.q,createProgram:()=>f.r,glslifyDefineMap:()=>c.I});var s=r(76718),i=r(12331),n=r(44488),o=r(46082),l=r(62881),h=r(78403),u=r(98433),a=r(36911),c=r(2086),f=r(26373),d=r(28007)},46082:(e,t,r)=>{r.d(t,{J:()=>n});r(81806);var s=r(75941),i=r(44488);class n{constructor(e){this._rctx=e,this._store=new s.O}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,s){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const o=new i.B(this._rctx,e,t,r,s);return o.ref(),this._store.set(e,t,o),o}get test(){}}},26373:(e,t,r)=>{r.d(t,{r:()=>i});var s=r(44488);function i(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new s.B(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},78403:(e,t,r)=>{r.d(t,{Z:()=>s});class s{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let i=s.exec(r);const n=[];for(;null!=i;)n.push({path:i[1],start:i.index,length:i[0].length}),i=s.exec(r);let o=0,l="";return n.forEach((e=>{l+=r.slice(o,e.start),l+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),l+=r.slice(o),t.set(e,l),l}_read(e){return this._readFile(e)}}},36911:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(76460),i=r(30726),n=r(78393),o=r(93345),l=r(27207);const h=()=>s.A.getLogger("esri.views.webgl.VertexArrayObject");let u=class{constructor(e,t,r,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._context=e,this._locations=t,this._layout=r,this._buffers=s,this._indexBuffer=i,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*n.zQ}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,i.WD)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&h().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.vt.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(o.vt.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||h().error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const i in e){const r=e[i];r||h().error("Vertex buffer is uninitialized!");const s=t[i];s||h().error("Vertex element descriptor is empty!"),(0,l.yu)(this._context,this._locations,r,s)}null!=r&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},2086:(e,t,r)=>{function s(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function i(e){let t="";for(const r in e){const i=e[r];if("boolean"==typeof i)i&&(t+=`#define ${r}\n`);else if("number"==typeof i)t+=`#define ${r} ${i.toFixed()}\n`;else if("object"==typeof i)if(s(i)){const{value:e,options:s,namespace:n}=i,o=n?`${n}_`:"";for(const r in s)t+=`#define ${o}${r} ${s[r].toFixed()}\n`;t+=`#define ${r} ${o}${e}\n`}else{const e=i.options;let s=0;for(const r in e)t+=`#define ${e[r]} ${(s++).toFixed()}\n`;t+=`#define ${r} ${e[i.value]}\n`}}return t}r.d(t,{I:()=>i})}}]);
//# sourceMappingURL=2475.b8573409.chunk.js.map