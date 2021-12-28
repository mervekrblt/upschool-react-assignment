import { Link } from "react-router-dom"

const ProductCard = (props) => {
  const {image, title, description, id} = props
return <>
  <div className="card py-3 h-100">
    <img className="card-img-top mx-auto" src={image} alt="Card" style={{width: "15vh", height: "20vh"}}/>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
      <p className="card-text text-truncate" style={{}}>{description}</p>
      </div>
    <Link to={`/product-details/${id}`} className="btn btn-dark w-75 mx-auto">Details</Link>
  </div>
</>
}
export default ProductCard