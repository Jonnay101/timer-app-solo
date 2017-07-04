var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var timer;
var count = 0;

var Timer = React.createClass({
  getInitialState: function () {
    return {
      timerRunning: false,
      clearState: false,
      mins: 0,
      secs: 0
    }
  },
  timerCallback: function () {
    var {secs, mins} = this.state;

    if (secs < 59) {
      secs += 1
    } else {
      secs = 0;
      mins += 1
    }

    this .setState({
      secs: secs,
      mins: mins
    })
  },
  startTimer: function () {
    var that = this;
    timer = window.setInterval(() => this.timerCallback(count), 1000);
  },
  stopTimer: function () {
    window.clearInterval(timer);
  },
  clearTimer: function () {
    this.stopTimer();
    this .setState({
      timerRunning: false,
      clearState: false,
      secs: 0,
      mins: 0
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
      if (num < 10) {
        return '0' + num;
      } else {
        return '' + num;
      }
    }

    return (
      <div>
        <h1>Timer</h1>
        <Clock mins={timeToString(mins)} secs={timeToString(secs)}/>
        <Controls onTimer={this.handleTimer} onClear={this.handleClear} timerRunning={timerRunning} clearState={clearState} />
      </div>
    )
  }
})

module.exports = Timer;
