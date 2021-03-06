import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, EmptyCartText, Total } from './styles';

import Order from '../../components/Order';

export default function Cart() {
  const cartSize = useSelector(state => state.cart.length);
  const [orderState, setOrderState] = useState('not finished');

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  const EmptyCart = () => {
    return (
      <Container>
        <EmptyCartText>Your cart is empty</EmptyCartText>
      </Container>
    );
  };

  const Table = () => {
    if (cartSize) {
      return (
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUCT</th>
              <th>QTY</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#008b8b" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#008b8b" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <MdDelete size={20} color="#008b8b" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      );
    }
    return EmptyCart();
  };

  const handleSubmit = () => {
    setOrderState('finished');
  };

  return (
    <Container>
      {orderState === 'finished' ? <Order /> : <Table />}
      <footer>
        <button
          type="button"
          className={`${cartSize ? 'order' : 'disabled'}`}
          onClick={handleSubmit}
        >
          Submit order
        </button>

        <Link to="/">
          <button type="button" className="shopping">
            Continue shopping
          </button>
        </Link>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
