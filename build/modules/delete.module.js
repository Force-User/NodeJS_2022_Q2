"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
var common_service_js_1 = require("../services/common.service.js");
var constants_js_1 = require("../services/constants.js");
var delete_service_js_1 = require("../services/delete.service.js");
var deleteUser = function (res, db, id) {
    try {
        if ((0, common_service_js_1.checkId)(id)) {
            (0, delete_service_js_1.deleteCurrentUser)(res, id, db);
            res.statusCode = constants_js_1.STATUS_CODES.NO_CONTENT;
            res.end();
            return;
        }
        res.statusCode = constants_js_1.STATUS_CODES.BAD_REQEST;
        throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_ID);
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.deleteUser = deleteUser;
