import "./PageHero.css"


function PageHero({ title, subtitle, image }) {
    const heroStyle = image
        ? { "--page-hero-image": `url(${image})` }
        : undefined

    return (
        <section className="page-hero d-flex align-items-center" style={heroStyle}>
            <div className="container text-center">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    )
}

export default PageHero;
