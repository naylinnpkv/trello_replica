import React, { useState } from "react";

import { AddCardModal } from "./AddCardModal";
//_____________________Components_________________//

import "./style/List.style.css";
//_________________STYLE__________________//

export const List = ({ header }) => {
  //all cards
  const [Cards, setCards] = useState([]);

  //new card
  const [newCard, setNewCard] = useState("");

  const [addingCard, setAddingCard] = useState(false);

  //_____________________States__________________//

  //__________________________Event Handlers________________//
  const newCardHandler = (e) => {
    setNewCard(e.target.value);
    e.preventDefault();
  };
  const addNewCard = () => {
    //preventing empty form submission
    if (newCard.length === 0) {
      alert("Adding an empty card is not so productive !");
      return;
    }
    setCards([...Cards, newCard]);
    setNewCard("");
    setAddingCard(false);
    return;
  };

  //__________________________Event Handlers_______________________//

  //_____________________DRAG AND DROP_____________________//

  let source;
  const dragStarted = (e) => {
    source = e.target;
    e.dataTransfer.setData("text/plain", e.target.innerHTML);
  };
  const draggingOver = (e) => {
    e.preventDefault();
  };

  const draggingLeave = (e) => {
    e.preventDefault();
  };

  const dropped = (e) => {
    e.preventDefault();
    e.stopPropagation();

    //switching the html value between elements from drag and drop
    source.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData("text/plain");
  };

  //____________________DRAG AND DROP_______________________//

  return (
    <div>
      <div></div>
      <h3>{header}</h3>
      <div>
        <ul>
          {Cards.map((card, index) => (
            <li
              key={index}
              draggable
              className="cards"
              onDragStart={dragStarted}
              onDragOver={draggingOver}
              onDragLeave={draggingLeave}
              onDrop={dropped}
            >
              {card}
            </li>
          ))}
        </ul>
      </div>
      {addingCard && (
        <AddCardModal
          newCard={newCard}
          newCardHandler={newCardHandler}
          addNewCard={addNewCard}
          header={header}
          addingCard={addingCard}
        />
      )}
      {!addingCard && (
        <button onClick={() => setAddingCard(!addingCard)}>Add a Card</button>
      )}
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
