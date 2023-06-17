import { useEffect, useState } from "react";
import OwnerCard from "./OwnerCard";

const OwnerList = () => {
    const [OwnerCategory,setOwnerCategory] = useState([]);
    const [AllOwner,setAllOwner] = useState(false);
    const [IsLoading,setIsLoading] = useState(false);
    // fetching data using useEffect
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://restaurant-management-system-server.vercel.app/all-owner`).then((res)=>res.json()).then((data)=>{
            if(AllOwner){
                setOwnerCategory(data?.owner_category)
                setIsLoading(false)
            }
            else{
                setOwnerCategory(data?.owner_category.slice(0,4))
                setIsLoading(false)
            }
        });
    },[AllOwner]);
    // console.log(OwnerCategory);
    return (
        <div className="mt-8">
            {
                IsLoading?(
                    <div className="flex justify-center">
                        <span className="loading loading-bars loading-xs"></span>
                        <span className="loading loading-bars loading-sm"></span>
                        <span className="loading loading-bars loading-md"></span>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ):(
                    <div className="grid md:grid-cols-2 gap-8 drop-shadow-md">
                        {OwnerCategory?.map((singleOwner)=><OwnerCard  key={singleOwner._id} singleOwner={singleOwner}/>)}
                    </div>
                )
            }
            <div className="flex justify-center my-8">
                <button className="btn btn-neutral" onClick={()=>setAllOwner(!AllOwner)}>{AllOwner?"See Few Owner":"See All Owner"}</button>
            </div>
        </div>
    );
};

export default OwnerList;