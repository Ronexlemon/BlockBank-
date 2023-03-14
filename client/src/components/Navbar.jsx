import React,{useState, useRef,useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import { AppContext } from "../../contexts/AppContext";
import { SilverokenContractAddress } from "../contractaddress/exportaddress";
import { GoldTokenContractAddress } from "../contractaddress/exportaddress";
import { FarmContractAddress } from "../contractaddress/exportaddress";
import { SilverAbi } from "../abis/silverABI";
import { GoldAbi } from "../abis/goldABI";
import { FarmAbi } from "../abis/farmContractAbi";
const NavBar =()=>{
    const navigate = useNavigate();
    const {
        getProviderOrSigner,
        connected,
        Contract,
    } = useContext(AppContext)
    const mintGoldToken = async()=>{
        try{
            const signer = await getProviderOrSigner(true);
            const goldContract = new Contract(GoldTokenContractAddress,GoldAbi,signer);
            await goldContract.mintGoldTokens(FarmContractAddress,10000);


        }catch(error){
            console.log("failed to mint gold token",error);
        }
    }
    const mintSilverToken = async()=>{
        try{
            const signer = await getProviderOrSigner(true);
            const silverContract = new Contract(SilverokenContractAddress,SilverAbi,signer);
            await silverContract.mintSilverTokens(FarmContractAddress,10000);


        }catch(error){
            console.log("failed to mint silver token",error);
        }
    }
    
    
    // const [connected, setConnected] = useState(false)
    // const web3ModalRef = useRef();

//     const getProviderOrSigner = async (needSigner = false)=>{
//         try{
//             const provider = await web3ModalRef.current.connect();
//             const web3Provider = new providers.Web3Provider(provider);
//             const {chainId}  = await web3Provider.getNetwork();
//             if(chainId !=5001){
//                 alert("please connect to The Mantle Network")
//             }
//             setConnected(true);
//             if(needSigner){
//                 const signer = await  web3Provider.getSigner();
//                 return signer;
//             }
//             return web3Provider;

//         }catch(error){
//             console.log(error);
//         }
//     }
useEffect(()=>{
    
    
},[connected])
    

return(
    <div className="h-16 w-screen flex flex-auto justify-around items-center border-b border-gray-100 ">
        <div className="text-white">
        <button onClick={()=>{navigate("/home")}}>Home</button>
        </div>
        <div className=" flex flex-row justify-evenly w-80 text-white  ">
            <span>
                Swap
{console.log("connected is",SilverokenContractAddress)}
            </span>
            <span>
                Earn
                
            </span>
           
            <span>
                Buy Crypto
                
            </span>
            
            </div>
            <div>
                {
                    connected?<button  onClick={()=>{getProviderOrSigner()}} className=" bg-green-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Connected</button>:<button  onClick={()=>{getProviderOrSigner()}} className=" bg-yellow-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Connect Wallet</button>

                }
                
            
            </div>

    </div> 
)
}
export default NavBar;