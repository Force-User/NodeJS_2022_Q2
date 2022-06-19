"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCurrentUser = void 0;
var deleteCurrentUser = function (res, id, db) {
    var userIndex = db.findIndex(function (user) { return user.id === id; });
    console.log(userIndex);
    if (userIndex !== -1) {
        return db.splice(userIndex, 1);
    }
    res.statusCode = STATUS_CODES.NOT_FOUND;
    throw new Error(ERROR_MESSAGES.INVALID_USER);
};
exports.deleteCurrentUser = deleteCurrentUser;
