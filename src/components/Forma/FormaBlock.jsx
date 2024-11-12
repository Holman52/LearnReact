import styles from './FormaBlock.module.css'
import Card from '../Ui/Card';
import React, {useState} from 'react';
import Button from '../Ui/Button';
import ErrorModal from '../Ui/ErrorModal';
const FormaBlock = (props) => {

 const [InputName, setInputName] = useState('');
 const [InputAge, setInputAge] = useState('');
 const [Error, setError] = useState(false)

 const NameChangeHandler = (event)=>{
   setInputName(event.target.value)
   }
 const AgeChangeHandler = (event) =>{
   setInputAge(event.target.value)
   }
 const SubmitHandler = (event)=>{
  event.preventDefault()
    if(InputName.trim().length === 0){
      setError(true)
       return;
    }
    if(InputAge < 1 || InputAge.trim().length === 0){
      setError(true)
       return;
      }
      const data = {
          age: InputAge,
          name: InputName
       }
      props.onSaveData(data)
     setInputAge('')
     setInputName('')
   }
  const CloseModalHandler = () =>{
    setError(false)
  }
   
 return (
    <div>
    {Error && <ErrorModal onCloseModal={CloseModalHandler}/>} 
      <Card className={styles.input}>
            <form onSubmit={SubmitHandler}>
                    <label>Имя</label>
                    <input type='text' placeholder='Введите имя'
                     onChange={NameChangeHandler} value={InputName}></input>
                    <label>Возраст</label>
                    <input type='number' placeholder='Введите возраст'
                     onChange={AgeChangeHandler}  value={InputAge}></input>
                <Button type='submit'>Добавить пользователя</Button>
            </form>
        </Card>
      </div>
    )
}

export default FormaBlock