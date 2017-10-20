import React, { Component } from 'react';
import moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      target: moment(this.props.target),
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    this.tick()
    
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmont() {
    clearInterval(this.timerID);
  }

  tick() {
    const now = moment()
    this.setState({
      months: this.state.target.diff(now, 'months'),
      days: this.state.target.diff(now, 'days'),
      hours: this.state.target.diff(now, 'hours') % 24 ,
      minutes: this.state.target.diff(now, 'minutes') % 60,
      seconds: this.state.target.diff(now, 'seconds') % 60,
    })
  }

  render() {
    return (
      <div className="countdown-wrapper">
        <h1 className="title">Preparem-se</h1>
        <h2 className="subtitle">O enderc está chegando</h2>

        <div className="countdown-clock">
          <div>
            <p>Meses</p>
            <span>{this.state.months > 0 ? this.state.months : 0}</span>
          </div>
  
          <div>
            <p>Dias</p>
            <span>{this.state.days > 0 ? this.state.days : 0}</span>
          </div>
  
          <div>
            <p>Horas</p>
            <span>{this.state.hours > 0 ? this.state.hours : 0}</span>
          </div>
  
          <div>
            <p>Minutos</p>
            <span>{this.state.minutes > 0 ? this.state.minutes : 0}</span>
          </div>
  
          <div>
            <p>Segundos</p>
            <span>{this.state.seconds > 0 ? this.state.seconds : 0}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
