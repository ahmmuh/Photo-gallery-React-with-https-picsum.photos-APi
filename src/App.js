import { Outlet } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import PhotoList from "./components/PhotoList"
import Start from "./components/Start"
import ListContextProvider from "./context/wishListContext"

function App() {
  return (
    <div className="container-fluid">
      <ListContextProvider>
        <Menu />
        <hr />
        <Outlet />
      </ListContextProvider>

      <Footer />
    </div>
  )
}

export default App
