import { RiCommunityFill } from "react-icons/ri";
import { FcDataEncryption } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
// import Swapit from "./assets/Swapit.png"
// import swapbit from "../assets/swapbit"
// import swaptk from "../assets/swaptk"
import swapbit from "../assets/swapbit.png"
import swapit from "../assets/swapit.png"
import bank from "../assets/bank.png"
import wallet from "../assets/wallet.svg"


const Land = ()=>{
    return(
        <div className="w-full grid grid-cols-2 gap-4">
            <div className="h-full  grid  grid-rows-3  gap-9 ">
                <div className="text-blue-400 font-serif text-6xl mt-2">
                    <h1>BlockBank</h1>


                </div>
                <div className=" text-white font-family: ui-serif text-5xl">
                    <h4>Community-Driven, Resilient, Sustainable</h4>
                </div>
                <div className="flex justify-around items-center mt-6">
                    <div className="bg-white h-20 w-20 rounded flex justify-center items-center">
                    <RiCommunityFill size={70}/>
                    </div>
                    <div className="bg-white h-20 w-20 rounded flex justify-center items-center">
                    <FcDataEncryption size={70}/>
                    </div>
                    <div className="bg-white h-20 w-20 rounded flex justify-center items-center">
                    <FcBullish size={70}/>
                    </div>

                   
                    

                </div>

            </div>
            {/* div no 2 */}
            <div class=" flex justify-center items-center">
            <img className="h-3/4 w-3/4" src={wallet} alt="no Image"/>
 
</div>



        </div>
    )


}
export default Land;