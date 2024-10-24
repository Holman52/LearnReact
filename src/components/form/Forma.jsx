import { useState } from 'react'
import './Forma.css'

function Forma(props) {

 const [InputProduct, setInputProduct] = useState('');
 const [InputPrice, setInputPrice] = useState('');
 const [InputDate, setInputDate] = useState('');

 const productChangeHandler = (event)=>{
    setInputProduct(event.target.value)
 };
 
 const priceChangeHandler = (event) =>{
    setInputPrice(event.target.value)
 };
 
 const dateChangeHandler = (event)=>{
    setInputDate(event.target.value)
 };

 const SubmitHandler = (event) =>{
    event.preventDefault();

    const costData = {
        product: InputProduct,
        price: InputPrice,
        date: new Date(InputDate)
    };
    props.onSaveData(costData); // передаёт значение в FormaBlock компонент
    setInputProduct('');
    setInputPrice('');
    setInputDate('');
 }
  return (
     <form onSubmit={SubmitHandler}>
        <div className="NewCost_Dateils">
            <div className="NewCost_Data">
                <label>Название</label>
                <input type="text" value={InputProduct}
                 onChange={productChangeHandler} />
            </div>
            <div className="NewCost_Data">
                <label>Цена</label>
                <input type="number" value={InputPrice}
                onChange={priceChangeHandler}/>
            </div>
            <div className="NewCost_Data">
                <label>Дата</label>
                <input type="date" value={InputDate}
                 onChange={dateChangeHandler} />
            </div>
            <button className="add" type='submit'>Добавить расходы</button>
            <button>Отмена</button>
        </div>
    </form>
  )
 }
 export default Forma