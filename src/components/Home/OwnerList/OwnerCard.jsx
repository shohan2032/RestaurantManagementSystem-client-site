import { Link } from "react-router-dom";

const OwnerCard = (props) => {
    const {singleOwner} = props;
    const {owner_name,owner_image,ownership,_id} = singleOwner || {};//object destructaring
    return (
        <div className="card card-compact w-96 bg-base-100  drop-shadow-2xl">
            <figure><img className="rounded-t-lg" src={owner_image} alt="Shoes" />
            </figure>
            <div className="card-body bg-gray-950 rounded-b-lg">
                <h2 className="card-title font-bold text-rose-50">{owner_name}</h2>
                <p className="text-rose-50 font-bold">Ownership:{ownership}%</p>
                <Link to={`/owner/${owner_name}/details/owner-id/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-rose-50">Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default OwnerCard;