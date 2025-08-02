import "./PropertyList.css";
import { useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

function PropertyList({ countryOption, superhost }) {
	const [propertyList, setPropertyList] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
		)
			.then((response) => response.json())
			.then((data) => setPropertyList(data));
	}, []);

	function getPropertyList(countryOption, superhost, propertyList) {
		if (countryOption === "all-stays") return propertyList;
		return propertyList.filter(
			(property) =>
				property.location === countryOption && property.superhost === superhost
		);
	}

	return (
		<>
			<div className="background-dark-text">Over 200 stays</div>
			<div className="property-list">
				{getPropertyList(countryOption, superhost, propertyList).map(
					(property) => (
						<PropertyCard key={property.id} property={property} />
					)
				)}
			</div>
		</>
	);
}

export default PropertyList;
