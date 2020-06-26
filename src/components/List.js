import React, { useContext } from "react";
import Store from "../Context";
import Header  from "./Header";


 function List() {
  const { state, dispatch } = useContext(Store);


  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map(t => (
                <li key={t} className="list-group-item">
                  {t}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: t })}
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List;