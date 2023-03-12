
const NavBar =()=>{
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
                <button className=" bg-yellow-700 text-black rounded-2xl h-10 w-fit px-4 text-sm ">Connect Wallet</button>
            
            </div>

    </div> 
)
}
export default NavBar;