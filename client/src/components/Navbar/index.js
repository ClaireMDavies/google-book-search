import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(94, 53, 4)" }}>
            <span class="navbar-brand mb-0 h1">Google Books</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/search"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
                            }
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
