class Score extends React.Component{
  constructor(props){
    super(props)
    this.decrease = this.decrease.bind(this)
    this.increase = this.increase.bind(this)
    this.reset = this.reset.bind(this)
  }

  state={
    score: 0
  }

  decrease(){
    this.setState({
      score: this.state.score-=1
    })
  }

  increase(){
    this.setState({
      score: this.state.score+=1
    })
  }

  reset(){
    this.setState({
      score: 0
    })
  }

  render = () => {
    return(
      <div>
        <h2>Score: <span>{this.state.score}</span></h2><br/>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}


class Play extends React.Component{
  state = {
    data:{},
    category: {},
    show: false
  }

  findQuestion = (event) => {
    axios.get('http://www.jservice.io/api/random').then(
      (response) => {
        this.setState({
          data: response.data[0],
          category: response.data[0].category
        })
      }
    )
  }

  showAnswer = () => {
    this.setState({show: !this.state.show})
  }

  render = () => {
    return(
      <div>
        <h2>Lets Play!</h2>
        <button onClick={this.findQuestion}>Get Question</button>
        <h2>Category: </h2><span>{this.state.category.title}</span>
        <h2>Points: </h2><span>{this.state.data.value}</span>
        <h2>Answer: </h2><span>{this.state.data.question}</span><br/>
        <button onClick={this.showAnswer}>Reveal the Question</button>
        {this.state.show ?
          <Answer answer={this.state.data.answer}></Answer> : ''
        }
      </div>
    )
  }
}


class Answer extends React.Component{
  render = () => {
    return(
      <div><span>{this.props.answer}</span></div>
    )
  }
}

class App extends React.Component{
  render = () => {
    return(
      <div>
        <h1>Welcome to Jeopardy!</h1>
        <Score></Score>
        <Play></Play>
      </div>
    )
  }
}




ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
