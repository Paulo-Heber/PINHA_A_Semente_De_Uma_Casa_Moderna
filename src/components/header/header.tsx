import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';
import { Button } from '../button/buttton';

import logoImg from "../../img/logo.png";

import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Badge, Head, Logo, LogoText, Searce, UserSpace } from './header-style';

export const Header: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
    // lógica de pesquisa
  };

  return (
    <Head>
      <Button to="/"
        label={
          <Logo>
            <Badge src={logoImg} alt="logo" />
            <LogoText>
              <h1>pinha</h1>
              <p>A Semente da casa moderna</p>
            </LogoText>
          </Logo>
        }
      />

      <Searce>
        <SrcInput value={pesquisa} onChange={handlePesquisaChange} placeholder='Ex: Casa' />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </Searce>

      <UserSpace>
        <Button to="/shopping_cart" label={<FontAwesomeIcon icon={faShoppingCart} />} />
        <Button to="/registration_page" label={<FontAwesomeIcon icon={faUserCircle} />} />
      </UserSpace>

    </Head>
  );
};

