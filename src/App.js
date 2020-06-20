import React from 'react';

import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="ui gridcontainer App">
      <h1><i className="github icon"></i>GitHub Search App <i className="github icon"></i></h1>
      <Profile />
    </div>
  );
}

export default App;
