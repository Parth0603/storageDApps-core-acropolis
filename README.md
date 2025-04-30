
# 📦 Storage Smart Contract

This project contains a simple **Storage** smart contract written in Solidity.  
The contract allows users to **store**, **update**, and **retrieve** a single `uint256` value on the blockchain.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/storage-contract.git
cd storage-contract
```

### 2. Install Dependencies

```bash
npm install
```

> This project uses **Hardhat** and **OpenZeppelin** (if you expand it later).

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Deploy to your chosen network (example: Core Testnet):

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

Make sure your deployment script correctly references the `Storage` contract.

---

## 🔍 Contract Verification

After deployment, verify the contract:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address>
```

(Ensure your `.env` has the required API keys.)

