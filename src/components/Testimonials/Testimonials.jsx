import './Testimonials.css'

function Testimonials() {

    const testimonials = [
        {
            name: "María González",
            company: "Centro Empresarial Norte",
            text:
                "Excelente servicio y atención. El equipo superó nuestras expectativas desde el primer día.",
        },

        {
            name: "Carlos Ramírez",
            company: "Oficinas Delta",
            text:
                "Profesionalismo, puntualidad y resultados impecables en cada visita.",
        },

        {
            name: "Lucía Fernández",
            company: "Residencial Los Álamos",
            text:
                "La calidad del servicio realmente marca la diferencia. Muy recomendados.",
        },
    ]

    return (
        <section className="testimonials-section">

            <div className="container">

                <div className="testimonials-header text-center">

                    <h2>
                        Lo que dicen nuestros clientes
                    </h2>

                    <p>
                        Empresas y clientes que confían en nuestro trabajo.
                    </p>

                </div>

                <div className="row g-4">

                    {testimonials.map((testimonial, index) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                        >

                            <div className="testimonial-card">

                                <p className="testimonial-text">
                                    “{testimonial.text}”
                                </p>

                                <div className="testimonial-user">

                                    <h4>
                                        {testimonial.name}
                                    </h4>

                                    <span>
                                        {testimonial.company}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Testimonials