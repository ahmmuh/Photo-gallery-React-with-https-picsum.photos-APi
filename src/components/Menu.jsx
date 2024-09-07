import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TempWishListContext from "../context/TempWishListContext"
import Loading from "./Loading"

const Menu = () => {
  //   const wishListData = useContext(TempWishListContext)
  //   const [displayWishList, setWishList] = useState([])

  //   console.log("wishListData from Menu ", wishListData)

  //   if (!wishListData) {
  //     return <Loading />
  //   }

  //   const list = Array.from(wishListData)
  //   console.log("from menu ", list)
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
                {/* {list && list.length} */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
