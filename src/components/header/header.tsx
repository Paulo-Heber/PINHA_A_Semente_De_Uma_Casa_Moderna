import React, { useState, ChangeEvent } from 'react';
import { SrcInput } from '../srcInput/SrcInput';
import logo from '../../img/logo.png'

export const Header: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
    // lógica de pesquisa
  };

  return (
    <>
      <div>
        <img src="*" alt="logo" />
        <div>
          <h1>pinha</h1>
          <p>A Semente da casa moderna</p>
        </div>
      </div>
      <div>
        <SrcInput value={pesquisa} onChange={handlePesquisaChange} placeholder="Ex: Cama..." />
      </div>
    </>
  );
};