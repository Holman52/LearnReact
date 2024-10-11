import Cost from "./components/Cost";
import FormaBlock from "./components/FormaBlock";

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
        <FormaBlock  />
        <Cost costs={costs}></Cost>
    </div>
  );
}

export default App;
