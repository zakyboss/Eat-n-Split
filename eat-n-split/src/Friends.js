import './index.css';
import FriendList from './FriendList';
import DeleteFriend from './DeleteFriend';
import AddFriend from './AddFriend';
export default function Friends({data, onSelectFriend ,onClick,onAddFriend,displayAddForm , names}){
    return (
        <div className='friendsContainer'>
            <FriendList data={data} onSelectFriend={onSelectFriend}/>
            <AddFriend onClick={onClick} onAddFriend={onAddFriend} displayAddForm={displayAddForm} names={names}/>

            <DeleteFriend/>
        </div>
    )
}