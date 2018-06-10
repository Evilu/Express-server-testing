import React from 'react';
import PropTypes from 'prop-types';


export const DeleteUser = (props) =>{
    DeleteUser.propTypes = {
        onUserDelete: PropTypes.func.isRequired
    };


    return (<button onClick={()=>props.onUserDelete(props.id)}>
        Delete User!
    </button>);
};

