import React, { useState } from "react";
import "./style/ListBoard.style.css";
//_________________Style_________________//

import { List } from "./List";

//_________________COMPONENTS___________//

export const ListBoard = () => {
  //____________________STATES_________________________//
  const headers = ["To Do", " In Progress", "QA", "Done"];
  const Lists = [];

  for (let i = 0; i < headers.length; i++) {
    Lists.push(<List key={i} header={headers[i]} />);
  }

  return (
    <div>
      <div>{Lists}</div>
    </div>
  );
};
