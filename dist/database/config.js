"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const level_1 = require("level");
exports.db = new level_1.Level("walletHD", {
    valueEncoding: "json",
    keyEncoding: "utf8",
});
//# sourceMappingURL=config.js.map