import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
                alt="Tennis"
              />
            </td>
            <td>
              <strong>Super duper tennis</strong>
              <span>$129.90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#008b8b" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#008b8b" />
                </button>
              </div>
            </td>
            <td>
              <strong>$259.80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#008b8b" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Submit order</button>

        <Total>
          <span>TOTAL</span>
          <strong>$1290.20</strong>
        </Total>
      </footer>
    </Container>
  );
}
