import Item from "./Item";
import './Transaction.css'

const Transaction =()=> {
    return (
      <ul className="item-list">
        <Item title="ค่ารักษาพยาบาล" amount="2000"/>
        <Item title="ค่าข้าว" amount="80"/>
        <Item title="ค่าเสื้อผ้า" amount="1000"/>
      </ul>
    );
}

export default Transaction