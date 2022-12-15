import { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [CartIsShown, SetCartIsShown] = useState(false);
  const showCartHandler = (props) => {
    SetCartIsShown(true);
  };
  const hideCartHandler = (props) => {
    SetCartIsShown(false);
  };
  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
