import React from 'react';
import ProductsData from "./productsData"
import {Link} from "react-router-dom"
function Products() {
	return (
		<div>
			<h1>Products</h1>
              {ProductsData.map(product => (
				  <h2 key={product.id}>
					  <Link to={`/products/${product.id}`}>{product.name} - ${product.price}</Link>
				      <hr/>
				  </h2>
			  ))}
		</div>
	)
}

export default Products;
