import ConditionsCost from "./ConditionsCost";
import "./Cost.css"
import Card from "../Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostDiagram from "../diagram/costDiagram";

function Cost(props){
const [SelectionYear, setSelectionYear] = useState('2021')

const ChangeYear = (year) =>{
  setSelectionYear(year)
};
// const Month = props.costs.filter(cost =>{
//   return cost.date.Month
// })
const FilterYear = props.costs.filter(cost =>{
  return cost.date.getFullYear().toString() === SelectionYear
});
const costs = props.costs
 return(
    <div className="main">
      <CostsFilter year={SelectionYear}
      onSelectionYear={ChangeYear}/>
      <Card className="cost">
        <CostDiagram  costs={costs}/>
        <ConditionsCost cost={FilterYear}/>
      </Card>
    </div>
 )
}
export default Cost