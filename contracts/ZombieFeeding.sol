// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ZombieFactoryInterface {
    function name() external view returns (string memory);

    function createRandomZombie(string memory _name) external;

    function setName(string memory _name) external;
}

contract ZombieFeeding {
    ZombieFactoryInterface public zombieFactory;

    constructor(address zombieFactoryAddress) {
        zombieFactory = ZombieFactoryInterface(zombieFactoryAddress);
    }

    function getName() external view returns (string memory) {
        return zombieFactory.name();
    }

    function _setName(string memory _name) external {
        zombieFactory.setName(_name);
    }

    fallback() external {}
}
