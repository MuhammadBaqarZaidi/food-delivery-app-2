import React, { useContext } from 'react';
import { Store } from './utils/Store';

export default function AddToCart(product, children) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === { children });
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...{ product }, quantity } });
  };

  return <button onClick={addToCartHandler}>Add to Cart</button>;
}
