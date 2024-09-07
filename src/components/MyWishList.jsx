import React, { useContext, useState } from "react"
import TempWishListContext from "../context/TempWishListContext"
import { Link } from "react-router-dom"

const MyWishList = () => {
  const wishListData = useContext(TempWishListContext)
  console.log("Wishlist from myWIshlist component ", wishListData)

  const list = wishListData ? Array.from(wishListData) : null

  return (
    <div className="container">
      <div className=" row ms-auto">
        {list &&
          list.map((photo) => (
            <div className="card mb-4 border-0">
              <div className="col-lg-5">
                <img
                  src={photo.download_url}
                  className="card-img-top"
                  alt={photo.author}
                  style={{ width: "20rem" }}
                />
              </div>
              <div className="col-7">
                <div className="card-body">
                  <h5 className="card-title">{photo.author}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Width: {photo.width}</li>
                  <li className="list-group-item">Height: {photo.height}</li>
                </ul>
              </div>

              <div className="card-body">
                <Link to={photo.download_url}>Download</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyWishList
