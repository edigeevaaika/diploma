import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Delivery from "./Pages/Delivery";
import Category from "./Pages/Сategory";
import { createContext, useEffect, useState } from "react";
import { getDoc, getDocs } from "firebase/firestore";
import { categoryCollection, productsCollection } from "./Firebase";
import Cart from "./Pages/Cart";

export const AppContext = createContext({
  categories: [],
  products:[],

  //корзина
  cart:{},
  setCart:{},
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  //корзина
  const [cart,setCart] = useState({});
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

    getDocs(productsCollection).then((snapshot) => {
      // категории будут храниться в snapshop.docs
      const newProducts = [];
      // coздать массив для категорий
      snapshot.docs.forEach((doc) => {
        //doc = категория
        // заполнить массив данными из списка категорий
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });
      // задать новый массив как состояние компонента
      setProducts(newProducts);
    });
  }, []);
  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart,setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
