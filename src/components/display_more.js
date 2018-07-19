import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayMore extends Component{
    state = {
        userData:[],
    }

    componentWillMount(){
        let userData = this.props.people[0].persons.filter((user) => {
            return user.id === this.props.match.params.personId;
        });

        if (userData.length) {
            this.setState({
                userData: [
                    ...this.state.userData,
                    ...userData
                ]
            });
        }

        console.log('user', this.state.userData)
    }

    render() {
       let [ user ] = this.state.userData; 
       if(user){
           return(
               <div className="container">
                   <div className="row">
                       <div className="col-md-3">
                           <img src={user.photo} alt={user.id} />
                       </div>
                       <form>
                           <div className="col-md-9">
                               <label>Description</label>
                               <input type='text' className="form-control" value={user.description || "default description"} />
                               <button> Edit description </button>
                           </div>
                       </form>
                   </div>
               </div>
           );
       }
       return <p>Loading...</p>;
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    };
}



export default connect(mapStateToProps)(DisplayMore);