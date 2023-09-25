import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "details/:id",
        loader: ()=> fetch('../data.json'),
        element: <DonationDetails/>
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default Router;
