import React, { Component } from 'react'

class ProductRow extends Component {
    render() {
        const { key, name, category, price, quantity } = this.props.data;
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><button
                        onClick={() => this.props.onItemRemove(key)}
                    >Remove</button></td>

                </tr>
            </>
        )
    }
}

export  default ProductRow ;
