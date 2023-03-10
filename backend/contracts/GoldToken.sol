// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GoldToken is ERC20 {
    address owner;

    constructor() ERC20("Gold", "GD") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can perform this function");
        _;
    }

    function mintGoldTokens(
        address _toMintTokenAddress,
        uint amount
    ) public onlyOwner {
        _mint(_toMintTokenAddress, amount * 10 ** 18);
    }
}
