class Bakery extends React.Component {
  constructor(props){
    super(props)
    this.pudding = this.pudding.bind(this)
    this.buy_easy_bake = this.buy_easy_bake.bind(this)
    this.easy_bake = this.easy_bake.bind(this)
    this.buy_toaster = this.buy_toaster.bind(this)
    this.toaster = this.toaster.bind(this)
    this.buy_convection = this.buy_convection.bind(this)
    this.convection = this.convection.bind(this)
    this.buy_factory = this.buy_factory.bind(this)
    this.factory = this.factory.bind(this)
    this.restart = this.restart.bind(this)
  }

  state = {
    recipie: 'No Bake Pudding',
    money: 0,
    day: 0
  }

  pudding() {
    this.setState({
      money: this.state.money+=1,
      day: this.state.day+=1
    })
  }


  buy_easy_bake(){
    this.setState({
      recipie: "Easy Bake Oven",
      money: this.state.money-=5,
      day: this.state.day+=1
    })
  }

  easy_bake() {
    this.setState({
      money: this.state.money+=5,
      day: this.state.day+=1
    })
  }

  buy_toaster() {
    this.setState({
      recipie: "Old Toaster Oven",
      money: this.state.money-=25,
      day: this.state.day+=1
    })
  }

  toaster() {
    this.setState({
      money: this.state.money+=50,
      day: this.state.day+=1
    })
  }

  buy_convection() {
    this.setState({
      recipie: "Convection Oven",
      money: this.state.money-=250,
      day: this.state.day+=1
    })
  }

  convection() {
    this.setState({
      money: this.state.money+=100,
      day: this.state.day+=1
    })
  }

  buy_factory() {
    this.setState({
      recipie: "Bread Making Factory",
      money: this.state.money-=500,
      day: this.state.day+=1
    })
  }

  factory() {
    this.setState({
      money: this.state.money+=250,
      day: this.state.day+=1
    })
  }

  restart(){
    this.setState({
      recipie: "No Bake Pudding",
      money: 0,
      day: 0
    })
  }

  render = () => {
    return(
      <div className='bakery'>
        <div className='welcome'>
          <h1>Welcome, to the bakery! What should we make today?</h1>
          <span>Money: ${this.state.money}</span><br/>
          <span>Current recipie: {this.state.recipie}</span><br/>
          <span>Day: {this.state.day}</span>
        </div>
        <br/>
        <div>
          {this.state.recipie === 'No Bake Pudding' &&
          <button onClick={this.pudding}>Make No Bake Pudding</button>
          }

          {this.state.money >=5 && this.state.recipie === 'No Bake Pudding' &&
          <button onClick={this.buy_easy_bake}>Buy Easy Bake Oven</button>
          }
          {this.state.recipie === 'Easy Bake Oven' &&
          <button onClick={this.easy_bake}>Use Easy Bake Oven</button>
          }

          {this.state.money >=25 && this.state.recipie === 'Easy Bake Oven' &&
          <button onClick={this.buy_toaster}>Buy Old Toaster Oven</button>
          }
          {this.state.recipie === 'Old Toaster Oven' &&
          <button onClick={this.toaster}>Use Old Toaster Oven</button>
          }

          {this.state.money >=250 && this.state.recipie === 'Old Toaster Oven' &&
          <button onClick={this.buy_convection}>Buy Convection Oven</button>
          }
          {this.state.recipie === 'Convection Oven' &&
          <button onClick={this.convection}>Use Convection Oven</button>
          }

          {this.state.money >=500 && this.state.recipie === 'Convection Oven' &&
          <button onClick={this.buy_factory}>Buy Factory</button>
          }
          {this.state.recipie === 'Bread Making Factory' &&
          <button onClick={this.factory}>Use Factory</button>
          }
          {this.state.money >= 1000 &&
            <h1>Congratulations! You beat the game!</h1>
          }
          <br/>
          <button onClick={this.restart}>Restart the game!</button>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <h1>React Bakery</h1>
        <Bakery></Bakery>
      </div>
    )
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
