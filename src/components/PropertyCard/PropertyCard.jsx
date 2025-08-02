import "./PropertyCard.css";
import House from "../House";
import Guest from "../Guest";
import Star from "../Star";

function PropertyCard({ property }) {
	return (
		<div className="property-card">
			<img src={property.image} alt="property card" />
			<div className="card-main-part">
				<div className="title">{property.title}</div>
				<div className="description">{property.description}</div>
				<div className="house-guest">
					<div className="house">
						<House />
						<p>{`${property.capacity.bedroom} bedroom`}</p>
					</div>
					<div className="guest">
						<Guest />
						<p>{`${property.capacity.people} guests`}</p>
					</div>
				</div>
				<div className="price-rating">
					<div className="price-container">
						<span className="price">{`$${property.price}`}</span>
						<span className="price-night">/night</span>
					</div>
					<div className="rating-container">
						<Star />
						<div className="rating">{property.rating}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PropertyCard;
