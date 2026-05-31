import { useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import PageHero from "../components/PageHero/PageHero"
import Footer from "../components/Footer/Footer"
import "./ContactPage.css"

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })

    const contactDetails = [
        {
            title: "Email",
            text: "contacto@cleanpro.com",
        },
        {
            title: "Teléfono",
            text: "+54 11 1234 5678",
        },
        {
            title: "Ubicación",
            text: "Buenos Aires, Argentina",
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok){
                alert(data.message || 'Error al enviar la consulta. Por favor, intenta nuevamente.')

                return
            }

            alert("Consulta enviada correctramente")

            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            })
        } catch (error) {
            console.error(error)
            alert('Error al enviar la consulta. No se pudo conectar al servidor.')
        }

    }

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
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor="name">Nombre</label>
                                            <input value={formData.name} onChange={handleChange} name="name" id="name" type="text" placeholder="Tu nombre" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="company">Empresa</label>
                                            <input value={formData.company} onChange={handleChange} name="company" id="company" type="text" placeholder="Nombre de la empresa" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input value={formData.email} onChange={handleChange} name="email" id="email" type="email" placeholder="tu@email.com" />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="phone">Telefono</label>
                                            <input value={formData.phone} onChange={handleChange} name="phone" id="phone" type="tel" placeholder="+54 11 1234 5678" />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="service">Servicio de interes</label>
                                            <select value={formData.service} onChange={handleChange} name="service" id="service" defaultValue="">
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
                                                value={formData.message}
                                                onChange={handleChange}
                                                name="message"
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
