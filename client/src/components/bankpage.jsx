import { useState,useRef,useEffect ,useContext} from 'react'
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import NavBar from '../components/Navbar'
import BackImage from '../components/backimage'
import silver from "../assets/silver.jpeg"
import gold from "../assets/gold.jpg"
import ethereum2 from "../assets/ethereum2.png"
import ethereum from "../assets/ethereum.png"
import { ethers } from 'ethers'


import { AppContext } from '../../contexts/AppContext'
import { GoldAbi } from '../abis/goldABI'
import { SilverAbi } from '../abis/silverABI'
import { FarmAbi } from '../abis/farmContractAbi'
import { FarmContractAddress } from '../contractaddress/exportaddress'

import { SilverokenContractAddress } from '../contractaddress/exportaddress'
import { GoldTokenContractAddress } from '../contractaddress/exportaddress'

function Bank() {
  const {
    getProviderOrSigner,
    connected,
    Contract,
} = useContext(AppContext)
    const [symbolFrom, setSymbolFrom] = useState(0);
  const [symbolTo, setSymbolTO] = useState(0);
  const [choice, setChoice] = useState(0);
  const [amount, setAmount] = useState('');
  const cryptos =[
    'Mantle Token','Gold Token','Silver Token'
]
const options =[
    0,1,2 , //BIT , Gold ,Silver
  ]
  // const [connected, setConnected] = useState(false)
  const handleInputChange = (event) => {
    setAmount(event.target.value);
  }
  const handleOptionChange = (event) => {
    setSymbolFrom(event.target.value)
 setChoice(options[event.target.value])
    
  }
  
  const depoistTokens = async()=>{
    try{
      const valueInWei = ethers.utils.parseEther(amount); 
      const tokenamount = parseInt(amount)
      const signer = await getProviderOrSigner(true);

      
      
        const farmContract = new Contract(FarmContractAddress,FarmAbi,signer);
        if(choice  === 0){
           const transaction = await farmContract.depositEthToken({value: valueInWei});
           await transaction.wait();
          
        }
        else if(choice === 1){
          const transaction = await farmContract.depositGoldToken(tokenamount);
           await transaction.wait();
          
        }
        else if(choice === 2){
          const transaction = await farmContract.depositSilverToken(tokenamount);
           await transaction.wait();
          
  
        }
        else{
          alert("please select token")
        }
  
  
  }catch(error){
      console.log("failed to mint gold token",error);
  }
  }
  
  const borrowTokens = async()=>{
    try{
      const valueInWei = ethers.utils.parseEther(amount); 
      const tokenamount = parseInt(amount)
      const signer = await getProviderOrSigner(true);

      
      
        const farmContract = new Contract(FarmContractAddress,FarmAbi,signer);
        if(choice  === 0){
           const transaction = await farmContract.borrowEthToken({value: valueInWei});
           await transaction.wait();
          
        }
        else if(choice === 1){
          const transaction = await farmContract.borrowGoldToken(tokenamount);
           await transaction.wait();
          
        }
        else if(choice === 2){
          const transaction = await farmContract.borrowSilverToken(tokenamount);
           await transaction.wait();
          
  
        }
        else{
          alert("please select token")
        }
  
  
  }catch(error){
      console.log("failed to mint gold token",error);
  }
  }
  

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
        {console.log("the amount", amount)}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleInputChange} 
        value={amount}
        type="text"
        placeholder="Enter amount"
      />
    </div>
    <div className="flex items-center justify-between gap-2">
      <button onClick={()=>{depoistTokens()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Deposit
      </button>
      <button >
        
      </button>
      <button  onClick={()=>{borrowTokens()}} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Borrow
      </button>
    </div>
  </form>
</div>

        
    
  )   
}

export default Bank;
