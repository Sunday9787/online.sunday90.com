import{J as e,o as t,l as n,x as o,n as i,e as a,g as l,K as s,t as r,d as p,_ as c,w as m,i as u,L as d,M as f}from"./vendor.e75a9f0e.js";import{u as b,a as h,b as g}from"./shared/reportTemplate/template.6425c919.js";import{c as y,l as v}from"./libs.ec5fd20d.js";import{t as C,T as $,d as _,r as x,e as z,i as w,j as k,l as E,m as S,s as T,n as R,q as D,v as M,w as A,x as L}from"./common.c8fc7f20.js";import"./components.a228e139.js";function H(e){if(this.restore.push(y(e)),this.record.length){const e=this.record[this.record.length-1].component;if(this.components.has(e.uid)){const t=y(e);t.id=_(e.uid),this.components.set(t.uid,t),this.componentsData=Array.from(this.components.values()),console.log("撤销更改","uid",t.uid,"新id",t.id,"旧id",e.id)}}}function P(e){const t=e.component;if(this.components.has(t.uid)){const e=y(t);e.id=_(t.uid),this.components.set(e.uid,e),this.componentsData=Array.from(this.components.values()),console.log("恢复更改","uid",e.uid,"新id",e.id,"旧id",t.id)}}const O={componentAdd:{undo(t){this.restore.push(t),e.$emit(C.componentDel,new $(C.componentDel,{detail:t.component,target:"stage"}),!1)},restore(t){e.$emit(C.componentAdd,new $(C.componentAdd,{detail:t.component,target:"stage"}),!1)}},componentDel:{undo(t){this.restore.push(t),e.$emit(C.componentAdd,new $(C.componentAdd,{detail:t.component,target:"stage"}),!1)},restore(t){e.$emit(C.componentDel,new $(C.componentDel,{detail:t.component,target:"stage"}),!1)}},componentGeneral:{undo(e){H.apply(this,[e])},restore(e){P.apply(this,[e])}}};function j(e,t){switch(t.type){case"component:add":O.componentAdd[e].apply(this,[t]);break;case"component:del":O.componentDel[e].apply(this,[t]);break;case"component:move:end":case"component:resize:end":case"component:font:change":O.componentGeneral[e].apply(this,[t])}}function F(e,t=null,n=!0){if(t){const o=function(e,t){const n=Object.create(null);return n.type=e,n.component=y(t),n}(e,t);return console.group("record"),console.info("事件",z[e]),console.info("组件id",t.id),console.info("组件uid",t.uid),console.info("组件props",t.props),console.info("时间戳",v().format("yyyy-MM-DD HH:mm:ss")),console.groupEnd(),void(n&&this.record.length<=20&&this.record.push(o))}console.group("record"),console.info("事件",z[e]),console.info("时间戳",v().format("yyyy-MM-DD HH:mm:ss")),console.groupEnd()}function I(e,t){return t.forEach((function(t,n){t.id=e+"-"+n})),t}const B=I("basicBuiltinComponent",[{id:"",label:"病例名称",create(){return w({props:{label:this.label}})}},{id:"",label:"产前编号",create(){return w({props:{label:this.label}})}},{id:"",label:"姓名",create(){return w({props:{label:this.label}})}},{id:"",label:"姓名组",create(){return k({builtin:!0,props:{label:this.label,position:E(0,20)}},[w({props:{label:"姓名1"}}),w({props:{label:"姓名2",position:E(20,20)}})])}}]),U=I("resultsAnalysisBuiltinComponent",[{id:"",label:"核型表达式",create(){return w({props:{label:this.label}})}},{id:"",label:"排列图",create(){return w({props:{label:this.label}})}},{id:"",label:"中期分裂图",create(){return w({props:{label:this.label}})}},{id:"",label:"所有细胞数",create(){return w({props:{label:this.label}})}},{id:"",label:"计数细胞数",create(){return w({props:{label:this.label}})}},{id:"",label:"排列细胞数",create(){return w({props:{label:this.label}})}}]),q=I("otherBuiltinComponent",[{id:"",label:"机构名称",create(){return w({props:{label:this.label}})}},{id:"",label:"样本类型",create(){return w({props:{label:this.label}})}},{id:"",label:"采集日期",create(){return w({props:{label:this.label}})}},{id:"",label:"接收日期",create(){return w({props:{label:this.label}})}},{id:"",label:"检查方法",create(){return w({props:{label:this.label}})}},{id:"",label:"报告日期",create(){return w({props:{label:this.label}})}},{id:"",label:"审核日期",create(){return w({props:{label:this.label}})}},{id:"",label:"接收医师",create(){return w({props:{label:this.label}})}},{id:"",label:"审核医师",create(){return w({props:{label:this.label}})}}]),K=I("customBuiltinComponent",[{id:"",label:"输入框",create(){return w({props:{label:this.label}})}},{id:"",label:"下拉框",create(){return w({props:{label:this.label}})}},{id:"",label:"日期",create(){return w({props:{label:this.label}})}},{id:"",label:"电子签名",create(){return w({props:{label:this.label}})}},{id:"",label:"文本域",create(){return w({props:{label:this.label}})}},{id:"",label:"图片",create(){return w({props:{label:this.label}})}},{id:"",label:"矩形",create(){return w({props:{label:this.label}})}},{id:"",label:"矩形1",create(){return w({props:{label:this.label,size:S({w:120,h:60})}})}},{id:"",label:"矩形2",create(){return w({props:{label:this.label,size:S({w:60,h:120})}})}},{id:"",label:"横线",create(){return w({props:{label:this.label}})}},{id:"",label:"竖线",create(){return w({props:{label:this.label}})}},{id:"",label:"筛选项",create(){return w({name:"builtin-select",props:{label:this.label}})}}]),V=new Map(Array.prototype.concat.apply([],[B,U,q,K]).map((e=>[e.id,e]))),Y=[B,q,K];var G=function(){var e=this,t=e._self._c;return t("aside",{staticClass:"template-aside"},e._l(e.builtinComponent,(function(n,o){return t("section",{key:o,staticClass:"template-aside-container"},[t("h1",{staticClass:"template-aside-title"},[e._v(e._s(n.label)+"：")]),t("ol",{staticClass:"template-component-group"},e._l(n.items,(function(n){return t("li",{key:n.id,staticClass:"template-component-item",class:{used:n.used},attrs:{draggable:!n.used},on:{dragstart:function(t){return e.dragstartHandle(t,n)},dragend:function(t){return e.dragendHandle(t)},drag:function(t){return e.dragHandle(t)}}},[e._v(e._s(n.label))])})),0)])})),0)},N=[];const X=i({name:"TemplateAside",setup(){const{builtinComponent:i}=function(){const i=[{label:"基本控件",items:[]},{label:"其他控件",items:[]},{label:"自定义控件",items:[]}],a=new Map;Y.forEach(((e,t)=>{for(const n of e){const e=o({label:n.label,id:n.id,used:!1,offset:{x:0,y:0}});a.set(n.id,e),i[t].items.push(e)}}));const l=function(e){i.forEach((function(e){e.items.forEach((function(e){e.used=!1}))}))},s=function(e){const t=a.get(e.detail.shapeId);t&&(t.used=!0)},r=function(e){const t=a.get(e.detail.shapeId);t&&(t.used=!0)};return t((function(){e.$on(C.componentAdd,s),e.$on(C.componentDel,r),e.$on(C.stageClear,l)})),n((function(){e.$off(C.componentAdd,s),e.$off(C.componentDel,r),e.$off(C.stageClear,l)})),{builtinComponent:i}}();return{builtinComponent:i}},methods:{dragHandle(e){console.log("正在拖拉")},dragstartHandle(e,t){console.log("开始拖拽");const n=e.target.getBoundingClientRect();t.offset.x=e.pageX-n.left,t.offset.y=e.pageY-n.top,e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/json",JSON.stringify(t))},dragendHandle(e){console.log("结束拖拽"),e.dataTransfer.clearData()}}},G,N,!1,null,null,null,null).exports;var W=function(){var e=this,t=e._self._c;return t("header",{staticClass:"template-toolbar"},[t("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-arrow-left"},on:{click:function(t){return e.goBack()}}},[e._v("返回")]),t("div",{staticClass:"flex1"}),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.undo()}}},[t("i",{staticClass:"el-icon-back"}),e._v(" 撤销")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.restore()}}},[e._v("恢复 "),t("i",{staticClass:"el-icon-right"})]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.stageClear()}}},[e._v("清空画布")]),t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("导入模板")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.action(e.actionType.open)}}},[e._v("模板属性")]),t("el-dialog",{attrs:{visible:e.dialog.visible,"close-on-click-modal":!1,"append-to-body":"",title:"模板属性",width:"500px"},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)},closed:function(t){return e.resetForm("formRef")}},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.action(e.actionType.submit)}}},[t("el-form",{ref:"formRef",attrs:{model:e.form,action:"javascript:;",size:"medium","label-suffix":"：","label-width":"100px"}},[t("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[t("el-input",{ref:"templateName",model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"尺寸",prop:"size"}},[t("el-radio-group",{model:{value:e.form.size,callback:function(t){e.$set(e.form,"size",t)},expression:"form.size"}},[t("el-radio",{attrs:{label:e.size.A4.name}},[e._v("A4")]),t("el-radio",{attrs:{label:e.size.A5.name}},[e._v("A5")])],1)],1),t("el-form-item",{attrs:{label:"方向",prop:"direction"}},[t("el-radio-group",{model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},[t("el-radio",{attrs:{label:"vertical"}},[e._v("纵向")]),t("el-radio",{attrs:{label:"horizontal"}},[e._v("横向")])],1)],1),t("el-form-item",{attrs:{label:"页面边距",prop:"padding"}},[t("ol",{staticClass:"template-toolbar-padding"},[t("li",{staticClass:"template-toolbar-padding-item"},[t("label",{attrs:{for:"padding-top"}},[e._v("上：")]),t("el-row",{staticClass:"template-toolbar-padding__inner",attrs:{type:"flex",align:"middle"}},[t("el-input-number",{staticClass:"flex1",attrs:{id:"padding-top",size:"small",min:0,max:40,precision:1,step:1,controls:!1},model:{value:e.form.padding.top,callback:function(t){e.$set(e.form.padding,"top",t)},expression:"form.padding.top"}}),t("span",[e._v("毫米")])],1)],1),t("li",{staticClass:"template-toolbar-padding-item"},[t("label",{attrs:{for:"padding-bottom"}},[e._v("下：")]),t("el-row",{staticClass:"template-toolbar-padding__inner",attrs:{type:"flex",align:"middle"}},[t("el-input-number",{staticClass:"flex1",attrs:{id:"padding-bottom",size:"small",min:0,max:40,precision:1,step:1,controls:!1},model:{value:e.form.padding.bottom,callback:function(t){e.$set(e.form.padding,"bottom",t)},expression:"form.padding.bottom"}}),t("span",[e._v("毫米")])],1)],1),t("li",{staticClass:"template-toolbar-padding-item"},[t("label",{attrs:{for:"padding-left"}},[e._v("左：")]),t("el-row",{staticClass:"template-toolbar-padding__inner",attrs:{type:"flex",align:"middle"}},[t("el-input-number",{staticClass:"flex1",attrs:{id:"padding-left",size:"small",min:0,max:40,precision:1,step:1,controls:!1},model:{value:e.form.padding.left,callback:function(t){e.$set(e.form.padding,"left",t)},expression:"form.padding.left"}}),t("span",[e._v("毫米")])],1)],1),t("li",{staticClass:"template-toolbar-padding-item"},[t("label",{attrs:{for:"padding-right"}},[e._v("右：")]),t("el-row",{staticClass:"template-toolbar-padding__inner",attrs:{type:"flex",align:"middle"}},[t("el-input-number",{staticClass:"flex1",attrs:{id:"padding-right",size:"small",min:0,max:40,precision:1,step:1,controls:!1},model:{value:e.form.padding.right,callback:function(t){e.$set(e.form.padding,"right",t)},expression:"form.padding.right"}}),t("span",[e._v("毫米")])],1)],1)])])],1),t("el-row",{attrs:{slot:"footer",type:"flex",justify:"end"},slot:"footer"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.action(e.actionType.submit)}}},[e._v("确定")]),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.action(e.actionType.close)}}},[e._v("取消")])],1)],1)],1)},J=[];const Q=i({name:"TemplateToolbar",setup(){const e=l().proxy,t=s(T),n=h(),i=o({name:"",size:"",direction:"",padding:b()}),{state:p,action:c,actionType:m}=function(e){const t=a({open:"action:visible",close:"action:hidden",submit:"action:submit"}),n=o({visible:!1,editor:!0});return{state:n,actionType:t,action:function(o){var i;switch(o){case t.open:n.visible=!0,null==(i=e.open)||i.apply(null);break;case t.close:n.visible=!1;break;case t.submit:e.submit()}}}}({open(){i.name=t.name,i.size=t.size.name,i.direction=t.direction,i.padding=y(t.padding),r((function(){e.$refs.templateName.focus()}))},submit(){t.name=i.name,t.direction=i.direction,t.size.name=i.size,t.padding=y(i.padding),c("action:hidden")}});return{store:t,size:n,form:i,dialog:p,action:c,actionType:m}},methods:{goBack(){this.$router.go(-1)},stageClear(){const t=new $(C.stageClear,{detail:Array.from(this.store.components.values()),target:"toolbar"});e.$emit(C.stageClear,t)},undo(){const t=new $(C.stageClear,{detail:null,target:"toolbar"});e.$emit(C.stageUndo,t)},restore(){const t=new $(C.stageClear,{detail:null,target:"toolbar"});e.$emit(C.stageRestore,t)}}},W,J,!1,null,null,null,null).exports;function Z(e,t){return Math.abs(e-t)<=5}const ee={yl(e,t){const n={visible:Z(e.left,t.left),position:{left:t.left,top:0}},o={visible:Z(e.left,t.right),position:{left:t.right,top:0}};return n.visible?n:o},yc:(e,t)=>({visible:Z(e.right-e.width/2,t.right-t.width/2),position:{left:t.right-t.width/2,top:0}}),yr(e,t){const n={visible:Z(e.right,t.right),position:{left:t.right,top:0}},o={visible:Z(e.right,t.left),position:{left:t.left,top:0}};return n.visible?n:o},xt(e,t){const n={visible:Z(e.top,t.top),position:{left:0,top:t.top}},o={visible:Z(e.top,t.bottom),position:{left:0,top:t.bottom}};return n.visible?n:o},xc:(e,t)=>({visible:Z(e.bottom-e.height/2,t.bottom-t.height/2),position:{left:0,top:t.bottom-t.height/2}}),xb(e,t){const n={visible:Z(e.bottom,t.bottom),position:{left:0,top:t.bottom}},o={visible:Z(e.bottom,t.top),position:{left:0,top:t.top}};return n.visible?n:o}};var te=function(){var e=this,t=e._self._c;return t("div",{staticClass:"template-stage",style:e.stageStyle,attrs:{tabindex:"-1"},on:{pointerdown:e.unSelectComponent,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteComponent.apply(null,arguments)},drop:e.dropHandle,dragover:function(t){return t.preventDefault(),e.noop.apply(null,arguments)}}},[t("TemplateContextmenu",{attrs:{scale:e.scale}}),t("TemplateArea",{attrs:{scale:e.scale},on:{area:e.area}}),e._l(e.markLine,(function(e){return t("TemplateMarkLine",{key:e.type,attrs:{position:e.position,direction:e.direction,visible:e.visible}})})),e._l(e.store.componentsData,(function(n){return t("TemplateControl",{key:n.id,attrs:{scale:e.scale,lock:n.props.lock,zIndex:n.props.zIndex,position:n.props.position,size:n.props.size},on:{"update:position":function(t){return e.$set(n.props,"position",t)},"update:size":function(t){return e.$set(n.props,"size",t)},moveStart:function(t){return e.moveStart(n)},move:function(t){return e.move(n)},moveEnd:function(t){return e.moveEnd(n)},resizeStart:function(t){return e.resizeStart(n)},resize:function(t){return e.resize(n)},resizeEnd:function(t){return e.resizeEnd(n)},select:function(t){return e.selectComponent(n)}},model:{value:n.visible,callback:function(t){e.$set(n,"visible",t)},expression:"component.visible"}},["builtin-group"===n.name?t(n.name,e._b({ref:"builtinGroupComponentRef",refInFor:!0,tag:"component",attrs:{top:"",group:"",children:n.children}},"component",n.props,!1)):t(n.name,e._b({ref:"builtinComponentRef",refInFor:!0,tag:"component"},"component",n.props,!1))],1)}))],2)},ne=[];var oe=function(){var e=this,t=e._self._c;return t("main",{staticClass:"template-editor"},[t("section",{ref:"canvas",staticClass:"template-canvas"},[t("TemplateStage",{ref:"refComponent",attrs:{scale:e.scale.value,position:e.position,spaceDown:e.spaceDown,"scale-manual":e.scale.manual},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.spaceDownHandle.apply(null,arguments)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.spaceUpHandle.apply(null,arguments)}}})],1),t("app-scale",{attrs:{scale:e.scale.value,"max-scale":e.scale.max,"mini-scale":e.scale.mini,step:e.scale.step},on:{"update:scale":function(t){return e.$set(e.scale,"value",t)},change:function(t){return e.scaleManual(!0)}}})],1)},ie=[];const ae=i({name:"TemplateEditor",components:{TemplateStage:i({name:"TemplateStage",components:{BuiltinInput:()=>c((()=>import("./builtin-input.605cfe8a.js")),["static/js/builtin-input.605cfe8a.js","static/js/builtin-group.addbda75.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css"]),BuiltinGroup:()=>c((()=>import("./builtin-group.0d03a4fe.js")),["static/js/builtin-group.0d03a4fe.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/builtin-group.addbda75.js","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css","static/js/builtin-input.605cfe8a.js","static/js/builtin-select.383299a6.js"]),BuiltinSelect:()=>c((()=>import("./builtin-select.383299a6.js")),["static/js/builtin-select.383299a6.js","static/js/builtin-group.addbda75.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css"]),TemplateControl:()=>c((()=>import("./template-control.fa560f86.js")),["static/js/template-control.fa560f86.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css","static/css/template-control-eeb96b7a.css"]),TemplateMarkLine:()=>c((()=>import("./template-mark-line.ac114b3e.js")),["static/js/template-mark-line.ac114b3e.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/css/template-mark-line-5ad214ba.css"]),TemplateArea:()=>c((()=>import("./template-area.1e70fa1a.js")),["static/js/template-area.1e70fa1a.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css","static/css/template-area-46b5940f.css"]),TemplateContextmenu:()=>c((()=>import("./template-contextmenu.e4ff4188.js")),["static/js/template-contextmenu.e4ff4188.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css","static/js/common.c8fc7f20.js","static/js/components.a228e139.js","static/css/components-34bf6546.css","static/css/template-contextmenu-897303ca.css"])},props:{scale:{type:Number,required:!0},position:{type:Object,required:!0},spaceDown:{type:Boolean,required:!0},scaleManual:{type:Boolean,required:!1}},provide(){return{stageInstance:this}},setup(){const o=s(T),{markLine:i}=function(){const o=s(T),i=p([{type:"yl",direction:"vertical",visible:!1,position:{left:0,top:0}},{type:"yc",direction:"vertical",visible:!1,position:{left:0,top:0}},{type:"yr",direction:"vertical",visible:!1,position:{left:0,top:0}},{type:"xt",direction:"horizontal",visible:!1,position:{left:0,top:0}},{type:"xc",direction:"horizontal",visible:!1,position:{left:0,top:0}},{type:"xb",direction:"horizontal",visible:!1,position:{left:0,top:0}}]),a=function(e){const t=e.detail,n=R(t);for(const[a,l]of o.components){if(a===t.uid)continue;const e=R(l);let o=0;for(const a of i.value){const{visible:i,position:l}=ee[a.type].apply(null,[n,e]);if(a.visible=i,a.position=l,i){o+=1;const[e,n]=[l.left||t.props.position.x,l.top||t.props.position.y];switch(a.type){case"xt":case"yl":t.props.position.x=e,t.props.position.y=n;break;case"xc":t.props.position.x=e,t.props.position.y=n-t.props.size.h/2;break;case"xb":t.props.position.x=e,t.props.position.y=n-t.props.size.h;break;case"yc":t.props.position.x=e-t.props.size.w/2,t.props.position.y=n;break;case"yr":t.props.position.x=e-t.props.size.w,t.props.position.y=n}}}if(o)break}},l=function(e,t){i.value.forEach((e=>{e.visible=!1}))};return t((function(){e.$on(C.componentMove,a),e.$on(C.componentMoveEnd,l)})),n((function(){e.$off(C.componentMove,a),e.$off(C.componentMoveEnd,l)})),{markLine:i}}();return{store:o,markLine:i}},computed:{stageStyle(){return{borderLeftWidth:this.store.padding.left+"mm",borderTopWidth:this.store.padding.top+"mm",borderRightWidth:this.store.padding.right+"mm",borderBottomWidth:this.store.padding.bottom+"mm",width:this.store.size.width+"px",height:this.store.size.height+"px",left:this.position.x+"px",top:this.position.y+"px",transformOrigin:this.scaleManual?"center":"left top",transform:"scale3d(".concat(this.scale/100,", ").concat(this.scale/100,", 1)")}}},methods:{dropHandle(t){const n=t.dataTransfer.getData("application/json"),o=JSON.parse(n),i=V.get(o.id).create(),[a,l]=D({x:t.pageX,y:t.pageY,el:this.$el},this.scale/100);i.props.position.x=a-o.offset.x,i.props.position.y=l-o.offset.y,i.shapeId=o.id;const s=new $(C.componentAdd,{detail:i,target:"stage"});e.$emit(C.componentAdd,s)},selectComponent(t){const n=new $(C.componentSelect,{detail:t,target:"stage"});e.$emit(C.componentSelect,n)},unSelectComponent(){if(this.store.currentComponent){if(this.store.currentComponent.children&&!this.store.currentComponent.builtin){const t=new $(C.componentSelectUn,{detail:this.store.currentComponent,target:"stage"});return void e.$emit(C.groupUn,t)}const t=new $(C.componentSelectUn,{detail:null,target:"stage"});e.$emit(C.componentSelectUn,t)}},deleteComponent(t){if(this.store.currentComponent){const t=this.store.currentComponent,n=new $(C.componentDel,{detail:t,target:"stage"});e.$emit(C.componentDel,n)}},moveStart(t){const n=new $(C.componentMoveStart,{detail:t,target:"stage"});e.$emit(C.componentMoveStart,n)},move(t){const n=new $(C.componentMove,{detail:t,target:"stage"});e.$emit(C.componentMove,n)},moveEnd(t){const n=new $(C.componentMoveEnd,{detail:t,target:"stage"});e.$emit(C.componentMoveEnd,n)},resizeStart(t){const n=new $(C.componentResizeStart,{detail:t,target:"stage"});e.$emit(C.componentResizeStart,n)},resize(t){const n=new $(C.componentResize,{detail:t,target:"stage"});e.$emit(C.componentResize,n)},resizeEnd(t){const n=new $(C.componentResizeEnd,{detail:t,target:"stage"});e.$emit(C.componentResizeEnd,n)},area(t){if(t.length>1){const n=new $(C.groupPack,{detail:t,target:"stage"});e.$emit(C.groupPack,n)}else this.selectComponent(t[0])},toHtml(){const e=Array.isArray(this.$refs.builtinGroupComponentRef)?this.$refs.builtinGroupComponentRef:[this.$refs.builtinGroupComponentRef],t=Array.isArray(this.$refs.builtinComponentRef)?this.$refs.builtinComponentRef:[this.$refs.builtinComponentRef],n=this.$el.cloneNode(),o=document.createDocumentFragment(),i=window.getComputedStyle(this.$el);return n.style.left="",n.style.top="",n.style.transform="",n.style.position="relative",n.style.border=i.border,n.style.boxShadow=i.boxShadow,n.style.backgroundImage=i.backgroundImage,n.style.backgroundRepeat=i.backgroundRepeat,e.concat(t).filter(Boolean).forEach((function(e){o.append(e.toHtml())})),n.appendChild(o),n}},watch:{scale(t){const n=new $(C.stageScaleChange,{detail:null,target:"stage"});e.$emit(C.stageScaleChange,n)},position:{handler(t){const n=new $(C.stageMove,{detail:null,target:"stage"});e.$emit(C.stageMove,n)},deep:!0},"store.size":{handler(t){window.dispatchEvent(new Event("resize")),e.$emit(C.stageSizeChange,t)},deep:!0},"store.padding":{handler(t){e.$emit(C.stagePaddingChange,t)},deep:!0}}},te,ne,!1,null,null,null,null).exports},provide(){return{editorInstance:this}},data:()=>({spaceDown:!1,position:{x:0,y:0},stashPosition:null}),setup(){const i=l().proxy,a=s(T),{refComponent:r}=function(){const o=p(null),i=function(){const e=o.value.toHtml();e.style.margin="0 auto";const t='\n      <html lang="zh-CN">\n        <head>\n          <meta charset="utf-8" />\n          <title>模板预览</title>\n          <style>\n            * {\n              padding: 0;\n              margin: 0;\n              box-sizing: border-box;\n            }\n          </style>\n        </head>\n        <body style="padding: 20px 0;background-color: #fafafa">\n          '.concat(e.outerHTML,"\n        </body>\n      </html>\n    "),n=new Blob([t],{type:"text/html"}),i=URL.createObjectURL(n);window.open(i,"_blank","width=1024,height=768,scrollbars")};return t((function(){e.$on(C.editorToHtml,i)})),n((function(){e.$off(C.editorToHtml,i)})),{refComponent:o}}(),c=o({step:5,value:100,max:200,mini:20,manual:!1}),m=function(e){i.scaleManual(!1),e.deltaY>0?c.value>c.mini&&(c.value-=c.step):c.value<c.max&&(c.value+=c.step);const t=r.value.$el.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,o=(e.clientY-t.top)/t.height,l=a.size.width*(c.value/100)*n,s=a.size.height*(c.value/100)*o;i.position.x=i.position.x-(l-(e.clientX-t.left)),i.position.y=i.position.y-(s-(e.clientY-t.top))};return t((function(){i.$el.addEventListener("mousewheel",m)})),n((function(){i.$el.removeEventListener("mousewheel",m)})),{scale:c,store:a,refComponent:r}},mounted(){const e=this,t=this.refComponent.$el,n=function(t){e.init()},o=function(n){e.spaceDown&&0===n.button&&(e.stashPosition={x:n.clientX-t.offsetLeft,y:n.clientY-t.offsetTop})},i=function(t){e.spaceDown&&e.stashPosition&&(e.position.x=t.clientX-e.stashPosition.x,e.position.y=t.clientY-e.stashPosition.y)},a=function(t){e.stashPosition=null};window.addEventListener("resize",n),window.addEventListener("pointerdown",o),window.addEventListener("pointermove",i),window.addEventListener("pointerup",a),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",n),window.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a)})),window.dispatchEvent(new Event("resize"))},methods:{init(){const e=this.$refs.canvas,t=(e.offsetWidth-this.store.size.width)/2,n=(e.offsetHeight-this.store.size.height)/2;this.position.x=t,this.position.y=n},spaceDownHandle(e){const t=e.target;this.spaceDown=!0,t.style.cursor="grab"},spaceUpHandle(e){e.target.style.cursor="default",this.spaceDown=!1},scaleManual(e){this.scale.manual=e}}},oe,ie,!1,null,null,null,null).exports,le="builtin-input",se="builtin-select",re={[le]:{setting:[{label:"锁定位置",type:"lock",value:!1},{label:"显示下划线",type:"underline",value:!1},{label:"设为虚线",type:"dash",value:!1},{label:"设为必填",type:"required",value:!1}]},[se]:{setting:[{label:"锁定位置",type:"lock",value:!1},{label:"设为必填",type:"required",value:!1}],option:[{label:"选项",type:"option"}]}};var pe=function(){var e=this,t=e._self._c;return t("aside",{staticClass:"template-property"},[e.currentComponent?t("section",{staticClass:"template-property-container",on:{pointerdown:function(t){return t.stopPropagation(),e.noop.apply(null,arguments)}}},[t("div",{staticClass:"template-property-item"},[t("section",{staticClass:"flex1"},[t("h1",[e._v("字体")]),t("div",{staticClass:"template-property-item"},[t("el-select",{staticClass:"flex1",attrs:{"popper-append-to-body":!1,size:"mini"},on:{change:function(t){return e.componentFontChange(e.currentComponent)}},model:{value:e.current.property.fontFamily.value,callback:function(t){e.$set(e.current.property.fontFamily,"value",t)},expression:"current.property.fontFamily.value"}},e._l(e.fonts,(function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})})),1),t("el-select",{staticStyle:{width:"74px"},attrs:{"popper-append-to-body":!1,size:"mini"},on:{change:function(t){return e.componentFontSizeChange(e.currentComponent)}},model:{value:e.current.property.fontSize.value,callback:function(t){e.$set(e.current.property.fontSize,"value",t)},expression:"current.property.fontSize.value"}},e._l(e.fontSizes,(function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})})),1)],1)])]),t("div",{staticClass:"template-property-item"},[t("label",[e._v("控件名称")]),t("span",[e._v(e._s(e.current.label))])]),t("div",{staticClass:"template-property-item"},[t("label",[e._v("位置")]),t("ol",{staticClass:"template-property-grid flex1"},[t("li",{staticClass:"template-property-list-item"},[t("el-input-number",{staticClass:"flex1",attrs:{size:"mini",disabled:e.current.lock,min:0,precision:0,controls:!1},on:{change:function(t){return e.componentMove(e.currentComponent)}},model:{value:e.current.position.x,callback:function(t){e.$set(e.current.position,"x",t)},expression:"current.position.x"}}),t("span",[e._v("X")])],1),t("li",{staticClass:"template-property-list-item"},[t("el-input-number",{staticClass:"flex1",attrs:{size:"mini",disabled:e.current.lock,min:0,precision:0,controls:!1},on:{change:function(t){return e.componentMove(e.currentComponent)}},model:{value:e.current.position.y,callback:function(t){e.$set(e.current.position,"y",t)},expression:"current.position.y"}}),t("span",[e._v("Y")])],1)])]),t("div",{staticClass:"template-property-item"},[t("label",[e._v("大小")]),t("ol",{staticClass:"template-property-grid flex1"},[t("li",{staticClass:"template-property-list-item"},[t("el-input-number",{staticClass:"flex1",attrs:{size:"mini",min:0,precision:0,controls:!1},on:{change:function(t){return e.componentSizeChange(e.currentComponent)}},model:{value:e.current.size.w,callback:function(t){e.$set(e.current.size,"w",t)},expression:"current.size.w"}}),t("span",[e._v("W")])],1),t("li",{staticClass:"template-property-list-item"},[t("el-input-number",{staticClass:"flex1",attrs:{size:"mini",min:0,precision:0,controls:!1},on:{change:function(t){return e.componentSizeChange(e.currentComponent)}},model:{value:e.current.size.h,callback:function(t){e.$set(e.current.size,"h",t)},expression:"current.size.h"}}),t("span",[e._v("H")])],1)])]),e.property?t("div",{staticClass:"template-property-item"},[t("label",[e._v("设置")]),t("ol",{staticClass:"template-property-list flex1"},e._l(e.property.setting,(function(n){return t("li",{key:n.type,staticClass:"template-property-list-item"},["lock"===n.type?t("el-checkbox",{attrs:{label:n.value},model:{value:e.current.lock,callback:function(t){e.$set(e.current,"lock",t)},expression:"current.lock"}},[e._v(e._s(n.label))]):e._e(),"underline"===n.type?t("el-checkbox",{attrs:{label:n.value},model:{value:e.current.property.underline,callback:function(t){e.$set(e.current.property,"underline",t)},expression:"current.property.underline"}},[e._v(e._s(n.label))]):e._e(),"dash"===n.type&&e.current.property.underline?t("el-checkbox",{attrs:{label:n.value},model:{value:e.current.property.dashed,callback:function(t){e.$set(e.current.property,"dashed",t)},expression:"current.property.dashed"}},[e._v(e._s(n.label))]):e._e(),"required"===n.type?t("el-checkbox",{attrs:{label:n.value},model:{value:e.current.required,callback:function(t){e.$set(e.current,"required",t)},expression:"current.required"}},[e._v(e._s(n.label))]):e._e()],1)})),0)]):e._e(),e.property&&e.property.option?t("TemplatePropertyOption",{attrs:{option:e.property.option,current:e.current}}):e._e()],1):e._e(),t("div",{staticClass:"flex1"}),t("section",{staticClass:"template-property-action"},[t("div",[t("el-button",{staticClass:"fluid",attrs:{type:"primary",size:"small"},on:{click:function(t){return e.print()}}},[e._v("打印预览")])],1),t("div",[t("el-button",{staticClass:"fluid",attrs:{type:"primary",size:"small"},on:{click:function(t){return e.save()}}},[e._v("保存并导出")])],1)])])},ce=[];const me=i({name:"TemplateProperty",components:{TemplatePropertyOption:()=>c((()=>import("./template-property-option.e6bb022a.js")),["static/js/template-property-option.e6bb022a.js","static/js/vendor.e75a9f0e.js","static/js/libs.ec5fd20d.js","static/css/libs-2b70db29.css"])},setup(){const e=s(T),{fonts:t}=M(),{fontSizes:n}=A(),o=u((()=>e.currentComponent)),i=function(e){const t=p(null);return e.value&&(t.value=re[e.value.name]),m((()=>e.value),(function(e){t.value=e?re[e.name]:null})),t}(o),a=u((()=>o.value?o.value.props:null));return{currentComponent:o,fonts:t,fontSizes:n,current:a,property:i}},methods:{componentMove(t){const n=new $(C.componentMoveEnd,{detail:t,target:"property"});e.$emit(C.componentMoveEnd,n)},componentSizeChange(t){const n=new $(C.componentResizeEnd,{detail:t,target:"property"});e.$emit(C.componentResizeEnd,n)},componentFontChange(t){const n=new $(C.componentFontChange,{detail:t,target:"property"});e.$emit(C.componentFontChange,n)},componentFontSizeChange(t){const n=new $(C.componentFontSizeChange,{detail:t,target:"property"});e.$emit(C.componentFontSizeChange,n)},print(){e.$emit(C.editorToHtml)},save(){}}},pe,ce,!1,null,null,null,null).exports;var ue=function(){var e=this._self._c;return e("main",{staticClass:"template-container"},[e("TemplateToolbar"),e("el-container",{staticClass:"template-main"},[e("TemplateAside"),e("TemplateEditor"),e("TemplateProperty")],1)],1)},de=[];const fe=["create","edit"];const be=i({name:"TemplateAction",beforeRouteEnter(e,t,n){fe.indexOf(e.query.type)>-1?n():n({path:"/template/action?type=create",replace:!0})},components:{TemplateAside:X,TemplateToolbar:Q,TemplateEditor:ae,TemplateProperty:me},props:{type:{type:String,required:!0}},setup(){const i=g(),a=p(0);d(T,i),function(o){let i=!1,a=!1;const l=function(e){switch(e.type){case"component:add":case"component:del":case"component:font:change":F.apply(o,[e.type,e.detail]);break;case"component:resize:start":a=!0;break;case"component:resize":case"component:move:start":F.apply(o,[e.type,e.detail,!1]);break;case"component:resize:end":"property"===e.target?F.apply(o,[e.type,e.detail]):a&&(a=!1,F.apply(o,[e.type,e.detail]));break;case"component:move":i=!0;break;case"component:move:end":"property"===e.target?F.apply(o,[e.type,e.detail]):i&&(i=!1,F.apply(o,[e.type,e.detail]))}};t((function(){e.$on(x.componentAdd,l),e.$on(x.componentDel,l),e.$on(x.componentMoveStart,l),e.$on(x.componentMove,l),e.$on(x.componentMoveEnd,l),e.$on(x.componentFontChange,l),e.$on(x.componentResizeStart,l),e.$on(x.componentResize,l),e.$on(x.componentResizeEnd,l)})),n((function(){e.$off(x.componentAdd,l),e.$off(x.componentDel,l),e.$off(x.componentMoveStart,l),e.$off(x.componentMove,l),e.$off(x.componentMoveEnd,l),e.$off(x.componentFontChange,l),e.$off(x.componentSizeChange,l),e.$off(x.componentResizeStart,l),e.$off(x.componentResize,l),e.$off(x.componentResizeEnd,l)}))}(i);const l=function(t,n=!0){const l=o(t.detail);l.uid=a.value++,l.id=_(l.uid),l.visible=!0,l.children&&l.children.forEach((function(e){e.uid=a.value++,e.id=_(e.uid)})),i.components.set(l.uid,l),i.currentComponent=l,i.changes+=1,n&&e.$emit(x.componentAdd,t)},s=function(t,n=!0){const o=t.detail;i.currentComponent=null,i.components.delete(o.uid),i.changes+=1,n&&e.$emit(x.componentDel,t)},r=function(t){i.currentComponent=t.detail,i.currentComponent.visible=!0,e.$emit(x.componentSelect,t)},c=function(t){i.currentComponent=null,e.$emit(x.componentSelectUn,t)},m=function(t){e.$emit(x.componentMoveStart,t)},u=function(t){e.$emit(x.componentMove,t)},b=function(t){e.$emit(x.componentMoveEnd,t)},h=function(t){e.$emit(x.componentResizeStart,t)},y=function(t){e.$emit(x.componentResize,t)},v=function(t){e.$emit(x.componentResizeEnd,t)},z=function(t){e.$emit(x.componentFontChange,t)},w=function(t){i.components.clear(),i.currentComponent=null,e.$emit(x.stageClear,t),i.changes+=1},E=function(t){const n=k(t.detail);for(const e of n.children)i.components.delete(e.uid);const o=new $(C.componentAdd,{detail:n,target:"stage"});e.$emit(C.componentAdd,o)},S=function(t){const n=L(t.detail);for(const o of n){const t=new $(C.componentAdd,{detail:o,target:"stage"});e.$emit(C.componentAdd,t,!1)}e.$emit(x.groupUn,t),e.$emit(C.componentDel,t,!1)},R=function(){const e=i.record.pop();e&&j.apply(i,["undo",e])},D=function(){const e=i.restore.pop();e&&j.apply(i,["restore",e])};return t((function(){e.$on(C.componentAdd,l),e.$on(C.componentDel,s),e.$on(C.componentSelect,r),e.$on(C.componentSelectUn,c),e.$on(C.componentMoveStart,m),e.$on(C.componentMove,u),e.$on(C.componentMoveEnd,b),e.$on(C.componentResizeStart,h),e.$on(C.componentResize,y),e.$on(C.componentResizeEnd,v),e.$on(C.componentFontChange,z),e.$on(C.groupPack,E),e.$on(C.groupUn,S),e.$on(C.stageClear,w),e.$on(C.stageUndo,R),e.$on(C.stageRestore,D)})),f((function(){e.$off(C.componentAdd,l),e.$off(C.componentDel,s),e.$off(C.componentSelect,r),e.$off(C.componentSelectUn,c),e.$off(C.componentMoveStart,m),e.$off(C.componentMove,u),e.$off(C.componentMoveEnd,b),e.$off(C.componentResizeStart,h),e.$off(C.componentResize,y),e.$off(C.componentResizeEnd,v),e.$off(C.componentFontChange,z),e.$off(C.groupPack,E),e.$off(C.groupUn,S),e.$off(C.stageClear,w),e.$off(C.stageUndo,R),e.$off(C.stageRestore,D)})),{store:i,index:a}}},ue,de,!1,null,null,null,null).exports;export{be as default};
//# sourceMappingURL=template.5c0feb83.js.map