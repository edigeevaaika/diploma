import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Delivery from "./Pages/Delivery";
import Category from "./Pages/Сategory";


export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:path" element={<Category/>} />
        </Routes>
      </Layout>
    </div>
  );
}
