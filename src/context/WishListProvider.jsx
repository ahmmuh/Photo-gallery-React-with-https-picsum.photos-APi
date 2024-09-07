import { useEffect, useState } from "react"
import Start from "../components/Start"
import TempWishListContext from "./TempWishListContext"
import Menu from "../components/Menu"
import MyWishList from "../components/MyWishList"

const WishListProvider = () => {
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
  return (
    <TempWishListContext.Provider value={wishList}>
      <Menu />
      <MyWishList />
    </TempWishListContext.Provider>
  )
}

export default WishListProvider
