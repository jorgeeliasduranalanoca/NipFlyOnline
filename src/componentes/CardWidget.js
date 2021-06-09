import React, { Component } from "react";

class CardWidget extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="product-card">
		<div className="product-tumb">
			<img src={this.props.img}alt=""/>
		</div>
		<div className="product-details">
			<h4>{this.props.destino}</h4>
			<p>{this.props.ciudad}</p>
			<div className="product-bottom-details">
				<div className="product-price">{this.props.precio}</div>
                </div>
        </div>
	</div>
        );
    }
}

export default CardWidget;