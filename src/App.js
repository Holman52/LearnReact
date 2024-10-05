import CostItem from "./components/CostItem";

function App() {
  const costs = [
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
  return (
    <div>
      <h1>Покупки</h1>
      <CostItem date={costs[0].date}
        product={costs[0].product}
        price={costs[0].price}></CostItem>
      <CostItem date={costs[1].date}
        product={costs[1].product}
        price={costs[1].price}></CostItem>
      <CostItem date={costs[2].date}
        product={costs[2].product}
        price={costs[2].price}></CostItem>
    </div>
  );
}

export default App;
