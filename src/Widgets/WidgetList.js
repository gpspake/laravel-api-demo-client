import React from 'react';
import { connect } from 'react-redux'

const WidgetList = React.createClass({
  render () {
    return (
      <div className="widgets">
        Widgets go here
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets
  }
}

export default connect(mapStateToProps)(WidgetList)
