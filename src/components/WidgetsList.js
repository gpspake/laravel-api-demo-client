import React from 'react';
import WidgetItem from './WidgetItem'

const WidgetsList = React.createClass({
  componentWillMount() {
    this.props.dispatchFetchWidgets();
  },
  renderWidgets(widgets) {
    return widgets.map((widget) => {
      return (
        <WidgetItem key={widget.id} name={widget.name} />
      )
    })
  },
  render () {
    const {widgets, loading, error} = this.props.widgetsList;

    if (loading) {
      return <div className="container"><h1>Widgets</h1><h3>Loading...</h3></div>
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    if (this.props.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <h1>Widgets</h1>
        <ul className="list-group">
          {this.renderWidgets(widgets)}
        </ul>
      </div>
    )
  }
})

export default WidgetsList
