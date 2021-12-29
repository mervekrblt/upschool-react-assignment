import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../BASE_URL'
//import ProductCard from '../components/products/ProductCard'
import TableItem from '../components/products/TableItem'


const Products = () =>
{
  const [products, setProducts] = useState([])

  const getAllProducts = async () =>
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
    <div className="table-responsive">
      <table className="table table-hover table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Image</th>
          <th scope="col">Title</th>
          <th scope="col" className='d-none d-md-block'>Description</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product =>
          <TableItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          >
          </TableItem>
        )}
      </tbody>
    </table>
    </div>
    

  </>
}
export default Products