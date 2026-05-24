import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <div className="container">

                    <a className="navbar-brand fw-bold" href="/">
                        CleanPro Solutions
                    </a>

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
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/services">
                                    Servicios
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    Nosotros
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    Contacto
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;