var React = require('react');

var Clock = ({mins, secs}) => {
  return (
    <div>
      <div className="clock-face small-centered">
        <div className="clock-digits">{mins}:{secs}</div>
      </div>
    </div>
  )
}

module.exports = Clock;
