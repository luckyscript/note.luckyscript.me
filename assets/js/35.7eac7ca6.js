(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{369:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("最近在看《TLPI》，书里面的习题和例程在mac下不是很好编译，darwin和linux的环境还是有所差异的，所以当选择Linux发行版的时候，我还是首选了大蜥蜴。")]),s._v(" "),a("p",[s._v("先简要介绍下我的pc，120G的ssd+1T的机械硬盘，我原本将Windows装在ssd上，openSUSE就放在了机械硬盘上，但是用起来体验实在是很差。于是将ssd分出了30G，来装openSUSE，感觉应该也完全足够了。下好了镜像，刻在U盘上，就可以直接安装了。")]),s._v(" "),a("h2",{attrs:{id:"换源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[s._v("#")]),s._v(" 换源")]),s._v(" "),a("p",[s._v("系统装好后，第一件事情是换源，考虑稳定性和速度，最后选择了中科大的源。openSUSE换源的话也只需要在"),a("code",[s._v("YAST")]),s._v("里面设置就好。还是比较容易操作的。换好源，一般会检查一下系统必须的一些软件，比如"),a("code",[s._v("vim")]),s._v("、"),a("code",[s._v("git")]),s._v("等。")]),s._v(" "),a("h2",{attrs:{id:"科学上网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#科学上网"}},[s._v("#")]),s._v(" 科学上网")]),s._v(" "),a("p",[s._v("迫于国内环境，所以科学上网还是需要的。作为一个程序员，我们科学上网的目的并不是去做一些违法的事情，而是在符合国家法律的前提下，去境外正规网站学习提升自己。")]),s._v(" "),a("h3",{attrs:{id:"ss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ss"}},[s._v("#")]),s._v(" ss")]),s._v(" "),a("p",[s._v("首先安装的软件是"),a("code",[s._v("shadowsocks")]),s._v("，这里依赖的软件为"),a("code",[s._v("python3")]),s._v("以及"),a("code",[s._v("pip3")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" shadowsocks\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("不出意外应该可以成功。")]),s._v(" "),a("p",[a("code",[s._v("shadowsocks")]),s._v("分为server端和client端。我们这里肯定就是client端了。具体的配置方法请到github上参考。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sslocal "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/shadowsocks.json "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果这时候启动成功了，恭喜你。如果失败了，请继续看。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/lib/python3.6/dist-packages/shadowsocks/crypto/openssl.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# vim中\n# 修改地方1， 52行\nlibcrypto.EVP_CIPHER_CTX_cleanup.argtypes = (c_void_p,) \n\nlibcrypto.EVP_CIPHER_CTX_reset.argtypes = (c_void_p,)\n\n# 修改地方2， 112\nlibcrypto.EVP_CIPHER_CTX_cleanup(self._ctx) \n\nlibcrypto.EVP_CIPHER_CTX_reset(self._ctx)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("具体原因应该是openssl的版本所对应的API名称变了。")]),s._v(" "),a("p",[s._v("这时候再次启动，不出意外应该会成功。")]),s._v(" "),a("h3",{attrs:{id:"switchyomega"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switchyomega"}},[s._v("#")]),s._v(" SwitchyOmega")]),s._v(" "),a("p",[s._v("这时候，你用浏览器打开某网站，发现还是打不开。不要心急，因为你还没有配置好。")]),s._v(" "),a("p",[s._v("sslocal只会在本地跑一个"),a("code",[s._v("SOCKS5")]),s._v("的服务，而你需要的是"),a("code",[s._v("HTTP")]),s._v("代理，所以走不通也很正常。")]),s._v(" "),a("p",[s._v("这里推荐大家一个chrome或者Firefox下的插件"),a("code",[s._v("Proxy SwitchyOmega")])]),s._v(" "),a("p",[s._v("Firefox是系统自带的浏览器，并且它并没有被墙，所以一切顺风顺水，去插件中心搜索插件，并安装配置就OK了。")]),s._v(" "),a("h3",{attrs:{id:"chrome-switchomega"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-switchomega"}},[s._v("#")]),s._v(" Chrome + SwitchOmega")]),s._v(" "),a("p",[s._v("但是我日常还是习惯Chrome浏览器。所以折腾到这里并没有结束。因为Firefox这时候已经拥有科学上网的能力了，所以直接去Google那里下载chrome的安装包就ok。如果你并没有搞Firefox，其实google.cn那里也可以下载Chrome。记得，要下"),a("code",[s._v(".rpm")]),s._v("的包。")]),s._v(" "),a("p",[s._v("下好后安装就ok")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" chrome.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("假如报错，应该是缺少依赖导致的，直接用"),a("code",[s._v("zypper")]),s._v("安装对应的依赖。")]),s._v(" "),a("p",[s._v("Chrome这时候可以正常打开了，但是它并没有能力科学，所以也就进入不了Chrome的应用商店，所以也就不能科学......")]),s._v(" "),a("p",[s._v("这仿佛是个"),a("code",[s._v("悖论")]),s._v("。而且最为可恶的是，google禁止"),a("code",[s._v(".crx")]),s._v("的安装包直接拖入安装。这点和几个月之前又有很大不同，几个月前的限制是必须是Google应用商店上架的拓展才能用"),a("code",[s._v(".crx")]),s._v("来安装，现在完全限死了。")]),s._v(" "),a("p",[s._v("唯一的办法，就是将"),a("code",[s._v(".crx")]),s._v("的安装包解压开，直接以dev的形式来安装。方法也很简单，将文件名修改，然后在命令行里面"),a("code",[s._v("unzip")]),s._v("就ok。（我发现openSUSE自带的Ark不能解压）。但是这种安装方式有个很大的问题，假如我把本地这些文件删了，我的插件也就没了。")]),s._v(" "),a("p",[s._v("最后，我去Chrome拓展商店找到了某不知名免费科学插件。安装好后，删除本地插件，再借用这个插件下好了"),a("code",[s._v("Proxy SwitchOmega")]),s._v("。真的心累。")]),s._v(" "),a("h3",{attrs:{id:"开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[s._v("#")]),s._v(" 开机启动")]),s._v(" "),a("p",[s._v("但是，当你重启后，你发现,怎么又连不上了。那肯定的，因为"),a("code",[s._v("sslocal")]),s._v("并没有在跑。于是，你又敲了一遍命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sslocal "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/shadowsocks.json "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("嗯。好了。")]),s._v(" "),a("p",[s._v("但是总不能每次开机都这样吧？？？你写了个“脚本”，其实就是把这一串命令写到了文件里。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ssstart\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./ssstart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("但你还是不能忍受，这太low了。所以，请继续看。")]),s._v(" "),a("p",[s._v("你修改了脚本。写下了这些bash")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### BEGIN INIT INFO")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Provides:          shadowsocks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Required-Start:    $remote_fs $syslog")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Required-Stop:     $remote_fs $syslog")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default-Start:     2 3 4 5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default-Stop:      0 1 6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Short-Description: start or stop shadowsocks ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Description:       start or stop shadowsocks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### END INIT INFO")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sslocal "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/shadowsocks.json "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" start\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sslocal "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/shadowsocks.json "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" stop\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\nstart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    start\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    stop\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nreload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     stop\n     start\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' {start|reload|stop}"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("p",[s._v("保存后运行。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./shadowsocks start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("跑起来了。但是这个有啥差别呢，只是多了stop和reload而已。")]),s._v(" "),a("p",[s._v("你将它放到了"),a("code",[s._v("/etc/init.d/")]),s._v("中。")]),s._v(" "),a("p",[s._v("这样你就可以用service来开启服务了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" shadowsocks start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果报错了？")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" journalctl  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xe")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("看下错误日志来排查下原因。修改后，没问题了。")]),s._v(" "),a("p",[s._v("然后你输入了:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("发现下面列出了")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shadowsocks off\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这证明，你的服务已经建立了，但是并没有开机启动。")]),s._v(" "),a("p",[s._v("于是你将它设为开机启动。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" shadowsocks on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这时候在输入"),a("code",[s._v("chkconfig")]),s._v(",你会发现，它已经开启了。")]),s._v(" "),a("p",[s._v("如果你修改了配置文件，想要"),a("code",[s._v("reload")]),s._v("。也只需要")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" shadowsocks reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同理，想停止：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" shadowsocks stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"tlpi编译环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlpi编译环境"}},[s._v("#")]),s._v(" TLPI编译环境")]),s._v(" "),a("p",[s._v("TLPI这本书算是Linux系统编程中的入门书籍。像类似这种经典书籍，通常都有自己的头文件，还有一些辅助函数。所以我们将这些头文件放入系统的include中，并且将辅助函数编译成"),a("a",{attrs:{href:"https://stackoverflow.com/questions/12237282/whats-the-difference-between-so-la-and-a-library-files",target:"_blank",rel:"noopener noreferrer"}},[s._v("静态链接库"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("源码目录："),a("a",{attrs:{href:"http://man7.org/tlpi/code/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://man7.org/tlpi/code/index.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("下载好源码后，我们将其解压，进入目录。输入make进行编译。")]),s._v(" "),a("p",[s._v("这时应该会出现一些错误。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo zypper in  libacl-devel libcap-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通常都是缺少这两个依赖。其他错误可以查看官网的"),a("a",{attrs:{href:"http://man7.org/tlpi/code/faq.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("FAQ"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("编译没错后，进入lib目录。")]),s._v(" "),a("p",[s._v("拷贝头文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo cp tlpi_hdr.h /usr/local/include/\nsudo cp get_num.h /usr/local/include/\nsudo cp error_functions.h /usr/local/include/\nsudo cp ename.c.inc /usr/local/include/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("制作dll：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gcc -c get_num.c error_functions.c\nar -crv libtlpi.a get_num.o error_functions.o\nsudo cp libtlpi.a /usr/local/lib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这时候，来到你的目录环境：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gcc copy.c -ltlpi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("环境ok。")])])}),[],!1,null,null,null);a.default=n.exports}}]);