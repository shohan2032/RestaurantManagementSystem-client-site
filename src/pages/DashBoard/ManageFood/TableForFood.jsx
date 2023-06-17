
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from "react-toastify";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const Table = () => {
    const [FoodCategory,setFoodCategory] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);
    // fetching data using useEffect
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://restaurant-management-system-server.vercel.app/all-food`).then((res)=>res.json()).then((data)=>{
            setFoodCategory(data?.food_category)
            setIsLoading(false);
        });
    },[]);

    // method for deleting a food
    const handleDeleteFood = (_id) => {
      fetch(`https://restaurant-management-system-server.vercel.app/delete-food/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            const remaining = FoodCategory.filter((food) => food._id !== _id);
            setFoodCategory(remaining);
            // toast.success("Deleted Successfully")
            alert("Deleted Successfully")
          }
        })
        .catch(err =>{
          console.log(err);
          // toast(err.message)
        });
      };
    return (
      <div>
        {
                IsLoading?(
                    <div className="flex justify-center">
                        <span className="loading loading-bars loading-xs"></span>
                        <span className="loading loading-bars loading-sm"></span>
                        <span className="loading loading-bars loading-md"></span>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ):(
                  <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>FoodName</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FoodCategory?.map((food) => (
                        <tr key={food._id}>
                          <td>{food._id}</td>
                          <td>{food.food_name}</td>
                          <td>{food.food_price}</td>
                          <td>
                            {/* <Link to={`/dashboard/delete-food/${food?._id}`}>
                              <button className="btn btn-success mt-2 mb-2">Delete</button>
                            </Link> */}
                            <span onClick={() => handleDeleteFood(food._id)} className="cursor-pointer mt-8 mb-8">
                              <RiDeleteBinFill size={20} />
                            </span>
                            <span className='mt-8 mb-8'>
                              <Link to={`/dashboard/update-food/${food._id}`}>
                                <GrUpdate size={20} />
                              </Link>
                            </span>
                            {/* <Link to={`/dashboard/update-food/${food?._id}`}>
                              <button className="btn btn-outline mt-2 mb-2">Update</button>
                            </Link> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table> 
                </div>
                )
          }
      </div>
    );
};

export default Table;