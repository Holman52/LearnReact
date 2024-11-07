import styles from './Users.module.css'
import Card from './Card'

const Users = (props) =>{
    return(
    <Card className={styles.user}>
      <ul>
        {props.user.map((data) => (
            <li>
                {data.name} - {data.age} years
            </li>
        ))}
        </ul>
    </Card>
    )
}

export default Users