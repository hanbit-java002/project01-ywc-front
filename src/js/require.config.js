require.config({
    baseUrl: global.root,
    paths: {
        "async"         : "plugins/requirejs/async",
        "jquery"        : "plugins/jquery/jquery.min",
        "bootstrap"     : "plugins/bootstrap/js/bootstrap.min",
        "clipboard"     : "plugins/clipboard/clipboard.min",
		"jquery.cookie" : "plugins/jquery.cookie/jquery.cookie.min",
        "common"        : "js/common",
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
        },
		"jquery.cookie": {
			deps: ["jquery"],
		},
    },
    deps: [],
});
