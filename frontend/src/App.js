
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/MENBAN.png';
import women_banner from './Components/WOMBAN.png';
import furn_banner from './Components/Assests/Grey Modern Furniture Promotion Banner.png';
import NewCollections from './Components/NewCollections/NewCollections';
import ProductDetails from './Pages/ProductDetails';
function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/Men' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/Women' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/Furnishings' element={<ShopCategory banner={furn_banner} category="furnishings"/>}/>
      <Route path="/Product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
     
      </Route>
     
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
