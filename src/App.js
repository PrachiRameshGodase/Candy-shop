import {useState} from "react"
import "bootstrap/dist/css/bootstrap.css";
import Candies from "./components/Candies/Candies";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
 
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
   {cartIsShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
    <Candies/>
    </CartProvider>
  );
}

export default App;
