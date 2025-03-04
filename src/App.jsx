import { Outlet } from "react-router-dom"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"
import MainBody from "./components/mainbody.jsx";




function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App