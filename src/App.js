import React, { Fragment } from 'react';
import Characters from './components/Characters/Characters';
import Sessions from './components/Sessions/Sessions';
import Cards from './components/UI/Cards';

function App() {
  return (
    <Fragment>
      <Cards>
        <Characters />
      </Cards>
      <Cards>
        <Sessions />
      </Cards>
    </Fragment>
  );
}

export default App;
