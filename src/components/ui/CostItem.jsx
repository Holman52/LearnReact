import "./CostItem.css"
import CostDate from "./CostDate"
import Card from "../Card"

function CostItem(props) {


    return (
        <Card className='cost-item'>
         <CostDate date={props.date}></CostDate>
            <div className='cost-item__description'>
                <div className='description__product'>{props.product}</div>
                <div className='description__price'>${props.price}</div>
                {/* <button>Изменить продукт</button> */}
            </div>
        </Card>
    )
}

export default CostItem