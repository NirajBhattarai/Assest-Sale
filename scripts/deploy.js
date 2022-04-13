const hre = require("hardhat");

async function main() {
  const ToolSale = await hre.ethers.getContractFactory(
    "ToolSale"
  );
  const deployedToolSale = await ToolSale.deploy("0xdbb309D8fcA8af36bD49a01C8b1Bd0b387bAE5a4"
  );

  await deployedToolSale.deployed();

  console.log(
    "Deployed ToolSale Address:",
    deployedToolSale.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
