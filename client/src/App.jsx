import React,{useState,useRef,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Swap from './Pages/Swap';
import Bank from './Pages/Bank';
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import { AppContext } from '../contexts/AppContext';
import Accounts from './Pages/Accounts';

function App() {
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
    <AppContext.Provider value={{
      getProviderOrSigner,
      connected,
      Contract,
      
    }}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/swap" element={<Swap/>} />
        <Route path="/bank" element={<Bank/>} />
        <Route path="/account" element={<Accounts/>} />
      </Routes>
    </Router>
    </AppContext.Provider>
  );
  
}

export default App;