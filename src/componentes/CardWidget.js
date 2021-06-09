import React, { Component } from "react";

class CardWidget extends Component {
    render() {
        console.log(this.props)
        return (
           
		<div className="product-tumb">
			<img src={this.props.img}alt=""/>
		</div>
		
	
        );
    }
}

export default CardWidget;