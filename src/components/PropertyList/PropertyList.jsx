import "./PropertyList.css";
import { useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

function PropertyList() {
	const [propertyList, setPropertyList] = useState([]);
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
		)
			.then((response) => response.json())
			.then((data) => setPropertyList(data));
	}, []);
	return (
		<>
			<div className="background-dark-text">Over 200 stays</div>
			<div className="property-list">
				{propertyList.map((property) => (
					<PropertyCard key={property.id} property={property} />
				))}
			</div>
		</>
	);
}

export default PropertyList;
