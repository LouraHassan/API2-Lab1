import App from '../App'
import Add from '../pages/Add'


import {
    createBrowserRouter,
  } from "react-router-dom";
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/add/",
      element: <Add/>,
      },
   
     
  ]);
  
  export default Routers