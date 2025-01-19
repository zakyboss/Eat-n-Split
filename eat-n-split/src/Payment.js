import './index.css'
import PaymentForm from './PaymentForm'
export default function Payments({display}){
    return (
        <div className='payment-content'>
            {
  display?<PaymentForm/>:''
            }
        </div>
    )
}