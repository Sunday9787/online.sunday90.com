System.register(["./vendor-legacy.ddc66af0.js","./libs-legacy.774d107d.js"],(function(r,e){"use strict";var t;return{setters:[function(r){t=r.n},null],execute:function(){var e=document.createElement("style");e.textContent=".spec-item{background-color:var(--color-background-light);border:1px solid var(--color-background-light-gray-1);border-radius:4px;line-height:28px;text-align:center;transition-duration:.1s;transition-property:background-color,color,border-color;transition-timing-function:ease-in;width:60px}.spec-item--disabled{background-color:var(--color-background-light-gray-1);border-color:var(--color-background-light-gray-2);cursor:not-allowed}.spec-item--active{background-color:var(--color-primary);border-color:var(--color-primary);color:var(--color-text-regular-current)}\n",document.head.appendChild(e);var o={name:"SpecItem",inject:["rootGroup"],props:{label:{type:[Number,String],required:!0},disabled:{type:Boolean,default:!1}},computed:{active:function(){return this.rootGroup.current===this.label}},methods:{handle:function(){this.disabled&&!this.active||(this.rootGroup.current=this.active?"":this.label)}}};r("default",t(o,(function(){var r=this;return(0,r._self._c)("a",{staticClass:"spec-item",class:{"spec-item--active":r.active,"spec-item--disabled":!r.active&&r.disabled},on:{click:function(e){return r.handle()}}},[r._t("default")],2)}),[],!1,null,null,null,null).exports)}}}));
//# sourceMappingURL=spec-item-legacy.6fef92c4.js.map
