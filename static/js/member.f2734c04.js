import{v as e,n as a,r as t}from"./vendor.e75a9f0e.js";import"./libs.ec5fd20d.js";const l=a({name:"org-member",mixins:[e({request:function(e){return console.log(e),t(Array.from({length:e.length||20},((e,a)=>({name:"王小虎",address:"上海市普陀区金沙江路 151".concat(a," 弄")}))))},immediate:!1})],setup:()=>({form:{mechanismId:null}}),created(){this.form.mechanismId=this.currentMechanism.mechanismId,this.search()}},(function(){var e=this,a=e._self._c;return a("app-data-view",{attrs:{pagination:""}},[a("app-table-container",[a("template",{slot:"action"},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("导出病例")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],ref:"table",attrs:{data:e.table.data,height:"100%",stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],2)],1)}),[],!1,null,null,null,null).exports;export{l as default};
//# sourceMappingURL=member.f2734c04.js.map
