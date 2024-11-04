import UserItem from "./UserItem";

const Users = (props) =>{
    return(
      <ul>
        {props.user.map((Data) => (
            <UserItem  
                // key = {Data.id}
                Name= {Data.Name}
                Age= {Data.Age}>
           
                </UserItem>
        ))}
        </ul>
    )
}

export default Users