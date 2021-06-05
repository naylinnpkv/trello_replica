import React from "react";
import "./style/ListBoard.style.css";
//_________________Style_________________//

import { List } from "./List";

//_________________COMPONENTS___________//

export const ListBoard = () => {
  //headers will be constant for this assignment
  const headers = ["To Do", " In Progress", "QA", "Done"];

  return (
    <div>
      <div className="list_boards">
        {headers.map((header, index) => (
          <List header={header} key={index} />
        ))}
      </div>
    </div>
  );
};
