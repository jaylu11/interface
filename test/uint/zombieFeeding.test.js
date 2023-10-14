/*
 * @Author: jaylu11 lushuyuan1@hotmail.com
 * @Date: 2023-10-08 21:04:30
 * @LastEditors: jaylu11 lushuyuan1@hotmail.com
 * @LastEditTime: 2023-10-08 22:55:21
 * @FilePath: \zombie with interface\test\uint\zombieFeeding.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { getNamedAccounts, deployments, ethers } = require("hardhat");
require("chai");
describe("zombieFeeding", async () => {
  beforeEach(async () => {
    deployer = await getNamedAccounts();
    const contracts = await deployments.fixture(["all"]);
    zombieFeeding = await ethers.getContract("ZombieFeeding", deployer);
    zombieFactory = await ethers.getContract("ZombieFactory", deployer);
  });
  describe("setName", async () => {
    it("setNameByFactory", async () => {
      const accounts = await ethers.getSigners();
      const connectZombie = await zombieFactory.connect(accounts[0]);
      await connectZombie.setName("lu");
      const response = await connectZombie.getName();
      console.log(response);
    });
    it("setNameByFeeding", async () => {
      const accounts = await ethers.getSigners();
      const connectZombie = await zombieFeeding.connect(accounts[0]);
      await connectZombie._setName("lu");
      const response = await connectZombie.getName();
      console.log(response);
    });
  });
});
