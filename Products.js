import React from 'react';
import ProductsData from "./productsData"
console.log(ProductsData);

function Products() {
	return (
		<div>
              {ProductsData.map(product => (
				  <div>
					  <h2>{product.name}</h2>
	  				  <p>{product.description} <span>${product.price}</span></p>
				  </div>
			  ))}
		</div>
	)
}

export default Products;
