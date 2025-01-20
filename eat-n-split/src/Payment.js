import './index.css'
import PaymentForm from './PaymentForm'
export default function Payments({display , paymentData}){
    return (
        <div className='payment-content'>
            <PaymentForm paymentData={paymentData} display={display}/>
            
        </div>
    )
}