/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ProductList from './components/ProductList/ProductList';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map(product => {
  const category = // find by product.categoryId
  const user =  // find by category.ownerId

  return null;
});

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const productsToShow = [...productsFromServer];

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <FilterPanel />

        <ProductList productsToShow={productsToShow} />
      </div>
    </div>
  );
};
