import React from 'react';
import PropTypes from 'prop-types';
import {DeleteUser} from "./DeleteUser";



export const UsersList = (props) => {
    UsersList.propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            age: PropTypes.number

        })),
        onUserCreate: PropTypes.func.isRequired
    };

    return (<ul>
        {props.users.length &&
        (props.users.map(user => (
            <li key={user.id}>{user.id}:{user.username} -- {user.age}
                <button onClick={(e)=>{props.onUserDelete(user)}}>
                    Delete User!
                </button>
            </li>
        )))}
    </ul>);
}


