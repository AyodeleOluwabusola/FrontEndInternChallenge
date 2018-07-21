import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayMore extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: [],
            description: ''
        }
        //onInputChange = this.onInputChange.bind(this);
        this.changeDescription = this.changeDescription.bind(this)
        this.onInputChange = this.onInputChange.bind(this)

    }

    changeDescription() {
        this.props.createPeopleData(this.state.description);
        //e.target.value= user.description
    }

    onInputChange(event) {
       return this.setState({
            description:event.target.value
        })
    }
    
    componentWillMount(){
        let userData = this.props.people[0].persons.filter((user) => {
            return user.id === this.props.match.params.personId;
        });
        
        // changeDescription(){
        //     this.props.createPeopleData();
        // }

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
                           <img src={user.photo} />
                       </div>
                       <form>
                           <div>{user.description || ''}</div>
                           <div className="col-md-9">
                               <label>Description</label>
                               <input 
                               type='text' 
                               className="form-control"
                               onChange={this.onInputChange}
                               value={this.state.description} />
                               <button type= 'submit' className= "btn btn-primary"  onClick={this.changeDescription}> Edit description </button>
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
