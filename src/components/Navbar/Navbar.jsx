import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <> 
        <nav>
            <div className="logo">
                CryptoApp
            </div>
            <ul className="nav-links">
                <li>Homepage</li>
                <li>News</li>
                <li>Exchanges</li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}
 
export default Navbar;