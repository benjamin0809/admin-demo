(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["permission-page"],{3252:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}})],1)},s=[],i=n("d4ec"),c=n("bee2"),o=n("99de"),r=n("7e84"),l=n("262e"),u=n("9ab4"),h=n("60a3"),b=n("8ee8"),p=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"handleRolesChange",value:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}]),t}(h["c"]);p=Object(u["a"])([Object(h["a"])({name:"PagePermission",components:{SwitchRoles:b["a"]}})],p);var d=p,f=d,j=n("2877"),O=Object(j["a"])(f,a,s,!1,null,null,null);t["default"]=O.exports},"8ee8":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" "+e._s(e.$t("permission.roles"))+"： "+e._s(e.roles)+" ")]),e._v(" "+e._s(e.$t("permission.switchRoles"))+"： "),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)},s=[],i=n("d4ec"),c=n("bee2"),o=n("99de"),r=n("7e84"),l=n("262e"),u=n("9ab4"),h=n("60a3"),b=n("9dba"),p=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"roles",get:function(){return b["a"].roles}},{key:"switchRoles",get:function(){return this.roles[0]},set:function(e){var t=this;b["a"].ChangeRoles(e).then((function(){t.$emit("change")}))}}]),t}(h["c"]);p=Object(u["a"])([Object(h["a"])({name:"SwitchRoles"})],p);var d=p,f=d,j=n("2877"),O=Object(j["a"])(f,a,s,!1,null,null,null);t["a"]=O.exports}}]);