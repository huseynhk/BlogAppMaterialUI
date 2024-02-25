
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import DetailBlog from "./components/DetailBlog";
import EditBlog from "./components/EditBlog";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTER.Home} exact element={<Home />} />
        <Route path={ROUTER.AddProduct} element={<AddBlog />} />
        <Route path={ROUTER.UpdateProduct + "/:id"} element={<EditBlog />} />
        <Route path={ROUTER.UpdateProduct + "/:id"} element={<DetailBlog />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
