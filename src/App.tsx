import React from 'react';
import './App.css';
import DropDown from './components/DropDown/DropDown';
import { OptionProps } from './types/types';

function App() {

const options: OptionProps[] = [
  {
    label: "Rename", 
    optionAction: () => {console.log("Custom action - Rename")}, 
    primary: true,
    toggle: true, 
  },   
  {
    label: "Delete", 
    optionAction: () => {console.log("Custom action - Delete")}, 
    toggle: true, 
  },   
  {
    label: "Share", 
    optionAction: () => {console.log("Custom action - Share")}, 
  },   
  {
    label: "...? ", 
    optionAction: () => {console.log("Custom action - ...")}, 
  }, 

]

  return (
    <div className="App">
      {/* <DropDown /> */}

      <DropDown options={options}/>
      {/* <DropDown left/> */}
    </div>
  );
}

export default App;
