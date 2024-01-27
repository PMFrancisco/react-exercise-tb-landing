import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Bootcamps from "./Bootcamps";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex-organiser" id="flex-organiser">
        <Header />
        <Bootcamps />
      </div>
    </div>
  );
}

export default App;
