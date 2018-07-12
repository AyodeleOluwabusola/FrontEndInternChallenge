import React, {Component} from 'react';
import { connect } from 'react-redux';
//import people from './people';

class DisplayPeople extends Component{
    //  constructor(props){
    //     super(props);
    // }

    renderPeopleData(peopleData){
        //console.log(peopleData.persons.length)
        for(let i=0; i<=peopleData.persons.length; i++){
            let name=[];
            const name1 = peopleData.persons.map(person=> person.name);
            const age1 = peopleData.persons.map(person => person.age);

            //const age = peopleData.persons[i].age;
            //const name1 = peopleData.persons[i].name;
            //name.push(name1)
            // console.log(name1)
        
        return(
         <tr key ='persons'>
                <td>{name1[0]}</td>
                <td>{age1[0]}</td>           
         </tr>
            <tr key='persons'>
                <td>{name1[1]}</td>
                <td>{age1[1]}</td>
            </tr>
            <tr key='persons'>
                <td>{name1[2]}</td>
                <td>{age1[2]}</td>
            </tr>
            <tr key='persons'>
                
                <td>{name1[3]}</td>
                <td>{age1[3]}</td>
            </tr>
            <tr key='persons'>
                <td>{name1[4]}</td>
                <td>{age1[4]}</td>
            </tr>
            <tr key='persons'>
                <td>{name1[5]}</td>
                <td>{age1[0]}</td>
            </tr>
            <tr key='persons'>
                <td>{name1[6]}</td>
                <td>{age1[0]}</td>
            </tr>
            
        )     
    }
}

     render(){
         return(
             <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>      
                    </tr>
                </thead>
                <tbody>
                    {this.props.people.map(this.renderPeopleData)}
                </tbody>
             </table>
         )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps)(DisplayPeople);
