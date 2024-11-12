import Card from "./Card"
import Button from "./Button"
import styles from "./ErrorModal.module.css"

const ErrorModal = () => {  
 return (<div className={styles.backdrop}>
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h1>Ошибка</h1>
        </header>
        <div className={styles.content}>
            <p>Введите все данные</p>
        </div>
        <footer className={styles.footer}>
            <Button>Закрыть</Button>
        </footer>
    </Card>
 </div>
 )
}

export default ErrorModal