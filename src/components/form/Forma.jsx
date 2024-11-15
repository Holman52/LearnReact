import { Fragment, useRef, useState } from 'react'
import './Forma.css'
import FormaBlock from './FormaBlock';

function Forma(props) {
  const productRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()

 const [RemoveForm, setRemoveForm] = useState(false);

 const SubmitHandler = (event) =>{
    event.preventDefault();
    const InputPriceName = priceRef.current.value
    const InputProductName = productRef.current.value
    const InputDateName =dateRef.current.value
    const costData = {
        product: InputProductName,
        price: InputPriceName,
        date: new Date(InputDateName)
    };
    props.onSaveData(costData); // передаёт значение в FormaBlock компонент
    priceRef.current.value = ''
    productRef.current.value = ''
    dateRef.current.value = ''
 }
const RemoveFormHandler = () =>{
   setRemoveForm(true)
}

  return (
     <Fragment>
            {!RemoveForm ? ( <form onSubmit={SubmitHandler}>
        <div className="NewCost_Dateils">
            <div className="NewCost_Data">
                <label>Название</label>
                <input type="text"  ref={productRef} />
            </div>
            <div className="NewCost_Data">
                <label>Цена</label>
                <input type="number"  ref={priceRef}/>
            </div>
            <div className="NewCost_Data">
                <label>Дата</label>
                <input type="date" ref={dateRef}/>
            </div>
            <button className="add" type='submit'>Добавить расходы</button>
               <button onClick={props.onRemoveForm}>Отмена</button>
               </div>
             </form>
               ) :
            (<FormaBlock />)}
        </Fragment>

  )
 }
 export default Forma