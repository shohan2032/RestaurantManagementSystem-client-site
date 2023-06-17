import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateFood = () => {
    const { id } = useParams();
  const [food, setFood] = useState({});
//   console.log(id);
  useEffect(() => {
    fetch(`https://restaurant-management-system-server.vercel.app/food-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [id]);

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {};
    for (const field of form) {
      if (field.name) {
        updatedFood[field.name] = field.value;
      }
    }
    // console.log(updatedFood);
    fetch(`https://restaurant-management-system-server.vercel.app/update-food/${food._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({updatedFood}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    return;
  };
  return (
    <div>
      <div className=" my-6 text-center">
        <h1 className="text-3xl font-bold">Update a Job</h1>
        <p className="text-sm">Fill up the following form to update a job</p>
      </div>
      {/* form starts */}
      <form
        action=""
        className="md:px-12 grid md:grid-cols-2 gap-4"
        onSubmit={handleUpdateFood}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Food name</span>
          </label>
          <input
            name="food_name"
            defaultValue={food.food_name}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="food_price"
            defaultValue={food.food_price}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            name="created_date"
            defaultValue={food.created_date}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Food Logo</span>
          </label>
          <input
            name="food_logo"
            defaultValue={food.food_logo}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available?</span>
          </label>
          <div>
            <select className="select select-bordered" name="available">
                <option selected={food.available == "Yes"}>Yes</option>
                <option selected={food.available == "No"}>No</option>
            </select>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <input type="submit" className="btn w-52" value={"Update Job"} />
        </div>
      </form>
      {/* form ends */}
    </div>
  );
};

export default UpdateFood;