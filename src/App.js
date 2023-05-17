import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId, setBuscaId] = useState("");
  const [buscaName, setBuscaName] = useState (""); //.

  const onChangeBuscaId = (event) => {
    setBuscaId(event.target.value);
  };

  const onChangeBuscaName = (event) => {
    setBuscaName(event.target.value);
  };

  return (
    <>
      <GlobalStyle />

      <Header buscaId={buscaId} onChangeBuscaId={onChangeBuscaId}
      buscaName={buscaName} onChangeBuscaName={onChangeBuscaName} 
      />

      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            if (buscaId && +pokemon.id === +buscaId) {//trasnforma a string em numerico
              return pokemon;
            } else if (!buscaId) {
              return pokemon;
            }
          })

          .filter((pokemon) => { //aqui criei filtro para buscar nome do pokemon
            if (buscaName && pokemon.name.english.toLocaleLowerCase().includes(buscaName.toLowerCase())) {
              return pokemon;
            } else if (!buscaName) {
              return pokemon;
            }
          })

          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
