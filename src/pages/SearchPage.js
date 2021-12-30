import { useLocation } from "react-router-dom"
import Search from "../components/Search"
import ProductCard from "../components/products/ProductCard"
import BASE_URL from "../BASE_URL"
import { useEffect, useState } from "react"

const SearchPage = () =>
{
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get("q")
  const [products, setProducts] = useState([])
  console.log(search)

  /*const filterProducts = () => {
    fetch(`${BASE_URL}?title=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }*/

  useEffect(() =>
  {
    fetch(`${BASE_URL}?title=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [search])

  console.log(products)
  console.log(!products.length)
  return <>
    <h1 className="text-center my-5">What are you looking for...</h1>
    <Search ></Search>
    {(!products.length && search !== null) && <div className="container my-5">
      <div className="alert alert-warning" role="alert">
        <h2>There is no item about "{search}" try again</h2>
        <p className="fw-bolder fst-italic">Hint: Search for ssd, laptop etc. </p>
        <p>I am not Amazon, I dont have all products :)</p>
      </div>

    </div>}

    <div className="container">
      <div className="row">
        {products.map(product => <div className='col-md-4 py-3' key={product.id}>
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          >
          </ProductCard>
        </div>)}
      </div>
    </div>
  </>
}
export default SearchPage