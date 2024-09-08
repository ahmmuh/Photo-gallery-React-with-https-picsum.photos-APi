import { useEffect, useState } from "react"
import ListContext from "./ListContext"
import { getWishList } from "../backend/db"
const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([])
  const myWishList = getWishList()
  useEffect(() => {
    setWishList(myWishList)
  }, [myWishList, wishList])

  return (
    <ListContext.Provider value={wishList}>{children}</ListContext.Provider>
  )
}

export default WishListProvider
