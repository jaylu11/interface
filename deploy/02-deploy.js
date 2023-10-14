/*
 * @Author: jaylu11 lushuyuan1@hotmail.com
 * @Date: 2023-10-07 21:34:41
 * @LastEditors: jaylu11 lushuyuan1@hotmail.com
 * @LastEditTime: 2023-10-08 22:41:46
 * @FilePath: \zombie with interface\deploy\01-deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 */
const { deployments, getNamedAccounts, network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const verify = require("../utils/verify");

require("dotenv").config();

module.exports = async () => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  let zombieFactoryAddress, deployedAddress;
  // const zombiefactory = await ethers.getContract("ZombieFactory", deployer);
  // deployedAddress = zombiefactory.address;
  if (network.name == "ganache") {
    zombieFactoryAddress = "0x74251Ec0a44c6E47E5E88A212c8e2C4ECFb13573";
  } else if (network.name == "hardhat" || "localhost") {
    zombieFactoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  } else if (network.name == "sepolia") {
    zombieFactoryAddress = "0x2F502bDA67dE25C7fC388A6c1D940f80bCe47E22";
  } //sepolia
  const zombieFeeding = await deploy("ZombieFeeding", {
    from: deployer,
    args: [zombieFactoryAddress],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  // const zombie = await ethers.getContractAt(
  //   "ZombieFactory",
  //   "0x049f307c4FeC2B8Bf043d501B12cC7FA6482445f",
  //   deployer
  // );
  // log(zombie.getName());
  //await deploy("Ownable", { from: deployer, log: true });
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY &&
    network.name !== "ganache"
  ) {
    await verify(zombieFeeding.address, [zombieFactoryAddress]);
  }
  log("-----------------------------");
};
module.exports.tags = ["all", "zombieFeeding"];
