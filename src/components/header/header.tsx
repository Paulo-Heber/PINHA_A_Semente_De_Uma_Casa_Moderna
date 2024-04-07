import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';

import logoImg from "../../img/logo.png";

import styled from 'styled-components';

import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
    // lógica de pesquisa
  };

  return (

    <Head>
      <Logo>
        <Badge src={logoImg} alt="logo" />
        <div>
          <h1>pinha</h1>
          <p>A Semente da casa moderna</p>
        </div>
      </Logo>
      <Searce>
        <SrcInput value={pesquisa} onChange={handlePesquisaChange} placeholder="Ex: Cama..." />
      </Searce>
      <UserSpace>
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faUserCircle} />


      </UserSpace>
    </Head>

  );
};

const Head = styled.header`
background-color:#8B4513;
justify-content: space-between;
display:flex;
width: 100%;
padding:10px;
`
const Badge = styled.img`

background-color:#fff000;
max-block-size: 50px;

`
const Logo = styled.div`
display:flex;
color:#ffff;
align-items: center;
background-color:#151515;
border: 1px;
border-radius:10px;
padding:10px;
margin:10px;
`
const Searce = styled.div`
display:flex;
align-items: center;

`
const UserSpace = styled.div`
display:flex;
align-items: center;

`