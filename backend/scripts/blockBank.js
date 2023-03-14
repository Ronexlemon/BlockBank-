const {ethers} = require("hardhat");
//GoldTokenContractAddress 0x1D7478635b1e6C0001432a5a7e20Fd273273Aa32
//SilverokenContractAddress 0x8831Dc4233fd71E07de7eD6329e3D1f402368d83
//FarmContractAddress 0x1E4D739690aBa61e9FC02fA638b1747855c1e144
//2
//GoldTokenContractAddress 0x4303f6f0F4660782a0c5C23F3414e7E3ED6F5Ca0
//SilverokenContractAddress 0x09Db56476C430A6178987503151b81e9C58494Af
//FarmContractAddress 0xc8a01536b4b0fE8C668912591fd457ea22c7633D

async function main(){
    //get the contracts
    const GoldTokenContract = await ethers.getContractFactory("GoldToken")
    const SilverTokenContract =  await ethers.getContractFactory("SilverToken")
    const farmContract  =  await ethers.getContractFactory("FarmExchangeTokens")
    //deploy the contrats
    const GoldTokenContractDeploy = await GoldTokenContract.deploy();
    const SilverTokenContractDeploy = await SilverTokenContract.deploy()
    const farmContractDeploy = await farmContract.deploy(GoldTokenContractDeploy.address, SilverTokenContractDeploy.address)
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