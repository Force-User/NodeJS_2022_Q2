"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = void 0;
var common_service_js_1 = require("./common.service.js");
var constants_js_1 = require("./constants.js");
var handleRequest = function (res, db, id) {
    var isValidId = (0, common_service_js_1.checkId)(id);
    if (isValidId)
        return res.end(JSON.stringify((0, common_service_js_1.getUsersFromDB)(res, db, id)));
    res.statusCode = constants_js_1.STATUS_CODES.BAD_REQEST;
    throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_ID);
};
exports.handleRequest = handleRequest;
