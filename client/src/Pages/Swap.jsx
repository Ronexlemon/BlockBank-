import { useState,useRef,useEffect,useContext } from 'react'
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import NavBar from '../components/Navbar'
import BackImage from '../components/backimage'


import { AppContext } from '../../contexts/AppContext'

function Swap() {
    const {
        getProviderOrSigner,
        connected,
        Contract,
    } = useContext(AppContext)

  return (
    
<main className=" bg-[#182268] h-screen ">
      <NavBar/>
      <BackImage/>
    
      
        
    </main>
   
    
  )
}

export default Swap;
