import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"


const Layout = () => {
  return (
    <div className="">
     <Nav/>
      <Outlet/>
    </div>
  )
}

export default Layout
