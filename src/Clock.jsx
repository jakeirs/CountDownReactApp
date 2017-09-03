import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('Clock', this.props)
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval( ()=> this.getTimeUntil(this.props.deadline) ,1000);
    this.getTimeUntil(this.props.deadline);
  }

  

  getTimeUntil(deadline) {
    const time = Date.parse( deadline ) - Date.parse( new Date() );
    console.log('time ', time, 'deadline', Date.parse( deadline ),
     'nowa data', Date.parse( new Date() ) );
    const seconds = Math.floor( (time / 1000) % 60 );
    const minutes = Math.floor( (time/1000/60) % 60 );
    const hours = Math.floor( (time / (1000 * 3600)) % 24 );
    const days = Math.floor( (time/ (1000 * 3600 * 24) ) )

    console.log('day', days, 'hours', hours, 'minutes', minutes, 'sec', seconds);

    this.setState( { days, hours, minutes, seconds } )
  }

  render() {
    return (
      <div className="Clock">
        <div>{this.state.days} days</div>
        <div>{this.state.hours} hours</div>
        <div>{this.state.minutes} minutes</div>
        <div>{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export default Clock;