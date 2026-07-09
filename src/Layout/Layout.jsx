import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx"
import '../App.css'

function Layout() {
    return (
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>
            
            <Footer></Footer>
           
        </>
    );
}

export default Layout;