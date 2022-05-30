import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = () => {
    const [cards, setCards] = useState([]);
  const addCard = async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/"
    );
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  const [cardsPoke, setCardsPoke] = useState([]);
  const addCardPoke = async (name) => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setCardsPoke(cardsPoke => [...cardsPoke, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard, cardsPoke, addCardPoke];
}

export default useAxios;