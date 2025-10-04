import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList(){
  // group by category
  const groups = PRODUCTS.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  return (
    <div style={{padding:20}}>
      <h1>Products</h1>
      {Object.keys(groups).map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="grid">
            {groups[category].map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
