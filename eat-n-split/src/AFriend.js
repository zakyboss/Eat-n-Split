import './index.css';
export default function AFriend({data}){
    const {id, firstName, lastName,payments,photo}= data;
    return(
        <li  className='item'>
          <img src={`${photo}`} alt={firstName} id='image'/>
            <span>
                <h2>{firstName} {lastName}</h2>
                <h3 style={{color:'green'}}>Owes You $300</h3>
            </span>
                <button id='selectBtn'>Select</button>
        </li>
    )
}