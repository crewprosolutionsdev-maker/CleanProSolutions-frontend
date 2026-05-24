import './Hero.css';

function Hero() {
    return (
        <section className="hero">
        
            {/* Background animado*/}
            <div className="hero-background">
                <div className="hero-image" />

                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        Espacios limpios.
                        <br />
                        Resultados profesionales.
                    </h1>

                    <p>
                        Soluciones de limpieza premium para centros comerciales, espacios comerciales,
                        oficinas e instalaciones grandes.
                    </p>

                    <button>
                        Solicitar cotización
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Hero;