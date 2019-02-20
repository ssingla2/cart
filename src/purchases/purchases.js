import React from 'react';
import './purchase.scss';

const Purchases = (props) => {
  console.log(1212)
  console.log(renderPurchases(props));
  return (
    <div className='purchases'>
      {renderTotalPrice(props)}
      {renderPurchases(props)}
    </div>
  );
};

const renderPurchases = (props) => {
  return Object.keys(props.purchases).map((key) => {
    const purchase = props.purchases[key];
    return (
      <section className='purchase'>
      <div key={key} className='purchase-item'>
        <div className='purchase-item__image'><img src={`${purchase.productImage}`}/></div>
        <div className='purchase-item__quantity'><span>Qty <small>{purchase.quantity}</small></span></div>
        <div className='purchase-item__price'>{`₹${purchase.discPrice * purchase.quantity}.00`}</div>
      </div>
        <button className='remove' onClick={(event)=>props.onRemoveProduct(event,purchase.pid)}>REMOVE</button>
      </section>)
  })
};

const renderTotalPrice = (props) => {
  let price = 0;
  Object.keys(props.purchases).forEach((key) => {
    price += props.purchases[key]['discPrice'] * props.purchases[key]['quantity'];

  });
  return (
    <div className='cart-value'>
       <div className='cart-value__label'>Total Amount</div>
       <div className='cart-value__amount'>{`₹${price}`}</div>
    </div>
  )
};


export default Purchases;
