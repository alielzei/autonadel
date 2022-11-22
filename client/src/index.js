import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { sendHttpRequest } from './utils';
import './style.css'

import Item from './components/item/Item';
import OrderBottomBar from './components/order/OrderBottomBar';

function App() {
    const [items, setItems] = useState()

    useEffect(() => {
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
        <div className='itemMenu'>
            {
                items && items.map((item, i) => {
                    return <Item key={i} item={item} />
                })
            }
        </div>
        <OrderBottomBar/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
