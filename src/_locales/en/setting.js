(function (root, factory) {
  root.MxWcI18N_en = factory(root);
})(this, function(root, undefined) {
  const currValues = (root.MxWcI18N_en || {}).values || {};
  const values = {
    // labels
    "label.version": "Current Version: ",
    "label.ruby-version": "Ruby Version: ",

    // title
    "title.intro": "Intro",
    "title.feature": "Features",
    "title.status": "Status",
    "title.detail": "Detail",

    "title.general": "General",
    "title.storage": "Storage",
    "title.html": "HTML",
    "title.markdown": "Markdown",
    "title.assistant": "Assistant",
    "title.public-plan": "Public plan",
    "title.subscriptions": "Subscriptions",
    "title.subscription.name": "Name",
    "title.subscription.version": "Version",
    "title.subscription.size": "Size",
    "title.subscription.plans": "Plans",
    "title.subscription.url": "Url",
    "title.subscription.detail": "Detail",
    "title.custom-plan": "Custom plan",
    "title.global-plan": "Global plan",
    "title.handler": "Handler",
    "title.handler-browser": "Browser",
    "title.handler-native-app": "Native App",
    "title.handler-wiz-note-plus" :"WizNotePlus",
    "title.reset-and-backup": "Reset / Backup",
    "title.reset": "Reset",
    "title.backup": "Backup",
    "title.restore": "Restore",

    "title.control": "Control",
    "title.file-url": "File URL",
    "title.clipping-content": "Clipping Content",

    // section markdown
    "title.markdown-template": "Markdown Template",

    "title.advanced": "Advanced",
    "title.request": "HTTP Request",
    "title.request-timeout": "Timeout",
    "title.request-max-tries": "Maximum tries",
    "title.request-referrer-policy": "Referrer Policy",
    "title.request-cache": "Cache",
    "title.misc": "Misc",
    "title.offline-page": "Offline Index Page",
    "title.refresh-history": "Refresh History",


    "title.save-format": "Save Format",
    "title.root-folder": "Root Folder",
    "title.default-category": "Default Category",
    "title.clipping-folder-name": "Clipping Folder",
    "title.main-file": "Main File",
    "title.asset-file": "Asset File",
    "title.frame-file": "Frame File",
    "title.info-file": "Information File",
    "title.title-file": "Title File",

    "title.path": "Path",
    "path-intro.format": "Format: ",
    "path.download": "download path",
    "path.filename": "filename",
    "folder.root": "root folder",
    "folder.category": "category folder",
    "folder.clipping": "clipping folder",

    "help.label": "Click me to show (or hide) help content",
    "help.how-to-write-it": "How to write it",
    "help.avariable-variable": "Variables",
    "help.examples": "Examples",
    "help.md-template.example-a": "Example A: append clipping information to the end",
    "help.md-template.example-b": "Example B: add YAML-front-matter at the beginning",

    // variables that used in path, folder, filename
    "variable-in-folder": "Belowing variables can be used in Saving Folder",
    "variable-in-filename": "Belowing variables can be used in Filename",
    "variable-in-folder-and-filename": "Belowing variables can be used in both Saving folder and Filename",
    "variable-intro": "<strong>Avariable variables are:</strong>",
    "variable.storage-path"    : '<pre>$STORAGE-PATH    => <code>root folder</code></pre>',
    "variable.category-path"   : '<pre>$CATEGORY-PATH   => <code>root folder</code> / <code>category folder</code></pre>',
    "variable.clipping-path"   : '<pre>$CLIPPING-PATH   => <code>root folder</code> / <code>category folder</code> / <code>clipping folder</code></pre>',
    "variable.root-folder"     : '<pre>$ROOT-FOLDER     => <code>root folder</code></pre>',
    "variable.category-folder" : '<pre>$CATEGORY-FOLDER => <code>category folder</code></pre>',
    "variable.clipping-folder" : '<pre>$CLIPPING-FOLDER => <code>clipping folder</code></pre>',

    "variable.none": "<pre>$NONE => empty value (not category)</pre>",
    "variable.title": "<pre>$TITLE  => title </pre>",
    "variable.domain": "<pre>$DOMAIN => Domain of current website (e.g. blog.example.org) </pre>",
    "variable.format": "<pre>$FORMAT => 'html' or 'md' (depends on saving format) </pre>",

    "variable.year"                : "<pre>$YYYY => year (4 digits, e.g. 2018)</pre>",
    "variable.short-year"          : "<pre>$YY   => year (2 digits, e.g. 18)</pre>",
    "variable.month"               : "<pre>$MM   => month (2 digits, 01 ~ 12)</pre>",
    "variable.day"                 : "<pre>$DD   => day (2 digits, 01 ~ 31)</pre>",
    "variable.hour"                : "<pre>$HH   => hour (2 digits, 00 ~ 23)</pre>",
    "variable.minute"              : "<pre>$mm   => minute (2 digits, 00 ~ 59)</pre>",
    "variable.second"              : "<pre>$SS   => second (2 digits, 00 ~ 59)</pre>",
    "variable.time-integer-second" : "<pre>$TIME-INTSEC => clipping time in seconds (e.g. 1578712781)</pre>",
    "variable.md5-of-url"          : "<pre>$MD5URL => MD5 value of file's URL (length: 32, e.g. 14b2881be9f76cd55ec3b4c72a08f349)</pre>",
    "variable.filename"            : "<pre>$FILENAME => file's original name (exclude file extension)</pre>",
    "variable.file-extension"      : '<pre>$EXT => file extension (include ".", such as ".png")</pre>',

    // variables that used in template

    "tpl-variable.title"        : "<pre>{{title}}       => title </pre>",
    "tpl-variable.content"      : "<pre>{{content}}     => the clipped content (add title if the selection doesn't contains title)</pre>",
    "tpl-variable.content-only" : "<pre>{{contentOnly}} => the clipped content</pre>",
    "tpl-variable.url"          : "<pre>{{url}}         => URL</pre>",
    "tpl-variable.category"     : "<pre>{{category}}    => category, the value could be empty</pre>",
    "tpl-variable.tags"         : "<Pre>{{tags}}        => tags, this is an array. It may has multiple tags or empty.</pre>",
    "tpl-variable.created-at"   : "<pre>{{createdAt}}   => clipping time (e.g. 2020-02-01 11:00:00)</pre>",
    "tpl-variable.year"         : "<pre>{{year}}        => year (4 digits, e.g. 2018)</pre>",
    "tpl-variable.sYear"        : "<pre>{{sYear}}       => short year (2 digits, e.g. 18)</pre>",
    "tpl-variable.month"        : "<pre>{{month}}       => month (2 digits, 01 ~ 12)</pre>",
    "tpl-variable.day"          : "<pre>{{day}}         => day (2 digits, 01 ~ 31)</pre>",
    "tpl-variable.hour"         : "<pre>{{hour}}        => hour (2 digits, 00 ~ 23)</pre>",
    "tpl-variable.minute"       : "<pre>{{minute}}      => minute (2 digits, 00 ~ 59)</pre>",
    "tpl-variable.second"       : "<pre>{{second}}      => second (2 digits, 00 ~ 59)</pre>",
    "tpl-variable.intSec"       : "<pre>{{intSec}}      => clipping time in seconds (e.g. 1578712781)</pre>",
    "tpl-variable.page-metas"   : '<pre>{{meta_*}}      => meta data of web page, "*" is the keywork name. Keyword names are always lower case (e.g. {{meta_author}}).<br>                   NOTE that meta datas are optional for web page.</pre>',
    "tpl-variable.meta-keywords": "<pre>{{metaKeywords}}  => keywords, this is an array. It may has multiple keywords or empty.</pre>",
    "tpl-variable.tags-and-keywords": "<pre>{{tagsNKeywords}} => tags + keywords, this is an array. It may has multiple items or empty.</pre>",
    "tpl-variable.i18n-none"         : "<pre>{{i18n_none}}         => text: none</pre>",
    "tpl-variable.i18n-access"       : "<pre>{{i18n_access}}       => text: access</pre>",
    "tpl-variable.i18n-original-url" : "<pre>{{i18n_original_url}} => text: Original Url</pre>",
    "tpl-variable.i18n-created-at"   : "<pre>{{i18n_created_at}}   => text: Created At</pre>",
    "tpl-variable.i18n-category"     : "<pre>{{i18n_category}}     => text: Category</pre>",
    "tpl-variable.i18n-tags"         : "<pre>{{i18n_tags}}         => text: Tags</pre>",
    "tpl-function.trim-fn"           : "<pre>{{trimFn}}  => This function remove commas and spaces from the two ends of the content.",


    "path.download.intro": "download path： Download location of your browser, If you use NativeApp to save clipping file, this path is the value of \"data_dir\" in configure file (config.yaml) of NativeApp.",
    "path.filename.intro": "filename： The filename of downloaded file, such as <code>index.html</code>.",
    "folder.root.intro": "root folder： It was designed to use as storage entry, all clipped files will storage under this folder. When you configure each file's Saving Folder, make sure you contains it.",
    "folder.category.intro": "category folder: This part is used to category your clippings. It's value depends on what you input in saving form. Let's assume your input value is <code>news/sports</code>, then extension will create a folder named <code>news</code> and a subfolder named <code>sports</code>.",
    "folder.clipping.intro": "clipping folder： MaoXian can create a clipping folder in every clipping, and saves clipping files inside it.",

    // handler
    "handler.browser.name": "Browser",
    "handler.browser.intro": "Browser is the built-in handler.",
    "handler.browser.feature.a": "Save clipping files to your hard disk",
    "handler.browser.feature.b": "Synchronize offline index page",

    "handler.native-app.name": "Native App",
    "handler.native-app.intro": "This is a little application. We develope it to enhance MaoXian’s abilities.",
    "handler.native-app.feature.a": "Save clipping file (to avoid conflic with download manage extension)",
    "handler.native-app.feature.b": "Delete clipping file (when you delete a clipping record in clipping history page, it delete files that relative to that record)",
    "handler.native-app.feature.c": "Refresh history (This is useful when you have two clipping sources (e.g. two browsers on same computer or different computers) and want to keep clipping history latest)",
    "handler.native-app.warning": "<strong> Warning! </strong><br /> If you enable this handler, you must <a href='go.page:native-app' target='_blank'>install native application</a> first.",

    "handler.wiz-note-plus.name": "WizNotePlus",
    "handler.wiz-note-plus.intro": "WizNotePlus is a cross-platform cloud based note-taking client.",
    "handler.wiz-note-plus.feature.a": "Save clipping file to WizNotePlus database.",
    "handler.wiz-note-plus.warning": "<strong> Warning! </strong><br /> If you enable this handler, you must <a href='https://github.com/altairwei/WizNotePlus/releases' target='_blank'>install WizNotePlus application</a> first.",



    // options
    "option.request-referrer-policy.origin-when-cross-origin": "originWhenCrossOrigin: full path (origin + path) when request to same origins, origin (protocol + host + port) only when request to other origins.",
    "option.request-referrer-policy.origin": "origin: origin only (protocol + host + port).",
    "option.request-referrer-policy.no-referrer": "noReferrer: The Referer header will not be sent.",
    "option.request-referrer-policy.unsafe-url": "unsafeUrl: The Referer header will include full path (origin + path).",

    "option.capture.save-all": "Save all",
    "option.capture.save-current": "Save current",
    "option.capture.save-used": "Save used",
    "option.capture.save-image": "Save images",
    "option.capture.save-favicon": "Save favicons",
    "option.capture.remove": "Remove",
    "option.capture.filter": "Filter",
    "option.capture.filter-list": "Filter list",


    // capture targets
    "capture.target.icon": "Site Icons",
    "capture.target.image": "Images",
    "capture.target.css-rules": "Style Rules",
    "capture.target.css-image": "Style Images",
    "capture.target.web-font": "Web Fonts",
    "capture.target.audio": "Audios",
    "capture.target.video": "Videos",
    "capture.target.embed": "Embeds",
    "capture.target.object": "Objects",
    "capture.target.applet": "Applets",


    "notice.info.storage.browser": "Use browser to download clipping result.<br />",
    "notice.info.storage.native-app": "Use a native application to save clipping result ( If you already install some download manage extension, your can choose this option to avoid conflic between extension), You need to <a href='go.page:native-app' target='_blank'>install a native application</a>.",
    "notice.info.storage.wiz-note-plus": "Use WizNotePlus to save clipping result.<br />",

    "notice.info.offline-page.browser": "$BLANK",
    "notice.info.offline-page.native-app": "$BLANK",
    "notice.info.refresh-history.native-app": "$BLANK",

    "notice.warning.storage.browser": "$BLANK",
    "notice.warning.storage.native-app": "$BLANK",
    "notice.warning.storage.wiz-note-plus": "$BLANK",
    "notice.warning.offline-page.browser": "$BLANK",
    "notice.warning.offline-page.native-app": "$BLANK",
    "notice.warning.refresh-history.native-app": "$BLANK",

    "notice.danger.native-app-not-ready": "Native App is not ready yet.<br />ErrorMessage: $MESSAGE",

    "notice.danger.wiz-note-plus-ready": "Connected to WizNotePlus successfully.",
    "notice.danger.wiz-note-plus-not-ready": "WizNotePlus is not ready yet, error message: $MESSAGE. <br />It seems like you haven't open it. If you haven't install it, please visit: (<a href='https://github.com/altairwei/WizNotePlus/releases' target='_blank'>How to install it</a>)",

    // buttons
    "button.generate-now": "Generate Now",
    "button.refresh-now": "Refresh Now",
    "button.update-now": "Update Now",
    "button.save": "Save",
    "button.reset-to-default": "Reset to default settings",
    "button.backup-to-file": "Backup to file",
    "button.restore-from-file": "Restore from file",

    // notices
    "notice.main-file-intro": "Main file is the HTML file or the Markdown file (depends on which format that you configure to save) that you clip",
    "notice.asset-file-intro": "Asset files are image files, style files, web font files and website icon files (notice that this doesn't include script files, MaoXian won't save script files due to security reason)",
    "notice.frame-file-intro": "Frame file is another webpage that is embedded in a webpage. In the process of clipping, MaoXian will save these files if your saving format is HTML. on the other hand, MaoXian will embed it's content into main file if saving format is Markdown",
    "notice.info-file-intro": "Information file (or meta file) is used to save clipping information (includes saving format, clipping time, original url, category, tags etc.)",
    "notice.title-file-intro": "Title file is just an empty file with a filename that contains the title. it's useful, expecially when the path of main file doesn't contains title information, save this file alongside the main file for more conviniently browser.",

    "notice.file-url.intro": "This item is to tell extension that your allow it to access file URLs (file://).",
    "notice.file-url.link-label": "Learn how to setting",
    "notice.file-url.help-msg": "Your will need message below:",
    "notice.file-url.ext-id": "Extension identify",
    "notice.file-url-warning": "This item will not change your browser's setting.<br />Only check this after you allow browser to access file URLs.",

    "notice.capture-filter-intro": "Use belowing input box to define what types of files you want to save",
    "notice.capture-filter-format": "A filter is composed of multiple file extensions which are seperated by comma (e.g. <code>pdf,doc,xls</code>). <br>When a filter is used, it matches these file extensions with referred files'. If a referred file matches, it will be saved",
    "notice.capture-filter-list-format": "A filter list contains multiple filters. These filters will match one by one. If there is one filter that matches, the rest will be ignored. <br /> You can use '|' to seperate these filters (like: <code>filterA|filterB|filterC)",
    "notice.capture-filter-format-web-font": "A filter is composed of multiple file extensions which are seperated by comma (e.g. <code>woff,woff2,ttf</code>). <br>When a filter is used, it matches these file extensions with referred files'. If a referred file matches, it will be saved",
    "notice.capture-web-font-extra-intro": "If all filters can't match, all font files will be saved.<br>If you always browser the clipped web pages on modern browsers, the recommended filter list is <code>woffs|woff|otf|ttf</code><br>If you want to support some older browsers, the recommend filter list is <code>woff2,woff|otf,ttf</code>",
    "notice.capture-filter-variable.intro": "<strong>Note：</strong> MaoXian have some built-in variables that can be used to match a tipical types of file extensions (e.g. <code>&lt;images&gt;,pdf</code> can match all images and pdf files). All variables are :",
    "notice.capture-filter-variable.images": "&lt;images&gt; : can match all image file extensions",
    "notice.capture-filter-variable.audios": "&lt;audios&gt; : can match all audio file extensions",
    "notice.capture-filter-variable.videos": "&lt;videos&gt; : can match all video file extensions",


    "notice.markdown-template": 'Using template below to configure which information you want to save. MaoXian uses mustache.js to render this template, you can go to their <a target="_blank" href="https://github.com/janl/mustache.js">project</a> to see the usage.',

    "notice.root-folder": "<strong>Notice:</strong><br /> This folder is used as storage entry, We suggest you don't change it after you set it right. If you do want to change it, you should change the name of folder in your file system too. So that you won't get two storage entry.",
    "notice.default-category": "Default category is the value that will be used if you don't specify a category in saving form.<br />Use <strong>/</strong> to separate sub category<br />",
    "notice.clipping-folder-name": "MaoXian can creates a directory to store clipping result in every clipping, we call this directory clipping folder.",
    "notice.clipping-handler.link-label": "install native App",
    "notice.offline-page": "Offline index page is a static HTML page which can be used to browse your clippings without MaoXian Web Clipper or network. ",
    "notice.offline-page.link-label": "Learn more detail",
    "notice.autogenerate-clipping-js": "<strong>Autogenerate Javascript File</strong><br />Everytime when you clip a web page, or delete a clipping history, MaoXian will generate a javascript file contains all your clippings and save to the path you configure. this script file will be accessed by offline web page that you downloaded.",
    "notice.clipping-js-path": "<strong>Clipping javascript Path</strong><br />Where to save clipping javascript file. <br />Use <strong>$STORAGE-PATH</strong> to represent <code>download path</code> / <code>root folder</code>",
    "notice.refresh-history": "This is useful when you have two clipping sources(e.g. two browsers on same computer or different computers) and want to keep clipping history latest.",
    "notice.assistant-intro": "Using MaoXian Assistant, you can predefine some actions in a plan, and this plan will be applied to the webpage that you're going to clip. These actions includes picking an element, hiding an element, showing an element and changing attributes of an element.",
    "notice.public-plan-intro": "Public Plans are contributed by every MaoXian user. so that more people can use it.",
    "notice.edit-subscription": "Using input field below to edit your subscriptions. Using line break to separate subscription. Any line begin with <code>#</code> will be treated as comment. <br /><br /><strong>Notice:</strong><br />1. The default subscription url that provided by extension hasn't download yet, If you are first time to using this function, click \"Update Now\" button to download it. <br />2. Click \"Save\" button won't trigger any download. So after your subscriptions saved, you should click \"Update Now\" or enable \"auto update\" to download it<br /><br />See <a href='go.page:public-subscriptions' target='_blank'>this page</a> for more subscriptions.",
    "notice.custom-plan-intro": 'Custom Plans are written by you (<a href="go.page:how-to-write-a-plan" target="_blank">Learn how to write a plan</a>). This list has higher priority than public plans.',
    "notice.global-plan-intro": 'The Global Plan will be applied to every web pages (<a href="go.page:how-to-write-a-plan" target="_blank">Learn how to write a plan</a>).',
    "notice.request-cache": 'Currently, only Firefox supports request cache.',
    "notice.request-cache-applying": "<strong>Warning:</strong><br />The settings of cache will only be applied after you restart the browser.",


    // label
    "label.storage-folder": "Saving Folder",
    "label.storage-filename": "Filename",
    "label.save-info-file-input": "Save Information File",
    "label.save-info-file-link": "(How to change it?)",
    "label.save-title-file-input": "Save Title File",

    "label.enable-handler": "Enable this handler",
    "label.file-url-input": "I enabled 'allow file scheme access' ",
    "label.request-timeout-input": "Timeout for performing a request (secs, 5 ~ 84600)",
    "label.request-max-tries-input": "Maximum tries to perform a request, If this value is bigger than one, that means we'll resend the reqeust if it fails",
    "label.request-cache-size-input": "Cache size (how many requests we'll cache, 0 ~ 500)",
    "label.request-cache-css-input": "Cache stylesheets (CSS)",
    "label.request-cache-image-input": "Cache images",
    "label.request-cache-web-font-input": "Cache web fonts",
    "label.clip-information-input": "Append clipping information (original url, time, category and tags) to clippted content",
    "label.html-custom-body-bg-css-enabled-input": "Enable custom CSS background color for body tag.",
    "label.save-domain-tag-input": "Save current domain as tag",
    "label.mouse-mode-enabled-input": "Mouse friendly mode",
    "label.input-field-save-format-enabled": "Enable selecting save format in form",
    "label.auto-input-last-category": "Auto input the last category",
    "label.remember-selection-input": "Remember selection and try to apply it next time",
    "label.autogenerate-clipping-js-input": "Autogenerate javascript file",
    "label.not-generated-yet": "Not generated yet",
    "label.generate-now-msg-sent": "Generate command has been sent",
    "label.generate-now-success": "Generate success",
    "label.last-generate-time": "Last generated time",
    "label.auto-refresh-history-input": "Auto refresh history (when you open the browser)",
    "label.refresh-now-msg-sent": "Refresh command has been sent",
    "label.refresh-now-success": "Refresh success",
    "label.last-refresh-time": "Last refreshed time",
    "label.communicate-with-third-party-input": "Communicate with third party (API)",
    "label.auto-run-content-scripts-input": "Auto run content scripts when the web page has loaded (only enable it, if you are programing using MaoXian's API and want to clip web page automatically)",
    "label.assistant-enabled-input": "Enable assistant",
    "label.auto-update-public-plan-input": "Auto update public plan (when you open the browser)",

    "label.backup-setting-page-config-input": "Setting page's configuration",
    "label.backup-history-page-config-input": "History page's configuration",
    "label.backup-assistant-data-input": "Assistant data (subscriptions and plans)",
    "label.backup-selection-data-input": "Remembered selection",

    "label.html-compress-css-input": "Compress style(CSS) source code, includes inline styles and external styles. Compress means remove all unnecessary white space, this operation can reduce the captured style content size",


    "notice.icon.intro": "Site icons are website favicons (those little images that shown on browser tabs) or the icons for the home screen and apps on mobile devices.",
    "notice.image.intro": "Images only includes those that represent as content, such as article figures, profile avatars but not includes background images. For the same image there might be several different files that have different quality and size which will be chosen by browsers according to devices and network speed",
    "notice.css-rules.intro": "Style rules define how every elements on web page looks like",
    "notice.css-image.intro": "Style images are those that decrote the web page styles (generally content unrealative), suce as background images, border images, cursor images etc.",
    "notice.web-font.intro": "Web fonts are font files that embed by web page in order to change how the text will looks like, and sometimes are also used to define icons. In order to support different types and versions of browser, the web page might define several web font files with different types for the same font.",

    "notice.audio.intro": "Audios are sound files that embed by web page using HTML5 technology, not includes those that embed through other methods",
    "notice.video.intro": "Videos are video files that embed by web page using HTML5 technology, not includes those that embed through other methods (like: Adobe Flash Player). Because video files are typically large, save these files will likely make the saving process much longer",
    "notice.embed.intro": "Embeds are used to include some complicated files which are so difficult to render that the browser needs to install plugins to corrently handle it. and will rarely include images, audios or videos (We suggest you only save images)",
    "notice.object.intro": "Objects are used to include some complicated files which are so difficult to render that the browser needs to install plugins to corrently handle it. and will rarely include images, audios or videos (We suggest you only save images)",
    "notice.applet.intro":  "Applets are used to include JAVA applets which are not longer supported by most modern browsers",


    "label.last-update-time": "Last updated time",
    "label.update-now-success": "Update success",
    "label.reset-to-default-intro": "Reset All items below",
    "label.reset-to-default-warning": "All your settings will be reset to default, are you sure?",
    "label.reset-to-default-success": "Reset success",
    "label.restore-from-file-success": "Restore success",


    // placeholder
    "placeholder.notblank": "This value can not be blank!",
  };
  return { values: Object.assign({}, currValues, values) }
});
