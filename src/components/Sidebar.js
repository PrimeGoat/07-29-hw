import React, {Component} from 'react';

class Sidebar extends Component {
	constructor() {
		super();

		this.favFoods = ["Pizza", "Cheeseburger", "Cinnamon Raisin Bagel with American Yellow Cheese and Pepperoni", "Turtles?"];
	}
	render() {
		return (
			<div style={{
				backgroundColor: "yellow",
				width: "10vw",
				height: "75vh"
			}}>
				<ul style={{
					listStyleType: "none",
					paddingLeft: "5px"
				}}>
				{this.favFoods.map(entry => {
					return (
						<li>{entry}</li>
					)
				})}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
