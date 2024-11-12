import Card from "./Card"
import Button from "./Button"
import styles from "./ErrorModal.module.css"

const ErrorModal = (props) => {  

    
 return (<div className={styles.backdrop} onClick={props.onCloseModal}>
    <Card className={styles.modal} >
        <header className={styles.header}>
            <h1>Ошибка</h1>
        </header>
        <div className={styles.content}>
            <p>Введите все данные</p>
        </div>
        <footer className={styles.footer}>
            <Button onClick={props.onCloseModal}>Закрыть</Button>
        </footer>
    </Card>
 </div>
 )
}

export default ErrorModal