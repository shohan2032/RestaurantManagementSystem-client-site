
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from "react-toastify";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const Table = () => {
    const [OwnerCategory,setOwnerCategory] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://restaurant-management-system-server.vercel.app/all-owner`).then((res)=>res.json()).then((data)=>{
          setOwnerCategory(data?.owner_category)
          setIsLoading(false)
            
        });
    },[]);

    // method for deleting a food
    const handleDeleteOwner = (_id) => {
      fetch(`https://restaurant-management-system-server.vercel.app/delete-owner/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            const remaining = OwnerCategory.filter((owner) => owner._id !== _id);
            setOwnerCategory(remaining);
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
                        <th>OwnerName</th>
                        <th>Ownership</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OwnerCategory?.map((owner) => (
                        <tr key={owner._id}>
                          <td>{owner._id}</td>
                          <td>{owner.owner_name}</td>
                          <td>{owner.ownership}</td>
                          <td>
                          <span onClick={() => handleDeleteOwner(owner._id)} className="cursor-pointer mt-8 mb-8">
                              <RiDeleteBinFill size={20} />
                            </span>
                            <span className='mt-8 mb-8'>
                              <Link to={`/dashboard/update-food/${owner._id}`}>
                                <GrUpdate size={20} />
                              </Link>
                            </span>
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