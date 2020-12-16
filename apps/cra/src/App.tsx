import React from 'react';
import logo from './logo.svg';
import {Comp as Comp1} from '@apidemo/smoketest'
import {Comp as Comp2} from '@apidemo/lib2'
import {Admin} from '@apidemo/admin'
import jsonServerProvider from 'ra-data-json-server'

// import jsonServerProvider from 'ra-data-json-server';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//       <Admin />
// <Comp /> 
//<Comp1 />
//      

function App() {
  return (
    <Admin dataProvider={dataProvider} />
  )
}

/*
function App() {
  return (
    <div className="App">      
      <header className="App-header">
        
        <Comp1 />
        <Comp2 />
        <Admin dataProvider={dataProvider} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
