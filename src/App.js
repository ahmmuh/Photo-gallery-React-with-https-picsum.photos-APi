import "./App.css"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="container-fluid">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
