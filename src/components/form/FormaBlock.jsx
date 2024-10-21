import Forma from "./Forma"
import './FormaBlock.css'

 function FormaBlock() {

  const  onSaveDataHandler =(props, CostData) =>{  // берёт значение с Forma 'costData'
    props.onAddCost(CostData)
  }

   return (
    <div className="New-cost">
        <Forma onSaveData ={onSaveDataHandler}></Forma>
    </div>
   )
 }
 export default FormaBlock