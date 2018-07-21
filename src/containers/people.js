import React, {Component} from 'react';
import {fetchData} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


class PeopleList extends Component{
    constructor(props){
        super(props);
        this.state= {content: ""}

        this.peopleDetails= this.peopleDetails.bind(this);
    }
    peopleDetails(){
        this.props.fetchData();
    }

    render(){
        return(
        <div>
          <button className= 'btn btn-primary' onClick={this.peopleDetails}>People Details</button>
              {this.props.people}
        </div>
        )
    }
} 

// function mapStateToProps(state){
//     return{
//         people: state.people
//     }
// }

function mapDispatchProps(dispatch){
    return bindActionCreators( {fetchData}, dispatch);
}

export default connect(null, mapDispatchProps)(PeopleList)