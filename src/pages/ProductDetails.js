import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BASE_URL from '../BASE_URL'

const ProductDetails = () =>
{
  const location = useLocation()
  const id = Number(location.pathname.split("/")[2])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const getProduct = async () =>
  {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then(data =>
      {
        setProduct(data)
        setLoading(false)
      })

  }
  //console.log(loading)
  useEffect(() =>
  {
    getProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    {loading && <div className="text-center">
      <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    }
    {!loading && <div className="container">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img src={product.image} className=' h-575 w-75' alt='product' />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-wrap">
            {product.description}
          </p>
          <h2>Categories</h2>
          {product.category.map(item => <span class="badge rounded-pill bg-info text-dark mb-3 me-2">{item}</span>)}
          <h2>Price</h2>
          <h4>{product.price} $</h4>
        </div>
      </div>
    </div>}
  </>
}
export default ProductDetails