import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ListContext from "../context/ListContext"
import Loading from "./Loading"

const MyWishList = () => {
  const wishList = useContext(ListContext)

  if (!wishList) {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="alert alert-info">
            You don't have any photos in the WishList
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h4 className="lead my-3">
        <i className="fa-solid fa-heart text-danger"></i> My WishList (
        {wishList.length})
      </h4>
      <div className="row d-flex">
        {wishList?.map(
          (photo) =>
            photo && (
              <div className="col-lg-3" key={photo.id}>
                <div className="card mb-4 border">
                  {photo.download_url ? (
                    <img
                      src={photo.download_url}
                      className="card-img-top border-3 rounded-end"
                      alt={photo.download_url}
                    />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-lg-7 mb-3">
                  <ul className="list-group list-group-flush border-0">
                    <div className="card-body">
                      <h5 className="card-title">{photo.author}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                    <li className="list-group-item">Width: {photo.width}</li>
                    <li className="list-group-item">Height: {photo.height}</li>
                    <li className="list-group-item">
                      {photo.download_url ? (
                        <Link className="text-primary" to={photo.download_url}>
                          Download
                        </Link>
                      ) : (
                        <Loading />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default MyWishList
