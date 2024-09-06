import React from "react"

const Loading = () => {
  return (
    <div className="col-6 ms-auto mt-5">
      <div className="spinner-border text-bg-danger">
        <span className="visually-hidden fs-5" style={{ fontSize: "2rem" }}>
          Loadding...
        </span>
      </div>
    </div>
  )
}

export default Loading
