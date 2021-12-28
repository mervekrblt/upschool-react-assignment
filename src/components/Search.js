import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Search = (props) =>
{
  const location = useLocation()
  const navigation = useNavigate()
  //const urlParams = new URLSearchParams(location.search)
  //const search = urlParams.get("q")
  const [q, setQ] = useState("")
  //console.log(location)

  const inputHandler = (e) =>
  {
    e.preventDefault()
    // PROBLEMMM
    //console.log(e.target.search.value)
    setQ(e.target.search.value)
    console.log(q)
    navigation(`/search?q=${e.target.search.value}`)
  }

  useEffect(() => {
    //if(location.search === "")
    if(location.search.length === 0) {
      console.log("setQ sıfırla")
      setQ("")
      console.log(q)
    }
  }, [location, q])


  return <>
    <div className="container">
      <form onSubmit={inputHandler} className="mx-auto">
        <input type="text" className="form-control w-75 my-3 mx-auto" name="search" defaultValue={q} />
        <div className="text-center">
          <button className="btn btn-success me-3" type="submit">Search</button>
          <button className="btn btn-warning" type="reset" >Reset</button>
        </div>

      </form>
    </div>
  </>
}
export default Search