import './index.css';
import AFriend from './AFriend';

export default function FriendList({data , onSelectFriend ,onDelete}){
return (
    <div>
        <ul>
        {data.map(friend=>
        <AFriend data={friend} onSelectFriend={onSelectFriend} key={friend.id} onDelete={onDelete}/>
      
      )}  
              </ul>

    </div>
)
}