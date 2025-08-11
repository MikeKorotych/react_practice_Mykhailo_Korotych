import React from 'react';

import cn from 'classnames';

const FilterPanel = ({
  searchQuery,
  setSearchQuery,
  selectedUserId,
  setSelectedUserId,
  users,
  selectedCategoryIds,
  setSelectedCategoryIds,
  categories,
  onReset,
}) => {
  const handleCategoryToggle = categoryId => {
    if (selectedCategoryIds.includes(categoryId)) {
      setSelectedCategoryIds(prev =>
        prev.filter(catId => catId !== categoryId),
      );
    } else {
      setSelectedCategoryIds(prev => [...prev, categoryId]);
    }
  };

  const handleClearCategories = () => {
    setSelectedCategoryIds([]);
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            {searchQuery && (
              <span className="icon is-right">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete"
                  onClick={() => setSearchQuery('')}
                />
              </span>
            )}
          </p>
        </div>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            className={cn({ 'is-active': !selectedUserId })}
            onClick={() => setSelectedUserId(null)}
          >
            All
          </a>

          {users.map(user => (
            <a
              data-cy="FilterUser"
              key={user.id}
              href="#/"
              className={cn({ 'is-active': selectedUserId === user.id })}
              onClick={() => setSelectedUserId(user.id)}
            >
              {user.name}
            </a>
          ))}
        </p>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            onClick={handleClearCategories}
            href="#/"
            data-cy="AllCategories"
            className={cn('button', 'mr-2', 'my-1', 'is-info', {
              'is-outlined': selectedCategoryIds.length > 0,
            })}
          >
            All
          </a>

          {categories.map(category => (
            <a
              key={category.id}
              href="#/"
              data-cy="Category"
              onClick={() => handleCategoryToggle(category.id)}
              className={cn('button', 'mr-2', 'my-1', {
                'is-info': selectedCategoryIds.includes(category.id),
              })}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            onClick={onReset}
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};

export default FilterPanel;
