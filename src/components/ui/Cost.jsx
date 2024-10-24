import CostItem from "./CostItem";
import "./Cost.css"
import Card from "../Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

function Cost(props){
const [SelectionYear, setSelectionYear] = useState('2021')

const ChangeYear = (year) =>{
  setSelectionYear(year)
};
const FilterYear = props.costs.filter(cost =>{
  return cost.date.getFullYear().toString() === SelectionYear
});

 return(
    <div className="main">
    <CostsFilter year={SelectionYear}
      onSelectionYear={ChangeYear}
    />
    <Card className="cost">
    {FilterYear.map(costs =>
      <CostItem 
        key={costs.id}
        date= {costs.date}
        product={costs.product}
        price={costs.price}></CostItem>
      )}
        </Card>
        </div>
 )
}
export default Cost