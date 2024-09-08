import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_URL } from "../backend/Base_url"

const PhotoDetail = () => {
  const [photo, setPhoto] = useState({})
  const { id } = useParams()
  console.log("Hittad photo: ", id)
  const getPhotoById = async () => {
    const res = await fetch(`${BASE_URL}/id/${id}/info`)
    const data = await res.json()
    const resizeImages = Array.from(data).map((image) => {
      return {
        ...image,
        width: 400,
        height: 300,
      }
    })
    const foundedPhoto = resizeImages.find((p) => p.id === id)
    setPhoto(foundedPhoto)
    console.log("photo from Detail component", foundedPhoto)
  }

  useEffect(() => {
    getPhotoById()
  }, [id])

  console.log("Kolla om photo object bär info om bilden? ", photo)
  return (
    <>
      <div className="col-lg-8 mx-auto mt-5">
        <div className="card border  shadow py-4">
          <div className="row g-0">
            <div className="col-lg-4 p-3">
              <img
                src={photo.download_url}
                className="card-img-top border-3 rounded-end"
                alt={photo.download_url}
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body p-4">
                <h3 className="card-title mb-0">{photo.author}</h3>
                <p className="card-text mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a
                  atque laborum nesciunt
                </p>
                <span>
                  Width: {photo.width} | Height: {photo.height}
                </span>{" "}
                <br />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Link
                    to={photo.url}
                    className="btn btn-md text-white"
                    style={{ backgroundColor: "#c0a266" }}
                  >
                    <i className="fa-solid fa-download"></i> Download
                  </Link>
                  <Link
                    to={"/photos"}
                    className="btn btn-sm text-white"
                    style={{ backgroundColor: "#c0a266" }}
                  >
                    <i className="fa-solid fa-chevron-left"></i> Tillbaka
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoDetail
