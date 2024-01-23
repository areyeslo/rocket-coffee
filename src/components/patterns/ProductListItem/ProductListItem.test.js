import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductListItem from './ProductListItem';
import { OnSale, SoldOut, Standard } from './ProductListItem.stories';
it('shows on sale label when isOnSale', () => {
  render(<OnSale />)
  expect(screen.getByText(`(On Sale)`)).toBeInTheDocument();
})

it('disables the button when disabled', () => {
  render(<SoldOut />)
  expect(screen.getByText("Sold Out")).toHaveAttribute('disabled');
});

it('calls onAddToCart when button pressed', () => {
  const onAddToCart = jest.fn();

  render(<Standard
    onAddToCart={onAddToCart}
  />)

  fireEvent.click(screen.getByText("Add to Cart"))
  expect(onAddToCart).toHaveBeenCalled()
})
