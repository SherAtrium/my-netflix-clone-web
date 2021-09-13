import React from 'react';
import { ReactCreateElement } from '../Components/ReactCreateElement';
import ReactComponent from '../Components/ReactComponent';
import ReactPureComponent from '../Components/ReactPureComponent';
import { FunctionalComponent } from '../Components/FunctionalComponent';

function App() {
  return (
    <>
      <h1>Hello React!</h1>

      <ReactCreateElement />

      <ReactComponent />

      <ReactPureComponent />

      <FunctionalComponent />
    </>
  );
}

export default App;
