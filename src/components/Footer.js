import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: "cyan",
				height: "5vh",
				boxSizing: "border-box",
				padding: "5px"
			}}>
				Copyright &copy; 2020 NOVATAR the VIOLATOR
			</div>
		)
	}
}

export default Footer;
