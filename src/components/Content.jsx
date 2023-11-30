import IMAGES from "../images/Images"

export default function Content(props) {
    const { imageUrl, location, googleMapsUrl, title, startDate, endDate, description } = props
    return (
        <main>
            <section className="location-card">
                <img src={imageUrl} className="location-image" alt="mount-fuji" />
                <section className="content">
                    <div className="location-details">
                        <img src={IMAGES.locationIcon} alt="location pin icon" className="location-icon"/>
                        <h3 className="location">{location}</h3>
                        <a href={googleMapsUrl} target= "_blank" className="view-on-maps">View on Google Maps</a>
                    </div>
                    <h2 className="location-specific">{title}</h2>
                    <p className="date-of-visit">
                        <span className="start-date">{startDate}</span> 
                        - 
                        <span className="end-date">{endDate}</span>
                    </p>
                    <p className="location-info">{description}</p>
                </section>
            </section>
        </main>
    )
}