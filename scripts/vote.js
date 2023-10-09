const hre = require("hardhat");

async function main() {
  const vote = await hre.ethers.deployContract("Voting");

  await vote.waitForDeployment;

  console.log(
    `Vote successfully deployed to ${vote.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
