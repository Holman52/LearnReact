import DiagramBar from "./DiagramBar"

import  './Diagram.css'
const Diagram = (props) =>{

 const valueMonth = props.dataSets.map(date =>
    date.value 
 )
 const maxValue = Math.max(valueMonth)

    return <div className="diagram"> 
        {props.dataSets.map(dataSet =>
        <DiagramBar value={dataSet.vale}
             key={dataSet.label}
             maxValue={null}
             label={dataSet.label}/>
        )}
    </div>

}

export default Diagram