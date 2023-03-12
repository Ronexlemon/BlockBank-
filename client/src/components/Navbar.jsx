import React,{useState, useRef,useEffect} from "react";
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
const NavBar =()=>{
    const [connected, setConnected] = useState(false)
    const web3ModalRef = useRef();

    const getProviderOrSigner = async (needSigner = false)=>{
        try{
            const provider = await web3ModalRef.current.connect();
            const web3Provider = new providers.Web3Provider(provider);
            const {chainId}  = await web3Provider.getNetwork();
            if(chainId !=5001){
                alert("please connect to The Mantle Network")
            }
            setConnected(true);
            if(needSigner){
                const signer = await  web3Provider.getSigner();
                return signer;
            }
            return web3Provider;

        }catch(error){
            console.log(error);
        }
    }
useEffect(()=>{
    web3ModalRef.current =new Web3Modal({
        network: "mantle",
        providerOptions: {},
        disableInjectedProvider: false,
        cacheProvider: false,
      });
    
},[])
    

return(
    <div className="h-16 w-screen flex flex-auto justify-around items-center border-b border-gray-100 ">
        <div>

        </div>
        <div className=" flex flex-row justify-evenly w-80 text-white  ">
            <span>
                Swap

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
                    connected?<button  onClick={()=>{getProviderOrSigner()}} className=" bg-green-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Connect Wallet</button>:<button  onClick={()=>{getProviderOrSigner()}} className=" bg-yellow-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Connect Wallet</button>

                }
                
            
            </div>

    </div> 
)
}
export default NavBar;