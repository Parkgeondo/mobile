(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="164",fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fm=0,uh=1,pm=2,bl=1,mm=2,Jn=3,ii=0,Ge=1,wn=2,wi=0,kr=1,dh=2,fh=3,ph=4,gm=5,Ki=100,_m=101,xm=102,vm=103,ym=104,Mm=200,Sm=201,Tm=202,Em=203,Kc=204,jc=205,bm=206,Am=207,wm=208,Rm=209,Cm=210,Pm=211,Lm=212,Dm=213,Im=214,Nm=0,Om=1,Um=2,io=3,Fm=4,Bm=5,zm=6,km=7,rf=0,Vm=1,Hm=2,Ri=0,Gm=1,Wm=2,Xm=3,qm=4,Ym=5,Km=6,jm=7,mh="attached",Jm="detached",sf=300,Yr=301,Kr=302,Jc=303,$c=304,yo=306,jr=1e3,Si=1001,Jr=1002,Ve=1003,af=1004,Is=1005,tn=1006,Za=1007,Qn=1008,Li=1009,$m=1010,Zm=1011,of=1012,cf=1013,$r=1014,Pn=1015,Mo=1016,lf=1017,hf=1018,ea=1020,Qm=35902,tg=1021,eg=1022,Mn=1023,ng=1024,ig=1025,Vr=1026,Gs=1027,uf=1028,df=1029,rg=1030,ff=1031,pf=1033,Uo=33776,Fo=33777,Bo=33778,zo=33779,gh=35840,_h=35841,xh=35842,vh=35843,yh=36196,Mh=37492,Sh=37496,Th=37808,Eh=37809,bh=37810,Ah=37811,wh=37812,Rh=37813,Ch=37814,Ph=37815,Lh=37816,Dh=37817,Ih=37818,Nh=37819,Oh=37820,Uh=37821,ko=36492,Fh=36494,Bh=36495,sg=36283,zh=36284,kh=36285,Vh=36286,Ws=2300,Zr=2301,Vo=2302,Hh=2400,Gh=2401,Wh=2402,ag=2500,og=0,mf=1,Zc=2,cg=3200,lg=3201,gf=0,hg=1,Mi="",De="srgb",we="srgb-linear",Al="display-p3",So="display-p3-linear",ro="linear",re="srgb",so="rec709",ao="p3",mr=7680,Xh=519,ug=512,dg=513,fg=514,_f=515,pg=516,mg=517,gg=518,_g=519,Qc=35044,qh="300 es",ti=2e3,oo=2001;class cr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const Fs=Math.PI/180,Qr=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function wl(s,t){return(s%t+t)%t}function xg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vg(s,t,e){return s!==t?(e-s)/(t-s):0}function Bs(s,t,e){return(1-e)*s+e*t}function yg(s,t,e,n){return Bs(s,t,1-Math.exp(-e*n))}function Mg(s,t=1){return t-Math.abs(wl(s,t*2)-t)}function Sg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Eg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bg(s,t){return s+Math.random()*(t-s)}function Ag(s){return s*(.5-Math.random())}function wg(s){s!==void 0&&(Yh=s);let t=Yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rg(s){return s*Fs}function Cg(s){return s*Qr}function Pg(s){return(s&s-1)===0&&s!==0}function Lg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ig(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*_,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*_,o*l);break;case"ZYZ":s.set(c*_,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xf={DEG2RAD:Fs,RAD2DEG:Qr,generateUUID:Sn,clamp:Ae,euclideanModulo:wl,mapLinear:xg,inverseLerp:vg,lerp:Bs,damp:yg,pingpong:Mg,smoothstep:Sg,smootherstep:Tg,randInt:Eg,randFloat:bg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Pg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Dg,setQuaternionFromProperEuler:Ig,normalize:jt,denormalize:yn};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ft=class vf{constructor(t,e,n,i,r,a,o,c,l){vf.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],T=i[7],R=i[2],w=i[5],b=i[8];return r[0]=a*g+o*y+c*R,r[3]=a*p+o*x+c*w,r[6]=a*m+o*T+c*b,r[1]=l*g+h*y+u*R,r[4]=l*p+h*x+u*w,r[7]=l*m+h*T+u*b,r[2]=d*g+f*y+_*R,r[5]=d*p+f*x+_*w,r[8]=d*m+f*T+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Ho=new Ft;function yf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ng(){const s=Xs("canvas");return s.style.display="block",s}const Kh={};function Mf(s){s in Kh||(Kh[s]=!0,console.warn(s))}const jh=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[we]:{transfer:ro,primaries:so,toReference:s=>s,fromReference:s=>s},[De]:{transfer:re,primaries:so,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[So]:{transfer:ro,primaries:ao,toReference:s=>s.applyMatrix3(Jh),fromReference:s=>s.applyMatrix3(jh)},[Al]:{transfer:re,primaries:ao,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Jh),fromReference:s=>s.applyMatrix3(jh).convertLinearToSRGB()}},Og=new Set([we,So]),Kt={enabled:!0,_workingColorSpace:we,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Og.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=sa[t].toReference,i=sa[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return sa[s].primaries},getTransfer:function(s){return s===Mi?ro:sa[s].transfer}};function Hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gr;class Ug{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gr===void 0&&(gr=Xs("canvas")),gr.width=t.width,gr.height=t.height;const n=gr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Hr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hr(e[n]/255)*255):e[n]=Hr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fg=0;class Sf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Wo(i[a].image)):r.push(Wo(i[a]))}else r=Wo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ug.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0;class Te extends cr{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Si,i=Si,r=tn,a=Qn,o=Mn,c=Li,l=Te.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Sn(),this.name="",this.source=new Sf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=sf;Te.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,T=(f+1)/2,R=(m+1)/2,w=(h+d)/4,b=(u+g)/4,P=(_+p)/4;return x>T&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=b/n):T>R?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=w/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zg extends cr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends zg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tf extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kg extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Nn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let p=1-o;const m=c*d+l*f+h*_+u*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,m*y);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const T=o*y;if(c=c*p+d*T,l=l*p+f*T,h=h*p+_*T,u=u*p+g*T,p===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-o*f,t[e+2]=l*_+h*f+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class Ef{constructor(t=0,e=0,n=0){Ef.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Xo=new D,$h=new Nn;class ai{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),oa.subVectors(this.max,xs),_r.subVectors(t.a,xs),xr.subVectors(t.b,xs),vr.subVectors(t.c,xs),hi.subVectors(xr,_r),ui.subVectors(vr,xr),Fi.subVectors(_r,vr);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Fi.z,Fi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Fi.z,0,-Fi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Fi.y,Fi.x,0];return!qo(e,_r,xr,vr,oa)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,_r,xr,vr,oa))?!1:(ca.crossVectors(hi,ui),e=[ca.x,ca.y,ca.z],qo(e,_r,xr,vr,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new D,new D,new D,new D,new D,new D,new D,new D],_n=new D,aa=new ai,_r=new D,xr=new D,vr=new D,hi=new D,ui=new D,Fi=new D,xs=new D,oa=new D,ca=new D,Bi=new D;function qo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bi.fromArray(s,r);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=t.dot(Bi),l=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Vg=new ai,vs=new D,Yo=new D;class Fn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Yo)),this.expandByPoint(vs.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new D,Ko=new D,la=new D,di=new D,jo=new D,ha=new D,Jo=new D;let ls=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ko.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Ko);const r=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=di.dot(this.direction),c=-di.dot(la),l=di.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ko).addScaledVector(la,d),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,r){jo.subVectors(e,t),ha.subVectors(n,t),Jo.crossVectors(jo,ha);let a=this.direction.dot(Jo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const c=o*this.direction.dot(ha.crossVectors(di,ha));if(c<0)return null;const l=o*this.direction.dot(jo.cross(di));if(l<0||c+l>a)return null;const h=-o*di.dot(Jo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class tl{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,_,g,p){tl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,_,g,p)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/yr.setFromMatrixColumn(t,0).length(),r=1/yr.setFromMatrixColumn(t,1).length(),a=1/yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*c,f=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hg,t,Gg)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),fi.crossVectors(n,$e),fi.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),fi.crossVectors(n,$e)),fi.normalize(),ua.crossVectors($e,fi),i[0]=fi.x,i[4]=ua.x,i[8]=$e.x,i[1]=fi.y,i[5]=ua.y,i[9]=$e.y,i[2]=fi.z,i[6]=ua.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],T=n[11],R=n[15],w=i[0],b=i[4],P=i[8],M=i[12],S=i[1],I=i[5],B=i[9],L=i[13],X=i[2],G=i[6],Y=i[10],K=i[14],z=i[3],Q=i[7],$=i[11],ht=i[15];return r[0]=a*w+o*S+c*X+l*z,r[4]=a*b+o*I+c*G+l*Q,r[8]=a*P+o*B+c*Y+l*$,r[12]=a*M+o*L+c*K+l*ht,r[1]=h*w+u*S+d*X+f*z,r[5]=h*b+u*I+d*G+f*Q,r[9]=h*P+u*B+d*Y+f*$,r[13]=h*M+u*L+d*K+f*ht,r[2]=_*w+g*S+p*X+m*z,r[6]=_*b+g*I+p*G+m*Q,r[10]=_*P+g*B+p*Y+m*$,r[14]=_*M+g*L+p*K+m*ht,r[3]=y*w+x*S+T*X+R*z,r[7]=y*b+x*I+T*G+R*Q,r[11]=y*P+x*B+T*Y+R*$,r[15]=y*M+x*L+T*K+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+g*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+p*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=u*p*l-g*d*l+g*c*f-o*p*f-u*c*m+o*d*m,x=_*d*l-h*p*l-_*c*f+a*p*f+h*c*m-a*d*m,T=h*g*l-_*u*l+_*o*f-a*g*f-h*o*m+a*u*m,R=_*u*c-h*g*c-_*o*d+a*g*d+h*o*p-a*u*p,w=e*y+n*x+i*T+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=y*b,t[1]=(g*d*r-u*p*r-g*i*f+n*p*f+u*i*m-n*d*m)*b,t[2]=(o*p*r-g*c*r+g*i*l-n*p*l-o*i*m+n*c*m)*b,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*b,t[4]=x*b,t[5]=(h*p*r-_*d*r+_*i*f-e*p*f-h*i*m+e*d*m)*b,t[6]=(_*c*r-a*p*r-_*i*l+e*p*l+a*i*m-e*c*m)*b,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*b,t[8]=T*b,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*m-e*u*m)*b,t[10]=(a*g*r-_*o*r+_*n*l-e*g*l-a*n*m+e*o*m)*b,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*b,t[12]=R*b,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*p+e*u*p)*b,t[14]=(_*o*i-a*g*i-_*n*c+e*g*c+a*n*p-e*o*p)*b,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,_=r*u,g=a*h,p=a*u,m=o*u,y=c*l,x=c*h,T=c*u,R=n.x,w=n.y,b=n.z;return i[0]=(1-(g+m))*R,i[1]=(f+T)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(f-T)*w,i[5]=(1-(d+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(_+x)*b,i[9]=(p-y)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=yr.set(i[0],i[1],i[2]).length();const a=yr.set(i[4],i[5],i[6]).length(),o=yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const l=1/r,h=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ti){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(o===ti)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===oo)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ti){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*h;let _,g;if(o===ti)_=(a+r)*u,g=-2*u;else if(o===oo)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const yr=new D,xn=new Bt,Hg=new D(0,0,0),Gg=new D(1,1,1),fi=new D,ua=new D,$e=new D,Zh=new Bt,Qh=new Nn;class On{constructor(t=0,e=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wg=0;const tu=new D,Mr=new Nn,Xn=new Bt,da=new D,ys=new D,Xg=new D,qg=new Nn,eu=new D(1,0,0),nu=new D(0,1,0),iu=new D(0,0,1),ru={type:"added"},Yg={type:"removed"},Sr={type:"childadded",child:null},$o={type:"childremoved",child:null};class ue extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new D,e=new On,n=new Nn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ft}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ys,da,this.up):Xn.lookAt(da,ys,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),Mr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yg),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,qg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new D(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,qn=new D,Zo=new D,Yn=new D,Tr=new D,Er=new D,su=new D,Qo=new D,tc=new D,ec=new D;class Rn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),qn.subVectors(n,e),Zo.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(qn),c=vn.dot(Zo),l=qn.dot(qn),h=qn.dot(Zo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),qn.subVectors(t,e),vn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),vn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Tr.subVectors(i,n),Er.subVectors(r,n),Qo.subVectors(t,n);const c=Tr.dot(Qo),l=Er.dot(Qo);if(c<=0&&l<=0)return e.copy(n);tc.subVectors(t,i);const h=Tr.dot(tc),u=Er.dot(tc);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Tr,a);ec.subVectors(t,r);const f=Tr.dot(ec),_=Er.dot(ec);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Er,o);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return su.subVectors(r,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(su,o);const m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(Tr,a).addScaledVector(Er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function nc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=wl(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nc(a,r,t+1/3),this.g=nc(a,r,t),this.b=nc(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Kt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ae(Le.r*255,0,255))*65536+Math.round(Ae(Le.g*255,0,255))*256+Math.round(Ae(Le.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=De){Kt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(fa);const n=Bs(pi.h,fa.h,e),i=Bs(pi.s,fa.s,e),r=Bs(pi.l,fa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Et;Et.NAMES=bf;let Kg=0;class Dn extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=kr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=jc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ji extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new D,pa=new Mt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}}class Af extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wf extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ei extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jg=0;const cn=new Bt,ic=new ue,br=new D,Ze=new ai,Ms=new ai,Me=new D;class Bn extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?wf:Af)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ei(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ze.min,Ms.min),Ze.expandByPoint(Me),Me.addVectors(Ze.max,Ms.max),Ze.expandByPoint(Me)):(Ze.expandByPoint(Ms.min),Ze.expandByPoint(Ms.max))}Ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Me.fromBufferAttribute(o,l),c&&(br.fromBufferAttribute(t,l),Me.add(br)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,d=new Mt,f=new Mt,_=new Mt,g=new D,p=new D;function m(P,M,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),_.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),o[P].add(g),o[M].add(g),o[S].add(g),c[P].add(p),c[M].add(p),c[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,M=y.length;P<M;++P){const S=y[P],I=S.start,B=S.count;for(let L=I,X=I+B;L<X;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new D,T=new D,R=new D,w=new D;function b(P){R.fromBufferAttribute(i,P),w.copy(R);const M=o[P];x.copy(M),x.sub(R.multiplyScalar(R.dot(M))).normalize(),T.crossVectors(w,M);const I=T.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,M=y.length;P<M;++P){const S=y[P],I=S.start,B=S.count;for(let L=I,X=I+B;L<X;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new Bt,zi=new ls,ma=new Fn,ou=new D,Ar=new D,wr=new D,Rr=new D,rc=new D,ga=new D,_a=new Mt,xa=new Mt,va=new Mt,cu=new D,lu=new D,hu=new D,ya=new D,Ma=new D;class Ne extends ue{constructor(t=new Bn,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(rc.fromBufferAttribute(u,t),a?ga.addScaledVector(rc,h):ga.addScaledVector(rc.sub(e),h))}e.add(ga)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(ma.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ma,ou)===null||zi.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(au.copy(r).invert(),zi.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,R=x;T<R;T+=3){const w=o.getX(T),b=o.getX(T+1),P=o.getX(T+2);i=Sa(this,m,t,n,l,h,u,w,b,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),T=o.getX(p+2);i=Sa(this,a,t,n,l,h,u,y,x,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,R=x;T<R;T+=3){const w=T,b=T+1,P=T+2;i=Sa(this,m,t,n,l,h,u,w,b,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,T=p+2;i=Sa(this,a,t,n,l,h,u,y,x,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Jg(s,t,e,n,i,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===ii,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:s}}function Sa(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Ar),s.getVertexPosition(c,wr),s.getVertexPosition(l,Rr);const h=Jg(s,t,e,n,Ar,wr,Rr,ya);if(h){i&&(_a.fromBufferAttribute(i,o),xa.fromBufferAttribute(i,c),va.fromBufferAttribute(i,l),h.uv=Rn.getInterpolation(ya,Ar,wr,Rr,_a,xa,va,new Mt)),r&&(_a.fromBufferAttribute(r,o),xa.fromBufferAttribute(r,c),va.fromBufferAttribute(r,l),h.uv1=Rn.getInterpolation(ya,Ar,wr,Rr,_a,xa,va,new Mt)),a&&(cu.fromBufferAttribute(a,o),lu.fromBufferAttribute(a,c),hu.fromBufferAttribute(a,l),h.normal=Rn.getInterpolation(ya,Ar,wr,Rr,cu,lu,hu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new D,materialIndex:0};Rn.getNormal(Ar,wr,Rr,u.normal),h.face=u}return h}class hs extends Bn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ei(l,3)),this.setAttribute("normal",new ei(h,3)),this.setAttribute("uv",new ei(u,2));function _(g,p,m,y,x,T,R,w,b,P,M){const S=T/b,I=R/P,B=T/2,L=R/2,X=w/2,G=b+1,Y=P+1;let K=0,z=0;const Q=new D;for(let $=0;$<Y;$++){const ht=$*I-L;for(let St=0;St<G;St++){const Xt=St*S-B;Q[g]=Xt*y,Q[p]=ht*x,Q[m]=X,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[p]=0,Q[m]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(St/b),u.push(1-$/P),K+=1}}for(let $=0;$<P;$++)for(let ht=0;ht<b;ht++){const St=d+ht+G*$,Xt=d+ht+G*($+1),q=d+(ht+1)+G*($+1),et=d+(ht+1)+G*$;c.push(St,Xt,et),c.push(Xt,q,et),z+=6}o.addGroup(f,z,M),f+=z,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){const t={};for(let e=0;e<s.length;e++){const n=ts(s[e]);for(const i in n)t[i]=n[i]}return t}function $g(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Zg={clone:ts,merge:Be};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=$g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cf extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new D,uu=new Mt,du=new Mt;class ze extends Cf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,uu,du),e.subVectors(du,uu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cr=-90,Pr=1;class e_ extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(Cr,Pr,t,e);i.layers=this.layers,this.add(i);const r=new ze(Cr,Pr,t,e);r.layers=this.layers,this.add(r);const a=new ze(Cr,Pr,t,e);a.layers=this.layers,this.add(a);const o=new ze(Cr,Pr,t,e);o.layers=this.layers,this.add(o);const c=new ze(Cr,Pr,t,e);c.layers=this.layers,this.add(c);const l=new ze(Cr,Pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cl extends Te{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Yr,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n_ extends ir{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hs(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:wi});r.uniforms.tEquirect.value=e;const a=new Ne(i,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=tn),new e_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const sc=new D,i_=new D,r_=new Ft;class vi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sc.subVectors(n,e).cross(i_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||r_.getNormalMatrix(t),i=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Fn,Ta=new D;class Pl{constructor(t=new vi,e=new vi,n=new vi,i=new vi,r=new vi,a=new vi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],T=i[15];if(n[0].setComponents(c-r,d-l,p-f,T-m).normalize(),n[1].setComponents(c+r,d+l,p+f,T+m).normalize(),n[2].setComponents(c+a,d+h,p+_,T+y).normalize(),n[3].setComponents(c-a,d-h,p-_,T-y).normalize(),n[4].setComponents(c-o,d-u,p-g,T-x).normalize(),e===ti)n[5].setComponents(c+o,d+u,p+g,T+x).normalize();else if(e===oo)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ta.x=i.normal.x>0?t.max.x:t.min.x,Ta.y=i.normal.y>0?t.max.y:t.min.y,Ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function s_(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,o),u.count===-1&&d.length===0&&s.bufferSubData(l,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class us extends Bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const y=m*d-a;for(let x=0;x<l;x++){const T=x*u-r;_.push(T,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const x=y+l*m,T=y+l*(m+1),R=y+1+l*(m+1),w=y+1+l*m;f.push(x,T,w),f.push(T,R,w)}this.setIndex(f),this.setAttribute("position",new ei(_,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,B_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,M0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:a_,alphahash_pars_fragment:o_,alphamap_fragment:c_,alphamap_pars_fragment:l_,alphatest_fragment:h_,alphatest_pars_fragment:u_,aomap_fragment:d_,aomap_pars_fragment:f_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:__,bsdfs:x_,iridescence_fragment:v_,bumpmap_pars_fragment:y_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:E_,color_fragment:b_,color_pars_fragment:A_,color_pars_vertex:w_,color_vertex:R_,common:C_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:L_,displacementmap_pars_vertex:D_,displacementmap_vertex:I_,emissivemap_fragment:N_,emissivemap_pars_fragment:O_,colorspace_fragment:U_,colorspace_pars_fragment:F_,envmap_fragment:B_,envmap_common_pars_fragment:z_,envmap_pars_fragment:k_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:Z_,envmap_vertex:H_,fog_vertex:G_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:K_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:J_,lights_pars_begin:$_,lights_toon_fragment:Q_,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:s0,lights_fragment_maps:a0,lights_fragment_end:o0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:x0,morphcolor_vertex:v0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:T0,normal_fragment_maps:E0,normal_pars_fragment:b0,normal_pars_vertex:A0,normal_vertex:w0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:I0,packing:N0,premultiplied_alpha_fragment:O0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:H0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:j0,specularmap_pars_fragment:J0,tonemapping_fragment:$0,tonemapping_pars_fragment:Z0,transmission_fragment:Q0,transmission_pars_fragment:tx,uv_pars_fragment:ex,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:rx,background_vert:sx,background_frag:ax,backgroundCube_vert:ox,backgroundCube_frag:cx,cube_vert:lx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distanceRGBA_vert:fx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:Tx,meshmatcap_frag:Ex,meshnormal_vert:bx,meshnormal_frag:Ax,meshphong_vert:wx,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Lx,meshtoon_frag:Dx,points_vert:Ix,points_frag:Nx,shadow_vert:Ox,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Bx},at={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bn={basic:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Be([at.points,at.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Be([at.common,at.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Be([at.sprite,at.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Be([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Be([at.lights,at.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};bn.physical={uniforms:Be([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Ea={r:0,b:0,g:0},Vi=new On,zx=new Bt;function kx(s,t,e,n,i,r,a){const o=new Et(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const T=_(y);T===null?m(o,c):T&&T.isColor&&(m(T,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(y,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===yo)?(h===void 0&&(h=new Ne(new hs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ts(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(Vi)),h.material.toneMapped=Kt.getTransfer(T.colorSpace)!==re,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ne(new us(2,2),new Di({name:"BackgroundMaterial",uniforms:ts(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(Ea,Rf(s)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:g,addToRenderList:p}}function Vx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,I,B,L,X){let G=!1;const Y=u(L,B,I);r!==Y&&(r=Y,l(r.object)),G=f(S,L,B,X),G&&_(S,L,B,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,T(S,I,B,L),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,I,B){const L=B.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let G=X[I.id];G===void 0&&(G={},X[I.id]=G);let Y=G[L];return Y===void 0&&(Y=d(c()),G[L]=Y),Y}function d(S){const I=[],B=[],L=[];for(let X=0;X<e;X++)I[X]=0,B[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,I,B,L){const X=r.attributes,G=I.attributes;let Y=0;const K=B.getAttributes();for(const z in K)if(K[z].location>=0){const $=X[z];let ht=G[z];if(ht===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function _(S,I,B,L){const X={},G=I.attributes;let Y=0;const K=B.getAttributes();for(const z in K)if(K[z].location>=0){let $=G[z];$===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),X[z]=ht,Y++}r.attributes=X,r.attributesNum=Y,r.index=L}function g(){const S=r.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function p(S){m(S,0)}function m(S,I){const B=r.newAttributes,L=r.enabledAttributes,X=r.attributeDivisors;B[S]=1,L[S]===0&&(s.enableVertexAttribArray(S),L[S]=1),X[S]!==I&&(s.vertexAttribDivisor(S,I),X[S]=I)}function y(){const S=r.newAttributes,I=r.enabledAttributes;for(let B=0,L=I.length;B<L;B++)I[B]!==S[B]&&(s.disableVertexAttribArray(B),I[B]=0)}function x(S,I,B,L,X,G,Y){Y===!0?s.vertexAttribIPointer(S,I,B,X,G):s.vertexAttribPointer(S,I,B,L,X,G)}function T(S,I,B,L){g();const X=L.attributes,G=B.getAttributes(),Y=I.defaultAttributeValues;for(const K in G){const z=G[K];if(z.location>=0){let Q=X[K];if(Q===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const $=Q.normalized,ht=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const Xt=St.buffer,q=St.type,et=St.bytesPerElement,dt=q===s.INT||q===s.UNSIGNED_INT||Q.gpuType===cf;if(Q.isInterleavedBufferAttribute){const st=Q.data,zt=st.stride,It=Q.offset;if(st.isInstancedInterleavedBuffer){for(let U=0;U<z.locationSize;U++)m(z.location+U,st.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let U=0;U<z.locationSize;U++)p(z.location+U);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let U=0;U<z.locationSize;U++)x(z.location+U,ht/z.locationSize,q,$,zt*et,(It+ht/z.locationSize*U)*et,dt)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)m(z.location+st,Q.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<z.locationSize;st++)p(z.location+st);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let st=0;st<z.locationSize;st++)x(z.location+st,ht/z.locationSize,q,$,ht*et,ht/z.locationSize*st*et,dt)}}else if(Y!==void 0){const $=Y[K];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(z.location,$);break;case 3:s.vertexAttrib3fv(z.location,$);break;case 4:s.vertexAttrib4fv(z.location,$);break;default:s.vertexAttrib1fv(z.location,$)}}}}y()}function R(){P();for(const S in n){const I=n[S];for(const B in I){const L=I[B];for(const X in L)h(L[X].object),delete L[X];delete I[B]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const B in I){const L=I[B];for(const X in L)h(L[X].object),delete L[X];delete I[B]}delete n[S.id]}function b(S){for(const I in n){const B=n[I];if(B[S.id]===void 0)continue;const L=B[S.id];for(const X in L)h(L[X].object),delete L[X];delete B[S.id]}}function P(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Hx(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)a(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Gx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===Mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Li&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!b)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:R}}function Wx(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new vi,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,x=y*4;let T=m.clippingState||null;c.value=T,T=h(_,d,x,f);for(let R=0;R!==x;++R)T[R]=e[R];m.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,T=f;x!==g;++x,T+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Xx(s){let t=new WeakMap;function e(a,o){return o===Jc?a.mapping=Yr:o===$c&&(a.mapping=Kr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jc||o===$c)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new n_(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ll extends Cf{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fr=4,fu=[.125,.215,.35,.446,.526,.582],ji=20,ac=new Ll,pu=new Et;let oc=null,cc=0,lc=0,hc=!1;const qi=(1+Math.sqrt(5))/2,Lr=1/qi,mu=[new D(-qi,Lr,0),new D(qi,Lr,0),new D(-Lr,0,qi),new D(Lr,0,qi),new D(0,qi,-Lr),new D(0,qi,Lr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){oc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oc,cc,lc),this._renderer.xr.enabled=hc,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yr||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Mo,format:Mn,colorSpace:we,depthBuffer:!1},i=_u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=Yx(r,t,e)}return i}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,i){const o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pu),h.toneMapping=Ri,h.autoClear=!1;const f=new Ji({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new Ne(new hs,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(pu),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;ba(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Yr||t.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ba(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mu[(i-r-1)%mu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let y=0;for(let b=0;b<ji;++b){const P=b/g,M=Math.exp(-P*P/2);m.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const T=this._sizeLods[i],R=3*T*(i>x-Fr?i-x+Fr:0),w=4*(this._cubeSize-T);ba(e,R,w,3*T,2*T),c.setRenderTarget(e),c.render(u,ac)}}function qx(s){const t=[],e=[],n=[];let i=s;const r=s-Fr+1+fu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Fr?c=fu[a-s+Fr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*f),x=new Float32Array(p*_*f),T=new Float32Array(m*_*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,P=w>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(M,g*_*w),x.set(d,p*_*w);const S=[w,w,w,w,w,w];T.set(S,m*_*w)}const R=new Bn;R.setAttribute("position",new He(y,g)),R.setAttribute("uv",new He(x,p)),R.setAttribute("faceIndex",new He(T,m)),t.push(R),i>Fr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _u(s,t,e){const n=new ir(s,t,e);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yx(s,t,e){const n=new Float32Array(ji),i=new D(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xu(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vu(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Jc||c===$c,h=c===Yr||c===Kr;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new gu(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new gu(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jx(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let x=0,T=y.length;x<T;x+=3){const R=y[x+0],w=y[x+1],b=y[x+2];d.push(R,w,w,b,b,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,T=y.length/3-1;x<T;x+=3){const R=x+0,w=x+1,b=x+2;d.push(R,w,w,b,b,R)}}else return;const p=new(yf(d)?wf:Af)(d,1);p.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $x(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/a,f[p]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}}function u(d,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,t,e){const n=new WeakMap,i=new ee;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),g===!0&&(T=2),p===!0&&(T=3);let R=o.attributes.position.count*T,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*u),P=new Tf(b,R,w,u);P.type=Pn,P.needsUpdate=!0;const M=T*4;for(let I=0;I<u;I++){const B=m[I],L=y[I],X=x[I],G=R*w*4*I;for(let Y=0;Y<B.count;Y++){const K=Y*M;_===!0&&(i.fromBufferAttribute(B,Y),b[G+K+0]=i.x,b[G+K+1]=i.y,b[G+K+2]=i.z,b[G+K+3]=0),g===!0&&(i.fromBufferAttribute(L,Y),b[G+K+4]=i.x,b[G+K+5]=i.y,b[G+K+6]=i.z,b[G+K+7]=0),p===!0&&(i.fromBufferAttribute(X,Y),b[G+K+8]=i.x,b[G+K+9]=i.y,b[G+K+10]=i.z,b[G+K+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Mt(R,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function tv(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Lf extends Te{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Vr,h!==Vr&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vr&&(n=$r),n===void 0&&h===Gs&&(n=ea),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Df=new Te,If=new Lf(1,1);If.compareFunction=_f;const Nf=new Tf,Of=new kg,Uf=new Cl,yu=[],Mu=[],Su=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function ds(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=yu[i];if(r===void 0&&(r=new Float32Array(i),yu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function To(s,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ev(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function sv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Eu.set(n),s.uniformMatrix2fv(this.addr,!1,Eu),ve(e,n)}}function av(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Tu.set(n),s.uniformMatrix3fv(this.addr,!1,Tu),ve(e,n)}}function ov(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Su.set(n),s.uniformMatrix4fv(this.addr,!1,Su),ve(e,n)}}function cv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function dv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function gv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?If:Df;e.setTexture2D(t||r,i)}function _v(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Of,i)}function xv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uf,i)}function vv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nf,i)}function yv(s){switch(s){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return vv}}function Mv(s,t){s.uniform1fv(this.addr,t)}function Sv(s,t){const e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function Tv(s,t){const e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function Ev(s,t){const e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function bv(s,t){const e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Av(s,t){const e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wv(s,t){const e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rv(s,t){s.uniform1iv(this.addr,t)}function Cv(s,t){s.uniform2iv(this.addr,t)}function Pv(s,t){s.uniform3iv(this.addr,t)}function Lv(s,t){s.uniform4iv(this.addr,t)}function Dv(s,t){s.uniform1uiv(this.addr,t)}function Iv(s,t){s.uniform2uiv(this.addr,t)}function Nv(s,t){s.uniform3uiv(this.addr,t)}function Ov(s,t){s.uniform4uiv(this.addr,t)}function Uv(s,t,e){const n=this.cache,i=t.length,r=To(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Df,r[a])}function Fv(s,t,e){const n=this.cache,i=t.length,r=To(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Of,r[a])}function Bv(s,t,e){const n=this.cache,i=t.length,r=To(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Uf,r[a])}function zv(s,t,e){const n=this.cache,i=t.length,r=To(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Nf,r[a])}function kv(s){switch(s){case 5126:return Mv;case 35664:return Sv;case 35665:return Tv;case 35666:return Ev;case 35674:return bv;case 35675:return Av;case 35676:return wv;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Iv;case 36295:return Nv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}}class Hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kv(e.type)}}class Gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function Wv(s,t,e){const n=s.name,i=n.length;for(uc.lastIndex=0;;){const r=uc.exec(n),a=uc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){bu(e,l===void 0?new Vv(o,s,t):new Hv(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Gv(o),bu(e,u)),e=u}}}class Qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Wv(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Au(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xv=37297;let qv=0;function Yv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kv(s){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(s);let n;switch(t===e?n="":t===ao&&e===so?n="LinearDisplayP3ToLinearSRGB":t===so&&e===ao&&(n="LinearSRGBToLinearDisplayP3"),s){case we:case So:return[n,"LinearTransferOETF"];case De:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Yv(s.getShaderSource(t),a)}else return i}function jv(s,t){const e=Kv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jv(s,t){let e;switch(t){case Gm:e="Linear";break;case Wm:e="Reinhard";break;case Xm:e="OptimizedCineon";break;case qm:e="ACESFilmic";break;case Km:e="AgX";break;case jm:e="Neutral";break;case Ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $v(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Zv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ns(s){return s!==""}function Ru(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(ty,ny)}const ey=new Map;function ny(s,t){let e=Dt[t];if(e===void 0){const n=ey.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(s){return s.replace(iy,ry)}function ry(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===mm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function ay(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yr:case Kr:t="ENVMAP_TYPE_CUBE";break;case yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Kr:t="ENVMAP_MODE_REFRACTION";break}return t}function cy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rf:t="ENVMAP_BLENDING_MULTIPLY";break;case Vm:t="ENVMAP_BLENDING_MIX";break;case Hm:t="ENVMAP_BLENDING_ADD";break}return t}function ly(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hy(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=sy(e),l=ay(e),h=oy(e),u=cy(e),d=ly(e),f=$v(e),_=Zv(r),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(p=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,jv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=el(a),a=Ru(a,e),a=Cu(a,e),o=el(o),o=Ru(o,e),o=Cu(o,e),a=Pu(a),o=Pu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+a,T=y+m+o,R=Au(i,i.VERTEX_SHADER,x),w=Au(i,i.FRAGMENT_SHADER,T);i.attachShader(g,R),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(I){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(w).trim();let G=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,w);else{const K=wu(i,R,"vertex"),z=wu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+K+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||X==="")&&(Y=!1);Y&&(I.diagnostics={runnable:G,programLog:B,vertexShader:{log:L,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(R),i.deleteShader(w),P=new Qa(i,g),M=Qv(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Xv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let uy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fy(t),e.set(t,n)),n}}class fy{constructor(t){this.id=uy++,this.code=t,this.usedTimes=0}}function py(s,t,e,n,i,r,a){const o=new Rl,c=new dy,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,S,I,B,L){const X=B.fog,G=L.geometry,Y=M.isMeshStandardMaterial?B.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),z=K&&K.mapping===yo?K.image.height:null,Q=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=$!==void 0?$.length:0;let St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let Xt,q,et,dt;if(Q){const qt=bn[Q];Xt=qt.vertexShader,q=qt.fragmentShader}else Xt=M.vertexShader,q=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),dt=c.getFragmentShaderID(M);const st=s.getRenderTarget(),zt=L.isInstancedMesh===!0,It=L.isBatchedMesh===!0,U=!!M.map,$t=!!M.matcap,_t=!!K,Zt=!!M.aoMap,vt=!!M.lightMap,kt=!!M.bumpMap,wt=!!M.normalMap,Ht=!!M.displacementMap,se=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,W=M.anisotropy>0,j=M.clearcoat>0,Z=M.dispersion>0,tt=M.iridescence>0,gt=M.sheen>0,ct=M.transmission>0,ot=W&&!!M.anisotropyMap,Tt=j&&!!M.clearcoatMap,rt=j&&!!M.clearcoatNormalMap,mt=j&&!!M.clearcoatRoughnessMap,Gt=tt&&!!M.iridescenceMap,xt=tt&&!!M.iridescenceThicknessMap,ut=gt&&!!M.sheenColorMap,Rt=gt&&!!M.sheenRoughnessMap,Nt=!!M.specularMap,Qt=!!M.specularColorMap,Pt=!!M.specularIntensityMap,v=ct&&!!M.transmissionMap,N=ct&&!!M.thicknessMap,F=!!M.gradientMap,J=!!M.alphaMap,it=M.alphaTest>0,Ct=!!M.alphaHash,Ot=!!M.extensions;let ce=Ri;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=s.toneMapping);const ye={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:q,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:It,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:we,alphaToCoverage:!!M.alphaToCoverage,map:U,matcap:$t,envMap:_t,envMapMode:_t&&K.mapping,envMapCubeUVHeight:z,aoMap:Zt,lightMap:vt,bumpMap:kt,normalMap:wt,displacementMap:d&&Ht,emissiveMap:se,normalMapObjectSpace:wt&&M.normalMapType===hg,normalMapTangentSpace:wt&&M.normalMapType===gf,metalnessMap:C,roughnessMap:E,anisotropy:W,anisotropyMap:ot,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:mt,dispersion:Z,iridescence:tt,iridescenceMap:Gt,iridescenceThicknessMap:xt,sheen:gt,sheenColorMap:ut,sheenRoughnessMap:Rt,specularMap:Nt,specularColorMap:Qt,specularIntensityMap:Pt,transmission:ct,transmissionMap:v,thicknessMap:N,gradientMap:F,opaque:M.transparent===!1&&M.blending===kr&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:it,alphaHash:Ct,combine:M.combine,mapUv:U&&g(M.map.channel),aoMapUv:Zt&&g(M.aoMap.channel),lightMapUv:vt&&g(M.lightMap.channel),bumpMapUv:kt&&g(M.bumpMap.channel),normalMapUv:wt&&g(M.normalMap.channel),displacementMapUv:Ht&&g(M.displacementMap.channel),emissiveMapUv:se&&g(M.emissiveMap.channel),metalnessMapUv:C&&g(M.metalnessMap.channel),roughnessMapUv:E&&g(M.roughnessMap.channel),anisotropyMapUv:ot&&g(M.anisotropyMap.channel),clearcoatMapUv:Tt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(M.sheenRoughnessMap.channel),specularMapUv:Nt&&g(M.specularMap.channel),specularColorMapUv:Qt&&g(M.specularColorMap.channel),specularIntensityMapUv:Pt&&g(M.specularIntensityMap.channel),transmissionMapUv:v&&g(M.transmissionMap.channel),thicknessMapUv:N&&g(M.thicknessMap.channel),alphaMapUv:J&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(wt||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(U||J),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,useLegacyLights:s._useLegacyLights,decodeVideoTexture:U&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ot&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),M.push(o.mask)}function T(M){const S=_[M.type];let I;if(S){const B=bn[S];I=Zg.clone(B.uniforms)}else I=M.uniforms;return I}function R(M,S){let I;for(let B=0,L=h.length;B<L;B++){const X=h[B];if(X.cacheKey===S){I=X,++I.usedTimes;break}}return I===void 0&&(I=new hy(s,S,M,r),h.push(I)),I}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function b(M){c.remove(M)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:P}}function my(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Du(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Iu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function o(u,d,f,_,g,p){const m=a(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,_,g,p){const m=a(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||gy),n.length>1&&n.sort(d||Du),i.length>1&&i.sort(d||Du)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function _y(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Iu,s.set(n,[a])):i>=r.length?(a=new Iu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function xy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Et};break;case"SpotLight":e={position:new D,direction:new D,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function vy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yy=0;function My(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sy(s){const t=new xy,e=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new Bt,a=new Bt;function o(l,h){let u=0,d=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let _=0,g=0,p=0,m=0,y=0,x=0,T=0,R=0,w=0,b=0,P=0;l.sort(My);const M=h===!0?Math.PI:1;for(let I=0,B=l.length;I<B;I++){const L=l[I],X=L.color,G=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=X.r*G*M,d+=X.g*G*M,f+=X.b*G*M;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],G);P++}else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Q=L.shadow,$=e.get(L);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[_]=$,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=L.shadow.matrix,x++}n.directional[_]=z,_++}else if(L.isSpotLight){const z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(X).multiplyScalar(G*M),z.distance=Y,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;const Q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[p]=Q.matrix,L.castShadow){const $=e.get(L);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[p]=$,n.spotShadowMap[p]=K,R++}p++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(X).multiplyScalar(G),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*M),z.distance=L.distance,z.decay=L.decay,L.castShadow){const Q=L.shadow,$=e.get(L);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(G*M),z.groundColor.copy(L.groundColor).multiplyScalar(G*M),n.hemi[y]=z,y++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==_||S.pointLength!==g||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==T||S.numSpotShadows!==R||S.numSpotMaps!==w||S.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=R+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,S.directionalLength=_,S.pointLength=g,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=T,S.numSpotShadows=R,S.numSpotMaps=w,S.numLightProbes=P,n.version=yy++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),u++}else if(x.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Nu(s){const t=new Sy(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ty(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Nu(s),t.set(i,[o])):r>=a.length?(o=new Nu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ey extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class by extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ry(s,t,e){let n=new Pl;const i=new Mt,r=new Mt,a=new ee,o=new Ey({depthPacking:lg}),c=new by,l={},h=e.maxTextureSize,u={[ii]:Ge,[Ge]:ii,[wn]:wn},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Ay,fragmentShader:wy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),B=s.state;B.setBlending(wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=m!==Jn&&this.type===Jn,X=m===Jn&&this.type!==Jn;for(let G=0,Y=w.length;G<Y;G++){const K=w[G],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();if(i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y)),z.map===null||L===!0||X===!0){const ht=this.type!==Jn?{minFilter:Ve,magFilter:Ve}:{};z.map!==null&&z.map.dispose(),z.map=new ir(i.x,i.y,ht),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const $=z.getViewportCount();for(let ht=0;ht<$;ht++){const St=z.getViewport(ht);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),B.viewport(a),z.updateMatrices(K,ht),n=z.getFrustum(),T(b,P,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Jn&&y(z,P),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,S,I)};function y(w,b){const P=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ir(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,P,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,P,f,g,null)}function x(w,b,P,M){let S=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=S.uuid,L=b.uuid;let X=l[B];X===void 0&&(X={},l[B]=X);let G=X[L];G===void 0&&(G=S.clone(),X[L]=G,b.addEventListener("dispose",R)),S=G}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Jn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=s.properties.get(S);B.light=P}return S}function T(w,b,P,M,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const L=t.update(w),X=w.material;if(Array.isArray(X)){const G=L.groups;for(let Y=0,K=G.length;Y<K;Y++){const z=G[Y],Q=X[z.materialIndex];if(Q&&Q.visible){const $=x(w,Q,M,S);w.onBeforeShadow(s,w,b,P,L,$,z),s.renderBufferDirect(P,null,L,$,w,z),w.onAfterShadow(s,w,b,P,L,$,z)}}}else if(X.visible){const G=x(w,X,M,S);w.onBeforeShadow(s,w,b,P,L,G,null),s.renderBufferDirect(P,null,L,G,w,null),w.onAfterShadow(s,w,b,P,L,G,null)}}const B=w.children;for(let L=0,X=B.length;L<X;L++)T(B[L],b,P,M,S)}function R(w){w.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Cy(s){function t(){let v=!1;const N=new ee;let F=null;const J=new ee(0,0,0,0);return{setMask:function(it){F!==it&&!v&&(s.colorMask(it,it,it,it),F=it)},setLocked:function(it){v=it},setClear:function(it,Ct,Ot,ce,ye){ye===!0&&(it*=ce,Ct*=ce,Ot*=ce),N.set(it,Ct,Ot,ce),J.equals(N)===!1&&(s.clearColor(it,Ct,Ot,ce),J.copy(N))},reset:function(){v=!1,F=null,J.set(-1,0,0,0)}}}function e(){let v=!1,N=null,F=null,J=null;return{setTest:function(it){it?dt(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(it){N!==it&&!v&&(s.depthMask(it),N=it)},setFunc:function(it){if(F!==it){switch(it){case Nm:s.depthFunc(s.NEVER);break;case Om:s.depthFunc(s.ALWAYS);break;case Um:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Fm:s.depthFunc(s.EQUAL);break;case Bm:s.depthFunc(s.GEQUAL);break;case zm:s.depthFunc(s.GREATER);break;case km:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=it}},setLocked:function(it){v=it},setClear:function(it){J!==it&&(s.clearDepth(it),J=it)},reset:function(){v=!1,N=null,F=null,J=null}}}function n(){let v=!1,N=null,F=null,J=null,it=null,Ct=null,Ot=null,ce=null,ye=null;return{setTest:function(qt){v||(qt?dt(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(qt){N!==qt&&!v&&(s.stencilMask(qt),N=qt)},setFunc:function(qt,pe,ie){(F!==qt||J!==pe||it!==ie)&&(s.stencilFunc(qt,pe,ie),F=qt,J=pe,it=ie)},setOp:function(qt,pe,ie){(Ct!==qt||Ot!==pe||ce!==ie)&&(s.stencilOp(qt,pe,ie),Ct=qt,Ot=pe,ce=ie)},setLocked:function(qt){v=qt},setClear:function(qt){ye!==qt&&(s.clearStencil(qt),ye=qt)},reset:function(){v=!1,N=null,F=null,J=null,it=null,Ct=null,Ot=null,ce=null,ye=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,x=null,T=null,R=null,w=new Et(0,0,0),b=0,P=!1,M=null,S=null,I=null,B=null,L=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=Y>=2);let z=null,Q={};const $=s.getParameter(s.SCISSOR_BOX),ht=s.getParameter(s.VIEWPORT),St=new ee().fromArray($),Xt=new ee().fromArray(ht);function q(v,N,F,J){const it=new Uint8Array(4),Ct=s.createTexture();s.bindTexture(v,Ct),s.texParameteri(v,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(v,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<F;Ot++)v===s.TEXTURE_3D||v===s.TEXTURE_2D_ARRAY?s.texImage3D(N,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(N+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Ct}const et={};et[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(io),kt(!1),wt(uh),dt(s.CULL_FACE),Zt(wi);function dt(v){l[v]!==!0&&(s.enable(v),l[v]=!0)}function st(v){l[v]!==!1&&(s.disable(v),l[v]=!1)}function zt(v,N){return h[v]!==N?(s.bindFramebuffer(v,N),h[v]=N,v===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=N),v===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=N),!0):!1}function It(v,N){let F=d,J=!1;if(v){F=u.get(N),F===void 0&&(F=[],u.set(N,F));const it=v.textures;if(F.length!==it.length||F[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,Ot=it.length;Ct<Ot;Ct++)F[Ct]=s.COLOR_ATTACHMENT0+Ct;F.length=it.length,J=!0}}else F[0]!==s.BACK&&(F[0]=s.BACK,J=!0);J&&s.drawBuffers(F)}function U(v){return f!==v?(s.useProgram(v),f=v,!0):!1}const $t={[Ki]:s.FUNC_ADD,[_m]:s.FUNC_SUBTRACT,[xm]:s.FUNC_REVERSE_SUBTRACT};$t[vm]=s.MIN,$t[ym]=s.MAX;const _t={[Mm]:s.ZERO,[Sm]:s.ONE,[Tm]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[Cm]:s.SRC_ALPHA_SATURATE,[wm]:s.DST_COLOR,[bm]:s.DST_ALPHA,[Em]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[Rm]:s.ONE_MINUS_DST_COLOR,[Am]:s.ONE_MINUS_DST_ALPHA,[Pm]:s.CONSTANT_COLOR,[Lm]:s.ONE_MINUS_CONSTANT_COLOR,[Dm]:s.CONSTANT_ALPHA,[Im]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(v,N,F,J,it,Ct,Ot,ce,ye,qt){if(v===wi){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(dt(s.BLEND),_=!0),v!==gm){if(v!==g||qt!==P){if((p!==Ki||x!==Ki)&&(s.blendEquation(s.FUNC_ADD),p=Ki,x=Ki),qt)switch(v){case kr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dh:s.blendFunc(s.ONE,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,y=null,T=null,R=null,w.set(0,0,0),b=0,g=v,P=qt}return}it=it||N,Ct=Ct||F,Ot=Ot||J,(N!==p||it!==x)&&(s.blendEquationSeparate($t[N],$t[it]),p=N,x=it),(F!==m||J!==y||Ct!==T||Ot!==R)&&(s.blendFuncSeparate(_t[F],_t[J],_t[Ct],_t[Ot]),m=F,y=J,T=Ct,R=Ot),(ce.equals(w)===!1||ye!==b)&&(s.blendColor(ce.r,ce.g,ce.b,ye),w.copy(ce),b=ye),g=v,P=!1}function vt(v,N){v.side===wn?st(s.CULL_FACE):dt(s.CULL_FACE);let F=v.side===Ge;N&&(F=!F),kt(F),v.blending===kr&&v.transparent===!1?Zt(wi):Zt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),i.setMask(v.colorWrite);const J=v.stencilWrite;a.setTest(J),J&&(a.setMask(v.stencilWriteMask),a.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),a.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),se(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(v){M!==v&&(v?s.frontFace(s.CW):s.frontFace(s.CCW),M=v)}function wt(v){v!==fm?(dt(s.CULL_FACE),v!==S&&(v===uh?s.cullFace(s.BACK):v===pm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),S=v}function Ht(v){v!==I&&(G&&s.lineWidth(v),I=v)}function se(v,N,F){v?(dt(s.POLYGON_OFFSET_FILL),(B!==N||L!==F)&&(s.polygonOffset(N,F),B=N,L=F)):st(s.POLYGON_OFFSET_FILL)}function C(v){v?dt(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function E(v){v===void 0&&(v=s.TEXTURE0+X-1),z!==v&&(s.activeTexture(v),z=v)}function W(v,N,F){F===void 0&&(z===null?F=s.TEXTURE0+X-1:F=z);let J=Q[F];J===void 0&&(J={type:void 0,texture:void 0},Q[F]=J),(J.type!==v||J.texture!==N)&&(z!==F&&(s.activeTexture(F),z=F),s.bindTexture(v,N||et[v]),J.type=v,J.texture=N)}function j(){const v=Q[z];v!==void 0&&v.type!==void 0&&(s.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ct(){try{s.texSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function mt(){try{s.texStorage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Gt(){try{s.texImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ut(v){St.equals(v)===!1&&(s.scissor(v.x,v.y,v.z,v.w),St.copy(v))}function Rt(v){Xt.equals(v)===!1&&(s.viewport(v.x,v.y,v.z,v.w),Xt.copy(v))}function Nt(v,N){let F=c.get(N);F===void 0&&(F=new WeakMap,c.set(N,F));let J=F.get(v);J===void 0&&(J=s.getUniformBlockIndex(N,v.name),F.set(v,J))}function Qt(v,N){const J=c.get(N).get(v);o.get(N)!==J&&(s.uniformBlockBinding(N,J,v.__bindingPointIndex),o.set(N,J))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,Q={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,x=null,T=null,R=null,w=new Et(0,0,0),b=0,P=!1,M=null,S=null,I=null,B=null,L=null,St.set(0,0,s.canvas.width,s.canvas.height),Xt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:dt,disable:st,bindFramebuffer:zt,drawBuffers:It,useProgram:U,setBlending:Zt,setMaterial:vt,setFlipSided:kt,setCullFace:wt,setLineWidth:Ht,setPolygonOffset:se,setScissorTest:C,activeTexture:E,bindTexture:W,unbindTexture:j,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:Gt,texImage3D:xt,updateUBOMapping:Nt,uniformBlockBinding:Qt,texStorage2D:rt,texStorage3D:mt,texSubImage2D:gt,texSubImage3D:ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:Tt,scissor:ut,viewport:Rt,reset:Pt}}function Py(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):Xs("canvas")}function g(C,E,W){let j=1;const Z=se(C);if((Z.width>W||Z.height>W)&&(j=W/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(j*Z.width),gt=Math.floor(j*Z.height);u===void 0&&(u=_(tt,gt));const ct=E?_(tt,gt):u;return ct.width=tt,ct.height=gt,ct.getContext("2d").drawImage(C,0,0,tt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+tt+"x"+gt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Ve&&C.minFilter!==tn}function m(C){s.generateMipmap(C)}function y(C,E,W,j,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=E;if(E===s.RED&&(W===s.FLOAT&&(tt=s.R32F),W===s.HALF_FLOAT&&(tt=s.R16F),W===s.UNSIGNED_BYTE&&(tt=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.R8UI),W===s.UNSIGNED_SHORT&&(tt=s.R16UI),W===s.UNSIGNED_INT&&(tt=s.R32UI),W===s.BYTE&&(tt=s.R8I),W===s.SHORT&&(tt=s.R16I),W===s.INT&&(tt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(tt=s.RG32F),W===s.HALF_FLOAT&&(tt=s.RG16F),W===s.UNSIGNED_BYTE&&(tt=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RG8UI),W===s.UNSIGNED_SHORT&&(tt=s.RG16UI),W===s.UNSIGNED_INT&&(tt=s.RG32UI),W===s.BYTE&&(tt=s.RG8I),W===s.SHORT&&(tt=s.RG16I),W===s.INT&&(tt=s.RG32I)),E===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),E===s.RGBA){const gt=Z?ro:Kt.getTransfer(j);W===s.FLOAT&&(tt=s.RGBA32F),W===s.HALF_FLOAT&&(tt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(tt=gt===re?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){const E=C.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),P(E)}function w(C){const E=n.get(C);if(E.__webglInit===void 0)return;const W=C.source,j=d.get(W);if(j){const Z=j[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(C),Object.keys(j).length===0&&d.delete(W)}n.remove(C)}function b(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const W=C.source,j=d.get(W);delete j[E.__cacheKey],a.memory.textures--}function P(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Z=0;Z<E.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let j=0,Z=W.length;j<Z;j++){const tt=n.get(W[j]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(C)}let M=0;function S(){M=0}function I(){const C=M;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),M+=1,C}function B(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function L(C,E){const W=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(W,C,E);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function X(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){St(W,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function G(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){St(W,C,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function Y(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Xt(W,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const K={[jr]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},z={[Ve]:s.NEAREST,[af]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Za]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Q={[ug]:s.NEVER,[_g]:s.ALWAYS,[dg]:s.LESS,[_f]:s.LEQUAL,[fg]:s.EQUAL,[gg]:s.GEQUAL,[pg]:s.GREATER,[mg]:s.NOTEQUAL};function $(C,E){if(E.type===Pn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Za||E.magFilter===Is||E.magFilter===Qn||E.minFilter===tn||E.minFilter===Za||E.minFilter===Is||E.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,z[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ve||E.minFilter!==Is&&E.minFilter!==Qn||E.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ht(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",T));const j=E.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const tt=B(E);if(tt!==C.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Z[tt].usedTimes++;const gt=Z[C.__cacheKey];gt!==void 0&&(Z[C.__cacheKey].usedTimes--,gt.usedTimes===0&&b(E)),C.__cacheKey=tt,C.__webglTexture=Z[tt].texture}return W}function St(C,E,W){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);const Z=ht(C,E),tt=E.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+W);const gt=n.get(tt);if(tt.version!==gt.__version||Z===!0){e.activeTexture(s.TEXTURE0+W);const ct=Kt.getPrimaries(Kt.workingColorSpace),ot=E.colorSpace===Mi?null:Kt.getPrimaries(E.colorSpace),Tt=E.colorSpace===Mi||ct===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let rt=g(E.image,!1,i.maxTextureSize);rt=Ht(E,rt);const mt=r.convert(E.format,E.colorSpace),Gt=r.convert(E.type);let xt=y(E.internalFormat,mt,Gt,E.colorSpace,E.isVideoTexture);$(j,E);let ut;const Rt=E.mipmaps,Nt=E.isVideoTexture!==!0,Qt=gt.__version===void 0||Z===!0,Pt=tt.dataReady,v=x(E,rt);if(E.isDepthTexture)xt=s.DEPTH_COMPONENT16,E.type===Pn?xt=s.DEPTH_COMPONENT32F:E.type===$r?xt=s.DEPTH_COMPONENT24:E.type===ea&&(xt=s.DEPTH24_STENCIL8),Qt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,xt,rt.width,rt.height,0,mt,Gt,null));else if(E.isDataTexture)if(Rt.length>0){Nt&&Qt&&e.texStorage2D(s.TEXTURE_2D,v,xt,Rt[0].width,Rt[0].height);for(let N=0,F=Rt.length;N<F;N++)ut=Rt[N],Nt?Pt&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,ut.width,ut.height,mt,Gt,ut.data):e.texImage2D(s.TEXTURE_2D,N,xt,ut.width,ut.height,0,mt,Gt,ut.data);E.generateMipmaps=!1}else Nt?(Qt&&e.texStorage2D(s.TEXTURE_2D,v,xt,rt.width,rt.height),Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,mt,Gt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,xt,rt.width,rt.height,0,mt,Gt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Nt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,v,xt,Rt[0].width,Rt[0].height,rt.depth);for(let N=0,F=Rt.length;N<F;N++)ut=Rt[N],E.format!==Mn?mt!==null?Nt?Pt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,ut.width,ut.height,rt.depth,mt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,N,xt,ut.width,ut.height,rt.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,ut.width,ut.height,rt.depth,mt,Gt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,N,xt,ut.width,ut.height,rt.depth,0,mt,Gt,ut.data)}else{Nt&&Qt&&e.texStorage2D(s.TEXTURE_2D,v,xt,Rt[0].width,Rt[0].height);for(let N=0,F=Rt.length;N<F;N++)ut=Rt[N],E.format!==Mn?mt!==null?Nt?Pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,N,0,0,ut.width,ut.height,mt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,N,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?Pt&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,ut.width,ut.height,mt,Gt,ut.data):e.texImage2D(s.TEXTURE_2D,N,xt,ut.width,ut.height,0,mt,Gt,ut.data)}else if(E.isDataArrayTexture)Nt?(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,v,xt,rt.width,rt.height,rt.depth),Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Gt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,mt,Gt,rt.data);else if(E.isData3DTexture)Nt?(Qt&&e.texStorage3D(s.TEXTURE_3D,v,xt,rt.width,rt.height,rt.depth),Pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Gt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,mt,Gt,rt.data);else if(E.isFramebufferTexture){if(Qt)if(Nt)e.texStorage2D(s.TEXTURE_2D,v,xt,rt.width,rt.height);else{let N=rt.width,F=rt.height;for(let J=0;J<v;J++)e.texImage2D(s.TEXTURE_2D,J,xt,N,F,0,mt,Gt,null),N>>=1,F>>=1}}else if(Rt.length>0){if(Nt&&Qt){const N=se(Rt[0]);e.texStorage2D(s.TEXTURE_2D,v,xt,N.width,N.height)}for(let N=0,F=Rt.length;N<F;N++)ut=Rt[N],Nt?Pt&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,mt,Gt,ut):e.texImage2D(s.TEXTURE_2D,N,xt,mt,Gt,ut);E.generateMipmaps=!1}else if(Nt){if(Qt){const N=se(rt);e.texStorage2D(s.TEXTURE_2D,v,xt,N.width,N.height)}Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Gt,rt)}else e.texImage2D(s.TEXTURE_2D,0,xt,mt,Gt,rt);p(E)&&m(j),gt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Xt(C,E,W){if(E.image.length!==6)return;const j=ht(C,E),Z=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);const tt=n.get(Z);if(Z.version!==tt.__version||j===!0){e.activeTexture(s.TEXTURE0+W);const gt=Kt.getPrimaries(Kt.workingColorSpace),ct=E.colorSpace===Mi?null:Kt.getPrimaries(E.colorSpace),ot=E.colorSpace===Mi||gt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Tt=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,mt=[];for(let F=0;F<6;F++)!Tt&&!rt?mt[F]=g(E.image[F],!0,i.maxCubemapSize):mt[F]=rt?E.image[F].image:E.image[F],mt[F]=Ht(E,mt[F]);const Gt=mt[0],xt=r.convert(E.format,E.colorSpace),ut=r.convert(E.type),Rt=y(E.internalFormat,xt,ut,E.colorSpace),Nt=E.isVideoTexture!==!0,Qt=tt.__version===void 0||j===!0,Pt=Z.dataReady;let v=x(E,Gt);$(s.TEXTURE_CUBE_MAP,E);let N;if(Tt){Nt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,v,Rt,Gt.width,Gt.height);for(let F=0;F<6;F++){N=mt[F].mipmaps;for(let J=0;J<N.length;J++){const it=N[J];E.format!==Mn?xt!==null?Nt?Pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J,0,0,it.width,it.height,xt,it.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J,Rt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J,0,0,it.width,it.height,xt,ut,it.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J,Rt,it.width,it.height,0,xt,ut,it.data)}}}else{if(N=E.mipmaps,Nt&&Qt){N.length>0&&v++;const F=se(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,v,Rt,F.width,F.height)}for(let F=0;F<6;F++)if(rt){Nt?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,mt[F].width,mt[F].height,xt,ut,mt[F].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Rt,mt[F].width,mt[F].height,0,xt,ut,mt[F].data);for(let J=0;J<N.length;J++){const Ct=N[J].image[F].image;Nt?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J+1,0,0,Ct.width,Ct.height,xt,ut,Ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J+1,Rt,Ct.width,Ct.height,0,xt,ut,Ct.data)}}else{Nt?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,xt,ut,mt[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Rt,xt,ut,mt[F]);for(let J=0;J<N.length;J++){const it=N[J];Nt?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J+1,0,0,xt,ut,it.image[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,J+1,Rt,xt,ut,it.image[F])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),tt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function q(C,E,W,j,Z,tt){const gt=r.convert(W.format,W.colorSpace),ct=r.convert(W.type),ot=y(W.internalFormat,gt,ct,W.colorSpace);if(!n.get(E).__hasExternalTextures){const rt=Math.max(1,E.width>>tt),mt=Math.max(1,E.height>>tt);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ot,rt,mt,E.depth,0,gt,ct,null):e.texImage2D(Z,tt,ot,rt,mt,0,gt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,n.get(W).__webglTexture,0,vt(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,n.get(W).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(C,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let j=s.DEPTH_COMPONENT24;if(W||kt(E)){const Z=E.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Pn?j=s.DEPTH_COMPONENT32F:Z.type===$r&&(j=s.DEPTH_COMPONENT24));const tt=vt(E);kt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,j,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,j,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const j=vt(E);W&&kt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,E.width,E.height):kt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const j=E.textures;for(let Z=0;Z<j.length;Z++){const tt=j[Z],gt=r.convert(tt.format,tt.colorSpace),ct=r.convert(tt.type),ot=y(tt.internalFormat,gt,ct,tt.colorSpace),Tt=vt(E);W&&kt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ot,E.width,E.height):kt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,ot,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ot,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const j=n.get(E.depthTexture).__webglTexture,Z=vt(E);if(E.depthTexture.format===Vr)kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(E.depthTexture.format===Gs)kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function st(C){const E=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]=s.createRenderbuffer(),et(E.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),et(E.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(C,E,W){const j=n.get(C);E!==void 0&&q(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&st(C)}function It(C){const E=C.texture,W=n.get(C),j=n.get(E);C.addEventListener("dispose",R);const Z=C.textures,tt=C.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,a.memory.textures++),tt){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let ot=0;ot<E.mipmaps.length;ot++)W.__webglFramebuffer[ct][ot]=s.createFramebuffer()}else W.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)W.__webglFramebuffer[ct]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(gt)for(let ct=0,ot=Z.length;ct<ot;ct++){const Tt=n.get(Z[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&kt(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const ot=Z[ct];W.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ct]);const Tt=r.convert(ot.format,ot.colorSpace),rt=r.convert(ot.type),mt=y(ot.internalFormat,Tt,rt,ot.colorSpace,C.isXRRenderTarget===!0),Gt=vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,mt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,W.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),et(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),$(s.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)q(W.__webglFramebuffer[ct][ot],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ot);else q(W.__webglFramebuffer[ct],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,ot=Z.length;ct<ot;ct++){const Tt=Z[ct],rt=n.get(Tt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),$(s.TEXTURE_2D,Tt),q(W.__webglFramebuffer,C,Tt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),p(Tt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),$(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)q(W.__webglFramebuffer[ot],C,E,s.COLOR_ATTACHMENT0,ct,ot);else q(W.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ct,0);p(E)&&m(ct),e.unbindTexture()}C.depthBuffer&&st(C)}function U(C){const E=C.textures;for(let W=0,j=E.length;W<j;W++){const Z=E[W];if(p(Z)){const tt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,gt=n.get(Z).__webglTexture;e.bindTexture(tt,gt),m(tt),e.unbindTexture()}}}const $t=[],_t=[];function Zt(C){if(C.samples>0){if(kt(C)===!1){const E=C.textures,W=C.width,j=C.height;let Z=s.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(C),ct=E.length>1;if(ct)for(let ot=0;ot<E.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ot]);const Tt=n.get(E[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,W,j,0,0,W,j,Z,s.NEAREST),c===!0&&($t.length=0,_t.length=0,$t.push(s.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&($t.push(tt),_t.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let ot=0;ot<E.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ot]);const Tt=n.get(E[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function vt(C){return Math.min(i.maxSamples,C.samples)}function kt(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Ht(C,E){const W=C.colorSpace,j=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==we&&W!==Mi&&(Kt.getTransfer(W)===re?(j!==Mn||Z!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=zt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=q,this.useMultisampledRTT=kt}function Ly(s,t){function e(n,i=Mi){let r;const a=Kt.getTransfer(i);if(n===Li)return s.UNSIGNED_BYTE;if(n===lf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$m)return s.BYTE;if(n===Zm)return s.SHORT;if(n===of)return s.UNSIGNED_SHORT;if(n===cf)return s.INT;if(n===$r)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Mo)return s.HALF_FLOAT;if(n===tg)return s.ALPHA;if(n===eg)return s.RGB;if(n===Mn)return s.RGBA;if(n===ng)return s.LUMINANCE;if(n===ig)return s.LUMINANCE_ALPHA;if(n===Vr)return s.DEPTH_COMPONENT;if(n===Gs)return s.DEPTH_STENCIL;if(n===uf)return s.RED;if(n===df)return s.RED_INTEGER;if(n===rg)return s.RG;if(n===ff)return s.RG_INTEGER;if(n===pf)return s.RGBA_INTEGER;if(n===Uo||n===Fo||n===Bo||n===zo)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===xh||n===vh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Mh||n===Sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yh||n===Mh)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Th||n===Eh||n===bh||n===Ah||n===wh||n===Rh||n===Ch||n===Ph||n===Lh||n===Dh||n===Ih||n===Nh||n===Oh||n===Uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Th)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Fh||n===Bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sg||n===zh||n===kh||n===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ea?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Dy extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $i extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:Ny,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ne(new us(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Fy extends cr{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const g=new Uy,p=e.getContextAttributes();let m=null,y=null;const x=[],T=[],R=new Mt;let w=null;const b=new ze;b.layers.enable(1),b.viewport=new ee;const P=new ze;P.layers.enable(2),P.viewport=new ee;const M=[b,P],S=new Dy;S.layers.enable(1),S.layers.enable(2);let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=x[q];return et===void 0&&(et=new dc,x[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=x[q];return et===void 0&&(et=new dc,x[q]=et),et.getGripSpace()},this.getHand=function(q){let et=x[q];return et===void 0&&(et=new dc,x[q]=et),et.getHandSpace()};function L(q){const et=T.indexOf(q.inputSource);if(et===-1)return;const dt=x[et];dt!==void 0&&(dt.update(q.inputSource,q.frame,l||a),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",G);for(let q=0;q<x.length;q++){const et=T[q];et!==null&&(T[q]=null,x[q].disconnect(et))}I=null,B=null,g.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",X),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ir(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,dt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Gs:Vr,dt=p.stencil?ea:$r);const zt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ir(d.textureWidth,d.textureHeight,{format:Mn,type:Li,depthTexture:new Lf(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(q){for(let et=0;et<q.removed.length;et++){const dt=q.removed[et],st=T.indexOf(dt);st>=0&&(T[st]=null,x[st].disconnect(dt))}for(let et=0;et<q.added.length;et++){const dt=q.added[et];let st=T.indexOf(dt);if(st===-1){for(let It=0;It<x.length;It++)if(It>=T.length){T.push(dt),st=It;break}else if(T[It]===null){T[It]=dt,st=It;break}if(st===-1)break}const zt=x[st];zt&&zt.connect(dt)}}const Y=new D,K=new D;function z(q,et,dt){Y.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(dt.matrixWorld);const st=Y.distanceTo(K),zt=et.projectionMatrix.elements,It=dt.projectionMatrix.elements,U=zt[14]/(zt[10]-1),$t=zt[14]/(zt[10]+1),_t=(zt[9]+1)/zt[5],Zt=(zt[9]-1)/zt[5],vt=(zt[8]-1)/zt[0],kt=(It[8]+1)/It[0],wt=U*vt,Ht=U*kt,se=st/(-vt+kt),C=se*-vt;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(C),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const E=U+se,W=$t+se,j=wt-C,Z=Ht+(st-C),tt=_t*$t/W*E,gt=Zt*$t/W*E;q.projectionMatrix.makePerspective(j,Z,tt,gt,E,W),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),S.near=P.near=b.near=q.near,S.far=P.far=b.far=q.far,(I!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far,b.near=I,b.far=B,P.near=I,P.far=B,b.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const et=q.parent,dt=S.cameras;Q(S,et);for(let st=0;st<dt.length;st++)Q(dt[st],et);dt.length===2?z(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),$(q,S,et)};function $(q,et,dt){dt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null};let ht=null;function St(q,et){if(h=et.getViewerPose(l||a),_=et,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let It=0;It<dt.length;It++){const U=dt[It];let $t=null;if(f!==null)$t=f.getViewport(U);else{const Zt=u.getViewSubImage(d,U);$t=Zt.viewport,It===0&&(t.setRenderTargetTextures(y,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(y))}let _t=M[It];_t===void 0&&(_t=new ze,_t.layers.enable(It),_t.viewport=new ee,M[It]=_t),_t.matrix.fromArray(U.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(U.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set($t.x,$t.y,$t.width,$t.height),It===0&&(S.matrix.copy(_t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(_t)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const It=u.getDepthInformation(dt[0]);It&&It.isValid&&It.texture&&g.init(t,It,i.renderState)}}for(let dt=0;dt<x.length;dt++){const st=T[dt],zt=x[dt];st!==null&&zt!==void 0&&zt.update(st,et,l||a)}g.render(t,S),ht&&ht(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Xt=new Pf;Xt.setAnimationLoop(St),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}}const Hi=new On,By=new Bt;function zy(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,T=y.envMapRotation;if(x&&(p.envMap.value=x,Hi.copy(T),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),p.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Hi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ky(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const T=x.program;n.uniformBlockBinding(y,T)}function l(y,x){let T=i[y.id];T===void 0&&(_(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const T=s.createBuffer(),R=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],T=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,b=T.length;w<b;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,S=P.length;M<S;M++){const I=P[M];if(f(I,w,M,R)===!0){const B=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let G=0;G<L.length;G++){const Y=L[G],K=g(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,B+X,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,T,R){const w=y.value,b=x+"_"+T;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const P=R[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(y){const x=y.uniforms;let T=0;const R=16;for(let b=0,P=x.length;b<P;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,I=M.length;S<I;S++){const B=M[S],L=Array.isArray(B.value)?B.value:[B.value];for(let X=0,G=L.length;X<G;X++){const Y=L[X],K=g(Y),z=T%R;z!==0&&R-z<K.boundary&&(T+=R-z),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=K.storage}}}const w=T%R;return w>0&&(T+=R-w),y.__size=T,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}class Vy{constructor(t={}){const{canvas:e=Ng(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let T=!1,R=0,w=0,b=null,P=-1,M=null;const S=new ee,I=new ee;let B=null;const L=new Et(0);let X=0,G=e.width,Y=e.height,K=1,z=null,Q=null;const $=new ee(0,0,G,Y),ht=new ee(0,0,G,Y);let St=!1;const Xt=new Pl;let q=!1,et=!1;const dt=new Bt,st=new D,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return b===null?K:1}let U=n;function $t(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",v,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",F,!1),U===null){const O="webgl2";if(U=$t(O,A),U===null)throw $t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,Zt,vt,kt,wt,Ht,se,C,E,W,j,Z,tt,gt,ct,ot,Tt,rt,mt,Gt,xt,ut,Rt,Nt;function Qt(){_t=new jx(U),_t.init(),ut=new Ly(U,_t),Zt=new Gx(U,_t,t,ut),vt=new Cy(U),kt=new Zx(U),wt=new my,Ht=new Py(U,_t,vt,wt,Zt,ut,kt),se=new Xx(x),C=new Kx(x),E=new s_(U),Rt=new Vx(U,E),W=new Jx(U,E,kt,Rt),j=new tv(U,W,E,kt),mt=new Qx(U,Zt,Ht),ot=new Wx(wt),Z=new py(x,se,C,_t,Zt,Rt,ot),tt=new zy(x,wt),gt=new _y,ct=new Ty(_t),rt=new kx(x,se,C,vt,j,d,c),Tt=new Ry(x,j,Zt),Nt=new ky(U,kt,Zt,vt),Gt=new Hx(U,_t,kt),xt=new $x(U,_t,kt),kt.programs=Z.programs,x.capabilities=Zt,x.extensions=_t,x.properties=wt,x.renderLists=gt,x.shadowMap=Tt,x.state=vt,x.info=kt}Qt();const Pt=new Fy(x,U);this.xr=Pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(G,Y,!1))},this.getSize=function(A){return A.set(G,Y)},this.setSize=function(A,O,H=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Y=O,e.width=Math.floor(A*K),e.height=Math.floor(O*K),H===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(G*K,Y*K).floor()},this.setDrawingBufferSize=function(A,O,H){G=A,Y=O,K=H,e.width=Math.floor(A*H),e.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,O,H,k){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,O,H,k),vt.viewport(S.copy($).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,O,H,k){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,O,H,k),vt.scissor(I.copy(ht).multiplyScalar(K).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){vt.setScissorTest(St=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(A=!0,O=!0,H=!0){let k=0;if(A){let V=!1;if(b!==null){const lt=b.texture.format;V=lt===pf||lt===ff||lt===df}if(V){const lt=b.texture.type,ft=lt===Li||lt===$r||lt===of||lt===ea||lt===lf||lt===hf,pt=rt.getClearColor(),yt=rt.getClearAlpha(),bt=pt.r,Lt=pt.g,Ut=pt.b;ft?(f[0]=bt,f[1]=Lt,f[2]=Ut,f[3]=yt,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=bt,_[1]=Lt,_[2]=Ut,_[3]=yt,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}O&&(k|=U.DEPTH_BUFFER_BIT),H&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",v,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",F,!1),gt.dispose(),ct.dispose(),wt.dispose(),se.dispose(),C.dispose(),j.dispose(),Rt.dispose(),Nt.dispose(),Z.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",qt),Pt.removeEventListener("sessionend",pe),ie.stop()};function v(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=kt.autoReset,O=Tt.enabled,H=Tt.autoUpdate,k=Tt.needsUpdate,V=Tt.type;Qt(),kt.autoReset=A,Tt.enabled=O,Tt.autoUpdate=H,Tt.needsUpdate=k,Tt.type=V}function F(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function J(A){const O=A.target;O.removeEventListener("dispose",J),it(O)}function it(A){Ct(A),wt.remove(A)}function Ct(A){const O=wt.get(A).programs;O!==void 0&&(O.forEach(function(H){Z.releaseProgram(H)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,k,V,lt){O===null&&(O=zt);const ft=V.isMesh&&V.matrixWorld.determinant()<0,pt=lm(A,O,H,k,V);vt.setMaterial(k,ft);let yt=H.index,bt=1;if(k.wireframe===!0){if(yt=W.getWireframeAttribute(H),yt===void 0)return;bt=2}const Lt=H.drawRange,Ut=H.attributes.position;let me=Lt.start*bt,Re=(Lt.start+Lt.count)*bt;lt!==null&&(me=Math.max(me,lt.start*bt),Re=Math.min(Re,(lt.start+lt.count)*bt)),yt!==null?(me=Math.max(me,0),Re=Math.min(Re,yt.count)):Ut!=null&&(me=Math.max(me,0),Re=Math.min(Re,Ut.count));const Je=Re-me;if(Je<0||Je===1/0)return;Rt.setup(V,k,pt,H,yt);let Hn,Yt=Gt;if(yt!==null&&(Hn=E.get(yt),Yt=xt,Yt.setIndex(Hn)),V.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*It()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(V.isLine){let At=k.linewidth;At===void 0&&(At=1),vt.setLineWidth(At*It()),V.isLineSegments?Yt.setMode(U.LINES):V.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else V.isPoints?Yt.setMode(U.POINTS):V.isSprite&&Yt.setMode(U.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?Yt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):Yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Yt.renderInstances(me,Je,V.count);else if(H.isInstancedBufferGeometry){const At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,gs=Math.min(H.instanceCount,At);Yt.renderInstances(me,Je,gs)}else Yt.render(me,Je)};function Ot(A,O,H){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,ra(A,O,H),A.side=ii,A.needsUpdate=!0,ra(A,O,H),A.side=wn):ra(A,O,H)}this.compile=function(A,O,H=null){H===null&&(H=A),p=ct.get(H),p.init(O),y.push(p),H.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==H&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const k=new Set;return A.traverse(function(V){const lt=V.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const pt=lt[ft];Ot(pt,H,V),k.add(pt)}else Ot(lt,H,V),k.add(lt)}),y.pop(),p=null,k},this.compileAsync=function(A,O,H=null){const k=this.compile(A,O,H);return new Promise(V=>{function lt(){if(k.forEach(function(ft){wt.get(ft).currentProgram.isReady()&&k.delete(ft)}),k.size===0){V(A);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ce=null;function ye(A){ce&&ce(A)}function qt(){ie.stop()}function pe(){ie.start()}const ie=new Pf;ie.setAnimationLoop(ye),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(A){ce=A,Pt.setAnimationLoop(A),A===null?ie.stop():ie.start()},Pt.addEventListener("sessionstart",qt),Pt.addEventListener("sessionend",pe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(O),O=Pt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,b),p=ct.get(A,y.length),p.init(O),y.push(p),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Xt.setFromProjectionMatrix(dt),et=this.localClippingEnabled,q=ot.init(this.clippingPlanes,et),g=gt.get(A,m.length),g.init(),m.push(g),oi(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(z,Q);const H=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1;H&&rt.addToRenderList(g,A),this.info.render.frame++,q===!0&&ot.beginShadows();const k=p.state.shadowsArray;Tt.render(k,A,O),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,lt=g.transmissive;if(p.setupLights(x._useLegacyLights),O.isArrayCamera){const ft=O.cameras;if(lt.length>0)for(let pt=0,yt=ft.length;pt<yt;pt++){const bt=ft[pt];ci(V,lt,A,bt)}H&&rt.render(A);for(let pt=0,yt=ft.length;pt<yt;pt++){const bt=ft[pt];an(g,A,bt,bt.viewport)}}else lt.length>0&&ci(V,lt,A,O),H&&rt.render(A),an(g,A,O);b!==null&&(Ht.updateMultisampleRenderTarget(b),Ht.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,O),Rt.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function oi(A,O,H,k){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xt.intersectsSprite(A)){k&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const ft=j.update(A),pt=A.material;pt.visible&&g.push(A,ft,pt,H,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xt.intersectsObject(A))){const ft=j.update(A),pt=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),st.copy(ft.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(pt)){const yt=ft.groups;for(let bt=0,Lt=yt.length;bt<Lt;bt++){const Ut=yt[bt],me=pt[Ut.materialIndex];me&&me.visible&&g.push(A,ft,me,H,st.z,Ut)}}else pt.visible&&g.push(A,ft,pt,H,st.z,null)}}const lt=A.children;for(let ft=0,pt=lt.length;ft<pt;ft++)oi(lt[ft],O,H,k)}function an(A,O,H,k){const V=A.opaque,lt=A.transmissive,ft=A.transparent;p.setupLightsView(H),q===!0&&ot.setGlobalState(x.clippingPlanes,H),k&&vt.viewport(S.copy(k)),V.length>0&&Vn(V,O,H),lt.length>0&&Vn(lt,O,H),ft.length>0&&Vn(ft,O,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ci(A,O,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ir(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Mo:Li,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const lt=p.state.transmissionRenderTarget[k.id],ft=k.viewport||S;lt.setSize(ft.z,ft.w);const pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(L),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const yt=x.toneMapping;x.toneMapping=Ri;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&ot.setGlobalState(x.clippingPlanes,k),Vn(A,H,k),Ht.updateMultisampleRenderTarget(lt),Ht.updateRenderTargetMipmap(lt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Ut=0,me=O.length;Ut<me;Ut++){const Re=O[Ut],Je=Re.object,Hn=Re.geometry,Yt=Re.material,At=Re.group;if(Yt.side===wn&&Je.layers.test(k.layers)){const gs=Yt.side;Yt.side=Ge,Yt.needsUpdate=!0,ms(Je,H,k,Hn,Yt,At),Yt.side=gs,Yt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ht.updateMultisampleRenderTarget(lt),Ht.updateRenderTargetMipmap(lt))}x.setRenderTarget(pt),x.setClearColor(L,X),bt!==void 0&&(k.viewport=bt),x.toneMapping=yt}function Vn(A,O,H){const k=O.isScene===!0?O.overrideMaterial:null;for(let V=0,lt=A.length;V<lt;V++){const ft=A[V],pt=ft.object,yt=ft.geometry,bt=k===null?ft.material:k,Lt=ft.group;pt.layers.test(H.layers)&&ms(pt,O,H,yt,bt,Lt)}}function ms(A,O,H,k,V,lt){A.onBeforeRender(x,O,H,k,V,lt),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,O,H,k,A,lt),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,x.renderBufferDirect(H,O,k,V,A,lt),V.side=ii,V.needsUpdate=!0,x.renderBufferDirect(H,O,k,V,A,lt),V.side=wn):x.renderBufferDirect(H,O,k,V,A,lt),A.onAfterRender(x,O,H,k,V,lt)}function ra(A,O,H){O.isScene!==!0&&(O=zt);const k=wt.get(A),V=p.state.lights,lt=p.state.shadowsArray,ft=V.state.version,pt=Z.getParameters(A,V.state,lt,O,H),yt=Z.getProgramCacheKey(pt);let bt=k.programs;k.environment=A.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(A.isMeshStandardMaterial?C:se).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,bt===void 0&&(A.addEventListener("dispose",J),bt=new Map,k.programs=bt);let Lt=bt.get(yt);if(Lt!==void 0){if(k.currentProgram===Lt&&k.lightsStateVersion===ft)return ch(A,pt),Lt}else pt.uniforms=Z.getUniforms(A),A.onBuild(H,pt,x),A.onBeforeCompile(pt,x),Lt=Z.acquireProgram(pt,yt),bt.set(yt,Lt),k.uniforms=pt.uniforms;const Ut=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=ot.uniform),ch(A,pt),k.needsLights=um(A),k.lightsStateVersion=ft,k.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=Lt,k.uniformsList=null,Lt}function oh(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Qa.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ch(A,O){const H=wt.get(A);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function lm(A,O,H,k,V){O.isScene!==!0&&(O=zt),Ht.resetTextureUnits();const lt=O.fog,ft=k.isMeshStandardMaterial?O.environment:null,pt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:we,yt=(k.isMeshStandardMaterial?C:se).get(k.envMap||ft),bt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ut=!!H.morphAttributes.position,me=!!H.morphAttributes.normal,Re=!!H.morphAttributes.color;let Je=Ri;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Je=x.toneMapping);const Hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=Hn!==void 0?Hn.length:0,At=wt.get(k),gs=p.state.lights;if(q===!0&&(et===!0||A!==M)){const on=A===M&&k.id===P;ot.setState(k,A,on)}let ae=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==gs.state.version||At.outputColorSpace!==pt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==yt||k.fog===!0&&At.fog!==lt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ot.numPlanes||At.numIntersection!==ot.numIntersection)||At.vertexAlphas!==bt||At.vertexTangents!==Lt||At.morphTargets!==Ut||At.morphNormals!==me||At.morphColors!==Re||At.toneMapping!==Je||At.morphTargetsCount!==Yt)&&(ae=!0):(ae=!0,At.__version=k.version);let Ui=At.currentProgram;ae===!0&&(Ui=ra(k,O,V));let lh=!1,_s=!1,Io=!1;const Ce=Ui.getUniforms(),li=At.uniforms;if(vt.useProgram(Ui.program)&&(lh=!0,_s=!0,Io=!0),k.id!==P&&(P=k.id,_s=!0),lh||M!==A){Ce.setValue(U,"projectionMatrix",A.projectionMatrix),Ce.setValue(U,"viewMatrix",A.matrixWorldInverse);const on=Ce.map.cameraPosition;on!==void 0&&on.setValue(U,st.setFromMatrixPosition(A.matrixWorld)),Zt.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,_s=!0,Io=!0)}if(V.isSkinnedMesh){Ce.setOptional(U,V,"bindMatrix"),Ce.setOptional(U,V,"bindMatrixInverse");const on=V.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ce.setValue(U,"boneTexture",on.boneTexture,Ht))}V.isBatchedMesh&&(Ce.setOptional(U,V,"batchingTexture"),Ce.setValue(U,"batchingTexture",V._matricesTexture,Ht));const No=H.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0)&&mt.update(V,H,Ui),(_s||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,Ce.setValue(U,"receiveShadow",V.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(li.envMap.value=yt,li.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&O.environment!==null&&(li.envMapIntensity.value=O.environmentIntensity),_s&&(Ce.setValue(U,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&hm(li,Io),lt&&k.fog===!0&&tt.refreshFogUniforms(li,lt),tt.refreshMaterialUniforms(li,k,K,Y,p.state.transmissionRenderTarget[A.id]),Qa.upload(U,oh(At),li,Ht)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qa.upload(U,oh(At),li,Ht),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ce.setValue(U,"center",V.center),Ce.setValue(U,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(U,"normalMatrix",V.normalMatrix),Ce.setValue(U,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const on=k.uniformsGroups;for(let Oo=0,dm=on.length;Oo<dm;Oo++){const hh=on[Oo];Nt.update(hh,Ui),Nt.bind(hh,Ui)}}return Ui}function hm(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function um(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,O,H){wt.get(A.texture).__webglTexture=O,wt.get(A.depthTexture).__webglTexture=H;const k=wt.get(A);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const H=wt.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,H=0){b=A,R=O,w=H;let k=!0,V=null,lt=!1,ft=!1;if(A){const yt=wt.get(A);yt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):yt.__webglFramebuffer===void 0?Ht.setupRenderTarget(A):yt.__hasExternalTextures&&Ht.rebindTextures(A,wt.get(A.texture).__webglTexture,wt.get(A.depthTexture).__webglTexture);const bt=A.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ft=!0);const Lt=wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?V=Lt[O][H]:V=Lt[O],lt=!0):A.samples>0&&Ht.useMultisampledRTT(A)===!1?V=wt.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[H]:V=Lt,S.copy(A.viewport),I.copy(A.scissor),B=A.scissorTest}else S.copy($).multiplyScalar(K).floor(),I.copy(ht).multiplyScalar(K).floor(),B=St;if(vt.bindFramebuffer(U.FRAMEBUFFER,V)&&k&&vt.drawBuffers(A,V),vt.viewport(S),vt.scissor(I),vt.setScissorTest(B),lt){const yt=wt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,H)}else if(ft){const yt=wt.get(A.texture),bt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,bt)}P=-1},this.readRenderTargetPixels=function(A,O,H,k,V,lt,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(pt=pt[ft]),pt){vt.bindFramebuffer(U.FRAMEBUFFER,pt);try{const yt=A.texture,bt=yt.format,Lt=yt.type;if(!Zt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-k&&H>=0&&H<=A.height-V&&U.readPixels(O,H,k,V,ut.convert(bt),ut.convert(Lt),lt)}finally{const yt=b!==null?wt.get(b).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(A,O,H=0){const k=Math.pow(2,-H),V=Math.floor(O.image.width*k),lt=Math.floor(O.image.height*k);Ht.setTexture2D(O,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,A.x,A.y,V,lt),vt.unbindTexture()},this.copyTextureToTexture=function(A,O,H,k=0){const V=O.image.width,lt=O.image.height,ft=ut.convert(H.format),pt=ut.convert(H.type);Ht.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,A.x,A.y,V,lt,ft,pt,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,ft,O.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,k,A.x,A.y,ft,pt,O.image),k===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(A,O,H,k,V=0){const lt=A.max.x-A.min.x,ft=A.max.y-A.min.y,pt=A.max.z-A.min.z,yt=ut.convert(k.format),bt=ut.convert(k.type);let Lt;if(k.isData3DTexture)Ht.setTexture3D(k,0),Lt=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ht.setTexture2DArray(k,0),Lt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Ut=U.getParameter(U.UNPACK_ROW_LENGTH),me=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Re=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),Hn=U.getParameter(U.UNPACK_SKIP_IMAGES),Yt=H.isCompressedTexture?H.mipmaps[V]:H.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Lt,V,O.x,O.y,O.z,lt,ft,pt,yt,bt,Yt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,V,O.x,O.y,O.z,lt,ft,pt,yt,Yt.data):U.texSubImage3D(Lt,V,O.x,O.y,O.z,lt,ft,pt,yt,bt,Yt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hn),V===0&&k.generateMipmaps&&U.generateMipmap(Lt),vt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ht.setTextureCube(A,0):A.isData3DTexture?Ht.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ht.setTexture2DArray(A,0):Ht.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,vt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Al?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===So?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Hy extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new D;class Il{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Il(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ou=new D,Uu=new ee,Fu=new ee,Wy=new D,Bu=new Bt,Aa=new D,fc=new Fn,zu=new Bt,pc=new ls;class Xy extends Ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mh,this.bindMatrix=new Bt,this.bindMatrixInverse=new Bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(i),t.ray.intersectsSphere(fc)!==!1&&(zu.copy(i).invert(),pc.copy(t.ray).applyMatrix4(zu),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,pc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===mh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Uu.fromBufferAttribute(i.attributes.skinIndex,t),Fu.fromBufferAttribute(i.attributes.skinWeight,t),Ou.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Fu.getComponent(r);if(a!==0){const o=Uu.getComponent(r);Bu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wy.copy(Ou).applyMatrix4(Bu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ff extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bf extends Te{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ve,h=Ve,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=new Bt,qy=new Bt;class Nl{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:qy;ku.multiplyMatrices(o,e[r]),ku.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Bf(e,t,t,Mn,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ff),this.bones.push(a),this.boneInverses.push(new Bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class nl extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dr=new Bt,Vu=new Bt,wa=[],Hu=new ai,Yy=new Bt,Ss=new Ne,Ts=new Fn;class Ky extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),Hu.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Hu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),Ts.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Dr),Vu.multiplyMatrices(n,Dr),Ss.matrixWorld=Vu,Ss.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){const c=wa[a];c.instanceId=r,c.object=this,e.push(c)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bf(new Float32Array(i*this.count),i,this.count,uf,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zf extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new D,lo=new D,Gu=new Bt,Es=new ls,Ra=new Fn,mc=new D,Wu=new D;class Ol extends ue{constructor(t=new Bn,e=new zf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)co.fromBufferAttribute(e,i-1),lo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=co.distanceTo(lo);t.setAttribute("lineDistance",new ei(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Gu.copy(i).invert(),Es.copy(t.ray).applyMatrix4(Gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,p=_-1;g<p;g+=l){const m=h.getX(g),y=h.getX(g+1),x=Ca(this,t,Es,c,m,y);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(f),m=Ca(this,t,Es,c,g,p);m&&e.push(m)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,p=_-1;g<p;g+=l){const m=Ca(this,t,Es,c,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Ca(this,t,Es,c,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ca(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(co.fromBufferAttribute(a,i),lo.fromBufferAttribute(a,r),e.distanceSqToSegment(co,lo,mc,Wu)>n)return;mc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(mc);if(!(c<t.near||c>t.far))return{distance:c,point:Wu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Xu=new D,qu=new D;class jy extends Ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Xu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xu.distanceTo(qu);t.setAttribute("lineDistance",new ei(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jy extends Ol{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class kf extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yu=new Bt,il=new ls,Pa=new Fn,La=new D;class $y extends ue{constructor(t=new Bn,e=new kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;Yu.copy(i).invert(),il.copy(t.ray).applyMatrix4(Yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const p=l.getX(_);La.fromBufferAttribute(u,p),Ku(La,p,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)La.fromBufferAttribute(u,_),Ku(La,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ku(s,t,e,n,i,r,a){const o=il.distanceSqToPoint(s);if(o<e){const c=new D;il.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ni extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends ni{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Da(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Qy(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ju(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Vf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class na{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tM extends na{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gh:r=t,o=2*e-n;break;case Wh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gh:a=t,c=2*n-e;break;case Wh:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-f)*p+(1.5+f)*g+.5*_,T=f*p-f*g;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+y*a[l+R]+x*a[c+R]+T*a[u+R];return r}}class eM extends na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class nM extends na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class kn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Da(e,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Da(t.times,Array),values:Da(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Zr:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Zy(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vo,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Zr;class fs extends kn{}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ws;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hf extends kn{}Hf.prototype.ValueTypeName="color";class es extends kn{}es.prototype.ValueTypeName="number";class iM extends na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Nn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class rr extends kn{InterpolantFactoryMethodLinear(t){return new iM(this.times,this.values,this.getValueSize(),t)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.DefaultInterpolation=Zr;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends kn{}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ws;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends kn{}ns.prototype.ValueTypeName="vector";class rM{constructor(t="",e=-1,n=[],i=ag){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(aM(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Qy(c);c=ju(c,1,h),l=ju(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new es(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const p=[],m=[];Vf(f,p,m,_),p.length!==0&&g.push(new u(d,p,m))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let y=0;y!==d[_].morphTargets.length;++y){const x=d[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new es(".morphTargetInfluence["+g+"]",p,m))}c=f.length*a}else{const f=".bones["+e[u].name+"]";n(ns,f+".position",d,"pos",i),n(rr,f+".quaternion",d,"rot",i),n(ns,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Hf;case"quaternion":return rr;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function aM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sM(s.type);if(s.times===void 0){const e=[],n=[];Vf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Ti={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class oM{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const cM=new oM;class lr{constructor(t){this.manager=t!==void 0?t:cM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class lM extends Error{constructor(t,e){super(t),this.response=e}}class Gf extends lr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ti.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Kn[t]!==void 0){Kn[t].push({onLoad:e,onProgress:n,onError:i});return}Kn[t]=[],Kn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:T})=>{if(x)m.close();else{g+=T.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,b=h.length;w<b;w++){const P=h[w];P.onProgress&&P.onProgress(R)}m.enqueue(T),y()}})}}});return new Response(p)}else throw new lM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Ti.add(t,l);const h=Kn[t];delete Kn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Kn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Kn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Wf extends lr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ti.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Xs("img");function c(){h(),Ti.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class hM extends lr{constructor(t){super(t)}load(t,e,n,i){const r=new Cl;r.colorSpace=De;const a=new Wf(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class Xf extends lr{constructor(t){super(t)}load(t,e,n,i){const r=new Te,a=new Wf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Eo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const gc=new Bt,Ju=new D,$u=new D;class Ul{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),$u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($u),e.updateMatrixWorld(),gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uM extends Ul{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Qr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class dM extends Eo{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Zu=new Bt,bs=new D,_c=new D;class fM extends Ul{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),_c.copy(n.position),_c.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_c),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}class pM extends Eo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mM extends Ul{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new mM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gM extends Eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zs{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class _M extends lr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ti.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ti.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ti.add(t,c),r.manager.itemStart(t)}}class xM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qu(){return(typeof performance>"u"?Date:performance).now()}const Fl="\\[\\]\\.:\\/",vM=new RegExp("["+Fl+"]","g"),Bl="[^"+Fl+"]",yM="[^"+Fl.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",Bl),SM=/(WCOD+)?/.source.replace("WCOD",yM),TM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),bM=new RegExp("^"+MM+SM+TM+EM+"$"),AM=["material","materials","bones","map"];class wM{constructor(t,e,n){const i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vM,"")}static parseTrackName(t){const e=bM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);AM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=wM;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const td=new Bt;class Yf{constructor(t,e,n=0,i=1/0){this.ray=new ls(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(t,e=!0,n=[]){return rl(t,this,n,e),n.sort(ed),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)rl(t[i],this,n,e);return n.sort(ed),n}}function ed(s,t){return s.distance-t.distance}function rl(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)rl(i[r],t,e,!0)}}class nd{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const id={type:"change"},xc={type:"start"},rd={type:"end"},Ia=new ls,sd=new vi,RM=Math.cos(70*xf.DEG2RAD);class CM extends cr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",Tt),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(id),n.update(),r=i.NONE},this.update=function(){const v=new D,N=new Nn().setFromUnitVectors(t.up,new D(0,1,0)),F=N.clone().invert(),J=new D,it=new Nn,Ct=new D,Ot=2*Math.PI;return function(ye=null){const qt=n.object.position;v.copy(qt).sub(n.target),v.applyQuaternion(N),o.setFromVector3(v),n.autoRotate&&r===i.NONE&&B(S(ye)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let pe=n.minAzimuthAngle,ie=n.maxAzimuthAngle;isFinite(pe)&&isFinite(ie)&&(pe<-Math.PI?pe+=Ot:pe>Math.PI&&(pe-=Ot),ie<-Math.PI?ie+=Ot:ie>Math.PI&&(ie-=Ot),pe<=ie?o.theta=Math.max(pe,Math.min(ie,o.theta)):o.theta=o.theta>(pe+ie)/2?Math.max(pe,o.theta):Math.min(ie,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let oi=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=$(o.radius);else{const an=o.radius;o.radius=$(o.radius*l),oi=an!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(F),qt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&w){let an=null;if(n.object.isPerspectiveCamera){const ci=v.length();an=$(ci*l);const Vn=ci-an;n.object.position.addScaledVector(T,Vn),n.object.updateMatrixWorld(),oi=!!Vn}else if(n.object.isOrthographicCamera){const ci=new D(R.x,R.y,0);ci.unproject(n.object);const Vn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),oi=Vn!==n.object.zoom;const ms=new D(R.x,R.y,0);ms.unproject(n.object),n.object.position.sub(ms).add(ci),n.object.updateMatrixWorld(),an=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;an!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(an).add(n.object.position):(Ia.origin.copy(n.object.position),Ia.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ia.direction))<RM?t.lookAt(n.target):(sd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ia.intersectPlane(sd,n.target))))}else if(n.object.isOrthographicCamera){const an=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),an!==n.object.zoom&&(n.object.updateProjectionMatrix(),oi=!0)}return l=1,w=!1,oi||J.distanceToSquared(n.object.position)>a||8*(1-it.dot(n.object.quaternion))>a||Ct.distanceToSquared(n.target)>a?(n.dispatchEvent(id),J.copy(n.object.position),it.copy(n.object.quaternion),Ct.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Gt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",W),n.domElement.getRootNode().removeEventListener("keydown",ct,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new nd,c=new nd;let l=1;const h=new D,u=new Mt,d=new Mt,f=new Mt,_=new Mt,g=new Mt,p=new Mt,m=new Mt,y=new Mt,x=new Mt,T=new D,R=new Mt;let w=!1;const b=[],P={};let M=!1;function S(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function I(v){const N=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*N)}function B(v){c.theta-=v}function L(v){c.phi-=v}const X=function(){const v=new D;return function(F,J){v.setFromMatrixColumn(J,0),v.multiplyScalar(-F),h.add(v)}}(),G=function(){const v=new D;return function(F,J){n.screenSpacePanning===!0?v.setFromMatrixColumn(J,1):(v.setFromMatrixColumn(J,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(F),h.add(v)}}(),Y=function(){const v=new D;return function(F,J){const it=n.domElement;if(n.object.isPerspectiveCamera){const Ct=n.object.position;v.copy(Ct).sub(n.target);let Ot=v.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),X(2*F*Ot/it.clientHeight,n.object.matrix),G(2*J*Ot/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(F*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),G(J*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(v,N){if(!n.zoomToCursor)return;w=!0;const F=n.domElement.getBoundingClientRect(),J=v-F.left,it=N-F.top,Ct=F.width,Ot=F.height;R.x=J/Ct*2-1,R.y=-(it/Ot)*2+1,T.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function ht(v){u.set(v.clientX,v.clientY)}function St(v){Q(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function Xt(v){_.set(v.clientX,v.clientY)}function q(v){d.set(v.clientX,v.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const N=n.domElement;B(2*Math.PI*f.x/N.clientHeight),L(2*Math.PI*f.y/N.clientHeight),u.copy(d),n.update()}function et(v){y.set(v.clientX,v.clientY),x.subVectors(y,m),x.y>0?K(I(x.y)):x.y<0&&z(I(x.y)),m.copy(y),n.update()}function dt(v){g.set(v.clientX,v.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g),n.update()}function st(v){Q(v.clientX,v.clientY),v.deltaY<0?z(I(v.deltaY)):v.deltaY>0&&K(I(v.deltaY)),n.update()}function zt(v){let N=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),N=!0;break}N&&(v.preventDefault(),n.update())}function It(v){if(b.length===1)u.set(v.pageX,v.pageY);else{const N=Qt(v),F=.5*(v.pageX+N.x),J=.5*(v.pageY+N.y);u.set(F,J)}}function U(v){if(b.length===1)_.set(v.pageX,v.pageY);else{const N=Qt(v),F=.5*(v.pageX+N.x),J=.5*(v.pageY+N.y);_.set(F,J)}}function $t(v){const N=Qt(v),F=v.pageX-N.x,J=v.pageY-N.y,it=Math.sqrt(F*F+J*J);m.set(0,it)}function _t(v){n.enableZoom&&$t(v),n.enablePan&&U(v)}function Zt(v){n.enableZoom&&$t(v),n.enableRotate&&It(v)}function vt(v){if(b.length==1)d.set(v.pageX,v.pageY);else{const F=Qt(v),J=.5*(v.pageX+F.x),it=.5*(v.pageY+F.y);d.set(J,it)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const N=n.domElement;B(2*Math.PI*f.x/N.clientHeight),L(2*Math.PI*f.y/N.clientHeight),u.copy(d)}function kt(v){if(b.length===1)g.set(v.pageX,v.pageY);else{const N=Qt(v),F=.5*(v.pageX+N.x),J=.5*(v.pageY+N.y);g.set(F,J)}p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g)}function wt(v){const N=Qt(v),F=v.pageX-N.x,J=v.pageY-N.y,it=Math.sqrt(F*F+J*J);y.set(0,it),x.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),K(x.y),m.copy(y);const Ct=(v.pageX+N.x)*.5,Ot=(v.pageY+N.y)*.5;Q(Ct,Ot)}function Ht(v){n.enableZoom&&wt(v),n.enablePan&&kt(v)}function se(v){n.enableZoom&&wt(v),n.enableRotate&&vt(v)}function C(v){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",W)),!Rt(v)&&(xt(v),v.pointerType==="touch"?rt(v):j(v)))}function E(v){n.enabled!==!1&&(v.pointerType==="touch"?mt(v):Z(v))}function W(v){switch(ut(v),b.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",W),n.dispatchEvent(rd),r=i.NONE;break;case 1:const N=b[0],F=P[N];rt({pointerId:N,pageX:F.x,pageY:F.y});break}}function j(v){let N;switch(v.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case fr.DOLLY:if(n.enableZoom===!1)return;St(v),r=i.DOLLY;break;case fr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Xt(v),r=i.PAN}else{if(n.enableRotate===!1)return;ht(v),r=i.ROTATE}break;case fr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;ht(v),r=i.ROTATE}else{if(n.enablePan===!1)return;Xt(v),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xc)}function Z(v){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;q(v);break;case i.DOLLY:if(n.enableZoom===!1)return;et(v);break;case i.PAN:if(n.enablePan===!1)return;dt(v);break}}function tt(v){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(v.preventDefault(),n.dispatchEvent(xc),st(gt(v)),n.dispatchEvent(rd))}function gt(v){const N=v.deltaMode,F={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(N){case 1:F.deltaY*=16;break;case 2:F.deltaY*=100;break}return v.ctrlKey&&!M&&(F.deltaY*=10),F}function ct(v){v.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(v){v.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function Tt(v){n.enabled===!1||n.enablePan===!1||zt(v)}function rt(v){switch(Nt(v),b.length){case 1:switch(n.touches.ONE){case pr.ROTATE:if(n.enableRotate===!1)return;It(v),r=i.TOUCH_ROTATE;break;case pr.PAN:if(n.enablePan===!1)return;U(v),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case pr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(v),r=i.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(v),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xc)}function mt(v){switch(Nt(v),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;kt(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ht(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(v),n.update();break;default:r=i.NONE}}function Gt(v){n.enabled!==!1&&v.preventDefault()}function xt(v){b.push(v.pointerId)}function ut(v){delete P[v.pointerId];for(let N=0;N<b.length;N++)if(b[N]==v.pointerId){b.splice(N,1);return}}function Rt(v){for(let N=0;N<b.length;N++)if(b[N]==v.pointerId)return!0;return!1}function Nt(v){let N=P[v.pointerId];N===void 0&&(N=new Mt,P[v.pointerId]=N),N.set(v.pageX,v.pageY)}function Qt(v){const N=v.pointerId===b[0]?b[1]:b[0];return P[N]}n.domElement.addEventListener("contextmenu",Gt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}class ad{constructor(t,e,n,i,r){this.sender=t,this.receiver=e,this.message=n,this.delay=i,this.data=r}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(t){return this.sender=t.sender,this.receiver=t.receiver,this.message=t.message,this.delay=t.delay,this.data=t.data,this}resolveReferences(t){return this.sender=t.get(this.sender),this.receiver=t.get(this.receiver),this}}class Tn{static setLevel(t){Na=t}static log(...t){Na<=Tn.LEVEL.LOG&&console.log(...t)}static warn(...t){Na<=Tn.LEVEL.WARN&&console.warn(...t)}static error(...t){Na<=Tn.LEVEL.ERROR&&console.error(...t)}}Tn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let Na=Tn.LEVEL.WARN;class PM{constructor(){this.delayedTelegrams=new Array}deliver(t){const e=t.receiver;return e.handleMessage(t)===!1&&Tn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",e),this}dispatch(t,e,n,i,r){const a=new ad(t,e,n,i,r);return i<=0?this.deliver(a):this.delayedTelegrams.push(a),this}dispatchDelayedMessages(t){let e=this.delayedTelegrams.length;for(;e--;){const n=this.delayedTelegrams[e];n.delay-=t,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const t={type:this.constructor.name,delayedTelegrams:new Array};for(let e=0,n=this.delayedTelegrams.length;e<n;e++){const i=this.delayedTelegrams[e];t.delayedTelegrams.push(i.toJSON())}return t}fromJSON(t){this.clear();const e=t.delayedTelegrams;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=new ad().fromJSON(r);this.delayedTelegrams.push(a)}return this}resolveReferences(t){const e=this.delayedTelegrams;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}const be=new Array;for(let s=0;s<256;s++)be[s]=(s<16?"0":"")+s.toString(16);class qs{static area(t,e,n){return(n.x-t.x)*(e.z-t.z)-(e.x-t.x)*(n.z-t.z)}static argmax(t){const e=Math.max(...t),n=[];for(let i=0,r=t.length;i<r;i++)t[i]===e&&n.push(i);return n}static choice(t,e=null){const n=Math.random();if(e===null)return t[Math.floor(Math.random()*t.length)];{let i=0;const r=t.map((a,o)=>(i+=e[o],i)).findIndex(a=>a>=n);return t[r]}}static clamp(t,e,n){return Math.max(e,Math.min(n,t))}static generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[t&255]+be[t>>8&255]+be[t>>16&255]+be[t>>24&255]+"-"+be[e&255]+be[e>>8&255]+"-"+be[e>>16&15|64]+be[e>>24&255]+"-"+be[n&63|128]+be[n>>8&255]+"-"+be[n>>16&255]+be[n>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toUpperCase()}static randFloat(t,e){return t+Math.random()*(e-t)}static randInt(t,e){return t+Math.floor(Math.random()*(e-t+1))}}class nt{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new this.constructor().copy(this)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.x/=t,this.y/=t,this.z/=t,this}divideVectors(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this}reflect(t){return this.sub(LM.copy(t).multiplyScalar(2*this.dot(t)))}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){const e=this.x,n=this.y,i=this.z;return this.x=n*t.z-i*t.y,this.y=i*t.x-e*t.z,this.z=e*t.y-n*t.x,this}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}angleTo(t){const e=Math.sqrt(this.squaredLength()*t.squaredLength());if(e===0)return 0;const n=this.dot(t)/e;return Math.acos(qs.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(t){return Math.sqrt(this.squaredDistanceTo(t))}squaredDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.abs(e)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyRotation(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*i-o*n,h=c*n+o*e-r*i,u=c*i+r*n-a*e,d=-r*e-a*n-o*i;return this.x=l*c+d*-r+h*-o-u*-a,this.y=h*c+d*-a+u*-r-l*-o,this.z=u*c+d*-o+l*-a-h*-r,this}extractPositionFromMatrix(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}fromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}fromMatrix4Column(t,e){return this.fromArray(t.elements,e*4)}fromSpherical(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}}const LM=new nt,od=new nt(0,1,0),cd=new nt,As=new nt,ld=new nt,hd=new nt,vc=[2,2,1],yc=[1,0,0];class zl{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[3]=e,h[6]=n,h[1]=i,h[4]=r,h[7]=a,h[2]=o,h[5]=c,h[8]=l,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],T=i[7],R=i[2],w=i[5],b=i[8];return r[0]=a*g+o*y+c*R,r[3]=a*p+o*x+c*w,r[6]=a*m+o*T+c*b,r[1]=l*g+h*y+u*R,r[4]=l*p+h*x+u*w,r[7]=l*m+h*T+u*b,r[2]=d*g+f*y+_*R,r[5]=d*p+f*x+_*w,r[8]=d*m+f*T+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}extractBasis(t,e,n){return t.fromMatrix3Column(this,0),e.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,t.y,e.y,n.y,t.z,e.z,n.z),this}lookAt(t,e,n){return cd.crossVectors(n,t).normalize(),As.crossVectors(od,e).normalize(),As.squaredLength()===0&&(hd.copy(e).addScalar(Number.EPSILON),As.crossVectors(od,hd).normalize()),ld.crossVectors(e,As).normalize(),Ir.makeBasis(As,ld,e),Oa.makeBasis(cd,n,t),this.multiplyMatrices(Ir,Oa.transpose()),this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getElementIndex(t,e){return t*3+e}frobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<9;n++)e+=t[n]*t[n];return Math.sqrt(e)}offDiagonalFrobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<3;n++){const i=t[this.getElementIndex(vc[n],yc[n])];e+=2*i*i}return Math.sqrt(e)}eigenDecomposition(t){let e=0,n=0;const i=10;t.unitary.identity(),t.diagonal.copy(this);const r=t.unitary,a=t.diagonal,o=Number.EPSILON*a.frobeniusNorm();for(;n<i&&a.offDiagonalFrobeniusNorm()>o;)a.shurDecomposition(Ir),Oa.copy(Ir).transpose(),a.multiply(Ir),a.premultiply(Oa),r.multiply(Ir),++e>2&&(n++,e=0);return t}shurDecomposition(t){let e=0,n=1;const i=this.elements;for(let l=0;l<3;l++){const h=Math.abs(i[this.getElementIndex(vc[l],yc[l])]);h>e&&(e=h,n=l)}let r=1,a=0;const o=yc[n],c=vc[n];if(Math.abs(i[this.getElementIndex(c,o)])>Number.EPSILON){const l=i[this.getElementIndex(c,c)],h=i[this.getElementIndex(o,o)],u=i[this.getElementIndex(c,o)],d=(l-h)/2/u;let f;d<0?f=-1/(-d+Math.sqrt(1+d*d)):f=1/(d+Math.sqrt(1+d*d)),r=1/Math.sqrt(1+f*f),a=f*r}return t.identity(),t.elements[this.getElementIndex(o,o)]=r,t.elements[this.getElementIndex(c,c)]=r,t.elements[this.getElementIndex(c,o)]=a,t.elements[this.getElementIndex(o,c)]=-a,t}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,u=n*c,d=n*l,f=i*c,_=i*l,g=r*l,p=a*o,m=a*c,y=a*l;return e[0]=1-(f+g),e[3]=u-y,e[6]=d+m,e[1]=u+y,e[4]=1-(h+g),e[7]=_-p,e[2]=d-m,e[5]=_+p,e[8]=1-(h+f),this}fromMatrix4(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}}const Ir=new zl,Oa=new zl,Ua=new zl,Mc=new nt;class ho{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let t=this.length();return t===0?(this.x=0,this.y=0,this.z=0,this.w=1):(t=1/t,this.x=this.x*t,this.y=this.y*t,this.z=this.z*t,this.w=this.w*t),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t.x,i=t.y,r=t.z,a=t.w,o=e.x,c=e.y,l=e.z,h=e.w;return this.x=n*h+a*o+i*l-r*c,this.y=i*h+a*c+r*o-n*l,this.z=r*h+a*l+n*c-i*o,this.w=a*h-n*o-i*c-r*l,this}angleTo(t){return 2*Math.acos(Math.abs(qs.clamp(this.dot(t),-1,1)))}rotateTo(t,e,n=1e-4){const i=this.angleTo(t);if(i<n)return!0;const r=Math.min(1,e/i);return this.slerp(t,r),!1}lookAt(t,e,n){Ua.lookAt(t,e,n),this.fromMatrix3(Ua)}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this.x,i=this.y,r=this.z,a=this.w;let o=a*t.w+n*t.x+i*t.y+r*t.z;if(o<0?(this.w=-t.w,this.x=-t.x,this.y=-t.y,this.z=-t.z,o=-o):this.copy(t),o>=1)return this.w=a,this.x=n,this.y=i,this.z=r,this;const c=Math.sqrt(1-o*o);if(Math.abs(c)<.001)return this.w=.5*(a+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(r+this.z),this;const l=Math.atan2(c,o),h=Math.sin((1-e)*l)/c,u=Math.sin(e*l)/c;return this.w=a*h+this.w*u,this.x=n*h+this.x*u,this.y=i*h+this.y*u,this.z=r*h+this.z*u,this}extractRotationFromMatrix(t){const e=Ua.elements,n=t.elements,i=1/Mc.fromMatrix4Column(t,0).length(),r=1/Mc.fromMatrix4Column(t,1).length(),a=1/Mc.fromMatrix4Column(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[4]*r,e[4]=n[5]*r,e[5]=n[6]*r,e[6]=n[8]*a,e[7]=n[9]*a,e[8]=n[10]*a,this.fromMatrix3(Ua),this}fromEuler(t,e,n){const i=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),o=Math.sin(e/2),c=Math.sin(t/2),l=Math.sin(n/2);return this.w=i*r*a+o*c*l,this.x=i*c*a+o*r*l,this.y=o*r*a-i*c*l,this.z=i*r*l-o*c*a,this}toEuler(t){const e=-2*(this.y*this.z-this.x*this.w);return Math.abs(e)>.9999?(t.x=Math.PI*.5*e,t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=0):(t.x=Math.asin(e),t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),t}fromMatrix3(t){const e=t.elements,n=e[0],i=e[3],r=e[6],a=e[1],o=e[4],c=e[7],l=e[2],h=e[5],u=e[8],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this.w=.25/f,this.x=(h-c)*f,this.y=(r-l)*f,this.z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this.w=(h-c)/f,this.x=.25*f,this.y=(i+a)/f,this.z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this.w=(r-l)/f,this.x=(i+a)/f,this.y=.25*f,this.z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this.w=(a-i)/f,this.x=(r+l)/f,this.y=(c+h)/f,this.z=.25*f}return this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}}class Ys{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,c,l,h,u,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],T=n[11],R=n[15],w=i[0],b=i[4],P=i[8],M=i[12],S=i[1],I=i[5],B=i[9],L=i[13],X=i[2],G=i[6],Y=i[10],K=i[14],z=i[3],Q=i[7],$=i[11],ht=i[15];return r[0]=a*w+o*S+c*X+l*z,r[4]=a*b+o*I+c*G+l*Q,r[8]=a*P+o*B+c*Y+l*$,r[12]=a*M+o*L+c*K+l*ht,r[1]=h*w+u*S+d*X+f*z,r[5]=h*b+u*I+d*G+f*Q,r[9]=h*P+u*B+d*Y+f*$,r[13]=h*M+u*L+d*K+f*ht,r[2]=_*w+g*S+p*X+m*z,r[6]=_*b+g*I+p*G+m*Q,r[10]=_*P+g*B+p*Y+m*$,r[14]=_*M+g*L+p*K+m*ht,r[3]=y*w+x*S+T*X+R*z,r[7]=y*b+x*I+T*G+R*Q,r[11]=y*P+x*B+T*Y+R*$,r[15]=y*M+x*L+T*K+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}extractBasis(t,e,n){return t.fromMatrix4Column(this,0),e.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}compose(t,e,n){return this.fromQuaternion(e),this.scale(n),this.setPosition(t),this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}setPosition(t){const e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}getInverse(t){const e=this.elements,n=t.elements,i=e[0],r=e[1],a=e[2],o=e[3],c=e[4],l=e[5],h=e[6],u=e[7],d=e[8],f=e[9],_=e[10],g=e[11],p=e[12],m=e[13],y=e[14],x=e[15],T=f*y*u-m*_*u+m*h*g-l*y*g-f*h*x+l*_*x,R=p*_*u-d*y*u-p*h*g+c*y*g+d*h*x-c*_*x,w=d*m*u-p*f*u+p*l*g-c*m*g-d*l*x+c*f*x,b=p*f*h-d*m*h-p*l*_+c*m*_+d*l*y-c*f*y,P=i*T+r*R+a*w+o*b;if(P===0)return t.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/P;return n[0]=T*M,n[1]=(m*_*o-f*y*o-m*a*g+r*y*g+f*a*x-r*_*x)*M,n[2]=(l*y*o-m*h*o+m*a*u-r*y*u-l*a*x+r*h*x)*M,n[3]=(f*h*o-l*_*o-f*a*u+r*_*u+l*a*g-r*h*g)*M,n[4]=R*M,n[5]=(d*y*o-p*_*o+p*a*g-i*y*g-d*a*x+i*_*x)*M,n[6]=(p*h*o-c*y*o-p*a*u+i*y*u+c*a*x-i*h*x)*M,n[7]=(c*_*o-d*h*o+d*a*u-i*_*u-c*a*g+i*h*g)*M,n[8]=w*M,n[9]=(p*f*o-d*m*o-p*r*g+i*m*g+d*r*x-i*f*x)*M,n[10]=(c*m*o-p*l*o+p*r*u-i*m*u-c*r*x+i*l*x)*M,n[11]=(d*l*o-c*f*o-d*r*u+i*f*u+c*r*g-i*l*g)*M,n[12]=b*M,n[13]=(d*m*a-p*f*a+p*r*_-i*m*_-d*r*y+i*f*y)*M,n[14]=(p*l*a-c*m*a-p*r*h+i*m*h+c*r*y-i*l*y)*M,n[15]=(c*f*a-d*l*a+d*r*h-i*f*h-c*r*_+i*l*_)*M,t}getMaxScale(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,u=n*c,d=n*l,f=i*c,_=i*l,g=r*l,p=a*o,m=a*c,y=a*l;return e[0]=1-(f+g),e[4]=u-y,e[8]=d+m,e[1]=u+y,e[5]=1-(h+g),e[9]=_-p,e[2]=d-m,e[6]=_+p,e[10]=1-(h+f),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromMatrix3(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=0,e[4]=n[3],e[5]=n[4],e[6]=n[5],e[7]=0,e[8]=n[6],e[9]=n[7],e[10]=n[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}}const Fa=new ho,gi=new nt,Ba=new nt,Nr=new ho;class kl{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new nt,this.rotation=new ho,this.scale=new nt(1,1,1),this.forward=new nt(0,0,1),this.up=new nt(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new Ys,this._worldMatrix=new Ys,this._cache={position:new nt,rotation:new ho,scale:new nt(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=qs.generateUUID()),this._uuid}start(){return this}update(){return this}add(t){return t.parent!==null&&t.parent.remove(t),this.children.push(t),t.parent=this,this}remove(t){const e=this.children.indexOf(t);return this.children.splice(e,1),t.parent=null,this}getDirection(t){return t.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(t){const e=this.parent;return e!==null?(this.getWorldPosition(Ba),gi.subVectors(t,Ba).normalize(),this.rotation.lookAt(this.forward,gi,this.up),Nr.extractRotationFromMatrix(e.worldMatrix).inverse(),this.rotation.premultiply(Nr)):(gi.subVectors(t,this.position).normalize(),this.rotation.lookAt(this.forward,gi,this.up)),this}rotateTo(t,e,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(Ba),gi.subVectors(t,Ba).normalize(),Fa.lookAt(this.forward,gi,this.up),Nr.extractRotationFromMatrix(i.worldMatrix).inverse(),Fa.premultiply(Nr)):(gi.subVectors(t,this.position).normalize(),Fa.lookAt(this.forward,gi,this.up)),this.rotation.rotateTo(Fa,this.maxTurnRate*e,n)}getWorldDirection(t){return Nr.extractRotationFromMatrix(this.worldMatrix),t.copy(this.forward).applyRotation(Nr).normalize()}getWorldPosition(t){return t.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(t,e){return this._renderComponent=t,this._renderComponentCallback=e,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(t,e,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,t,e,n,i):Tn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:ud(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:ud(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(t){return this.name=t.name,this.active=t.active,this.neighborhoodRadius=t.neighborhoodRadius,this.updateNeighborhood=t.updateNeighborhood,this.position.fromArray(t.position),this.rotation.fromArray(t.rotation),this.scale.fromArray(t.scale),this.forward.fromArray(t.forward),this.up.fromArray(t.up),this.boundingRadius=t.boundingRadius,this.maxTurnRate=t.maxTurnRate,this.canActivateTrigger=t.canActivateTrigger,this.children=t.children.slice(),this.neighbors=t.neighbors.slice(),this.parent=t.parent,this._localMatrix.fromArray(t._localMatrix),this._worldMatrix.fromArray(t.worldMatrix),this._cache.position.fromArray(t._cache.position),this._cache.rotation.fromArray(t._cache.rotation),this._cache.scale.fromArray(t._cache.scale),this._started=t._started,this._uuid=t.uuid,this}resolveReferences(t){const e=this.neighbors;for(let i=0,r=e.length;i<r;i++)e[i]=t.get(e[i]);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i]=t.get(n[i]);return this.parent=t.get(this.parent)||null,this}_updateMatrix(){const t=this._cache;t.position.equals(this.position)&&t.rotation.equals(this.rotation)&&t.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),t.position.copy(this.position),t.rotation.copy(this.rotation),t.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const t=this.parent;if(t!==null&&t._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){t===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];r._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function ud(s){const t=new Array;for(let e=0,n=s.length;e<n;e++)t.push(s[e].uuid);return t}const dd=new nt,Sc=new nt;class Kf extends kl{constructor(){super(),this.velocity=new nt,this.maxSpeed=1,this.updateOrientation=!0}update(t){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),dd.copy(this.velocity).multiplyScalar(t),Sc.copy(this.position).add(dd),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(Sc),this.position.copy(Sc),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const t=super.toJSON();return t.velocity=this.velocity.toArray(new Array),t.maxSpeed=this.maxSpeed,t.updateOrientation=this.updateOrientation,t}fromJSON(t){return super.fromJSON(t),this.velocity.fromArray(t.velocity),this.maxSpeed=t.maxSpeed,this.updateOrientation=t.updateOrientation,this}}class je{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(t){return this.active=t.active,this.weight=t.weight,this}resolveReferences(){}}const za=new nt,ka=new nt;class jf extends je{constructor(){super()}calculate(t,e){za.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++)n[i].getDirection(ka),za.add(ka);return n.length>0&&(za.divideScalar(n.length),t.getDirection(ka),e.subVectors(za,ka)),e}}const Tc=new nt,Ec=new nt;class bo extends je{constructor(t=new nt,e=3,n=0){super(),this.target=t,this.deceleration=e,this.tolerance=n}calculate(t,e){const n=this.target,i=this.deceleration;Ec.subVectors(n,t.position);const r=Ec.length();if(r>this.tolerance){let a=r/i;a=Math.min(a,t.maxSpeed),Tc.copy(Ec).multiplyScalar(a/r)}else Tc.set(0,0,0);return e.subVectors(Tc,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.deceleration=t.deceleration,this}}const bc=new nt;class Ao extends je{constructor(t=new nt){super(),this.target=t}calculate(t,e){const n=this.target;return bc.subVectors(n,t.position).normalize(),bc.multiplyScalar(t.maxSpeed),e.subVectors(bc,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this}}const Va=new nt;class Jf extends je{constructor(){super(),this._seek=new Ao}calculate(t,e){Va.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];Va.add(a.position)}return n.length>0&&(Va.divideScalar(n.length),this._seek.target=Va,this._seek.calculate(t,e),e.normalize()),e}}const ws=new nt;class $f extends je{constructor(t=new nt,e=10){super(),this.target=t,this.panicDistance=e}calculate(t,e){const n=this.target;return t.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(ws.subVectors(t.position,n).normalize(),ws.squaredLength()===0&&ws.set(0,0,1),ws.multiplyScalar(t.maxSpeed),e.subVectors(ws,t.velocity)),e}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.panicDistance=this.panicDistance,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.panicDistance=t.panicDistance,this}}const fd=new nt,pd=new nt,md=new nt;class DM extends je{constructor(t=null,e=10,n=1){super(),this.pursuer=t,this.panicDistance=e,this.predictionFactor=n,this._flee=new $f}calculate(t,e){const n=this.pursuer;fd.subVectors(n.position,t.position);let i=fd.length()/(t.maxSpeed+n.getSpeed());return i*=this.predictionFactor,pd.copy(n.velocity).multiplyScalar(i),md.addVectors(n.position,pd),this._flee.target=md,this._flee.panicDistance=this.panicDistance,this._flee.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.pursuer=this.pursuer?this.pursuer.uuid:null,t.panicDistance=this.panicDistance,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.pursuer=t.pursuer,this.panicDistance=t.panicDistance,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.pursuer=t.get(this.pursuer)||null}}class IM{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(t){return this._waypoints.push(t),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const t=this._waypoints.length-1;return this.loop===!0?!1:this._index===t}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const t={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},e=this._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._waypoints.push(r.toArray(new Array))}return t}fromJSON(t){this.loop=t.loop,this._index=t._index;const e=t._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._waypoints.push(new nt().fromArray(r))}return this}}class NM extends je{constructor(t=new IM,e=1){super(),this.path=t,this.nextWaypointDistance=e,this._arrive=new bo,this._seek=new Ao}calculate(t,e){const n=this.path;n.current().squaredDistanceTo(t.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const r=n.current();return n.finished()===!0?(this._arrive.target=r,this._arrive.calculate(t,e)):(this._seek.target=r,this._seek.calculate(t,e)),e}toJSON(){const t=super.toJSON();return t.path=this.path.toJSON(),t.nextWaypointDistance=this.nextWaypointDistance,t}fromJSON(t){return super.fromJSON(t),this.path.fromJSON(t.path),this.nextWaypointDistance=t.nextWaypointDistance,this}}const Ha=new nt,Ga=new nt,gd=new nt,_d=new nt;class OM extends je{constructor(t=null,e=null,n=3){super(),this.entity1=t,this.entity2=e,this.deceleration=n,this._arrive=new bo}calculate(t,e){const n=this.entity1,i=this.entity2;Ha.addVectors(n.position,i.position).multiplyScalar(.5);const r=t.position.distanceTo(Ha)/t.maxSpeed;return Ga.copy(n.velocity).multiplyScalar(r),gd.addVectors(n.position,Ga),Ga.copy(i.velocity).multiplyScalar(r),_d.addVectors(i.position,Ga),Ha.addVectors(gd,_d).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=Ha,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.entity1=this.entity1?this.entity1.uuid:null,t.entity2=this.entity2?this.entity2.uuid:null,t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.entity1=t.entity1,this.entity2=t.entity2,this.deceleration=t.deceleration,this}resolveReferences(t){this.entity1=t.get(this.entity1)||null,this.entity2=t.get(this.entity2)||null}}const ln=new nt,Rs=new nt,_i=new nt,jn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt];class Vl{constructor(t=new nt,e=new nt){this.min=t,this.max=e}set(t,e){return this.min=t,this.max=e,this}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max),e}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}expand(t){return this.min.min(t),this.max.max(t),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t.subVectors(this.max,this.min)}intersectsAABB(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsBoundingSphere(t){return this.clampPoint(t.center,ln),ln.squaredDistanceTo(t.center)<=t.radius*t.radius}intersectsPlane(t){const e=t.normal;this.getCenter(Rs),_i.subVectors(this.max,Rs);const n=_i.x*Math.abs(e.x)+_i.y*Math.abs(e.y)+_i.z*Math.abs(e.z),i=t.distanceToPoint(Rs);return Math.abs(i)<=n}getNormalFromSurfacePoint(t,e){e.set(0,0,0);let n,i=1/0;return this.getCenter(Rs),this.getSize(_i),ln.copy(t).sub(Rs),n=Math.abs(_i.x-Math.abs(ln.x)),n<i&&(i=n,e.set(1*Math.sign(ln.x),0,0)),n=Math.abs(_i.y-Math.abs(ln.y)),n<i&&(i=n,e.set(0,1*Math.sign(ln.y),0)),n=Math.abs(_i.z-Math.abs(ln.z)),n<i&&e.set(0,0,1*Math.sign(ln.z)),e}fromCenterAndSize(t,e){return ln.copy(e).multiplyScalar(.5),this.min.copy(t).sub(ln),this.max.copy(t).add(ln),this}fromPoints(t){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let e=0,n=t.length;e<n;e++)this.expand(t[e]);return this}applyMatrix4(t){const e=this.min,n=this.max;return jn[0].set(e.x,e.y,e.z).applyMatrix4(t),jn[1].set(e.x,e.y,n.z).applyMatrix4(t),jn[2].set(e.x,n.y,e.z).applyMatrix4(t),jn[3].set(e.x,n.y,n.z).applyMatrix4(t),jn[4].set(n.x,e.y,e.z).applyMatrix4(t),jn[5].set(n.x,e.y,n.z).applyMatrix4(t),jn[6].set(n.x,n.y,e.z).applyMatrix4(t),jn[7].set(n.x,n.y,n.z).applyMatrix4(t),this.fromPoints(jn)}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ac=new Vl;class wo{constructor(t=new nt,e=0){this.center=t,this.radius=e}set(t,e){return this.center=t,this.radius=e,this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t),this.center.squaredDistanceTo(t)>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}containsPoint(t){return t.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(t){const e=this.radius+t.radius;return t.center.squaredDistanceTo(this.center)<=e*e}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(t,e){return e.subVectors(t,this.center).normalize()}fromPoints(t){return Ac.fromPoints(t),Ac.getCenter(this.center),this.radius=this.center.distanceTo(Ac.max),this}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScale(),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(t){return this.center.fromArray(t.center),this.radius=t.radius,this}}const hn=new nt,wc=new nt,Wa=new nt,Rc=new nt,xd=new nt,Xa=new Ys,UM=new Ys,vd=new Vl;class Zf{constructor(t=new nt,e=new nt){this.origin=t,this.direction=e}set(t,e){return this.origin=t,this.direction=e,this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}clone(){return new this.constructor().copy(this)}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}intersectBoundingSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsBoundingSphere(t){const e=new nt;let n;const i=e.subVectors(t.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(t.center):(e.copy(this.direction).multiplyScalar(i).add(this.origin),n=e.squaredDistanceTo(t.center)),n<=t.radius*t.radius}intersectAABB(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsAABB(t){return this.intersectAABB(t,hn)!==null}intersectPlane(t,e){let n;const i=t.normal.dot(this.direction);if(i===0)if(t.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?this.at(n,e):null}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectOBB(t,e){return t.getSize(xd),vd.fromCenterAndSize(hn.set(0,0,0),xd),Xa.fromMatrix3(t.rotation),Xa.setPosition(t.center),yd.copy(this).applyMatrix4(Xa.getInverse(UM)),yd.intersectAABB(vd,e)?e.applyMatrix4(Xa):null}intersectsOBB(t){return this.intersectOBB(t,hn)!==null}intersectConvexHull(t,e){const n=t.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a].plane,h=l.distanceToPoint(this.origin),u=l.normal.dot(this.direction);if(h>0&&u>=0)return null;const d=u!==0?-h/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):i=Math.max(d,i),i>r))return null}return i!==-1/0?this.at(i,e):this.at(r,e),e}intersectsConvexHull(t){return this.intersectConvexHull(t,hn)!==null}intersectTriangle(t,e,n){const i=t.a,r=t.b,a=t.c;wc.subVectors(r,i),Wa.subVectors(a,i),Rc.crossVectors(wc,Wa);let o=this.direction.dot(Rc),c;if(o>0){if(e)return null;c=1}else if(o<0)c=-1,o=-o;else return null;hn.subVectors(this.origin,i);const l=c*this.direction.dot(Wa.crossVectors(hn,Wa));if(l<0)return null;const h=c*this.direction.dot(wc.cross(hn));if(h<0||l+h>o)return null;const u=-c*hn.dot(Rc);return u<0?null:this.at(u/o,n)}intersectBVH(t,e){return t.root.intersectRay(this,e)}intersectsBVH(t){return t.root.intersectsRay(this)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}const yd=new Zf,Md=new Ys,Or=new nt,qa=new nt,Cc=new nt,Pc=new wo,FM=new Zf(new nt(0,0,0),new nt(0,0,1));class BM extends je{constructor(t=new Array){super(),this.obstacles=t,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(t,e){const n=this.obstacles;let i=null,r=1/0;const a=this.dBoxMinLength+t.getSpeed()/t.maxSpeed*this.dBoxMinLength;t.worldMatrix.getInverse(Md);for(let o=0,c=n.length;o<c;o++){const l=n[o];if(l!==t&&(Or.copy(l.position).applyMatrix4(Md),Or.z>0&&Math.abs(Or.z)<a)){const h=l.boundingRadius+t.boundingRadius;Math.abs(Or.x)<h&&(Pc.center.copy(Or),Pc.radius=h,FM.intersectBoundingSphere(Pc,Cc),Cc.z<r&&(r=Cc.z,i=l,qa.copy(Or)))}}if(i!==null){const o=1+(a-qa.z)/a;e.x=(i.boundingRadius-qa.x)*o,e.z=(i.boundingRadius-qa.z)*this.brakingWeight,e.applyRotation(t.rotation)}return e}toJSON(){const t=super.toJSON();t.obstacles=new Array,t.brakingWeight=this.brakingWeight,t.dBoxMinLength=this.dBoxMinLength;for(let e=0,n=this.obstacles.length;e<n;e++)t.obstacles.push(this.obstacles[e].uuid);return t}fromJSON(t){return super.fromJSON(t),this.obstacles=t.obstacles,this.brakingWeight=t.brakingWeight,this.dBoxMinLength=t.dBoxMinLength,this}resolveReferences(t){const e=this.obstacles;for(let n=0,i=e.length;n<i;n++)e[n]=t.get(e[n])}}const Lc=new nt,Sd=new nt,Td=new nt,Ed=new nt;class zM extends je{constructor(t=null,e=new nt){super(),this.leader=t,this.offset=e,this._arrive=new bo,this._arrive.deceleration=1.5}calculate(t,e){const n=this.leader,i=this.offset;Lc.copy(i).applyMatrix4(n.worldMatrix),Sd.subVectors(Lc,t.position);const r=Sd.length()/(t.maxSpeed+n.getSpeed());return Td.copy(n.velocity).multiplyScalar(r),Ed.addVectors(Lc,Td),this._arrive.target=Ed,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.leader=this.leader?this.leader.uuid:null,t.offset=this.offset,t}fromJSON(t){return super.fromJSON(t),this.leader=t.leader,this.offset=t.offset,this}resolveReferences(t){this.leader=t.get(this.leader)||null}}const Dc=new nt,Ic=new nt,bd=new nt,Ad=new nt,wd=new nt;class kM extends je{constructor(t=null,e=1){super(),this.evader=t,this.predictionFactor=e,this._seek=new Ao}calculate(t,e){const n=this.evader;Dc.subVectors(n.position,t.position),t.getDirection(Ic),n.getDirection(bd);const i=Dc.dot(Ic)>0,r=Ic.dot(bd)<-.95;if(i===!0&&r===!0)return this._seek.target=n.position,this._seek.calculate(t,e),e;let a=Dc.length()/(t.maxSpeed+n.getSpeed());return a*=this.predictionFactor,Ad.copy(n.velocity).multiplyScalar(a),wd.addVectors(n.position,Ad),this._seek.target=wd,this._seek.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.evader=this.evader?this.evader.uuid:null,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.evader=t.evader,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.evader=t.get(this.evader)||null}}const Ya=new nt;class Qf extends je{constructor(){super()}calculate(t,e){const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];Ya.subVectors(t.position,a.position);let o=Ya.length();o===0&&(o=1e-4),Ya.normalize().divideScalar(o),e.add(Ya)}return e}}const Ka=new nt,Nc=new nt;class Hl extends je{constructor(t=1,e=5,n=5){super(),this.radius=t,this.distance=e,this.jitter=n,this._targetLocal=new nt,VM(this.radius,this._targetLocal)}calculate(t,e,n){const i=this.jitter*n;return Nc.x=qs.randFloat(-1,1)*i,Nc.z=qs.randFloat(-1,1)*i,this._targetLocal.add(Nc),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),Ka.copy(this._targetLocal),Ka.z+=this.distance,Ka.applyMatrix4(t.worldMatrix),e.subVectors(Ka,t.position),e}toJSON(){const t=super.toJSON();return t.radius=this.radius,t.distance=this.distance,t.jitter=this.jitter,t._targetLocal=this._targetLocal.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this.distance=t.distance,this.jitter=t.jitter,this._targetLocal.fromArray(t._targetLocal),this}}function VM(s,t){const e=Math.random()*Math.PI*2;t.x=s*Math.cos(e),t.z=s*Math.sin(e)}const ja=new nt;class Rd{constructor(t){this.vehicle=t,this.behaviors=new Array,this._steeringForce=new nt,this._typesMap=new Map}add(t){return this.behaviors.push(t),this}remove(t){const e=this.behaviors.indexOf(t);return this.behaviors.splice(e,1),this}clear(){return this.behaviors.length=0,this}calculate(t,e){return this._calculateByOrder(t),e.copy(this._steeringForce)}_accumulate(t){const e=this._steeringForce.length(),n=this.vehicle.maxForce-e;return n<=0?!1:(t.length()>n&&t.normalize().multiplyScalar(n),this._steeringForce.add(t),!0)}_calculateByOrder(t){const e=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.active===!0&&(ja.set(0,0,0),r.calculate(this.vehicle,ja,t),ja.multiplyScalar(r.weight),this._accumulate(ja)===!1))return}}toJSON(){const t={type:"SteeringManager",behaviors:new Array},e=this.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.behaviors.push(r.toJSON())}return t}fromJSON(t){this.clear();const e=t.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=r.type;let o;switch(a){case"SteeringBehavior":o=new je().fromJSON(r);break;case"AlignmentBehavior":o=new jf().fromJSON(r);break;case"ArriveBehavior":o=new bo().fromJSON(r);break;case"CohesionBehavior":o=new Jf().fromJSON(r);break;case"EvadeBehavior":o=new DM().fromJSON(r);break;case"FleeBehavior":o=new $f().fromJSON(r);break;case"FollowPathBehavior":o=new NM().fromJSON(r);break;case"InterposeBehavior":o=new OM().fromJSON(r);break;case"ObstacleAvoidanceBehavior":o=new BM().fromJSON(r);break;case"OffsetPursuitBehavior":o=new zM().fromJSON(r);break;case"PursuitBehavior":o=new kM().fromJSON(r);break;case"SeekBehavior":o=new Ao().fromJSON(r);break;case"SeparationBehavior":o=new Qf().fromJSON(r);break;case"WanderBehavior":o=new Hl().fromJSON(r);break;default:const c=this._typesMap.get(a);if(c!==void 0)o=new c().fromJSON(r);else{Tn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",a);continue}}this.add(o)}return this}registerType(t,e){return this._typesMap.set(t,e),this}resolveReferences(t){const e=this.behaviors;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}class HM{constructor(t=10){this.count=t,this._history=new Array,this._slot=0;for(let e=0;e<this.count;e++)this._history[e]=new nt}calculate(t,e){e.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(t),this._slot++;for(let n=0;n<this.count;n++)e.add(this._history[n]);return e.divideScalar(this.count),e}toJSON(){const t={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},e=this._history;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._history.push(r.toArray(new Array))}return t}fromJSON(t){this.count=t.count,this._slot=t._slot;const e=t._history;this._history.length=0;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._history.push(new nt().fromArray(r))}return this}}const Cd=new nt,Ja=new nt,Pd=new nt,Cs=new nt,Ld=new nt;class Gl extends Kf{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new Rd(this),this.smoother=null}update(t){return this.steering.calculate(t,Cd),Pd.copy(Cd).divideScalar(this.mass),this.velocity.add(Pd.multiplyScalar(t)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),Ja.copy(this.velocity).multiplyScalar(t),Cs.copy(this.position).add(Ja),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Cs),this.position.copy(Cs),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,Ld),Ja.copy(Ld).multiplyScalar(t),Cs.copy(this.position).add(Ja),this.lookAt(Cs)),this}toJSON(){const t=super.toJSON();return t.mass=this.mass,t.maxForce=this.maxForce,t.steering=this.steering.toJSON(),t.smoother=this.smoother?this.smoother.toJSON():null,t}fromJSON(t){return super.fromJSON(t),this.mass=t.mass,this.maxForce=t.maxForce,this.steering=new Rd(this).fromJSON(t.steering),this.smoother=t.smoother?new HM().fromJSON(t.smoother):null,this}resolveReferences(t){super.resolveReferences(t),this.steering.resolveReferences(t)}}class uo{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const Dd=new wo,Id=new nt;class GM extends uo{constructor(t=new nt){super(),this.size=t,this._aabb=new Vl}touching(t){return Dd.set(t.position,t.boundingRadius),this._aabb.intersectsBoundingSphere(Dd)}update(t){return t.getWorldPosition(Id),this._aabb.fromCenterAndSize(Id,this.size),this}toJSON(){const t=super.toJSON();return t.size=this.size.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.size.fromArray(t.size),this}}const Oc=new wo;class WM extends uo{constructor(t=0){super(),this.radius=t,this._boundingSphere=new wo}touching(t){return t.getWorldPosition(Oc.center),Oc.radius=t.boundingRadius,this._boundingSphere.intersectsBoundingSphere(Oc)}update(t){return t.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const t=super.toJSON();return t.radius=this.radius,t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this}}class Nd extends kl{constructor(t=new uo){super(),this.region=t,this.canActivateTrigger=!1,this._typesMap=new Map}check(t){return this.region.touching(t)===!0&&this.execute(t),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const t=super.toJSON();return t.region=this.region.toJSON(),t}fromJSON(t){super.fromJSON(t);const e=t.region;let n=e.type;switch(n){case"TriggerRegion":this.region=new uo().fromJSON(e);break;case"RectangularTriggerRegion":this.region=new GM().fromJSON(e);break;case"SphericalTriggerRegion":this.region=new WM().fromJSON(e);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(e):Tn.warn("YUKA.Trigger: Unsupported trigger region type:",e.type)}return this}registerType(t,e){return this._typesMap.set(t,e),this}}const Ps=new Array;class XM{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new PM}add(t){return this.entities.push(t),t.manager=this,this}remove(t){const e=this.entities.indexOf(t);return this.entities.splice(e,1),t.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(t){const e=this.entities;for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.name===t)return r}return null}update(t){const e=this.entities,n=this._triggers;for(let i=e.length-1;i>=0;i--){const r=e[i];this.updateEntity(r,t)}for(let i=n.length-1;i>=0;i--){const r=n[i];this.processTrigger(r)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(t),this}updateEntity(t,e){if(t.active===!0){this.updateNeighborhood(t),t._started===!1&&(t.start(),t._started=!0),t.update(e);const n=t.children;for(let a=n.length-1;a>=0;a--){const o=n[a];this.updateEntity(o,e)}if(t instanceof Nd&&this._triggers.push(t),this.spatialIndex!==null){let a=this._indexMap.get(t)||-1;a=this.spatialIndex.updateEntity(t,a),this._indexMap.set(t,a)}const i=t._renderComponent,r=t._renderComponentCallback;i!==null&&r!==null&&r(t,i)}return this}updateNeighborhood(t){if(t.updateNeighborhood===!0){t.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(t.position,t.neighborhoodRadius,Ps):(Ps.length=0,Ps.push(...this.entities));const e=t.neighborhoodRadius*t.neighborhoodRadius;for(let n=0,i=Ps.length;n<i;n++){const r=Ps[n];t!==r&&r.active===!0&&t.position.squaredDistanceTo(r.position)<=e&&t.neighbors.push(r)}}return this}processTrigger(t){t.updateRegion();const e=this.entities;for(let n=e.length-1;n>=0;n--){const i=e[n];t!==i&&i.active===!0&&i.canActivateTrigger===!0&&t.check(i)}return this}sendMessage(t,e,n,i,r){return this._messageDispatcher.dispatch(t,e,n,i,r),this}toJSON(){const t={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function e(n){t.entities.push(n.toJSON());for(let i=0,r=n.children.length;i<r;i++)e(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)e(this.entities[n]);return t}fromJSON(t){this.clear();const e=t.entities,n=t._messageDispatcher,i=new Map;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=o.type;let l;switch(c){case"GameEntity":l=new kl().fromJSON(o);break;case"MovingEntity":l=new Kf().fromJSON(o);break;case"Vehicle":l=new Gl().fromJSON(o);break;case"Trigger":l=new Nd().fromJSON(o);break;default:const h=this._typesMap.get(c);if(h!==void 0)l=new h().fromJSON(o);else{Tn.warn("YUKA.EntityManager: Unsupported entity type:",c);continue}}i.set(l.uuid,l),l.parent===null&&this.add(l)}for(let r of i.values())r.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(t,e){return this._typesMap.set(t,e),this}}class qM{constructor(){this._previousTime=0,this._currentTime=0,this._delta=0,this._elapsed=0,this._timescale=1,this._useFixedDelta=!1,this._fixedDelta=16.67,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=YM.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disableFixedDelta(){return this._useFixedDelta=!1,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}enableFixedDelta(){return this._useFixedDelta=!0,this}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getFixedDelta(){return this._fixedDelta/1e3}getTimescale(){return this._timescale}reset(){return this._currentTime=this._now(),this}setFixedDelta(t){return this._fixedDelta=t*1e3,this}setTimescale(t){return this._timescale=t,this}update(){return this._useFixedDelta===!0?this._delta=this._fixedDelta:(this._previousTime=this._currentTime,this._currentTime=this._now(),this._delta=this._currentTime-this._previousTime),this._delta*=this._timescale,this._elapsed+=this._delta,this}_now(){return(typeof performance>"u"?Date:performance).now()}}function YM(){document.hidden===!1&&this.reset()}new Array;new Array;new Array;function Od(s,t){if(t===og)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Zc||t===mf){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Zc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class KM extends lr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new QM(e)}),this.register(function(e){return new tS(e)}),this.register(function(e){return new lS(e)}),this.register(function(e){return new hS(e)}),this.register(function(e){return new uS(e)}),this.register(function(e){return new nS(e)}),this.register(function(e){return new iS(e)}),this.register(function(e){return new rS(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new aS(e)}),this.register(function(e){return new eS(e)}),this.register(function(e){return new cS(e)}),this.register(function(e){return new oS(e)}),this.register(function(e){return new JM(e)}),this.register(function(e){return new dS(e)}),this.register(function(e){return new fS(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=zs.extractUrlBase(t);a=zs.resolveURL(l,this.path)}else a=zs.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Gf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===tp){try{a[Vt.KHR_BINARY_GLTF]=new pS(t)}catch(u){i&&i(u);return}r=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wS(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Vt.KHR_MATERIALS_UNLIT:a[u]=new $M;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new mS(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[u]=new gS;break;case Vt.KHR_MESH_QUANTIZATION:a[u]=new _S;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function jM(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JM{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Et(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],we);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qf(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new pM(h),l.distance=u;break;case"spot":l=new dM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class $M{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(t,e,n){const i=[];t.color=new Et(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],we),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,De))}return Promise.all(i)}}class ZM{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class QM{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Mt(o,o)}return Promise.all(r)}}class tS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class eS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class nS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Et(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],we)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,De)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class iS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class rS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Et().setRGB(o[0],o[1],o[2],we),Promise.all(r)}}class sS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class aS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Et().setRGB(o[0],o[1],o[2],we),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,De)),Promise.all(r)}}class oS{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class cS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class lS{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class hS{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class uS{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class dS{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class fS{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const _ of u){const g=new Bt,p=new D,m=new Nn,y=new D(1,1,1),x=new Ky(_.geometry,_.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&y.fromBufferAttribute(c.SCALE,T),x.setMatrixAt(T,g.compose(p,m,y));for(const T in c)if(T==="_COLOR_0"){const R=c[T];x.instanceColor=new nl(R.array,R.itemSize,R.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&_.geometry.setAttribute(T,c[T]);ue.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const tp="glTF",Ls=12,Ud={JSON:1313821514,BIN:5130562};class pS{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==tp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,r=new DataView(t,Ls);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ud.JSON){const l=new Uint8Array(t,Ls+a,o);this.content=n.decode(l)}else if(c===Ud.BIN){const l=Ls+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=sl[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=sl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const _ in f.attributes){const g=f.attributes[_],p=c[_];p!==void 0&&(g.normalized=p)}u(f)},o,l,we,d)})})}}class gS{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class _S{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class ep extends na{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,_=t*l,g=_-l,p=-2*f+3*d,m=f-d,y=1-p,x=m-d+u;for(let T=0;T!==o;T++){const R=a[g+T+o],w=a[g+T+c]*h,b=a[_+T+o],P=a[_+T]*h;r[T]=y*R+x*w+p*b+m*P}return r}}const xS=new Nn;class vS extends ep{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return xS.fromArray(r).normalize().toArray(r),r}}const dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Ve,9729:tn,9984:af,9985:Za,9986:Is,9987:Qn},Bd={33071:Si,33648:Jr,10497:jr},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yS={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Ws},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),s.DefaultMaterial}function Gi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function yi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function SS(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function TS(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ES(s){let t;const e=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Bc(e.attributes):t=s.indices+":"+Bc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Bc(s.targets[n]);return t}function Bc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function al(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AS=new Bt;class wS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new jM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Xf(this.options.manager):this.textureLoader=new _M(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Gi(r,o,i),yi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(zs.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Uc[i.type],o=Gr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new He(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Uc[i.type],l=Gr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=e.cache.get(y);x||(g=new l(o,m*f,i.count*f/h),x=new Gy(g,f/h),e.cache.add(y,x)),p=new Il(x,c,d%f/h,_)}else o===null?g=new l(i.count*c):g=new l(o,d,i.count*c),p=new He(g,c,_);if(i.sparse!==void 0){const m=Uc.SCALAR,y=Gr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,R=new y(a[1],x,i.sparse.count*m),w=new l(a[2],T,i.sparse.count*c);o!==null&&(p=new He(p.array.slice(),p.itemSize,p.normalized));for(let b=0,P=R.length;b<P;b++){const M=R[b];if(p.setX(M,w[b*c]),c>=2&&p.setY(M,w[b*c+1]),c>=3&&p.setZ(M,w[b*c+2]),c>=4&&p.setW(M,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||tn,h.minFilter=Fd[d.minFilter]||Qn,h.wrapS=Bd[d.wrapS]||jr,h.wrapT=Bd[d.wrapT]||jr,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let _=d;e.isImageBitmapLoader===!0&&(_=function(g){const p=new Te(g);p.needsUpdate=!0,d(p)}),e.load(zs.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||bS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new kf,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new zf,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ni}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[Vt.KHR_MATERIALS_UNLIT]){const u=i[Vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],we),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,De)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=wn);const h=r.alphaMode||Fc.OPAQUE;if(h===Fc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ji&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Mt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ji&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ji){const u=r.emissiveFactor;o.emissive=new Et().setRGB(u[0],u[1],u[2],we)}return r.emissiveTexture!==void 0&&a!==Ji&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,De)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),yi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Gi(i,u,r),u})}createUniqueName(t){const e=Jt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return zd(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=ES(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=zd(new Bn,l,e),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?MS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],p=a[f];let m;const y=l[f];if(p.mode===dn.TRIANGLES||p.mode===dn.TRIANGLE_STRIP||p.mode===dn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Xy(g,y):new Ne(g,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===dn.TRIANGLE_STRIP?m.geometry=Od(m.geometry,mf):p.mode===dn.TRIANGLE_FAN&&(m.geometry=Od(m.geometry,Zc));else if(p.mode===dn.LINES)m=new jy(g,y);else if(p.mode===dn.LINE_STRIP)m=new Ol(g,y);else if(p.mode===dn.LINE_LOOP)m=new Jy(g,y);else if(p.mode===dn.POINTS)m=new $y(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&TS(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),yi(m,r),p.extensions&&Gi(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,_=u.length;f<_;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Gi(i,u[0],r),u[0];const d=new $i;r.extensions&&Gi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ze(xf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ll(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),yi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Bt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Nl(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],_=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,y=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(_),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let y=0,x=d.length;y<x;y++){const T=d[y],R=f[y],w=_[y],b=g[y],P=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const M=n._createAnimationTracks(T,R,w,b,P);if(M)for(let S=0;S<M.length;S++)m.push(M[S])}return new rM(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,AS)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ff:l.length>1?h=new $i:l.length===1?h=l[0]:h=new ue,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),yi(h,r),r.extensions&&Gi(n,h,r),r.matrix!==void 0){const u=new Bt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new $i;n.name&&(r.name=i.createUniqueName(n.name)),yi(r,n),n.extensions&&Gi(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Dn||d instanceof Te)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];xi[r.path]===xi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(xi[r.path]){case xi.weights:l=es;break;case xi.rotation:l=rr;break;case xi.position:case xi.scale:l=ns;break;default:switch(n.itemSize){case 1:l=es;break;case 2:case 3:default:l=ns;break}break}const h=i.interpolation!==void 0?yS[i.interpolation]:Zr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+xi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=al(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof rr?vS:ep;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RS(s,t,e){const n=t.attributes,i=new ai;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const h=al(Gr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=al(Gr[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function zd(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=sl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Kt.workingColorSpace!==we&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),yi(s,t),RS(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?SS(s,t.targets,e):s})}function CS(s){const t=new Map,e=new Map,n=s.clone();return np(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function np(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)np(s.children[n],t.children[n],e)}function $n(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ip(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},Wl,Oe,oe,fn=1e8,ne=1/fn,ol=Math.PI*2,PS=ol/4,LS=0,rp=Math.sqrt,DS=Math.cos,IS=Math.sin,Ee=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},Xl=function(t){return typeof t>"u"},Un=function(t){return typeof t=="object"},We=function(t){return t!==!1},ql=function(){return typeof window<"u"},$a=function(t){return de(t)||Ee(t)},sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ue=Array.isArray,cl=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,op=/[+-]=-?[.\d]+/,cp=/[^,'"\[\]\s]+/gi,NS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,En,ll,Yl,sn={},fo={},lp,hp=function(t){return(fo=sr(t,sn))&&Ke},Kl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ks=function(t,e){return!e&&console.warn(t)},up=function(t,e){return t&&(sn[t]=e)&&fo&&(fo[t]=e)||sn},js=function(){return 0},OS={suppressEvents:!0,isStart:!0,kill:!1},to={suppressEvents:!0,kill:!1},US={suppressEvents:!0},jl={},Ci=[],hl={},dp,Qe={},kc={},kd=30,eo=[],Jl="",$l=function(t){var e=t[0],n,i;if(Un(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=eo.length;i--&&!eo[i].targetTest(e););n=eo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Up(t[i],n)))||t.splice(i,1);return t},Qi=function(t){return t._gsap||$l(pn(t))[0]._gsap},fp=function(t,e,n){return(n=t[e])&&de(n)?t[e]():Xl(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},fe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},FS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},po=function(){var t=Ci.length,e=Ci.slice(0),n,i;for(hl={},Ci.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pp=function(t,e,n,i){Ci.length&&!Oe&&po(),t.render(e,n,Oe&&e<0&&(t._initted||t._startAt)),Ci.length&&!Oe&&po()},mp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(cp).length<2?e:Ee(t)?t.trim():t},gp=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},BS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},sr=function(t,e){for(var n in e)t[n]=e[n];return t},Vd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Un(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},mo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ks=function(t){var e=t.parent||le,n=t.keyframes?BS(Ue(t.keyframes)):mn;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},_p=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ro=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ii=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},tr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},kS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ul=function(t,e,n,i){return t._startAt&&(Oe?t._startAt.revert(to):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},VS=function s(t){return!t||t._ts&&s(t.parent)},Hd=function(t){return t._repeat?rs(t._tTime,t=t.duration()+t._rDelay)*t:0},rs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},go=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Co=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Po=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Co(t),n._dirty||tr(n,t)),t},xp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=go(t.rawTime(),e),(!e._dur||ia(0,e.totalDuration(),n)-e._tTime>ne)&&e.render(n,!0)),tr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ne}},Cn=function(t,e,n,i){return e.parent&&Ii(e),e._start=Se((ri(n)?n:n||t!==le?un(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_p(t,e,"_first","_last",t._sort?"_start":0),dl(e)||(t._recent=e),i||xp(t,e),t._ts<0&&Po(t,t._tTime),t},vp=function(t,e){return(sn.ScrollTrigger||Kl("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},yp=function(t,e,n,i,r){if(Ql(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Oe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dp!==en.frame)return Ci.push(t),t._lazy=[r,i],1},HS=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},dl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},GS=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&HS(t)&&!(!t._initted&&dl(t))||(t._ts<0||t._dp._ts<0)&&!dl(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=ia(0,t._tDur,e),h=rs(c,o),t._yoyo&&h&1&&(a=1-a),h!==rs(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Oe||i||t._zTime===ne||!e&&t._zTime){if(!t._initted&&yp(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ne:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&ul(t,e,n,!0),t._onUpdate&&!n&&nn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ii(t,1),!n&&!Oe&&(nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},WS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ss=function(t,e,n,i){var r=t._repeat,a=Se(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Se(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Po(t,t._tTime=t._tDur*o),t.parent&&Co(t),n||tr(t.parent,t),t},Gd=function(t){return t instanceof ke?tr(t):ss(t,t._dur)},XS={_start:0,endTime:js,totalDuration:js},un=function s(t,e,n){var i=t.labels,r=t._recent||XS,a=t.duration()>=fn?r.endTime(!1):t._dur,o,c,l;return Ee(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Ue(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Vs=function(t,e,n){var i=ri(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=We(c.vars.inherit)&&c.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new _e(e[0],a,e[r+1])},Oi=function(t,e){return t||t===0?e(t):e},ia=function(t,e,n){return n<t?t:n>e?e:n},Ie=function(t,e){return!Ee(t)||!(e=NS.exec(t))?"":e[1]},qS=function(t,e,n){return Oi(n,function(i){return ia(t,e,i)})},fl=[].slice,Mp=function(t,e){return t&&Un(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Un(t[0]))&&!t.nodeType&&t!==En},YS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ee(i)&&!e||Mp(i,1)?(r=n).push.apply(r,pn(i)):n.push(i)})||n},pn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Ee(t)&&!n&&(ll||!as())?fl.call((e||Yl).querySelectorAll(t),0):Ue(t)?YS(t,n):Mp(t)?fl.call(t,0):t?[t]:[]},pl=function(t){return t=pn(t)[0]||Ks("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pn(e,n.querySelectorAll?n:n===t?Ks("Invalid scope")||Yl.createElement("div"):t)}},Sp=function(t){return t.sort(function(){return .5-Math.random()})},Tp=function(t){if(de(t))return t;var e=Un(t)?t:{each:t},n=er(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return Ee(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,p=a[g],m,y,x,T,R,w,b,P,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,fn])[1],!M){for(b=-fn;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=c?Math.min(M,g)*h-.5:i%M,y=M===fn?0:c?g*u/M-.5:i/M|0,b=0,P=fn,w=0;w<g;w++)x=w%M-m,T=y-(w/M|0),p[w]=R=l?Math.abs(l==="y"?T:x):rp(x*x+T*T),R>b&&(b=R),R<P&&(P=R);i==="random"&&Sp(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:l?l==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Ie(e.amount||e.each)||0,n=n&&g<0?Ip(n):n}return g=(p[d]-p.min)/p.max||0,Se(p.b+(n?n(g):g)*p.v)+p.u}},ml=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:Ie(n))}},Ep=function(t,e){var n=Ue(t),i,r;return!n&&Un(t)&&(i=n=t.radius||fn,t.values?(t=pn(t.values),(r=!ri(t[0]))&&(i*=i)):t=ml(t.increment)),Oi(e,n?de(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=fn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-o),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:a,r||h===a||ri(a)?h:h+Ie(a)}:ml(t))},bp=function(t,e,n,i){return Oi(Ue(t)?!e:n===!0?!!(n=0):!i,function(){return Ue(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},KS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},jS=function(t,e){return function(n){return t(parseFloat(n))+(e||Ie(n))}},JS=function(t,e,n){return wp(t,e,0,1,n)},Ap=function(t,e,n){return Oi(n,function(i){return t[~~e(i)]})},$S=function s(t,e,n){var i=e-t;return Ue(t)?Ap(t,s(0,t.length),e):Oi(n,function(r){return(i+(r-t)%i)%i+t})},ZS=function s(t,e,n){var i=e-t,r=i*2;return Ue(t)?Ap(t,s(0,t.length-1),e):Oi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Js=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?cp:cl),n+=t.substr(e,i-e)+bp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},wp=function(t,e,n,i,r){var a=e-t,o=i-n;return Oi(r,function(c){return n+((c-t)/a*o||0)})},QS=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ee(t),o={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ue(t)&&!Ue(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=sr(Ue(t)?[]:{},t));if(!h){for(c in e)Zl.call(o,t,c,"get",e[c]);r=function(_){return nh(_,o)||(a?t.p:t)}}}return Oi(n,r)},Wd=function(t,e,n){var i=t.labels,r=fn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},nn=function(t,e,n){var i=t.vars,r=i[e],a=oe,o=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Ci.length&&po(),o&&(oe=o),h=c?r.apply(l,c):r.call(l),oe=a,h},Os=function(t){return Ii(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Oe),t.progress()<1&&nn(t,"onInterrupt"),t},zr,Rp=[],Cp=function(t){if(t)if(t=!t.name&&t.default||t,ql()||t.headless){var e=t.name,n=de(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:js,render:nh,add:Zl,kill:mT,modifier:pT,rawVars:0},a={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(as(),t!==i){if(Qe[e])return;mn(i,mn(mo(t,r),a)),sr(i.prototype,sr(r,mo(t,a))),Qe[i.prop=e]=i,t.targetTest&&(eo.push(i),jl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}up(e,i),t.register&&t.register(Ke,i,qe)}else Rp.push(t)},te=255,Us={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},Vc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*te+.5|0},Pp=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&te,t&te]:0:Us.black,r,a,o,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Us[t])i=Us[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&te,i&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(cl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Vc(c+1/3,r,a),i[1]=Vc(c,r,a),i[2]=Vc(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(ap),n&&i.length<4&&(i[3]=1),i}else i=t.match(cl)||Us.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/te,a=i[1]/te,o=i[2]/te,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Lp=function(t){var e=[],n=[],i=-1;return t.split(Pi).forEach(function(r){var a=r.match(Br)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Xd=function(t,e,n){var i="",r=(t+i).match(Pi),a=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Pp(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Lp(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Pi,"1").split(Br),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Pi),u=l.length-1;o<u;o++)i+=l[o]+r[o];return i+l[u]},Pi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Us)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),tT=/hsl[a]?\(/,Dp=function(t){var e=t.join(" "),n;if(Pi.lastIndex=0,Pi.test(e))return n=tT.test(e),t[1]=Xd(t[1],n),t[0]=Xd(t[0],n,Lp(t[1])),!0},$s,en=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,h,u,d,f,_=function g(p){var m=s()-i,y=p===!0,x,T,R,w;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,x=R-a,(x>0||y)&&(w=++u.frame,d=R-u.time*1e3,u.time=R=R/1e3,a+=x+(x>=r?4:r-x),T=1),y||(c=l(g)),T)for(f=0;f<o.length;f++)o[f](R,d,w,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){lp&&(!ll&&ql()&&(En=ll=window,Yl=En.document||{},sn.gsap=Ke,(En.gsapVersions||(En.gsapVersions=[])).push(Ke.version),hp(fo||En.GreenSockGlobals||!En.gsap&&En||{}),Rp.forEach(Cp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},$s=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),$s=0,l=js},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,m,y){var x=m?function(T,R,w,b){p(T,R,w,b),u.remove(x)}:p;return u.remove(p),o[y?"unshift":"push"](x),as(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},u}(),as=function(){return!$s&&en.wake()},Wt={},eT=/^[\d.\-M][\d.\-,\s]/,nT=/["']/g,iT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(nT,"").trim():+l,i=c.substr(o+1).trim();return e},rT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sT=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[iT(e[1])]:rT(t).split(",").map(mp)):Wt._CE&&eT.test(t)?Wt._CE("",t):n},Ip=function(t){return function(e){return 1-t(1-e)}},Np=function s(t,e){for(var n=t._first,i;n;)n instanceof ke?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},er=function(t,e){return t&&(de(t)?t:Wt[t]||sT(t))||e},hr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Wt[o]=sn[o]=r,Wt[a=o.toLowerCase()]=n;for(var c in r)Wt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[o+"."+c]=r[c]}),r},Op=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Hc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/ol*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*IS((h-a)*r)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:Op(o);return r=ol/r,c.config=function(l,h){return s(t,l,h)},c},Gc=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Op(n);return i.config=function(r){return s(t,r)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;hr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;hr("Elastic",Hc("in"),Hc("out"),Hc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};hr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);hr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});hr("Circ",function(s){return-(rp(1-s*s)-1)});hr("Sine",function(s){return s===1?1:-DS(s*PS)+1});hr("Back",Gc("in"),Gc("out"),Gc());Wt.SteppedEase=Wt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ne;return function(o){return((i*ia(0,a,o)|0)+r)*n}}};is.ease=Wt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Jl+=s+","+s+"Params,"});var Up=function(t,e){this.id=LS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:fp,this.set=e?e.getSetter:eh},Zs=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ss(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),$s||en.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(as(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Po(this,n),!r._dp||r.parent||xp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ne||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rs(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this._tDur,r),i!==!1),Co(this),kS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=US);var i=Oe;return Oe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Oe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(un(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ne)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=de(n)?n:gp,o=function(){var l=i.then;i.then=null,de(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Os(this)},s}();mn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var ke=function(s){ip(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=We(n.sortChildren),le&&Cn(n.parent||le,$n(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&vp($n(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Vs(0,arguments,this),this},e.from=function(i,r,a){return Vs(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Vs(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ks(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new _e(i,r,un(this,a),1),this},e.call=function(i,r,a){return Cn(this,_e.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,c,l,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new _e(i,a,un(this,c)),this},e.staggerFrom=function(i,r,a,o,c,l,h){return a.runBackwards=1,ks(a).immediateRender=We(a.immediateRender),this.staggerTo(i,r,a,o,c,l,h)},e.staggerFromTo=function(i,r,a,o,c,l,h,u){return o.startAt=a,ks(o).immediateRender=We(o.immediateRender),this.staggerTo(i,r,o,c,l,h,u)},e.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Se(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,p,m,y,x,T,R,w,b;if(this!==le&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),d=h,T=this._start,x=this._ts,m=!x,u&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=Se(h%p),h===c?(g=this._repeat,d=l):(g=~~(h/p),g&&g===h/p&&(d=l,g--),d>l&&(d=l)),R=rs(this._tTime,p),!o&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),w&&g&1&&(d=l-d,b=1),g!==R&&!this._lock){var P=w&&R&1,M=P===(w&&g&1);if(g<R&&(P=!P),o=P?0:h%l?l:h,this._lock=1,this.render(o||(b?0:Se(g*p)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=P?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Np(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=WS(this,Se(o),Se(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!g&&(nn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=-ne);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,a||Oe&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=S?-ne:ne);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-ne)._zTime=d>=o?1:-1,this._ts))return this._start=T,Co(this),this.render(i,r,a);this._onUpdate&&!r&&nn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(T===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ii(this,1),!r&&!(i<0&&!o)&&(h||o||!c)&&(nn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(ri(r)||(r=un(this,r,i)),!(i instanceof Zs)){if(Ue(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ee(i))return this.addLabel(i,r);if(de(i))i=_e.delayedCall(0,i);else return this}return this!==i?Cn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-fn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof _e?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ee(i)?this.removeLabel(i):de(i)?this.killTweensOf(i):(Ro(this,i),i===this._recent&&(this._recent=this._last),tr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=un(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=_e.delayedCall(0,r||js,a);return o.data="isPause",this._hasPause=1,Cn(this,o,un(this,i))},e.removePause=function(i){var r=this._first;for(i=un(this,i);r;)r._start===i&&r.data==="isPause"&&Ii(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Ei!==o[c]&&o[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=pn(i),c=this._first,l=ri(r),h;c;)c instanceof _e?FS(c._targets,o)&&(l?(!Ei||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(o,r)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=un(a,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=_e.to(a,mn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==p&&ss(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,mn({startAt:{time:un(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wd(this,un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wd(this,un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return tr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),tr(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,c=fn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Cn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;ss(a,a===le&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(le._ts&&(pp(le,go(i,le)),dp=en.frame),en.frame>=kd){kd+=rn.autoSleep||120;var r=le._first;if((!r||!r._ts)&&rn.autoSleep&&en._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||en.sleep()}}},t}(Zs);mn(ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var aT=function(t,e,n,i,r,a,o){var c=new qe(this._pt,t,e,0,1,Hp,null,r),l=0,h=0,u,d,f,_,g,p,m,y;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Js(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(zc)||[];u=zc.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Wr(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},l=zc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(op.test(i)||m)&&(c.e=0),this._pt=c,c},Zl=function(t,e,n,i,r,a,o,c,l,h){de(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:de(u)?l?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=de(u)?l?uT:kp:th,_;if(Ee(i)&&(~i.indexOf("random(")&&(i=Js(i)),i.charAt(1)==="="&&(_=Wr(d,i)+(Ie(d)||0),(_||_===0)&&(i=_))),!h||d!==i||gl)return!isNaN(d*i)&&i!==""?(_=new qe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?fT:Vp,0,f),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Kl(e,i),aT.call(this,t,e,d,i,f,c||rn.stringFilter,l))},oT=function(t,e,n,i,r){if(de(t)&&(t=Hs(t,r,e,n,i)),!Un(t)||t.style&&t.nodeType||Ue(t)||sp(t))return Ee(t)?Hs(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Hs(t[o],r,e,n,i);return a},Fp=function(t,e,n,i,r,a){var o,c,l,h;if(Qe[t]&&(o=new Qe[t]).init(r,o.rawVars?e[t]:oT(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new qe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==zr))for(l=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Ei,gl,Ql=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Wl,T=t.timeline,R,w,b,P,M,S,I,B,L,X,G,Y,K;if(T&&(!d||!r)&&(r="none"),t._ease=er(r,is.ease),t._yEase=u?Ip(er(u===!0?r:u,is.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!T&&!!i.runBackwards,!T||d&&!i.stagger){if(B=p[0]?Qi(p[0]).harness:0,Y=B&&i[B.prop],R=mo(i,jl),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?to:OS),g._lazy=0),a){if(Ii(t._startAt=_e.set(p,mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&We(c),startAt:null,delay:0,onUpdate:l&&function(){return nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe||!o&&!f)&&t._startAt.revert(to),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),b=mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&We(c),immediateRender:o,stagger:0,parent:m},R),Y&&(b[B.prop]=Y),Ii(t._startAt=_e.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe?t._startAt.revert(to):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&We(c)||c&&!_,w=0;w<p.length;w++){if(M=p[w],I=M._gsap||$l(p)[w]._gsap,t._ptLookup[w]=X={},hl[I.id]&&Ci.length&&po(),G=y===p?w:y.indexOf(M),B&&(L=new B).init(M,Y||R,t,G,y)!==!1&&(t._pt=P=new qe(t._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(z){X[z]=P}),L.priority&&(S=1)),!B||Y)for(b in R)Qe[b]&&(L=Fp(b,R,t,G,M,y))?L.priority&&(S=1):X[b]=P=Zl.call(t,M,b,"get",R[b],G,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),x&&t._pt&&(Ei=t,le.killTweensOf(M,X,t.globalTime(e)),K=!t.parent,Ei=0),t._pt&&c&&(hl[I.id]=1)}S&&Gp(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,d&&e<=0&&T.render(fn,!0,!0)},cT=function(t,e,n,i,r,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return gl=1,t.vars[e]="+=0",Ql(t,o),gl=0,c?Ks(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=fe(n)+Ie(u.e)),u.b&&(u.b=h.s+Ie(u.b))},lT=function(t,e){var n=t[0]?Qi(t[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return e;r=sr({},e);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},hT=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Ue(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Hs=function(t,e,n,i,r){return de(t)?t.call(e,n,i,r):Ee(t)&&~t.indexOf("random(")?Js(t):t},Bp=Jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zp={};Xe(Bp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return zp[s]=1});var _e=function(s){ip(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ks(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,y=i.parent||le,x=(Ue(n)||sp(n)?ri(n[0]):"length"in i)?[n]:pn(n),T,R,w,b,P,M,S,I;if(o._targets=x.length?$l(x):Ks("GSAP target "+n+" not found. https://gsap.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||$a(l)||$a(h)){if(i=o.vars,T=o.timeline=new ke({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),T.kill(),T.parent=T._dp=$n(o),T._start=0,d||$a(l)||$a(h)){if(b=x.length,S=d&&Tp(d),Un(d))for(P in d)~Bp.indexOf(P)&&(I||(I={}),I[P]=d[P]);for(R=0;R<b;R++)w=mo(i,zp),w.stagger=0,m&&(w.yoyoEase=m),I&&sr(w,I),M=x[R],w.duration=+Hs(l,$n(o),R,M,x),w.delay=(+Hs(h,$n(o),R,M,x)||0)-o._delay,!d&&b===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),T.to(M,w,S?S(R,M,x):0),T._ease=Wt.none;T.duration()?l=h=0:o.timeline=0}else if(_){ks(mn(T.vars.defaults,{ease:"none"})),T._ease=er(_.ease||i.ease||"none");var B=0,L,X,G;if(Ue(_))_.forEach(function(Y){return T.to(x,Y,">")}),T.duration();else{w={};for(P in _)P==="ease"||P==="easeEach"||hT(P,_[P],w,_.easeEach);for(P in w)for(L=w[P].sort(function(Y,K){return Y.t-K.t}),B=0,R=0;R<L.length;R++)X=L[R],G={ease:X.e,duration:(X.t-(R?L[R-1].t:0))/100*l},G[P]=X.v,T.to(x,G,B),B+=G.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return f===!0&&!Wl&&(Ei=$n(o),le.killTweensOf(x),Ei=0),Cn(y,$n(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!_&&o._start===Se(y._time)&&We(u)&&VS($n(o))&&y.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-h)||0)),p&&vp($n(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ne&&!h?c:i<ne?0:i,d,f,_,g,p,m,y,x,T;if(!l)GS(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=Se(u%g),u===c?(_=this._repeat,d=l):(_=~~(u/g),_&&_===Se(u/g)&&(d=l,_--),d>l&&(d=l)),m=this._yoyo&&_&1,m&&(T=this._yEase,d=l-d),p=rs(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(x&&this._yEase&&Np(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Se(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(yp(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(T||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!o&&!r&&!_&&(nn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ul(this,i,r,a),nn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ul(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ii(this,1),!r&&!(h&&!o)&&(u||o||m)&&(nn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,c){$s||en.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ql(this,l),h=this._ease(l/this._dur),cT(this,i,r,a,o,h,l,c)?this.resetTo(i,r,a,o,1):(Po(this,0),this.parent||_p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ei&&Ei.vars.overwrite!==!0)._first||Os(this),this.parent&&a!==this.timeline.totalDuration()&&ss(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?pn(i):o,l=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!r||r==="all")&&zS(o,c))return r==="all"&&(this._pt=0),Os(this);for(u=this._op=this._op||[],r!=="all"&&(Ee(r)&&(g={},Xe(r,function(y){return g[y]=1}),r=g),r=lT(o,r)),m=o.length;m--;)if(~c.indexOf(o[m])){d=l[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ro(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Os(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Vs(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Vs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return le.killTweensOf(i,r,a)},t}(Zs);mn(_e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(s){_e[s]=function(){var t=new ke,e=fl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var th=function(t,e,n){return t[e]=n},kp=function(t,e,n){return t[e](n)},uT=function(t,e,n,i){return t[e](i.fp,n)},dT=function(t,e,n){return t.setAttribute(e,n)},eh=function(t,e){return de(t[e])?kp:Xl(t[e])&&t.setAttribute?dT:th},Vp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pT=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},mT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ro(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Gp=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},qe=function(){function s(e,n,i,r,a,o,c,l,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Vp,this.d=c||this,this.set=l||th,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gT,this.m=n,this.mt=r,this.tween=i},s}();Xe(Jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return jl[s]=1});sn.TweenMax=sn.TweenLite=_e;sn.TimelineLite=sn.TimelineMax=ke;le=new ke({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Dp;var nr=[],no={},_T=[],qd=0,xT=0,Wc=function(t){return(no[t]||_T).map(function(e){return e()})},_l=function(){var t=Date.now(),e=[];t-qd>2&&(Wc("matchMediaInit"),nr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=En.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Wc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qd=t,Wc("matchMedia"))},Wp=function(){function s(e,n){this.selector=n&&pl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xT++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){de(n)&&(r=i,i=n,n=de);var a=this,o=function(){var l=oe,h=a.selector,u;return l&&l!==a&&l.data.push(a),r&&(a.selector=pl(r)),oe=a,u=i.apply(a,arguments),de(u)&&a._r.push(u),oe=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===de?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof _e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof ke?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof _e)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=nr.length;a--;)nr[a].id===this.id&&nr.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),vT=function(){function s(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Un(n)||(n={matches:n});var a=new Wp(0,r||this.scope),o=a.conditions={},c,l,h;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=En.matchMedia(n[l]),c&&(nr.indexOf(a)<0&&nr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(_l):c.addEventListener("change",_l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),_o={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Cp(i)})},timeline:function(t){return new ke(t)},getTweensOf:function(t,e){return le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ee(t)&&(t=pn(t)[0]);var r=Qi(t||{}).get,a=n?gp:mp;return n==="native"&&(n=""),t&&(e?a((Qe[e]&&Qe[e].get||r)(t,e,n,i)):function(o,c,l){return a((Qe[o]&&Qe[o].get||r)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=pn(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=Qe[e],o=Qi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;zr._pt=0,u.init(t,n?h+n:h,zr,0,[t]),u.render(1,u),zr._pt&&nh(1,zr)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ke.to(t,sr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,h){return r.resetTo(e,c,l,h)};return a.tween=r,a},isTweening:function(t){return le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=er(t.ease,is.ease)),Vd(is,t||{})},config:function(t){return Vd(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qe[o]&&!sn[o]&&Ks(e+" effect requires "+o+" plugin.")}),kc[e]=function(o,c,l){return n(pn(o),mn(c||{},r),l)},a&&(ke.prototype[e]=function(o,c,l){return this.add(kc[e](o,Un(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=er(e)},parseEase:function(t,e){return arguments.length?er(t,e):Wt},getById:function(t){return le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ke(t),i,r;for(n.smoothChildTiming=We(t.smoothChildTiming),le.remove(n),n._dp=0,n._time=n._tTime=le._time,i=le._first;i;)r=i._next,(e||!(!i._dur&&i instanceof _e&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=r;return Cn(le,n,0),n},context:function(t,e){return t?new Wp(t,e):oe},matchMedia:function(t){return new vT(t)},matchMediaRefresh:function(){return nr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_l()},addEventListener:function(t,e){var n=no[t]||(no[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=no[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:$S,wrapYoyo:ZS,distribute:Tp,random:bp,snap:Ep,normalize:JS,getUnit:Ie,clamp:qS,splitColor:Pp,toArray:pn,selector:pl,mapRange:wp,pipe:KS,unitize:jS,interpolate:QS,shuffle:Sp},install:hp,effects:kc,ticker:en,updateRoot:ke.updateRoot,plugins:Qe,globalTimeline:le,core:{PropTween:qe,globals:up,Tween:_e,Timeline:ke,Animation:Zs,getCache:Qi,_removeLinkedListItem:Ro,reverting:function(){return Oe},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Wl=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _o[s]=_e[s]});en.add(ke.updateRoot);zr=_o.to({},{duration:0});var yT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},MT=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=yT(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Xc=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(Ee(r)&&(c={},Xe(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}MT(o,r)}}}},Ke=_o.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Oe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xc("roundProps",ml),Xc("modifiers"),Xc("snap",Ep))||_o;_e.version=ke.version=Ke.version="3.12.5";lp=1;ql()&&as();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yd,bi,Xr,ih,Zi,Kd,rh,ST=function(){return typeof window<"u"},si={},Yi=180/Math.PI,qr=Math.PI/180,Ur=Math.atan2,jd=1e8,sh=/([A-Z])/g,TT=/(left|right|width|margin|padding|x)/i,ET=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},AT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},wT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},RT=function(t,e,n){return t.style[e]=n},CT=function(t,e,n){return t.style.setProperty(e,n)},PT=function(t,e,n){return t._gsap[e]=n},LT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},DT=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},IT=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},he="transform",Ye=he+"Origin",NT=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in si&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Zn(i,o)}):this.tfm[t]=a.x?a[t]:Zn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Ln.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(he)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=he}(r||e)&&this.props.push(t,e,r[t])},Yp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(sh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=rh(),(!r||!r.isStart)&&!n[he]&&(Yp(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kp=function(t,e){var n={target:t,props:[],revert:OT,save:NT};return t._gsap||Ke.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},jp,vl=function(t,e){var n=bi.createElementNS?bi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):bi.createElement(t);return n&&n.style?n:bi.createElement(t)},In=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,os(e)||e,1)||""},Jd="O,Moz,ms,Ms,Webkit".split(","),os=function(t,e,n){var i=e||Zi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Jd[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Jd[a]:"")+t},yl=function(){ST()&&window.document&&(Yd=window,bi=Yd.document,Xr=bi.documentElement,Zi=vl("div")||{style:{}},vl("div"),he=os(he),Ye=he+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jp=!!os("perspective"),rh=Ke.core.reverting,ih=1)},qc=function s(t){var e=vl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Xr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Xr.removeChild(e),this.style.cssText=r,a},$d=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Jp=function(t){var e;try{e=t.getBBox()}catch{e=qc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===qc||(e=qc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+$d(t,["x","cx","x1"])||0,y:+$d(t,["y","cy","y1"])||0,width:0,height:0}:e},$p=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Jp(t))},ar=function(t,e){if(e){var n=t.style,i;e in si&&e!==Ye&&(e=he),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(sh,"-$1").toLowerCase())):n.removeAttribute(e)}},Ai=function(t,e,n,i,r,a){var o=new qe(t._pt,e,n,0,1,a?qp:Xp);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Zd={deg:1,rad:1,turn:1},UT={grid:1,flex:1},Ni=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Zi.style,c=TT.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,p,m;if(i===a||!r||Zd[i]||Zd[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&$p(t),(f||a==="%")&&(si[e]||~e.indexOf("adius")))return _=m?t.getBBox()[c?"width":"height"]:t[h],fe(f?r/_*u:r/100*_);if(o[c?"width":"height"]=u+(d?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===bi||!g.appendChild)&&(g=bi.body),p=g._gsap,p&&f&&p.width&&c&&p.time===en.time&&!p.uncache)return fe(r/p.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,_=t[h],y?t.style[e]=y:ar(t,e)}else(f||a==="%")&&!UT[In(g,"display")]&&(o.position=In(t,"position")),g===t&&(o.position="static"),g.appendChild(Zi),_=Zi[h],g.removeChild(Zi),o.position="absolute";return c&&f&&(p=Qi(g),p.time=en.time,p.width=g[h]),fe(d?_*r/u:_&&r?u/_*r:0)},Zn=function(t,e,n,i){var r;return ih||yl(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),si[e]&&e!=="transform"?(r=ta(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vo(In(t,Ye))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=xo[e]&&xo[e](t,e,n)||In(t,e)||fp(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ni(t,e,r,n)+n:r},FT=function(t,e,n,i){if(!n||n==="none"){var r=os(e,t,1),a=r&&In(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,Hp),c=0,l=0,h,u,d,f,_,g,p,m,y,x,T,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=In(t,e)||i,g?t.style[e]=g:ar(t,e)),h=[n,i],Dp(h),n=h[0],i=h[1],d=n.match(Br)||[],R=i.match(Br)||[],R.length){for(;u=Br.exec(i);)p=u[0],y=i.substring(c,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[l++]||"")&&(f=parseFloat(g)||0,T=g.substr((f+"").length),p.charAt(1)==="="&&(p=Wr(f,p)+T),m=parseFloat(p),x=p.substr((m+"").length),c=Br.lastIndex-x.length,x||(x=x||rn.units[e]||T,c===i.length&&(i+=x,o.e+=x)),T!==x&&(f=Ni(t,e,g,x)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?qp:Xp;return op.test(i)&&(o.e=0),this._pt=o,o},Qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Qd[n]||n,e[1]=Qd[i]||i,e.join(" ")},zT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],si[o]&&(c=1,o=o==="transformOrigin"?Ye:he),ar(n,o);c&&(ar(n,he),a&&(a.svg&&n.removeAttribute("transform"),ta(n,1),a.uncache=1,Yp(i)))}},xo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,zT);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Qs=[1,0,0,1,0,0],Zp={},Qp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tf=function(t){var e=In(t,he);return Qp(e)?Qs:e.substr(7).match(ap).map(fe)},ah=function(t,e){var n=t._gsap||Qi(t),i=t.style,r=tf(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Qs:r):(r===Qs&&!t.offsetParent&&t!==Xr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,o=t.nextElementSibling,Xr.appendChild(t)),r=tf(t),c?i.display=c:ar(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Xr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ml=function(t,e,n,i,r,a){var o=t._gsap,c=r||ah(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=c[0],_=c[1],g=c[2],p=c[3],m=c[4],y=c[5],x=e.split(" "),T=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,b,P,M;n?c!==Qs&&(b=f*p-_*g)&&(P=T*(p/b)+R*(-g/b)+(g*y-p*m)/b,M=T*(-_/b)+R*(f/b)-(f*y-_*m)/b,T=P,R=M):(w=Jp(t),T=w.x+(~x[0].indexOf("%")?T/100*w.width:T),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(m=T-l,y=R-h,o.xOffset=u+(m*f+y*g)-m,o.yOffset=d+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(Ai(a,o,"xOrigin",l,T),Ai(a,o,"yOrigin",h,R),Ai(a,o,"xOffset",u,o.xOffset),Ai(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+R)},ta=function(t,e){var n=t._gsap||new Up(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=In(t,Ye)||"0",h,u,d,f,_,g,p,m,y,x,T,R,w,b,P,M,S,I,B,L,X,G,Y,K,z,Q,$,ht,St,Xt,q,et;return h=u=d=g=p=m=y=x=T=0,f=_=1,n.svg=!!(t.getCTM&&$p(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[he]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[he]!=="none"?c[he]:"")),i.scale=i.rotate=i.translate="none"),b=ah(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),l=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Ml(t,K||l,!!K||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==Qs&&(I=b[0],B=b[1],L=b[2],X=b[3],h=G=b[4],u=Y=b[5],b.length===6?(f=Math.sqrt(I*I+B*B),_=Math.sqrt(X*X+L*L),g=I||B?Ur(B,I)*Yi:0,y=L||X?Ur(L,X)*Yi+g:0,y&&(_*=Math.abs(Math.cos(y*qr))),n.svg&&(h-=R-(R*I+w*L),u-=w-(R*B+w*X))):(et=b[6],Xt=b[7],$=b[8],ht=b[9],St=b[10],q=b[11],h=b[12],u=b[13],d=b[14],P=Ur(et,St),p=P*Yi,P&&(M=Math.cos(-P),S=Math.sin(-P),K=G*M+$*S,z=Y*M+ht*S,Q=et*M+St*S,$=G*-S+$*M,ht=Y*-S+ht*M,St=et*-S+St*M,q=Xt*-S+q*M,G=K,Y=z,et=Q),P=Ur(-L,St),m=P*Yi,P&&(M=Math.cos(-P),S=Math.sin(-P),K=I*M-$*S,z=B*M-ht*S,Q=L*M-St*S,q=X*S+q*M,I=K,B=z,L=Q),P=Ur(B,I),g=P*Yi,P&&(M=Math.cos(P),S=Math.sin(P),K=I*M+B*S,z=G*M+Y*S,B=B*M-I*S,Y=Y*M-G*S,I=K,G=z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=fe(Math.sqrt(I*I+B*B+L*L)),_=fe(Math.sqrt(Y*Y+et*et)),P=Ur(G,Y),y=Math.abs(P)>2e-4?P*Yi:0,T=q?1/(q<0?-q:q):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qp(In(t,he)),K&&t.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=fe(f),n.scaleY=fe(_),n.rotation=fe(g)+o,n.rotationX=fe(p)+o,n.rotationY=fe(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=vo(l)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?VT:jp?tm:kT,n.uncache=0,n},vo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yc=function(t,e,n){var i=Ie(e);return fe(parseFloat(e)+parseFloat(Ni(t,"x",n+"px",i)))+i},kT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tm(t,e)},Wi="0deg",Ds="0px",Xi=") ",tm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,T="",R=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==Wi||h!==Wi)){var w=parseFloat(h)*qr,b=Math.sin(w),P=Math.cos(w),M;w=parseFloat(u)*qr,M=Math.cos(w),a=Yc(y,a,b*M*-x),o=Yc(y,o,-Math.sin(w)*-x),c=Yc(y,c,P*M*-x+x)}p!==Ds&&(T+="perspective("+p+Xi),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(R||a!==Ds||o!==Ds||c!==Ds)&&(T+=c!==Ds||R?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Xi),l!==Wi&&(T+="rotate("+l+Xi),h!==Wi&&(T+="rotateY("+h+Xi),u!==Wi&&(T+="rotateX("+u+Xi),(d!==Wi||f!==Wi)&&(T+="skew("+d+", "+f+Xi),(_!==1||g!==1)&&(T+="scale("+_+", "+g+Xi),y.style[he]=T||"translate(0, 0)"},VT=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),T=parseFloat(o),R,w,b,P,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=qr,l*=qr,R=Math.cos(c)*u,w=Math.sin(c)*u,b=Math.sin(c-l)*-d,P=Math.cos(c-l)*d,l&&(h*=qr,M=Math.tan(l-h),M=Math.sqrt(1+M*M),b*=M,P*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=fe(R),w=fe(w),b=fe(b),P=fe(P)):(R=u,P=d,w=b=0),(x&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(x=Ni(f,"x",a,"px"),T=Ni(f,"y",o,"px")),(_||g||p||m)&&(x=fe(x+_-(_*R+g*b)+p),T=fe(T+g-(_*w+g*P)+m)),(i||r)&&(M=f.getBBox(),x=fe(x+i/100*M.width),T=fe(T+r/100*M.height)),M="matrix("+R+","+w+","+b+","+P+","+x+","+T+")",f.setAttribute("transform",M),y&&(f.style[he]=M)},HT=function(t,e,n,i,r){var a=360,o=Ee(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Yi:1),l=c-i,h=i+l+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*jd)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*jd)%a-~~(l/a)*a)),t._pt=d=new qe(t._pt,e,n,i,l,bT),d.e=h,d.u="deg",t._props.push(n),d},ef=function(t,e){for(var n in e)t[n]=e[n];return t},GT=function(t,e,n){var i=ef({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[he]=e,o=ta(n,1),ar(n,he),n.setAttribute("transform",l)):(l=getComputedStyle(n)[he],a[he]=e,o=ta(n,1),a[he]=l);for(c in si)l=i[c],h=o[c],l!==h&&r.indexOf(c)<0&&(f=Ie(l),_=Ie(h),u=f!==_?Ni(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new qe(t._pt,o,c,u,d-u,xl),t._pt.u=_||0,t._props.push(c));ef(o,i)};Xe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});xo[t>1?"border"+s:s]=function(o,c,l,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Zn(o,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(c,f,u)}});var em={name:"css",register:yl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,c=n.vars.startAt,l,h,u,d,f,_,g,p,m,y,x,T,R,w,b,P;ih||yl(),this.styles=this.styles||Kp(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Qe[g]&&Fp(g,e,n,i,t,r)))){if(f=typeof h,_=xo[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Js(h)),_)_(this,t,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Pi.lastIndex=0,Pi.test(l)||(p=Ie(l),m=Ie(h)),m?p!==m&&(l=Ni(t,g,l,m)+m):p&&(h+=p),this.add(o,"setProperty",l,h,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],Ee(l)&&~l.indexOf("random(")&&(l=Js(l)),Ie(l+"")||l==="auto"||(l+=rn.units[g]||Ie(Zn(t,g))||""),(l+"").charAt(1)==="="&&(l=Zn(t,g))):l=Zn(t,g),d=parseFloat(l),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Ln&&(g==="autoAlpha"&&(d===1&&Zn(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,o.visibility),Ai(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Ln[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in si,x){if(this.styles.save(g),T||(R=t._gsap,R.renderTransform&&!e.parseTransform||ta(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,T=this._pt=new qe(this._pt,o,he,0,1,R.renderTransform,R,0,-1),T.dep=1),g==="scale")this._pt=new qe(this._pt,R,"scaleY",R.scaleY,(y?Wr(R.scaleY,y+u):u)-R.scaleY||0,xl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Ye,0,o[Ye]),h=BT(h),R.svg?Ml(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==R.zOrigin&&Ai(this,R,"zOrigin",R.zOrigin,m),Ai(this,o,g,vo(l),vo(h)));continue}else if(g==="svgOrigin"){Ml(t,h,1,w,0,this);continue}else if(g in Zp){HT(this,R,g,d,y?Wr(d,y+h):h);continue}else if(g==="smoothOrigin"){Ai(this,R,"smooth",R.smooth,h);continue}else if(g==="force3D"){R[g]=h;continue}else if(g==="transform"){GT(this,h,t);continue}}else g in o||(g=os(g)||g);if(x||(u||u===0)&&(d||d===0)&&!ET.test(h)&&g in o)p=(l+"").substr((d+"").length),u||(u=0),m=Ie(h)||(g in rn.units?rn.units[g]:p),p!==m&&(d=Ni(t,g,l,m)),this._pt=new qe(this._pt,x?R:o,g,d,(y?Wr(d,y+u):u)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?wT:xl),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=AT);else if(g in o)FT.call(this,t,g,l,y?y+h:h);else if(g in t)this.add(t,g,l||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){Kl(g,h);continue}x||(g in o?P.push(g,0,o[g]):P.push(g,1,l||t[g])),a.push(g)}}b&&Gp(this)},render:function(t,e){if(e.tween._time||!rh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Zn,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in si&&e!==Ye&&(t._gsap.x||Zn(t,"x"))?n&&Kd===n?e==="scale"?LT:PT:(Kd=n||{})&&(e==="scale"?DT:IT):t.style&&!Xl(t.style[e])?RT:~e.indexOf("-")?CT:eh(t,e)},core:{_removeProperty:ar,_getMatrix:ah}};Ke.utils.checkPrefix=os;Ke.core.getStyleSaver=Kp;(function(s,t,e,n){var i=Xe(s+","+t+","+e,function(r){si[r]=1});Xe(t,function(r){rn.units[r]="deg",Zp[r]=1}),Ln[i[13]]=s+","+t,Xe(n,function(r){var a=r.split(":");Ln[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){rn.units[s]="px"});Ke.registerPlugin(em);var Sl=Ke.registerPlugin(em)||Ke;Sl.core.Tween;class WT{constructor(t,e,n){this.scene=t,this.entityManager=e,this.sync=n,this.vehicleArray=[],this.colors=null,this.x=0}setGLTF(t,e,n){const i=new KM,r=new jf;r.weight=3.6;const a=new Jf;a.weight=.3;const o=new Qf;o.weight=.01;for(let c=0;c<t;c++){const l=e?n.modelName:this.random(),h=e?n.colors:this.randomColor();i.load(`/Glb/${l}`,u=>{this.colors=h;const d=u.scene;this.bespoke=CS(d),this.bespoke.matrixAutoUpdate=!1,this.bespoke.children[0].scale.set(.12,.12,.12),this.bespoke.children[0].rotation.z=10-Math.random()*20,this.bespoke.children[0].rotation.x=Math.PI,this.bespoke.children[0].position.y=8-Math.random()*8,this.bespoke.children[0].castShadow=!0,this.bespoke.traverse(_=>{_.isMesh===!0&&(_.castShadow=!0,_.receiveShadow=!0)}),this.scene.add(this.bespoke),this.bespoke.traverse(_=>{_.name==="change"&&_.children.forEach(g=>{g.material&&g.material.name=="change_color1"?g.material=new ni({color:this.colors[0]}):g.material&&g.material.name=="change_color2"?g.material=new ni({color:this.colors[1]}):g.material&&g.material.name=="change_color3"&&(g.material=new ni({color:this.colors[2]}))})}),this.vehicle=new Gl,this.vehicle.setRenderComponent(this.bespoke,this.sync),this.vehicle.maxSpeed=2.6,this.vehicle.boundingRadius=.3;const f=new Hl;f.weight=.5,this.vehicle.updateNeighborhood=!0,this.vehicle.neighborhoodRadius=10,this.vehicle.steering.add(r),this.vehicle.steering.add(a),this.vehicle.steering.add(o),this.vehicle.steering.add(f),e?(this.vehicle.position.x=0,this.vehicle.position.y=130,this.vehicle.position.z=1,this.vehicle.rotation.x=Math.PI*.5):(this.vehicle.position.x=80-Math.random()*160,this.vehicle.position.z=20-Math.random()*40,this.vehicle.rotation.fromEuler(0,2.3*Math.PI*Math.random()/3,0)),this.vehicleArray.push(this.vehicle),this.entityManager.add(this.vehicle),e&&setTimeout(()=>{this.animation()},3e3)})}}random(){return this.nameRandom=Math.floor(Math.random()*4)+1,this.modelName=`bespoke_${this.nameRandom}.glb`,this.modelName}randomColor(){const t=[["#d5ebe5","#E2F2EF","#81C8A9"],["#fffcf5","#D7C3A6","#6E7170"],["#fff","#E5E6FA","#bce3cc"],["#f2f1e9","#706e5e","#3e634d"],["#fff","#3c595c","#a1a882"],["#d0d1be","#d0d1be","#d0d1be"],["#ffffff","#ffffff","#f2e6f0"],["#ffffff","#f2e6f0","#f2e6f0"],["#ffffff","#d996c9","#f2e6f0"]],e=Math.floor(Math.random()*t.length);return t[e]}update(){if(this.x+=.02,this.bespoke)for(let t=0;t<this.vehicleArray.length;t++){let e=Math.cos(this.x+t);this.vehicleArray[t]._renderComponent.children[0].rotation.z=e/2,this.vehicleArray[t].position.x>190*.5?this.vehicleArray[t].position.x=this.vehicleArray[t].position.x*-1+.1:this.vehicleArray[t].position<-190*.5&&(this.vehicleArray[t].position.x=this.vehicleArray[t].position.x*-1-.1),this.vehicleArray[t].position.z>110*.5?this.vehicleArray[t].position.z=this.vehicleArray[t].position.z*-1+.1:this.vehicleArray[t].position.z<-110*.5&&(this.vehicleArray[t].position.z=this.vehicleArray[t].position.z*-1-.1)}}animation(){const t=this.vehicleArray[this.vehicleArray.length-1];Sl.to(t.rotation,{x:Math.PI*.5,y:0,z:0,duration:2,ease:"ease-in-out"}),Sl.to(t.position,{x:0,y:0,z:0,duration:2,ease:"ease-in-out"})}}const XT=firebase.firestore();XT.collection("data").onSnapshot(s=>{s.docChanges().forEach(t=>{t.type==="added"&&(console.log("New story: ",t.doc.data()),Tl.setGLTF(340,!1,t.doc.data())),t.type==="modified"&&(console.log("Modified story: ",t.doc.data()),Tl.setGLTF(1,!0,t.doc.data())),t.type==="removed"&&console.log("Removed story: ",t.doc.data())})});const nm=new XM,im=document.querySelector("canvas.webgl"),ur=new Hy;let qT=null,YT=null;const Tl=new WT(ur,nm,om,qT,YT),rm=new Xf,KT=new hM,sm=KT.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),Lo=new Ne(new hs(.5,.5,.5),new ni({metalness:.3,roughness:.4,envMap:sm,envMapIntensity:.5}));Lo.castShadow=!0;Lo.position.y=0;Lo.matrixAutoUpdate=!1;const am=new Gl;am.setRenderComponent(Lo,om);function om(s,t){t.matrix.copy(s.worldMatrix)}const jT=new Hl;am.steering.add(jT);const JT=new qM,dr=rm.load("/img/background.png");dr.rotation=Math.PI/2;dr.offset.x=-0;dr.offset.y=1;dr.wrapS=Jr;dr.wrapT=Jr;dr.repeat.x=.5;const Do=new Ne(new us(180,100),new ni({color:"#F0EBEF",metalness:0,roughness:1,envMap:sm,envMapIntensity:.5,map:dr}));Do.rotation.x=-Math.PI/2;Do.position.set(0,-5,0);Do.receiveShadow=!0;ur.add(Do);const $T=rm.load("/img/hand1.svg"),nf=s=>{const t=new Ne(new us(4,5.6),new ni({map:$T,transparent:!0}));return s==="right"?t.scale.x=1:s==="left"&&(t.scale.x=-1),t.rotation.x=-Math.PI/2,t.position.set(0,-10,0),t.name=s,t.visible=!1,t},ZT=[nf("left"),nf("right")];ZT.forEach(s=>{ur.add(s)});const QT=new gM(16777215,2.3);ur.add(QT);const gn=new qf(16777215,1.2,1e3);gn.castShadow=!0;gn.shadow.mapSize.set(2048,2048);gn.shadow.camera.far=30*4;gn.shadow.camera.left=-15*7;gn.shadow.camera.top=15*7;gn.shadow.camera.right=15*7;gn.shadow.camera.bottom=-15*7;gn.position.set(20,40,-20);gn.shadow.bias=-.001;gn.shadow.radius=3;gn.rotation.z=-Math.PI*.2;ur.add(gn);const An={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{An.width=window.innerWidth,An.height=window.innerHeight,cs.aspect=An.width/An.height,cs.updateProjectionMatrix(),or.setSize(An.width,An.height),or.setPixelRatio(Math.min(window.devicePixelRatio,2))});const cs=new ze(35,An.width/An.height,.1,1e3);cs.position.set(0,130,0);ur.add(cs);const tE=new CM(cs,im);tE.enabled=!1;const or=new Vy({canvas:im,antialias:!0});or.shadowMap.enabled=!0;or.shadowMap.type=bl;or.setSize(An.width,An.height);or.setPixelRatio(Math.min(window.devicePixelRatio,2));const eE=new xM;new Yf;new Yf;new D(0,130,0);new D(0,0,0);new D(0,0,0);const cm=()=>{const s=JT.update().getDelta();eE.getElapsedTime(),nm.update(s),or.render(ur,cs),Tl.update(),window.requestAnimationFrame(cm)};cm();
//# sourceMappingURL=index-BFD3arAX.js.map
