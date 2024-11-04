import './FormaBlock.css'
import React, {useState} from 'react';

const FormaBlock = (props) => {
    
    
 const [InputName, setInputName] = useState('');
 const [InputAge, setInputAge] = useState('');
 

 const NameChangeHandler = (event)=>{
    setInputName(event.target.value)
 };
 
 const AgeChangeHandler = (event) =>{
    setInputAge(event.target.value)
 };
  
 const SubmitHandler = (event)=>{
    event.preventDefault()
    
    const data = {
        Age: InputAge,
        Name: InputName
     }
    props.onSaveData(data)
 }

 
    return (
        <div className='Forma-User'>
            <form onSubmit={SubmitHandler}>
                <div className='User-Name'>
                    <label>Имя</label>
                    <input type='text' placeholder='Введите имя'
                     onChange={NameChangeHandler}></input>
                </div>
                <div className='User-age'>
                    <label>Возраст</label>
                    <input type='number' placeholder='Введите возраст'
                     onChange={AgeChangeHandler}></input>
                </div>
                <button type='submit'>Добавить пользователя</button>
            </form>
        </div>
    )
}

export default FormaBlock