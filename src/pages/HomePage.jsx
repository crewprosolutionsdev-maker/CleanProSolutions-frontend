import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import WhyChooseUs from '../components/WhyChoseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import CTASection from '../components/CTASection/CTASection';
import Footer from '../components/Footer/Footer';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <Footer />
        </>
    )
}

export default HomePage;