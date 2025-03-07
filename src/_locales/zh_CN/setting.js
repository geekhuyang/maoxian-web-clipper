(function (root, factory) {
  root.MxWcI18N_zh_CN = factory(root);
})(this, function(root, undefined) {
  const currValues = (root.MxWcI18N_zh_CN || {}).values || {};
  const values = {
    // labels
    "label.version": "当前版本：",
    "label.ruby-version": "Ruby 版本：",

    // title
    "title.intro": "简介",
    "title.feature": "功能",
    "title.status": "当前状态",
    "title.detail": "详情",

    "title.general": "基础设置",
    "title.storage": "存储设置",
    "title.html": "HTML",
    "title.markdown": "Markdown",
    "title.assistant": "助手设置",
    "title.public-plan": "公开的「计划」",
    "title.subscriptions": "我的订阅（已下载）",
    "title.subscription.name": "名称",
    "title.subscription.version": "版本",
    "title.subscription.size": "记录数",
    "title.subscription.plans": "查看计划",
    "title.subscription.url": "网址",
    "title.subscription.detail": "细节",
    "title.custom-plan": "自定义「计划」",
    "title.global-plan": "全局「计划」",
    "title.handler": "处理程序",
    "title.handler-browser": "浏览器",
    "title.handler-native-app": "本地程序",
    "title.handler-wiz-note-plus" :"为知笔记",
    "title.reset-and-backup": "重置与备份",
    "title.reset": "重置",
    "title.backup": "备份",
    "title.restore": "恢复",

    "title.control": "操作设置",
    "title.file-url": "本地网址",
    "title.clipping-content": "裁剪内容",

    // section markdown
    "title.markdown-template": "Markdown 模板",

    "title.advanced": "高级",
    "title.request": "HTTP 请求",
    "title.request-timeout": "超时设置",
    "title.request-max-tries": "最大尝试次数",
    "title.request-referrer-policy": "設置 Referrer",
    "title.request-cache": "缓存",
    "title.misc": "杂项",
    "title.offline-page": "离线索引页面",
    "title.refresh-history": "刷新裁剪历史",

    "title.save-format": "保存格式",
    "title.root-folder": "根目录",
    "title.default-category": "默认分类",
    "title.clipping-folder-name": "裁剪目录",
    "title.main-file": "主文件",
    "title.asset-file": "资源文件",
    "title.frame-file": "内嵌的网页文件",
    "title.info-file": "元信息文件",
    "title.title-file": "标题文件",

    "title.path": "存储路径",
    "path-intro.format": "格式：",
    "path.download": "下载路径",
    "path.filename": "文件名",
    "folder.root": "根目录",
    "folder.category": "分类目录",
    "folder.clipping": "裁剪目录",

    "help.label": "点击显示（或隐藏）帮助信息",
    "help.how-to-write-it": "如何编写",
    "help.avariable-variable": "可用变量",
    "help.examples": "使用样例",
    "help.md-template.example-a": "例一：在裁剪下来的内容后面追加裁剪信息",
    "help.md-template.example-b": "例二：在裁剪下来的内容最前方加上 YAML Front Matter",


    // variables that used in path, folder, filename
    "variable-in-folder": "以下变量可用于存储目录",
    "variable-in-filename": "以下变量可用于文件名",
    "variable-in-folder-and-filename": "以下变量可用于存储目录和文件名",
    "variable.storage-path"    : '<pre>$STORAGE-PATH    => <code>根目录</code></pre>',
    "variable.category-path"   : '<pre>$CATEGORY-PATH   => <code>根目录</code> / <code>分类目录</code></pre>',
    "variable.clipping-path"   : '<pre>$CLIPPING-PATH   => <code>根目录</code> / <code>分类目录</code> / <code> 裁剪目录</code></pre>',
    "variable.root-folder"     : '<pre>$ROOT-FOLDER     => <code>根目录</code></pre>',
    "variable.category-folder" : '<pre>$CATEGORY-FOLDER => <code>分类目录</code></pre>',
    "variable.clipping-folder" : '<pre>$CLIPPING-FOLDER => <code>裁剪目录</code></pre>',


    "variable.none": "<pre>$NONE => 表示空值（即无目录）</pre>",
    "variable.title": "<pre>$TITLE  => 网页标题 </pre>",
    "variable.domain": "<pre>$DOMAIN => 当前网站的域名 （例： blog.example.org） </pre>",
    "variable.format": "<pre>$FORMAT => 'html' 或者 'md' （取决于保存格式） </pre>",

    "variable.year"                : "<pre>$YYYY => 年 （4 位数字, 例： 2018）</pre>",
    "variable.short-year"          : "<pre>$YY   => 年 （2 位数字, 例： 18）</pre>",
    "variable.month"               : "<pre>$MM   => 月 （2 位数字, 01 ~ 12）</pre>",
    "variable.day"                 : "<pre>$DD   => 日 （2 位数字, 01 ~ 31）</pre>",
    "variable.hour"                : "<pre>$HH   => 时 （2 位数字, 00 ~ 23）</pre>",
    "variable.minute"              : "<pre>$mm   => 分 （2 位数字, 00 ~ 59）</pre>",
    "variable.second"              : "<pre>$SS   => 秒 （2 位数字, 00 ~ 59）</pre>",
    "variable.time-integer-second" : "<pre>$TIME-INTSEC => 以秒表示的裁剪时间（例：1578712781）.</pre>",
    "variable.md5-of-url"          : "<pre>$MD5URL => 文件网址的 MD5 值（长度为32，例：14b2881be9f76cd55ec3b4c72a08f349）</pre>",
    "variable.filename"            : "<pre>$FILENAME => 原文件的名字（不包含文件扩展名）</pre>",
    "variable.file-extension"      : "<pre>$EXT => 文件扩展名 （包含“.“，如：“.png“）</pre>",

    // variables that used in template

    "tpl-variable.title"        : "<pre>{{title}}       => 网页标题 </pre>",
    "tpl-variable.content"      : "<pre>{{content}}     => 裁剪后的内容（当选区不带标题时，加上标题）</pre>",
    "tpl-variable.content-only" : "<pre>{{contentOnly}} => 裁剪后的内容</pre>",
    "tpl-variable.url"          : "<pre>{{url}}         => 网址（URL）</pre>",
    "tpl-variable.category"     : "<pre>{{category}}    => 目录，该项可能为空白。</pre>",
    "tpl-variable.tags"         : "<Pre>{{tags}}        => 标签，为元组，即可能包含零个值，也可能包含多个值。",
    "tpl-variable.created-at"   : "<pre>{{createdAt}}   => 裁剪时间 (e.g. 2020-02-01 11:00:00)</pre>",
    "tpl-variable.year"         : "<pre>{{year}}        => 年 （4 位数字, 例： 2018）</pre>",
    "tpl-variable.sYear"        : "<pre>{{sYear}}       => 年 （2 位数字, 例： 18）</pre>",
    "tpl-variable.month"        : "<pre>{{month}}       => 月 （2 位数字, 01 ~ 12）</pre>",
    "tpl-variable.day"          : "<pre>{{day}}         => 日 （2 位数字, 01 ~ 31）</pre>",
    "tpl-variable.hour"         : "<pre>{{hour}}        => 时 （2 位数字, 00 ~ 23）</pre>",
    "tpl-variable.minute"       : "<pre>{{minute}}      => 分 （2 位数字, 00 ~ 59）</pre>",
    "tpl-variable.second"       : "<pre>{{second}}      => 秒 （2 位数字, 00 ~ 59）</pre>",
    "tpl-variable.intSec"       : "<pre>{{intSec}}      => 以秒表示的裁剪时间（例：1578712781）.</pre>",
    "tpl-variable.page-metas"   : '<pre>{{meta_*}}      => 网页元数据, "*" 是元数据的名字。 名字使用的都是小写字母。例如： 名字为 "Author"，则用 {{meta_author}} 来引用。<br>                   注意：元数据对于网页是可选的，也就是说，并不是所有网页都具有某一个元数据。',
    "tpl-variable.meta-keywords": "<pre>{{metaKeywords}}  => 网页关键字，为元组，即可能包含零个值，也可能包含多个值。",
    "tpl-variable.tags-and-keywords": "<pre>{{tagsNKeywords}} => 标签 + 网页关键字,，为元组，即可能包含零个值，也可能包含多个值。",
    "tpl-variable.i18n-none"         : "<pre>{{i18n_none}}         => 文本: 无</pre>",
    "tpl-variable.i18n-access"       : "<pre>{{i18n_access}}       => 文本: 访问</pre>",
    "tpl-variable.i18n-original-url" : "<pre>{{i18n_original_url}} => 文本: 原网址</pre>",
    "tpl-variable.i18n-created-at"   : "<pre>{{i18n_created_at}}   => 文本: 创建时间</pre>",
    "tpl-variable.i18n-category"     : "<pre>{{i18n_category}}     => 文本: 目录</pre>",
    "tpl-variable.i18n-tags"         : "<pre>{{i18n_tags}}         => 文本: 标签</pre>",
    "tpl-function.trim-fn"           : "<pre>{{trimFn}}  => 修剪函数：将内容两端的逗号（含英文逗号）和空格删除。",


    "path.download.intro": "下载路径： 该路径即是你浏览器设置的下载目录，如果你使用「本地程序」的话，该路径是你配置文件（config.yaml）里面的 data_dir 项所配置的目录。",
    "path.filename.intro": "文件名： 即保存下来的文件的名字，例如： <code>index.html</code>",
    "folder.root.intro": "根目录： 该目录被设计为扩展的存储入口，所有裁剪下来的文件都会存储在该目录下。请务必在设置文件的存储目录时，都包含它。",
    "folder.category.intro": "分类目录： 该目录是用于归类的，可由多级组成，其值由表单的输入决定，例如表单的输入项为 <code>新闻/体育</code> 那么会生成 <code>新闻</code> 这个目录，同时在新闻目录下生成 <code>体育</code> 这个子目录。",
    "folder.clipping.intro": "裁剪目录： 扩展可以为每次裁剪都生成一个裁剪目录，并把裁剪下来的文件保存在该目录下",

    // handler
    "handler.browser.name": "浏览器",
    "handler.browser.intro": "浏览器是默认的处理程序。是你安装完扩展后，唯一一个不用额外对接就可使用的处理程序",
    "handler.browser.feature.a": "下载裁剪结果到本地硬盘",
    "handler.browser.feature.b": "同步「离线索引页面」的裁剪记录",

    "handler.native-app.name": "本地程序",
    "handler.native-app.intro": "这是一个很小的本地程序，我们开发这个程序来增强 Maoxian 的能力。",
    "handler.native-app.feature.a": "保存裁剪结果 （用于绕过浏览器的下载功能，从而避免与下载管理扩展发生冲突）, 其存储位置也为本地硬盘",
    "handler.native-app.feature.b": "删除裁剪信息 （让我们可以删除裁剪历史的同时，删除其对应的文件）",
    "handler.native-app.feature.c": "刷新裁剪历史 （当你有两个裁剪源（比如：一台电脑上的两个浏览器或两台电脑上的浏览器）并且想让浏览器上的裁剪历史保持最新的时候，这一项非常有用。）",
    "handler.native-app.warning": "<strong> 警告! </strong><br /> 如果你启用「本地程序」, 你必须先 <a href='go.page:native-app' target='_blank'>安装它</a>，否则该处理程序无法正常工作",

    "handler.wiz-note-plus.name": "为知笔记",
    "handler.wiz-note-plus.intro": "为知笔记一个款跨平台云笔记客户端",
    "handler.wiz-note-plus.feature.a": "将网页剪裁保存到为知笔记数据库",
    "handler.wiz-note-plus.warning": "<strong> 警告！ </strong><br /> 如果你启用为知笔记，你必须先 <a href='https://github.com/altairwei/WizNotePlus/releases' target='_blank'>安装它</a>，并且剪裁时为知笔记必须处于启动状态，否则处理程序无法正常工作",



    // options
    "option.request-referrer-policy.origin-when-cross-origin": "同域请求时，Referrer 为全路径（请求域 + 请求路径），跨域请求时，Referrer 只包含请求域（协议 + 域名 + 端口）",
    "option.request-referrer-policy.origin": "Referrer 只包含请求域（协议 + 域名 + 端口）",
    "option.request-referrer-policy.no-referrer": "不发送 Referer",
    "option.request-referrer-policy.unsafe-url": "Referrer 为全路径（请求域 + 请求路径）",

    "option.capture.save-all": "保存所有",
    "option.capture.save-current": "保存当前",
    "option.capture.save-used": "只保存已使用的",
    "option.capture.save-image": "只保存图片",
    "option.capture.save-favicon": "只保存 favicon",
    "option.capture.remove": "移除",
    "option.capture.filter": "过滤器",
    "option.capture.filter-list": "过滤器组",

    // capture targets
    "capture.target.icon": "网站图标",
    "capture.target.image": "图片",
    "capture.target.css-rules": "样式规则",
    "capture.target.css-image": "样式图片",
    "capture.target.web-font": "Web 字体",
    "capture.target.audio": "声音",
    "capture.target.video": "影片",
    "capture.target.embed": "Embeds",
    "capture.target.object": "Objects",
    "capture.target.applet": "Applets",


    "notice.info.storage.browser": "使用浏览器来下载裁剪结果",
    "notice.info.storage.native-app": "通过本地安装的程序，来下载裁剪结果（如果你安装了某个管理下载的扩展，可通过该方式，绕过扩展互相冲突的问题）<br /><a href='go.page:native-app' target='_blank'>选择本选项需先安装「本地程序」</a>",
    "notice.info.storage.wiz-note-plus": "使用为知笔记保存剪裁结果<br />",

    "notice.info.offline-page.browser": "$BLANK",
    "notice.info.offline-page.native-app": "$BLANK",
    "notice.info.refresh-history.native-app": "$BLANK",

    "notice.warning.storage.browser": "$BLANK",
    "notice.warning.storage.native-app": "$BLANK",
    "notice.warning.storage.wiz-note-plus": "$BLANK",
    "notice.warning.offline-page.browser": "$BLANK",
    "notice.warning.offline-page.native-app": "$BLANK",
    "notice.warning.refresh-history.native-app": "$BLANK",

    "notice.danger.native-app-not-ready": "「本地程序」当前不可用 <br />错误信息： $MESSAGE",

    "notice.danger.wiz-note-plus-ready": "成功连接为知笔记。",
    "notice.danger.wiz-note-plus-not-ready": "为知笔记当前不可用，错误日志：$MESSAGE <br /> 很可能「为知笔记」没有启动。如果你尚未安装，请查看 <a href='https://github.com/altairwei/WizNotePlus/releases' target='_blank'>安装页面<a/>",

    // buttons
    "button.generate-now": "马上生成",
    "button.refresh-now": "马上刷新",
    "button.update-now": "马上更新",
    "button.save": "保存",
    "button.reset-to-default": "恢复到默认设置",
    "button.backup-to-file": "备份设置到文件",
    "button.restore-from-file": "从文件中恢复设置",

    // notice
    "notice.main-file-intro": "主文件是你裁剪下来的 HTML 文件（即网页文件）或者是 Markdown 文件（取决于保存格式是什么）",
    "notice.asset-file-intro": "资源文件指的是跟随网页的图片，样式，字体和网站图标（注：不包含脚本文件，居于安全考虑，MaoXian 不保存脚本文件）。",
    "notice.frame-file-intro": "顾名思意，这些网页内嵌在主网页中。在裁剪的过程中，如果保存格式为 HTML，则会把这些内嵌的网页另存为一个文件，并在主文件中引入。如果保存格式为 Markdown，则会把这些内嵌的网页的内容嵌入到主文件中。",
    "notice.info-file-intro": "元信息文件是用来记录整个裁剪过程所涉及的信息的，内容包括保存格式，裁剪时间，原网址，分类，标签等等。",
    "notice.title-file-intro": "标题文件是一个包含空内容的文件，其特点是文件名包含标题，如果你的主文件的路径不包含标题信息，则可以在主文件的同级目录中保存该文件，以便浏览，该文件为可选。",

    "notice.file-url.intro": "这一设置项，是用来告知浏览器扩展，你允许它访问本地网址 (file://打头的网址)",
    "notice.file-url.link-label": "查看如何设置",
    "notice.file-url.help-msg": "你将需要以下信息:",
    "notice.file-url.ext-id": "扩展标识",
    "notice.file-url-warning": "这个设置并不会改变你浏览器本身的设置，<br />请在确保你已经设置 ‘允许插件访问文件路径’ 后才勾选此项",

    "notice.capture-filter-intro": "通过下方输入框定义的规则，对引用的文件进行过滤，以选择自己想要保存的文件。",
    "notice.capture-filter-format": "「过滤器」由多个文件后缀名组成，中间用英文逗号隔开（如：<code>pdf,doc,xls</code>）。<br>当过滤器被使用的时候，这些文件后缀名会和引用的文件的后缀名进行匹配，匹配成功则保存。",
    "notice.capture-filter-list-format": "「过滤器组」包含一个或多个过滤器，裁剪时会依次进行匹配，当其中一个过滤器成功匹配，后面的过滤器会直接被忽略。<br />多个过滤器中间用竖杠符号（|）隔开（如：<code>过滤器A|过滤器B|过滤器C</code>。）",
    "notice.capture-filter-format-web-font": "「过滤器」由多个文件后缀名组成，中间用英文逗号隔开（如：<code>woff,woff2,ttf</code>）。<br>当过滤器被使用的时候，这些文件后缀名会和引用的文件的后缀名进行匹配，匹配成功则保存。",
    "notice.capture-web-font-extra-intro": "当所有过滤器都无法成功匹配时，会保存所有的字体文件。<br>如果你裁剪下来的网页始终会在现代浏览器上查看，建议使用过滤器组：<code>woff2|woff|otf|ttf</code><br>如果你裁剪下来的网页会在旧浏览器查看，建议使用过滤器组：<code>woff2,woff|otf,ttf</code>",
    "notice.capture-filter-variable.intro": "<strong>另：</strong> 扩展内置了一些指令可方便匹配一类扩展名。其使用方式与后缀名一样（例如：<code>&lt;images&gt;,pdf</code> 可匹配到所有图片文件和 pdf 文件）。可使用的指令如下：",
    "notice.capture-filter-variable.images": "&lt;images&gt; ： 可匹配所有图片文件后缀名",
    "notice.capture-filter-variable.audios": "&lt;audios&gt;  ： 可匹配所有声音文件后缀名",
    "notice.capture-filter-variable.videos": "&lt;videos&gt;  ： 可匹配所有影片文件后缀名",


    "notice.markdown-template": '使用下方的模板，控制裁剪结果的渲染。MaoXian 使用 mustache.js 来渲染这个模板，你可以在它的<a target="_blank" href="https://github.com/janl/mustache.js">项目页面</a>找到使用介绍。',
    "notice.root-folder": "<strong>注意：</strong><br />该项作为存储入口，最好一但设定好就不要变更它，如果你修改了这个值，文件系统里对应的文件夹名字也需要做对应的修改，以避免产生一旧一新两个存储入口。",
    "notice.clipping-folder-name": "MaoXian 可以为每次裁剪都创建一个目录，以用于存储裁剪结果，我们把这个目录叫做裁剪目录。",
    "notice.default-category": "默认分类指的是你在裁剪过程中，没有输入分类的情况下使用的值<br />使用 <strong>/</strong> 来分隔子文件夹<br />",
    "notice.clipping-handler.link-label": "安装地址",
    "notice.offline-page": "「离线索引页面」是一个静态的  HTML 页面, 使用这个页面，你可以脱离 MaoXian 扩展，从而离线地浏览或搜索你裁剪下来的信息。",
    "notice.offline-page.link-label": "点我了解更多",
    "notice.autogenerate-clipping-js": "<strong>自动生成脚本文件</strong><br />勾选这个之后，每一次裁剪网页或通过历史页面删除裁剪文件，插件都会自动更新此脚本文件。此脚本文件包含了你当前所有裁剪历史，该文件会被用于上面提到的「离线索引页面」.",
    "notice.clipping-js-path": "<strong>脚本文件的存储路径</strong><br />一般放到「离线索引页面」同一个目录下 <br />使用 <strong>$STORAGE-PATH</strong> 来表示： <code>下载路径</code> / <code>根目录</code>",
    "notice.refresh-history": "当你有两个裁剪源（比如：一台电脑上的两个浏览器或两台电脑上的浏览器）并且想让浏览器上的裁剪历史保持最新的时候，这一项非常有用。",
    "notice.assistant-intro": "使用「毛线助手」，我们可以对于某个网站的网页，预先定义一个「计划」，该计划包含一系列「动作」。当你对这个网站的网页进行裁剪时，该计划就会运用到网页上面。目前支持的「动作」包括： 选中元素、隐藏元素、显示元素以及修改元素的属性。",
    "notice.public-plan-intro": "「公开的计划列表」是由 众多 MaoXian 用户分享而来的。你可以通过订阅这些列表来获取大家分享的「计划」。",
    "notice.edit-subscription": "通过下方文本框编辑订阅信息，你可以使用「换行符」分隔多个订阅网址，任何使用 <code>#</code>开头的行将被视为注释。<br /><br /><strong>注意：</strong><br /> 1. 扩展提供的默认订阅网址，是没有拉取订阅信息的。如果你是第一次使用该功能，请点击「更新按钮」进行拉取。<br />2. 点击「保存按钮」并不会拉取订阅信息。你应该在保存成功后，通过点击「更新按钮」或者勾选「自动更新复选框」来拉取订阅信息。<br /><br /><a href='go.page:public-subscriptions' target='_blank'>查看可订阅列表</a>",
    "notice.custom-plan-intro": '由你编写的「计划」（ <a href="go.page:how-to-write-a-plan" target="_blank">了解如何编写「计划」</a>），自定义「计划」比公开的「计划」拥有更高的优先级',
    "notice.global-plan-intro": '全局「计划」可以应用到所有的网页（ <a href="go.page:how-to-write-a-plan" target="_blank">了解如何编写「计划」</a>）。',
    "notice.request-cache": '目前，只有 Firefox 支持缓存 HTTP 请求。',
    "notice.request-cache-applying": "<strong>警告:</strong><br /> 有关 HTTP 请求缓存的设置，需要重启浏览器才生效。",

    // label
    "label.storage-folder": "存储目录",
    "label.storage-filename": "文件名",
    "label.save-info-file-input": "保存元信息文件",
    "label.save-info-file-link": "（如何修改?）",
    "label.save-title-file-input": "保存标题文件",

    "label.enable-handler": "启用该处理程序",
    "label.file-url-input": "我设置好了 ‘允许插件访问文件路径’",
    "label.request-timeout-input": "请求的超时时长 (秒, 5 ~ 86400)",
    "label.request-max-tries-input": "请求的最大尝试次数，当该值大于 1 时，会在请求失败时进行重试，比如该值为 3，则会在失败时，最多重试 2 次。",
    "label.request-cache-size-input": "缓存容量（缓存多少个请求，0 ~ 500）",
    "label.request-cache-css-input": "缓存网页样式 （CSS）",
    "label.request-cache-image-input": "缓存图片",
    "label.request-cache-web-font-input": "缓存字体",
    "label.clip-information-input": "追加裁剪信息 （原网址、时间、目录和标签）到内容尾部",
    "label.html-custom-body-bg-css-enabled-input": "允许自定义 body 标签的 CSS 背景颜色",
    "label.save-domain-tag-input": "裁剪时，添加当前域名为标签",
    "label.mouse-mode-enabled-input": "鼠标友好模式",
    "label.input-field-save-format-enabled": "启用表单上的格式选择",
    "label.auto-input-last-category": "自动输入上次使用的目录",
    "label.remember-selection-input": "记住选区，并在下次尝试自动选中",
    "label.autogenerate-clipping-js-input": "自动生成脚本文件",
    "label.not-generated-yet": "还没有生成过",
    "label.generate-now-msg-sent": "生成命令已经发送",
    "label.generate-now-success": "生成成功",
    "label.last-generate-time": "上次生成时间",
    "label.auto-refresh-history-input": "自动刷新裁剪历史(每次你打开浏览器都会进行刷新)",
    "label.refresh-now-msg-sent": "刷新命令已发送",
    "label.refresh-now-success": "刷新成功",
    "label.last-refresh-time": "上次刷新时间",
    "label.communicate-with-third-party-input": "开启第三方消息（API）",
    "label.auto-run-content-scripts-input": "网页加载完成即运行脚本（除非你使用了 API 并且需要自动裁剪才需要开启此项）",
    "label.assistant-enabled-input": "启用助手",
    "label.auto-update-public-plan-input": "自动更新 (每次你打开浏览器都会尝试进行更新)",
    "label.backup-setting-page-config-input": "设置页面的配置信息",
    "label.backup-history-page-config-input": "历史页面的配置信息",
    "label.backup-assistant-data-input": "毛线助手的数据（自定义的「计划」，订阅信息 和 已下载的「计划」）",
    "label.backup-selection-data-input": "已记住的选区信息",

    "label.html-compress-css-input": "压缩样式（CSS）, 所有非必须的空白（空格，换行符和缩进）都会被移除，该操作可减少裁剪下来的样式的体积。同时，压缩后的样式也会丢失可读性",




    "notice.icon.intro": "网站图标包含显示在浏览器标签上的小图片（洋名为：favicon），也包含显示在移动设备的 Home 屏幕上或 APP 上的图标",
    "notice.image.intro": "图片只包含那些表示内容的图片，比如：文章例图，用户头像等等，但不包括用于改变网站样式的图片（如： 背景图），对于同一张图片，网页可能会定义不同清晰度和尺寸的几个图片文件供浏览器选择（根据设备和网速）。",
    "notice.css-rules.intro": "样式规则定义网页上每个元素的样式，一张网页通常有成百上千条规则。而由于我们只会裁剪网页的一部分，这意味着只需要保存一部分规则就足以正常显示网页。",
    "notice.css-image.intro": "样式图片即修饰网页样式的图片，如：元素背景图，边框背景图，光标图片等等。这类图片一般与网页内容无关，可安全移除。",
    "notice.web-font.intro": "Web 字体是网页嵌入的字体文件，常用于改变网页文本的字体样式，也会用于引入图标。网页为了兼容浏览器，会为同一个字体引入多个不同格式的字体文件。",
    "notice.audio.intro": "声音是网页通过 HTML5 技术嵌入的音频文件，不包含通过其他方式嵌入的声音（建议移除）",
    "notice.video.intro": "影片是网页通过 HTML5 技术嵌入的视频文件，不包含通过其他方式嵌入的影片，由于影片文件通常较大，这会导致保存流程可能会大大加长（建议移除）",

    "notice.embed.intro": "EMBED 元素 - 用于向网页中插入外部文件，通常需要浏览器安装对应的插件才可正常显示，有时会引入图片或媒体文件（建议只保存图片文件）",
    "notice.object.intro": "OBJECT 元素 - 用于向网页中插入外部文件，通常需要浏览器安装对应的插件才可正常显示，有时会引入图片或媒体文件（建议只保存图片文件）",
    "notice.applet.intro": "APPLET 元素 - 用于向网页中插入 JAVA 小程序，大多数现代浏览器都不再支持（建议移除）",

    "label.last-update-time": "上次更新时间",
    "label.update-now-success": "更新成功",
    "label.reset-to-default-intro": "下方列出的项目都会被重置。",
    "label.reset-to-default-warning": "所有的修改都将被移除，你确定要恢复到默认设置？",
    "label.reset-to-default-success": "重置成功",
    "label.restore-from-file-success": "数据导入成功",

    // placeholder
    "placeholder.notblank": "此项不能为空",
  };
  return { values: Object.assign({}, currValues, values) }
});
