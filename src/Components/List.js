import React, { useState } from "react";

import { AddCardModal } from "./AddCardModal";
//_____________________Components_________________//

import "./style/List.style.css";
//_________________STYLE__________________//

export const List = (props) => {
  const [newCards, setNewCards] = useState([]);
  const [newCard, setNewCard] = useState("");
  const [addingCard, setAddingCard] = useState(false);

  //_____________________States__________________//

  const newCardHandler = (e) => {
    setNewCard(e.target.value);
    console.log(typeof newCard);
    e.preventDefault();
  };
  const addNewCard = () => {
    if (newCard.length === 0) {
      alert("Adding an empty card is not so productive !");
      return;
    }
    setNewCards([...newCards, newCard]);
    setNewCard("");
    setAddingCard(false);
    return;
  };

  const { header } = props;

  return (
    <div>
      <div></div>
      <h3>{header}</h3>
      <ul>
        {newCards.map((card, index) => (
          <div draggable>
            <li key={index}>{card}</li>
          </div>
        ))}
      </ul>
      {addingCard && (
        <AddCardModal
          newCard={newCard}
          newCardHandler={newCardHandler}
          addNewCard={addNewCard}
          header={header}
        />
      )}
      <button onClick={() => setAddingCard(!addingCard)}>Add a Card</button>
      {addingCard && (
        <button
          onClick={() => {
            setAddingCard(!addingCard);
            setNewCard("");
          }}
        >
          X
        </button>
      )}
    </div>
  );
};
