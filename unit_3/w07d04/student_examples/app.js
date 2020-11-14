//linear flow is important***


///////////////////
// FUNCTIONS
///////////////////

//execute functions inside {}
const formatUser = (user) => {
  return user +'!!'
}

//handle user events
const sayHello = () => {
    alert("oh hai");
}

///////////////////
// VARIABLES
///////////////////

//embed an expression
const user = 'john'
//assign a variable
// const myJSX = <h1>Hello, World!</h1>
// const myJSX = <h1>Hello, {formatUser(user)}!</h1>
//multi-line JSX variables
const myJSX =
  <section>
    <h1>Hello, {formatUser(user)}</h1>
    Welcome to the app
  </section>




/////////////////////
// CUSTOM COMPONENT
/////////////////////
//we can create our own custom HTML tags
class Dog extends React.Component {
    render = () => {
        return <h2>woof</h2>
    }
}

// class App extends React.Component{
//   render = () => {
//     return <h1 onClick={sayHello}>Hello, World!</h1>
//     // return (
//     //   <div>
//     //     <h1>Hello, World!</h1>
//     //     <Dog></Dog>
//     //   </div>
//     // )
//   }
// }

//change a components state through interaction
class App extends React.Component {
  //state initializes the state of the app when the component loads
    state = {
        name: "World"
    }
    // changeName = () => {
    //     this.setState({
    //       name: 'John'
    //     })
    // }

    //switch to using an input so you can customize the name
    changeName = (event) => {
      this.setState({
        name: event.target.value
      })
    }


    // render = () => {
    //     return <h1 onClick={this.changeName}>Hello, {this.state.name}!</h1>;
    // }

    //switch to using an input so you can customize the name
    render = () => {
    // return one top level div
    // call changeName on key up of an input
    return <div>
        <h1>Hello, {this.state.name}!</h1>
        <input type="text" onKeyUp={this.changeName} />
    </div>;
}
}


///////////////////
// JSX
///////////////////

// ReactDOM.render(
//   <h1 className="foo">Hello, world!</h1>,
//   document.querySelector('main')
// );

//JSX with the variable
ReactDOM.render(
  <App></App>,
  // myJSX,
  document.querySelector('main')
);




////////////////////////
// INTERMEDIATE REACT
////////////////////////

const name = 'john';
const result = (name === 'Matt') ? 'awesome!' : 'less than awesome';
console.log(result);

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];
const results = iceCreams.map(
    (flavor) => {
        return flavor + ' ice cream'
    }
)
console.log(results);


class App extends React.Component {
  state = {
      name: "World"
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render = () => {
      const isAdmin = true;
      const fruits = ['apple', 'pear', 'mango'];
      return <div>
          <h1>Hello, {this.state.name}!</h1>
          { (isAdmin) ? <em>You are an admin</em> : null }
          <input type="text" onKeyUp={this.changeName} />
          <ul>
              {
                  fruits.map(
                      (fruit) => {
                          return <li>{fruit}</li>
                      }
                  )
              }
          </ul>
      </div>;
  }
}


ReactDOM.render(
  <App></App>,
  // myJSX,
  document.querySelector('main')
);
