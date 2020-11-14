// ======================
// DATA
// ======================
// tools 
const tools = [
    {
        name: 'no bake pudding',
        salary: 1,
        cost: 0
    },
    {
        name: 'easy bake oven',
        salary: 5,
        cost: 5
    },
    {
        name: 'old toaster oven',
        salary: 50,
        cost: 25
    },
    {
        name: 'convection oven',
        salary: 100,
        cost: 250
    },
    {
        name: 'factory',
        salary: 250,
        cost: 500
    }
]

// ======================
// APP COMPONENT
// ======================
class App extends React.Component {
    // ===========
    // STATE
    // ===========
    state = {
        bank: 0, // setting bank to 0 by default
        tool: tools[0], // setting tools to no bake pudding by default
        currentToolIndex: 0 // setting tool index to 0 by default
    }

    // ===========
    // METHODS
    // ===========
    // bake method to increase bank total  
    bake = () => {
        // calculate the new bank total based on the current state 
        let newBankTotal = this.state.bank + this.state.tool.salary
        // set the state using that new total 
        this.setState({
            bank: newBankTotal
        })
    }

    // buy method to buy a new tool 
    buy = () => {
        // get the new index based on current state 
        let newIndex = this.state.currentToolIndex + 1
        // subtract the cost from their bank 
        let newBankTotal = this.state.bank - tools[newIndex].cost
        // set the state using that new index to get the next tool 
        this.setState({
            bank: newBankTotal,
            tool: tools[newIndex],
            currentToolIndex: newIndex
        })
    }

    // ===========
    // RENDER
    // ===========
    render = () => {
        return (
            <div>
                <h1>React Bakery!</h1>
                <strong>Bank Account: </strong> ${this.state.bank}
                <h3>Let's get baking!</h3>
                <strong>Current Tool:</strong> {this.state.tool.name}<br/>
                <strong>Current Salary:</strong> ${this.state.tool.salary} per baked good 
                <br/><br/>
                <button onClick={this.bake}>Bake!</button>
                {/* check if there is a tool still left to buy AND if the user currently has enough money to buy the next tool / if yes, show the button to buy the next tool by utilizing the currentToolIndex state */}
                { tools[this.state.currentToolIndex + 1] && this.state.bank >= tools[this.state.currentToolIndex + 1].cost 
                    ? <button onClick={this.buy}>Buy {tools[this.state.currentToolIndex + 1].name} for ${tools[this.state.currentToolIndex + 1].cost}</button>
                    : null 
                }
                {/* check if they have won the game by checking if they have the factory AND if they have $1000 or more in the bank */}
                { this.state.tool.name === 'factory' && this.state.bank >= 1000 
                    ? <h1>Congrats, you've won the game! Keep baking if you'd like!</h1>
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
