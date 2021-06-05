import React, { useState } from "react";
import "./style/ListBoard.style.css";
//_________________Style_________________//

import { List } from "./List";
//_________________COMPONENTS___________//

export const ListBoard = () => {
  const [taskCards, setTaskCards] = useState([
    {
      header: "To Do",
      cards: ["HomeWOrk"],
      addingCard: false,
    },
    {
      header: " In Progress",
      cards: [],
      addingCard: false,
    },
    {
      header: "QA",
      cards: [],
      addingCard: false,
    },
    {
      header: "Done",
      cards: [],
      addingCard: false,
    },
  ]);

  //____________________STATES_________________________//
  const addCardHandler = (header) => {
    const newTaskCards = [...taskCards];
    for (let taskCard of newTaskCards) {
      if (taskCard.header === header) {
        taskCard.addingCard
          ? (taskCard.addingCard = false)
          : (taskCard.addingCard = true);
        setTaskCards(newTaskCards);
        return;
      }
    }
  };
  const Lists = [];

  for (let i = 0; i < 4; i++) {
    Lists.push(
      <List taskCard={taskCards[i]} addCardHandler={addCardHandler} />
    );
  }

  return (
    <div>
      <div>{Lists}</div>
    </div>
  );
};
