import styles from "./App.module.css";
// vamos a importar la funcion NavBAR
import NavBar from "./componets/NavBar.tsx";
// importamos en componente Details

import Hero from "./componets/Hero.tsx";


// traemos al modulo footer 

import Footer from "./componets/Footer.tsx";
import Home from "./views/Home.tsx";


import Details from "./views/Details.tsx";

import Cart from "./views/Cart.tsx";

//"header-logo"

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Cart/>
    </>
  );
}


export default App;
