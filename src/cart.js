import React, {Component} from 'react';
import Products from './products/products';
import Purchases from './purchases/purchases';

import './cart.scss';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      purchases:{}
    };
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onRemoveProduct = this.onRemoveProduct.bind(this);
  }

  onQuantityChange(event,index) {
    const {value} = event.target;
    const products = [...this.state.products]
    products[index]['quantity'] = value;
    this.setState({products})

  }

  onAddToCart(event,pid,product) {
    event.stopPropagation();
    const purchases = {...this.state.purchases};
    purchases[pid] = product;
    this.setState({purchases})
  }

  onRemoveProduct(event,pid){
    event.stopPropagation();
    const purchases = {...this.state.purchases};
    debugger;
    delete purchases[pid];
    this.setState({purchases})
  }

  componentDidMount() {
    const url = './data/products.json';
    fetch(url).then(
      response => response.json()
    ).then(
      products => {
        this.setState({products});
      }
    );
  }

  render() {
    const {products,purchases} = this.state;
    return (
      <div className='cart'>
        <Products products={products} onQuantityChange={this.onQuantityChange} onAddToCart={this.onAddToCart}/>
        <Purchases purchases = {purchases} onRemoveProduct={this.onRemoveProduct}/>
      </div>
    );
  }
}

export default Cart;
