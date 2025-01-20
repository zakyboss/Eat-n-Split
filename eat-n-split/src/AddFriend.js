import './index.css'
export default function AddFriend({onClick,displayAddForm ,names}){
const {firstName,setFirstName,lastName,setLastName, addFriend}=names;
    return (
        <div className='addFriend'>
            {
                displayAddForm?  <form className='addFriendForm' onSubmit={addFriend}>
                <label> 📝 Add Friends Name</label>
                <br/>
                <input type='text' value={firstName} placeholder='first name' onChange={(e)=> setFirstName(e.target.value)}/>
                <input type='text' value={lastName} placeholder='last name' onChange={(e)=> setLastName(e.target.value) }/>
                      <br/>
                 <button className='addFriendBtn' onClick={addFriend} type='submit'>Add Friend</button>
                 <br/>
                 <button id='closeBtn'style={{backgroundColor:'red', padding:'9px',color:'wheat', borderRadius:'4px'}} onClick={onClick}>Close</button>
             </form> :<button className='addFriendBtn' onClick={onClick}>Add Friend</button>

            }
    
        </div>
    )
}