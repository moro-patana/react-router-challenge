import React from 'react';
import ProductsData from "./productsData"
console.log(ProductsData);

function Products() {
	return (
		<div>
			<h1>Products</h1>
              {ProductsData.map(product => (
				  <div key={product.id}>
					  <h2>{product.name}</h2>
	  				  <p>{product.description} <span>Price: ${product.price}</span></p>
				      <hr/>
				  </div>
			  ))}
		</div>
	)
}

export default Products;
