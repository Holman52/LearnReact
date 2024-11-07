import UserItem from "./UserItem";

const Users = (props) =>{
    return(
      <ul>
        {props.user.map((Data) => (
            <li>
                <UserItem 
                 Name= {Data.Name}
                 Age= {Data.Age}>
           
                </UserItem>
            </li>
        ))}
        </ul>
    )
}

export default Users