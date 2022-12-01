import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { sendHttpRequest } from './utils';
import './style.css'

import orderSubject from './subject/order';

import Item from './components/Item';
import OrderBottomBar from './components/OrderBottomBar';
import OrderItem from './components/OrderItem';

function App() {
    const [items, setItems] = useState()
    const [viewOrder, setView] = useState(true)
    const [order, setOrder] = useState({})

    useEffect(() => {
        orderSubject.registerObserver((newOrder) => {
            setOrder(o => ({ ...newOrder }))
        })

        sendHttpRequest('GET', '/api/item', true)
            .then(res => {
                if (res.error) {
                    console.error(res.error)
                } else {
                    setItems(res.data)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return <div>
        <div className='navbar'>
            autonadel
        </div>
        <div>
            <div className='itemMenu'>
                <div className='menuTitle'>Menu:</div>
                {
                    items && items.map((item, i) => {
                        return <Item key={i} item={item} />
                    })
                }
            </div>

            {
                viewOrder && <div className="orderView">
                    <div className="orderTitle">ORDER:</div>
                    {Object.entries(order).map(([_, item], i) => {
                        return <OrderItem key={i} item={item} />
                    }
                    )}
                </div>
            }
            <OrderBottomBar viewOrderClick={() => setView(!viewOrder)} />
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
