(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{370:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"变量提升"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[s._v("#")]),s._v(" 变量提升")]),s._v(" "),t("p",[s._v("开门见山，这段代码输出什么？")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'run foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("相信作为一名合格的js开发者，你肯定晓得答案。控制台会分别输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("run foo\nundefined\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("你可能会向我解释道：在js中函数的变量的声明会提升，因此对于解释器来说，它实际看到的是这样的：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("var bar;\nfunction foo() {\n\tconsole.log('run foo');\n}\nfoo();\nconsole.log(bar);\nbar = 'bar';\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("这很正确，但是并不准确。并不会有哪个JS引擎会改写你的代码顺序，而所谓的变量提升只是我们人为的理解引擎做的事情而已，那么引擎到底做了什么呢？")]),s._v(" "),t("h2",{attrs:{id:"调用栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用栈"}},[s._v("#")]),s._v(" 调用栈")]),s._v(" "),t("p",[s._v("v8解析js代码后，不会直接运行，会先编译，生成上下文后以及可执行代码，然后再运行。具体的过程为：")]),s._v(" "),t("ol",[t("li",[s._v("编译代码，生成全局上下文，进入调用栈。")]),s._v(" "),t("li",[s._v("运行进入函数后（或者进入eval后），创建运行上下文，入栈。")]),s._v(" "),t("li",[s._v("函数运行结束后，运行上下文被销毁，出栈。")])]),s._v(" "),t("p",[s._v("这些运行上下文中主要包含着当前的变量环境与词法环境。运行前，V8首先会将全局上下文压入调用栈。执行代码期间，如果遇到变量赋值等操作会改变一下全局上下文中的变量环境。如果遇到函数，会创建函数的运行上下文，并压入调用栈。函数内的过程和全局过程是一次递归。函数运行结束后，上下文销毁，出栈。直至全局代码运行完。")]),s._v(" "),t("p",[s._v("如下图，我们在日常debug期间已经很关注调用栈以及上下文环境了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/blog/js-call-stack/call-stack-debug.png",alt:"xx"}})]),s._v(" "),t("p",[s._v("当然调用栈可能会爆栈。当递归次数比较多的时候，通常会上万，这时候调用栈会溢出。实验表明，即使是利用尾递归的方式在当前的v8版本也会爆栈。在Safari中不会，应该是被优化成了迭代。")]),s._v(" "),t("p",[s._v("作用域\n代码中出现相同的变量，JS引擎如何来决定用哪一个呢？")]),s._v(" "),t("p",[s._v("如下代码：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'global'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("输出结果为: "),t("code",[s._v("global")]),s._v(";")]),s._v(" "),t("p",[s._v("上文讲到，js的执行环境由调用栈来控制。不妨站在这个角度看下。")]),s._v(" "),t("ol",[t("li",[s._v("首先进入全局上下文，从头开始运行，函数定义、变量定义，变量赋值")]),s._v(" "),t("li",[t("code",[s._v("bar()")]),s._v("调用，创建"),t("code",[s._v("bar")]),s._v("的执行上下文，变量定义、赋值。")]),s._v(" "),t("li",[t("code",[s._v("foo()")]),s._v("调用，创建"),t("code",[s._v("foo")]),s._v("的执行上下文，这时候，需要打印出"),t("code",[s._v("title")]),s._v("的值。")]),s._v(" "),t("li",[t("code",[s._v("foo")]),s._v("执行完毕，销毁上下文。"),t("code",[s._v("bar")]),s._v("执行完毕，销毁上下文。全局执行环境，销毁上下文。")])]),s._v(" "),t("p",[s._v("可见，title并没有直接取调用栈最上面的bar的上下文中的变量环境，而是取了global的值。")]),s._v(" "),t("p",[s._v("这是因为调用栈中，变量环境中都有一个outer的引用，用来指向外部执行环境，如果变量没有在当环境中找到，那么就会取外部执行环境来取。这个过程叫做作用域链，那为啥这个外部环境不是bar呢？")]),s._v(" "),t("p",[s._v("这是因为js的 作用域链是由词法作用域决定的，而这个词法作用域和运行时是没有任何关系的。看下面的代码：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'global'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("输出 "),t("code",[s._v("bar")])]),s._v(" "),t("h2",{attrs:{id:"块级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[s._v("#")]),s._v(" 块级作用域")]),s._v(" "),t("p",[s._v("大家也都知道，js中的var带来的变量提升已经作用域问题已经给很多开发者带来很大的困扰了。于是ES6中推出了块级作用域。那么块级作用域的实现方式是怎样的？接下来我将举一个例子生动的来讲一下。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function a() {\n\tvar x = 1;\n  let y = 1;\n  if (true) {\n    var x = 2;\n    let y = 2;\n  }\n  console.log(x, y);\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("如上述代码。首先要了解，let与var在引擎的执行层面一定是有不同的。var中定义赋值的变量存储在上下文中的变量环境中，而let、const定义的变量则存储在词法环境中。而词法环境则也是一个栈模式，当进入block的时候，会将这个块的变量push进入词法环境，而离开的时候pop出去。块级作用域本质上是利用了上下文中的词法环境的栈的特性来实现的，")]),s._v(" "),t("p",[s._v("当我们在某个地方引用变量的时候，引擎会先从词法环境中寻找，再去变量环境中寻找。")]),s._v(" "),t("p",[s._v("有时候我们学习一门编程语言语法的时候，太强调规则而忽视了它们产生的理由与实现的方式。如果能站在虚拟机设计者的角度去思考一下问题，那么可能会理解的更加透彻。")])])}),[],!1,null,null,null);t.default=e.exports}}]);