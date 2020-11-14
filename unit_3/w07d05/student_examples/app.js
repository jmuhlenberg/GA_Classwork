// const formatUser = (user) => {
//     return user + '!!'
// }
// const user = "Matt";
//
// const myJSX = <section>
//         {/* this is a comment */}
//         <h1>Hello, {formatUser(user)}!</h1>
//         Welcome to the app
//     </section>;

// ReactDOM.render(
//     myJSX,
//     document.querySelector('main')
// )

// class Car {
//     drive = () => {
//         console.log('vroom');
//     }
// }
//
// class Humvee extends Car {
//     blastRadio = () => {
//         console.log('Welcome to the jungle!!');
//     }
// }
//
// const myCar = new Car();
// myCar.drive();
//
//
// const myCar2 = new Humvee();
// myCar2.drive();
// myCar2.blastRadio();

// class Dog extends React.Component {
//     render = () => {
//         return <h2>woof</h2>
//     }
// }
//
// class App extends React.Component {
//     render = () => {
//         return <div>
//             <h1>Hello, world!</h1>
//             <Dog></Dog>
//         </div>
//     }
// }

// const name = "bilbo";
// let result = (name === 'Matt') ? 'awesome': 'less than awesome';
//
// console.log(result);

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];
//
// const results = iceCreams.map(
//     (flavor) => {
//         return flavor + ' ice cream';
//     }
// );
//
// console.log(results);
//
// class App extends React.Component {
//     state = {
//         name:'World'
//     }
//     changeName = (event) => {
//         this.setState({
//             name:event.target.value
//         })
//     }
//     render = () => {
//         const isAdmin = true;
//         const fruits = ['apple', 'pear', 'mango'];
//         return <div>
//             <h1>Hello, {this.state.name}!</h1>
//             { (isAdmin) ? <em>You are an admin</em> : null }
//             <input type="text" onKeyUp={this.changeName} />
//             <ul>
//                 {
//                     fruits.map(
//                         (fruit) => {
//                             return <li>{fruit}</li>
//                         }
//                     )
//                 }
//             </ul>
//         </div>
//     }
// }
//
// // $('input').on('keyUp', (event) => {
// //     $(event.target).val();
// // })
//
// ReactDOM.render(
//     <App></App>,
//     document.querySelector('main')
// )





/////////////
// TERNARY
/////////////

// const name = 'John'
//
// let result
//
// if(name==='John'){
//   result = 'awesome'
// }else{
//   result='less than awesome'
// }
//
// console.log(result);
//
// result = (name === 'John') ? <h1>awesome</h1> : <h1>less than awesome</h1>
//
// console.log(result);


// class App extends React.Component{
//   render = () => {
//     const isAdmin = true
//     return <div>
//       {(isAdmin) ? <em>You are an admin</em> : null}
//       </div>
//   }
// }
//
// ReactDOM.render(
//   <App></App>,
//   document.querySelector('main')
// )






////////////////
// .MAP
////////////////

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];

// for (let i=0; i<iceCreams.length; i++){
//   results.push(iceCreams[i])
// }
//
// // forEach
// iceCreams.forEach(
//   (flavor) => {
//     console.log(flavor);
//   }
// )
//
// //basic for loop
// const results = []
// for (let i=0; i<iceCreams.length; i++){
//   results.push(iceCreams[i] + ' ice cream')
// }
//
// console.log(results);
//
//
// const results2 = iceCreams.map(
//   (flavor) => {
//     return flavor + ' ice cream'
//   }
// )

// const myJSX = iceCreams.map(
//   (flavor) => {
//     return <li>{flavor} ice cream</li>
//   }
// )
//
// ReactDOM.render(
//   myJSX,
//   document.querySelector('main')
// )


// axios.get('http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen').then(
//   (response) => {
//     console.log(response.data);
//   }
// )

class App extends React.Component {
  state = {
    movie: {}
  }

  findMovie = (event) => {
    event.preventDefault()
    axios.get('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.state.name).then(
      (response) => {
        this.setState({
          movie: response.data
        })
      }
    )
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render = () => {
    return <div>
      <form onSubmit={this.findMovie}>
        <input type='text' onKeyUp={this.changeName}/>
        <input type='submit' value='Find Movie'/>
      </form>
      <Movie title={this.state.movie.Title} year={this.state.movie.Year} rating={this.state.movie.Rated}></Movie>
    </div>
  }
}

class Movie extends React.Component{
  render = () => {
    return<dl>
      <dt>Title</dt>
      <dd>{this.props.title}</dd>

      <dt>Year</dt>
      <dd>{this.props.year}</dd>

      <dt>Rating</dt>
      <dd>{this.props.rating}</dd>
    </dl>
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
