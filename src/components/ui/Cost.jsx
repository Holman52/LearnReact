import CostItem from "./CostItem";
import "./Cost.css"
import Card from "../Card";
function Cost(props){

 return(
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
 )
}
export default Cost