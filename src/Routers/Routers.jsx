import App from '../App'
import Add from '../pages/Add'
import Update from '../pages/Update';


import {
    createBrowserRouter,
  } from "react-router-dom";
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/add",
      element: <Add/>,
      },
      {
        path: "/update/:id",
        element: <Update/>,
        },
     
  ]);
  
  export default Routers