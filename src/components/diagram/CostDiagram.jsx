import Diagram from "./Diagram";

const CostDiagram = (props) => {
 const dataSets = [
    {label: 'Jan', value: 0},
    {label: 'Fed', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
 ]

 for(const cost of props.costs){
   const label = cost.date.getMonth();
   dataSets[label].value += cost.price
 }

    return <Diagram dataSets={dataSets} />

}

export default CostDiagram 