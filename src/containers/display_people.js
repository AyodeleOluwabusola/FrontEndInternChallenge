    import React, { Component } from 'react';
    import { connect } from 'react-redux';

    class DisplayPeople extends Component {
        renderPeopleData({ id, name, photo }) {
            return (
                <tr key={id}>
                <td><img src={photo} alt={name} /></td>
                <td>{name}</td>
                </tr>
            );
        }

        render() {
            console.log(this.props.people)
            const renderPeople = this.props.people[0] ? this.props.people[0].persons.map(this.renderPeopleData) : null;
            return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Photo</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>{renderPeople}</tbody>
                </table>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            people: state.people,
        };
    }

    export default connect(mapStateToProps)(DisplayPeople);







// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// //import people from './people';

// class DisplayPeople extends Component{
//     //  constructor(props){
//     //     super(props);
//     // }

//     renderPeopleData(peopleData){
           
//         //console.log(peopleData.persons.length)
//         for (let i = 0; i <=peopleData.persons.length; i++){
//             var displayPeople = peopleData.persons
//             console.log(peopleData.persons.length)
        
        
//          return(
//                 <tr key={displayPeople[i].name[i]}>
//                     <td>{displayPeople[i].name}</td>
//                  <td><img src={displayPeople[i].photo_thumb} alt={displayPeople[i].name}/></td>
//                     <td>{displayPeople[i].age}</td>
//                 </tr>
//                 // <tr key={name1[1]}>
//                 //     <td>{name1[1]}</td>
//                 //     <td>{age1[1]}</td>
//                 // </tr>
      
//             );
        
//         }
//     }



//      render(){
//         return(
//              <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Image</th> 
//                         <th>Age</th>      
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.props.people.map(this.renderPeopleData)}
//                 </tbody>
//              </table>
//         );
//     }
// }


// function mapStateToProps(state) {
//     return {
//         people: state.people
//     }
// }

// export default connect(mapStateToProps)(DisplayPeople);
