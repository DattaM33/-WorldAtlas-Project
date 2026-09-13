import "./AppLayout.css"
import Headers from "../UI/Header";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";
function AppLayout()
{
  return(
    <>
     <Headers/>
     <Outlet/>
     <Footer/>
    </>
  );
}
export default AppLayout