import {MdArrowCircleDown,MdArrowDropDownCircle} from "react-icons/md"
import ethereum from "../assets/ethereum.png"
import ethereum2 from "../assets/ethereum2.png"

const Card = () =>{
    return(
        <div className="h-3/4 w-3/4 mt-10  bg-black rounded-2xl  text-white">
            <div className="h-full w-full grid grid-rows-4 rounded-2xl   ">
                <div className=" text-sm  text-gray-400 rounded-2xl grid grid-row-3 gap-2 ">
                  <div className="flex justify-between  items-center m-4 ">
                    <div>
                    <h5>From : ETH Testnet</h5>
                    </div>
                    <div className="flex justify-end items-center gap-2">
<span className="h-5 w-5"><img src={ethereum} alt="symbol"/></span>
<span>ETH</span>
<span><MdArrowDropDownCircle/></span>
                  </div>

                  </div>
              
                  <div className=" flex flex-col gap-2 m-4">
                  <input className="w-full "  type="text" placeholder="$ 30.00"/> 
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
                    <h5>To: Silver</h5>
                    </div>
                    <div className="flex justify-end items-center gap-2">
<span className="h-5 w-5"><img src={ethereum2} alt="symbol"/></span>
<span>SLV</span>
<span><MdArrowDropDownCircle/></span>
                  </div>

                  </div>
              
                  <div className=" flex flex-col gap-2 m-4">
                  <input className="w-full "  type="text" placeholder="$ 30.00"/> 
                  <div className="flex justify-start gap-2">
                    <h5>Balance</h5>
                    <span>79</span>
                    
                  </div>
                  </div>
                  <div className="text-white m-4">
                    <button className="w-full bg-blue-500 rounded  ">Transfer</button>

                </div>

                </div> 
               

            </div>



        </div>
    )

}
export default Card;