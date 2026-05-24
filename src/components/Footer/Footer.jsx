import './Footer.css'

function Footer() {

    return (
        <footer className="footer">

            <div className="container">

                <div className="row g-5">

                    <div className="col-lg-4">

                        <h3 className="footer-logo">
                            CleanPro Solutions
                        </h3>

                        <p>
                            Servicios profesionales de limpieza para
                            empresas, oficinas y espacios comerciales.
                        </p>

                    </div>

                    <div className="col-lg-4">

                        <h4>
                            Navegación
                        </h4>

                        <ul className="footer-links">

                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="/services">
                                    Servicios
                                </a>
                            </li>

                            <li>
                                <a href="/about">
                                    Nosotros
                                </a>
                            </li>

                            <li>
                                <a href="/contact">
                                    Contacto
                                </a>
                            </li>

                        </ul>

                    </div>

                    <div className="col-lg-4">

                        <h4>
                            Contacto
                        </h4>

                        <p>
                            contacto@cleanpro.com
                        </p>

                        <p>
                            +54 11 1234 5678
                        </p>

                        <p>
                            Buenos Aires, Argentina
                        </p>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 CleanPro Solutions.
                        Todos los derechos reservados.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer