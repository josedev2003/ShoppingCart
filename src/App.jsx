import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";


function App() {
  return (
    <div>
      <Provider>
        <Header/>
        <Products/>
      </Provider>
    </div>
  );
}

export default App;
