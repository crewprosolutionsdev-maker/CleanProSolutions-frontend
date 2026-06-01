import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <div className="container">

                    <Link className="navbar-brand fw-bold" to="/">
                        CleanPro Solutions
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav gap-3">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    Servicios
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Nosotros
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contacto
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;