<p align="center">
  <a href="https://github.com/didimojs/generate-wallet" target="blank"><img src="https://drive.google.com/uc?export=view&id=1ZaR_eyw6KOFqdGarO1W-dIrSmVEZN8p4" width="250" alt="logo" /></a>
</p>

![](https://img.shields.io/node/v/tiny-secp256k1)
![](https://img.shields.io/badge/wallet-testnet-blue)
![](https://img.shields.io/badge/release-v1.0.0-blue)
![](https://img.shields.io/badge/tag-v1.0.0-blue)

## _Projeto voltado a exame de aprovação, para certifiação_

> Essencial informar que esse projeto é voltado para estudo e geração de carteiras na blockchain testnet do Bitcoin.

## Stack Used

- [Express](http://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Bitcoinjs-lib](https://www.npmjs.com/package/bitcoinjs-lib/)
- [LevelDB](https://www.npmjs.com/package/level/)
- [Nodemon](https://nodemon.io/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

```javascript
GET (create a wallet)

curl -H "Content-Type: text/plain"  http://localhost:3000/wallet


POST (capture an already created wallet)

curl -H "Content-Type: text/plain" --data '{"private":"[private-key]"}' http://localhost:3000/wallet

```

_Att: Tiago Dídimo_
