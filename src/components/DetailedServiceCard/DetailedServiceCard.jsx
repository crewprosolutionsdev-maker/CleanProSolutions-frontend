import "./DetailedServiceCard.css"

function DetailedServiceCard({ title, description, features }) {
    return (
        <div className="detailed-service-card">

            <h3>{title}</h3>

            <p>{description}</p>

            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DetailedServiceCard