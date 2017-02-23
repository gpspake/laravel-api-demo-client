import React from 'react'
import {Provider} from 'react-redux'
import store from './Redux/store'
import WidgetList from './Widgets/WidgetList'

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WidgetList />
        </div>
      </Provider>
    );
  }
})

export default App;
