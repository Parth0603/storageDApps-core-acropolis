const hre = require("hardhat");

async function main() {
  console.log(`Deploying Storage contract...`);

  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  console.log(`Storage deployed to: ${storage.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
