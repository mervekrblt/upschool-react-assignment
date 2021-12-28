import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import BASE_URL from "../BASE_URL"
import About from "../components/About"
import Search from "../components/Search"
import ProductCard from '../components/products/ProductCard'
import './Home.css'

const Home = () =>
{
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() =>
  {
    fetchData();
  }, []);
  function fetchData()
  {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) =>
      {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage })
  {
    setCurrentPage(selectedPage);
  }
  return <>
    <h1 className="text-center my-5">NozamA</h1>
    <Search></Search>
    <div className="container">
      <div className="row">
        {currentPageData.map(product =>
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