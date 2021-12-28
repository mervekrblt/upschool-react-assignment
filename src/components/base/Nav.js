import { Link } from "react-router-dom"
import routes from '../../routes'

const Nav = () =>
{
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link className='navbar-brand' to="/">NozamA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {routes.filter(item => item.isNav).map((item, index) =>
              <li key={index} className="nav-item">
                <Link className="nav-link active" aria-current="page" to={item.path}>{item.title}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
}
export default Nav