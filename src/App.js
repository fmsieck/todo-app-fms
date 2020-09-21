import React from "react";
import "./App.css";
import avatarImg1 from "./images/star-trek-chekov-one.png";
import starTrekLogo from "./images/startreklogo.png";

function App() {
  return (
    <>
      <img src={avatarImg1} alt="checkov"></img>
      <hr />
      <h1>Chekov List</h1>
      <ul>
        <li>
          <input type="checkbox" class="checkboxItem" />
          <p>Run Ship Diagnostics</p>
        </li>
        <li>
          <input type="checkbox" class="checkboxItem" />
          <p>Engage Warp Drive</p>
        </li>
        <li>
          <input type="checkbox" class="checkboxItem" />
          <p>Disengage Warp Drive</p>
        </li>
      </ul>
      <input
        type="checkbox />To Do Item #1"
        placeholder="new todo item"
        label="todo item"
      />
      <button>Add New Item</button>
      <hr />
      <img src={starTrekLogo} alt="Star Trek Logo"></img>
    </>
  );
}

export default App;
