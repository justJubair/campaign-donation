import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";

import DonationDetails from "../pages/DonationDetails/DonationDetails";

import Statistics from "../pages/Statistics/Statistics";
import Error from "../pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        loader: ()=> fetch('../data.json'),
        element: <Donation />,
      },
      {
        path: "details/:id",
        loader: ()=> fetch('../data.json'),
        element: <DonationDetails/>
      },
      {
        path: "/statistics",
        element: <Statistics/>
      },
    ],
  },
]);

export default Router;
