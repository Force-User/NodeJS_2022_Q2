"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGES = exports.METHODS = exports.STATUS_CODES = exports.reg_uuid = void 0;
exports.reg_uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
exports.STATUS_CODES = {
    NOT_FOUND: 404,
    BAD_REQEST: 400,
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204
};
exports.METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};
exports.ERROR_MESSAGES = {
    INVALID_USER: "Invalid user",
    INVALID_ID: "UserId is invalid (not uuid)",
    INVALID_URL: "You should send requset to /users",
    INVALID_BODY: "Invalid body",
    INVALID_HOBBIES: 'Invalid hobbies',
};
