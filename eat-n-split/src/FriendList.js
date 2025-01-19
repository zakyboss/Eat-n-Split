import './index.css';
import AFriend from './AFriend';

export default function FriendList({data}){
return (
    <div>
        <ul>
        {data.map(friend=>
        <AFriend data={friend}/>
      
      )}  
              </ul>

    </div>
)
}