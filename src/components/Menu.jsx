import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ListContext from "../context/ListContext"
const Menu = () => {
  const wishListData = useContext(ListContext)

  console.log("wishListData from Menu ", wishListData)
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Photo Gallery <i className="fa-solid fa-film"></i>
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mt-2  ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"} aria-current="page">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/photos"}>
                Photos
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to={"/mywishList"} aria-current="page">
                <i className="fa-regular fa-heart text-danger"></i> My Wishlist
                ({wishListData ? wishListData.length : 0})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
