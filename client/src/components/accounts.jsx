import React,{useContext,useEffect, useState} from "react";
import { AppContext } from "../../contexts/AppContext";
import { FarmContractAddress } from "../contractaddress/exportaddress";
import { FarmAbi } from "../abis/farmContractAbi";
import bag from "../assets/bag.svg"
const AccountHelper = ()=>{
    const [bittokens,setBitTokens] = useState(0);
    const [goldtokens,setgoldTokens] = useState(0);
    const [silvertokens,setsilverTokens] = useState(0);

    const {
        getProviderOrSigner,
        connected,
        Contract,
    } = useContext(AppContext)

    const getBalances = async ()=>{
        try{
            const signer = await getProviderOrSigner(true);
            const bal = await signer.getBalance();
        setBitTokens(bal/10 **18);
            
      
            
            
              const farmContract = new Contract(FarmContractAddress,FarmAbi,signer);
              
                 const gold = await farmContract.userGoldTokenBal();
                 
                 setgoldTokens(gold);
                 const silver = await farmContract.userSilverTokenBal();
                 
                 setsilverTokens(silver);


        }catch(error){
            console.log("balance error", error);
        }
                
    }
    useEffect(()=>{
        getBalances();
    },[])
return(
    <div className="grid grid-cols-3 gap-8 m-8 ">
        <div className="rounded bg-orange-200  flex flex-col justify-center items-center   h-30">
            <span>BIT Token</span>
            <div className="rounded-xl ">
<h2>{Number(bittokens).toString().substring(0,4)}</h2>

            </div>
            
            
        </div>
        <div className="rounded bg-orange-200  flex flex-col justify-center items-center   h-30">
            <span>Gold Token</span>
            <div className="rounded-xl ">
<h2>{Number(goldtokens).toString().substring(0,4)}</h2>

            </div>
            
            
        </div>
       
        <div className="rounded bg-orange-200  flex flex-col justify-center items-center   h-30">
            <span>Silver Token</span>
            <div className="rounded-xl ">
<h2>{Number(silvertokens).toString().substring(0,4)}</h2>

            </div>
            
            
        </div>
        <div></div>
        <div class=" ">
            <img className="" src={bag} alt="no Image"/>
            
 
</div>

        <div></div>
       
       

    </div>
)

}

export default AccountHelper;