import{G as o,n as e}from"./vendor.e75a9f0e.js";import"./libs.ec5fd20d.js";var t=function(){var o=this,e=o._self._c;return e("div",{staticClass:"login-container"},[e("h1",{staticClass:"login-title"},[o._v("Login")]),e("el-form",{ref:"form",staticClass:"login-form",attrs:{model:o.form}},[e("el-form-item",{attrs:{label:"账号"}},[e("el-input",{attrs:{placeholder:"请输入用户名/邮箱"},model:{value:o.form.userName,callback:function(e){o.$set(o.form,"userName",e)},expression:"form.userName"}})],1),e("el-form-item",{attrs:{label:"密码"}},[e("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:o.form.password,callback:function(e){o.$set(o.form,"password",e)},expression:"form.password"}})],1),e("el-form-item",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return o.login()}}},[o._v("登录")])],1)],1)],1)],1)},r=[];const s=e({name:"LoginIndex",data:()=>({form:{userName:"",password:""}}),methods:{...o("appModule",{doLogin:"login"}),async login(){await this.doLogin(this.form),this.$router.push("/dashboard")}}},t,r,!1,null,null,null,null).exports;export{s as default};
//# sourceMappingURL=login.b6ee35a6.js.map
