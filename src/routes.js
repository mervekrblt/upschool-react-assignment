import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Products from './pages/Products'
import SearchPage from './pages/SearchPage'
import ProductDetails from './pages/ProductDetails'
const routes = [
  { title: "Home", path: "/", element: Home, isNav: true },
  { title: "AboutPage", path: "/about", element: AboutPage, isNav: true },
  { title: "Products", path: "/products", element: Products, isNav: true },
  { title: "SearSearchPagech", path: "/search", element: SearchPage, isNav: true },
  { title: "ProductDetails", path: "/product-details", element: ProductDetails, isNav: false },
  
]

export default routes