import React, { Component } from 'react';
import PeopleList from '../containers/people';
import DisplayPeople from '../containers/display_people'

export default class App extends Component {
  render() {
    return (
      <div>
        <PeopleList/>
        <DisplayPeople/>
      </div>
    );
  }
}
