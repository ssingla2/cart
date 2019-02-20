import React from 'react';
import './products.scss'
const Products = (props)=>{
  return (
    <div className='products'>
      {renderProducts(props)}
    </div>
  );
};

const renderProducts = (props)=>{
  console.log(props.onQuantityChange);
  return props.products.map((product,index)=>{
    return (
     <section key={product.pid} className='product'>
       <div className='product-image'><img src={`${product.productImage}`}/></div>

       <div className='product-details'>
         <div className='product-details__brand'>{product.brandName}</div>
         <div className='product-details__name'>{product.productName}</div>
         <div className='product-details__description'>
           <span>Size {product.size}</span>
           <span className="separator">|</span>
           <span>Qty <small>{product.quantity}</small></span>
           </div>
       </div>

       <div className='product-quantity'>
         <select onChange={(event)=> props.onQuantityChange(event,index)}>
           {product.availQty && product.availQty.map(qty=><option>{qty}</option>)}
         </select>
       </div>

       <div className='product-value'>
         <div className='product-value__price'>
             <span className="regular-price">{`₹${product.regPrice * product.quantity}.00`}</span>
             <span className="discount-price">{`₹${product.discPrice * product.quantity}.00`}</span>
         </div>
         <button className='add-to-cart' onClick={(event)=>props.onAddToCart(event,product.pid,product)}>ADD TO CART</button>
       </div>
     </section>
    )
  });
};


export default Products;
