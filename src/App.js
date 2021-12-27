//import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import Footer from "./components/base/Footer";
import Nav from "./components/base/Nav";
import routes from "./routes"

function App() {
  //const [data, setData] = useState(null)
  
  /*fetch("http://localhost:4000/products")
  .then(response => response.json())
  .then(data => setData(data))*/

  return (
    <>
    <Nav></Nav>
    <Routes>
      {routes.map(route => <Route path={route.path} key={route.title} element={< route.element/>}></Route> )}
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
