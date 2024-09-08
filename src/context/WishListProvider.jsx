import { useEffect, useState } from "react"
import ListContext from "./ListContext"
import { getWishList } from "../backend/db"
const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([])

  const myList = getWishList()

  useEffect(() => {
    setWishList(myList)
  }, [])

  return (
    <ListContext.Provider value={wishList}>{children}</ListContext.Provider>
  )
}

export default WishListProvider
