import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Manage from "./pages/manage/Manage";
import CreateProduct from "./pages/create-product/CreateProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<CreateProduct />} />
          <Route path="manage" element={<Manage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
