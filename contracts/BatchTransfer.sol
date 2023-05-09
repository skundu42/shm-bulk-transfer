// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BatchTransfer {
    function transferETH(address payable[] memory recipients, uint256[] memory amounts) public payable {
        require(recipients.length == amounts.length, "Arrays should have the same length.");
        for (uint256 i = 0; i < recipients.length; i++) {
            require(msg.value >= amounts[i], "Not enough ETH to send.");
            recipients[i].transfer(amounts[i]);
        }
    }
}
