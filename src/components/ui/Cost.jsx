import CostItem from "./CostItem";
import "./Cost.css"
import Card from "../Card";
import CostsFilter from "./CostsFilter";

function Cost(props){

 const selectionYearHandler = (thisYear) =>{
    console.log(thisYear)
 }

 return(
    <div className="main">
    <CostsFilter onSelectionYear={selectionYearHandler}/>
    <Card className="cost">
    {props.costs.map(cost =>
      <CostItem date= {cost.date}
        product={cost.product}
        price={cost.price}></CostItem>
      )}
        </Card>
        </div>
 )
}
export default Cost