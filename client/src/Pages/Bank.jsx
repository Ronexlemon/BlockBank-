import { useState,useRef,useEffect } from 'react'
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import NavBar from '../components/Navbar'
import BackImage from '../components/backimage'


import { AppContext } from '../../contexts/AppContext'
import BankPage from '../components/bankpage'

function Bank() {
  const [count, setCount] = useState(0)
  // const [connected, setConnected] = useState(false)
  const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };
  
  const [connected, setConnected] = useLocalStorage("connected", false);
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

  return (
   
<main className=" bg-[#182268] h-screen ">
    <NavBar/>
<BankPage/>
      
        
    </main>
  )   
}

export default Bank;
