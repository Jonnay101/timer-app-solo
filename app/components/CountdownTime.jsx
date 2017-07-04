var React = require('react');

var CountdownTime = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var mins = this.refs.timeMins.value;
    var secs = this.refs.timeSecs.value;

    function notZero (thing) {
      if (!isNaN(thing)){
        if (thing.length < 1) {
          return 0;
        } else {
          return thing;
        }
      } else {
        console.log('not a number')
        return 0;
      }
    }

    if (mins > 99) {
      mins = 99;
    }

    if (secs > 59) {
      secs = 59;
    }

    var time = {
      secs: notZero(secs),
      mins: notZero(mins)
    }

    this.props.onTimeInput(time);

    console.log(time.mins, time.secs)

  },
  render: function () {
    //var {} = this.props;

    return (
      <div className="">
        <form >
          <input type="number" className="time-input" ref="timeMins" onClick={this.onClearClick} placeholder="mins" onChange={this.onFormSubmit}/>
          
          <input type="number" className="time-input" ref="timeSecs" onClick={this.onClearClick} placeholder="secs" onChange={this.onFormSubmit}/>
        </form>
      </div>
    )
  }
})

module.exports = CountdownTime;
