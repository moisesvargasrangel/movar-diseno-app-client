import { useEffect, useState, Fragment } from "react";
import { Routes, Route, useNavigate, BrowserRouter as Router } from "react-router-dom";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";

//Components
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Questions from "./pages/QyA";

//Actions CRUD PRODUCT
import AddProduct from "./pages/ProductCrud/AddProductPage";
import ProductDetailPage from "./pages/ProductCrud/ProductDetailPage";
import EditProductPage from "./pages/ProductCrud/EditProductPage";

//Contact Page
import ContactPage from "./pages/Contact/ContactPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


const navigate = useNavigate()


  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      navigate("/auth/login")
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />     
        <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}

        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>} />
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/qya" element={<Questions/>}/>
        
        {/* ---> CRUD <--- */}
        <Route path="/newproduct" element={<AddProduct/>}/>
        <Route path="/gallery/:productId" element={<ProductDetailPage user={user} />}/>
        <Route path="/gallery/edit/:productId" element={<EditProductPage/>}/>

        {/* ---> CONTACT <--- */}
        <Route path="/contact/:productId" element={<ContactPage/>}/>

      </Routes>
      <Footer/>  
    </div>
  );
}
