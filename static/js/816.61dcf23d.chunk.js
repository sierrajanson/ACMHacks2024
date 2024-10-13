"use strict";(self.webpackChunkbox=self.webpackChunkbox||[]).push([[816],{30050:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(85504),r=n(16770);class o{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const n=this._resourceMap.get(e);if(n)return{width:n.width,height:n.height};let i=this._inFlightResourceMap.get(e);return i?i.then((e=>({width:e.width,height:e.height}))):(i=(0,r.M5)(e,t),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,i.Al)(e)}}},28808:(e,t,n)=>{var i,r,o,a,l,s,c,u,h,d,f,g,p,m,y,C,M,S,w,R,T,P,x,v,B,F,L,b,O,D,N,A,E,W,I,U,G,_,k,H,Y,q,z,V,X,J,Z,Q,j,$,K,ee,te,ne,ie,re,oe,ae,le,se,ce;n.d(t,{$2:()=>l,C1:()=>o,JO:()=>r,M1:()=>P,O$:()=>oe,Q1:()=>J,TZ:()=>C,WE:()=>b,Y:()=>c,YI:()=>Q,bj:()=>u,e_:()=>X,f0:()=>re,fu:()=>f,g7:()=>h,ip:()=>Z,mU:()=>O,oF:()=>R,uQ:()=>T,uT:()=>U,vG:()=>le,wd:()=>H,xR:()=>i,xn:()=>M,xw:()=>B,yS:()=>G}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(o||(o={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(a||(a={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(l||(l={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(s||(s={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(u||(u={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(h||(h={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(f||(f={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(p||(p={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(m||(m={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(M||(M={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(S||(S={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(w||(w={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(R||(R={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees",e.TipWithPerpendicularAndTicks="TipWithPerpendicularAndTicks"}(T||(T={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(P||(P={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(x||(x={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(v||(v={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(B||(B={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(F||(F={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(L||(L={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(b||(b={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(O||(O={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(D||(D={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(N||(N={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(A||(A={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(E||(E={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(W||(W={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(I||(I={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(U||(U={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(G||(G={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(_||(_={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(k||(k={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(H||(H={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(Y||(Y={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(q||(q={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(z||(z={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(V||(V={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(X||(X={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(J||(J={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Z||(Z={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Q||(Q={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(j||(j={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}($||($={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(K||(K={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ie||(ie={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(oe||(oe={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(ae||(ae={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(le||(le={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(se||(se={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},28932:(e,t,n)=>{n.d(t,{previewCIMSymbol:()=>M});var i=n(76931),r=n(401),o=n(30050),a=n(83283),l=n(42436),s=n(97763);const c=96/72;function u(e,t,n,i){const r=-t/2+1,o=t/2-1,a=n/2-1,l=-n/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[r,0],[0,0],[o,0]]]};default:return"legend"===i?{rings:[[[r,a],[o,0],[o,l],[r,l],[r,a]]]}:{rings:[[[r,a],[o,a],[o,l],[r,l],[r,a]]]}}}var h=n(65709),d=n(26291);const f=new class{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new o.A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,n,i,o,a,c,h,d){if(!e)return null;const{data:f}=e;if(!f||"CIMSymbolReference"!==f.type||!f.symbol)return null;const{symbol:g}=f;a||(a=(0,s.n5)(g));const p=await l.$.resolveSymbolOverrides(f,t,this._spatialReference,o,a,c,h),m=this._cimResourceManager,y=[];r.wp.fetchResources(p,m,y),r.wp.fetchFonts(p,m,y),y.length>0&&await Promise.all(y);const{width:C,height:M}=n,S=u(a,C,M,i),w=r.wp.getEnvelope(p,S,m);if(!w)return null;let R=1,T=0,P=0;switch(g.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;w.width>C&&(e=C/w.width);let t=1;w.height>M&&(t=M/w.height),"preview"===i&&(w.width<C&&(e=C/w.width),w.height<M&&(t=M/w.height)),R=Math.min(e,t),T=w.x+w.width/2,P=w.y+w.height/2}break;case"CIMLineSymbol":{(d||w.height>M)&&(R=M/w.height),P=w.y+w.height/2;const e=w.x*R+C/2,t=(w.x+w.width)*R+C/2,{paths:n}=S;n[0][0][0]-=e/R,n[0][2][0]-=(t-C)/R}break;case"CIMPolygonSymbol":{T=w.x+w.width/2,P=w.y+w.height/2;const e=w.x*R+C/2,t=(w.x+w.width)*R+C/2,n=w.y*R+M/2,i=(w.y+w.height)*R+M/2,{rings:r}=S;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),n<0&&(r[0][0][1]+=n,r[0][1][1]+=n,r[0][4][1]+=n),t>C&&(r[0][1][0]-=t-C,r[0][2][0]-=t-C),i>M&&(r[0][2][1]+=i-M,r[0][3][1]+=i-M)}}const x={type:"cim",data:{type:"CIMSymbolReference",symbol:p}};return this.rasterize(x,C,M,T,P,R,a,1,S)}rasterize(e,t,n,i,r,o,l){let h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;const{data:f}=e;if(!f||"CIMSymbolReference"!==f.type||!f.symbol)return null;const{symbol:g}=f,p=this._canvas,m=(window.devicePixelRatio||1)*c;p.width=t*m,p.height=n*m,l||(l=(0,s.n5)(g)),d||(d=u(l,t,n,"legend")),p.width+=2*h,p.height+=2*h;const y=p.getContext("2d",{willReadFrequently:!0}),C=a.IT.createIdentity();return C.translate(-i,-r),C.scale(o*m,-o*m),C.translate(t*m/2+h,n*m/2+h),y.clearRect(0,0,p.width,p.height),new a.Rj(y,this._cimResourceManager,C,!0).drawSymbol(g,d),y.getImageData(0,0,p.width,p.height)}}(null),g=(0,i.PN)(h.CB.size),p=(0,i.PN)(h.CB.maxSize),m=(0,i.PN)(h.CB.lineWidth),y=1;async function C(e,t,n){const i=t?.size;let o=null!=i&&"object"==typeof i&&"width"in i?i.width:i,a=null!=i&&"object"==typeof i&&"height"in i?i.height:i;if(null==o||null==a)if("esriGeometryPolygon"===n)o=g,a=g;else{const i=await async function(e,t,n){const{feature:i,fieldMap:o,viewParams:a}=t.cimOptions||t,s=await l.$.resolveSymbolOverrides(e.data,i,null,o,n,null,a);if(!s)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:s},e.data.primitiveOverrides=void 0;const c=[];return r.wp.fetchResources(s,f.resourceManager,c),r.wp.fetchFonts(s,f.resourceManager,c),c.length>0&&await Promise.all(c),r.wp.getEnvelope(s,null,f.resourceManager)}(e,t,n);i&&(o=i.width,a=i.height),"esriGeometryPolyline"===n&&(o=m),o=null!=o&&isFinite(o)?Math.min(o,p):g,a=null!=a&&isFinite(a)?Math.max(Math.min(a,p),y):g}return"legend"===t.style&&"esriGeometryPolyline"===n&&(o=m),{width:o,height:a}}async function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:n,opacity:r,symbolConfig:o}=t,a=null!=o&&"object"==typeof o&&"isSquareFill"in o&&o.isSquareFill,l=t.cimOptions||t,c=l.geometryType||(0,s.n5)(e?.data?.symbol),u=await C(e,t,c),{feature:h,fieldMap:g}=l,p=a||"esriGeometryPolygon"!==c?"preview":"legend",m=await f.rasterizeCIMSymbolAsync(e,h,u,p,g,c,null,l.viewParams,l.allowScalingUp);if(!m)return null;const{width:y,height:M}=m,S=document.createElement("canvas");S.width=y,S.height=M,S.getContext("2d").putImageData(m,0,0);const w=(0,i.Lz)(u.width),R=(0,i.Lz)(u.height),T=new Image(w,R);T.src=S.toDataURL(),T.ariaLabel=t.ariaLabel??null,T.alt=t.ariaLabel??"",null!=r&&(T.style.opacity=`${r}`);let P=T;if(null!=t.effectView){const e={shape:{type:"image",x:0,y:0,width:w,height:R,src:T.src},fill:null,stroke:null,offset:[0,0]};P=(0,d.fz)([[e]],[w,R],{effectView:t.effectView,ariaLabel:t.ariaLabel})}return n&&P&&n.appendChild(P),P}},19358:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(59422);class r{constructor(e,t,n,r){this.computedX=0,this.computedY=0,this.center=(0,i.fA)(e,t),this.centerT=(0,i.vt)(),this.halfWidth=n/2,this.halfHeight=r/2,this.width=n,this.height=r}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new r(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const n=Math.abs(e.centerT[0]-this.centerT[0]),i=Math.abs(e.centerT[1]-this.centerT[1]),r=(e.halfWidth+this.halfWidth+t)/n,o=(e.halfHeight+this.halfHeight+t)/i,a=Math.min(r,o);return Math.log2(a)}extend(e){const t=Math.min(this.xmin,e.xmin),n=Math.min(this.ymin,e.ymin),i=Math.max(this.xmax,e.xmax)-t,r=Math.max(this.ymax,e.ymax)-n,o=t+i/2,a=n+r/2;this.width=i,this.height=r,this.halfWidth=i/2,this.halfHeight=r/2,this.x=o,this.y=a}static deserialize(e){const t=e.readF32(),n=e.readF32(),i=e.readInt32(),o=e.readInt32();return new r(t,n,i,o)}}},5095:(e,t,n)=>{n.d(t,{$U:()=>D,C2:()=>c,CQ:()=>r,CR:()=>w,C_:()=>A,Cp:()=>R,DY:()=>l,GR:()=>Z,Gh:()=>B,LY:()=>x,O5:()=>Y,Pq:()=>u,Qb:()=>k,Sr:()=>M,TB:()=>J,V3:()=>L,Vl:()=>X,Xh:()=>V,YS:()=>d,YV:()=>o,_M:()=>b,_x:()=>q,cp:()=>Q,dV:()=>P,eG:()=>s,eI:()=>z,fq:()=>G,fy:()=>F,g0:()=>v,hM:()=>E,ie:()=>O,ju:()=>a,lL:()=>m,mg:()=>N,n9:()=>C,nM:()=>p,nW:()=>U,p:()=>W,qM:()=>i,r1:()=>H,sn:()=>y,uM:()=>f,ue:()=>h,vN:()=>T,vd:()=>S,yA:()=>I,yv:()=>_,z2:()=>g});const i=1e-30,r=512,o=16777216,a=8,l=29,s=24,c=4,u=0,h=0,d=0,f=1,g=2,p=3,m=4,y=5,C=6,M=12,S=5,w=6,R=5,T=6;var P;!function(e){e[e.FilterFlags=0]="FilterFlags",e[e.Animation=1]="Animation",e[e.GPGPU=2]="GPGPU",e[e.VV=3]="VV",e[e.DD0=4]="DD0",e[e.DD1=5]="DD1",e[e.DD2=6]="DD2"}(P||(P={}));const x=8,v=x<<1,B=1.05,F=3,L=1,b=3,O=3,D=5,N=6,A=1.15,E=2,W=128,I=256-2*E,U=2,G=10,_=1024,k=128,H=4,Y=1,q=1<<20,z=.75,V=10,X=.75,J=256,Z=32,Q=512}}]);
//# sourceMappingURL=816.61dcf23d.chunk.js.map