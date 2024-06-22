import React, { Component } from 'react';
// import './contact.css';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {

    state = {
        showContactInfo: false
    }

    onDeleteClick = (id, dispatch) => {
        // this.props.deleteClickHandler();
        dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
    // Creating prop types
    // static propTypes = {

    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     phone: PropTypes.string.isRequired
    // };

    // Creating default props
    // static defaultProps = {
    // name: 'Nishant',
    // };

    render() {
        // const { contact } = this.props;
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;



        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{' '} <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i><i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i></h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{phone}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>



        )
    }
}

//Creating Prop types
Contact.propTypes = {
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
}

//Creating Default props

// Contact.defaultProps = {
//   name: 'Nishant'
// };
export default Contact;
