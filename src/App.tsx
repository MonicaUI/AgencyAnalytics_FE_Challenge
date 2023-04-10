import React from 'react';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import './App.css';

const MyApp = () => {
  return (
    <div>
      <header className="App-header">
        Photos
      </header>
      <RecentlyAdded />
    </div>
  );
}

export default MyApp;
