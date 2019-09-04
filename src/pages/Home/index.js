import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280"
          alt="Tennis"
        />
        <strong>Super cool tennis</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
