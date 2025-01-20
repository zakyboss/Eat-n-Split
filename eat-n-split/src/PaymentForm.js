import './index.css';
import Input from './Input';
export default function PaymentForm({paymentData, display}){
    const {  bill,
        setBill,
        myExpenses,
        setMyExpenses,
        friendsExpenses,
        setFriendsExpenses,
        payer,
        handlePayment,
        setPayer ,eatBuddy} = paymentData;
    
        if(display){
    return (
        <div className='paymentForm'>
            <h3>Split the bill with {}</h3>
            <form style={{display:'block'}} onSubmit={handlePayment}>
              
              <Input value={bill} onChange={setBill}>Bill Value </Input>
              <Input value={myExpenses} onChange={setMyExpenses}>Your Expenses</Input>
              <Input value={friendsExpenses} onChange={setFriendsExpenses}>Your Friend's Expenses </Input>
                
                    <label>Who is Paying ?</label>
                 <select onChange={(e)=>setPayer(e.target.value)}>
                    <option value={payer}>You</option>
                    <option value={payer}>Friend</option>
                 </select>
        
                 <br/>
                    <button type='submit'>Split Bill </button>
            </form>
        </div>
    )
} else {
    return ''
}
 }

 