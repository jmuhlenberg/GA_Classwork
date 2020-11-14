class App extends React.Component {
  render = () => {
    return (
      <div className="container" style={{ backgroundColor: 'ghostwhite' }}>
        <h1>Hello there! Please click a circle</h1>
        <div className="circles">
          <div className="circle" id="cornflowerblue"></div>
          <div className="circle" id="darkseagreen"></div>
          <div className="circle" id="lightsalmon"></div>
          <div className="circle" id="plum"></div>
        </div>
        <input type="text" placeholder="Enter color name or HEX code" />
      </div>
    )
  }
}
ReactDOM.render(<App></App>, document.querySelector('main'))
