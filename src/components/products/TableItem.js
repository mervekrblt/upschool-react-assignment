import { useNavigate } from "react-router-dom"

const TableItem = (props) =>
{
  const { image, title, description, id } = props

  const navigation = useNavigate()
  const goDetails = () => {
    navigation(`/product-details/${id}`)
  }
  
  return <>

    <tr role="button" onClick={goDetails}>
      <th scope="row">{id}</th>
      <td><img src={image} alt="products" style={{ width: "10vh", height: "10vh" }}/> </td>
      <td>{title}</td>
      <td className="d-none d-md-table-cell">{description.split(" ").slice(0, 5).join(" ")}...</td>
    </tr>
  </>
}
export default TableItem