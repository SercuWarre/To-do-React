import {
  createBrowserRouter,
  
} from "react-router-dom";

import {TodoOverview} from "../screens/TodoOverview";
import {TodoSettings} from "../screens/TodoSettings";

// todo add the react router to the app
//export the router to be used in the app

//create a route for the home page
//create a route for the settings page

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoOverview />,
  },
  {
    path: "/settings",
    element: <TodoSettings/>,
  },
  {
    path: "*",
    element: <div>404</div>,
  }

]);

export default router;





