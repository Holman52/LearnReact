import FormaBlock from './components/Forma/FormaBlock';
import Users from './components/Ui/UserItem';
import React, {useState} from 'react';

import './App.css';

function App() {

  const InitialUser = [
    // {
    //   id:1,
    //   Name: 'Ivan',
    //   Age: 18,
    // }
  ]

  const [User, setUsers] = useState(InitialUser)
      
  const AddUserHandler = (data) =>{
    setUsers((prevUser) => {
      console.log(User)
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
