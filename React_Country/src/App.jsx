import "./App.css"
import AppLayout from "./Components/Layout/AppLayout";
import Contact from "./pages/Contact"
import Country from "./pages/Country"
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";



const router=createBrowserRouter([

  {
   path:"/",
   element:<AppLayout/>,
   errorElement:<Error />,
   children:[
       {
  path:"/",
  element:<Home />
 },
     {
  path:"country",
  element:<Country />
 },
  {
  path:"about",
  element: <About />
 },
  { 
  path:"contact",
  element:<Contact />
 }]
 }


])
function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>    
    </>
  );
}

export default App
