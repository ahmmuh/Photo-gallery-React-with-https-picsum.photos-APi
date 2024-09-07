import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ListContext from "../context/ListContext"

const MyWishList = () => {
  const wishList = useContext(ListContext)

  console.log("wishList", wishList)
  return (
    <div className="container">
      <h2 className="text-center my-3">My Wishlist</h2>
      <div className="row ms-auto">
        {wishList &&
          wishList.map((photo) => (
            <div className="card mb-4 border-0 d-flex flex-row" key={photo.id}>
              <div className="col-lg-5">
                <img
                  src={photo.download_url}
                  className="card-img-top"
                  alt={photo.author}
                  style={{ width: "20rem" }}
                />
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <h5 className="card-title">{photo.author}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush border-0">
                  <li className="list-group-item">Width: {photo.width}</li>
                  <li className="list-group-item">Height: {photo.height}</li>
                  <Link
                    className="list-group-item text-primary"
                    to={photo.download_url}
                  >
                    Download
                  </Link>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyWishList
