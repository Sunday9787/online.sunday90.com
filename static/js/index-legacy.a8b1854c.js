!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function n(t,n,o){return n=i(n),function(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,r()?Reflect.construct(n,o||[],i(t).constructor):n.apply(t,o))}function r(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(r=function(){return!!e})()}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],s=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function y(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}System.register(["./libs-legacy.774d107d.js","./vendor-legacy.ddc66af0.js"],(function(e,r){"use strict";var i,s,l,f,h,d,v,p,m,w,b,x,g,k,j;return{setters:[function(e){i=e.T,s=e.n,l=e.B,f=e.G,h=e.o,d=e.V,v=e.R,p=e.q,m=e.P,w=e.S,b=e.A,x=e.O,g=e.W,k=e.s},function(e){j=e.n}],execute:function(){var r=document.createElement("style");r.textContent=".three-container{height:100%}\n",document.head.appendChild(r);var C=[{y:0,x:0},{y:0,x:1},{y:0,x:2},{y:0,x:5},{y:0,x:6},{y:0,x:7},{y:0,x:8},{y:1,x:2},{y:1,x:8},{y:2,x:0},{y:2,x:1},{y:2,x:2},{y:2,x:3},{y:2,x:6},{y:2,x:7},{y:2,x:8},{y:2,x:10},{y:3,x:2},{y:3,x:3},{y:3,x:7},{y:3,x:10},{y:4,x:2},{y:4,x:3},{y:4,x:6},{y:4,x:7},{y:4,x:8},{y:4,x:9},{y:4,x:10},{y:4,x:11},{y:5,x:0},{y:5,x:1},{y:5,x:2},{y:5,x:3},{y:5,x:7},{y:5,x:10},{y:6,x:1},{y:6,x:4},{y:6,x:5},{y:6,x:6},{y:6,x:7},{y:6,x:9},{y:7,x:1},{y:7,x:5},{y:7,x:8},{y:7,x:9},{y:7,x:10},{y:7,x:11},{y:8,x:0},{y:8,x:1},{y:8,x:2},{y:8,x:3},{y:8,x:4},{y:8,x:5},{y:8,x:9}],O=new i,S=O.load("/static/img/block-d7f24ee6.jpg"),D=O.load("/static/img/block_active-99293ae4.jpg");function E(e,t){return"".concat(e,"-").concat(t)}function P(e){return e.split("-").map((function(e){return Number(e)}))}var R=function(e){function r(){var e;u(this,r);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return a(e=n(this,r,[].concat(i)),"tips",new Map([["21222324","赫拉利将告诉你人类是如何从动物变成上帝"],["40414243","对两次世界大战的哲学思考，直面存在的危机"],["81828384","看萧红写的这书名还以为是一条河的历史"],["9091","鲁迅先生的短篇小说集，里面有《狂人日记》"],["64656667","天下合久必分，分久必合"],["46474849","与达尔文《物种起源论》及哥白尼《天体运行论》并称为人类三大思想革命的经典之作"],["262728","三位艺术天才的非凡人生，罗曼罗兰著"],["5678","证明你上过中学的又一个有力佐证，冰心奶奶如是说"],["11121","我们都是故事外的人——阿尔贝·加缪"],["13233343","一种追求简单生活的价值观"],["415161718191","余华手下一本关于记忆的长篇小说"],["647484","走遍万水千山，泪尽撒哈拉"],["2737475767","达康书记别低头，皇冠会掉"],["81828","中国四大名著之一"]])),a(e,"units",[]),a(e,"emptyMaterial",new s({color:14922589,name:"emptyUnitMaterial"})),a(e,"material",new s({map:S,name:"unitMaterial"})),a(e,"activeMaterial",new s({map:D,name:"activeUnitMaterial"})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(r,e),y(r,[{key:"onPointDown",value:function(e){if(!e.userData.empty){this.resetCollection(this.units,e),e.userData.down=!e.userData.down;var t=e.userData.down,n=e.userData.selectRow;console.log("selectRow",n),console.log("down",t);var r=c(P(e.name),2),i=r[0],o=r[1],a=this.collectionUnit(i,o,!0),s=this.collectionUnit(i,o,!1);t&&n?this.renderColCollection(i,o,[a,s]):this.renderRowCollection(i,o,[a,s])}}},{key:"renderColCollection",value:function(e,n,r){var i=c(r,2),o=i[0],a=i[1],s=this.aroundUnit(e,n,a,!1);if(s.length<2)this.renderRowCollection(e,n,[o,a],!0);else{var l,u=t(s);try{for(u.s();!(l=u.n()).done;){var f=l.value;f.userData.selectRow=!1,f.material=this.activeMaterial}}catch(y){u.e(y)}finally{u.f()}}}},{key:"renderRowCollection",value:function(e,n,r){var i=c(r,2),o=i[0],a=i[1],s=this.aroundUnit(e,n,o,!0);if(s.length<2)return this.renderColCollection(e,n,[o,a],!1);var l,u=t(s);try{for(u.s();!(l=u.n()).done;){var f=l.value;f.userData.selectRow=!0,f.material=this.activeMaterial}}catch(y){u.e(y)}finally{u.f()}}},{key:"resetCollection",value:function(e,n){var r,i=e.filter((function(e){return!e.userData.empty})),o=t(i);try{for(o.s();!(r=o.n()).done;){var a=r.value;a.material=this.material,a.userData.down=!1}}catch(c){o.e(c)}finally{o.f()}}},{key:"collectionUnit",value:function(e,t,n){return this.units.filter((function(r){var i=c(P(r.name),2),o=i[0],a=i[1];return n?a===t:o===e}))}},{key:"aroundUnit",value:function(e,t,n,r){for(var i=[],o=n.length,a=r?e:t,c=a;c<o;c++){var s=n[c];if(s&&s.userData.empty)break;i.push(s)}for(var l=a-1;l>=0;l--){var u=n[l];if(u&&u.userData.empty)break;i.push(u)}return i}},{key:"initCanvas",value:function(){for(var e=new l(100,100,100),n=new f,r=c(this.grid,2),i=r[0],o=r[1],a=0;a<i;a++)for(var s=0;s<o;s++){var u,y=new h(e,this.emptyMaterial),d=t(this.map);try{for(d.s();!(u=d.n()).done;){var v=u.value;if(v.x===a&&v.y===s){y=new h(e,this.material);break}}}catch(m){d.e(m)}finally{d.f()}y.position.set(120*a,0,120*s),y.name=E(a,s),y.userData.down=!1,y.userData.selectRow=null,"emptyUnitMaterial"===y.material.name&&(y.userData.empty=!0),this.clickObjects.push(y),this.units.push(y),n.add(y)}var p=new f;p.add(n),n.position.set(-this.centerVector.x,0,-this.centerVector.z),p.position.set(this.centerVector.x,0,this.centerVector.z),this.scene.add(p)}}])}(function(){return y((function e(t,n,r){u(this,e),this.map=C,this.container=t,this.grid=[12,9],this.size=120,this.width=n,this.height=r,this.clickObjects=[],this.scene=null,this.camera=null,this.renderer=null,this.control=null;var i=c(this.grid,2),o=i[0],a=i[1];this.centerVector=new d(o*this.size/2,0,a*this.size/2)}),[{key:"row",get:function(){return this.grid[0]}},{key:"col",get:function(){return this.grid[1]}},{key:"init",value:function(){var e=this,t=new v,n=new p;this.initScene(),this.initCamera(),this.initLight(),this.initRenderer(),this.initHelper(),this.initControl(),this.initCanvas(),this.resize=function(){e.renderer.setSize(window.innerWidth,window.innerHeight),e.camera.aspect=window.innerWidth/window.innerHeight,e.control.update(),e.camera.updateProjectionMatrix()},this.pointerdown=function(r){r.preventDefault(),n.x=r.clientX/e.renderer.domElement.clientWidth*2-1,n.y=-r.clientY/e.renderer.domElement.clientHeight*2+1,t.setFromCamera(n,e.camera);var i=t.intersectObjects(e.clickObjects);i.length>0&&e.onPointDown(i[0].object)},this.container.addEventListener("pointerdown",this.pointerdown),window.addEventListener("resize",this.resize),window.dispatchEvent(new Event("resize"))}},{key:"initCamera",value:function(){this.camera=new m(30,this.width/this.height,.1,8e3),this.camera.position.set(800,800,800),this.camera.lookAt(this.centerVector)}},{key:"initScene",value:function(){this.scene=new w}},{key:"initHelper",value:function(){var e=new b(800);this.scene.add(e)}},{key:"initControl",value:function(){var e=this;this.control=new x(this.camera,this.renderer.domElement),this.control.target.set(this.centerVector.x,this.centerVector.y,this.centerVector.z),this.control.update(),this.change=function(){e.renderer.render(e.scene,e.camera)},this.control.addEventListener("change",this.change)}},{key:"initRenderer",value:function(){var e=this;this.renderer=new g({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(13887227,1),this.renderer.setAnimationLoop((function(){e.renderer.render(e.scene,e.camera)})),this.container.appendChild(this.renderer.domElement)}},{key:"initLight",value:function(){var e=new k(4095,1);e.position.set(400,0,0),this.scene.add(e)}},{key:"initCanvas",value:function(){}},{key:"onPointDown",value:function(){}},{key:"destroy",value:function(){window.removeEventListener("resize",this.resize),this.container.removeEventListener("pointerdown",this.pointerdown),this.control.removeEventListener("change",this.change),this.control.dispose(),this.gui.destroy(),this.renderer.dispose(),this.scene.clear()}}])}());e("default",j({name:"ThreeIndex",mounted:function(){var e=new R(this.$el,window.innerWidth,window.innerHeight);e.init(),this.$on("hook:beforeDestroy",(function(){e.destroy()}))}},(function(){return(0,this._self._c)("div",{staticClass:"three-container"})}),[],!1,null,null,null,null).exports)}}}))}();
//# sourceMappingURL=index-legacy.a8b1854c.js.map
