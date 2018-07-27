import React, { Component } from 'react';
import DisplayPeople from '../components/display_people';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';


class App extends Component {
  componentWillMount() {
    return this.props.fetchData();
  }

  render() {
    return (
      <div>
        <DisplayPeople />
      </div>
    );
  }
}


const mapDispatchProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(null, mapDispatchProps)(App)