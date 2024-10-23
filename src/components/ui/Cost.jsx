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
    {props.costs.map(costs =>
      <CostItem date= {costs.date}
        product={costs.product}
        price={costs.price}></CostItem>
      )}
        </Card>
        </div>
 )
}
export default Cost