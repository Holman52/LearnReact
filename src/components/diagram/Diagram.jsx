import DiagramBar from "./DiagramBar"
import  './Diagram.css'
const Diagram = (props) =>{
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