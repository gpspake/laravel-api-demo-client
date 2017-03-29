import React from 'react';

const WidgetItem = React.createClass({
  render () {
    return (
      <li className="widget">
        {this.props.name}
      </li>
    )
  }
});

export default WidgetItem
