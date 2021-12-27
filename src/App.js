//import { useState } from 'react'

import Footer from "./components/base/Footer";
import Nav from "./components/base/Nav";

function App() {
  //const [data, setData] = useState(null)
  
  /*fetch("http://localhost:4000/products")
  .then(response => response.json())
  .then(data => setData(data))*/

  return (
    <>
    <Nav></Nav>
    
    <Footer></Footer>
    </>
  );
}

export default App;
