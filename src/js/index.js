/**
 * Created by zhengqiguang on 16/2/29.
 */

var Vue = require("vue");
var tpl = require("../tpl/test.tpl");

require("../css/base.css");
require("../css/style.css");
console.log(tpl);


new Vue({
   el:"#app",
   template:tpl,
   data:{
      message:"Hello Vue.js"
   }
});

