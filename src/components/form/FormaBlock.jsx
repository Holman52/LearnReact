import Forma from "./Forma"
import './FormaBlock.css'
import { useState } from "react"

function FormaBlock(props) {
 const [ClickAddForm, setClickAddForm] = useState(false)
  const  onSaveDataHandler =(CostData) =>{  // берёт значение с Forma 'costData'
    props.onAddCost(CostData)
  }
const AddCostHandler = () =>{
  setClickAddForm(true)
}
const RemoveFormHandler = () =>{
  setClickAddForm(false)
}
   return (
    <div className="New-cost">
        {!ClickAddForm ? (<button onClick={AddCostHandler} className="Create-cost">Создать новый расход</button>) :
        (<Forma onSaveData ={onSaveDataHandler} onRemoveForm={RemoveFormHandler}></Forma>)}
    </div>
   )
 }
 export default FormaBlock