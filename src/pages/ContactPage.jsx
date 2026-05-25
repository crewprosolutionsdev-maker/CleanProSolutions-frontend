import Navbar from "../components/Navbar/Navbar"
import PageHero from "../components/PageHero/PageHero"
import Footer from "../components/Footer/Footer"
import "./ContactPage.css"

function ContactPage() {
    const contactDetails = [
        {
            title: "Email",
            text: "contacto@cleanpro.com",
        },
        {
            title: "Telefono",
            text: "+54 11 1234 5678",
        },
        {
            title: "Ubicacion",
            text: "Buenos Aires, Argentina",
        },
    ]

    return (
        <>
            <Navbar />

            <PageHero
                title="Contacto"
                subtitle="Contanos que necesita tu espacio y te preparamos una propuesta clara, profesional y a medida."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            />

            <main>
                <section className="contact-section">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <span className="contact-eyebrow">Hablemos</span>
                                    <h2>Solicita una cotizacion para tu empresa.</h2>
                                    <p>
                                        Nuestro equipo puede ayudarte a definir frecuencia, horarios y alcance del
                                        servicio segun el tipo de instalacion.
                                    </p>

                                    <div className="contact-details">
                                        {contactDetails.map((detail) => (
                                            <div className="contact-detail" key={detail.title}>
                                                <h3>{detail.title}</h3>
                                                <p>{detail.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <form className="contact-form">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor="name">Nombre</label>
                                            <input id="name" type="text" placeholder="Tu nombre" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="company">Empresa</label>
                                            <input id="company" type="text" placeholder="Nombre de la empresa" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" type="email" placeholder="tu@email.com" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="phone">Telefono</label>
                                            <input id="phone" type="tel" placeholder="+54 11 1234 5678" />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="service">Servicio de interes</label>
                                            <select id="service" defaultValue="">
                                                <option value="" disabled>
                                                    Selecciona una opcion
                                                </option>
                                                <option>Limpieza comercial</option>
                                                <option>Limpieza industrial</option>
                                                <option>Limpieza para instalaciones</option>
                                                <option>Otro servicio</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="message">Mensaje</label>
                                            <textarea
                                                id="message"
                                                rows="5"
                                                placeholder="Contanos sobre el espacio, horarios y frecuencia deseada"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <button type="submit">Enviar consulta</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ContactPage;
