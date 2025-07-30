import "./App.css";

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
						<div className="superhost"></div>
						<div className="property-type"></div>
					</div>
				</div>
			</div>
			<div className="background-dark"></div>
		</>
	);
}

export default App;
