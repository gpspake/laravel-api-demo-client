import {connect} from 'react-redux'
import {fetchWidgets, fetchWidgetsSuccess, fetchWidgetsFailure} from '../Redux/actionCreators'
import WidgetsList from '../components/WidgetsList'

const mapStateToProps = (state) => {
  return {
    widgetsList: state.widgetsList
  }
}

const mapDispatchToProps = (dispatch) => {

  const dispatchFetchWidgetsSuccess = (data) => {
    dispatch(fetchWidgetsSuccess(data))
  }
  const dispatchFetchWidgetsFailure = (data) => {
    dispatch(fetchWidgetsFailure(data))
  }

  return {
    dispatchFetchWidgets () {
      dispatch(fetchWidgets()).payload.then((response) => {
          let data = response.data ? response.data : {data: 'Network Error'}
          !response.error ? dispatchFetchWidgetsSuccess(data) : dispatchFetchWidgetsFailure(data)
        },
        (response) => {
          dispatchFetchWidgetsFailure(response)
        }
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsList)
