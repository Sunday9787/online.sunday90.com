System.register(["./vendor-legacy.ddc66af0.js","./libs-legacy.774d107d.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.n},null],execute:function(){var t=function(){var e=this,t=e._self._c;return t("div",{staticClass:"template-property-item"},[t("label",[e._v("选项")]),t("ol",{staticClass:"template-property-list flex1"},e._l(e.option,(function(n){return t("li",{key:n.type,staticClass:"template-property-list-item"},[t("ul",{staticClass:"template-property-list"},e._l(e.current.options,(function(r,i){return t("li",{key:r.key,ref:"item",refInFor:!0,staticClass:"template-property-list-item"},[t("el-input",{attrs:{size:"mini"},on:{"hook:mounted":e.inputMounted},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:function(){return e.current[n.type].add()}.apply(null,arguments)}},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"item.value"}}),t("div",{staticStyle:{width:"14px","text-align":"center"}},[t("a",{directives:[{name:"show",rawName:"v-show",value:r.value,expression:"item.value"}],staticClass:"el-icon-delete",on:{pointerdown:function(){return e.current[n.type].del(i)}}})])],1)})),0)])})),0)])};e("default",n({name:"TemplatePropertyOption",props:{option:{type:Array,required:!0},current:{type:Object,required:!0}},methods:{inputMounted:function(){var e=this.$refs.item.at(-1);this.$nextTick((function(){e.querySelector("input").focus()}))}}},t,[],!1,null,null,null,null).exports)}}}));
//# sourceMappingURL=template-property-option-legacy.a1286cdb.js.map
