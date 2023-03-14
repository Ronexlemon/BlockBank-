import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const NavBarLanding =()=>{
    const navigate = useNavigate();

return(
    <div className="h-16 w-screen flex flex-auto justify-around items-center border-b border-gray-100 ">
        <div>
        <span  className="text-white">
            {/* <button onClick={()=>{navigate("/home")}}>Home</button> */}

                

            </span>

        </div>
       
            <div>
                
            <button   onClick={()=>{navigate("/swap")}}  className=" bg-green-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Get Started</button>
                
                
            
            </div>

    </div> 
)
}
export default NavBarLanding;