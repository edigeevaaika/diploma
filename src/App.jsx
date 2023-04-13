import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Delivery from "./Pages/Delivery";
import Category from "./Pages/Сategory";
import { createContext, useEffect, useState } from "react";
import { getDoc, getDocs } from "firebase/firestore";
import { categoryCollection } from "./Firebase";

export const AppContext = createContext({
  categories: []
});

export default function App() {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    // получить категории из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      // категории будут храниться в snapshop.docs
      const newCategories = [];
      // coздать массив для категорий
      snapshot.docs.forEach((doc) => {
        //doc = категория
        // заполнить массив данными из списка категорий
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      // задать новый массив как состояние компонента
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="App">
      <AppContext.Provider value={{categories}}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:path" element={<Category/>} />
        </Routes>
      </Layout>
      </AppContext.Provider>
    </div>
  );
}
