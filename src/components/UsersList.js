import React from 'react';
import PropTypes from 'prop-types';
import {DeleteUser} from "./DeleteUser";



export const UsersList = (props) => {
    UsersList.propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            age: PropTypes.number
        }))
    };

    return (<ul>
        {props.users.length &&
        (props.users.map(user => (
            <li key={user.id}>{user.id}:{user.username} -- {user.age}
                <DeleteUser onUserDelete={props.onUserDeleteHandler} />
            </li>
        )))}
    </ul>);
}


