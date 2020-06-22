import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import "./styles.css";
const App = () => {
  //  input state
  const [inputItem, setInputItem] = useState("");
  //   array state
  const [arryItem, setArryItem] = useState([]);
  // taking input
  const inputChange = event => {
    setInputItem(event.target.value);
  };
  // storing in array and refresh th input field
  const listOfItem = () => {
    setArryItem(preValue => {
      return [...preValue, inputItem];
    });
    setInputItem("");
  };
  // delete item from an array
  const deleteItem = id => {
    setArryItem(preValue => {
      return preValue.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add item"
            onChange={inputChange}
            value={inputItem}
          />
          <Button onClick={listOfItem} className="but">
            <AddIcon />
          </Button>
          <ol>
            {arryItem.map((itm, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  itm={itm}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
