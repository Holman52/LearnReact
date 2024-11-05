import styles from './FormaBlock.module.css'
import Card from '../Ui/Card';
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
    console.log(data)
 }

    return (
        <Card className={styles.input}>
            <form onSubmit={SubmitHandler}>
                    <label>Имя</label>
                    <input type='text' placeholder='Введите имя'
                     onChange={NameChangeHandler}></input>
                    <label>Возраст</label>
                    <input type='number' placeholder='Введите возраст'
                     onChange={AgeChangeHandler}></input>
                <button type='submit'>Добавить пользователя</button>
            </form>
        </Card>
    )
}

export default FormaBlock