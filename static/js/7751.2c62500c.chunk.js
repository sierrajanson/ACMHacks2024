"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[7751],{93582:(t,e,n)=>{n.d(e,{a:()=>p,b:()=>b,c:()=>m,f:()=>A,g:()=>O,j:()=>N,n:()=>w});n(81806),n(76460);var o=n(15941),i=n(34761),r=n(20664),s=n(9392),c=n(43047),u=n(55855),a=n(53494),h=n(5568),d=n(95925),l=n(96190),f=n(75762);const _=m();function m(){return(0,u.vt)()}const g=c.e,T=c.e;function p(t,e){return(0,c.c)(e,t)}function b(t){return t[3]}function O(t){return t}function A(t,e,n,o){return(0,u.fA)(t,e,n,o)}function v(t,e,n){if(null==e)return!1;if(!M(t,e,R))return!1;let{t0:o,t1:i}=R;if((o<0||i<o&&i>0)&&(o=i),o<0)return!1;if(n){const{origin:t,direction:i}=e;n[0]=t[0]+i[0]*o,n[1]=t[1]+i[1]*o,n[2]=t[2]+i[2]*o}return!0}const R={t0:0,t1:0};function M(t,e,n){const{origin:o,direction:i}=e,r=E;r[0]=o[0]-t[0],r[1]=o[1]-t[1],r[2]=o[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*r[0]+i[1]*r[1]+i[2]*r[2]),u=c*c-4*s*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const E=(0,s.vt)();function N(t,e){return v(t,e,null)}function S(t,e,n){const o=f.rq.get(),s=f.Rc.get();(0,r.b)(o,e.origin,e.direction);const c=b(t);(0,r.b)(n,o,e.origin),(0,r.j)(n,n,1/(0,r.l)(n)*c);const u=j(t,e.origin),a=(0,l.g7)(e.origin,n);return(0,i.$0)(s,a+u,o),(0,r.h)(n,n,s),n}function F(t,e,n){const o=(0,r.f)(f.rq.get(),e,t),i=(0,r.j)(f.rq.get(),o,t[3]/(0,r.l)(o));return(0,r.g)(n,i,t)}function j(t,e){const n=(0,r.f)(f.rq.get(),e,t),i=(0,r.l)(n),s=b(t),c=s+Math.abs(s-i);return(0,o.XM)(s/c)}const I=(0,s.vt)();function P(t,e,n,i){const s=(0,r.f)(I,e,t);switch(n){case h._.X:{const t=(0,o.jU)(s,I)[2];return(0,r.s)(i,-Math.sin(t),Math.cos(t),0)}case h._.Y:{const t=(0,o.jU)(s,I),e=t[1],n=t[2],c=Math.sin(e);return(0,r.s)(i,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case h._.Z:return(0,r.n)(i,s);default:return}}function x(t,e){const n=(0,r.f)(B,e,t);return(0,r.l)(n)-t[3]}function w(t,e){const n=(0,r.a)(t,e),o=b(t);return n<=o*o}const B=(0,s.vt)(),L=m();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:_,altitudeAt:x,angleToSilhouette:j,axisAt:P,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return v(t,e,n)?n:((0,d.oC)(e,t,n),F(t,n,n))},closestPointOnSilhouette:S,containsPoint:w,copy:p,create:m,distanceToSilhouette:function(t,e){const n=(0,r.f)(f.rq.get(),e,t),o=(0,r.q)(n),i=t[3]*t[3];return Math.sqrt(Math.abs(o-i))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:T,exactEquals:g,fromCenterAndRadius:function(t,e){return(0,u.fA)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:A,getCenter:O,getRadius:b,intersectLine:function(t,e,n){const o=(0,d.Cr)(e,n);if(!M(t,o,R))return[];const{origin:i,direction:c}=o,{t0:u,t1:h}=R,l=e=>{const n=(0,s.vt)();return(0,r.r)(n,i,c,e),F(t,n,n)};return Math.abs(u-h)<(0,a.FD)()?[l(u)]:[l(u),l(h)]},intersectRay:v,intersectRayClosestSilhouette:function(t,e,n){if(v(t,e,n))return n;const o=S(t,e,f.rq.get());return(0,r.g)(n,e.origin,(0,r.j)(f.rq.get(),e.direction,(0,r.p)(e.origin,o)/(0,r.l)(e.direction))),n},intersectsRay:N,projectPoint:F,setAltitudeAt:function(t,e,n,o){const i=x(t,e),s=P(t,e,h._.Z,B),c=(0,r.j)(B,s,n-i);return(0,r.g)(o,e,c)},setExtent:function(t,e,n){return t!==n&&p(t,n),n},tmpSphere:L,union:function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,u.vt)();const o=(0,r.p)(t,e),i=t[3],s=e[3];return o+s<i?((0,c.c)(n,t),n):o+i<s?((0,c.c)(n,e),n):((0,r.o)(n,t,e,(o+s-i)/(2*o)),n[3]=(o+i+s)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},97467:(t,e,n)=>{n.d(e,{I:()=>i});var o=n(77944);class i{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,o.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this._allocator())}}const r=1024},44680:(t,e,n)=>{function o(){return[1,0,0,0,1,0,0,0,1]}function i(t,e,n,o,i,r,s,c,u){return[t,e,n,o,i,r,s,c,u]}n.d(e,{fA:()=>i,vt:()=>o,zK:()=>r});const r=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:o,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},13191:(t,e,n)=>{function o(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>i,vt:()=>o,zK:()=>r});const r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:i,create:o,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,o,i,r,s,c,u,a,h,d,l,f,_,m){return[t,e,n,o,i,r,s,c,u,a,h,d,l,f,_,m]}},Symbol.toStringTag,{value:"Module"}))},4336:(t,e,n)=>{function o(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{o8:()=>i,vt:()=>o,zK:()=>r});const r=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:i,create:o,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,o){return[t,e,n,o]}},Symbol.toStringTag,{value:"Module"}))},44230:(t,e,n)=>{n.d(e,{Cr:()=>a,_I:()=>h,vt:()=>u});var o=n(15941),i=n(97467),r=n(20664),s=n(9392),c=n(75762);function u(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,r.c)(n.origin,t),(0,r.f)(n.vector,e,t),n}function h(t,e,n){return function(t,e,n,i,s){const{vector:u,origin:a}=t,h=(0,r.f)(c.rq.get(),e,a),d=(0,r.m)(u,h)/(0,r.q)(u);return(0,r.j)(s,u,(0,o.qE)(d,n,i)),(0,r.g)(s,s,t.origin)}(t,e,0,1,n)}(0,s.vt)(),(0,s.vt)(),new i.I((()=>u()))},89802:(t,e,n)=>{n.d(e,{vt:()=>r,lU:()=>c,Qj:()=>s});n(15941);var o=n(20664),i=n(9392);n(43047),n(96190),n(75762);(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,i.vt)();function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return[t[0],t[1],t[2],t[3]]}function s(t){return t}function c(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.floor(n*(1/3)),_=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.floor(n*(2/3));if(n<3)return!1;e(a,i);let m=s,g=!1;for(;m<n-1&&!g;)e(h,m),m++,g=!(0,o.e)(a,h);if(!g)return!1;for(m=Math.max(m,_),g=!1;m<n&&!g;)e(d,m),m++,(0,o.f)(l,a,h),(0,o.n)(l,l),(0,o.f)(f,h,d),(0,o.n)(f,f),g=!(0,o.e)(a,d)&&!(0,o.e)(h,d)&&Math.abs((0,o.m)(l,f))<u;return g?(function(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r();const i=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],h=t[2]-e[2],d=s*h-c*a,l=c*u-i*h,f=i*a-s*u,_=d*d+l*l+f*f,m=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;o[0]=d*m,o[1]=l*m,o[2]=f*m,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])}(a,h,d,t),!0):(0!==i||1!==s||2!==_)&&c(t,e,n,0,1,2)}const u=.99619469809,a=(0,i.vt)(),h=(0,i.vt)(),d=(0,i.vt)(),l=(0,i.vt)(),f=(0,i.vt)();const _=[0,0,1,0];var m;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(m||(m={}));m.INFINITE_MIN,m.INFINITE_MAX,m.INFINITE_MAX},95925:(t,e,n)=>{n.d(e,{Cr:()=>a,LV:()=>u,oC:()=>h,vt:()=>s});n(18690);var o=n(97467),i=n(20664),r=n(9392);n(75762);function s(t){return t?c((0,r.o8)(t.origin),(0,r.o8)(t.direction)):c((0,r.vt)(),(0,r.vt)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=d.get();return n.origin=t,n.direction=e,n}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.f)(n.direction,e,t),n}function h(t,e,n){const o=(0,i.m)(t.direction,(0,i.f)(n,e,t.origin));return(0,i.g)(n,t.origin,(0,i.j)(n,t.direction,o)),n}const d=new o.I((()=>s()));(0,r.vt)()},96190:(t,e,n)=>{n.d(e,{g7:()=>s});var o=n(15941),i=n(20664),r=n(9392);function s(t,e){const n=(0,i.m)(t,e)/((0,i.l)(t)*(0,i.l)(e));return-(0,o.XM)(n)}(0,r.vt)(),(0,r.vt)()},75762:(t,e,n)=>{n.d(e,{Rc:()=>l,J8:()=>f,rq:()=>d});n(81806);var o=n(77944),i=n(44680),r=n(13191),s=n(4336),c=n(72745),u=n(9392),a=n(55855);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,o.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.vt)}static createVec3f64(){return new h(u.vt)}static createVec4f64(){return new h(a.vt)}static createMat3f64(){return new h(i.vt)}static createMat4f64(){return new h(r.vt)}static createQuatf64(){return new h(s.vt)}get test(){}}h.createVec2f64();const d=h.createVec3f64(),l=(h.createVec4f64(),h.createMat3f64(),h.createMat4f64()),f=h.createQuatf64()},17751:(t,e,n)=>{n.r(e),n.d(e,{default:()=>et});var o=n(35143),i=n(50346),r=(n(76460),n(81806),n(47249),n(50076),n(85842)),s=n(20664),c=n(9392),u=n(44230),a=n(93582),h=n(3789),d=n(30015),l=n(97467),f=(n(34761),n(43047),n(55855)),_=n(95925);function m(t){return t?{ray:(0,_.vt)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,_.vt)(),c0:0,c1:Number.MAX_VALUE}}new l.I((()=>m()));var g,T;n(89802),n(75762);function p(t,e){for(let n=0;n<b;n++){const o=t[n];if(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]+o[3]>=e[3])return!1}return!0}!function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(g||(g={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(T||(T={}));T.FAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_LEFT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_BOTTOM_RIGHT,T.NEAR_TOP_RIGHT,T.NEAR_TOP_LEFT,T.FAR_BOTTOM_RIGHT,T.FAR_BOTTOM_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_RIGHT,T.NEAR_BOTTOM_RIGHT,T.FAR_BOTTOM_RIGHT,T.FAR_TOP_RIGHT,T.NEAR_TOP_RIGHT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_TOP_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_LEFT,T.NEAR_TOP_LEFT,T.NEAR_TOP_RIGHT,T.FAR_TOP_RIGHT;const b=6;(0,f.fA)(-1,-1,-1,1),(0,f.fA)(1,-1,-1,1),(0,f.fA)(1,1,-1,1),(0,f.fA)(-1,1,-1,1),(0,f.fA)(-1,-1,1,1),(0,f.fA)(1,-1,1,1),(0,f.fA)(1,1,1,1),(0,f.fA)(-1,1,1,1),new l.I(m),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)();var O=n(86994);class A{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new v,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),v.clearPool(),y[0]=null,G.prune(),W.prune()}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;this._objectCount+=e,this._grow(t,e);const n=v.acquire();for(let o=0;o<e;o++){const e=t[o];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}v.release(n)}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=t.length;const n=v.acquire();for(const o of t){const t=e??(0,a.a)(this.objectToBoundingSphere(o),k);B(t[3])?(n.init(this._root),E(o,t,n)):this._degenerateObjects.delete(o)}v.release(n),this._shrink()}update(t,e){if(!B(e[3])&&this._isDegenerate(t))return;const n=function(t){return y[0]=t,y}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=(0,_.LV)(t,e);R(this._root,(t=>{if(!function(t,e){return I((0,a.g)(e.bounds),2*-e.halfSize,H),I((0,a.g)(e.bounds),2*e.halfSize,V),(0,O.O_)(t.origin,t.direction,H,V)}(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=(0,_.LV)(t,e);R(this._root,(t=>{if(!function(t,e,n){return I((0,a.g)(e.bounds),2*-e.halfSize,H),I((0,a.g)(e.bounds),2*e.halfSize,V),n.applyToMinMax(H,V),(0,O.O_)(t.origin,t.direction,H,V)}(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){R(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,r=1/0,c=1/0,u=null;const h=x(t,e),d=s=>{if(--i,!o(s))return;const h=this.objectToBoundingSphere(s);if(!p(n,h))return;const d=w(t,e,(0,a.g)(h)),l=d-h[3],f=d+h[3];l<r&&(r=l,c=f,u=s)};return M(this._root,(o=>{if(i<=0||!p(n,o.bounds))return!1;if((0,s.j)(D,h,o.halfSize),(0,s.g)(D,D,(0,a.g)(o.bounds)),w(t,e,D)>c)return!1;const r=o.node;return r.terminals.forAll((t=>d(t))),null!==r.residents&&r.residents.forAll((t=>d(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,o,i,r,c){let u=-1/0,h=1/0;const d={setRange:t=>{n===A.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),h=Math.min(h,t.far)):(u=Math.max(u,-t.far),h=Math.min(h,-t.near))}};d.setRange(o);const l=w(e,n,t),f=x(e,n),_=x(e,-n),m=t=>{if(!c(t))return;const o=this.objectToBoundingSphere(t),s=(0,a.g)(o),f=w(e,n,s)-l,_=f-o[3],m=f+o[3];_>h||m<u||!p(r,o)||i(t,d)};M(this._root,(t=>{if(!p(r,t.bounds))return!1;if((0,s.j)(D,f,t.halfSize),(0,s.g)(D,D,(0,a.g)(t.bounds)),w(e,n,D)-l>h)return!1;if((0,s.j)(D,_,t.halfSize),(0,s.g)(D,D,(0,a.g)(t.bounds)),w(e,n,D)-l<u)return!1;const o=t.node;return o.terminals.forAll((t=>m(t))),null!==o.residents&&o.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){R(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,a.b)(e),o=(0,a.g)(e),i=e=>{const i=this.objectToBoundingSphere(e),r=(0,a.b)(i),c=n+r;return!((0,s.a)((0,a.g)(i),o)-c*c<=0)||t(e)};let r=!0;const c=t=>{r&&(r=i(t))};R(this._root,(t=>{const e=(0,a.b)(t.bounds),i=n+e;if((0,s.a)((0,a.g)(t.bounds),o)-i*i>0)return!1;const u=t.node;return u.terminals.forAll(c),r&&null!==u.residents&&u.residents.forAll(c),r})),r&&this.forEachDegenerateObject(c)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,a.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||(0,a.j)(n.applyToBoundingSphere(o),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=v.acquire().init(t);this._add(e.at(n),o),v.release(o)}}_grow(t,e){if(0!==e&&(P(t,e,(t=>this.objectToBoundingSphere(t)),K),B(K[3])&&!this._fitsInsideTree(K)))if(S(this._root.node))(0,a.a)(K,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(K);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(K,t):this._growRootAsSubNode(t),v.release(t)}}_rebuildTree(t,e){(0,s.c)((0,a.g)(X),(0,a.g)(e.bounds)),X[3]=e.halfSize,P([t,X],2,(t=>t),J);const n=v.acquire().init(this._root);this._root.initFrom(null,J,J[3]),this._root.increaseHalfSize(1.25),R(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),v.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return R(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let c=0;c<3;c++){const t=i[c]-r-(n[c]-e),s=n[c]+e-(i[c]+r),u=Math.max(0,Math.ceil(t/(2*r))),a=Math.max(0,Math.ceil(s/(2*r)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);o=Math.max(o,h),U[c].min=u,U[c].max=a}for(let c=0;c<3;c++){let t=U[c].min,e=U[c].max;const n=(o-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=i[c]-r-t*r*2;q[c]=s+(e+t)*r}const s=o*r;return q[3]=s*C,v.acquire().initFrom(null,q,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,s.c)((0,a.g)(K),(0,a.g)(this._root.bounds)),K[3]=this._root.halfSize,this._root.init(t),t.advanceTo(K,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!B(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new A((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class v{constructor(){this.bounds=(0,a.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=null!=t?t:v.createEmptyNode(),e&&(0,a.a)(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*C}advance(t){let e=this.node.children[t];e||(e=v.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=L[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new d.A({shrink:!0}),residents:new d.A({shrink:!0})}}static acquire(){return v._pool.acquire()}static release(t){v._pool.release(t)}static clearPool(){v._pool.prune()}}function R(t,e){let n=v.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&o.push(v.acquire().init(n).advance(t));v.release(n)}}function M(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:A.DepthOrder.FRONT_TO_BACK,i=v.acquire().init(t);const r=[i];for(function(t,e,n){if(!W.length)for(let o=0;o<8;++o)W.push({index:0,distance:0});for(let o=0;o<8;++o){const n=L[o];W.data[o].index=o,W.data[o].distance=w(t,e,n)}W.sort(((t,e)=>t.distance-e.distance));for(let o=0;o<8;++o)n[o]=W.data[o].index}(n,o,Y);0!==r.length;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=Y[t];i.node.children[e]&&r.push(v.acquire().init(i).advance(e))}v.release(i)}}function E(t,e,n){G.clear();const o=n.advanceTo(e,((t,e)=>{G.push(t.node),G.push(e)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(t),0===o.length)for(let i=G.length-2;i>=0&&N(G.data[i],G.data[i+1]);i-=2);}function N(t,e){return e>=0&&(t.children[e]=null),!!S(t)&&(null===t.residents&&(t.residents=new d.A({shrink:!0})),!0)}function S(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function F(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function j(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function I(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function P(t,e,n,o){if(1===e){const e=n(t[0]);(0,a.a)(e,o)}else{H[0]=1/0,H[1]=1/0,H[2]=1/0,V[0]=-1/0,V[1]=-1/0,V[2]=-1/0;for(let o=0;o<e;o++){const e=n(t[o]);B(e[3])&&(F(H,e),j(V,e))}(0,s.o)((0,a.g)(o),H,V,.5),o[3]=Math.max(V[0]-H[0],V[1]-H[1],V[2]-H[2])/2}}function x(t,e){let n,o=1/0;for(let i=0;i<8;++i){const r=w(t,e,z[i]);r<o&&(o=r,n=z[i])}return n}function w(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function B(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}v._pool=new h.A(v),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(A||(A={}));const L=[(0,c.fA)(-1,-1,-1),(0,c.fA)(1,-1,-1),(0,c.fA)(-1,1,-1),(0,c.fA)(1,1,-1),(0,c.fA)(-1,-1,1),(0,c.fA)(1,-1,1),(0,c.fA)(-1,1,1),(0,c.fA)(1,1,1)],z=[(0,c.fA)(-1,-1,-1),(0,c.fA)(-1,-1,1),(0,c.fA)(-1,1,-1),(0,c.fA)(-1,1,1),(0,c.fA)(1,-1,-1),(0,c.fA)(1,-1,1),(0,c.fA)(1,1,-1),(0,c.fA)(1,1,1)],C=Math.sqrt(3),y=[null];const q=(0,a.c)(),D=(0,c.vt)(),H=(0,c.vt)(),V=(0,c.vt)(),G=new d.A,k=(0,a.c)(),K=(0,a.c)(),X=(0,a.c)(),J=(0,a.c)(),U=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],W=new d.A,Y=[0,0,0,0,0,0,0,0],Q=A;var Z=n(57420);function $(t,e,n){const o=(0,a.c)(),i=(0,a.g)(o);return(0,s.r)(i,i,t,.5),(0,s.r)(i,i,e,.5),o[3]=(0,s.p)(i,t),(0,s.g)(i,i,n),o}let tt=class{constructor(){this._idToComponent=new Map,this._components=new Q((t=>t.bounds)),this._edges=new Q((t=>t.bounds)),this._tmpLineSegment=(0,u.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,i.Te)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:o}=t;n.push({id:e,uid:o})}return!0}),t.bounds),!n.length)return;const o={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",o,e??{});for(const r of i.components)this._setFetchEdgeLocations(r)}async add(t){const e=new ot(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=Z.HY.createView(t.locations),o=new Array(n.count),i=(0,c.vt)(),r=(0,c.vt)();for(let c=0;c<n.count;c++){n.position0.getVec(c,i),n.position1.getVec(c,r);const s=$(i,r,t.origin),u=new it(e,c,s);o[c]=u}this._edges.add(o);const{objectIds:s,origin:u}=t;e.info={locations:n,objectIds:s,origin:u}}_addCandidates(t,e,n){const{info:o}=e.component,{origin:i,objectIds:r}=o,c=o.locations,u=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(u,u,i),(0,s.g)(a,a,i);const h=r[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,u,a,n),nt(t,h,u,n),nt(t,h,a,n)}_addEdgeCandidate(t,e,n,o,i){if(!t.returnEdge)return;const r=(0,a.g)(t.bounds),h=(0,u.Cr)(n,o,this._tmpLineSegment),d=(0,u._I)(h,r,this._tmpP3);(0,a.n)(t.bounds,d)&&i.push({type:"edge",objectId:e,target:(0,c.o8)(d),distance:(0,s.p)(r,d),start:(0,c.o8)(n),end:(0,c.o8)(o)})}};tt=(0,o._)([(0,r.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],tt);const et=tt;function nt(t,e,n,o){if(!t.returnVertex||!(0,a.n)(t.bounds,n))return;const i=(0,a.g)(t.bounds);o.push({type:"vertex",objectId:e,target:(0,c.o8)(n),distance:(0,s.p)(i,n)})}class ot{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++ot.uid}}ot.uid=0;class it{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=7751.2c62500c.chunk.js.map