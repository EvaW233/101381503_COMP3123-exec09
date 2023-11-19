import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=2`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {this.state.persons.map((person) => (
            <li
              key={person.login.uuid}
              style={{
                marginBottom: '5px',
                backgroundColor: 'turquoise',
                padding: '5px',
                borderRadius: '1px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'row', 
              }}
            >
              <img
                src={person.picture.medium}
                alt="User Portrait"
                style={{ borderRadius: '50%', marginRight: '15px', width: '200px', height: '200px' }} // Adjusted size
              />
              <div>
                <div style={{ borderBottom: '2px solid #fff', marginBottom: '10px', paddingBottom: '10px', width: '100%' }}>
                  <h3 style={{ fontSize: '16px', margin: '0' }}>
                    {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                  </h3>
                </div>
                <p>
                  <strong>User Name:</strong> {person.login.username}
                </p>
                <p>
                  <strong>Gender:</strong> {person.gender}
                </p>
                <p>
                  <strong>Time Zone Description:</strong> {person.location.timezone.description}
                </p>
                <p>
                  <strong>Address:</strong>{' '}
                  {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}
                </p>
                <p>
                  <strong>Email:</strong> {person.email}
                </p>
                <p>
                  <strong>Birth Date and Age:</strong>{' '}
                  {`${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age} years)`}
                </p>
                <p>
                  <strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Phone#:</strong> {person.phone}
                </p>
                <p>
                  <strong>Cell#:</strong> {person.cell}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonList;
