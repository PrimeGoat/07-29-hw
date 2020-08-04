import React, {Component} from 'react';

class Body extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: "pink",
				width: "90vw",
				height: "75vh",
				boxSizing: "border-box",
				padding: "15px"
}}>
				<img src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1500,h_1000/https://www.cicis.com/wp-content/uploads/2019/02/pepperoni_pizza_3-4_c.png" width="25%" /><br clear="all" />
				PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA IPSUM PEPPERONI LOREM<br />
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "25px"
					}}>
					<LittleBox color="red">SQUARE 1</LittleBox>
					<LittleBox color="green">SQUARE 2</LittleBox>
					<LittleBox color="blue">SQUARE 3</LittleBox>
					<LittleBox>EXTRA!</LittleBox>
				</div>
			</div>
		)
	}
}

const LittleBox = props => {
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: props.color || "white",
				width: "100px",
				height: "100px",
				margin: "15px",
				alignItems: "center",
				justifyContent: "center",
				color: props.color ? "white" : "black",
				border: "2px solid black"
		}}
		>
			{props.children}
		</div>
	)
}

export default Body;
