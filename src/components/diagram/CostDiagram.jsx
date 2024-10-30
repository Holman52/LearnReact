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
//  props.costs.filter((item) => item.date == index + 1).reduce((summ, {price}) => {return summ + price}, 0)
// const mapped = dataSets.map((month, index) => {    
//    const tempSumm = props.costs.filter((item) => item.date.getMonth() == index + 1).reduce((summ, {price}) => { return summ + price }, 0);
//    month.value = tempSumm;
//    return month;
// })

// console.log(props.costs)



// const priceMonth = props.costs.map(price =>
//   { const Month = costs.date.getMonth()
//    CostDiagram(Month).value += costs.price
// })
 for(const cost of props.costs){
   const label = cost.date.getMonth();
   dataSets[label].value += cost.price
 }
console.log(dataSets)

    return <Diagram dataSets={dataSets} />

}

export default CostDiagram 