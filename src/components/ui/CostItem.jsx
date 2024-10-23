import "./CostItem.css"
import CostDate from "./CostDate"
import Card from "../Card"
import React,{ useState } from "react"

function CostItem(props) {
    // const [props.product, setProduct] = useState(props.product)
    // const newProductHandler =() => {
    //     setProduct("new")
    // }
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