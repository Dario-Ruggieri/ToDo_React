import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat" },
  { id: "todo-1", name: "Sleep" },
  { id: "todo-2", name: "Repeat"}
]; //Array di dati che contiene le todo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* In questo modo passiamo l'array di dati al componente task */}
    <App  tasks ={DATA}/> 
  </React.StrictMode>
);
