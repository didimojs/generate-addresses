"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.get = void 0;
const config_1 = require("../database/config");
const protocol_1 = require("../domain/protocol");
async function put(key, value) {
    try {
        await config_1.db.put(key, value);
        return new protocol_1.Response(200, "");
    }
    catch (error) {
        return new protocol_1.Response(400, JSON.stringify(error));
    }
}
exports.put = put;
async function get(key) {
    try {
        const value = await config_1.db.get(key);
        return new protocol_1.Response(200, value);
    }
    catch (error) {
        return new protocol_1.Response(400, JSON.stringify(error));
    }
}
exports.get = get;
//# sourceMappingURL=index.js.map