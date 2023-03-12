import React,{useState} from "react"
import {MdArrowCircleDown,MdArrowDropDownCircle} from "react-icons/md"
import Dropdown from 'react-dropdown';
import ethereum from "../assets/ethereum.png"
import ethereum2 from "../assets/ethereum2.png"
import silver from "../assets/silver.jpeg"
import gold from "../assets/gold.jpg"

const Card = () =>{
   
    const [symbolFrom, setSymbolFrom] = React.useState(0);
    const [symbolTo, setSymbolTO] = React.useState(0);
    const cryptos =[
        'Ether','Gold Token','Silver Token'
    ]
    const defaultCryptos = cryptos[0];
    return(
        <div className="h-3/4 w-3/4 mt-10  bg-black rounded-2xl  text-white">
            <div className="h-full w-full grid grid-rows-4 rounded-2xl   ">
                <div className=" text-sm  text-gray-400 rounded-2xl grid grid-row-3 gap-2 ">
                  <div className="flex justify-between  items-center m-4 ">
                    <div>
                        
                    <h5>From : {(symbolFrom == 0)?cryptos[0] :(symbolFrom ==1)?cryptos[1]: cryptos[2] }</h5>
                    </div>
                    <div className="flex justify-end items-center gap-2">
<span className="h-5 w-5"> {(symbolFrom == 0)?<img src={ethereum} alt="symbol"/>:(symbolFrom ==1)?<img src={gold} alt="symbol"/>: <img src={silver} alt="symbol"/> } </span>

<span><select className="bg-black text-white" value={symbolFrom} onChange={(event) => setSymbolFrom(event.target.value)}>
<option value={0}>ETH</option>
 <option value={1}>GLD</option>
<option value={2}>SLV</option>
            </select></span>
                  </div>

                  </div>
              
                  <div className=" flex flex-col gap-2 m-4">
                  <input className="w-full  rounded bg bg-gray-500 text-white h-8"  type="text" placeholder="$ 30.00"/> 
                  <div className="flex justify-start gap-2">
                    <h5>Balance</h5>
                    <span>0.79</span>
                    <h3 className="text-blue-500">Max</h3>
                  </div>
                  </div>

                </div> 
                <div className="flex justify-center items-center ">
<MdArrowCircleDown/>
                </div>
                <div className=" text-sm  text-gray-400 rounded-2xl grid grid-row-4  ">
                  <div className="flex justify-between  items-center m-4 ">
                    <div>
                    <h5>To : {(symbolTo == 0)?cryptos[2] :(symbolTo ==1)?cryptos[1]: cryptos[0] }</h5>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                    <span className="h-5 w-5"> {(symbolTo == 0)?<img src={silver} alt="symbol"/>:(symbolTo ==1)?<img src={gold} alt="symbol"/>: <img src={ethereum} alt="symbol"/> } </span>

<span><select className="bg-black text-white" value={symbolTo} onChange={(event) => setSymbolTO(event.target.value)}>

<option value={2}>ETH</option> 
<option value={1}>GLD</option>
<option value={0}>SLV</option>
            </select></span>

                  </div>

                  </div>
              
                  <div className=" flex flex-col gap-2 m-4">
                  {/* <input className="w-full "  type="text" placeholder="$ 30.00"/>  */}
                  <span className="bg-gray-500 text-white h-8 rounded"><h4 className="p-2">34</h4></span>
                  <div className="flex justify-start gap-2">
                    <h5>Balance</h5>
                    <span>79</span>
                    
                  </div>
                  </div>
                  <div className="text-white ml-4 mr-4">
                    <button className="w-full bg-blue-500 rounded  ">Transfer</button>

                </div>

                </div> 
               

            </div>



        </div>
    )

}
export default Card;