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
  const [buscaType, setBuscaType] = useState("");
  const [orderFilter, setOrderFilter] = useState("");

  const onChangeBuscaId = (event) => {
    setBuscaId(event.target.value);
  };

  const onChangeBuscaName = (event) => {
    setBuscaName(event.target.value);
  };

  const onChangeBuscaType = (event) => {
    setBuscaType(event.target.value);
  };

  const onChangeOrderFilter = (event) => {
    setOrderFilter(event.target.value);
  };

  return (
    <>
      <GlobalStyle />

      <Header buscaId={buscaId} onChangeBuscaId={onChangeBuscaId}
      buscaName={buscaName} onChangeBuscaName={onChangeBuscaName}
      buscaType={buscaType} onChangeBuscaType={onChangeBuscaType} 
      orderFilter={orderFilter} onChangeOrderFilter={onChangeOrderFilter}
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

          .filter((pokemon) => {
            if (buscaType && pokemon.type.includes(buscaType)) {//trasnforma a string em numerico
              return pokemon;
            } else if (!buscaType) {
              return pokemon;
            }
          })

          .sort((a, b) => {
            console.log(orderFilter);
            if (orderFilter === "c") {
              return a.name.english >= b.name.english ? 1 : -1;
            } else if (orderFilter === "d") {
              return a.name.english <= b.name.english ? 1 : -1;
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
