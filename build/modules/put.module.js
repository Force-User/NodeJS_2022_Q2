"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
var common_service_js_1 = require("../services/common.service.js");
var constants_js_1 = require("../services/constants.js");
var put_service_js_1 = require("../services/put.service.js");
var updateUser = function (req, res, db, id) {
    try {
        if ((0, common_service_js_1.checkId)(id)) {
            var body_1 = "";
            req.on("data", function (chunk) {
                body_1 += chunk.toString();
            });
            req.on("end", function () {
                (0, put_service_js_1.handleRequest)(body_1, res, db, id);
            });
            return;
        }
        res.statusCode = constants_js_1.STATUS_CODES.BAD_REQEST;
        throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_ID);
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.updateUser = updateUser;
