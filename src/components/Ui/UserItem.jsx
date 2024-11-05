

const UserItem = (props) => {


    return (
        <div className='UserItem'>
             <div className='UserItem__img' >
             {/* <img src={} />; */}
             </div>
             <div className='UserItem__Data'>
                 <div className='Data-name'>{props.Name}</div>
                 <div className='Data-age'>{props.Age}</div>
             </div>
        </div>
    );
}

export default UserItem