import styles from './FormaBlock.module.css'
import Card from '../Ui/Card';
import React, {useState} from 'react';
import Button from '../Ui/Button';

const FormaBlock = (props) => {
    
    
 const [InputName, setInputName] = useState('');
 const [InputAge, setInputAge] = useState('');
 

 const NameChangeHandler = (event)=>{
    setInputName(event.target.value)
 };
 
 const AgeChangeHandler = (event) =>{
    setInputAge(event.target.value)
 };
//  if(InputAge === 0 || InputName === 0){
//    return;
//  }
//  if(InputAge < 1){
//    return;
//  }
  
 const SubmitHandler = (event)=>{
    event.preventDefault()
    
    const data = {
        Age: InputAge,
        Name: InputName
     }
    props.onSaveData(data)
    console.log(data)
    setInputAge('')
    setInputName('')
 }

    return (
        <Card className={`${styles.input} ${styles.formaBlock}`}>
            <form onSubmit={SubmitHandler}>
                    <label>Имя</label>
                    <input type='text' placeholder='Введите имя'
                     onChange={NameChangeHandler} value={InputName} required></input>
                    <label>Возраст</label>
                    <input type='number' placeholder='Введите возраст'
                     onChange={AgeChangeHandler}  value={InputAge}  required></input>
                <Button type='submit'>Добавить пользователя</Button>
            </form>
        </Card>
    )
}

export default FormaBlock