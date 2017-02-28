import React from 'react'
import {Provider} from 'react-redux'
import store from './Redux/store'
import WidgetsList from './containers/WidgetsListContainer'

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WidgetsList />
        </div>
      </Provider>
    );
  }
})

export default App;
