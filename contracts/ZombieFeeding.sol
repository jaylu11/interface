// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ZombieFactory_Interface {
    function name() external view returns (string memory);

    function createRandomZombie(string memory _name) external;

    function setName(string memory _name) external;

    function dnaDigits() external view returns (uint);
}

contract ZombieFeeding {
    ZombieFactory_Interface public zombieFactory;

    constructor(address zombieFactoryAddress) {
        zombieFactory = ZombieFactory_Interface(zombieFactoryAddress);
    }

    function getZombieFactory() public view returns (ZombieFactory_Interface) {
        return zombieFactory;
    }

    function createZombie(string memory _name) external {
        zombieFactory.createRandomZombie(_name);
    }

    function getName() external view returns (string memory) {
        return zombieFactory.name();
    }

    function _setName(string memory _name) external {
        zombieFactory.setName(_name);
    }

    function getDnaDigits() external view returns (uint) {
        return zombieFactory.dnaDigits();
    }

    fallback() external {}
}
