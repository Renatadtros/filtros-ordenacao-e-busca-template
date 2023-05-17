import React from "react";
import { Container } from "./styles";

const Header = ({ buscaId, buscaName, onChangeBuscaId, onChangeBuscaName }) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy"
  ];

  return (
    <Container>
      <input
        type="number"
        value={buscaId}
        placeholder="Buscar por id"
        onChange={onChangeBuscaId}
      />
      <input 
      type="text" 
      value={buscaName}
      placeholder="Buscar por nome"
      onChange={onChangeBuscaName} 
      />

      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>

      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
