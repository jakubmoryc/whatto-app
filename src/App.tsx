import React from 'react';

import './css/App.css';

import Info from './components/Info/Info';
import SearchBar from './components/SearchBar/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="darken-bg-img">
      <Info/>
        <div className="App-wrapper">
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
