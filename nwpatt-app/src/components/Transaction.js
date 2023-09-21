import Item from "./Item";
import './Transaction.css'

const Transaction =()=> {
  const data = [
    {title:"ค่ารักษาพยาบาล",amount:"2000"},
    {title:"ค่าข้าว",amount:"80"},
    {title:"ค่าเสื้อผ้า",amount:"1000"},
    {title:"ค่าประกัน",amount:"300"},
    {title:"ค่าเดินทาง",amount:"660"},
    {title:"เงินเดือน",amount:"50000"}
  ]

  return (
    <ul className="item-list">
      {data.map((element)=>{
        return <Item {...element}/>
      })}
    </ul>
  );
}

export default Transaction