// libs
import * as bip39 from "bip39";
import * as bitcoin from "bitcoinjs-lib";
const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");

// domain
import { ResponseWallet } from "../domain/protocol";

async function createWallet(): Promise<ResponseWallet> {
  const network = bitcoin.networks.testnet;
  // rede
  const bip32 = BIP32Factory(ecc);
  const path = `m/49'/1'/0'/0`;

  let mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  // raiz wallet HD
  let root = bip32.fromSeed(seed, network);

  // conta - par pvt-pub keys
  let account = root.derivePath(path);
  let node = account.derive(0).derive(0);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  return new ResponseWallet(200, {
    seed: mnemonic,
    private: node.toWIF(),
    address: btcAddress,
  });
}

export { createWallet };
