import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DisplayPeople extends Component {
    
    renderPeopleData({ id, name, photo_thumb }) {
        return (
            <tr key={id}>
                <td><a href={photo_thumb}><img src={photo_thumb} alt={name} /> </a></td>
                <td>{name}</td>
                    <td><Link to={`/persons/${id}`}> Show More</Link></td>
            </tr>
        )
    }

    render() {
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

const mapStateToProps = (state) => {
    return {
       people:state.people
    }
}

export default connect(mapStateToProps)(DisplayPeople);

