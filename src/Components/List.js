import React, { useState } from "react";

import { AddCardModal } from "./AddCardModal";
//_____________________Components_________________//

import "./style/List.style.css";
//_________________STYLE__________________//

export const List = (props) => {
  const [newCards, setNewCards] = useState([]);
  const [newCard, setNewCard] = useState("");
  const [addingCard, setAddingCard] = useState(false);
  // const [data, setData] = useState("");

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

  //_____________________DRAG AND DROP_____________________//

  let source;
  const dragStarted = (e) => {
    source = e.target;
    e.dataTransfer.setData("text/plain", e.target.innerHTML);
    // e.dataTransfer.effectAllowed = "move";
  };
  const draggingOver = (e) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";
  };

  const draggingLeave = (e) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";
  };

  const dropped = (e) => {
    e.preventDefault();
    e.stopPropagation();
    source.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData("text/plain");
    const arr = [...newCards];
    arr[returnIndex(arr, source.id)] = e.target.id;
    arr[returnIndex(arr, e.target.id)] = source.id;

    setNewCards(arr);
  };
  const returnIndex = (cards, value) => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i] === value) {
        return i;
      }
    }
  };
  //____________________DRAG AND DROP_______________________//

  return (
    <div>
      <div></div>
      <h3>{header}</h3>
      <ul>
        {newCards.map((card, index) => (
          <div>
            <li
              key={index}
              draggable
              className="cards"
              onDragStart={dragStarted}
              onDragOver={draggingOver}
              onDragLeave={draggingLeave}
              onDrop={dropped}
              id={card}
            >
              {card}
            </li>
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
