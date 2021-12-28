import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../BASE_URL'
import ProductCard from '../components/products/ProductCard'

const Products = () =>
{
  const [products, setProducts] = useState([])

  const getAllProducts = async() =>
  {
    const res = await axios.get(BASE_URL)
    const data = res.data
    setProducts(data)
  }

  useEffect(() =>
  {
    // call this function when page is created
    getAllProducts()
    console.log(products)
  }, [])

  console.log(products)
  return <>
    <div className="container">
      <div className="row">
        {products.map(product =>
        <div className='col-md-4 py-3' key={product.id}>
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          >
          </ProductCard>
        </div>
        )}
      </div>
        
    </div>
  </>
}
export default Products