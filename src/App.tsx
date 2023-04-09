import React from 'react';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import MockDetails from './RecentlyAdded/MockDetails'
import logo from './logo.svg';
import './App.css';

const MyApp = () => {
  return (
    <div>
      <header className="App-header">
        Photos
      </header>
      <RecentlyAdded />
      {/* <MockDetails user={[]} /> */}
    </div>
  );
}

export default MyApp;
