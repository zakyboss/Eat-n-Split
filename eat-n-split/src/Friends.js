import './index.css';
import FriendList from './FriendList';
import DeleteFriend from './DeleteFriend';
import AddFriend from './AddFriend';
export default function Friends({data}){
    return (
        <div>
            <AddFriend/>
            <FriendList data={data}/>
            <DeleteFriend/>
        </div>
    )
}