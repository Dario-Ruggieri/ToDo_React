import React, { useState } from "react";
import { nanoid } from "nanoid"; // tool che mi permette di aggiungere
//gli id ai task
import Todo from './components/Todo';
import Form from './components/Form';


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name){
    if(name){
      const newTask = {id: `todo-${nanoid()}`, name} //non va name:name ?
      setTasks([...tasks, newTask]);
    }
    
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  // In tasklist scandiamo ogni elemento dell'array tasks (passato dall'index.js) e su ogni elemento
  // task chiamiamo il compopnente todo a cui passiamo per ogni task nome, id e assegnamo una chiave
  //(richiesta da React) ad ogni task. Il map è un po' come fosse l'each che abbiamo visto in Svelte
  const taskList = tasks.map((task) => <Todo id={task.id} name={task.name} deleteTask={deleteTask} key={task.id}/>);
  return (
    <div className="App">
      <h1>ToDo List React</h1>
      <Form addTask={addTask}/>      
      <ul>
        {taskList}
        {/* <Todo name="Studiare Latino" id="todo-0"/>
        <Todo name="Studiare Matematica"id="todo-1"/>
        <Todo name="Creare una Todo in React" id="todo-2"/> */}
        {/* <li>Studiare Matematica</li> */}
      </ul>
    </div>
  );
}

export default App;
