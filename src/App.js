import "./App.css"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import { Outlet } from "react-router-dom"
import WishListProvider from "./context/WishListProvider"

function App() {
  return (
    <div className="container-fluid">
      <WishListProvider>
        <Menu />
        <Outlet />
      </WishListProvider>
      <Footer />
    </div>
  )
}

export default App
