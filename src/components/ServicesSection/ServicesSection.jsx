import './ServicesSection.css'

import ServiceCard from '../ServicesCard/ServiceCard'

function ServicesSection() {

    const services = [
        {
            title: "Limpieza Comercial",
            description:
                "Mantenimiento profesional para oficinas y espacios corporativos.",
        },

        {
            title: "Limpieza Industrial",
            description:
                "Soluciones eficientes para instalaciones y grandes superficies.",
        },

        {
            title: "Limpieza Residencial",
            description:
                "Servicios premium para hogares y espacios privados.",
        },
    ]

    return (
        <section className="services-section">

            <div className="container">

                <div className="services-header text-center">

                    <h2>
                        Nuestros Servicios
                    </h2>

                    <p>
                        Soluciones de limpieza adaptadas a cada necesidad.
                    </p>

                </div>

                <div className="row g-4">

                    {services.map((service, index) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                        >

                            <ServiceCard
                                title={service.title}
                                description={service.description}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default ServicesSection