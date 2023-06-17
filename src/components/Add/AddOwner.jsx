
const AddOwner = () => {
    const handlePostOwner = (e) => {
        e.preventDefault();
        const form = e.target;
        const owner = {};
        for (const field of form) {
          if (field.name) {
            owner[field.name] = field.value;
          }
        }
        // console.log(owner);
        // post job
        fetch("https://restaurant-management-system-server.vercel.app/post-owner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(owner),
        })
          .then((res) => res.json())
          .then((data) =>{
            if(data.insertedId){
            alert("Owner added successfully");
            }
        });
      };
    return (
        <div>
        <div className=" my-6 text-center">
            <h1 className="text-3xl font-bold">Add New Owner</h1>
            <p className="text-sm">Fill up the following form to post a new owner</p>
        </div>
        {/* form starts */}
        <form
            action=""
            className="md:px-12 grid md:grid-cols-2 gap-4"
            onSubmit={handlePostOwner}
            >
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Owner name</span>
                </label>
                <input
                    name="owner_name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full "
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">District</span>
                </label>
                <input
                    name="district"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full "
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">House Name</span>
                </label>
                <input
                    name="house_name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Road No</span>
                </label>
                <input
                    name="road_no"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
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
                    <span className="label-text">Ownership</span>
                </label>
                <input
                    name="ownership"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Picture</span>
                </label>
                <input
                    name="owner_image"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Facebook URL</span>
                </label>
                <input
                    name="facebook"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Linkedin URL</span>
                </label>
                <input
                    name="linkedin"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Tweeter URL</span>
                </label>
                <input
                    name="tweeter"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                />
            </div>
            <div className="col-span-2 flex justify-center">
                <input type="submit" className="btn bg-zinc-400 w-52" value={"Post Owner"} />
            </div>
        </form>
        {/* form ends */}
    </div>
    );
};

export default AddOwner;