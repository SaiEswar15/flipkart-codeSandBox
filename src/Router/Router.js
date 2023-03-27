import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Dash from "../components/Dash";
import CartPage from "../components/CartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/navbar",
    element: <Navbar />,
    children: [
      {
        path: "/navbar/dash",
        element: <Dash />
      },
      {
        path: "/navbar/cartPage",
        element: <CartPage />
      }
    ]
  }
]);

export default router;
