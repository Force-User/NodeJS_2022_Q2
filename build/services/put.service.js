"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = exports.checkFields = exports.checkHobbies = void 0;
var querystring_1 = require("querystring");
var common_service_js_1 = require("./common.service.js");
var constants_js_1 = require("./constants.js");
var checkHobbies = function (hobbies) {
    if (Array.isArray(hobbies) &&
        hobbies.every(function (item) { return typeof item === "string"; })) {
        return true;
    }
    throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_HOBBIES);
};
exports.checkHobbies = checkHobbies;
var checkFields = function (body, user) {
    console.log(body);
    for (var key in body) {
        if (key === "hobbies") {
            (0, exports.checkHobbies)(body[key]);
        }
        if (user.hasOwnProperty(key)) {
            user[key] = body[key];
        }
        else {
            throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_BODY);
        }
    }
};
exports.checkFields = checkFields;
var handleRequest = function (body, res, db, id) {
    try {
        var user = (0, common_service_js_1.getUsersFromDB)(res, db, id);
        var parsedBody = (0, querystring_1.parse)(body);
        (0, exports.checkFields)(parsedBody, user);
        res.statusCode = constants_js_1.STATUS_CODES.OK;
        res.end(JSON.stringify(user));
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.handleRequest = handleRequest;
