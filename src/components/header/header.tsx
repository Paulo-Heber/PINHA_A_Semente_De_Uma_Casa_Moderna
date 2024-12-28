import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';
import { Button } from '../button/buttton';

import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../img/logo.png'
import { CartIcon, Head, Searce, UserSpace } from '../../styles/header-style';
import { useCartContext } from '../../hooks/useCartContext';
import { Badge, LogoContainer, LogoText } from '../../styles/logo_style';

export function Logo() {
  return (
    <LogoContainer>
      <div>
        <Badge src={logo} alt="logo" />
        <LogoText>
          <h1>pinha</h1>
          <p>A Semente da casa moderna</p>
        </LogoText>
      </div>
    </LogoContainer>
  )
}

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

