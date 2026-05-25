import DetailedServiceCard from '../DetailedServiceCard/DetailedServiceCard'
import "./ServicesDetailed.css"


function ServicesDetailed() {
    const services = [
        {
            title: "Limpieza Comercial",
            description: "Mantenimiento profesional para oficinas, locales y espacios corporativos.",
            features: [
                "Limpieza diaria o programada",
                "Personal capacitado",
                "Flexibilidad horaria",
            ],
        },
        {
            title: "Limpieza Industrial",
            description: "Soluciones para grandes instalaciones, depósitos y superficies de alto tránsito.",
            features: [
                "Protocolos de seguridad",
                "Equipamiento profesional",
                "Servicio escalable",
            ],
        },
        {
            title: "Limpieza para Instalaciones",
            description: "Servicios premium para centros comerciales, edificios y espacios de uso intensivo.",
            features: [
                "Mantenimiento integral",
                "Supervisión constante",
                "Resultados consistentes",
            ],
        },
    ]

    return (
        <section className="services-detailed">
            <div className="container">
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <DetailedServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesDetailed