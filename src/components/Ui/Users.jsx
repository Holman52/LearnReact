import UserItem from "./UserItem";

const Users = (props) =>{
    return(
      <ul>
        {props.user.map((Data) => (
            <UserItem 
                Name= {Data.Name}
                Age= {Data.Age}>
           
                </UserItem>
        ))}
        </ul>
    )
}

export default Users