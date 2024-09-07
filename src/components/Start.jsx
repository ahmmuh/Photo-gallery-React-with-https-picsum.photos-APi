import React from "react"
import Header from "./Header"
import Content from "./Content"

const Start = () => {
  return (
    <>
      <hr />
      <Header />
      <div className="row">
        <div className="col">
          <Content />
        </div>
      </div>
    </>
  )
}

export default Start
