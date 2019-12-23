(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["permission-directive"],{7959:function(e,s,i){"use strict";var t=i("bb5a"),a=i.n(t);a.a},"8ee8":function(e,s,i){"use strict";var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" "+e._s(e.$t("permission.roles"))+"： "+e._s(e.roles)+" ")]),e._v(" "+e._s(e.$t("permission.switchRoles"))+"： "),i("el-radio-group",{model:{value:e.switchRoles,callback:function(s){e.switchRoles=s},expression:"switchRoles"}},[i("el-radio-button",{attrs:{label:"editor"}}),i("el-radio-button",{attrs:{label:"admin"}})],1)],1)},a=[],n=i("d4ec"),r=i("bee2"),o=i("99de"),c=i("7e84"),l=i("262e"),m=i("9ab4"),d=i("60a3"),p=i("9dba"),v=function(e){function s(){return Object(n["a"])(this,s),Object(o["a"])(this,Object(c["a"])(s).apply(this,arguments))}return Object(l["a"])(s,e),Object(r["a"])(s,[{key:"roles",get:function(){return p["a"].roles}},{key:"switchRoles",get:function(){return this.roles[0]},set:function(e){var s=this;p["a"].ChangeRoles(e).then((function(){s.$emit("change")}))}}]),s}(d["c"]);v=Object(m["a"])([Object(d["a"])({name:"SwitchRoles"})],v);var u=v,h=u,b=i("2877"),_=Object(b["a"])(h,t,a,!1,null,null,null);s["a"]=_.exports},a99f:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"app-container"},[i("switch-roles",{on:{change:e.handleRolesChange}}),i("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v(" Only "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['admin']\" ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v(" Only "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['editor']\" ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v(" Both "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['admin','editor']\" ")])],1)]),i("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"60px"}},[i("aside",[e._v(" "+e._s(e.$t("permission.tips"))+" "),i("br"),e._v(" e.g. ")]),i("el-tabs",{staticStyle:{width:"550px"},attrs:{type:"border-card"}},[e.checkPermission(["admin"])?i("el-tab-pane",{attrs:{label:"Admin"}},[e._v(" Admin can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['admin'])\" ")])],1):e._e(),e.checkPermission(["editor"])?i("el-tab-pane",{attrs:{label:"Editor"}},[e._v(" Editor can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['editor'])\" ")])],1):e._e(),e.checkPermission(["admin","editor"])?i("el-tab-pane",{attrs:{label:"Admin-OR-Editor"}},[e._v(" Both admin or editor can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['admin','editor'])\" ")])],1):e._e()],1)],1)],1)},a=[],n=i("d4ec"),r=i("bee2"),o=i("99de"),c=i("7e84"),l=i("262e"),m=i("9ab4"),d=i("60a3"),p=(i("caad"),i("2532"),i("9dba")),v=function(e){if(e&&e instanceof Array&&e.length>0){var s=p["a"].roles,i=e,t=s.some((function(e){return i.includes(e)}));return t}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1},u=i("8ee8"),h=function(e){function s(){var e;return Object(n["a"])(this,s),e=Object(o["a"])(this,Object(c["a"])(s).apply(this,arguments)),e.key=1,e.checkPermission=v,e}return Object(l["a"])(s,e),Object(r["a"])(s,[{key:"handleRolesChange",value:function(){this.key++}}]),s}(d["c"]);h=Object(m["a"])([Object(d["a"])({name:"DirectivePermission",components:{SwitchRoles:u["a"]}})],h);var b=h,_=b,f=(i("7959"),i("2877")),g=Object(f["a"])(_,t,a,!1,null,"0b568094",null);s["default"]=g.exports},bb5a:function(e,s,i){}}]);