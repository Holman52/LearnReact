import './Forma.css'

function Forma() {
  return (
     <form>
        <div className="NewCost_Dateils">
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
            <button className="add">Добавить расходы</button>
            <button>Отмена</button>
        </div>
    </form>
  )
 }
 export default Forma