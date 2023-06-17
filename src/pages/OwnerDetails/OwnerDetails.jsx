import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vl from "./OwnerDetails.css"
const OwnerDetails = () => {
    const [OwnerDtails,setOwnerDtails] = useState({});
    //it is a react router dom hook.it helps us to read something from a URL
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://restaurant-management-system-server.vercel.app/owner-details/${id}`).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setOwnerDtails(data)
        });
    },[id])
    return (
        <div className="mt-10 mb-10 grid md:grid-cols-2 gap-8 drop-shadow-md ">
            <div className="bg-slate-950 rounded-b-lg rounded-t-lg">
                <h1 className="flex justify-center font-bold text-white">{OwnerDtails.owner_name} Profile</h1>
                <div>
                    <img className="mt-5" src={OwnerDtails.owner_image}/>
                    <div className="font-bold text-white text-center mt-5 mb-5">
                        <p>Created Date: {OwnerDtails.created_date}</p>
                        <p>ID: {OwnerDtails._id}</p>
                        <p>District: {OwnerDtails.district}<br></br>HouseNO: {OwnerDtails.road_no}<br></br>HouseName: {OwnerDtails.house_name}</p>
                        <p>OwnerShip: {OwnerDtails.ownership}%</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950 rounded-b-lg rounded-t-lg">
                <h1 className="flex justify-center font-bold text-white">       {OwnerDtails.owner_name} Social Platform
                </h1>
                <div className="flex justify-center text-white mt-8">
                    <div className="grid grid-flow-col place-content-center gap-4">
                        <a href="https://twitter.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                        <a href="https://www.youtube.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                        <a href="https://www.facebook.com/profile.php?id=100090266858282" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>   
            {/* <div>
                <button className="btn btn-primary">Edit {OwnerDtails.owner_name}
                </button>
            </div>
            <div>
                <button className="btn btn-primary">Delete {OwnerDtails.owner_name}
                </button>
            </div> */}
        </div>
    );
};

export default OwnerDetails;