import React from "react"

const Header = () => {
  return (
    <div className="row">
      <div className="col-9 mx-auto py-5 mb-3">
        <h1 className="text-primary ">
          Välkommen till Photo Gallery, där du har möjlighet att se
          högkvalitativa och vackra bilder.
        </h1>
        <p className="pb-2 lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          architecto neque ut reprehenderit accusamus consequuntur quibusdam
          asperiores dolorum dicta eligendi, totam debitis. Explicabo distinctio
          officia animi ullam quod laborum soluta, veritatis dolores tempora
          ipsum magni a ad. Nam veritatis ad dolore. Sunt enim mollitia
          consectetur delectus animi minima blanditiis quidem.
        </p>
        <button
          onClick={() => alert("Not Implemented Yet")}
          className="btn btn-md  btn-outline-primary border-bottom rounded"
        >
          Buy Photo
        </button>
      </div>
    </div>
  )
}

export default Header
