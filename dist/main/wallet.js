"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWallet = void 0;
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");
const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");
const protocol_1 = require("../domain/protocol");
async function createWallet() {
    const network = bitcoin.networks.testnet;
    const bip32 = BIP32Factory(ecc);
    const path = `m/49'/1'/0'/0`;
    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    let root = bip32.fromSeed(seed, network);
    let account = root.derivePath(path);
    let node = account.derive(0).derive(0);
    let btcAddress = bitcoin.payments.p2pkh({
        pubkey: node.publicKey,
        network: network,
    }).address;
    return new protocol_1.ResponseWallet(200, {
        seed: mnemonic,
        private: node.toWIF(),
        address: btcAddress,
    });
}
exports.createWallet = createWallet;
//# sourceMappingURL=wallet.js.map