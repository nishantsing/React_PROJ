import React from 'react';
import PropTypes from 'prop-types';

//Arrow fn.
const Header = (props) => {
    const { branding } = props;
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div>
        //     <h1 style={{ color: 'red', fontSize: '50px' }}>{branding}</h1>
        //     <h1>{branding}</h1>

        //     <h1 style={headingStyles}>{branding}</h1>

        // </div>
    )
}


//Normal fn.
// function Header() {
//     return (
//         <div>
//             <h1>Contact Manager</h1>
//         </div>
//     )
// }

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

// Way of giving inline style in JSX 
// const headingStyles = {
//     color: 'red',
//     fontSize: '50px'
// }
export default Header;