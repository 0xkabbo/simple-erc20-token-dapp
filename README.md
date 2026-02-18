# Simple ERC20 Token DApp

A minimal yet professional ERC20 token implementation designed for learning how fungible tokens work on Ethereum.

This project demonstrates the full workflow:

Token Contract → Deployment → Wallet → Transfer UI

The repository is intentionally flat structured so every file is visible and easy to study.

---

## Features

• ERC20-compatible token  
• Transfer tokens  
• Check balances  
• Wallet connect  
• Transaction confirmation  
• Simple UI  

---

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- HTML + Vanilla JS

---

## Token Details

Name: Demo Token  
Symbol: DMT  
Decimals: 18  
Initial Supply: 1,000,000 tokens  

All tokens are minted to deployer wallet.

---

## Setup

Install:

npm install

Compile:

npx hardhat compile

Run local blockchain:

npx hardhat node

Deploy:

npx hardhat run deploy.js --network localhost

---

## Frontend Setup

Open:

index.html

Update contract address in:

app.js

---

## Learning Goals

Understand:

- ERC20 standard logic
- Token balances
- Transfers
- Wallet signing
- Blockchain reads vs writes

---

## Security Notice

This token is for educational purposes only.

Do not use in production without:
- audit
- access control
- upgrade strategy

---

## License
MIT
