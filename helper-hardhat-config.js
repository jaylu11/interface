/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-03 17:43:42
 * @LastEditors: jaylu11 lushuyuan1@hotmail.com
 * @LastEditTime: 2023-10-07 22:40:29
 * @FilePath: \test\helper-hardhat-config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    chainId: 11155111,
  },
  31337: {
    name: "localhost",
    chainId: 31337,
  },
  1337: {
    name: "ganache",
    chainId: 1337,
  },
};
const developmentChains = ["hardhat", "localhost"];
module.exports = { networkConfig, developmentChains };
