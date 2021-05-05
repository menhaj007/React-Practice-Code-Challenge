import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    position: 0,
    money: 150,
    eatenSushi: []

  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(sushisData => {
      this.setState({
        sushis: sushisData
      });
      // console.log("From DB: sushi: " , this.state.sushis)
    })
  }

  nextFour = () => {
    this.setState({
      position: this.state.position + 4
    });
  }
  budget = (cost) => {
    this.setState({
      money: this.state.money-cost
    })
  }

  eatSushi = (sushi) => {
    if(sushi.price <= this.state.money && !this.state.eatenSushi.includes(sushi)) {
      this.setState({
        eatenSushi: [sushi, ...this.state.eatenSushi],
        money: this.state.money - sushi.price
      })
    } else {
      alert("Not enough balance.")
    }
    
  }

  render() {
    const listOfSushis = this.state.sushis.slice(this.state.position, this.state.position + 4);
    // console.log(listOfSushis);
    return (
      <div className="app">
        <SushiContainer displaySushi={listOfSushis} nextFour={this.nextFour} eatSushi={this.eatSushi} consumedSushi={this.state.eatenSushi}/>
        <Table balance={this.state.money} consumedSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;