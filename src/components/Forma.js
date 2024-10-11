import './Forma.css'

function Forma() {
  return (
     <form>
        <div className="newCost_Dateils">
            <div className="NewCost_Data">
                <label>Название</label>
                <input type="text" />
            </div>
            <div className="NewCost_Data">
                <label>Цена</label>
                <input type="number" />
            </div>
            <div className="NewCost_Data">
                <label>Дата</label>
                <input type="date" />
            </div>
            <button className="Add">Добавить расходы</button>
        </div>
    </form>
  )
 }
 export default Forma