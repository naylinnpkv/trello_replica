import React from "react";

export const AddCardModal = (props) => {
  const { newCard, newCardHandler, addNewCard } = props;
  return (
    <div>
      <div>
        <input
          type="text"
          value={newCard}
          placeholder="Add a new card..."
          onChange={newCardHandler}
        />
        <input type="submit" onClick={addNewCard} value="Add a card" />
      </div>
    </div>
  );
};
