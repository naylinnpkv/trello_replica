import React, { useState, useEffect } from "react";
import { AddCardModal } from "./AddCardModal";
export const List = (props) => {
  const [newCards, setNewCards] = useState(["Home"]);
  const [newCard, setNewCard] = useState("");
  const [addingCard, setAddingCard] = useState(false);

  const newCardHandler = (e) => {
    setNewCard(e.target.value);
    e.preventDefault();
  };
  const addNewCard = () => {
    setNewCards([...newCards, newCard]);
    setNewCard("");
    setAddingCard(false);
  };

  const { header } = props;

  return (
    <div>
      <div></div>
      <h3>{header}</h3>
      <ul>
        {newCards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
      {addingCard === true && (
        <AddCardModal
          newCard={newCard}
          newCardHandler={newCardHandler}
          addNewCard={addNewCard}
          header={header}
        />
      )}
      <button onClick={() => setAddingCard(!addingCard)}>Add a Card</button>
    </div>
  );
};
