import './WhyChooseUs.css'

function WhyChooseUs() {

    const features = [
        {
            title: "Personal Capacitado",
            text: "Profesionales entrenados para garantizar resultados impecables.",
        },

        {
            title: "Atención Rápida",
            text: "Respuesta eficiente y soluciones adaptadas a cada cliente.",
        },

        {
            title: "Equipamiento Profesional",
            text: "Tecnología y productos de alta calidad para cada servicio.",
        },

        {
            title: "Resultados Garantizados",
            text: "Compromiso con la excelencia y la satisfacción del cliente.",
        },
    ]

    return (
        <section className="why-section">

            <div className="container">

                <div className="why-header text-center">

                    <h2>
                        ¿Por qué elegirnos?
                    </h2>

                    <p>
                        Comprometidos con la excelencia en cada servicio.
                    </p>

                </div>

                <div className="row g-4">

                    {features.map((feature, index) => (

                        <div
                            className="col-lg-3 col-md-6"
                            key={index}
                        >

                            <div className="why-card">

                                <h3>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.text}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default WhyChooseUs