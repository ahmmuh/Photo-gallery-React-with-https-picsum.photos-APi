import { createContext, useContext, useEffect, useState } from "react"

const wishListContext = createContext()

const ListContextProvider = () => {
  const [wishList, setWishList] = useState([])

  const getWishList = () => {
    const myList = JSON.parse(localStorage.getItem("wishList"))
    if (myList) {
      setWishList(myList)
    }
    console.log("hämtad Wish list", myList)
  }

  useEffect(() => {
    getWishList()
  }, [])
  return <wishListContext.Provider value={wishList}></wishListContext.Provider>
}

export default ListContextProvider
