/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ProductList from './components/ProductList/ProductList';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    cat => cat.id === product.categoryId,
  );
  const user = category
    ? usersFromServer.find(usr => usr.id === category.ownerId)
    : null;

  return {
    ...product,
    category,
    user,
  };
});

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  let productsToShow = [...products];

  // if (searchQuery) {
  //   productsToShow = productsToShow.filter(product =>
  //     product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
  //   );
  // }

  if (selectedUserId) {
    productsToShow = productsToShow.filter(
      product => product.user && product.user.id === selectedUserId,
    );
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <FilterPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          users={usersFromServer}
          selectedCategoryIds={selectedCategoryIds}
          setSelectedCategoryIds={setSelectedCategoryIds}
          categories={categoriesFromServer}
        />

        <ProductList products={productsToShow} />
      </div>
    </div>
  );
};
