import { Navigate } from "react-router-dom";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";

//PAGES
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Gallery from "../pages/Gallery";
import QyA from "../pages/QyA";


const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
