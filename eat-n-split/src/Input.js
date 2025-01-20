import './index.css';
export default  function Input ({children ,  value, onChange }){
    return (
        <>
        <label>
            {children}
        </label>
        <input type='text' value={value}  onChange={(e)=> onChange(e.target.value)} />
        <br/>
        </>
    )
}