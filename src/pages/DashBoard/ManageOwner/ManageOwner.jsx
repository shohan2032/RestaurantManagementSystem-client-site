import Table from './TableForOwner';
const ManageOwner = () => {
    return (
        <div>
          <div className="max-w-6xl mx-auto">
            {/* Manage owner heading starts */}
            <div className="text-center my-10">
              <p className="text-orange-500 font-bold">Manage Owners</p>
              <h2 className="text-2xl font-bold">
                You can update or delete any owner here.
              </h2>
            </div>
            {/* Manage owner heading ends */}
    
            {/* table for managing products */}
            <Table/>
          </div>
        </div>
    );
};

export default ManageOwner;