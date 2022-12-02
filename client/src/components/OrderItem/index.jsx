import './style.css'
import orderSubject from '../../subject/order';

export default function OrderItem(props) {
    const item = props.item
    
    return <div className="orderItemBlock">
        <div className="orderItemTitle">{item.name}</div>
        <div className="orderItemQuantity">Quantity: {item.amount}</div>
        <div className="orderItemPrice">Price: {item.price * item.amount} $</div>
        <div onClick={() => orderSubject.removeItem(item)} className="orderItemCloseButton">x</div>
    </div>
}