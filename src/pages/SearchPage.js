import { useLocation } from "react-router-dom"
import Search from "../components/Search"

const SearchPage = () => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get("q")
  console.log(search)
  if(location.pathname === '/search') {
    
  }
return <>
  <h1 className="text-center my-5">What are you looking for...</h1>
  <Search ></Search>
</>
}
export default SearchPage