import React from 'react';

const ProductItem = ({ products }) => {
  return (
    <tbody>
      {products.map(product => (
        <tr data-cy="Product">
          <td className="has-text-weight-bold" data-cy="ProductId">
            {product.id}
          </td>

          <td data-cy="ProductName">{product.name}</td>
          <td data-cy="ProductCategory">{`${product.category.icon} - ${product.category.title}`}</td>

          <td data-cy="ProductUser" className="has-text-link">
            {product.user.name}
          </td>
        </tr>
      ))}

      {/* <tr data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          1
        </td>

        <td data-cy="ProductName">Milk</td>
        <td data-cy="ProductCategory">🍺 - Drinks</td>

        <td data-cy="ProductUser" className="has-text-link">
          Max
        </td>
      </tr>

      <tr data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          2
        </td>

        <td data-cy="ProductName">Bread</td>
        <td data-cy="ProductCategory">🍞 - Grocery</td>

        <td data-cy="ProductUser" className="has-text-danger">
          Anna
        </td>
      </tr>

      <tr data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          3
        </td>

        <td data-cy="ProductName">iPhone</td>
        <td data-cy="ProductCategory">💻 - Electronics</td>

        <td data-cy="ProductUser" className="has-text-link">
          Roma
        </td>
      </tr> */}
    </tbody>
  );
};

export default ProductItem;
