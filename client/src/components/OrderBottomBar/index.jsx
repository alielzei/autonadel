import { useState } from "react"
import { useEffect } from "react"

import orderSubject from '../../subject/order';
import './style.css'

export default function OrderBottomBar(props) {
    const [order, setOrder] = useState({})
    const [viewOrder, setView] = useState(true)

    useEffect(() => {
        orderSubject.registerObserver((newOrder) => {
            setOrder(o => ({ ...o, ...newOrder }))
        })
    }, [])

    return <>
        {viewOrder && <div className="orderView">
            {Object.entries(order).map(([_, item], i) => {
                return <div key={i}>
                    {item.name}
                    {" "}
                    {item.amount}
                </div>
            }
            )}
        </div>}
        <div className='orderBar'>
            <div>
            </div>
            <div className="orderButton button">
                SUBMIT ORDER
            </div>
            <div
                onClick={() => setView(!viewOrder)}
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