"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var post_service_js_1 = require("../services/post.service.js");
var createUser = function (req, res, db) {
    try {
        if (req.url === "/users") {
            var body_1 = "";
            req.on("data", function (chunk) {
                body_1 += chunk.toString();
            });
            req.on("end", function () {
                (0, post_service_js_1.handleRequest)(body_1, req, res, db);
            });
            return;
        }
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.createUser = createUser;
