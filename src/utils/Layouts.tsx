
import Header from "../components/Header/Header.tsx"
import Footer from "../components/Footer/Footer.tsx"
import {Outlet} from 'react-router-dom'

function Layouts() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts