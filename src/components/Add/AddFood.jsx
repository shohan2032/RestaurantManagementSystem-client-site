
const AddFood = () => {
    const handlePostFood = (e) => {
        //page ta load kora off korbe
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        const food = {};
        for (const field of form) {
          if (field.name) {
            food[field.name] = field.value;
          }
        }
        // console.log(food);
        // return;
        // post food
        fetch("https://restaurant-management-system-server.vercel.app/post-food", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(food),
        })
          .then((res) => res.json())
          .then((data) =>{
            if(data.insertedId){
                alert("Food added successfully");
            }
          });
      };
    return (
        <div>
        <div className=" my-6 text-center">
            <h1 className="text-3xl font-bold">Add New Food</h1>
            <p className="text-sm">Fill up the following form to post a new food</p>
        </div>
        {/* form starts */}
        <form
            action=""
            className="md:px-12 grid md:grid-cols-2 gap-4"
            onSubmit={handlePostFood}
            >
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Food name</span>
                </label>
                <input
                    name="food_name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full "
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input
                    name="food_price"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full "
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input
                    name="created_date"
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Food Logo</span>
                </label>
                <input
                    name="food_logo"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Available?</span>
                </label>
                <div>
                    <select className="select select-bordered" name="available">
                        <option selected>YES</option>
                        <option>NO</option>
                    </select>
                </div>
            </div>
            <div className="col-span-2 flex justify-center">
                <input type="submit" className="btn bg-zinc-400 w-52" value={"Post Food"} />
            </div>
        </form>
        {/* form ends */}
    </div>
    );
};

export default AddFood;