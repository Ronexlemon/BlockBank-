import { useState,useRef,useEffect } from 'react'
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import NavBar from '../components/Navbar'
import BackImage from '../components/backimage'
import silver from "../assets/silver.jpeg"
import gold from "../assets/gold.jpg"
import ethereum2 from "../assets/ethereum2.png"
import ethereum from "../assets/ethereum.png"


import { AppContext } from '../../contexts/AppContext'

function Bank() {
    const [symbolFrom, setSymbolFrom] = useState(0);
  const [symbolTo, setSymbolTO] = useState(0);
  const [choice, setChoice] = useState(0);
  const [count, setCount] = useState(0)
  const cryptos =[
    'Mantle Token','Gold Token','Silver Token'
]
const options =[
    0,1,2 , //BIT , Gold ,Silver
  ]
  // const [connected, setConnected] = useState(false)
  const handleOptionChange = (event) => {
    setSymbolFrom(event.target.value)
 setChoice(options[event.target.value])
    
  }
  
  const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false)=>{
    try{
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const {chainId}  = await web3Provider.getNetwork();
        if(chainId !=5001){
            alert("please connect to The Mantle Network")
        }
        
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
  getProviderOrSigner();

},[])

  return (
   

<div className="max-w-lg  mx-auto mt-20">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
  <div className="flex justify-between  items-center m-4 ">
                    <div>
                        {console.log("error  choic e",choice)}
                    <h5>Token : {(symbolFrom == 0)?cryptos[0]   :(symbolFrom ==1)?cryptos[1] : cryptos[2] }</h5>
                    </div>
                    <div className="flex justify-end items-center gap-2">
<span className="h-5 w-5"> {(symbolFrom == 0)?<img src={ethereum} alt="symbol"/>:(symbolFrom ==1)?<img src={gold} alt="symbol"/>: <img src={silver} alt="symbol"/> } </span>

<span><select className="bg-black text-white" value={symbolFrom} onChange={handleOptionChange}>
<option value={0}>BIT</option>
 <option value={1}>GLD</option>
<option value={2}>SLV</option>
            </select></span>
                  </div>

                  </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" >
        Amount
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
        type="text"
        placeholder="Enter amount"
      />
    </div>
    <div className="flex items-center justify-between gap-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Deposit
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Withdraw
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Borrow
      </button>
    </div>
  </form>
</div>

        
    
  )   
}

export default Bank;
