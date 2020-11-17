import React from 'react';
import {useHistory, useParams} from "react-router-dom"
import ProductsData from "../productsData"


function ProductDetails(props) {
	const {productId} = useParams()
	console.log(productId);
	const history = useHistory()
	const product = ProductsData.find(product => product.id === Number(productId))
	function handleClick() {
		console.log("Submitting...");
		setTimeout(() => {
			history.push("/products")
		}, 1000)
		history.replace("")
	}
	return (
	<div>
		<h1>Product Detail Page</h1>
		<h3>{product.name} -${product.price}</h3>
		<p>{product.description}</p>
		<button onClick={handleClick}>Back</button>
	</div>
	)
}

export default ProductDetails;
