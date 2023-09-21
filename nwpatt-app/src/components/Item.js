import './Transaction.css'

const Item =({title,amount})=> {
  return (
    <div>   
      <li>{title}<span>{amount}</span></li>
    </div>
  );
}

export default Item