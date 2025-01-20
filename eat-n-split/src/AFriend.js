import './index.css' ;
import Button from './Button';
export default function AFriend({ data, onSelectFriend  , onDelete}) {
    const { id, firstName, lastName, payments, photo } = data;
    let total = payments.reduce((acc,curr)=> acc+curr,0);
    let balance ;
    let notification;
    if(total===0){
balance='You are Even'
notification= {color : 'Purple'};
}
        
    if (total>0){
        balance=`You owe ${firstName} $${Math.abs(total)}`
        notification= {color : 'green'};

    }
if(total<0){
    balance= `${firstName} owes You $${Math.abs(total)}  `
    notification= {color : 'red'};
}
    return (
        <li className="item">
            <img src={photo} alt={firstName} id="image" />
            <span>
                <h2 style={{ color: "goldenrod" }}>{firstName} {lastName}</h2>
                <h3 style={notification}>{balance}</h3>
            </span>
            <>
            <Button id="selectBtn" onClick={()=>onSelectFriend(id)}>
                Select
            </Button>
            <Button id="deleteBtn" onClick={()=>onDelete(id)} >
                Delete
            </Button>
            </>
        </li>
    );
}
