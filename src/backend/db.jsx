export const getWishList = () => {
  try {
    const myList = JSON.parse(localStorage.getItem("wishList"))
    if (myList) {
      console.log("MYList ", myList)
      return myList
    }
  } catch (error) {
    console.error("Fel vid hämtning av önskelista", error)
  }
}
