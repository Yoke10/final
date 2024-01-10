import React from 'react'
import PropTypes from 'prop-types';

const DisplayData = (props) => {
    return (
        <div>
            <h2>Static Data:</h2>
            <p>{props.staticData}</p>
            <h2>Dynamic Data:</h2>
            <p>{props.dynamicData}</p>
        </div>
    )
}
DisplayData.propTypes = {
    staticData: PropTypes.string.isRequired,
    dynamicData: PropTypes.node.isRequired
}
export default DisplayData;

//App.js

import React from 'react';
import './assets/css/App.css';
import DisplayData from './components/DisplayData';

function App() {
  const dynamicData = new Date().toLocaleString();
  return (
    <div className="App">
      <h1>Props Demo</h1>
      <DisplayData staticData="Hello, I am static data!" dynamicData={dynamicData} />
    </div>
  );
}
export default App;
