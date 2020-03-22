import React, { Component } from 'react'

class AddProductForm extends Component {

    state = {
            name: '',
            category: '',
            price: '',
            quantity: ''
    }


    onInpChngHandler = (event, newItem) => {
        this.setState({
            [newItem]: event.target.value,
        });
        console.log(this.state);
    }

    
    resetFields = () => {
        this.setState({
                name: '',
                category: '',
                price: '',
                quantity: ''
        })
    }


    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.submitHandler(this.state);
        this.resetFields();
    }


    render() {
        return (
            <div>
                <form 
                onSubmit={this.onSubmit}
                >
                    <fieldset>
                        <legend>Добавление нового товара</legend>
                        <input 
                        size="30" 
                        placeholder="Название товара" type="text" 
                        value={this.state.name} 
                        onChange={event => this.onInpChngHandler(event, 'name')} 
                        />
                        <input 
                        size="30" 
                        placeholder="Категория" type="text" 
                        value={this.state.category} 
                        onChange={event => this.onInpChngHandler(event, 'category')} 
                        />
                        <input 
                        size="30" 
                        placeholder="Цена" type="text" 
                        value={this.state.price} 
                        onChange={event => this.onInpChngHandler(event, 'price')} 
                        />
                        <input size="30" 
                        placeholder="Остаток на складе" type="text" 
                        value={this.state.quantity}
                        onChange={event => this.onInpChngHandler(event, 'quantity')} 
                        />
                        <p><input type="submit" value="Добавить товар"/></p>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export  default AddProductForm;
