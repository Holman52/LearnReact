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
    <CostItem date={props.costs[0].date}
        product={props.costs[0].product}
        price={props.costs[0].price}></CostItem>
      <CostItem date={props.costs[1].date}
        product={props.costs[1].product}
        price={props.costs[1].price}></CostItem>
      <CostItem date={props.costs[2].date}
        product={props.costs[2].product}
        price={props.costs[2].price}></CostItem>
        </Card>
        </div>
 )
}
export default Cost