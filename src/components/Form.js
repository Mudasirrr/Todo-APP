import React, { useState, useContext } from 'react';
import Store from '../Context';
function Form(){
    const {dispatch}=useContext(Store);

    let [todo,setTodo] = useState("");

    function handleTodoChange(event){
        console.log("event",event)
        setTodo(event.target.value);
    }

    function handleTodoAdd(){
        dispatch({type:'ADD_TODO',payload:todo});
        setTodo("");
    }

    function handleSubmitForm(event){
        // console.log("event",ev);
        if(event.keyCode===13) handleTodoAdd();
    }

    return (
        <div className="row">
          <div className="col-md-10">
            <br />
            <div className="input-group">
              <input
                className="form-control"
                value={todo}
                autoFocus={true}
                placeholder="Enter new todo"
                onKeyUp={handleSubmitForm}
                onChange={handleTodoChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleTodoAdd}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Form;