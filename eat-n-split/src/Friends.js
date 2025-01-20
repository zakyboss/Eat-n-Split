import './index.css';
import FriendList from './FriendList';
import AddFriend from './AddFriend';
export default function Friends({data, onSelectFriend ,onClick,onAddFriend,displayAddForm , names, onDelete}){
    return (
        <div className='friendsContainer'>
            <FriendList data={data} onSelectFriend={onSelectFriend} onDelete={onDelete}/>
            <AddFriend onClick={onClick} onAddFriend={onAddFriend} displayAddForm={displayAddForm} names={names} />
        </div>
    )
}