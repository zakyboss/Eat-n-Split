import './index.css'
export default function PaymentForm(){
    return (
        <div className='paymentForm'>
            <h3>Split the bill with X</h3>
            <form style={{display:'block'}}>
              
              <Input>Bill Value </Input>
              <Input>Your Expenses</Input>
              <Input>Your Friend's Expenses </Input>
              <Input>Bill Value </Input>

                <span>
                    <label>Who is Paying ?</label>
                 <select >
                    <option>You</option>
                    <option>Friend</option>
                 </select>
                 </span>
                 <br/>
                    <button>Split Bill </button>
            </form>
        </div>
    )
}
 export function Input ({children ,  value, OnChange }){
    return (
        <>
        <label>
            {children}
        </label>
        <input type='text' value={''} onChange={''} />
        <br/>
        </>
    )
}