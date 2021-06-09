import React, { Component } from "react";


class ItemListContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="product-card">
		<div className="product-tumb">
			<img src={this.props.img}alt=""/>
		</div>
		<div className="product-details">
			
			<p>{this.props.greeting}</p>
			<div className="product-bottom-details">
				<div className="product-price">{this.props.precio}</div>
			</div>
        </div>
	</div>
        );
    }
}

export default ItemListContainer;