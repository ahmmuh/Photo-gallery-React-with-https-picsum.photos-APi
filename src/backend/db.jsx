export const getWishList = () => {
  const myList = JSON.parse(localStorage.getItem("wishList"))
  if (myList) {
    console.log("hämtad Wish list", myList)
    return myList
  }
}
