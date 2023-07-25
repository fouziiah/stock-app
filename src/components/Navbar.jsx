import { Link } from "react-router-dom";

export default function Navbar(){
return(
    <div className="nav">
        <Link to="/">
            <div>Home</div>
        </Link>

        {/* <Link>
            <div>Stock</div>
        </Link> */}

        <Link to="/about">
            <div>About</div>
        </Link>
    </div>
)
}