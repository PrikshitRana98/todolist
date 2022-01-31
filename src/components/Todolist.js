import React from 'react';
// import {deleteitems} from './App'

const Todolist = (props) => {
  return <div>
      <div className="task">
            <li>{props.text}</li>
            <button onClick={()=>
            props.onSelect(props.id)}>Delete</button>
        </div>
  </div>;
};

export default Todolist;

