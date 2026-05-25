import Navbar from "../components/Navbar/Navbar"
import PageHero from "../components/PageHero/PageHero"
import ServicesDetailed from "../components/ServicesDetailed/ServicesDetailed"
import Footer from "../components/Footer/Footer"


function ServicesPage() {
    return (
        <>
            <Navbar />
            
            <PageHero
                title="Nuestros Servicios"
                subtitle="Soluciones profesionales de limpieza para empresas, oficinas e instalaciones comerciales."
                image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
            />

            <ServicesDetailed />

            <Footer />
        </>
    )
}

export default ServicesPage;
