const {ethers} = require("hardhat");

async function main(){
    //get the contracts
    const GoldTokenContract = await ethers.getContractFactory("GoldToken")
    const SilverTokenContract =  await ethers.getContractFactory("SilverToken")
    const farmContract  =  await ethers.getContractFactory("FarmExchangeTokens")
    //deploy the contrats
    const GoldTokenContractDeploy = await GoldTokenContract.deploy();
    const SilverTokenContractDeploy = await SilverTokenContract.deploy()
    const farmContractDeploy = await farmContract.deploy()
    //await deployments
    await GoldTokenContractDeploy.deployed()
    await SilverTokenContractDeploy.deployed()
    await farmContractDeploy.deployed();
    //log the contract address
    console.log("GoldTokenContractAddress", GoldTokenContractDeploy.address);
    console.log("SilverokenContractAddress", SilverTokenContractDeploy.address);
    console.log("FarmContractAddress", farmContractDeploy.address);

}
//call main
main().then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
});