require.config({
    baseUrl: global.root,

    paths: {
        "async"         : "js/plugins/requirejs/async",

        "jquery"        : "js/plugins/jquery/jquery.min",
        "bootstrap"     : "js/plugins/bootstrap/js/bootstrap.min",
        "clipboard"     : "js/plugins/clipboard/clipboard.min",

        "common"        : "js/common",
    },

    shim: {
        "bootstrap": {
            deps: ["jquery"],
        },
    },

    deps: [],
});
