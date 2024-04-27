import "./App.scss";

function App() {
	return (
		<>
			<button className="variable-btn">Variables SASS</button>
			<hr />
			<h1>Variable Scope H1</h1>
			<h3>Variable Scope H3</h3>
			<hr />
			<p>
				Global <button className="btn-global-1">Global - 1</button>
				<button className="btn-global-2">Global - 2</button>
			</p>
			<hr />
			<p>
				Default <button className="btn-default-1">Default - 1</button>
				<button className="btn-default-2">Default - 2</button>
			</p>
			<hr />
			<p>
				Interpolation <button className="btn-primary">Primary</button>
				<button className="btn-secondary">Secondary</button>
			</p>
			<hr />
			<div className="container">
				<div className="header">
					<h1>Welcome</h1>
				</div>
				<div className="content">
					<p>This is some content.</p>
				</div>
				<div className="footer">
					<p>Contact us</p>
				</div>
			</div>
			<hr />
			<div className="nested-properties">
				This text uses the font properties defined in the .nested-properties
				class.
			</div>
			<hr />
			<div>
				<header className="header">
					<h1>Welcome</h1>
				</header>
				<button className="button">Click me</button>
			</div>
			<hr />
			<div>
				<header className="danger-class">Error Text</header>
			</div>
			<hr />
			<div className="border-class">Passing Variables</div>
			<hr />
			<div>
				<button className="btn-primary-extend">Primary Button Extend</button>
				<button className="btn-secondary-extend">
					Secondary Button Extend
				</button>
			</div>
			<hr />
			<div>
				<div className="text-small">Small Text</div>
				<div className="text-medium">Medium Text</div>
				<div className="text-large">Large Text</div>
			</div>
			<hr />
		</>
	);
}

export default App;
