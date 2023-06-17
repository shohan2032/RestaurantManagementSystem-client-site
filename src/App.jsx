import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import FoodList from "../src/components/Home/FoodList/FoodList"
import MainLayout from "./layouts/MainLayout/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import OwnerDetails from "./pages/OwnerDetails/OwnerDetails";
import OwnerList from "./components/Home/OwnerList/OwnerList";
import FoodDetails from "./pages/FoodDetails/FoodDetails";
import ManageOwner from "./pages/DashBoard/ManageOwner/ManageOwner";
import ManageFood from "./pages/DashBoard/ManageFood/ManageFood";
import DeleteFood from "./components/Delete/DeleteFood";
import UpdateFood from "./components/Update/UpdateFood";
import UpdateOwner from "./components/Update/UpdateOwner";
import DeleteOwner from "./components/Delete/DeleteOwner";
import AddOwner from "./components/Add/AddOwner";
import AddFood from "./components/Add/AddFood";

function App() {
  const routers = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/food-list",
          element:<FoodList/>
        },
        {
          path:"/food/:food_name/details/food-id/:id",
          element:<FoodDetails/>
        },
        {
          path:"/owner-list",
          element:<OwnerList/>
        },
        {
          path:"/owner/:owner_name/details/owner-id/:id",
          element:<OwnerDetails/>
        },
      ]
    },
    {
      path:"/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          // path:"/",
          //dashboard a ashle by default ei router a ashbe
          index:true,
          element:<ManageOwner/>
        },
        {
          path:"manage-food/",
          element:<ManageFood/>
        },
        {
          path:"delete-food/:id",
          element:<DeleteFood/>
        },
        {
          path:"update-food/:id",
          element:<UpdateFood/>
        },
        {
          path:"delete-owner/:id",
          element:<DeleteOwner/>
        },
        {
          path:"update-owner/:id",
          element:<UpdateOwner/>
        },
        {
          path:"add-owner/",
          element:<AddOwner/>
        },
        {
          path:"add-food/",
          element:<AddFood/>
        },
      ]
    }
  ])
  return (
    <div>
       <RouterProvider router={routers}/>
    </div>
  )
}

export default App;
