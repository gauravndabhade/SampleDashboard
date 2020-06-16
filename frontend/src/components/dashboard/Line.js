import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";
import axios from "axios";
import { SET_GRAPH_DETAILS } from "../../actions/types";


class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchGraphDetails();
  }

  render() {
    return (
      <div>
        {this.props.isLoadingData ? (
          "Loading . . ."
        ) : (
            <Line
              data={this.props.data}
            />
          )}
      </div>
    );
  }
}

// Create Action
function setGraphDetails(data) {
  console.log('SET_GRAPH_DETAILS')
  console.log(data)
  return {
    type: SET_GRAPH_DETAILS,
    payload: data
  };
}

// Call API 
function fetchGraphDetails() {
  return function (dispatch) {
    return axios.get("/apis/line_chart_json/").then(({ data }) => {
      dispatch(setGraphDetails(data));
    });
  };
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});

export default connect(
  mapStateToProps,
  {
    fetchGraphDetails
  }
)(App);