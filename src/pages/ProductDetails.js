import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../BASE_URL'



const ProductDetails = () => {
  const location = useLocation()
  const id = Number(location.pathname.split("/")[2])
  const [product, setProduct] = useState({})

  const getProduct = async () => {
    const res = await axios.get(`${BASE_URL}/${id}`)
    const data = res.data
    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

return <>
{JSON.stringify(product)}
</>
}
export default ProductDetails