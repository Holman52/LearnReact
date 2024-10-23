import Cost from "./components/ui/Cost";
import FormaBlock from "./components/form/FormaBlock";
import React, { useState } from "react";

function App() {
  const INITIAL_COST = [
    {
      date: new Date(2024, 10, 1),
      product: 'Телефон',
      price: 700,
    },
    {
      date: new Date(2023, 11, 22),
      product: 'Ноут',
      price: 890,
    },
    {
      date: new Date(2022, 9, 14),
      product: 'ПК',
      price: 900,
    }
  ];

      const [Cost, setCost] = useState(INITIAL_COST)

      const AddCostHandler = (CostData) =>{
        setCost((prevCost) => {
          return [CostData, ...prevCost]
        })
      }

  return (
    <div>
        <FormaBlock onAddCost={AddCostHandler} />
        <Cost />
    </div>
  );
}

export default App;
