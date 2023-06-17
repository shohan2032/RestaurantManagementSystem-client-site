import { useParams } from "react-router-dom";

const DeleteFood = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>dlt food {id}</h1>
        </div>
    );
};

export default DeleteFood;