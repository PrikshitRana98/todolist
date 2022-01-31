import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Todolist from "./component/Todolist";

function App() 
{
	const [inputlist, setInputlist]=useState("");
	const [Items, setItems]=useState([]);

	const addtask =()=>{
		if(inputlist==""){
			alert("pLEASE ENTER TASK")
		}
		else{
		setItems((oitems)=>{
			return [...oitems,inputlist ]

		});
		}
		setInputlist('')

	}

	const itemEvents =(e)=>{
		setInputlist(e.target.value)

	}

  // const enterPress=(event,inputlist)=>{
  //   if(event.key === 'Enter'){
  //     console.log("opoppp")
  //     // itemEvents(inputlist.target.value);
  //   }
  // }

	const deleteitems=(id)=>{
		console.log('deleel' +id
		)
		setItems((oitems)=>{
			return oitems.filter((arritem, index) => {
				return index !==id;

			})
		})

	}


  function handleSubmit(e) {
    e.preventDefault();
    
  }


	return (
	<div id="main">
		<div className="bg-pink">
			<h1>To Do list</h1>	

      
      <form onSubmit={handleSubmit}>
      <input type='text' className="input1" placeholder="Add Task" onChange={itemEvents}  value={inputlist} />
			<button onClick={addtask} className="btn1">+</button>
      </form>
			<ol>
				
			{Items.map((val,index)=>{
				return <Todolist key={index} id={index} text={val} onSelect={deleteitems} />
				
				
			})}
			</ol>
		</div>

	</div>
	);
}


export default App;


