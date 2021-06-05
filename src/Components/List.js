import React, { useState } from "react";
import { AddCardModal } from "./AddCardModal";
export const List = (props) => {
  const { taskCard, addCardHandler } = props;

  return (
    <div>
      <div></div>
      <h3>{taskCard.header}</h3>
      <ul>
        {taskCard.cards.map((card, ele) => (
          <li>{card}</li>
        ))}
      </ul>
      {taskCard.addingCard === true && <AddCardModal />}
      <button onClick={() => addCardHandler(taskCard.header)}>
        Add a Card
      </button>
    </div>
  );
};
