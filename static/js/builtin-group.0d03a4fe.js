import{n as t,x as o}from"./vendor.e75a9f0e.js";import{m as e}from"./builtin-group.addbda75.js";import i from"./builtin-input.605cfe8a.js";import n from"./builtin-select.383299a6.js";import"./libs.ec5fd20d.js";import"./common.c8fc7f20.js";import"./components.a228e139.js";var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"builtin-group",style:t.groupStyle},t._l(t.children,(function(e){return o(e.name,t._b({key:e.id,ref:"builtinComponentRef",refInFor:!0,tag:"component",attrs:{mode:t.mode,children:e.children,group:""},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"component.value"}},"component",e.props,!1))})),1)},r=[];const l=t({name:"BuiltinGroup",mixins:[e],components:{BuiltinInput:i,BuiltinSelect:n},props:{top:{type:Boolean,default:!1},children:{type:Array,default:()=>[]}},setup:t=>({rect:o({w:t.size.w,h:t.size.h})}),computed:{groupStyle(){const t={width:this.rect.w+"px",height:this.rect.h+"px"};return this.top?t.position="reactive":(t.position="absolute",t.left=this.position.x+"px",t.top=this.position.y+"px"),t}},methods:{toHtml(){const t=Array.isArray(this.$refs.builtinComponentRef)?this.$refs.builtinComponentRef:[this.$refs.builtinComponentRef],o=this.$el.cloneNode();return o.style.position="absolute",o.style.left=this.position.x+"px",o.style.top=this.position.y+"px",t.forEach((function(t){o.append(t.toHtml())})),o}}},s,r,!1,null,null,null,null).exports;export{l as default};
//# sourceMappingURL=builtin-group.0d03a4fe.js.map
