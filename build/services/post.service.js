"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = exports.setDBNewUser = exports.checkParams = exports.checkHobbies = void 0;
var querystring_1 = require("querystring");
var constants_js_1 = require("./constants.js");
var uuid_1 = require("uuid");
var checkHobbies = function (hobbies) {
    var parsedHobbies = JSON.parse(hobbies);
    if (Array.isArray(parsedHobbies) &&
        parsedHobbies.every(function (item) { return typeof item === "string"; })) {
        return true;
    }
    throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_HOBBIES);
};
exports.checkHobbies = checkHobbies;
var checkParams = function (params) {
    var currentParams = Object.keys(params);
    var paramsLength = currentParams.length;
    return ((paramsLength === 2 &&
        currentParams.includes("username") &&
        currentParams.includes("age")) ||
        (paramsLength === 3 &&
            currentParams.includes("username") &&
            currentParams.includes("age") &&
            currentParams.includes("hobbies") &&
            (0, exports.checkHobbies)(params.hobbies)));
};
exports.checkParams = checkParams;
var setDBNewUser = function (db, params) {
    var username = params.username, age = params.age, _a = params.hobbies, hobbies = _a === void 0 ? [] : _a;
    var newBody = {
        id: (0, uuid_1.v4)(),
        username: username,
        age: age,
        hobbies: hobbies,
    };
    db.push(newBody);
    return newBody;
};
exports.setDBNewUser = setDBNewUser;
var handleRequest = function (body, req, res, db) {
    var params = (0, querystring_1.parse)(body);
    try {
        var isValidParams = (0, exports.checkParams)(params);
        if (isValidParams) {
            var newBody = (0, exports.setDBNewUser)(db, params);
            res.statusCode = 201;
            return res.end(JSON.stringify(newBody));
        }
        req.statusCode = 400;
        throw new Error(constants_js_1.ERROR_MESSAGES.INVALID_BODY);
    }
    catch (e) {
        res.end(e.message);
    }
};
exports.handleRequest = handleRequest;
