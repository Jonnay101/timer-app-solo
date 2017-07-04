var React = require('react');

var Controls = React.createClass({
  onTimerSubmit: function (e) {
    e.preventDefault();
    var startButtonVal = this.refs.startButton.value;

    if (startButtonVal === 'Stop') {
      this.props.onTimer(false);
    } else {
      this.props.onTimer(true);
    }
  },
  onClearClick: function (e) {
    e.preventDefault();
    this.props.onClear(true);
  },
  render: function () {
    var {timerRunning} = this.props;

    function buttonState () {
      if (timerRunning) {
        return <input type="submit" className="start-btn control-btn button large timer-running" value='Stop' ref="startButton"/>
      } else {
        return <input type="submit" className="start-btn control-btn button large timer-stopped" value='Start' ref="startButton"/>
      }
    }

    return (
      <div className="">
        <form onSubmit={this.onTimerSubmit}>
          {buttonState()}
          <input type="submit" className="clear-btn control-btn button large hollow" value="Clear" ref="clearButton" onClick={this.onClearClick}/>
        </form>
      </div>
    )
  }
})

module.exports = Controls;
