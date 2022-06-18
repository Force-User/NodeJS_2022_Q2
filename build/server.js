"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var delete_module_js_1 = require("./modules/delete.module.js");
var get_module_js_1 = require("./modules/get.module.js");
var post_module_js_1 = require("./modules/post.module.js");
var put_module_js_1 = require("./modules/put.module.js");
var constants_js_1 = require("./services/constants.js");
var process_1 = __importDefault(require("process"));
var db = [];
var server = http_1.default.createServer(function (req, res) {
    console.log(process_1.default.env.PORT);
    var _a = req.url.split("/"), _ = _a[0], path = _a[1], id = _a[2];
    if (path !== "users") {
        res.statusCode = 404;
        res.end(constants_js_1.ERROR_MESSAGES.INVALID_URL);
        return;
    }
    switch (req.method) {
        case constants_js_1.METHODS.GET:
            (0, get_module_js_1.getUsers)(req, res, db, id);
            break;
        case constants_js_1.METHODS.POST:
            (0, post_module_js_1.createUser)(req, res, db);
            break;
        case constants_js_1.METHODS.PUT:
            (0, put_module_js_1.updateUser)(req, res, db, id);
            break;
        case constants_js_1.METHODS.DELETE:
            (0, delete_module_js_1.deleteUser)(res, db, id);
            break;
    }
});
server.listen(3004);
