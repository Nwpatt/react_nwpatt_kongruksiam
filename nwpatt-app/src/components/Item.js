import './Transaction.css'

const Item =(props)=> {
    return (
      <div>   
        <li>{props.title}<span>{props.amount}</span></li>
      </div>
    );
}

export default Item