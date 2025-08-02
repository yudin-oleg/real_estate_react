import "./App.css";
import { useState } from "react";
import PropertyList from "./components/PropertyList/PropertyList";

function App() {
	const [countryOption, setCountryOption] = useState("all-stays");
	const [superhost, setSuperhost] = useState(false);
	// const [propertyType, setPropertyType] = useState("1");
	return (
		<>
			<div className="background-image">
				<div className="label-motto">
					<div className="label">Peace, nature, dream</div>
					<div className="motto">Find and book a great experience.</div>
				</div>
				<div className="filters">
					<div className="countries">
						<div
							className={`country ${
								countryOption === "all-stays" ? "selected" : ""
							}`}
							onClick={() => setCountryOption("all-stays")}
						>
							All Stays
						</div>
						<div
							className={`country ${
								countryOption === "Norway" ? "selected" : ""
							}`}
							onClick={() => setCountryOption("Norway")}
						>
							Norway
						</div>
						<div
							className={`country ${
								countryOption === "Finland" ? "selected" : ""
							}`}
							onClick={() => setCountryOption("Finland")}
						>
							Finland
						</div>
						<div
							className={`country ${
								countryOption === "Sweden" ? "selected" : ""
							}`}
							onClick={() => setCountryOption("Sweden")}
						>
							Sweden
						</div>
						<div
							className={`country ${
								countryOption === "Switzerland" ? "selected" : ""
							}`}
							onClick={() => setCountryOption("Switzerland")}
						>
							Switzerland
						</div>
					</div>
					<div className="superhost-property-type">
						<div className="superhost">
							<label className="switch">
								<input
									type="checkbox"
									onClick={() => setSuperhost(!superhost)}
								/>
								<span className="slider round"></span>
							</label>
							<div className="superhost-text">Superhost</div>
						</div>
						{/* <div className="property-type"></div> */}
						<select name="property-type">
							<option value="">Property type</option>
							<option value="1">One bedroom</option>
							<option value="2">Two bedrooms</option>
						</select>
					</div>
				</div>
			</div>
			<div className="background-dark">
				<PropertyList countryOption={countryOption} superhost={superhost} />
			</div>
		</>
	);
}

export default App;
