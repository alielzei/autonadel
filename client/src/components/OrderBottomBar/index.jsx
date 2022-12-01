import { useState } from "react"
import { useEffect } from "react"

import orderSubject from '../../subject/order';
import './style.css'
import { sendHttpRequest } from '../../utils';

export default function OrderBottomBar(props) {
    const [order, setOrder] = useState({})

    useEffect(() => {
        orderSubject.registerObserver((newOrder) => {
            setOrder(o => ({ ...o, ...newOrder }))
        })
    }, [])

    const submitOrder = () => {
        sendHttpRequest('POST', '/api/order', false, order)
            .then(res => {
                if (res.error) {
                    console.error(res.error)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
    
    return <>
        <div className='orderBar'>
            <div>
            </div>
            <div 
                className="orderButton button"
                onClick={() => {
                    submitOrder(order)
                }}
            >
                SUBMIT ORDER
            </div>
            <div
                onClick={props.viewOrderClick}
                className="viewButton button">
                VIEW ORDER
            </div>
            <div className="orderTotalAmount">
                {"Total: $"}
                {(() => {
                    let amount = 0
                    for (const [key, value] of Object.entries(order)) {
                        amount += value.price * value.amount
                    }
                    return amount
                })()}
            </div>
        </div>
        <div className='orderBar orderBarSpace'></div>
    </>

}