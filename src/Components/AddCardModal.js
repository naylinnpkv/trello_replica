import React from "react";

export const AddCardModal = (props) => {
  const { newCard, newCardHandler, addNewCard } = props;
  return (
    <div>
      I am AddCardModal
      <div>
        <input
          type="text"
          value={newCard}
          placeholder="Add a new card..."
          onChange={newCardHandler}
        />
        <input type="submit" onClick={addNewCard} />
      </div>
    </div>
  );
};
