import { useEffect, useState } from "react"
import ListContext from "./ListContext"
import MyWishList from "../components/MyWishList"
import Menu from "../components/Menu"
const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([])

  const getWishList = () => {
    try {
      const myList = JSON.parse(localStorage.getItem("wishList"))
      if (myList) {
        console.log("Hämtad Wish list", myList)
        setWishList(myList)
      }
    } catch (error) {
      console.error("Fel vid hämtning av önskelista", error)
    }
  }

  useEffect(() => {
    getWishList()
  }, [])

  console.log("Wish list from provider ", wishList)
  return (
    <ListContext.Provider value={wishList}>{children}</ListContext.Provider>
  )
}

export default WishListProvider
