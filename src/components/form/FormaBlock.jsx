import Forma from "./Forma"
import './FormaBlock.css'

function FormaBlock(props) {

  const  onSaveDataHandler =(CostData) =>{  // берёт значение с Forma 'costData'
    props.onAddCost(CostData)
  }

   return (
    <div className="New-cost">
        <Forma onSaveData ={onSaveDataHandler}></Forma>
    </div>
   )
 }
 export default FormaBlock