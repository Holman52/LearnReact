import Forma from "./Forma"
import './FormaBlock.css'

 function FormaBlock() {

  const  onSaveDataHandler =(InputCostData) =>{  // берёт значение с Forma 'costData'
    props.onAddCost(InputCostData)
  }

   return (
    <div className="New-cost">
        <Forma onSaveData ={onSaveDataHandler}></Forma>
    </div>
   )
 }
 export default FormaBlock