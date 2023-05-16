import React, { useState } from 'react'
import {phonesData} from './Product_data'
import { Card,Button } from 'react-bootstrap'


const Product = () => {
  const [items, stateItems] =useState(phonesData);
  const decQty = (id) =>{
    const newItem = items.map((item) =>
    item.id === id && item.qty > 1 ?  {...item, qty: item.qty - 1}:item
    );
    stateItems(newItem); 
  };
  const incQty = (id) =>{
    const newItem = items.map((item) =>
    item.id === id ? {...item, qty: item.qty + 1}:item
    );
    stateItems(newItem); 
  };
  return (
      <div>
        <h1 className='bg-success text-white'>Products</h1>
        {items.map((item)=>(
          <div className='d-inline-flex' key={item.id}>
          <Card className='shadow p-3 m-2 bg-body rounded'
          style={{ width: '12rem' }}>
           <Card.Img 
           className='p-2' 
           style={{ height: '10rem' }}
           variant="top" 
           src={require(`./Image/${item.image}.jpg`)} />
           <Card.Body>
           <Card.Title className='text-primary'>{item.model}</Card.Title>
           <Card.Text>
             {item.desc}
           </Card.Text>
           <h6>price:₹ {item.price}</h6>
           <div>
             <p>Qty:
             <Button onClick={() => decQty (item.id)} className='m-1'>-</Button>{item.qty}
             <Button onClick={() => incQty (item.id)} className='m-1'>+</Button>
             </p>
           </div>
           <Button variant="primary">Add To Card</Button>
           </Card.Body>
         </Card>
         </div>

        ))}
        
   



      </div>
  )
}

export default Product