import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';
import { Button } from '../button/buttton';

import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Head, Searce, UserSpace } from './header-style';
import { Logo } from '../Logo/logo';

export const Header: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
    // lógica de pesquisa
  };

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
        <Button to="/shopping_cart" label={<FontAwesomeIcon icon={faShoppingCart} />} />
        <Button to="/registration_page" label={<FontAwesomeIcon icon={faUserCircle} />} />
      </UserSpace>

    </Head>
  );
};

