import React from 'react';

import './css/App.css';

import Info from './components/Info/Info';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="darken-bg-img">
        <Info/>
      </div>
    </div>
  );
}

export default App;
