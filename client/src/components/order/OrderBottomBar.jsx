import { useState } from "react"
import { useEffect } from "react"

import orderSubject from '../../subject/order';
import './style.css'

export default function OrderBottomBar(props) {
    const [order, setOrder] = useState({})

    useEffect(() => {
        orderSubject.registerObserver((newOrder) => {
            setOrder(o => ({ ...o, ...newOrder }))
        })
    }, [])

    return <>
        <div className='orderBar'>
            <div>
                {JSON.stringify(order)}
            </div>
            <div className="orderButton">
                ORDER
            </div>
        </div>
        <div className='orderBar orderBarSpace'></div>
    </>

}