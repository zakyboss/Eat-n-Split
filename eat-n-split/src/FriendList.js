import './index.css';
import AFriend from './AFriend';

export default function FriendList({data , onSelectFriend}){
return (
    <div>
        <ul>
        {data.map(friend=>
        <AFriend data={friend} onSelectFriend={onSelectFriend}/>
      
      )}  
              </ul>

    </div>
)
}