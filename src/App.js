import { Fragment } from 'react';
import Header from "./components/Header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/Body/ItemListContainer.js";

function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer greetings="Bienvenidos a Bardó"/>
    </Fragment>
    
    
  );
}

export default App;
