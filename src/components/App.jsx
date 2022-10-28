import React from "react";
import Login from "./Login"
import Register from "./Register";

let isloggedin=false;

function App() {
  return (
    <div className="container">
      {isloggedin? <Login /> : <Register />}
    </div>
  );
}

export default App;
