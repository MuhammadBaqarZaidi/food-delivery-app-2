'use client';

import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function CartPage() {
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
                      <Link href={`/product/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </Link>
                    </td>
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
          <div>
            <ul>
              <li>
                <div>
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                  Rs.
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <Link href="login?redirect=/shipping">Check Out</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
