import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OwnerDetails = () => {
    const [FoodDtails,setFoodDtails] = useState({});
    //it is a react router dom hook.it helps us to read something from a URL
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://restaurant-management-system-server.vercel.app/food-details/${id}`).then((res)=>res.json()).then((data)=>{
            setFoodDtails(data)
        });
    },[id])
    return (
        <div className="mt-10 mb-10 rounded-b-lg rounded-t-lg">
            <h2 className="card-title place-content-center mb-5">{FoodDtails.food_name}</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="rounded-b-lg rounded-t-lg">
                    <img src={FoodDtails.food_logo}/>
                </figure>
                <div className="card-body">
                    <p className="font-bold">Created Date: {FoodDtails.created_date}</p>
                    <p className="font-bold">Id: {FoodDtails._id}</p>
                    <p className="font-bold">Availabe: {FoodDtails.available}</p>
                    <p className="font-bold">Price: {FoodDtails.food_price}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn bg-neutral-200">Edit {FoodDtails.food_name}</button>
                        <button className="btn bg-neutral-200">Delete {FoodDtails.food_name}</button>
                    </div> */}
                </div>
            </div>
        </div>
        
    );
};

export default OwnerDetails;