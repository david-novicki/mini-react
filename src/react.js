(() => {
	function isClass(element) {
		return element instanceof Object;
	}

	function isFunction(element) {
		return typeof (element) === 'function';
	}

	function handleClass(element, props) {
		const component = new element(props);
		return component.render();
	}

	function anElement(element, props, children) {
		if (isClass(element)) {
			return handleClass(element, props);
		} else if (isFunction(element)) {
			return element(props);
		} else {
			//create normal html element w/children
			const anElement = document.createElement(element);
			children.forEach(child => {
				if (typeof (child) === 'object') {
					anElement.appendChild(child);
				} else {
					anElement.innerHTML += child;
				}
			});
			return anElement;
		}
	}

	function createElement(el, props, ...children) {
		return anElement(el, props, children);
	}

	class Component {
		constructor(props) {
			this.props = props;
		}
	}

	window.React = {
		createElement,
		Component
	};

	window.ReactDOM = {
		render: (el, domEl) => {
			domEl.appendChild(el);
		}
	};
})();