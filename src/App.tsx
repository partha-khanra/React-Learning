import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Registration from './component/Registration';
import NavBar from './component/Navbar';

import Li from './component/Li';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Registration />
      {/* <List /> */}
      <Li />
    </div>
  );
}

export default App;
