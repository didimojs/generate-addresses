"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerGetWallet = exports.ControllerCreateWallet = void 0;
const database_1 = require("../database");
const main_1 = require("../main");
const ControllerCreateWallet = async (req, res) => {
    const wallet = await (0, main_1.createWallet)();
    await (0, database_1.put)(wallet.message.private, JSON.stringify(wallet));
    return res.status(200).send(wallet);
};
exports.ControllerCreateWallet = ControllerCreateWallet;
const ControllerGetWallet = async (req, res) => {
    const body = req === null || req === void 0 ? void 0 : req.body;
    try {
        let result = await (0, database_1.get)(body.private);
        let wallet = JSON.parse(result === null || result === void 0 ? void 0 : result.message);
        return res.status(result.status).send(wallet);
    }
    catch (error) {
        return res.status(error.status).send(error);
    }
};
exports.ControllerGetWallet = ControllerGetWallet;
//# sourceMappingURL=CreateWalletController.js.map