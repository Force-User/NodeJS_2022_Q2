"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var get_service_js_1 = require("../services/get.service.js");
var getUsers = function (req, res, db, id) {
    try {
        if (id)
            return (0, get_service_js_1.handleRequest)(res, db, id);
        if (req.url === "/users") {
            res.end(JSON.stringify(db));
        }
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.getUsers = getUsers;
