
class Dashboard extends React.Component {
  render = () => {
    return(
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li><a href='#'>Widget</a></li>
            <li><a href='#'>Reviews</a></li>
            <li><a href='#'>Customers</a></li>
            <li><a href='#'>Online Analysis</a></li>
            <li><a href='#'>Settings</a></li>
          </ul>
        </nav>
      </div>
    )
  }
};

class Reviews extends React.Component{
  render = () => {
    return(
      <div className='reviews'>
        <h3>Reviews</h3>
        <h1>1,281</h1>
      </div>
    )
  }
}

class AvgRating extends React.Component{
  render = () => {
    return(
      <div className='avgrating'>
        <h3>Average Rating</h3>
        <h1>4.8</h1>
      </div>
    )
  }
}

class SentimentAnalysis extends React.Component{
  render = () => {
    return(
      <div className='sa'>
        <h3>Sentiment Analysis</h3>
        <h2>960</h2>
        <h2>121</h2>
        <h2>321</h2>
      </div>
    )
  }
}

class Analytics extends React.Component{
  render = () => {
    return(
      <div className='analytics'>
        <Reviews></Reviews>
        <AvgRating></AvgRating>
        <SentimentAnalysis></SentimentAnalysis>
      </div>
    )
  }
}

class WebVisitors extends React.Component{
  render = () => {
    return(
      <div className='webvisitors'>
        <h3>Website Visitors</h3>
        <h1>821</h1>
        <img></img>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <Dashboard></Dashboard>
        <Analytics></Analytics>
        <WebVisitors></WebVisitors>
      </div>
    )
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
