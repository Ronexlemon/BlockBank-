// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract FarmExchangeTokens {
    using SafeMath for uint;
    address owner;
    IERC20 public goldToken;
    IERC20 public silverToken;

    constructor(address gold, address silver) {
        goldToken = IERC20(gold);
        silverToken = IERC20(silver);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can perform this function");
        _;
    }

    function swapGoldTokensForSilver(uint amount) public payable {
        require(amount > 0, "amount can't be less than zero");
        goldToken.allowance(msg.sender, address(this));
        goldToken.approve(address(this), amount * 10);
        goldToken.transferFrom(msg.sender, address(this), amount);
    }

    function swapSilverTokensForGold(uint amount) public payable {
        require(amount > 0, "amount can't be less than zero");
        silverToken.allowance(msg.sender, address(this));
        silverToken.approve(address(this), amount * 10);
        silverToken.transferFrom(msg.sender, address(this), amount);
    }

    function swapSilverTokensForETH(uint amount) external payable {
        require(amount > 0, "amount can't be less than zero");
        silverToken.allowance(msg.sender, address(this));
        silverToken.approve(address(this), amount * 10);
        uint amountEth = address(this).balance.mul(1).div(4);

        (bool success, ) = msg.sender.call{value: amountEth}("");
        require(success, "failed eth trans");
        silverToken.transferFrom(msg.sender, address(this), amount);
    }

    function swapGoldTokensForETH(uint amount) external payable {
        require(amount > 0, "amount can't be less than zero");
        goldToken.allowance(msg.sender, address(this));
        goldToken.approve(address(this), amount * 10);
        uint amountEth = address(this).balance.mul(1).div(4);

        (bool success, ) = msg.sender.call{value: amountEth}("");
        require(success, "failed eth trans");
        goldToken.transferFrom(msg.sender, address(this), amount);
    }

    function buyGoldToken(uint amount) external payable {
        require(msg.value > 0, "amount can not be negative");
        (bool success, ) = address(this).call{value: msg.value}("");
        require(success, "failed Transaction");
        goldToken.transfer(msg.sender, amount);
    }

    function buySilverToken(uint amount) external payable {
        require(msg.value > 0, "amount can not be negative");
        (bool success, ) = address(this).call{value: msg.value}("");
        require(success, "failed Transaction");

        silverToken.transfer(msg.sender, amount);
    }

    function depositEthToken() external payable {
        require(msg.value > 0, "amount can not be negative");
        (bool success, ) = address(this).call{value: msg.value}("");
        require(success, "failed Transaction");
    }

    function depositSilverToken(uint amount) external payable {
        require(amount > 0, "amount can not be negative");
        silverToken.transfer(address(this), amount);
    }

    function depositGoldToken(uint amount) external payable {
        require(amount > 0, "amount can not be negative");
        goldToken.transfer(address(this), amount);
    }

    function getTotasupplyForGold() public view returns (uint) {
        return goldToken.totalSupply();
    }

    function getTotasupplyForSilver() public view returns (uint) {
        return silverToken.totalSupply();
    }

    function userGoldTokenBal() public view returns (uint) {
        return goldToken.balanceOf(msg.sender);
    }

    function userSilverTokenBal() public view returns (uint) {
        return silverToken.balanceOf(msg.sender);
    }

    function thisGoldTokenBalance() public view returns (uint) {
        return goldToken.balanceOf(address(this));
    }

    function thisSilverTokenBalance() public view returns (uint) {
        return silverToken.balanceOf(address(this));
    }

    receive() external payable {}

    fallback() external payable {}
}
