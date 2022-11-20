import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { sendHttpRequest } from './utils';
import './style.css'

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

  return items && items.map((item, i) => {
    return <div key={i}>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>{item.kind}</div>
      <br></br>
    </div>
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
