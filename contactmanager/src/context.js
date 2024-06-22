import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John',
                email: 'john@gmail.com',
                phone: '123-456'
            },
            {
                id: 2,
                name: 'Karen',
                email: 'karen@gmail.com',
                phone: '789-456'
            },
            {
                id: 3,
                name: 'Henry',
                email: 'henry@gmail.com',
                phone: '456-789'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))


    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer