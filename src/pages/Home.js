import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import BASE_URL from "../BASE_URL"
import About from "../components/About"
import Search from "../components/Search"
import ProductCard from '../components/products/ProductCard'
import './Home.css'

const Home = () =>
{
  const [postsPerPage] = useState(3);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const getPostData = (data) =>
  {
    return (
      data.map(product => product)
    )
  }

  const getAllPosts = async () =>
  {
    const res = await axios.get(BASE_URL)
    const data = res.data;
    const slice = data.slice(offset - 1, offset - 1 + postsPerPage)

    // For displaying Data
    const postData = getPostData(slice)

    // Using Hooks to set value
    setAllPosts(postData)
    setPageCount(Math.ceil(data.length / postsPerPage))
  }

  const handlePageClick = (event) =>
  {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() =>
  {
    getAllPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  return <>
    <h1 className="text-center my-5">NozamA</h1>
    <Search></Search>
    <div className="container">
      <div className="row">
        {posts.map(product =>
          <div className='col-md-4 py-3' key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
              description={product.description}
            >
            </ProductCard>
          </div>
        )}
      </div>

    </div>

    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />

    <About></About>

  </>
}
export default Home