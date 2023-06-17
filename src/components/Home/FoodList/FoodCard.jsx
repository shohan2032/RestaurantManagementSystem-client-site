import { Link } from "react-router-dom";

const OwnerCard = (props) => {
    const {singleFood} = props;
    const {food_logo,food_name,food_price,_id} = singleFood || {};//object destructaring
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img className="rounded-t-lg" src={food_logo} alt="Shoes" /></figure>
            <div className="card-body bg-gray-950 rounded-b-lg">
                <h2 className="card-title font-bold text-rose-50">{food_name}</h2>
                <p className="text-rose-50 ">{food_price}</p>
                <div className="card-actions justify-end">
                <Link to={`/food/${food_name}/details/food-id/${_id}`}>
                    <button className="btn btn-primary text-rose-50">Details</button>
                </Link>
                
                </div>
            </div>
        </div>
    );
};

export default OwnerCard;