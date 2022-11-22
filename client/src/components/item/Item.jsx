import './style.css'
import orderSubject from '../../subject/order';

export default function Item(props) {
    const item = props.item
    
    return <div onClick={() => orderSubject.addItem(item)} className="itemBlock">
        <div className="itemTitle">{item.name}</div>
        <div className="itemDescription">{item.description}</div>
        <div className="itemPrice">{item.price} $</div>
        <div>ITEMID: {item.item_id}</div>
        <br></br>
    </div>
}