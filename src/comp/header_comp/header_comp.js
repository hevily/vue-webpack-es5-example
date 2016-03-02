/**
 * Created by zhengqiguang on 16/3/1.
 */


var Vue = require("vue"),
    header_tpl = require("./header_comp.tpl"),
    $ = require("jquery");

require("./header_comp.css");


var HeaderComp = Vue.extend(
    {
        created: function () {
            this.$dispatch("child-msg", 12312);

        },

        data: function () {
            return {
                header: "hhhhhhhh",
                items: [],
                input_text: ""
            }
        },
        events: {
            "child-msg": "ccc",
            "parent-msg": "ccc"
        },
        methods: {
            ccc: function () {
                console.log(arguments);
            },
            getContent: function () {
                console.log(123, this.input_text);
                this.items.push(this.input_text);

                this.input_text = ""


            }


        },

        template: header_tpl

    }
);


module.exports = HeaderComp;

