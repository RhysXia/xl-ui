webpackJsonp([7],{"3GWW":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show1:!1}},methods:{click1:function(){this.show1=!this.show1}}}},"84VN":function(s,t,a){"use strict";function n(s){a("JvgI")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("3GWW"),e=a.n(l);for(var r in l)"default"!==r&&function(s){a.d(t,s,function(){return l[s]})}(r);var v=a("QrS9"),c=a("/4AN"),i=n,_=c(e.a,v.a,!1,i,null,null);t.default=_.exports},JvgI:function(s,t,a){var n=a("LMmg");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a("X/Wc")("1a7e4a6e",n,!0,{})},KseV:function(s,t,a){s.exports=a("84VN")},LMmg:function(s,t,a){t=s.exports=a("lcwS")(!1),t.push([s.i,".demo-item1{height:4em;background-color:#409eff}.demo-item2{height:4em;background-color:#67c23a}.demo-item3{color:#fff;font-size:1.5em;text-align:center;line-height:4em;cursor:pointer;font-weight:700}.collapse-transition{transition:all 2s ease-in-out}",""])},QrS9:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("动画组件")]),s._v(" "),a("p",[s._v("内置的动画效果，方便使用")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<div class="demo-item2 demo-item3" @click="click1">点击{{show1?\'隐藏\':\'展开\'}}</div>\n<xl-collapse-transition>\n  <div v-show="show1">\n    <div class="demo-item1"></div>\n    <div class="demo-item2"></div>\n    <div class="demo-item1"></div>\n    <div class="demo-item2"></div>\n  </div>\n</xl-collapse-transition>\n\n\n\n',script:"\n  export default {\n    data() {\n      return {\n        show1: false\n      }\n    },\n    methods: {\n      click1() {\n        this.show1 = !this.show1\n      }\n    }\n  }\n",style:"\n  .demo-item1{\n    height: 4em;\n    background-color: #409eff;\n  }\n  .demo-item2{\n    height: 4em;\n    background-color: #67c23a;\n  }\n  .demo-item3{\n    color: #fff;\n    font-size: 1.5em;\n    text-align: center;\n    line-height: 4em;\n    cursor: pointer;\n    font-weight: bold;\n  }\n  .collapse-transition{\n    transition: all 2s ease-in-out;\n  }\n"}}},[a("div",[a("div",{staticClass:"demo-item2 demo-item3",on:{click:s.click1}},[s._v("点击"+s._s(s.show1?"隐藏":"展开"))]),s._v(" "),a("xl-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:s.show1,expression:"show1"}]},[a("div",{staticClass:"demo-item1"}),s._v(" "),a("div",{staticClass:"demo-item2"}),s._v(" "),a("div",{staticClass:"demo-item1"}),s._v(" "),a("div",{staticClass:"demo-item2"})])])],1),s._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[s._v("折叠组件,可以指定class "),a("code",[s._v("collapse-transition")]),s._v("来自定义动画效果，通常内容是"),a("code",[s._v("transition: all 2s ease-in-out;")])])]),s._v(" "),a("div",{attrs:{slot:"source"},slot:"source"},[a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("'demo-item2 demo-item3'")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"click1"')]),s._v(">")]),s._v("点击{{show1?'隐藏':'展开'}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("xl-collapse-transition")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-show")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"show1"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("'demo-item1'")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("'demo-item2'")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("'demo-item1'")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("'demo-item2'")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("xl-collapse-transition")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-item1")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4em")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#409eff")]),s._v(";\n  }\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-item2")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4em")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#67c23a")]),s._v(";\n  }\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-item3")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1.5em")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("line-height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4em")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("cursor")]),s._v(": pointer;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": bold;\n  }\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".collapse-transition")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("transition")]),s._v(": all "),a("span",{attrs:{class:"hljs-number"}},[s._v("2s")]),s._v(" ease-in-out;\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("show1")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      click1() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".show1 = !"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".show1\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"collapsetransition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collapsetransition","aria-hidden":"true"}},[s._v("¶")]),s._v(" CollapseTransition")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("折叠组件，可以参看"),a("code",{staticClass:"code_inline"},[s._v("collapse")]),s._v("组件的动画效果")])}],e={render:n,staticRenderFns:l};t.a=e}});
//# sourceMappingURL=7.ad766d9dae23812b0897.js.map