import{n as t,K as e,d as n,x as o,i as s,o as a,l as r,J as i}from"./vendor.e75a9f0e.js";import{s as p,T as c,t as l,q as m}from"./common.c8fc7f20.js";import"./libs.ec5fd20d.js";import"./components.a228e139.js";var u=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"template-contextmenu",class:{visible:t.visible},style:t.wrapperStyle,on:{pointerdown:function(e){return e.stopPropagation(),t.noop.apply(null,arguments)}}},[t.currentComponent?[e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("del")}}},[t._v("删除")]),t.current.lock?e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("unlock")}}},[t._v("取消锁定")]):e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("lock")}}},[t._v("锁定")]),e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("toTop")}}},[t._v("置于上层")]),e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("toBottom")}}},[t._v("置于下层")])]:e("a",{staticClass:"template-contextmenu-item",attrs:{href:"javascript:;"},on:{pointerdown:function(e){return t.command("toPaste")}}},[t._v("粘贴")])],2)},d=[];const v={del(){const t=new c(l.componentDel,{detail:this,target:"stage"});i.$emit(l.componentDel,t)},lock(){this.props.lock=!0},unlock(){this.props.lock=!1},toTop(){this.props.zIndex+=1},toBottom(){this.props.zIndex-=1},toPaste(){}};const f=t({name:"TemplateContextmenu",props:{scale:{type:Number,default:1}},setup(t){const i=e("stageInstance"),c=e(p),l=n(!1),u=o({x:0,y:0}),d=s((()=>c.currentComponent)),v=s((()=>d.value?d.value.props:null)),f=function(e){e.preventDefault();const n=t.scale/100,[o,s]=m({x:e.pageX,y:e.pageY,el:i.$el},n);u.x=o,u.y=s,l.value=!0},x=function(t){l.value=!1};return a((function(){i.$el.addEventListener("contextmenu",f),window.addEventListener("pointerdown",x)})),r((function(){i.$el.removeEventListener("contextmenu",f),window.removeEventListener("pointerdown",x)})),{visible:l,position:u,currentComponent:d,current:v}},computed:{wrapperStyle(){return{left:this.position.x+"px",top:this.position.y+"px"}}},methods:{command(t){v[t].apply(this.currentComponent),this.visible=!1}}},u,d,!1,null,null,null,null).exports;export{f as default};
//# sourceMappingURL=template-contextmenu.e4ff4188.js.map