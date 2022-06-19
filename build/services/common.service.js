"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersFromDB = exports.checkId = void 0;
var constants_js_1 = require("./constants.js");
var checkId = function (id) {
    return RegExp(constants_js_1.reg_uuid).test(id);
};
exports.checkId = checkId;
var getUsersFromDB = function (res, db, id) {
    var user = db.find(function (item) { return item.id === id; });
    if (user)
        return user;
    res.statusCode = constants_js_1.STATUS_CODES.NOT_FOUND;
    throw Error(constants_js_1.ERROR_MESSAGES.INVALID_USER);
};
exports.getUsersFromDB = getUsersFromDB;
