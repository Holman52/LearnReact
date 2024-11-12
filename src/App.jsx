import FormaBlock from './components/Forma/FormaBlock';
import Users from './components/Ui/Users';
import React, {useState} from 'react';

import './App.css';

function App() {
 

  const [User, setUsers] = useState([])
      
  const AddUserHandler = (data) =>{
    setUsers((prevUser) => {
      return [ ...prevUser,  data]
    })
  }

  return (
    <div className='content'>
      <FormaBlock onSaveData={AddUserHandler}/>
      <Users user={User} />
    </div>
  );
}

export default App;
