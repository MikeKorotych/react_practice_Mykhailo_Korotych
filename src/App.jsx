/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.scss';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ProductList from './components/ProductList/ProductList';

// import usersFromServer from './api/users';
// import categoriesFromServer from './api/categories';
// import productsFromServer from './api/products';

// const products = productsFromServer.map((product) => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId

//   return null;
// });

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Product Categories</h1>
      <FilterPanel />

      <ProductList />

      <div className="box table-container">
        <p data-cy="NoMatchingMessage">
          No products matching selected criteria
        </p>
      </div>
    </div>
  </div>
);
