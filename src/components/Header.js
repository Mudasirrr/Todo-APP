import React from "react";

 const Header = (props) => (
  <div className="row">
    <div className="col-md-8">
      <h5>Todo List</h5>
    </div>
    <div className="col-md-4">
      {props.child}
    </div>
  </div>
);
export default Header;