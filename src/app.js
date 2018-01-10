class Hello extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return React.createElement('button', { onclick: this.props.onClick }, `Hello`);
	}
}

const helloWorld = React.createElement(Hello, { onClick: () => alert('yay it worked') }, null);
ReactDOM.render(helloWorld, document.getElementById('root'));