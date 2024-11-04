import FormaBlock from './components/Forma/FormaBlock';
import Users from './components/Ui/UserItem';
import React, {useState} from 'react';

import './App.css';

function App() {

  // const UserData = [
  //   {
  //     id: Math.random(),
  //     Name: '',
  //     Age: '',
  //   }
  // ]

  const [User, setUsers] = useState()
      
  const AddUserHandler = (data) =>{
    setUsers((prevUser) => {
      return [data, ...prevUser]
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
