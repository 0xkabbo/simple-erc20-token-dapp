// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DemoToken {

    string public name = "Demo Token";
    string public symbol = "DMT";
    uint8 public decimals = 18;

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        uint256 supply = 1_000_000 * (10 ** decimals);
        totalSupply = supply;
        balanceOf[msg.sender] = supply;

        emit Transfer(address(0), msg.sender, supply);
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;

        emit Transfer(msg.sender, to, amount);
        return true;
    }
}
