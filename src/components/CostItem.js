import "./CostItem.css"
import CostDate from "./CostDate"

function CostItem(props) {
    return (
        <div className='cost-item'>
         <CostDate date={props.date}></CostDate>
            <div className='cost-item__description'>
                <div className='description__product'>{props.product}</div>
                <div className='description__price'>${props.price}</div>
            </div>
        </div>
    )
}

export default CostItem