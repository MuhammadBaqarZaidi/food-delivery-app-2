import React, { useContext } from 'react';
import { Store } from './utils/Store';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from './CartButton';
import dynamic from 'next/dynamic';

function CartBox() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  return (
    <div>
      <h1>CartPage</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/menu">Go shopping</Link>
        </div>
      ) : (
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      ></Image>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>Rs. {item.price}</td>
                    <td>
                      <button onClick={() => removeItemHandler(item)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : Rs.
          {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartBox), { ssr: false });
