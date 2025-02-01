import React, { useState, ChangeEvent, useEffect } from 'react';

import { SrcInput } from '../srcInput/SrcInput';
import { Button } from '../button/buttton';

import { faEllipsisV, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../img/logo.png'
import { CartIcon, Head, Searce, UserSpace } from '../../styles/header-style';
import { useCartContext } from '../../hooks/useCartContext';
import { Badge, LogoContainer, LogoText } from '../../styles/logo_style';

export function Logo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 820);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LogoContainer>
      <div>
        <Badge src={logo} alt="logo" />
        {!isMobile && (
          <LogoText>
            <h1>pinha</h1>
            <p>A Semente da casa moderna</p>
          </LogoText>
        )}

      </div>
    </LogoContainer>
  )
}


export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => document.documentElement.clientWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(document.documentElement.clientWidth <= 480);
    
    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
        <FontAwesomeIcon icon={faSearch} />
      </Searce>

      <UserSpace>
        {isMobile ? <FontAwesomeIcon icon={faEllipsisV} /> : <>
          <Button
            to="/shopping_cart"
            label={
              <CartIcon $sumitems={sumCartItems()}>
                {sumCartItems() > 0 ? <div>{sumCartItems()}</div> : <div></div>}
                <FontAwesomeIcon icon={faShoppingCart} />
              </CartIcon>
            } />
          <Button to="/registration_page" label={<FontAwesomeIcon icon={faUserCircle} />} />
        </>}

      </UserSpace>

    </Head>
  );
};

