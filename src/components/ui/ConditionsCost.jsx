import CostItem from "./CostItem";

const  ConditionsCost = (props) => {
   return (
    <div>
    {props.cost.length === 0 ? 
        (<h1>Расходов в этом году нет</h1>)
         : ( <ul>
            {props.cost.map((costs) => (
                <CostItem 
                  key={costs.id}
                  date= {costs.date}
                  product={costs.product}
                  price={costs.price}></CostItem>
                ))}
                </ul>
          )
    }
    </div> 
 )
}   

export default ConditionsCost

