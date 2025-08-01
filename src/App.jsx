import "./App.css";
import PropertyList from "./components/PropertyList/PropertyList";

function App() {
	return (
		<>
			<div className="background-image">
				<div className="label-motto">
					<div className="label">Peace, nature, dream</div>
					<div className="motto">Find and book a great experience.</div>
				</div>
				<div className="filters">
					<div className="countries">
						<div className="country selected">All Stays</div>
						<div className="country">Norway</div>
						<div className="country">Finland</div>
						<div className="country">Sweden</div>
						<div className="country">Switzerland</div>
					</div>
					<div className="superhost-property-type">
						<div className="superhost">
							<label className="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
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
				<PropertyList />
			</div>
		</>
	);
}

export default App;
