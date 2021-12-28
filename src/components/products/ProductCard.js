const ProductCard = (props) => {
  const {image, title, description} = props
return <>
  <div className="card py-3">
    <img className="card-img-top mx-auto" src={image} alt="Card" style={{width: "15vh", height: "20vh"}}/>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
      <p className="card-text text-center">{description}</p>
      </div>
    <button className="btn btn-dark w-75 mx-auto">Details</button>
  </div>
</>
}
export default ProductCard