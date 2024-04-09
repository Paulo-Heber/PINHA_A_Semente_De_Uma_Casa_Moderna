import React, { useState, ChangeEvent } from 'react';

import { SrcInput } from '../srcInput/SrcInput';

import logoImg from "../../img/logo.png";

import styled from 'styled-components';

import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
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
        <SrcInput value={pesquisa} onChange={handlePesquisaChange} placeholder='Ex: Casa' />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </Searce>
      <UserSpace>
        <FontAwesomeIcon icon={faShoppingCart} />
        <UserLog><FontAwesomeIcon icon={faUserCircle} /></UserLog>
      </UserSpace>
    </Head>
  );
};

const Head = styled.header`
background-color:#8B4513;
display:flex;
justify-content: space-between;
width: 100%;
padding:10px;
`
const Logo = styled.div`
display:flex;
color:#ffff;
align-items: center;
background-color:#151515;
border: 3px solid #8B4513;
border-radius:15px;
width: 340px;
height:105px;
padding:20px;
margin:10px;
box-shadow:0px 0px 0px 3px #151515;
`
const Badge = styled.img`
max-block-size: 50px;
margin-right:15px;
`
const Searce = styled.div`
display:flex;
align-items: center;
position: relative;
&> input {
  width:400px;
  height:40px;
  display:flex;
  border-radius:40px;
  padding:10px;
  border:none;
}
&> button {
  position:absolute;
  right:10px;
  border:none;
  background:transparent;
  
}

`
const UserSpace = styled.div`
display:flex;
align-items: center;
&>*{
  font-size: 40px ;
  color:#ffff;
  padding-right:30px;
  border:none;
  background:transparent;
}
`
const UserLog = styled.button`

&>*{
  
}
`