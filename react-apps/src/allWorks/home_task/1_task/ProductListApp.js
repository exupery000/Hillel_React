import React from 'react';
import ProductRow from './components/ProductRow';
import ProductTable from './components/ProductTable';
import AddProductForm from './components/AddProductForm';

import './ProductListApp.css';


class ProductListApp extends React.Component {

  state = {

    items: [
    ],

    header: {
      name: 'Название',
      category: 'Категория',
      price: 'Цена',
      quantity: 'Остаток',
      act: 'Действие'
    }
  }


  onItemRemove = key => {
    const updatedItems = this.state.items.filter(item => item.key !== key);
    this.setState({ items: updatedItems })
  }

  submitHandler = (newItem) => {
    const { items } = this.state;
    const updatedItem = {
      key: Math.random() + '',
      ...newItem
    };

    this.setState({
      items: [
        ...items,
        updatedItem
      ]
    });
    console.log(this.state);
  }

  
  renderProductTable() {
    return (
      <ProductTable
      data={this.state.header}
      />
    )
  }


  renderAddProductForm() {
    return (
      <AddProductForm
      submitHandler={this.submitHandler}
      />
    )
  }


  renderProductRows() {
    return this.state.items.map(item =>
      <ProductRow
        key={item.key} 
        onItemRemove={this.onItemRemove}
        data={item}
      />
    )
  }


  render() {
    return (
      <div className="content">
        <div>
          <h1>shopping list</h1>
          <table>
            <thead className="table">
              {this.renderProductTable()}
            </thead>
            <tbody>
              {this.renderProductRows()}
            </tbody>
          </table>
        </div> 
        <br />
        <br />
        <div>
          {this.renderAddProductForm()}
        </div>
      </div>
    )
  }
}

export default ProductListApp;