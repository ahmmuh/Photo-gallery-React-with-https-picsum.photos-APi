import React, { useEffect, useState } from "react"
import Loading from "./Loading"
import { BASE_URL } from "../backend/Base_url"
import { Link } from "react-router-dom"

const PhotoList = () => {
  const [photos, setPhotos] = useState([])
  const [wishList, setWishList] = useState([])
  const fetchPhotos = async () => {
    const response = await fetch(`${BASE_URL}`)
    const data = await response.json()
    const resizeImages = Array.from(data).map((image) => {
      return {
        ...image,
        width: 200,
        height: 200,
      }
    })
    setPhotos(resizeImages)
    console.log("resizeImages", resizeImages)
  }
  useEffect(() => {
    setTimeout(() => {
      fetchPhotos()
    }, 1500)
  }, [])

  const addToWishList = (photo) => {
    const updatedWishList = [...wishList]
    updatedWishList.push(photo)
    setWishList(updatedWishList)
    localStorage.setItem("wishList", JSON.stringify(updatedWishList))
    console.log("updatedWishList", updatedWishList)
  }

  useEffect(() => {}, [])

  return (
    <div className="col-8 mx-auto mt-3">
      {photos.length <= 0 && <Loading />}

      {photos.map((photo) => (
        <div className="card border-0 shadow rounded mb-4 p-3" key={photo.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={photo.download_url}
                className="card-img-top border-3 rounded-end"
                alt={photo.download_url}
              />
            </div>
            <div className="col">
              <div className="card-body m-0 px-2 ">
                <h3 className="card-title">{photo.author}</h3>
                <p className="card-text m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a
                  atque laborum nesciunt quasi
                </p>
                <span>
                  Width: {photo.width} | Height: {photo.height}
                </span>{" "}
                <br />
                <div className="pt-2">
                  <Link
                    to={`/photos/${photo.id}`}
                    className="btn btn-md w-25 text-white"
                    style={{ backgroundColor: "#c0a266" }}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-md w-25 text-danger ms-4"
                    onClick={() => addToWishList(photo)}
                  >
                    <i className="fa-regular fa-heart"></i> Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PhotoList
