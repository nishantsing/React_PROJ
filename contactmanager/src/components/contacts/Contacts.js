import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
    // Before using context, the state is stored here.
    // state = {
    //     contacts: [
    //         {
    //             id: 1,
    //             name: 'John',
    //             email: 'john@gmail.com',
    //             phone: '123-456'
    //         },
    //         {
    //             id: 2,
    //             name: 'Karen',
    //             email: 'karen@gmail.com',
    //             phone: '789-456'
    //         },
    //         {
    //             id: 3,
    //             name: 'Henry',
    //             email: 'henry@gmail.com',
    //             phone: '456-789'
    //         }
    //     ]

    // }
    // This will happen using action which is within context   
    // deleteContact = id => {
    //     const { contacts } = this.state;
    //     const newContacts = contacts.filter(contact => contact.id !== id);
    //     this.setState({
    //         contacts: newContacts
    //     })
    // }

    render() {

        return (
            <Consumer>
                {/* this value is from context and in context value contains the state */}
                {value => {
                    const { contacts } = value
                    return (
                        < React.Fragment >
                            {
                                contacts.map(contact => (
                                    <Contact key={contact.id}
                                        // name={contact.name} email={contact.email} phone={contact.phone}
                                        contact={contact}

                                    // deleteClickHandler={this.deleteContact.bind(this, contact.id)}

                                    />
                                ))
                            }
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )

        //Before Using Context
        // const { contacts } = this.state;

        // return (
        //     <React.Fragment>
        //         {contacts.map(contact => (
        //             <Contact key={contact.id}
        //                 // name={contact.name} email={contact.email} phone={contact.phone}
        //                 contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        //         ))}
        //     </React.Fragment>
        // )
    }
}


export default Contacts;