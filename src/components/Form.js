import React, { useState } from "react";

function Form(props){
    // Ogni componente permette di tracciare alcuni dati del componente stesso
    // In questo caso si vuole tracciare l'input. Per il tracciamento, React
    // mette a disposizione il tool state. Lo state è caratterizzato da una 
    // serie di funzioni che vengono chimate hook
    const [name, setName] = useState('');
    //Qua abbiamo una variabile name, che ha come valore iniziale "Use hooks!"
    //e una funzione setName che permette di cambiare name. Io voglio gestire il
    //cambiamento dell'input. Per questo motivo vado ad assegnare all'input il valore
    //name, nel seguente modo value={name}
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name); //Utilizzo la funzione addTask che è stata
        //passata come parametro dal componente App
        setName(''); //Una volta preso il valore, svuoto l'input
      }
    function handleChange(e){
        // Ogni volta che scrivo qualcosa nell'input, quindi cambia qualcosa
        // viene chiamata questa funzione dove e rappresenta l'elemento che è cambiato
        // con e.target.value è quindi possibile avere il valore dell'elemento, ovvero
        // dell'input. Facendo setName(e.target.value) faccio si che il form contenga e visualizzi
        // ciò che sto inserendo. Ricordiamo, infatti, che setName gestisce il valore che viene
        // visualizzato dell'input
        setName(e.target.value);
    }
    return(
        <form>
            <h2>
                What needs to be done?
            </h2>
            <input type="text" placeholder="Add a new ToDo" value={name}
            onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Add</button> 
            {/* Nel momento in cui clicco il bottone ho un evento, che mi 
            andrà a cambiare un altro componente:App
            Non è però possibile passare dati da un child ad un parent (cosa che
            invece è possibile da parent a child), come in questo
            caso. Possiamo però scrivere una funzione nel componente App in modo tale
            che si aspetti dei dati da Form. Passiamo quindi questa funzione come prop
            a Form --> callback prop */}
        </form>
    )
}
export default Form;