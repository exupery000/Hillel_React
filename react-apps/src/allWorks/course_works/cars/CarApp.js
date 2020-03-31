import React from 'react';
import Car from './Car/Car.js';

class CarApp extends React.Component {

  state = {
    cars: [
      {name: 'ford', year: '2018'},
      {name: 'audi', year: '2010'},
      {name: 'mazda 3', year: '2016'},
    ],
    pageTitle: 'React Components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  inputHandler = (event) => {
    console.log('changed', event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }



  render() {
    console.log('render!');
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.pageTitle}</h1>

          <input type="text" onChange={this.inputHandler}/>

          <button onClick={this.changeTitleHandler.bind(this, 'changed!')}>Change title</button>

          { this.state.cars.map((car, index) => {
            return (
              <Car 
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
            )
          }) }
        </header>
      </div>
    )
  }
}

export default CarApp;
