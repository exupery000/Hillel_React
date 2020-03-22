import React, { Component } from 'react'

class ProductTable extends Component {
    render() {
        const { name, category, price, quantity, act } = this.props.data;
        return (
            <>
              <tr>
                  <th>{name}</th>
                  <th>{category}</th>
                  <th>{price}</th>
                  <th>{quantity}</th>
                  <th>{act}</th>
              </tr> 
            </>
        )
    }
}

export  default ProductTable;
