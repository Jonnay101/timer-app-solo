var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownTime = require('CountdownTime');
var timer;
var count = 0;

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      timerRunning: false,
      clearState: false,
      mins: 1,
      secs: 15,
      userMins: 1,
      userSecs: 15
    }
  },
  handleTimeInput: function ({mins, secs}) {
    console.log(mins, secs);

    this.setState({
      mins: mins,
      secs: secs,
      userMins: mins,
      userSecs: secs
    })

  },
  countdownCallback: function () {
    var {secs, mins} = this.state;

    if (mins >= 1) {
      // if mins are more then 0
      if (secs === 0) {
        secs = 59;
        mins -= 1;
      } else {
        secs -=1
      }
    } else if (mins < 1) {
      if (secs === 0) {
        secs = 0;
        this.stopTimer();
      } else {
        secs -= 1;
      }
    }

    this .setState({
      secs: secs,
      mins: mins
    })
  },
  startTimer: function () {
    var that = this;
    timer = window.setInterval(() => this.countdownCallback(count), 1000);
  },
  stopTimer: function () {
    window.clearInterval(timer);
    this.setState({
      timerRunning: false,
    });
  },
  clearTimer: function () {
    var that = this;
    this.stopTimer();
    this .setState({
      timerRunning: false,
      clearState: false,
      secs: that.state.userSecs,
      mins: that.state.userMins
    })
  },
  handleTimer: function (timerState) {
    var that = this;
    var {secs, mins} = that.state;

    if (timerState) {
      this.setState({
        timerRunning: true,
      })
      this.startTimer();
    } else {
      this.setState({
        timerRunning: false,
      })
      this.stopTimer();
    }
  },
  handleClear: function (clearState) {

    if (clearState) {
      this.clearTimer();
    }
  },
  render: function () {
    var {timerRunning, startButtonVal, clearState, mins, secs} = this.state;

    function timeToString (num) {
      var numStr = num.toString()
      if (num < 0) {
        return '00';
      } else {
        if (num < 10 && numStr.length < 2) {
          return '0' + num;
        } else {
          return '' + num;
        }
      }
    }

    return (
      <div>
        <h1>Countdown</h1>
        <Clock mins={timeToString(mins)} secs={timeToString(secs)}/>
        <CountdownTime onTimeInput={this.handleTimeInput}/>
        <Controls onTimer={this.handleTimer} onClear={this.handleClear} timerRunning={timerRunning} clearState={clearState} />
      </div>
    )
  }
})

module.exports = Countdown;
