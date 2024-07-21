import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <> 
        <nav>
            <div className="logo">
               <Link to="/">CryptoApp</Link>
            </div>
            <ul className="nav-links">
                <li><Link className="links" to="/">Homepage</Link></li>
                <li><Link className="links" to={"news"}>News</Link></li>
                <li><Link className="links" to={"cryptos"}>Cryptos</Link></li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}
 
export default Navbar;