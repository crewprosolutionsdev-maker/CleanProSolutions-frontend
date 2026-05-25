import Navbar from "../components/Navbar/Navbar"
import PageHero from "../components/PageHero/PageHero"
import CTASection from "../components/CTASection/CTASection"
import Footer from "../components/Footer/Footer"
import "./AboutPage.css"

function AboutPage() {
    const values = [
        {
            title: "Compromiso operativo",
            text: "Planificamos cada servicio con responsables claros, horarios definidos y seguimiento constante.",
        },
        {
            title: "Cuidado profesional",
            text: "Trabajamos con productos, procesos y equipamiento adecuados para cada tipo de instalacion.",
        },
        {
            title: "Respuesta cercana",
            text: "Acompanamos a cada cliente con comunicacion directa y soluciones ajustadas a su rutina.",
        },
    ]

    const stats = [
        { value: "12+", label: "anos de experiencia" },
        { value: "80+", label: "clientes activos" },
        { value: "24/7", label: "cobertura operativa" },
    ]

    return (
        <>
            <Navbar />

            <PageHero
                title="Sobre Nosotros"
                subtitle="Un equipo especializado en mantener espacios corporativos limpios, seguros y listos para operar."
                image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070"
            />

            <main>
                <section className="about-intro">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <span className="about-eyebrow">Nuestra forma de trabajar</span>
                                <h2>Limpieza profesional con criterio, continuidad y detalle.</h2>
                                <p>
                                    En CleanPro Solutions ayudamos a empresas, oficinas e instalaciones comerciales a
                                    sostener ambientes impecables sin interrumpir su actividad diaria.
                                </p>
                                <p>
                                    Nuestro enfoque combina equipos capacitados, supervision frecuente y planes de
                                    trabajo flexibles para que cada espacio reciba exactamente el servicio que necesita.
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-image" aria-label="Equipo de limpieza profesional trabajando" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-stats">
                    <div className="container">
                        <div className="row g-4">
                            {stats.map((stat) => (
                                <div className="col-md-4" key={stat.label}>
                                    <div className="about-stat">
                                        <strong>{stat.value}</strong>
                                        <span>{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="container">
                        <div className="about-values-header text-center">
                            <h2>Valores que se ven en el resultado</h2>
                            <p>
                                Cada cliente requiere una dinamica distinta. Por eso priorizamos orden, confianza y
                                consistencia en cada visita.
                            </p>
                        </div>

                        <div className="row g-4">
                            {values.map((value) => (
                                <div className="col-lg-4" key={value.title}>
                                    <article className="about-value-card">
                                        <h3>{value.title}</h3>
                                        <p>{value.text}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <CTASection />
            <Footer />
        </>
    )
}

export default AboutPage;
