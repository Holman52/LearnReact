import Cost from "./components/ui/Cost";
import FormaBlock from "./components/form/FormaBlock";
import React, { useState, Fragment } from "react";


function App() {
  const INITIAL_COST = [
    {
      id: '1',
      product: 'Телефон',
      date: new Date(2024, 10, 1),
      price: 700,
    },
    {
      id: '2',
      product: 'Ноут',
      date: new Date(2023, 11, 22),
      price: 890,
    },
    {
      id: '3',
      product: 'ПК',
      date: new Date(2024, 9, 14),
      price: 900,
    }
  ];

      const [Costs, setCosts] = useState(INITIAL_COST)
      
      const AddCostHandler = (CostData) =>{
        setCosts((prevCost) => {
          // console.log(Costs)
          return [CostData, ...prevCost]
        })
      }

  return (
    <Fragment>
        <FormaBlock onAddCost={AddCostHandler} />
        <Cost costs={Costs}></Cost>
    </Fragment>
  );
}

export default App;
