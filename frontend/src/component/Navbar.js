import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <header>
        <div className="navbar-container">
            <Link to="/">
                <h1>Nathy GYM</h1>
            </Link>
        </div>
       </header>
    )
}

export default Navbar;