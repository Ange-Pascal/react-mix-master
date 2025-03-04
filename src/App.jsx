import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Landing,
  Newsletter,
  Cocktail,
  Error,
  HomeLayout,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>, 
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "/cocktail",
        element: <Cocktail />
      },
      {
        path: "/newsletter",
        element: <Newsletter />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
