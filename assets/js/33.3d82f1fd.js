(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{367:function(s,n,a){"use strict";a.r(n);var t=a(7),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("之前在看阮一峰博士的"),n("code",[s._v("ES6标准入门")]),s._v("的时候，注意到一句话：")]),s._v(" "),n("blockquote",[n("p",[s._v("全局对象的属性赋值和全局变量的赋值是一回事。（对于Node.js来说，这一条只针对REPL环境适用，环境模块中，全局变量必须显示声明成global对象的属性）")])]),s._v(" "),n("p",[s._v("今天在"),n("code",[s._v("segmentfault")]),s._v("上看到一个问题：\n"),n("a",{attrs:{href:"https://segmentfault.com/q/1010000016494413",target:"_blank",rel:"noopener noreferrer"}},[s._v("node中this的指向"),n("OutboundLink")],1)]),s._v(" "),n("blockquote",[n("p",[s._v("问题描述\nnode下this的指向问题，其他的我都知道，不过如果直接定义局部变量呢，这个局部变量怎么获取到呢，是存放在哪里的。\n相关代码\n// 请把代码文本粘贴到下方（请勿用图片代替代码）")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("你期待的结果是什么？实际看到的错误信息又是什么？\n1，undefined，undefined")]),s._v(" "),n("p",[s._v("突然就想到了Node.js中的全局变量的问题，于是准备做一下深入的调研。")]),s._v(" "),n("p",[s._v("我们再来看阮博士的那句话，说REPL环境中和环境模块中的表现是不一样的。那么我们就去这两个场景中跑一下这段代码:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// REPL中\n1\n1\n1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 文件中\n1\nundefined\nundefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("果然是不一样的！突然感觉自己这些年的JS是白学了，居然会有这样的情况。\n但是仔细想想，Node中的每个文件其实都是用一个自执行函数来包起来的，也就是说这段代码在文件中的表现其实是:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("(function() {\nvar name = 1\nconsole.log(name)\nconsole.log(this.name)\nconsole.log(global.name)\n})()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这样也就瞬间明白了为啥我们直接var一个变量，不会挂到全局上了。不过仔细想想也是，如果随便在js的某个文件中var一个变量，就挂到全局作用域上面也是一件细思极恐的事情了。")]),s._v(" "),n("p",[s._v("想明白了这点,我们再来研究一下为啥在REPL中可以直接打印呢。\n我一开始猜想是REPL不会作为模块，所以也不会用自执行函数包起来，所以表现的和浏览器一样。但是猜想终归是猜想，")])])}),[],!1,null,null,null);n.default=e.exports}}]);