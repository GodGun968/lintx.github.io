!function(t){function e(e){for(var n,i,h=e[0],f=e[1],s=e[2],p=0,c=[];p<h.length;p++)i=h[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(t[n]=f[n]);for(u&&u(e);c.length;)c.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,h=1;h<r.length;h++){var f=r[h];0!==a[f]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={2:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var h=window.webpackJsonp=window.webpackJsonp||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var s=0;s<h.length;s++)e(h[s]);var u=f;o.push([321,0]),r()}({31:function(t,e,r){"use strict";function n(t){for(var e=[],r={r:255,g:255,b:255},n=0,o=t.length;n<o;n++)e.push({color:t[n],diff:a(r,t[n])});return e.sort((function(t,e){return t.diff-e.diff})),e[Math.floor((e.length-1)/2)].color}function a(t,e){return function(t,e){var r=t.L,n=t.a,a=t.b,h=e.L,f=e.a,s=e.b,u=Math.sqrt(Math.pow(n,2)+Math.pow(a,2)),p=Math.sqrt(Math.pow(f,2)+Math.pow(s,2)),c=(u+p)/2,l=.5*(1-Math.sqrt(Math.pow(c,7)/(Math.pow(c,7)+Math.pow(25,7)))),d=(1+l)*n,v=(1+l)*f,M=Math.sqrt(Math.pow(d,2)+Math.pow(a,2)),w=Math.sqrt(Math.pow(v,2)+Math.pow(s,2)),g=i(a,d),x=i(s,v),b=h-r,m=w-M,y=function(t,e,r,n){if(t*e==0)return 0;if(Math.abs(n-r)<=180)return n-r;if(n-r>180)return n-r-360;if(n-r<-180)return n-r+360;throw new Error}(u,p,g,x),O=2*Math.sqrt(M*w)*Math.sin(o(y)/2),j=(r+h)/2,q=(M+w)/2,D=function(t,e,r,n){if(t*e==0)return r+n;if(Math.abs(r-n)<=180)return(r+n)/2;if(Math.abs(r-n)>180&&r+n<360)return(r+n+360)/2;if(Math.abs(r-n)>180&&r+n>=360)return(r+n-360)/2;throw new Error}(u,p,g,x),P=1-.17*Math.cos(o(D-30))+.24*Math.cos(o(2*D))+.32*Math.cos(o(3*D+6))-.2*Math.cos(o(4*D-63)),I=30*Math.exp(-Math.pow((D-275)/25,2)),T=Math.sqrt(Math.pow(q,7)/(Math.pow(q,7)+Math.pow(25,7))),L=1+.015*Math.pow(j-50,2)/Math.sqrt(20+Math.pow(j-50,2)),$=1+.045*q,_=1+.015*q*P,R=-2*T*Math.sin(o(2*I));return Math.sqrt(Math.pow(b/(1*L),2)+Math.pow(m/(1*$),2)+Math.pow(O/(1*_),2)+R*(m/(1*$))*(O/(1*_)))}(t=h(t),e=h(e))}function o(t){return t*(Math.PI/180)}function i(t,e){if(0===t&&0===e)return 0;var r=Math.atan2(t,e)*(180/Math.PI);return r>=0?r:r+360}function h(t){return function(t){var e=t.Y/100,r=t.Z/108.883,n=t.X/95.047;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;r=r>.008856?Math.pow(r,1/3):7.787*r+16/116;return{L:116*e-16,a:500*(n-e),b:200*(e-r)}}(function(t){var e=(t=function(t){var e={R:t.R||t.r||0,G:t.G||t.g||0,B:t.B||t.b||0};void 0===t.a&&void 0===t.A||(e.A=t.A||t.a||0);return e}(t)).R/255,r=t.G/255,n=t.B/255;e>.04045?e=Math.pow((e+.055)/1.055,2.4):e/=12.92;r>.04045?r=Math.pow((r+.055)/1.055,2.4):r/=12.92;n>.04045?n=Math.pow((n+.055)/1.055,2.4):n/=12.92;return{X:.4124*(e*=100)+.3576*(r*=100)+.1805*(n*=100),Y:.2126*e+.7152*r+.0722*n,Z:.0193*e+.1192*r+.9505*n}}(t))}r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}))},321:function(t,e,r){"use strict";r.r(e);var n=r(18),a=r(66),o=r(25),i=r.n(o),h=(r(98),r(67),r(99),r(31));n.default.use(a.a),n.default.use(i.a);new n.default({el:"#app",data:function(){var t={version:"0.1"};return t},computed:{},methods:{calc:function(){if(this.point.x1+this.point.x2+this.point.x3===0)this.exp.curr=-1,this.exp.next=-1,this.exp.full=-1,this.exp.process="-";else if(0===this.point.x1&&1===this.point.x2&&1===this.point.x3)this.exp.curr=this.expData[9],this.exp.next=0,this.exp.full=0,this.exp.process="100%";else{var t=this.point.x3-this.point.x1,e=(this.point.x2-this.point.x1+1)/t;this.exp.process=Math.round(1e4*e)/100+"%";var r=Math.round(this.expData[this.level-1]*e);this.exp.curr=r,this.exp.next=this.expData[this.level-1]-r,this.exp.full=this.exp.next;for(var n=this.level;n<9;n++)this.exp.full+=this.expData[n]}},loadImg:function(t){var e=this,r=document.createElement("canvas"),n=r.getContext("2d"),a=new Image;a.onload=function(){e.$refs.canvas.getContext("2d").drawImage(a,0,0),r.width=a.width,r.height=a.height,n.drawImage(a,0,0);for(var t=n.getImageData(0,0,a.width,a.height),o=[],i={r:171,g:167,b:243},f=0,s={},u=0,p=t.width;u<p;u++){o[u]=[];for(var c=0,l=t.height;c<l;c++){var d=4*(c*p+u),v={r:t.data[d],g:t.data[d+1],b:t.data[d+2],a:t.data[d+3]};v.diff255=Object(h.a)({r:255,g:255,b:255},v),v.diffTarget=Object(h.a)(i,v),f+=v.diff255,o[u][c]=v,v.diffTarget<5&&(s[c]=s[c]||{},s[c][u]=v)}}console.log(s);for(var M=f/t.width/t.height,w={diff:999},g=0;g<t.width;g++)for(var x=0;x<t.height;x++){var b=o[g][x],m=Math.abs(b.diff255-M);m<w.diff&&(w.diff=m,w.point=b)}console.log(w),console.log(M),console.log(o);for(var y=0;y<t.height;y++){for(var O=0,j=-1,q=0;q<t.width;q++){var D=o[q][y];(O=Math.max(D.diffTarget,O))===D.diffTarget&&(j=q)}console.log(j,y,O)}},a.src=URL.createObjectURL(t)}},mounted:function(){var t=this;this.$refs.canvas.ondragleave=function(t){t.preventDefault()},this.$refs.canvas.ondrop=function(e){e.preventDefault();var r=e.dataTransfer.files;if(!(r.length<1)){var n=r[0],a=n.name.toLocaleLowerCase();-1!==a.indexOf("png")||-1!==a.indexOf("bmp")?t.loadImg(n):t.$bvToast.toast("只能识别png图片和bmp图片",{title:"错误",variant:"danger",solid:!0})}},this.$refs.canvas.ondragenter=function(t){t.preventDefault()},this.$refs.canvas.ondragover=function(t){t.preventDefault()}}})},67:function(t,e,r){}});