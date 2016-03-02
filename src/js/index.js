/**
 * Created by zhengqiguang on 16/2/29.
 */

var Vue = require("vue"),
    headerComp = require("../comp/header_comp/header_comp");

Vue.config.debug = true;


new Vue({
    el: "body",

    created: function () {
        console.log(this);
    },
    data: {
        header: "hhhhhhh"
    },
    events: {
        "child-msg": function () {
            console.log(arguments);

        }


    },

    components: {
        "header-comp": headerComp,
        "hhhh": headerComp
    }
});

