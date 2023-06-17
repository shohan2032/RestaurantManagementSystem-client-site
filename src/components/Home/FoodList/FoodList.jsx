import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const OwnerList = () => {
    const [FoodCategory,setFoodCategory] = useState([]);
    const [AllFood,setAllFood] = useState(false);
    const [IsLoading,setIsLoading] = useState(false);
    // fetching data using useEffect
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://restaurant-management-system-server.vercel.app/all-food`).then((res)=>res.json()).then((data)=>{
            if(AllFood){
                setFoodCategory(data?.food_category)
                setIsLoading(false);
            }
            else{
                setFoodCategory(data?.food_category.slice(0,4))
                setIsLoading(false);
            }
        });
    },[AllFood]);
    // console.log(OwnerCategory);
    return (
        <div className="mt-20">
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
                        {FoodCategory?.map((singleFood)=><FoodCard  key={singleFood._id} singleFood={singleFood}/>)}
                    </div>
                )
            }
            <div className="flex justify-center my-8">
                <button className="btn btn-neutral" onClick={()=>setAllFood(!AllFood)}>{AllFood?"See Few Food":"See All Food"}</button>
            </div>
        </div>
    );
};

export default OwnerList;