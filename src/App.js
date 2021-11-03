import React,{useState} from 'react';
import './App.css';

import Inputs from './components/inputs/Inputs';
import Users from './components/Users/Users'
import Popup from './components/validation/Popup'

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (data) => {
    setUsers([data,...users])
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <Inputs addUser={addUser}/>
      </header>
      {(users.length < 1)?'':<Users users={users}/>}

    </div>
  );
}

export default App;
