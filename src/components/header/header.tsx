import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';
import { Button } from '../button/buttton';

import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CartIcon, Head, Searce, UserSpace } from './header-style';
import { Logo } from '../Logo/logo';
import { useCartContext } from '../../hooks/useCartContext';

export const Header: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');
  const { cartItems } = useCartContext();

  const handlePesquisaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };

  const sumCartItems = () => {
    const totalItemsQuantity = cartItems.reduce((acumulador, valorAtual) =>
      acumulador + valorAtual.item.quantity, 0);
    return totalItemsQuantity;
  }

  return (
    <Head>
      <Button to="/"
        label={<Logo />}
      />

      <Searce>
        <SrcInput value={pesquisa} onChange={handlePesquisaChange} placeholder='Ex: Casa' />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </Searce>

      <UserSpace>
        <Button
          to="/shopping_cart"
          label={
            <CartIcon $sumitems={sumCartItems()}>
              {sumCartItems() > 0 ? <div>{sumCartItems()}</div> : <div></div>}
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartIcon>
          } />
        <Button to="/registration_page" label={<FontAwesomeIcon icon={faUserCircle} />} />
      </UserSpace>

    </Head>
  );
};

