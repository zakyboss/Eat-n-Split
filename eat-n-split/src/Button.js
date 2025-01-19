import './index.css';

export default function Button({id, onClick , children}){
    return( 
    <button id={id} onClick={onClick}>{children}</button>
    )
}