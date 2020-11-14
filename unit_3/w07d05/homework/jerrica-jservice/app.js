// ======================
// APP COMPONENT
// ======================
class App extends React.Component {
    // ===========
    // RENDER
    // ===========
    render = () => {
        return (
            <div>
                <h1>This is Jeopardy!</h1>
                <Scoreboard/>
                <Trivia/>
            </div>
        )
    }
}

// ======================
// SCOREBOARD COMPONENT
// ======================
class Scoreboard extends React.Component {
    // ===========
    // STATE
    // ===========
    state = {
        score: 0
    }

    // ===========
    // METHODS
    // ===========
    updateScore = (event) => {
        let action = event.target.id
        switch (action) {
            case 'decrease':
                this.setState({ score: this.state.score - 1 })
                break
            case 'increase':
                this.setState({ score: this.state.score + 1 })
                break
            case 'reset':
                this.setState({ score: 0 })
                break
            default:
                break
        }
    }

    // ===========
    // RENDER
    // ===========
    render = () => {
        return (
            <div className="scoreboard">
                <h2><span>Current Score:</span> {this.state.score}</h2>
                <div className="score-buttons">
                    <button id="decrease" onClick={this.updateScore}>Decrease</button>
                    <button id="increase" onClick={this.updateScore}>Increase</button>
                    <button id="reset" onClick={this.updateScore}>Reset</button>
                </div>
            </div>
        )
    }
}

// ======================
// TRIVIA COMPONENT
// ======================
class Trivia extends React.Component {
    // ===========
    // STATE
    // ===========
    state = {
        showAnswer: false,
        trivia: {}
    }

    // ===========
    // METHODS
    // ===========
    // get the trivia
    getTrivia = () => {
        // axios get request to jservice
        axios('http://jservice.io/api/random')
            .then(trivia => {
                console.log(trivia)
                // set the trivia state equal to the received data and set showAnswer to false again
                this.setState({
                    trivia: trivia.data[0],
                    showAnswer: false
                })
            })
    }

    // toggle showing the answer
    toggleAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

    // ===========
    // RENDER
    // ===========
    render = () => {
        return (
            <div className="play">
                <h2><span>Let's Play!</span></h2>
                <button className="question-button" onClick={this.getTrivia}>Get Trivia!</button><br/>
                {/* checks if a question exists first before rendering the info */ }
                { this.state.trivia.question
                    ? <div>
                        <h3><span>Category:</span></h3> {this.state.trivia.category.title}<br/>
                        <h3><span>Point Value:</span></h3> {this.state.trivia.value}<br/>
                        <h3><span>Question:</span></h3> {this.state.trivia.question}<br/>
                        <button className="reveal" onClick={this.toggleAnswer}>Show Answer</button>
                        { this.state.showAnswer
                            ? <div><h3><span>Answer:</span></h3> {this.state.trivia.answer}</div>
                            : null
                        }
                      </div>
                    : null
                }
            </div>
        )
    }
}

// ======================
// APP RENDER
// ======================
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
