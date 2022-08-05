"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const ControllerRoutes = (0, express_1.Router)();
exports.ControllerRoutes = ControllerRoutes;
ControllerRoutes.get("/address", controllers_1.ControllerCreateWallet);
ControllerRoutes.post("/address", controllers_1.ControllerGetWallet);
//# sourceMappingURL=WalletRoutes.js.map