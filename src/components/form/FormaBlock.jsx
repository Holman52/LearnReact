import Forma from "./Forma"
import './FormaBlock.css'

 function FormaBlock() {

  const  onSaveDataHandler =(InputCostData) =>{  // берёт значение с Forma 'costData'
    console.log(InputCostData)
  }

   return (
    <div className="New-cost">
        <Forma onSaveData ={onSaveDataHandler}></Forma>
    </div>
   )
 }
 export default FormaBlock